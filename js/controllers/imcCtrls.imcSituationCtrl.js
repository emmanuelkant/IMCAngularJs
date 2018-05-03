"use strict";
(function() {
    angular.module("imcCtrls")
        .controller("imcSituationCtrl", [function() {
            var vm = this;

            vm.$onInit = function() {
                $("#situation").slideDown("slow");
            };

        }]);
})();
