
const express = require("express")
const MongoClient = require("mongodb").MongoClient;
const BodyParser = require("body-parser");
const mongoDb = require("./config/db").mongodb;

const app = express();

app.use( BodyParser.urlencoded({extended: true}) );

const port = 8002;

MongoClient.connect(mongoDb.url, (err, database) => {

    if (err) {

        return console.log("database connection error! :(");
    }

    let DB = database.db("open-diary");

    const routes = require("./app/routes")(app, DB);

    app.listen(port, () => {
        console.log(">> Server Started");
    });

})
