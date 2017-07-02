/*
*This class is the core cards objects
*/

function Cards(cardRank,cardSuit){
	var suits = Object.freeze({Diamond:"Diamond",Club:"Club",Spade:"Spade",Heart:"Heart"});
	var ranks = Object.freeze({Two:"Two",Three:"Three",Four:"Four",Five:"Five",Six:"Six",Seven:"Seven",Eight:"Eight",Nine:"Nine",Ten:"Ten",Jack:"Jack",Queen:"Queen",King:"King",Ace:"Ace"});
	var validSuit = false;
	var validRank = false;
	for(var property in suits){
		if(cardSuit == property){
			validSuit = true;
		}
	}
	for(var property in suits){
		if(cardSuit == property){
			validRank = true;
		}
	}
	if(validRank == false || validSuit == false){
		throw "Invalid rank or suit";
	}
	var cardRank = cardRank;
	var cardSuit = cardSuit;
	this.returnCardRank = function(){
		return cardRank;
	}
	this.returnCardSuit = function(){
		return cardSuit;
	}
}
module.exports.Cards = Cards;