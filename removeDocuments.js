var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/' + process.argv[2];
mongo.connect(url, function(err, db) {
    // db gives access to the database
    var collection = db.collection(process.argv[3]);
    var doc = {
        "_id": process.argv[4]
    }
    collection.remove(
        doc
    );
    db.close();
});
