angular.module('angularApp')
    .component('registerComponent', {
        bindings: {
            registerComponent: '<'
        },
        templateUrl: 'src/components/registerComponent/register.html',

        controller: ['$scope', '$http', function ($scope, $http) {
            console.log("Register controller");

            $scope.addUser = function(user) {
                console.log("Add user called");
                $http.post('/users', {fname: user.fName, lname: user.lName, email: user.email, username: user.username, password: user.password}).success(function(response) {
                    // console.log("Add user response username: " + response.username);
                });

                this.validateRegistration(user);
            };

            $scope.validateEmail = function(email) {
                console.log("Validate existing email called");
                $http.get('/users/email/' + email).success(function(response) {
                    if(response != null) {
                        $scope.emailExistsMsg = response.email + " already exists";
                    } else {
                        $scope.emailExistsMsg = "";
                    }
                });
            };

            $scope.validateUsername = function(username) {
                console.log("Validate existing username called");
                $http.get('/users/username/' + username).success(function(response) {
                    if(response != null) {
                        $scope.usernameExistsMsg = response.username + " already exists";
                    } else {
                        $scope.usernameExistsMsg = "";
                    }
                });
            };

            $scope.validateRegistration = function(user) {
                $http.get('/users/email/' + user.email).success(function(response) {
                    if(response != null) {
                        console.log("Registration successful for: " + response.username);
                        $scope.registerFormShow = false;
                        $scope.registerStatusShow = true;
                        $scope.loginBtn = true;
                        $scope.successShow = true;
                        $scope.success = true;
                    } else {
                        console.log("Registration not successful: " + response);
                        $scope.failureShow = true;
                    }
                });

                this.createNewTracksCollection(user);

                
            };

            $scope.duplicateEmail = function(email, registerForm) {
                if (email !== undefined){
                    $http.get('/users/email/' + email).success(function(response) {
                        if(response != null) {
                            $scope.emailExistsMsg = response.email + " already registered";
                            registerForm.email.$setValidity("unique", false);
                        } else {
                            $scope.emailExistsMsg = "";
                            registerForm.email.$setValidity("unique", true);
                        }
                    });
                }
            };

            $scope.duplicateUsername = function(username, registerForm) {
                if (username !== undefined){
                    $http.get('/users/username/' + username).success(function(response) {
                        if(response != null) {
                            $scope.usernameExistsMsg = response.username + " already exists. Please choose a different username";
                            registerForm.username.$setValidity("unique", false);
                        } else {
                            $scope.usernameExistsMsg = "";
                            registerForm.username.$setValidity("unique", true);
                        }
                    });
                }
            };

            $scope.createNewTracksCollection = function(user) {
                console.log("New tracks collection function called");
                
                $http.post('/newCollection', user.username).success(function(response) {
                    console.log(response);
                    // refreshSetlist();
                    // refreshTracks();
                });
            };
        }]
    });