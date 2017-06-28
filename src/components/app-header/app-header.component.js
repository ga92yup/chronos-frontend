'use strict';

import UserService from './../../services/user/user.service';

import template from './app-header.template.html';

import './app-header.style.css';

import "../../images/chronos-logo.svg";

class AppHeaderComponent {
    constructor() {
        this.controller = AppHeaderComponentController;
        this.template = template;

    }

    static get name() {
        return 'appHeader';
    }
}

class AppHeaderComponentController {
    constructor($state, UserService, $mdSidenav) {
        this.$state = $state;
        this.UserService = UserService;
        this.$mdSidenav = $mdSidenav;
    }

    openMenu($mdMenu, ev) {
        $mdMenu.open(ev);
    }

    isAuthenticated() {
        return this.UserService.isAuthenticated();
    }

    getCurrentUser() {
        let user = this.UserService.getCurrentUser();
        return user.username;
    }

    goHome() {
        this.$state.go('movies', {});
    }

    login() {
        this.$state.go('login', {});
    }

    logout() {
        this.UserService.logout();
        this.$state.go('movies', {});
    }


    toggleSidebar() {
        this.$mdSidenav('left').toggle();
    }

    static get $inject() {
        return ['$state', UserService.name, '$mdSidenav'];
    }

}


export default AppHeaderComponent;