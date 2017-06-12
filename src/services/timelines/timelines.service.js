'use strict';


export default class TimelinesService {

    static get $inject(){
        return ['$http', 'API_URL'];
    }

    constructor($http,API_URL) {
        this.$http = $http;
        this.resourceUrl = `${ API_URL }/timelines/`;

    }

    static get name(){
        return 'timelinesService';
    }

    list() {

        let url = this.resourceUrl;
        return this.$http.get(url).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);

            });

        });

    }

    get(id) {
        let url = `${ this.resourceUrl }${ id }`;
        return this.$http.get(url).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }


    create(timeline) {
        let url = this.resourceUrl;
        return this.$http.post(url,timeline).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }

    delete(id) {
        let url = `${ this.resourceUrl }${ id }`;
        return this.$http.delete(url).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.status);
            });

        })
    }

    update(timeline) {

        let url = `${ this.resourceUrl }${ timeline['_id'] }`;
        return this.$http.put(url,timeline).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }


}