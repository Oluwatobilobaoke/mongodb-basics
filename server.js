const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const documentInsertion = require('./interns.js');
const documentFinding = require('./findInterns.js');
const documentUpdating = require('./updateInterns.js')

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'oluwatobilobaoke';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Database created by oluwatobilobaoke");

    const db = client.db(dbName)
    documentInsertion(db, function () {
        documentFinding(db, function () {
            documentUpdating(db, function () {
                client.close()
            })
        });
    });
});
