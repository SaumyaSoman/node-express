function ensureAuthenticated(req,res, next){
	if(req.isAuthenticated()){
		next();
	}else{
		req.flash('error' , "You have to be logged in to do that.");
		res.redirect('signin');
	}
}

module.exports= ensureAuthenticated;