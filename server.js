var express= require('express');
var app= express();
var port= 3000;

app.get('/' , function(request,response){
	response.setHeader("Content-Type" ,"text/html");
	response.send("<html><body><h1>Welcome!</h1><form action=/play><input type=submit value=Play></form></body></html>");
})

app.get('/play' , function(request,response){
	response.setHeader("Content-Type" ,"text/html");
	response.send("<html><body><h1>Are you Saumya?</h1><form action=/play method='post'><input type=submit value=Play></form></body></html>");
})

app.post('/play' , function(request,response){    
	response.setHeader ("Content-Type" ,"text/html");
	response.send("<html><body><h1>You can start playing!</h1><form action=/play method='post'><input type=submit value=Play><p> You have found a <a href='/loot/1'>loot</a></p></form></body></html>"); 
})

app.get('/loot/:id' , function(request,response){
	var id=request.params.id;
	response.setHeader("Content-Type" ,"text/html");
	response.send("<html><body><h1>You have got loot number"+id+"</h1></body></html>");
})

app.listen(port);

console.log("Server running at port "+port);