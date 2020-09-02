$(document).ready(function() { // do this when the document is loaded
	$("#bdialer").show(); // show the element with ID "element"
	$("#bcontacts, #badd").hide(); // hide the element with ID "otherElement"
});

$("bdialer").click(function() { // when "button_id" is clicked
	$("bdialer").show(); // show element
	$("bcontacts, badd").hide();	// hide other elements
});

$("bcontacts").click(function() { // when "button_id" is clicked
	$("bcontacts").show(); // show element
	$("bdialer, badd").hide();	// hide other elements
});

$("badd").click(function() { // when "button_id" is clicked
	$("badd").show(); // show element
	$("bcontacts, bdialer").hide();	// hide other elements
});
