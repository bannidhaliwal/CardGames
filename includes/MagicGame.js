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

function MagicGame(){
	this.wholeDeck = [];
	this.playAbleDeck = [];
	this.deckOne = [];
	this.deckTwo = [];
	this.deckThree = [];
	this.decksPointer = [];
	this.serializedData = [];

	this.PrepareDeck = function(){
		CreateDeck.InitializeDeck((arrayArg)=>{
			this.wholeDeck = arrayArg;
		});
		return true;//For testing purposes only..
	}
	this.PullTwentySevenCards = function(){
		//TODO:- Delete those twenty seven cards from the original deck..(NOT NECESSARY)
		CreateDeck.ShuffleDeck(this.wholeDeck,(shuffledDeck)=>{
			this.playAbleDeck = [];
			for(var i = 0;i<27;i++){
				this.playAbleDeck[i] = shuffledDeck[i];
			}
		});
		return true;
	}

	this.CreateThreeDecks = function(){
		this.deckOne = [];
		this.deckTwo = [];
		this.deckThree = [];
		//Constants to assign to the cards
		var DECK_ONE = 1;
		var DECK_TWO = 2;
		var DECK_THREE = 3;
		//Assign 9 cards to each of the deck
		for(var i = 0,j = 0;i<this.playAbleDeck.length;i+=3,j++){
			this.deckOne[j] = this.playAbleDeck[i];
			this.deckOne[j].setDeck(DECK_ONE);

			this.deckTwo[j] = this.playAbleDeck[i+1];
			this.deckTwo[j].setDeck(DECK_TWO);

			this.deckThree[j] = this.playAbleDeck[i+2];
			this.deckThree[j].setDeck(DECK_THREE);
		}
		return true;
	}

	this.SerializeData = function(callback){
		//Create a array which contains all necessary information 
		//for drawing on the client side..
		serializedData = {serializedDataDeckOne:[],serializedDataDeckTwo:[],serializedDataDeckThree:[]};
		for(var i = 0;i<9;i++){
			serializedData.serializedDataDeckOne[i] = this.deckOne[i].getSerializedData();
			serializedData.serializedDataDeckTwo[i] = this.deckTwo[i].getSerializedData();
			serializedData.serializedDataDeckThree[i] = this.deckThree[i].getSerializedData();
		}
		callback(serializedData);
		return true;
	}

	this.RecreatePlayableDeck = function(deckWithUserSelectedCard,callback){
		
		var firstDeck;
		var secondDeck = parseInt(deckWithUserSelectedCard);
		var thirdDeck;
		switch(secondDeck){
			case 0:{
				firstDeck = this.deckTwo;
				secondDeck = this.deckOne;
				thirdDeck = this.deckThree;
				break;
			}
			case 1:{
				firstDeck = this.deckOne;
				thirdDeck = this.deckThree;
				secondDeck = this.deckTwo;
				break;
			}
			default:{
				firstDeck = this.deckOne;
				thirdDeck = this.deckTwo;
				secondDeck = this.deckThree;
				break;
			}
		}
		for(var i = 0,j = 0; i<27; i+=3,j++){
			this.playAbleDeck[i] = firstDeck[j];
			this.playAbleDeck[i+1] = secondDeck[j];
			this.playAbleDeck[i+2] = thirdDeck[j];
		}
		callback();
	}

	/**
	 * This function will rearrange decks.
	 * @param {string} :The deck with user selected card.
	 */
	this.RearrangeDecks = function(deckWithUserSelectedCard,callback){
		    this.playAbleDeck.length = 0;
			this.RecreatePlayableDeck(deckWithUserSelectedCard,callback);
	}
}
module.exports.MagicGame = MagicGame;