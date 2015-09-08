var User=App.model('user');

exports.new=function newUser(request,response){
	response.render("sessions/new");
};


exports.create=function addUser(request,response){
	User.findByEmailAndPassword(request.body.email,request.body.password, function(err,user){
		if(err) {response.status(422).send("Problem occured : ", err.message);}
		else if(!user){
			response.status(401).send("Email and password did not match");
		}else{
			response.status(200).send("Welcome to the game "+user.email);	
		}
	})
};

exports.destroy=function removeUser(request,response){
	request.logout();
	request.flash('notice' , "You have successfully signed out.");
	response.redirect('/');
};