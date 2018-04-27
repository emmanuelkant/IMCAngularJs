"use strict";
(function() {
    angular.module("imcCtrls")
        .controller("imcSituationCtrl", ["imcPatients", function(imcPatients) {
            var vm = this;
            vm.lastPatient = imcPatients.getLastPatient();

            function haveChange() {
                imcPatients.getPatient().lenght
            };
        }]);
})();
