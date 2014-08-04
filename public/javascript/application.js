// 1. Takes text input from the search box and runs a google image search.
$(document).on('click', '#go-search', function() {
	findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})
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