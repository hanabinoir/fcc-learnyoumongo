var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function(err, db) {
    // db gives access to the database
    var parrots = db.collection('parrots');
    var results = parrots.find({age: {$gt: parseInt(process.argv[2])}});
    results.toArray(function (err, documents) {
        if (err) {
            return console.error(err);
        }

        console.log(documents);
    });
    db.close();
});
