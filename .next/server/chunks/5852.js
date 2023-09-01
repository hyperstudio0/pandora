"use strict";
exports.id = 5852;
exports.ids = [5852];
exports.modules = {

/***/ 75852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ label)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(46661);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(22166);
;// CONCATENATED MODULE: ./src/components/label/styles.ts


// ----------------------------------------------------------------------
const StyledLabel = (0,styles.styled)(Box/* default */.Z)(({ theme, ownerState })=>{
    const isLight = theme.palette.mode === "light";
    const filledVariant = ownerState.variant === "filled";
    const outlinedVariant = ownerState.variant === "outlined";
    const softVariant = ownerState.variant === "soft";
    const defaultStyle = {
        ...ownerState.color === "default" && {
            // FILLED
            ...filledVariant && {
                color: isLight ? theme.palette.common.white : theme.palette.grey[800],
                backgroundColor: theme.palette.text.primary
            },
            // OUTLINED
            ...outlinedVariant && {
                backgroundColor: "transparent",
                color: theme.palette.text.primary,
                border: `2px solid ${theme.palette.text.primary}`
            },
            // SOFT
            ...softVariant && {
                color: theme.palette.text.secondary,
                backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.16)
            }
        }
    };
    const colorStyle = {
        ...ownerState.color !== "default" && {
            // FILLED
            ...filledVariant && {
                color: theme.palette[ownerState.color].contrastText,
                backgroundColor: theme.palette[ownerState.color].main
            },
            // OUTLINED
            ...outlinedVariant && {
                backgroundColor: "transparent",
                color: theme.palette[ownerState.color].main,
                border: `2px solid ${theme.palette[ownerState.color].main}`
            },
            // SOFT
            ...softVariant && {
                color: theme.palette[ownerState.color][isLight ? "dark" : "light"],
                backgroundColor: (0,styles.alpha)(theme.palette[ownerState.color].main, 0.16)
            }
        }
    };
    return {
        height: 24,
        minWidth: 24,
        lineHeight: 0,
        borderRadius: 6,
        cursor: "default",
        alignItems: "center",
        whiteSpace: "nowrap",
        display: "inline-flex",
        justifyContent: "center",
        textTransform: "capitalize",
        padding: theme.spacing(0, 0.75),
        fontSize: theme.typography.pxToRem(12),
        fontWeight: theme.typography.fontWeightBold,
        transition: theme.transitions.create("all", {
            duration: theme.transitions.duration.shorter
        }),
        ...defaultStyle,
        ...colorStyle
    };
});

;// CONCATENATED MODULE: ./src/components/label/label.tsx





// ----------------------------------------------------------------------
const Label = /*#__PURE__*/ (0,react_.forwardRef)(({ children, color = "default", variant = "soft", startIcon, endIcon, sx, ...other }, ref)=>{
    const theme = (0,styles.useTheme)();
    const iconStyle = {
        width: 16,
        height: 16,
        "& svg, img": {
            width: 1,
            height: 1,
            objectFit: "cover"
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledLabel, {
        ref: ref,
        component: "span",
        ownerState: {
            color,
            variant
        },
        sx: {
            ...startIcon && {
                pl: 0.75
            },
            ...endIcon && {
                pr: 0.75
            },
            ...sx
        },
        theme: theme,
        ...other,
        children: [
            startIcon && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                sx: {
                    mr: 0.75,
                    ...iconStyle
                },
                children: [
                    " ",
                    startIcon,
                    " "
                ]
            }),
            children,
            endIcon && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                sx: {
                    ml: 0.75,
                    ...iconStyle
                },
                children: [
                    " ",
                    endIcon,
                    " "
                ]
            })
        ]
    });
});
/* harmony default export */ const label = (Label);

;// CONCATENATED MODULE: ./src/components/label/index.ts




/***/ })

};
;