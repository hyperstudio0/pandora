"use strict";
exports.id = 9614;
exports.ids = [9614];
exports.modules = {

/***/ 79614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ text_max_line)
});

// UNUSED EXPORTS: useTypography

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(15917);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(43360);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(22166);
// EXTERNAL MODULE: ./src/hooks/use-responsive.ts
var use_responsive = __webpack_require__(31300);
;// CONCATENATED MODULE: ./src/components/text-max-line/use-typography.ts


// ----------------------------------------------------------------------
function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
}
function useTypography(variant) {
    const theme = (0,styles.useTheme)();
    const breakpoints = (0,use_responsive/* useWidth */.z)();
    const key = theme.breakpoints.up(breakpoints === "xl" ? "lg" : breakpoints);
    const hasResponsive = variant === "h1" || variant === "h2" || variant === "h3" || variant === "h4" || variant === "h5" || variant === "h6";
    const getFont = hasResponsive && theme.typography[variant][key] ? theme.typography[variant][key] : theme.typography[variant];
    const fontSize = remToPx(getFont.fontSize);
    const lineHeight = Number(theme.typography[variant].lineHeight) * fontSize;
    const { fontWeight, letterSpacing } = theme.typography[variant];
    return {
        fontSize,
        lineHeight,
        fontWeight,
        letterSpacing
    };
}

;// CONCATENATED MODULE: ./src/components/text-max-line/text-max-line.tsx





// ----------------------------------------------------------------------
const TextMaxLine = /*#__PURE__*/ (0,react_.forwardRef)(({ asLink, variant = "body1", line = 2, persistent = false, children, sx, ...other }, ref)=>{
    const { lineHeight } = useTypography(variant);
    const styles = {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: line,
        WebkitBoxOrient: "vertical",
        ...persistent && {
            height: lineHeight * line
        },
        ...sx
    };
    if (asLink) {
        return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
            color: "inherit",
            ref: ref,
            variant: variant,
            sx: {
                ...styles
            },
            ...other,
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
        ref: ref,
        variant: variant,
        sx: {
            ...styles
        },
        ...other,
        children: children
    });
});
/* harmony default export */ const text_max_line = (TextMaxLine);

;// CONCATENATED MODULE: ./src/components/text-max-line/index.ts





/***/ })

};
;