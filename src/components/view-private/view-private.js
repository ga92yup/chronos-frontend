'use strict';

import angular from 'angular';

import ViewPrivateComponent from './view-private.component';


export default angular.module('ViewPrivate', [])
    .component(ViewPrivateComponent.name, new ViewPrivateComponent);