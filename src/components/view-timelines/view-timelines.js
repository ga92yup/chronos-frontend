'use strict';

import angular from 'angular';

import ViewTimelinesComponent from './view-timelines.component';


export default angular.module('ViewTimelines', [])
    .component(ViewTimelinesComponent.name, new ViewTimelinesComponent);