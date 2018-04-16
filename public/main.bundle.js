webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".session-title {\r\n  font-size: 2rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "app";
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_homepage_homepage_component__ = __webpack_require__("./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_main_service__ = __webpack_require__("./src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_session_session_component__ = __webpack_require__("./src/app/components/session/session.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_6__components_homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'session/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_session_session_component__["a" /* SessionComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__components_homepage_homepage_component__["a" /* HomepageComponent */], __WEBPACK_IMPORTED_MODULE_8__components_session_session_component__["a" /* SessionComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_main_service__["a" /* MainService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = ".homepage-container {\r\n  /* color: #fff; */\r\n  /* justify-content: center; */\r\n  width: 50%;\r\n  margin-top: 200px;\r\n}\r\n\r\n.site-title {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.recent-session a {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"homepage-container cover-container d-flex h-100 p-3 mx-auto flex-column\">\r\n  <header class=\"masthead mb-auto\">\r\n    <div class=\"inner\">\r\n      <h1 class=\"masthead-brand site-title\">Brainstormer</h1>\r\n    </div>\r\n  </header>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <h3 class=\"cover-heading\">Start a new session</h3>\r\n      <main role=\"main\" class=\"inner cover\">\r\n        <form (submit)=\"onSessionSubmit()\">\r\n          <p class=\"lead\">\r\n            <input placeholder=\"pick a title\" [(ngModel)]=\"sessionTitle\" name=\"sessionTitle\" type=\"text\" class=\"form-control session-title\" aria-label=\"Large\" aria-describedby=\"inputGroup-sizing-sm\">\r\n          </p>\r\n          <p class=\"lead\">\r\n            <input type=\"submit\" class=\"btn btn-lg btn-success\" value=\"Get started\">\r\n          </p>\r\n        </form>\r\n      </main>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <h3 class=\"cover-heading\">Recent sessions</h3>\r\n      <div *ngFor=\"let session of recentSessions\" class=\"recent-session\">\r\n        <a href=\"/session/{{session._id}}\">{{session.title}}</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- <footer class=\"mastfoot mt-auto\">\r\n    <div class=\"inner\">\r\n      <p>Cover template for\r\n        <a href=\"https://getbootstrap.com/\">Bootstrap</a>, by\r\n        <a href=\"https://twitter.com/mdo\">@mdo</a>.</p>\r\n    </div>\r\n  </footer> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_main_service__ = __webpack_require__("./src/app/services/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(mainService, router) {
        this.mainService = mainService;
        this.router = router;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sessionsIds = localStorage.getItem('sessions');
        if (sessionsIds) {
            this.mainService.getRecentSessions(sessionsIds).subscribe(function (response) {
                console.log(response);
                _this.recentSessions = response.sessions;
            });
        }
    };
    HomepageComponent.prototype.onSessionSubmit = function () {
        var _this = this;
        if (this.sessionTitle && this.sessionTitle != "") {
            this.mainService.startSession(this.sessionTitle).subscribe(function (response) {
                if (response.success) {
                    _this.router.navigate(['session/' + response.session._id]);
                }
            });
        }
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-homepage",
            template: __webpack_require__("./src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/components/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_main_service__["a" /* MainService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/components/session/session.component.css":
/***/ (function(module, exports) {

module.exports = ".title-container {\r\n  text-align: left;\r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\n\r\n.title-container h3 {\r\n  display: inline-block;\r\n}\r\n\r\n.btn-back {\r\n  float: right;\r\n}\r\n\r\n.session-container {\r\n  padding: 25px;\r\n}\r\n\r\ninput,\r\ninput:focus,\r\ntextarea,\r\ntextarea:focus {\r\n  border: none;\r\n  border-radius: 0px;\r\n  background: unset;\r\n  color: white;\r\n}\r\n\r\n.card-footer input {\r\n  width: 50%;\r\n  display: inline-block;\r\n  padding: 0px;\r\n}\r\n\r\n.card {\r\n  display: inline-block;\r\n  float: left;\r\n  margin-right: 20px;\r\n  /* height: 250px;\r\n    width: 250px; */\r\n  font-weight: bold;\r\n}\r\n\r\n.score-controls .col-sm-4 {\r\n  padding: 0px;\r\n}\r\n\r\n.score-controls .fas {\r\n  padding-top: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.navbar p {\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n  padding-top: 10px;\r\n  padding-left: 20px;\r\n}\r\n\r\n.navbar-username,\r\n.comments-container {\r\n  margin-left: 20px;\r\n}\r\n\r\n.comments {\r\n  margin-top: 10px;\r\n}\r\n\r\n.comments input {\r\n  width: 100%;\r\n}\r\n\r\n.comments input::-webkit-input-placeholder {\r\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n}\r\n\r\n.comments input:-ms-input-placeholder {\r\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n}\r\n\r\n.comments input::-ms-input-placeholder {\r\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n}\r\n\r\n.comments input::placeholder {\r\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n  color: white;\r\n  opacity: 1; /* Firefox */\r\n}\r\n\r\n.comment-author {\r\n  font-style: italic;\r\n  font-weight: normal;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/session/session.component.html":
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"session\" class=\"navbar navbar-dark bg-dark\">\r\n  <div class=\"title-container\">\r\n    <h3>{{session.title}}</h3>\r\n    <button type=\"button\" class=\"btn btn-warning btn-back\" (click)=\"goBack()\">Back to homepage</button>\r\n  </div>\r\n  <input id=\"username\" type=\"text\" class=\"navbar-username form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Pick a username in order to post ideas or comment...\"\r\n    aria-label=\"Username\" aria-describedby=\"basic-addon1\" (blur)=\"setUsername()\">\r\n</nav>\r\n<div class=\"session-container\">\r\n  <div *ngFor=\"let idea of ideasForSession\" class=\"card text-white mb-3\" style=\"max-width: 18rem;\" [ngStyle]=\"{'background-color': idea.colour}\">\r\n    <div class=\"card-header\">\r\n      {{idea.title}}\r\n      <span class=\"badge badge-light\">{{idea.score}}</span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <p class=\"card-text\">{{idea.description}}</p>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <div class=\"score-controls row\">\r\n        <i class=\"fas fa-angle-up col-sm-6\" (click)=\"addScore(idea._id, 'up')\"></i>\r\n        <i class=\"fas fa-angle-down col-sm-6\" (click)=\"addScore(idea._id, 'down')\"></i>\r\n      </div>\r\n      <div class=\"comments row\">\r\n        <div *ngIf=\"comments\" class=\"comments-container\">\r\n          <div *ngFor=\"let comment of getCommentsForIdea(idea._id)\">\r\n            <span class=\"comment-author\">{{comment.username}}</span> {{comment.text}}\r\n          </div>\r\n        </div>\r\n        <input type=\"text\" class=\"navbar-username form-control\" placeholder=\"Add a comment\" #comment aria-describedby=\"basic-addon1\"\r\n          (keyup.enter)=\"onEnter(this, comment.value, idea._id)\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card text-white bg-dark mb-3\" style=\"max-width: 18rem;\">\r\n    <form (submit)=\"onIdeaSubmit()\">\r\n      <div class=\"card-header\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ideaTitle\" name=\"ideaTitle\" placeholder=\"Pick a title for your idea....\"\r\n          aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p class=\"card-text\">\r\n          <textarea class=\"form-control\" [(ngModel)]=\"ideaDescription\" name=\"ideaDescription\" aria-label=\"With textarea\" placeholder=\"Add a short description..\"></textarea>\r\n        </p>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button type=\"submit\" class=\"btn btn-info\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/session/session.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_main_service__ = __webpack_require__("./src/app/services/main.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionComponent = /** @class */ (function () {
    function SessionComponent(route, router, mainService) {
        this.route = route;
        this.router = router;
        this.mainService = mainService;
    }
    SessionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = '';
        if (localStorage.getItem('username'))
            this.username = localStorage.getItem('username');
        else
            this.username = 'Anonymous';
        this.route.params.subscribe(function (params) {
            _this.sessionId = params["id"];
            _this.mainService.getSession(_this.sessionId).subscribe(function (response) {
                _this.session = response.session;
            });
            _this.setSessionStorage();
            _this.mainService.getIdeas(_this.sessionId).subscribe(function (response) {
                _this.ideasForSession = response.ideas;
            });
            _this.mainService.getComments(_this.sessionId).subscribe(function (response) {
                _this.comments = response.comments;
            });
        });
    };
    SessionComponent.prototype.setSessionStorage = function () {
        var sessions = localStorage.getItem('sessions');
        if (sessions) {
            if (!sessions.includes(this.sessionId))
                localStorage.setItem('sessions', sessions + ',' + this.sessionId);
        }
        else
            localStorage.setItem('sessions', this.sessionId);
    };
    SessionComponent.prototype.setUsername = function () {
        if (this.username != '')
            localStorage.setItem('username', this.username);
    };
    SessionComponent.prototype.onIdeaSubmit = function () {
        var _this = this;
        if (!this.username || this.username == "")
            return;
        var idea = {
            title: this.ideaTitle,
            description: this.ideaDescription,
            username: this.username,
            sessionId: this.sessionId,
            colour: this.getRandomColor()
        };
        this.mainService.addIdea(idea).subscribe(function (response) {
            if (response.success) {
                var lastIdea = response.ideas[response.ideas.length - 1];
                // lastIdea.color = this.getRandomColor();
                _this.ideasForSession.push(lastIdea);
            }
        });
    };
    SessionComponent.prototype.addScore = function (ideaId, direction) {
        var _this = this;
        var updatedIdeas = [];
        this.mainService
            .addScore(this.sessionId, ideaId, direction)
            .subscribe(function (response) {
            var count = 0;
            // for (let idea of response.ideas) {
            //   for (let currentIdea of this.ideasForSession) {
            //     if (currentIdea["_id"] == idea["_id"])
            //       this.ideasForSession[count]["score"] = idea.score;
            //   }
            //   count++;
            // }
            // for (let currentIdea of this.ideasForSession) {
            //   if (currentIdea["_id"] == response.idea._id) {
            //     this.ideasForSession[count]["score"] = response.idea.score;
            //   }
            //   count++;
            // }
            // this.ideasForSession.sort(this.sortArray);
            _this.ideasForSession = response.ideas;
        });
    };
    SessionComponent.prototype.getRandomColor = function () {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    SessionComponent.prototype.getCommentsForIdea = function (ideaId) {
        var comments = [];
        for (var _i = 0, _a = this.comments; _i < _a.length; _i++) {
            var comment = _a[_i];
            if (comment["ideaId"] == ideaId)
                comments.push(comment);
        }
        return comments;
    };
    SessionComponent.prototype.onEnter = function (element, value, ideaId) {
        // debugger;
        // return;
        var _this = this;
        if (value && value != "" && this.username && this.username != "") {
            this.mainService
                .addComment(value, ideaId, this.username, this.sessionId)
                .subscribe(function (response) {
                _this.comments = response.comments;
            });
        }
    };
    SessionComponent.prototype.sortArray = function (a, b) {
        if (a.last_nom < b.last_nom)
            return -1;
        if (a.last_nom > b.last_nom)
            return 1;
        return 0;
    };
    SessionComponent.prototype.goBack = function () {
        this.router.navigate(['/']);
    };
    SessionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-session",
            template: __webpack_require__("./src/app/components/session/session.component.html"),
            styles: [__webpack_require__("./src/app/components/session/session.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_main_service__["a" /* MainService */]])
    ], SessionComponent);
    return SessionComponent;
}());



/***/ }),

/***/ "./src/app/services/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
    }
    MainService.prototype.startSession = function (title) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        return this.http
            .post("sessions/start", { title: title }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.getSession = function (sessionId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("sessionid", sessionId);
        return this.http
            .get("sessions/get", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.getRecentSessions = function (sessionIds) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("sessionIds", sessionIds);
        return this.http
            .get("sessions/getRecentSessions", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.addIdea = function (idea) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        return this.http
            .post("ideas/add", { idea: idea }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.getIdeas = function (sessionId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("sessionid", sessionId);
        return this.http
            .get("ideas/get", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.addScore = function (sessionId, ideaId, direction) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](), score = {
            sessionId: sessionId,
            ideaId: ideaId,
            direction: direction
        };
        headers.append("Content-Type", "application/json");
        return this.http
            .post("ideas/addScore", { score: score }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.addComment = function (text, ideaId, username, sessionId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](), comment = {
            sessionId: sessionId,
            ideaId: ideaId,
            text: text,
            username: username
        };
        headers.append("Content-Type", "application/json");
        return this.http
            .post("comments/add", { comment: comment }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService.prototype.getComments = function (sessionId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append("sessionid", sessionId);
        return this.http
            .get("comments/get", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MainService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map