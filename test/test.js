/*
*This file contains the tests for 
*CardGames modules..
*@author:Navjot Singh Dhaliwal
*/
var CreateDeck = require("../includes/CreateDeck.js");
var Cards = require("../includes/Cards.js").Cards;
var assert = require("assert");
var chai = require("chai");
var MagicGame = require("../includes/MagicGame.js").MagicGame;
describe("ShuffleDeck", function() {
	it("Should shuffle the deck",function(){
		var array = [1,2,3];
		CreateDeck.ShuffleDeck(array,(arrayArg)=>{
			assert(true);
		});
	});
});

describe("InitializeDeck",function(){
	it("Should give us 52 cards",function(){
		var NO_OF_CARDS = 52;
		CreateDeck.InitializeDeck((arrayArg)=>{
			assert(arrayArg.length == NO_OF_CARDS);
		});
	});
	it("Should fail as we are expecting different number of cards",function(){
		CreateDeck.InitializeDeck((arrayArg)=>{
			assert(arrayArg.length != 100);
		});
	});
});

describe("CreateSubDeck",function(){
	it("Should give us a sub deck of deck",function(){
		CreateDeck.InitializeDeck((arrayArg)=>{
			CreateDeck.CreateSubDeck(arrayArg,27,(arrayArg2)=>{
				assert(arrayArg2.length == 27);
			});
		});
	});
	it("Should be false as we are expecting different number of cards then expected",function(){
		CreateDeck.InitializeDeck((arrayArg)=>{
			CreateDeck.CreateSubDeck(arrayArg,27,(arrayArg2)=>{
				assert(arrayArg2.length != 28);
			});
		});
	});
	
});

describe("Cards Object",function(){
	it("Should match the given rank and suit",function(){
		var card = new Cards("Jack","Diamond");
		assert("Jack" == card.returnCardRank());
		assert("Diamond" == card.returnCardSuit());
		assert("Club" != card.returnCardSuit());
	});
	it("Should throw an error",function(){
		chai.expect(Cards.bind(Cards,("Jack","Rubbish"))).to.throw("Invalid rank or suit")
	});
	it("Should return Diamond",function(){
		var card  = new Cards("Jack","Diamond");
		assert("Diamond",card.returnCardSuit);
	});
	it("Should return the set height and width",function(){
		var card = new Cards("Jack","Diamond");
		card.setHeight(200);
		assert(200 == card.getHeight());
		card.setWidth(200);
		assert(200 == card.getWidth());
	});
	it("Should return the set value of x and y",function(){
		var card = new Cards("Jack","Diamond");
		card.setX(200);
		card.setY(200);
		assert(200 == card.getX());
		assert(200 == card.getY());
	});
	it("Should return the set deck",function(){
		var card = new Cards("Jack","Diamond");
		card.setDeck(1);
		assert(1 == card.getDeck());
	});
});

describe("Magic Game",function(){
	it("Should pass.. Testing all functions existence",function(){
		var magicGame = MagicGame;
		assert(magicGame.PrepareDeck());
		assert(magicGame.PullTwentySevenCards());
		assert(magicGame.CreateThreeDecks());
		assert(magicGame.SerializeData());
	});
});