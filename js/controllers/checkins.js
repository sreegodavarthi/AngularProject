myApp.controller('CheckInsController', ['$scope', "$location", "$rootScope", "$routeParams", "$firebaseAuth", "$firebaseArray", 
      function($scope, $location, $rootScope, $routeParams, $firebaseAuth, $firebaseArray) {

          var ref, checkinsList;

          $scope.whichmeeting = $routeParams.mId;
          $scope.whichuser = $routeParams.uId;

          ref = firebase.database().ref()
            .child("users").child($scope.whichuser)
            .child("meetings").child($scope.whichmeeting)
            .child("checkins");

          checkinsList = $firebaseArray(ref);
          $scope.checkins = checkinsList;

          $scope.addCheckin = function(){
              $firebaseArray(ref).$add({
                firstname: $scope.user.firstname,
                lastname: $scope.user.lastname,
                email: $scope.user.email,
                date: firebase.database.ServerValue.TIMESTAMP
              }).then(function(){
                  $location.path("/checkins/" + $scope.whichuser + "/" + $scope.whichmeeting + "/checkinsList")
              });//add
          };//addcheckin
         
}]);