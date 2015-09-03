process.env.NODE_ENV='test';
require ('../config/application.js');

var async=require('async');
var mongoose=require('mongoose');

global.assert=require('assert');

App.Test={
	clearDB: function(done){

		var models=[
			"User"
		]

		async.each(
			models,
			function(modelName,cb){
				var model=mongoose.model(modelName);
				model.remove({},cb);
			},
			function(err){
				assert.ifError(err);
				done();
			}
		)
	}
}

beforeEach(function(done){
	App.Test.clearDB(done);
})