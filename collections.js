let MongoClient = require('mongodb').MongoClient;

let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;

    let myDatabase = db.db("oluwatobilobaoke");

    myDatabase.createCollection("interns", { useUnifiedTopology: true }, function (err, res) {
        if (err) throw err;
        console.log("interns collection created");
        db.close();
    })
})
