// Display aboutDiv in block when aboutButton is clicked
var about = document.getElementById("aboutButton");
about.addEventListener("click", function(){
    var aboutDiv = document.getElementById("about");
    aboutDiv.style.display = "block";
});

// Close aboutDiv when bootstrap glyphicon with id "close" is clicked
var close = document.getElementById("close");
close.addEventListener("click", function(){
    var aboutDiv = document.getElementById("about");
    aboutDiv.style.display = "none";
});

$(document).ready(function(){
    // Add data to modal when clicked on thumbnail
    $(".work-detail a").on("click", function () {
        var heading = $(this).find(".caption h3").text();
        var para = $(this).find(".caption p").text();
        var link = $(this).attr("data-id");
        $(".modal-body p").html(para);
        $(".modal-body p").append("<br/>For more info " + "<a class='git' href='#'>" + link + "</a>");
        $(".modal-title").html(heading);
    });

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 800, function(){
                window.location.hash = hash;
            });
        } // End if
    });
});