'use strict'


theming.$inject = ['$mdThemingProvider'];
export default function theming ($mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('grey', {
        'default': '50'})
}