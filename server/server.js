const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// IMPORTED ROUTES
const creaturesRouter = require('./routes/creatures.router');
const attributesRouter = require('./routes/attributes.router');
const habitatRouter = require('./routes/habitat.router');
const typesRouter = require('./routes/types.router');

//
// MIDDLEWARE
// ------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//
// ROUTES REGISTRATION
// ------------------------------
app.use('/api/creatures', creaturesRouter);
app.use('/api/attributes', attributesRouter);
app.use('/api/habitat', habitatRouter);
app.use('/api/types', typesRouter);

//
// STATIC FILES REGISTRATION
// ------------------------------
app.use(express.static('build'));

//
// KICK OFF SERVER
// ------------------------------
app.listen(PORT, () => {
  console.log(`Listening on PORT:`, PORT);
});
