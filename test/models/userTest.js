require ('../testHelper.js');

var User=App.model('user');


describe(__filename, function(){
	it("hashes a user\'s password", function(done){
		var u=new User({email:"abc@gmail.com",passwordHash:"saumya"})
		u.save(function(err){
			assert.ifError(err);
			assert(u.passwordHash);
			assert.notEqual(u.passwordHash, 'saumya');
			done();
		});
	})
})