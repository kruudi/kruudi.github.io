/*!
    * Start Bootstrap - Grayscale v6.0.1 (https://startbootstrap.com/themes/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-grayscale/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
	
   $.getJSON('assets/pageContents.json', function(data) {
	   $.each(data.project, function(i, f) {
		  var projectElement = '<div class="row justify-content-center no-gutters mb-5 mb-lg-0">' +
			'<div class="col-lg-6"><img class="img-fluid float-right" src="assets/img/' + f.asset + '" alt="" /></div>' +
			'<div class="col-lg-6">' +
			'<div class="bg-black text-center h-100 project">' +
			'<div class="d-flex h-100">' +
			'<div class="project-text w-100 my-auto text-center text-lg-left">' +
			'<h4 class="text-white">' + f.title +
			'</h4>' +
			'<p class="mb-0 text-white-50">' + f.content +
			'</p>' +
			'<hr class="d-none d-lg-block mb-0 ml-0" />' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>'
		   $(projectElement).appendTo("#concerts div");
		});
	});
	
})(jQuery); // End of use strict
