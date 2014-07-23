function displayContent(clickedElem, affectedElem, classToAdd) {
	$(clickedElem).click(function() {
		$(affectedElem).addClass(classToAdd);

	});
}

function scrollAnimate(element, distance, classToAdd) {
	$(window).scroll(function() {
			$(element).each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow + distance) {
					$(this).addClass(classToAdd);
				}
			});
		});
}

$(document).ready(function() {

	document.getElementsByTagName('body')[0].style.height = "3050px";

	displayContent("#one", "#two", "fadeIn");

	$("#one").click(function(){

		setTimeout(function(){
			$("#three").addClass("fadeIn");
		}, 2000);

		setTimeout(function() {
			$("#down_arrow").addClass("bigEntrance");
		}, 3000);

		setTimeout(function() {
			$("#down_arrow").addClass("floating");
		}, 3500);

	});

	scrollAnimate("#two", 700, "fadeIn");
	scrollAnimate("#three", 600, "fadeIn");
	scrollAnimate("#down_arrow", 600, "bigEntrance");

	scrollAnimate('#four', 500, 'slideDown');
	scrollAnimate('#five', 500, 'slideDown');
	scrollAnimate('#people', 500, 'slideLeft');

	scrollAnimate('#six', 500, 'fadeIn');

	scrollAnimate('#seven', 500, 'slideRight');
	scrollAnimate('#fun', 500, 'slideRight');
	scrollAnimate('#eight', 500, 'slideRight');
	scrollAnimate('#inspiring', 500, 'slideRight');
	scrollAnimate('#nine', 500, 'slideRight');
	scrollAnimate('#challenging', 500, 'slideRight');

	scrollAnimate('#ten', 500, 'expandOpen');
	scrollAnimate('#eleven', 500, 'expandOpen');

	scrollAnimate('#man1', 500, 'slideUp');
	scrollAnimate('#woman1', 525, 'slideUp');
	scrollAnimate('#man2', 550, 'slideUp');
	scrollAnimate('#woman2', 575, 'slideUp');
	scrollAnimate('#man3', 600, 'slideUp');

	scrollAnimate('#more', 500, 'hatch');

	scrollAnimate('#twelve', 500, 'slideExpandUp');

	scrollAnimate('#thirteen', 500, 'fadeIn');
	scrollAnimate('#burger', 500, 'slideLeft');
	scrollAnimate('#right_arrow', 500, 'slideLeft');


    $(function() {
    	$('a[href*=#]:not([href=#])').click(function() {
    		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    			var target = $(this.hash);
    			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

    			if (target.length) {
    				$('html,body').animate({
    					scrollTop: target.offset().top
    				}, 1000);
    				return false;
    			}
    		}
    	});
    });
});