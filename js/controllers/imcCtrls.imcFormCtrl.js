"use strict";
(function() {
    angular.module("imcCtrls")
        .controller("imcFormCtrl", ["imcPatients", "$location", function(imcPatients, $location) {
            var vm = this;
            vm.gender = imcPatients.getGender();
            vm.addPatient = imcPatients.addPatient;
            vm.imcCalc = imcCalc;
            vm.lastPatient = null;
            vm.isInserted = false;

            function imcCalc(patient, form) {
                var imc = parseInt(patient.weight) / (parseInt(patient.height) * parseInt(patient.height));
                patient.imc = imc;
                patient.situation = getSituation(imc);
                if (vm.addPatient(patient)) {
                    delete vm.patient;
                    form.$setPristine();
                    vm.isInserted = true;
                    $location.path("/novo");
                }
            };

            function getSituation(imc) {
                if (imc < 18.5) {
                    return "Abaixo do Peso";
                } else if (imc < 24.9) {
                    return "Peso Normal";
                } else if (imc < 29.9) {
                    return "Sobrepeso";
                } else if (imc < 34.9) {
                    return "Obesidade Grau I";
                } else if (imc < 39.9) {
                    return "Obesidade Grau II";
                } else {
                    return "Obesidade Grau III";
                }
            };
        }]);
})();
