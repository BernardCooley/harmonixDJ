angular.module('angularApp')
    .component('playSetComponent', {
        bindings: {
            playSetComponent: '<'
        },
        templateUrl: 'src/components/playSetComponent/playSet.html',
        
        controller: ['$scope', '$http', function ($scope, $http) {
            console.log("Play set controller");

            var refreshSetlist = function() {
                $http.get('/setlist').then(function(response) {
                    console.log("Set list refreshed");
                    $scope.setlist = response;
                    $scope.setTrack = {};
                });
            };

            var refreshTracks = function() {
                $http.get('/tracks').then(function(response) {
                    console.log("Tracks refreshed");
                    $scope.tracks = response;
                    $scope.track = {};
                });
            };

            refreshSetlist();
            refreshTracks();
            $scope.showBtn = true;
            $scope.hideBtn = false;

            $scope.addToSL = function(id) {
                $http.get('/tracks/' + id).then(function(response) {
                    console.log(response);
                    $http.post('/setlist', {Artist: response.Artist, Title: response.Title, Key: response.Key}).then(function(response) {
                        console.log(response);
                        refreshSetlist();
                    });
                    $scope.track = response.Key;
                    console.log(response.Key);
                });
            };

            $scope.removeFromSL = function(id, err) {
                console.log(id);
                $http.delete('/setlist/' + id).then(function(response) {
                    refreshSetlist();
                    refreshTracks();
                });
            };

            $scope.saveNewSetlist = function() {
                console.log("Save new set called");
                
            };
        }]
    });