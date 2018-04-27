"use strict";
(function() {
    angular.module("imcComponents")
        .component("imcForm", {
            templateUrl: "js/templates/form.html",
            controllerAs: "vm",
            restrict: "E",
            controller: "imcFormCtrl"
        });
})();
