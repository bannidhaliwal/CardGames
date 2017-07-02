/*
*This file contains the tests for 
*CardGames modules..
*@author:Navjot Singh Dhaliwal
*/
var CreateDeck = require("../includes/CreateDeck.js");
var Cards = require("../includes/Cards.js").Cards;
var assert = require("assert");
var chai = require("chai");
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
	
});