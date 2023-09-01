"use strict";
exports.id = 6281;
exports.ids = [6281];
exports.modules = {

/***/ 91301:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parseToNumber = exports.getStyle = exports["default"] = void 0;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(20820));
var _extends2 = _interopRequireDefault(__webpack_require__(59651));
var _base = __webpack_require__(29923);
var ReactDOM = _interopRequireWildcard(__webpack_require__(98704));
var _styles = __webpack_require__(22166);
var _system = __webpack_require__(47447);
var _utils = __webpack_require__(90480);
var _clsx = _interopRequireDefault(__webpack_require__(14889));
var _propTypes = _interopRequireDefault(__webpack_require__(69232));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _masonryClasses = __webpack_require__(39895);
var _jsxRuntime = __webpack_require__(56786);
const _excluded = ["children", "className", "component", "columns", "spacing", "defaultColumns", "defaultHeight", "defaultSpacing"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const parseToNumber = val => {
  return Number(val.replace('px', ''));
};
exports.parseToNumber = parseToNumber;
const lineBreakStyle = {
  flexBasis: '100%',
  width: 0,
  margin: 0,
  padding: 0
};
const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0, _base.unstable_composeClasses)(slots, _masonryClasses.getMasonryUtilityClass, classes);
};
const getStyle = ({
  ownerState,
  theme
}) => {
  let styles = {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    alignContent: 'flex-start',
    boxSizing: 'border-box',
    '& > *': {
      boxSizing: 'border-box'
    }
  };
  const stylesSSR = {};
  // Only applicable for Server-Side Rendering
  if (ownerState.isSSR) {
    const orderStyleSSR = {};
    const defaultSpacing = parseToNumber(theme.spacing(ownerState.defaultSpacing));
    for (let i = 1; i <= ownerState.defaultColumns; i += 1) {
      orderStyleSSR[`&:nth-of-type(${ownerState.defaultColumns}n+${i % ownerState.defaultColumns})`] = {
        order: i
      };
    }
    stylesSSR.height = ownerState.defaultHeight;
    stylesSSR.margin = -(defaultSpacing / 2);
    stylesSSR['& > *'] = (0, _extends2.default)({}, styles['& > *'], orderStyleSSR, {
      margin: defaultSpacing / 2,
      width: `calc(${(100 / ownerState.defaultColumns).toFixed(2)}% - ${defaultSpacing}px)`
    });
    return (0, _extends2.default)({}, styles, stylesSSR);
  }
  const spacingValues = (0, _system.unstable_resolveBreakpointValues)({
    values: ownerState.spacing,
    breakpoints: theme.breakpoints.values
  });
  const transformer = (0, _system.createUnarySpacing)(theme);
  const spacingStyleFromPropValue = propValue => {
    let spacing;
    // in case of string/number value
    if (typeof propValue === 'string' && !Number.isNaN(Number(propValue)) || typeof propValue === 'number') {
      const themeSpacingValue = Number(propValue);
      spacing = (0, _system.getValue)(transformer, themeSpacingValue);
    } else {
      spacing = propValue;
    }
    return (0, _extends2.default)({
      margin: `calc(0px - (${spacing} / 2))`,
      '& > *': {
        margin: `calc(${spacing} / 2)`
      }
    }, ownerState.maxColumnHeight && {
      height: typeof spacing === 'number' ? Math.ceil(ownerState.maxColumnHeight + parseToNumber(spacing)) : `calc(${ownerState.maxColumnHeight}px + ${spacing})`
    });
  };
  styles = (0, _utils.deepmerge)(styles, (0, _system.handleBreakpoints)({
    theme
  }, spacingValues, spacingStyleFromPropValue));
  const columnValues = (0, _system.unstable_resolveBreakpointValues)({
    values: ownerState.columns,
    breakpoints: theme.breakpoints.values
  });
  const columnStyleFromPropValue = propValue => {
    const columnValue = Number(propValue);
    const width = `${(100 / columnValue).toFixed(2)}%`;
    const spacing = typeof spacingValues === 'string' && !Number.isNaN(Number(spacingValues)) || typeof spacingValues === 'number' ? (0, _system.getValue)(transformer, Number(spacingValues)) : '0px';
    return {
      '& > *': {
        width: `calc(${width} - ${spacing})`
      }
    };
  };
  styles = (0, _utils.deepmerge)(styles, (0, _system.handleBreakpoints)({
    theme
  }, columnValues, columnStyleFromPropValue));

  // configure width for responsive spacing values
  if (typeof spacingValues === 'object') {
    styles = (0, _utils.deepmerge)(styles, (0, _system.handleBreakpoints)({
      theme
    }, spacingValues, (propValue, breakpoint) => {
      if (breakpoint) {
        const themeSpacingValue = Number(propValue);
        const lastBreakpoint = Object.keys(columnValues).pop();
        const spacing = (0, _system.getValue)(transformer, themeSpacingValue);
        const column = typeof columnValues === 'object' ? columnValues[breakpoint] || columnValues[lastBreakpoint] : columnValues;
        const width = `${(100 / column).toFixed(2)}%`;
        return {
          '& > *': {
            width: `calc(${width} - ${spacing})`
          }
        };
      }
      return null;
    }));
  }
  return styles;
};
exports.getStyle = getStyle;
const MasonryRoot = (0, _styles.styled)('div', {
  name: 'MuiMasonry',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root];
  }
})(getStyle);
const Masonry = /*#__PURE__*/React.forwardRef(function Masonry(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiMasonry'
  });
  const {
      children,
      className,
      component = 'div',
      columns = 4,
      spacing = 1,
      defaultColumns,
      defaultHeight,
      defaultSpacing
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const masonryRef = React.useRef();
  const [maxColumnHeight, setMaxColumnHeight] = React.useState();
  const isSSR = !maxColumnHeight && defaultHeight && defaultColumns !== undefined && defaultSpacing !== undefined;
  const [numberOfLineBreaks, setNumberOfLineBreaks] = React.useState(isSSR ? defaultColumns - 1 : 0);
  const ownerState = (0, _extends2.default)({}, props, {
    spacing,
    columns,
    maxColumnHeight,
    defaultColumns,
    defaultHeight,
    defaultSpacing,
    isSSR
  });
  const classes = useUtilityClasses(ownerState);
  const handleResize = masonryChildren => {
    if (!masonryRef.current || !masonryChildren || masonryChildren.length === 0) {
      return;
    }
    const masonry = masonryRef.current;
    const masonryFirstChild = masonryRef.current.firstChild;
    const parentWidth = masonry.clientWidth;
    const firstChildWidth = masonryFirstChild.clientWidth;
    if (parentWidth === 0 || firstChildWidth === 0) {
      return;
    }
    const firstChildComputedStyle = window.getComputedStyle(masonryFirstChild);
    const firstChildMarginLeft = parseToNumber(firstChildComputedStyle.marginLeft);
    const firstChildMarginRight = parseToNumber(firstChildComputedStyle.marginRight);
    const currentNumberOfColumns = Math.round(parentWidth / (firstChildWidth + firstChildMarginLeft + firstChildMarginRight));
    const columnHeights = new Array(currentNumberOfColumns).fill(0);
    let skip = false;
    masonry.childNodes.forEach(child => {
      if (child.nodeType !== Node.ELEMENT_NODE || child.dataset.class === 'line-break' || skip) {
        return;
      }
      const childComputedStyle = window.getComputedStyle(child);
      const childMarginTop = parseToNumber(childComputedStyle.marginTop);
      const childMarginBottom = parseToNumber(childComputedStyle.marginBottom);
      // if any one of children isn't rendered yet, masonry's height shouldn't be computed yet
      const childHeight = parseToNumber(childComputedStyle.height) ? Math.ceil(parseToNumber(childComputedStyle.height)) + childMarginTop + childMarginBottom : 0;
      if (childHeight === 0) {
        skip = true;
        return;
      }
      // if there is a nested image that isn't rendered yet, masonry's height shouldn't be computed yet
      for (let i = 0; i < child.childNodes.length; i += 1) {
        const nestedChild = child.childNodes[i];
        if (nestedChild.tagName === 'IMG' && nestedChild.clientHeight === 0) {
          skip = true;
          break;
        }
      }
      if (!skip) {
        // find the current shortest column (where the current item will be placed)
        const currentMinColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
        columnHeights[currentMinColumnIndex] += childHeight;
        const order = currentMinColumnIndex + 1;
        child.style.order = order;
      }
    });
    if (!skip) {
      // In React 18, state updates in a ResizeObserver's callback are happening after the paint which causes flickering
      // when doing some visual updates in it. Using flushSync ensures that the dom will be painted after the states updates happen
      // Related issue - https://github.com/facebook/react/issues/24331
      ReactDOM.flushSync(() => {
        setMaxColumnHeight(Math.max(...columnHeights));
        setNumberOfLineBreaks(currentNumberOfColumns > 0 ? currentNumberOfColumns - 1 : 0);
      });
    }
  };
  (0, _utils.unstable_useEnhancedEffect)(() => {
    // IE and old browsers are not supported
    if (typeof ResizeObserver === 'undefined') {
      return undefined;
    }
    let animationFrame;
    const resizeObserver = new ResizeObserver(() => {
      // see https://github.com/mui/material-ui/issues/36909
      animationFrame = window.requestAnimationFrame(handleResize);
    });
    if (masonryRef.current) {
      masonryRef.current.childNodes.forEach(childNode => {
        resizeObserver.observe(childNode);
      });
    }
    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [columns, spacing, children]);
  const handleRef = (0, _utils.unstable_useForkRef)(ref, masonryRef);

  //  columns are likely to have different heights and hence can start to merge;
  //  a line break at the end of each column prevents columns from merging
  const lineBreaks = new Array(numberOfLineBreaks).fill('').map((_, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    "data-class": "line-break",
    style: (0, _extends2.default)({}, lineBreakStyle, {
      order: index + 1
    })
  }, index));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(MasonryRoot, (0, _extends2.default)({
    as: component,
    className: (0, _clsx.default)(classes.root, className),
    ref: handleRef,
    ownerState: ownerState
  }, other, {
    children: [children, lineBreaks]
  }));
});
 false ? 0 : void 0;
var _default = Masonry;
exports["default"] = _default;

/***/ }),

/***/ 76281:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  masonryClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _Masonry.default;
  }
}));
Object.defineProperty(exports, "masonryClasses", ({
  enumerable: true,
  get: function () {
    return _masonryClasses.default;
  }
}));
var _Masonry = _interopRequireDefault(__webpack_require__(91301));
var _masonryClasses = _interopRequireWildcard(__webpack_require__(39895));
Object.keys(_masonryClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _masonryClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _masonryClasses[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 39895:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(27574);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getMasonryUtilityClass = getMasonryUtilityClass;
var _generateUtilityClass = _interopRequireDefault(__webpack_require__(62736));
var _generateUtilityClasses = _interopRequireDefault(__webpack_require__(32434));
function getMasonryUtilityClass(slot) {
  return (0, _generateUtilityClass.default)('MuiMasonry', slot);
}
const masonryClasses = (0, _generateUtilityClasses.default)('MuiMasonry', ['root']);
var _default = masonryClasses;
exports["default"] = _default;

/***/ })

};
;