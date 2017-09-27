angular.module('angularApp')
    .component('loginComponent', {
        bindings: {
            loginComponent: '<'
        },
        templateUrl: 'src/components/loginComponent/login.html',

        controller: ['$scope', '$http', function ($scope, $http) {

            function add1(firstNum) {
                // console.log("fbhgdbn");
                function add2() {
                    return firstNum + 3;
                };
            };

            function addNumbers(firstNumber, secondNumber) {
                var returnValue = "Result is : ";

                function add() {
                    return returnValue + (firstNumber + secondNumber);
                }
                return add();
            }

            console.log(addNumbers(5, 10));
            
            // console.log(add1(5));

            console.log("Sign in controller");

            $scope.addUser = function(username) {
                console.log("Add user called");

                $http.post('/users', username).success(function(response) {
                    console.log(response);
                    // refreshSetlist();
                    // refreshTracks();
                });

            };

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