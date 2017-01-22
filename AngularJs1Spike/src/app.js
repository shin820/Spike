require('angular');
require('angular-route');
require('angular-resource');

angular.module('phonecatApp', ['ngRoute', 'core', 'phoneDetail']);

angular.module('phonecatApp').config(['$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/phones', {
            template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
]);

require('./app/core/core.module.js');
require('./app/core/checkmark/checkmark.filter.js');
require('./app/phone-list/phone-list-controller.js');
require('./app/phone-list/phone-list-component.js');
require('./app/phone-detail/phone-detail-module.js');
require('./app/phone-detail/phone-detail-component.js');