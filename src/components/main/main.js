/**
 * Created by trail on 14.06.2017.
 */

'use strict';

import angular from 'angular';

import MainComponent from './main.component';


export default angular.module('Main', [])
    .component(MainComponent.name, new MainComponent);