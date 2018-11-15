global.$ = global.jQuery = require('jquery')

$(document).ready(function(){
	console.log('It works!')
})


var animation = bodymovin.loadAnimation({
	container: document.getElementById('animation'), // Required
	path: 'data.json', // Required
	renderer: 'svg/canvas/html', // Required
	loop: true, // Optional
	autoplay: true, // Optional
	name: "Hello World", // Name for future reference. Optional.
})