
const mongodb = require('mongodb');
const client = mongodb.MongoClient;
const url = "mongodb://localhost:27017";

const dbName = "trademarket";

const options = {useUnifiedTopology: true};

const database = {

    createDatabase: function() {
        client.connect(url, options, function(error, db){
            if(error) throw error;
                console.log('Database created!');
                db.close;
        });
    },

    createCollection: function() {
        client.connect(url, options, function(error, db){
            if(error) throw error;
            var database = db.db(dbName);
            database.createCollection(collection, function(err, res) {
                if(err) throw err;
                console.log('Collection' + collection + 'created');
                db.close();
            });
        });
    },

    dropCollection: function(){
        client.connect(url, options, function(error, db){
            if(error) throw error;
            var database = db.db(dbName);
            database.collection(collection).drop(function(err, res) {
                if(err) throw err;
                console.log('Collection' + collection + 'deleted');
                db.close();
            });
        });
    },

    insertOne: function(collection, doc){
        client.connect(url, options, function(error, db){
            if(error) throw error;
            var database = db.db(dbName);
            database.collection(collection).insertOne(doc, function(err, res) {
                if(err) throw err;
                console.log('1 Document inserted');
                db.close();
            });
        });
    },

    insertMany: function(collection, docs){
        client.connect(url, options, function(error, db){
            if(error) throw error;
            var database = db.db(dbName);
            database.collection(collection).insertMany(docs, function(err, res) {
                if(err) throw err;
                console.log('Document inserted : ' + res.insertedCount);
                db.close();
            });
        });
    },

    updateOne: function(collection, filter, update){
        client.connect(url, options, function(error, db){
            if(error) throw error;
            var database = db.db(dbName);
            database.collection(collection).updateOne(filter, update,function(err, res) {
                if(err) throw err;
                console.log('1 document updated');
                db.close();
            });
        });
    },

    updateMany: function(collection, filter, update){
        client.connect(url, options, function(error, db){
            if(error) throw error;
            var database = db.db(dbName);
            database.collection(collection).updateMany(filter, update,function(err, res) {
                if(err) throw err;
                console.log('Documents updated: ' + res.modifiedCount);
                db.close();
            });
        });
    },

    deleteOne: function(collection, filter){
        client.connect(url, options, function(error, db){
            if(error) throw error;
            var database = db.db(dbName);
            database.collection(collection).deleteOne(filter, function(err, res) {
                if(err) throw err;
                console.log('1 document deleted');
                db.close();
            });
        });
    },

    deleteMany: function(collection, filter){
        client.connect(url, options, function(error, db){
            if(error) throw error;
            var database = db.db(dbName);
            database.collection(collection).deleteMany(filter, function(err, res) {
                if(err) throw err;
                console.log('document deleted: ' + res.deletedCount);
                db.close();
            });
        });
    },

    findOne: function(collection, query, callback){
        client.connect(url, options, function(error, db){
            if(error) throw error;
            var database = db.db(dbName);
            database.collection(collection).findOne(query, function(err, res) {
                if(err) throw err;
                db.close();
                return callback(res);
            });
        });
    },

    findMany: function(collection, query, callback){
        client.connect(url, options, function(error, db){
            if(error) throw error;
            var database = db.db(dbName);
            database.collection(collection).find(query, {projection: projection}).toArray(function(err, res) {
                if(err) throw err;
                db.close();
                return callback(res);
            });
        });
    }

}

module.exports = database;