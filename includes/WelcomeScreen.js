var WelcomeScreen = function(data){
	this.height = data.height;
	this.width = data.width;
	this.headingX = this.width/3.5;
	this.headingY = 50;
	this.heading = "Click Anywhere";
	this.gameLink = "Click Anywhere";
	this.gameLinkX = this.width/2.5;
	this.gameLinkY = this.height/2;
	this.SerializeData = function(callback){
		var data = {heading:this.heading,headingX:this.headingX,headingY:this.headingY
			,gameLink:this.gameLink,gameLinkX:this.gameLinkX,gameLinkY:this.gameLinkY};
		callback(data);
	}
}


module.exports.WelcomeScreen = WelcomeScreen;