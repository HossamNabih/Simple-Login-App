
module.exports =   function(api){
	api.get('/new/:name',function(req,res){
		var fname = req.params.name;
		res.send(fname);
	});
}