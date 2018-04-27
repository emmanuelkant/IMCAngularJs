"use strict";
(function() {
    angular.module("imcCtrls")
        .controller("imcHistoryCtrl", ["imcPatients", function(imcPatients) {
            var vm = this;
            vm.patients = imcPatients.getPatients();
        }]);
})();
