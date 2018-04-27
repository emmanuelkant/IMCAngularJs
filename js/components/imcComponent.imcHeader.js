"use strict";
(function() {
    angular.module("imcComponents")
        .component("imcHeader", {
            templateUrl: "js/templates/header.html",
            controllerAs: "vm",
            transclude: true,
            restrict: "E",
            controller: "imcHeaderCtrl"
        });
})();
