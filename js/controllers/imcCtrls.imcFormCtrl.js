"use strict";
(function() {
    angular.module("imcCtrls")
        .controller("imcFormCtrl", ["imcPatients", function(imcPatients) {
            var vm = this;
            vm.length = imcPatients.getLength();
            vm.gender = imcPatients.getGender();
            vm.addPatient = imcPatients.addPatient;
            vm.imcCalc = imcCalc;
            vm.lastPatient = null;

            function imcCalc(patient, form) {
                var test1 = (parseFloat(patient.height) * parseFloat(patient.height));
                var test2 = parseFloat(patient.weight);
                var imc = parseFloat(patient.weight) / (parseFloat(patient.height) * parseFloat(patient.height));
                patient.imc = imc.toFixed(2);
                patient.situation = getSituation(imc);
                patient.id = vm.length++;
                if (vm.addPatient(patient)) {
                    vm.lastPatient = vm.patient;
                    delete vm.patient;
                    form.$setPristine();
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
