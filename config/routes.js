module.exports=function(app){

	var homeRoutes= App.routes("homeRoutes");
	app.get('/' , homeRoutes.home);

	var playRoutes= App.routes("playRoutes");
	app.get('/play' , playRoutes.index);
	app.post('/play' , playRoutes.create);
	app.put('/play/:id' , playRoutes.update);

	var lootRoutes= App.routes("lootRoutes");
	app.get('/loot' , lootRoutes.index);
	app.get('/loot/:id' , lootRoutes.getloot);

	var userRoutes= App.routes("userRoutes");
	app.get('/signup' , userRoutes.new);
	app.post('/signup' , userRoutes.create);

}