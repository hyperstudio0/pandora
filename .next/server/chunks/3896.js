"use strict";
exports.id = 3896;
exports.ids = [3896];
exports.modules = {

/***/ 23896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  cU: () => (/* reexport */ CarouselArrowIndex),
  i5: () => (/* reexport */ CarouselArrows),
  A0: () => (/* reexport */ CarouselDots),
  ZP: () => (/* binding */ carousel),
  vr: () => (/* reexport */ useCarousel)
});

// EXTERNAL MODULE: ./node_modules/react-slick/lib/index.js
var lib = __webpack_require__(17738);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(22166);
;// CONCATENATED MODULE: ./src/components/carousel/use-carousel.ts


function useCarousel(props) {
    const theme = (0,styles.useTheme)();
    const carouselRef = (0,react_.useRef)(null);
    const [currentIndex, setCurrentIndex] = (0,react_.useState)(props?.initialSlide || 0);
    const [nav, setNav] = (0,react_.useState)(undefined);
    const rtl = theme.direction === "rtl";
    const carouselSettings = {
        arrows: false,
        dots: !!props?.customPaging,
        rtl,
        beforeChange: (current, next)=>setCurrentIndex(next),
        ...props,
        fade: !!(props?.fade && !rtl)
    };
    const onSetNav = (0,react_.useCallback)(()=>{
        if (carouselRef.current) {
            setNav(carouselRef.current);
        }
    }, []);
    const onPrev = (0,react_.useCallback)(()=>{
        if (carouselRef.current) {
            carouselRef.current.slickPrev();
        }
    }, []);
    const onNext = (0,react_.useCallback)(()=>{
        if (carouselRef.current) {
            carouselRef.current.slickNext();
        }
    }, []);
    const onTogo = (0,react_.useCallback)((index)=>{
        if (carouselRef.current) {
            carouselRef.current.slickGoTo(index);
        }
    }, []);
    return {
        nav,
        carouselRef,
        currentIndex,
        carouselSettings,
        //
        onPrev,
        onNext,
        onTogo,
        onSetNav,
        //
        setNav,
        setCurrentIndex
    };
}

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(5537);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(46661);
;// CONCATENATED MODULE: ./src/components/carousel/carousel-dots.tsx
/* eslint-disable react/jsx-no-useless-fragment */ 



const StyledRoot = (0,styles.styled)(Box/* default */.Z, {
    shouldForwardProp: (prop)=>prop !== "rounded"
})(({ rounded, theme })=>({
        zIndex: 9,
        margin: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.primary.main,
        "& li": {
            width: 18,
            height: 18,
            opacity: 0.32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            "&.slick-active": {
                opacity: 1,
                ...rounded && {
                    "& span": {
                        width: 16,
                        borderRadius: 6
                    }
                }
            }
        }
    }));
const StyledDot = (0,styles.styled)("span")(({ theme })=>({
        width: 8,
        height: 8,
        borderRadius: "50%",
        transition: theme.transitions.create([
            "width"
        ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.short
        })
    }));
function CarouselDots(props) {
    const rounded = props?.rounded || false;
    const sx = props?.sx;
    return {
        appendDots: (dots)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledRoot, {
                    component: "ul",
                    rounded: rounded,
                    sx: {
                        ...sx
                    },
                    ...props,
                    children: dots
                })
            }),
        customPaging: ()=>/*#__PURE__*/ jsx_runtime_.jsx(Stack/* default */.ZP, {
                component: "div",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    width: 1,
                    height: 1
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(StyledDot, {
                    sx: {
                        bgcolor: "currentColor"
                    }
                })
            })
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(16816);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(42493);
;// CONCATENATED MODULE: ./src/components/carousel/arrow-icons.tsx


function LeftIcon({ icon = "eva:arrow-ios-forward-fill", isRTL }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
        icon: icon,
        sx: {
            transform: " scaleX(-1)",
            ...isRTL && {
                transform: " scaleX(1)"
            }
        }
    });
}
function RightIcon({ icon = "eva:arrow-ios-forward-fill", isRTL }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
        icon: icon,
        sx: {
            ...isRTL && {
                transform: " scaleX(-1)"
            }
        }
    });
}

;// CONCATENATED MODULE: ./src/components/carousel/carousel-arrows.tsx





const StyledIconButton = (0,styles.styled)((IconButton_default()), {
    shouldForwardProp: (prop)=>prop !== "filled" && prop !== "hasChild" && prop !== "shape"
})(({ filled, shape, hasChild, theme })=>({
        color: "inherit",
        transition: theme.transitions.create("all", {
            duration: theme.transitions.duration.shorter
        }),
        ...shape === "rounded" && {
            borderRadius: theme.shape.borderRadius * 1.5
        },
        ...!filled && {
            opacity: 0.48,
            "&:hover": {
                opacity: 1
            }
        },
        ...filled && {
            color: (0,styles.alpha)(theme.palette.common.white, 0.8),
            backgroundColor: (0,styles.alpha)(theme.palette.grey[900], 0.48),
            "&:hover": {
                color: theme.palette.common.white,
                backgroundColor: theme.palette.grey[900]
            }
        },
        ...hasChild && {
            zIndex: 9,
            top: "50%",
            position: "absolute",
            marginTop: theme.spacing(-2.5)
        }
    }));
function CarouselArrows({ shape = "circular", filled = false, icon, onNext, onPrev, children, leftButtonProps, rightButtonProps, sx, ...other }) {
    const theme = (0,styles.useTheme)();
    const isRTL = theme.direction === "rtl";
    const hasChild = !!children;
    if (hasChild) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack/* default */.ZP, {
            sx: sx,
            ...other,
            children: [
                onNext && /*#__PURE__*/ jsx_runtime_.jsx(StyledIconButton, {
                    filled: filled,
                    shape: shape,
                    hasChild: !!children,
                    onClick: onPrev,
                    ...leftButtonProps,
                    sx: {
                        left: 16,
                        ...leftButtonProps?.sx
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(LeftIcon, {
                        icon: icon,
                        isRTL: isRTL
                    })
                }),
                children,
                onPrev && /*#__PURE__*/ jsx_runtime_.jsx(StyledIconButton, {
                    filled: filled,
                    shape: shape,
                    hasChild: !!children,
                    onClick: onNext,
                    ...rightButtonProps,
                    sx: {
                        right: 16,
                        ...rightButtonProps?.sx
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(RightIcon, {
                        icon: icon,
                        isRTL: isRTL
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack/* default */.ZP, {
        direction: "row",
        alignItems: "center",
        display: "inline-flex",
        sx: sx,
        ...other,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledIconButton, {
                filled: filled,
                shape: shape,
                onClick: onPrev,
                ...leftButtonProps,
                children: /*#__PURE__*/ jsx_runtime_.jsx(LeftIcon, {
                    icon: icon,
                    isRTL: isRTL
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledIconButton, {
                filled: filled,
                shape: shape,
                onClick: onNext,
                ...rightButtonProps,
                children: /*#__PURE__*/ jsx_runtime_.jsx(RightIcon, {
                    icon: icon,
                    isRTL: isRTL
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(43360);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./src/theme/css.ts
var css = __webpack_require__(11799);
;// CONCATENATED MODULE: ./src/components/carousel/carousel-arrow-index.tsx







// ----------------------------------------------------------------------
const carousel_arrow_index_StyledRoot = (0,styles.styled)(Box/* default */.Z)(({ theme })=>({
        ...(0,css/* bgBlur */.Ls)({
            opacity: 0.48,
            color: theme.palette.grey[900]
        }),
        zIndex: 9,
        display: "inline-flex",
        alignItems: "center",
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        padding: theme.spacing(0.25),
        color: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius
    }));
const carousel_arrow_index_StyledIconButton = (0,styles.styled)((IconButton_default()))({
    width: 28,
    height: 28,
    padding: 0,
    opacity: 0.48,
    "&:hover": {
        opacity: 1
    }
});
function CarouselArrowIndex({ index, total, onNext, onPrev, icon, sx, ...other }) {
    const theme = (0,styles.useTheme)();
    const isRTL = theme.direction === "rtl";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(carousel_arrow_index_StyledRoot, {
        sx: sx,
        ...other,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(carousel_arrow_index_StyledIconButton, {
                color: "inherit",
                onClick: onPrev,
                children: /*#__PURE__*/ jsx_runtime_.jsx(LeftIcon, {
                    icon: icon,
                    isRTL: isRTL
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                variant: "subtitle2",
                component: "span",
                sx: {
                    mx: 0.25
                },
                children: [
                    index + 1,
                    "/",
                    total
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(carousel_arrow_index_StyledIconButton, {
                color: "inherit",
                onClick: onNext,
                children: /*#__PURE__*/ jsx_runtime_.jsx(RightIcon, {
                    icon: icon,
                    isRTL: isRTL
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/carousel/index.ts





/* harmony default export */ const carousel = (lib/* default */.Z);


/***/ })

};
;