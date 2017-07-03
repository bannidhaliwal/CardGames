/**
*This file contains the magic game.
*@author:-Navjot Singh Dhaliwal
*/

//Create the deck..
//Shuffle it..
//Pull 27 cards out of it..
//Create three decks of those 27 cards..
//Serialize the card data to send it to the client side
var CreateDeck = require("./CreateDeck.js");

var MagicGame = {
	wholeDeck:[],
	playableDeck:[],
	deckOne:[],
	deckTwo:[],
	deckThree:[],
	PrepareDeck:function(){
		CreateDeck.InitializeDeck((arrayArg)=>{
			wholeDeck = arrayArg;
		});
		return true;
	},
	PullTwentySevenCards:function(){
		//Shuffle the deck first
		//Pull 27 cards out of the whole deck
		//Delete those twenty seven cards from the original deck..
		return true;
	},
	CreateThreeDecks:function(){
		//Assign 9 cards to each of the deck
		return true;
	},
	SerializeData:function(){
		//Create a array which contains all necessary information 
		//for drawing on the client side..
		return true;
	},
	ReturnGameArray:function(){
		//We wont need this function but we are creating it 
		//for any seldom case..
		return playableDeck;
	}
}
module.exports.MagicGame = MagicGame;