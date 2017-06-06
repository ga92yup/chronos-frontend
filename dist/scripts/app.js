webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularjs = __webpack_require__(3);

	var _angularjs2 = _interopRequireDefault(_angularjs);

	var _angularMaterial = __webpack_require__(89);

	var _angularMaterial2 = _interopRequireDefault(_angularMaterial);

	__webpack_require__(95);

	var _angularMaterialIcons = __webpack_require__(99);

	var _angularMaterialIcons2 = _interopRequireDefault(_angularMaterialIcons);

	var _movies = __webpack_require__(101);

	var _movies2 = _interopRequireDefault(_movies);

	var _user = __webpack_require__(103);

	var _user2 = _interopRequireDefault(_user);

	var _routes = __webpack_require__(105);

	var _routes2 = _interopRequireDefault(_routes);

	var _middlewares = __webpack_require__(118);

	var _middlewares2 = _interopRequireDefault(_middlewares);

	var _appContent = __webpack_require__(119);

	var _appContent2 = _interopRequireDefault(_appContent);

	var _viewMovies = __webpack_require__(132);

	var _viewMovies2 = _interopRequireDefault(_viewMovies);

	var _viewMovie = __webpack_require__(133);

	var _viewMovie2 = _interopRequireDefault(_viewMovie);

	var _viewMovieEdit = __webpack_require__(134);

	var _viewMovieEdit2 = _interopRequireDefault(_viewMovieEdit);

	var _viewMovieCreate = __webpack_require__(135);

	var _viewMovieCreate2 = _interopRequireDefault(_viewMovieCreate);

	var _viewLogin = __webpack_require__(136);

	var _viewLogin2 = _interopRequireDefault(_viewLogin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = _angular2.default.module('app', [_angularjs2.default, _angularMaterial2.default, _angularMaterialIcons2.default, _user2.default.name, _movies2.default.name, _appContent2.default.name, _viewMovies2.default.name, _viewMovie2.default.name, _viewMovieEdit2.default.name, _viewMovieCreate2.default.name, _viewLogin2.default.name]);

	app.constant('API_URL', 'http://5aee6f28.ngrok.io/api');
	app.config(_routes2.default);
	app.config(_middlewares2.default);

	_angular2.default.element(document).ready(function () {
	    return _angular2.default.bootstrap(document.body, [app.name], {
	        strictDi: true
	    });
	});

	exports.default = app;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _movies = __webpack_require__(102);

	var _movies2 = _interopRequireDefault(_movies);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('MoviesServiceDefinition', []).service(_movies2.default.name, _movies2.default);

/***/ }),
/* 102 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MoviesService = function () {
	    _createClass(MoviesService, null, [{
	        key: '$inject',
	        get: function get() {
	            return ['$http', 'API_URL'];
	        }
	    }]);

	    function MoviesService($http, API_URL) {
	        _classCallCheck(this, MoviesService);

	        this.$http = $http;
	        this.resourceUrl = API_URL + '/movies/';
	    }

	    _createClass(MoviesService, [{
	        key: 'list',
	        value: function list() {

	            var url = this.resourceUrl;
	            return this.$http.get(url).then(function (responce) {

	                return new Promise(function (resolve, reject) {
	                    resolve(responce.data);
	                });
	            });
	        }
	    }, {
	        key: 'get',
	        value: function get(id) {
	            var url = '' + this.resourceUrl + id;
	            return this.$http.get(url).then(function (responce) {

	                return new Promise(function (resolve, reject) {
	                    resolve(responce.data);
	                });
	            });
	        }
	    }, {
	        key: 'create',
	        value: function create(movie) {
	            var url = this.resourceUrl;
	            return this.$http.post(url, movie).then(function (responce) {

	                return new Promise(function (resolve, reject) {
	                    resolve(responce.data);
	                });
	            });
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(id) {
	            var url = '' + this.resourceUrl + id;
	            return this.$http.delete(url).then(function (responce) {

	                return new Promise(function (resolve, reject) {
	                    resolve(responce.status);
	                });
	            });
	        }
	    }, {
	        key: 'update',
	        value: function update(movie) {

	            var url = '' + this.resourceUrl + movie['_id'];
	            return this.$http.put(url, movie).then(function (responce) {

	                return new Promise(function (resolve, reject) {
	                    resolve(responce.data);
	                });
	            });
	        }
	    }], [{
	        key: 'name',
	        get: function get() {
	            return 'moviesService';
	        }
	    }]);

	    return MoviesService;
	}();

	exports.default = MoviesService;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _user = __webpack_require__(104);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('UserServiceDefinition', []).service(_user2.default.name, _user2.default);

/***/ }),
/* 104 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UserService = function () {
	    _createClass(UserService, null, [{
	        key: '$inject',
	        get: function get() {
	            return ['$http', '$window', 'API_URL'];
	        }
	    }]);

	    function UserService($http, $window, API_URL) {
	        _classCallCheck(this, UserService);

	        this.$http = $http;
	        this.$window = $window;
	        this.API_URL = API_URL;
	    }

	    _createClass(UserService, [{
	        key: 'register',
	        value: function register(user, pass) {
	            return this.$http.post(this.API_URL + '/user/signup', {
	                username: user,
	                password: pass
	            });
	        }
	    }, {
	        key: 'login',
	        value: function login(user, pass) {
	            return this.$http.post(this.API_URL + '/user/login', {
	                username: user,
	                password: pass
	            });
	        }
	    }, {
	        key: 'logout',
	        value: function logout() {
	            this.$window.localStorage.removeItem('jwtToken');
	        }
	    }, {
	        key: 'getCurrentUser',
	        value: function getCurrentUser() {
	            var token = this.$window.localStorage['jwtToken'];
	            if (!token) return {};

	            var base64Url = token.split('.')[1];
	            var base64 = base64Url.replace('-', '+').replace('_', '/');
	            return JSON.parse(this.$window.atob(base64)).user;
	        }
	    }, {
	        key: 'isAuthenticated',
	        value: function isAuthenticated() {
	            return !!this.$window.localStorage['jwtToken'];
	        }
	    }], [{
	        key: 'name',
	        get: function get() {
	            return 'UserService';
	        }
	    }]);

	    return UserService;
	}();

	exports.default = UserService;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = config;

	var _viewMovies = __webpack_require__(106);

	var _viewMovies2 = _interopRequireDefault(_viewMovies);

	var _viewMovie = __webpack_require__(108);

	var _viewMovie2 = _interopRequireDefault(_viewMovie);

	var _viewMovieEdit = __webpack_require__(110);

	var _viewMovieEdit2 = _interopRequireDefault(_viewMovieEdit);

	var _viewMovieCreate = __webpack_require__(112);

	var _viewMovieCreate2 = _interopRequireDefault(_viewMovieCreate);

	var _viewLogin = __webpack_require__(114);

	var _viewLogin2 = _interopRequireDefault(_viewLogin);

	var _movies = __webpack_require__(102);

	var _movies2 = _interopRequireDefault(_movies);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	resolveMovie.$inject = ['$stateParams', _movies2.default.name];
	function resolveMovie($stateParams, moviesService) {
	    return moviesService.get($stateParams.movieId);
	}

	resolveMovies.$inject = [_movies2.default.name];
	function resolveMovies(moviesService) {
	    return moviesService.list();
	}

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

	    // For any unmatched url, redirect to /home
	    $urlRouterProvider.otherwise("/movies");

	    $stateProvider.state('movies', {
	        url: '/movies',
	        component: _viewMovies2.default.name,
	        resolve: {
	            movies: resolveMovies
	        }
	    }).state('movieAdd', {
	        url: '/movies/new',
	        component: _viewMovieCreate2.default.name
	    }).state('movie', {
	        url: '/movies/:movieId',
	        component: _viewMovie2.default.name,
	        resolve: {
	            movie: resolveMovie
	        }

	    }).state('movieEdit', {
	        url: '/movies/:movieId/edit',
	        component: _viewMovieEdit2.default.name,
	        resolve: {
	            movie: resolveMovie
	        }
	    }).state('login', {
	        url: '/login',
	        component: _viewLogin2.default.name
	    });
	}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _viewMoviesTemplate = __webpack_require__(107);

	var _viewMoviesTemplate2 = _interopRequireDefault(_viewMoviesTemplate);

	var _movies = __webpack_require__(102);

	var _movies2 = _interopRequireDefault(_movies);

	var _user = __webpack_require__(104);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ViewMoviesComponent = function () {
	    function ViewMoviesComponent() {
	        _classCallCheck(this, ViewMoviesComponent);

	        this.controller = ViewMoviesComponentController;
	        this.template = _viewMoviesTemplate2.default;
	        this.bindings = {
	            movies: '<'
	        };
	    }

	    _createClass(ViewMoviesComponent, null, [{
	        key: 'name',
	        get: function get() {
	            return 'viewMovies';
	        }
	    }]);

	    return ViewMoviesComponent;
	}();

	var ViewMoviesComponentController = function () {
	    function ViewMoviesComponentController($state, MoviesService, UserService) {
	        _classCallCheck(this, ViewMoviesComponentController);

	        this.$state = $state;
	        this.MoviesService = MoviesService;
	        this.UserService = UserService;
	    }

	    _createClass(ViewMoviesComponentController, [{
	        key: 'details',
	        value: function details(movie) {
	            var _id = movie['_id'];
	            this.$state.go('movie', { movieId: _id });
	        }
	    }, {
	        key: 'edit',
	        value: function edit(movie) {

	            if (this.UserService.isAuthenticated()) {
	                var _id = movie['_id'];
	                this.$state.go('movieEdit', { movieId: _id });
	            } else {
	                this.$state.go('login', {});
	            }
	        }
	    }, {
	        key: 'newMovie',
	        value: function newMovie() {

	            if (this.UserService.isAuthenticated()) {
	                this.$state.go('movieAdd', {});
	            } else {
	                this.$state.go('login', {});
	            }
	        }
	    }, {
	        key: 'delete',
	        value: function _delete(movie) {
	            var _this = this;

	            if (this.UserService.isAuthenticated()) {
	                var _id = movie['_id'];

	                this.MoviesService.delete(_id).then(function (response) {
	                    var index = _this.movies.map(function (x) {
	                        return x['_id'];
	                    }).indexOf(_id);
	                    _this.movies.splice(index, 1);
	                });
	            } else {
	                this.$state.go('login', {});
	            }
	        }
	    }], [{
	        key: '$inject',
	        get: function get() {
	            return ['$state', _movies2.default.name, _user2.default.name];
	        }
	    }]);

	    return ViewMoviesComponentController;
	}();

	exports.default = ViewMoviesComponent;

/***/ }),
/* 107 */
/***/ (function(module, exports) {

	module.exports = "<md-list>\n\n    <md-list-item aria-label=\"Movie\" ng-click=\"$ctrl.details(movie)\" class=\"noright\" ng-repeat=\"movie in $ctrl.movies\">\n        <md-icon><ng-md-icon icon=\"insert_drive_file\"></ng-md-icon></md-icon>\n\n        <p> {{movie.title}} </p>\n\n        <md-button class=\"md-icon-button\" aria-label=\"Edit Item\" ng-click=\"$ctrl.edit(movie)\" >\n            <md-icon><ng-md-icon icon=\"mode_edit\"></ng-md-icon></md-icon>\n        </md-button>\n\n        <md-button class=\"md-icon-button\"aria-label=\"Delete Item\" ng-click=\"$ctrl.delete(movie)\" >\n            <md-icon><ng-md-icon icon=\"delete\" ></ng-md-icon></md-icon>\n        </md-button>\n        <md-divider ng-if=\"!$last\"></md-divider>\n    </md-list-item>\n    <md-divider></md-divider>\n\n</md-list>\n<md-button class=\"md-fab md-fab-bottom-right md-ink-ripple\" aria-label=\"New Movie\" ng-click=\"$ctrl.newMovie()\">\n    <md-icon><ng-md-icon icon=\"add\"></ng-md-icon></md-icon>\n</md-button>\n\n\n";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _viewMovieTemplate = __webpack_require__(109);

	var _viewMovieTemplate2 = _interopRequireDefault(_viewMovieTemplate);

	var _movies = __webpack_require__(102);

	var _movies2 = _interopRequireDefault(_movies);

	var _user = __webpack_require__(104);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ViewMovieComponent = function () {
	    function ViewMovieComponent() {
	        _classCallCheck(this, ViewMovieComponent);

	        this.controller = ViewMovieComponentController;
	        this.template = _viewMovieTemplate2.default;
	        this.bindings = {
	            movie: '<'
	        };
	    }

	    _createClass(ViewMovieComponent, null, [{
	        key: 'name',
	        get: function get() {
	            return 'viewMovie';
	        }
	    }]);

	    return ViewMovieComponent;
	}();

	var ViewMovieComponentController = function () {
	    function ViewMovieComponentController($state, MoviesService, UserService) {
	        _classCallCheck(this, ViewMovieComponentController);

	        this.$state = $state;
	        this.MoviesService = MoviesService;
	        this.UserService = UserService;
	    }

	    _createClass(ViewMovieComponentController, [{
	        key: 'edit',
	        value: function edit() {

	            if (this.UserService.isAuthenticated()) {
	                var _id = this.movie['_id'];
	                this.$state.go('movieEdit', { movieId: _id });
	            } else {
	                this.$state.go('login', {});
	            }
	        }
	    }, {
	        key: 'delete',
	        value: function _delete() {
	            var _this = this;

	            if (this.UserService.isAuthenticated()) {
	                var _id = this.movie['_id'];

	                this.MoviesService.delete(_id).then(function (response) {
	                    _this.$state.go('movies', {});
	                });
	            } else {
	                this.$state.go('login', {});
	            }
	        }
	    }, {
	        key: 'getPosterURL',
	        value: function getPosterURL() {
	            var posterURL = 'http://placehold.it/32x32';
	            if (this.movie.hasOwnProperty('posters')) {
	                if (this.movie.posters.hasOwnProperty('thumbnail')) {
	                    posterURL = this.movie.posters.thumbnail;
	                } else if (this.movie.posters.hasOwnProperty('profile')) {
	                    posterURL = this.movie.posters.profile;
	                } else if (this.movie.posters.hasOwnProperty('detailed')) {
	                    posterURL = this.movie.posters.detailed;
	                } else {
	                    posterURL = this.movie.posters.original;
	                }
	            }
	            return posterURL;
	        }
	    }], [{
	        key: '$inject',
	        get: function get() {
	            return ['$state', _movies2.default.name, _user2.default.name];
	        }
	    }]);

	    return ViewMovieComponentController;
	}();

	exports.default = ViewMovieComponent;

/***/ }),
/* 109 */
/***/ (function(module, exports) {

	module.exports = "<md-card>\n    <md-card-title>\n        <md-card-title-media>\n            <div layout=\"row\" layout-align=\"center center\" layout-padding>\n                <img ng-src=\"{{$ctrl.getPosterURL()}}\" class=\"md-media-md\">\n            </div>\n        </md-card-title-media>\n        <md-card-title-text>\n            <md-card-actions layout=\"row\" layout-align=\"end center\">\n                <md-button class=\"md-icon-button\" aria-label=\"Edit Item\" ng-click=\"$ctrl.edit()\" >\n                    <md-icon><ng-md-icon icon=\"mode_edit\"></ng-md-icon></md-icon>\n                </md-button>\n\n                <md-button class=\"md-icon-button\"aria-label=\"Delete Item\" ng-click=\"$ctrl.delete()\" >\n                    <md-icon><ng-md-icon icon=\"delete\" ></ng-md-icon></md-icon>\n                </md-button>\n            </md-card-actions>\n\n            <span class=\"md-headline\">{{$ctrl.movie.title}}</span>\n            <span class=\"md-subhead\">{{$ctrl.movie.year}}</span>\n\n        </md-card-title-text>\n\n    </md-card-title>\n\n    <md-card-content>\n        <p>{{$ctrl.movie.mpaa_rating}}</p>\n        <p>{{$ctrl.movie.synopsis}}</p>\n    </md-card-content>\n\n\n</md-card>";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _viewMovieEditTemplate = __webpack_require__(111);

	var _viewMovieEditTemplate2 = _interopRequireDefault(_viewMovieEditTemplate);

	var _movies = __webpack_require__(102);

	var _movies2 = _interopRequireDefault(_movies);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ViewMovieEditComponent = function () {
	    function ViewMovieEditComponent() {
	        _classCallCheck(this, ViewMovieEditComponent);

	        this.controller = ViewMovieEditComponentController;
	        this.template = _viewMovieEditTemplate2.default;
	        this.bindings = {
	            movie: '<'
	        };
	    }

	    _createClass(ViewMovieEditComponent, null, [{
	        key: 'name',
	        get: function get() {
	            return 'viewMovieEdit';
	        }
	    }]);

	    return ViewMovieEditComponent;
	}();

	var ViewMovieEditComponentController = function () {
	    function ViewMovieEditComponentController($state, MoviesService) {
	        _classCallCheck(this, ViewMovieEditComponentController);

	        this.model = {};
	        this.$state = $state;
	        this.MoviesService = MoviesService;
	    }

	    _createClass(ViewMovieEditComponentController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            //Clone the Movie Data
	            this.model = JSON.parse(JSON.stringify(this.movie));
	        }
	    }, {
	        key: 'cancel',
	        value: function cancel() {
	            this.model = JSON.parse(JSON.stringify(this.movie));
	            this.$state.go('movies', {});
	        }
	    }, {
	        key: 'save',
	        value: function save() {
	            var _this = this;

	            var _id = this.movie['_id'];

	            this.MoviesService.update(this.model).then(function (data) {
	                _this.movie = JSON.parse(JSON.stringify(data));

	                _this.$state.go('movie', { movieId: _id });
	            });
	        }
	    }, {
	        key: 'delete',
	        value: function _delete() {
	            var _this2 = this;

	            var _id = this.movie['_id'];

	            this.MoviesService.delete(_id).then(function (response) {
	                _this2.$state.go('movies', {});
	            });
	        }
	    }], [{
	        key: '$inject',
	        get: function get() {
	            return ['$state', _movies2.default.name];
	        }
	    }]);

	    return ViewMovieEditComponentController;
	}();

	exports.default = ViewMovieEditComponent;

/***/ }),
/* 111 */
/***/ (function(module, exports) {

	module.exports = "<div layout=\"column\" layout-padding>\n    <md-content class=\"md-no-momentum\">\n        <h1> {{$ctrl.movie.title}} </h1>\n        <br/>\n        <form name=\"movieForm\">\n            <md-input-container class=\"md-icon-float md-block\">\n                <label>Title</label>\n                <md-icon><ng-md-icon icon=\"title\" ></ng-md-icon></md-icon>\n                <input ng-model=\"$ctrl.model.title\" type=\"text\">\n            </md-input-container>\n            <md-input-container class=\"md-icon-float md-block\">\n                <label>Year</label>\n                <md-icon><ng-md-icon icon=\"date_range\" ></ng-md-icon></md-icon>\n                <input ng-model=\"$ctrl.model.year\" type=\"text\">\n            </md-input-container>\n            <md-input-container class=\"md-icon-float md-block\">\n                <label>MPAA Rating</label>\n                <md-icon><ng-md-icon icon=\"title\" ></ng-md-icon></md-icon>\n                <input ng-model=\"$ctrl.model.mpaa_rating\" type=\"text\">\n            </md-input-container>\n            <md-input-container class=\"md-block\">\n                <label>Synopsis</label>\n                <textarea ng-model=\"$ctrl.model.synopsis\" md-maxlength=\"1000\" rows=\"8\" md-select-on-focus></textarea>\n            </md-input-container>\n            <div layout=\"row\">\n                <span flex></span>\n                <md-button class=\"md-raised md-primary\" type=\"submit\" ng-click=\"$ctrl.save()\">Save</md-button>\n                <md-button class=\"md-raised\" ng-click=\"$ctrl.cancel()\">Cancel</md-button>\n            </div>\n\n        </form>\n    </md-content>\n\n</div>";

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _viewMovieCreateTemplate = __webpack_require__(113);

	var _viewMovieCreateTemplate2 = _interopRequireDefault(_viewMovieCreateTemplate);

	var _movies = __webpack_require__(102);

	var _movies2 = _interopRequireDefault(_movies);

	var _user = __webpack_require__(104);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ViewMovieCreateComponent = function () {
	    function ViewMovieCreateComponent() {
	        _classCallCheck(this, ViewMovieCreateComponent);

	        this.controller = ViewMovieCreateComponentController;
	        this.template = _viewMovieCreateTemplate2.default;
	    }

	    _createClass(ViewMovieCreateComponent, null, [{
	        key: 'name',
	        get: function get() {
	            return 'viewMovieCreate';
	        }
	    }]);

	    return ViewMovieCreateComponent;
	}();

	var ViewMovieCreateComponentController = function () {
	    function ViewMovieCreateComponentController($state, MoviesService, UserService) {
	        _classCallCheck(this, ViewMovieCreateComponentController);

	        this.movie = {};
	        this.$state = $state;
	        this.MoviesService = MoviesService;
	        this.UserService = UserService;
	    }

	    _createClass(ViewMovieCreateComponentController, [{
	        key: 'cancel',
	        value: function cancel() {
	            this.$state.go('movies', {});
	        }
	    }, {
	        key: 'save',
	        value: function save() {
	            var _this = this;

	            var user = this.UserService.getCurrentUser();

	            this.movie['user'] = user['_id'];
	            this.MoviesService.create(this.movie).then(function (data) {
	                var _id = data['_id'];
	                _this.$state.go('movie', { movieId: _id });
	            });
	        }
	    }], [{
	        key: '$inject',
	        get: function get() {
	            return ['$state', _movies2.default.name, _user2.default.name];
	        }
	    }]);

	    return ViewMovieCreateComponentController;
	}();

	exports.default = ViewMovieCreateComponent;

/***/ }),
/* 113 */
/***/ (function(module, exports) {

	module.exports = "<div layout=\"column\" layout-padding>\n    <md-content class=\"md-no-momentum\">\n        <h1> {{$ctrl.movie.title}} </h1>\n        <br/>\n        <form name=\"movieForm\">\n            <md-input-container class=\"md-icon-float md-block\">\n                <label>Title</label>\n                <md-icon><ng-md-icon icon=\"title\" ></ng-md-icon></md-icon>\n                <input ng-model=\"$ctrl.movie.title\" type=\"text\">\n            </md-input-container>\n            <md-input-container class=\"md-icon-float md-block\">\n                <label>Year</label>\n                <md-icon><ng-md-icon icon=\"date_range\" ></ng-md-icon></md-icon>\n                <input ng-model=\"$ctrl.movie.year\" type=\"text\">\n            </md-input-container>\n            <md-input-container class=\"md-icon-float md-block\">\n                <label>MPAA Rating</label>\n                <md-icon><ng-md-icon icon=\"title\" ></ng-md-icon></md-icon>\n                <input ng-model=\"$ctrl.movie.mpaa_rating\" type=\"text\">\n            </md-input-container>\n            <md-input-container class=\"md-block\">\n                <label>Synopsis</label>\n                <textarea ng-model=\"$ctrl.movie.synopsis\" md-maxlength=\"1000\" rows=\"8\" md-select-on-focus></textarea>\n            </md-input-container>\n            <div layout=\"row\">\n                <span flex></span>\n                <md-button class=\"md-raised md-primary\" type=\"submit\" ng-click=\"$ctrl.save()\">Save</md-button>\n                <md-button class=\"md-raised\" ng-click=\"$ctrl.cancel()\">Cancel</md-button>\n            </div>\n\n        </form>\n    </md-content>\n\n</div>";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _user = __webpack_require__(104);

	var _user2 = _interopRequireDefault(_user);

	var _viewLoginTemplate = __webpack_require__(115);

	var _viewLoginTemplate2 = _interopRequireDefault(_viewLoginTemplate);

	__webpack_require__(116);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ViewLoginComponent = function () {
	    function ViewLoginComponent() {
	        _classCallCheck(this, ViewLoginComponent);

	        this.controller = ViewLoginComponentController;
	        this.template = _viewLoginTemplate2.default;
	    }

	    _createClass(ViewLoginComponent, null, [{
	        key: 'name',
	        get: function get() {
	            return 'viewLogin';
	        }
	    }]);

	    return ViewLoginComponent;
	}();

	var ViewLoginComponentController = function () {
	    function ViewLoginComponentController($state, UserService) {
	        _classCallCheck(this, ViewLoginComponentController);

	        this.$state = $state;
	        this.UserService = UserService;
	    }

	    _createClass(ViewLoginComponentController, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.login = {};
	        }
	    }, {
	        key: 'submit',
	        value: function submit() {
	            var _this = this;

	            var user = this.login.username;
	            var password = this.login.password;

	            this.UserService.login(user, password).then(function () {
	                _this.$state.go('movies', {});
	            });
	        }
	    }], [{
	        key: '$inject',
	        get: function get() {
	            return ['$state', _user2.default.name];
	        }
	    }]);

	    return ViewLoginComponentController;
	}();

	exports.default = ViewLoginComponent;

/***/ }),
/* 115 */
/***/ (function(module, exports) {

	module.exports = "<div layout=\"column\" layout-padding=\"\">\n    <span flex=\"20\"></span>\n    <md-content class=\"login-form\" layout=\"row\" flex=\"35\">\n        <span flex=\"35\"></span>\n        <md-card flex=\"30\">\n            <md-card-content>\n                <form name=\"LoginForm\">\n                    <md-input-container class=\"md-block\">\n                        <label>Login</label>\n                        <input type=\"text\" name=\"username\" ng-model=\"$ctrl.login.username\" placeholder=\"login\" required=\"\"/>\n                        <div ng-messages=\"LoginForm.username.$error\" role=\"alert\" multiple=\"\">\n                            <div ng-message=\"required\">Please enter your username.</div>\n                        </div>\n                    </md-input-container>\n                    <md-input-container class=\"md-block\">\n                        <label>Password</label>\n                        <input type=\"password\" name=\"password\" ng-model=\"$ctrl.login.password\" placeholder=\"password\" required=\"\" md-maxlength=\"64\"/>\n                        <div ng-messages=\"LoginForm.password.$error\" role=\"alert\" multiple=\"\">\n                            <div ng-message=\"required\">Please enter your password.</div>\n                        </div>\n                    </md-input-container>\n                    <md-button ng-disabled=\"!LoginForm.$valid\" ng-click=\"$ctrl.submit()\" class=\"md-raised md-primary\">&nbsp Login &nbsp</md-button>\n                </form>\n            </md-card-content>\n        </md-card>\n        <span flex></span>\n    </md-content>\n    <span flex></span>\n</div>";

/***/ }),
/* 116 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 117 */,
/* 118 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = middlewares;
	middlewares.$inject = ['$httpProvider', '$windowProvider', '$qProvider', '$stateProvider', 'API_URL'];
	function middlewares($httpProvider, $windowProvider, $qProvider, $stateProvider, API_URL) {

	    var $window = $windowProvider.$get();
	    var $state = $stateProvider.$get();
	    var $q = $qProvider.$get();

	    //  register the JWT interceptor via an anonymous factory
	    $httpProvider.interceptors.push(function () {
	        return {
	            'request': function request(config) {

	                //Making a request to the API Server
	                if (config.url.indexOf(API_URL) === 0) {

	                    var token = $window.localStorage['jwtToken'];

	                    if (token) {
	                        config.headers.Authorization = 'JWT ' + token;
	                    }
	                }

	                return config;
	            },
	            'response': function response(_response) {

	                //Receiving response from  the API Server
	                if (_response && _response.config.url.indexOf(API_URL) === 0) {

	                    // If a token was sent back, save it
	                    if (_response.data.hasOwnProperty('token')) {
	                        $window.localStorage['jwtToken'] = _response.data.token;
	                    }
	                }

	                return _response;
	            }
	        };
	    });

	    //  register the Error interceptor via an anonymous factory
	    $httpProvider.interceptors.push(function () {
	        return {
	            'responseError': function responseError(rejection) {

	                // do something on error
	                if (rejection.status == 400 || rejection.status == 401) {
	                    $state.go('login', {});
	                }

	                return $q.reject(rejection);
	            }

	        };
	    });
	}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _appHeader = __webpack_require__(120);

	var _appHeader2 = _interopRequireDefault(_appHeader);

	var _appFooter = __webpack_require__(125);

	var _appFooter2 = _interopRequireDefault(_appFooter);

	var _appContent = __webpack_require__(130);

	var _appContent2 = _interopRequireDefault(_appContent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('AppView', [_appHeader2.default.name, _appFooter2.default.name]).component(_appContent2.default.name, new _appContent2.default());

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _appHeader = __webpack_require__(121);

	var _appHeader2 = _interopRequireDefault(_appHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('AppHeader', []).component(_appHeader2.default.name, new _appHeader2.default());

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _user = __webpack_require__(104);

	var _user2 = _interopRequireDefault(_user);

	var _appHeaderTemplate = __webpack_require__(122);

	var _appHeaderTemplate2 = _interopRequireDefault(_appHeaderTemplate);

	__webpack_require__(123);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AppHeaderComponent = function () {
	    function AppHeaderComponent() {
	        _classCallCheck(this, AppHeaderComponent);

	        this.controller = AppHeaderComponentController;
	        this.template = _appHeaderTemplate2.default;
	    }

	    _createClass(AppHeaderComponent, null, [{
	        key: 'name',
	        get: function get() {
	            return 'appHeader';
	        }
	    }]);

	    return AppHeaderComponent;
	}();

	var AppHeaderComponentController = function () {
	    function AppHeaderComponentController($state, UserService) {
	        _classCallCheck(this, AppHeaderComponentController);

	        this.$state = $state;
	        this.UserService = UserService;
	    }

	    _createClass(AppHeaderComponentController, [{
	        key: 'openMenu',
	        value: function openMenu($mdMenu, ev) {
	            $mdMenu.open(ev);
	        }
	    }, {
	        key: 'isAuthenticated',
	        value: function isAuthenticated() {
	            return this.UserService.isAuthenticated();
	        }
	    }, {
	        key: 'getCurrentUser',
	        value: function getCurrentUser() {
	            var user = this.UserService.getCurrentUser();
	            return user.username;
	        }
	    }, {
	        key: 'goHome',
	        value: function goHome() {
	            this.$state.go('movies', {});
	        }
	    }, {
	        key: 'login',
	        value: function login() {
	            this.$state.go('login', {});
	        }
	    }, {
	        key: 'logout',
	        value: function logout() {
	            this.UserService.logout();
	            this.$state.go('movies', {});
	        }
	    }], [{
	        key: '$inject',
	        get: function get() {
	            return ['$state', _user2.default.name];
	        }
	    }]);

	    return AppHeaderComponentController;
	}();

	exports.default = AppHeaderComponent;

/***/ }),
/* 122 */
/***/ (function(module, exports) {

	module.exports = "<md-toolbar>\n    <div class=\"md-toolbar-tools\">\n\n        <a ui-sref=\"movies\" layout=\"row\">\n            <md-icon><ng-md-icon icon=\"schedule\" ></ng-md-icon></md-icon>\n            <h2>Chronos</h2>\n        </a>\n\n        <span flex></span>\n\n        <span flex=\"5\"></span>\n        <md-menu>\n            <md-button aria-label=\"More\" class=\"md-icon-button\" ng-click=\"$ctrl.openMenu($mdMenu, $event)\">\n                <md-icon><ng-md-icon icon=\"more_vert\" ></ng-md-icon></md-icon>\n            </md-button>\n            <md-menu-content width=\"4\">\n                <md-menu-item ng-if=\"$ctrl.isAuthenticated()\">\n                    <md-button>\n                        <md-icon md-menu-align-target><ng-md-icon icon=\"account_circle\" ></ng-md-icon></md-icon>\n                        {{$ctrl.getCurrentUser()}}\n                    </md-button>\n                </md-menu-item>\n                <md-menu-divider ng-if=\"$ctrl.isAuthenticated()\"></md-menu-divider>\n                <md-menu-item ng-if=\"$ctrl.isAuthenticated()\">\n                    <md-button ng-click=\"$ctrl.logout($event)\">\n                        <md-icon md-menu-align-target><ng-md-icon icon=\"logout\" ></ng-md-icon></md-icon>\n                        Logout\n                    </md-button>\n                </md-menu-item>\n                <md-menu-item ng-if=\"!$ctrl.isAuthenticated()\">\n                    <md-button ng-click=\"$ctrl.login($event)\">\n                        <md-icon md-menu-align-target><ng-md-icon icon=\"login\" ></ng-md-icon></md-icon>\n                        Login\n                    </md-button>\n                </md-menu-item>\n            </md-menu-content>\n        </md-menu>\n\n    </div>\n</md-toolbar>";

/***/ }),
/* 123 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 124 */,
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _appFooter = __webpack_require__(126);

	var _appFooter2 = _interopRequireDefault(_appFooter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('AppFooter', []).component(_appFooter2.default.name, new _appFooter2.default());

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _appFooterTemplate = __webpack_require__(127);

	var _appFooterTemplate2 = _interopRequireDefault(_appFooterTemplate);

	__webpack_require__(128);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AppFooterComponent = function () {
	    function AppFooterComponent() {
	        _classCallCheck(this, AppFooterComponent);

	        this.controller = AppFooterComponentController;
	        this.template = _appFooterTemplate2.default;
	    }

	    _createClass(AppFooterComponent, null, [{
	        key: 'name',
	        get: function get() {
	            return 'appFooter';
	        }
	    }]);

	    return AppFooterComponent;
	}();

	var AppFooterComponentController = function AppFooterComponentController() {
	    _classCallCheck(this, AppFooterComponentController);

	    this.year = new Date().getFullYear();
	};

	exports.default = AppFooterComponent;

/***/ }),
/* 127 */
/***/ (function(module, exports) {

	module.exports = "<footer>\n    <div layout=\"row\" layout-align=\"center center\">\n        <p>© {{ $ctrl.year }} team39. All rights reserved.</p>\n    </div>\n</footer>";

/***/ }),
/* 128 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 129 */,
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _appContentTemplate = __webpack_require__(131);

	var _appContentTemplate2 = _interopRequireDefault(_appContentTemplate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AppContentComponent = function () {
	    function AppContentComponent() {
	        _classCallCheck(this, AppContentComponent);

	        this.controller = AppContentComponentController;
	        this.template = _appContentTemplate2.default;
	    }

	    _createClass(AppContentComponent, null, [{
	        key: 'name',
	        get: function get() {
	            return 'appContent';
	        }
	    }]);

	    return AppContentComponent;
	}();

	var AppContentComponentController = function AppContentComponentController() {
	    _classCallCheck(this, AppContentComponentController);
	};

	exports.default = AppContentComponent;

/***/ }),
/* 131 */
/***/ (function(module, exports) {

	module.exports = "<div layout=\"row\" layout-fill ng-cloak>\n    <div layout=\"column\" flex>\n        <app-header></app-header>\n        <md-content flex layout-gt-sm=\"row\">\n            <span flex=\"20\"></span>\n            <ui-view flex></ui-view>\n            <span flex=\"20\"></span>\n        </md-content>\n        <app-footer></app-footer>\n    </div>\n</div>";

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _viewMovies = __webpack_require__(106);

	var _viewMovies2 = _interopRequireDefault(_viewMovies);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('ViewMovies', []).component(_viewMovies2.default.name, new _viewMovies2.default());

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _viewMovie = __webpack_require__(108);

	var _viewMovie2 = _interopRequireDefault(_viewMovie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('ViewMovie', []).component(_viewMovie2.default.name, new _viewMovie2.default());

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _viewMovieEdit = __webpack_require__(110);

	var _viewMovieEdit2 = _interopRequireDefault(_viewMovieEdit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('ViewMovieEdit', []).component(_viewMovieEdit2.default.name, new _viewMovieEdit2.default());

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _viewMovieCreate = __webpack_require__(112);

	var _viewMovieCreate2 = _interopRequireDefault(_viewMovieCreate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('ViewMovieCreate', []).component(_viewMovieCreate2.default.name, new _viewMovieCreate2.default());

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(1);

	var _angular2 = _interopRequireDefault(_angular);

	var _viewLogin = __webpack_require__(114);

	var _viewLogin2 = _interopRequireDefault(_viewLogin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('ViewLogin', []).component(_viewLogin2.default.name, new _viewLogin2.default());

/***/ })
]);