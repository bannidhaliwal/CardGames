/*Scripts for Card Games*/

/**
 * Simple function to add the canvas onto the main 
 * page. It will check the current computed style of
 * the main wrapper and assign those values to the 
 * canvas.
 */
function InsertCanvas(){
	var parentElement = document.getElementById("mainWrapper");
	var canvas = document.createElement("canvas");
	canvas.id = "mainCanvas";

	//Remove the px from the computed values..
	canvas.height = parseInt(window.getComputedStyle(parentElement,null).getPropertyValue("height"));
	canvas.width = parseInt(window.getComputedStyle(parentElement,null).getPropertyValue("width"));

	parentElement.appendChild(canvas);
}

function DrawWelcomeScreen(){
	var heightOfCanvas = document.getElementById("mainCanvas").height;
	var widthOfCanvas = document.getElementById("mainCanvas").width;
	io.emit("Initiated",{height:heightOfCanvas,width:widthOfCanvas});
	io.on("DrawWelcomeScreen",function(data){
		DrawLink(data.data);
	});
}
function DrawHeading(data){
	var canvas = document.getElementById("mainCanvas").getContext("2d");
	canvas.font = "30px Arial";
	canvas.fillText(data.heading,data.headingX,data.headingY);
}
function DrawLink(data){
	var canvas = document.getElementById("mainCanvas").getContext("2d");
	canvas.font = "30px Arial";
	canvas.fillText(data.gameLink,data.gameLinkX,data.gameLinkY);
}