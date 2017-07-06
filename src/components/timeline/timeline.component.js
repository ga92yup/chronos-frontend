'use strict';

import * as vis from '../../../libs/vis';
import  '../../../libs/vis.css';
import './timeline.styles.css';
import template from './timeline.template.html';

class TimelineComponent {
    constructor() {
        this.restrict = 'E';
        this.replace = true;
        this.template = template;

        this.timeline = null;
        this.hasTimeline = true;
        this.scope = {
            data: '='
        };
    }

    link(scope, element, attrs) {

        let data = scope.data;
        // If we don't pass any data, return out of the element
        if (!data) return;


        // DOM element where the Timeline will be attached
        let container = document.getElementById('timelineId1');

        // Create a DataSet (allows two way data-binding)
        let items = new vis.DataSet(data);

        // Configuration for the Timeline
        let options = {};

        // Create a Timeline
        this.timeline = new vis.Timeline(container, items, options);


    }



    static get name() {
        return 'myTimeline';
    }


}



export default TimelineComponent;