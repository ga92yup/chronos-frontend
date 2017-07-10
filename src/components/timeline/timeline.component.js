'use strict';

import * as vis from 'vis';
import 'vis/dist/vis.css';
import './timeline.styles.css';

class TimelineComponent {
    constructor() {
        this.restrict = 'E';
        this.replace = true;
        this.scope = {
            data: '=',
        };
    }

    link(scope, element, attrs) {

        let data = scope.data;
        // If we don't pass any data, return out of the element
        if (!data) return;


        // DOM element where the Timeline will be attached
        let container = element[0];

        // Create a DataSet (allows two way data-binding)
        let items = new vis.DataSet(data);

        // Configuration for the Timeline
        let options = {};

        // Create a Timeline
        let timeline = new vis.Timeline(container, items, options);


    }



    static get name() {
        return 'viewTimeline';
    }


}



export default TimelineComponent;