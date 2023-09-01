exports.id = 6361;
exports.ids = [6361];
exports.modules = {

/***/ 70948:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 47734, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 88709, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 62698, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7833, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 29150, 23))

/***/ }),

/***/ 57331:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 63755))

/***/ }),

/***/ 20813:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6855))

/***/ }),

/***/ 35245:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 44737));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 38246));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 38302));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 99250));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 30332));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 87944));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 57870));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 54584))

/***/ }),

/***/ 63755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Loading)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs + 20 modules
var motion_minimal = __webpack_require__(90735);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(46661);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(22166);
// EXTERNAL MODULE: ./src/theme/css.ts
var css = __webpack_require__(11799);
// EXTERNAL MODULE: ./src/components/logo/index.ts + 1 modules
var logo = __webpack_require__(34067);
// EXTERNAL MODULE: ./src/components/progress-bar/progress-bar.tsx
var progress_bar = __webpack_require__(99250);
// EXTERNAL MODULE: ./src/components/progress-bar/styles.tsx
var progress_bar_styles = __webpack_require__(30332);
;// CONCATENATED MODULE: ./src/components/progress-bar/index.ts



;// CONCATENATED MODULE: ./src/components/loading-screen/splash-screen.tsx







// ----------------------------------------------------------------------
const StyledRoot = (0,styles.styled)("div")(({ theme })=>({
        ...(0,css/* bgBlur */.Ls)({
            blur: 2,
            opacity: 0.24,
            color: theme.palette.background.default
        }),
        top: 0,
        zIndex: 9999,
        position: "fixed",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }));
function SplashScreen({ sx }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(progress_bar["default"], {}),
            /*#__PURE__*/ jsx_runtime_.jsx(StyledRoot, {
                sx: sx,
                children: /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.div, {
                    animate: {
                        scale: [
                            1,
                            0.96,
                            1,
                            0.96,
                            1
                        ],
                        opacity: [
                            1,
                            0.48,
                            1,
                            0.48,
                            1
                        ]
                    },
                    transition: {
                        duration: 2,
                        ease: "easeInOut",
                        repeatDelay: 1,
                        repeat: Infinity
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {
                        single: true,
                        sx: {
                            width: 128,
                            height: 128
                        }
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
                sx: {
                    width: 1,
                    height: "100vh"
                }
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/loading-screen/index.ts


;// CONCATENATED MODULE: ./src/app/loading.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

// ----------------------------------------------------------------------
function Loading() {
    return /*#__PURE__*/ jsx_runtime_.jsx(SplashScreen, {});
}


/***/ }),

/***/ 84696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  NM: () => (/* reexport */ MotionContainer),
  DG: () => (/* reexport */ MotionViewport),
  R0: () => (/* reexport */ varBgColor),
  Q4: () => (/* reexport */ varBgKenburns),
  UZ: () => (/* reexport */ varBgPan),
  Wp: () => (/* reexport */ varBounce),
  Ew: () => (/* reexport */ varContainer),
  EU: () => (/* reexport */ varFade),
  HN: () => (/* reexport */ varFlip),
  U6: () => (/* reexport */ varHover),
  lj: () => (/* reexport */ varPath),
  j$: () => (/* reexport */ varRotate),
  Jt: () => (/* reexport */ varScale),
  pH: () => (/* reexport */ varSlide),
  BL: () => (/* reexport */ varZoom)
});

// UNUSED EXPORTS: TRANSITION, varTranEnter, varTranExit, varTranHover

;// CONCATENATED MODULE: ./src/components/animate/variants/path.ts
// ----------------------------------------------------------------------
const TRANSITION = {
    duration: 2,
    ease: [
        0.43,
        0.13,
        0.23,
        0.96
    ]
};
const varPath = {
    animate: {
        fillOpacity: [
            0,
            0,
            1
        ],
        pathLength: [
            1,
            0.4,
            0
        ],
        transition: TRANSITION
    }
};

;// CONCATENATED MODULE: ./src/components/animate/variants/transition.ts
// ----------------------------------------------------------------------
const varTranHover = (props)=>{
    const duration = props?.duration || 0.32;
    const ease = props?.ease || [
        0.43,
        0.13,
        0.23,
        0.96
    ];
    return {
        duration,
        ease
    };
};
const varTranEnter = (props)=>{
    const duration = props?.durationIn || 0.64;
    const ease = props?.easeIn || [
        0.43,
        0.13,
        0.23,
        0.96
    ];
    return {
        duration,
        ease
    };
};
const varTranExit = (props)=>{
    const duration = props?.durationOut || 0.48;
    const ease = props?.easeOut || [
        0.43,
        0.13,
        0.23,
        0.96
    ];
    return {
        duration,
        ease
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/fade.ts

// ----------------------------------------------------------------------
const varFade = (props)=>{
    const distance = props?.distance || 120;
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        in: {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1,
                transition: varTranEnter
            },
            exit: {
                opacity: 0,
                transition: varTranExit
            }
        },
        inUp: {
            initial: {
                y: distance,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inDown: {
            initial: {
                y: -distance,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: -distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inLeft: {
            initial: {
                x: -distance,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: -distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inRight: {
            initial: {
                x: distance,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: distance,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        out: {
            initial: {
                opacity: 1
            },
            animate: {
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outUp: {
            initial: {
                y: 0,
                opacity: 1
            },
            animate: {
                y: -distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outDown: {
            initial: {
                y: 0,
                opacity: 1
            },
            animate: {
                y: distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outLeft: {
            initial: {
                x: 0,
                opacity: 1
            },
            animate: {
                x: -distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outRight: {
            initial: {
                x: 0,
                opacity: 1
            },
            animate: {
                x: distance,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: 0,
                opacity: 1,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/zoom.ts

// ----------------------------------------------------------------------
const varZoom = (props)=>{
    const distance = props?.distance || 720;
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        in: {
            initial: {
                scale: 0,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inUp: {
            initial: {
                scale: 0,
                opacity: 0,
                translateY: distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateY: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateY: distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inDown: {
            initial: {
                scale: 0,
                opacity: 0,
                translateY: -distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateY: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateY: -distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inLeft: {
            initial: {
                scale: 0,
                opacity: 0,
                translateX: -distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateX: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateX: -distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inRight: {
            initial: {
                scale: 0,
                opacity: 0,
                translateX: distance
            },
            animate: {
                scale: 1,
                opacity: 1,
                translateX: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: 0,
                opacity: 0,
                translateX: distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        out: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        },
        outUp: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateY: -distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        },
        outDown: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateY: distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        },
        outLeft: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateX: -distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        },
        outRight: {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 0,
                opacity: 0,
                translateX: distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/flip.ts

// ----------------------------------------------------------------------
const varFlip = (props)=>{
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        inX: {
            initial: {
                rotateX: -180,
                opacity: 0
            },
            animate: {
                rotateX: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                rotateX: -180,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inY: {
            initial: {
                rotateY: -180,
                opacity: 0
            },
            animate: {
                rotateY: 0,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                rotateY: -180,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        outX: {
            initial: {
                rotateX: 0,
                opacity: 1
            },
            animate: {
                rotateX: 70,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outY: {
            initial: {
                rotateY: 0,
                opacity: 1
            },
            animate: {
                rotateY: 70,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/slide.ts

// ----------------------------------------------------------------------
const varSlide = (props)=>{
    const distance = props?.distance || 160;
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        inUp: {
            initial: {
                y: distance
            },
            animate: {
                y: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inDown: {
            initial: {
                y: -distance
            },
            animate: {
                y: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: -distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inLeft: {
            initial: {
                x: -distance
            },
            animate: {
                x: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: -distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inRight: {
            initial: {
                x: distance
            },
            animate: {
                x: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: distance,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        outUp: {
            initial: {
                y: 0
            },
            animate: {
                y: -distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outDown: {
            initial: {
                y: 0
            },
            animate: {
                y: distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outLeft: {
            initial: {
                x: 0
            },
            animate: {
                x: -distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        outRight: {
            initial: {
                x: 0
            },
            animate: {
                x: distance,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/scale.ts

// ----------------------------------------------------------------------
const varScale = (props)=>{
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        inX: {
            initial: {
                scaleX: 0,
                opacity: 0
            },
            animate: {
                scaleX: 1,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scaleX: 0,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inY: {
            initial: {
                scaleY: 0,
                opacity: 0
            },
            animate: {
                scaleY: 1,
                opacity: 1,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scaleY: 0,
                opacity: 0,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        outX: {
            initial: {
                scaleX: 1,
                opacity: 1
            },
            animate: {
                scaleX: 0,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        },
        outY: {
            initial: {
                scaleY: 1,
                opacity: 1
            },
            animate: {
                scaleY: 0,
                opacity: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/bounce.ts

// ----------------------------------------------------------------------
const varBounce = (props)=>{
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        in: {
            initial: {},
            animate: {
                scale: [
                    0.3,
                    1.1,
                    0.9,
                    1.03,
                    0.97,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                scale: [
                    0.9,
                    1.1,
                    0.3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        inUp: {
            initial: {},
            animate: {
                y: [
                    720,
                    -24,
                    12,
                    -4,
                    0
                ],
                scaleY: [
                    4,
                    0.9,
                    0.95,
                    0.985,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: {
                    ...varTranEnter({
                        durationIn,
                        easeIn
                    })
                }
            },
            exit: {
                y: [
                    12,
                    -24,
                    720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inDown: {
            initial: {},
            animate: {
                y: [
                    -720,
                    24,
                    -12,
                    4,
                    0
                ],
                scaleY: [
                    4,
                    0.9,
                    0.95,
                    0.985,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                y: [
                    -12,
                    24,
                    -720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inLeft: {
            initial: {},
            animate: {
                x: [
                    -720,
                    24,
                    -12,
                    4,
                    0
                ],
                scaleX: [
                    3,
                    1,
                    0.98,
                    0.995,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: [
                    0,
                    24,
                    -720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        inRight: {
            initial: {},
            animate: {
                x: [
                    720,
                    -24,
                    12,
                    -4,
                    0
                ],
                scaleX: [
                    3,
                    1,
                    0.98,
                    0.995,
                    1
                ],
                opacity: [
                    0,
                    1,
                    1,
                    1,
                    1
                ],
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                x: [
                    0,
                    -24,
                    720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ],
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        out: {
            animate: {
                scale: [
                    0.9,
                    1.1,
                    0.3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outUp: {
            animate: {
                y: [
                    -12,
                    24,
                    -720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outDown: {
            animate: {
                y: [
                    12,
                    -24,
                    720
                ],
                scaleY: [
                    0.985,
                    0.9,
                    3
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outLeft: {
            animate: {
                x: [
                    0,
                    24,
                    -720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        },
        outRight: {
            animate: {
                x: [
                    0,
                    -24,
                    720
                ],
                scaleX: [
                    1,
                    0.9,
                    2
                ],
                opacity: [
                    1,
                    1,
                    0
                ]
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/rotate.ts

// ----------------------------------------------------------------------
const varRotate = (props)=>{
    const durationIn = props?.durationIn;
    const durationOut = props?.durationOut;
    const easeIn = props?.easeIn;
    const easeOut = props?.easeOut;
    return {
        // IN
        in: {
            initial: {
                opacity: 0,
                rotate: -360
            },
            animate: {
                opacity: 1,
                rotate: 0,
                transition: varTranEnter({
                    durationIn,
                    easeIn
                })
            },
            exit: {
                opacity: 0,
                rotate: -360,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        },
        // OUT
        out: {
            initial: {
                opacity: 1,
                rotate: 0
            },
            animate: {
                opacity: 0,
                rotate: -360,
                transition: varTranExit({
                    durationOut,
                    easeOut
                })
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/actions.ts
// ----------------------------------------------------------------------
const varHover = (hover = 1.09, tap = 0.97)=>({
        hover: {
            scale: hover
        },
        tap: {
            scale: tap
        }
    });

;// CONCATENATED MODULE: ./src/components/animate/variants/container.ts
// ----------------------------------------------------------------------
const varContainer = (props)=>{
    const staggerIn = props?.staggerIn || 0.05;
    const delayIn = props?.staggerIn || 0.05;
    const staggerOut = props?.staggerIn || 0.05;
    return {
        animate: {
            transition: {
                staggerChildren: staggerIn,
                delayChildren: delayIn
            }
        },
        exit: {
            transition: {
                staggerChildren: staggerOut,
                staggerDirection: -1
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/background.ts
// ----------------------------------------------------------------------
const varBgColor = (props)=>{
    const colors = props?.colors || [
        "#19dcea",
        "#b22cff"
    ];
    const duration = props?.duration || 5;
    const ease = props?.ease || "linear";
    return {
        animate: {
            background: colors,
            transition: {
                duration,
                ease
            }
        }
    };
};
// ----------------------------------------------------------------------
const varBgKenburns = (props)=>{
    const duration = props?.duration || 5;
    const ease = props?.ease || "easeOut";
    return {
        top: {
            animate: {
                scale: [
                    1,
                    1.25
                ],
                y: [
                    0,
                    -15
                ],
                transformOrigin: [
                    "50% 16%",
                    "50% top"
                ],
                transition: {
                    duration,
                    ease
                }
            }
        },
        bottom: {
            animate: {
                scale: [
                    1,
                    1.25
                ],
                y: [
                    0,
                    15
                ],
                transformOrigin: [
                    "50% 84%",
                    "50% bottom"
                ],
                transition: {
                    duration,
                    ease
                }
            }
        },
        left: {
            animate: {
                scale: [
                    1,
                    1.25
                ],
                x: [
                    0,
                    20
                ],
                y: [
                    0,
                    15
                ],
                transformOrigin: [
                    "16% 50%",
                    "0% left"
                ],
                transition: {
                    duration,
                    ease
                }
            }
        },
        right: {
            animate: {
                scale: [
                    1,
                    1.25
                ],
                x: [
                    0,
                    -20
                ],
                y: [
                    0,
                    -15
                ],
                transformOrigin: [
                    "84% 50%",
                    "0% right"
                ],
                transition: {
                    duration,
                    ease
                }
            }
        }
    };
};
// ----------------------------------------------------------------------
const varBgPan = (props)=>{
    const colors = props?.colors || [
        "#ee7752",
        "#e73c7e",
        "#23a6d5",
        "#23d5ab"
    ];
    const duration = props?.duration || 5;
    const ease = props?.ease || "linear";
    const gradient = (deg)=>`linear-gradient(${deg}deg, ${colors})`;
    return {
        top: {
            animate: {
                backgroundImage: [
                    gradient(0),
                    gradient(0)
                ],
                backgroundPosition: [
                    "center 99%",
                    "center 1%"
                ],
                backgroundSize: [
                    "100% 600%",
                    "100% 600%"
                ],
                transition: {
                    duration,
                    ease
                }
            }
        },
        right: {
            animate: {
                backgroundPosition: [
                    "1% center",
                    "99% center"
                ],
                backgroundImage: [
                    gradient(270),
                    gradient(270)
                ],
                backgroundSize: [
                    "600% 100%",
                    "600% 100%"
                ],
                transition: {
                    duration,
                    ease
                }
            }
        },
        bottom: {
            animate: {
                backgroundImage: [
                    gradient(0),
                    gradient(0)
                ],
                backgroundPosition: [
                    "center 1%",
                    "center 99%"
                ],
                backgroundSize: [
                    "100% 600%",
                    "100% 600%"
                ],
                transition: {
                    duration,
                    ease
                }
            }
        },
        left: {
            animate: {
                backgroundPosition: [
                    "99% center",
                    "1% center"
                ],
                backgroundImage: [
                    gradient(270),
                    gradient(270)
                ],
                backgroundSize: [
                    "600% 100%",
                    "600% 100%"
                ],
                transition: {
                    duration,
                    ease
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./src/components/animate/variants/index.ts













// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs + 20 modules
var motion_minimal = __webpack_require__(90735);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(46661);
// EXTERNAL MODULE: ./src/hooks/use-responsive.ts
var use_responsive = __webpack_require__(31300);
;// CONCATENATED MODULE: ./src/components/animate/motion-viewport.tsx





function MotionViewport({ children, disableAnimatedMobile = true, ...other }) {
    const smDown = (0,use_responsive/* useResponsive */.F)("down", "sm");
    if (smDown && disableAnimatedMobile) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
            ...other,
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
        component: motion_minimal.m.div,
        initial: "initial",
        whileInView: "animate",
        viewport: {
            once: true,
            amount: 0.3
        },
        variants: varContainer(),
        ...other,
        children: children
    });
}

;// CONCATENATED MODULE: ./src/components/animate/motion-container.tsx




function MotionContainer({ animate, action = false, children, ...other }) {
    if (action) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
            component: motion_minimal.m.div,
            initial: false,
            animate: animate ? "animate" : "exit",
            variants: varContainer(),
            ...other,
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
        component: motion_minimal.m.div,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        variants: varContainer(),
        ...other,
        children: children
    });
}

;// CONCATENATED MODULE: ./src/components/animate/index.ts
// ----------------------------------------------------------------------





/***/ }),

/***/ 38302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99121);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87355);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90735);
/* __next_internal_client_entry_do_not_use__ default auto */ 


// ----------------------------------------------------------------------
// eslint-disable-next-line import/extensions
const loadFeatures = ()=>Promise.all(/* import() */[__webpack_require__.e(176), __webpack_require__.e(6810)]).then(__webpack_require__.bind(__webpack_require__, 86810)).then((res)=>res.default);
function MotionLazy({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .LazyMotion */ .X, {
        strict: true,
        features: loadFeatures,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.div, {
            style: {
                height: "100%"
            },
            children: [
                " ",
                children,
                " "
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.resolve(MotionLazy), {
    ssr: false
}));


/***/ }),

/***/ 42493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ iconify_iconify)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@iconify/react/dist/iconify.mjs
var iconify = __webpack_require__(95371);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(46661);
;// CONCATENATED MODULE: ./src/components/iconify/iconify.tsx




const Iconify = /*#__PURE__*/ (0,react_.forwardRef)(({ icon, width = 20, sx, ...other }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
        ref: ref,
        component: iconify/* Icon */.JO,
        className: "component-iconify",
        icon: icon,
        sx: {
            width,
            height: width,
            ...sx
        },
        ...other
    }));
/* harmony default export */ const iconify_iconify = (Iconify);

;// CONCATENATED MODULE: ./src/components/iconify/index.ts




/***/ }),

/***/ 4237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ image_image)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-lazy-load-image-component/build/index.js
var build = __webpack_require__(38380);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(46661);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(22166);
;// CONCATENATED MODULE: ./src/components/image/utils.ts
// ----------------------------------------------------------------------
function getRatio(ratio = "1/1") {
    return ({
        "4/3": "calc(100% / 4 * 3)",
        "3/4": "calc(100% / 3 * 4)",
        "6/4": "calc(100% / 6 * 4)",
        "4/6": "calc(100% / 4 * 6)",
        "16/9": "calc(100% / 16 * 9)",
        "9/16": "calc(100% / 9 * 16)",
        "21/9": "calc(100% / 21 * 9)",
        "9/21": "calc(100% / 9 * 21)",
        "1/1": "100%"
    })[ratio];
}

;// CONCATENATED MODULE: ./src/components/image/image.tsx






// ----------------------------------------------------------------------
const Image = /*#__PURE__*/ (0,react_.forwardRef)(({ ratio, overlay, disabledEffect = false, alt, src, afterLoad, delayTime, threshold, beforeLoad, delayMethod, placeholder, wrapperProps, scrollPosition, effect = "blur", visibleByDefault, wrapperClassName, useIntersectionObserver, sx, ...other }, ref)=>{
    const theme = (0,styles.useTheme)();
    const overlayStyles = !!overlay && {
        "&:before": {
            content: "''",
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            zIndex: 1,
            position: "absolute",
            background: overlay || (0,styles.alpha)(theme.palette.grey[900], 0.48)
        }
    };
    const content = /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
        component: build.LazyLoadImage,
        alt: alt,
        src: src,
        afterLoad: afterLoad,
        delayTime: delayTime,
        threshold: threshold,
        beforeLoad: beforeLoad,
        delayMethod: delayMethod,
        placeholder: placeholder,
        wrapperProps: wrapperProps,
        scrollPosition: scrollPosition,
        visibleByDefault: visibleByDefault,
        effect: disabledEffect ? undefined : effect,
        useIntersectionObserver: useIntersectionObserver,
        wrapperClassName: wrapperClassName || "component-image-wrapper",
        placeholderSrc: disabledEffect ? "/assets/transparent.png" : "/assets/placeholder.svg",
        sx: {
            width: 1,
            height: 1,
            // objectFit: 'cover',
            verticalAlign: "bottom",
            ...!!ratio && {
                top: 0,
                left: 0,
                position: "absolute"
            }
        }
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
        ref: ref,
        component: "span",
        className: "component-image",
        sx: {
            overflow: "hidden",
            position: "relative",
            verticalAlign: "bottom",
            display: "inline-block",
            ...!!ratio && {
                width: 1
            },
            "& span.component-image-wrapper": {
                width: 1,
                height: 1,
                verticalAlign: "bottom",
                backgroundSize: "cover !important",
                ...!!ratio && {
                    pt: getRatio(ratio)
                }
            },
            ...overlayStyles,
            ...sx
        },
        ...other,
        children: content
    });
});
/* harmony default export */ const image_image = (Image);

;// CONCATENATED MODULE: ./src/components/image/index.ts




/***/ }),

/***/ 34067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ logo)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(15917);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(22166);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(46661);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(92276);
// EXTERNAL MODULE: ./src/hooks/use-responsive.ts
var use_responsive = __webpack_require__(31300);
;// CONCATENATED MODULE: ./src/components/logo/logo.tsx







function Logo({ single = false, color, sx }) {
    const mdUp = (0,use_responsive/* useResponsive */.F)("up", "md");
    const theme = (0,styles.useTheme)();
    const PRIMARY_MAIN = theme.palette.primary.main;
    const singleLogo = /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "62",
        height: "16",
        viewBox: "0 0 62 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            id: "Logo",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                id: "Union",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M35.5359 4.45567C35.2694 4.18339 34.962 3.9525 34.6162 3.7665C34.0707 3.47278 33.4135 3.32367 32.663 3.32367C31.7802 3.32367 30.9957 3.53661 30.3325 3.95649C29.6713 4.37438 29.1518 4.94587 28.788 5.65498C28.4267 6.35911 28.2431 7.154 28.2431 8.01771C28.2431 8.88141 28.4262 9.66134 28.7875 10.3715C29.1508 11.0866 29.6708 11.661 30.3325 12.0794C30.9957 12.4993 31.7802 12.7122 32.663 12.7122C33.4135 12.7122 34.0707 12.5631 34.6162 12.2694C34.962 12.0829 35.2699 11.8545 35.5359 11.5872V12.5736H37.291V0H35.5359V4.45567ZM35.2799 6.46932C35.496 6.93309 35.6052 7.4542 35.6052 8.01771C35.6052 8.58121 35.496 9.08836 35.2799 9.55812C35.0673 10.0199 34.7529 10.3929 34.3457 10.6677C33.9415 10.9404 33.434 11.0786 32.8361 11.0786C32.2383 11.0786 31.7368 10.9394 31.3146 10.6652C30.8904 10.3899 30.5621 10.0159 30.339 9.55413C30.1129 9.08537 29.9981 8.56824 29.9981 8.01721C29.9981 7.46617 30.1129 6.93508 30.3385 6.47281C30.5616 6.01652 30.8899 5.64501 31.3146 5.36924C31.7368 5.09497 32.2488 4.95584 32.8361 4.95584C33.4235 4.95584 33.941 5.09397 34.3457 5.36675C34.7529 5.64202 35.0678 6.01303 35.2799 6.46882V6.46932ZM6.95847 3.95599C6.29476 3.5361 5.51078 3.32317 4.628 3.32317C3.87846 3.32317 3.22173 3.46878 2.67679 3.75652C2.32997 3.93953 2.02157 4.16793 1.75509 4.4392V3.4618H0V16H1.75509V11.5703C2.02107 11.8386 2.32797 12.0689 2.6733 12.2589C3.21824 12.5591 3.87596 12.7112 4.628 12.7112C5.51078 12.7112 6.29476 12.4983 6.95847 12.0784C7.62018 11.66 8.14017 11.0856 8.50346 10.3705C8.86426 9.66034 9.0479 8.86844 9.0479 8.0167C9.0479 7.16497 8.86476 6.35811 8.50346 5.65398C8.13967 4.94486 7.61968 4.37388 6.95847 3.95549V3.95599ZM7.29282 8.0172C7.29282 8.56874 7.17804 9.08586 6.95198 9.55412C6.72891 10.0164 6.40305 10.3904 5.98386 10.6662C5.56767 10.9399 5.05317 11.0786 4.45484 11.0786C3.8565 11.0786 3.36296 10.9399 2.95276 10.6667C2.54006 10.3919 2.22368 10.0189 2.01159 9.55761C1.79551 9.08836 1.68572 8.57023 1.68572 8.0172C1.68572 7.46417 1.79501 6.93208 2.01109 6.46881C2.22268 6.01352 2.53956 5.64301 2.95276 5.36774C3.36346 5.09446 3.86848 4.95583 4.45484 4.95583C5.04119 4.95583 5.56717 5.09446 5.98386 5.36824C6.40355 5.6445 6.72941 6.01602 6.95248 6.4728C7.17854 6.93508 7.29282 7.4547 7.29282 8.0172ZM16.7659 4.45566C16.4994 4.18338 16.192 3.9525 15.8462 3.76649C15.3007 3.47277 14.6435 3.32367 13.893 3.32367C13.0102 3.32367 12.2257 3.5366 11.5625 3.95649C10.9013 4.37438 10.3818 4.94586 10.018 5.65498C9.65672 6.35911 9.47308 7.154 9.47308 8.0177C9.47308 8.88141 9.65622 9.66134 10.0175 10.3714C10.3808 11.0866 10.9008 11.661 11.5625 12.0794C12.2257 12.4993 13.0102 12.7122 13.893 12.7122C14.6435 12.7122 15.3007 12.5631 15.8462 12.2694C16.192 12.0829 16.4999 11.8545 16.7659 11.5872V12.5736H18.521V3.4623H16.7659V4.45566ZM16.5099 6.46931C16.726 6.93308 16.8353 7.4542 16.8353 8.0177C16.8353 8.5812 16.726 9.08836 16.5099 9.55811C16.2973 10.0199 15.9829 10.3929 15.5757 10.6677C15.1715 10.9404 14.664 11.0786 14.0661 11.0786C13.4683 11.0786 12.9668 10.9394 12.5446 10.6652C12.1204 10.3899 11.7921 10.0159 11.569 9.55412C11.3429 9.08537 11.2282 8.56824 11.2282 8.0172C11.2282 7.46617 11.3429 6.93508 11.5685 6.4728C11.7916 6.01652 12.1199 5.645 12.5446 5.36924C12.9668 5.09496 13.4788 4.95583 14.0661 4.95583C14.6535 4.95583 15.171 5.09397 15.5757 5.36674C15.9829 5.64201 16.2978 6.01303 16.5099 6.46882V6.46931ZM23.7244 3.32367C24.3601 3.32367 24.9644 3.47576 25.5214 3.77497H25.5224C26.0828 4.07667 26.5439 4.53046 26.8927 5.12389C27.241 5.71681 27.4177 6.45136 27.4177 7.30809V12.5731H25.6626V7.34249C25.6626 6.61144 25.4615 6.04245 25.0488 5.60311C24.6396 5.16777 24.1216 4.95633 23.4654 4.95633C23.0222 4.95633 22.6165 5.05756 22.2597 5.25654C21.9044 5.45501 21.615 5.73925 21.4004 6.10029C21.1858 6.46084 21.077 6.88471 21.077 7.35995V12.5731H19.3219V3.4623H21.077V4.42973C21.314 4.19136 21.579 3.97843 21.8695 3.79242C22.355 3.48125 22.9793 3.32367 23.7244 3.32367ZM42.6271 3.32367C43.5558 3.32367 44.3682 3.5361 45.0429 3.95499C45.7166 4.37338 46.2426 4.94536 46.6064 5.65448C46.9677 6.35911 47.1513 7.16547 47.1513 8.0172C47.1513 8.86894 46.9682 9.66084 46.6069 10.371C46.2431 11.0866 45.7171 11.6615 45.0429 12.0799C44.3682 12.4988 43.5433 12.7112 42.6271 12.7112C41.7109 12.7112 40.9015 12.4988 40.2213 12.0804C39.5411 11.662 39.0116 11.0866 38.6478 10.371C38.2865 9.66084 38.1034 8.88091 38.1034 8.0172C38.1034 7.1535 38.287 6.35861 38.6483 5.65448C39.0126 4.94486 39.5416 4.37288 40.2213 3.95449C40.901 3.5361 41.6984 3.32367 42.6271 3.32367ZM42.6271 11.0786C43.2249 11.0786 43.7324 10.9404 44.1367 10.6677V10.6672C44.5439 10.3924 44.8578 10.0194 45.0703 9.55761C45.2869 9.08836 45.3962 8.58121 45.3962 8.0172C45.3962 7.4532 45.2864 6.93258 45.0708 6.46882C44.8588 6.01303 44.5444 5.64251 44.1367 5.36674C43.7324 5.09397 43.213 4.95583 42.6271 4.95583C42.0412 4.95583 41.5357 5.09447 41.1255 5.36774C40.7123 5.64301 40.3954 6.01352 40.1833 6.46882C39.9678 6.93209 39.8585 7.46417 39.8585 8.0172C39.8585 8.57023 39.9678 9.08836 40.1838 9.55761C40.3964 10.0194 40.7128 10.3924 41.1255 10.6667C41.5352 10.9399 42.0293 11.0786 42.6271 11.0786ZM52.8926 3.32367H52.5787C52.0168 3.32367 51.5213 3.42091 51.1061 3.6134C50.6959 3.8029 50.3506 4.03677 50.0791 4.30805C49.8975 4.48957 49.7438 4.67159 49.619 4.85261V3.4623H47.8639V12.5731H49.619V8.53732C49.619 7.93741 49.7378 7.36543 49.9718 6.83783C50.2029 6.31672 50.5402 5.88686 50.9744 5.55973C51.3995 5.23958 51.916 5.07751 52.5089 5.07751H52.8926V3.32367ZM59.8745 4.45616V3.4623H61.6296V12.5741H59.8745V11.5872C59.6086 11.855 59.3007 12.0829 58.9548 12.2694C58.4094 12.5631 57.7522 12.7122 57.0016 12.7122C56.1189 12.7122 55.3344 12.4993 54.6712 12.0794C54.0095 11.661 53.4895 11.0866 53.1262 10.3714C52.7649 9.66134 52.5817 8.88141 52.5817 8.0177C52.5817 7.154 52.7654 6.35911 53.1267 5.65498C53.4905 4.94586 54.01 4.37438 54.6712 3.95649C55.3344 3.5366 56.1189 3.32367 57.0016 3.32367C57.7522 3.32367 58.4094 3.47277 58.9548 3.76649C59.3002 3.953 59.6081 4.18388 59.8745 4.45616ZM59.618 9.55811C59.8346 9.08836 59.9439 8.57023 59.9439 8.0177L59.9434 8.0172C59.9434 7.4537 59.8341 6.93258 59.618 6.46882C59.406 6.01303 59.0916 5.64251 58.6839 5.36674C58.2796 5.09397 57.7622 4.95583 57.1748 4.95583C56.5874 4.95583 56.0754 5.09496 55.6533 5.36924C55.2286 5.645 54.9002 6.01652 54.6772 6.4728C54.4516 6.93508 54.3368 7.46617 54.3368 8.0172C54.3368 8.56824 54.4516 9.08537 54.6777 9.55412C54.9007 10.0159 55.2291 10.3899 55.6533 10.6652C56.0754 10.9394 56.5775 11.0786 57.1748 11.0786C57.7721 11.0786 58.2801 10.9404 58.6839 10.6677C59.0916 10.3929 59.4055 10.0199 59.618 9.55811Z",
                fill: color || "white"
            })
        })
    });
    const fullLogo = /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "62",
        height: "16",
        viewBox: "0 0 62 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
            id: "Logo",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                id: "Union",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M35.5359 4.45567C35.2694 4.18339 34.962 3.9525 34.6162 3.7665C34.0707 3.47278 33.4135 3.32367 32.663 3.32367C31.7802 3.32367 30.9957 3.53661 30.3325 3.95649C29.6713 4.37438 29.1518 4.94587 28.788 5.65498C28.4267 6.35911 28.2431 7.154 28.2431 8.01771C28.2431 8.88141 28.4262 9.66134 28.7875 10.3715C29.1508 11.0866 29.6708 11.661 30.3325 12.0794C30.9957 12.4993 31.7802 12.7122 32.663 12.7122C33.4135 12.7122 34.0707 12.5631 34.6162 12.2694C34.962 12.0829 35.2699 11.8545 35.5359 11.5872V12.5736H37.291V0H35.5359V4.45567ZM35.2799 6.46932C35.496 6.93309 35.6052 7.4542 35.6052 8.01771C35.6052 8.58121 35.496 9.08836 35.2799 9.55812C35.0673 10.0199 34.7529 10.3929 34.3457 10.6677C33.9415 10.9404 33.434 11.0786 32.8361 11.0786C32.2383 11.0786 31.7368 10.9394 31.3146 10.6652C30.8904 10.3899 30.5621 10.0159 30.339 9.55413C30.1129 9.08537 29.9981 8.56824 29.9981 8.01721C29.9981 7.46617 30.1129 6.93508 30.3385 6.47281C30.5616 6.01652 30.8899 5.64501 31.3146 5.36924C31.7368 5.09497 32.2488 4.95584 32.8361 4.95584C33.4235 4.95584 33.941 5.09397 34.3457 5.36675C34.7529 5.64202 35.0678 6.01303 35.2799 6.46882V6.46932ZM6.95847 3.95599C6.29476 3.5361 5.51078 3.32317 4.628 3.32317C3.87846 3.32317 3.22173 3.46878 2.67679 3.75652C2.32997 3.93953 2.02157 4.16793 1.75509 4.4392V3.4618H0V16H1.75509V11.5703C2.02107 11.8386 2.32797 12.0689 2.6733 12.2589C3.21824 12.5591 3.87596 12.7112 4.628 12.7112C5.51078 12.7112 6.29476 12.4983 6.95847 12.0784C7.62018 11.66 8.14017 11.0856 8.50346 10.3705C8.86426 9.66034 9.0479 8.86844 9.0479 8.0167C9.0479 7.16497 8.86476 6.35811 8.50346 5.65398C8.13967 4.94486 7.61968 4.37388 6.95847 3.95549V3.95599ZM7.29282 8.0172C7.29282 8.56874 7.17804 9.08586 6.95198 9.55412C6.72891 10.0164 6.40305 10.3904 5.98386 10.6662C5.56767 10.9399 5.05317 11.0786 4.45484 11.0786C3.8565 11.0786 3.36296 10.9399 2.95276 10.6667C2.54006 10.3919 2.22368 10.0189 2.01159 9.55761C1.79551 9.08836 1.68572 8.57023 1.68572 8.0172C1.68572 7.46417 1.79501 6.93208 2.01109 6.46881C2.22268 6.01352 2.53956 5.64301 2.95276 5.36774C3.36346 5.09446 3.86848 4.95583 4.45484 4.95583C5.04119 4.95583 5.56717 5.09446 5.98386 5.36824C6.40355 5.6445 6.72941 6.01602 6.95248 6.4728C7.17854 6.93508 7.29282 7.4547 7.29282 8.0172ZM16.7659 4.45566C16.4994 4.18338 16.192 3.9525 15.8462 3.76649C15.3007 3.47277 14.6435 3.32367 13.893 3.32367C13.0102 3.32367 12.2257 3.5366 11.5625 3.95649C10.9013 4.37438 10.3818 4.94586 10.018 5.65498C9.65672 6.35911 9.47308 7.154 9.47308 8.0177C9.47308 8.88141 9.65622 9.66134 10.0175 10.3714C10.3808 11.0866 10.9008 11.661 11.5625 12.0794C12.2257 12.4993 13.0102 12.7122 13.893 12.7122C14.6435 12.7122 15.3007 12.5631 15.8462 12.2694C16.192 12.0829 16.4999 11.8545 16.7659 11.5872V12.5736H18.521V3.4623H16.7659V4.45566ZM16.5099 6.46931C16.726 6.93308 16.8353 7.4542 16.8353 8.0177C16.8353 8.5812 16.726 9.08836 16.5099 9.55811C16.2973 10.0199 15.9829 10.3929 15.5757 10.6677C15.1715 10.9404 14.664 11.0786 14.0661 11.0786C13.4683 11.0786 12.9668 10.9394 12.5446 10.6652C12.1204 10.3899 11.7921 10.0159 11.569 9.55412C11.3429 9.08537 11.2282 8.56824 11.2282 8.0172C11.2282 7.46617 11.3429 6.93508 11.5685 6.4728C11.7916 6.01652 12.1199 5.645 12.5446 5.36924C12.9668 5.09496 13.4788 4.95583 14.0661 4.95583C14.6535 4.95583 15.171 5.09397 15.5757 5.36674C15.9829 5.64201 16.2978 6.01303 16.5099 6.46882V6.46931ZM23.7244 3.32367C24.3601 3.32367 24.9644 3.47576 25.5214 3.77497H25.5224C26.0828 4.07667 26.5439 4.53046 26.8927 5.12389C27.241 5.71681 27.4177 6.45136 27.4177 7.30809V12.5731H25.6626V7.34249C25.6626 6.61144 25.4615 6.04245 25.0488 5.60311C24.6396 5.16777 24.1216 4.95633 23.4654 4.95633C23.0222 4.95633 22.6165 5.05756 22.2597 5.25654C21.9044 5.45501 21.615 5.73925 21.4004 6.10029C21.1858 6.46084 21.077 6.88471 21.077 7.35995V12.5731H19.3219V3.4623H21.077V4.42973C21.314 4.19136 21.579 3.97843 21.8695 3.79242C22.355 3.48125 22.9793 3.32367 23.7244 3.32367ZM42.6271 3.32367C43.5558 3.32367 44.3682 3.5361 45.0429 3.95499C45.7166 4.37338 46.2426 4.94536 46.6064 5.65448C46.9677 6.35911 47.1513 7.16547 47.1513 8.0172C47.1513 8.86894 46.9682 9.66084 46.6069 10.371C46.2431 11.0866 45.7171 11.6615 45.0429 12.0799C44.3682 12.4988 43.5433 12.7112 42.6271 12.7112C41.7109 12.7112 40.9015 12.4988 40.2213 12.0804C39.5411 11.662 39.0116 11.0866 38.6478 10.371C38.2865 9.66084 38.1034 8.88091 38.1034 8.0172C38.1034 7.1535 38.287 6.35861 38.6483 5.65448C39.0126 4.94486 39.5416 4.37288 40.2213 3.95449C40.901 3.5361 41.6984 3.32367 42.6271 3.32367ZM42.6271 11.0786C43.2249 11.0786 43.7324 10.9404 44.1367 10.6677V10.6672C44.5439 10.3924 44.8578 10.0194 45.0703 9.55761C45.2869 9.08836 45.3962 8.58121 45.3962 8.0172C45.3962 7.4532 45.2864 6.93258 45.0708 6.46882C44.8588 6.01303 44.5444 5.64251 44.1367 5.36674C43.7324 5.09397 43.213 4.95583 42.6271 4.95583C42.0412 4.95583 41.5357 5.09447 41.1255 5.36774C40.7123 5.64301 40.3954 6.01352 40.1833 6.46882C39.9678 6.93209 39.8585 7.46417 39.8585 8.0172C39.8585 8.57023 39.9678 9.08836 40.1838 9.55761C40.3964 10.0194 40.7128 10.3924 41.1255 10.6667C41.5352 10.9399 42.0293 11.0786 42.6271 11.0786ZM52.8926 3.32367H52.5787C52.0168 3.32367 51.5213 3.42091 51.1061 3.6134C50.6959 3.8029 50.3506 4.03677 50.0791 4.30805C49.8975 4.48957 49.7438 4.67159 49.619 4.85261V3.4623H47.8639V12.5731H49.619V8.53732C49.619 7.93741 49.7378 7.36543 49.9718 6.83783C50.2029 6.31672 50.5402 5.88686 50.9744 5.55973C51.3995 5.23958 51.916 5.07751 52.5089 5.07751H52.8926V3.32367ZM59.8745 4.45616V3.4623H61.6296V12.5741H59.8745V11.5872C59.6086 11.855 59.3007 12.0829 58.9548 12.2694C58.4094 12.5631 57.7522 12.7122 57.0016 12.7122C56.1189 12.7122 55.3344 12.4993 54.6712 12.0794C54.0095 11.661 53.4895 11.0866 53.1262 10.3714C52.7649 9.66134 52.5817 8.88141 52.5817 8.0177C52.5817 7.154 52.7654 6.35911 53.1267 5.65498C53.4905 4.94586 54.01 4.37438 54.6712 3.95649C55.3344 3.5366 56.1189 3.32367 57.0016 3.32367C57.7522 3.32367 58.4094 3.47277 58.9548 3.76649C59.3002 3.953 59.6081 4.18388 59.8745 4.45616ZM59.618 9.55811C59.8346 9.08836 59.9439 8.57023 59.9439 8.0177L59.9434 8.0172C59.9434 7.4537 59.8341 6.93258 59.618 6.46882C59.406 6.01303 59.0916 5.64251 58.6839 5.36674C58.2796 5.09397 57.7622 4.95583 57.1748 4.95583C56.5874 4.95583 56.0754 5.09496 55.6533 5.36924C55.2286 5.645 54.9002 6.01652 54.6772 6.4728C54.4516 6.93508 54.3368 7.46617 54.3368 8.0172C54.3368 8.56824 54.4516 9.08537 54.6777 9.55412C54.9007 10.0159 55.2291 10.3899 55.6533 10.6652C56.0754 10.9394 56.5775 11.0786 57.1748 11.0786C57.7721 11.0786 58.2801 10.9404 58.6839 10.6677C59.0916 10.3929 59.4055 10.0199 59.618 9.55811Z",
                fill: color || "white"
            })
        })
    });
    return /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
        component: components/* RouterLink */.r,
        href: "/",
        color: "inherit",
        "aria-label": "go to homepage",
        sx: {
            lineHeight: 0
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
            sx: {
                // eslint-disable-next-line no-nested-ternary
                width: single ? 80 : mdUp ? 100 : 74,
                lineHeight: 0,
                cursor: "pointer",
                display: "inline-flex",
                ...sx
            },
            children: single ? singleLogo : fullLogo
        })
    });
}
/* harmony default export */ const logo = (/*#__PURE__*/(0,react_.memo)(Logo));

;// CONCATENATED MODULE: ./src/components/logo/index.ts



/***/ }),

/***/ 99250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProgressBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72553);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30332);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function ProgressBar() {
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().configure({
            showSpinner: false
        });
        const handleAnchorClick = (event)=>{
            const targetUrl = event.currentTarget.href;
            const currentUrl = window.location.href;
            if (targetUrl !== currentUrl) {
                nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
            }
        };
        const handleMutation = ()=>{
            const anchorElements = document.querySelectorAll("a[href]");
            anchorElements.forEach((anchor)=>anchor.addEventListener("click", handleAnchorClick));
        };
        const mutationObserver = new MutationObserver(handleMutation);
        mutationObserver.observe(document, {
            childList: true,
            subtree: true
        });
        window.history.pushState = new Proxy(window.history.pushState, {
            apply: (target, thisArg, argArray)=>{
                nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
                return target.apply(thisArg, argArray);
            }
        });
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {});
}


/***/ }),

/***/ 30332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StyledProgressBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22166);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82131);
/* __next_internal_client_entry_do_not_use__ default auto */ 


// ----------------------------------------------------------------------
function StyledProgressBar() {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const inputGlobalStyles = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
        styles: {
            "#nprogress": {
                pointerEvents: "none",
                ".bar": {
                    top: 0,
                    left: 0,
                    height: 3,
                    zIndex: 9999,
                    width: "100%",
                    position: "fixed",
                    backgroundColor: theme.palette.primary.main,
                    boxShadow: `0 0 2px ${theme.palette.primary.main}`
                },
                ".peg": {
                    right: 0,
                    opacity: 1,
                    width: 100,
                    height: "100%",
                    display: "block",
                    position: "absolute",
                    transform: "rotate(3deg) translate(0px, -4px)",
                    boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main}`
                }
            }
        }
    });
    return inputGlobalStyles;
}


/***/ }),

/***/ 88014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ scrollbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(46661);
// EXTERNAL MODULE: ./node_modules/simplebar-react/dist/index.cjs
var dist = __webpack_require__(4609);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(22166);
;// CONCATENATED MODULE: ./src/components/scrollbar/styles.ts


// ----------------------------------------------------------------------
const StyledRootScrollbar = (0,styles.styled)("div")(()=>({
        flexGrow: 1,
        height: "100%",
        overflow: "hidden"
    }));
const StyledScrollbar = (0,styles.styled)((dist_default()))(({ theme })=>({
        maxHeight: "100%",
        "& .simplebar-scrollbar": {
            "&:before": {
                backgroundColor: (0,styles.alpha)(theme.palette.grey[600], 0.48)
            },
            "&.simplebar-visible:before": {
                opacity: 1
            }
        },
        "& .simplebar-mask": {
            zIndex: "inherit"
        }
    }));

;// CONCATENATED MODULE: ./src/components/scrollbar/scrollbar.tsx




// ----------------------------------------------------------------------
const Scrollbar = /*#__PURE__*/ (0,react_.forwardRef)(({ children, sx, ...other }, ref)=>{
    const userAgent = typeof navigator === "undefined" ? "SSR" : navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    if (isMobile) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
            ref: ref,
            sx: {
                overflow: "auto",
                ...sx
            },
            ...other,
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledRootScrollbar, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledScrollbar, {
            scrollableNodeProps: {
                ref
            },
            clickOnTrack: false,
            sx: sx,
            ...other,
            children: children
        })
    });
});
/* harmony default export */ const scrollbar = (/*#__PURE__*/(0,react_.memo)(Scrollbar));

;// CONCATENATED MODULE: ./src/components/scrollbar/index.ts




/***/ }),

/***/ 90130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* reexport safe */ _settings_context__WEBPACK_IMPORTED_MODULE_1__.useSettingsContext)
/* harmony export */ });
/* harmony import */ var _settings_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57870);
/* harmony import */ var _settings_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54584);




/***/ }),

/***/ 54584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContext: () => (/* binding */ SettingsContext),
/* harmony export */   useSettingsContext: () => (/* binding */ useSettingsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ SettingsContext,useSettingsContext auto */ 
// ----------------------------------------------------------------------
const SettingsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useSettingsContext = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SettingsContext);
    if (!context) throw new Error("useSettingsContext must be use inside SettingsProvider");
    return context;
};


/***/ }),

/***/ 57870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SettingsProvider: () => (/* binding */ SettingsProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/lodash.isequal/index.js
var lodash_isequal = __webpack_require__(42980);
var lodash_isequal_default = /*#__PURE__*/__webpack_require__.n(lodash_isequal);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/utils/storage-available.ts
// ----------------------------------------------------------------------
function localStorageAvailable() {
    try {
        const key = "__some_random_key_you_are_not_going_to_use__";
        window.localStorage.setItem(key, key);
        window.localStorage.removeItem(key);
        return true;
    } catch (error) {
        return false;
    }
}
function localStorageGetItem(key, defaultValue = "") {
    const storageAvailable = localStorageAvailable();
    let value;
    if (storageAvailable) {
        value = localStorage.getItem(key) || defaultValue;
    }
    return value;
}

;// CONCATENATED MODULE: ./src/hooks/use-local-storage.ts


// ----------------------------------------------------------------------
function useLocalStorage(key, defaultValue) {
    const storageAvailable = localStorageAvailable();
    const [value, setValue] = (0,react_.useState)(()=>{
        const storedValue = storageAvailable ? localStorage.getItem(key) : null;
        return storedValue === null ? defaultValue : JSON.parse(storedValue);
    });
    (0,react_.useEffect)(()=>{
        const listener = (e)=>{
            if (e.storageArea === localStorage && e.key === key) {
                setValue(e.newValue ? JSON.parse(e.newValue) : e.newValue);
            }
        };
        window.addEventListener("storage", listener);
        return ()=>{
            window.removeEventListener("storage", listener);
        };
    }, [
        key,
        defaultValue
    ]);
    const setValueInLocalStorage = (newValue)=>{
        setValue((currentValue)=>{
            const result = typeof newValue === "function" ? newValue(currentValue) : newValue;
            if (storageAvailable) {
                localStorage.setItem(key, JSON.stringify(result));
            }
            return result;
        });
    };
    return [
        value,
        setValueInLocalStorage
    ];
}

// EXTERNAL MODULE: ./src/components/settings/context/settings-context.tsx
var settings_context = __webpack_require__(54584);
;// CONCATENATED MODULE: ./src/components/settings/context/settings-provider.tsx
/* __next_internal_client_entry_do_not_use__ SettingsProvider auto */ 




function SettingsProvider({ children, defaultSettings }) {
    const [drawerOpen, setDrawerOpen] = (0,react_.useState)(false);
    const [settings, setSettings] = useLocalStorage("settings", defaultSettings);
    const onUpdate = (0,react_.useCallback)((name, value)=>{
        setSettings((prevState)=>({
                ...prevState,
                [name]: value
            }));
    }, [
        setSettings
    ]);
    // Direction by lang
    const onChangeDirectionByLang = (0,react_.useCallback)((lang)=>{
        onUpdate("themeDirection", lang === "ar" ? "rtl" : "ltr");
    }, [
        onUpdate
    ]);
    // Reset
    const onReset = (0,react_.useCallback)(()=>{
        setSettings(defaultSettings);
    }, [
        defaultSettings,
        setSettings
    ]);
    // Drawer
    const onToggleDrawer = (0,react_.useCallback)(()=>{
        setDrawerOpen((prev)=>!prev);
    }, []);
    const onCloseDrawer = (0,react_.useCallback)(()=>{
        setDrawerOpen(false);
    }, []);
    const canReset = !lodash_isequal_default()(settings, defaultSettings);
    const memoizedValue = (0,react_.useMemo)(()=>({
            ...settings,
            onUpdate,
            // Direction
            onChangeDirectionByLang,
            // Reset
            canReset,
            onReset,
            // Drawer
            open: drawerOpen,
            onToggle: onToggleDrawer,
            onClose: onCloseDrawer
        }), [
        onReset,
        onUpdate,
        settings,
        canReset,
        drawerOpen,
        onCloseDrawer,
        onToggleDrawer,
        onChangeDirectionByLang
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(settings_context.SettingsContext.Provider, {
        value: memoizedValue,
        children: children
    });
}


/***/ }),

/***/ 87944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SettingsDrawer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(46661);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(5537);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Badge/index.js
var Badge = __webpack_require__(82361);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Drawer/index.js
var Drawer = __webpack_require__(79499);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tooltip/index.js
var Tooltip = __webpack_require__(56020);
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(73638);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(16816);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(43360);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(42493);
// EXTERNAL MODULE: ./src/components/scrollbar/index.ts + 2 modules
var scrollbar = __webpack_require__(88014);
// EXTERNAL MODULE: ./src/components/settings/context/index.ts
var context = __webpack_require__(90130);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemButton/index.js
var ListItemButton = __webpack_require__(29234);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton);
;// CONCATENATED MODULE: ./src/components/settings/drawer/base-options.tsx




function BaseOptions({ title, icons, selected, ...other }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
        sx: {
            p: 3,
            justifyContent: "space-between",
            ...selected && {
                color: "primary.main"
            }
        },
        ...other,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "subtitle2",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                width: 28,
                icon: selected ? icons[1] : icons[0]
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Radio/index.js
var Radio = __webpack_require__(7685);
var Radio_default = /*#__PURE__*/__webpack_require__.n(Radio);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(27561);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/RadioGroup/index.js
var RadioGroup = __webpack_require__(14891);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(22166);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CardActionArea/index.js
var CardActionArea = __webpack_require__(55789);
var CardActionArea_default = /*#__PURE__*/__webpack_require__.n(CardActionArea);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FormControlLabel/index.js
var FormControlLabel = __webpack_require__(28353);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel);
// EXTERNAL MODULE: ./src/theme/options/presets.ts
var presets = __webpack_require__(53580);
;// CONCATENATED MODULE: ./src/components/settings/drawer/presets-options.tsx










// ----------------------------------------------------------------------
const BOX_BORDER_RADIUS = 1.5;
const StyledBoxWrap = (0,styles.styled)("div")(()=>({
        height: 104,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }));
const StyledBoxPrimary = (0,styles.styled)("div")(()=>({
        width: 64,
        height: 64,
        overflow: "hidden",
        borderRadius: "50%",
        position: "relative"
    }));
const StyledBoxSecondary = (0,styles.styled)("div")(({ theme })=>({
        top: 0,
        bottom: 0,
        right: 0,
        margin: "auto",
        width: "50%",
        height: "120%",
        position: "absolute",
        borderRadius: "50%",
        [theme.breakpoints.up("md")]: {
            transition: theme.transitions.create("transform", {
                duration: theme.transitions.duration.complex,
                easing: theme.transitions.easing.sharp
            })
        }
    }));
function PresetsOptions({ value, onChange }) {
    const presetsOption = presets/* presetOptions */.h.map((color)=>({
            name: color.name,
            primary: color.primary.main,
            secondary: color.secondary.main
        }));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
        sx: {
            px: 3
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "subtitle2",
                sx: {
                    py: 3
                },
                children: "Presets"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(RadioGroup/* default */.ZP, {
                dir: "ltr",
                value: value,
                onChange: onChange,
                sx: {
                    gap: 2,
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)"
                },
                children: presetsOption.map((color)=>/*#__PURE__*/ jsx_runtime_.jsx(OptionItem, {
                        colorName: color.name,
                        primaryColor: color.primary,
                        secondaryColor: color.secondary,
                        selected: color.name === value
                    }, color.name))
            })
        ]
    });
}
function OptionItem({ colorName, selected, primaryColor, secondaryColor }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
        variant: selected ? "elevation" : "outlined",
        sx: {
            borderRadius: BOX_BORDER_RADIUS,
            ...selected && {
                bgcolor: (0,styles.alpha)(primaryColor, 0.08),
                border: `solid 1px ${primaryColor}`,
                boxShadow: `inset 0 4px 12px 0 ${(0,styles.alpha)(primaryColor, 0.32)}`
            }
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardActionArea_default()), {
            sx: {
                borderRadius: BOX_BORDER_RADIUS,
                color: primaryColor
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(StyledBoxWrap, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(StyledBoxPrimary, {
                        sx: {
                            bgcolor: primaryColor
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledBoxSecondary, {
                            sx: {
                                bgcolor: secondaryColor,
                                ...selected && {
                                    transformOrigin: "left",
                                    transform: "rotate(25deg)"
                                }
                            }
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((FormControlLabel_default()), {
                    label: "",
                    value: colorName,
                    control: /*#__PURE__*/ jsx_runtime_.jsx((Radio_default()), {
                        sx: {
                            display: "none"
                        }
                    }),
                    sx: {
                        top: 0,
                        margin: 0,
                        width: 1,
                        height: 1,
                        position: "absolute"
                    }
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/settings/drawer/settings-drawer.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 













// ----------------------------------------------------------------------
function SettingsDrawer() {
    const settings = (0,context/* useSettingsContext */.K)();
    const renderHead = /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack/* default */.ZP, {
        direction: "row",
        alignItems: "center",
        justifyContent: "space-between",
        sx: {
            py: 2,
            pr: 1,
            pl: 2.5
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                variant: "h6",
                sx: {
                    flexGrow: 1
                },
                children: "Settings"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Tooltip_default()), {
                title: "Reset",
                children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                    onClick: settings.onReset,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
                        color: "error",
                        variant: "dot",
                        invisible: !settings.canReset,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                            icon: "solar:restart-bold"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                onClick: settings.onClose,
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "mingcute:close-line"
                })
            })
        ]
    });
    const renderMode = /*#__PURE__*/ jsx_runtime_.jsx(BaseOptions, {
        title: "Mode",
        selected: settings.themeMode === "dark",
        onClick: ()=>settings.onUpdate("themeMode", settings.themeMode === "dark" ? "light" : "dark"),
        icons: [
            "carbon:asleep",
            "carbon:asleep-filled"
        ]
    });
    const renderDirection = /*#__PURE__*/ jsx_runtime_.jsx(BaseOptions, {
        title: "Direction",
        selected: settings.themeDirection === "rtl",
        onClick: ()=>settings.onUpdate("themeDirection", settings.themeDirection === "rtl" ? "ltr" : "rtl"),
        icons: [
            "carbon:align-horizontal-right",
            "carbon:align-horizontal-left"
        ]
    });
    const renderPresets = /*#__PURE__*/ jsx_runtime_.jsx(PresetsOptions, {
        value: settings.themeColorPresets,
        onChange: (event)=>settings.onUpdate("themeColorPresets", event.target.value)
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Drawer_default()), {
        open: settings.open,
        anchor: "right",
        PaperProps: {
            sx: {
                width: 280
            }
        },
        onClose: settings.onClose,
        children: [
            renderHead,
            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* default */.Z, {
                    sx: {
                        pb: 10
                    },
                    children: [
                        renderMode,
                        renderDirection,
                        renderPresets
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 48995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K$: () => (/* reexport */ context/* useSettingsContext */.K)
});

// UNUSED EXPORTS: SettingsDrawer, SettingsProvider

// EXTERNAL MODULE: ./src/components/settings/context/index.ts
var context = __webpack_require__(90130);
// EXTERNAL MODULE: ./src/components/settings/drawer/settings-drawer.tsx + 2 modules
var settings_drawer = __webpack_require__(87944);
;// CONCATENATED MODULE: ./src/components/settings/drawer/index.ts


;// CONCATENATED MODULE: ./src/components/settings/index.ts





/***/ }),

/***/ 31300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ useResponsive),
/* harmony export */   z: () => (/* binding */ useWidth)
/* harmony export */ });
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75983);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22166);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);


function useResponsive(query, start, end) {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    const mediaUp = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(theme.breakpoints.up(start));
    const mediaDown = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(theme.breakpoints.down(start));
    const mediaBetween = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(theme.breakpoints.between(start, end));
    const mediaOnly = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(theme.breakpoints.only(start));
    if (query === "up") {
        return mediaUp;
    }
    if (query === "down") {
        return mediaDown;
    }
    if (query === "between") {
        return mediaBetween;
    }
    return mediaOnly;
}
function useWidth() {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    const keys = [
        ...theme.breakpoints.keys
    ].reverse();
    return keys.reduce((output, key)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const matches = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__["default"])(theme.breakpoints.up(key));
        return !output && matches ? key : output;
    }, null) || "xs";
}


/***/ }),

/***/ 3561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ HEADER)
/* harmony export */ });
/* unused harmony export NAV */
// ----------------------------------------------------------------------
const HEADER = {
    H_MOBILE: 64,
    H_DESKTOP: 80,
    H_DESKTOP_OFFSET: 80 - 16
};
const NAV = {
    W_VERTICAL: 280,
    W_MINI: 88
};


/***/ }),

/***/ 38246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalizationProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87400);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97057);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function LocalizationProvider({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_1__.LocalizationProvider, {
        dateAdapter: _mui_x_date_pickers_AdapterDateFns__WEBPACK_IMPORTED_MODULE_2__/* .AdapterDateFns */ .H,
        children: children
    });
}


/***/ }),

/***/ 92276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* reexport */ router_link)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/routes/components/router-link.tsx



// ----------------------------------------------------------------------
const RouterLink = /*#__PURE__*/ (0,react_.forwardRef)(({ ...other }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        ref: ref,
        ...other
    }));
/* harmony default export */ const router_link = (RouterLink);

;// CONCATENATED MODULE: ./src/routes/components/index.ts



/***/ }),

/***/ 89554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ paths)
/* harmony export */ });
// ----------------------------------------------------------------------
const paths = {
    main: "./main",
    complete: "./complete",
    // Marketing
    marketing: {
        root: "/marketing",
        services: "/marketing/services",
        caseStudies: "/marketing/case-studies",
        caseStudy: `/marketing/case-study`,
        posts: "/marketing/posts",
        post: `/marketing/post`,
        about: "/marketing/about",
        contact: "/marketing/contact"
    },
    // Travel
    travel: {
        root: "/travel",
        tours: "/travel/tours",
        tour: `/travel/tour`,
        checkout: "/travel/checkout",
        orderCompleted: "/travel/order-completed",
        posts: "/travel/posts",
        post: `/travel/post`,
        about: "/travel/about",
        contact: "/travel/contact"
    },
    // Career
    career: {
        root: "/career",
        jobs: "/career/jobs",
        job: `/career/job`,
        posts: "/career/posts",
        post: `/career/post`,
        about: "/career/about",
        contact: "/career/contact"
    },
    // E-learning
    eLearning: {
        root: "/e-learning",
        courses: "/e-learning/courses",
        course: `/e-learning/course`,
        posts: "/e-learning/posts",
        post: `/e-learning/post`,
        about: "/e-learning/about",
        contact: "/e-learning/contact"
    },
    // E-commerce
    eCommerce: {
        root: "/e-commerce",
        products: "/e-commerce/products",
        product: `/e-commerce/product`,
        cart: "/e-commerce/cart",
        checkout: `/e-commerce/checkout`,
        orderCompleted: "/e-commerce/order-completed",
        wishlist: `/e-commerce/wishlist`,
        compare: `/e-commerce/compare`,
        account: {
            root: `/e-commerce/account`,
            personal: `/e-commerce/account/personal`,
            wishlist: `/e-commerce/account/wishlist`,
            vouchers: `/e-commerce/account/vouchers`,
            orders: `/e-commerce/account/orders`,
            payment: `/e-commerce/account/payment`
        }
    },
    // Auth
    loginCover: "/auth/login-cover",
    loginBackground: "/auth/login-background",
    loginIllustration: "/auth/login-illustration",
    registerCover: "/auth/register-cover",
    registerBackground: "/auth/register-background",
    registerIllustration: "/auth/register-illustration",
    forgotPassword: "/auth/forgot-password",
    verify: "/auth/verify",
    // Common
    maintenance: "/maintenance",
    comingsoon: "/coming-soon",
    pricing01: "/pricing-01",
    pricing02: "/pricing-02",
    payment: "/payment",
    support: "/support",
    page404: "/error/404",
    page500: "/error/500",
    // Components
    components: {
        root: "/components",
        animate: "/components/animate",
        carousel: "/components/carousel",
        countUp: "/components/count-up",
        form: "/components/form-validation",
        icons: "/components/icons",
        image: "/components/image",
        label: "/components/label",
        lightbox: "/components/lightbox",
        markdown: "/components/markdown",
        megaMenu: "/components/mega-menu",
        navigation: "/components/navigation-bar",
        scroll: "/components/scroll",
        player: "/components/player",
        textMaxLine: "/components/text-max-line"
    },
    // Others
    pages: "/pages",
    docs: "https://zone-docs.vercel.app",
    license: "https://material-ui.com/store/license/#i-standard-license",
    minimalStore: "https://material-ui.com/store/items/minimal-dashboard",
    zoneStore: "https://mui.com/store/items/zone-landing-page/",
    figmaPreview: "https://www.figma.com/file/X6OyiGHF8dnTk3aT38P0oN/%5BPreview%5D-Zone_Web.30.03.23?node-id=0-1"
};


/***/ }),

/***/ 6855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NotFoundView)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs + 20 modules
var motion_minimal = __webpack_require__(90735);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(98511);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(43360);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./src/components/image/index.ts + 2 modules
var components_image = __webpack_require__(4237);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/index.js
var Stack = __webpack_require__(5537);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Container/index.js
var Container = __webpack_require__(63246);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Link/index.js
var Link = __webpack_require__(15917);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/AppBar/index.js
var AppBar = __webpack_require__(59965);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Toolbar/index.js
var Toolbar = __webpack_require__(90043);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(22166);
// EXTERNAL MODULE: ./src/theme/css.ts
var css = __webpack_require__(11799);
// EXTERNAL MODULE: ./src/components/logo/index.ts + 1 modules
var logo = __webpack_require__(34067);
// EXTERNAL MODULE: ./src/routes/paths.ts
var paths = __webpack_require__(89554);
// EXTERNAL MODULE: ./src/routes/components/index.ts + 1 modules
var components = __webpack_require__(92276);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-scroll.mjs + 11 modules
var use_scroll = __webpack_require__(69686);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/hooks/use-off-set-top.ts


function useOffSetTop(top = 0, options) {
    const { scrollY } = (0,use_scroll/* useScroll */.v)(options);
    const [value, setValue] = (0,react_.useState)(false);
    const onOffSetTop = (0,react_.useCallback)(()=>{
        scrollY.on("change", (scrollHeight)=>{
            if (scrollHeight > top) {
                setValue(true);
            } else {
                setValue(false);
            }
        });
    }, [
        scrollY,
        top
    ]);
    (0,react_.useEffect)(()=>{
        onOffSetTop();
    }, [
        onOffSetTop
    ]);
    const memoizedValue = (0,react_.useMemo)(()=>value, [
        value
    ]);
    return memoizedValue;
} // Usage
 // const offset = useOffSetTop(100);
 // Or
 // const offset = useOffSetTop(100, {
 //   container: ref,
 // });

// EXTERNAL MODULE: ./src/layouts/config-layout.ts
var config_layout = __webpack_require__(3561);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(46661);
;// CONCATENATED MODULE: ./src/layouts/common/header-shadow.tsx


// ----------------------------------------------------------------------
function HeaderShadow({ sx, ...other }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
        sx: {
            left: 0,
            right: 0,
            bottom: 0,
            m: "auto",
            height: 24,
            zIndex: -1,
            opacity: 0.48,
            borderRadius: "50%",
            position: "absolute",
            width: `calc(100% - 48px)`,
            boxShadow: (theme)=>theme.customShadows.z8,
            ...sx
        },
        ...other
    });
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(16816);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Badge/index.js
var Badge = __webpack_require__(82361);
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge);
// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(42493);
// EXTERNAL MODULE: ./src/components/animate/index.ts + 15 modules
var animate = __webpack_require__(84696);
// EXTERNAL MODULE: ./src/components/settings/index.ts + 1 modules
var components_settings = __webpack_require__(48995);
;// CONCATENATED MODULE: ./src/layouts/common/settings-button.tsx








function SettingsButton({ sx }) {
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    return /*#__PURE__*/ jsx_runtime_.jsx((Badge_default()), {
        color: "error",
        variant: "dot",
        invisible: !settings.canReset,
        sx: {
            [`& .${Badge.badgeClasses.badge}`]: {
                top: 8,
                right: 8
            },
            ...sx
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(Box/* default */.Z, {
            component: motion_minimal.m.div,
            animate: {
                rotate: [
                    0,
                    settings.open ? 0 : 360
                ]
            },
            transition: {
                duration: 12,
                ease: "linear",
                repeat: Infinity
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                component: motion_minimal.m.button,
                whileTap: "tap",
                whileHover: "hover",
                variants: (0,animate/* varHover */.U6)(1.05),
                color: "inherit",
                "aria-label": "settings",
                onClick: settings.onToggle,
                children: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "carbon:settings"
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/layouts/common/header-simple.tsx














// ----------------------------------------------------------------------
function HeaderSimple() {
    const theme = (0,styles.useTheme)();
    const offsetTop = useOffSetTop(config_layout/* HEADER */.y.H_DESKTOP);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((AppBar_default()), {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                sx: {
                    justifyContent: "space-between",
                    height: {
                        xs: config_layout/* HEADER */.y.H_MOBILE,
                        md: config_layout/* HEADER */.y.H_DESKTOP
                    },
                    transition: theme.transitions.create([
                        "height"
                    ], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter
                    }),
                    ...offsetTop && {
                        ...(0,css/* bgBlur */.Ls)({
                            color: theme.palette.background.default
                        }),
                        height: {
                            md: config_layout/* HEADER */.y.H_DESKTOP_OFFSET
                        }
                    }
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Stack/* default */.ZP, {
                        direction: "row",
                        alignItems: "center",
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SettingsButton, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx((Link_default()), {
                                href: paths/* paths */.H.support,
                                component: components/* RouterLink */.r,
                                color: "inherit",
                                sx: {
                                    typography: "subtitle2"
                                },
                                children: "Need help?"
                            })
                        ]
                    })
                ]
            }),
            offsetTop && /*#__PURE__*/ jsx_runtime_.jsx(HeaderShadow, {})
        ]
    });
}

;// CONCATENATED MODULE: ./src/layouts/compact/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function CompactLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderSimple, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                component: "main",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Stack/* default */.ZP, {
                    sx: {
                        py: 12,
                        m: "auto",
                        maxWidth: 400,
                        minHeight: "100vh",
                        textAlign: "center",
                        justifyContent: "center"
                    },
                    children: children
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/sections/error/not-found-view.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







// ----------------------------------------------------------------------
function NotFoundView() {
    return /*#__PURE__*/ jsx_runtime_.jsx(CompactLayout, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(animate/* MotionContainer */.NM, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.div, {
                    variants: (0,animate/* varBounce */.Wp)().in,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h3",
                        paragraph: true,
                        children: "Page Not Found!"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.div, {
                    variants: (0,animate/* varBounce */.Wp)().in,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            color: "text.secondary"
                        },
                        children: "Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(motion_minimal.m.div, {
                    variants: (0,animate/* varBounce */.Wp)().in,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_image/* default */.Z, {
                        alt: "404",
                        src: "/assets/illustrations/illustration_404.svg",
                        sx: {
                            mx: "auto",
                            maxWidth: 320,
                            my: {
                                xs: 5,
                                sm: 8
                            }
                        }
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                    component: components/* RouterLink */.r,
                    href: "/",
                    size: "large",
                    color: "inherit",
                    variant: "contained",
                    children: "Go to Home"
                })
            ]
        })
    });
}


/***/ }),

/***/ 11799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D9: () => (/* binding */ menuItem),
/* harmony export */   Ls: () => (/* binding */ bgBlur),
/* harmony export */   O1: () => (/* binding */ hideScroll),
/* harmony export */   uS: () => (/* binding */ paper),
/* harmony export */   v3: () => (/* binding */ bgGradient)
/* harmony export */ });
/* unused harmony export textGradient */
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22166);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73638);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63754);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62360);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90039);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_2__);





// ----------------------------------------------------------------------
const paper = ({ theme, dropdown })=>({
        ...dropdown && {
            padding: theme.spacing(0.5),
            boxShadow: theme.customShadows.dropdown,
            borderRadius: theme.shape.borderRadius * 1.25
        }
    });
// ----------------------------------------------------------------------
const menuItem = (theme)=>({
        ...theme.typography.body2,
        padding: theme.spacing(0.75, 1),
        borderRadius: theme.shape.borderRadius * 0.75,
        "&:not(:last-of-type)": {
            marginBottom: 4
        },
        [`&.${_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_0__.menuItemClasses.selected}`]: {
            fontWeight: theme.typography.fontWeightSemiBold,
            backgroundColor: theme.palette.action.selected,
            "&:hover": {
                backgroundColor: theme.palette.action.hover
            }
        },
        [`& .${_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_1__.checkboxClasses.root}`]: {
            padding: theme.spacing(0.5),
            marginLeft: theme.spacing(-0.5),
            marginRight: theme.spacing(0.5)
        },
        [`&.${_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_2__.autocompleteClasses.option}[aria-selected="true"]`]: {
            backgroundColor: theme.palette.action.selected,
            "&:hover": {
                backgroundColor: theme.palette.action.hover
            }
        },
        [`&+.${_mui_material_Divider__WEBPACK_IMPORTED_MODULE_3__.dividerClasses.root}`]: {
            margin: theme.spacing(0.5, 0)
        }
    });
function bgBlur(props) {
    const color = props?.color || "#000000";
    const blur = props?.blur || 6;
    const opacity = props?.opacity || 0.8;
    const imgUrl = props?.imgUrl;
    if (imgUrl) {
        return {
            position: "relative",
            backgroundImage: `url(${imgUrl})`,
            "&:before": {
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 9,
                content: '""',
                width: "100%",
                height: "100%",
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(color, opacity)
            }
        };
    }
    return {
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(color, opacity)
    };
}
function bgGradient(props) {
    const direction = props?.direction || "to bottom";
    const startColor = props?.startColor;
    const endColor = props?.endColor;
    const imgUrl = props?.imgUrl;
    const color = props?.color;
    if (imgUrl) {
        return {
            background: `linear-gradient(${direction}, ${startColor || color}, ${endColor || color}), url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        };
    }
    return {
        background: `linear-gradient(${direction}, ${startColor}, ${endColor})`
    };
}
// ----------------------------------------------------------------------
function textGradient(value) {
    return {
        background: `-webkit-linear-gradient(${value})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    };
}
// ----------------------------------------------------------------------
const hideScroll = {
    x: {
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
            display: "none"
        }
    },
    y: {
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
            display: "none"
        }
    }
};


/***/ }),

/***/ 44737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ThemeProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/lodash.merge/index.js
var lodash_merge = __webpack_require__(92481);
var lodash_merge_default = /*#__PURE__*/__webpack_require__.n(lodash_merge);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CssBaseline/index.js
var CssBaseline = __webpack_require__(57981);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(22166);
// EXTERNAL MODULE: ./src/components/settings/index.ts + 1 modules
var components_settings = __webpack_require__(48995);
// EXTERNAL MODULE: ./src/theme/palette.ts
var palette = __webpack_require__(71540);
;// CONCATENATED MODULE: ./src/theme/shadows.ts


// ----------------------------------------------------------------------
const shadows_palette = (0,palette/* palette */.D)("light");
const LIGHT_MODE = shadows_palette.grey[500];
const DARK_MODE = shadows_palette.common.black;
const createShadow = (color)=>{
    const transparent1 = (0,styles.alpha)(color, 0.2);
    const transparent2 = (0,styles.alpha)(color, 0.14);
    const transparent3 = (0,styles.alpha)(color, 0.12);
    return [
        "none",
        `0px 2px 1px -1px ${transparent1},0px 1px 1px 0px ${transparent2},0px 1px 3px 0px ${transparent3}`,
        `0px 3px 1px -2px ${transparent1},0px 2px 2px 0px ${transparent2},0px 1px 5px 0px ${transparent3}`,
        `0px 3px 3px -2px ${transparent1},0px 3px 4px 0px ${transparent2},0px 1px 8px 0px ${transparent3}`,
        `0px 2px 4px -1px ${transparent1},0px 4px 5px 0px ${transparent2},0px 1px 10px 0px ${transparent3}`,
        `0px 3px 5px -1px ${transparent1},0px 5px 8px 0px ${transparent2},0px 1px 14px 0px ${transparent3}`,
        `0px 3px 5px -1px ${transparent1},0px 6px 10px 0px ${transparent2},0px 1px 18px 0px ${transparent3}`,
        `0px 4px 5px -2px ${transparent1},0px 7px 10px 1px ${transparent2},0px 2px 16px 1px ${transparent3}`,
        `0px 5px 5px -3px ${transparent1},0px 8px 10px 1px ${transparent2},0px 3px 14px 2px ${transparent3}`,
        `0px 5px 6px -3px ${transparent1},0px 9px 12px 1px ${transparent2},0px 3px 16px 2px ${transparent3}`,
        `0px 6px 6px -3px ${transparent1},0px 10px 14px 1px ${transparent2},0px 4px 18px 3px ${transparent3}`,
        `0px 6px 7px -4px ${transparent1},0px 11px 15px 1px ${transparent2},0px 4px 20px 3px ${transparent3}`,
        `0px 7px 8px -4px ${transparent1},0px 12px 17px 2px ${transparent2},0px 5px 22px 4px ${transparent3}`,
        `0px 7px 8px -4px ${transparent1},0px 13px 19px 2px ${transparent2},0px 5px 24px 4px ${transparent3}`,
        `0px 7px 9px -4px ${transparent1},0px 14px 21px 2px ${transparent2},0px 5px 26px 4px ${transparent3}`,
        `0px 8px 9px -5px ${transparent1},0px 15px 22px 2px ${transparent2},0px 6px 28px 5px ${transparent3}`,
        `0px 8px 10px -5px ${transparent1},0px 16px 24px 2px ${transparent2},0px 6px 30px 5px ${transparent3}`,
        `0px 8px 11px -5px ${transparent1},0px 17px 26px 2px ${transparent2},0px 6px 32px 5px ${transparent3}`,
        `0px 9px 11px -5px ${transparent1},0px 18px 28px 2px ${transparent2},0px 7px 34px 6px ${transparent3}`,
        `0px 9px 12px -6px ${transparent1},0px 19px 29px 2px ${transparent2},0px 7px 36px 6px ${transparent3}`,
        `0px 10px 13px -6px ${transparent1},0px 20px 31px 3px ${transparent2},0px 8px 38px 7px ${transparent3}`,
        `0px 10px 13px -6px ${transparent1},0px 21px 33px 3px ${transparent2},0px 8px 40px 7px ${transparent3}`,
        `0px 10px 14px -6px ${transparent1},0px 22px 35px 3px ${transparent2},0px 8px 42px 7px ${transparent3}`,
        `0px 11px 14px -7px ${transparent1},0px 23px 36px 3px ${transparent2},0px 9px 44px 8px ${transparent3}`,
        `0px 11px 15px -7px ${transparent1},0px 24px 38px 3px ${transparent2},0px 9px 46px 8px ${transparent3}`
    ];
};
function shadows(mode) {
    return mode === "light" ? createShadow(LIGHT_MODE) : createShadow(DARK_MODE);
}

// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/theme/typography.ts","import":"Noto_Sans","arguments":[{"weight":["100","300","400","500","700","900"],"display":"swap","subsets":["latin"],"style":"normal","fallback":["Helvetica","Arial","sans-serif"]}],"variableName":"primaryFont"}
var typography_ts_import_Noto_Sans_arguments_weight_100_300_400_500_700_900_display_swap_subsets_latin_style_normal_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont_ = __webpack_require__(38583);
var typography_ts_import_Noto_Sans_arguments_weight_100_300_400_500_700_900_display_swap_subsets_latin_style_normal_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont_default = /*#__PURE__*/__webpack_require__.n(typography_ts_import_Noto_Sans_arguments_weight_100_300_400_500_700_900_display_swap_subsets_latin_style_normal_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/theme/typography.ts","import":"Barlow","arguments":[{"weight":["400","500","600","700"],"subsets":["latin"],"display":"swap","fallback":["Helvetica","Arial","sans-serif"]}],"variableName":"secondaryFont"}
var typography_ts_import_Barlow_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_secondaryFont_ = __webpack_require__(70947);
var typography_ts_import_Barlow_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_secondaryFont_default = /*#__PURE__*/__webpack_require__.n(typography_ts_import_Barlow_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_secondaryFont_);
;// CONCATENATED MODULE: ./src/theme/typography.ts


// ----------------------------------------------------------------------
function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
}
function pxToRem(value) {
    return `${value / 16}rem`;
}
function responsiveFontSizes({ sm, md, lg }) {
    return {
        "@media (min-width:600px)": {
            fontSize: pxToRem(sm)
        },
        "@media (min-width:900px)": {
            fontSize: pxToRem(md)
        },
        "@media (min-width:1200px)": {
            fontSize: pxToRem(lg)
        }
    };
}
const twayairFont = {
    style: {
        fontFamily: "'twayair', 'Helvetica', 'Arial', 'sans-serif'"
    },
    weight: [
        "400",
        "500",
        "600",
        "700"
    ],
    subsets: [
        "latin"
    ],
    display: "swap",
    fallback: [
        "Helvetica",
        "Arial",
        "sans-serif"
    ]
};
// ----------------------------------------------------------------------
// LEARN MORE
// https://nextjs.org/docs/basic-features/font-optimization#google-fonts
const typography = {
    fontFamily: (typography_ts_import_Noto_Sans_arguments_weight_100_300_400_500_700_900_display_swap_subsets_latin_style_normal_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont_default()).style.fontFamily,
    // fontFamily: 'AppleSDGothicNeo',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    h1: {
        fontWeight: 300,
        lineHeight: 80 / 64,
        fontSize: pxToRem(40),
        fontFamily: twayairFont.style.fontFamily,
        ...responsiveFontSizes({
            sm: 52,
            md: 58,
            lg: 64
        })
    },
    h2: {
        fontWeight: 200,
        lineHeight: 64 / 48,
        fontSize: pxToRem(32),
        fontFamily: twayairFont.style.fontFamily,
        ...responsiveFontSizes({
            sm: 40,
            md: 44,
            lg: 48
        })
    },
    h3: {
        fontWeight: 200,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
        fontFamily: twayairFont.style.fontFamily,
        ...responsiveFontSizes({
            sm: 26,
            md: 30,
            lg: 32
        })
    },
    h4: {
        fontWeight: 200,
        lineHeight: 1.5,
        fontSize: pxToRem(20),
        fontFamily: twayairFont.style.fontFamily,
        ...responsiveFontSizes({
            sm: 20,
            md: 24,
            lg: 24
        })
    },
    h5: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        fontFamily: (typography_ts_import_Barlow_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_secondaryFont_default()).style.fontFamily,
        ...responsiveFontSizes({
            sm: 19,
            md: 20,
            lg: 20
        })
    },
    h6: {
        fontWeight: 600,
        lineHeight: 28 / 18,
        fontSize: pxToRem(17),
        fontFamily: (typography_ts_import_Barlow_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_secondaryFont_default()).style.fontFamily,
        ...responsiveFontSizes({
            sm: 18,
            md: 18,
            lg: 18
        })
    },
    subtitle1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    subtitle2: {
        fontWeight: 600,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    body1: {
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    body2: {
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12)
    },
    overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        textTransform: "uppercase"
    },
    button: {
        fontWeight: 700,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: "capitalize"
    }
};



// EXTERNAL MODULE: ./src/theme/options/presets.ts
var presets = __webpack_require__(53580);
;// CONCATENATED MODULE: ./src/theme/custom-shadows.ts


// ----------------------------------------------------------------------
const custom_shadows_palette = (0,palette/* palette */.D)("light");
const custom_shadows_LIGHT_MODE = custom_shadows_palette.grey[500];
const custom_shadows_DARK_MODE = custom_shadows_palette.common.black;
function custom_shadows_createShadow(color) {
    const transparent = (opacity)=>(0,styles.alpha)(color, opacity);
    return {
        z1: `0 1px 2px 0 ${transparent(0.04)}`,
        z4: `-4px 4px 12px 0 ${transparent(0.08)}`,
        z8: `-8px 8px 24px -4px ${transparent(0.08)}`,
        z12: `-12px 12px 36px -4px ${transparent(0.12)}`,
        z16: `-16px 16px 48px -8px ${transparent(0.16)}`,
        z20: `-20px 20px 60px -8px ${transparent(0.2)}`,
        z24: `-24px 24px 72px -8px ${transparent(0.24)}`,
        //
        primary: `0 8px 16px 0 ${(0,styles.alpha)(custom_shadows_palette.primary.main, 0.24)}`,
        info: `0 8px 16px 0 ${(0,styles.alpha)(custom_shadows_palette.info.main, 0.24)}`,
        secondary: `0 8px 16px 0 ${(0,styles.alpha)(custom_shadows_palette.secondary.main, 0.24)}`,
        success: `0 8px 16px 0 ${(0,styles.alpha)(custom_shadows_palette.success.main, 0.24)}`,
        warning: `0 8px 16px 0 ${(0,styles.alpha)(custom_shadows_palette.warning.main, 0.24)}`,
        error: `0 8px 16px 0 ${(0,styles.alpha)(custom_shadows_palette.error.main, 0.24)}`,
        //
        card: `0 0 2px 0 ${(0,styles.alpha)(color, 0.2)}, 0 12px 24px -4px ${(0,styles.alpha)(color, 0.12)}`,
        dialog: `-40px 40px 80px -8px ${(0,styles.alpha)(color, 0.24)}`,
        dropdown: `0 0 2px 0 ${(0,styles.alpha)(color, 0.24)}, -20px 20px 40px -4px ${(0,styles.alpha)(color, 0.24)}`
    };
}
function customShadows(mode) {
    return mode === "light" ? custom_shadows_createShadow(custom_shadows_LIGHT_MODE) : custom_shadows_createShadow(custom_shadows_DARK_MODE);
}

;// CONCATENATED MODULE: ./src/theme/options/dark-mode.ts



// ----------------------------------------------------------------------
function darkMode(mode) {
    const theme = {
        palette: (0,palette/* palette */.D)(mode),
        shadows: shadows(mode),
        customShadows: customShadows(mode)
    };
    return theme;
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Fab/index.js
var Fab = __webpack_require__(19541);
;// CONCATENATED MODULE: ./src/theme/overrides/components/fab.tsx


// ----------------------------------------------------------------------
const COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
// ----------------------------------------------------------------------
function fab(theme) {
    const isLight = theme.palette.mode === "light";
    const rootStyles = (ownerState)=>{
        const defaultColor = ownerState.color === "default";
        const inheritColor = ownerState.color === "inherit";
        const circularVariant = ownerState.variant === "circular";
        const extendedVariant = ownerState.variant === "extended";
        const outlinedVariant = ownerState.variant === "outlined";
        const outlinedExtendedVariant = ownerState.variant === "outlinedExtended";
        const softVariant = ownerState.variant === "soft";
        const softExtendedVariant = ownerState.variant === "softExtended";
        const defaultStyle = {
            "&:hover, &:active": {
                boxShadow: "none"
            },
            // FILLED
            ...(circularVariant || extendedVariant) && {
                ...(defaultColor || inheritColor) && {
                    boxShadow: theme.customShadows.z8
                },
                ...inheritColor && {
                    backgroundColor: theme.palette.text.primary,
                    color: isLight ? theme.palette.common.white : theme.palette.grey[800],
                    "&:hover": {
                        backgroundColor: isLight ? theme.palette.grey[700] : theme.palette.grey[400]
                    }
                }
            },
            // OUTLINED
            ...(outlinedVariant || outlinedExtendedVariant) && {
                boxShadow: "none",
                backgroundColor: "transparent",
                ...(defaultColor || inheritColor) && {
                    border: `solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.32)}`
                },
                ...defaultColor && {
                    ...!isLight && {
                        color: theme.palette.text.secondary
                    }
                },
                "&:hover": {
                    borderColor: "currentColor",
                    boxShadow: "0 0 0 0.5px currentColor",
                    backgroundColor: theme.palette.action.hover
                }
            },
            // SOFT
            ...(softVariant || softExtendedVariant) && {
                boxShadow: "none",
                ...defaultColor && {
                    color: theme.palette.grey[800],
                    backgroundColor: theme.palette.grey[300],
                    "&:hover": {
                        backgroundColor: theme.palette.grey[400]
                    }
                },
                ...inheritColor && {
                    backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.08),
                    "&:hover": {
                        backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.24)
                    }
                }
            }
        };
        const colorStyle = COLORS.map((color)=>({
                ...ownerState.color === color && {
                    // FILLED
                    ...(circularVariant || extendedVariant) && {
                        boxShadow: theme.customShadows[color],
                        "&:hover": {
                            backgroundColor: theme.palette[color].dark
                        }
                    },
                    // OUTLINED
                    ...(outlinedVariant || outlinedExtendedVariant) && {
                        color: theme.palette[color].main,
                        border: `solid 1px ${(0,styles.alpha)(theme.palette[color].main, 0.48)}`,
                        "&:hover": {
                            backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.08)
                        }
                    },
                    // SOFT
                    ...(softVariant || softExtendedVariant) && {
                        color: theme.palette[color][isLight ? "dark" : "light"],
                        backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.16),
                        "&:hover": {
                            backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.32)
                        }
                    }
                }
            }));
        const disabledState = {
            [`&.${Fab.fabClasses.disabled}`]: {
                ...(outlinedVariant || outlinedExtendedVariant) && {
                    backgroundColor: "transparent",
                    border: `solid 1px ${theme.palette.action.disabledBackground}`
                }
            }
        };
        const size = {
            ...(extendedVariant || outlinedExtendedVariant || softExtendedVariant) && {
                width: "auto",
                "& svg": {
                    marginRight: theme.spacing(1)
                },
                ...ownerState.size === "small" && {
                    height: 34,
                    minHeight: 34,
                    borderRadius: 17,
                    padding: theme.spacing(0, 1)
                },
                ...ownerState.size === "medium" && {
                    height: 40,
                    minHeight: 40,
                    borderRadius: 20,
                    padding: theme.spacing(0, 2)
                },
                ...ownerState.size === "large" && {
                    height: 48,
                    minHeight: 48,
                    borderRadius: 24,
                    padding: theme.spacing(0, 2)
                }
            }
        };
        return [
            defaultStyle,
            ...colorStyle,
            disabledState,
            size
        ];
    };
    return {
        MuiFab: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyles(ownerState)
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/card.tsx
// ----------------------------------------------------------------------
function card(theme) {
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    position: "relative",
                    boxShadow: theme.customShadows.card,
                    borderRadius: theme.shape.borderRadius * 2,
                    zIndex: 0
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3, 3, 0)
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3)
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Chip/index.js
var Chip = __webpack_require__(29553);
;// CONCATENATED MODULE: ./src/theme/overrides/components/chip.tsx


// ----------------------------------------------------------------------
const chip_COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
// ----------------------------------------------------------------------
function chip(theme) {
    const isLight = theme.palette.mode === "light";
    const rootStyles = (ownerState)=>{
        const defaultColor = ownerState.color === "default";
        const filledVariant = ownerState.variant === "filled";
        const outlinedVariant = ownerState.variant === "outlined";
        const softVariant = ownerState.variant === "soft";
        const defaultStyle = {
            [`& .${Chip.chipClasses.deleteIcon}`]: {
                opacity: 0.48,
                color: "currentColor",
                "&:hover": {
                    opacity: 1,
                    color: "currentColor"
                }
            },
            ...defaultColor && {
                [`& .${Chip.chipClasses.avatar}`]: {
                    color: theme.palette.text.primary
                },
                // FILLED
                ...filledVariant && {
                    color: isLight ? theme.palette.common.white : theme.palette.grey[800],
                    backgroundColor: theme.palette.text.primary,
                    "&:hover": {
                        backgroundColor: isLight ? theme.palette.grey[700] : theme.palette.grey[100]
                    },
                    [`& .${Chip.chipClasses.icon}`]: {
                        color: isLight ? theme.palette.common.white : theme.palette.grey[800]
                    }
                },
                // OUTLINED
                ...outlinedVariant && {
                    border: `solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.32)}`
                },
                // SOFT
                ...softVariant && {
                    color: theme.palette.text.primary,
                    backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.16),
                    "&:hover": {
                        backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.32)
                    }
                }
            }
        };
        const colorStyle = chip_COLORS.map((color)=>({
                ...ownerState.color === color && {
                    [`& .${Chip.chipClasses.avatar}`]: {
                        color: theme.palette[color].lighter,
                        backgroundColor: theme.palette[color].dark
                    },
                    // SOFT
                    ...softVariant && {
                        color: theme.palette[color][isLight ? "dark" : "light"],
                        backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.16),
                        "&:hover": {
                            backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.32)
                        }
                    }
                }
            }));
        const disabledState = {
            [`&.${Chip.chipClasses.disabled}`]: {
                opacity: 1,
                color: theme.palette.action.disabled,
                [`& .${Chip.chipClasses.icon}`]: {
                    color: theme.palette.action.disabled
                },
                [`& .${Chip.chipClasses.avatar}`]: {
                    color: theme.palette.action.disabled,
                    backgroundColor: theme.palette.action.disabledBackground
                },
                // FILLED
                ...filledVariant && {
                    backgroundColor: theme.palette.action.disabledBackground
                },
                // OUTLINED
                ...outlinedVariant && {
                    borderColor: theme.palette.action.disabledBackground
                },
                // SOFT
                ...softVariant && {
                    backgroundColor: theme.palette.action.disabledBackground
                }
            }
        };
        return [
            defaultStyle,
            ...colorStyle,
            disabledState,
            {
                fontWeight: 500,
                borderRadius: theme.shape.borderRadius
            }
        ];
    };
    return {
        MuiChip: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyles(ownerState)
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/list.tsx
// ----------------------------------------------------------------------
function list(theme) {
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: "inherit",
                    minWidth: "auto",
                    marginRight: theme.spacing(2)
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    minWidth: "auto",
                    marginRight: theme.spacing(2)
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    margin: 0
                },
                multiline: {
                    margin: 0
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Tab/index.js
var Tab = __webpack_require__(89733);
;// CONCATENATED MODULE: ./src/theme/overrides/components/tabs.tsx

// ----------------------------------------------------------------------
function tabs(theme) {
    return {
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: theme.palette.text.primary
                },
                scrollButtons: {
                    width: 48,
                    borderRadius: "50%"
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    padding: 0,
                    opacity: 1,
                    minWidth: 48,
                    minHeight: 48,
                    fontWeight: theme.typography.fontWeightSemiBold,
                    "&:not(:last-of-type)": {
                        marginRight: theme.spacing(3),
                        [theme.breakpoints.up("sm")]: {
                            marginRight: theme.spacing(5)
                        }
                    },
                    [`&:not(.${Tab.tabClasses.selected})`]: {
                        color: theme.palette.text.secondary
                    }
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./src/theme/css.ts
var css = __webpack_require__(11799);
;// CONCATENATED MODULE: ./src/theme/overrides/components/menu.tsx

// ----------------------------------------------------------------------
function menu(theme) {
    return {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    ...(0,css/* menuItem */.D9)(theme)
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableRow/index.js
var TableRow = __webpack_require__(93761);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TableCell/index.js
var TableCell = __webpack_require__(40514);
;// CONCATENATED MODULE: ./src/theme/overrides/components/table.tsx



// ----------------------------------------------------------------------
function table(theme) {
    return {
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    position: "relative"
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    [`&.${TableRow.tableRowClasses.selected}`]: {
                        backgroundColor: (0,styles.alpha)(theme.palette.primary.dark, 0.04),
                        "&:hover": {
                            backgroundColor: (0,styles.alpha)(theme.palette.primary.dark, 0.08)
                        }
                    },
                    "&:last-of-type": {
                        [`& .${TableCell.tableCellClasses.root}`]: {
                            borderColor: "transparent"
                        }
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottomStyle: "dashed"
                },
                head: {
                    fontSize: 14,
                    color: theme.palette.text.secondary,
                    fontWeight: theme.typography.fontWeightSemiBold,
                    backgroundColor: theme.palette.background.neutral
                },
                stickyHeader: {
                    backgroundColor: theme.palette.background.paper,
                    backgroundImage: `linear-gradient(to bottom, ${theme.palette.background.neutral} 0%, ${theme.palette.background.neutral} 100%)`
                },
                paddingCheckbox: {
                    paddingLeft: theme.spacing(1)
                }
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    width: "100%"
                },
                toolbar: {
                    height: 64
                },
                actions: {
                    marginRight: 8
                },
                select: {
                    paddingLeft: 8,
                    "&:focus": {
                        borderRadius: theme.shape.borderRadius
                    }
                },
                selectIcon: {
                    right: 4,
                    width: 16,
                    height: 16,
                    top: "calc(50% - 8px)"
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Alert/index.js
var Alert = __webpack_require__(74678);
;// CONCATENATED MODULE: ./src/theme/overrides/components/alert.tsx


// ----------------------------------------------------------------------
const alert_COLORS = [
    "info",
    "success",
    "warning",
    "error"
];
// ----------------------------------------------------------------------
function alert_alert(theme) {
    const isLight = theme.palette.mode === "light";
    const rootStyles = (ownerState)=>{
        const standardVariant = ownerState.variant === "standard";
        const filledVariant = ownerState.variant === "filled";
        const outlinedVariant = ownerState.variant === "outlined";
        const colorStyle = alert_COLORS.map((color)=>({
                ...ownerState.severity === color && {
                    // STANDARD
                    ...standardVariant && {
                        color: theme.palette[color][isLight ? "darker" : "lighter"],
                        backgroundColor: theme.palette[color][isLight ? "lighter" : "darker"],
                        [`& .${Alert.alertClasses.icon}`]: {
                            color: theme.palette[color][isLight ? "main" : "light"]
                        }
                    },
                    // FILLED
                    ...filledVariant && {
                        color: theme.palette[color].contrastText,
                        backgroundColor: theme.palette[color].main
                    },
                    // OUTLINED
                    ...outlinedVariant && {
                        backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.08),
                        color: theme.palette[color][isLight ? "dark" : "light"],
                        border: `solid 1px ${(0,styles.alpha)(theme.palette[color].main, 0.16)}`,
                        [`& .${Alert.alertClasses.icon}`]: {
                            color: theme.palette[color].main
                        }
                    }
                }
            }));
        return [
            ...colorStyle
        ];
    };
    return {
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyles(ownerState),
                icon: {
                    opacity: 1
                }
            }
        },
        MuiAlertTitle: {
            styleOverrides: {
                root: {
                    marginBottom: theme.spacing(0.5),
                    fontWeight: theme.typography.fontWeightSemiBold
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Badge/index.js
var Badge = __webpack_require__(82361);
;// CONCATENATED MODULE: ./src/theme/overrides/components/badge.tsx

function badge(theme) {
    return {
        MuiBadge: {
            styleOverrides: {
                dot: {
                    borderRadius: "50%"
                },
                root: ({ ownerState })=>{
                    const alway = ownerState.variant === "alway";
                    const online = ownerState.variant === "online";
                    const busy = ownerState.variant === "busy";
                    const offline = ownerState.variant === "offline";
                    const invisible = ownerState.variant === "invisible";
                    const baseStyles = {
                        [`&.${Badge.badgeClasses.invisible}`]: {
                            transform: "unset"
                        },
                        width: 10,
                        zIndex: 9,
                        padding: 0,
                        height: 10,
                        minWidth: "auto",
                        "&:before, &:after": {
                            content: "''",
                            borderRadius: 1,
                            backgroundColor: theme.palette.common.white
                        }
                    };
                    return {
                        ...online && {
                            [`& .${Badge.badgeClasses.badge}`]: {
                                ...baseStyles,
                                backgroundColor: theme.palette.success.main
                            }
                        },
                        ...busy && {
                            [`& .${Badge.badgeClasses.badge}`]: {
                                ...baseStyles,
                                backgroundColor: theme.palette.error.main,
                                "&:before": {
                                    width: 6,
                                    height: 2
                                }
                            }
                        },
                        ...offline && {
                            [`& .${Badge.badgeClasses.badge}`]: {
                                ...baseStyles,
                                backgroundColor: theme.palette.text.disabled,
                                "&:before": {
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%"
                                }
                            }
                        },
                        ...alway && {
                            [`& .${Badge.badgeClasses.badge}`]: {
                                ...baseStyles,
                                backgroundColor: theme.palette.warning.main,
                                "&:before": {
                                    width: 2,
                                    height: 4,
                                    transform: "translateX(1px) translateY(-1px)"
                                },
                                "&:after": {
                                    width: 2,
                                    height: 4,
                                    transform: "translateY(1px) rotate(125deg)"
                                }
                            }
                        },
                        ...invisible && {
                            [`& .${Badge.badgeClasses.badge}`]: {
                                display: "none"
                            }
                        }
                    };
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/paper.tsx

// ----------------------------------------------------------------------
function paper(theme) {
    return {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none"
                },
                outlined: {
                    borderColor: (0,styles.alpha)(theme.palette.grey[500], 0.16)
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Drawer/index.js
var Drawer = __webpack_require__(79499);
;// CONCATENATED MODULE: ./src/theme/overrides/components/drawer.tsx



// ----------------------------------------------------------------------
function drawer(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiDrawer: {
            styleOverrides: {
                root: ({ ownerState })=>({
                        ...ownerState.variant === "temporary" && {
                            [`& .${Drawer.drawerClasses.paper}`]: {
                                ...(0,css/* paper */.uS)({
                                    theme
                                }),
                                ...ownerState.anchor === "left" && {
                                    boxShadow: `40px 40px 80px -8px ${(0,styles.alpha)(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.24)}`
                                },
                                ...ownerState.anchor === "right" && {
                                    boxShadow: `-40px 40px 80px -8px ${(0,styles.alpha)(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.24)}`
                                }
                            }
                        }
                    })
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Rating/index.js
var Rating = __webpack_require__(47022);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/SvgIcon/index.js
var SvgIcon = __webpack_require__(81394);
var SvgIcon_default = /*#__PURE__*/__webpack_require__.n(SvgIcon);
;// CONCATENATED MODULE: ./src/theme/overrides/components/rating.tsx



// ----------------------------------------------------------------------
function rating(theme) {
    return {
        MuiRating: {
            styleOverrides: {
                root: {
                    [`&.${Rating.ratingClasses.disabled}`]: {
                        opacity: 0.48
                    }
                },
                iconEmpty: {
                    color: (0,styles.alpha)(theme.palette.grey[500], 0.48)
                },
                sizeSmall: {
                    [`& .${SvgIcon.svgIconClasses.root}`]: {
                        width: 20,
                        height: 20
                    }
                },
                sizeMedium: {
                    [`& .${SvgIcon.svgIconClasses.root}`]: {
                        width: 24,
                        height: 24
                    }
                },
                sizeLarge: {
                    [`& .${SvgIcon.svgIconClasses.root}`]: {
                        width: 28,
                        height: 28
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/appbar.tsx
// ----------------------------------------------------------------------
function appBar(theme) {
    return {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/dialog.tsx
// ----------------------------------------------------------------------
function dialog(theme) {
    return {
        MuiDialog: {
            styleOverrides: {
                paper: ({ ownerState })=>({
                        boxShadow: theme.customShadows.dialog,
                        borderRadius: theme.shape.borderRadius * 2,
                        ...!ownerState.fullScreen && {
                            margin: theme.spacing(2)
                        }
                    }),
                paperFullScreen: {
                    borderRadius: 0
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3)
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(0, 3)
                },
                dividers: {
                    borderTop: 0,
                    borderBottomStyle: "dashed",
                    paddingBottom: theme.spacing(3)
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3),
                    "& > :not(:first-of-type)": {
                        marginLeft: theme.spacing(1.5)
                    }
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Slider/index.js
var Slider = __webpack_require__(6923);
;// CONCATENATED MODULE: ./src/theme/overrides/components/slider.tsx

// ----------------------------------------------------------------------
function slider(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiSlider: {
            styleOverrides: {
                root: {
                    [`&.${Slider.sliderClasses.disabled}`]: {
                        color: theme.palette.action.disabled
                    }
                },
                rail: {
                    opacity: 0.32
                },
                markLabel: {
                    fontSize: 13,
                    color: theme.palette.text.disabled
                },
                valueLabel: {
                    borderRadius: 8,
                    backgroundColor: theme.palette.grey[isLight ? 800 : 700]
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/select.tsx
// ----------------------------------------------------------------------
function select_select(theme) {
    return {
        MuiSelect: {
            styleOverrides: {
                icon: {
                    right: 10,
                    width: 18,
                    height: 18,
                    top: "calc(50% - 9px)"
                }
            }
        },
        MuiNativeSelect: {
            styleOverrides: {
                icon: {
                    right: 10,
                    width: 18,
                    height: 18,
                    top: "calc(50% - 9px)"
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/AvatarGroup/index.js
var AvatarGroup = __webpack_require__(92438);
;// CONCATENATED MODULE: ./src/theme/overrides/components/avatar.tsx


// ----------------------------------------------------------------------
const avatar_COLORS = [
    "default",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
const colorByName = (name)=>{
    const charAt = name.charAt(0);
    if ([
        "A",
        "C",
        "F"
    ].includes(charAt)) return "primary";
    if ([
        "E",
        "D",
        "H"
    ].includes(charAt)) return "secondary";
    if ([
        "I",
        "K",
        "L"
    ].includes(charAt)) return "info";
    if ([
        "M",
        "N",
        "P"
    ].includes(charAt)) return "success";
    if ([
        "Q",
        "S",
        "T"
    ].includes(charAt)) return "warning";
    if ([
        "V",
        "X",
        "Y"
    ].includes(charAt)) return "error";
    return "default";
};
// ----------------------------------------------------------------------
function avatar(theme) {
    return {
        MuiAvatar: {
            variants: avatar_COLORS.map((color)=>color === "default" ? {
                    props: {
                        color: "default"
                    },
                    style: {
                        color: theme.palette.text.secondary,
                        backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.24)
                    }
                } : {
                    props: {
                        color
                    },
                    style: {
                        color: theme.palette[color].contrastText,
                        backgroundColor: theme.palette[color].main
                    }
                }),
            styleOverrides: {
                rounded: {
                    borderRadius: theme.shape.borderRadius * 1.5
                },
                colorDefault: ({ ownerState })=>{
                    const color = colorByName(`${ownerState.alt}`);
                    return {
                        ...!!ownerState.alt && {
                            ...color !== "default" ? {
                                color: theme.palette[color].contrastText,
                                backgroundColor: theme.palette[color].main
                            } : {
                                color: theme.palette.text.secondary,
                                backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.24)
                            }
                        }
                    };
                }
            }
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: ({ ownerState })=>({
                        justifyContent: "flex-end",
                        ...ownerState.variant === "compact" && {
                            width: 40,
                            height: 40,
                            position: "relative",
                            [`& .${AvatarGroup.avatarGroupClasses.avatar}`]: {
                                margin: 0,
                                width: 28,
                                height: 28,
                                position: "absolute",
                                "&:first-of-type": {
                                    left: 0,
                                    bottom: 0,
                                    zIndex: 9
                                },
                                "&:last-of-type": {
                                    top: 0,
                                    right: 0
                                }
                            }
                        }
                    }),
                avatar: {
                    fontSize: 16,
                    fontWeight: theme.typography.fontWeightSemiBold,
                    "&:first-of-type": {
                        fontSize: 12,
                        color: theme.palette.primary.dark,
                        backgroundColor: theme.palette.primary.lighter
                    }
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(98511);
;// CONCATENATED MODULE: ./src/theme/overrides/components/button.tsx


// ----------------------------------------------------------------------
const button_COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
// ----------------------------------------------------------------------
function button_button(theme) {
    const isLight = theme.palette.mode === "light";
    const rootStyles = (ownerState)=>{
        const inheritColor = ownerState.color === "inherit";
        const containedVariant = ownerState.variant === "contained";
        const outlinedVariant = ownerState.variant === "outlined";
        const textVariant = ownerState.variant === "text";
        const softVariant = ownerState.variant === "soft";
        const smallSize = ownerState.size === "small";
        const mediumSize = ownerState.size === "medium";
        const largeSize = ownerState.size === "large";
        const defaultStyle = {
            ...inheritColor && {
                // CONTAINED
                ...containedVariant && {
                    color: isLight ? theme.palette.common.white : theme.palette.grey[800],
                    backgroundColor: isLight ? theme.palette.grey[800] : theme.palette.common.white,
                    "&:hover": {
                        backgroundColor: isLight ? theme.palette.grey[700] : theme.palette.grey[400]
                    }
                },
                // OUTLINED
                ...outlinedVariant && {
                    borderColor: (0,styles.alpha)(theme.palette.grey[500], 0.32),
                    "&:hover": {
                        backgroundColor: theme.palette.action.hover
                    }
                },
                // TEXT
                ...textVariant && {
                    "&:hover": {
                        backgroundColor: theme.palette.action.hover
                    }
                },
                // SOFT
                ...softVariant && {
                    color: theme.palette.text.primary,
                    backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.08),
                    "&:hover": {
                        backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.24)
                    }
                }
            },
            ...outlinedVariant && {
                "&:hover": {
                    borderColor: "currentColor",
                    boxShadow: "0 0 0 0.5px currentColor"
                }
            }
        };
        const colorStyle = button_COLORS.map((color)=>({
                ...ownerState.color === color && {
                    // CONTAINED
                    ...containedVariant && {
                        "&:hover": {
                            boxShadow: theme.customShadows[color]
                        }
                    },
                    // SOFT
                    ...softVariant && {
                        color: theme.palette[color][isLight ? "dark" : "light"],
                        backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.16),
                        "&:hover": {
                            backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.32)
                        }
                    }
                }
            }));
        const disabledState = {
            [`&.${Button.buttonClasses.disabled}`]: {
                // SOFT
                ...softVariant && {
                    backgroundColor: theme.palette.action.disabledBackground
                }
            }
        };
        const size = {
            ...smallSize && {
                height: 30,
                fontSize: 13,
                paddingLeft: 8,
                paddingRight: 8,
                ...textVariant && {
                    paddingLeft: 4,
                    paddingRight: 4
                }
            },
            ...mediumSize && {
                paddingLeft: 12,
                paddingRight: 12,
                ...textVariant && {
                    paddingLeft: 8,
                    paddingRight: 8
                }
            },
            ...largeSize && {
                height: 48,
                fontSize: 15,
                paddingLeft: 16,
                paddingRight: 16,
                ...textVariant && {
                    paddingLeft: 10,
                    paddingRight: 10
                }
            }
        };
        return [
            defaultStyle,
            ...colorStyle,
            disabledState,
            size
        ];
    };
    return {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyles(ownerState)
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Switch/index.js
var Switch = __webpack_require__(77876);
;// CONCATENATED MODULE: ./src/theme/overrides/components/switch.tsx


// ----------------------------------------------------------------------
function switchs(theme) {
    const isLight = theme.palette.mode === "light";
    const rootStyles = (ownerState)=>({
            padding: "9px 13px 9px 12px",
            width: 58,
            height: 38,
            ...ownerState.size === "small" && {
                padding: "4px 8px 4px 7px",
                width: 40,
                height: 24
            },
            [`& .${Switch.switchClasses.thumb}`]: {
                width: 14,
                height: 14,
                boxShadow: "none",
                color: theme.palette.common.white,
                ...ownerState.size === "small" && {
                    width: 10,
                    height: 10
                }
            },
            [`& .${Switch.switchClasses.track}`]: {
                opacity: 1,
                borderRadius: 14,
                backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.48)
            },
            [`& .${Switch.switchClasses.switchBase}`]: {
                left: 3,
                padding: 12,
                ...ownerState.size === "small" && {
                    padding: 7
                },
                [`&.${Switch.switchClasses.checked}`]: {
                    transform: "translateX(13px)",
                    [`&+.${Switch.switchClasses.track}`]: {
                        opacity: 1
                    },
                    ...ownerState.size === "small" && {
                        transform: "translateX(9px)"
                    }
                },
                [`&.${Switch.switchClasses.disabled}`]: {
                    [`& .${Switch.switchClasses.thumb}`]: {
                        opacity: isLight ? 1 : 0.48
                    },
                    [`&+.${Switch.switchClasses.track}`]: {
                        opacity: 0.48
                    }
                }
            }
        });
    return {
        MuiSwitch: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyles(ownerState)
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/stepper.tsx
// ----------------------------------------------------------------------
function stepper(theme) {
    return {
        MuiStepConnector: {
            styleOverrides: {
                line: {
                    borderColor: theme.palette.divider
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/List/index.js
var List = __webpack_require__(54436);
;// CONCATENATED MODULE: ./src/theme/overrides/components/popover.tsx


// ----------------------------------------------------------------------
function popover(theme) {
    return {
        MuiPopover: {
            styleOverrides: {
                paper: {
                    ...(0,css/* paper */.uS)({
                        theme,
                        dropdown: true
                    }),
                    [`& .${List.listClasses.root}`]: {
                        paddingTop: 0,
                        paddingBottom: 0
                    }
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./src/components/iconify/index.ts + 1 modules
var iconify = __webpack_require__(42493);
;// CONCATENATED MODULE: ./src/theme/overrides/default-props.tsx



// ----------------------------------------------------------------------
const ArrowDownIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12,16 C11.7663478,16.0004565 11.5399121,15.9190812 11.36,15.77 L5.36,10.77 C4.93474074,10.4165378 4.87653776,9.78525926 5.23,9.36 C5.58346224,8.93474074 6.21474074,8.87653776 6.64,9.23 L12,13.71 L17.36,9.39 C17.5665934,9.2222295 17.8315409,9.14373108 18.0961825,9.17188444 C18.3608241,9.2000378 18.6033268,9.33252029 18.77,9.54 C18.9551341,9.74785947 19.0452548,10.0234772 19.0186853,10.3005589 C18.9921158,10.5776405 18.8512608,10.8311099 18.63,11 L12.63,15.83 C12.444916,15.955516 12.2231011,16.0153708 12,16 Z"
        })
    });
const CheckboxIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17.9 2.318A5 5 0 0 1 22.895 7.1l.005.217v10a5 5 0 0 1-4.783 4.995l-.217.005h-10a5 5 0 0 1-4.995-4.783l-.005-.217v-10a5 5 0 0 1 4.783-4.996l.217-.004h10Zm-.5 1.5h-9a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4Z"
        })
    });
const CheckboxCheckedIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm-1.625 7.255-4.13 4.13-1.75-1.75a.881.881 0 0 0-1.24 0c-.34.34-.34.89 0 1.24l2.38 2.37c.17.17.39.25.61.25.23 0 .45-.08.62-.25l4.75-4.75c.34-.34.34-.89 0-1.24a.881.881 0 0 0-1.24 0Z"
        })
    });
const CheckboxIndeterminateIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17,2 C19.7614,2 22,4.23858 22,7 L22,7 L22,17 C22,19.7614 19.7614,22 17,22 L17,22 L7,22 C4.23858,22 2,19.7614 2,17 L2,17 L2,7 C2,4.23858 4.23858,2 7,2 L7,2 Z M15,11 L9,11 C8.44772,11 8,11.4477 8,12 C8,12.5523 8.44772,13 9,13 L15,13 C15.5523,13 16,12.5523 16,12 C16,11.4477 15.5523,11 15,11 Z"
        })
    });
const RadioIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12 2A10 10 0 1 1 2 12C2 6.477 6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z"
        })
    });
const RadioCheckedIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12 2A10 10 0 1 1 2 12C2 6.477 6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"
        })
    });
const RatingIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17.56,21 C17.4000767,21.0006435 17.2423316,20.9629218 17.1,20.89 L12,18.22 L6.9,20.89 C6.56213339,21.067663 6.15259539,21.0374771 5.8444287,20.8121966 C5.53626201,20.5869161 5.38323252,20.2058459 5.45,19.83 L6.45,14.2 L2.33,10.2 C2.06805623,9.93860108 1.9718844,9.55391377 2.08,9.2 C2.19824414,8.83742187 2.51242293,8.57366684 2.89,8.52 L8.59,7.69 L11.1,2.56 C11.2670864,2.21500967 11.6166774,1.99588989 12,1.99588989 C12.3833226,1.99588989 12.7329136,2.21500967 12.9,2.56 L15.44,7.68 L21.14,8.51 C21.5175771,8.56366684 21.8317559,8.82742187 21.95,9.19 C22.0581156,9.54391377 21.9619438,9.92860108 21.7,10.19 L17.58,14.19 L18.58,19.82 C18.652893,20.2027971 18.4967826,20.5930731 18.18,20.82 C17.9989179,20.9468967 17.7808835,21.010197 17.56,21 L17.56,21 Z"
        })
    });
const TreeViewCollapseIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M18,3 C19.6568542,3 21,4.34314575 21,6 L21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L6,3 Z M18,5 L6,5 C5.44771525,5 5,5.44771525 5,6 L5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L18,5 Z M12,8 C12.5522847,8 13,8.44771525 13,9 L13,9 L13,11 L15,11 C15.5522847,11 16,11.4477153 16,12 C16,12.5522847 15.5522847,13 15,13 L15,13 L13,13 L13,15 C13,15.5522847 12.5522847,16 12,16 C11.4477153,16 11,15.5522847 11,15 L11,15 L11,13 L9,13 C8.44771525,13 8,12.5522847 8,12 C8,11.4477153 8.44771525,11 9,11 L9,11 L11,11 L11,9 C11,8.44771525 11.4477153,8 12,8 Z"
        })
    });
const TreeViewExpandIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M18,3 C19.6568542,3 21,4.34314575 21,6 L21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L6,3 Z M18,5 L6,5 C5.44771525,5 5,5.44771525 5,6 L5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L18,5 Z M15,11 C15.5522847,11 16,11.4477153 16,12 C16,12.5522847 15.5522847,13 15,13 L15,13 L9,13 C8.44771525,13 8,12.5522847 8,12 C8,11.4477153 8.44771525,11 9,11 L9,11 Z"
        })
    });
const TreeViewEndIcon = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M18,3 C19.6568542,3 21,4.34314575 21,6 L21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L6,3 Z M18,5 L6,5 C5.44771525,5 5,5.44771525 5,6 L5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L18,5 Z M14,8.99420168 C14.2666375,8.99420168 14.5222334,9.10068735 14.71,9.29 C14.8993127,9.4777666 15.0057983,9.73336246 15.0057983,10 C15.0057983,10.2666375 14.8993127,10.5222334 14.71,10.71 L14.71,10.71 L13.41,12 L14.71,13.29 C14.8993127,13.4777666 15.0057983,13.7333625 15.0057983,14 C15.0057983,14.2666375 14.8993127,14.5222334 14.71,14.71 C14.5222334,14.8993127 14.2666375,15.0057983 14,15.0057983 C13.7333625,15.0057983 13.4777666,14.8993127 13.29,14.71 L13.29,14.71 L12,13.41 L10.71,14.71 C10.5222334,14.8993127 10.2666375,15.0057983 10,15.0057983 C9.73336246,15.0057983 9.4777666,14.8993127 9.29,14.71 C9.10068735,14.5222334 8.99420168,14.2666375 8.99420168,14 C8.99420168,13.7333625 9.10068735,13.4777666 9.29,13.29 L9.29,13.29 L10.59,12 L9.29,10.71 C8.89787783,10.3178778 8.89787783,9.68212217 9.29,9.29 C9.68212217,8.89787783 10.3178778,8.89787783 10.71,9.29 L10.71,9.29 L12,10.59 L13.29,9.29 C13.4777666,9.10068735 13.7333625,8.99420168 14,8.99420168 Z"
        })
    });
function defaultProps(theme) {
    return {
        MuiRating: {
            defaultProps: {
                emptyIcon: /*#__PURE__*/ jsx_runtime_.jsx(RatingIcon, {}),
                icon: /*#__PURE__*/ jsx_runtime_.jsx(RatingIcon, {})
            }
        },
        MuiChip: {
            defaultProps: {
                deleteIcon: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                    icon: "solar:close-circle-bold"
                })
            }
        },
        MuiRadio: {
            defaultProps: {
                size: "small",
                icon: /*#__PURE__*/ jsx_runtime_.jsx(RadioIcon, {}),
                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx(RadioCheckedIcon, {})
            }
        },
        MuiCheckbox: {
            defaultProps: {
                size: "small",
                icon: /*#__PURE__*/ jsx_runtime_.jsx(CheckboxIcon, {}),
                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx(CheckboxCheckedIcon, {}),
                indeterminateIcon: /*#__PURE__*/ jsx_runtime_.jsx(CheckboxIndeterminateIcon, {})
            }
        },
        MuiAutocomplete: {
            defaultProps: {
                popupIcon: /*#__PURE__*/ jsx_runtime_.jsx(ArrowDownIcon, {})
            }
        },
        MuiSelect: {
            defaultProps: {
                IconComponent: ArrowDownIcon
            }
        },
        MuiNativeSelect: {
            defaultProps: {
                IconComponent: ArrowDownIcon
            }
        },
        MuiFormControl: {
            defaultProps: {
                variant: "filled"
            }
        },
        MuiTextField: {
            defaultProps: {
                variant: "filled"
            }
        },
        MuiFormHelperText: {
            defaultProps: {
                component: "div"
            }
        },
        MuiFilledInput: {
            defaultProps: {
                disableUnderline: true
            }
        },
        MuiFab: {
            defaultProps: {
                color: "primary"
            }
        },
        MuiAlert: {
            defaultProps: {
                iconMapping: {
                    error: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "solar:danger-linear",
                        width: 24
                    }),
                    info: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "carbon:information",
                        width: 24
                    }),
                    success: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "carbon:checkmark-outline",
                        width: 24
                    }),
                    warning: /*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
                        icon: "carbon:warning-alt",
                        width: 24
                    })
                }
            }
        },
        MuiAppBar: {
            defaultProps: {
                color: "transparent"
            }
        },
        MuiAvatarGroup: {
            defaultProps: {
                max: 4
            }
        },
        MuiButtonGroup: {
            defaultProps: {
                disableElevation: true
            }
        },
        MuiButton: {
            defaultProps: {
                color: "inherit",
                disableElevation: true
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: "h6"
                },
                subheaderTypographyProps: {
                    variant: "body2",
                    marginTop: theme.spacing(0.5)
                }
            }
        },
        MuiDialogActions: {
            defaultProps: {
                disableSpacing: true
            }
        },
        MuiLink: {
            defaultProps: {
                underline: "hover"
            }
        },
        MuiListItemText: {
            defaultProps: {
                primaryTypographyProps: {
                    typography: "subtitle2"
                },
                secondaryTypographyProps: {
                    component: "span"
                }
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0
            }
        },
        MuiSkeleton: {
            defaultProps: {
                animation: "wave",
                variant: "rounded"
            }
        },
        MuiSlider: {
            defaultProps: {
                size: "small"
            }
        },
        MuiStack: {
            defaultProps: {
                useFlexGap: true
            }
        },
        MuiTabs: {
            defaultProps: {
                textColor: "inherit",
                variant: "scrollable",
                allowScrollButtonsMobile: true
            }
        },
        MuiTab: {
            defaultProps: {
                disableRipple: true,
                iconPosition: "start"
            }
        },
        MuiTablePagination: {
            defaultProps: {
                backIconButtonProps: {
                    size: "small"
                },
                nextIconButtonProps: {
                    size: "small"
                }
            }
        },
        MuiTreeView: {
            defaultProps: {
                defaultCollapseIcon: /*#__PURE__*/ jsx_runtime_.jsx(TreeViewCollapseIcon, {}),
                defaultExpandIcon: /*#__PURE__*/ jsx_runtime_.jsx(TreeViewExpandIcon, {}),
                defaultEndIcon: /*#__PURE__*/ jsx_runtime_.jsx(TreeViewEndIcon, {})
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/tooltip.tsx
// ----------------------------------------------------------------------
function tooltip(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.grey[isLight ? 800 : 700]
                },
                arrow: {
                    color: theme.palette.grey[isLight ? 800 : 700]
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/svg-icon.tsx
// ----------------------------------------------------------------------
function svgIcon(theme) {
    return {
        MuiSvgIcon: {
            styleOverrides: {
                fontSizeLarge: {
                    width: 32,
                    height: 32,
                    fontSize: "inherit"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/timeline.tsx
// ----------------------------------------------------------------------
function timeline(theme) {
    return {
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.divider
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/checkbox.tsx
// ----------------------------------------------------------------------
function checkbox_checkbox(theme) {
    return {
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(1)
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/backdrop.tsx

// ----------------------------------------------------------------------
function backdrop(theme) {
    return {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: (0,styles.alpha)(theme.palette.grey[900], 0.8)
                },
                invisible: {
                    background: "transparent"
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/LinearProgress/index.js
var LinearProgress = __webpack_require__(54003);
;// CONCATENATED MODULE: ./src/theme/overrides/components/progress.tsx


// ----------------------------------------------------------------------
const progress_COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
// ----------------------------------------------------------------------
function progress(theme) {
    const rootStyles = (ownerState)=>{
        const bufferVariant = ownerState.variant === "buffer";
        const defaultStyle = {
            borderRadius: 4,
            [`& .${LinearProgress.linearProgressClasses.bar}`]: {
                borderRadius: 4
            },
            ...bufferVariant && {
                backgroundColor: "transparent"
            }
        };
        const colorStyle = progress_COLORS.map((color)=>({
                ...ownerState.color === color && {
                    backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.24)
                }
            }));
        return [
            defaultStyle,
            ...colorStyle
        ];
    };
    return {
        MuiLinearProgress: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyles(ownerState)
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/skeleton.tsx
// ----------------------------------------------------------------------
function skeleton(theme) {
    return {
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.background.neutral
                },
                rounded: {
                    borderRadius: theme.shape.borderRadius * 2
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/radio-button.tsx
// ----------------------------------------------------------------------
function radio_button_radio(theme) {
    return {
        // CHECKBOX, RADIO, SWITCH
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    ...theme.typography.body2
                }
            }
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(1)
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Paper/index.js
var Paper = __webpack_require__(27561);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemIcon/index.js
var ListItemIcon = __webpack_require__(26765);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/TablePagination/index.js
var TablePagination = __webpack_require__(47651);
;// CONCATENATED MODULE: ./src/theme/overrides/components/data-grid.tsx







// ----------------------------------------------------------------------
function dataGrid(theme) {
    const paperStyles = (0,css/* paper */.uS)({
        theme,
        dropdown: true
    });
    return {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    borderWidth: 0,
                    [`& .${TablePagination.tablePaginationClasses.root}`]: {
                        borderTop: 0
                    },
                    [`& .${TablePagination.tablePaginationClasses.toolbar}`]: {
                        height: "auto"
                    }
                },
                cell: {
                    borderBottom: `1px dashed ${theme.palette.divider}`
                },
                selectedRowCount: {
                    whiteSpace: "nowrap"
                },
                columnSeparator: {
                    color: theme.palette.divider
                },
                toolbarContainer: {
                    padding: theme.spacing(2),
                    borderBottom: `1px dashed ${theme.palette.divider}`,
                    backgroundColor: theme.palette.background.neutral
                },
                paper: {
                    ...paperStyles,
                    padding: 0
                },
                menu: {
                    [`& .${Paper.paperClasses.root}`]: {
                        ...paperStyles
                    },
                    [`& .${List.listClasses.root}`]: {
                        padding: 0,
                        [`& .${ListItemIcon.listItemIconClasses.root}`]: {
                            minWidth: 0,
                            marginRight: theme.spacing(2)
                        }
                    }
                },
                columnHeaders: {
                    borderRadius: 0,
                    backgroundColor: theme.palette.background.neutral
                },
                panelHeader: {
                    padding: theme.spacing(2)
                },
                panelFooter: {
                    padding: theme.spacing(2),
                    justifyContent: "flex-end",
                    borderTop: `dashed 1px ${theme.palette.divider}`,
                    [`& .${Button.buttonClasses.root}`]: {
                        "&:first-of-type": {
                            border: `solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.24)}`
                        },
                        "&:last-of-type": {
                            marginLeft: theme.spacing(1.5),
                            color: theme.palette.background.paper,
                            backgroundColor: theme.palette.text.primary
                        }
                    }
                },
                filterForm: {
                    padding: theme.spacing(2)
                },
                filterFormValueInput: {
                    marginLeft: theme.spacing(2)
                },
                filterFormColumnInput: {
                    marginLeft: theme.spacing(2)
                },
                filterFormOperatorInput: {
                    marginLeft: theme.spacing(2)
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/tree-view.tsx
// ----------------------------------------------------------------------
function treeView(theme) {
    return {
        MuiTreeItem: {
            styleOverrides: {
                label: {
                    ...theme.typography.body2
                },
                iconContainer: {
                    width: "auto"
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputBase/index.js
var InputBase = __webpack_require__(93591);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/InputLabel/index.js
var InputLabel = __webpack_require__(40575);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/FilledInput/index.js
var FilledInput = __webpack_require__(38634);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/OutlinedInput/index.js
var OutlinedInput = __webpack_require__(77829);
;// CONCATENATED MODULE: ./src/theme/overrides/components/textfield.tsx





// ----------------------------------------------------------------------
function textField(theme) {
    const color = {
        focused: theme.palette.text.primary,
        active: theme.palette.text.secondary,
        placeholder: theme.palette.text.disabled
    };
    const font = {
        label: theme.typography.body1,
        value: theme.typography.body2
    };
    return {
        // HELPER
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginTop: theme.spacing(1)
                }
            }
        },
        // LABEL
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    ...font.value,
                    color: color.placeholder,
                    [`&.${InputLabel.inputLabelClasses.shrink}`]: {
                        ...font.label,
                        fontWeight: 600,
                        color: color.active,
                        [`&.${InputLabel.inputLabelClasses.focused}`]: {
                            color: color.focused
                        },
                        [`&.${InputLabel.inputLabelClasses.error}`]: {
                            color: theme.palette.error.main
                        },
                        [`&.${InputLabel.inputLabelClasses.disabled}`]: {
                            color: theme.palette.text.disabled
                        },
                        [`&.${InputLabel.inputLabelClasses.filled}`]: {
                            transform: "translate(12px, 6px) scale(0.75)"
                        }
                    }
                }
            }
        },
        // BASE
        MuiInputBase: {
            styleOverrides: {
                root: {
                    [`&.${InputBase.inputBaseClasses.disabled}`]: {
                        "& svg": {
                            color: theme.palette.text.disabled
                        }
                    }
                },
                input: {
                    ...font.value,
                    "&::placeholder": {
                        opacity: 1,
                        color: color.placeholder
                    }
                }
            }
        },
        // STANDARD
        MuiInput: {
            styleOverrides: {
                underline: {
                    "&:before": {
                        borderBottomColor: (0,styles.alpha)(theme.palette.grey[500], 0.32)
                    },
                    "&:after": {
                        borderBottomColor: color.focused
                    }
                }
            }
        },
        // OUTLINED
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    [`&.${OutlinedInput.outlinedInputClasses.focused}`]: {
                        [`& .${OutlinedInput.outlinedInputClasses.notchedOutline}`]: {
                            borderColor: color.focused
                        }
                    },
                    [`&.${OutlinedInput.outlinedInputClasses.error}`]: {
                        [`& .${OutlinedInput.outlinedInputClasses.notchedOutline}`]: {
                            borderColor: theme.palette.error.main
                        }
                    },
                    [`&.${OutlinedInput.outlinedInputClasses.disabled}`]: {
                        [`& .${OutlinedInput.outlinedInputClasses.notchedOutline}`]: {
                            borderColor: theme.palette.action.disabledBackground
                        }
                    }
                },
                notchedOutline: {
                    borderColor: (0,styles.alpha)(theme.palette.grey[500], 0.2),
                    transition: theme.transitions.create([
                        "border-color"
                    ], {
                        duration: theme.transitions.duration.shortest
                    })
                }
            }
        },
        // FILLED
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.08),
                    "&:hover": {
                        backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.16)
                    },
                    [`&.${FilledInput.filledInputClasses.focused}`]: {
                        backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.16)
                    },
                    [`&.${FilledInput.filledInputClasses.error}`]: {
                        backgroundColor: (0,styles.alpha)(theme.palette.error.main, 0.08),
                        [`&.${FilledInput.filledInputClasses.focused}`]: {
                            backgroundColor: (0,styles.alpha)(theme.palette.error.main, 0.16)
                        }
                    },
                    [`&.${FilledInput.filledInputClasses.disabled}`]: {
                        backgroundColor: theme.palette.action.disabledBackground
                    }
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Accordion/index.js
var Accordion = __webpack_require__(80760);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(43360);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/AccordionSummary/index.js
var AccordionSummary = __webpack_require__(15351);
;// CONCATENATED MODULE: ./src/theme/overrides/components/accordion.tsx



// ----------------------------------------------------------------------
function accordion(theme) {
    return {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    [`&.${Accordion.accordionClasses.expanded}`]: {
                        boxShadow: theme.customShadows.z8,
                        borderRadius: theme.shape.borderRadius,
                        backgroundColor: theme.palette.background.paper
                    },
                    [`&.${Accordion.accordionClasses.disabled}`]: {
                        backgroundColor: "transparent"
                    }
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    paddingLeft: theme.spacing(2),
                    paddingRight: theme.spacing(1),
                    [`&.${AccordionSummary.accordionSummaryClasses.disabled}`]: {
                        opacity: 1,
                        color: theme.palette.action.disabled,
                        [`& .${Typography.typographyClasses.root}`]: {
                            color: "inherit"
                        }
                    }
                },
                expandIconWrapper: {
                    color: "inherit"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/typography.tsx
// ----------------------------------------------------------------------
function typography_typography(theme) {
    return {
        MuiTypography: {
            styleOverrides: {
                paragraph: {
                    marginBottom: theme.spacing(2)
                },
                gutterBottom: {
                    marginBottom: theme.spacing(1)
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/PaginationItem/index.js
var PaginationItem = __webpack_require__(40904);
;// CONCATENATED MODULE: ./src/theme/overrides/components/pagination.tsx


// ----------------------------------------------------------------------
const pagination_COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
// ----------------------------------------------------------------------
function pagination(theme) {
    const isLight = theme.palette.mode === "light";
    const rootStyles = (ownerState)=>{
        const defaultColor = ownerState.color === "standard";
        const filledVariant = ownerState.variant === "text";
        const outlinedVariant = ownerState.variant === "outlined";
        const softVariant = ownerState.variant === "soft";
        const defaultStyle = {
            [`& .${PaginationItem.paginationItemClasses.root}`]: {
                ...outlinedVariant && {
                    borderColor: (0,styles.alpha)(theme.palette.grey[500], 0.24)
                },
                [`&.${PaginationItem.paginationItemClasses.selected}`]: {
                    fontWeight: theme.typography.fontWeightSemiBold,
                    ...outlinedVariant && {
                        borderColor: "currentColor"
                    },
                    ...defaultColor && {
                        backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.08),
                        ...filledVariant && {
                            color: isLight ? theme.palette.common.white : theme.palette.grey[800],
                            backgroundColor: theme.palette.text.primary,
                            "&:hover": {
                                backgroundColor: isLight ? theme.palette.grey[700] : theme.palette.grey[100]
                            }
                        }
                    }
                }
            }
        };
        const colorStyle = pagination_COLORS.map((color)=>({
                ...ownerState.color === color && {
                    [`& .${PaginationItem.paginationItemClasses.root}`]: {
                        [`&.${PaginationItem.paginationItemClasses.selected}`]: {
                            ...ownerState.color === color && {
                                // SOFT
                                ...softVariant && {
                                    color: theme.palette[color][isLight ? "dark" : "light"],
                                    backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.08),
                                    "&:hover": {
                                        backgroundColor: (0,styles.alpha)(theme.palette[color].main, 0.16)
                                    }
                                }
                            }
                        }
                    }
                }
            }));
        return [
            defaultStyle,
            ...colorStyle
        ];
    };
    return {
        MuiPagination: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyles(ownerState)
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/date-picker.tsx



// ----------------------------------------------------------------------
const dateList = [
    "DatePicker",
    "DateTimePicker",
    "StaticDatePicker",
    "DesktopDatePicker",
    "DesktopDateTimePicker",
    "MobileDatePicker",
    "MobileDateTimePicker"
];
const timeList = [
    "TimePicker",
    "MobileTimePicker",
    "StaticTimePicker",
    "DesktopTimePicker"
];
const switchIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
        icon: "eva:chevron-down-fill",
        width: 24
    });
const leftIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
        icon: "eva:arrow-ios-back-fill",
        width: 24
    });
const rightIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
        icon: "eva:arrow-ios-forward-fill",
        width: 24
    });
const calendarIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
        icon: "solar:calendar-minimalistic-linear",
        width: 24
    });
const clockIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx(iconify/* default */.Z, {
        icon: "solar:clock-circle-outline",
        width: 24
    });
const desktopTypes = dateList.reduce((result, currentValue)=>{
    result[`Mui${currentValue}`] = {
        defaultProps: {
            slots: {
                openPickerIcon: calendarIcon,
                leftArrowIcon: leftIcon,
                rightArrowIcon: rightIcon,
                switchViewIcon: switchIcon
            }
        }
    };
    return result;
}, {});
const timeTypes = timeList.reduce((result, currentValue)=>{
    result[`Mui${currentValue}`] = {
        defaultProps: {
            slots: {
                openPickerIcon: clockIcon,
                rightArrowIcon: rightIcon,
                switchViewIcon: switchIcon
            }
        }
    };
    return result;
}, {});
function datePicker(theme) {
    return {
        MuiPickersLayout: {
            styleOverrides: {
                root: {
                    "& .MuiPickersLayout-actionBar": {
                        [`& .${Button.buttonClasses.root}:last-of-type`]: {
                            backgroundColor: theme.palette.text.primary,
                            color: theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.grey[800]
                        }
                    }
                }
            }
        },
        // Date
        ...desktopTypes,
        // Time
        ...timeTypes
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/breadcrumbs.tsx
// ----------------------------------------------------------------------
function breadcrumbs(theme) {
    return {
        MuiBreadcrumbs: {
            styleOverrides: {
                separator: {
                    marginLeft: theme.spacing(2),
                    marginRight: theme.spacing(2)
                },
                li: {
                    display: "inline-flex",
                    margin: theme.spacing(0.25, 0),
                    "& > *": {
                        ...theme.typography.body2
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/components/css-baseline.tsx
// ----------------------------------------------------------------------
function cssBaseline(theme) {
    return {
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    boxSizing: "border-box"
                },
                html: {
                    margin: 0,
                    padding: 0,
                    width: "100%",
                    height: "100%",
                    WebkitOverflowScrolling: "touch"
                },
                body: {
                    margin: 0,
                    padding: 0,
                    width: "100%",
                    height: "100%"
                },
                "#root, #__next": {
                    width: "100%",
                    height: "100%"
                },
                input: {
                    "&[type=number]": {
                        MozAppearance: "textfield",
                        "&::-webkit-outer-spin-button": {
                            margin: 0,
                            WebkitAppearance: "none"
                        },
                        "&::-webkit-inner-spin-button": {
                            margin: 0,
                            WebkitAppearance: "none"
                        }
                    }
                },
                img: {
                    maxWidth: "100%",
                    display: "inline-block",
                    verticalAlign: "bottom"
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/ButtonGroup/index.js
var ButtonGroup = __webpack_require__(32105);
;// CONCATENATED MODULE: ./src/theme/overrides/components/button-group.tsx


// ----------------------------------------------------------------------
const button_group_COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
// ----------------------------------------------------------------------
function buttonGroup(theme) {
    const rootStyles = (ownerState)=>{
        const inheritColor = ownerState.color === "inherit";
        const containedVariant = ownerState.variant === "contained";
        const outlinedVariant = ownerState.variant === "outlined";
        const textVariant = ownerState.variant === "text";
        const softVariant = ownerState.variant === "soft";
        const horizontalOrientation = ownerState.orientation === "horizontal";
        const verticalOrientation = ownerState.orientation === "vertical";
        const defaultStyle = {
            [`& .${ButtonGroup.buttonGroupClasses.grouped}`]: {
                "&:not(:last-of-type)": {
                    ...!outlinedVariant && {
                        borderStyle: "solid",
                        ...inheritColor && {
                            borderColor: (0,styles.alpha)(theme.palette.grey[500], 0.32)
                        },
                        // HORIZONTAL
                        ...horizontalOrientation && {
                            borderWidth: "0px 1px 0px 0px"
                        },
                        // VERTICAL
                        ...verticalOrientation && {
                            borderWidth: "0px 0px 1px 0px"
                        }
                    }
                }
            }
        };
        const colorStyle = button_group_COLORS.map((color)=>({
                [`& .${ButtonGroup.buttonGroupClasses.grouped}`]: {
                    "&:not(:last-of-type)": {
                        ...!outlinedVariant && {
                            ...ownerState.color === color && {
                                // CONTAINED
                                ...containedVariant && {
                                    borderColor: (0,styles.alpha)(theme.palette[color].dark, 0.48)
                                },
                                // TEXT
                                ...textVariant && {
                                    borderColor: (0,styles.alpha)(theme.palette[color].main, 0.48)
                                },
                                // SOFT
                                ...softVariant && {
                                    borderColor: (0,styles.alpha)(theme.palette[color].dark, 0.24)
                                }
                            }
                        }
                    }
                }
            }));
        const disabledState = {
            [`& .${ButtonGroup.buttonGroupClasses.grouped}`]: {
                [`&.${ButtonGroup.buttonGroupClasses.disabled}`]: {
                    "&:not(:last-of-type)": {
                        borderColor: theme.palette.action.disabledBackground
                    }
                }
            }
        };
        return [
            defaultStyle,
            ...colorStyle,
            disabledState
        ];
    };
    return {
        MuiButtonGroup: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyles(ownerState)
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/Autocomplete/index.js
var Autocomplete = __webpack_require__(90039);
;// CONCATENATED MODULE: ./src/theme/overrides/components/autocomplete.tsx




// ----------------------------------------------------------------------
function autocomplete(theme) {
    return {
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    [`& span.${Autocomplete.autocompleteClasses.tag}`]: {
                        ...theme.typography.subtitle2,
                        height: 24,
                        minWidth: 24,
                        lineHeight: "24px",
                        textAlign: "center",
                        padding: theme.spacing(0, 0.75),
                        color: theme.palette.text.secondary,
                        borderRadius: theme.shape.borderRadius,
                        backgroundColor: (0,styles.alpha)(theme.palette.grey[500], 0.16)
                    }
                },
                paper: {
                    ...(0,css/* paper */.uS)({
                        theme,
                        dropdown: true
                    })
                },
                listbox: {
                    padding: 0,
                    [`& .${Autocomplete.autocompleteClasses.option}`]: {
                        ...(0,css/* menuItem */.D9)(theme)
                    }
                },
                endAdornment: {
                    [`& .${SvgIcon.svgIconClasses.root}`]: {
                        width: 18,
                        height: 18
                    }
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/material/node/ToggleButton/index.js
var ToggleButton = __webpack_require__(42002);
;// CONCATENATED MODULE: ./src/theme/overrides/components/toggle-button.tsx


// ----------------------------------------------------------------------
const toggle_button_COLORS = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error"
];
// ----------------------------------------------------------------------
function toggleButton(theme) {
    const rootStyles = (ownerState)=>{
        const defaultStyle = {
            [`&.${ToggleButton.toggleButtonClasses.selected}`]: {
                borderColor: "currentColor",
                boxShadow: "0 0 0 0.5px currentColor"
            }
        };
        const colorStyle = toggle_button_COLORS.map((color)=>({
                ...ownerState.color === color && {
                    "&:hover": {
                        borderColor: (0,styles.alpha)(theme.palette[color].main, 0.48),
                        backgroundColor: (0,styles.alpha)(theme.palette[color].main, theme.palette.action.hoverOpacity)
                    }
                }
            }));
        const disabledState = {
            [`&.${ToggleButton.toggleButtonClasses.disabled}`]: {
                [`&.${ToggleButton.toggleButtonClasses.selected}`]: {
                    color: theme.palette.action.disabled,
                    backgroundColor: theme.palette.action.selected,
                    borderColor: theme.palette.action.disabledBackground
                }
            }
        };
        return [
            defaultStyle,
            ...colorStyle,
            disabledState
        ];
    };
    return {
        MuiToggleButton: {
            styleOverrides: {
                root: ({ ownerState })=>rootStyles(ownerState)
            }
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.palette.background.paper,
                    border: `solid 1px ${(0,styles.alpha)(theme.palette.grey[500], 0.08)}`
                },
                grouped: {
                    margin: 4,
                    [`&.${ToggleButton.toggleButtonClasses.selected}`]: {
                        boxShadow: "none"
                    },
                    "&:not(:first-of-type), &:not(:last-of-type)": {
                        borderRadius: theme.shape.borderRadius,
                        borderColor: "transparent"
                    }
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./node_modules/@mui/lab/node/LoadingButton/index.js
var LoadingButton = __webpack_require__(78062);
;// CONCATENATED MODULE: ./src/theme/overrides/components/loading-button.tsx

// ----------------------------------------------------------------------
function loadingButton(theme) {
    return {
        MuiLoadingButton: {
            styleOverrides: {
                root: ({ ownerState })=>({
                        ...ownerState.variant === "soft" && {
                            [`& .${LoadingButton.loadingButtonClasses.loadingIndicatorStart}`]: {
                                left: 10
                            },
                            [`& .${LoadingButton.loadingButtonClasses.loadingIndicatorEnd}`]: {
                                right: 14
                            },
                            ...ownerState.size === "small" && {
                                [`& .${LoadingButton.loadingButtonClasses.loadingIndicatorStart}`]: {
                                    left: 10
                                },
                                [`& .${LoadingButton.loadingButtonClasses.loadingIndicatorEnd}`]: {
                                    right: 10
                                }
                            }
                        }
                    })
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/index.ts












































// ----------------------------------------------------------------------
function componentsOverrides(theme) {
    const components = lodash_merge_default()(fab(theme), tabs(theme), chip(theme), card(theme), menu(theme), list(theme), badge(theme), table(theme), paper(theme), alert_alert(theme), radio_button_radio(theme), select_select(theme), button_button(theme), rating(theme), dialog(theme), appBar(theme), avatar(theme), slider(theme), drawer(theme), switchs(theme), stepper(theme), tooltip(theme), popover(theme), svgIcon(theme), checkbox_checkbox(theme), dataGrid(theme), skeleton(theme), timeline(theme), treeView(theme), backdrop(theme), progress(theme), textField(theme), accordion(theme), typography_typography(theme), pagination(theme), datePicker(theme), buttonGroup(theme), breadcrumbs(theme), cssBaseline(theme), autocomplete(theme), toggleButton(theme), loadingButton(theme), defaultProps(theme));
    return components;
}

// EXTERNAL MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.esm.js + 7 modules
var emotion_cache_esm = __webpack_require__(9682);
// EXTERNAL MODULE: ./node_modules/stylis-plugin-rtl/dist/cjs/stylis-rtl.js
var stylis_rtl = __webpack_require__(85248);
var stylis_rtl_default = /*#__PURE__*/__webpack_require__.n(stylis_rtl);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-6bdfffb2.esm.js + 1 modules
var emotion_element_6bdfffb2_esm = __webpack_require__(19128);
;// CONCATENATED MODULE: ./src/theme/options/right-to-left.tsx
/* __next_internal_client_entry_do_not_use__ default,direction auto */ 




function RTL({ children, themeDirection }) {
    (0,react_.useEffect)(()=>{
        document.dir = themeDirection;
    }, [
        themeDirection
    ]);
    const cacheRtl = (0,emotion_cache_esm["default"])({
        key: "rtl",
        prepend: true,
        // @ts-ignore
        // https://github.com/styled-components/stylis-plugin-rtl/issues/35
        stylisPlugins: [
            (stylis_rtl_default())
        ]
    });
    if (themeDirection === "rtl") {
        return /*#__PURE__*/ jsx_runtime_.jsx(emotion_element_6bdfffb2_esm.C, {
            value: cacheRtl,
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
}
// ----------------------------------------------------------------------
function direction(themeDirection) {
    const theme = {
        direction: themeDirection
    };
    return theme;
}

;// CONCATENATED MODULE: ./src/theme/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 













function ThemeProvider({ children }) {
    const settings = (0,components_settings/* useSettingsContext */.K$)();
    const darkModeOption = darkMode(settings.themeMode);
    const presetsOption = (0,presets/* presets */.u)(settings.themeColorPresets);
    const directionOption = direction(settings.themeDirection);
    const baseOption = (0,react_.useMemo)(()=>({
            palette: (0,palette/* palette */.D)("light"),
            shadows: shadows("light"),
            customShadows: customShadows("light"),
            typography: typography,
            shape: {
                borderRadius: 8
            }
        }), []);
    const memoizedValue = (0,react_.useMemo)(()=>lodash_merge_default()(// Base
        baseOption, // Direction: remove if not in use
        directionOption, // Dark mode: remove if not in use
        darkModeOption, // Presets: remove if not in use
        presetsOption), [
        baseOption,
        darkModeOption,
        directionOption,
        presetsOption
    ]);
    const theme = (0,styles.createTheme)(memoizedValue);
    theme.components = componentsOverrides(theme);
    return /*#__PURE__*/ jsx_runtime_.jsx(styles.ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RTL, {
            themeDirection: settings.themeDirection,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(CssBaseline/* default */.Z, {}),
                children
            ]
        })
    });
}


/***/ }),

/***/ 53580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ presetOptions),
/* harmony export */   u: () => (/* binding */ presets)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22166);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_theme_palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71540);


// ----------------------------------------------------------------------
function presets(presetsColor) {
    const color = presetOptions.find((i)=>i.name === presetsColor);
    const theme = {
        palette: {
            primary: color?.primary,
            secondary: color?.secondary
        },
        customShadows: {
            primary: `0 8px 16px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(`${color?.primary?.main}`, 0.24)}`,
            secondary: `0 8px 16px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(`${color?.secondary?.main}`, 0.24)}`
        }
    };
    return theme;
}
// ----------------------------------------------------------------------
const palette = (0,src_theme_palette__WEBPACK_IMPORTED_MODULE_0__/* .palette */ .D)("light");
const presetOptions = [
    // DEFAULT
    {
        name: "default",
        primary: {
            ...palette.primary
        },
        secondary: {
            ...palette.secondary
        }
    },
    // GREEN - BLUE
    {
        name: "preset02",
        primary: {
            lighter: "#D0FCE0",
            light: "#72F2B9",
            main: "#1AD5A6",
            dark: "#0D9991",
            darker: "#045966",
            contrastText: palette.grey[800]
        },
        secondary: {
            lighter: "#D6E5FD",
            light: "#85A9F3",
            main: "#3562D7",
            dark: "#1A369A",
            darker: "#0A1967",
            contrastText: "#FFFFFF"
        }
    },
    // PINK - CYAN
    {
        name: "preset01",
        primary: {
            lighter: "#FEE7E4",
            light: "#FBAEB5",
            main: "#F2779A",
            dark: "#AE3B72",
            darker: "#741655",
            contrastText: "#FFFFFF"
        },
        secondary: {
            lighter: "#CAFDEB",
            light: "#61F4D9",
            main: "#00DCDA",
            dark: "#00849E",
            darker: "#004569",
            contrastText: "#FFFFFF"
        }
    },
    // PURPLE - TEAL
    {
        name: "preset05",
        primary: {
            lighter: "#EACCFF",
            light: "#B566FF",
            main: "#6E00FF",
            dark: "#3F00B7",
            darker: "#1F007A",
            contrastText: "#FFFFFF"
        },
        secondary: {
            lighter: "#CBFEFB",
            light: "#65F2FE",
            main: "#00C5FE",
            dark: "#0073B6",
            darker: "#003B79",
            contrastText: "#FFFFFF"
        }
    },
    // BLUE - ORANGE
    {
        name: "preset03",
        primary: {
            lighter: "#CCF4FE",
            light: "#68CDF9",
            main: "#078DEE",
            dark: "#0351AB",
            darker: "#012972",
            contrastText: "#FFFFFF"
        },
        secondary: {
            lighter: "#FFF3D8",
            light: "#FFD18B",
            main: "#FFA03F",
            dark: "#B75D1F",
            darker: "#7A2D0C",
            contrastText: palette.grey[800]
        }
    },
    // GREEN - ORANGE
    {
        name: "preset04",
        primary: {
            lighter: "#DBF7EE",
            light: "#8BD0C7",
            main: "#2D6365",
            dark: "#163E48",
            darker: "#082130",
            contrastText: "#FFFFFF"
        },
        secondary: {
            lighter: "#FEEFD5",
            light: "#FBC182",
            main: "#F37F31",
            dark: "#AE4318",
            darker: "#741B09",
            contrastText: "#FFFFFF"
        }
    }
];


/***/ }),

/***/ 71540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ palette)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22166);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

// SETUP COLORS
const GREY = {
    0: "#FFFFFF",
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#919EAB",
    600: "#637381",
    700: "#454F5B",
    800: "#212B36",
    900: "#161C24"
};
const PRIMARY = {
    lighter: "#212B36",
    light: "#212B36",
    main: "#00A76F",
    dark: "#007867",
    darker: "#004B50",
    contrastText: "#FFFFFF"
};
const SECONDARY = {
    lighter: "#EFD6FF",
    light: "#C684FF",
    main: "#8E33FF",
    dark: "#5119B7",
    darker: "#27097A ",
    contrastText: "#FFFFFF"
};
const INFO = {
    lighter: "#CAFDF5",
    light: "#61F3F3",
    main: "#00B8D9",
    dark: "#006C9C",
    darker: "#003768",
    contrastText: "#FFFFFF"
};
const SUCCESS = {
    lighter: "#D8FBDE",
    light: "#86E8AB",
    main: "#36B37E",
    dark: "#1B806A",
    darker: "#0A5554",
    contrastText: "#FFFFFF"
};
const WARNING = {
    lighter: "#FFF5CC",
    light: "#FFD666",
    main: "#FFAB00",
    dark: "#B76E00",
    darker: "#7A4100",
    contrastText: GREY[800]
};
const ERROR = {
    lighter: "#FFE9D5",
    light: "#FFAC82",
    main: "#FF5630",
    dark: "#B71D18",
    darker: "#7A0916",
    contrastText: "#FFFFFF"
};
const COMMON = {
    common: {
        black: "#000000",
        white: "#FFFFFF"
    },
    primary: PRIMARY,
    secondary: SECONDARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
    grey: GREY,
    divider: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(GREY[700], 0.2),
    action: {
        hover: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(GREY[500], 0.08),
        selected: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(GREY[500], 0.16),
        disabled: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(GREY[500], 0.8),
        disabledBackground: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(GREY[500], 0.24),
        focus: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(GREY[500], 0.24),
        hoverOpacity: 0.08,
        disabledOpacity: 0.48
    }
};
function palette(mode) {
    const light = {
        ...COMMON,
        mode: "light",
        text: {
            primary: GREY[800],
            secondary: GREY[600],
            disabled: GREY[500]
        },
        background: {
            paper: "#FFFFFF",
            default: "#FFFFFF",
            neutral: GREY[100]
        },
        action: {
            ...COMMON.action,
            active: GREY[600]
        }
    };
    const dark = {
        ...COMMON,
        mode: "dark",
        text: {
            primary: "#FFFFFF",
            secondary: GREY[500],
            disabled: GREY[600]
        },
        background: {
            paper: GREY[800],
            default: GREY[900],
            neutral: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(GREY[500], 0.12)
        },
        action: {
            ...COMMON.action,
            active: GREY[500]
        }
    };
    return mode === "light" ? light : dark;
}


/***/ }),

/***/ 43809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/global.css
var global = __webpack_require__(79773);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21913);
;// CONCATENATED MODULE: ./src/theme/index.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/wini/Documents/workspace/pandora/src/theme/index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const theme = (__default__);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/theme/typography.ts","import":"Noto_Sans","arguments":[{"weight":["100","300","400","500","700","900"],"display":"swap","subsets":["latin"],"style":"normal","fallback":["Helvetica","Arial","sans-serif"]}],"variableName":"primaryFont"}
var typography_ts_import_Noto_Sans_arguments_weight_100_300_400_500_700_900_display_swap_subsets_latin_style_normal_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont_ = __webpack_require__(76934);
var typography_ts_import_Noto_Sans_arguments_weight_100_300_400_500_700_900_display_swap_subsets_latin_style_normal_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont_default = /*#__PURE__*/__webpack_require__.n(typography_ts_import_Noto_Sans_arguments_weight_100_300_400_500_700_900_display_swap_subsets_latin_style_normal_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/theme/typography.ts","import":"Barlow","arguments":[{"weight":["400","500","600","700"],"subsets":["latin"],"display":"swap","fallback":["Helvetica","Arial","sans-serif"]}],"variableName":"secondaryFont"}
var typography_ts_import_Barlow_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_secondaryFont_ = __webpack_require__(34180);
var typography_ts_import_Barlow_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_secondaryFont_default = /*#__PURE__*/__webpack_require__.n(typography_ts_import_Barlow_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_secondaryFont_);
;// CONCATENATED MODULE: ./src/theme/typography.ts


// ----------------------------------------------------------------------
function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
}
function pxToRem(value) {
    return `${value / 16}rem`;
}
function responsiveFontSizes({ sm, md, lg }) {
    return {
        "@media (min-width:600px)": {
            fontSize: pxToRem(sm)
        },
        "@media (min-width:900px)": {
            fontSize: pxToRem(md)
        },
        "@media (min-width:1200px)": {
            fontSize: pxToRem(lg)
        }
    };
}
const twayairFont = {
    style: {
        fontFamily: "'twayair', 'Helvetica', 'Arial', 'sans-serif'"
    },
    weight: [
        "400",
        "500",
        "600",
        "700"
    ],
    subsets: [
        "latin"
    ],
    display: "swap",
    fallback: [
        "Helvetica",
        "Arial",
        "sans-serif"
    ]
};
// ----------------------------------------------------------------------
// LEARN MORE
// https://nextjs.org/docs/basic-features/font-optimization#google-fonts
const typography = {
    fontFamily: (typography_ts_import_Noto_Sans_arguments_weight_100_300_400_500_700_900_display_swap_subsets_latin_style_normal_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont_default()).style.fontFamily,
    // fontFamily: 'AppleSDGothicNeo',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    h1: {
        fontWeight: 300,
        lineHeight: 80 / 64,
        fontSize: pxToRem(40),
        fontFamily: twayairFont.style.fontFamily,
        ...responsiveFontSizes({
            sm: 52,
            md: 58,
            lg: 64
        })
    },
    h2: {
        fontWeight: 200,
        lineHeight: 64 / 48,
        fontSize: pxToRem(32),
        fontFamily: twayairFont.style.fontFamily,
        ...responsiveFontSizes({
            sm: 40,
            md: 44,
            lg: 48
        })
    },
    h3: {
        fontWeight: 200,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
        fontFamily: twayairFont.style.fontFamily,
        ...responsiveFontSizes({
            sm: 26,
            md: 30,
            lg: 32
        })
    },
    h4: {
        fontWeight: 200,
        lineHeight: 1.5,
        fontSize: pxToRem(20),
        fontFamily: twayairFont.style.fontFamily,
        ...responsiveFontSizes({
            sm: 20,
            md: 24,
            lg: 24
        })
    },
    h5: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        fontFamily: (typography_ts_import_Barlow_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_secondaryFont_default()).style.fontFamily,
        ...responsiveFontSizes({
            sm: 19,
            md: 20,
            lg: 20
        })
    },
    h6: {
        fontWeight: 600,
        lineHeight: 28 / 18,
        fontSize: pxToRem(17),
        fontFamily: (typography_ts_import_Barlow_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_secondaryFont_default()).style.fontFamily,
        ...responsiveFontSizes({
            sm: 18,
            md: 18,
            lg: 18
        })
    },
    subtitle1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    subtitle2: {
        fontWeight: 600,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    body1: {
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    body2: {
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12)
    },
    overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        textTransform: "uppercase"
    },
    button: {
        fontWeight: 700,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: "capitalize"
    }
};



;// CONCATENATED MODULE: ./src/locales/localization-provider.tsx

const localization_provider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/wini/Documents/workspace/pandora/src/locales/localization-provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: localization_provider_esModule, $$typeof: localization_provider_$$typeof } = localization_provider_proxy;
const localization_provider_default_ = localization_provider_proxy.default;


/* harmony default export */ const localization_provider = (localization_provider_default_);
;// CONCATENATED MODULE: ./src/locales/index.ts


;// CONCATENATED MODULE: ./src/components/progress-bar/progress-bar.tsx

const progress_bar_proxy = (0,module_proxy.createProxy)(String.raw`/Users/wini/Documents/workspace/pandora/src/components/progress-bar/progress-bar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: progress_bar_esModule, $$typeof: progress_bar_$$typeof } = progress_bar_proxy;
const progress_bar_default_ = progress_bar_proxy.default;


/* harmony default export */ const progress_bar = (progress_bar_default_);
;// CONCATENATED MODULE: ./src/components/progress-bar/styles.tsx

const styles_proxy = (0,module_proxy.createProxy)(String.raw`/Users/wini/Documents/workspace/pandora/src/components/progress-bar/styles.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: styles_esModule, $$typeof: styles_$$typeof } = styles_proxy;
const styles_default_ = styles_proxy.default;


/* harmony default export */ const styles = ((/* unused pure expression or super */ null && (styles_default_)));
;// CONCATENATED MODULE: ./src/components/progress-bar/index.ts



;// CONCATENATED MODULE: ./src/components/animate/motion-lazy.tsx

const motion_lazy_proxy = (0,module_proxy.createProxy)(String.raw`/Users/wini/Documents/workspace/pandora/src/components/animate/motion-lazy.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: motion_lazy_esModule, $$typeof: motion_lazy_$$typeof } = motion_lazy_proxy;
const motion_lazy_default_ = motion_lazy_proxy.default;


/* harmony default export */ const motion_lazy = (motion_lazy_default_);
;// CONCATENATED MODULE: ./src/components/settings/context/settings-provider.tsx

const settings_provider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/wini/Documents/workspace/pandora/src/components/settings/context/settings-provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: settings_provider_esModule, $$typeof: settings_provider_$$typeof } = settings_provider_proxy;
const settings_provider_default_ = settings_provider_proxy.default;

const e0 = settings_provider_proxy["SettingsProvider"];

;// CONCATENATED MODULE: ./src/components/settings/context/settings-context.tsx

const settings_context_proxy = (0,module_proxy.createProxy)(String.raw`/Users/wini/Documents/workspace/pandora/src/components/settings/context/settings-context.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: settings_context_esModule, $$typeof: settings_context_$$typeof } = settings_context_proxy;
const settings_context_default_ = settings_context_proxy.default;

const settings_context_e0 = settings_context_proxy["SettingsContext"];

const e1 = settings_context_proxy["useSettingsContext"];

;// CONCATENATED MODULE: ./src/components/settings/context/index.ts



;// CONCATENATED MODULE: ./src/components/settings/drawer/settings-drawer.tsx

const settings_drawer_proxy = (0,module_proxy.createProxy)(String.raw`/Users/wini/Documents/workspace/pandora/src/components/settings/drawer/settings-drawer.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: settings_drawer_esModule, $$typeof: settings_drawer_$$typeof } = settings_drawer_proxy;
const settings_drawer_default_ = settings_drawer_proxy.default;


/* harmony default export */ const settings_drawer = (settings_drawer_default_);
;// CONCATENATED MODULE: ./src/components/settings/drawer/index.ts


;// CONCATENATED MODULE: ./src/components/settings/index.ts




;// CONCATENATED MODULE: ./src/app/layout.tsx


// ----------------------------------------------------------------------






// ----------------------------------------------------------------------
const metadata = {
    title: "Zone UI Kit",
    description: "The ZONE is built on top of MUI, a powerful library that provides flexible, customizable, and easy-to-use components.",
    keywords: "react,material,kit,application,dashboard,admin,template",
    themeColor: "#000000",
    manifest: "/manifest.json",
    icons: [
        {
            rel: "icon",
            url: "/favicon/favicon.ico"
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon/favicon-16x16.png"
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon/favicon-32x32.png"
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/favicon/apple-touch-icon.png"
        }
    ]
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: (typography_ts_import_Noto_Sans_arguments_weight_100_300_400_500_700_900_display_swap_subsets_latin_style_normal_fallback_Helvetica_Arial_sans_serif_variableName_primaryFont_default()).className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(localization_provider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                    defaultSettings: {
                        themeMode: "light",
                        themeDirection: "ltr",
                        themeColorPresets: "default"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(theme, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion_lazy, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(progress_bar, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(settings_drawer, {}),
                                children
                            ]
                        })
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 10503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/wini/Documents/workspace/pandora/src/app/loading.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 68327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NotFoundPage),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21913);
;// CONCATENATED MODULE: ./src/sections/error/not-found-view.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/wini/Documents/workspace/pandora/src/sections/error/not-found-view.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const not_found_view = (__default__);
;// CONCATENATED MODULE: ./src/app/not-found.tsx


// ----------------------------------------------------------------------
const metadata = {
    title: "404 Page Not Found!"
};
function NotFoundPage() {
    return /*#__PURE__*/ jsx_runtime_.jsx(not_found_view, {});
}


/***/ }),

/***/ 79773:
/***/ (() => {



/***/ })

};
;