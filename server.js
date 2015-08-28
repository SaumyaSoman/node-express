var express= require('express');
var app= express();
var port= 3000;


//Route Handlers
function home(request,response){
	response.setHeader("Content-Type" ,"text/html");
	response.send("<html><body><h1>Welcome!</h1><form action=/login method=post><input type=text name=username><input type=submit value=Play></form><p><img src='sword.jpg'></p></body></html>");
};

function login(request,response){
	if(request.body.username){
		request.session.username=request.body.username;
		response.redirect("/play");

	}else{
		response.redirect("/");
	}
	
};

function confirm(request,response){
	response.setHeader("Content-Type" ,"text/html");
	response.send("<html><body><h1>Are you sure, "+request.session.username+"?</h1><form action=/play method='post'><input type=submit value=Enter name to play></form></body></html>");
};

function createGame(request,response){  
	response.setHeader ("Content-Type" ,"text/html");
	response.send("<html><body><h1>You can start playing!</h1><form action=/play/42 method='post'><input type='hidden' name='_method' value='put'><button type=submit>Cheat</button></form><form action=/play method='post'><input type=submit value=Play></form><p> You have found a <a href='/loot/1'>loot</a></p></body></html>"); 
}

function updateGame(request,response){    
	response.setHeader ("Content-Type" ,"text/html");
	response.send("<html><body><h1>Its a secret!</h1></body></html>"); 
}

function getloot(request,response){    
	var id=request.params.id;
	response.setHeader("Content-Type" ,"text/html");
	response.send("<html><body><h1>You have got loot number"+id+"</h1></body></html>");
};

//Middlewares
function stoopidLogger(options){
	return function stoopidLoggerInner(req,res,next){
		console.log("Hi, I am called at",req.path);
		next();
	}
}

function ensureAuthenticated(req,res,next){
	
	if(request.session.username){
		next();
	}else{
		response.redirect("/");
	}	
	
}

function notFound(request,response){    
	response.setHeader("Content-Type" ,"text/html");
	response.send(404, "Cannot find your page!");
};

function catchErrors(err,request,response,next){    
	console.log("There was an error");
	next(err);
};

function showErrorPage(err,request,response,next){    
	response.setHeader("Content-Type" ,"text/html");
	response.send(500, "Error page!");
};

function readfromDB(request,response,next){    
	next(new Error("no DB!"));
};


app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.cookieSession({secret:"itsasecret", key:"session"}));
app.use("/", stoopidLogger());
app.use(app.router);
app.use(express.static("images"));
app.use(notFound);
app.use(catchErrors);
app.use(showErrorPage);

//Routes
app.get('/' , home);
app.post('/readfromDB' , readfromDB);
app.post('/login' , login);
app.all('/' , ensureAuthenticated);
app.get('/play' , confirm);
app.post('/play' , createGame);
app.put('/play/:id' , updateGame);
app.get('/loot/:id' , getloot);


app.listen(port);

console.log("Server running at port "+port);

