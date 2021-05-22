
const db = require('./models/db.js');

const collection = "products";

db.createDatabase();

var product = {
    productName : 'Nike Fly.By Mid',
    price : 2090,
    review : 3
};

db.insertOne(collection, product);

var product = {
    productName : 'Nike Downshifter',
    price : 2090,
    review : 4
};

db.insertOne(collection, product);

var product = {
    productName : 'iPhone 12 Pro',
    price : 79999,
    review : 3
};

db.insertOne(collection, product);

var product = {
    productName : 'Galaxy S21 5G',
    price : 43999,
    review : 5
};

db.insertOne(collection, product);

var product = {
    productName : 'Uniqlo (UT) M.July Printed T-Shirt (Short Sleeve) Mickey Mouse',
    price : 699,
    review : 3
};

db.insertOne(collection, product);



