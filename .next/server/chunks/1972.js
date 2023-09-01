"use strict";
exports.id = 1972;
exports.ids = [1972];
exports.modules = {

/***/ 51972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ComponentBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27561);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60493);
/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5537);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22166);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);





function ComponentBlock({ title, sx, children, ...other }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_1___default()), {
        variant: "outlined",
        sx: {
            borderRadius: 1.5,
            borderStyle: "dashed",
            bgcolor: (theme)=>(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.alpha)(theme.palette.grey[500], 0.04)
        },
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_3___default()), {
                title: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
                spacing: 3,
                direction: "row",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                sx: {
                    p: 5,
                    minHeight: 180,
                    ...sx
                },
                ...other,
                children: children
            })
        ]
    });
}


/***/ })

};
;