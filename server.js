/*var express= require('express');
var app= express();
var port= 3000;
var handlers=require('./handlers.js');
var middleware=require('./middleware.js');
var routes=require('./routes.js');


middleware(app,express);
routes(app,handlers);

app.listen(port);

console.log("Server running at port "+port);*/

require("./config/application.js");

App.start();

