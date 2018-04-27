"use strict";
(function() {
    angular.module("imcServices")
        .factory("imcPatients", [function() {

            var _patients = [];
            var _gender = getGender;
            var _getPatients = getPatients;
            var _getLastPatient = getLastPatient;
            var _addPatient = addPatient;

            function getPatients() {
                return _patients;
            };

            function getGender() {
                return ["Masculino", "Feminino"];
            };

            function addPatient(patient) {
                try {
                    _patients.push(angular.copy(patient));
                    return true;
                } catch(e) {
                    return false;
                }
            };

            function getLastPatient() {
                return _patients[_patients.length - 1];
            };

            return {
                getGender: _gender,
                getPatients: _getPatients,
                getLastPatient: _getLastPatient,
                addPatient: _addPatient            }
        }])
})();
