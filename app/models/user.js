var mongoose = require('mongoose');
var validate = require('mongoose-validate');

var schema = mongoose.Schema({
    	email: {type : String, required:true, unique:true, validate:[validate.email,'is not a valid email address']}
	});

schema.set('autoIndex', App.env!=='production');

var Model=  mongoose.model('User', schema);

module.exports=Model;