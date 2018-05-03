"use strict";
(function() {
	angular.module("imcCtrls")
		.controller("imcUpdateCtrl", ["imcPatients", "$transition$", function(imcPatients, $transition$) {
			var vm = this;
			vm.onInit = onInit;
			vm.patient = {};
			vm.gender = {};

			function onInit() {
				loadPatient();
				loadGender();
			};

			function loadPatient() {
				vm.patient = imcPatients.getPatientById(parseInt($transition$.params().patientId));
			};

			function loadGender() {
				vm.gender = imcPatients.getGender();
			};

			function updateIt(patient) {
				imcPatients.updatePatient(patient);
			};

			vm.onInit();
		}]);
})();