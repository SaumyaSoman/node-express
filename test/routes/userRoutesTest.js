require ('../testHelper.js');

var User=App.model('user');


describe(__filename, function(){
	it("add a new user", function(done){
		var userRoutes= App.routes('userRoutes');
		var req={
			body:{
				email:"test@gmail.com",
				password:'saumya'
			}			
		}

		var res={
			status: function(val){
				this._status=val;
				return this;
			},
			send: function(val){
				assert.equal(this._status,200);
				assert.equal(val,"Welcome to the game!");
				User.count({},function(err,count){
					assert.ifError(err);
					assert.equal(1,count);
					User.find({},function(err,users){
						assert.ifError(err);
						assert.equal(users[0].email,"test@gmail.com");
						done();
					})
				})
			}
		}
		userRoutes.create(req,res);
	})
})