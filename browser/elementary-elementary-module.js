(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["elementary-elementary-module"],{

/***/ "MHOx":
/*!*********************************************************!*\
  !*** ./src/app/elementary/elementary-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ElementaryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementaryRoutingModule", function() { return ElementaryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _elementary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementary.component */ "vTKX");





const routes = [{ path: '', component: _elementary_component__WEBPACK_IMPORTED_MODULE_2__["ElementaryComponent"] }];
class ElementaryRoutingModule {
}
ElementaryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ElementaryRoutingModule });
ElementaryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ElementaryRoutingModule_Factory(t) { return new (t || ElementaryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ElementaryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElementaryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "mWSD":
/*!*************************************************!*\
  !*** ./src/app/elementary/elementary.module.ts ***!
  \*************************************************/
/*! exports provided: ElementaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementaryModule", function() { return ElementaryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _elementary_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementary-routing.module */ "MHOx");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _elementary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elementary.component */ "vTKX");






class ElementaryModule {
}
ElementaryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ElementaryModule });
ElementaryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ElementaryModule_Factory(t) { return new (t || ElementaryModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _elementary_routing_module__WEBPACK_IMPORTED_MODULE_2__["ElementaryRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ElementaryModule, { declarations: [_elementary_component__WEBPACK_IMPORTED_MODULE_4__["ElementaryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _elementary_routing_module__WEBPACK_IMPORTED_MODULE_2__["ElementaryRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElementaryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_elementary_component__WEBPACK_IMPORTED_MODULE_4__["ElementaryComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _elementary_routing_module__WEBPACK_IMPORTED_MODULE_2__["ElementaryRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vTKX":
/*!****************************************************!*\
  !*** ./src/app/elementary/elementary.component.ts ***!
  \****************************************************/
/*! exports provided: ElementaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementaryComponent", function() { return ElementaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_head_head_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/head/head.component */ "wu+i");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/carousel/carousel.component */ "P1kN");





class ElementaryComponent {
    constructor() {
        this.list = [
            'elementary/gallery/1.png',
            'elementary/gallery/2.png',
            'elementary/gallery/3.jpg',
            'elementary/gallery/4.png',
            'elementary/gallery/5.png',
            'elementary/gallery/6.jpg',
        ];
    }
    ngOnInit() { }
}
ElementaryComponent.ɵfac = function ElementaryComponent_Factory(t) { return new (t || ElementaryComponent)(); };
ElementaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ElementaryComponent, selectors: [["app-elementary"]], decls: 194, vars: 4, consts: [[3, "isBlack", "img1", "img2"], ["mainTitle", "", 1, "mainTitle"], ["mainp", "", 1, "mainp"], ["mainLinks", "", 1, "links"], ["fragment", "principles", "routerLink", "/elementary", 1, "btn-blue", "pd-large"], ["routerLink", "/", 1, "btn-hollow", "pd-large-hollow"], ["id", "principles", 1, "quotes", "nowrapQuotes"], [1, "container"], [1, "title"], [1, "content"], [1, "quote"], ["src", "/assets/img/elementary/ukrmova.png", "alt", ""], ["src", "/assets/img/elementary/social.png", "alt", ""], ["src", "/assets/img/elementary/dopit.png", "alt", ""], ["src", "/assets/img/elementary/math.png", "alt", ""], ["src", "/assets/img/elementary/eco.png", "alt", ""], ["src", "/assets/img/elementary/innova.png", "alt", ""], ["id", "crew"], [1, "crew"], [1, "card"], ["src", "/assets/img/teachers/1.png", "alt", ""], [1, "name"], [1, "role"], ["src", "/assets/img/teachers/17.png", "alt", ""], ["src", "/assets/img/teachers/2.png", "alt", ""], ["src", "/assets/img/teachers/4.png", "alt", ""], ["src", "/assets/img/teachers/9.png", "alt", ""], ["src", "/assets/img/teachers/6.png", "alt", ""], ["src", "/assets/img/teachers/7.png", "alt", ""], ["src", "/assets/img/teachers/10.png", "alt", ""], ["src", "/assets/img/teachers/5.png", "alt", ""], ["src", "/assets/img/teachers/12.png", "alt", ""], ["src", "/assets/img/teachers/13.png", "alt", ""], ["src", "/assets/img/teachers/8.png", "alt", ""], ["src", "/assets/img/teachers/15.png", "alt", ""], ["src", "/assets/img/teachers/3.png", "alt", ""], ["src", "/assets/img/teachers/11.png", "alt", ""], ["src", "/assets/img/teachers/14.png", "alt", ""], ["src", "/assets/img/teachers/16.png", "alt", ""], ["id", "directions"], [1, "reversed"], [1, "areas"], [1, "row"], [1, "area"], [1, "descr"], [1, "images"], ["src", "/assets/img/elementary/rect.png", "alt", ""], ["src", "/assets/img/elementary/circle.png", "alt", ""], ["src", "/assets/img/elementary/triag.png", "alt", ""], ["src", "/assets/img/elementary/directions.png", "alt", "", 1, "poster"], [3, "images"]], template: function ElementaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-head", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0430 \u0448\u043A\u043E\u043B\u0430 \u0434\u043B\u044F \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u043E\u0433\u043E \u0441\u0442\u0430\u0440\u0442\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0414\u0430\u0454\u043C\u043E \u043D\u0435 \u043F\u0440\u043E\u0441\u0442\u043E \u0442\u0435\u043E\u0440\u0456\u044E, \u0430 \u0439 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u0456 \u043D\u0430\u0432\u0438\u0447\u043A\u0438, \u0449\u043E \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0443\u0442\u044C \u0443 \u043F\u043E\u0434\u0430\u043B\u044C\u0448\u043E\u043C\u0443 \u0436\u0438\u0442\u0442\u0456. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041A\u043B\u044E\u0447\u043E\u0432\u0456 \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0446\u0456\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u0412\u043E\u043B\u043E\u0434\u0456\u043D\u043D\u044F \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u043E\u044E \u043C\u043E\u0432\u043E\u044E \u2014\u0443\u043C\u0456\u043D\u043D\u044F \u0432\u0438\u0441\u043B\u043E\u0432\u043B\u044E\u0432\u0430\u0442\u0438 \u0441\u0432\u043E\u0457 \u0434\u0443\u043C\u043A\u0438 \u0442\u0430 \u043F\u043E\u044F\u0441\u043D\u044E\u0432\u0430\u0442\u0438 \u0444\u0430\u043A\u0442\u0438 \u0443 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456\u0439 \u0444\u043E\u0440\u043C\u0456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0421\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u0412\u0447\u0438\u043C\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0432\u0437\u0430\u0454\u043C\u043E\u0434\u0456\u044F\u0442\u0438 \u0442\u0430 \u0441\u043F\u0456\u0432\u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0442\u0438 \u0437 \u0456\u043D\u0448\u0438\u043C\u0438, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0446\u0456\u043D\u0443\u0432\u0430\u0442\u0438 \u043B\u044E\u0434\u0435\u0439 \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u0441\u0435\u0431\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0414\u043E\u043F\u0438\u0442\u043B\u0438\u0432\u0456\u0441\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u0417\u0432\u0438\u0447\u043A\u0430 \u0441\u043F\u043E\u0441\u0442\u0435\u0440\u0456\u0433\u0430\u0442\u0438 \u0442\u0430 \u0434\u043E\u0441\u043B\u0456\u0434\u0436\u0443\u0432\u0430\u0442\u0438, \u0444\u043E\u0440\u043C\u0443\u043B\u044E\u0432\u0430\u0442\u0438 \u043F\u0440\u0438\u043F\u0443\u0449\u0435\u043D\u043D\u044F \u0456 \u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u0438\u0441\u043D\u043E\u0432\u043A\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u0412\u0438\u044F\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0441\u0442\u0438\u0445 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u043D\u0438\u0445 \u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0435\u0439 \u0432 \u043D\u0430\u0432\u043A\u043E\u043B\u0438\u0448\u043D\u044C\u043E\u043C\u0443 \u0441\u0432\u0456\u0442\u0456 \u0442\u0430 \u0440\u043E\u043B\u044C \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0438 \u0443 \u0436\u0438\u0442\u0442\u0456 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0415\u043A\u043E\u043B\u043E\u0433\u0456\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u041E\u0441\u043D\u043E\u0432\u0438 \u0435\u043A\u043E\u043B\u043E\u0433\u0456\u0457: \u0432\u0438\u0432\u0447\u0435\u043D\u043D\u044F \u043F\u0440\u0430\u0432\u0438\u043B \u0434\u043B\u044F \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u043F\u0440\u0438\u0440\u043E\u0434\u0438 \u0442\u0430 \u0457\u0445 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u0435 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0406\u043D\u043D\u043E\u0432\u0430\u0446\u0456\u0439\u043D\u0456\u0441\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0456\u0441\u0442\u044C \u0434\u043E \u043D\u043E\u0432\u0438\u0445 \u0456\u0434\u0435\u0439, \u044F\u043A\u0430 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0443\u0454 \u043F\u043E\u0434\u0430\u043B\u044C\u0448\u0443 \u0437\u0434\u0430\u0442\u043D\u0456\u0441\u0442\u044C \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043D\u0430\u0432\u0447\u0430\u0442\u0438\u0441\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u0412\u0438\u043A\u043B\u0430\u0434\u0430\u0446\u044C\u043A\u0438\u0439 \u0441\u043A\u043B\u0430\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u0420\u0443\u0431\u0446\u043E\u0432\u0430 \u0413\u0430\u043B\u0438\u043D\u0430 \u041C\u0438\u043A\u043E\u043B\u0430\u0457\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u0432\u0438\u0449\u043E\u0457 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u0421\u0442\u0440\u0456\u043B\u044C\u0447\u0443\u043A \u0422\u0456\u043D\u0430 \u041C\u0438\u043A\u043E\u043B\u0430\u0457\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u041F\u0441\u0438\u0445\u043E\u043B\u043E\u0433 \u0432\u0438\u0449\u043E\u0457 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u041A\u043E\u0440\u043E\u043B\u044C \u041E\u043B\u044C\u0433\u0430 \u0406\u0433\u043E\u0440\u0456\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u0412\u0447\u0438\u0442\u0435\u043B\u044C \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0438\u0445 \u043A\u043B\u0430\u0441\u0456\u0432 \u0432\u0438\u0449\u043E\u0457 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u041C\u0456\u0446\u044E\u043A \u0406\u0440\u0438\u043D\u0430 \u041C\u0438\u043A\u043E\u043B\u0430\u0457\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u0412\u0447\u0438\u0442\u0435\u043B\u044C \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0438\u0445 \u043A\u043B\u0430\u0441\u0456\u0432 \u0432\u0438\u0449\u043E\u0457 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u042F\u043D\u043E\u043A \u0422\u0435\u0442\u044F\u043D\u0430 \u041F\u0435\u0442\u0440\u0456\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u0412\u0447\u0438\u0442\u0435\u043B\u044C \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0438\u0445 \u043A\u043B\u0430\u0441\u0456\u0432 \u0432\u0438\u0449\u043E\u0457 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u0417\u043B\u0438\u0434\u0435\u043D\u043D\u0430 \u0422\u0435\u0442\u044F\u043D\u0430 \u041F\u0435\u0442\u0440\u0456\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u0412\u0447\u0438\u0442\u0435\u043B\u044C \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0438\u0445 \u043A\u043B\u0430\u0441\u0456\u0432 \u0432\u0438\u0449\u043E\u0457 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u0424\u0430\u0440\u0430\u043F\u043E\u043D \u0421\u0432\u0456\u0442\u043B\u0430\u043D\u0430 \u041C\u0438\u043A\u043E\u043B\u0430\u0457\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u0412\u0447\u0438\u0442\u0435\u043B\u044C \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0438\u0445 \u043A\u043B\u0430\u0441\u0456\u0432 \u043F\u0435\u0440\u0448\u043E\u0457 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\u0411\u043E\u0440\u0443\u043A \u0410\u043B\u043B\u0430 \u041C\u0438\u0445\u0430\u0439\u043B\u0456\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\u0412\u0447\u0438\u0442\u0435\u043B\u044C \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0438\u0445 \u043A\u043B\u0430\u0441\u0456\u0432 \u0434\u0440\u0443\u0433\u043E\u0457 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u041C\u0443\u0445\u0430 \u041B\u0456\u043B\u0456\u044F \u0424\u0435\u0434\u043E\u0440\u0456\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u0412\u0447\u0438\u0442\u0435\u043B\u044C \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u043A\u043E\u0457 \u043C\u043E\u0432\u0438 \u043F\u0435\u0440\u0448\u043E\u0457 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\u0417\u0430\u0457\u043A\u0430 \u041E\u043A\u0441\u0430\u043D\u0430 \u041E\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0456\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\u0412\u0447\u0438\u0442\u0435\u043B\u044C \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u043A\u043E\u0457 \u043C\u043E\u0432\u0438 \u0434\u0440\u0443\u0433\u043E\u0457 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\u0410\u043D\u0434\u0440\u0435\u0435\u0432\u043D\u0430 \u041E\u043B\u044C\u0433\u0430 \u0421\u0435\u0440\u0433\u0456\u0457\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\u0412\u0447\u0438\u0442\u0435\u043B\u044C \u043D\u0456\u043C\u0435\u0446\u044C\u043A\u043E\u0457 \u043C\u043E\u0432\u0438, \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0441\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u041B\u0438\u0441\u0435\u043D\u043A\u043E \u0412\u0430\u043B\u0435\u0440\u0456\u044F \u0404\u0432\u0433\u0435\u043D\u0456\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u0412\u0447\u0438\u0442\u0435\u043B\u044C \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0438 \u043F\u0435\u0440\u0448\u043E\u0457 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\u0428\u043A\u0440\u0435\u0431\u0442\u0456\u0439 \u0412\u0456\u043A\u0442\u043E\u0440\u0456\u044F \u0410\u043D\u0434\u0440\u0456\u0457\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\u0412\u0447\u0438\u0442\u0435\u043B\u044C \u0445\u043E\u0440\u0435\u043E\u0433\u0440\u0430\u0444\u0456\u0457, \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0441\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\u0411\u0435\u0437 \u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D\u0430 \u0410\u043D\u0430\u0442\u043E\u043B\u0456\u0457\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\u0412\u0438\u0445\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0413\u041F\u0414 \u043F\u0435\u0440\u0448\u043E\u0457 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\u0421\u0430\u0433\u0430\u0439\u0434\u0430\u043A \u041E\u043B\u0435\u043D\u0430 \u0421\u0435\u0440\u0433\u0456\u0457\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "\u0412\u0438\u0445\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0413\u041F\u0414 \u0434\u0440\u0443\u0433\u043E\u0457 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "\u0422\u0432\u043E\u0440\u043E\u0432\u0441\u044C\u043A\u0430 \u0413\u0430\u043D\u043D\u0430 \u0411\u043E\u0440\u0438\u0441\u0456\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\u0412\u0438\u0445\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0413\u041F\u0414, \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0441\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\u041E\u0434\u043D\u043E\u0441\u0442\u0440\u0456\u0439 \u0422\u0430\u043C\u0430\u0440\u0430 \u041C\u0438\u0445\u0430\u0439\u043B\u0456\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\u0412\u0438\u0445\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0413\u041F\u0414, \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u0456\u0441\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "section", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "\u0410\u043A\u0442\u0438\u0432\u043D\u0456 \u0440\u043E\u0437\u0432\u0430\u0433\u0438 \u0442\u0430 \u0442\u0432\u043E\u0440\u0447\u0456 \u043D\u0430\u043F\u0440\u044F\u043C\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "\u041C\u0430\u043B\u044E\u0432\u0430\u043D\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " \u0427\u0435\u0440\u0435\u0437 \u0442\u0432\u043E\u0440\u0447\u0456\u0441\u0442\u044C \u0434\u0438\u0442\u0438\u043D\u0430 \u0432\u0438\u0440\u0430\u0436\u0430\u0454 \u0435\u043C\u043E\u0446\u0456\u0457, \u043F\u0456\u0437\u043D\u0430\u0454 \u043D\u0430\u0432\u043A\u043E\u043B\u0438\u0448\u043D\u0456\u0439 \u0441\u0432\u0456\u0442. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "\u0410\u043A\u0440\u043E\u0431\u0430\u0442\u0438\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " \u0410\u043A\u0440\u043E\u0431\u0430\u0442\u0438\u043A\u0430 \u0440\u043E\u0437\u0432\u0438\u0432\u0430\u0454 \u0432\u0441\u0456 \u0433\u0440\u0443\u043F\u0438 \u043C\u2019\u044F\u0437\u0456\u0432, \u0433\u043D\u0443\u0447\u043A\u0456\u0441\u0442\u044C, \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0446\u0456\u044E \u0440\u0443\u0445\u0456\u0432. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "\u041F\u043E\u0437\u0438\u0442\u0438\u0432\u0447\u0438\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " \u0413\u0443\u0440\u0442\u043E\u043A \u0440\u043E\u0437\u0432\u0438\u0432\u0430\u0454 \u0434\u0456\u0442\u0435\u0439 \u0444\u0456\u0437\u0438\u0447\u043D\u043E, \u0430\u043A\u0442\u0438\u0432\u043D\u0456 \u0432\u043F\u0440\u0430\u0432\u0438 \u0437\u043C\u0456\u0446\u043D\u044E\u044E\u0442\u044C \u0456\u043C\u0443\u043D\u0456\u0442\u0435\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Scratch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " Scratch, \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u0448\u043A\u043E\u043B\u044F\u0440\u0456\u0432 \u043E\u0441\u043D\u043E\u0432\u0430\u043C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0443\u0432\u0430\u043D\u043D\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "app-carousel", 50);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isBlack", true)("img1", "assets/img/elementary/head.png")("img2", "assets/img/elementary/head2.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.list);
    } }, directives: [_shared_head_head_component__WEBPACK_IMPORTED_MODULE_1__["HeadComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"]], styles: ["#directions[_ngcontent-%COMP%] {\n  margin-bottom: max(80px, 6.1rem);\n}\n#directions[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin-bottom: 40px;\n}\n#directions[_ngcontent-%COMP%]   .reversed[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n#directions[_ngcontent-%COMP%]   .reversed[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%] {\n  width: max(256px, 35.8rem);\n  transform: translateY(-21%);\n}\n#directions[_ngcontent-%COMP%]   .reversed[_ngcontent-%COMP%]   .areas[_ngcontent-%COMP%] {\n  max-width: 657px;\n  width: 46.8rem;\n  min-width: 501px;\n  margin-top: 40px;\n}\n#directions[_ngcontent-%COMP%]   .reversed[_ngcontent-%COMP%]   .areas[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 2.5rem;\n  margin-bottom: max(30px, 3rem);\n}\n#directions[_ngcontent-%COMP%]   .reversed[_ngcontent-%COMP%]   .areas[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  height: -webkit-max-content;\n  height: max-content;\n  min-width: 270px;\n  padding-top: 4.5rem;\n}\n#directions[_ngcontent-%COMP%]   .reversed[_ngcontent-%COMP%]   .areas[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: max(4.6rem, 43px);\n}\n#directions[_ngcontent-%COMP%]   .reversed[_ngcontent-%COMP%]   .areas[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-of-type {\n  margin-right: 12px;\n}\n#directions[_ngcontent-%COMP%]   .reversed[_ngcontent-%COMP%]   .areas[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-of-type {\n  margin-left: 12px;\n}\n#directions[_ngcontent-%COMP%]   .reversed[_ngcontent-%COMP%]   .areas[_ngcontent-%COMP%]   .area[_ngcontent-%COMP%] {\n  height: -webkit-max-content;\n  height: max-content;\n  max-width: max(237px, 21.4rem);\n}\n#directions[_ngcontent-%COMP%]   .reversed[_ngcontent-%COMP%]   .areas[_ngcontent-%COMP%]   .area[_ngcontent-%COMP%]:first-of-type {\n  margin-bottom: 30px;\n}\n#directions[_ngcontent-%COMP%]   .reversed[_ngcontent-%COMP%]   .areas[_ngcontent-%COMP%]   .area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: max(20px, 2.45rem);\n  line-height: 105%;\n  color: #1f1f1f;\n  margin-bottom: 12px;\n}\n#directions[_ngcontent-%COMP%]   .reversed[_ngcontent-%COMP%]   .areas[_ngcontent-%COMP%]   .area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: max(14px, 1.25rem);\n  line-height: 139.5%;\n  color: #1f1f1f;\n}\n@media screen and (max-width: 924px) {\n  #directions[_ngcontent-%COMP%]   .reversed[_ngcontent-%COMP%]   .areas[_ngcontent-%COMP%] {\n    order: 2;\n  }\n  #directions[_ngcontent-%COMP%]   .reversed[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%] {\n    transform: translateY(0);\n  }\n}\n@media screen and (max-width: 528px) {\n  #directions[_ngcontent-%COMP%]   .reversed[_ngcontent-%COMP%]   .areas[_ngcontent-%COMP%] {\n    min-width: 237px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVsZW1lbnRhcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQUNGO0FBQUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFBRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFFSjtBQURJO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtBQUdOO0FBREk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBR047QUFGTTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQUlSO0FBRk07RUFDRSwyQkFBQTtFQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUlSO0FBSFE7RUFDRSx5QkFBQTtBQUtWO0FBSFE7RUFDRSxrQkFBQTtBQUtWO0FBSFE7RUFDRSxpQkFBQTtBQUtWO0FBRE07RUFJRSwyQkFBQTtFQUFBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBUjtBQUpRO0VBQ0UsbUJBQUE7QUFNVjtBQUZRO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBSVY7QUFGUTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSVY7QUFFQTtFQUdNO0lBQ0UsUUFBQTtFQUROO0VBR0k7SUFDRSx3QkFBQTtFQUROO0FBQ0Y7QUFLQTtFQUdNO0lBQ0UsZ0JBQUE7RUFMTjtBQUNGIiwiZmlsZSI6ImVsZW1lbnRhcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGlyZWN0aW9ucyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogbWF4KDgwcHgsIDYuMXJlbSk7XHJcbiAgLnRpdGxlIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIH1cclxuICAucmV2ZXJzZWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5wb3N0ZXIge1xyXG4gICAgICB3aWR0aDogbWF4KDI1NnB4LCAzNS44cmVtKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMSUpO1xyXG4gICAgfVxyXG4gICAgLmFyZWFzIHtcclxuICAgICAgbWF4LXdpZHRoOiA2NTdweDtcclxuICAgICAgd2lkdGg6IDQ2LjhyZW07XHJcbiAgICAgIG1pbi13aWR0aDogNTAxcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgIC5yb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDIuNXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiBtYXgoMzBweCwgM3JlbSk7XHJcbiAgICAgIH1cclxuICAgICAgLmltYWdlcyB7XHJcbiAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgICAgICBtaW4td2lkdGg6IDI3MHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0LjVyZW07XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGhlaWdodDogbWF4KDQuNnJlbSwgNDNweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZzpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hcmVhIHtcclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgICAgICBtYXgtd2lkdGg6IG1heCgyMzdweCwgMjEuNHJlbSk7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IG1heCgyMHB4LCAyLjQ1cmVtKTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMDUlO1xyXG4gICAgICAgICAgY29sb3I6ICMxZjFmMWY7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogbWF4KDE0cHgsIDEuMjVyZW0pO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEzOS41JTtcclxuICAgICAgICAgIGNvbG9yOiAjMWYxZjFmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MjRweCkge1xyXG4gICNkaXJlY3Rpb25zIHtcclxuICAgIC5yZXZlcnNlZCB7XHJcbiAgICAgIC5hcmVhcyB7XHJcbiAgICAgICAgb3JkZXI6IDI7XHJcbiAgICAgIH1cclxuICAgICAgLnBvc3RlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyOHB4KSB7XHJcbiAgI2RpcmVjdGlvbnMge1xyXG4gICAgLnJldmVyc2VkIHtcclxuICAgICAgLmFyZWFzIHtcclxuICAgICAgICBtaW4td2lkdGg6IDIzN3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElementaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-elementary',
                templateUrl: './elementary.component.html',
                styleUrls: ['./elementary.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=elementary-elementary-module.js.map