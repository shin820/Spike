angular.module('phoneDetail').
component('phoneDetail', {
    templateUrl: 'app/phone-detail/phone-detail.template.html',
    controller: ['$http', '$routeParams',
        function PhoneDetailController($http, $routeParams) {
            var phoneId = $routeParams.phoneId;
            var self = this;

            $http.get('data/' + phoneId + '.json').then(function(response) {
                self.phone = response.data
            });
        }
    ]
});