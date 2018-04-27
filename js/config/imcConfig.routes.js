"use strict";
(function() {
    angular.module("imcConfig")
        .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/novo");
            $stateProvider
                .state("novo" , {
                    url: "/novo",
                    templateUrl: "js/templates/form.html",
                    controllerAs: "vm",
                    controller: "imcFormCtrl"
                })
                .state("historico" , {
                    url: "/historico",
                    templateUrl: "js/templates/history.html",
                    controllerAs: "vm",
                    controller: "imcHistoryCtrl"
                });
        }]);
})();
