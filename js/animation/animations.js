(function() {
	$("#info").hover(function() {
		console.log("It's works");
		$("#box-info").show();
	}, function() {
		console.log("oi");
	});
})();