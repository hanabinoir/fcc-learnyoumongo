var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/' + process.argv[2];
mongo.connect(url, function(err, db) {
    // db gives access to the database
    var users = db.collection('users');
    var doc = {
        "username": "tinatime"
    }
    users.update(
        doc, {
            $set: {
                age: 40
            }
        }
    );
    db.close();
});
