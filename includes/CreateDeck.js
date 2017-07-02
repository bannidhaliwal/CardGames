/*
*This file is going to serve the functions
*to create the card deck.
*/
var cardRank = "Ace,King,Queen,Jack,Ten,Nine,Eight,Seven,Six,Five,Four,Three,Two";
var cardSuit = "Diamond,Spade,Club,Heart";
cardRank = cardRank.split(",");
cardSuit = cardSuit.split(",");
/*This function will create the array for the deck cards.
After creating the deck it will pass the array to the callback
function;
Usage: Pass two different arrays that contains the card ranks and card suits.
	   String argument should be empty always. Both counter should be set to 
       zero. Finally pass the game deck to callback and process the final deck.
@author:Navjot Singh Dhaliwal
*/
function CreateCardDeck(string,cardRanks,cardSuits,counter,counter2,callback){
  var NUMBER_OF_CARDS = 52;
  if(counter == cardRank.length){
  	counter = 0;
    counter2++;
  }
  if(counter2 == cardSuits.length){
  	callback(string.split(",",NUMBER_OF_CARDS));
    return ;
  }
  var stringToPassRecursively = string+cardSuits[counter2]+" "+cardRanks[counter]+",";
  CreateCardDeck(stringToPassRecursively,cardRanks,cardSuits,counter+1,counter2,callback);
}
/*
*Interface method for CreateDeck Module
*@author:-Navjot Dhaliwal
*/
function InitializeDeck(callback){
	CreateCardDeck("",cardRank,cardSuit,0,0,callback);
}
/*
*Shuffle the deck by using Knuth Shuffle.
*@author:-Navjot Singh Dhaliwal
*/
function ShuffleDeck(deck,callback){
	var currentIndex = deck.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {
	   randomIndex = Math.floor(Math.random() * currentIndex);
	   currentIndex -= 1;

	   temporaryValue = deck[currentIndex];
	   deck[currentIndex] = deck[randomIndex];
	   deck[randomIndex] = temporaryValue;
	}
	callback(deck);
}
/*
*Create a sub deck of the deck.
*This function can be used to distribute the
*cards to the various players.
*@author:-Navjot Singh Dhaliwal
*/
function CreateSubDeck(deck,numberOfCardsInDeck,callback){
	var array = [];
	for(var i = 0;i<numberOfCardsInDeck;i++){
		array.push(deck[i]);
	}
	callback(array);
}

module.exports.InitializeDeck = InitializeDeck;
module.exports.ShuffleDeck = ShuffleDeck;
module.exports.CreateSubDeck = CreateSubDeck;