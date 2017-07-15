'use strict';

import angular from 'angular';


import TimelineComponent from './timeline.component';


export default angular.module('Timeline', [])
    .directive(TimelineComponent.name, () => new TimelineComponent);