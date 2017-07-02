/**
*This file is the main server for CardsGames..
*Here we will initialize the different games
*according to the request of user..
*@author:-Navjot Singh Dhaliwal
*/
var CardDeck = require("./includes/CreateDeck.js");
var express = require("express");
var io = require("socket.io");
var server = express();
var PORT = process.env.PORT || 8080; 
server.use(express.static('public'))
server.set("view engine","ejs");
server.use(express.static('public'));
io = io.listen(server.listen(PORT));
server.use(function(request,response){
  //The routes go here..
});
console.log("This application is listening on " +PORT);