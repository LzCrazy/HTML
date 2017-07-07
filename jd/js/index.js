$(document).ready(function() {
	$(".mainProNav dl dt").mouseover(function() {
		$(".mainProNav dl").removeClass("dlHover");
		$(this).parent().addClass("dlHover");
	})
	$(".mainProNav").hover(function() {
		$(this).addClass("mainProNavHover");
		},function() {
			$(this).removeClass("mainProNavHover");
			$(".mainProNav dl").removeClass("dlHover");
		})
});
