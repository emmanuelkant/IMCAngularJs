"use strict";
(function() {
    angular.module("imcComponents")
        .component("situation", {
            templateUrl: "js/templates/situation.html",
            restrict: "E",
            controllerAs: "vm",
            controller: "imcSituationCtrl"
        });
})();
