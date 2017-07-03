/**
*This file is the main server for CardsGames..
*Here we will initialize the different games
*according to the request of user..
*@author:-Navjot Singh Dhaliwal
*/
var express = require("express");
var io = require("socket.io");
var ioEvents = require("./includes/IoEvents.js")
var Router = require("./includes/Routes.js").Router;
var server = express();
var PORT = process.env.PORT || 8080; 
var MagicGame = require("./includes/MagicGame.js");
server.use(express.static('public'))
server.set("view engine","ejs");
server.use(express.static('public'));
io = io.listen(server.listen(PORT));
ioEvents.RegisterEvents(io);
server.use(function(request,response){
	Router(request,response);
});
console.log("This application is listening on " +PORT);