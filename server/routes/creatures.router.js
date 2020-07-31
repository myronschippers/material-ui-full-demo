const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "creatures";`;
  res.send([]);
});

router.get('/details/:id', (req, res) => {
  const queryText = `SELECT * FROM "creatures"
    JOIN "type" ON creatures.type_id = type.id
    JOIN "creatures_attributes" ON creatures.id = creatures_attributes.creatures_id
    JOIN "creatures_habitat" ON creatures.id = creatures_habitat.creatures_id
    WHERE "id" = $1;`;
  res.send([]);
});

router.post('/', (req, res) => {
  const creatureData = req.body;
  res.status(201);
  res.send({ id: 0 });
});

router.put('/:id', (req, res) => {
  const creatureData = req.body;
  const creatureId = req.params.id;
  res.status(200);
  res.send({ id: creatureId });
});

router.delete('/:id', (req, res) => {
  const creatureData = req.body;
  const creatureId = req.params.id;
  res.status(200);
  res.send({ id: creatureId });
});

module.exports = router;