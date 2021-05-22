
const db = require('./models/db.js');

const collection = "users";

db.createDatabase();

var user = {
    email : 'user1@gmail.com',
    pw : 'user1',
    name : 'user1'
};

db.insertOne(collection, user);

var user = {
    email : 'user2@gmail.com',
    pw : 'user2',
    name : 'user2'
};

db.insertOne(collection, user);

var user = {
    email : 'user3@gmail.com',
    pw : 'user3',
    name : 'user3'
};

db.insertOne(collection, user);

var user = {
    email : 'user4@gmail.com',
    pw : 'user4',
    name : 'user4'
};

db.insertOne(collection, user);

var user = {
    email : 'user5@gmail.com',
    pw : 'user5',
    name : 'user5'
};

db.insertOne(collection, user);
