// Get The Hour of Day
var date = new Date();
var current_hour = date.getHours();

console.log(current_hour);

if (current_hour >= 17) {

//If Nighttime
//Remove 'day' class
$('body').removeClass('day');

// Add 'night' class
$('body').addClass('night');

};

//Toggle Class
//$('body').toggleClass();