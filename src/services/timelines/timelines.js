'use strict';

import angular from 'angular';

import TimelinesService from './timeline.service';


export default angular.module('TimelinesServiceDefinition', [])
    .service(TimelinesService.name, TimelinesService)