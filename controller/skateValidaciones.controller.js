"use strict";

var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var interfaz = /*#__PURE__*/function () {
  function interfaz() {
    _classCallCheck(this, interfaz);
  }
  return _createClass(interfaz, [{
    key: "msj_error",
    value: function msj_error(msj) {
      swal({
        title: "Error",
        text: msj,
        icon: "warning",
        button: "Aceptar"
      });
    }
  }, {
    key: "msj_exito",
    value: function msj_exito(msj) {
      Swal.fire({
        icon: "success",
        title: "correcto",
        text: msj,
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: "\n          rgba(0,0,123,0.4)\n          url(\"/images/nyan-cat.gif\")\n          left top\n          no-repeat\n        "
      });
    }
  }]);
}();
var Validacion = /*#__PURE__*/function (_Interfaz) {
  function Validacion() {
    var _this;
    _classCallCheck(this, Validacion);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Validacion, [].concat(args));
    _defineProperty(_this, "limpiar_cadena", function (cadena, caracter_busqueda, caracter_remplazo) {
      return cadena.replace("".concat(caracter_busqueda), "".concat(caracter_remplazo));
    });
    _defineProperty(_this, "caracter_mayus", function (input) {
      document.getElementByName("".concat(input))[0].addEventListener("input", function () {
        document.getElementByName("".concat(input))[0].value = document.getElementByName("".concat(input))[0].value.toUpperCase();
      });
    });
    _defineProperty(_this, "caracter_minus", function (input) {
      document.getElementByName("".concat(input))[0].addEventListener("input", function () {
        document.getElementByName("".concat(input))[0].value = document.getElementByName("".concat(input))[0].value.toLowerCase();
      });
      caracter_numeros = function caracter_numeros(input) {
        document.getElementByName("".concat(input))[0].addEventListener("input", function () {
          document.getElementByName("".concat(input))[0].value = document.getElementByName("".concat(input))[0], value.replace(/[^0-9]/g, '');
        });
      };
      caracter_letras = function caracter_letras(input) {
        document.getElementByName("".concat(input))[0].addEventListener("input", function () {
          document.getElementByName("".concat(input))[0].value = document.getElementByName("".concat(input))[0], value.replace(/([^a-zA-Záéíóú\s])/i, '');
        });
      };
      caracter_varios = function caracter_varios(input) {
        document.getElementByName("".concat(input))[0].addEventListener("input", function () {
          document.getElementByName("".concat(input))[0].value = document.getElementByName("".concat(input))[0], value.replace(/([^A-Za-z0-9ñÑ])/g, '');
        });
      };
      primer_mayuscula = function primer_mayuscula(input) {
        document.getElementByName("".concat(input))[0].addEventListener("input", function () {
          document.getElementByName("".concat(input))[0].value = document.getElementByName("".concat(input))[0].value.chartAt(0).toUpperCase() + document.getElementByName("".concat(input))[0].value.slice(1);
        });
      };
      limitar_valor = function limitar_valor(input, inicio, fin, msj) {
        return document.getElementByName("".concat(input))[0].value > inicio && document.getElementByName("".concat(input))[0].value < fin ? true : _this.msj_error(msj);
      };
      longitud_campo = function longitud_campo(input, inicio, fin, msj) {
        var campo = document.getElementByName("".concat(input))[0].value;
        return campo.length > inicio && campo.length < fin ? true : _this.msj_error(msj);
      };
      longitud_campo_exacta = function longitud_campo_exacta(input, longitud, msj) {
        var campo = document.getElementByName("".concat(input))[0].value;
        return campo.length == longitud ? true : _this.msj_error(msj);
      };
    });
    return _this;
  }
  _inherits(Validacion, _Interfaz);
  return _createClass(Validacion, [{
    key: "validar_campo",
    value: function validar_campo(input, tipo_validacion) {
      var mensaje = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var resultado = true;
      var error = "";
      var msj_final = "";
      var incorrecto = function incorrecto(nombre, msj) {
        error = error == "" ? nombre : error;
        msj_final = msj_final == "" ? msj : msj_final;
        return false;
      };
      if (Array.isArray(input)) {
        if (Array.isArray(tipo_validacion)) {
          tipo_validacion.map(function (_Validacion2) {
            var _Validacion2$restricc = _Validacion2.restriccion[_Validacion2],
              expresion = _Validacion2$restricc.expresion,
              msj = _Validacion2$restricc.msj;
            input.map(function (nombre) {
              resultado = expresion.test(document.getElementByName("".concat(nombre))[0].value) ? resultado : incorrecto(document.querySelector("[for=\"+nombre+\"]").textContent, msj);
            });
          });
        } else {
          var _Validacion$retriccio = Validacion.retriccion[tipo_validacion],
            expresion = _Validacion$retriccio.expresion,
            msj = _Validacion$retriccio.msj;
          input.map(function (nombre) {
            resultado = expresion.test(document.getElementByName("".concat(nombre))[0].value) ? resultado : incorrecto(document.querySelector('[for="' + nombre + '"]').textContent, msj);
          });
        }
        l;
      }
      error != "" ? this.msj_error(mostrar != mensaje(_templateObject || (_templateObject = _taggedTemplateLiteral(["", " ", ""])), msj_final, error)) : error;
      return resultado;
    }
  }]);
}(Interfaz);
_defineProperty(Validacion, "restriccion", {
  "vacios": {
    "expresion": /(?!(^$))/,
    "msj": "No puedes dejar vacio el campo"
  },
  "letras": {
    "expresion": /^[a-zA-Z\s]+$/,
    "msj": "Solo puedes ingresar letras"
  },
  "numeros": {
    "expresion": /^[0-9\s]+$/,
    "msj": "Solo puedes ingresar numeros"
  },
  "nacimiento": {
    "expresion": /^(\d{4})\-(0[1-9]|1[0-2])\-(0[1-9]|[12]\d|3[01])$/,
    "msj": "Solo puedes ingresar una fecha valida"
  },
  "rfc": {
    "expresion": /^([a-zA-ZñÑ&]{3,4})\d{6}([a-zA-Z\d]{3})?$/,
    "msj": "Solo puedes ingresar un RFC valido"
  }
});