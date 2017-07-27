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
	var wholeDeck = [];
	var playAbleDeck = [];
	var deckOne = [];
	var deckTwo = [];
	var deckThree = [];
	var decksPointer = [];
	var serializedData = [];

	this.PrepareDeck = function(){
		CreateDeck.InitializeDeck((initializedDeck)=>{
			wholeDeck = initializedDeck;
		});
		return true;//For testing purposes only..
	}
	this.PullTwentySevenCards = function(){
		//TODO:- Delete those twenty seven cards from the original deck..(NOT NECESSARY?)
		CreateDeck.ShuffleDeck(wholeDeck,(shuffledDeck)=>{
			playAbleDeck = [];
			for(var i = 0;i<27;i++){
				playAbleDeck[i] = shuffledDeck[i];
			}
		});
		return true;
	}

	this.CreateThreeDecks = function(){
		deckOne = [];
		deckTwo = [];
		deckThree = [];
		//Assign 9 cards to each of the deck
		for(var i = 0,j = 0;i<playAbleDeck.length;i+=3,j++){
			deckOne[j] = playAbleDeck[i];
			deckTwo[j] = playAbleDeck[i+1];
			deckThree[j] = playAbleDeck[i+2];
		}
		//Assign the decks to the distributed cards..
		SetDecks();
		return true;
	}
	var SetDecks = function(){
		var DECK_ONE = 1;
		var DECK_TWO = 2;
		var DECK_THREE = 3;
		for(var i = 0; i<deckOne.length; i++){
			deckOne[i].setDeck(DECK_ONE);
			deckTwo[i].setDeck(DECK_TWO);
			deckThree[i].setDeck(DECK_THREE);
		}
	}

	this.SerializeData = function(callback){
		//Create a array which contains all necessary information 
		//for drawing on the client side..
		serializedData = {serializedDataDeckOne:[],serializedDataDeckTwo:[],serializedDataDeckThree:[]};
		for(var i = 0;i<9;i++){
			serializedData.serializedDataDeckOne[i] = deckOne[i].getSerializedData();
			serializedData.serializedDataDeckTwo[i] = deckTwo[i].getSerializedData();
			serializedData.serializedDataDeckThree[i] = deckThree[i].getSerializedData();
		}
		callback(serializedData);
		return true;
	}

	this.RecreatePlayableDeck = function(deckWithUserSelectedCard,callback){
		
		var firstDeck;
		var secondDeck = parseInt(deckWithUserSelectedCard);
		var thirdDeck;
		switch(secondDeck){
			case 1:{
				firstDeck =  deckTwo;
				secondDeck =  deckOne;
				thirdDeck =  deckThree;
				break;
			}
			case 2:{
				firstDeck =  deckOne;
				thirdDeck =  deckThree;
				secondDeck =  deckTwo;
				break;
			}
			case 3:{
				firstDeck =  deckOne;
				thirdDeck =  deckTwo;
				secondDeck =  deckThree;
				break;
			}
			default:{
				throw new "There is no row "+secondDeck;
			}
		}
		for(var i = 0;i<firstDeck.length;i++){
			playAbleDeck.push(firstDeck[i]);
		}
		for(var i = 0;i<firstDeck.length;i++){
			playAbleDeck.push(secondDeck[i]);
		}
		for(var i = 0;i<firstDeck.length;i++){
			playAbleDeck.push(thirdDeck[i]);
		}
		callback();
	}
	
	/**
	 * This function will rearrange decks.
	 * @param {string} :The deck with user selected card.
	 */
	this.RearrangeDecks = function(deckWithUserSelectedCard,callback){
		    playAbleDeck = [];
			this.RecreatePlayableDeck(deckWithUserSelectedCard,callback);
	}
}
module.exports.MagicGame = MagicGame;