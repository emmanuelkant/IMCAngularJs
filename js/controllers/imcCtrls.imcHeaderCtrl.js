"use strict";
(function() {
    angular.module("imcCtrls")
        .controller("imcHeaderCtrl", [function() {
            var vm = this;
            vm.title = "Júlia's Site";
        }]);
})();


function atualiza1(hero, prop, value) {
	hero[prop] = value;
};

function atualiza2(prop, value) {
	atualiza1({hero: ctrl.hero, prop: prop, value: value});
};

function atualiza3(value) {

};