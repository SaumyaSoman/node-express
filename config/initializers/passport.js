function init(){

	var passport= require('passport');
	var LocalStrategy= require('passport-local').Strategy;
	var usernameAndPasswordStrategy = new LocalStrategy(
			{usernameField:'email' , passwordField:'password'},
			App.model('user').findByEmailAndPassword
		);
	var serializeUser= App.command('serializeUser')();
	var deserializeUser=App.command('deserializeUser')();

	passport.use(usernameAndPasswordStrategy);
	passport.serializeUser(serializeUser);
	passport.deserializeUser(deserializeUser);

	App.app.use(passport.initialize());
	App.app.use(passport.session());
}

module.exports=init;
