/*
*This class is the core cards objects
*@author:-Navjot Singh Dhaliwal
*/

function Cards(cardRankArg,cardSuitArg){
	var suits = Object.freeze({Diamond:"Diamond",Club:"Club",Spade:"Spade",Heart:"Heart"});
	var ranks = Object.freeze({Two:"Two",Three:"Three",Four:"Four",Five:"Five",Six:"Six",Seven:"Seven",Eight:"Eight",Nine:"Nine",Ten:"Ten",Jack:"Jack",Queen:"Queen",King:"King",Ace:"Ace"});
	var validSuit = false;
	var validRank = false;
	var x;
	var y;
	var height;
	var width;
	var deck;
	var id;
	for(var property in suits){
		if(cardSuitArg == property){
			validSuit = true;
		}
	}
	for(var property in ranks){
		if(cardRankArg == property){
			validRank = true;
		}
	}
	if(validRank == false || validSuit == false){
		throw "Invalid rank or suit";
	}
	var cardRank = cardRankArg;
	var cardSuit = cardSuitArg;
	var id = cardRank[0]+cardSuit[0];
	this.returnCardRank = function(){
		return cardRank;
	}
	this.returnCardSuit = function(){
		return cardSuit;
	}
	this.setX = function(xArg){
		x = xArg;
	}
	this.setY = function(yArg){
		y = yArg;
	}
	this.setHeight = function(heightArg){
		height = heightArg;
	}
	this.setWidth = function(widthArg){
		width = widthArg;
	}
	this.returnCardRank = function(){
		return cardRank;
	}
	this.returnCardSuit = function(){
		return cardSuit;
	}
	this.getX = function(){
		return x;
	}
	this.getY = function(){
		return y;
	}
	this.getHeight = function(){
		return height;
	}
	this.getWidth = function(){
		return width;
	}
	this.setDeck = function(deckArg){
		deck = deckArg;
	}
	this.getDeck = function(){
		return deck;
	}
	this.getId = function(){
		return id;
	}

}
module.exports.Cards = Cards;