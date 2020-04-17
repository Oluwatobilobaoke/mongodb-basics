const assert = require('assert');

const updateDocument = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    var oldMovies = { movie: "The Banker", year: "2020", rating: 8 };
    var newMovies = { $set: { movie: "Shaft", year: "2019", rating: 9 } };
    // Update document where 
    collection.updateOne(oldMovies, newMovies, function (err, result) {
        assert.equal(err, null);
        // assert.equal(1, result.result.n);
        console.log("Updated the document with the first Movie etc");
        callback(result);
    });
}

module.exports = updateDocument;