"use strict";
(function() {
    angular.module("imcServices")
        .factory("imcPatients", [function() {

            var _patients = [];
            var _gender = getGender;
            var _getPatients = getPatients;
            var _getLastPatient = getLastPatient;
            var _getLength = getLength;
            var _getPatientById = getPatientById;
            var _addPatient = addPatient;
            var _updatePatient = updatePatient;
            var _deletePatient = deletePatient;

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

            function getLength() {
                return _patients.length;
            };

            function getLastPatient() {
                return _patients[_patients.length - 1];
            };

            function getPatientById(id) {
                return _patients.filter(function(patient) {
                    return patient.id === id;
                })[0];
            };

            function updatePatient(patient) {
                _patients = _patients.map(function(item) {
                    if (item.id === patient.id) {
                        item.name = patient.name;
                        item.age = patient.age;
                        item.gender = patient.gender;
                        item.weight = patient.weight;
                        item.heigth = patient.height;
                        return item;
                    };
                    return patient;
                });
            };

            function deletePatient(patientId) {
                var patient = getPatientById(patientId);
                _patients = _patients.filter(function(item) {
                    if (patient.id !== item.id) return item;
                });
            };

            return {
                getGender: _gender,
                getPatients: _getPatients,
                getLastPatient: _getLastPatient,
                addPatient: _addPatient,
                getLength: _getLength,
                getPatientById: _getPatientById,
                updatePatient: _updatePatient,
                deletePatient: _deletePatient
            }
        }])
})();
