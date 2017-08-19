angular.module('angularApp')
    .component('loginComponent', {
        bindings: {
            loginComponent: '<'
        },
        templateUrl: 'src/components/loginComponent/login.html',

        controller: ['$scope', '$http', function ($scope, $http) {
            console.log("Sign in controller");

            $scope.logIn = function(username, password) {
                console.log("Sign in called");

                $http.get('/users/username/' + username).success(function(response) {
                    if(response != null) {
                        if(username == response.username && password == response.password) {
                            console.log("Successful log in");
                            $scope.navDisabled = true;
                            console.log($scope.navDisabled);
                            $location.path("/playSet");
                        }
                    } else {
                        console.log("User not found: " + response);
                    }
                });
            };
        }]
        
    });