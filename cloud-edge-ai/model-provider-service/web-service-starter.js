const express = require('express');
const app = express();
const port = 3000;

const modelCtrl = require('./model-ctrl.js');

app.get('/model', modelCtrl.getModel);

app.listen(port);