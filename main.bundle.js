webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1>>***************Signup Form:>***************</h1>\r\n<app-signup-form></app-signup-form>\r\n<br/><br/><br/><br/><br/><br/>\r\n<h1>>***************Adding new Topics with FormArray:>***************</h1>\r\n<app-new-courses-form></app-new-courses-form>\r\n<br/><br/><br/><br/><br/><br/>\r\n<h1>>***************Template Form:>***************</h1>\r\n<app-contact-form></app-contact-form>\r\n<br/><br/><br/><br/><br/><br/>\r\n<h1>***************CONSUMING HTTP SERVIECS***************</h1>\r\n<app-posts></app-posts>\r\n<br/><br/><br/><br/><br/><br/>\r\n<h1>***************Github Followers>***************</h1>\r\n<app-github-followers></app-github-followers> -->\r\n\r\n<app-nav-bar></app-nav-bar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_form_contact_form_component__ = __webpack_require__("../../../../../src/app/contact-form/contact-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_form_signup_form_component__ = __webpack_require__("../../../../../src/app/signup-form/signup-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_courses_form_new_courses_form_component__ = __webpack_require__("../../../../../src/app/new-courses-form/new-courses-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__posts_posts_component__ = __webpack_require__("../../../../../src/app/posts/posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_errors_app_error_handler__ = __webpack_require__("../../../../../src/app/service-errors/app-error-handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__github_followers_github_followers_component__ = __webpack_require__("../../../../../src/app/github-followers/github-followers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_github_followers_service__ = __webpack_require__("../../../../../src/app/services/github-followers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__github_profile_github_profile_component__ = __webpack_require__("../../../../../src/app/github-profile/github-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__contact_form_contact_form_component__["a" /* ContactFormComponent */],
                __WEBPACK_IMPORTED_MODULE_6__signup_form_signup_form_component__["a" /* SignupFormComponent */],
                __WEBPACK_IMPORTED_MODULE_7__new_courses_form_new_courses_form_component__["a" /* NewCoursesFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__posts_posts_component__["a" /* PostsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__github_followers_github_followers_component__["a" /* GithubFollowersComponent */],
                __WEBPACK_IMPORTED_MODULE_14__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_16__github_profile_github_profile_component__["a" /* GithubProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */] },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_17__home_home_component__["a" /* HomeComponent */] },
                    { path: 'TemplateForm', component: __WEBPACK_IMPORTED_MODULE_6__signup_form_signup_form_component__["a" /* SignupFormComponent */] },
                    { path: 'ReactiveForm', component: __WEBPACK_IMPORTED_MODULE_5__contact_form_contact_form_component__["a" /* ContactFormComponent */] },
                    { path: 'FormArray', component: __WEBPACK_IMPORTED_MODULE_7__new_courses_form_new_courses_form_component__["a" /* NewCoursesFormComponent */] },
                    { path: 'HttpExample', component: __WEBPACK_IMPORTED_MODULE_8__posts_posts_component__["a" /* PostsComponent */] },
                    { path: 'GithubFollowers/:userid/:username', component: __WEBPACK_IMPORTED_MODULE_16__github_profile_github_profile_component__["a" /* GithubProfileComponent */] },
                    { path: 'GithubFollowers', component: __WEBPACK_IMPORTED_MODULE_12__github_followers_github_followers_component__["a" /* GithubFollowersComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_15__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
                ])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_posts_service__["a" /* PostsService */],
                __WEBPACK_IMPORTED_MODULE_13__services_github_followers_service__["a" /* GithubFollowersService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_11__service_errors_app_error_handler__["a" /* AppErrorHandler */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact-form/contact-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control.ng-touched.ng-invalid {\r\n    border: 2px solid red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-form/contact-form.component.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/>\n\n<div class=\"container\">\n  <h3>Contact Form:</h3>\n  <form #formGroup=\"ngForm\" (ngSubmit)=\"onSubmit(formGroup)\">\n\n    <h5>Basic Information:</h5>\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input required ngModel name=\"firstName\" #firstName=\"ngModel\" (change)=\"log(firstName)\" id=\"firstName\" type=\"text\" class=\"form-control\">\n      <h6 class=\"alert alert-danger\" *ngIf=\"firstName.touched && !firstName.valid\">First name is required</h6>\n    </div>\n    <!-- By add for in lable abd giving the same value as id attribut in input emenent we can \n      focus the inout box by clicking the lable too\n    --> \n\n    <h5>Contact Information:</h5>\n    <div ngModelGroup=\"contact\" #contact=\"ngModelGroup\">\n      <h6 class=\"alert alert-danger\" *ngIf=\"contact.touched && !contact.valid\">Something Wrong with Contact information.</h6>\n      <div class=\"form-group\">\n        <label for=\"secondName\">Second Name</label>\n        <input required minlength=\"2\" maxlength=\"30\" pattern=\"[A-Za-z]+\" ngModel name=\"secondName\" #secondName=\"ngModel\" (change)=\"log(secondName)\" id=\"secondName\" type=\"text\" class=\"form-control\">\n        <div class=\"alert alert-danger\" *ngIf=\"secondName.touched && secondName.errors\">\n          <h6 *ngIf=\"secondName.errors.required\">Second Name is Required</h6>\n          <h6 *ngIf=\"secondName.errors.minlength\">Minimum length should be {{secondName.errors.minlength.requiredLength}}</h6>\n          <h6 *ngIf=\"secondName.errors.pattern\">Pattern did not match {{secondName.errors.pattern.requiredPattern}}</h6>     \n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"phoneNumber\">Phone Number</label>\n        <input required minlength=\"6\" maxlength=\"10\" pattern=\"[0-9]+\" ngModel name=\"phoneNumber\" #phoneNumber=\"ngModel\" (change)=\"log(phoneNumber)\" id=\"phoneNumber\" type=\"text\" class=\"form-control\">\n        <div class=\"alert alert-danger\" *ngIf=\"phoneNumber.touched && phoneNumber.errors\">\n          <h6 *ngIf=\"phoneNumber.errors.required\">Phone Number is Required</h6>\n          <h6 *ngIf=\"phoneNumber.errors.pattern\">Phone Number should have digits only</h6>\n          <h6 *ngIf=\"phoneNumber.errors.minlength\">Minimum length should be {{phoneNumber.errors.minlength.requiredLength}}</h6>    \n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" ngModel name=\"email\" #email=\"ngModel\" (change)=\"log(email)\" id=\"email\" type=\"text\" class=\"form-control\">\n        <div class=\"alert alert-danger\" *ngIf=\"email.touched && email.errors\">\n          <h6 *ngIf=\"email.errors.required\">Second Name is Required</h6>\n          <h6 *ngIf=\"email.errors.pattern\">Pattern did not match {{email.errors.pattern.requiredPattern}}</h6>     \n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"contactMethod\">Prefered Contact Method:</label>\n        <select multiple ngModel name=\"contactMethod\" id=\"contactMethod\" class=\"form-control\">\n          <option *ngFor=\"let method of contactMethods\" [ngValue]=\"method\">{{method.name}}</option>\n        </select>\n      </div>\n\n      <div>\n        <label>Are you Sure?</label>\n        <div class=\"radio\">\n          <label>\n            <input ngModel type=\"radio\" name=\"sure\" value=\"yes\">YES\n          </label>\n        </div>\n        <div class=\"radio\">\n            <label>\n              <input ngModel type=\"radio\" name=\"sure\" value=\"no\">NO\n            </label>\n        </div>\n      </div>\n\n    </div>\n    <h5>Favorites Information:</h5>\n    <h6>What topics do you like</h6>\n    <div class=\"checkbox\">\n      <label>\n        <input type=\"checkbox\" ngModel name=\"likesJava\">JAVA      \n      </label><br/>\n      <label>\n        <input type=\"checkbox\" ngModel name=\"likesPython\">PYTHON\n      </label><br/>\n      <label>\n        <input type=\"checkbox\" ngModel name=\"likesMicroservices\">Microservices\n      </label><br/>\n      <label>\n        <input type=\"checkbox\" ngModel #n=\"ngModel\" name=\"likesML\">AI and ML\n      </label><br/>    \n    </div>\n\n    <h5>Additional Information:</h5>\n    <div class=\"form-group\">\n      <label for=\"comment\">Comment</label>\n      <textarea ngModel name=\"comment\" #comment=\"ngModel\" (change)=\"log(comment)\" id=\"comment\" class=\"form-control\" cols=\"30\" rows=\"10\"></textarea>\n    </div>\n    <button class=\"btn btn-primary\" [disabled]=\"!formGroup.valid\">Submit</button>\n    <br/><br/>  \n    <h4>LIVE FORM DATA IN JSON FORM:</h4>\n    <h6>\n      <pre>{{formGroup.value | json }}</pre>\n    </h6>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact-form/contact-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent() {
        this.contactMethods = [
            { id: 1, name: 'Email' },
            { id: 2, name: 'Phone' }
        ];
    }
    ContactFormComponent.prototype.log = function (obj) {
        console.log(obj);
    };
    ContactFormComponent.prototype.onSubmit = function (fg) {
        // console.log(JSON.stringify(fg.value));
        console.log(fg);
    };
    ContactFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-form',
            template: __webpack_require__("../../../../../src/app/contact-form/contact-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact-form/contact-form.component.css")]
        })
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/github-followers/github-followers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.avatar { \r\n    width: 80px;\r\n    height: 80px;\r\n    border-radius: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/github-followers/github-followers.component.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/>\n\n<div class=\"container\"> \n  <h3>Github Followers:</h3> \n  <br/>  \n  <div *ngFor=\"let follower of followers\" class=\"media\">\n    <div class=\"media-left\">\n      <a href=\"#\">\n        <img class=\"avatar media-object\" src=\"{{ follower.avatar_url }}\" alt=\"...\">\n      </a>\n    </div>\n    <div class=\"media-body\">\n      <h4 class=\"media-heading\">\n        <a [routerLink]=\"['/GithubFollowers',follower.id,follower.login]\">{{ follower.login }}</a>\n      </h4>\n      <a [routerLink]=\"['/GithubFollowers',follower.id,follower.login]\">{{ follower.html_url }}</a>\n    </div>\n    <br/><br/><br/><br/>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/github-followers/github-followers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubFollowersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_github_followers_service__ = __webpack_require__("../../../../../src/app/services/github-followers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GithubFollowersComponent = /** @class */ (function () {
    function GithubFollowersComponent(service, routeParams) {
        this.service = service;
        this.routeParams = routeParams;
    }
    GithubFollowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll()
            .subscribe(function (followers) { return _this.followers = followers; });
        /*
        // Alternate way: to see the usage of
        // combineLatest, map and switchMap
        Observable.combineLatest([
          this.routeParams.paramMap,
          this.routeParams.queryParamMap
        ])
        .switchMap(combined => {
          // here combined is of type Observable<ParamMap[]> ie., combineLatest() returned it
          const id = combined[0].get('userid');
          const page = combined[1].get('page');
          return this.service.getAll();
          // .subscribe(followers => this.followers = followers);
    
          // if we use map then we return Observable<any>
          // if we use switchMap then we return any
        })
        .subscribe(
          combinedObservable => {
            this.followers = combinedObservable;
          //  We can call a service to by using the inputs from the two observables related to route parametrs too...
          //  this.service.getAll(id,page)
          //   .subscribe(data =>{});
          });
          */
    };
    GithubFollowersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-github-followers',
            template: __webpack_require__("../../../../../src/app/github-followers/github-followers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/github-followers/github-followers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_github_followers_service__["a" /* GithubFollowersService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], GithubFollowersComponent);
    return GithubFollowersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/github-profile/github-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/github-profile/github-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/>\n\n<div class=\"container\"> \n  <div>\n    github-profile works! #id={{id}}\n    <br/><h6>Note:</h6>\n    New component is not created only the route parametes are changed.\n  </div>\n  <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/GithubFollowers',1234,sriram]\">NEXT</button>\n  <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/GithubFollowers\">BACK</button>\n  <button type=\"button\" class=\"btn btn-warning\" (click)=\"programaticNavigator()\">Programatic Navigation</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/github-profile/github-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GithubProfileComponent = /** @class */ (function () {
    function GithubProfileComponent(routeParams, route) {
        this.routeParams = routeParams;
        this.route = route;
    }
    GithubProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* this.id = this.routeParams.snapshot.paramMap.get('userid');
          this method is used to route parameters when we don't have to navigate to the same component.....
        */
        this.routeParams.paramMap
            .subscribe(function (params) {
            _this.id = +params.get('userid');
            console.log(_this.id);
        });
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].combineLatest([
            this.routeParams.paramMap,
            this.routeParams.queryParamMap
        ]).subscribe(function (combinedObservable) {
            var id = combinedObservable[0].get('userid');
            var page = combinedObservable[1].get('page');
            console.log(id, page);
            //  We can call a service to by using the inputs from the two observables related to route parametrs too...
            //  this.service.getAll(id,page)
            //   .subscribe(data =>{});
        });
    };
    GithubProfileComponent.prototype.programaticNavigator = function () {
        this.route.navigate(['/HttpExample'], {
            queryParams: { page: 1, order: 'new' }
        });
    };
    GithubProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-github-profile',
            template: __webpack_require__("../../../../../src/app/github-profile/github-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/github-profile/github-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], GithubProfileComponent);
    return GithubProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/>\n\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h4>What is Angular? </h4> \n    <p>\n      Angular is a platform that makes it easy to build applications with the web.\n      Angular combines declarative templates, dependency injection, end to end tooling,\n      and integrated best practices to solve development challenges. Angular empowers\n      developers to build applications that live on the web, mobile, or the desktop.\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Angular Basics</h2>\n  <br>\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" data-toggle=\"tab\" routerLink=\"/home\" [queryParams]=\"{page:1,order:'nav'}\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active\" data-toggle=\"tab\" routerLink=\"/TemplateForm\">Template Form</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active\" data-toggle=\"tab\" routerLink=\"/FormArray\">FormArray Example</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active\" data-toggle=\"tab\" routerLink=\"/ReactiveForm\">Reactive Form</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active\" data-toggle=\"tab\" routerLink=\"/HttpExample\">Consuming HTTP Services</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active\" data-toggle=\"tab\" routerLink=\"/GithubFollowers\">Github Followers</a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/new-courses-form/new-courses-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-courses-form/new-courses-form.component.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/>\n\n<div class=\"container\">\n  <h3>Adding new Topics with FormArray:</h3>\n  <form>\n    <label for=\"topic\">Topic name:</label>\n    <input \n    type=\"text\" \n    class=\"form-control\"\n    id=\"topic\"\n    (keyup.enter)=\"addTopic(topic)\"\n    #topic>\n    <ul class=\"list-group\">\n      <li\n      (click)=\"removeTopic(topic)\" \n      *ngFor=\"let topic of topics.controls\"\n      class=\"list-group-item\">\n    {{topic.value}}\n    </li>\n    </ul>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/new-courses-form/new-courses-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCoursesFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NewCoursesFormComponent = /** @class */ (function () {
    function NewCoursesFormComponent() {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            topics: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */]([])
        });
    }
    NewCoursesFormComponent.prototype.removeTopic = function (topic) {
        var index = this.topics.controls.indexOf(topic);
        this.topics.removeAt(index);
    };
    NewCoursesFormComponent.prototype.addTopic = function (topic) {
        this.topics.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](topic.value));
        topic.value = ''; // setting input to blank after enter
    };
    Object.defineProperty(NewCoursesFormComponent.prototype, "topics", {
        get: function () {
            return this.form.get('topics');
        },
        enumerable: true,
        configurable: true
    });
    NewCoursesFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-courses-form',
            template: __webpack_require__("../../../../../src/app/new-courses-form/new-courses-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-courses-form/new-courses-form.component.css")]
        })
    ], NewCoursesFormComponent);
    return NewCoursesFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/posts/posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/>\n\n<div class=\"container\"> \n  <h3>Consuming HTTP Services Example:</h3> \n  <br/>\n  <label for=\"myPostName\">Enter new post name:</label>\n  <input\n    (keyup.enter)=\"createPost(title)\"\n    id=\"myPostName\"\n    #title\n    type=\"text\" class=\"form-control\">\n\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngFor=\"let post of posts\">  \n      <button (click)=\"updatePost(post)\"class=\"btn btn-default btn-sm btn-success\">Update</button>\n      <button (click)=\"deletePost(post)\"class=\"btn btn-default btn-sm btn-danger\">Delete</button>\n      {{post.title}}\n    </li>\n    \n  </ul>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/posts/posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_posts_service__ = __webpack_require__("../../../../../src/app/services/posts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_errors_not_found_error__ = __webpack_require__("../../../../../src/app/service-errors/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_errors_bad_input_error__ = __webpack_require__("../../../../../src/app/service-errors/bad-input-error.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostsComponent = /** @class */ (function () {
    function PostsComponent(service) {
        this.service = service;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll()
            .subscribe(function (postResponse) { return _this.posts = postResponse; });
        /*}, //instaed of handling the error here the error propagates and finally hits the AppErrorHandler class
        (error: Response) => {
          alert('Unexpected error occured!');
          console.log(error);
        }*/
    };
    PostsComponent.prototype.createPost = function (input) {
        var _this = this;
        var post = { title: input.value };
        this.posts.splice(0, 0, post); // *********OPTIMISTIC APPROACH******ADDING THE INPUT BEFORE THE SERVICE CALL *********
        // input.value
        this.service.create(post)
            .subscribe(function (response) {
            post['id'] = response.json().id;
            // this.posts.push() method only adds at the end and splice can add in the begining
            // this.posts.splice(0, 0, post); // *********PESIMISTIC APPROACH******ADDING THE INPUT AFTER THE SERVICE CALL *********
        }, function (error) {
            _this.posts.splice(0, 1); // *********OPTIMISTIC APPROACH******ROLLBACK IF CALL TO THE SERVER FAILS
            if (error instanceof __WEBPACK_IMPORTED_MODULE_3__service_errors_bad_input_error__["a" /* BadInputError */]) {
                alert('Bad Request');
                // this.form.setErrors(error.OriginalError);
            }
            else {
                /*alert('Unexpected error occured!');
                console.log(error);*/
                // here we need to throw the error so that the Global Error Handler takes incharge
                // else the error is assumed tobe handled.
                throw error;
            }
        });
    };
    PostsComponent.prototype.updatePost = function (post) {
        this.service.update(post)
            .subscribe(function (response) {
            console.log(response);
        } /*, (error: Response) => {
         //instaed of handling the error here the error propagates and finally hits the AppErrorHandler class
         alert('Unexpected error occured!');
         console.log(error);
       }*/);
        // this.http.put(this.url, JSON.stringify(post));
    };
    PostsComponent.prototype.deletePost = function (post) {
        var _this = this;
        var index = this.posts.indexOf(post); // *********OPTIMISTIC APPROACH******ADDING THE INPUT BEFORE THE SERVICE CALL *********
        this.posts.splice(index, 1); // *********OPTIMISTIC APPROACH******ADDING THE INPUT BEFORE THE SERVICE CALL *********
        this.service.delete(post.id) // 3555)
            .subscribe(function () {
            // const index = this.posts.indexOf(post); // *********PESIMISTIC APPROACH******ADDING THE INPUT AFTER THE SERVICE CALL *********
            // this.posts.splice(index, 1); // *********PESIMISTIC APPROACH******ADDING THE INPUT AFTER THE SERVICE CALL *********
        }, function (error) {
            _this.posts.splice(index, 0, post); // *********OPTIMISTIC APPROACH******ROLLBACK IF CALL TO THE SERVER FAILS
            if (error instanceof __WEBPACK_IMPORTED_MODULE_2__service_errors_not_found_error__["a" /* NotFoundError */]) {
                alert('This post has already been deleted.');
            }
            else {
                // alert('Unexpected error occured!');
                // console.log(error);
                // here we need to throw the error so that the Global Error Handler takes incharge
                // else the error is assumed tobe handled.
                throw error;
            }
        });
    };
    /*
       Learning about Observable and Promises
    */
    PostsComponent.prototype.myDeletePosts = function (post) {
        this.service.myDelete(post.id); // Observables don't work without subscribe() but for promises this is enough
        // this.service.delete(post.id)
        //   .subscribe();
    };
    PostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-posts',
            template: __webpack_require__("../../../../../src/app/posts/posts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_posts_service__["a" /* PostsService */]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service-errors/app-error-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppErrorHandler; });
var AppErrorHandler = /** @class */ (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (error) {
        alert('Unexpected error occured!');
        console.log(error);
    };
    return AppErrorHandler;
}());



/***/ }),

/***/ "../../../../../src/app/service-errors/app-errors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppError; });
var AppError = /** @class */ (function () {
    function AppError(OriginalError) {
        this.OriginalError = OriginalError;
    }
    return AppError;
}());



/***/ }),

/***/ "../../../../../src/app/service-errors/bad-input-error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadInputError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_errors__ = __webpack_require__("../../../../../src/app/service-errors/app-errors.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BadInputError = /** @class */ (function (_super) {
    __extends(BadInputError, _super);
    function BadInputError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BadInputError;
}(__WEBPACK_IMPORTED_MODULE_0__app_errors__["a" /* AppError */]));



/***/ }),

/***/ "../../../../../src/app/service-errors/not-found-error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_errors__ = __webpack_require__("../../../../../src/app/service-errors/app-errors.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFoundError;
}(__WEBPACK_IMPORTED_MODULE_0__app_errors__["a" /* AppError */]));



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_errors_not_found_error__ = __webpack_require__("../../../../../src/app/service-errors/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_errors_app_errors__ = __webpack_require__("../../../../../src/app/service-errors/app-errors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_errors_bad_input_error__ = __webpack_require__("../../../../../src/app/service-errors/bad-input-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DataService = /** @class */ (function () {
    function DataService(url, http) {
        this.url = url;
        this.http = http;
    }
    DataService.prototype.getAll = function () {
        return this.http.get(this.url)
            .map(function (response) { return response.json(); })
            .catch(this.handleErrors);
    };
    DataService.prototype.create = function (resource) {
        // return Observable.throw(new AppError()); // TO CHECK OPTIMISTIC APPROACH
        return this.http.post(this.url, JSON.stringify(resource))
            .catch(this.handleErrors); /*(error: Response) => {
          if (error.status === 400) {
            return Observable.throw(new BadInputError(error.json()));
          }
          return Observable.throw(new AppError(error.json()));
        });*/
    };
    DataService.prototype.update = function (resource) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
            .catch(this.handleErrors);
    };
    DataService.prototype.delete = function (id) {
        return this.http.delete(this.url + '/' + id)
            .catch(/*(error: Response) => {
          if (error.status === 404) {
            return Observable.throw(new NotFoundError(error));
          }
          return Observable.throw(new AppError(error));
        } // Instead of using an arrow function we can do this explicitly also (implementation of arrowfunction as handleErrors())
        */ this.handleErrors);
    };
    DataService.prototype.myDelete = function (id) {
        // OBSERVABLES and PROMISES EXAMPLE:
        return this.http.delete(this.url + '/' + id)
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleErrors);
    };
    DataService.prototype.handleErrors = function (error) {
        if (error.status === 400) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_5__service_errors_bad_input_error__["a" /* BadInputError */](error.json()));
        }
        else if (error.status === 404) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_3__service_errors_not_found_error__["a" /* NotFoundError */](error));
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_4__service_errors_app_errors__["a" /* AppError */](error));
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/github-followers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubFollowersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GithubFollowersService = /** @class */ (function (_super) {
    __extends(GithubFollowersService, _super);
    function GithubFollowersService(http) {
        return _super.call(this, 'https://api.github.com/users/sivaram143/followers', http) || this;
    }
    GithubFollowersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GithubFollowersService);
    return GithubFollowersService;
}(__WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]));



/***/ }),

/***/ "../../../../../src/app/services/posts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = /** @class */ (function (_super) {
    __extends(PostsService, _super);
    function PostsService(http) {
        return _super.call(this, 'http://jsonplaceholder.typicode.com/posts', http) || this;
    }
    PostsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PostsService);
    return PostsService;
}(__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]));



/***/ }),

/***/ "../../../../../src/app/signup-form/signup-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup-form/signup-form.component.html":
/***/ (function(module, exports) {

module.exports = "<br/><br/>\n\n<div class=\"container\">\n    <h3>Signup Form:</h3>\n    <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n        <div class=\"alert alert-danger\" *ngIf=\"form.errors && form.errors.invalidLogin\">Invalid username or password</div>\n        <div class=\"form-group\">\n            <label for=\"username\">User-name</label>\n            <input\n                formControlName=\"username\" \n                id=\"username\" \n                type=\"text\" \n                class=\"form-control\">\n            <div *ngIf=\"username.pending\">Checking for uniqueness...</div>\n            <div *ngIf=\"username.touched && username.errors\">\n                <div *ngIf=\"username.touched && username.errors.required\" class=\"alert alert-danger\">Username is required.</div>\n                <div *ngIf=\"username.touched && username.errors.cannotContainSpace\" class=\"alert alert-danger\">Username should not have spaces.</div>\n                <div *ngIf=\"username.touched && username.errors.shouldBeUnique\" class=\"alert alert-danger\">Username should be unique</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input\n                formControlName=\"password\" \n                id=\"password\" \n                type=\"text\" \n                class=\"form-control\">\n            <div *ngIf=\"password.touched && password.errors\">\n                <div *ngIf=\"password.touched && password.errors.required\" class=\"alert alert-danger\">Password is required.</div>\n                <div *ngIf=\"password.touched && password.errors.minlength\" class=\"alert alert-danger\">Password should have minimum {{password.errors.minlength.requiredLength}} characters.</div>\n            </div>\n        </div>\n        <div class=\"form-group\" formGroupName=\"optional\">\n            <h3>Optional Group:</h3>\n            <label for=\"comment\">Comment:</label>\n            <input\n            formControlName=\"comment\" \n            id=\"comment\" \n            type=\"text\" \n            class=\"form-control\"> \n            <button type=\"button\" class=\"btn btn-success\" (click)=\"commented?commented=false:commented=true\">Submit Comment</button>\n            <div *ngIf=\"commented\" class=\"alert alert-success\">\n                <strong>Adding Comment successful!</strong>\n            </div>\n            <br/>\n        </div>\n        <button class=\"btn btn-primary\">Sign Up</button>\n        <button class=\"btn btn-primary\" type=\"submit\">Log In</button>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup-form/signup-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__username_validators__ = __webpack_require__("../../../../../src/app/signup-form/username.validators.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent() {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            optional: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
                comment: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]()
            }),
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__username_validators__["a" /* UsernameValidators */].cannotContainSpace], __WEBPACK_IMPORTED_MODULE_2__username_validators__["a" /* UsernameValidators */].shouldBeUnique),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)])
        });
    }
    SignupFormComponent.prototype.login = function () {
        var data = this.form.value;
        console.log(data);
        if (data.username !== 'ram') {
            this.form.setErrors({
                invalidLogin: true
            });
        }
    };
    Object.defineProperty(SignupFormComponent.prototype, "username", {
        get: function () {
            return this.form.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupFormComponent.prototype, "password", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    SignupFormComponent.prototype.ngOnInit = function () {
    };
    SignupFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup-form',
            template: __webpack_require__("../../../../../src/app/signup-form/signup-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup-form/signup-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupFormComponent);
    return SignupFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signup-form/username.validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernameValidators; });
var UsernameValidators = /** @class */ (function () {
    function UsernameValidators() {
    }
    UsernameValidators.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') !== -1) {
            // return {'cannotContainSpace': 'true'};
            return { cannotContainSpace: true };
        }
        return null;
    };
    UsernameValidators.shouldBeUnique = function (control) {
        return new Promise(function (resolve, rejects) {
            setTimeout(function () {
                if (control.value === 'ram') {
                    resolve({ shouldBeUnique: true });
                }
                else {
                    resolve(null);
                    // resolve({'shouldBeUnique': 'falied due to some reason'});//pending never becomes false here
                }
            }, 2000);
        });
    };
    return UsernameValidators;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map