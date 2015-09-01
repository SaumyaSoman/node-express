exports.home=function home(request,response){
	response.setHeader("Content-Type" ,"text/html");
	response.send("<html><body><h1>Welcome!</h1><form action=/play method=get><input type=text name=username><input type=submit value=Play></form><p><img src='sword.png'></p></body></html>");
};