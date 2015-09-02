var itemTemplate=App.model('itemTemplate');
exports.index=function index(request,response){    
	itemTemplate.find({}, function(err,records){
			if(err) response.status(422).send("Error in finding", err.message);
			response.render("loot/loot" ,{loots:records});
	})
};

exports.getloot=function getloot(request,response){    
	var id=request.params.id;
	itemTemplate.findById(id, function(err,loot){
			if(err) response.status(422).send("Error in finding", err.message);
			if(!loot) response.status(400).send("Could not find the loot!");
			response.render("loot/show" ,{loot:loot});
	})
};