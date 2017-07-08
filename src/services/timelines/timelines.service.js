'use strict';


export default class TimelinesService {

    static get $inject(){
        return ['$http', 'API_URL'];
    }

    constructor($http,API_URL) {
        this.$http = $http;
        this.resourceUrl = `${ API_URL }/timeline/`;

    }

    static get name(){
        return 'timelinesService';
    }

    /**
     * Calls the get request on the /timelines/:queryType/:queryContent.
     *
     * @param queryType The type of the query. It can either be "user" or "public".
     * @param queryContent If type is user: this will be the user ID. If type is public this will be "all" or a filter string.
     *
     * @returns {Promise.<TResult>}
     */
    list(queryType, queryContent) {

        let url = `${ this.resourceUrl }${ queryType }/${ queryContent }`;
        return this.$http.get(url).then(responce => {

            return new Promise((resolve, reject) => {
                console.log("logging responses:");
                console.log(responce.data);
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
                console.log(responce.data);
            });

        })
    }

    /**
     *
     *
     * @param id timeline ID
     */
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