'use strict';

import angular from 'angular';

import ViewTimelineComponent from './view-timeline.component';


export default angular.module('ViewTimeline', [])
    .component(ViewTimelineComponent.name, new ViewTimelineComponent);