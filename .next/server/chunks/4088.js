"use strict";
exports.id = 4088;
exports.ids = [4088];
exports.modules = {

/***/ 74088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46661);
/* harmony import */ var src_routes_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5995);
/* harmony import */ var _config_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3561);
/* __next_internal_client_entry_do_not_use__ default auto */ 



// ----------------------------------------------------------------------
const pathsOnDark = [
    "/career",
    "/career/",
    "/travel",
    "/travel/"
];
const spacingLayout = [
    ...pathsOnDark,
    "/",
    "/e-learning",
    "/e-learning/",
    "/marketing",
    "/marketing/"
];
function MainLayout({ children }) {
    const pathname = (0,src_routes_hooks__WEBPACK_IMPORTED_MODULE_1__/* .usePathname */ .jD)();
    const actionPage = (arr)=>arr.some((path)=>pathname === path);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        sx: {
            display: "flex",
            flexDirection: "column",
            height: 1
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            component: "main",
            sx: {
                flexGrow: 1
            },
            children: [
                !actionPage(spacingLayout) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Spacing, {}),
                children
            ]
        })
    });
}
// ----------------------------------------------------------------------
function Spacing() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        sx: {
            height: {
                xs: _config_layout__WEBPACK_IMPORTED_MODULE_2__/* .HEADER */ .y.H_MOBILE,
                md: _config_layout__WEBPACK_IMPORTED_MODULE_2__/* .HEADER */ .y.H_DESKTOP
            }
        }
    });
}


/***/ }),

/***/ 5995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  jD: () => (/* reexport */ navigation.usePathname),
  tv: () => (/* reexport */ navigation.useRouter)
});

// UNUSED EXPORTS: useActiveLink, useParams, useSearchParams

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
;// CONCATENATED MODULE: ./src/routes/hooks/use-router.ts


;// CONCATENATED MODULE: ./src/routes/hooks/use-params.ts


;// CONCATENATED MODULE: ./src/routes/hooks/use-pathname.ts


// EXTERNAL MODULE: ./src/routes/hooks/use-active-link.ts
var use_active_link = __webpack_require__(98898);
;// CONCATENATED MODULE: ./src/routes/hooks/use-search-params.ts


;// CONCATENATED MODULE: ./src/routes/hooks/index.ts







/***/ }),

/***/ 98898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ useActiveLink)
/* harmony export */ });
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_0__);

function useActiveLink(path, deep = true) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.usePathname)();
    const checkPath = path.startsWith("#");
    const currentPath = path === "/" ? "/" : `${path}/`;
    const normalActive = !checkPath && pathname === currentPath;
    const deepActive = !checkPath && pathname.includes(currentPath);
    return deep ? deepActive : normalActive;
}


/***/ })

};
;