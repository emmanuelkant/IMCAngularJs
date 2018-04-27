"use strict";
(function() {
    angular.module("imcComponents")
        .component("imcHistory", {
            templateUrl: "js/templates/history.html",
            controllerAs: "vm",
            restrict: "E",
            controller: "imcHistoryCtrl"
        });
})();
