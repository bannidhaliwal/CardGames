var WelcomeScreen = require("./WelcomeScreen.js").WelcomeScreen;
module.exports.Screen = function(screenType,data){
	this.screenType = screenType;
	this.screenObject = null;
	switch(this.screenType){
		case "welcome":{
			this.screenObject = new WelcomeScreen(data);
		}
	}
}