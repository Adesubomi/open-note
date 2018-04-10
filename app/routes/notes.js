
module.exports = (app, db) => {

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
};