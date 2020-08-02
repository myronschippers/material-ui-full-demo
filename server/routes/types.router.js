const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  const queryText = `SELECT *
    FROM type
    ORDER BY label ASC;`;

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

module.exports = router;