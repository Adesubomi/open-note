const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const BodyParser = require('body-parser');

const app = express();

app.use( BodyParser.urlencoded({extended: true}) );

const port = 8002;

app.listen(port, () => {
    console.log('We are live');
});
