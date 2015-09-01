exports.index=function confirm(request,response){
	response.setHeader("Content-Type" ,"text/html");
	response.send("<html><body><h1>Are you sure, "+request.session.username+"?</h1><form action=/play method='post'><input type=submit value=Enter name to play></form></body></html>");
};

exports.create=function createGame(request,response){  
	response.setHeader ("Content-Type" ,"text/html");
	response.send("<html><body><h1>You can start playing!</h1><form action=/play/42 method='post'><input type='hidden' name='_method' value='put'><button type=submit>Cheat</button></form><form action=/play method='post'><input type=submit value=Play></form><p> You have found a <a href='/loot/1'>loot</a></p></body></html>"); 
}

exports.update=function updateGame(request,response){    
	response.setHeader ("Content-Type" ,"text/html");
	response.send("<html><body><h1>Its a secret!</h1></body></html>"); 
}