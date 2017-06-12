'use strict';

import angular from 'angular';

import ViewTimelineEditComponent from './view-movie-edit.component';


export default angular.module('ViewTimelineEdit', [])
    .component(ViewTimelineEditComponent.name, new ViewTimelineEditComponent);