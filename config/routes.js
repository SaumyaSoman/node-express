var passport = require('passport');

module.exports=function(app){

	var homeRoutes= App.routes("homeRoutes");
	app.get('/' , homeRoutes.home);

	var userRoutes= App.routes("userRoutes");
	app.get('/signup' , userRoutes.new);
	app.post('/signup' , userRoutes.create);

	var sessionRoutes= App.routes("sessionRoutes");
	app.get('/signin' , sessionRoutes.new);
	app.post('/signin' , passport.authenticate('local' , {successRedirect : '/' , failureRedirect : '/signin' , failureFlash : 'Invalid Username and Password!!' }));
	app.get('/signout' , sessionRoutes.destroy);

	//REQUIRES AUTHENTICATION

	app.all('/app/*' , App.middleware('ensureAuthenticated'));

	var playRoutes= App.routes("playRoutes");
	app.get('/app/play' , playRoutes.index);
	app.post('/app/play' , playRoutes.create);
	app.put('/app/play/:id' , playRoutes.update);

	var lootRoutes= App.routes("lootRoutes");
	app.get('/loot' , lootRoutes.index);
	app.get('/loot/:id' , lootRoutes.getloot);
}