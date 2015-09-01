exports.getloot=function getloot(request,response){    
	var id=request.params.id;
	response.setHeader("Content-Type" ,"text/html");
	response.send("<html><body><h1>You have got loot number"+id+"</h1></body></html>");
};