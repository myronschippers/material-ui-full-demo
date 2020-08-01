const express = require('express');
const chalk = require('chalk');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "creatures";`;

  pool.query(queryText)
    .then((dbResponse) => {
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log('GET error:', err);
      res.status(500);
      res.send(err);
    });
});

router.get('/details/:id', (req, res) => {
  const queryText = `SELECT creatures.*,
      array_agg(attributes.tag) as attributes,
      (
        SELECT type.label as type_label FROM creatures
        JOIN type ON type.id = creatures.type_id
        WHERE creatures.id = $1
      ),
      (
        SELECT array_agg(habitat.label) as habitats FROM creatures
        LEFT JOIN creatures_habitat ON creatures.id = creatures_habitat.creatures_id
        LEFT JOIN habitat ON creatures_habitat.habitat_id = habitat.id
        WHERE creatures.id = $1
        GROUP BY creatures.id
      )
    FROM creatures
    LEFT JOIN creatures_attributes ON creatures.id = creatures_attributes.creatures_id
    LEFT JOIN attributes ON creatures_attributes.attributes_id = attributes.id
    WHERE creatures.id = $1
    GROUP BY creatures.id;`;
  const creatureId = req.params.id;

  pool.query(queryText, [creatureId])
    .then((dbResponse) => {
      res.send(dbResponse.rows[0]);
    })
    .catch((err) => {
      console.log('GET details error:', err);
      res.status(500);
      res.send(err);
    });
});

router.put('/details/:id', (req, res) => {
  const creatureData = req.body;
  const creatureId = req.params.id;
  const queryText = `UPDATE "creatures"
    SET
      name = $2,
      physical_description = $3,
      background = $4,
      img_path = $5,
      type_id = $6
    WHERE id = $1;`;

  pool.query(queryText, [
    creatureId,
    creatureData.name,
    creatureData.physical_description,
    creatureData.background,
    creatureData.img_path,
    parseInt(creatureData.type_id),
  ])
    .then((dbResponse) => {
      res.status(200);
      res.send({ id: creatureId });
    })
    .catch((err) => {
      console.log('PUT error:', err);
      res.status(500);
      res.send(err);
    });
});

router.post('/', (req, res) => {
  const creatureData = req.body;
  res.status(201);
  res.send({ id: 0 });
});

router.delete('/:id', (req, res) => {
  const creatureData = req.body;
  const creatureId = req.params.id;
  res.status(200);
  res.send({ id: creatureId });
});

module.exports = router;