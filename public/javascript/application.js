// 1. Takes text input from the search box and runs a google image search.
$(document).on('click', '#go-search', function() {
	findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})
});

//1a. Same as above, but listens for the user to hit enter.
$("#search-term").keyup(function(event){
    if(event.keyCode == 13){
        $("#go-search").click();
    }
});

//2. When user clicks an image, loads it into the workspace.
$(document).on('click', '#search-results img', function() {
	var url = $(this).data('url');
	$("#workspace img").remove();
	var img = $("<img>").attr('src', url);
	$("#workspace").append(img);
});

//3. Takes the caption the user types and puts it into #caption
$(document).on('input', '#text', function () {
	$("#caption").text($(this).val());
});

//4. When the controls underneath the image are changed, update the respective CSS.
$(document).on('change', '#left', function() {
	$("#caption").css("left", $(this).val() + 'px')
})

$(document).on('change', '#top', function() {
	$("#caption").css("top", $(this).val() + 'px')
})

$(document).on('change', '#width', function() {
	$("#caption").css("width", $(this).val() + 'px')
})

$(document).on('change', '#size', function() {
	$("#caption").css("font-size", $(this).val() + 'px')
})

$(document).on('change', '#colour', function() {
	$("#caption").css("color", $(this).val())
})

$(document).on('change', '#align', function() {
	$("#caption").css("text-align", $(this).val())
})