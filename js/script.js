// JavaScript Document

$(document).ready(function(){

//Prevent event
	$(".readmore").click(function(event){
		event.preventDefault();
 	});
		
	
//Slide down	
	$(".readmore").click(function(){
		$("#show-this-on-click").slideDown();
		$(".readless").show();
		$(".readmore").hide();
	 });


$(".readless").click(function(event){
		event.preventDefault();
	});		
	$(".readless").click(function(){
		$("#show-this-on-click").slideUp();
		$(".readmore").show();
		$(".readless").hide();
	});
	
//Prevent event
	$(".learnmore").click(function(event){
		event.preventDefault();
	 });

//Slide down	
	$(".learnmore").click(function(){
		$("#learnmoretext").slideDown();
		$(".readless").show();
		$(".learnmore").hide();
	 });

$(".readless").click(function(event){
		event.preventDefault();
	});		
	$(".readless").click(function(){
		$("#show-this-on-click").slideUp();
		$(".readmore").show();
		$(".readless").hide();
	});
	
	
	
	
});