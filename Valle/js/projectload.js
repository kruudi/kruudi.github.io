(function ($) {
    $.fn.parseprojects = function() {
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
                console.log(projectElement);
                $(projectElement).appendTo("#concerts div");
            });
        });
    };
})(jQuery);