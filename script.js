/*03-09-2018 21:36 */

/*
function sayHello(name){
alert("Hi "+name);
}

sayHello("Ravi!");
sayHello("Rahul!");
sayHello("Newton!");
*/

/*Menu Button */
function homeButton(){
	document.getElementById("content-1").classList.add('active');
	document.getElementById("content-2").classList.remove('active');
	document.getElementById("content-3").classList.remove('active');
	document.getElementById("content-4").classList.remove('active');
}

function contactButton(){
	document.getElementById("content-1").classList.remove('active');
	document.getElementById("content-2").classList.add('active');
	document.getElementById("content-3").classList.remove('active');
	document.getElementById("content-4").classList.remove('active');
}

function educationButton(){
	document.getElementById("content-1").classList.remove('active');
	document.getElementById("content-2").classList.remove('active');
	document.getElementById("content-3").classList.add('active');
	document.getElementById("content-4").classList.remove('active');
	
}

function workButton(){
	document.getElementById("content-1").classList.remove('active');
	document.getElementById("content-2").classList.remove('active');
	document.getElementById("content-3").classList.remove('active');
	document.getElementById("content-4").classList.add('active');
}


/*Study & Experiences*/
function clickBCA(){
	document.getElementById("message-BCA").classList.add('active');
	document.getElementById("message-HSEB").classList.remove('active');
	document.getElementById("message-SLC").classList.remove('active');
}

function clickHSEB(){
	document.getElementById("message-BCA").classList.remove('active');
	document.getElementById("message-HSEB").classList.add('active');
	document.getElementById("message-SLC").classList.remove('active');
}

function clickSLC(){
	document.getElementById("message-BCA").classList.remove('active');
	document.getElementById("message-HSEB").classList.remove('active');
	document.getElementById("message-SLC").classList.add('active');
}


function clickLazoi(){
	document.getElementById("message-lazoi").classList.add('active');
	document.getElementById("message-JCW").classList.remove('active');
	document.getElementById("message-SPEBS").classList.remove('active');
}

function clickJCW(){
	document.getElementById("message-lazoi").classList.remove('active');
	document.getElementById("message-JCW").classList.add('active');
	document.getElementById("message-SPEBS").classList.remove('active');
}

function clickSPEBS(){
	document.getElementById("message-lazoi").classList.remove('active');
	document.getElementById("message-JCW").classList.remove('active');
	document.getElementById("message-SPEBS").classList.add('active');
}


/* Display Project Info when hovered on Project Box */


function mouseoverProjectOne(){
	document.getElementById("projectInfoOne").classList.add('active');
}

function mousedownProjectOne(){
	document.getElementById("projectInfoOne").classList.remove('active');
}

function mouseoverProjectTwo(){
	document.getElementById("projectInfoTwo").classList.add('active');
}

function mousedownProjectTwo(){
	document.getElementById("projectInfoTwo").classList.remove('active');
}

function mouseoverProjectThree(){
	document.getElementById("projectInfoThree").classList.add('active');
}

function mousedownProjectThree(){
	document.getElementById("projectInfoThree").classList.remove('active');
}

function mouseoverProjectFour(){
	document.getElementById("projectInfoFour").classList.add('active');
}

function mousedownProjectFour(){
	document.getElementById("projectInfoFour").classList.remove('active');
}

function mouseoverProjectFive(){
	document.getElementById("projectInfoFive").classList.add('active');
}

function mousedownProjectFive(){
	document.getElementById("projectInfoFive").classList.remove('active');
}

function mouseoverProjectSix(){
	document.getElementById("projectInfoSix").classList.add('active');
}

function mousedownProjectSix(){
	document.getElementById("projectInfoSix").classList.remove('active');
}


	/*theme */

function bodyGradient(){
	document.getElementById("body").classList.remove('-white');
	document.getElementById("body").classList.add('-black');
}



/* map */

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}




/*function practice */



