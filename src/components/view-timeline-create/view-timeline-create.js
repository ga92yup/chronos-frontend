'use strict';

import angular from 'angular';
import Timeline from '../timeline/timeline';

import ViewTimelineCreateComponent from './view-timeline-create.component';


export default angular.module('ViewTimelineCreate', [Timeline.name])
    .component(ViewTimelineCreateComponent.name, new ViewTimelineCreateComponent);