$( document ).ready( function() {

	initActiveNavLink();

});

// add the class active to the current page
function initActiveNavLink(){
	// match first / and all non-slash chars after
	var current_nav_link = $(location)[0].pathname.match(/\/[^/]+|\//)[0];
	var current_nav_jquery_selector = ".navbar__entry a[href='"
		+ current_nav_link
		+ "']"
	;
	$( current_nav_jquery_selector ).parent().addClass('active');

}
