const assert = require('assert');

const findDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('myMovies');
    // Find some documents
    // collection.find({ movies: 'the banker' }).toArray(function (err, docs) {
    //     assert.equal(err, null);
    //     console.log("Found the following records");
    //     console.log(docs)
    //     callback(docs);
    // });

    // Return the first document
    collection.findOne({}, (error, result) => {
        assert.equal(error, null);
        console.log('First Movie is ', result);
        return result;
    });

    // Return movie with 7 star rating
    collection.find({ rating: 7 }).toArray((error, result) => {
        assert.equal(error, null);
        console.log('Top Rating at 7 movies are ', result);
        return result;
    });


    // return movie titles  only using projection
    collection.find({}, { projection: { _id: 0, movie: 1 } }).toArray((error, result) => {
        assert.equal(error, null);
        console.log('Movie titles only ==> ', result);
        return result;
    });
};

module.exports = findDocuments;