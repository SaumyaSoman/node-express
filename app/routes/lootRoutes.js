exports.getloot=function getloot(request,response){    
	var id=request.params.id;
	response.render("loot/loot" ,{lootid:id});
};