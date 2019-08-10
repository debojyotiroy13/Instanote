(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _collections_collections_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collections/collections.component */ "./src/app/collections/collections.component.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");








var routes = [
    { path: '', component: _collections_collections_component__WEBPACK_IMPORTED_MODULE_3__["CollectionsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'collection', component: _collections_collections_component__WEBPACK_IMPORTED_MODULE_3__["CollectionsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'collection/:collectionId', component: _notes_notes_component__WEBPACK_IMPORTED_MODULE_4__["NotesComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n    background: #f3f3f3;\n}\n\nh1{\n    color: #777;\n    /* font-family: 'Lobster'; */\n    font-weight: 200;\n    margin: 5px;\n}\n\nh2{\n    color: #777;\n    font-weight: 100;\n    text-align: center;\n}\n\nhr{\n    margin: 0px !important;\n}\n\n.header{\n    padding: 5px 20px;\n    background: #fff;\n    /* text-align: center; */\n}\n\n.main{\n    max-width: 40%;\n    margin: auto;\n    min-width: 400px;\n    padding-bottom: 50px;\n}\n\n.post-container{\n    background: #fff;\n    padding: 10px;\n    margin-top: 20px; \n    border-radius: 5px;\n}\n\n#post-textbox{\n    width:100%;\n    outline: none;\n    border:none;\n    color: #777;\n    font-size: 20px;\n    background: #eee;\n    border-radius: 3px;\n    padding: 5px;\n    margin: -5px;\n}\n\n#post-img{\n    width: 100%;\n    /* min-height: 250px; */\n    /* border-radius: 3px; */\n}\n\n#notes-img{\n    /* width: 100%; */\n    min-height: 250px;\n}\n\n.posts-add-container{\n    background: #eee;\n    height: 300px;\n    min-height: 200px;\n    max-height: 400px;\n}\n\n.posts-add-btn{\n    height: 50px;\n    width: 50px;\n    left: 50%;\n    top: 50%;\n    position: relative;\n    transform: translate(-50%, -50%);\n}\n\n.posts{\n    background: #fff;\n    \n    margin: 10px 5px; \n    border-radius: 5px;\n}\n\n.posts-section{\n    padding: 10px;\n}\n\n.user-posts-section{\n    padding: 30px 20px;\n}\n\n.posts-section-bottom{\n    padding: 0px 10px;\n}\n\n.posts p{\n    margin: 0px;\n}\n\n.post-text{\n    color: #777;\n    font-weight: 100;\n}\n\n.post-text-header{\n    color: #777;\n    font-weight: 200;\n    font-size: 18px;\n    margin-bottom: 10px;\n}\n\n.my-icon{\n    color: crimson;\n    padding: 0px 10px;\n    cursor: pointer;\n}\n\n.tagged{\n    font-weight: 400;\n    color: #333;\n    cursor: pointer;\n}\n\n.my-icon-profile{\n    color: #777;\n    padding-right: 10px; \n    font-size: 20px;\n}\n\nfooter{\n    background: #fff;\n    padding: 30px 0px;\n}\n\n.contact-form{\n    margin: auto;\n    min-width: 400px;\n    background: #eee;\n    padding: 30px;\n    padding-bottom: 10px;\n    border-radius: 5px;\n}\n\ninput, .text-area{\n    width: 100%;\n    outline: none;\n    border-radius: 5px;\n    font-size: 20px;\n    border: none;\n    text-align: center;\n    /* background: #eee; */\n    line-height: 40px;\n    font-weight: 200;\n}\n\n.btn{\n    border: none;\n    border-radius: 5px;\n    background: #78e08f;\n    color: #fff;\n    width: 100%;\n    height: 40px;\n    font-size: 20px;\n    font-weight: 200;\n    margin-top: 30px;\n}\n\n.my-btn{\n    border: none;\n    outline: none;\n    background: #ddd;\n    border-radius: 5px;\n    margin: 0px 5px;\n    height: 48px;\n    margin-bottom: 20px;\n}\n\n.comment-input{\n    font-size: 16px !important;\n    text-align: left;\n    width: 88%;\n}\n\n.comment-btn{\n    border: none;\n    outline: none;\n    background: transparent;\n    border-radius: 5px;\n    margin: 0px 5px;\n    color: hotpink;\n    text-align: right;\n    cursor: pointer;\n    font-size: 12px !important;\n    font-weight: 600;\n}\n\n.login-btn{\n    width: 100%;\n    height: 40px;\n    border: none;\n    outline: none;\n    background: gray;\n    margin-top: 20px;\n    border-radius: 5px;\n    color: white;\n    text-align: right;\n    cursor: pointer;\n    font-size: 15px !important;\n    font-weight: 400;\n    text-align: center;\n}\n\n.back-btn{\n    border: none;\n    outline: none;\n    background: white;\n    margin-top: 20px;\n    border-radius: 50%;\n    color: white;\n    text-align: right;\n    cursor: pointer;\n    font-size: 15px !important;\n    font-weight: 400;\n    text-align: center;\n    width: 50px;\n    text-align: center;\n    height: 50px;\n}\n\n.no-border{\n    border-radius: 0px !important;\n}\n\n.dialog-input{\n    text-align: left;\n    font-size: 15px;\n    line-height: 20px;\n}\n\n.login-card{\n    background: #fff;\n    border-radius: 5px;\n    padding: 20px;\n    position: relative;\n    top:50%;\n    transform: translateY(-40vh)\n}\n\n@media only screen and (max-width: 480px) {\n    .main{\n        width: 95%;\n        margin: auto;\n        min-width: 300px;\n    }\n    .contact-form{\n        width: 95%;\n        margin: auto;\n        min-width: 300px;\n    }\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsaUNBQWlDO0lBQ2pDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLGdCQUFnQjs7SUFFaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1A7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xufVxuXG5oMXtcbiAgICBjb2xvcjogIzc3NztcbiAgICAvKiBmb250LWZhbWlseTogJ0xvYnN0ZXInOyAqL1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbmgye1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5ocntcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuLmhlYWRlcntcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbn1cbi5tYWlue1xuICAgIG1heC13aWR0aDogNDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4ucG9zdC1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7IFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI3Bvc3QtdGV4dGJveHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IC01cHg7XG59XG5cbiNwb3N0LWltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBtaW4taGVpZ2h0OiAyNTBweDsgKi9cbiAgICAvKiBib3JkZXItcmFkaXVzOiAzcHg7ICovXG59XG5cbiNub3Rlcy1pbWd7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgbWluLWhlaWdodDogMjUwcHg7XG59XG4ucG9zdHMtYWRkLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG59XG4ucG9zdHMtYWRkLWJ0bntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5wb3N0c3tcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIFxuICAgIG1hcmdpbjogMTBweCA1cHg7IFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wb3N0cy1zZWN0aW9ue1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4udXNlci1wb3N0cy1zZWN0aW9ue1xuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbn1cbi5wb3N0cy1zZWN0aW9uLWJvdHRvbXtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbn1cbi5wb3N0cyBwe1xuICAgIG1hcmdpbjogMHB4O1xufVxuLnBvc3QtdGV4dHtcbiAgICBjb2xvcjogIzc3NztcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuLnBvc3QtdGV4dC1oZWFkZXJ7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm15LWljb257XG4gICAgY29sb3I6IGNyaW1zb247XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhZ2dlZHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm15LWljb24tcHJvZmlsZXtcbiAgICBjb2xvcjogIzc3NztcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4OyBcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5mb290ZXJ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcbn1cbi5jb250YWN0LWZvcm17XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaW5wdXQsIC50ZXh0LWFyZWF7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogYmFja2dyb3VuZDogI2VlZTsgKi9cbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uYnRue1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogIzc4ZTA4ZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm15LWJ0bntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY29tbWVudC1pbnB1dHtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiA4OCU7XG59XG4uY29tbWVudC1idG57XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogMHB4IDVweDtcbiAgICBjb2xvcjogaG90cGluaztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmxvZ2luLWJ0bntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJhY2stYnRue1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLm5vLWJvcmRlcntcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn1cbi5kaWFsb2ctaW5wdXR7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5sb2dpbi1jYXJke1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDo1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MHZoKVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLm1haW57XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICB9XG4gICAgLmNvbnRhY3QtZm9ybXtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIH1cbn1cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap\" rel=\"stylesheet\">\n    <link href=\"https://fonts.googleapis.com/css?family=Lobster&display=swap\" rel=\"stylesheet\">\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\n    <link href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n    <title>Instanote</title>\n    \n\n\n\n    <!-- The core Firebase JS SDK is always required and must be listed first -->\n    <script src=\"https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js\"></script>\n    <script src=\"https://cdn.firebase.com/libs/firebaseui/2.6.2/firebaseui.js\"></script>\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"https://cdn.firebase.com/libs/firebaseui/2.6.2/firebaseui.css\">\n\n\n    \n    <!-- TODO: Add SDKs for Firebase products that you want to use\n        https://firebase.google.com/docs/web/setup#config-web-app -->\n\n    <script>\n    // Your web app's Firebase configuration\n    var firebaseConfig = {\n        apiKey: \"AIzaSyDRDQ270tvJPp0Ofvh18_gCqSn45ozefV4\",\n        authDomain: \"instanote-790df.firebaseapp.com\",\n        databaseURL: \"https://instanote-790df.firebaseio.com\",\n        projectId: \"instanote-790df\",\n        storageBucket: \"\",\n        messagingSenderId: \"752392758751\",\n        appId: \"1:752392758751:web:8ce553f2bceabde5\"\n    };\n    // Initialize Firebase\n    firebase.initializeApp(firebaseConfig);\n    </script>\n</head>\n\n<body>\n    <router-outlet></router-outlet>\n</body>\n</html>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'instanote-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");
/* harmony import */ var _collections_collections_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./collections/collections.component */ "./src/app/collections/collections.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./firebase.service */ "./src/app/firebase.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");























// import { HttpModule } from '@angular/http';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _collections_collections_component__WEBPACK_IMPORTED_MODULE_9__["CollectionsComponent"],
                _notes_notes_component__WEBPACK_IMPORTED_MODULE_8__["NotesComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_22__["UserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"]
            ],
            providers: [_firebase_service__WEBPACK_IMPORTED_MODULE_18__["FirebaseService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__["CookieService"], _auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var redirectUrl = route['_routerState']['url'];
        if (this.authService.isValid()) {
            return true;
        }
        else {
            this.router.navigate(['/login'], { queryParams: { returnUrl: redirectUrl } });
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");




var AuthService = /** @class */ (function () {
    function AuthService(firebaseAuth, cookieService) {
        this.firebaseAuth = firebaseAuth;
        this.cookieService = cookieService;
        this.user = firebaseAuth.authState;
        // console.log(this.user);
    }
    AuthService.prototype.signup = function (email, password) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            // console.log('Success!', value);
        })
            .catch(function (err) {
            // console.log('Something went wrong:',err.message);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password).then(function (res) {
            _this.cookieService.set('instanote-token', res);
            // console.log(this.cookieService.get('instanote-token'));
        });
    };
    AuthService.prototype.isValid = function () {
        return this.cookieService.check('instanote-token');
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.firebaseAuth.auth.signOut().then(function () {
            _this.cookieService.delete('instanote-token');
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/collections/collections.component.css":
/*!*******************************************************!*\
  !*** ./src/app/collections/collections.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlY3Rpb25zL2NvbGxlY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/collections/collections.component.html":
/*!********************************************************!*\
  !*** ./src/app/collections/collections.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h1><a routerLink=\"/\"><i class=\"fa fa-sticky-note my-icon\" style=\"padding-right: 10px;\"></i></a>Instanote\n    <span style=\"text-align: right; float: right;\">\n      <!-- <button class=\"my-btn\"><i class=\"fa fa-compass my-icon-profile\" style=\"padding-left: 10px;vertical-align: middle;\"></i></button> -->\n      <!-- <button class=\"my-btn\" (click)=\"profileClciked()\"><i class=\"fa fa-user my-icon-profile\"\n          style=\"padding-left: 10px;vertical-align: middle;\"></i></button> -->\n    </span>\n  </h1>\n</div>\n<!-- <div class=\"\"> -->\n  <div class=\"row\" style=\"margin-right: 0px;margin-left: 0px;\">\n    <div class=\"col-lg-1\" style=\"margin-top: 20px;\">\n      <button class=\"my-btn\" (click)=\"compassClciked()\"><i class=\"fa fa-compass my-icon-profile\" style=\"padding-left: 10px;vertical-align: middle;\"></i></button>\n      <button class=\"my-btn\" (click)=\"profileClciked()\"><i class=\"fa fa-user my-icon-profile\" style=\"padding-left: 10px;vertical-align: middle;\"></i></button>\n      <button class=\"my-btn\" (click)=\"openDialog()\">    <i class=\"fa fa-plus my-icon-profile\" style=\"padding-left: 10px;vertical-align: middle;\"></i></button>\n      <button class=\"my-btn\" (click)=\"logoutClicked()\">    <i class=\"fa fa-sign-out my-icon-profile\" style=\"padding-left: 10px;vertical-align: middle;\"></i></button>\n    </div>\n    <div class=\"col-lg-10\">\n      <div class=\"row\">\n\n        <div class=\"col-lg-4\" *ngFor=\"let collection of collections\">\n          <div class=\"posts\">\n            <div class=\"posts-section\">\n              <p class=\"post-text-header\"><i\n                  class=\"fa fa-sticky-note my-icon-profile\"></i>{{collection.payload.doc.data().name}}</p>\n            </div>\n            <p style=\"background: #ddd;min-height: 100px;text-align: center; color: white\">\n              <img id=\"post-img\" src=\"{{collection.payload.doc.data().image}}\"\n                alt=\"{{collection.payload.doc.data().description}}\">\n            </p>\n            <div class=\"posts-section\">\n              <p style=\"text-align: right;\">\n                <i class=\"fa fa-heart my-icon\"></i>\n                <!-- <i class=\"fa fa-comment my-icon\"></i> -->\n                <!-- <i class=\"fa fa-lock my-icon\"></i> -->\n                <i class=\"fa fa-trash my-icon\" (click)=\"deletePost(collection)\"></i>\n                <i class=\"fa fa-arrow-right my-icon\" (click)=\"enterPost(collection)\"></i>\n              </p>\n              <p class=\"post-text\" *ngFor=\"let text of collection.payload.doc.data().posts\"><span\n                  class=\"tagged\">@{{collection.payload.doc.data().user}} </span>{{text}}</p>\n            </div>\n            <hr>\n            <div class=\"posts-section-bottom\">\n              <input type=\"text\" placeholder=\"write a comment\" class=\"comment-input\"\n                [(ngModel)]=\"collection.payload.doc.data().postText\" (ngModelChange)=\"postText = $event\"\n                (keyup.enter)=\"addPost(postText,collection)\">\n              <span class=\"comment-btn\" (click)=\"addPost(postText,collection)\">ADD</span>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"col-lg-4\" style=\"padding-top: 20px;padding-bottom: 20px;border-radius: 5px;\">\n          <div class=\"posts-add-container\">\n            <button class=\"my-btn posts-add-btn\" (click)=\"openDialog()\"><i class=\"fa fa-plus my-icon-profile\"\n                style=\"padding-left: 10px;vertical-align: middle;\"></i></button>\n          </div>\n        </div> -->\n      </div>\n    </div>\n    <div class=\"col-lg-1\"></div>\n  </div>\n<!-- </div> -->\n<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-2\"></div>\n      <div class=\"col-lg-8\">\n        <form class=\"contact-form\" name=\"contact\" netlify>\n          <h2>CONTACT US</h2>\n          <br>\n          <p>\n            <input type=\"text\" name=\"name\" placeholder=\"name\" />\n          </p>\n          <p>\n            <input type=\"email\" name=\"email\" placeholder=\"email\" />\n          </p>\n          <p>\n            <textarea name=\"message\" columns=\"5\" placeholder=\"message\" class=\"text-area\"></textarea>\n          </p>\n          <p style=\"text-align: center\">\n            <button type=\"submit\" class=\"btn\">send</button>\n          </p>\n        </form>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/collections/collections.component.ts":
/*!******************************************************!*\
  !*** ./src/app/collections/collections.component.ts ***!
  \******************************************************/
/*! exports provided: CollectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsComponent", function() { return CollectionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase.service */ "./src/app/firebase.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");








var CollectionsComponent = /** @class */ (function () {
    // posts: any[] = [
    //   {
    //     collectionId: 1,
    //     image:'https://source.unsplash.com/random/800x600?wedding&sig=' + this.getRandomNumber(), 
    //     user:'debo13',
    //     posts:['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //     'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    //     'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
    //     name:'October',
    //     postText:''
    //   },
    //   {
    //     collectionId: 2,
    //     image:'https://source.unsplash.com/random/800x600?wedding&sig=' + this.getRandomNumber(), 
    //     user:'laxmi21',
    //     posts:[],
    //     name:'September',
    //     postText:''
    //   }];
    function CollectionsComponent(router, dialog, firebaseService, db, authService) {
        this.router = router;
        this.dialog = dialog;
        this.firebaseService = firebaseService;
        this.db = db;
        this.authService = authService;
        this.collections = [];
    }
    CollectionsComponent.prototype.ngOnInit = function () {
        this.getData();
        this.getCollections();
    };
    CollectionsComponent.prototype.getCollections = function () {
        var _this = this;
        this.firebaseService.getCollections()
            .subscribe(function (result) {
            _this.collections = result;
            // console.log(result);
            // console.log(result[0].payload.doc.id);
            // console.log(result[0].payload.doc.data());
            // collection.payload.doc.data()
        });
    };
    CollectionsComponent.prototype.getData = function () {
        this.firebaseService.getUsers()
            .subscribe(function (result) {
            // console.log(result[0].payload.doc.data());
        });
    };
    CollectionsComponent.prototype.getRandomNumber = function () {
        return (Math.floor(Math.random() * 1000));
    };
    CollectionsComponent.prototype.enterPost = function (event) {
        this.router.navigate(['collection', event.payload.doc.id]);
    };
    CollectionsComponent.prototype.profileClciked = function () {
        this.router.navigate(['login']);
    };
    CollectionsComponent.prototype.logoutClicked = function () {
        this.authService.logout();
        this.router.navigate(['login']);
    };
    CollectionsComponent.prototype.compassClciked = function () {
        this.router.navigate(['user']);
    };
    CollectionsComponent.prototype.addPost = function (text, collection) {
        // console.log(text);
        // console.log(collection.payload.doc.id);
        // console.log(collection.payload.doc.data());
        var data = collection.payload.doc.data();
        data.posts.push(text);
        this.firebaseService.updateCollection(collection.payload.doc.id, data).then(function (res) { });
        // this.firebaseService.createPosts(collection.payload.doc.id,{body:text}).then();
        this.getCollections();
    };
    CollectionsComponent.prototype.deletePost = function (collection) {
        this.firebaseService.deletePost(collection.payload.doc.id).then();
        this.getCollections();
    };
    CollectionsComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
            width: '500px',
            data: {
                collectionId: 1,
                image: '',
                user: '',
                posts: [],
                name: '',
                postText: '',
                description: ''
            }
        });
        // dialogRef.close({ event: 'submit' });
        dialogRef.afterClosed().subscribe(function (result) {
            result.image = 'https://source.unsplash.com/random/800x400?' + result.description + '&sig=' + _this.getRandomNumber();
            _this.firebaseService.createCollection(result);
            _this.getCollections();
        });
    };
    CollectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-collections',
            template: __webpack_require__(/*! ./collections.component.html */ "./src/app/collections/collections.component.html"),
            styles: [__webpack_require__(/*! ./collections.component.css */ "./src/app/collections/collections.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], CollectionsComponent);
    return CollectionsComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.component.css":
/*!*********************************************!*\
  !*** ./src/app/dialog/dialog.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/*!**********************************************!*\
  !*** ./src/app/dialog/dialog.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Collection</h1>\n<div mat-dialog-content>\n  <!-- <p>What's your favorite animal?</p> -->\n  <mat-form-field style=\"width:100%\">\n    <input matInput [(ngModel)]=\"data.name\" placeholder=\"Collection Name\" class=\"dialog-input\">\n  </mat-form-field>\n  <mat-form-field style=\"width:100%\">\n    <input matInput [(ngModel)]=\"data.user\" placeholder=\"User\" class=\"dialog-input\">\n  </mat-form-field>\n  <mat-form-field style=\"width:100%\">\n    <input matInput [(ngModel)]=\"data.description\" placeholder=\"Description\" class=\"dialog-input\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button class=\"comment-btn\" mat-button (click)=\"onNoClick()\">CANCEL</button>\n  <button class=\"comment-btn\" mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>OK</button>\n</div>"

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/dialog/dialog.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/firebase.service.ts":
/*!*************************************!*\
  !*** ./src/app/firebase.service.ts ***!
  \*************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var FirebaseService = /** @class */ (function () {
    function FirebaseService(db, http) {
        this.db = db;
        this.http = http;
    }
    FirebaseService.prototype.getEntities = function (path) {
        return this.db.collection(path).snapshotChanges();
    };
    FirebaseService.prototype.getUser = function (userKey) {
        return this.db.collection('users').doc(userKey).snapshotChanges();
    };
    FirebaseService.prototype.updateUser = function (userKey, value) {
        value.nameToSearch = value.name.toLowerCase();
        return this.db.collection('users').doc(userKey).set(value);
    };
    FirebaseService.prototype.deleteUser = function (userKey) {
        return this.db.collection('users').doc(userKey).delete();
    };
    FirebaseService.prototype.getUsers = function () {
        return this.db.collection('users').snapshotChanges();
    };
    FirebaseService.prototype.searchUsers = function (searchValue) {
        return this.db.collection('users', function (ref) { return ref.where('nameToSearch', '>=', searchValue)
            .where('nameToSearch', '<=', searchValue + '\uf8ff'); })
            .snapshotChanges();
    };
    FirebaseService.prototype.searchUsersByAge = function (value) {
        return this.db.collection('users', function (ref) { return ref.orderBy('age').startAt(value); }).snapshotChanges();
    };
    FirebaseService.prototype.createUser = function (value) {
        return this.db.collection('users').add({
            name: value.name,
            nameToSearch: value.name.toLowerCase(),
            surname: value.surname,
            age: parseInt(value.age),
        });
    };
    FirebaseService.prototype.getCollections = function () {
        return this.db.collection('collections').snapshotChanges();
    };
    FirebaseService.prototype.getCollection = function (id) {
        return this.db.collection('collections').doc(id).snapshotChanges();
    };
    FirebaseService.prototype.getCollectionMap = function (id) {
        return this.db.collection('collections').doc(id).snapshotChanges();
        // .pipe(
        //   map((data: any) => {
        //     return [data.payload.data()];
        //   }), catchError( error => {
        //     return throwError( 'Something went wrong!' )
        //   })
        //  );
        //map((response: any) => {return response.payload.data().image});
    };
    FirebaseService.prototype.updateCollection = function (id, value) {
        return this.db.collection('collections').doc(id).set(value);
    };
    FirebaseService.prototype.createCollection = function (value) {
        return this.db.collection('collections').add(value);
    };
    FirebaseService.prototype.getPosts = function (collectionId, value) {
        return this.db.collection('collections/' + collectionId + '/posts').snapshotChanges();
        ;
    };
    FirebaseService.prototype.createPosts = function (collectionId, value) {
        return this.db.collection('collections/' + collectionId + '/posts').add(value);
    };
    FirebaseService.prototype.deletePost = function (id) {
        return this.db.collection('collections').doc(id).delete();
    };
    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h1><a routerLink=\"/\"><i  class=\"fa fa-sticky-note my-icon\" style=\"padding-right: 10px;\"></i></a>Instanote\n    <span style=\"text-align: right; float: right;\">\n      <!-- <button class=\"my-btn\"><i class=\"fa fa-compass my-icon-profile\" style=\"padding-left: 10px;vertical-align: middle;\"></i></button> -->\n      <!-- <button class=\"my-btn\"><i class=\"fa fa-user my-icon-profile\" style=\"padding-left: 10px;vertical-align: middle;\"></i></button> -->\n    </span>\n  </h1>\n</div>\n<div class=\"container\">\n<div class=\"row\" style=\"height:100vh;width: 100%;margin: 0px;\">\n  <div class=\"col-lg-4\"></div>\n  <div class=\"col-lg-4\">\n    <div class=\"login-card\">\n    <div mat-dialog-content>\n      <h4>User Signin</h4>\n      <hr>\n      <mat-form-field style=\"width:100%\">\n        <input matInput [(ngModel)]=\"email\" placeholder=\"Email\" class=\"dialog-input\">\n      </mat-form-field>\n      <mat-form-field style=\"width:100%\">\n        <input matInput type=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" class=\"dialog-input\">\n      </mat-form-field>\n    </div>\n    <div mat-dialog-actions>\n      <!-- <button class=\"comment-btn\" mat-button (click)=\"onNoClick()\">SIGNUP</button> -->\n      <button class=\"login-btn\" style=\"background: hotpink\" mat-button (click)=\"login()\">LOGIN</button>\n      <button class=\"login-btn\" style=\"background: deepskyblue;margin-bottom: 30px;\" mat-button (click)=\"signup()\">SIGNUP</button>\n    </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signup = function () {
        this.authService.signup(this.email, this.password);
        this.email = this.password = '';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.email, this.password).then(function () {
            _this.router.navigate(['/']);
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
        ;
        this.email = this.password = '';
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/notes/notes.component.css":
/*!*******************************************!*\
  !*** ./src/app/notes/notes.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGVzL25vdGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/notes/notes.component.html":
/*!********************************************!*\
  !*** ./src/app/notes/notes.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <h1> <a routerLink=\"/\"><i class=\"fa fa-sticky-note my-icon\" style=\"padding-right: 10px;\"></i></a>Instanote</h1>\n</div>\n\n<div style=\"overflow: hidden;\">\n    <img id=\"notes-img\" src=\"https://source.unsplash.com/random/1800x400?Desert&sig=510\">\n</div>\n<div class=\"row\" style=\"margin-top:-390px; margin-right:15px; margin-left:15px; margin-bottom:200px\">\n        <button type=\"submit\" class=\"back-btn\" routerLink=\"/\">\n            <i class=\"fa fa-arrow-left my-icon\"></i>\n        </button>\n    </div>\n<div class=\"container\" *ngFor=\"let collection of collections\">\n    <div class=\"row\">\n        <div class=\"col-lg-3\"></div>\n        <div class=\"col-lg-6\" style=\"min-height: 80vh;\">\n            <div class=\"posts\">\n                <div class=\"posts-section\">\n                    <p class=\"post-text-header\">\n                        <i class=\"fa fa-sticky-note my-icon-profile\"></i>{{collection.payload.data().name}}</p>\n                </div>\n                <div class=\"posts-section\">\n                    <p style=\"text-align: right;\">\n                    </p>\n                    <p class=\"post-text\" *ngFor=\"let text of collection.payload.data().posts\"><span\n                            class=\"tagged\">@{{collection.payload.data().user}} </span>{{text}}</p>\n                </div>\n                <hr>\n                <div class=\"posts-section-bottom\">\n                    <input type=\"text\" placeholder=\"write a comment\" class=\"comment-input\"\n                        [(ngModel)]=\"collection.payload.data().postText\" (ngModelChange)=\"postText = $event\"\n                        (keyup.enter)=\"addPost(postText,collection)\">\n                    <span class=\"comment-btn\" (click)=\"addPost(postText,collection)\">ADD</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<footer>\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-lg-2\"></div>\n            <div class=\"col-lg-8\">\n              <form class=\"contact-form\" name=\"contact\" netlify>\n                <h2>CONTACT US</h2>\n                <br>\n                <p>\n                  <input type=\"text\" name=\"name\" placeholder=\"name\" />\n                </p>\n                <p>\n                  <input type=\"email\" name=\"email\" placeholder=\"email\" />\n                </p>\n                <p>\n                  <textarea name=\"message\" columns=\"5\" placeholder=\"message\" class=\"text-area\"></textarea>\n                </p>\n                <p style=\"text-align: center\">\n                  <button type=\"submit\" class=\"btn\">send</button>\n                </p>\n              </form>\n            </div>\n          </div>\n        </div>\n      </footer>"

/***/ }),

/***/ "./src/app/notes/notes.component.ts":
/*!******************************************!*\
  !*** ./src/app/notes/notes.component.ts ***!
  \******************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase.service */ "./src/app/firebase.service.ts");




var NotesComponent = /** @class */ (function () {
    function NotesComponent(activatedRoute, firebaseService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.firebaseService = firebaseService;
        this.collections = [];
        this.activatedRoute.params.subscribe(function (params) {
            // console.log(params['collectionId']);
            _this.firebaseService.getCollectionMap(params['collectionId']).subscribe(function (res) {
                _this.collections.push(res);
            });
            // .subscribe( (result:any) => {
            //   // console.log(result.payload.data());
            // });
        });
    }
    NotesComponent.prototype.ngOnInit = function () {
    };
    NotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! ./notes.component.html */ "./src/app/notes/notes.component.html"),
            styles: [__webpack_require__(/*! ./notes.component.css */ "./src/app/notes/notes.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h1><a routerLink=\"/\"><i class=\"fa fa-sticky-note my-icon\" style=\"padding-right: 10px;\"></i></a>Instanote\n    <span style=\"text-align: right; float: right;\">\n    </span>\n  </h1>\n</div>\n<div class=\"row\" style=\"overflow: hidden;height: 90vh;margin-left: 0px;margin-right: 0px;\">\n  <img id=\"notes-img\" src=\"https://source.unsplash.com/random/1800x800?Desert&sig=510\">\n</div>\n<div class=\"row\" style=\"margin-top:-500px;margin-left: 0px;margin-right: 0px;\">\n  <div class=\"col-lg-3\"></div>\n  <div class=\"col-lg-6\">\n    <div class=\"posts\">\n      <div class=\"user-posts-section\">\n        <div mat-dialog-content>\n          <h4>User Details</h4>\n          <hr>\n          <mat-form-field style=\"width:100%\">\n            <input matInput type=\"text\"  placeholder=\"Name\" class=\"dialog-input\">\n          </mat-form-field>\n          <mat-form-field style=\"width:100%\">\n            <input matInput type=\"text\"  placeholder=\"City\" class=\"dialog-input\">\n          </mat-form-field>\n          <mat-form-field style=\"width:100%\">\n            <input matInput type=\"text\" placeholder=\"Contact Number\" class=\"dialog-input\">\n          </mat-form-field>\n          <mat-form-field style=\"width:100%\">\n              <input matInput type=\"text\" placeholder=\"Email\" class=\"dialog-input\">\n            </mat-form-field>\n        </div>\n        <button class=\"login-btn\" style=\"background: deepskyblue;margin-bottom: 30px;\" mat-button\n          (click)=\"signup()\">SUBMIT</button>\n      </div>\n    </div>\n  </div>\n</div>\n<footer>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-2\"></div>\n        <div class=\"col-lg-8\">\n          <form class=\"contact-form\" name=\"contact\" style=\"margin-top: 30px;\" netlify>\n            <h2>CONTACT US</h2>\n            <br>\n            <p>\n              <input type=\"text\" name=\"name\" placeholder=\"name\" />\n            </p>\n            <p>\n              <input type=\"email\" name=\"email\" placeholder=\"email\" />\n            </p>\n            <p>\n              <textarea name=\"message\" columns=\"5\" placeholder=\"message\" class=\"text-area\"></textarea>\n            </p>\n            <p style=\"text-align: center\">\n              <button type=\"submit\" class=\"btn\">send</button>\n            </p>\n          </form>\n        </div>\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase.service */ "./src/app/firebase.service.ts");




var UserComponent = /** @class */ (function () {
    function UserComponent(activatedRoute, firebaseService) {
        this.activatedRoute = activatedRoute;
        this.firebaseService = firebaseService;
        this.activatedRoute.params.subscribe(function (params) {
            // console.log(params['userId']);
            // this.firebaseService.getCollectionMap(params['collectionId']).subscribe((res:any)=>{
            //   console.log(res);
            // });
        });
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css"), __webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDRDQ270tvJPp0Ofvh18_gCqSn45ozefV4",
        authDomain: "instanote-790df.firebaseapp.com",
        databaseURL: "https://instanote-790df.firebaseio.com",
        projectId: "instanote-790df",
        storageBucket: "",
        messagingSenderId: "752392758751",
        appId: "1:752392758751:web:8ce553f2bceabde5"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/debojroy/Documents/Projects/instanote-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map