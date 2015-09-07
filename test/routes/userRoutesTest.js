require ('../testHelper.js');

var User=App.model('user');
var superTest=require('supertest');

describe(__filename, function(){

	var Test;

	beforeEach(function(){
		Test={};
	});

	describe("Having a user in the database", function(){

		beforeEach(function(done){

			Test.userData={
			email:"abc@xyz.com",
			password:"override"
			};

			Test.user=new User({email:Test.userData.email, passwordHash:Test.userData.password});

			Test.user.save(function(err){
				assert.ifError(err);
				done();
			});

		});
		
		it("create user which valid email id", function(done){
			superTest(App.app)
			.post('/signup')
			.send({email:'aa@aas.com', password:'aaa'})
			//.expect(200)
			.end(function(err,res){
				if(err){
					//console.log("error hmm:", err);
					//console.log(res.body);
					assert.ifError(err);
				}else{
					User.find({email:"aa@aas.com"},function (err,users) {
						//console.log("error here");
						assert.ifError(err);

						assert(users[0]);
						assert.equal(users[0].email,"aa@aas.com");
						done();
						
					})
				}
			})
		});
		/*
		it("create user with duplicate email id", function(done){
			superTest(App.app)
			.post('/signup')
			.send({email:"abc@xyz.com", password:"override"})
			.expect(422)
			.end(function(err,res){
				if(err){
					console.log("error :", err);
					console.log(res.body);
					assert.ifError(err);
				}else{
					User.find({email:"aa@a.com"},function (err,users) {
						done();
						
					})
				}
			})
		})
*/
	})


	
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