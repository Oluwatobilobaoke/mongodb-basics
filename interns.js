const assert = require('assert');
const insertDocuments = (db, callback) => {
    //GEt the Documents Collections
    const collection = db.collection('myMovies');
    //Insert new documents into thr Collection
    collection.insertMany([
        { movie: "The Banker", year: "2020", rating: 8 }, { movie: "Bad Boys", year: "2020", rating: 7 }, { movie: "The Hunt", year: "2020", rating: 7 }, { movie: "Bloodshot", year: "2020", rating: 7.5 }, { movie: "First Cow", year: "2020", rating: 6.5 }
    ], function (err, result) {
        assert.equal(err, null);
        // assert.equal(5, result.result.n);
        // assert.equal(5, result.ops.length);
        console.log("Inserted 5 documents into the collection");
        // console.log(result);
        callback(result);
    });
}

module.exports = insertDocuments;