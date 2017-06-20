myApp.controller('RegistrationController', ['$scope', 'Authentication', '$http',
    function($scope, Authentication, $http) {
        $scope.isDataExists = false;
        $scope.login = function() {
            Authentication.login($scope.user);
        };

        $scope.logout = function() {
            Authentication.logout();
        };

        $scope.register = function() {
            Authentication.register($scope.user);
        }; //register

        $scope.getReport = function() {
            //var url = 'http://demo1.infobuild.in:8080/ibi_apps/run.bip?BIP_REQUEST_TYPE=BIP_RUN&BIP_folder=IBFS%253A%252FWFC%252FRepository%252Fgoogle&BIP_item=CarSalesReport.fex&windowHandle=476704&IBI_random=145.91456346994437';
            var url = '../views/data.json';
            $http({
                method: 'GET',
                url: url
            }).
            success(function(response) {
                $scope.reportData = response.records;
                $scope.isDataExists = true;
            }).
            error(function(response) {
                $scope.reportData = response;
            });
        };

    }
]); //Controller