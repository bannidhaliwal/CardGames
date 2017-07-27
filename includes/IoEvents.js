/**
 * This class will be exporting the registered 
 * IO events. We will register the actions that 
 * need to be executed on certain events.
 * @param ioObject: IO object to register the events..
 */
//For temp use..
var gamesList = ["Magic Game"];
var ScreenObject = require("./Screen.js").Screen;
module.exports.RegisterEvents = function(ioObject){
	ioObject.on("connection",function(socket){
		var Screen;
		console.log("Connection from user "+socket.id);
		//Initiate the magic game
		socket.on("Initiate Magic Game",function(data){
			Screen = null;
			Screen = new ScreenObject("MagicGame",data);
			console.log("game Initiated");
			var mg = require("./MagicGame.js").MagicGame;
			var MagicGame = new mg(); 
			MagicGame.PrepareDeck();
			MagicGame.PullTwentySevenCards();
			MagicGame.CreateThreeDecks();
			MagicGame.SerializeData((serializedData)=>{
				socket.emit("Magic Game Initialized",{data:serializedData});
			});
			socket.on("Recreate Decks",function(data){
				MagicGame.RearrangeDecks(data.deckWithUserSelectedCard,function(){
					MagicGame.CreateThreeDecks();
					MagicGame.SerializeData((serializedData)=>{
						socket.emit("Redraw",{data:serializedData});
					});
				});
			});
		});

		//This event is to draw the welcome screen
		socket.on("Initiated",function(data){
			Screen = null;
			Screen = new ScreenObject("welcome",data);
			Screen.screenObject.SerializeData((data)=>{
				socket.emit("DrawWelcomeScreen",{data:data});
			});
		});
	});
}