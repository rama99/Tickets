var db;
const ObjectID = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;
const config = require('../config');
const co = require('co-express');

function connect() {
    return MongoClient.connect(config.mongodbUrl);
}

module.exports.severities = function * (req , res , next) {

  return  yield  [ {severityID:'' , severityName:'Select a Severity'},
			       {severityID:'LOW' , severityName:'LOW9'},
			       {severityID:'MEDIUM' , severityName:'MEDUIM'},
                   {severityID:'CRITICAL' , severityName:'CRITICAL'}
		];
}

module.exports.statuses = function * (req , res , next) {

    return yield  [ {statusID:'' , statusText:'Select a Status'},
			        {statusID:'OPEN' , statusText:'OPEN'},
			        {statusID:'PENDING' , statusText:'PENDING'},
			        {statusID:'NOT A BUG' , statusText:'NOT A BUG'},
			        {statusID:'CLOSED' , statusText:'CLOSED'}
		         ];

}

module.exports.projects =  function * (req , res , next) {

    db = yield connect();    
    let projects = yield db.collection("projects").find({}).toArray();    
    projects.unshift({projectID:"" , projectName:"Select a ProjectXX"});
    return yield projects;
} 