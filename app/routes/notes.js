
module.exports = (app, db) => {

    app.post("/note", (req, res) => {

        res.send("You should create a Note!");
    });
};