(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8512],{26612:function(t,e,r){"use strict";r.r(e),r.d(e,{CountUp:function(){return i}});var n=function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,r){var i=this;this.endVal=e,this.options=r,this.version="2.6.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var r=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=r?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(t){var e,r,n,a=(Math.abs(t).toFixed(i.options.decimalPlaces)+"").split(".");if(e=a[0],r=a.length>1?i.options.decimal+a[1]:"",i.options.useGrouping){n="";for(var o=3,s=0,u=0,l=e.length;u<l;++u)i.options.useIndianSeparators&&4===u&&(o=2,s=1),0!==u&&s%o==0&&(n=i.options.separator+n),s++,n=e[l-u-1]+n;e=n}return i.options.numerals&&i.options.numerals.length&&(e=e.replace(/[0-9]/g,function(t){return i.options.numerals[+t]}),r=r.replace(/[0-9]/g,function(t){return i.options.numerals[+t]})),(t<0?"-":"")+i.options.prefix+e+r+i.options.suffix},this.easeOutExpo=function(t,e,r,n){return r*(1-Math.pow(2,-10*t/n))*1024/1023+e},this.options=n(n({},this.defaults),r),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return i.handleScroll(i)}),window.onscroll=function(){window.onScrollFns.forEach(function(t){return t()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,r=t.el.getBoundingClientRect(),n=r.top+window.pageYOffset,i=r.top+r.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>i||n>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>t,Math.abs(t-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var r=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,r):"INPUT"===this.el.tagName?this.el.value=r:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=r:this.el.innerHTML=r}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},7578:function(t,e,r){var n,i;void 0!==(i="function"==typeof(n=function(){var t,e,r,n,i,a={},o={},s={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},u={currentLocale:s.currentLocale,zeroFormat:s.zeroFormat,nullFormat:s.nullFormat,defaultFormat:s.defaultFormat,scalePercentBy100:s.scalePercentBy100};function l(t,e){this._input=t,this._value=e}return(n=function(t){var e,r,o,s;if(n.isNumeral(t))e=t.value();else if(0===t||void 0===t)e=0;else if(null===t||i.isNaN(t))e=null;else if("string"==typeof t){if(u.zeroFormat&&t===u.zeroFormat)e=0;else if(u.nullFormat&&t===u.nullFormat||!t.replace(/[^0-9]+/g,"").length)e=null;else{for(r in a)if((s="function"==typeof a[r].regexps.unformat?a[r].regexps.unformat():a[r].regexps.unformat)&&t.match(s)){o=a[r].unformat;break}e=(o=o||n._.stringToNumber)(t)}}else e=Number(t)||null;return new l(t,e)}).version="2.0.6",n.isNumeral=function(t){return t instanceof l},n._=i={numberToFormat:function(t,e,r){var i,a,s,u,l,c,f,p=o[n.options.currentLocale],m=!1,h=!1,d=0,b="",g="",v=!1;if(a=Math.abs(t=t||0),n._.includes(e,"(")?(m=!0,e=e.replace(/[\(|\)]/g,"")):(n._.includes(e,"+")||n._.includes(e,"-"))&&(l=n._.includes(e,"+")?e.indexOf("+"):t<0?e.indexOf("-"):-1,e=e.replace(/[\+|\-]/g,"")),n._.includes(e,"a")&&(i=!!(i=e.match(/a(k|m|b|t)?/))&&i[1],n._.includes(e," a")&&(b=" "),e=e.replace(RegExp(b+"a[kmbt]?"),""),a>=1e12&&!i||"t"===i?(b+=p.abbreviations.trillion,t/=1e12):a<1e12&&a>=1e9&&!i||"b"===i?(b+=p.abbreviations.billion,t/=1e9):a<1e9&&a>=1e6&&!i||"m"===i?(b+=p.abbreviations.million,t/=1e6):(a<1e6&&a>=1e3&&!i||"k"===i)&&(b+=p.abbreviations.thousand,t/=1e3)),n._.includes(e,"[.]")&&(h=!0,e=e.replace("[.]",".")),s=t.toString().split(".")[0],u=e.split(".")[1],c=e.indexOf(","),d=(e.split(".")[0].split(",")[0].match(/0/g)||[]).length,u?(n._.includes(u,"[")?(u=(u=u.replace("]","")).split("["),g=n._.toFixed(t,u[0].length+u[1].length,r,u[1].length)):g=n._.toFixed(t,u.length,r),s=g.split(".")[0],g=n._.includes(g,".")?p.delimiters.decimal+g.split(".")[1]:"",h&&0===Number(g.slice(1))&&(g="")):s=n._.toFixed(t,0,r),b&&!i&&Number(s)>=1e3&&b!==p.abbreviations.trillion)switch(s=String(Number(s)/1e3),b){case p.abbreviations.thousand:b=p.abbreviations.million;break;case p.abbreviations.million:b=p.abbreviations.billion;break;case p.abbreviations.billion:b=p.abbreviations.trillion}if(n._.includes(s,"-")&&(s=s.slice(1),v=!0),s.length<d)for(var y=d-s.length;y>0;y--)s="0"+s;return c>-1&&(s=s.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+p.delimiters.thousands)),0===e.indexOf(".")&&(s=""),f=s+g+(b||""),m?f=(m&&v?"(":"")+f+(m&&v?")":""):l>=0?f=0===l?(v?"-":"+")+f:f+(v?"-":"+"):v&&(f="-"+f),f},stringToNumber:function(t){var e,r,n,i=o[u.currentLocale],a=t,s={thousand:3,million:6,billion:9,trillion:12};if(u.zeroFormat&&t===u.zeroFormat)r=0;else if(u.nullFormat&&t===u.nullFormat||!t.replace(/[^0-9]+/g,"").length)r=null;else{for(e in r=1,"."!==i.delimiters.decimal&&(t=t.replace(/\./g,"").replace(i.delimiters.decimal,".")),s)if(n=RegExp("[^a-zA-Z]"+i.abbreviations[e]+"(?:\\)|(\\"+i.currency.symbol+")?(?:\\))?)?$"),a.match(n)){r*=Math.pow(10,s[e]);break}r*=((t.split("-").length+Math.min(t.split("(").length-1,t.split(")").length-1))%2?1:-1)*Number(t=t.replace(/[^0-9\.]+/g,""))}return r},isNaN:function(t){return"number"==typeof t&&isNaN(t)},includes:function(t,e){return -1!==t.indexOf(e)},insert:function(t,e,r){return t.slice(0,r)+e+t.slice(r)},reduce:function(t,e){if(this===null)throw TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof e)throw TypeError(e+" is not a function");var r,n=Object(t),i=n.length>>>0,a=0;if(3==arguments.length)r=arguments[2];else{for(;a<i&&!(a in n);)a++;if(a>=i)throw TypeError("Reduce of empty array with no initial value");r=n[a++]}for(;a<i;a++)a in n&&(r=e(r,n[a],a,n));return r},multiplier:function(t){var e=t.toString().split(".");return e.length<2?1:Math.pow(10,e[1].length)},correctionFactor:function(){var t=Array.prototype.slice.call(arguments);return t.reduce(function(t,e){var r=i.multiplier(e);return t>r?t:r},1)},toFixed:function(t,e,r,n){var i,a,o,s,u=t.toString().split("."),l=e-(n||0);return o=Math.pow(10,i=2===u.length?Math.min(Math.max(u[1].length,l),e):l),s=(r(t+"e+"+i)/o).toFixed(i),n>e-i&&(a=RegExp("\\.?0{1,"+(n-(e-i))+"}$"),s=s.replace(a,"")),s}},n.options=u,n.formats=a,n.locales=o,n.locale=function(t){return t&&(u.currentLocale=t.toLowerCase()),u.currentLocale},n.localeData=function(t){if(!t)return o[u.currentLocale];if(!o[t=t.toLowerCase()])throw Error("Unknown locale : "+t);return o[t]},n.reset=function(){for(var t in s)u[t]=s[t]},n.zeroFormat=function(t){u.zeroFormat="string"==typeof t?t:null},n.nullFormat=function(t){u.nullFormat="string"==typeof t?t:null},n.defaultFormat=function(t){u.defaultFormat="string"==typeof t?t:"0.0"},n.register=function(t,e,r){if(e=e.toLowerCase(),this[t+"s"][e])throw TypeError(e+" "+t+" already registered.");return this[t+"s"][e]=r,r},n.validate=function(t,e){var r,i,a,o,s,u,l,c;if("string"!=typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{l=n.localeData(e)}catch(t){l=n.localeData(n.locale())}return a=l.currency.symbol,s=l.abbreviations,r=l.delimiters.decimal,i="."===l.delimiters.thousands?"\\.":l.delimiters.thousands,(null===(c=t.match(/^[^\d]+/))||(t=t.substr(1),c[0]===a))&&(null===(c=t.match(/[^\d]+$/))||(t=t.slice(0,-1),c[0]===s.thousand||c[0]===s.million||c[0]===s.billion||c[0]===s.trillion))&&(u=RegExp(i+"{2}"),!t.match(/[^\d.,]/g)&&!((o=t.split(r)).length>2)&&(o.length<2?!!o[0].match(/^\d+.*\d$/)&&!o[0].match(u):1===o[0].length?!!o[0].match(/^\d+$/)&&!o[0].match(u)&&!!o[1].match(/^\d+$/):!!o[0].match(/^\d+.*\d$/)&&!o[0].match(u)&&!!o[1].match(/^\d+$/)))},n.fn=l.prototype={clone:function(){return n(this)},format:function(t,e){var r,i,o,s=this._value,l=t||u.defaultFormat;if(e=e||Math.round,0===s&&null!==u.zeroFormat)i=u.zeroFormat;else if(null===s&&null!==u.nullFormat)i=u.nullFormat;else{for(r in a)if(l.match(a[r].regexps.format)){o=a[r].format;break}i=(o=o||n._.numberToFormat)(s,l,e)}return i},value:function(){return this._value},input:function(){return this._input},set:function(t){return this._value=Number(t),this},add:function(t){var e=i.correctionFactor.call(null,this._value,t);return this._value=i.reduce([this._value,t],function(t,r,n,i){return t+Math.round(e*r)},0)/e,this},subtract:function(t){var e=i.correctionFactor.call(null,this._value,t);return this._value=i.reduce([t],function(t,r,n,i){return t-Math.round(e*r)},Math.round(this._value*e))/e,this},multiply:function(t){return this._value=i.reduce([this._value,t],function(t,e,r,n){var a=i.correctionFactor(t,e);return Math.round(t*a)*Math.round(e*a)/Math.round(a*a)},1),this},divide:function(t){return this._value=i.reduce([this._value,t],function(t,e,r,n){var a=i.correctionFactor(t,e);return Math.round(t*a)/Math.round(e*a)}),this},difference:function(t){return Math.abs(n(this._value).subtract(t).value())}},n.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(t){var e=t%10;return 1==~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th"},currency:{symbol:"$"}}),n.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,e,r){var i,a=n._.includes(e," BPS")?" ":"";return t*=1e4,e=e.replace(/\s?BPS/,""),i=n._.numberToFormat(t,e,r),n._.includes(i,")")?((i=i.split("")).splice(-1,0,a+"BPS"),i=i.join("")):i=i+a+"BPS",i},unformat:function(t){return+(1e-4*n._.stringToNumber(t)).toFixed(15)}}),e={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},r="("+(r=(t={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(e.suffixes.filter(function(e){return 0>t.suffixes.indexOf(e)})).join("|")).replace("B","B(?!PS)")+")",n.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(r)},format:function(r,i,a){var o,s,u,l=n._.includes(i,"ib")?e:t,c=n._.includes(i," b")||n._.includes(i," ib")?" ":"";for(o=0,i=i.replace(/\s?i?b/,"");o<=l.suffixes.length;o++)if(s=Math.pow(l.base,o),u=Math.pow(l.base,o+1),null===r||0===r||r>=s&&r<u){c+=l.suffixes[o],s>0&&(r/=s);break}return n._.numberToFormat(r,i,a)+c},unformat:function(r){var i,a,o=n._.stringToNumber(r);if(o){for(i=t.suffixes.length-1;i>=0;i--){if(n._.includes(r,t.suffixes[i])){a=Math.pow(t.base,i);break}if(n._.includes(r,e.suffixes[i])){a=Math.pow(e.base,i);break}}o*=a||1}return o}}),n.register("format","currency",{regexps:{format:/(\$)/},format:function(t,e,r){var i,a,o=n.locales[n.options.currentLocale],s={before:e.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:e.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(e=e.replace(/\s?\$\s?/,""),i=n._.numberToFormat(t,e,r),t>=0?(s.before=s.before.replace(/[\-\(]/,""),s.after=s.after.replace(/[\-\)]/,"")):!(t<0)||n._.includes(s.before,"-")||n._.includes(s.before,"(")||(s.before="-"+s.before),a=0;a<s.before.length;a++)switch(s.before[a]){case"$":i=n._.insert(i,o.currency.symbol,a);break;case" ":i=n._.insert(i," ",a+o.currency.symbol.length-1)}for(a=s.after.length-1;a>=0;a--)switch(s.after[a]){case"$":i=a===s.after.length-1?i+o.currency.symbol:n._.insert(i,o.currency.symbol,-(s.after.length-(1+a)));break;case" ":i=a===s.after.length-1?i+" ":n._.insert(i," ",-(s.after.length-(1+a)+o.currency.symbol.length-1))}return i}}),n.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,e,r){var i=("number"!=typeof t||n._.isNaN(t)?"0e+0":t.toExponential()).split("e");return e=e.replace(/e[\+|\-]{1}0/,""),n._.numberToFormat(Number(i[0]),e,r)+"e"+i[1]},unformat:function(t){var e=n._.includes(t,"e+")?t.split("e+"):t.split("e-"),r=Number(e[0]),i=Number(e[1]);return i=n._.includes(t,"e-")?i*=-1:i,n._.reduce([r,Math.pow(10,i)],function(t,e,r,i){var a=n._.correctionFactor(t,e);return t*a*(e*a)/(a*a)},1)}}),n.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,e,r){var i=n.locales[n.options.currentLocale],a=n._.includes(e," o")?" ":"";return e=e.replace(/\s?o/,""),a+=i.ordinal(t),n._.numberToFormat(t,e,r)+a}}),n.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,e,r){var i,a=n._.includes(e," %")?" ":"";return n.options.scalePercentBy100&&(t*=100),e=e.replace(/\s?\%/,""),i=n._.numberToFormat(t,e,r),n._.includes(i,")")?((i=i.split("")).splice(-1,0,a+"%"),i=i.join("")):i=i+a+"%",i},unformat:function(t){var e=n._.stringToNumber(t);return n.options.scalePercentBy100?.01*e:e}}),n.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(t,e,r){var n=Math.floor(t/60/60),i=Math.floor((t-3600*n)/60),a=Math.round(t-3600*n-60*i);return n+":"+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)},unformat:function(t){var e=t.split(":"),r=0;return 3===e.length?r+=3600*Number(e[0])+60*Number(e[1])+Number(e[2]):2===e.length&&(r+=60*Number(e[0])+Number(e[1])),Number(r)}}),n})?n.call(e,r,e,t):n)&&(t.exports=i)},68895:function(t,e,r){"use strict";var n=r(86006),i=r(26612);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach(function(e){var n,i;n=e,i=r[e],(n=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(n))in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect;function f(t){var e=n.useRef(t);return c(function(){e.current=t}),n.useCallback(function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return e.current.apply(void 0,r)},[])}var p=function(t,e){var r=e.decimal,n=e.decimals,a=e.duration,o=e.easingFn,s=e.end,u=e.formattingFn,l=e.numerals,c=e.prefix,f=e.separator,p=e.start,m=e.suffix,h=e.useEasing,d=e.useGrouping,b=e.useIndianSeparators,g=e.enableScrollSpy,v=e.scrollSpyDelay,y=e.scrollSpyOnce;return new i.CountUp(t,s,{startVal:p,duration:a,decimal:r,decimalPlaces:n,easingFn:o,formattingFn:u,numerals:l,separator:f,prefix:c,suffix:m,useEasing:h,useIndianSeparators:b,useGrouping:d,enableScrollSpy:g,scrollSpyDelay:v,scrollSpyOnce:y})},m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],h={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},d=function(t){var e=Object.fromEntries(Object.entries(t).filter(function(t){return void 0!==(function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,a,o,s=[],u=!0,l=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(s.push(n.value),s.length!==e);u=!0);}catch(t){l=!0,i=t}finally{try{if(!u&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}(t,2)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1]})),r=n.useMemo(function(){return o(o({},h),e)},[t]),i=r.ref,a=r.startOnMount,s=r.enableReinitialize,c=r.delay,d=r.onEnd,b=r.onStart,g=r.onPauseResume,v=r.onReset,y=r.onUpdate,w=u(r,m),F=n.useRef(),E=n.useRef(),V=n.useRef(!1),_=f(function(){return p("string"==typeof i?i:i.current,w)}),x=f(function(t){var e=F.current;if(e&&!t)return e;var r=_();return F.current=r,r}),S=f(function(){var t=function(){return x(!0).start(function(){null==d||d({pauseResume:O,reset:N,start:M,update:P})})};c&&c>0?E.current=setTimeout(t,1e3*c):t(),null==b||b({pauseResume:O,reset:N,update:P})}),O=f(function(){x().pauseResume(),null==g||g({reset:N,start:M,update:P})}),N=f(function(){x().el&&(E.current&&clearTimeout(E.current),x().reset(),null==v||v({pauseResume:O,start:M,update:P}))}),P=f(function(t){x().update(t),null==y||y({pauseResume:O,reset:N,start:M})}),M=f(function(){N(),S()}),j=f(function(t){a&&(t&&N(),S())});return n.useEffect(function(){V.current?s&&j(!0):(V.current=!0,j())},[s,V,j,c,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),n.useEffect(function(){return function(){N()}},[N]),{start:M,pauseResume:O,reset:N,update:P,getCountUp:x}},b=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,r=t.redraw,i=t.containerProps,a=t.children,l=t.style,c=u(t,b),p=n.useRef(null),m=n.useRef(!1),h=d(o(o({},c),{},{ref:p,startOnMount:"function"!=typeof a||0===t.delay,enableReinitialize:!1})),g=h.start,v=h.reset,y=h.update,w=h.pauseResume,F=h.getCountUp,E=f(function(){g()}),V=f(function(e){t.preserveValue||v(),y(e)}),_=f(function(){if("function"==typeof t.children&&!(p.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}F()});n.useEffect(function(){_()},[_]),n.useEffect(function(){m.current&&V(t.end)},[t.end,V]);var x=r&&t;return(n.useEffect(function(){r&&m.current&&E()},[E,r,x]),n.useEffect(function(){!r&&m.current&&E()},[E,r,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),n.useEffect(function(){m.current=!0},[]),"function"==typeof a)?a({countUpRef:p,start:g,reset:v,update:y,pauseResume:w,getCountUp:F}):n.createElement("span",s({className:e,ref:p,style:l},i),void 0!==t.start?F().formattingFn(t.start):"")}},93602:function(t,e,r){"use strict";r.d(e,{I:function(){return i}});var n=r(52864);function i(t,e,r){var i;if("string"==typeof t){let a=document;e&&((0,n.k)(!!e.current,"Scope provided, but no element detected."),a=e.current),r?(null!==(i=r[t])&&void 0!==i||(r[t]=a.querySelectorAll(t)),t=r[t]):t=a.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}},52864:function(t,e,r){"use strict";r.d(e,{K:function(){return i},k:function(){return a}});var n=r(19153);let i=n.Z,a=n.Z},19153:function(t,e,r){"use strict";r.d(e,{Z:function(){return n}});let n=t=>t},95803:function(t,e,r){"use strict";r.d(e,{Y:function(){return o}});var n=r(86006),i=r(93602);let a={any:0,all:1};function o(t,{root:e,margin:r,amount:o,once:s=!1}={}){let[u,l]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(!t.current||s&&u)return;let n={root:e&&e.current||void 0,margin:r,amount:"some"===o?"any":o};return function(t,e,{root:r,margin:n,amount:o="any"}={}){let s=(0,i.I)(t),u=new WeakMap,l=new IntersectionObserver(t=>{t.forEach(t=>{let r=u.get(t.target);if(!!r!==t.isIntersecting){if(t.isIntersecting){let r=e(t);"function"==typeof r?u.set(t.target,r):l.unobserve(t.target)}else r&&(r(t),u.delete(t.target))}})},{root:r,rootMargin:n,threshold:"number"==typeof o?o:a[o]});return s.forEach(t=>l.observe(t)),()=>l.disconnect()}(t.current,()=>(l(!0),s?void 0:()=>l(!1)),n)},[e,t,r,s]),u}}}]);