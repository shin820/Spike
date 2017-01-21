angular.module('phonecatApp').component('phoneList', {
    templateUrl: 'app/phone-list/phone-list.template.html',
    controller: ['$http',
        function PhoneListController($http) {
            var self = this;
            $http.get('data/phones.json').then(function(response) {
                self.phones = response.data;
            })
        }
    ]
});