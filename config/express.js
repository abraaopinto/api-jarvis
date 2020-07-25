const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
const mongoose = require('mongoose');

const MONGOOSE_USER = 'u_api_jarvis'
const MONGOOSE_PWD = 'GGu86Jao89Peu40W'
const MONGOOSE_URI = `mongodb+srv://${MONGOOSE_USER}:${MONGOOSE_PWD}@cluster0-3ixpm.mongodb.net/jarvis?retryWrites=true&w=majority`


module.exports = () => {
  const app = express();

  mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  app.set('port', process.env.PORT || config.get('server.port'));

  app.use(bodyParser.json());

  return app;
};