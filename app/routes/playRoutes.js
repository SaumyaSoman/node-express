exports.index=function confirm(request,response){
	var user= {
		username : "Saumya"
	}
	response.render("play/index", {user:user});
};

exports.create=function createGame(request,response){  
	response.render("play/create");
}

exports.update=function updateGame(request,response){    
	response.render("play/update"); 
}
