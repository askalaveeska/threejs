"use strict";
(self["webpackChunkthreejs"] = self["webpackChunkthreejs"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _stage_mining_mining_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stage/mining/mining.component */ 7819);
/* harmony import */ var _stage_premining_premining_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stage/premining/premining.component */ 1036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [{
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'pre-mining',
  component: _stage_premining_premining_component__WEBPACK_IMPORTED_MODULE_3__.PreminingComponent
}, {
  path: 'mining',
  component: _stage_mining_mining_component__WEBPACK_IMPORTED_MODULE_2__.MiningComponent
}, {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'threejs';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _switch_switch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./switch/switch.component */ 3579);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carousel/carousel.component */ 5405);
/* harmony import */ var _pin_pin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pin/pin.component */ 8709);
/* harmony import */ var _stage_stage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stage/stage.component */ 800);
/* harmony import */ var _stage_premining_premining_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stage/premining/premining.component */ 1036);
/* harmony import */ var _stage_mining_mining_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stage/mining/mining.component */ 7819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _switch_switch_component__WEBPACK_IMPORTED_MODULE_6__.SwitchComponent, _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__.CarouselComponent, _pin_pin_component__WEBPACK_IMPORTED_MODULE_8__.PinComponent, _stage_stage_component__WEBPACK_IMPORTED_MODULE_9__.StageComponent, _stage_premining_premining_component__WEBPACK_IMPORTED_MODULE_10__.PreminingComponent, _stage_mining_mining_component__WEBPACK_IMPORTED_MODULE_11__.MiningComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 5405:
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselComponent": () => (/* binding */ CarouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CarouselComponent {}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
  return new (t || CarouselComponent)();
};
CarouselComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CarouselComponent,
  selectors: [["app-carousel"]],
  decls: 26,
  vars: 0,
  consts: [["id", "carouselExampleControls", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../assets/media/RLA1705_Year01_Flat.jpg", "alt", "First slide", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "../../assets/media/RLA1705_Year01_Textured.jpg", "alt", "Second slide", 1, "d-block", "w-100"], ["src", "../../assets/media/RLA1705_Year08_Flat.jpg", "alt", "Third slide", 1, "d-block", "w-100"], ["src", "../../assets/media/RLA1705_Year08_Textured.jpg", "alt", "Third slide", 1, "d-block", "w-100"], ["src", "../../assets/media/RLA1705_Year16_Flat.jpg", "alt", "Third slide", 1, "d-block", "w-100"], ["src", "../../assets/media/RLA1705_Year16_Textured.jpg", "alt", "Third slide", 1, "d-block", "w-100"], ["src", "../../assets/media/RLA1705_YearFinal_Flat.jpg", "alt", "Third slide", 1, "d-block", "w-100"], ["src", "../../assets/media/RLA1705_YearFinal_Textured.jpg", "alt", "Third slide", 1, "d-block", "w-100"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]],
  template: function CarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Previous");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 5,
  vars: 0,
  consts: [[1, "footer", "mt-auto", "py-3", "bg-light"], [1, "container"], [1, "text-muted"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "span", 2)(3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A9 Copyright Truescape Ltd (2023). All rights reserved.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navbar/navbar.component */ 6313);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 970);
/* harmony import */ var _stage_stage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stage/stage.component */ 800);





class HomeComponent {}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 4,
  vars: 0,
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar")(1, "app-stage")(2, "router-outlet")(3, "app-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _stage_stage_component__WEBPACK_IMPORTED_MODULE_2__.StageComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class LoginComponent {
  constructor(formBuilder, route, router) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.loading = false;
    this.submitted = false;
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]
    });
    // reset login status
    //this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['home'] || '/';
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.router.navigate(['/home']);
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 27,
  vars: 0,
  consts: [[1, "container"], [1, "row", "text-center", "mb-4"], [1, "col-md-12"], ["src", "../../assets/ui/truescape-logo-dark.png", "height", "50px"], [1, "row", "text-center"], [1, "col-md-6", "offset-md-3"], [1, "card"], [1, "card-body"], [1, "login-img"], ["src", "../../assets/ui/logo.svg", 2, "height", "50px", "width", "50px"], [1, "login-form", "mt-4"], [1, "h3", "mb-3", "fw-normal"], [1, "form-floating"], ["type", "email", "id", "floatingInput", "placeholder", "name@example.com", 1, "form-control"], ["for", "floatingInput"], ["type", "password", "id", "floatingPassword", "placeholder", "Password", 1, "form-control"], ["for", "floatingPassword"], ["type", "submit", 1, "w-100", "btn", "btn-lg", "btn-primary"], [1, "mt-5", "mb-3", "text-muted"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10)(11, "form")(12, "h1", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Please sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Email address");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "BR");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u00A9 Copyright Truescape Ltd (2023). All rights reserved");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup],
  styles: [".login-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width:10%; max-height:20%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsU0FBUyxFQUFFLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1pbWcgaW1nIHt3aWR0aDoxMCU7IG1heC1oZWlnaHQ6MjAlO30iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6313:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class NavbarComponent {}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)();
};
NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  decls: 12,
  vars: 0,
  consts: [[1, "p-3", "text-bg-dark"], [1, "container"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-center", "justify-content-lg-start"], ["href", "/", 1, "d-flex", "align-items-center", "mb-2", "mb-lg-0", "text-white", "text-decoration-none"], ["src", "../../assets/ui/logo.svg", 2, "height", "50 px", "width", "50px"], [1, "nav", "col-12", "col-lg-auto", "me-lg-auto", "mb-2", "justify-content-center", "mb-md-0"], ["href", "#", 1, "nav-link", "px-2", "text-secondary"], [1, "text-end"], ["type", "button", 1, "btn", "btn-warning"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5)(6, "li")(7, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8709:
/*!**************************************!*\
  !*** ./src/app/pin/pin.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PinComponent": () => (/* binding */ PinComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PinComponent {}
PinComponent.ɵfac = function PinComponent_Factory(t) {
  return new (t || PinComponent)();
};
PinComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PinComponent,
  selectors: [["app-pin"]],
  decls: 16,
  vars: 0,
  consts: [["type", "button", "data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "btn", "btn-primary"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "fs-5"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary"]],
  template: function PinComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SITE ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Modal title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " ... ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Save changes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7819:
/*!**************************************************!*\
  !*** ./src/app/stage/mining/mining.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MiningComponent": () => (/* binding */ MiningComponent)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ 2845);
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ 8108);
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ 1100);
/* harmony import */ var three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/renderers/CSS2DRenderer */ 5161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





const _c0 = ["canvas"];
class MiningComponent {
  //? Helper Properties (Private Properties);
  get canvas() {
    return this.canvasRef.nativeElement;
  }
  /**
   *Animate the model
   *
   * @private
   * @memberof ModelComponent
   */
  animateModel() {
    if (this.model) {
      //this.model.rotation.z += 0.002;
    }
  }
  /**
   * Create the scene
   *
   * @private
   * @memberof CubeComponent
   */
  createScene() {
    //* Scene
    this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
    this.scene.background = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xd4d4d8);
    this.loaderGLTF.load('../../assets/3d-assets/Terrain_Year_16.gltf', gltf => {
      this.model = gltf.scene.children[0];
      console.log(this.model);
      var box = new three__WEBPACK_IMPORTED_MODULE_0__.Box3().setFromObject(this.model);
      box.getCenter(this.model.position); // this re-sets the mesh position
      this.model.position.multiplyScalar(-1);
      this.scene.add(this.model);
    });
    this.loaderGLTF.load('../../assets/3d-assets/Mining_Facilities.gltf', gltf => {
      this.model = gltf.scene.children[0];
      console.log(this.model);
      var box = new three__WEBPACK_IMPORTED_MODULE_0__.Box3().setFromObject(this.model);
      box.getCenter(this.model.position); // this re-sets the mesh position
      this.model.position.multiplyScalar(-1);
      this.scene.add(this.model);
    });
    // this.loaderGLTF.load('../../assets/3d-assets/Mining_Facilities.gltf', (gltf: GLTF) => {
    //   this.model = gltf.scene.children[0];
    //   console.log(this.model);
    //   var box = new THREE.Box3().setFromObject(this.model);
    //   box.getCenter(this.model.position); // this re-sets the mesh position
    //   this.model.position.multiplyScalar(-1);
    //   this.scene.add(this.model);
    // });
    //*Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(this.fieldOfView, aspectRatio, this.nearClippingPane, this.farClippingPane);
    this.camera.position.x = 100;
    this.camera.position.y = 500;
    this.camera.position.z = 100;
    this.ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0x00000, 50);
    this.scene.add(this.ambientLight);
    this.directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffdf04, 0.4);
    this.directionalLight.position.set(0, 1, 0);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);
    this.light1 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0x4b371c, 10);
    this.light1.position.set(0, 200, 400);
    this.scene.add(this.light1);
    this.light2 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0x4b371c, 10);
    this.light2.position.set(500, 100, 0);
    this.scene.add(this.light2);
    this.light3 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0x4b371c, 10);
    this.light3.position.set(0, 100, -500);
    this.scene.add(this.light3);
    this.light4 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0x4b371c, 10);
    this.light4.position.set(-500, 300, 500);
    this.scene.add(this.light4);
  }
  getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }
  /**
   * Start the rendering loop
   *
   * @private
   * @memberof CubeComponent
   */
  startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    let component = this;
    (function render() {
      component.renderer.render(component.scene, component.camera);
      component.animateModel();
      requestAnimationFrame(render);
    })();
  }
  constructor() {
    //* Stage Properties
    this.fieldOfView = 120;
    this.nearClippingPane = 1;
    this.farClippingPane = 3000;
    this.loaderGLTF = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader();
    /**
     *create controls
     *
     * @private
     * @memberof ModelComponent
     */
    this.createControls = () => {
      const renderer = new three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_2__.CSS2DRenderer();
      renderer.setSize(1200, 780);
      renderer.domElement.style.position = 'absolute';
      renderer.domElement.style.top = '0px';
      document.body.appendChild(renderer.domElement);
      this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__.OrbitControls(this.camera, renderer.domElement);
      this.controls.autoRotate = true;
      this.controls.enableZoom = true;
      this.controls.enablePan = false;
      this.controls.update();
    };
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
    this.createControls();
  }
}
MiningComponent.ɵfac = function MiningComponent_Factory(t) {
  return new (t || MiningComponent)();
};
MiningComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MiningComponent,
  selectors: [["app-mining"]],
  viewQuery: function MiningComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.canvasRef = _t.first);
    }
  },
  inputs: {
    fieldOfView: "fieldOfView",
    nearClippingPane: ["nearClipping", "nearClippingPane"],
    farClippingPane: ["farClipping", "farClippingPane"]
  },
  decls: 2,
  vars: 0,
  consts: [["canvas", ""]],
  template: function MiningComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "canvas", null, 0);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1036:
/*!********************************************************!*\
  !*** ./src/app/stage/premining/premining.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreminingComponent": () => (/* binding */ PreminingComponent)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ 2845);
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ 8108);
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ 1100);
/* harmony import */ var three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/renderers/CSS2DRenderer */ 5161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





const _c0 = ["precanvas"];
class PreminingComponent {
  //? Helper Properties (Private Properties);
  get canvas() {
    return this.canvasRef.nativeElement;
  }
  /**
   *Animate the model
   *
   * @private
   * @memberof ModelComponent
   */
  animateModel() {
    if (this.model) {
      //this.model.rotation.z += 0.002;
    }
  }
  /**
   * Create the scene
   *
   * @private
   * @memberof CubeComponent
   */
  createScene() {
    //* Scene
    this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
    this.scene.background = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xd4d4d8);
    this.loaderGLTF.load('../../assets/3d-assets/Terrain_Outer.gltf', gltf => {
      this.model = gltf.scene.children[0];
      console.log(this.model);
      var box = new three__WEBPACK_IMPORTED_MODULE_0__.Box3().setFromObject(this.model);
      box.getCenter(this.model.position); // this re-sets the mesh position
      this.model.position.multiplyScalar(-1);
      this.scene.add(this.model);
    });
    this.loaderGLTF.load('../../assets/3d-assets/Terrain_Existing.gltf', gltf => {
      this.model = gltf.scene.children[0];
      console.log(this.model);
      var box = new three__WEBPACK_IMPORTED_MODULE_0__.Box3().setFromObject(this.model);
      box.getCenter(this.model.position); // this re-sets the mesh position
      this.model.position.multiplyScalar(-1);
      this.scene.add(this.model);
    });
    // this.loaderGLTF.load('../../assets/3d-assets/Mining_Facilities.gltf', (gltf: GLTF) => {
    //   this.model = gltf.scene.children[0];
    //   console.log(this.model);
    //   var box = new THREE.Box3().setFromObject(this.model);
    //   box.getCenter(this.model.position); // this re-sets the mesh position
    //   this.model.position.multiplyScalar(-1);
    //   this.scene.add(this.model);
    // });
    //*Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(this.fieldOfView, aspectRatio, this.nearClippingPane, this.farClippingPane);
    this.camera.position.x = 100;
    this.camera.position.y = 500;
    this.camera.position.z = 100;
    this.ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0x00000, 50);
    this.scene.add(this.ambientLight);
    this.directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffdf04, 0.4);
    this.directionalLight.position.set(0, 1, 0);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);
    this.light1 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0x4b371c, 10);
    this.light1.position.set(0, 200, 400);
    this.scene.add(this.light1);
    this.light2 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0x4b371c, 10);
    this.light2.position.set(500, 100, 0);
    this.scene.add(this.light2);
    this.light3 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0x4b371c, 10);
    this.light3.position.set(0, 100, -500);
    this.scene.add(this.light3);
    this.light4 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0x4b371c, 10);
    this.light4.position.set(-500, 300, 500);
    this.scene.add(this.light4);
  }
  getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }
  /**
   * Start the rendering loop
   *
   * @private
   * @memberof CubeComponent
   */
  startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    let component = this;
    (function render() {
      component.renderer.render(component.scene, component.camera);
      component.animateModel();
      requestAnimationFrame(render);
    })();
  }
  constructor() {
    //* Stage Properties
    this.fieldOfView = 120;
    this.nearClippingPane = 1;
    this.farClippingPane = 3000;
    this.loaderGLTF = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader();
    /**
     *create controls
     *
     * @private
     * @memberof ModelComponent
     */
    this.createControls = () => {
      const renderer = new three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_2__.CSS2DRenderer();
      renderer.setSize(1200, 780);
      renderer.domElement.style.position = 'absolute';
      renderer.domElement.style.top = '0px';
      document.body.appendChild(renderer.domElement);
      this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__.OrbitControls(this.camera, renderer.domElement);
      this.controls.autoRotate = true;
      this.controls.enableZoom = true;
      this.controls.enablePan = false;
      this.controls.update();
    };
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
    this.createControls();
  }
}
PreminingComponent.ɵfac = function PreminingComponent_Factory(t) {
  return new (t || PreminingComponent)();
};
PreminingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PreminingComponent,
  selectors: [["app-premining"]],
  viewQuery: function PreminingComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.canvasRef = _t.first);
    }
  },
  inputs: {
    fieldOfView: "fieldOfView",
    nearClippingPane: ["nearClipping", "nearClippingPane"],
    farClippingPane: ["farClipping", "farClippingPane"]
  },
  decls: 2,
  vars: 0,
  consts: [["precanvas", ""]],
  template: function PreminingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "canvas", null, 0);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 800:
/*!******************************************!*\
  !*** ./src/app/stage/stage.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StageComponent": () => (/* binding */ StageComponent)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ 2845);
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ 8108);
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ 1100);
/* harmony import */ var three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/renderers/CSS2DRenderer */ 5161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





const _c0 = ["canvas"];
class StageComponent {
  //? Helper Properties (Private Properties);
  get canvas() {
    return this.canvasRef.nativeElement;
  }
  /**
   *Animate the model
   *
   * @private
   * @memberof ModelComponent
   */
  animateModel() {
    if (this.model) {
      //this.model.rotation.z += 0.002;
    }
  }
  /**
   * Create the scene
   *
   * @private
   * @memberof CubeComponent
   */
  createScene() {
    //* Scene
    this.scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();
    this.scene.background = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xd4d4d8);
    this.loaderGLTF.load('../../assets/3d-assets/Terrain_Existing.gltf', gltf => {
      this.model = gltf.scene.children[0];
      console.log(this.model);
      var box = new three__WEBPACK_IMPORTED_MODULE_0__.Box3().setFromObject(this.model);
      box.getCenter(this.model.position); // this re-sets the mesh position
      this.model.position.multiplyScalar(-1);
      this.scene.add(this.model);
    });
    this.loaderGLTF.load('../../assets/3d-assets/Terrain_Outer.gltf', gltf => {
      this.model = gltf.scene.children[0];
      console.log(this.model);
      var box = new three__WEBPACK_IMPORTED_MODULE_0__.Box3().setFromObject(this.model);
      box.getCenter(this.model.position); // this re-sets the mesh position
      this.model.position.multiplyScalar(-1);
      this.scene.add(this.model);
    });
    // this.loaderGLTF.load('../../assets/3d-assets/Mining_Facilities.gltf', (gltf: GLTF) => {
    //   this.model = gltf.scene.children[0];
    //   console.log(this.model);
    //   var box = new THREE.Box3().setFromObject(this.model);
    //   box.getCenter(this.model.position); // this re-sets the mesh position
    //   this.model.position.multiplyScalar(-1);
    //   this.scene.add(this.model);
    // });
    //*Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(this.fieldOfView, aspectRatio, this.nearClippingPane, this.farClippingPane);
    this.camera.position.x = 100;
    this.camera.position.y = 500;
    this.camera.position.z = 100;
    this.ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0x00000, 50);
    this.scene.add(this.ambientLight);
    this.directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffdf04, 0.4);
    this.directionalLight.position.set(0, 1, 0);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);
    this.light1 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0x4b371c, 10);
    this.light1.position.set(0, 200, 400);
    this.scene.add(this.light1);
    this.light2 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0x4b371c, 10);
    this.light2.position.set(500, 100, 0);
    this.scene.add(this.light2);
    this.light3 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0x4b371c, 10);
    this.light3.position.set(0, 100, -500);
    this.scene.add(this.light3);
    this.light4 = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0x4b371c, 10);
    this.light4.position.set(-500, 300, 500);
    this.scene.add(this.light4);
  }
  getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }
  /**
   * Start the rendering loop
   *
   * @private
   * @memberof CubeComponent
   */
  startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    let component = this;
    (function render() {
      component.renderer.render(component.scene, component.camera);
      component.animateModel();
      requestAnimationFrame(render);
    })();
  }
  constructor() {
    //* Stage Properties
    this.fieldOfView = 120;
    this.nearClippingPane = 1;
    this.farClippingPane = 3000;
    this.loaderGLTF = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader();
    /**
     *create controls
     *
     * @private
     * @memberof ModelComponent
     */
    this.createControls = () => {
      const renderer = new three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_2__.CSS2DRenderer();
      renderer.setSize(1200, 780);
      renderer.domElement.style.position = 'absolute';
      renderer.domElement.style.top = '0px';
      document.body.appendChild(renderer.domElement);
      this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__.OrbitControls(this.camera, renderer.domElement);
      this.controls.autoRotate = true;
      this.controls.enableZoom = true;
      this.controls.enablePan = false;
      this.controls.update();
    };
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
    this.createControls();
  }
}
StageComponent.ɵfac = function StageComponent_Factory(t) {
  return new (t || StageComponent)();
};
StageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: StageComponent,
  selectors: [["app-stage"]],
  viewQuery: function StageComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.canvasRef = _t.first);
    }
  },
  inputs: {
    fieldOfView: "fieldOfView",
    nearClippingPane: ["nearClipping", "nearClippingPane"],
    farClippingPane: ["farClipping", "farClippingPane"]
  },
  decls: 10,
  vars: 0,
  consts: [[1, "d-flex", "justify-content-center"], ["role", "group", "aria-label", "Basic radio toggle button group", 1, "btn-group"], ["type", "radio", "name", "btnradio", "id", "btnradio1", "autocomplete", "off", "checked", "", 1, "btn-check"], ["for", "btnradio1", 1, "btn", "btn-outline-success"], ["type", "radio", "name", "btnradio", "id", "btnradio2", "autocomplete", "off", 1, "btn-check"], ["for", "btnradio2", 1, "btn", "btn-outline-success"]],
  template: function StageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Pre Mining");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Mining");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "br")(9, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3579:
/*!********************************************!*\
  !*** ./src/app/switch/switch.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchComponent": () => (/* binding */ SwitchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SwitchComponent {}
SwitchComponent.ɵfac = function SwitchComponent_Factory(t) {
  return new (t || SwitchComponent)();
};
SwitchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SwitchComponent,
  selectors: [["app-switch"]],
  decls: 2,
  vars: 0,
  template: function SwitchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "switch works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1211), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map