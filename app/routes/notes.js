const ObjectID = require("mongodb").ObjectID;

module.exports = (app, db) => {

    // store
    app.post("/note", (req, res) => {
        let note = {
            title: req.body.title,
            message: req.body.message,
        };

        db.collection("notes").insert(note, (err, result) => {

            if (err) {
                console.log(err);
                res.send({ error: "An error occured. Could no store your note"});
            }
            else {

                console.log(result);
                res.send(result.ops[0]);
            }

        });
    });

    // delete
    app.delete("/note/:id", (req, res) => {

        let resourceId = req.params.id;
        let resDetails = { _id: new ObjectID(resourceId) };

        db.collection("notes").remove(resDetails, (err, data) => {
            if (err) {
                res.send({error:"An error has occurred"});
            } else {
                res.send("Note " + resourceId + " deleted!");
            } 
        });
    });

    // update
    app.put("/note/:id", (req, res) => {

        let resourceId = req.params.id;
        let resWhere = { _id: new ObjectID(resourceId) };
        let note = {
            title: req.body.title,
            message: req.body.message,
        };

        db.collection("notes").update(resWhere, note, (err, response) => {

            if (err) {
                res.send({error: "An error occurred"});
            }
            else {
                res.send(`Note ${resourceId} has been updated.
                    ${response}`);
            }
        });
    });


    // show
    app.get("/note/:id", (req, res) => {

        let id = req.params.id;
        let details = { _id: new ObjectID(id) };

        db.collection("notes").findOne(details, function(err, data) {

            if (err) {
                res.send({error: "An error occured"});
            }
            else {
                res.send(data);
            }
        });
    });
};