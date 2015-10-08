( function( $ ) {
$( document ).ready(function() {
$('#cssmenu').prepend('<div id="indicatorContainer"><div id="pIndicator"><div id="cIndicator"></div></div></div>');
    var activeElement = $('#cssmenu>ul>li:first');

    $('#cssmenu>ul>li').each(function() {
        if ($(this).hasClass('active')) {
            activeElement = $(this);
        }
    });


	var posLeft = activeElement.position().left;
	var elementWidth = activeElement.width();
	posLeft = posLeft + elementWidth/2 -6;
	if (activeElement.hasClass('has-sub')) {
		posLeft -= 6;
	}

	$('#navbar #navbar-default #navbar-toggle #navbar-colapse').css('left', posLeft);
	var element, leftPos, indicator = $('#navbar navbardefault #navbar-collapse #navbar-toggle');
	
	$("#navbar>ul>li").hover(function() {
        element = $(this);
        var w = element.width();
        if ($(this).hasClass('has-sub'))
        {
        	leftPos = element.position().left + w/2 - 12;
        }
        else {
        	leftPos = element.position().left + w/2 - 6;
        }

        $('#navbar #navbar-default').css('left', leftPos);
    }
    , function() {
    	$('#navbar #navbar-default').css('left', posLeft);
    });

	$('#navbar-collapse>ul').prepend('<li id="navbar-collapse"><a>Menu</a></li>');
	$( "#nav" ).click(function(){
    		if ($(this).parent().hasClass('open')) {
    			$(this).parent().removeClass('open');
    		}
    		else {
    			$(this).parent().addClass('open');
    		}
    	});
});
} )( jQuery );
