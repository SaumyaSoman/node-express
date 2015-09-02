
var User=App.model('user');

exports.new=function newUser(request,response){
	response.render("users/new");
};


exports.create=function addUser(request,response){
	var u=new User({email:request.body.email});
	u.save(function(err){
		if(err) {
			response.status(422).send("Error in saving to database", err.message);
		}
		else{
			response.status(200).send("Welcome to the game!");
		}
	})
};