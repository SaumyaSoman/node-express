var mongoose = require('mongoose');
var validate = require('mongoose-validate');
var bcrypt= require('bcrypt');
var SALT_WORK_FACTOR=4;
var REQUIRED_PASSWORD_LENGTH=6;

function validateLength(value){
	return (value && value.length >= REQUIRED_PASSWORD_LENGTH);
}


var schema = mongoose.Schema({
    	email: {type : String, required:true, unique:true, validate:[validate.email,'is not a valid email address']},
    	passwordHash:{type : String, required:true, validate:[validateLength, "password should be of "+REQUIRED_PASSWORD_LENGTH+" characters."]}
	});

schema.pre('save', function(next){
	var self= this;
	if(!self.isModified('passwordHash')){
		return next();
	}
	bcrypt.hash(self.passwordHash, SALT_WORK_FACTOR,function(err,hash){
		if(err) return next(err);
		self.passwordHash=hash;
		next();
	})
})

schema.statics.findByEmailAndPassword= function findByEmailAndPassword(email, password, cb){
	this.findOne({email:email}, function(err,user){
		if(err) return cb(err);
		if(!user) return cb();
		bcrypt.compare(password,user.passwordHash,function(err,res){
			return cb(err, res? user:null);
		})
	})
}

schema.set('autoIndex', App.env!=='production');

var Model=  mongoose.model('User', schema);

module.exports=Model;