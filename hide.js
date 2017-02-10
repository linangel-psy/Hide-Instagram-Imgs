//Switchers
var hideAll = true;
var hideUser = false;
//list of users ids to hide images
var users = [];

//When buttons on extension popup clicked, HideSwitch function called with id of button as argument
$('.hide-button').click(function(e){
	var id = e.target.id; 
	chrome.tabs.executeScript({
		code: 'HideSwitch("' + id + '")'
	});
});

//Switchers status changing
var HideSwitch = function(id){
	if(id == "hideAll"){
		hideAll = !hideAll;
		if(hideUser){
			hideUser = !hideUser;
		}
	}
	else if(id == "hideUser") {
		hideUser = !hideUser;
		if(hideAll){
			hideAll = !hideAll;
		}
	}
	//Calling hide functions after changing switchers
	HideFunction();
};

//Functions with main logic

//Hiding all images reposted from instagram
var HideAllFunction = function() {
	$('a._5pcq:contains("Instagram")').parents('.fbUserContent').find('.uiScaledImageContainer').css({'display':'none','height':'1px'});
};
//Hiding all images reposted from instagram by chosen users
var HideUserFunction = function() {
	console.log("Test");
};
//Calling proper hiding function
var HideFunction = function() {
	if(hideUser){
		HideUserFunction();
	}
	else if(hideAll) {
		HideAllFunction();
	}
};

//Calling hide functions on scroll (change to "elements added")
$(window).scroll(function(){
	HideFunction();
});
//Calling hide functions on startup
$(window).ready(function(){
	HideFunction();
});