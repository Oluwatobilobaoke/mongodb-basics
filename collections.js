const assert = require('assert');
const insertDocuments = (db, callback) => {
    const collection = db.collection('interns');
    collection.insertOne({ "name": "oluwatobilobaoke" }, (error) => {
        assert.equal(error, null);
        console.log('interns collection created');
    })
}

module.exports = insertDocuments;