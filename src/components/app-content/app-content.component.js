
'use strict';

import template from './app-content.template.html';

class AppContentComponent {
    constructor(){
        this.controller = AppContentComponentController;
        this.template = template;

    }
    static get name() {
        return 'appContent';
    }
}

class AppContentComponentController{
    constructor(){
    }

  //  toggleSidebar() {
  //      console.log("togglefunction");
  //      this.$mdSidenav('left').toggle();
  //  }

    static get $inject() {
        return [];
    }

}

export default AppContentComponent;