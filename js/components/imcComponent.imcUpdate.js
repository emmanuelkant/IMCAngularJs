"use strict";
(function() {
	angular.module("imcComponents")
		.component("imcUpdate", {
			templateUrl: "js/templates/update.html",
			restrict: "E",
			controllerAs: "vm",
			controller: "imcUpdateCtrl"
		});
})();