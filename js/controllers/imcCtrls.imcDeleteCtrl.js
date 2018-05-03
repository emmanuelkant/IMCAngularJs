"use strict";
(function() {
	angular.module("imcCtrls")
		.controller("imcDeleteCtrl", ["$transition$", "imcPatients", "$window", function($transition$, imcPatients, $window) {
			var vm = this;
			vm.patientId = -1;
			vm.onInit = onInit;

			function onInit(){
				getPatientId();
				deletePatient();
				$window.location.href = "#/historico";
			};

			function deletePatient() {
				imcPatients.deletePatient(vm.patientId);
			};

			function getPatientId() {
				vm.patientId = parseInt($transition$.params().patientId);
			};

			vm.onInit();
		}]);
})();