'use strict';

import angular from 'angular';

import TimelinesService from './timelines.service';


export default angular.module('TimelinesServiceDefinition', [])
    .service(TimelinesService.name, TimelinesService)