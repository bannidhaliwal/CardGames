
module.exports.RegisterEvents = function(ioObject){
	ioObject.on("connection",function(socket){
		console.log("Connection from user "+socket.id);
		socket.on("Initiate Magic Game",function(data){
			var mg = require("./MagicGame.js").MagicGame;
			var MagicGame = new mg(); 
			MagicGame.PrepareDeck();
			MagicGame.PullTwentySevenCards();
			MagicGame.CreateThreeDecks();
			MagicGame.SerializeData((serializedData)=>{
				socket.emit("Magic Game Initialized",{data:serializedData});
			});
			socket.on("Recreate Decks",function(data){
				MagicGame.RearrangeDecks(2,function(){
					MagicGame.CreateThreeDecks();
					MagicGame.SerializeData((serializedData)=>{
						socket.emit("Redraw",{data:serializedData});
					});
				});
			});
		});
	});
}