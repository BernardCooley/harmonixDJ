angular.module('angularApp')
    .component('helpComponent', {
        // bindings: {
        //     helpComponent: '<'
        // },
        templateUrl: 'src/components/helpComponent/help.html',
        
        controller: function () {

            var ctrl = this;

            ctrl.label = "help label";

            console.log(ctrl.label);
        }
    });

    