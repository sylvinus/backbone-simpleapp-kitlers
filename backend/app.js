var express = require("express");
var path = require("path");

var app = express.createServer();

var KITLERDB = [
	
	{
		"url":"/img/2.jpg",
		"name":"Jean-Claude"
	},
	{
		"url":"/img/5.jpg",
		"name":"Jean-Denis"
	},
	{
		"url":"/img/6.jpg",
		"name":"Jean-Philipe"
	},
	{
		"url":"/img/7.jpg",
		"name":"Jean-Christophe"
	},
	{
		"url":"/img/8.jpg",
		"name":"Jean-Saisrien"
	},
	{
		"url":"/img/3.jpg",
		"name":"Jean-Sebastien"
	}
];


app.get('/api/kitler', function(req, res){
    res.send(KITLERDB);
});

app.get('/api/kitler/:i', function(req, res){
    res.send(KITLERDB[parseInt(req.params.i,10)]);
});

app.use(express.static(path.resolve(__dirname,"../")));

console.log("KitlerDB up on http://localhost:3000/");
app.listen(3000);
