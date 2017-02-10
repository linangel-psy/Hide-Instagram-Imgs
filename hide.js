//Switchers
var hideAll = true;
var hideUser = false;
//List of users ids to hide images
var users = [];
//DOM elements to hide
var elements;

//When buttons on extension popup clicked, HideSwitch function called with id of button as argument
$('.hide-button').click(function(e){
	var id = e.target.id; 
	chrome.tabs.executeScript({
		code: 'HideSwitch("' + id + '")'
	});
});

//Switchers status changing
var HideSwitch = function(id){
	if(id == 'hideAll'){
		hideAll = !hideAll;
		if(hideUser){
			hideUser = !hideUser;
		}
	}
	else if(id == 'hideUser') {
		hideUser = !hideUser;
		if(hideAll){
			hideAll = !hideAll;
		}
	}
	//Calling hide functions after changing switchers
	HideFunction();
};

//Functions with main logic
//Hiding images reposted from instagram
var HideFunction = function() {
	$('*').removeClass('insta-none');
	elements = undefined;
	if(hideAll){
		elements = $('a._5pcq:contains("Instagram")').parents('.fbUserContent').find('.uiScaledImageContainer');
		console.log('hide all');
	}
	else if(hideUser) {
		elements = undefined;
		console.log('hide user');
	}
	if(elements){
		console.log('show all');
		elements.addClass('insta-none');
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