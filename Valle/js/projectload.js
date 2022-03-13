(function($){

 	$.fn.extend({ 
 		
		//pass the options variable to the function
 		projectload: function(options) {


			//Set the default values, use comma to separate the settings, example:
			var defaults = {
				elementcnt: 2
			}
				
			var options =  $.extend(defaults, options);

    		return this.each(function() {
				var o = options;
                console.log(o.elementcnt);
                
                 $.getJSON('assets/pageContents.json', function(data) {
                     console.log("json loaded")
                     $.each(data.projects, function(i, e) {
                        if (o.elementcnt >= e.projectno) {
                            if (e.projectno % 2 === 0) {
                                var projectElement = '<div class="row justify-content-center no-gutters mb-5 mb-lg-0">' +
                                '<div class="col-lg-6"><img class="img-fluid float-right" src="assets/img/' + e.asset + '" alt="" /></div>' +
                                '<div class="col-lg-6">' +
                                '<div class="bg-black text-center h-100 project">' +
                                '<div class="d-flex h-100">' +
                                '<div class="project-text w-100 my-auto text-center text-lg-left">' +
                                '<h4 class="text-white">' + e.title +
                                '</h4>' +
                                '<p class="mb-0 text-white-50">' + e.content +
                                '</p>' +
                                '<hr class="d-none d-lg-block mb-0 ml-0" />' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</div>'
                            } else {
                                 var projectElement = '<div class="row justify-content-center no-gutters">' +
                                '<div class="col-lg-6"><img class="img-fluid float-left" src="assets/img/' + e.asset + '" alt="" /></div>' +
                                '<div class="col-lg-6 order-lg-first">' +
                                '<div class="bg-black text-center h-100 project">' +
                                '<div class="d-flex h-100">' +
                                '<div class="project-text w-100 my-auto text-center text-lg-right">' +
                                '<h4 class="text-white">' + e.title +
                                '</h4>' +
                                '<p class="mb-0 text-white-50">' + e.content +
                                '</p>' +
                                '<hr class="d-none d-lg-block mb-0 ml-0" />' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</div>'
                            }
                            $(projectElement).appendTo("#projectlist");
                        }
                     });
                });
			
    		});
    	}
	});
	
})(jQuery);