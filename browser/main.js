(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\School\school\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false
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

/***/ "P1kN":
/*!*******************************************************!*\
  !*** ./src/app/shared/carousel/carousel.component.ts ***!
  \*******************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = ["list"];
function CarouselComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const img_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/assets/img/", img_r3, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ng_container_16_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.switch(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r6 === ctx_r2.index);
} }
class CarouselComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.index = 0;
    }
    next() {
        this.index = (this.index + 1) % this.images.length;
        this.transform();
    }
    prev() {
        this.index = (this.index - 1 + this.images.length) % this.images.length;
        this.transform();
    }
    switch(index) {
        this.index != index ? ((this.index = index), this.transform()) : null;
    }
    transform() {
        const style = `translateX(-${this.index * 100}%)`;
        this.renderer.setStyle(this.list.nativeElement, 'transform', style);
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
    } }, inputs: { images: "images" }, decls: 17, vars: 2, consts: [["id", "carousel"], [1, "container"], [1, "title"], [1, "carousel"], ["list", ""], [4, "ngFor", "ngForOf"], [1, "nav", "prev", 3, "click"], ["src", "/assets/img/prev.png", "alt", ""], [1, "nav", "next", 3, "click"], ["src", "/assets/img/next.png", "alt", ""], [1, "switcher"], ["id", "li", 1, "switchers"], ["alt", "", 3, "src"], [1, "dot", 3, "click"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0413\u0430\u043B\u0435\u0440\u0435\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CarouselComponent_ng_container_8_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_span_click_9_listener() { return ctx.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_span_click_11_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CarouselComponent_ng_container_16_Template, 2, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["#carousel[_ngcontent-%COMP%] {\n  margin-bottom: max(80px, 11.1rem);\n}\n#carousel[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 40px;\n}\n#carousel[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n#carousel[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transition: transform 0.6s;\n  display: flex;\n}\n#carousel[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-width: 100%;\n  max-height: 705px;\n  object-fit: cover;\n}\n#carousel[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: max(30px, 3.5rem);\n}\n#carousel[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#carousel[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%] {\n  left: 14px;\n}\n#carousel[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  right: 14px;\n}\n#carousel[_ngcontent-%COMP%]   .switcher[_ngcontent-%COMP%] {\n  margin-top: max(18px, 3.125rem);\n}\n#carousel[_ngcontent-%COMP%]   .switcher[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n#carousel[_ngcontent-%COMP%]   .switcher[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .switchers[_ngcontent-%COMP%] {\n  display: flex;\n}\n#carousel[_ngcontent-%COMP%]   .switcher[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .switchers[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: max(8px, 0.84rem);\n  height: max(8px, 0.84rem);\n  background: #c4c4c4;\n  cursor: pointer;\n  border-radius: 50%;\n  margin-right: max(5px, 0.625rem);\n}\n#carousel[_ngcontent-%COMP%]   .switcher[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .switchers[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:last-of-type {\n  margin-right: 0;\n}\n#carousel[_ngcontent-%COMP%]   .switcher[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .switchers[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: #3e44e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUFJO0VBQ0UsZ0JBQUE7QUFFTjtBQURNO0VBQ0UsMEJBQUE7RUFDQSxhQUFBO0FBR1I7QUFGUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBSVY7QUFBSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FBRU47QUFETTtFQUNFLFdBQUE7QUFHUjtBQUFJO0VBQ0UsVUFBQTtBQUVOO0FBQUk7RUFDRSxXQUFBO0FBRU47QUFDRTtFQUNFLCtCQUFBO0FBQ0o7QUFBSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUVOO0FBRE07RUFDRSxhQUFBO0FBR1I7QUFGUTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBSVY7QUFIVTtFQUNFLGVBQUE7QUFLWjtBQUZRO0VBQ0UsbUJBQUE7QUFJViIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYXJvdXNlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogbWF4KDgwcHgsIDExLjFyZW0pO1xyXG4gIC5jYXJvdXNlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgbGkge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDcwNXB4O1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2IHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgIHdpZHRoOiBtYXgoMzBweCwgMy41cmVtKTtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByZXYge1xyXG4gICAgICBsZWZ0OiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLm5leHQge1xyXG4gICAgICByaWdodDogMTRweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnN3aXRjaGVyIHtcclxuICAgIG1hcmdpbi10b3A6IG1heCgxOHB4LCAzLjEyNXJlbSk7XHJcbiAgICB1bCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAuc3dpdGNoZXJzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5kb3Qge1xyXG4gICAgICAgICAgd2lkdGg6IG1heCg4cHgsIDAuODRyZW0pO1xyXG4gICAgICAgICAgaGVpZ2h0OiBtYXgoOHB4LCAwLjg0cmVtKTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNjNGM0YzQ7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IG1heCg1cHgsIDAuNjI1cmVtKTtcclxuICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMzZTQ0ZTY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['list', { static: false }]
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _head_head_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./head/head.component */ "wu+i");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel/carousel.component */ "P1kN");






class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_head_head_component__WEBPACK_IMPORTED_MODULE_2__["HeadComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_head_head_component__WEBPACK_IMPORTED_MODULE_2__["HeadComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_head_head_component__WEBPACK_IMPORTED_MODULE_2__["HeadComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
                exports: [_head_head_component__WEBPACK_IMPORTED_MODULE_2__["HeadComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "XpXM":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component */ "wlho");
/* harmony import */ var _section_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section/section.component */ "j7+x");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_section_section_component__WEBPACK_IMPORTED_MODULE_3__["SectionComponent"], _main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_section_section_component__WEBPACK_IMPORTED_MODULE_3__["SectionComponent"], _main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.module */ "XpXM");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _main_main_module__WEBPACK_IMPORTED_MODULE_5__["MainModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _main_main_module__WEBPACK_IMPORTED_MODULE_5__["MainModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _main_main_module__WEBPACK_IMPORTED_MODULE_5__["MainModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 35, vars: 0, consts: [["id", "location"], [1, "container"], [1, "title"], [1, "location"], [1, "map"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d634.8352663266664!2d30.513524541392115!3d50.471993972895326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce13ed74112d%3A0x902920552f67da9e!2z0YPQuy4g0KnQtdC60LDQstC40YbQutCw0Y8sIDQzLCDQmtC40LXQsiwgMDQwNzE!5e0!3m2!1sru!2sua!4v1632674154685!5m2!1sru!2sua"), "width", "600", "height", "450", "allowfullscreen", "", "loading", "lazy", 2, "border", "0"], [1, "address"], [1, "col"], [1, "text"], [1, "email"], [1, "info"], ["routerLink", "/elementary"], ["routerLink", "/preschool"], [1, "designedAt"], ["target", "blank", "href", "https://www.katrukdesign.com/"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u042F\u043A \u043D\u0430\u0441 \u0437\u043D\u0430\u0439\u0442\u0438?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0423\u043A\u0440a\u0457\u043D\u0430, \u041A\u0438\u0457\u0432 \u0432\u0443\u043B\u0438\u0446\u044F \u0429\u0435\u043A\u0430\u0432\u0438\u0446\u044C\u043A\u0430 25, 43");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "podilllia@ukr.net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u041F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0430 \u0448\u043A\u043E\u043B\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0414\u043E\u0448\u043A\u0456\u043B\u044C\u043D\u0438\u0439 \u043F\u0456\u0434\u0440\u043E\u0437\u0434\u0456\u043B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0423\u043A\u0440\u0430\u0457\u043D\u0430, \u041A\u0438\u0457\u0432 \u0432\u0443\u043B\u0438\u0446\u044F \u0429\u0435\u043A\u0430\u0432\u0438\u0446\u044C\u043A\u0430 43");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "(066) 737 04 31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Designed AT Katruk Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#location[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  margin-bottom: max(60px, 7rem);\n  margin-top: max(20px, 4.5rem);\n  display: flex;\n  justify-content: space-between;\n  column-gap: 40px;\n  row-gap: 40px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n#location[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: clamp(320px, 45rem, 650px);\n  height: clamp(220px, 31rem, 445px);\n}\n#location[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: clamp(166px, 31.25rem, 450px);\n  height: clamp(166px, 31.25rem, 450px);\n  border-radius: 50%;\n  background-color: #ffe86e;\n}\n#location[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: clamp(14px, 2.1rem, 30px);\n  line-height: 115%;\n  text-align: center;\n}\nfooter[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  background-color: #3e44e6;\n  padding: 70px 0;\n  color: #fbfbfb;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  row-gap: 30px;\n  flex-wrap: wrap;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: clamp(14px, 1.25rem, 18px);\n  line-height: 115%;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: clamp(30px, 2.43rem, 34px);\n  line-height: 115%;\n  color: #ffe86e;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  font-weight: bold;\n  font-size: clamp(12px, 1.1rem, 16px);\n  line-height: 115%;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:first-of-type {\n  margin-right: 56px;\n  min-width: 132px;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 0;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  max-width: 178px;\n  margin-top: 10px;\n}\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .designedAt[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 115%;\n  text-transform: uppercase;\n  max-width: 190px;\n  border-bottom: 1px solid #ffffff;\n}\n@media screen and (max-width: 826px) {\n  footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .designedAt[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n}\n@media screen and (max-width: 626px) {\n  #location[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUVNO0VBQ0UsaUNBQUE7RUFDQSxrQ0FBQTtBQUFSO0FBR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRE47QUFFTTtFQUNFLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFSO0FBS0E7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUZGO0FBR0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBREo7QUFFSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUFOO0FBQ007RUFDRSxxQ0FBQTtFQUNBLGlCQUFBO0FBQ1I7QUFDTTtFQUNFLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDUjtBQUNNO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFFQSxpQkFBQTtBQUFSO0FBRVE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQVY7QUFFUTtFQUNFLGFBQUE7QUFBVjtBQUVRO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUFWO0FBR007RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQURSO0FBTUE7RUFJUTtJQUNFLGVBQUE7RUFOUjtBQUNGO0FBV0E7RUFFSTtJQUNFLHVCQUFBO0VBVko7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9jYXRpb24ge1xyXG4gIC5sb2NhdGlvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBtYXgoNjBweCwgN3JlbSk7XHJcbiAgICBtYXJnaW4tdG9wOiBtYXgoMjBweCwgNC41cmVtKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBjb2x1bW4tZ2FwOiA0MHB4O1xyXG4gICAgcm93LWdhcDogNDBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAubWFwIHtcclxuICAgICAgaWZyYW1lIHtcclxuICAgICAgICB3aWR0aDogY2xhbXAoMzIwcHgsIDQ1cmVtLCA2NTBweCk7XHJcbiAgICAgICAgaGVpZ2h0OiBjbGFtcCgyMjBweCwgMzFyZW0sIDQ0NXB4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFkZHJlc3Mge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IGNsYW1wKDE2NnB4LCAzMS4yNXJlbSwgNDUwcHgpO1xyXG4gICAgICBoZWlnaHQ6IGNsYW1wKDE2NnB4LCAzMS4yNXJlbSwgNDUwcHgpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmU4NmU7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMTRweCwgMi4xcmVtLCAzMHB4KTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTE1JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTQ0ZTY7XHJcbiAgcGFkZGluZzogNzBweCAwO1xyXG4gIGNvbG9yOiAjZmJmYmZiO1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcm93LWdhcDogMzBweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC5jb2wge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAudGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxNHB4LCAxLjI1cmVtLCAxOHB4KTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTE1JTtcclxuICAgICAgfVxyXG4gICAgICAuZW1haWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMzBweCwgMi40M3JlbSwgMzRweCk7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExNSU7XHJcbiAgICAgICAgY29sb3I6ICNmZmU4NmU7XHJcbiAgICAgIH1cclxuICAgICAgLmluZm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgxMnB4LCAxLjFyZW0sIDE2cHgpO1xyXG5cclxuICAgICAgICBsaW5lLWhlaWdodDogMTE1JTtcclxuXHJcbiAgICAgICAgLmNvbDpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNTZweDtcclxuICAgICAgICAgIG1pbi13aWR0aDogMTMycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW46Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIG1heC13aWR0aDogMTc4cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZGVzaWduZWRBdCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMTUlO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxOTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjZweCkge1xyXG4gIGZvb3RlciB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgLmNvbCB7XHJcbiAgICAgICAgLmRlc2lnbmVkQXQge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjZweCkge1xyXG4gICNsb2NhdGlvbiB7XHJcbiAgICAubG9jYXRpb24ge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "j7+x":
/*!***************************************************!*\
  !*** ./src/app/main/section/section.component.ts ***!
  \***************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = [[["", "title", ""]], [["", "parag", ""]], [["", "btn", ""]]];
const _c1 = ["[title]", "[parag]", "[btn]"];
class SectionComponent {
    constructor() {
        this.reversed = false;
        this.image = '';
    }
    ngOnInit() { }
}
SectionComponent.ɵfac = function SectionComponent_Factory(t) { return new (t || SectionComponent)(); };
SectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionComponent, selectors: [["app-section"]], inputs: { reversed: "reversed", image: "image" }, ngContentSelectors: _c1, decls: 7, vars: 3, consts: [[1, "container"], [1, "text"], ["loading", "lazy", "alt", "", 1, "image", 3, "src"]], template: function SectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.reversed ? "flex-direction:row-reverse" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  column-gap: 100px;\n  row-gap: 30px;\n  flex-wrap: wrap;\n  margin-bottom: 100px;\n}\nsection[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  min-width: 310px;\n}\nsection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  max-width: 550px;\n}\nsection[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .parag[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFDRjtBQUFFO0VBRUUsZ0JBQUE7QUFDSjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjtBQUFJO0VBQ0UsZ0JBQUE7QUFFTiIsImZpbGUiOiJzZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbHVtbi1nYXA6IDEwMHB4O1xyXG4gIHJvdy1nYXA6IDMwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gIC5pbWFnZSB7XHJcbiAgICAvLyB3aWR0aDogNDAlO1xyXG4gICAgbWluLXdpZHRoOiAzMTBweDtcclxuICB9XHJcbiAgLnRleHQge1xyXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcclxuICAgIC5wYXJhZyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-section',
                templateUrl: './section.component.html',
                styleUrls: ['./section.component.scss'],
            }]
    }], function () { return []; }, { reversed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "wlho");





const routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    {
        path: 'elementary',
        loadChildren: () => __webpack_require__.e(/*! import() | elementary-elementary-module */ "elementary-elementary-module").then(__webpack_require__.bind(null, /*! ./elementary/elementary.module */ "mWSD")).then((m) => m.ElementaryModule),
    },
    {
        path: 'preschool',
        loadChildren: () => __webpack_require__.e(/*! import() | preschool-preschool-module */ "preschool-preschool-module").then(__webpack_require__.bind(null, /*! ./preschool/preschool.module */ "bTBQ")).then((m) => m.PreschoolModule),
    },
    { path: '**', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled',
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        initialNavigation: 'enabled',
                        scrollPositionRestoration: 'enabled',
                        anchorScrolling: 'enabled',
                    }),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_head_head_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/head/head.component */ "wu+i");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _section_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section/section.component */ "j7+x");





class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 55, vars: 7, consts: [[3, "img1", "img2"], ["mainTitle", "", 1, "mainTitle"], ["mainp", "", 1, "mainp"], ["mainLinks", "", 1, "links"], ["routerLink", "elementary", 1, "btn-blue", "pd-small"], ["routerLink", "preschool", 1, "btn-hollow", "pd-small-hollow"], ["id", "about", 3, "reversed", "image"], ["title", "", 1, "title"], ["parag", ""], [1, "parag", "mb0"], [1, "parag"], ["id", "principles", 1, "quotes"], [1, "container"], [1, "title"], [1, "content"], [1, "quote"], ["src", "/assets/img/main/individ.png", "alt", ""], ["src", "/assets/img/main/discip.png", "alt", ""], ["src", "/assets/img/main/povaga.png", "alt", ""], ["id", "elementary", 3, "image"], ["parag", "", 1, "parag"], ["routerLink", "/elementary", "btn", "", 1, "btn-blue", "pd-large"], ["id", "preschool", 3, "reversed", "image"], ["routerLink", "/preschool", "btn", "", 1, "btn-blue", "pd-large"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-head", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0430 \u0448\u043A\u043E\u043B\u0430 \u00AB\u041F\u043E\u0434\u0456\u043B\u043B\u044F\u00BB \u043C. \u041A\u0438\u0454\u0432\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u041D\u0430\u0432\u0447\u0430\u0454\u043C\u043E \u0437\u0430 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u043C\u0435\u0442\u043E\u0434\u0438\u043A\u0430\u043C\u0438 \u0442\u0430 \u043F\u0440\u043E\u0431\u0443\u0434\u0436\u0443\u0454\u043C\u043E \u0441\u043F\u0440\u0430\u0432\u0436\u043D\u044E \u0436\u0430\u0433\u0443 \u0434\u043E \u043D\u043E\u0432\u0438\u0445 \u0437\u043D\u0430\u043D\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0430 \u0448\u043A\u043E\u043B\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0414\u043E\u0448\u043A\u0456\u043B\u044C\u043D\u0438\u0439 \u043F\u0456\u0434\u0440\u043E\u0437\u0434\u0456\u043B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041F\u0440\u043E \u00AB\u041F\u043E\u0434\u0456\u043B\u043B\u044F\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u041D\u0430\u0432\u0447\u0430\u043B\u044C\u043D\u0438\u0439 \u0437\u0430\u043A\u043B\u0430\u0434 \u00AB\u041F\u043E\u0434\u0456\u043B\u043B\u044F\u00BB \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0438\u0439 \u0443 \u0441\u0430\u043C\u043E\u043C\u0443 \u0441\u0435\u0440\u0446\u0456 \u0456\u0441\u0442\u043E\u0440\u0438\u0447\u043D\u043E\u0433\u043E \u041F\u043E\u0434\u043E\u043B\u0443. \u0417 2021 \u0440\u043E\u043A\u0443 \u043C\u0430\u0454 \u0441\u0442\u0430\u0442\u0443\u0441 \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u043E\u0457 \u0448\u043A\u043E\u043B\u0438 \u0437 \u0434\u043E\u0448\u043A\u0456\u043B\u044C\u043D\u0438\u043C\u0438 \u0433\u0440\u0443\u043F\u0430\u043C\u0438 \u0432\u0438\u0445\u043E\u0432\u0430\u043D\u043D\u044F. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u041D\u0430\u0448\u0430 \u043C\u0435\u0442\u0430\u2014\u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u043E\u0457 \u043E\u0441\u0432\u0456\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u0441\u0443\u0447\u0430\u0441\u043D\u0456 \u043C\u0435\u0442\u043E\u0434\u0438\u043A\u0438 \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u0442\u0430 \u0456\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u0438\u0439 \u043F\u0456\u0434\u0445\u0456\u0434. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u041D\u0430\u0448\u0456 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0438 \u0432\u0438\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0406\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u041A\u043E\u0436\u043D\u0430 \u0434\u0438\u0442\u0438\u043D\u0430\u2014\u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0456\u0441\u0442\u044C. \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0447\u0438 \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u0438\u0439 \u043F\u0456\u0434\u0445\u0456\u0434 \u0440\u043E\u0437\u043A\u0440\u0438\u0432\u0430\u0454\u043C\u043E \u043F\u0440\u0430\u0433\u043D\u0435\u043D\u043D\u044F \u0434\u043E \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0414\u0438\u0441\u0446\u0438\u043F\u043B\u0456\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u0417\u0430\u043E\u0445\u043E\u0447\u0443\u0454\u043C\u043E \u0434\u043E \u0441\u0443\u043C\u043B\u0456\u043D\u043D\u043E\u0457 \u043F\u0440\u0430\u0446\u0456, \u0449\u043E \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0430 \u0434\u043B\u044F \u0434\u043E\u0441\u044F\u0433\u043D\u0435\u043D\u043D\u044F \u0443\u0441\u043F\u0456\u0445\u0456\u0432 \u0443 \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u0456, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0443 \u0441\u0443\u0447\u0430\u0441\u043D\u043E\u043C\u0443 \u0441\u0432\u0456\u0442\u0456. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u041F\u043E\u0432\u0430\u0433\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u041E\u0434\u043D\u0430 \u0437 \u043D\u0430\u0448\u0438\u0445 \u0446\u0456\u043B\u0435\u0439\u2014\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0442\u0430 \u0442\u043E\u043B\u0435\u0440\u0430\u043D\u0442\u043D\u043E\u0433\u043E \u0441\u0435\u0440\u0435\u0434\u043E\u0432\u0438\u0449\u0430 \u0434\u043B\u044F \u0434\u0438\u0442\u0438\u043D\u0438 \u0442\u0430 \u043E\u0442\u043E\u0447\u0435\u043D\u043D\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "app-section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u041F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0430 \u0448\u043A\u043E\u043B\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " \u041C\u0435\u0442\u043E\u044E \u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u043E\u0457 \u043E\u0441\u0432\u0456\u0442\u0438 \u0454 \u0432\u0441\u0435\u0431\u0456\u0447\u043D\u0438\u0439 \u0440\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u0434\u0438\u0442\u0438\u043D\u0438, \u0457\u0457 \u0442\u0430\u043B\u0430\u043D\u0442\u0456\u0432, \u0437\u0434\u0456\u0431\u043D\u043E\u0441\u0442\u0435\u0439, \u043A\u043E\u043C\u043F\u0435\u0442\u0435\u043D\u0442\u043D\u043E\u0441\u0442\u0435\u0439 \u0442\u0430 \u043D\u0430\u0441\u043A\u0440\u0456\u0437\u043D\u0438\u0445 \u0443\u043C\u0456\u043D\u044C \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0432\u0456\u043A\u043E\u0432\u0438\u0445 \u0442\u0430 \u0456\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u0438\u0445 \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u043E\u0441\u0442\u0435\u0439. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "app-section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0414\u043E\u0448\u043A\u0456\u043B\u044C\u043D\u0438\u0439 \u043F\u0456\u0434\u0440\u043E\u0437\u0434\u0456\u043B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \u0414\u043E\u0448\u043A\u0456\u043B\u044C\u043D\u0438\u0439 \u043F\u0456\u0434\u0440\u043E\u0437\u0434\u0456\u043B \u043E\u0445\u043E\u043F\u043B\u044E\u0454 \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F \u0442\u0430 \u0432\u0438\u0445\u043E\u0432\u0430\u043D\u043D\u044F \u0434\u0456\u0442\u0435\u0439 \u0432\u0456\u043A\u043E\u043C \u0432\u0456\u0434 2-\u0445 \u0434\u043E 6 \u0440\u043E\u043A\u0456\u0432. \u0414\u043E\u0448\u043A\u0456\u043B\u044C\u043D\u0456 \u0433\u0440\u0443\u043F\u0438 \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C\u0441\u044F \u0437\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043E\u044E \u00AB\u0414\u0438\u0442\u0438\u043D\u0430\u00BB. \u041E\u0441\u043E\u0431\u043B\u0438\u0432\u0430 \u0443\u0432\u0430\u0433\u0430 \u043F\u0440\u0438\u0434\u0456\u043B\u044F\u0454\u0442\u044C\u0441\u044F \u0444\u043E\u0440\u043C\u0443\u0432\u0430\u043D\u043D\u044E \u043E\u0441\u0432\u0456\u0442\u043D\u0456\u0445 \u043D\u0430\u0432\u0438\u0447\u043E\u043A \u0434\u0456\u0442\u0435\u0439 5-\u0442\u0438 \u0440\u043E\u043A\u0456\u0432 \u044F\u043A \u0430\u0441\u043F\u0435\u043A\u0442\u0443 \u043F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0434\u043E \u0448\u043A\u043E\u043B\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("img1", "assets/img/main/head.png")("img2", "assets/img/main/head2.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reversed", true)("image", "/assets/img/about.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", "/assets/img/elementary.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reversed", true)("image", "/assets/img/preschool.png");
    } }, directives: [_shared_head_head_component__WEBPACK_IMPORTED_MODULE_1__["HeadComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _section_section_component__WEBPACK_IMPORTED_MODULE_3__["SectionComponent"]], styles: [".parag[_ngcontent-%COMP%] {\n  margin-top: clamp(14px, 1.25rem, 18px);\n  margin-bottom: 45px;\n  line-height: 135%;\n  max-width: 496px;\n  font-size: max(14px, 1.25rem);\n}\n\n.mb0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.btn-blue[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtBQUdGIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyYWcge1xyXG4gIG1hcmdpbi10b3A6IGNsYW1wKDE0cHgsIDEuMjVyZW0sIDE4cHgpO1xyXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEzNSU7XHJcbiAgbWF4LXdpZHRoOiA0OTZweDtcclxuICBmb250LXNpemU6IG1heCgxNHB4LCAxLjI1cmVtKTtcclxufVxyXG4ubWIwIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5idG4tYmx1ZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "wu+i":
/*!***********************************************!*\
  !*** ./src/app/shared/head/head.component.ts ***!
  \***********************************************/
/*! exports provided: HeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadComponent", function() { return HeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = ["mobileMenu"];
const _c1 = [[["", "mainTitle", ""]], [["", "mainp", ""]], [["", "mainLinks", ""]]];
const _c2 = ["[mainTitle]", "[mainp]", "[mainLinks]"];
class HeadComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.img1 = '';
        this.img2 = '';
        this.isBlack = false;
    }
    ngOnInit() { }
    showMenu() {
        this.renderer.setStyle(this.menu.nativeElement, 'height', '100%');
    }
    closeMenu() {
        this.renderer.setStyle(this.menu.nativeElement, 'height', '0%');
    }
}
HeadComponent.ɵfac = function HeadComponent_Factory(t) { return new (t || HeadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
HeadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadComponent, selectors: [["app-head"]], viewQuery: function HeadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
    } }, inputs: { img1: "img1", img2: "img2", isBlack: "isBlack" }, ngContentSelectors: _c2, decls: 38, vars: 4, consts: [[1, "container", "headContainer"], ["routerLink", "/"], ["src", "/assets/img/logo.png", "alt", "", 1, "logo"], [1, "links"], [1, "link"], ["routerLink", "/elementary"], ["routerLink", "/preschool"], [1, "phone"], [1, "menu", 3, "click"], ["src", "/assets/img/menu.png", "alt", ""], ["id", "main", 1, "main"], ["alt", "", 1, "banner", 3, "src"], ["alt", "", 1, "banner2", 3, "src"], [1, "mobileMenu"], ["mobileMenu", ""], [1, "container"], [1, "content"], ["src", "/assets/img/close.png", "alt", "", 1, "close", 3, "click"], ["routerLink", "/", 1, "mobileLink", 3, "click"], ["routerLink", "/elementary", 1, "mobileLink", 3, "click"], ["routerLink", "/preschool", 1, "mobileLink", 3, "click"], [1, "contacts"]], template: function HeadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0430 \u0448\u043A\u043E\u043B\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0414\u043E\u0448\u043A\u0456\u043B\u044C\u043D\u0438\u0439 \u043F\u0456\u0434\u0440\u043E\u0437\u0434\u0456\u043B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(066) 737 04 31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadComponent_Template_span_click_14_listener() { return ctx.showMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](18, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](19, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadComponent_Template_img_click_26_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadComponent_Template_a_click_27_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0413\u043E\u043B\u043E\u0432\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadComponent_Template_a_click_29_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u041F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0430 \u0448\u043A\u043E\u043B\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadComponent_Template_a_click_31_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0414\u043E\u0448\u043A\u0456\u043B\u044C\u043D\u0438\u0439 \u043F\u0456\u0434\u0440\u043E\u0437\u0434\u0456\u043B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "podilllia@ukr.net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "(066) 737 04 31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("black", ctx.isBlack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.img1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.img2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["header[_ngcontent-%COMP%] {\n  height: 100vh;\n  min-height: 874px;\n  margin-bottom: 90px;\n  max-height: 1200px;\n}\nheader[_ngcontent-%COMP%]   .headContainer[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\nheader[_ngcontent-%COMP%]   .headContainer[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 0;\n  width: 50%;\n  min-width: 400px;\n  max-height: 995px;\n}\nheader[_ngcontent-%COMP%]   .headContainer[_ngcontent-%COMP%]   .banner2[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  display: none;\n  z-index: 0;\n  width: 60%;\n  min-width: 350px;\n}\nheader[_ngcontent-%COMP%]   .headContainer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 46px 0 0 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nheader[_ngcontent-%COMP%]   .headContainer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 40px;\n}\nheader[_ngcontent-%COMP%]   .headContainer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  transition: 0.3s;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 125%;\n}\nheader[_ngcontent-%COMP%]   .headContainer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:first-of-type {\n  margin-right: 34px;\n}\nheader[_ngcontent-%COMP%]   .headContainer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  color: #3e44e5;\n}\nheader[_ngcontent-%COMP%]   .headContainer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 125%;\n  color: #fbfbfb;\n}\nheader[_ngcontent-%COMP%]   .headContainer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: none;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .headContainer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 22px;\n}\nheader[_ngcontent-%COMP%]   .mobileMenu[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: white;\n  z-index: 999;\n  transition: 0.3s;\n  height: 0%;\n  overflow: hidden;\n}\nheader[_ngcontent-%COMP%]   .mobileMenu[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  height: 100%;\n}\nheader[_ngcontent-%COMP%]   .mobileMenu[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-top: 46px;\n  display: flex;\n  flex-direction: column;\n}\nheader[_ngcontent-%COMP%]   .mobileMenu[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  width: 21px;\n  align-self: end;\n  margin-bottom: 49px;\n}\nheader[_ngcontent-%COMP%]   .mobileMenu[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .mobileLink[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 110%;\n  margin-bottom: 16px;\n  color: #2b2b2b;\n  transition: 0.3s;\n}\nheader[_ngcontent-%COMP%]   .mobileMenu[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .mobileLink[_ngcontent-%COMP%]:hover {\n  color: #3e44e5;\n}\nheader[_ngcontent-%COMP%]   .mobileMenu[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: 240px;\n}\nheader[_ngcontent-%COMP%]   .mobileMenu[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 115%;\n  margin-bottom: 16px;\n  color: #3e44e6;\n}\n@media screen and (max-width: 824px) {\n  header[_ngcontent-%COMP%]   .mobileMenu[_ngcontent-%COMP%] {\n    display: block;\n  }\n  header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n    display: none;\n  }\n  header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .banner2[_ngcontent-%COMP%] {\n    display: block;\n  }\n  header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n    display: none;\n  }\n  header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFFSjtBQURJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUdOO0FBREk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFHTjtBQURJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUdOO0FBRk07RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFJUjtBQUhRO0VBSUUsZ0JBQUE7RUFJQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQURWO0FBUlU7RUFDRSxrQkFBQTtBQVVaO0FBUFU7RUFDRSxjQUFBO0FBU1o7QUFGTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUlSO0FBRk07RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUlSO0FBSFE7RUFDRSxZQUFBO0FBS1Y7QUFBRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBRUEsZ0JBQUE7QUFDSjtBQUFJO0VBQ0UsWUFBQTtBQUVOO0FBRE07RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFHUjtBQUZRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUlWO0FBRlE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSVY7QUFIVTtFQUNFLGNBQUE7QUFLWjtBQUZRO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQUlWO0FBSFU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUtaO0FBRUE7RUFFSTtJQUNFLGNBQUE7RUFBSjtFQUdJO0lBQ0UsYUFBQTtFQUROO0VBR0k7SUFDRSxjQUFBO0VBRE47RUFJTTs7SUFFRSxhQUFBO0VBRlI7RUFJTTtJQUNFLGNBQUE7RUFGUjtBQUNGIiwiZmlsZSI6ImhlYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWluLWhlaWdodDogODc0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOTBweDtcclxuICBtYXgtaGVpZ2h0OiAxMjAwcHg7XHJcbiAgLmhlYWRDb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLmJhbm5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgei1pbmRleDogMDtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgICAgbWF4LWhlaWdodDogOTk1cHg7XHJcbiAgICB9XHJcbiAgICAuYmFubmVyMiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgei1pbmRleDogMDtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgbWluLXdpZHRoOiAzNTBweDtcclxuICAgIH1cclxuICAgIG5hdiB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogMjtcclxuICAgICAgcGFkZGluZzogNDZweCAwIDAgMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAubGlua3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgIC5saW5rIHtcclxuICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzZTQ0ZTU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEyNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5waG9uZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMjUlO1xyXG4gICAgICAgIGNvbG9yOiAjZmJmYmZiO1xyXG4gICAgICB9XHJcbiAgICAgIC5tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubW9iaWxlTWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0NnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAuY2xvc2Uge1xyXG4gICAgICAgICAgd2lkdGg6IDIxcHg7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0OXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9iaWxlTGluayB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMTAlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiAjMmIyYjJiO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzNlNDRlNTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3RzIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNDBweDtcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTE1JTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzZTQ0ZTY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDo4MjRweCkge1xyXG4gIGhlYWRlciB7XHJcbiAgICAubW9iaWxlTWVudSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIC5iYW5uZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLmJhbm5lcjIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICAgIG5hdiB7XHJcbiAgICAgICAgLmxpbmtzLFxyXG4gICAgICAgIC5waG9uZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-head',
                templateUrl: './head.component.html',
                styleUrls: ['./head.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mobileMenu', { static: false }]
        }], img1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], img2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isBlack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map