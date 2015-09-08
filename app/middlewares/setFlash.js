function setFlash(request, response,next){

	response.locals.flash = {
		notice : request.flash('notice'),
		error : request.flash('error')
	}

	next();
}

module.exports=setFlash;