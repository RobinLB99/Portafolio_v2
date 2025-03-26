module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "QfWi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "5UA8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xVTo");
/* harmony import */ var _assets_img_logo_robinlugo_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sVqj");


var Home = function Home() {
  return h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].presentacion,
    id: "saludo"
  }, h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].contenedorSaludo
  }, h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].areaSaludo
  }, h("h1", null, "Hola!\uD83E\uDD1A", h("br", null), " Soy Robin, desarrollador de Software."), h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].saludoLinks
  }, h("a", {
    href: "https://github.com/robinlb99/",
    target: "_blank",
    className: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].githubLink,
    rel: "noreferrer"
  }, h("i", {
    className: "fa-brands fa-github"
  }), h("span", null, "Github")), h("a", {
    href: "https://docs.google.com/document/d/1TykjHesgyH-2p8eJYwe0WRX-3WXGagCu/edit?usp=sharing&ouid=113282831848628091773&rtpof=true&sd=true",
    target: "_blank",
    className: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].downloadLink,
    rel: "noreferrer"
  }, h("i", {
    className: "fa-solid fa-file"
  }), h("span", null, "CV")))), h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].saludoLogo
  }, h("img", {
    src: _assets_img_logo_robinlugo_logo_png__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "robin-logo"
  }))));
};
/* harmony default export */ __webpack_exports__["a"] = (Home);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "8fLt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"button":"button__Ws9Jl"});

/***/ }),

/***/ "DNkK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"projectCard":"projectCard__hqhu8","projectCardImage":"projectCardImage__3Ccmy","projectCardContent":"projectCardContent__7aXHw","projectCardTecnologies":"projectCardTecnologies__KXwep","projectCardButton":"projectCardButton__6fiLn","projectCardButtons":"projectCardButtons__-aykK"});

/***/ }),

/***/ "FjPA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YGJ3");

var ContactMe = function ContactMe() {
  return h("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].contactMe,
    id: "contact"
  }, h("h1", null, "Contactarme"), h("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].contactMeContainer
  }, h("a", {
    href: "https://linkedin.com/in/tnlgorobinlugo/",
    className: "".concat(_styles_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].contactMeItem, " text-decoration-none"),
    target: "_blank"
  }, h("i", {
    className: "fa-brands fa-linkedin"
  }), h("span", null, "LinkedIn")), h("a", {
    href: "mailto:lugoboero1999@gmail.com",
    className: "".concat(_styles_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].contactMeItem, " text-decoration-none"),
    target: "_blank",
    rel: "noopener noreferrer"
  }, h("i", {
    className: "fa-solid fa-at"
  }), h("span", null, "Correo Electr\xF3nico"))));
};
/* harmony default export */ __webpack_exports__["a"] = (ContactMe);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "KKVt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "a59941198f66f9804451fc70aa381841.png");

/***/ }),

/***/ "LUX8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"footer":"footer__zQuVr"});

/***/ }),

/***/ "NF/t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"aboutme":"aboutme__zwBK8","contenedor":"contenedor__TnSCa","informacion":"informacion__5ejEJ","titleSeccion":"titleSeccion__YDijs","foto":"foto__IXyCK"});

/***/ }),

/***/ "QRet":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useCallback */
/* unused harmony export useContext */
/* unused harmony export useDebugValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return y; });
/* unused harmony export useErrorBoundary */
/* unused harmony export useId */
/* unused harmony export useImperativeHandle */
/* unused harmony export useLayoutEffect */
/* unused harmony export useMemo */
/* unused harmony export useReducer */
/* unused harmony export useRef */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return d; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = preact__WEBPACK_IMPORTED_MODULE_0__["options"],
  e = c.__b,
  a = c.__r,
  v = c.diffed,
  l = c.__c,
  m = c.unmount,
  s = c.__;
function p(n, t) {
  c.__h && c.__h(r, n, o || t), o = 0;
  var u = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return n >= u.__.length && u.__.push({}), u.__[n];
}
function d(n) {
  return o = 1, h(D, n);
}
function h(n, u, i) {
  var o = p(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : D(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.__f)) {
    var f = function f(n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return !!n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !c || c.call(this, n, t, r);
      var i = o.__c.props !== n;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), c && c.call(this, n, t, r) || i;
    };
    r.__f = !0;
    var c = r.shouldComponentUpdate,
      e = r.componentWillUpdate;
    r.componentWillUpdate = function (n, t, r) {
      if (this.__e) {
        var u = c;
        c = void 0, f(n, t, r), c = u;
      }
      e && e.call(this, n, t, r);
    }, r.shouldComponentUpdate = f;
  }
  return o.__N || o.__;
}
function y(n, u) {
  var i = p(t++, 3);
  !c.__s && C(i.__H, u) && (i.__ = n, i.u = u, r.__H.__h.push(i));
}
function _(n, u) {
  var i = p(t++, 4);
  !c.__s && C(i.__H, u) && (i.__ = n, i.u = u, r.__h.push(i));
}
function A(n) {
  return o = 5, T(function () {
    return {
      current: n
    };
  }, []);
}
function F(n, t, r) {
  o = 6, _(function () {
    if ("function" == typeof n) {
      var r = n(t());
      return function () {
        n(null), r && "function" == typeof r && r();
      };
    }
    if (n) return n.current = t(), function () {
      return n.current = null;
    };
  }, null == r ? r : r.concat(n));
}
function T(n, r) {
  var u = p(t++, 7);
  return C(u.__H, r) && (u.__ = n(), u.__H = r, u.__h = n), u.__;
}
function q(n, t) {
  return o = 8, T(function () {
    return n;
  }, t);
}
function x(n) {
  var u = r.context[n.__c],
    i = p(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function P(n, t) {
  c.useDebugValue && c.useDebugValue(t ? t(n) : n);
}
function b(n) {
  var u = p(t++, 10),
    i = d();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function g() {
  var n = p(t++, 11);
  if (!n.__) {
    for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function j() {
  for (var n; n = f.shift();) if (n.__P && n.__H) try {
    n.__H.__h.forEach(z), n.__H.__h.forEach(B), n.__H.__h = [];
  } catch (t) {
    n.__H.__h = [], c.__e(t, n.__v);
  }
}
c.__b = function (n) {
  r = null, e && e(n);
}, c.__ = function (n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), s && s(n, t);
}, c.__r = function (n) {
  a && a(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (i.__h.forEach(z), i.__h.forEach(B), i.__h = [], t = 0)), u = r;
}, c.diffed = function (n) {
  v && v(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (1 !== f.push(t) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w)(j)), t.__H.__.forEach(function (n) {
    n.u && (n.__H = n.u), n.u = void 0;
  })), u = r = null;
}, c.__c = function (n, t) {
  t.some(function (n) {
    try {
      n.__h.forEach(z), n.__h = n.__h.filter(function (n) {
        return !n.__ || B(n);
      });
    } catch (r) {
      t.some(function (n) {
        n.__h && (n.__h = []);
      }), t = [], c.__e(r, n.__v);
    }
  }), l && l(n, t);
}, c.unmount = function (n) {
  m && m(n);
  var t,
    r = n.__c;
  r && r.__H && (r.__H.__.forEach(function (n) {
    try {
      z(n);
    } catch (n) {
      t = n;
    }
  }), r.__H = void 0, t && c.__e(t, r.__v));
};
var k = "function" == typeof requestAnimationFrame;
function w(n) {
  var t,
    r = function r() {
      clearTimeout(u), k && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  k && (t = requestAnimationFrame(r));
}
function z(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function B(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function C(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function D(n, t) {
  return "function" == typeof t ? t(n) : t;
}


/***/ }),

/***/ "QfWi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./style/index.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// EXTERNAL MODULE: ./components/color_mode/index.js
var color_mode = __webpack_require__("yf07");

// EXTERNAL MODULE: ./components/header/index.js
var header = __webpack_require__("QyV/");

// EXTERNAL MODULE: ./components/Home/index.js
var Home = __webpack_require__("5UA8");

// EXTERNAL MODULE: ./components/aboutme/index.js
var aboutme = __webpack_require__("ocrF");

// CONCATENATED MODULE: ./components/tecnologies/style.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var style = ({"tecnologies":"tecnologies__eaNAO","listTecnologies":"listTecnologies__4FMpM","tecnologyCard":"tecnologyCard__lsja3"});
// CONCATENATED MODULE: ./assets/icons/java.webp
/* harmony default export */ var java = (__webpack_require__.p + "84182918f1e54fe33ef0c7af6ff886d6.webp");
// CONCATENATED MODULE: ./assets/icons/spring.webp
/* harmony default export */ var spring = (__webpack_require__.p + "64c161730fa8a6d37c738950c787e57a.webp");
// CONCATENATED MODULE: ./assets/icons/springboot.webp
/* harmony default export */ var springboot = (__webpack_require__.p + "d6226b9a5ad13ac74eeb077dc57a394e.webp");
// CONCATENATED MODULE: ./assets/icons/jakarta.webp
/* harmony default export */ var jakarta = (__webpack_require__.p + "c9ad4fd1f100715a00ea979a01f76dda.webp");
// CONCATENATED MODULE: ./assets/icons/javascript.webp
/* harmony default export */ var javascript = (__webpack_require__.p + "46f7ed5b67e5ea895854ee8925953162.webp");
// CONCATENATED MODULE: ./assets/icons/preact.webp
/* harmony default export */ var preact = (__webpack_require__.p + "0879c255554de9f31ddef7cab7e0d22c.webp");
// CONCATENATED MODULE: ./assets/icons/bootstrap.webp
/* harmony default export */ var bootstrap = (__webpack_require__.p + "95601153d8e6b5ceb81affcceef65d2c.webp");
// CONCATENATED MODULE: ./assets/icons/sqlserver.webp
/* harmony default export */ var sqlserver = (__webpack_require__.p + "77836e3a628c8ede449c9b567679fd94.webp");
// CONCATENATED MODULE: ./assets/icons/mysql.webp
/* harmony default export */ var mysql = (__webpack_require__.p + "f5014dd8e9aa67e47fd61f179ef7aa3a.webp");
// CONCATENATED MODULE: ./assets/icons/mongo.webp
/* harmony default export */ var mongo = (__webpack_require__.p + "0538886990cb9985b6992057ff7b6468.webp");
// CONCATENATED MODULE: ./assets/data/tecnologies.js










var tecnologias = [{
  name: "Java",
  icon: java,
  link: "https://www.java.com/"
}, {
  name: "Spring Framework",
  icon: spring,
  link: "https://spring.io/"
}, {
  name: "Spring Boot",
  icon: springboot,
  link: "https://spring.io/projects/spring-boot"
}, {
  name: "Jakarta EE",
  icon: jakarta,
  link: "https://jakarta.ee/"
}, {
  name: "JavaScript",
  icon: javascript,
  link: "https://developer.mozilla.org/es/docs/Web/JavaScript"
}, {
  name: "Preact",
  icon: preact,
  link: "https://preactjs.com/"
}, {
  name: "Bootstrap",
  icon: bootstrap,
  link: "https://getbootstrap.com/"
}, {
  name: "SQL Server",
  icon: sqlserver,
  link: "https://www.microsoft.com/es-es/sql-server/sql-server-downloads"
}, {
  name: "MySQL",
  icon: mysql,
  link: "https://www.mysql.com/"
}, {
  name: "MongoDB",
  icon: mongo,
  link: "https://www.mongodb.com/"
}];
/* harmony default export */ var tecnologies = (tecnologias);
// CONCATENATED MODULE: ./components/tecnologies/index.js



var tecnologies_Tecnologies = function Tecnologies() {
  return Object(external_preact_["h"])("div", {
    className: style.tecnologies,
    id: "tecnologies"
  }, Object(external_preact_["h"])("h1", {
    className: style.titleSeccion
  }, "Tecnolog\xEDas"), Object(external_preact_["h"])("div", {
    className: style.listTecnologies
  }, tecnologies.map(function (tecnologia) {
    return Object(external_preact_["h"])("a", {
      target: "_blank",
      rel: "noreferrer",
      href: tecnologia.link,
      id: style.tecnologyCard,
      key: tecnologia.name
    }, Object(external_preact_["h"])("img", {
      src: tecnologia.icon,
      alt: tecnologia.name.concat("-icon"),
      height: 25
    }), Object(external_preact_["h"])("span", null, tecnologia.name));
  })));
};
/* harmony default export */ var components_tecnologies = (tecnologies_Tecnologies);
// EXTERNAL MODULE: ./components/offcanvas/index.js
var offcanvas = __webpack_require__("zn4M");

// EXTERNAL MODULE: ./components/projects/index.js
var projects = __webpack_require__("SQGV");

// EXTERNAL MODULE: ./components/contactme/index.js
var contactme = __webpack_require__("FjPA");

// EXTERNAL MODULE: ./components/footer/index.js
var footer = __webpack_require__("qinx");

// CONCATENATED MODULE: ./components/app.js










var app_App = function App() {
  return Object(external_preact_["h"])("div", {
    id: "app"
  }, Object(external_preact_["h"])(color_mode["a" /* default */], null), Object(external_preact_["h"])(header["a" /* default */], null), Object(external_preact_["h"])(offcanvas["a" /* default */], null), Object(external_preact_["h"])("main", null, Object(external_preact_["h"])(Home["a" /* default */], {
    path: "/"
  }), Object(external_preact_["h"])(aboutme["a" /* default */], {
    path: "/AboutMe"
  }), Object(external_preact_["h"])(components_tecnologies, {
    path: "/Tecnologies"
  }), Object(external_preact_["h"])(projects["a" /* default */], {
    path: "/Projects"
  }), Object(external_preact_["h"])(contactme["a" /* default */], {
    path: "/ContactMe"
  })), Object(external_preact_["h"])(footer["a" /* default */], null));
};
/* harmony default export */ var app = (app_App);
// CONCATENATED MODULE: ./index.js


/* harmony default export */ var index = __webpack_exports__["default"] = (app);

/***/ }),

/***/ "QxSt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./assets/img/projects/portafolio-v2.webp
/* harmony default export */ var portafolio_v2 = (__webpack_require__.p + "b36d3a18f6074175eb978a7edaf12b08.webp");
// CONCATENATED MODULE: ./assets/img/projects/libreria.webp
/* harmony default export */ var libreria = (__webpack_require__.p + "d4634a687a46f32f08c1df8224d6a5ed.webp");
// CONCATENATED MODULE: ./assets/img/projects/tienda.webp
/* harmony default export */ var tienda = (__webpack_require__.p + "4a9c892391e8e5271d0182a7639333c2.webp");
// CONCATENATED MODULE: ./assets/img/projects/calculadora.webp
/* harmony default export */ var calculadora = (__webpack_require__.p + "e6e4fe4ef258908c45518496a66cece9.webp");
// CONCATENATED MODULE: ./assets/img/projects/portafolio-v1.webp
/* harmony default export */ var portafolio_v1 = (__webpack_require__.p + "223dc62957c789122b3ca21462123111.webp");
// CONCATENATED MODULE: ./assets/data/proyectos.js





var projects = [{
  id: 7,
  title: 'ArchiveNest: Gestor Documental',
  description: 'Software para la digitalización, organización, almacenamiento y búsqueda de documentos.',
  image: 'https://placehold.co/600x400',
  tecnologies: ['Java', 'Spring Boot', 'HTMX', 'Thymeleaf', 'MariaDB'],
  url: null,
  github: 'https://github.com/robinlb99/ArchiveNest/',
  estado: 'En desarrollo'
}, {
  id: 6,
  title: 'Portafolio v2',
  description: 'Portafolio personal creado con Preact y Bootstrap.',
  image: portafolio_v2,
  tecnologies: ['Preact', 'Bootstrap'],
  url: null,
  github: 'https://github.com/robinlb99/Portafolio_v2/',
  estado: 'Terminado'
}, {
  id: 5,
  title: 'TECHBIT',
  description: 'Sistema de tickets de soporte Techbit para la gestion de incidencias y solicitudes de los usuarios.',
  image: 'https://placehold.co/600x400',
  tecnologies: ['JakartaEE', 'JSP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  url: null,
  github: 'https://github.com/robinlb99/TECHBIT/',
  estado: 'Terminado'
}, {
  id: 4,
  title: 'Software de Gestión de Liberia',
  description: 'Software de gestión de librería con base de datos.',
  image: libreria,
  tecnologies: ['JavaEE', 'JSP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  url: null,
  github: 'https://github.com/robinlb99/Tienda_de_libros/',
  estado: 'Terminado'
}, {
  id: 3,
  title: 'Software de Gestión de Tienda',
  description: 'Software de gestión de tienda con base de datos.',
  image: tienda,
  tecnologies: ['Java', 'Java Swing', 'MySQL'],
  url: null,
  github: 'https://github.com/robinlb99/Tienda/',
  estado: 'Terminado'
}, {
  id: 2,
  title: 'Portafolio v1',
  description: 'Primera version de mi Portafolio personal creado con HTML, CSS y JavaScript.',
  image: portafolio_v1,
  tecnologies: ['HTML', 'CSS', 'JavaScript'],
  url: 'https://robinlb99.github.io/Mi-portafolio/',
  github: 'https://github.com/robinlb99/Mi-portafolio/',
  estado: 'Terminado'
}, {
  id: 1,
  title: 'Calculadora',
  description: 'Calculadora de operaciones matemáticas básicas.',
  image: calculadora,
  tecnologies: ['HTML', 'CSS', 'JavaScript'],
  url: 'https://robinlb99.github.io/Calculadora/',
  github: 'https://github.com/robinlb99/Calculadora/',
  estado: 'Terminado'
}];
/* harmony default export */ var proyectos = __webpack_exports__["a"] = (projects);

/***/ }),

/***/ "QyV/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ySiU");
/* harmony import */ var _assets_img_logo_robinlugo_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sVqj");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QRet");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var Header = function Header() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useState */ "b"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isScrolled = _useState2[0],
    setIsScrolled = _useState2[1];
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__[/* useEffect */ "a"])(function () {
    var handleScroll = function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return h("header", {
    className: "".concat(_style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].header, " ").concat(isScrolled ? _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].scrolled : '')
  }, h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].logoMenu
  }, h("button", {
    type: "submit",
    className: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].menu,
    "data-bs-toggle": "offcanvas",
    "data-bs-target": "#nav_menu_offcanvas",
    "aria-controls": "nav_menu_offcanvas"
  }, h("i", {
    className: "fa-solid fa-bars"
  })), h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].logoContainer
  }, h("img", {
    src: _assets_img_logo_robinlugo_logo_png__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "robin-logo",
    height: "32"
  }), h("span", null, "Robin Joel Lugo Boero"))), h("nav", null, h("a", {
    activeClassName: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].active,
    href: "#saludo"
  }, "Inicio"), h("a", {
    activeClassName: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].active,
    href: "#aboutme"
  }, "Sobre mi"), h("a", {
    activeClassName: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].active,
    href: "#tecnologies"
  }, "Tecnolog\xEDas"), h("a", {
    activeClassName: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].active,
    href: "#my-projects"
  }, "Proyectos"), h("a", {
    activeClassName: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].active,
    href: "#contact"
  }, "Contactarme")));
};
/* harmony default export */ __webpack_exports__["a"] = (Header);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "SQGV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("noLZ");
/* harmony import */ var _assets_data_proyectos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QxSt");
/* harmony import */ var _project_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WAKQ");



var Projects = function Projects() {
  return h("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].projects,
    id: "my-projects"
  }, h("h1", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].titleSeccion
  }, "Proyectos"), h("div", {
    className: "".concat(_styles_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].projectsContainer)
  }, _assets_data_proyectos__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].map(function (project) {
    return project.estado === 'Terminado' && h(_project_card__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      key: 'project-'.concat(project.id),
      project: project
    });
  })));
};
/* harmony default export */ __webpack_exports__["a"] = (Projects);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "WAKQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("DNkK");

var ProjectCard = function ProjectCard(_ref) {
  var project = _ref.project;
  return h("div", {
    className: "".concat(_styles_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].projectCard)
  }, h("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].projectCardImage
  }, h("img", {
    src: project.image,
    alt: project.title
  })), h("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].projectCardContent
  }, h("h2", null, project.title), h("p", null, project.description), h("div", {
    className: "".concat(_styles_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].projectCardTecnologies, " d-flex flex-wrap gap-2 mb-3")
  }, project.tecnologies.map(function (tecnology) {
    return h("span", {
      key: tecnology
    }, tecnology);
  })), h("div", {
    className: "d-flex gap-3 justify-content-center ".concat(_styles_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].projectCardButtons)
  }, project.url && h("a", {
    className: "".concat(_styles_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].projectCardButton, " d-flex gap-2 align-items-center"),
    href: project.url,
    target: "_blank",
    rel: "noreferrer"
  }, h("i", {
    className: "fa-solid fa-globe"
  }), h("span", null, "Ver")), project.github && h("a", {
    className: "".concat(_styles_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].projectCardButton, " d-flex gap-2 align-items-center"),
    href: project.github,
    target: "_blank",
    rel: "noreferrer"
  }, h("i", {
    className: "fa-brands fa-github"
  }), h("span", null, "GitHub")))));
};
/* harmony default export */ __webpack_exports__["a"] = (ProjectCard);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "YGJ3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"contactMe":"contactMe__URtPp","contactMeContainer":"contactMeContainer__bPDvg"});

/***/ }),

/***/ "noLZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"projects":"projects__EgmAD","projectsContainer":"projectsContainer__RI-bR","titleSeccion":"titleSeccion__OuXee"});

/***/ }),

/***/ "ocrF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("NF/t");
/* harmony import */ var _assets_img_profile_FOTO_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKVt");


var AboutMe = function AboutMe() {
  return h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].aboutme,
    id: "aboutme"
  }, h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].contenedor
  }, h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].informacion
  }, h("h1", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].titleSeccion
  }, "Sobre mi"), h("p", null, "Soy un desarrollador de software en formaci\xF3n, apasionado por crear soluciones innovadoras y eficientes. Mi enfoque se centra en transformar ideas en c\xF3digo funcional, utilizando mis habilidades en Java, JavaScript y bases de datos para desarrollar aplicaciones robustas y escalables. Mi compromiso con la calidad y mi constante b\xFAsqueda de aprendizaje. Si buscas un profesional proactivo y con ganas de aportar valor a tus proyectos, \xA1cont\xE1ctame! Estoy listo para trabajar contigo y convertir tus ideas en realidad.")), h("div", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].foto
  }, h("img", {
    src: _assets_img_profile_FOTO_png__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    alt: "foto-perfil"
  }))));
};
/* harmony default export */ __webpack_exports__["a"] = (AboutMe);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "qinx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LUX8");

var Footer = function Footer() {
  var currentYear = new Date().getFullYear();
  return h("footer", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].footer
  }, h("p", null, "\xA9 2025 ", currentYear == 2025 ? "" : "- ".concat(currentYear), " Robin Joel Lugo Boero. Todos los derechos reservados."));
};
/* harmony default export */ __webpack_exports__["a"] = (Footer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "sVqj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "ac2bd5679884a1b3384c6d492fe47a0d.png");

/***/ }),

/***/ "tNQ4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"nav_menu_offcanvas":"nav_menu_offcanvas__3Y3c8","img_link_offcanvas":"img_link_offcanvas__iCVIz"});

/***/ }),

/***/ "xVTo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"presentacion":"presentacion__2jwZc","contenedorSaludo":"contenedorSaludo__k-C52","areaSaludo":"areaSaludo__g0JdB","saludoLinks":"saludoLinks__r1Qg8","saludoLogo":"saludoLogo__ZBNn3","githubLink":"githubLink__Jnpid","downloadLink":"downloadLink__ea2eW"});

/***/ }),

/***/ "ySiU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["a"] = ({"header":"header__OVZyn","scrolled":"scrolled__QjBdW","logoMenu":"logoMenu__SIweH","logoContainer":"logoContainer__ltY64","logo":"logo__jPF5-","active":"active__r+Z6z","menu":"menu__lHSdu"});

/***/ }),

/***/ "yf07":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8fLt");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var ColorSchemeButton = function ColorSchemeButton() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "b"])(null),
    _useState2 = _slicedToArray(_useState, 2),
    manualTheme = _useState2[0],
    setManualTheme = _useState2[1];
  var getEffectiveTheme = function getEffectiveTheme() {
    if (manualTheme) return manualTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };
  var toggleTheme = function toggleTheme() {
    var currentTheme = getEffectiveTheme();
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    setManualTheme(newTheme);
  };
  return h("button", {
    className: _style_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].button,
    onClick: toggleTheme
  }, h("i", {
    className: "fa-solid fa-palette"
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (ColorSchemeButton);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ }),

/***/ "zn4M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(h) {/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tNQ4");
//import { useEffect } from "preact/hooks";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";

var OffCanvas = function OffCanvas() {
  //useEffect(() => {
  //    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  //}, []);

  return h("div", {
    className: "offcanvas offcanvas-start ".concat(_style_css__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].nav_menu_offcanvas),
    tabIndex: "-1",
    id: "nav_menu_offcanvas",
    "aria-labelledby": "offcanvasExampleLabel",
    style: {
      width: "250px"
    }
  }, h("div", {
    className: "offcanvas-header"
  }, h("h5", {
    className: "offcanvas-title",
    id: "offcanvasExampleLabel"
  }, "Robin Joel Lugo Boero"), h("button", {
    type: "button",
    className: "btn",
    "data-bs-dismiss": "offcanvas",
    "aria-label": "Close",
    style: {
      fontSize: "1.5rem"
    }
  }, h("i", {
    className: "fa-solid fa-xmark"
  }))), h("div", {
    className: "offcanvas-body"
  }, h("ul", {
    className: "navbar-nav"
  }, h("li", {
    className: "nav-item"
  }, h("a", {
    href: "#saludo",
    className: "nav-link d-flex align-items-center gap-2"
  }, h("i", {
    className: "fa-solid fa-house"
  }), h("span", null, "Inicio"))), h("li", {
    className: "nav-item"
  }, h("a", {
    href: "#aboutme",
    className: "nav-link d-flex align-items-center gap-2"
  }, h("i", {
    className: "fa-solid fa-user"
  }), h("span", null, "Sobre mi"))), h("li", {
    className: "nav-item"
  }, h("a", {
    href: "#tecnologies",
    className: "nav-link d-flex align-items-center gap-2"
  }, h("i", {
    className: "fa-solid fa-code"
  }), h("span", null, "Tecnolog\xEDas"))), h("li", {
    className: "nav-item"
  }, h("a", {
    href: "#my-projects",
    className: "nav-link d-flex align-items-center gap-2"
  }, h("i", {
    className: "fa-solid fa-folder"
  }), h("span", null, "Proyectos"))), h("li", {
    className: "nav-item"
  }, h("a", {
    href: "#contact",
    className: "nav-link d-flex align-items-center gap-2"
  }, h("i", {
    className: "fa-solid fa-envelope"
  }), h("span", null, "Contactarme"))))));
};
/* harmony default export */ __webpack_exports__["a"] = (OffCanvas);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["h"]))

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map