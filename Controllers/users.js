var db;
const MongoClient = require('mongodb').MongoClient;
const config = require('../config');

function connect() {
   return MongoClient.connect(config.mongodbUrl);
}

module.exports.validateLogin = function *(req , res , next) {

    var db = yield connect();
    let user = yield db.collection("users").findOne({username:'user1' , password:'user1' , isActive:true});    
    return yield user;

}