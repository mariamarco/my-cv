$(document).ready(function(){
	$("#greeting").click(function(event){
		$(this).toggleClass("hello"),
		$(this).text($(this).text() == 'Hi!' ? 'Close!' : 'Hi!');
	});
});

