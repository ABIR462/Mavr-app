import { S as reactExports, K as jsxRuntimeExports, r as f$1, x as getDefaultExportFromCjs } from "./server-DEsmM26z.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const logo = "/assets/mavr-logo-Bqu-Nvva.png";
const connectMock = "/assets/Connect-Cf_ogumY.png";
var propTypes = { exports: {} };
var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}
var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var ReactPropTypesSecret = /* @__PURE__ */ requireReactPropTypesSecret();
  function emptyFunction() {
  }
  function emptyFunctionWithReset() {
  }
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}
var hasRequiredPropTypes;
function requirePropTypes() {
  if (hasRequiredPropTypes) return propTypes.exports;
  hasRequiredPropTypes = 1;
  {
    propTypes.exports = /* @__PURE__ */ requireFactoryWithThrowingShims()();
  }
  return propTypes.exports;
}
var propTypesExports = /* @__PURE__ */ requirePropTypes();
const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var useAttachEvent = function useAttachEvent2(element, event, cb) {
  var cbDefined = !!cb;
  var cbRef = f$1.useRef(cb);
  f$1.useEffect(function() {
    cbRef.current = cb;
  }, [cb]);
  f$1.useEffect(function() {
    if (!cbDefined || !element) {
      return function() {
      };
    }
    var decoratedCb = function decoratedCb2() {
      if (cbRef.current) {
        cbRef.current.apply(cbRef, arguments);
      }
    };
    element.on(event, decoratedCb);
    return function() {
      element.off(event, decoratedCb);
    };
  }, [cbDefined, event, element, cbRef]);
};
var usePrevious = function usePrevious2(value) {
  var ref = f$1.useRef(value);
  f$1.useEffect(function() {
    ref.current = value;
  }, [value]);
  return ref.current;
};
var isUnknownObject = function isUnknownObject2(raw) {
  return raw !== null && _typeof(raw) === "object";
};
var PLAIN_OBJECT_STR = "[object Object]";
var isEqual = function isEqual2(left, right) {
  if (!isUnknownObject(left) || !isUnknownObject(right)) {
    return left === right;
  }
  var leftArray = Array.isArray(left);
  var rightArray = Array.isArray(right);
  if (leftArray !== rightArray) return false;
  var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
  var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
  if (leftPlainObject !== rightPlainObject) return false;
  if (!leftPlainObject && !leftArray) return left === right;
  var leftKeys = Object.keys(left);
  var rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length) return false;
  var keySet = {};
  for (var i = 0; i < leftKeys.length; i += 1) {
    keySet[leftKeys[i]] = true;
  }
  for (var _i = 0; _i < rightKeys.length; _i += 1) {
    keySet[rightKeys[_i]] = true;
  }
  var allKeys = Object.keys(keySet);
  if (allKeys.length !== leftKeys.length) {
    return false;
  }
  var l = left;
  var r = right;
  var pred = function pred2(key) {
    return isEqual2(l[key], r[key]);
  };
  return allKeys.every(pred);
};
var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates2(options, prevOptions, immutableKeys) {
  if (!isUnknownObject(options)) {
    return null;
  }
  return Object.keys(options).reduce(function(newOptions, key) {
    var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);
    if (immutableKeys.includes(key)) {
      if (isUpdated) {
        console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
      }
      return newOptions;
    }
    if (!isUpdated) {
      return newOptions;
    }
    return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
  }, null);
};
var ElementsContext = /* @__PURE__ */ f$1.createContext(null);
ElementsContext.displayName = "ElementsContext";
var parseElementsContext = function parseElementsContext2(ctx, useCase) {
  if (!ctx) {
    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
  }
  return ctx;
};
({
  stripe: PropTypes.any,
  options: PropTypes.object
});
({
  children: PropTypes.func.isRequired
});
var CheckoutSdkContext = /* @__PURE__ */ f$1.createContext(null);
CheckoutSdkContext.displayName = "CheckoutSdkContext";
var parseCheckoutSdkContext = function parseCheckoutSdkContext2(ctx, useCase) {
  if (!ctx) {
    throw new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(useCase, " in an <CheckoutProvider> provider."));
  }
  return ctx;
};
var CheckoutContext = /* @__PURE__ */ f$1.createContext(null);
CheckoutContext.displayName = "CheckoutContext";
({
  stripe: PropTypes.any,
  options: PropTypes.shape({
    fetchClientSecret: PropTypes.func.isRequired,
    elementsOptions: PropTypes.object
  }).isRequired
});
var useElementsOrCheckoutSdkContextWithUseCase = function useElementsOrCheckoutSdkContextWithUseCase2(useCaseString) {
  var checkoutSdkContext = f$1.useContext(CheckoutSdkContext);
  var elementsContext = f$1.useContext(ElementsContext);
  if (checkoutSdkContext && elementsContext) {
    throw new Error("You cannot wrap the part of your app that ".concat(useCaseString, " in both <CheckoutProvider> and <Elements> providers."));
  }
  if (checkoutSdkContext) {
    return parseCheckoutSdkContext(checkoutSdkContext, useCaseString);
  }
  return parseElementsContext(elementsContext, useCaseString);
};
var _excluded = ["mode"];
var capitalized = function capitalized2(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var createElementComponent = function createElementComponent2(type, isServer2) {
  var displayName = "".concat(capitalized(type), "Element");
  var ClientElement = function ClientElement2(_ref) {
    var id2 = _ref.id, className = _ref.className, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, onBlur = _ref.onBlur, onFocus = _ref.onFocus, onReady = _ref.onReady, onChange = _ref.onChange, onEscape = _ref.onEscape, onClick = _ref.onClick, onLoadError = _ref.onLoadError, onLoaderStart = _ref.onLoaderStart, onNetworksChange = _ref.onNetworksChange, onConfirm = _ref.onConfirm, onCancel = _ref.onCancel, onShippingAddressChange = _ref.onShippingAddressChange, onShippingRateChange = _ref.onShippingRateChange, onSavedPaymentMethodRemove = _ref.onSavedPaymentMethodRemove, onSavedPaymentMethodUpdate = _ref.onSavedPaymentMethodUpdate;
    var ctx = useElementsOrCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
    var elements = "elements" in ctx ? ctx.elements : null;
    var checkoutSdk = "checkoutSdk" in ctx ? ctx.checkoutSdk : null;
    var _React$useState = f$1.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), element = _React$useState2[0], setElement = _React$useState2[1];
    var elementRef = f$1.useRef(null);
    var domNode = f$1.useRef(null);
    useAttachEvent(element, "blur", onBlur);
    useAttachEvent(element, "focus", onFocus);
    useAttachEvent(element, "escape", onEscape);
    useAttachEvent(element, "click", onClick);
    useAttachEvent(element, "loaderror", onLoadError);
    useAttachEvent(element, "loaderstart", onLoaderStart);
    useAttachEvent(element, "networkschange", onNetworksChange);
    useAttachEvent(element, "confirm", onConfirm);
    useAttachEvent(element, "cancel", onCancel);
    useAttachEvent(element, "shippingaddresschange", onShippingAddressChange);
    useAttachEvent(element, "shippingratechange", onShippingRateChange);
    useAttachEvent(element, "savedpaymentmethodremove", onSavedPaymentMethodRemove);
    useAttachEvent(element, "savedpaymentmethodupdate", onSavedPaymentMethodUpdate);
    useAttachEvent(element, "change", onChange);
    var readyCallback;
    if (onReady) {
      if (type === "expressCheckout") {
        readyCallback = onReady;
      } else {
        readyCallback = function readyCallback2() {
          onReady(element);
        };
      }
    }
    useAttachEvent(element, "ready", readyCallback);
    f$1.useLayoutEffect(function() {
      if (elementRef.current === null && domNode.current !== null && (elements || checkoutSdk)) {
        var newElement = null;
        if (checkoutSdk) {
          switch (type) {
            case "payment":
              newElement = checkoutSdk.createPaymentElement(options);
              break;
            case "address":
              if ("mode" in options) {
                var mode = options.mode, restOptions = _objectWithoutProperties(options, _excluded);
                if (mode === "shipping") {
                  newElement = checkoutSdk.createShippingAddressElement(restOptions);
                } else if (mode === "billing") {
                  newElement = checkoutSdk.createBillingAddressElement(restOptions);
                } else {
                  throw new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.");
                }
              } else {
                throw new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");
              }
              break;
            case "expressCheckout":
              newElement = checkoutSdk.createExpressCheckoutElement(options);
              break;
            case "currencySelector":
              newElement = checkoutSdk.createCurrencySelectorElement();
              break;
            case "taxId":
              newElement = checkoutSdk.createTaxIdElement(options);
              break;
            default:
              throw new Error("Invalid Element type ".concat(displayName, ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."));
          }
        } else if (elements) {
          newElement = elements.create(type, options);
        }
        elementRef.current = newElement;
        setElement(newElement);
        if (newElement) {
          newElement.mount(domNode.current);
        }
      }
    }, [elements, checkoutSdk, options]);
    var prevOptions = usePrevious(options);
    f$1.useEffect(function() {
      if (!elementRef.current) {
        return;
      }
      var updates = extractAllowedOptionsUpdates(options, prevOptions, ["paymentRequest"]);
      if (updates && "update" in elementRef.current) {
        elementRef.current.update(updates);
      }
    }, [options, prevOptions]);
    f$1.useLayoutEffect(function() {
      return function() {
        if (elementRef.current && typeof elementRef.current.destroy === "function") {
          try {
            elementRef.current.destroy();
            elementRef.current = null;
          } catch (error) {
          }
        }
      };
    }, []);
    return /* @__PURE__ */ f$1.createElement("div", {
      id: id2,
      className,
      ref: domNode
    });
  };
  var ServerElement = function ServerElement2(props) {
    useElementsOrCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
    var id2 = props.id, className = props.className;
    return /* @__PURE__ */ f$1.createElement("div", {
      id: id2,
      className
    });
  };
  var Element2 = isServer2 ? ServerElement : ClientElement;
  Element2.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onReady: PropTypes.func,
    onEscape: PropTypes.func,
    onClick: PropTypes.func,
    onLoadError: PropTypes.func,
    onLoaderStart: PropTypes.func,
    onNetworksChange: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onShippingAddressChange: PropTypes.func,
    onShippingRateChange: PropTypes.func,
    onSavedPaymentMethodRemove: PropTypes.func,
    onSavedPaymentMethodUpdate: PropTypes.func,
    options: PropTypes.object
  };
  Element2.displayName = displayName;
  Element2.__elementType = type;
  return Element2;
};
var isServer = true;
var EmbeddedCheckoutContext = /* @__PURE__ */ f$1.createContext(null);
EmbeddedCheckoutContext.displayName = "EmbeddedCheckoutProviderContext";
createElementComponent("auBankAccount", isServer);
var CardElement = createElementComponent("card", isServer);
createElementComponent("cardNumber", isServer);
createElementComponent("cardExpiry", isServer);
createElementComponent("cardCvc", isServer);
createElementComponent("fpxBank", isServer);
createElementComponent("iban", isServer);
createElementComponent("idealBank", isServer);
createElementComponent("p24Bank", isServer);
createElementComponent("epsBank", isServer);
createElementComponent("payment", isServer);
createElementComponent("expressCheckout", isServer);
createElementComponent("currencySelector", isServer);
createElementComponent("paymentRequestButton", isServer);
createElementComponent("linkAuthentication", isServer);
createElementComponent("address", isServer);
createElementComponent("shippingAddress", isServer);
createElementComponent("paymentMethodMessaging", isServer);
createElementComponent("affirmMessage", isServer);
createElementComponent("afterpayClearpayMessage", isServer);
createElementComponent("taxId", isServer);
var dist;
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  var g = Object.defineProperty;
  var j = Object.getOwnPropertyDescriptor;
  var V2 = Object.getOwnPropertyNames;
  var L = Object.prototype.hasOwnProperty;
  var Y2 = (e, r) => {
    for (var t in r) g(e, t, { get: r[t], enumerable: true });
  }, K = (e, r, t, o) => {
    if (r && typeof r == "object" || typeof r == "function") for (let s of V2(r)) !L.call(e, s) && s !== t && g(e, s, { get: () => r[s], enumerable: !(o = j(r, s)) || o.enumerable });
    return e;
  };
  var $2 = (e) => K(g({}, "__esModule", { value: true }), e);
  var h2 = (e, r, t) => new Promise((o, s) => {
    var i = (a) => {
      try {
        l(t.next(a));
      } catch (m) {
        s(m);
      }
    }, c = (a) => {
      try {
        l(t.throw(a));
      } catch (m) {
        s(m);
      }
    }, l = (a) => a.done ? o(a.value) : Promise.resolve(a.value).then(i, c);
    l((t = t.apply(e, r)).next());
  });
  var W = {};
  Y2(W, { SubmissionError: () => p, appendExtraData: () => E2, createClient: () => R, getDefaultClient: () => U, isSubmissionError: () => A });
  dist = $2(W);
  var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  function I2(e) {
    e = String(e);
    for (var r, t, o, s, i = "", c = 0, l = e.length % 3; c < e.length; ) {
      if ((t = e.charCodeAt(c++)) > 255 || (o = e.charCodeAt(c++)) > 255 || (s = e.charCodeAt(c++)) > 255) throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");
      r = t << 16 | o << 8 | s, i += u.charAt(r >> 18 & 63) + u.charAt(r >> 12 & 63) + u.charAt(r >> 6 & 63) + u.charAt(r & 63);
    }
    return l ? i.slice(0, l - 3) + "===".substring(l) : i;
  }
  var S = class {
    constructor(r) {
      this.kind = "success";
      this.next = r.next;
    }
  };
  function w(e) {
    return "next" in e && typeof e.next == "string";
  }
  var b2 = class {
    constructor(r, t) {
      this.paymentIntentClientSecret = r;
      this.resubmitKey = t;
      this.kind = "stripePluginPending";
    }
  };
  function _(e) {
    if ("stripe" in e && "resubmitKey" in e && typeof e.resubmitKey == "string") {
      let { stripe: r } = e;
      return typeof r == "object" && r != null && "paymentIntentClientSecret" in r && typeof r.paymentIntentClientSecret == "string";
    }
    return false;
  }
  function A(e) {
    return e.kind === "error";
  }
  var p = class {
    constructor(...r) {
      this.kind = "error";
      this.formErrors = [];
      this.fieldErrors = /* @__PURE__ */ new Map();
      var t;
      for (let o of r) {
        if (!o.field) {
          this.formErrors.push({ code: o.code && z2(o.code) ? o.code : "UNSPECIFIED", message: o.message });
          continue;
        }
        let s = (t = this.fieldErrors.get(o.field)) != null ? t : [];
        s.push({ code: o.code && Q(o.code) ? o.code : "UNSPECIFIED", message: o.message }), this.fieldErrors.set(o.field, s);
      }
    }
    getFormErrors() {
      return [...this.formErrors];
    }
    getFieldErrors(r) {
      var t;
      return (t = this.fieldErrors.get(r)) != null ? t : [];
    }
    getAllFieldErrors() {
      return Array.from(this.fieldErrors);
    }
  };
  function z2(e) {
    return e in B;
  }
  var B = { BLOCKED: "BLOCKED", EMPTY: "EMPTY", FILES_TOO_BIG: "FILES_TOO_BIG", FORM_NOT_FOUND: "FORM_NOT_FOUND", INACTIVE: "INACTIVE", NO_FILE_UPLOADS: "NO_FILE_UPLOADS", PROJECT_NOT_FOUND: "PROJECT_NOT_FOUND", TOO_MANY_FILES: "TOO_MANY_FILES" };
  function Q(e) {
    return e in Z;
  }
  var Z = { REQUIRED_FIELD_EMPTY: "REQUIRED_FIELD_EMPTY", REQUIRED_FIELD_MISSING: "REQUIRED_FIELD_MISSING", STRIPE_CLIENT_ERROR: "STRIPE_CLIENT_ERROR", STRIPE_SCA_ERROR: "STRIPE_SCA_ERROR", TYPE_EMAIL: "TYPE_EMAIL", TYPE_NUMERIC: "TYPE_NUMERIC", TYPE_TEXT: "TYPE_TEXT" };
  function P(e) {
    return "errors" in e && Array.isArray(e.errors) && e.errors.every((r) => typeof r.message == "string") || "error" in e && typeof e.error == "string";
  }
  var D2 = "4.0.0";
  var v2 = (e) => I2(JSON.stringify(e)), N = (e) => {
    let r = `@formspree/core@${D2}`;
    return e ? `${e} ${r}` : r;
  };
  function E2(e, r, t) {
    e instanceof FormData ? e.append(r, t) : e[r] = t;
  }
  function M(e) {
    return e !== null && typeof e == "object";
  }
  var C = class {
    constructor(r = {}) {
      this.project = r.project, this.stripe = r.stripe;
    }
    submitForm(s, i) {
      return h2(this, arguments, function* (r, t, o = {}) {
        let c = o.endpoint || "https://formspree.io", l = this.project ? `${c}/p/${this.project}/f/${r}` : `${c}/f/${r}`, a = { Accept: "application/json", "Formspree-Client": N(o.clientName) };
        this.session && (a["Formspree-Session-Data"] = v2(this.session.data())), t instanceof FormData || (a["Content-Type"] = "application/json");
        function m(f2) {
          return h2(this, null, function* () {
            try {
              let n = yield (yield fetch(l, { method: "POST", mode: "cors", body: f2 instanceof FormData ? f2 : JSON.stringify(f2), headers: a })).json();
              if (M(n)) {
                if (P(n)) return Array.isArray(n.errors) ? new p(...n.errors) : new p({ message: n.error });
                if (_(n)) return new b2(n.stripe.paymentIntentClientSecret, n.resubmitKey);
                if (w(n)) return new S({ next: n.next });
              }
              return new p({ message: "Unexpected response format" });
            } catch (d) {
              let n = d instanceof Error ? d.message : `Unknown error while posting to Formspree: ${JSON.stringify(d)}`;
              return new p({ message: n });
            }
          });
        }
        if (this.stripe && o.createPaymentMethod) {
          let f2 = yield o.createPaymentMethod();
          if (f2.error) return new p({ code: "STRIPE_CLIENT_ERROR", field: "paymentMethod", message: "Error creating payment method" });
          E2(t, "paymentMethod", f2.paymentMethod.id);
          let d = yield m(t);
          if (d.kind === "error") return d;
          if (d.kind === "stripePluginPending") {
            let n = yield this.stripe.handleCardAction(d.paymentIntentClientSecret);
            if (n.error) return new p({ code: "STRIPE_CLIENT_ERROR", field: "paymentMethod", message: "Stripe SCA error" });
            t instanceof FormData ? t.delete("paymentMethod") : delete t.paymentMethod, E2(t, "paymentIntent", n.paymentIntent.id), E2(t, "resubmitKey", d.resubmitKey);
            let x = yield m(t);
            return k(x), x;
          }
          return d;
        }
        let T = yield m(t);
        return k(T), T;
      });
    }
  };
  function k(e) {
    let { kind: r } = e;
    if (r !== "success" && r !== "error") throw new Error(`Unexpected submission result (kind: ${r})`);
  }
  var R = (e) => new C(e), U = () => (F2 || (F2 = R()), F2), F2;
  return dist;
}
var distExports = /* @__PURE__ */ requireDist();
function V(e) {
  let { prefix: t, field: r, errors: o, ...s } = e;
  if (o == null) return null;
  let n = r ? o.getFieldErrors(r) : o.getFormErrors();
  return n.length === 0 ? null : f$1.createElement("div", { ...s }, t ? `${t} ` : null, n.map((a) => a.message).join(", "));
}
var E = reactExports.createContext({ elements: null });
function v() {
  return reactExports.useContext(E);
}
var h = f$1.createContext(null);
function b() {
  return reactExports.useContext(h) ?? { client: distExports.getDefaultClient() };
}
var D = "3.0.0";
var z = `@formspree/react@${D}`;
function F(e, t = {}) {
  let r = b(), { client: o = r.client, extraData: s, origin: n } = t, { elements: a } = v(), { stripe: i } = o;
  return async function(p) {
    let m = I(p) ? $(p) : p;
    if (typeof s == "object") for (let [u, g] of Object.entries(s)) {
      let d;
      typeof g == "function" ? d = await g() : d = g, d !== void 0 && distExports.appendExtraData(m, u, d);
    }
    let c = a?.getElement(CardElement), x = i && c ? () => i.createPaymentMethod({ type: "card", card: c, billing_details: G(m) }) : void 0;
    return o.submitForm(e, m, { endpoint: n, clientName: z, createPaymentMethod: x });
  };
}
function I(e) {
  return "preventDefault" in e && typeof e.preventDefault == "function";
}
function $(e) {
  e.preventDefault();
  let t = e.currentTarget;
  if (t.tagName != "FORM") throw new Error("submit was triggered for a non-form element");
  return new FormData(t);
}
function G(e) {
  let t = { address: Y(e) };
  for (let r of ["name", "email", "phone"]) {
    let o = e instanceof FormData ? e.get(r) : e[r];
    o && typeof o == "string" && (t[r] = o);
  }
  return t;
}
function Y(e) {
  let t = {};
  for (let [r, o] of [["address_line1", "line1"], ["address_line2", "line2"], ["address_city", "city"], ["address_country", "country"], ["address_state", "state"], ["address_postal_code", "postal_code"]]) {
    let s = e instanceof FormData ? e.get(r) : e[r];
    s && typeof s == "string" && (t[o] = s);
  }
  return t;
}
function J(e, t = {}) {
  let [r, o] = reactExports.useState(null), [s, n] = reactExports.useState(null), [a, i] = reactExports.useState(false), [l, p] = reactExports.useState(false);
  let m = F(e, { client: t.client, extraData: t.data, origin: t.endpoint });
  return [{ errors: r, result: s, submitting: a, succeeded: l }, async function(x) {
    i(true);
    let u = await m(x);
    i(false), distExports.isSubmissionError(u) ? (o(u), p(false)) : (o(null), n(u), p(true));
  }, function() {
    o(null), n(null), i(false), p(false);
  }];
}
const FORMSPREE_FORM_ID = "xpqnlgvl";
function Reveal({
  children,
  delay: delay2 = 0,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("in"), delay2);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay2]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: `reveal ${className}`, children });
}
function useCountdown(target) {
  const [now2, setNow] = reactExports.useState(() => Date.now());
  reactExports.useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), 1e3);
    return () => clearInterval(i);
  }, []);
  const d = Math.max(0, target - now2);
  return {
    days: Math.floor(d / 864e5),
    hours: Math.floor(d / 36e5 % 24),
    minutes: Math.floor(d / 6e4 % 60),
    seconds: Math.floor(d / 1e3 % 60)
  };
}
function FlipNum({ value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "flip-num font-display text-5xl md:text-7xl text-white tabular-nums",
      children: String(value).padStart(2, "0")
    },
    value
  );
}
function Countdown() {
  const target = reactExports.useRef(Date.now() + 90 * 864e5).current;
  const { days, hours, minutes, seconds } = useCountdown(target);
  const Block = ({ n, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mavr-card px-4 py-3 md:px-6 md:py-4 min-w-[80px] md:min-w-[110px] text-center flip", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FlipNum, { value: n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] md:text-[11px] text-[#CC0000] tracking-[0.25em] mt-1 font-medium", children: label })
  ] });
  const Colon = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex text-[#CC0000] text-4xl font-display self-center px-1", children: ":" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:flex md:items-center md:justify-center gap-3 md:gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { n: days, label: "DAYS" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Colon, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { n: hours, label: "HOURS" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Colon, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { n: minutes, label: "MINUTES" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Colon, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { n: seconds, label: "SECONDS" })
  ] });
}
function WaitlistForm({ ctaLabel = "CLAIM YOUR SPOT" }) {
  const [state, handleSubmit] = J(FORMSPREE_FORM_ID);
  reactExports.useEffect(() => {
    if (state.succeeded) ;
  }, [state.succeeded]);
  if (state.succeeded)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#CC0000] font-medium animate-in fade-in", children: "✓ You're in. Welcome to MAVR, Founding Athlete." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "w-full max-w-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "form_type", value: "waitlist" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "subject", value: "New MAVR waitlist signup" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-[1fr_1fr_auto] gap-2 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "waitlist-email",
            type: "email",
            name: "email",
            required: true,
            autoComplete: "email",
            placeholder: "Email address",
            className: "w-full bg-[#111] border border-[#333] text-white px-4 py-3 rounded outline-none focus:border-[#CC0000] transition-colors"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          V,
          {
            prefix: "Email",
            field: "email",
            errors: state.errors,
            className: "mt-2 text-xs text-[#FF6666]"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "waitlist-phone",
            type: "tel",
            name: "phone",
            required: true,
            autoComplete: "tel",
            placeholder: "Phone / WhatsApp",
            className: "w-full bg-[#111] border border-[#333] text-white px-4 py-3 rounded outline-none focus:border-[#CC0000] transition-colors"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          V,
          {
            prefix: "Phone",
            field: "phone",
            errors: state.errors,
            className: "mt-2 text-xs text-[#FF6666]"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: state.submitting, className: "btn-red whitespace-nowrap", children: state.submitting ? "SENDING..." : ctaLabel })
    ] })
  ] });
}
function Counter({ to, duration = 1500 }) {
  const [n, setN] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const started = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - start) / duration);
          setN(Math.floor(p * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref, children: n.toLocaleString() });
}
function Ticker({ slow = false }) {
  const text = "MAVR — ATHLETE OPERATING SYSTEM — INDIA'S FIRST — TRAIN. TRACK. DOMINATE. — EST. 2025 — ";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#111] border-y border-[#1A1A1A] h-10 overflow-hidden flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `marquee-track ${slow ? "marquee-slow" : ""}`, children: Array.from({ length: 2 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[13px] text-[#CC0000] whitespace-nowrap pr-8", children: text.repeat(4) }, i)) }) });
}
function ShareRow() {
  const msg = "I just joined the MAVR waitlist — India's first athlete operating system. Join here: https://mavr.in";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-[#888]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Share your spot. Move up the waitlist." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: `https://wa.me/?text=${encodeURIComponent(msg)}`,
        target: "_blank",
        rel: "noreferrer",
        onClick: () => track(),
        className: "w-8 h-8 grid place-items-center border border-[#1A1A1A] hover:border-[#CC0000] rounded transition",
        "aria-label": "WhatsApp",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "#25D366", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 0a12 12 0 0 0-10.4 18l-1.6 6 6.2-1.6A12 12 0 1 0 12 0Zm6.9 16.9c-.3.8-1.7 1.6-2.4 1.6-.6 0-1.4.1-2.3-.1-.5-.2-1.2-.4-2.1-.8-3.7-1.6-6.1-5.3-6.3-5.6-.2-.3-1.5-2-1.5-3.7s.9-2.6 1.2-3c.3-.3.7-.4.9-.4h.6c.2 0 .5-.1.8.6.3.7 1 2.4 1.1 2.6.1.2.1.4 0 .6-.1.3-.2.4-.4.6-.2.2-.4.5-.5.7-.2.2-.4.4-.2.8.2.4.8 1.4 1.8 2.2 1.2 1.1 2.3 1.4 2.6 1.6.3.2.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.3.7-.2.3.1 1.9.9 2.2 1.1.3.2.6.2.7.4.1.2.1 1-.2 1.9Z" }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => {
          navigator.clipboard?.writeText("https://mavr.in");
        },
        className: "w-8 h-8 grid place-items-center border border-[#1A1A1A] hover:border-[#CC0000] rounded transition",
        "aria-label": "Copy link",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "#fff", strokeWidth: "2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" })
        ] })
      }
    )
  ] });
}
function track(name, params) {
}
function InvestorModal({ open, onClose }) {
  const [state, handleSubmit] = J(FORMSPREE_FORM_ID);
  reactExports.useEffect(() => {
    if (!state.succeeded) return;
    const t = setTimeout(onClose, 1400);
    return () => clearTimeout(t);
  }, [onClose, state.succeeded]);
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-[80] bg-black/90 grid place-items-center px-4",
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onClick: (e) => e.stopPropagation(),
          className: "w-full max-w-md bg-[#0A0A0A] border border-[#1A1A1A] rounded relative",
          style: { borderTop: "4px solid #CC0000" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onClose,
                className: "absolute top-3 right-4 text-2xl text-white/70",
                "aria-label": "Close",
                children: "×"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl mb-2", children: "Request the MAVR Investor Deck" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#888] text-sm mb-6", children: "We respond within 24 hours." }),
              state.succeeded ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#CC0000] font-medium py-6", children: "Thank you. Deck on its way." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "form_type", value: "investor_deck" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "subject", value: "New investor deck request" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "inv-name",
                    name: "name",
                    required: true,
                    placeholder: "Full Name",
                    className: "w-full bg-[#111] border border-[#333] focus:border-[#CC0000] outline-none rounded px-4 py-3 text-sm"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  V,
                  {
                    prefix: "Name",
                    field: "name",
                    errors: state.errors,
                    className: "text-xs text-[#FF6666]"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "inv-org",
                    name: "organisation",
                    required: true,
                    placeholder: "Organisation / Fund",
                    className: "w-full bg-[#111] border border-[#333] focus:border-[#CC0000] outline-none rounded px-4 py-3 text-sm"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  V,
                  {
                    prefix: "Organisation",
                    field: "organisation",
                    errors: state.errors,
                    className: "text-xs text-[#FF6666]"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "inv-email",
                    type: "email",
                    name: "email",
                    required: true,
                    autoComplete: "email",
                    placeholder: "Email",
                    className: "w-full bg-[#111] border border-[#333] focus:border-[#CC0000] outline-none rounded px-4 py-3 text-sm"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  V,
                  {
                    prefix: "Email",
                    field: "email",
                    errors: state.errors,
                    className: "text-xs text-[#FF6666]"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "inv-phone",
                    type: "tel",
                    name: "phone",
                    autoComplete: "tel",
                    placeholder: "Phone (optional)",
                    className: "w-full bg-[#111] border border-[#333] focus:border-[#CC0000] outline-none rounded px-4 py-3 text-sm"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  V,
                  {
                    prefix: "Phone",
                    field: "phone",
                    errors: state.errors,
                    className: "text-xs text-[#FF6666]"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: state.submitting, className: "btn-red w-full mt-2", children: state.submitting ? "SENDING..." : "SEND REQUEST" })
              ] })
            ] })
          ]
        }
      )
    }
  );
}
const LayoutGroupContext = reactExports.createContext({});
function useConstant(init) {
  const ref = reactExports.useRef(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}
reactExports.useEffect;
const PresenceContext = /* @__PURE__ */ reactExports.createContext(null);
function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1)
    arr.push(item);
}
function removeItem(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1)
    arr.splice(index, 1);
}
const clamp = (min, max, v2) => {
  if (v2 > max)
    return max;
  if (v2 < min)
    return min;
  return v2;
};
let invariant = () => {
};
const MotionGlobalConfig = {};
const isObject = (value) => typeof value === "object" && value !== null;
// @__NO_SIDE_EFFECTS__
function memo(callback) {
  let result;
  return () => {
    if (result === void 0)
      result = callback();
    return result;
  };
}
const noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;
const pipe = (...transformers) => transformers.reduce((a, b2) => (v2) => b2(a(v2)));
const progress = /* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
  const range = to - from;
  return range ? (value - from) / range : 1;
};
class SubscriptionManager {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    addUniqueItem(this.subscriptions, handler);
    return () => removeItem(this.subscriptions, handler);
  }
  notify(a, b2, c) {
    const numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions)
      return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a, b2, c);
    } else {
      for (let i = 0; i < numSubscriptions; i++) {
        const handler = this.subscriptions[i];
        handler && handler(a, b2, c);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3;
const millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3;
const velocityPerSecond = /* @__NO_SIDE_EFFECTS__ */ (velocity, frameDuration) => frameDuration ? velocity * (1e3 / frameDuration) : 0;
const calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
const subdivisionPrecision = 1e-7;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - x;
    if (currentX > 0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
// @__NO_SIDE_EFFECTS__
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return noop;
  const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
  return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
const mirrorEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
const reverseEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p) => 1 - easing(1 - p);
const backOut = /* @__PURE__ */ cubicBezier(0.33, 1.53, 0.69, 0.99);
const backIn = /* @__PURE__ */ reverseEasing(backOut);
const backInOut = /* @__PURE__ */ mirrorEasing(backIn);
const anticipate = (p) => p >= 1 ? 1 : (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
const circIn = (p) => 1 - Math.sin(Math.acos(p));
const circOut = /* @__PURE__ */ reverseEasing(circIn);
const circInOut = /* @__PURE__ */ mirrorEasing(circIn);
const easeIn = /* @__PURE__ */ cubicBezier(0.42, 0, 1, 1);
const easeOut = /* @__PURE__ */ cubicBezier(0, 0, 0.58, 1);
const easeInOut = /* @__PURE__ */ cubicBezier(0.42, 0, 0.58, 1);
const isEasingArray = /* @__NO_SIDE_EFFECTS__ */ (ease2) => {
  return Array.isArray(ease2) && typeof ease2[0] !== "number";
};
const isBezierDefinition = /* @__NO_SIDE_EFFECTS__ */ (easing) => Array.isArray(easing) && typeof easing[0] === "number";
const easingLookup = {
  linear: noop,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate
};
const isValidEasing = (easing) => {
  return typeof easing === "string";
};
const easingDefinitionToFunction = (definition) => {
  if (/* @__PURE__ */ isBezierDefinition(definition)) {
    invariant(definition.length === 4);
    const [x1, y1, x2, y2] = definition;
    return /* @__PURE__ */ cubicBezier(x1, y1, x2, y2);
  } else if (isValidEasing(definition)) {
    return easingLookup[definition];
  }
  return definition;
};
const stepsOrder = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function createRenderStep(runNextFrame, stepName) {
  let thisFrame = /* @__PURE__ */ new Set();
  let nextFrame = /* @__PURE__ */ new Set();
  let isProcessing = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  let latestFrameData = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  function triggerCallback(callback) {
    if (toKeepAlive.has(callback)) {
      step.schedule(callback);
      runNextFrame();
    }
    callback(latestFrameData);
  }
  const step = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const queue = addToCurrentFrame ? thisFrame : nextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      queue.add(callback);
      return callback;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (callback) => {
      nextFrame.delete(callback);
      toKeepAlive.delete(callback);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (frameData2) => {
      latestFrameData = frameData2;
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }
      isProcessing = true;
      const prevFrame = thisFrame;
      thisFrame = nextFrame;
      nextFrame = prevFrame;
      thisFrame.forEach(triggerCallback);
      thisFrame.clear();
      isProcessing = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData2);
      }
    }
  };
  return step;
}
const maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
  let runNextFrame = false;
  let useDefaultElapsed = true;
  const state = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  const flagRunNextFrame = () => runNextFrame = true;
  const steps = stepsOrder.reduce((acc, key) => {
    acc[key] = createRenderStep(flagRunNextFrame);
    return acc;
  }, {});
  const { setup, read, resolveKeyframes, preUpdate, update, preRender, render, postRender } = steps;
  const processBatch = () => {
    const useManualTiming = MotionGlobalConfig.useManualTiming;
    const timestamp = useManualTiming ? state.timestamp : performance.now();
    runNextFrame = false;
    if (!useManualTiming) {
      state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
    }
    state.timestamp = timestamp;
    state.isProcessing = true;
    setup.process(state);
    read.process(state);
    resolveKeyframes.process(state);
    preUpdate.process(state);
    update.process(state);
    preRender.process(state);
    render.process(state);
    postRender.process(state);
    state.isProcessing = false;
    if (runNextFrame && allowKeepAlive) {
      useDefaultElapsed = false;
      scheduleNextBatch(processBatch);
    }
  };
  const wake = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!state.isProcessing) {
      scheduleNextBatch(processBatch);
    }
  };
  const schedule = stepsOrder.reduce((acc, key) => {
    const step = steps[key];
    acc[key] = (process, keepAlive = false, immediate = false) => {
      if (!runNextFrame)
        wake();
      return step.schedule(process, keepAlive, immediate);
    };
    return acc;
  }, {});
  const cancel = (process) => {
    for (let i = 0; i < stepsOrder.length; i++) {
      steps[stepsOrder[i]].cancel(process);
    }
  };
  return { schedule, cancel, state, steps };
}
const { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);
let now;
function clearTime() {
  now = void 0;
}
const time = {
  now: () => {
    if (now === void 0) {
      time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
    }
    return now;
  },
  set: (newTime) => {
    now = newTime;
    queueMicrotask(clearTime);
  }
};
const checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
const isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--");
const startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--");
const isCSSVariableToken = (value) => {
  const startsWithToken = startsAsVariableToken(value);
  if (!startsWithToken)
    return false;
  return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
const singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
const number = {
  test: (v2) => typeof v2 === "number",
  parse: parseFloat,
  transform: (v2) => v2
};
const alpha = {
  ...number,
  transform: (v2) => clamp(0, 1, v2)
};
const scale = {
  ...number,
  default: 1
};
const sanitize = (v2) => Math.round(v2 * 1e5) / 1e5;
const floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function isNullish(v2) {
  return v2 == null;
}
const singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
const isColorString = (type, testProp) => (v2) => {
  return Boolean(typeof v2 === "string" && singleColorRegex.test(v2) && v2.startsWith(type) || testProp && !isNullish(v2) && Object.prototype.hasOwnProperty.call(v2, testProp));
};
const splitColor = (aName, bName, cName) => (v2) => {
  if (typeof v2 !== "string")
    return v2;
  const [a, b2, c, alpha2] = v2.match(floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b2),
    [cName]: parseFloat(c),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};
const clampRgbUnit = (v2) => clamp(0, 255, v2);
const rgbUnit = {
  ...number,
  transform: (v2) => Math.round(clampRgbUnit(v2))
};
const rgba = {
  test: /* @__PURE__ */ isColorString("rgb", "red"),
  parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};
function parseHex(v2) {
  let r = "";
  let g = "";
  let b2 = "";
  let a = "";
  if (v2.length > 5) {
    r = v2.substring(1, 3);
    g = v2.substring(3, 5);
    b2 = v2.substring(5, 7);
    a = v2.substring(7, 9);
  } else {
    r = v2.substring(1, 2);
    g = v2.substring(2, 3);
    b2 = v2.substring(3, 4);
    a = v2.substring(4, 5);
    r += r;
    g += g;
    b2 += b2;
    a += a;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b2, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
const hex = {
  test: /* @__PURE__ */ isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};
const createUnitType = /* @__NO_SIDE_EFFECTS__ */ (unit) => ({
  test: (v2) => typeof v2 === "string" && v2.endsWith(unit) && v2.split(" ").length === 1,
  parse: parseFloat,
  transform: (v2) => `${v2}${unit}`
});
const degrees = /* @__PURE__ */ createUnitType("deg");
const percent = /* @__PURE__ */ createUnitType("%");
const px = /* @__PURE__ */ createUnitType("px");
const progressPercentage = /* @__PURE__ */ (() => ({
  ...percent,
  parse: (v2) => percent.parse(v2) / 100,
  transform: (v2) => percent.transform(v2 * 100)
}))();
const hsla = {
  test: /* @__PURE__ */ isColorString("hsl", "hue"),
  parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};
const color = {
  test: (v2) => rgba.test(v2) || hex.test(v2) || hsla.test(v2),
  parse: (v2) => {
    if (rgba.test(v2)) {
      return rgba.parse(v2);
    } else if (hsla.test(v2)) {
      return hsla.parse(v2);
    } else {
      return hex.parse(v2);
    }
  },
  transform: (v2) => {
    return typeof v2 === "string" ? v2 : v2.hasOwnProperty("red") ? rgba.transform(v2) : hsla.transform(v2);
  },
  getAnimatableNone: (v2) => {
    const parsed = color.parse(v2);
    parsed.alpha = 0;
    return color.transform(parsed);
  }
};
const colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function test(v2) {
  return isNaN(v2) && typeof v2 === "string" && (v2.match(floatRegex)?.length || 0) + (v2.match(colorRegex)?.length || 0) > 0;
}
const NUMBER_TOKEN = "number";
const COLOR_TOKEN = "color";
const VAR_TOKEN = "var";
const VAR_FUNCTION_TOKEN = "var(";
const SPLIT_TOKEN = "${}";
const complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
  const originalValue = value.toString();
  const values = [];
  const indexes = {
    color: [],
    number: [],
    var: []
  };
  const types = [];
  let i = 0;
  const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
    if (color.test(parsedValue)) {
      indexes.color.push(i);
      types.push(COLOR_TOKEN);
      values.push(color.parse(parsedValue));
    } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
      indexes.var.push(i);
      types.push(VAR_TOKEN);
      values.push(parsedValue);
    } else {
      indexes.number.push(i);
      types.push(NUMBER_TOKEN);
      values.push(parseFloat(parsedValue));
    }
    ++i;
    return SPLIT_TOKEN;
  });
  const split = tokenised.split(SPLIT_TOKEN);
  return { values, split, indexes, types };
}
function parseComplexValue(v2) {
  return analyseComplexValue(v2).values;
}
function buildTransformer({ split, types }) {
  const numSections = split.length;
  return (v2) => {
    let output = "";
    for (let i = 0; i < numSections; i++) {
      output += split[i];
      if (v2[i] !== void 0) {
        const type = types[i];
        if (type === NUMBER_TOKEN) {
          output += sanitize(v2[i]);
        } else if (type === COLOR_TOKEN) {
          output += color.transform(v2[i]);
        } else {
          output += v2[i];
        }
      }
    }
    return output;
  };
}
function createTransformer(source) {
  return buildTransformer(analyseComplexValue(source));
}
const convertNumbersToZero = (v2) => typeof v2 === "number" ? 0 : color.test(v2) ? color.getAnimatableNone(v2) : v2;
const convertToZero = (value, splitBefore) => {
  if (typeof value === "number") {
    return splitBefore?.trim().endsWith("/") ? value : 0;
  }
  return convertNumbersToZero(value);
};
function getAnimatableNone$1(v2) {
  const info = analyseComplexValue(v2);
  const transformer = buildTransformer(info);
  return transformer(info.values.map((value, i) => convertToZero(value, info.split[i])));
}
const complex = {
  test,
  parse: parseComplexValue,
  createTransformer,
  getAnimatableNone: getAnimatableNone$1
};
function hueToRgb(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}
function mixImmediate(a, b2) {
  return (p) => p > 0 ? b2 : a;
}
const mixNumber$1 = (from, to, progress2) => {
  return from + (to - from) * progress2;
};
const mixLinearColor = (from, to, v2) => {
  const fromExpo = from * from;
  const expo = v2 * (to * to - fromExpo) + fromExpo;
  return expo < 0 ? 0 : Math.sqrt(expo);
};
const colorTypes = [hex, rgba, hsla];
const getColorType = (v2) => colorTypes.find((type) => type.test(v2));
function asRGBA(color2) {
  const type = getColorType(color2);
  if (!Boolean(type))
    return false;
  let model = type.parse(color2);
  if (type === hsla) {
    model = hslaToRgba(model);
  }
  return model;
}
const mixColor = (from, to) => {
  const fromRGBA = asRGBA(from);
  const toRGBA = asRGBA(to);
  if (!fromRGBA || !toRGBA) {
    return mixImmediate(from, to);
  }
  const blended = { ...fromRGBA };
  return (v2) => {
    blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v2);
    blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v2);
    blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v2);
    blended.alpha = mixNumber$1(fromRGBA.alpha, toRGBA.alpha, v2);
    return rgba.transform(blended);
  };
};
const invisibleValues = /* @__PURE__ */ new Set(["none", "hidden"]);
function mixVisibility(origin, target) {
  if (invisibleValues.has(origin)) {
    return (p) => p <= 0 ? origin : target;
  } else {
    return (p) => p >= 1 ? target : origin;
  }
}
function mixNumber(a, b2) {
  return (p) => mixNumber$1(a, b2, p);
}
function getMixer(a) {
  if (typeof a === "number") {
    return mixNumber;
  } else if (typeof a === "string") {
    return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
  } else if (Array.isArray(a)) {
    return mixArray;
  } else if (typeof a === "object") {
    return color.test(a) ? mixColor : mixObject;
  }
  return mixImmediate;
}
function mixArray(a, b2) {
  const output = [...a];
  const numValues = output.length;
  const blendValue = a.map((v2, i) => getMixer(v2)(v2, b2[i]));
  return (p) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](p);
    }
    return output;
  };
}
function mixObject(a, b2) {
  const output = { ...a, ...b2 };
  const blendValue = {};
  for (const key in output) {
    if (a[key] !== void 0 && b2[key] !== void 0) {
      blendValue[key] = getMixer(a[key])(a[key], b2[key]);
    }
  }
  return (v2) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v2);
    }
    return output;
  };
}
function matchOrder(origin, target) {
  const orderedOrigin = [];
  const pointers = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < target.values.length; i++) {
    const type = target.types[i];
    const originIndex = origin.indexes[type][pointers[type]];
    const originValue = origin.values[originIndex] ?? 0;
    orderedOrigin[i] = originValue;
    pointers[type]++;
  }
  return orderedOrigin;
}
const mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyseComplexValue(origin);
  const targetStats = analyseComplexValue(target);
  const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
  if (canInterpolate) {
    if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) {
      return mixVisibility(origin, target);
    }
    return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
  } else {
    return mixImmediate(origin, target);
  }
};
function mix(from, to, p) {
  if (typeof from === "number" && typeof to === "number" && typeof p === "number") {
    return mixNumber$1(from, to, p);
  }
  const mixer = getMixer(from);
  return mixer(from, to);
}
const frameloopDriver = (update) => {
  const passTimestamp = ({ timestamp }) => update(timestamp);
  return {
    start: (keepAlive = true) => frame.update(passTimestamp, keepAlive),
    stop: () => cancelFrame(passTimestamp),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => frameData.isProcessing ? frameData.timestamp : time.now()
  };
};
const generateLinearEasing = (easing, duration, resolution = 10) => {
  let points = "";
  const numPoints = Math.max(Math.round(duration / resolution), 2);
  for (let i = 0; i < numPoints; i++) {
    points += Math.round(easing(i / (numPoints - 1)) * 1e4) / 1e4 + ", ";
  }
  return `linear(${points.substring(0, points.length - 2)})`;
};
const maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator) {
  let duration = 0;
  const timeStep = 50;
  let state = generator.next(duration);
  while (!state.done && duration < maxGeneratorDuration) {
    duration += timeStep;
    state = generator.next(duration);
  }
  return duration >= maxGeneratorDuration ? Infinity : duration;
}
function createGeneratorEasing(options, scale2 = 100, createGenerator) {
  const generator = createGenerator({ ...options, keyframes: [0, scale2] });
  const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
  return {
    type: "keyframes",
    ease: (progress2) => {
      return generator.next(duration * progress2).value / scale2;
    },
    duration: /* @__PURE__ */ millisecondsToSeconds(duration)
  };
}
const springDefaults = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
};
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
const safeMin = 1e-3;
function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass }) {
  let envelope;
  let derivative;
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
  duration = clamp(springDefaults.minDuration, springDefaults.maxDuration, /* @__PURE__ */ millisecondsToSeconds(duration));
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a = exponentialDecay - velocity;
      const b2 = calcAngularFreq(undampedFreq2, dampingRatio);
      const c = Math.exp(-delta);
      return safeMin - a / b2 * c;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f2 = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f2) / g;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b2 = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a * b2;
    };
    derivative = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b2 = (velocity - undampedFreq2) * (duration * duration);
      return a * b2;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = /* @__PURE__ */ secondsToMilliseconds(duration);
  if (isNaN(undampedFreq)) {
    return {
      stiffness: springDefaults.stiffness,
      damping: springDefaults.damping,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
  return keys.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = {
    velocity: springDefaults.velocity,
    stiffness: springDefaults.stiffness,
    damping: springDefaults.damping,
    mass: springDefaults.mass,
    isResolvedFromDuration: false,
    ...options
  };
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    springOptions.velocity = 0;
    if (options.visualDuration) {
      const visualDuration = options.visualDuration;
      const root = 2 * Math.PI / (visualDuration * 1.2);
      const stiffness = root * root;
      const damping = 2 * clamp(0.05, 1, 1 - (options.bounce || 0)) * Math.sqrt(stiffness);
      springOptions = {
        ...springOptions,
        mass: springDefaults.mass,
        stiffness,
        damping
      };
    } else {
      const derived = findSpring({ ...options, velocity: 0 });
      springOptions = {
        ...springOptions,
        ...derived,
        mass: springDefaults.mass
      };
      springOptions.isResolvedFromDuration = true;
    }
  }
  return springOptions;
}
function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
  const options = typeof optionsOrVisualDuration !== "object" ? {
    visualDuration: optionsOrVisualDuration,
    keyframes: [0, 1],
    bounce
  } : optionsOrVisualDuration;
  let { restSpeed, restDelta } = options;
  const origin = options.keyframes[0];
  const target = options.keyframes[options.keyframes.length - 1];
  const state = { done: false, value: origin };
  const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
    ...options,
    velocity: -/* @__PURE__ */ millisecondsToSeconds(options.velocity || 0)
  });
  const initialVelocity = velocity || 0;
  const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
  const initialDelta = target - origin;
  const undampedAngularFreq = /* @__PURE__ */ millisecondsToSeconds(Math.sqrt(stiffness / mass));
  const isGranularScale = Math.abs(initialDelta) < 5;
  restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
  restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
  let resolveSpring;
  let resolveVelocity;
  let angularFreq;
  let A;
  let sinCoeff;
  let cosCoeff;
  if (dampingRatio < 1) {
    angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
    A = (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq;
    resolveSpring = (t) => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      return target - envelope * (A * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
    };
    sinCoeff = dampingRatio * undampedAngularFreq * A + initialDelta * angularFreq;
    cosCoeff = dampingRatio * undampedAngularFreq * initialDelta - A * angularFreq;
    resolveVelocity = (t) => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      return envelope * (sinCoeff * Math.sin(angularFreq * t) + cosCoeff * Math.cos(angularFreq * t));
    };
  } else if (dampingRatio === 1) {
    resolveSpring = (t) => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
    const C = initialVelocity + undampedAngularFreq * initialDelta;
    resolveVelocity = (t) => Math.exp(-undampedAngularFreq * t) * (undampedAngularFreq * C * t - initialVelocity);
  } else {
    const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
    resolveSpring = (t) => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      const freqForT = Math.min(dampedAngularFreq * t, 300);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
    };
    const P = (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / dampedAngularFreq;
    const sinhCoeff = dampingRatio * undampedAngularFreq * P - initialDelta * dampedAngularFreq;
    const coshCoeff = dampingRatio * undampedAngularFreq * initialDelta - P * dampedAngularFreq;
    resolveVelocity = (t) => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      const freqForT = Math.min(dampedAngularFreq * t, 300);
      return envelope * (sinhCoeff * Math.sinh(freqForT) + coshCoeff * Math.cosh(freqForT));
    };
  }
  const generator = {
    calculatedDuration: isResolvedFromDuration ? duration || null : null,
    velocity: (t) => /* @__PURE__ */ secondsToMilliseconds(resolveVelocity(t)),
    next: (t) => {
      if (!isResolvedFromDuration && dampingRatio < 1) {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        const sin = Math.sin(angularFreq * t);
        const cos = Math.cos(angularFreq * t);
        const current2 = target - envelope * (A * sin + initialDelta * cos);
        const currentVelocity = /* @__PURE__ */ secondsToMilliseconds(envelope * (sinCoeff * sin + cosCoeff * cos));
        state.done = Math.abs(currentVelocity) <= restSpeed && Math.abs(target - current2) <= restDelta;
        state.value = state.done ? target : current2;
        return state;
      }
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        const currentVelocity = /* @__PURE__ */ secondsToMilliseconds(resolveVelocity(t));
        state.done = Math.abs(currentVelocity) <= restSpeed && Math.abs(target - current) <= restDelta;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? target : current;
      return state;
    },
    toString: () => {
      const calculatedDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
      const easing = generateLinearEasing((progress2) => generator.next(calculatedDuration * progress2).value, calculatedDuration, 30);
      return calculatedDuration + "ms " + easing;
    },
    toTransition: () => {
    }
  };
  return generator;
}
spring.applyToOptions = (options) => {
  const generatorOptions = createGeneratorEasing(options, 100, spring);
  options.ease = generatorOptions.ease;
  options.duration = /* @__PURE__ */ secondsToMilliseconds(generatorOptions.duration);
  options.type = "keyframes";
  return options;
};
const velocitySampleDuration = 5;
function getGeneratorVelocity(resolveValue, t, current) {
  const prevT = Math.max(t - velocitySampleDuration, 0);
  return /* @__PURE__ */ velocityPerSecond(current - resolveValue(prevT), t - prevT);
}
function inertia({ keyframes: keyframes2, velocity = 0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed }) {
  const origin = keyframes2[0];
  const state = {
    done: false,
    value: origin
  };
  const isOutOfBounds = (v2) => min !== void 0 && v2 < min || max !== void 0 && v2 > max;
  const nearestBoundary = (v2) => {
    if (min === void 0)
      return max;
    if (max === void 0)
      return min;
    return Math.abs(min - v2) < Math.abs(max - v2) ? min : max;
  };
  let amplitude = power * velocity;
  const ideal = origin + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal)
    amplitude = target - origin;
  const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
  const calcLatest = (t) => target + calcDelta(t);
  const applyFriction = (t) => {
    const delta = calcDelta(t);
    const latest = calcLatest(t);
    state.done = Math.abs(delta) <= restDelta;
    state.value = state.done ? target : latest;
  };
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = (t) => {
    if (!isOutOfBounds(state.value))
      return;
    timeReachedBoundary = t;
    spring$1 = spring({
      keyframes: [state.value, nearestBoundary(state.value)],
      velocity: getGeneratorVelocity(calcLatest, t, state.value),
      // TODO: This should be passing * 1000
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDelta,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return {
    calculatedDuration: null,
    next: (t) => {
      let hasUpdatedFrame = false;
      if (!spring$1 && timeReachedBoundary === void 0) {
        hasUpdatedFrame = true;
        applyFriction(t);
        checkCatchBoundary(t);
      }
      if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) {
        return spring$1.next(t - timeReachedBoundary);
      } else {
        !hasUpdatedFrame && applyFriction(t);
        return state;
      }
    }
  };
}
function createMixers(output, ease2, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || MotionGlobalConfig.mix || mix;
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease2) {
      const easingFunction = Array.isArray(ease2) ? ease2[i] || noop : ease2;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function interpolate(input, output, { clamp: isClamp = true, ease: ease2, mixer } = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length);
  if (inputLength === 1)
    return () => output[0];
  if (inputLength === 2 && output[0] === output[1])
    return () => output[1];
  const isZeroDeltaRange = input[0] === input[1];
  if (input[0] > input[inputLength - 1]) {
    input = [...input].reverse();
    output = [...output].reverse();
  }
  const mixers = createMixers(output, ease2, mixer);
  const numMixers = mixers.length;
  const interpolator = (v2) => {
    if (isZeroDeltaRange && v2 < input[0])
      return output[0];
    let i = 0;
    if (numMixers > 1) {
      for (; i < input.length - 2; i++) {
        if (v2 < input[i + 1])
          break;
      }
    }
    const progressInRange = /* @__PURE__ */ progress(input[i], input[i + 1], v2);
    return mixers[i](progressInRange);
  };
  return isClamp ? (v2) => interpolator(clamp(input[0], input[inputLength - 1], v2)) : interpolator;
}
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = /* @__PURE__ */ progress(0, remaining, i);
    offset.push(mixNumber$1(min, 1, offsetProgress));
  }
}
function defaultOffset(arr) {
  const offset = [0];
  fillOffset(offset, arr.length - 1);
  return offset;
}
function convertOffsetToTimes(offset, duration) {
  return offset.map((o) => o * duration);
}
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease: ease2 = "easeInOut" }) {
  const easingFunctions = /* @__PURE__ */ isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2);
  const state = {
    done: false,
    value: keyframeValues[0]
  };
  const absoluteTimes = convertOffsetToTimes(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues),
    duration
  );
  const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
    ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
  });
  return {
    calculatedDuration: duration,
    next: (t) => {
      state.value = mapTimeToKeyframe(t);
      state.done = t >= duration;
      return state;
    }
  };
}
const isNotNull = (value) => value !== null;
function getFinalKeyframe(keyframes2, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
  const resolvedKeyframes = keyframes2.filter(isNotNull);
  const useFirstKeyframe = speed < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1;
  const index = useFirstKeyframe ? 0 : resolvedKeyframes.length - 1;
  return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
}
const transitionTypeMap = {
  decay: inertia,
  inertia,
  tween: keyframes,
  keyframes,
  spring
};
function replaceTransitionType(transition) {
  if (typeof transition.type === "string") {
    transition.type = transitionTypeMap[transition.type];
  }
}
class WithPromise {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((resolve) => {
      this.resolve = resolve;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(onResolve, onReject) {
    return this.finished.then(onResolve, onReject);
  }
}
const percentToProgress = (percent2) => percent2 / 100;
class JSAnimation extends WithPromise {
  constructor(options) {
    super();
    this.state = "idle";
    this.startTime = null;
    this.isStopped = false;
    this.currentTime = 0;
    this.holdTime = null;
    this.playbackSpeed = 1;
    this.delayState = {
      done: false,
      value: void 0
    };
    this.stop = () => {
      const { motionValue: motionValue2 } = this.options;
      if (motionValue2 && motionValue2.updatedAt !== time.now()) {
        this.tick(time.now());
      }
      this.isStopped = true;
      if (this.state === "idle")
        return;
      this.teardown();
      this.options.onStop?.();
    };
    this.options = options;
    this.initAnimation();
    this.play();
    if (options.autoplay === false)
      this.pause();
  }
  initAnimation() {
    const { options } = this;
    replaceTransitionType(options);
    const { type = keyframes, repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = options;
    let { keyframes: keyframes$1 } = options;
    const generatorFactory = type || keyframes;
    if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
      this.mixKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
      keyframes$1 = [0, 100];
    }
    const generator = generatorFactory({ ...options, keyframes: keyframes$1 });
    if (repeatType === "mirror") {
      this.mirroredGenerator = generatorFactory({
        ...options,
        keyframes: [...keyframes$1].reverse(),
        velocity: -velocity
      });
    }
    if (generator.calculatedDuration === null) {
      generator.calculatedDuration = calcGeneratorDuration(generator);
    }
    const { calculatedDuration } = generator;
    this.calculatedDuration = calculatedDuration;
    this.resolvedDuration = calculatedDuration + repeatDelay;
    this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
    this.generator = generator;
  }
  updateTime(timestamp) {
    const animationTime = Math.round(timestamp - this.startTime) * this.playbackSpeed;
    if (this.holdTime !== null) {
      this.currentTime = this.holdTime;
    } else {
      this.currentTime = animationTime;
    }
  }
  tick(timestamp, sample = false) {
    const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration, calculatedDuration } = this;
    if (this.startTime === null)
      return generator.next(0);
    const { delay: delay2 = 0, keyframes: keyframes2, repeat, repeatType, repeatDelay, type, onUpdate, finalKeyframe } = this.options;
    if (this.speed > 0) {
      this.startTime = Math.min(this.startTime, timestamp);
    } else if (this.speed < 0) {
      this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
    }
    if (sample) {
      this.currentTime = timestamp;
    } else {
      this.updateTime(timestamp);
    }
    const timeWithoutDelay = this.currentTime - delay2 * (this.playbackSpeed >= 0 ? 1 : -1);
    const isInDelayPhase = this.playbackSpeed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
    this.currentTime = Math.max(timeWithoutDelay, 0);
    if (this.state === "finished" && this.holdTime === null) {
      this.currentTime = totalDuration;
    }
    let elapsed = this.currentTime;
    let frameGenerator = generator;
    if (repeat) {
      const progress2 = Math.min(this.currentTime, totalDuration) / resolvedDuration;
      let currentIteration = Math.floor(progress2);
      let iterationProgress = progress2 % 1;
      if (!iterationProgress && progress2 >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      currentIteration = Math.min(currentIteration, repeat + 1);
      const isOddIteration = Boolean(currentIteration % 2);
      if (isOddIteration) {
        if (repeatType === "reverse") {
          iterationProgress = 1 - iterationProgress;
          if (repeatDelay) {
            iterationProgress -= repeatDelay / resolvedDuration;
          }
        } else if (repeatType === "mirror") {
          frameGenerator = mirroredGenerator;
        }
      }
      elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
    }
    let state;
    if (isInDelayPhase) {
      this.delayState.value = keyframes2[0];
      state = this.delayState;
    } else {
      state = frameGenerator.next(elapsed);
    }
    if (mixKeyframes && !isInDelayPhase) {
      state.value = mixKeyframes(state.value);
    }
    let { done } = state;
    if (!isInDelayPhase && calculatedDuration !== null) {
      done = this.playbackSpeed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
    }
    const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
    if (isAnimationFinished && type !== inertia) {
      state.value = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
    }
    if (onUpdate) {
      onUpdate(state.value);
    }
    if (isAnimationFinished) {
      this.finish();
    }
    return state;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(resolve, reject) {
    return this.finished.then(resolve, reject);
  }
  get duration() {
    return /* @__PURE__ */ millisecondsToSeconds(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: delay2 = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ millisecondsToSeconds(delay2);
  }
  get time() {
    return /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
  }
  set time(newTime) {
    newTime = /* @__PURE__ */ secondsToMilliseconds(newTime);
    this.currentTime = newTime;
    if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) {
      this.holdTime = newTime;
    } else if (this.driver) {
      this.startTime = this.driver.now() - newTime / this.playbackSpeed;
    }
    if (this.driver) {
      this.driver.start(false);
    } else {
      this.startTime = 0;
      this.state = "paused";
      this.holdTime = newTime;
      this.tick(newTime);
    }
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    const t = this.currentTime;
    if (t <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity) {
      return this.generator.velocity(t);
    }
    const current = this.generator.next(t).value;
    return getGeneratorVelocity((s) => this.generator.next(s).value, t, current);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(newSpeed) {
    const hasChanged = this.playbackSpeed !== newSpeed;
    if (hasChanged && this.driver) {
      this.updateTime(time.now());
    }
    this.playbackSpeed = newSpeed;
    if (hasChanged && this.driver) {
      this.time = /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
    }
  }
  play() {
    if (this.isStopped)
      return;
    const { driver = frameloopDriver, startTime } = this.options;
    if (!this.driver) {
      this.driver = driver((timestamp) => this.tick(timestamp));
    }
    this.options.onPlay?.();
    const now2 = this.driver.now();
    if (this.state === "finished") {
      this.updateFinished();
      this.startTime = now2;
    } else if (this.holdTime !== null) {
      this.startTime = now2 - this.holdTime;
    } else if (!this.startTime) {
      this.startTime = startTime ?? now2;
    }
    if (this.state === "finished" && this.speed < 0) {
      this.startTime += this.calculatedDuration;
    }
    this.holdTime = null;
    this.state = "running";
    this.driver.start();
  }
  pause() {
    this.state = "paused";
    this.updateTime(time.now());
    this.holdTime = this.currentTime;
  }
  complete() {
    if (this.state !== "running") {
      this.play();
    }
    this.state = "finished";
    this.holdTime = null;
  }
  finish() {
    this.notifyFinished();
    this.teardown();
    this.state = "finished";
    this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null;
    this.startTime = 0;
    this.tick(0);
    this.teardown();
    this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle";
    this.stopDriver();
    this.startTime = this.holdTime = null;
  }
  stopDriver() {
    if (!this.driver)
      return;
    this.driver.stop();
    this.driver = void 0;
  }
  sample(sampleTime) {
    this.startTime = 0;
    return this.tick(sampleTime, true);
  }
  attachTimeline(timeline) {
    if (this.options.allowFlatten) {
      this.options.type = "keyframes";
      this.options.ease = "linear";
      this.initAnimation();
    }
    this.driver?.stop();
    return timeline.observe(this);
  }
}
function fillWildcards(keyframes2) {
  for (let i = 1; i < keyframes2.length; i++) {
    keyframes2[i] ?? (keyframes2[i] = keyframes2[i - 1]);
  }
}
const transformPropOrder = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
const transformProps = /* @__PURE__ */ (() => /* @__PURE__ */ new Set([...transformPropOrder, "pathRotation"]))();
const transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
const nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
  const removedTransforms = [];
  nonTranslationalTransformKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  return removedTransforms;
}
const toResolve = /* @__PURE__ */ new Set();
let isScheduled = false;
let anyNeedsMeasurement = false;
let isForced = false;
function measureAllKeyframes() {
  if (anyNeedsMeasurement) {
    const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
    const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
    const transformsToRestore = /* @__PURE__ */ new Map();
    elementsToMeasure.forEach((element) => {
      const removedTransforms = removeNonTranslationalTransform(element);
      if (!removedTransforms.length)
        return;
      transformsToRestore.set(element, removedTransforms);
      element.render();
    });
    resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
    elementsToMeasure.forEach((element) => {
      element.render();
      const restore = transformsToRestore.get(element);
      if (restore) {
        restore.forEach(([key, value]) => {
          element.getValue(key)?.set(value);
        });
      }
    });
    resolversToMeasure.forEach((resolver) => resolver.measureEndState());
    resolversToMeasure.forEach((resolver) => {
      if (resolver.suspendedScrollY !== void 0) {
        window.scrollTo(0, resolver.suspendedScrollY);
      }
    });
  }
  anyNeedsMeasurement = false;
  isScheduled = false;
  toResolve.forEach((resolver) => resolver.complete(isForced));
  toResolve.clear();
}
function readAllKeyframes() {
  toResolve.forEach((resolver) => {
    resolver.readKeyframes();
    if (resolver.needsMeasurement) {
      anyNeedsMeasurement = true;
    }
  });
}
function flushKeyframeResolvers() {
  isForced = true;
  readAllKeyframes();
  measureAllKeyframes();
  isForced = false;
}
class KeyframeResolver {
  constructor(unresolvedKeyframes, onComplete, name, motionValue2, element, isAsync = false) {
    this.state = "pending";
    this.isAsync = false;
    this.needsMeasurement = false;
    this.unresolvedKeyframes = [...unresolvedKeyframes];
    this.onComplete = onComplete;
    this.name = name;
    this.motionValue = motionValue2;
    this.element = element;
    this.isAsync = isAsync;
  }
  scheduleResolve() {
    this.state = "scheduled";
    if (this.isAsync) {
      toResolve.add(this);
      if (!isScheduled) {
        isScheduled = true;
        frame.read(readAllKeyframes);
        frame.resolveKeyframes(measureAllKeyframes);
      }
    } else {
      this.readKeyframes();
      this.complete();
    }
  }
  readKeyframes() {
    const { unresolvedKeyframes, name, element, motionValue: motionValue2 } = this;
    if (unresolvedKeyframes[0] === null) {
      const currentValue = motionValue2?.get();
      const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
      if (currentValue !== void 0) {
        unresolvedKeyframes[0] = currentValue;
      } else if (element && name) {
        const valueAsRead = element.readValue(name, finalKeyframe);
        if (valueAsRead !== void 0 && valueAsRead !== null) {
          unresolvedKeyframes[0] = valueAsRead;
        }
      }
      if (unresolvedKeyframes[0] === void 0) {
        unresolvedKeyframes[0] = finalKeyframe;
      }
      if (motionValue2 && currentValue === void 0) {
        motionValue2.set(unresolvedKeyframes[0]);
      }
    }
    fillWildcards(unresolvedKeyframes);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(isForcedComplete = false) {
    this.state = "complete";
    this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
    toResolve.delete(this);
  }
  cancel() {
    if (this.state === "scheduled") {
      toResolve.delete(this);
      this.state = "pending";
    }
  }
  resume() {
    if (this.state === "pending")
      this.scheduleResolve();
  }
}
const isCSSVar = (name) => name.startsWith("--");
function setStyle(element, name, value) {
  isCSSVar(name) ? element.style.setProperty(name, value) : element.style[name] = value;
}
const supportsFlags = {};
function memoSupports(callback, supportsFlag) {
  const memoized = /* @__PURE__ */ memo(callback);
  return () => supportsFlags[supportsFlag] ?? memoized();
}
const supportsScrollTimeline = /* @__PURE__ */ memoSupports(() => window.ScrollTimeline !== void 0, "scrollTimeline");
const supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch (e) {
    return false;
  }
  return true;
}, "linearEasing");
const cubicBezierAsString = ([a, b2, c, d]) => `cubic-bezier(${a}, ${b2}, ${c}, ${d})`;
const supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};
function mapEasingToNativeEasing(easing, duration) {
  if (!easing) {
    return void 0;
  } else if (typeof easing === "function") {
    return supportsLinearEasing() ? generateLinearEasing(easing, duration) : "ease-out";
  } else if (/* @__PURE__ */ isBezierDefinition(easing)) {
    return cubicBezierAsString(easing);
  } else if (Array.isArray(easing)) {
    return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
  } else {
    return supportedWaapiEasing[easing];
  }
}
function startWaapiAnimation(element, valueName, keyframes2, { delay: delay2 = 0, duration = 300, repeat = 0, repeatType = "loop", ease: ease2 = "easeOut", times } = {}, pseudoElement = void 0) {
  const keyframeOptions = {
    [valueName]: keyframes2
  };
  if (times)
    keyframeOptions.offset = times;
  const easing = mapEasingToNativeEasing(ease2, duration);
  if (Array.isArray(easing))
    keyframeOptions.easing = easing;
  const options = {
    delay: delay2,
    duration,
    easing: !Array.isArray(easing) ? easing : "linear",
    fill: "both",
    iterations: repeat + 1,
    direction: repeatType === "reverse" ? "alternate" : "normal"
  };
  if (pseudoElement)
    options.pseudoElement = pseudoElement;
  const animation = element.animate(keyframeOptions, options);
  return animation;
}
function isGenerator(type) {
  return typeof type === "function" && "applyToOptions" in type;
}
function applyGeneratorOptions({ type, ...options }) {
  if (isGenerator(type) && supportsLinearEasing()) {
    return type.applyToOptions(options);
  } else {
    options.duration ?? (options.duration = 300);
    options.ease ?? (options.ease = "easeOut");
  }
  return options;
}
class NativeAnimation extends WithPromise {
  constructor(options) {
    super();
    this.finishedTime = null;
    this.isStopped = false;
    this.manualStartTime = null;
    if (!options)
      return;
    const { element, name, keyframes: keyframes2, pseudoElement, allowFlatten = false, finalKeyframe, onComplete } = options;
    this.isPseudoElement = Boolean(pseudoElement);
    this.allowFlatten = allowFlatten;
    this.options = options;
    invariant(typeof options.type !== "string");
    const transition = applyGeneratorOptions(options);
    this.animation = startWaapiAnimation(element, name, keyframes2, transition, pseudoElement);
    if (transition.autoplay === false) {
      this.animation.pause();
    }
    this.animation.onfinish = () => {
      this.finishedTime = this.time;
      if (!pseudoElement) {
        const keyframe = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
        if (this.updateMotionValue) {
          this.updateMotionValue(keyframe);
        }
        setStyle(element, name, keyframe);
        this.animation.cancel();
      }
      onComplete?.();
      this.notifyFinished();
    };
  }
  play() {
    if (this.isStopped)
      return;
    this.manualStartTime = null;
    this.animation.play();
    if (this.state === "finished") {
      this.updateFinished();
    }
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch (e) {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = true;
    const { state } = this;
    if (state === "idle" || state === "finished") {
      return;
    }
    if (this.updateMotionValue) {
      this.updateMotionValue();
    } else {
      this.commitStyles();
    }
    if (!this.isPseudoElement)
      this.cancel();
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    const element = this.options?.element;
    if (!this.isPseudoElement && element?.isConnected) {
      this.animation.commitStyles?.();
    }
  }
  get duration() {
    const duration = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ millisecondsToSeconds(Number(duration));
  }
  get iterationDuration() {
    const { delay: delay2 = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ millisecondsToSeconds(delay2);
  }
  get time() {
    return /* @__PURE__ */ millisecondsToSeconds(Number(this.animation.currentTime) || 0);
  }
  set time(newTime) {
    const wasFinished = this.finishedTime !== null;
    this.manualStartTime = null;
    this.finishedTime = null;
    this.animation.currentTime = /* @__PURE__ */ secondsToMilliseconds(newTime);
    if (wasFinished) {
      this.animation.pause();
    }
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(newSpeed) {
    if (newSpeed < 0)
      this.finishedTime = null;
    this.animation.playbackRate = newSpeed;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(newStartTime) {
    this.manualStartTime = this.animation.startTime = newStartTime;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline, rangeStart, rangeEnd, observe }) {
    if (this.allowFlatten) {
      this.animation.effect?.updateTiming({ easing: "linear" });
    }
    this.animation.onfinish = null;
    if (timeline && supportsScrollTimeline()) {
      this.animation.timeline = timeline;
      if (rangeStart)
        this.animation.rangeStart = rangeStart;
      if (rangeEnd)
        this.animation.rangeEnd = rangeEnd;
      return noop;
    } else {
      return observe(this);
    }
  }
}
const unsupportedEasingFunctions = {
  anticipate,
  backInOut,
  circInOut
};
function isUnsupportedEase(key) {
  return key in unsupportedEasingFunctions;
}
function replaceStringEasing(transition) {
  if (typeof transition.ease === "string" && isUnsupportedEase(transition.ease)) {
    transition.ease = unsupportedEasingFunctions[transition.ease];
  }
}
const sampleDelta = 10;
class NativeAnimationExtended extends NativeAnimation {
  constructor(options) {
    replaceStringEasing(options);
    replaceTransitionType(options);
    super(options);
    if (options.startTime !== void 0 && options.autoplay !== false) {
      this.startTime = options.startTime;
    }
    this.options = options;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(value) {
    const { motionValue: motionValue2, onUpdate, onComplete, element, ...options } = this.options;
    if (!motionValue2)
      return;
    if (value !== void 0) {
      motionValue2.set(value);
      return;
    }
    const sampleAnimation = new JSAnimation({
      ...options,
      autoplay: false
    });
    const sampleTime = Math.max(sampleDelta, time.now() - this.startTime);
    const delta = clamp(0, sampleDelta, sampleTime - sampleDelta);
    const current = sampleAnimation.sample(sampleTime).value;
    const { name } = this.options;
    if (element && name)
      setStyle(element, name, current);
    motionValue2.setWithVelocity(sampleAnimation.sample(Math.max(0, sampleTime - delta)).value, current, delta);
    sampleAnimation.stop();
  }
}
const isAnimatable = (value, name) => {
  if (name === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && // It's animatable if we have a string
  (complex.test(value) || value === "0") && // And it contains numbers and/or colors
  !value.startsWith("url(")) {
    return true;
  }
  return false;
};
function hasKeyframesChanged(keyframes2) {
  const current = keyframes2[0];
  if (keyframes2.length === 1)
    return true;
  for (let i = 0; i < keyframes2.length; i++) {
    if (keyframes2[i] !== current)
      return true;
  }
}
function canAnimate(keyframes2, name, type, velocity) {
  const originKeyframe = keyframes2[0];
  if (originKeyframe === null) {
    return false;
  }
  if (name === "display" || name === "visibility")
    return true;
  const targetKeyframe = keyframes2[keyframes2.length - 1];
  const isOriginAnimatable = isAnimatable(originKeyframe, name);
  const isTargetAnimatable = isAnimatable(targetKeyframe, name);
  if (!isOriginAnimatable || !isTargetAnimatable) {
    return false;
  }
  return hasKeyframesChanged(keyframes2) || (type === "spring" || isGenerator(type)) && velocity;
}
function makeAnimationInstant(options) {
  options.duration = 0;
  options.type = "keyframes";
}
const acceleratedValues = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
const browserColorFunctions = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function hasBrowserOnlyColors(keyframes2) {
  for (let i = 0; i < keyframes2.length; i++) {
    if (typeof keyframes2[i] === "string" && browserColorFunctions.test(keyframes2[i])) {
      return true;
    }
  }
  return false;
}
const colorProperties = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]);
const supportsWaapi = /* @__PURE__ */ memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function supportsBrowserAnimation(options) {
  const { motionValue: motionValue2, name, repeatDelay, repeatType, damping, type, keyframes: keyframes2 } = options;
  const subject = motionValue2?.owner?.current;
  if (!(subject instanceof HTMLElement)) {
    return false;
  }
  const { onUpdate, transformTemplate } = motionValue2.owner.getProps();
  return supportsWaapi() && name && /**
  * Force WAAPI for color properties with browser-only color formats
  * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
  */
  (acceleratedValues.has(name) || colorProperties.has(name) && hasBrowserOnlyColors(keyframes2)) && (name !== "transform" || !transformTemplate) && /**
  * If we're outputting values to onUpdate then we can't use WAAPI as there's
  * no way to read the value from WAAPI every frame.
  */
  !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
}
const MAX_RESOLVE_DELAY = 40;
class AsyncMotionValueAnimation extends WithPromise {
  constructor({ autoplay = true, delay: delay2 = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", keyframes: keyframes2, name, motionValue: motionValue2, element, ...options }) {
    super();
    this.stop = () => {
      if (this._animation) {
        this._animation.stop();
        this.stopTimeline?.();
      }
      this.keyframeResolver?.cancel();
    };
    this.createdAt = time.now();
    const optionsWithDefaults = {
      autoplay,
      delay: delay2,
      type,
      repeat,
      repeatDelay,
      repeatType,
      name,
      motionValue: motionValue2,
      element,
      ...options
    };
    const KeyframeResolver$1 = element?.KeyframeResolver || KeyframeResolver;
    this.keyframeResolver = new KeyframeResolver$1(keyframes2, (resolvedKeyframes, finalKeyframe, forced) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue2, element);
    this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(keyframes2, finalKeyframe, options, sync) {
    this.keyframeResolver = void 0;
    const { name, type, velocity, delay: delay2, isHandoff, onUpdate } = options;
    this.resolvedAt = time.now();
    let canAnimateValue = true;
    if (!canAnimate(keyframes2, name, type, velocity)) {
      canAnimateValue = false;
      if (MotionGlobalConfig.instantAnimations || !delay2) {
        onUpdate?.(getFinalKeyframe(keyframes2, options, finalKeyframe));
      }
      keyframes2[0] = keyframes2[keyframes2.length - 1];
      makeAnimationInstant(options);
      options.repeat = 0;
    }
    const startTime = sync ? !this.resolvedAt ? this.createdAt : this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : void 0;
    const resolvedOptions = {
      startTime,
      finalKeyframe,
      ...options,
      keyframes: keyframes2
    };
    const useWaapi = canAnimateValue && !isHandoff && supportsBrowserAnimation(resolvedOptions);
    const element = resolvedOptions.motionValue?.owner?.current;
    let animation;
    if (useWaapi) {
      try {
        animation = new NativeAnimationExtended({
          ...resolvedOptions,
          element
        });
      } catch {
        animation = new JSAnimation(resolvedOptions);
      }
    } else {
      animation = new JSAnimation(resolvedOptions);
    }
    animation.finished.then(() => {
      this.notifyFinished();
    }).catch(noop);
    if (this.pendingTimeline) {
      this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
      this.pendingTimeline = void 0;
    }
    this._animation = animation;
  }
  get finished() {
    if (!this._animation) {
      return this._finished;
    } else {
      return this.animation.finished;
    }
  }
  then(onResolve, _onReject) {
    return this.finished.finally(onResolve).then(() => {
    });
  }
  get animation() {
    if (!this._animation) {
      this.keyframeResolver?.resume();
      flushKeyframeResolvers();
    }
    return this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(newTime) {
    this.animation.time = newTime;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(newSpeed) {
    this.animation.speed = newSpeed;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(timeline) {
    if (this._animation) {
      this.stopTimeline = this.animation.attachTimeline(timeline);
    } else {
      this.pendingTimeline = timeline;
    }
    return () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    if (this._animation) {
      this.animation.cancel();
    }
    this.keyframeResolver?.cancel();
  }
}
function calcChildStagger(children, child, delayChildren, staggerChildren = 0, staggerDirection = 1) {
  const index = Array.from(children).sort((a, b2) => a.sortNodePosition(b2)).indexOf(child);
  const numChildren = children.size;
  const maxStaggerDuration = (numChildren - 1) * staggerChildren;
  const delayIsFunction = typeof delayChildren === "function";
  return delayIsFunction ? delayChildren(index, numChildren) : staggerDirection === 1 ? index * staggerChildren : maxStaggerDuration - index * staggerChildren;
}
const MAX_VELOCITY_DELTA = 30;
const isFloat = (value) => {
  return !isNaN(parseFloat(value));
};
class MotionValue {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(init, options = {}) {
    this.canTrackVelocity = null;
    this.events = {};
    this.updateAndNotify = (v2) => {
      const currentTime = time.now();
      if (this.updatedAt !== currentTime) {
        this.setPrevFrameValue();
      }
      this.prev = this.current;
      this.setCurrent(v2);
      if (this.current !== this.prev) {
        this.events.change?.notify(this.current);
        if (this.dependents) {
          for (const dependent of this.dependents) {
            dependent.dirty();
          }
        }
      }
    };
    this.hasAnimated = false;
    this.setCurrent(init);
    this.owner = options.owner;
  }
  setCurrent(current) {
    this.current = current;
    this.updatedAt = time.now();
    if (this.canTrackVelocity === null && current !== void 0) {
      this.canTrackVelocity = isFloat(this.current);
    }
  }
  setPrevFrameValue(prevFrameValue = this.current) {
    this.prevFrameValue = prevFrameValue;
    this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(subscription) {
    return this.on("change", subscription);
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    const unsubscribe = this.events[eventName].add(callback);
    if (eventName === "change") {
      return () => {
        unsubscribe();
        frame.read(() => {
          if (!this.events.change.getSize()) {
            this.stop();
          }
        });
      };
    }
    return unsubscribe;
  }
  clearListeners() {
    for (const eventManagers in this.events) {
      this.events[eventManagers].clear();
    }
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect;
    this.stopPassiveEffect = stopPassiveEffect;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(v2) {
    if (!this.passiveEffect) {
      this.updateAndNotify(v2);
    } else {
      this.passiveEffect(v2, this.updateAndNotify);
    }
  }
  setWithVelocity(prev, current, delta) {
    this.set(current);
    this.prev = void 0;
    this.prevFrameValue = prev;
    this.prevUpdatedAt = this.updatedAt - delta;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(v2, endAnimation = true) {
    this.updateAndNotify(v2);
    this.prev = v2;
    this.prevUpdatedAt = this.prevFrameValue = void 0;
    endAnimation && this.stop();
    if (this.stopPassiveEffect)
      this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(dependent) {
    if (!this.dependents) {
      this.dependents = /* @__PURE__ */ new Set();
    }
    this.dependents.add(dependent);
  }
  removeDependent(dependent) {
    if (this.dependents) {
      this.dependents.delete(dependent);
    }
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const currentTime = time.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
      return 0;
    }
    const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
    return /* @__PURE__ */ velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(startAnimation) {
    this.stop();
    return new Promise((resolve) => {
      this.hasAnimated = true;
      this.animation = startAnimation(resolve);
      if (this.events.animationStart) {
        this.events.animationStart.notify();
      }
    }).then(() => {
      if (this.events.animationComplete) {
        this.events.animationComplete.notify();
      }
      this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    if (this.animation) {
      this.animation.stop();
      if (this.events.animationCancel) {
        this.events.animationCancel.notify();
      }
    }
    this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear();
    this.events.destroy?.notify();
    this.clearListeners();
    this.stop();
    if (this.stopPassiveEffect) {
      this.stopPassiveEffect();
    }
  }
}
function motionValue(init, options) {
  return new MotionValue(init, options);
}
function resolveTransition(transition, parentTransition) {
  if (transition?.inherit && parentTransition) {
    const { inherit: _, ...rest } = transition;
    return { ...parentTransition, ...rest };
  }
  return transition;
}
function getValueTransition(transition, key) {
  const valueTransition = transition?.[key] ?? transition?.["default"] ?? transition;
  if (valueTransition !== transition) {
    return resolveTransition(valueTransition, transition);
  }
  return valueTransition;
}
const underDampedSpring = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
const criticallyDampedSpring = (target) => ({
  type: "spring",
  stiffness: 550,
  damping: target === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
const keyframesTransition = {
  type: "keyframes",
  duration: 0.8
};
const ease = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
const getDefaultTransition = (valueKey, { keyframes: keyframes2 }) => {
  if (keyframes2.length > 2) {
    return keyframesTransition;
  } else if (transformProps.has(valueKey)) {
    return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
  }
  return ease;
};
const orchestrationKeys = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed"
]);
function isTransitionDefined(transition) {
  for (const key in transition) {
    if (!orchestrationKeys.has(key))
      return true;
  }
  return false;
}
const animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
  const valueTransition = getValueTransition(transition, name) || {};
  const delay2 = valueTransition.delay || transition.delay || 0;
  let { elapsed = 0 } = transition;
  elapsed = elapsed - /* @__PURE__ */ secondsToMilliseconds(delay2);
  const options = {
    keyframes: Array.isArray(target) ? target : [null, target],
    ease: "easeOut",
    velocity: value.getVelocity(),
    ...valueTransition,
    delay: -elapsed,
    onUpdate: (v2) => {
      value.set(v2);
      valueTransition.onUpdate && valueTransition.onUpdate(v2);
    },
    onComplete: () => {
      onComplete();
      valueTransition.onComplete && valueTransition.onComplete();
    },
    name,
    motionValue: value,
    element: isHandoff ? void 0 : element
  };
  if (!isTransitionDefined(valueTransition)) {
    Object.assign(options, getDefaultTransition(name, options));
  }
  options.duration && (options.duration = /* @__PURE__ */ secondsToMilliseconds(options.duration));
  options.repeatDelay && (options.repeatDelay = /* @__PURE__ */ secondsToMilliseconds(options.repeatDelay));
  if (options.from !== void 0) {
    options.keyframes[0] = options.from;
  }
  let shouldSkip = false;
  if (options.type === false || options.duration === 0 && !options.repeatDelay) {
    makeAnimationInstant(options);
    if (options.delay === 0) {
      shouldSkip = true;
    }
  }
  if (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations || element?.shouldSkipAnimations || valueTransition.skipAnimations) {
    shouldSkip = true;
    makeAnimationInstant(options);
    options.delay = 0;
  }
  options.allowFlatten = !valueTransition.type && !valueTransition.ease;
  if (shouldSkip && !isHandoff && value.get() !== void 0) {
    const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
    if (finalKeyframe !== void 0) {
      frame.update(() => {
        options.onUpdate(finalKeyframe);
        options.onComplete();
      });
      return;
    }
  }
  return valueTransition.isSync ? new JSAnimation(options) : new AsyncMotionValueAnimation(options);
};
function getValueState(visualElement) {
  const state = [{}, {}];
  visualElement?.values.forEach((value, key) => {
    state[0][key] = value.get();
    state[1][key] = value.getVelocity();
  });
  return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
  if (typeof definition === "function") {
    const [current, velocity] = getValueState(visualElement);
    definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
  }
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  if (typeof definition === "function") {
    const [current, velocity] = getValueState(visualElement);
    definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
  }
  return definition;
}
function resolveVariant(visualElement, definition, custom) {
  const props = visualElement.getProps();
  return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, visualElement);
}
const positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...transformPropOrder
]);
const isKeyframesTarget = (v2) => {
  return Array.isArray(v2);
};
function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, motionValue(value));
  }
}
function resolveFinalValueInKeyframes(v2) {
  return isKeyframesTarget(v2) ? v2[v2.length - 1] || 0 : v2;
}
function setTarget(visualElement, definition) {
  const resolved = resolveVariant(visualElement, definition);
  let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
  target = { ...target, ...transitionEnd };
  for (const key in target) {
    const value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}
const isMotionValue = (value) => Boolean(value && value.getVelocity);
function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}
function addValueToWillChange(visualElement, key) {
  const willChange = visualElement.getValue("willChange");
  if (isWillChangeMotionValue(willChange)) {
    return willChange.add(key);
  } else if (!willChange && MotionGlobalConfig.WillChange) {
    const newWillChange = new MotionGlobalConfig.WillChange("auto");
    visualElement.addValue("willChange", newWillChange);
    newWillChange.add(key);
  }
}
function camelToDash(str) {
  return str.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
}
const optimizedAppearDataId = "framerAppearId";
const optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);
function getOptimisedAppearId(visualElement) {
  return visualElement.props[optimizedAppearDataAttribute];
}
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
  const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay: delay2 = 0, transitionOverride, type } = {}) {
  let { transition, transitionEnd, ...target } = targetAndTransition;
  const defaultTransition = visualElement.getDefaultTransition();
  transition = transition ? resolveTransition(transition, defaultTransition) : defaultTransition;
  const reduceMotion = transition?.reduceMotion;
  const skipAnimations = transition?.skipAnimations;
  if (transitionOverride)
    transition = transitionOverride;
  const animations2 = [];
  const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
  const path = transition?.path;
  if (path) {
    path.animateVisualElement(visualElement, target, transition, delay2, animations2);
  }
  for (const key in target) {
    const value = visualElement.getValue(key, visualElement.latestValues[key] ?? null);
    const valueTarget = target[key];
    if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    const valueTransition = {
      delay: delay2,
      ...getValueTransition(transition || {}, key)
    };
    if (skipAnimations)
      valueTransition.skipAnimations = true;
    const currentValue = value.get();
    if (currentValue !== void 0 && !value.isAnimating() && !Array.isArray(valueTarget) && valueTarget === currentValue && !valueTransition.velocity) {
      frame.update(() => value.set(valueTarget));
      continue;
    }
    let isHandoff = false;
    if (window.MotionHandoffAnimation) {
      const appearId = getOptimisedAppearId(visualElement);
      if (appearId) {
        const startTime = window.MotionHandoffAnimation(appearId, key, frame);
        if (startTime !== null) {
          valueTransition.startTime = startTime;
          isHandoff = true;
        }
      }
    }
    addValueToWillChange(visualElement, key);
    const shouldReduceMotion = reduceMotion ?? visualElement.shouldReduceMotion;
    value.start(animateMotionValue(key, value, valueTarget, shouldReduceMotion && positionalKeys.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
    const animation = value.animation;
    if (animation) {
      animations2.push(animation);
    }
  }
  if (transitionEnd) {
    const applyTransitionEnd = () => frame.update(() => {
      transitionEnd && setTarget(visualElement, transitionEnd);
    });
    if (animations2.length) {
      Promise.all(animations2).then(applyTransitionEnd);
    } else {
      applyTransitionEnd();
    }
  }
  return animations2;
}
function animateVariant(visualElement, variant, options = {}) {
  const resolved = resolveVariant(visualElement, variant, options.type === "exit" ? visualElement.presenceContext?.custom : void 0);
  let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
  const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
    const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
    return animateChildren(visualElement, variant, forwardDelay, delayChildren, staggerChildren, staggerDirection, options);
  } : () => Promise.resolve();
  const { when } = transition;
  if (when) {
    const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
    return first().then(() => last());
  } else {
    return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
  }
}
function animateChildren(visualElement, variant, delay2 = 0, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
  const animations2 = [];
  for (const child of visualElement.variantChildren) {
    child.notify("AnimationStart", variant);
    animations2.push(animateVariant(child, variant, {
      ...options,
      delay: delay2 + (typeof delayChildren === "function" ? 0 : delayChildren) + calcChildStagger(visualElement.variantChildren, child, delayChildren, staggerChildren, staggerDirection)
    }).then(() => child.notify("AnimationComplete", variant)));
  }
  return Promise.all(animations2);
}
function animateVisualElement(visualElement, definition, options = {}) {
  visualElement.notify("AnimationStart", definition);
  let animation;
  if (Array.isArray(definition)) {
    const animations2 = definition.map((variant) => animateVariant(visualElement, variant, options));
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement, definition, options);
  } else {
    const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
    animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
  }
  return animation.then(() => {
    visualElement.notify("AnimationComplete", definition);
  });
}
({
  ...complex
});
({
  ...complex
});
const int = {
  ...number,
  transform: Math.round
};
const transformValueTypes = {
  rotate: degrees,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px
};
const numberValueTypes = {
  // Border props
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  // Positioning props
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  inset: px,
  insetBlock: px,
  insetBlockStart: px,
  insetBlockEnd: px,
  insetInline: px,
  insetInlineStart: px,
  insetInlineEnd: px,
  // Spacing props
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  paddingBlock: px,
  paddingBlockStart: px,
  paddingBlockEnd: px,
  paddingInline: px,
  paddingInlineStart: px,
  paddingInlineEnd: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  marginBlock: px,
  marginBlockStart: px,
  marginBlockEnd: px,
  marginInline: px,
  marginInlineStart: px,
  marginInlineEnd: px,
  // Typography
  fontSize: px,
  // Misc
  backgroundPositionX: px,
  backgroundPositionY: px,
  ...transformValueTypes,
  zIndex: int,
  // SVG
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};
function resolveElements(elementOrSelector, scope, selectorCache) {
  if (elementOrSelector == null) {
    return [];
  }
  if (elementOrSelector instanceof EventTarget) {
    return [elementOrSelector];
  } else if (typeof elementOrSelector === "string") {
    let root = document;
    const elements = root.querySelectorAll(elementOrSelector);
    return elements ? Array.from(elements) : [];
  }
  return Array.from(elementOrSelector).filter((element) => element != null);
}
const getValueAsType = (value, type) => {
  return type && typeof value === "number" ? type.transform(value) : value;
};
function isHTMLElement(element) {
  return isObject(element) && "offsetHeight" in element && !("ownerSVGElement" in element);
}
const { schedule: microtask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, false);
const isDragging = {
  x: false,
  y: false
};
function isDragActive() {
  return isDragging.x || isDragging.y;
}
function setDragLock(axis) {
  if (axis === "x" || axis === "y") {
    if (isDragging[axis]) {
      return null;
    } else {
      isDragging[axis] = true;
      return () => {
        isDragging[axis] = false;
      };
    }
  } else {
    if (isDragging.x || isDragging.y) {
      return null;
    } else {
      isDragging.x = isDragging.y = true;
      return () => {
        isDragging.x = isDragging.y = false;
      };
    }
  }
}
function setupGesture(elementOrSelector, options) {
  const elements = resolveElements(elementOrSelector);
  const gestureAbortController = new AbortController();
  const eventOptions = {
    passive: true,
    ...options,
    signal: gestureAbortController.signal
  };
  const cancel = () => gestureAbortController.abort();
  return [elements, eventOptions, cancel];
}
function isValidHover(event) {
  return !(event.pointerType === "touch" || isDragActive());
}
function hover(elementOrSelector, onHoverStart, options = {}) {
  const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options);
  elements.forEach((element) => {
    let isPressed = false;
    let deferredHoverEnd = false;
    let hoverEndCallback;
    const removePointerLeave = () => {
      element.removeEventListener("pointerleave", onPointerLeave);
    };
    const endHover = (event) => {
      if (hoverEndCallback) {
        hoverEndCallback(event);
        hoverEndCallback = void 0;
      }
      removePointerLeave();
    };
    const onPointerUp = (event) => {
      isPressed = false;
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      if (deferredHoverEnd) {
        deferredHoverEnd = false;
        endHover(event);
      }
    };
    const onPointerDown = () => {
      isPressed = true;
      window.addEventListener("pointerup", onPointerUp, eventOptions);
      window.addEventListener("pointercancel", onPointerUp, eventOptions);
    };
    const onPointerLeave = (leaveEvent) => {
      if (leaveEvent.pointerType === "touch")
        return;
      if (isPressed) {
        deferredHoverEnd = true;
        return;
      }
      endHover(leaveEvent);
    };
    const onPointerEnter = (enterEvent) => {
      if (!isValidHover(enterEvent))
        return;
      deferredHoverEnd = false;
      const onHoverEnd = onHoverStart(element, enterEvent);
      if (typeof onHoverEnd !== "function")
        return;
      hoverEndCallback = onHoverEnd;
      element.addEventListener("pointerleave", onPointerLeave, eventOptions);
    };
    element.addEventListener("pointerenter", onPointerEnter, eventOptions);
    element.addEventListener("pointerdown", onPointerDown, eventOptions);
  });
  return cancel;
}
const isNodeOrChild = (parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};
const isPrimaryPointer = (event) => {
  if (event.pointerType === "mouse") {
    return typeof event.button !== "number" || event.button <= 0;
  } else {
    return event.isPrimary !== false;
  }
};
const keyboardAccessibleElements = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function isElementKeyboardAccessible(element) {
  return keyboardAccessibleElements.has(element.tagName) || element.isContentEditable === true;
}
const textInputElements = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function isElementTextInput(element) {
  return textInputElements.has(element.tagName) || element.isContentEditable === true;
}
const isPressing = /* @__PURE__ */ new WeakSet();
function filterEvents(callback) {
  return (event) => {
    if (event.key !== "Enter")
      return;
    callback(event);
  };
}
function firePointerEvent(target, type) {
  target.dispatchEvent(new PointerEvent("pointer" + type, { isPrimary: true, bubbles: true }));
}
const enableKeyboardPress = (focusEvent, eventOptions) => {
  const element = focusEvent.currentTarget;
  if (!element)
    return;
  const handleKeydown = filterEvents(() => {
    if (isPressing.has(element))
      return;
    firePointerEvent(element, "down");
    const handleKeyup = filterEvents(() => {
      firePointerEvent(element, "up");
    });
    const handleBlur = () => firePointerEvent(element, "cancel");
    element.addEventListener("keyup", handleKeyup, eventOptions);
    element.addEventListener("blur", handleBlur, eventOptions);
  });
  element.addEventListener("keydown", handleKeydown, eventOptions);
  element.addEventListener("blur", () => element.removeEventListener("keydown", handleKeydown), eventOptions);
};
function isValidPressEvent(event) {
  return isPrimaryPointer(event) && !isDragActive();
}
const claimedPointerDownEvents = /* @__PURE__ */ new WeakSet();
function press(targetOrSelector, onPressStart, options = {}) {
  const [targets, eventOptions, cancelEvents] = setupGesture(targetOrSelector, options);
  const startPress = (startEvent) => {
    const target = startEvent.currentTarget;
    if (!isValidPressEvent(startEvent))
      return;
    if (claimedPointerDownEvents.has(startEvent))
      return;
    isPressing.add(target);
    if (options.stopPropagation) {
      claimedPointerDownEvents.add(startEvent);
    }
    const onPressEnd = onPressStart(target, startEvent);
    const onPointerEnd = (endEvent, success) => {
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerCancel);
      if (isPressing.has(target)) {
        isPressing.delete(target);
      }
      if (!isValidPressEvent(endEvent)) {
        return;
      }
      if (typeof onPressEnd === "function") {
        onPressEnd(endEvent, { success });
      }
    };
    const onPointerUp = (upEvent) => {
      onPointerEnd(upEvent, target === window || target === document || options.useGlobalTarget || isNodeOrChild(target, upEvent.target));
    };
    const onPointerCancel = (cancelEvent) => {
      onPointerEnd(cancelEvent, false);
    };
    window.addEventListener("pointerup", onPointerUp, eventOptions);
    window.addEventListener("pointercancel", onPointerCancel, eventOptions);
  };
  targets.forEach((target) => {
    const pointerDownTarget = options.useGlobalTarget ? window : target;
    pointerDownTarget.addEventListener("pointerdown", startPress, eventOptions);
    if (isHTMLElement(target)) {
      target.addEventListener("focus", (event) => enableKeyboardPress(event, eventOptions));
      if (!isElementKeyboardAccessible(target) && !target.hasAttribute("tabindex")) {
        target.tabIndex = 0;
      }
    }
  });
  return cancelEvents;
}
function isSVGElement(element) {
  return isObject(element) && "ownerSVGElement" in element;
}
const resizeHandlers = /* @__PURE__ */ new WeakMap();
let observer;
const getSize = (borderBoxAxis, svgAxis, htmlAxis) => (target, borderBoxSize) => {
  if (borderBoxSize && borderBoxSize[0]) {
    return borderBoxSize[0][borderBoxAxis + "Size"];
  } else if (isSVGElement(target) && "getBBox" in target) {
    return target.getBBox()[svgAxis];
  } else {
    return target[htmlAxis];
  }
};
const getWidth = /* @__PURE__ */ getSize("inline", "width", "offsetWidth");
const getHeight = /* @__PURE__ */ getSize("block", "height", "offsetHeight");
function notifyTarget({ target, borderBoxSize }) {
  resizeHandlers.get(target)?.forEach((handler) => {
    handler(target, {
      get width() {
        return getWidth(target, borderBoxSize);
      },
      get height() {
        return getHeight(target, borderBoxSize);
      }
    });
  });
}
function notifyAll(entries) {
  entries.forEach(notifyTarget);
}
function createResizeObserver() {
  if (typeof ResizeObserver === "undefined")
    return;
  observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
  if (!observer)
    createResizeObserver();
  const elements = resolveElements(target);
  elements.forEach((element) => {
    let elementHandlers = resizeHandlers.get(element);
    if (!elementHandlers) {
      elementHandlers = /* @__PURE__ */ new Set();
      resizeHandlers.set(element, elementHandlers);
    }
    elementHandlers.add(handler);
    observer?.observe(element);
  });
  return () => {
    elements.forEach((element) => {
      const elementHandlers = resizeHandlers.get(element);
      elementHandlers?.delete(handler);
      if (!elementHandlers?.size) {
        observer?.unobserve(element);
      }
    });
  };
}
const windowCallbacks = /* @__PURE__ */ new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
  windowResizeHandler = () => {
    const info = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    windowCallbacks.forEach((callback) => callback(info));
  };
  window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
  windowCallbacks.add(callback);
  if (!windowResizeHandler)
    createWindowResizeHandler();
  return () => {
    windowCallbacks.delete(callback);
    if (!windowCallbacks.size && typeof windowResizeHandler === "function") {
      window.removeEventListener("resize", windowResizeHandler);
      windowResizeHandler = void 0;
    }
  };
}
function resize(a, b2) {
  return typeof a === "function" ? resizeWindow(a) : resizeElement(a, b2);
}
function isSVGSVGElement(element) {
  return isSVGElement(element) && element.tagName === "svg";
}
const createAxisDelta = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
const createDelta = () => ({
  x: createAxisDelta(),
  y: createAxisDelta()
});
const createAxis = () => ({ min: 0, max: 0 });
const createBox = () => ({
  x: createAxis(),
  y: createAxis()
});
function isAnimationControls(v2) {
  return v2 !== null && typeof v2 === "object" && typeof v2.start === "function";
}
function isVariantLabel(v2) {
  return typeof v2 === "string" || Array.isArray(v2);
}
const variantPriorityOrder = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
];
const variantProps = ["initial", ...variantPriorityOrder];
function isControllingVariants(props) {
  return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}
let featureDefinitions = {};
function setFeatureDefinitions(definitions) {
  featureDefinitions = definitions;
}
function getFeatureDefinitions() {
  return featureDefinitions;
}
class Feature {
  constructor(node) {
    this.isMounted = false;
    this.node = node;
  }
  update() {
  }
}
function convertBoundingBoxToBox({ top, left, right, bottom }) {
  return {
    x: { min: left, max: right },
    y: { min: top, max: bottom }
  };
}
function convertBoxToBoundingBox({ x, y }) {
  return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
function transformBoxPoints(point, transformPoint2) {
  if (!transformPoint2)
    return point;
  const topLeft = transformPoint2({ x: point.left, y: point.top });
  const bottomRight = transformPoint2({ x: point.right, y: point.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale({ scale: scale2, scaleX: scaleX2, scaleY: scaleY2 }) {
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX2) || !isIdentityScale(scaleY2);
}
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}
function scalePoint(point, scale2, originPoint) {
  const distanceFromOrigin = point - originPoint;
  const scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point = scalePoint(point, boxScale, originPoint);
  }
  return scalePoint(point, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, { x, y }) {
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
const TREE_SCALE_SNAP_MIN = 0.999999999999;
const TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
  const treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  let node;
  let delta;
  for (let i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    const { visualElement } = node.options;
    if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") {
      continue;
    }
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      translateAxis(box.x, -node.scroll.offset.x);
      translateAxis(box.y, -node.scroll.offset.y);
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues, node.layout?.layoutBox);
    }
  }
  if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) {
    treeScale.x = 1;
  }
  if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) {
    treeScale.y = 1;
  }
}
function translateAxis(axis, distance2) {
  axis.min += distance2;
  axis.max += distance2;
}
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
  const originPoint = mixNumber$1(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
function resolveAxisTranslate(value, axis) {
  if (typeof value === "string") {
    return parseFloat(value) / 100 * (axis.max - axis.min);
  }
  return value;
}
function transformBox(box, transform, sourceBox) {
  const resolveBox = sourceBox ?? box;
  transformAxis(box.x, resolveAxisTranslate(transform.x, resolveBox.x), transform.scaleX, transform.scale, transform.originX);
  transformAxis(box.y, resolveAxisTranslate(transform.y, resolveBox.y), transform.scaleY, transform.scale, transform.originY);
}
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  const viewportBox = measureViewportBox(element, transformPagePoint);
  const { scroll } = rootProjectionNode2;
  if (scroll) {
    translateAxis(viewportBox.x, scroll.offset.x);
    translateAxis(viewportBox.y, scroll.offset.y);
  }
  return viewportBox;
}
const translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
const numTransforms = transformPropOrder.length;
function buildTransform(latestValues, transform, transformTemplate) {
  let transformString = "";
  let transformIsDefault = true;
  for (let i = 0; i < numTransforms; i++) {
    const key = transformPropOrder[i];
    const value = latestValues[key];
    if (value === void 0)
      continue;
    let valueIsDefault = true;
    if (typeof value === "number") {
      valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
    } else {
      const parsed = parseFloat(value);
      valueIsDefault = key.startsWith("scale") ? parsed === 1 : parsed === 0;
    }
    if (!valueIsDefault || transformTemplate) {
      const valueAsType = getValueAsType(value, numberValueTypes[key]);
      if (!valueIsDefault) {
        transformIsDefault = false;
        const transformName = translateAlias[key] || key;
        transformString += `${transformName}(${valueAsType}) `;
      }
      if (transformTemplate) {
        transform[key] = valueAsType;
      }
    }
  }
  const pathRotation = latestValues.pathRotation;
  if (pathRotation) {
    transformIsDefault = false;
    transformString += `rotate(${getValueAsType(pathRotation, numberValueTypes.pathRotation)}) `;
  }
  transformString = transformString.trim();
  if (transformTemplate) {
    transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
  } else if (transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}
function buildHTMLStyles(state, latestValues, transformTemplate) {
  const { style, vars, transformOrigin } = state;
  let hasTransform2 = false;
  let hasTransformOrigin = false;
  for (const key in latestValues) {
    const value = latestValues[key];
    if (transformProps.has(key)) {
      hasTransform2 = true;
      continue;
    } else if (isCSSVariableName(key)) {
      vars[key] = value;
      continue;
    } else {
      const valueAsType = getValueAsType(value, numberValueTypes[key]);
      if (key.startsWith("origin")) {
        hasTransformOrigin = true;
        transformOrigin[key] = valueAsType;
      } else {
        style[key] = valueAsType;
      }
    }
  }
  if (!latestValues.transform) {
    if (hasTransform2 || transformTemplate) {
      style.transform = buildTransform(latestValues, state.transform, transformTemplate);
    } else if (style.transform) {
      style.transform = "none";
    }
  }
  if (hasTransformOrigin) {
    const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min)
    return 0;
  return pixels / (axis.max - axis.min) * 100;
}
const correctBorderRadius = {
  correct: (latest, node) => {
    if (!node.target)
      return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    const x = pixelsToPercent(latest, node.target.x);
    const y = pixelsToPercent(latest, node.target.y);
    return `${x}% ${y}%`;
  }
};
const correctBoxShadow = {
  correct: (latest, { treeScale, projectionDelta }) => {
    const original = latest;
    const shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    const template = complex.createTransformer(latest);
    const offset = typeof shadow[0] !== "number" ? 1 : 0;
    const xScale = projectionDelta.x.scale * treeScale.x;
    const yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    const averageScale = mixNumber$1(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number")
      shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number")
      shadow[3 + offset] /= averageScale;
    return template(shadow);
  }
};
const scaleCorrectors = {
  borderRadius: {
    ...correctBorderRadius,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};
function isForcedMotionValue(key, { layout: layout2, layoutId }) {
  return transformProps.has(key) || key.startsWith("origin") || (layout2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}
function scrapeMotionValuesFromProps$1(props, prevProps, visualElement) {
  const style = props.style;
  const prevStyle = prevProps?.style;
  const newValues = {};
  if (!style)
    return newValues;
  for (const key in style) {
    if (isMotionValue(style[key]) || prevStyle && isMotionValue(prevStyle[key]) || isForcedMotionValue(key, props) || visualElement?.getValue(key)?.liveStyle !== void 0) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}
const dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
const camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
  attrs.pathLength = 1;
  const keys = useDashCase ? dashKeys : camelKeys;
  attrs[keys.offset] = `${-offset}`;
  attrs[keys.array] = `${length} ${spacing}`;
}
const cssMotionPathProperties = [
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function buildSVGAttrs(state, {
  attrX,
  attrY,
  attrScale,
  pathLength,
  pathSpacing = 1,
  pathOffset = 0,
  // This is object creation, which we try to avoid per-frame.
  ...latest
}, isSVGTag2, transformTemplate, styleProp) {
  buildHTMLStyles(state, latest, transformTemplate);
  if (isSVGTag2) {
    if (state.style.viewBox) {
      state.attrs.viewBox = state.style.viewBox;
    }
    return;
  }
  state.attrs = state.style;
  state.style = {};
  const { attrs, style } = state;
  if (attrs.transform) {
    style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (style.transform || attrs.transformOrigin) {
    style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
    delete attrs.transformOrigin;
  }
  if (style.transform) {
    style.transformBox = styleProp?.transformBox ?? "fill-box";
    delete attrs.transformBox;
  }
  for (const key of cssMotionPathProperties) {
    if (attrs[key] !== void 0) {
      style[key] = attrs[key];
      delete attrs[key];
    }
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (attrScale !== void 0)
    attrs.scale = attrScale;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}
const isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
  const newValues = scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
  for (const key in props) {
    if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
      const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}
const numVariantProps = variantProps.length;
function getVariantContext(visualElement) {
  if (!visualElement)
    return void 0;
  if (!visualElement.isControllingVariants) {
    const context2 = visualElement.parent ? getVariantContext(visualElement.parent) || {} : {};
    if (visualElement.props.initial !== void 0) {
      context2.initial = visualElement.props.initial;
    }
    return context2;
  }
  const context = {};
  for (let i = 0; i < numVariantProps; i++) {
    const name = variantProps[i];
    const prop = visualElement.props[name];
    if (isVariantLabel(prop) || prop === false) {
      context[name] = prop;
    }
  }
  return context;
}
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  const prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (let i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i])
      return false;
  }
  return true;
}
const reversePriorityOrder = [...variantPriorityOrder].reverse();
const numAnimationTypes = variantPriorityOrder.length;
function createAnimateFunction(visualElement) {
  return (animations2) => {
    return Promise.all(animations2.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
  };
}
function createAnimationState(visualElement) {
  let animate = createAnimateFunction(visualElement);
  let state = createState();
  let isInitialRender = true;
  let wasReset = false;
  const buildResolvedTypeValues = (type) => (acc, definition) => {
    const resolved = resolveVariant(visualElement, definition, type === "exit" ? visualElement.presenceContext?.custom : void 0);
    if (resolved) {
      const { transition, transitionEnd, ...target } = resolved;
      acc = { ...acc, ...target, ...transitionEnd };
    }
    return acc;
  };
  function setAnimateFunction(makeAnimator) {
    animate = makeAnimator(visualElement);
  }
  function animateChanges(changedActiveType) {
    const { props } = visualElement;
    const context = getVariantContext(visualElement.parent) || {};
    const animations2 = [];
    const removedKeys = /* @__PURE__ */ new Set();
    let encounteredKeys = {};
    let removedVariantIndex = Infinity;
    for (let i = 0; i < numAnimationTypes; i++) {
      const type = reversePriorityOrder[i];
      const typeState = state[type];
      const prop = props[type] !== void 0 ? props[type] : context[type];
      const propIsVariant = isVariantLabel(prop);
      const activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false)
        removedVariantIndex = i;
      let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && (isInitialRender || wasReset) && visualElement.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = { ...encounteredKeys };
      if (
        // If it isn't active and hasn't *just* been set as inactive
        !typeState.isActive && activeDelta === null || // If we didn't and don't have any defined prop for this animation type
        !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
        isAnimationControls(prop) || typeof prop === "boolean"
      ) {
        continue;
      }
      if (type === "exit" && typeState.isActive && activeDelta !== true) {
        if (typeState.prevResolvedValues) {
          encounteredKeys = {
            ...encounteredKeys,
            ...typeState.prevResolvedValues
          };
        }
        continue;
      }
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange || // If we're making this variant active, we want to always make it active
      type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || // If we removed a higher-priority variant (i is in reverse order)
      i > removedVariantIndex && propIsVariant;
      let handledRemovedValues = false;
      const definitionList = Array.isArray(prop) ? prop : [prop];
      let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
      if (activeDelta === false)
        resolvedValues = {};
      const { prevResolvedValues = {} } = typeState;
      const allKeys = {
        ...prevResolvedValues,
        ...resolvedValues
      };
      const markToAnimate = (key) => {
        shouldAnimateType = true;
        if (removedKeys.has(key)) {
          handledRemovedValues = true;
          removedKeys.delete(key);
        }
        typeState.needsAnimating[key] = true;
        const motionValue2 = visualElement.getValue(key);
        if (motionValue2)
          motionValue2.liveStyle = false;
      };
      for (const key in allKeys) {
        const next = resolvedValues[key];
        const prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key))
          continue;
        let valueHasChanged = false;
        if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
          valueHasChanged = !shallowCompare(next, prev) || variantDidChange;
        } else {
          valueHasChanged = next !== prev;
        }
        if (valueHasChanged) {
          if (next !== void 0 && next !== null) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = { ...encounteredKeys, ...resolvedValues };
      }
      if ((isInitialRender || wasReset) && visualElement.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      const willAnimateViaParent = isInherited && variantDidChange;
      const needsAnimating = !willAnimateViaParent || handledRemovedValues;
      if (shouldAnimateType && needsAnimating) {
        animations2.push(...definitionList.map((animation) => {
          const options = { type };
          if (typeof animation === "string" && (isInitialRender || wasReset) && !willAnimateViaParent && visualElement.manuallyAnimateOnMount && visualElement.parent) {
            const { parent } = visualElement;
            const parentVariant = resolveVariant(parent, animation);
            if (parent.enteringChildren && parentVariant) {
              const { delayChildren } = parentVariant.transition || {};
              options.delay = calcChildStagger(parent.enteringChildren, visualElement, delayChildren);
            }
          }
          return {
            animation,
            options
          };
        }));
      }
    }
    if (removedKeys.size) {
      const fallbackAnimation = {};
      if (typeof props.initial !== "boolean") {
        const initialTransition = resolveVariant(visualElement, Array.isArray(props.initial) ? props.initial[0] : props.initial);
        if (initialTransition && initialTransition.transition) {
          fallbackAnimation.transition = initialTransition.transition;
        }
      }
      removedKeys.forEach((key) => {
        const fallbackTarget = visualElement.getBaseTarget(key);
        const motionValue2 = visualElement.getValue(key);
        if (motionValue2)
          motionValue2.liveStyle = true;
        fallbackAnimation[key] = fallbackTarget ?? null;
      });
      animations2.push({ animation: fallbackAnimation });
    }
    let shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    wasReset = false;
    return shouldAnimate ? animate(animations2) : Promise.resolve();
  }
  function setActive(type, isActive) {
    if (state[type].isActive === isActive)
      return Promise.resolve();
    visualElement.variantChildren?.forEach((child) => child.animationState?.setActive(type, isActive));
    state[type].isActive = isActive;
    const animations2 = animateChanges(type);
    for (const key in state) {
      state[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: () => state,
    reset: () => {
      state = createState();
      wasReset = true;
    }
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive = false) {
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  return {
    animate: createTypeState(true),
    whileInView: createTypeState(),
    whileHover: createTypeState(),
    whileTap: createTypeState(),
    whileDrag: createTypeState(),
    whileFocus: createTypeState(),
    exit: createTypeState()
  };
}
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}
function copyAxisDeltaInto(delta, originDelta) {
  delta.translate = originDelta.translate;
  delta.scale = originDelta.scale;
  delta.originPoint = originDelta.originPoint;
  delta.origin = originDelta.origin;
}
const SCALE_PRECISION = 1e-4;
const SCALE_MIN = 1 - SCALE_PRECISION;
const SCALE_MAX = 1 + SCALE_PRECISION;
const TRANSLATE_PRECISION = 0.01;
const TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
const TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
  return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin;
  delta.originPoint = mixNumber$1(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  delta.translate = mixNumber$1(target.min, target.max, delta.origin) - delta.originPoint;
  if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) {
    delta.scale = 1;
  }
  if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) {
    delta.translate = 0;
  }
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
  calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
}
function calcRelativeAxis(target, relative, parent, anchor = 0) {
  const anchorPoint = anchor ? mixNumber$1(parent.min, parent.max, anchor) : parent.min;
  target.min = anchorPoint + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent, anchor) {
  calcRelativeAxis(target.x, relative.x, parent.x, anchor?.x);
  calcRelativeAxis(target.y, relative.y, parent.y, anchor?.y);
}
function calcRelativeAxisPosition(target, layout2, parent, anchor = 0) {
  const anchorPoint = anchor ? mixNumber$1(parent.min, parent.max, anchor) : parent.min;
  target.min = layout2.min - anchorPoint;
  target.max = target.min + calcLength(layout2);
}
function calcRelativePosition(target, layout2, parent, anchor) {
  calcRelativeAxisPosition(target.x, layout2.x, parent.x, anchor?.x);
  calcRelativeAxisPosition(target.y, layout2.y, parent.y, anchor?.y);
}
function removePointDelta(point, translate, scale2, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }
  return point;
}
function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    const relativeProgress = mixNumber$1(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number")
    return;
  let originPoint = mixNumber$1(originAxis.min, originAxis.max, origin);
  if (axis === originAxis)
    originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
const xKeys = ["x", "scaleX", "originX"];
const yKeys = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
  removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
}
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b2) {
  return a.min === b2.min && a.max === b2.max;
}
function boxEquals(a, b2) {
  return axisEquals(a.x, b2.x) && axisEquals(a.y, b2.y);
}
function axisEqualsRounded(a, b2) {
  return Math.round(a.min) === Math.round(b2.min) && Math.round(a.max) === Math.round(b2.max);
}
function boxEqualsRounded(a, b2) {
  return axisEqualsRounded(a.x, b2.x) && axisEqualsRounded(a.y, b2.y);
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}
function axisDeltaEquals(a, b2) {
  return a.translate === b2.translate && a.scale === b2.scale && a.originPoint === b2.originPoint;
}
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}
function buildProjectionTransform(delta, treeScale, latestTransform) {
  let transform = "";
  const xTranslate = delta.x.translate / treeScale.x;
  const yTranslate = delta.y.translate / treeScale.y;
  const zTranslate = latestTransform?.z || 0;
  if (xTranslate || yTranslate || zTranslate) {
    transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
  }
  if (treeScale.x !== 1 || treeScale.y !== 1) {
    transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
  }
  if (latestTransform) {
    const { transformPerspective, rotate: rotate2, pathRotation, rotateX, rotateY, skewX, skewY } = latestTransform;
    if (transformPerspective)
      transform = `perspective(${transformPerspective}px) ${transform}`;
    if (rotate2)
      transform += `rotate(${rotate2}deg) `;
    if (pathRotation)
      transform += `rotate(${pathRotation}deg) `;
    if (rotateX)
      transform += `rotateX(${rotateX}deg) `;
    if (rotateY)
      transform += `rotateY(${rotateY}deg) `;
    if (skewX)
      transform += `skewX(${skewX}deg) `;
    if (skewY)
      transform += `skewY(${skewY}deg) `;
  }
  const elementScaleX = delta.x.scale * treeScale.x;
  const elementScaleY = delta.y.scale * treeScale.y;
  if (elementScaleX !== 1 || elementScaleY !== 1) {
    transform += `scale(${elementScaleX}, ${elementScaleY})`;
  }
  return transform || "none";
}
const borderLabels = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius"
];
const numBorders = borderLabels.length;
const asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
const isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
  if (shouldCrossfadeOpacity) {
    target.opacity = mixNumber$1(0, lead.opacity ?? 1, easeCrossfadeIn(progress2));
    target.opacityExit = mixNumber$1(follow.opacity ?? 1, 0, easeCrossfadeOut(progress2));
  } else if (isOnlyMember) {
    target.opacity = mixNumber$1(follow.opacity ?? 1, lead.opacity ?? 1, progress2);
  }
  for (let i = 0; i < numBorders; i++) {
    const borderLabel = borderLabels[i];
    let followRadius = getRadius(follow, borderLabel);
    let leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0)
      continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mixNumber$1(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mixNumber$1(follow.rotate || 0, lead.rotate || 0, progress2);
  }
}
function getRadius(values, radiusName) {
  return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
const easeCrossfadeIn = /* @__PURE__ */ compress(0, 0.5, circOut);
const easeCrossfadeOut = /* @__PURE__ */ compress(0.5, 0.95, noop);
function compress(min, max, easing) {
  return (p) => {
    if (p < min)
      return 0;
    if (p > max)
      return 1;
    return easing(/* @__PURE__ */ progress(min, max, p));
  };
}
function animateSingleValue(value, keyframes2, options) {
  const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
  motionValue$1.start(animateMotionValue("", motionValue$1, keyframes2, options));
  return motionValue$1.animation;
}
function addDomEvent(target, eventName, handler, options = { passive: true }) {
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler);
}
const compareByDepth = (a, b2) => a.depth - b2.depth;
class FlatTree {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  }
  remove(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  }
}
function delay(callback, timeout) {
  const start = time.now();
  const checkElapsed = ({ timestamp }) => {
    const elapsed = timestamp - start;
    if (elapsed >= timeout) {
      cancelFrame(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  frame.setup(checkElapsed, true);
  return () => cancelFrame(checkElapsed);
}
function resolveMotionValue(value) {
  return isMotionValue(value) ? value.get() : value;
}
class NodeStack {
  constructor() {
    this.members = [];
  }
  add(node) {
    addUniqueItem(this.members, node);
    for (let i = this.members.length - 1; i >= 0; i--) {
      const member = this.members[i];
      if (member === node || member === this.lead || member === this.prevLead)
        continue;
      const inst = member.instance;
      if ((!inst || inst.isConnected === false) && !member.snapshot) {
        removeItem(this.members, member);
        member.unmount();
      }
    }
    node.scheduleRender();
  }
  remove(node) {
    removeItem(this.members, node);
    if (node === this.prevLead)
      this.prevLead = void 0;
    if (node === this.lead) {
      const prevLead = this.members[this.members.length - 1];
      if (prevLead)
        this.promote(prevLead);
    }
  }
  relegate(node) {
    for (let i = this.members.indexOf(node) - 1; i >= 0; i--) {
      const member = this.members[i];
      if (member.isPresent !== false && member.instance?.isConnected !== false) {
        this.promote(member);
        return true;
      }
    }
    return false;
  }
  promote(node, preserveFollowOpacity) {
    const prevLead = this.lead;
    if (node === prevLead)
      return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.updateSnapshot();
      node.scheduleRender();
      const { layoutDependency: prevDep } = prevLead.options;
      const { layoutDependency: nextDep } = node.options;
      if (prevDep === void 0 || prevDep !== nextDep) {
        node.resumeFrom = prevLead;
        if (preserveFollowOpacity)
          prevLead.preserveOpacity = true;
        if (prevLead.snapshot) {
          node.snapshot = prevLead.snapshot;
          node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
        }
        if (node.root?.isUpdating)
          node.isLayoutDirty = true;
      }
      if (node.options.crossfade === false)
        prevLead.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((member) => {
      member.options.onExitComplete?.();
      member.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((member) => member.instance && member.scheduleRender(false));
  }
  removeLeadSnapshot() {
    if (this.lead?.snapshot)
      this.lead.snapshot = void 0;
  }
}
const globalProjectionState = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: true,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: false
};
const transformAxes = ["", "X", "Y", "Z"];
const animationTarget = 1e3;
let id$1 = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
  const { latestValues } = visualElement;
  if (latestValues[key]) {
    values[key] = latestValues[key];
    visualElement.setStaticValue(key, 0);
    if (sharedAnimationValues) {
      sharedAnimationValues[key] = 0;
    }
  }
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
  projectionNode.hasCheckedOptimisedAppear = true;
  if (projectionNode.root === projectionNode)
    return;
  const { visualElement } = projectionNode.options;
  if (!visualElement)
    return;
  const appearId = getOptimisedAppearId(visualElement);
  if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
    const { layout: layout2, layoutId } = projectionNode.options;
    window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout2 || layoutId));
  }
  const { parent } = projectionNode;
  if (parent && !parent.hasCheckedOptimisedAppear) {
    cancelTreeOptimisedTransformAnimations(parent);
  }
}
function createProjectionNode$1({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
  return class ProjectionNode {
    constructor(latestValues = {}, parent = defaultParent?.()) {
      this.id = id$1++;
      this.animationId = 0;
      this.animationCommitId = 0;
      this.children = /* @__PURE__ */ new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.isProjectionDirty = false;
      this.isSharedProjectionDirty = false;
      this.isTransformDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.hasCheckedOptimisedAppear = false;
      this.treeScale = { x: 1, y: 1 };
      this.eventHandlers = /* @__PURE__ */ new Map();
      this.hasTreeAnimated = false;
      this.layoutVersion = 0;
      this.updateScheduled = false;
      this.scheduleUpdate = () => this.update();
      this.projectionUpdateScheduled = false;
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.projectionUpdateScheduled = false;
        this.nodes.forEach(propagateDirtyNodes);
        this.nodes.forEach(resolveTargetDelta);
        this.nodes.forEach(calcProjection);
        this.nodes.forEach(cleanDirtyNodes);
      };
      this.resolvedRelativeTargetAt = 0;
      this.linkedParentVersion = 0;
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */ new Map();
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [...parent.path, parent] : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this)
        this.nodes = new FlatTree();
    }
    addEventListener(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      const subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager && subscriptionManager.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    /**
     * Lifecycles
     */
    mount(instance) {
      if (this.instance)
        return;
      this.isSVG = isSVGElement(instance) && !isSVGSVGElement(instance);
      this.instance = instance;
      const { layoutId, layout: layout2, visualElement } = this.options;
      if (visualElement && !visualElement.current) {
        visualElement.mount(instance);
      }
      this.root.nodes.add(this);
      this.parent && this.parent.children.add(this);
      if (this.root.hasTreeAnimated && (layout2 || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        let cancelDelay;
        let innerWidth = 0;
        const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
        frame.read(() => {
          innerWidth = window.innerWidth;
        });
        attachResizeListener(instance, () => {
          const newInnerWidth = window.innerWidth;
          if (newInnerWidth === innerWidth)
            return;
          innerWidth = newInnerWidth;
          this.root.updateBlockedByResize = true;
          cancelDelay && cancelDelay();
          cancelDelay = delay(resizeUnblockUpdate, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement && (layoutId || layout2)) {
        this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout: newLayout }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0;
            this.relativeTarget = void 0;
            return;
          }
          const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
          const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
          const hasTargetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout);
          const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
          if (this.options.layoutRoot || this.resumeFrom || hasOnlyRelativeTargetChanged || hasLayoutChanged && (hasTargetChanged || !this.currentAnimation)) {
            if (this.resumeFrom) {
              this.resumingFrom = this.resumeFrom;
              this.resumingFrom.resumingFrom = void 0;
            }
            const animationOptions = {
              ...getValueTransition(layoutTransition, "layout"),
              onPlay: onLayoutAnimationStart,
              onComplete: onLayoutAnimationComplete
            };
            if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            this.startAnimation(animationOptions);
            this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged, animationOptions.path);
          } else {
            if (!hasLayoutChanged) {
              finishAnimation(this);
            }
            if (this.isLead() && this.options.onExitComplete) {
              this.options.onExitComplete();
            }
          }
          this.targetLayout = newLayout;
        });
      }
    }
    unmount() {
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      const stack = this.getStack();
      stack && stack.remove(this);
      this.parent && this.parent.children.delete(this);
      this.instance = void 0;
      this.eventHandlers.clear();
      cancelFrame(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    // Note: currently only running on root node
    startUpdate() {
      if (this.isUpdateBlocked())
        return;
      this.isUpdating = true;
      this.nodes && this.nodes.forEach(resetSkewAndRotation);
      this.animationId++;
    }
    getTransformTemplate() {
      const { visualElement } = this.options;
      return visualElement && visualElement.getProps().transformTemplate;
    }
    willUpdate(shouldNotifyListeners = true) {
      this.root.hasTreeAnimated = true;
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
        cancelTreeOptimisedTransformAnimations(this);
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty)
        return;
      this.isLayoutDirty = true;
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        node.shouldResetTransform = true;
        if (typeof node.latestValues.x === "string" || typeof node.latestValues.y === "string") {
          node.isLayoutDirty = true;
        }
        node.updateScroll("snapshot");
        if (node.options.layoutRoot) {
          node.willUpdate(false);
        }
      }
      const { layoutId, layout: layout2 } = this.options;
      if (layoutId === void 0 && !layout2)
        return;
      const transformTemplate = this.getTransformTemplate();
      this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    update() {
      this.updateScheduled = false;
      const updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        const wasBlockedByResize = this.updateBlockedByResize;
        this.unblockUpdate();
        this.updateBlockedByResize = false;
        this.clearAllSnapshots();
        if (wasBlockedByResize) {
          this.nodes.forEach(forceLayoutMeasure);
        }
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(clearIsLayoutDirty);
        return;
      }
      this.animationCommitId = this.animationId;
      if (!this.isUpdating) {
        this.nodes.forEach(clearIsLayoutDirty);
      } else {
        this.isUpdating = false;
        this.nodes.forEach(ensureDraggedNodesSnapshotted);
        this.nodes.forEach(resetTransformStyle);
        this.nodes.forEach(updateLayout);
        this.nodes.forEach(notifyLayoutUpdate);
      }
      this.clearAllSnapshots();
      const now2 = time.now();
      frameData.delta = clamp(0, 1e3 / 60, now2 - frameData.timestamp);
      frameData.timestamp = now2;
      frameData.isProcessing = true;
      frameSteps.update.process(frameData);
      frameSteps.preRender.process(frameData);
      frameSteps.render.process(frameData);
      frameData.isProcessing = false;
    }
    didUpdate() {
      if (!this.updateScheduled) {
        this.updateScheduled = true;
        microtask.read(this.scheduleUpdate);
      }
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    }
    scheduleUpdateProjection() {
      if (!this.projectionUpdateScheduled) {
        this.projectionUpdateScheduled = true;
        frame.preRender(this.updateProjection, false, true);
      }
    }
    scheduleCheckAfterUnmount() {
      frame.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      if (this.snapshot || !this.instance)
        return;
      this.snapshot = this.measure();
      if (this.snapshot && !calcLength(this.snapshot.measuredBox.x) && !calcLength(this.snapshot.measuredBox.y)) {
        this.snapshot = void 0;
      }
    }
    updateLayout() {
      if (!this.instance)
        return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          node.updateScroll();
        }
      }
      const prevLayout = this.layout;
      this.layout = this.measure(false);
      this.layoutVersion++;
      if (!this.layoutCorrected)
        this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement } = this.options;
      visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
    }
    updateScroll(phase = "measure") {
      let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
        needsMeasurement = false;
      }
      if (needsMeasurement && this.instance) {
        const isRoot = checkIsScrollRoot(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase,
          isRoot,
          offset: measureScroll(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : isRoot
        };
      }
    }
    resetTransform() {
      if (!resetTransform)
        return;
      const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      const transformTemplate = this.getTransformTemplate();
      const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && this.instance && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(removeTransform = true) {
      const pageBox = this.measurePageBox();
      let layoutBox = this.removeElementScroll(pageBox);
      if (removeTransform) {
        layoutBox = this.removeTransform(layoutBox);
      }
      roundBox(layoutBox);
      return {
        animationId: this.root.animationId,
        measuredBox: pageBox,
        layoutBox,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement } = this.options;
      if (!visualElement)
        return createBox();
      const box = visualElement.measureViewportBox();
      const wasInScrollRoot = this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot);
      if (!wasInScrollRoot) {
        const { scroll } = this.root;
        if (scroll) {
          translateAxis(box.x, scroll.offset.x);
          translateAxis(box.y, scroll.offset.y);
        }
      }
      return box;
    }
    removeElementScroll(box) {
      const boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      if (this.scroll?.wasRoot) {
        return boxWithoutScroll;
      }
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        const { scroll, options } = node;
        if (node !== this.root && scroll && options.layoutScroll) {
          if (scroll.wasRoot) {
            copyBoxInto(boxWithoutScroll, box);
          }
          translateAxis(boxWithoutScroll.x, scroll.offset.x);
          translateAxis(boxWithoutScroll.y, scroll.offset.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = false, output) {
      const withTransforms = output || createBox();
      copyBoxInto(withTransforms, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          translateAxis(withTransforms.x, -node.scroll.offset.x);
          translateAxis(withTransforms.y, -node.scroll.offset.y);
        }
        if (!hasTransform(node.latestValues))
          continue;
        transformBox(withTransforms, node.latestValues, node.layout?.layoutBox);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues, this.layout?.layoutBox);
      }
      return withTransforms;
    }
    removeTransform(box) {
      const boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!hasTransform(node.latestValues))
          continue;
        let sourceBox;
        if (node.instance) {
          hasScale(node.latestValues) && node.updateSnapshot();
          sourceBox = createBox();
          copyBoxInto(sourceBox, node.measurePageBox());
        }
        removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot?.layoutBox, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    }
    setTargetDelta(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
      this.isProjectionDirty = true;
    }
    setOptions(options) {
      this.options = {
        ...this.options,
        ...options,
        crossfade: options.crossfade !== void 0 ? options.crossfade : true
      };
    }
    clearMeasurements() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      if (!this.relativeParent)
        return;
      if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
        this.relativeParent.resolveTargetDelta(true);
      }
    }
    resolveTargetDelta(forceRecalculation = false) {
      const lead = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
      this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
      this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
      if (canSkip)
        return;
      const { layout: layout2, layoutId } = this.options;
      if (!this.layout || !(layout2 || layoutId))
        return;
      this.resolvedRelativeTargetAt = frameData.timestamp;
      const relativeParent = this.getClosestProjectingParent();
      if (relativeParent && this.linkedParentVersion !== relativeParent.layoutVersion && !relativeParent.options.layoutRoot) {
        this.removeRelativeTarget();
      }
      if (!this.targetDelta && !this.relativeTarget) {
        if (this.options.layoutAnchor !== false && relativeParent && relativeParent.layout) {
          this.createRelativeTarget(relativeParent, this.layout.layoutBox, relativeParent.layout.layoutBox);
        } else {
          this.removeRelativeTarget();
        }
      }
      if (!this.relativeTarget && !this.targetDelta)
        return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
        this.forceRelativeParentToResolveTarget();
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.applyTransform(this.layout.layoutBox, false, this.target);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.layoutBox);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        if (this.options.layoutAnchor !== false && relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
          this.createRelativeTarget(relativeParent, this.target, relativeParent.target);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
        return void 0;
      }
      if (this.parent.isProjecting()) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(relativeParent, layout2, parentLayout) {
      this.relativeParent = relativeParent;
      this.linkedParentVersion = relativeParent.layoutVersion;
      this.forceRelativeParentToResolveTarget();
      this.relativeTarget = createBox();
      this.relativeTargetOrigin = createBox();
      calcRelativePosition(this.relativeTargetOrigin, layout2, parentLayout, this.options.layoutAnchor || void 0);
      copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const lead = this.getLead();
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      let canSkip = true;
      if (this.isProjectionDirty || this.parent?.isProjectionDirty) {
        canSkip = false;
      }
      if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
        canSkip = false;
      }
      if (this.resolvedRelativeTargetAt === frameData.timestamp) {
        canSkip = false;
      }
      if (canSkip)
        return;
      const { layout: layout2, layoutId } = this.options;
      this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout2 || layoutId))
        return;
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      const prevTreeScaleX = this.treeScale.x;
      const prevTreeScaleY = this.treeScale.y;
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
      if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
        lead.target = lead.layout.layoutBox;
        lead.targetWithTransforms = createBox();
      }
      const { target } = lead;
      if (!target) {
        if (this.prevProjectionDelta) {
          this.createProjectionDeltas();
          this.scheduleRender();
        }
        return;
      }
      if (!this.projectionDelta || !this.prevProjectionDelta) {
        this.createProjectionDeltas();
      } else {
        copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
        copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
      }
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(notifyAll2 = true) {
      this.options.visualElement?.scheduleRender();
      if (notifyAll2) {
        const stack = this.getStack();
        stack && stack.scheduleRender();
      }
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = createDelta();
      this.projectionDelta = createDelta();
      this.projectionDeltaWithTransform = createDelta();
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false, pathFn) {
      const snapshot = this.snapshot;
      const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
      const mixedValues = { ...this.latestValues };
      const targetDelta = createDelta();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = void 0;
      }
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      const relativeLayout = createBox();
      const snapshotSource = snapshot ? snapshot.source : void 0;
      const layoutSource = this.layout ? this.layout.source : void 0;
      const isSharedLayoutAnimation = snapshotSource !== layoutSource;
      const stack = this.getStack();
      const isOnlyMember = !stack || stack.members.length <= 1;
      const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      let prevRelativeTarget;
      const interpolate2 = pathFn?.interpolateProjection(delta);
      this.mixTargetDelta = (latest) => {
        const progress2 = latest / 1e3;
        const point = interpolate2?.(progress2);
        if (point) {
          targetDelta.x.translate = point.x;
          targetDelta.x.scale = mixNumber$1(delta.x.scale, 1, progress2);
          targetDelta.x.origin = delta.x.origin;
          targetDelta.x.originPoint = delta.x.originPoint;
          targetDelta.y.translate = point.y;
          targetDelta.y.scale = mixNumber$1(delta.y.scale, 1, progress2);
          targetDelta.y.origin = delta.y.origin;
          targetDelta.y.originPoint = delta.y.originPoint;
        } else {
          mixAxisDeltaLinear(targetDelta.x, delta.x, progress2);
          mixAxisDeltaLinear(targetDelta.y, delta.y, progress2);
        }
        this.setTargetDelta(targetDelta);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0);
          mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress2);
          if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
            this.isProjectionDirty = false;
          }
          if (!prevRelativeTarget)
            prevRelativeTarget = createBox();
          copyBoxInto(prevRelativeTarget, this.relativeTarget);
        }
        if (isSharedLayoutAnimation) {
          this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
        }
        if (point && point.rotate !== void 0) {
          if (!this.animationValues)
            this.animationValues = mixedValues;
          this.animationValues.pathRotation = point.rotate;
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = progress2;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(options) {
      this.notifyListeners("animationStart");
      this.currentAnimation?.stop();
      this.resumingFrom?.currentAnimation?.stop();
      if (this.pendingAnimation) {
        cancelFrame(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = frame.update(() => {
        globalProjectionState.hasAnimatedSinceResize = true;
        this.motionValue || (this.motionValue = motionValue(0));
        this.motionValue.jump(0, false);
        this.currentAnimation = animateSingleValue(this.motionValue, [0, 1e3], {
          ...options,
          velocity: 0,
          isSync: true,
          onUpdate: (latest) => {
            this.mixTargetDelta(latest);
            options.onUpdate && options.onUpdate(latest);
          },
          onStop: () => {
          },
          onComplete: () => {
            options.onComplete && options.onComplete();
            this.completeAnimation();
          }
        });
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      const stack = this.getStack();
      stack && stack.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      if (this.currentAnimation) {
        this.mixTargetDelta && this.mixTargetDelta(animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const lead = this.getLead();
      let { targetWithTransforms, target, layout: layout2, latestValues } = lead;
      if (!targetWithTransforms || !target || !layout2)
        return;
      if (this !== lead && this.layout && layout2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout2.layoutBox)) {
        target = this.target || createBox();
        const xLength = calcLength(this.layout.layoutBox.x);
        target.x.min = lead.target.x.min;
        target.x.max = target.x.min + xLength;
        const yLength = calcLength(this.layout.layoutBox.y);
        target.y.min = lead.target.y.min;
        target.y.max = target.y.min + yLength;
      }
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    }
    registerSharedNode(layoutId, node) {
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      const stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      const config = node.options.initialPromotionConfig;
      node.promote({
        transition: config ? config.transition : void 0,
        preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
      });
    }
    isLead() {
      const stack = this.getStack();
      return stack ? stack.lead === this : true;
    }
    getLead() {
      const { layoutId } = this.options;
      return layoutId ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId } = this.options;
      return layoutId ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId } = this.options;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    }
    promote({ needsReset, transition, preserveFollowOpacity } = {}) {
      const stack = this.getStack();
      if (stack)
        stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition)
        this.setOptions({ transition });
    }
    relegate() {
      const stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    }
    resetSkewAndRotation() {
      const { visualElement } = this.options;
      if (!visualElement)
        return;
      let hasDistortingTransform = false;
      const { latestValues } = visualElement;
      if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) {
        hasDistortingTransform = true;
      }
      if (!hasDistortingTransform)
        return;
      const resetValues = {};
      if (latestValues.z) {
        resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
      }
      for (let i = 0; i < transformAxes.length; i++) {
        resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
        resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
      }
      visualElement.render();
      for (const key in resetValues) {
        visualElement.setStaticValue(key, resetValues[key]);
        if (this.animationValues) {
          this.animationValues[key] = resetValues[key];
        }
      }
      visualElement.scheduleRender();
    }
    applyProjectionStyles(targetStyle, styleProp) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        targetStyle.visibility = "hidden";
        return;
      }
      const transformTemplate = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        targetStyle.visibility = "";
        targetStyle.opacity = "";
        targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
        targetStyle.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return;
      }
      const lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        if (this.options.layoutId) {
          targetStyle.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
          targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          targetStyle.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return;
      }
      targetStyle.visibility = "";
      const valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      let transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        transform = transformTemplate(valuesToRender, transform);
      }
      targetStyle.transform = transform;
      const { x, y } = this.projectionDelta;
      targetStyle.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
      if (lead.animationValues) {
        targetStyle.opacity = lead === this ? valuesToRender.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        targetStyle.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
      }
      for (const key in scaleCorrectors) {
        if (valuesToRender[key] === void 0)
          continue;
        const { correct, applyTo, isCSSVariable } = scaleCorrectors[key];
        const corrected = transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
        if (applyTo) {
          const num = applyTo.length;
          for (let i = 0; i < num; i++) {
            targetStyle[applyTo[i]] = corrected;
          }
        } else {
          if (isCSSVariable) {
            this.options.visualElement.renderState.vars[key] = corrected;
          } else {
            targetStyle[key] = corrected;
          }
        }
      }
      if (this.options.layoutId) {
        targetStyle.pointerEvents = lead === this ? resolveMotionValue(styleProp?.pointerEvents) || "" : "none";
      }
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((node) => node.currentAnimation?.stop());
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  const snapshot = node.resumeFrom?.snapshot || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    const { layoutBox: layout2, measuredBox: measuredLayout } = node.layout;
    const { animationType } = node.options;
    const isShared = snapshot.source !== node.layout.source;
    if (animationType === "size") {
      eachAxis((axis) => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(axisSnapshot);
        axisSnapshot.min = layout2[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (animationType === "x" || animationType === "y") {
      const snapAxis = animationType === "x" ? "y" : "x";
      copyAxisInto(isShared ? snapshot.measuredBox[snapAxis] : snapshot.layoutBox[snapAxis], layout2[snapAxis]);
    } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout2)) {
      eachAxis((axis) => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(layout2[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
        if (node.relativeTarget && !node.currentAnimation) {
          node.isProjectionDirty = true;
          node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
        }
      });
    }
    const layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout2, snapshot.layoutBox);
    const visualDelta = createDelta();
    if (isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
    } else {
      calcBoxDelta(visualDelta, layout2, snapshot.layoutBox);
    }
    const hasLayoutChanged = !isDeltaZero(layoutDelta);
    let hasRelativeLayoutChanged = false;
    if (!node.resumeFrom) {
      const relativeParent = node.getClosestProjectingParent();
      if (relativeParent && !relativeParent.resumeFrom) {
        const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
        if (parentSnapshot && parentLayout) {
          const anchor = node.options.layoutAnchor || void 0;
          const relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox, anchor);
          const relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout2, parentLayout.layoutBox, anchor);
          if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
            hasRelativeLayoutChanged = true;
          }
          if (relativeParent.options.layoutRoot) {
            node.relativeTarget = relativeLayout;
            node.relativeTargetOrigin = relativeSnapshot;
            node.relativeParent = relativeParent;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout2,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeLayoutChanged
    });
  } else if (node.isLead()) {
    const { onExitComplete } = node.options;
    onExitComplete && onExitComplete();
  }
  node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
  if (!node.parent)
    return;
  if (!node.isProjecting()) {
    node.isProjectionDirty = node.parent.isProjectionDirty;
  }
  node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
  node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
  node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function forceLayoutMeasure(node) {
  node.isLayoutDirty = true;
  node.updateLayout();
}
function clearIsLayoutDirty(node) {
  node.isLayoutDirty = false;
}
function ensureDraggedNodesSnapshotted(node) {
  if (node.isAnimationBlocked && node.layout && !node.isLayoutDirty) {
    node.snapshot = node.layout;
    node.isLayoutDirty = true;
  }
}
function resetTransformStyle(node) {
  const { visualElement } = node.options;
  if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
    visualElement.notify("BeforeLayoutMeasure");
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
  node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetSkewAndRotation(node) {
  node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDeltaLinear(output, delta, p) {
  output.translate = mixNumber$1(delta.translate, 0, p);
  output.scale = mixNumber$1(delta.scale, 1, p);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
  output.min = mixNumber$1(from.min, to.min, p);
  output.max = mixNumber$1(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
  mixAxis(output.x, from.x, to.x, p);
  mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}
const defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
const userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
const roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
  axis.min = roundPoint(axis.min);
  axis.max = roundPoint(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout2) {
  return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout2), 0.2);
}
function checkNodeWasScrollRoot(node) {
  return node !== node.root && node.scroll?.wasRoot;
}
const DocumentProjectionNode = createProjectionNode$1({
  attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => true
});
const rootProjectionNode = {
  current: void 0
};
const HTMLProjectionNode = createProjectionNode$1({
  measureScroll: (instance) => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      const documentNode = new DocumentProjectionNode({});
      documentNode.mount(window);
      documentNode.setOptions({ layoutScroll: true });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== void 0 ? value : "none";
  },
  checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
});
const MotionConfigContext = reactExports.createContext({
  transformPagePoint: (p) => p,
  isStatic: false,
  reducedMotion: "never"
});
function usePresence(subscribe = true) {
  const context = reactExports.useContext(PresenceContext);
  if (context === null)
    return [true, null];
  const { isPresent, onExitComplete, register } = context;
  const id2 = reactExports.useId();
  reactExports.useEffect(() => {
    if (subscribe) {
      return register(id2);
    }
  }, [subscribe]);
  const safeToRemove = reactExports.useCallback(() => subscribe && onExitComplete && onExitComplete(id2), [id2, onExitComplete, subscribe]);
  return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
reactExports.createContext({ strict: false });
const featureProps = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let isInitialized = false;
function initFeatureDefinitions() {
  if (isInitialized)
    return;
  const initialFeatureDefinitions = {};
  for (const key in featureProps) {
    initialFeatureDefinitions[key] = {
      isEnabled: (props) => featureProps[key].some((name) => !!props[name])
    };
  }
  setFeatureDefinitions(initialFeatureDefinitions);
  isInitialized = true;
}
function getInitializedFeatureDefinitions() {
  initFeatureDefinitions();
  return getFeatureDefinitions();
}
function loadFeatures(features) {
  const featureDefinitions2 = getInitializedFeatureDefinitions();
  for (const key in features) {
    featureDefinitions2[key] = {
      ...featureDefinitions2[key],
      ...features[key]
    };
  }
  setFeatureDefinitions(featureDefinitions2);
}
const validMotionProps = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}
let shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
  if (typeof isValidProp !== "function")
    return;
  shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
try {
  const emotionPkg = "@emotion/is-prop-valid";
  loadExternalIsValidProp(require(emotionPkg).default);
} catch {
}
function filterProps(props, isDom, forwardMotionProps) {
  const filteredProps = {};
  for (const key in props) {
    if (key === "values" && typeof props.values === "object")
      continue;
    if (isMotionValue(props[key]))
      continue;
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || // If trying to use native HTML drag events, forward drag listeners
    props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}
const MotionContext = /* @__PURE__ */ reactExports.createContext({});
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const { initial, animate } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate) ? animate : void 0
    };
  }
  return props.inherit !== false ? context : {};
}
function useCreateMotionContext(props) {
  const { initial, animate } = getCurrentTreeVariants(props, reactExports.useContext(MotionContext));
  return reactExports.useMemo(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}
const createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({ transformTemplate }, visualState) {
  return reactExports.useMemo(() => {
    const state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, transformTemplate);
    return Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState) {
  const styleProp = props.style || {};
  const style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState));
  return style;
}
function useHTMLProps(props, visualState) {
  const htmlProps = {};
  const style = useStyle(props, visualState);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}
const createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});
function useSVGProps(props, visualState, _isStatic, Component) {
  const visualProps = reactExports.useMemo(() => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, isSVGTag(Component), props.transformTemplate, props.style);
    return {
      ...state.attrs,
      style: { ...state.style }
    };
  }, [visualState]);
  if (props.style) {
    const rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = { ...rawStyles, ...visualProps.style };
  }
  return visualProps;
}
const lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function isSVGComponent(Component) {
  if (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof Component !== "string" || /**
    * If it contains a dash, the element is a custom HTML webcomponent.
    */
    Component.includes("-")
  ) {
    return false;
  } else if (
    /**
     * If it's in our list of lowercase SVG tags, it's an SVG component
     */
    lowercaseSVGElements.indexOf(Component) > -1 || /**
    * If it contains a capital letter, it's an SVG component
    */
    /[A-Z]/u.test(Component)
  ) {
    return true;
  }
  return false;
}
function useRender(Component, props, ref, { latestValues }, isStatic, forwardMotionProps = false, isSVG) {
  const useVisualProps = isSVG ?? isSVGComponent(Component) ? useSVGProps : useHTMLProps;
  const visualProps = useVisualProps(props, latestValues, isStatic, Component);
  const filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
  const elementProps = Component !== reactExports.Fragment ? { ...filteredProps, ...visualProps, ref } : {};
  const { children } = props;
  const renderedChildren = reactExports.useMemo(() => isMotionValue(children) ? children.get() : children, [children]);
  return reactExports.createElement(Component, {
    ...elementProps,
    children: renderedChildren
  });
}
function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2, createRenderState }, props, context, presenceContext) {
  const state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps2),
    renderState: createRenderState()
  };
  return state;
}
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props, {});
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let { initial, animate } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === void 0)
      initial = context.initial;
    if (animate === void 0)
      animate = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    for (let i = 0; i < list.length; i++) {
      const resolved = resolveVariantFromProps(props, list[i]);
      if (resolved) {
        const { transitionEnd, transition, ...target } = resolved;
        for (const key in target) {
          let valueTarget = target[key];
          if (Array.isArray(valueTarget)) {
            const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
            valueTarget = valueTarget[index];
          }
          if (valueTarget !== null) {
            values[key] = valueTarget;
          }
        }
        for (const key in transitionEnd) {
          values[key] = transitionEnd[key];
        }
      }
    }
  }
  return values;
}
const makeUseVisualState = (config) => (props, isStatic) => {
  const context = reactExports.useContext(MotionContext);
  const presenceContext = reactExports.useContext(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};
const useHTMLVisualState = /* @__PURE__ */ makeUseVisualState({
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
  createRenderState: createHtmlRenderState
});
const useSVGVisualState = /* @__PURE__ */ makeUseVisualState({
  scrapeMotionValuesFromProps,
  createRenderState: createSvgRenderState
});
const motionComponentSymbol = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function useMotionRef(visualState, visualElement, externalRef) {
  const externalRefContainer = reactExports.useRef(externalRef);
  reactExports.useInsertionEffect(() => {
    externalRefContainer.current = externalRef;
  });
  const refCleanup = reactExports.useRef(null);
  return reactExports.useCallback((instance) => {
    if (instance) {
      visualState.onMount?.(instance);
    }
    if (visualElement) {
      instance ? visualElement.mount(instance) : visualElement.unmount();
    }
    const ref = externalRefContainer.current;
    if (typeof ref === "function") {
      if (instance) {
        const cleanup = ref(instance);
        if (typeof cleanup === "function") {
          refCleanup.current = cleanup;
        }
      } else if (refCleanup.current) {
        refCleanup.current();
        refCleanup.current = null;
      } else {
        ref(instance);
      }
    } else if (ref) {
      ref.current = instance;
    }
  }, [visualElement]);
}
const SwitchLayoutGroupContext = reactExports.createContext({});
function isRefObject(ref) {
  return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
function createMotionComponent(Component, { forwardMotionProps = false, type } = {}, preloadedFeatures, createVisualElement) {
  preloadedFeatures && loadFeatures(preloadedFeatures);
  const isSVG = type ? type === "svg" : isSVGComponent(Component);
  const useVisualState = isSVG ? useSVGVisualState : useHTMLVisualState;
  function MotionDOMComponent(props, externalRef) {
    const configAndProps = {
      ...reactExports.useContext(MotionConfigContext),
      ...props,
      layoutId: useLayoutId(props)
    };
    const { isStatic } = configAndProps;
    const context = useCreateMotionContext(props);
    const visualState = useVisualState(props, isStatic);
    return jsxRuntimeExports.jsxs(MotionContext.Provider, { value: context, children: [null, useRender(Component, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, forwardMotionProps, isSVG)] });
  }
  MotionDOMComponent.displayName = `motion.${typeof Component === "string" ? Component : `create(${Component.displayName ?? Component.name ?? ""})`}`;
  const ForwardRefMotionComponent = reactExports.forwardRef(MotionDOMComponent);
  ForwardRefMotionComponent[motionComponentSymbol] = Component;
  return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
  const layoutGroupId = reactExports.useContext(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function createMotionProxy(preloadedFeatures, createVisualElement) {
  if (typeof Proxy === "undefined") {
    return createMotionComponent;
  }
  const componentCache = /* @__PURE__ */ new Map();
  const factory = (Component, options) => {
    return createMotionComponent(Component, options, preloadedFeatures);
  };
  const deprecatedFactoryFunction = (Component, options) => {
    return factory(Component, options);
  };
  return new Proxy(deprecatedFactoryFunction, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (_target, key) => {
      if (key === "create")
        return factory;
      if (!componentCache.has(key)) {
        componentCache.set(key, createMotionComponent(key, void 0, preloadedFeatures));
      }
      return componentCache.get(key);
    }
  });
}
class AnimationFeature extends Feature {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(node) {
    super(node);
    node.animationState || (node.animationState = createAnimationState(node));
  }
  updateAnimationControlsSubscription() {
    const { animate } = this.node.getProps();
    if (isAnimationControls(animate)) {
      this.unmountControls = animate.subscribe(this.node);
    }
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate } = this.node.getProps();
    const { animate: prevAnimate } = this.node.prevProps || {};
    if (animate !== prevAnimate) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {
    this.node.animationState.reset();
    this.unmountControls?.();
  }
}
let id = 0;
class ExitAnimationFeature extends Feature {
  constructor() {
    super(...arguments);
    this.id = id++;
    this.isExitComplete = false;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent, onExitComplete } = this.node.presenceContext;
    const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || isPresent === prevIsPresent) {
      return;
    }
    if (isPresent && prevIsPresent === false) {
      if (this.isExitComplete) {
        const { initial, custom } = this.node.getProps();
        if (typeof initial === "string" || typeof initial === "object" && initial !== null && !Array.isArray(initial)) {
          const resolved = resolveVariant(this.node, initial, custom);
          if (resolved) {
            const { transition, transitionEnd, ...target } = resolved;
            for (const key in target) {
              this.node.getValue(key)?.jump(target[key]);
            }
          }
        }
        this.node.animationState.reset();
        this.node.animationState.animateChanges();
      } else {
        this.node.animationState.setActive("exit", false);
      }
      this.isExitComplete = false;
      return;
    }
    const exitAnimation = this.node.animationState.setActive("exit", !isPresent);
    if (onExitComplete && !isPresent) {
      exitAnimation.then(() => {
        this.isExitComplete = true;
        onExitComplete(this.id);
      });
    }
  }
  mount() {
    const { register, onExitComplete } = this.node.presenceContext || {};
    if (onExitComplete) {
      onExitComplete(this.id);
    }
    if (register) {
      this.unmount = register(this.id);
    }
  }
  unmount() {
  }
}
const animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};
function extractEventInfo(event) {
  return {
    point: {
      x: event.pageX,
      y: event.pageY
    }
  };
}
const addPointerInfo = (handler) => (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}
const getContextWindow = ({ current }) => {
  return current ? current.ownerDocument.defaultView : null;
};
const distance = (a, b2) => Math.abs(a - b2);
function distance2D(a, b2) {
  const xDelta = distance(a.x, b2.x);
  const yDelta = distance(a.y, b2.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}
const overflowStyles = /* @__PURE__ */ new Set(["auto", "scroll"]);
class PanSession {
  constructor(event, handlers, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3, element } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.lastRawMoveEventInfo = null;
    this.handlers = {};
    this.contextWindow = window;
    this.scrollPositions = /* @__PURE__ */ new Map();
    this.removeScrollListeners = null;
    this.onElementScroll = (event2) => {
      this.handleScroll(event2.target);
    };
    this.onWindowScroll = () => {
      this.handleScroll(window);
    };
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      if (this.lastRawMoveEventInfo) {
        this.lastMoveEventInfo = transformPoint(this.lastRawMoveEventInfo, this.transformPagePoint);
      }
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2D(info2.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { point: point2 } = info2;
      const { timestamp: timestamp2 } = frameData;
      this.history.push({ ...point2, timestamp: timestamp2 });
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart && onStart(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove && onMove(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.lastMoveEvent = event2;
      this.lastRawMoveEventInfo = info2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      frame.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.end();
      const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
      if (this.dragSnapToOrigin || !this.startEvent) {
        resumeAnimation && resumeAnimation();
      }
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
      if (this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (!isPrimaryPointer(event))
      return;
    this.dragSnapToOrigin = dragSnapToOrigin;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    this.distanceThreshold = distanceThreshold;
    this.contextWindow = contextWindow || window;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const { point } = initialInfo;
    const { timestamp } = frameData;
    this.history = [{ ...point, timestamp }];
    const { onSessionStart } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
    if (element) {
      this.startScrollTracking(element);
    }
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(element) {
    let current = element.parentElement;
    while (current) {
      const style = getComputedStyle(current);
      if (overflowStyles.has(style.overflowX) || overflowStyles.has(style.overflowY)) {
        this.scrollPositions.set(current, {
          x: current.scrollLeft,
          y: current.scrollTop
        });
      }
      current = current.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    });
    window.addEventListener("scroll", this.onElementScroll, {
      capture: true
    });
    window.addEventListener("scroll", this.onWindowScroll);
    this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: true
      });
      window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(target) {
    const initial = this.scrollPositions.get(target);
    if (!initial)
      return;
    const isWindow = target === window;
    const current = isWindow ? { x: window.scrollX, y: window.scrollY } : {
      x: target.scrollLeft,
      y: target.scrollTop
    };
    const delta = { x: current.x - initial.x, y: current.y - initial.y };
    if (delta.x === 0 && delta.y === 0)
      return;
    if (isWindow) {
      if (this.lastMoveEventInfo) {
        this.lastMoveEventInfo.point.x += delta.x;
        this.lastMoveEventInfo.point.y += delta.y;
      }
    } else {
      if (this.history.length > 0) {
        this.history[0].x -= delta.x;
        this.history[0].y -= delta.y;
      }
    }
    this.scrollPositions.set(target, current);
    frame.update(this.updatePoint, true);
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners && this.removeListeners();
    this.removeScrollListeners && this.removeScrollListeners();
    this.scrollPositions.clear();
    cancelFrame(this.updatePoint);
  }
}
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b2) {
  return { x: a.x - b2.x, y: a.y - b2.y };
}
function getPanInfo({ point }, history) {
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > /* @__PURE__ */ secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  if (timestampedPoint === history[0] && history.length > 2 && lastPoint.timestamp - timestampedPoint.timestamp > /* @__PURE__ */ secondsToMilliseconds(timeDelta) * 2) {
    timestampedPoint = history[1];
  }
  const time2 = /* @__PURE__ */ millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
  if (time2 === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time2,
    y: (lastPoint.y - timestampedPoint.y) / time2
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}
function applyConstraints(point, { min, max }, elastic) {
  if (min !== void 0 && point < min) {
    point = elastic ? mixNumber$1(min, point, elastic.min) : Math.max(point, min);
  } else if (max !== void 0 && point > max) {
    point = elastic ? mixNumber$1(max, point, elastic.max) : Math.min(point, max);
  }
  return point;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min = constraintsAxis.min - layoutAxis.min;
  let max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min, max] = [max, min];
  }
  return { min, max };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = /* @__PURE__ */ progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = /* @__PURE__ */ progress(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout2, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout2.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout2.min;
  }
  return relativeConstraints;
}
const defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}
const elementDragControls = /* @__PURE__ */ new WeakMap();
class VisualElementDragControls {
  constructor(visualElement) {
    this.openDragLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.latestPointerEvent = null;
    this.latestPanInfo = null;
    this.visualElement = visualElement;
  }
  start(originEvent, { snapToCursor = false, distanceThreshold } = {}) {
    const { presenceContext } = this.visualElement;
    if (presenceContext && presenceContext.isPresent === false)
      return;
    const onSessionStart = (event) => {
      if (snapToCursor) {
        this.snapToCursor(extractEventInfo(event).point);
      }
      this.stopAnimation();
    };
    const onStart = (event, info) => {
      const { drag: drag2, dragPropagation, onDragStart } = this.getProps();
      if (drag2 && !dragPropagation) {
        if (this.openDragLock)
          this.openDragLock();
        this.openDragLock = setDragLock(drag2);
        if (!this.openDragLock)
          return;
      }
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = void 0;
      }
      eachAxis((axis) => {
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          const { projection } = this.visualElement;
          if (projection && projection.layout) {
            const measuredAxis = projection.layout.layoutBox[axis];
            if (measuredAxis) {
              const length = calcLength(measuredAxis);
              current = length * (parseFloat(current) / 100);
            }
          }
        }
        this.originPoint[axis] = current;
      });
      if (onDragStart) {
        frame.update(() => onDragStart(event, info), false, true);
      }
      addValueToWillChange(this.visualElement, "transform");
      const { animationState } = this.visualElement;
      animationState && animationState.setActive("whileDrag", true);
    };
    const onMove = (event, info) => {
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
      if (!dragPropagation && !this.openDragLock)
        return;
      const { offset } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset);
        if (this.currentDirection !== null) {
          onDirectionLock && onDirectionLock(this.currentDirection);
        }
        return;
      }
      this.updateAxis("x", info.point, offset);
      this.updateAxis("y", info.point, offset);
      this.visualElement.render();
      if (onDrag) {
        frame.update(() => onDrag(event, info), false, true);
      }
    };
    const onSessionEnd = (event, info) => {
      this.latestPointerEvent = event;
      this.latestPanInfo = info;
      this.stop(event, info);
      this.latestPointerEvent = null;
      this.latestPanInfo = null;
    };
    const resumeAnimation = () => {
      const { dragSnapToOrigin: snap } = this.getProps();
      if (snap || this.constraints) {
        this.startAnimation({ x: 0, y: 0 });
      }
    };
    const { dragSnapToOrigin } = this.getProps();
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd,
      resumeAnimation
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin,
      distanceThreshold,
      contextWindow: getContextWindow(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(event, panInfo) {
    const finalEvent = event || this.latestPointerEvent;
    const finalPanInfo = panInfo || this.latestPanInfo;
    const isDragging2 = this.isDragging;
    this.cancel();
    if (!isDragging2 || !finalPanInfo || !finalEvent)
      return;
    const { velocity } = finalPanInfo;
    this.startAnimation(velocity);
    const { onDragEnd } = this.getProps();
    if (onDragEnd) {
      frame.postRender(() => onDragEnd(finalEvent, finalPanInfo));
    }
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = false;
    const { projection, animationState } = this.visualElement;
    if (projection) {
      projection.isAnimationBlocked = false;
    }
    this.endPanSession();
    const { dragPropagation } = this.getProps();
    if (!dragPropagation && this.openDragLock) {
      this.openDragLock();
      this.openDragLock = null;
    }
    animationState && animationState.setActive("whileDrag", false);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end();
    this.panSession = void 0;
  }
  updateAxis(axis, _point, offset) {
    const { drag: drag2 } = this.getProps();
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  }
  resolveConstraints() {
    const { dragConstraints, dragElastic } = this.getProps();
    const layout2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout;
    const prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout2) {
        this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && !isRefObject(dragConstraints) && layout2 && this.constraints && !this.hasMutatedConstraints) {
      eachAxis((axis) => {
        if (this.constraints !== false && this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
    if (!constraints || !isRefObject(constraints))
      return false;
    const constraintsElement = constraints.current;
    const { projection } = this.visualElement;
    if (!projection || !projection.layout)
      return false;
    if (projection.root) {
      projection.root.scroll = void 0;
      projection.root.updateScroll();
    }
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity) {
    const { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, this.currentDirection)) {
        return;
      }
      let transition = constraints && constraints[axis] || {};
      if (dragSnapToOrigin === true || dragSnapToOrigin === axis)
        transition = { min: 0, max: 0 };
      const bounceStiffness = dragElastic ? 200 : 1e6;
      const bounceDamping = dragElastic ? 40 : 1e7;
      const inertia2 = {
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...dragTransition,
        ...transition
      };
      return this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    addValueToWillChange(this.visualElement, axis);
    return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
  }
  stopAnimation() {
    eachAxis((axis) => this.getAxisMotionValue(axis).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(axis) {
    const dragKey = `_drag${axis.toUpperCase()}`;
    const props = this.visualElement.getProps();
    const externalMotionValue = props[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, this.visualElement.latestValues[axis] ?? 0);
  }
  snapToCursor(point) {
    eachAxis((axis) => {
      const { drag: drag2 } = this.getProps();
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      const { projection } = this.visualElement;
      const axisValue = this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        const { min, max } = projection.layout.layoutBox[axis];
        const current = axisValue.get() || 0;
        axisValue.set(point[axis] - mixNumber$1(min, max, 0.5) + current);
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: drag2, dragConstraints } = this.getProps();
    const { projection } = this.visualElement;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    const boxProgress = { x: 0, y: 0 };
    eachAxis((axis) => {
      const axisValue = this.getAxisMotionValue(axis);
      if (axisValue && this.constraints !== false) {
        const latest = axisValue.get();
        boxProgress[axis] = calcOrigin({ min: latest, max: latest }, this.constraints[axis]);
      }
    });
    const { transformTemplate } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    projection.root && projection.root.updateScroll();
    projection.updateLayout();
    this.constraints = false;
    this.resolveConstraints();
    eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, null))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      const { min, max } = this.constraints[axis];
      axisValue.set(mixNumber$1(min, max, boxProgress[axis]));
    });
    this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
      const { drag: drag2, dragListener = true } = this.getProps();
      const target = event.target;
      const isClickingTextInputChild = target !== element && isElementTextInput(target);
      if (drag2 && dragListener && !isClickingTextInputChild) {
        this.start(event);
      }
    });
    let stopResizeObservers;
    const measureDragConstraints = () => {
      const { dragConstraints } = this.getProps();
      if (isRefObject(dragConstraints) && dragConstraints.current) {
        this.constraints = this.resolveRefConstraints();
        if (!stopResizeObservers) {
          stopResizeObservers = startResizeObservers(element, dragConstraints.current, () => this.scalePositionWithinConstraints());
        }
      }
    };
    const { projection } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
    }
    frame.read(measureDragConstraints);
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis((axis) => {
          const motionValue2 = this.getAxisMotionValue(axis);
          if (!motionValue2)
            return;
          this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    }));
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener && stopLayoutUpdateListener();
      stopResizeObservers && stopResizeObservers();
    };
  }
  getProps() {
    const props = this.visualElement.getProps();
    const { drag: drag2 = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
    return {
      ...props,
      drag: drag2,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    };
  }
}
function skipFirstCall(callback) {
  let isFirst = true;
  return () => {
    if (isFirst) {
      isFirst = false;
      return;
    }
    callback();
  };
}
function startResizeObservers(element, constraintsElement, onResize) {
  const stopElement = resize(element, skipFirstCall(onResize));
  const stopContainer = resize(constraintsElement, skipFirstCall(onResize));
  return () => {
    stopElement();
    stopContainer();
  };
}
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}
class DragGesture extends Feature {
  constructor(node) {
    super(node);
    this.removeGroupControls = noop;
    this.removeListeners = noop;
    this.controls = new VisualElementDragControls(node);
  }
  mount() {
    const { dragControls } = this.node.getProps();
    if (dragControls) {
      this.removeGroupControls = dragControls.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || noop;
  }
  update() {
    const { dragControls } = this.node.getProps();
    const { dragControls: prevDragControls } = this.node.prevProps || {};
    if (dragControls !== prevDragControls) {
      this.removeGroupControls();
      if (dragControls) {
        this.removeGroupControls = dragControls.subscribe(this.controls);
      }
    }
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
    if (!this.controls.isDragging) {
      this.controls.endPanSession();
    }
  }
}
const asyncHandler = (handler) => (event, info) => {
  if (handler) {
    frame.update(() => handler(event, info), false, true);
  }
};
class PanGesture extends Feature {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = noop;
  }
  onPointerDown(pointerDownEvent) {
    this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: getContextWindow(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(onPanSessionStart),
      onStart: asyncHandler(onPanStart),
      onMove: asyncHandler(onPan),
      onEnd: (event, info) => {
        delete this.session;
        if (onPanEnd) {
          frame.postRender(() => onPanEnd(event, info));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener();
    this.session && this.session.end();
  }
}
let hasTakenAnySnapshot = false;
class MeasureLayoutWithContext extends reactExports.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
    const { projection } = visualElement;
    if (projection) {
      if (layoutGroup.group)
        layoutGroup.group.add(projection);
      if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
        switchLayoutGroup.register(projection);
      }
      if (hasTakenAnySnapshot) {
        projection.root.didUpdate();
      }
      projection.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      projection.setOptions({
        ...projection.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove()
      });
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const { layoutDependency, visualElement, drag: drag2, isPresent } = this.props;
    const { projection } = visualElement;
    if (!projection)
      return null;
    projection.isPresent = isPresent;
    if (prevProps.layoutDependency !== layoutDependency) {
      projection.setOptions({
        ...projection.options,
        layoutDependency
      });
    }
    hasTakenAnySnapshot = true;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0 || prevProps.isPresent !== isPresent) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent) {
      if (isPresent) {
        projection.promote();
      } else if (!projection.relegate()) {
        frame.postRender(() => {
          const stack = projection.getStack();
          if (!stack || !stack.members.length) {
            this.safeToRemove();
          }
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const { visualElement, layoutAnchor } = this.props;
    const { projection } = visualElement;
    if (projection) {
      projection.options.layoutAnchor = layoutAnchor;
      projection.root.didUpdate();
      microtask.postRender(() => {
        if (!projection.currentAnimation && projection.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
    const { projection } = visualElement;
    hasTakenAnySnapshot = true;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup && layoutGroup.group)
        layoutGroup.group.remove(projection);
      if (promoteContext && promoteContext.deregister)
        promoteContext.deregister(projection);
    }
  }
  safeToRemove() {
    const { safeToRemove } = this.props;
    safeToRemove && safeToRemove();
  }
  render() {
    return null;
  }
}
function MeasureLayout(props) {
  const [isPresent, safeToRemove] = usePresence();
  const layoutGroup = reactExports.useContext(LayoutGroupContext);
  return jsxRuntimeExports.jsx(MeasureLayoutWithContext, { ...props, layoutGroup, switchLayoutGroup: reactExports.useContext(SwitchLayoutGroupContext), isPresent, safeToRemove });
}
const drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};
function handleHoverEvent(node, event, lifecycle) {
  const { props } = node;
  if (node.animationState && props.whileHover) {
    node.animationState.setActive("whileHover", lifecycle === "Start");
  }
  const eventName = "onHover" + lifecycle;
  const callback = props[eventName];
  if (callback) {
    frame.postRender(() => callback(event, extractEventInfo(event)));
  }
}
class HoverGesture extends Feature {
  mount() {
    const { current } = this.node;
    if (!current)
      return;
    this.unmount = hover(current, (_element, startEvent) => {
      handleHoverEvent(this.node, startEvent, "Start");
      return (endEvent) => handleHoverEvent(this.node, endEvent, "End");
    });
  }
  unmount() {
  }
}
class FocusGesture extends Feature {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let isFocusVisible = false;
    try {
      isFocusVisible = this.node.current.matches(":focus-visible");
    } catch (e) {
      isFocusVisible = true;
    }
    if (!isFocusVisible || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", true);
    this.isActive = true;
  }
  onBlur() {
    if (!this.isActive || !this.node.animationState)
      return;
    this.node.animationState.setActive("whileFocus", false);
    this.isActive = false;
  }
  mount() {
    this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function handlePressEvent(node, event, lifecycle) {
  const { props } = node;
  if (node.current instanceof HTMLButtonElement && node.current.disabled) {
    return;
  }
  if (node.animationState && props.whileTap) {
    node.animationState.setActive("whileTap", lifecycle === "Start");
  }
  const eventName = "onTap" + (lifecycle === "End" ? "" : lifecycle);
  const callback = props[eventName];
  if (callback) {
    frame.postRender(() => callback(event, extractEventInfo(event)));
  }
}
class PressGesture extends Feature {
  mount() {
    const { current } = this.node;
    if (!current)
      return;
    const { globalTapTarget, propagate } = this.node.props;
    this.unmount = press(current, (_element, startEvent) => {
      handlePressEvent(this.node, startEvent, "Start");
      return (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
    }, {
      useGlobalTarget: globalTapTarget,
      stopPropagation: propagate?.tap === false
    });
  }
  unmount() {
  }
}
const observerCallbacks = /* @__PURE__ */ new WeakMap();
const observers = /* @__PURE__ */ new WeakMap();
const fireObserverCallback = (entry) => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
const fireAllObserverCallbacks = (entries) => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}
const thresholdNames = {
  some: 0,
  all: 1
};
class InViewFeature extends Feature {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport = {} } = this.node.getProps();
    const { root, margin: rootMargin, amount = "some", once } = viewport;
    const options = {
      root: root ? root.current : void 0,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const onIntersectionUpdate = (entry) => {
      const { isIntersecting } = entry;
      if (this.isInView === isIntersecting)
        return;
      this.isInView = isIntersecting;
      if (once && !isIntersecting && this.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", isIntersecting);
      }
      const { onViewportEnter, onViewportLeave } = this.node.getProps();
      const callback = isIntersecting ? onViewportEnter : onViewportLeave;
      callback && callback(entry);
    };
    this.stopObserver = observeIntersection(this.node.current, options, onIntersectionUpdate);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined")
      return;
    const { props, prevProps } = this.node;
    const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
    if (hasOptionsChanged) {
      this.startObserver();
    }
  }
  unmount() {
    this.stopObserver?.();
    this.hasEnteredView = false;
    this.isInView = false;
  }
}
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
  return (name) => viewport[name] !== prevViewport[name];
}
const gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};
const layout = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};
const featureBundle = {
  ...animations,
  ...gestureAnimations,
  ...drag,
  ...layout
};
const motion = /* @__PURE__ */ createMotionProxy(featureBundle);
const thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry.target, entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer2.unobserve(entry.target);
        }
      } else if (typeof onEnd === "function") {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer2 = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer2.observe(element));
  return () => observer2.disconnect();
}
function useInView(ref, { root, margin, amount, once = false, initial = false } = {}) {
  const [isInView, setInView] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}
const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55;
function FadingVideo({
  src,
  className,
  style
}) {
  const ref = reactExports.useRef(null);
  const rafRef = reactExports.useRef(null);
  const fadingOutRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const v2 = ref.current;
    if (!v2) return;
    const fadeTo = (target, duration = FADE_MS) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      const start = performance.now();
      const from = parseFloat(v2.style.opacity || "0");
      const tick = (t) => {
        const p = Math.min(1, (t - start) / duration);
        v2.style.opacity = String(from + (target - from) * p);
        if (p < 1) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    };
    const onLoaded = () => {
      v2.style.opacity = "0";
      v2.play().catch(() => {
      });
      fadeTo(1);
    };
    const onTime = () => {
      if (!fadingOutRef.current && v2.duration > 0 && v2.duration - v2.currentTime <= FADE_OUT_LEAD && v2.duration - v2.currentTime > 0) {
        fadingOutRef.current = true;
        fadeTo(0);
      }
    };
    const onEnded = () => {
      v2.style.opacity = "0";
      setTimeout(() => {
        v2.currentTime = 0;
        v2.play().catch(() => {
        });
        fadingOutRef.current = false;
        fadeTo(1);
      }, 100);
    };
    v2.style.opacity = "0";
    v2.addEventListener("loadeddata", onLoaded);
    v2.addEventListener("timeupdate", onTime);
    v2.addEventListener("ended", onEnded);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      v2.removeEventListener("loadeddata", onLoaded);
      v2.removeEventListener("timeupdate", onTime);
      v2.removeEventListener("ended", onEnded);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "video",
    {
      ref,
      src,
      autoPlay: true,
      muted: true,
      playsInline: true,
      preload: "auto",
      className,
      style: { opacity: 0, ...style }
    }
  );
}
function BlurText({ text, className = "" }) {
  const ref = reactExports.useRef(null);
  const inView2 = useInView(ref, { amount: 0.1, once: true });
  const words = text.split(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { ref, className, style: { textAlign: "center" }, children: words.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.span,
    {
      initial: { filter: "blur(10px)", opacity: 0, y: 50 },
      animate: inView2 ? {
        filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
        opacity: [0, 0.5, 1],
        y: [50, -5, 0]
      } : {},
      transition: {
        duration: 0.7,
        times: [0, 0.5, 1],
        ease: "easeOut",
        delay: i * 100 / 1e3
      },
      style: { display: "inline-block", marginRight: "0.25em" },
      children: w
    },
    i
  )) });
}
const ArrowUpRight = ({ className = "h-5 w-5" }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "svg",
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 17L17 7" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 7h10v10" })
    ]
  }
);
const Play = ({ className = "h-4 w-4" }) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className, children: /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "6 4 20 12 6 20 6 4" }) });
function CinematicNavbar({ onJoin }) {
  const [open, setOpen] = reactExports.useState(false);
  const links = [
    { l: "About", h: "#about" },
    { l: "Ecosystem", h: "#ecosystem" },
    { l: "Build Log", h: "#buildlog" },
    { l: "Investors", h: "#investors" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed top-4 inset-x-0 z-50 px-4 md:px-8 lg:px-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "liquid-glass rounded-full h-12 w-12 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "MAVR", className: "h-7 w-7 object-contain" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1", children: [
        links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: l.h,
            className: "px-3 py-2 text-sm font-medium text-white/90 font-body-barlow hover:text-white transition-colors",
            children: l.l
          },
          l.l
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: onJoin,
            className: "ml-1 bg-white text-black rounded-full pl-4 pr-3 py-2 text-sm font-semibold font-body-barlow flex items-center gap-1 whitespace-nowrap hover:bg-white/90 transition",
            children: [
              "Join Waitlist ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setOpen(true),
          className: "md:hidden liquid-glass rounded-full h-12 w-12 grid place-items-center",
          "aria-label": "Menu",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-0.5 bg-[#CC0000]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-0.5 bg-[#CC0000]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-0.5 bg-[#CC0000]" })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block h-12 w-12" })
    ] }) }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[60] bg-[#0A0A0A] flex flex-col items-center justify-center gap-8 md:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setOpen(false),
          className: "absolute top-6 right-6 text-3xl text-white",
          children: "×"
        }
      ),
      links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: l.h,
          onClick: () => setOpen(false),
          className: "text-2xl font-display tracking-wider",
          children: l.l
        },
        l.l
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            setOpen(false);
            onJoin();
          },
          className: "btn-red",
          children: "JOIN WAITLIST"
        }
      )
    ] })
  ] });
}
const HERO_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4";
const fadeUp = {
  initial: { filter: "blur(10px)", opacity: 0, y: 20 },
  animate: { filter: "blur(0px)", opacity: 1, y: 0 }
};
function CinematicHero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen w-full overflow-hidden bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FadingVideo,
      {
        src: HERO_VIDEO,
        className: "absolute left-1/2 top-0 -translate-x-1/2 object-cover object-center z-0 h-full w-full md:h-[120%] md:w-[120%] md:object-top"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 z-[1] pointer-events-none",
        style: {
          background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.85) 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 min-h-screen flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center text-center pt-24 sm:pt-28 md:pt-32 px-4 pb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            ...fadeUp,
            transition: { duration: 0.7, ease: "easeOut", delay: 0.4 },
            className: "max-w-full",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass rounded-full pl-1 pr-3 py-1 flex items-center gap-2 flex-wrap justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white text-black rounded-full px-3 py-1 text-[11px] sm:text-xs font-semibold font-body-barlow", children: "New" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] sm:text-sm text-white/90 font-body-barlow text-center", children: "India's Athlete Operating System — Est. 2025" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          BlurText,
          {
            text: "THE SYSTEM IS LOADING.",
            className: "font-serif-i text-white leading-[0.9] tracking-tight md:tracking-[-3px] text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] max-w-3xl mx-auto"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            ...fadeUp,
            transition: { duration: 0.7, ease: "easeOut", delay: 0.8 },
            className: "mt-4 text-sm md:text-base text-white max-w-2xl font-body-barlow font-light leading-snug px-2",
            children: "Training. Nutrition. Coach Connect. Achievements. Community. One platform built entirely for the Indian athlete."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            ...fadeUp,
            transition: { duration: 0.7, ease: "easeOut", delay: 1.1 },
            className: "flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-7",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#waitlist-final",
                  className: "liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white font-body-barlow flex items-center gap-2",
                  children: [
                    "Join the Waitlist ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#ecosystem",
                  className: "text-white text-sm font-body-barlow flex items-center gap-2 hover:opacity-80",
                  children: [
                    "Explore Ecosystem ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4" })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            ...fadeUp,
            transition: { duration: 0.7, ease: "easeOut", delay: 1.2 },
            className: "mt-10 w-full",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.3em] text-white/70 mb-3 font-body-barlow", children: "PUBLIC LAUNCH IN" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Countdown, {})
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            ...fadeUp,
            transition: { duration: 0.7, ease: "easeOut", delay: 1.3 },
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full max-w-[480px]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass p-5 rounded-[1.25rem] text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "svg",
                  {
                    width: "28",
                    height: "28",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "1.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 6v6l4 2", strokeLinecap: "round" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif-i text-white text-4xl tracking-[-1px] leading-none mt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: 847 }),
                  "+"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white font-body-barlow font-light mt-2", children: "Founding Athletes Joined" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "liquid-glass p-5 rounded-[1.25rem] text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "svg",
                  {
                    width: "28",
                    height: "28",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "1.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif-i text-white text-4xl tracking-[-1px] leading-none mt-3", children: "1.4B+" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white font-body-barlow font-light mt-2", children: "Indians. One System. Built for All." })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            ...fadeUp,
            transition: { duration: 0.7, ease: "easeOut", delay: 1.35 },
            className: "mt-8 w-full flex flex-col items-center gap-3 px-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(WaitlistForm, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-white/70 font-body-barlow text-center", children: "No spam. No noise. Only updates that matter." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShareRow, {})
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          ...fadeUp,
          transition: { duration: 0.7, ease: "easeOut", delay: 1.4 },
          className: "flex flex-col items-center gap-4 pb-10 px-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "liquid-glass rounded-full px-3.5 py-1 text-[11px] sm:text-xs font-medium text-white font-body-barlow text-center", children: "Built for India's Athletes, Trainers, and Champions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center flex-wrap gap-4 sm:gap-8 md:gap-16 font-serif-i text-white text-xl sm:text-2xl md:text-3xl tracking-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Train" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Track" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Coach" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Compete" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Dominate" })
            ] })
          ]
        }
      )
    ] })
  ] });
}
function EcosystemSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-[#0A0A0A] py-24 md:py-32 px-6 flex justify-center font-['Inter',sans-serif]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `
        .c1-container {
          max-width: 1100px;
          width: 100%;
          text-align: center;
        }
        .c1-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: linear-gradient(90deg, #F5C344, #F28482, #B567C2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 16px;
        }
        .c1-title {
          font-size: 2.75rem;
          font-weight: 500;
          color: #ffffff;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }
        .c1-subtitle {
          font-size: 1.125rem;
          color: #888888;
          line-height: 1.5;
          margin-bottom: 50px;
        }
        .c1-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .c1-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .c1-grid { grid-template-columns: 1fr; }
          .c1-title { font-size: 2.25rem; }
        }
        .c1-card {
          border-radius: 20px;
          height: 340px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          position: relative;
          overflow: hidden;
          text-align: left;
          background: #111111;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
        }
        .c1-card h3 {
          font-size: 1.05rem;
          font-weight: 600;
          color: #ffffff;
          padding: 24px;
          z-index: 2;
          margin: 0;
        }
        .c1-card-1 {
          background: radial-gradient(circle at 50% 0%, rgba(255,179,71,0.15) 0%, rgba(249,237,150,0.05) 30%, #111111 60%, #111111 100%);
        }
        .c1-card-2 {
          background: radial-gradient(circle at 50% 0%, rgba(229,161,245,0.15) 0%, rgba(248,172,160,0.05) 30%, #111111 60%, #111111 100%);
        }
        .c1-card-3 {
          background: radial-gradient(circle at 50% 0%, rgba(249,237,150,0.15) 0%, rgba(229,161,245,0.05) 30%, #111111 60%, #111111 100%);
        }
        .c1-blur-text {
          background: linear-gradient(90deg, #FFB347, #E5A1F5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 600;
        }
        .c1-mesh {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 16px 16px;
          -webkit-mask-image: radial-gradient(circle at center top, black 0%, transparent 80%);
          mask-image: radial-gradient(circle at center top, black 0%, transparent 80%);
        }
      `
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "c1-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "c1-badge", children: "THE ECOSYSTEM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "c1-title", children: "One System. Three Pillars." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "c1-subtitle", children: [
          "MAVR is not a fitness app. It is the infrastructure layer for the Indian athlete —",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "connecting training, nutrition, coaching, and community into a single operating system."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "c1-grid mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "c1-card c1-card-1 hover:border-[#FFB347]/30 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                position: "absolute",
                top: "30px",
                left: "24px",
                right: "24px",
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "12px",
                padding: "16px",
                fontSize: "0.8rem",
                color: "#cbd5e1",
                lineHeight: "1.6",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
              },
              children: [
                "Free to download. ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "c1-blur-text", children: "Track every workout" }),
                ", every meal, every gym check-in. ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "c1-blur-text", children: "Earn achievements" }),
                ". Connect with training partners using your MAVR ID.",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "c1-blur-text", children: "Level up from Rookie to Legend" }),
                "."
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              style: {
                position: "absolute",
                top: "180px",
                left: "40px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "5px 14px",
                borderRadius: "20px",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#ffffff",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                backdropFilter: "blur(5px)"
              },
              children: [
                "FREE — ANDROID & iOS",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#a855f7", fontSize: "1rem" }, children: "✦" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              style: {
                position: "absolute",
                top: "205px",
                left: "110px",
                width: "24px",
                height: "24px",
                fill: "#ffffff",
                stroke: "#000000",
                strokeWidth: "1px",
                filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.5))",
                zIndex: 10
              },
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 2L20 11L11 13L9 22L4 2Z" })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "c1-card c1-card-2 hover:border-[#E5A1F5]/30 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: "70px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 24px"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "https://pub-f170a2592d2c4a1485466404c36807be.r2.dev/viktor/network.svg",
                  alt: "Network",
                  style: {
                    width: "100%",
                    height: "120px",
                    objectFit: "contain",
                    marginTop: "10px",
                    opacity: 0.8,
                    mixBlendMode: "screen"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    background: "rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    padding: "12px",
                    borderRadius: "12px",
                    fontSize: "0.75rem",
                    color: "#cbd5e1",
                    lineHeight: "1.5",
                    marginTop: "10px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                    textAlign: "center",
                    fontWeight: 500
                  },
                  children: "Premium performance compression engineered for Indian body proportions and climate. Every garment ships with a product code that unlocks 6 months of MAVR Pro."
                }
              )
            ]
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "c1-card c1-card-3 hover:border-[#F9ED96]/30 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "c1-mesh" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                position: "absolute",
                top: "10px",
                left: 0,
                right: 0,
                padding: "16px",
                fontSize: "0.75rem",
                color: "#cbd5e1",
                lineHeight: "1.6",
                textAlign: "center",
                zIndex: 1,
                fontWeight: 500
              },
              children: "Trainers get a dedicated dashboard to assign workout plans, track diet charts, and monitor student streaks. Edit a student's plan and it updates in their app in under 500 milliseconds. Real-time. Always in sync."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "https://pub-f170a2592d2c4a1485466404c36807be.r2.dev/viktor/library%20icon.svg",
              alt: "Folder",
              className: "c1-folder",
              style: {
                position: "absolute",
                top: "90px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "140px",
                filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.5))",
                zIndex: 1,
                opacity: 0.9
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "c1-search",
              style: {
                position: "absolute",
                top: "230px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "6px 18px",
                borderRadius: "20px",
                fontSize: "0.65rem",
                fontWeight: 600,
                color: "#ffffff",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                zIndex: 2,
                backdropFilter: "blur(5px)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "svg",
                  {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#a1a1aa",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
                    ]
                  }
                ),
                "FOR CERTIFIED TRAINERS"
              ]
            }
          )
        ] }) })
      ] })
    ] })
  ] });
}
function IdentitySection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative w-full bg-[#050505] py-24 md:py-32 px-6 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#CC0000]/10 blur-[120px] rounded-full pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#CC0000]/5 blur-[100px] rounded-full pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] text-[#CC0000] tracking-widest mb-4", children: "YOUR IDENTITY" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl text-white leading-[0.95] mb-4", children: "Every Athlete Gets a MAVR ID." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#888] max-w-2xl text-lg mb-16 leading-relaxed", children: "Auto-generated on signup. Find training partners, send partner requests, co-plan sessions, and chat — all inside the app. Your MAVR ID is your athlete identity. It cannot be bought. Only earned." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto w-full max-w-md perspective-[1000px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { rotateY: -10, rotateX: 5 },
            animate: { rotateY: [5, -5, 5], rotateX: [-5, 5, -5] },
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            className: "relative bg-gradient-to-br from-[#111] to-[#0A0A0A] rounded-2xl p-1 overflow-hidden",
            style: {
              boxShadow: "0 20px 50px -10px rgba(204,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#CC0000]/50 to-transparent opacity-50 blur-xl mix-blend-screen" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-[#080808] rounded-xl p-8 h-full border border-white/5 backdrop-blur-xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 mb-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-gradient-to-br from-[#CC0000] to-[#800000] p-1 shadow-[0_0_20px_rgba(204,0,0,0.4)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full rounded-full bg-[#050505] flex items-center justify-center font-display text-3xl text-white border border-[#CC0000]/30", children: "TR" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[#CC0000] text-sm tracking-wider mb-1", children: "MAVR_IronWolf2847" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-white tracking-wide", children: "TUSHAR R." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 bg-[#CC0000]/10 border border-[#CC0000]/30 rounded-full mb-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-[#CC0000] animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] text-[#CC0000] tracking-widest font-bold", children: "LEVEL 5 — ELITE ATHLETE" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 mb-8", children: [
                  { label: "Streak", value: "47 days" },
                  { label: "Workouts", value: "214" },
                  { label: "XP", value: "8,420" },
                  { label: "Achievements", value: "19" }
                ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-[#111] border border-white/5 rounded-lg p-3",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-[#888] uppercase tracking-wider mb-1", children: stat.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-white", children: stat.value })
                    ]
                  },
                  stat.label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 pt-6 border-t border-white/5", children: [
                  { color: "#CD7F32", label: "B" },
                  { color: "#C0C0C0", label: "S" },
                  { color: "#FFD700", label: "G" }
                ].map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-12 h-12 rounded-full grid place-items-center text-sm font-bold text-black",
                    style: {
                      background: `linear-gradient(135deg, ${badge.color}, ${badge.color}88)`,
                      boxShadow: `0 0 20px ${badge.color}40`,
                      border: `1px solid ${badge.color}`
                    },
                    children: badge.label
                  },
                  badge.label
                )) })
              ] })
            ]
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl p-1 shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#050505] rounded-xl p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6 pb-6 border-b border-[#1A1A1A]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-[#FF5F56]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-[#FFBD2E]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-[#27C93F]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 font-mono text-[10px] text-[#555]", children: "identity_layer.sys" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            [
              "auto-generated on registration",
              "format: MAVR_[Adjective][Noun][4digits]",
              "search any athlete by MAVR ID",
              "send partner requests — instagram style",
              "co-plan sessions in-app",
              "activity feed from accepted partners",
              "chat — encrypted, real-time"
            ].map((text, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -10 },
                whileInView: { opacity: 1, x: 0 },
                transition: { delay: 0.5 + i * 0.1 },
                viewport: { once: true },
                className: "flex items-start gap-3 group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[#CC0000] mt-1 opacity-70 group-hover:opacity-100 transition-opacity", children: ">" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[13px] md:text-sm text-[#A0A0A0] leading-relaxed group-hover:text-white transition-colors", children: text })
                ]
              },
              i
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { opacity: [1, 0, 1] },
                transition: { duration: 1, repeat: Infinity },
                className: "w-2 h-4 bg-[#CC0000] mt-4 ml-5"
              }
            )
          ] })
        ] }) }) })
      ] })
    ] })
  ] });
}
function Overline$1({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overline mb-4", children });
}
function H2$1({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl text-white leading-[0.95] mb-4", children });
}
function Section$1({
  id: id2,
  alt,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: id2,
      className: `relative w-full ${alt ? "bg-[#050505]" : "bg-[#0A0A0A]"} py-24 md:py-32 px-6 ${className}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto relative", children })
    }
  );
}
function ProblemSection() {
  const stats = [
    [
      "87%",
      "of Indian gym-goers cannot accurately track what they eat — because no fitness app has dal, paneer, or poha in its database with correct macros."
    ],
    [
      "5 Cr+",
      "active gym-goers in India managed by trainers using WhatsApp voice notes, paper registers, and verbal instructions. No tracking. No data. No system."
    ],
    [
      "₹0",
      "spent building a fitness platform from scratch specifically for the Indian athlete — until now. MAVR is the first."
    ]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { alt: true, id: "problem", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Overline$1, { children: "THE PROBLEM" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(H2$1, { children: [
      "India Has 5 Crore Gym-Goers.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Zero Platforms Built For Them."
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 space-y-5", children: stats.map(([n, d], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mavr-card flex flex-col md:flex-row md:items-center gap-6 p-8 md:p-10 border-l-4 border-l-[#CC0000]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[#CC0000] text-6xl md:text-8xl leading-none min-w-[180px]", children: n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-base md:text-lg leading-relaxed", children: d })
    ] }) }, n)) })
  ] });
}
const FOODS = [
  { name: "Dal Makhani", serving: "1 bowl · 250g", cal: 340, p: 14, c: 38, f: 14, veg: true },
  { name: "Paneer Bhurji", serving: "150g", cal: 280, p: 18, c: 6, f: 20, veg: true },
  { name: "Poha", serving: "1 plate · 200g", cal: 250, p: 5, c: 48, f: 4, veg: true },
  { name: "Rajma Chawal", serving: "1 plate · 350g", cal: 420, p: 16, c: 72, f: 8, veg: true },
  { name: "Chicken Curry", serving: "200g", cal: 310, p: 28, c: 8, f: 18, veg: false },
  { name: "Egg Bhurji", serving: "3 eggs · 180g", cal: 290, p: 22, c: 4, f: 20, veg: false },
  { name: "Upma", serving: "1 bowl · 200g", cal: 220, p: 6, c: 40, f: 5, veg: true },
  { name: "Idli", serving: "4 pieces · 200g", cal: 200, p: 6, c: 40, f: 1, veg: true },
  { name: "Masoor Dal", serving: "1 bowl · 250g", cal: 230, p: 16, c: 36, f: 2, veg: true },
  { name: "Chole", serving: "1 bowl · 200g", cal: 270, p: 14, c: 40, f: 6, veg: true },
  { name: "Paratha", serving: "1 piece · 100g", cal: 260, p: 6, c: 36, f: 10, veg: true },
  { name: "Oats with Milk", serving: "1 bowl · 300g", cal: 280, p: 12, c: 44, f: 6, veg: true },
  { name: "Sprouts Salad", serving: "1 bowl · 150g", cal: 120, p: 8, c: 20, f: 1, veg: true },
  { name: "Banana", serving: "1 medium · 120g", cal: 105, p: 1, c: 27, f: 0, veg: true },
  { name: "Paneer", serving: "100g raw", cal: 265, p: 18, c: 3, f: 20, veg: true },
  { name: "Bhuna Chana", serving: "50g", cal: 180, p: 10, c: 28, f: 3, veg: true },
  { name: "Buttermilk Chaas", serving: "1 glass · 250ml", cal: 60, p: 3, c: 8, f: 1, veg: true },
  { name: "Protein Shake (Whey)", serving: "30g powder", cal: 120, p: 24, c: 4, f: 2, veg: true },
  { name: "White Rice", serving: "1 cup cooked · 200g", cal: 260, p: 5, c: 56, f: 0, veg: true },
  { name: "Roti / Chapati", serving: "1 piece · 40g", cal: 100, p: 3, c: 20, f: 1, veg: true },
  { name: "Dosa", serving: "1 large · 100g", cal: 170, p: 4, c: 30, f: 5, veg: true },
  { name: "Sambhar", serving: "1 bowl · 200g", cal: 120, p: 6, c: 20, f: 2, veg: true },
  { name: "Fish Curry (Rohu)", serving: "200g", cal: 240, p: 30, c: 4, f: 12, veg: false },
  { name: "Peanut Butter", serving: "2 tbsp · 32g", cal: 190, p: 8, c: 6, f: 16, veg: true },
  { name: "Coconut Water", serving: "1 glass · 250ml", cal: 45, p: 0, c: 10, f: 0, veg: true },
  { name: "Green Tea", serving: "1 cup · 240ml", cal: 2, p: 0, c: 0, f: 0, veg: true },
  { name: "Khichdi", serving: "1 bowl · 250g", cal: 280, p: 10, c: 48, f: 5, veg: true },
  { name: "Dry Fruits Mix", serving: "30g", cal: 180, p: 4, c: 14, f: 13, veg: true },
  { name: "Dahi / Yogurt", serving: "1 cup · 200g", cal: 120, p: 8, c: 10, f: 5, veg: true },
  { name: "Soya Chunks", serving: "50g dry", cal: 175, p: 25, c: 12, f: 1, veg: true }
];
function FoodSearchSection() {
  const [q, setQ] = reactExports.useState("");
  const [filter2, setFilter] = reactExports.useState("all");
  const results = reactExports.useMemo(() => {
    let r = FOODS;
    if (filter2 === "veg") r = r.filter((f2) => f2.veg);
    if (filter2 === "protein") r = r.filter((f2) => f2.p >= 15);
    if (q.trim()) r = r.filter((f2) => f2.name.toLowerCase().includes(q.toLowerCase().trim()));
    return r.slice(0, 6);
  }, [q, filter2]);
  const filters = [
    { k: "all", l: "All" },
    { k: "veg", l: "Vegetarian" },
    { k: "protein", l: "High Protein" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { alt: true, id: "food", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Overline$1, { children: "THE FOOD DATABASE" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(H2$1, { children: "Search the Database. Right Now." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#888] max-w-2xl text-base md:text-lg mb-10", children: "Type any Indian food below and see exactly what MAVR shows your athletes. Dal makhani. Poha. Butter chicken. Protein shake. It is all here. This is not a demo — this is the real database." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 250, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          value: q,
          onChange: (e) => setQ(e.target.value),
          placeholder: "Search any Indian food... (try poha, paneer, dal)",
          className: "w-full bg-[#111] border border-[#2A2A2A] rounded px-5 py-4 font-mono text-base text-white placeholder:text-[#444] focus:border-[#CC0000] focus:outline-none transition-colors"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "svg",
        {
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "#CC0000",
          strokeWidth: "2",
          className: "absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m21 21-4.3-4.3" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-4", children: filters.map((f2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setFilter(f2.k),
        className: `px-4 py-2 text-xs font-bold tracking-wider rounded transition-all ${filter2 === f2.k ? "bg-[#CC0000] text-white" : "bg-transparent border border-[#2A2A2A] text-[#888] hover:border-[#CC0000] hover:text-white"}`,
        children: f2.l.toUpperCase()
      },
      f2.k
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-3", children: results.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mavr-card p-8 text-center text-[#888]", children: "Not in database yet — we add 50 new Indian foods every week." }) : results.map((f2, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: Math.min(i * 60, 240), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mavr-card p-5 flex flex-col md:flex-row md:items-center gap-4 hover:border-[#CC0000]/50 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-white text-[15px]", children: f2.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[#888] mt-1 font-mono", children: f2.serving })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2 md:gap-3", children: [
        {
          label: "CAL",
          val: f2.cal,
          bg: "bg-[#CC0000]/20",
          border: "border-[#CC0000]/40",
          text: "text-[#FF6666]"
        },
        {
          label: "PROTEIN",
          val: `${f2.p}g`,
          bg: "bg-[#1A4A1A]/40",
          border: "border-[#22c55e]/30",
          text: "text-[#4ade80]"
        },
        {
          label: "CARBS",
          val: `${f2.c}g`,
          bg: "bg-[#1A2A4A]/40",
          border: "border-[#3b82f6]/30",
          text: "text-[#60a5fa]"
        },
        {
          label: "FAT",
          val: `${f2.f}g`,
          bg: "bg-[#3A2A1A]/60",
          border: "border-amber-700/40",
          text: "text-amber-400"
        }
      ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `${p.bg} ${p.border} border rounded px-3 py-2 text-center min-w-[60px]`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-bold text-sm ${p.text}`, children: p.val }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-[#888] tracking-wider mt-0.5", children: p.label })
          ]
        },
        p.label
      )) })
    ] }) }, f2.name)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 font-mono text-xs text-[#555]", children: "12,400+ Indian foods in the complete MAVR database at launch." })
  ] });
}
function calculateAchievements(daysPerWeek, months, tracksMeals, gym) {
  const total = daysPerWeek * 4 * months;
  const streak = daysPerWeek >= 5 ? 60 : daysPerWeek >= 3 ? 30 : 14;
  const checkins = gym ? total : 0;
  const unlocked = [];
  const add = (name, tier, xp, color2, cond) => {
    if (cond) unlocked.push({ name, tier, xp, color: color2 });
  };
  add("First Step", "Bronze", 50, "#CD7F32", total >= 1);
  add("First Workout", "Bronze", 50, "#CD7F32", total >= 1);
  add("3-Day Warrior", "Bronze", 100, "#CD7F32", streak >= 3);
  add("Week Conqueror", "Bronze", 150, "#CD7F32", streak >= 7);
  add("10 Workouts Done", "Bronze", 150, "#CD7F32", total >= 10);
  add("Iron Discipline", "Silver", 400, "#C0C0C0", streak >= 30);
  add("Half Century", "Silver", 500, "#C0C0C0", total >= 50);
  add("Century Club", "Gold", 1200, "#FFD700", total >= 100);
  add("Triple Century", "Platinum", 3e3, "#E5E4E2", total >= 300);
  add("First Meal Log", "Bronze", 75, "#CD7F32", tracksMeals);
  add("Macro Master", "Silver", 350, "#C0C0C0", tracksMeals && total >= 30);
  add("Gym Rat", "Bronze", 100, "#CD7F32", checkins >= 1);
  add("Gym Regular", "Silver", 450, "#C0C0C0", checkins >= 50);
  add("Gym Legend", "Gold", 1500, "#FFD700", checkins >= 200);
  const totalXp = unlocked.reduce((s, a) => s + a.xp, 0);
  let level = "Rookie";
  if (totalXp >= 3e4) level = "Legend";
  else if (totalXp >= 15e3) level = "Champion";
  else if (totalXp >= 7e3) level = "Elite Athlete";
  else if (totalXp >= 3500) level = "Competitor";
  else if (totalXp >= 1500) level = "Athlete";
  else if (totalXp >= 500) level = "Trainee";
  return { unlocked, totalXp, level };
}
function CalculatorSection() {
  const [days, setDays] = reactExports.useState(4);
  const [months, setMonths] = reactExports.useState(8);
  const [meals, setMeals] = reactExports.useState(false);
  const [gym, setGym] = reactExports.useState(true);
  const [result, setResult] = reactExports.useState(null);
  const onCalc = () => setResult(calculateAchievements(days, months, meals, gym));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { id: "calculator", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Overline$1, { children: "THE ACHIEVEMENT ENGINE" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(H2$1, { children: "See What You Would Have Already Earned." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#888] max-w-2xl text-base md:text-lg mb-12", children: "Enter your current training habits below. MAVR calculates which achievements you would have already unlocked if you had been using the app from day one." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 250, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mavr-card p-6 md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-white text-sm md:text-base", children: "How many days per week do you train?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[#CC0000] text-base font-bold", children: [
            days,
            " ",
            days === 1 ? "day" : "days",
            " / week"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "range",
            min: 1,
            max: 7,
            value: days,
            onChange: (e) => setDays(+e.target.value),
            className: "mavr-range w-full"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-white text-sm md:text-base", children: "How many months have you been training?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[#CC0000] text-base font-bold", children: [
            months,
            " ",
            months === 1 ? "month" : "months"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "range",
            min: 1,
            max: 36,
            value: months,
            onChange: (e) => setMonths(+e.target.value),
            className: "mavr-range w-full"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-6 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-white text-sm md:text-base block mb-3", children: "Do you track your meals?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: [true, false].map((v2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setMeals(v2),
              className: `px-6 py-2.5 text-sm font-bold tracking-wider rounded transition-all ${meals === v2 ? "bg-[#CC0000] text-white" : "border border-[#2A2A2A] text-[#888] hover:border-[#CC0000]"}`,
              children: v2 ? "YES" : "NO"
            },
            String(v2)
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-white text-sm md:text-base block mb-3", children: "Do you train at a gym?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: [true, false].map((v2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setGym(v2),
              className: `px-6 py-2.5 text-sm font-bold tracking-wider rounded transition-all ${gym === v2 ? "bg-[#CC0000] text-white" : "border border-[#2A2A2A] text-[#888] hover:border-[#CC0000]"}`,
              children: v2 ? "YES" : "NO"
            },
            String(v2)
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onCalc, className: "btn-red w-full text-base py-3", children: "CALCULATE MY ACHIEVEMENTS" }),
      result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 pt-8 border-t border-[#1A1A1A] animate-fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl md:text-3xl text-white", children: [
            "You unlocked ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#CC0000]", children: result.unlocked.length }),
            " ",
            "achievements"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[#888] text-sm", children: [
            "Total XP: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: result.totalXp.toLocaleString() }),
            " · Level: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#CC0000]", children: result.level })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3", children: result.unlocked.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-[#0A0A0A] border border-[#1A1A1A] p-4 rounded flex items-center gap-3",
            style: { borderLeftWidth: 3, borderLeftColor: a.color },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-full grid place-items-center font-bold text-black flex-shrink-0",
                  style: { background: a.color, boxShadow: `0 0 12px ${a.color}55` },
                  children: "★"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-sm font-bold truncate", children: a.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-[#888] tracking-wider", children: [
                  a.tier.toUpperCase(),
                  " · ",
                  a.xp,
                  " XP"
                ] })
              ] })
            ]
          },
          a.name
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-[#888] text-sm", children: "These achievements are waiting for you in MAVR. Every one unlocks a fullscreen celebration." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#waitlist-final", className: "btn-red inline-flex mt-4", children: "JOIN THE WAITLIST →" })
      ] })
    ] }) })
  ] });
}
function LeaderboardSection() {
  const rows = [
    [1, "MAVR_IronWolf2847", 47, "FOUNDING CAPTAIN"],
    [2, "MAVR_SteelHawk0391", 38, "TOP 10"],
    [3, "MAVR_GoldLion5512", 31, "TOP 10"],
    [4, "MAVR_FireBull7734", 28, ""],
    [5, "MAVR_ApexBear1293", 24, ""],
    [6, "MAVR_TitanEagle4421", 19, ""],
    [7, "MAVR_BlazeFalcon8872", 16, ""],
    [8, "MAVR_SwiftPanther3301", 12, ""],
    [9, "MAVR_FierceShark9945", 9, ""],
    [10, "MAVR_BoldDragon2267", 7, ""]
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { alt: true, id: "leaderboard", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Overline$1, { children: "THE LEADERBOARD" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(H2$1, { children: "Refer More. Rank Higher. Win More." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#888] max-w-2xl text-base md:text-lg mb-10", children: "Every athlete who joins using your referral link moves you up the founding leaderboard. Top 10 referrers get founding member status locked in permanently, first-batch MAVR Compression at cost price, and a direct call with the founder before launch." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 250, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mavr-card overflow-hidden border-t-2 border-t-[#CC0000]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[60px_1fr_100px_140px] md:grid-cols-[80px_1fr_120px_180px] gap-3 px-4 md:px-6 py-3 border-b border-[#1A1A1A] font-mono text-[10px] md:text-xs text-[#888] tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "RANK" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "MAVR ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: "REFERRALS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: "STATUS" })
        ] }),
        rows.map(([rank, id2, refs, status]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `grid grid-cols-[60px_1fr_100px_140px] md:grid-cols-[80px_1fr_120px_180px] gap-3 px-4 md:px-6 py-4 items-center border-b border-[#1A1A1A] last:border-0 ${rank === 1 ? "bg-[#1A0000] border-l-4 border-l-[#CC0000]" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `font-display text-2xl ${rank === 1 ? "text-[#CC0000]" : "text-white"}`,
                  children: rank
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs md:text-sm text-white truncate", children: id2 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right font-bold text-white text-sm md:text-base", children: refs }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: status && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-[9px] md:text-[10px] px-2 py-1 rounded border font-bold tracking-wider ${status === "FOUNDING CAPTAIN" ? "bg-[#FFD700]/15 text-[#FFD700] border-[#FFD700]/40" : "bg-[#CC0000]/15 text-[#CC0000] border-[#CC0000]/40"}`,
                  children: status
                }
              ) })
            ]
          },
          id2
        ))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-[#555] font-mono", children: "Updated in real time. Your position appears after you share your referral link." })
    ] })
  ] });
}
function TrainerSection() {
  const [state, handleSubmit] = J(FORMSPREE_FORM_ID);
  const features = [
    "Real-time plan editing — student sees changes in under 500ms",
    "Full diet and workout compliance tracking per student",
    "Earnings dashboard — session fees, settlements, payment history",
    "Student feedback and rating system built in",
    "First 3 months of Coach Connect completely free"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { id: "trainers", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Overline$1, { children: "FOR TRAINERS" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(H2$1, { children: [
      "Are You a Trainer?",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "MAVR Was Built for You Too."
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#888] max-w-2xl text-base md:text-lg mb-12", children: "Coach Connect gives you a real-time dashboard to manage every student — assign plans, track diet compliance, monitor streaks, and edit programmes live. Your students see your changes instantly. The first 3 months are free." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: features.map((f2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-[#CC0000] mt-2 flex-shrink-0 ring-4 ring-[#CC0000]/15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-[15px] leading-relaxed", children: f2 })
      ] }, f2)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mavr-card p-6 md:p-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "form_type", value: "trainer_registration" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "subject", value: "New trainer registration" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg text-white mb-2", children: "Register as a Trainer" }),
        state.succeeded ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#22c55e] text-4xl mb-3", children: "✓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white", children: "Registered. We will contact you within 48 hours with early trainer access." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "trainer-name",
              name: "full_name",
              autoComplete: "name",
              required: true,
              placeholder: "Full Name",
              className: "mavr-input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            V,
            {
              prefix: "Full Name",
              field: "full_name",
              errors: state.errors,
              className: "text-xs text-[#FF6666]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "trainer-email",
              name: "email",
              autoComplete: "email",
              type: "email",
              required: true,
              placeholder: "Email Address",
              className: "mavr-input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            V,
            {
              prefix: "Email",
              field: "email",
              errors: state.errors,
              className: "text-xs text-[#FF6666]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "trainer-city",
              name: "city",
              required: true,
              placeholder: "City",
              className: "mavr-input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            V,
            {
              prefix: "City",
              field: "city",
              errors: state.errors,
              className: "text-xs text-[#FF6666]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "current_students", required: true, defaultValue: "", className: "mavr-input", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Number of current students" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "1–10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "11–25" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "26–50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "50+" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            V,
            {
              prefix: "Students",
              field: "current_students",
              errors: state.errors,
              className: "text-xs text-[#FF6666]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              name: "gym_name",
              placeholder: "Primary Gym Name (optional)",
              className: "mavr-input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            V,
            {
              prefix: "Gym",
              field: "gym_name",
              errors: state.errors,
              className: "text-xs text-[#FF6666]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "trainer-whatsapp",
              name: "whatsapp",
              autoComplete: "tel",
              required: true,
              placeholder: "WhatsApp Number",
              className: "mavr-input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            V,
            {
              prefix: "WhatsApp",
              field: "whatsapp",
              errors: state.errors,
              className: "text-xs text-[#FF6666]"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: state.submitting, className: "btn-red w-full", children: state.submitting ? "SENDING..." : "REGISTER INTEREST" })
        ] })
      ] }) })
    ] })
  ] });
}
function BetaSection() {
  const [state, handleSubmit] = J(FORMSPREE_FORM_ID);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { alt: true, id: "beta", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Overline$1, { children: "CLOSED BETA" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(H2$1, { children: "100 Spots. Serious Athletes Only." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#888] max-w-2xl text-base md:text-lg mb-8", children: "The closed beta is not for everyone. It is for athletes who will actually use every feature, report every bug, and help shape the final product. Apply below." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 250, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-[#888] mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "67 of 100 beta spots claimed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#CC0000]", children: "67%" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-[#111] border border-[#1A1A1A] rounded overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full",
          style: { width: "67%", background: "linear-gradient(135deg,#CC0000,#FF4444)" }
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mavr-card p-6 md:p-8 max-w-2xl space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "form_type", value: "beta_application" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "subject", value: "New beta application" }),
      state.succeeded ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#22c55e] text-4xl mb-3", children: "✓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-lg", children: "Application received." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#888] mt-2", children: "We review every application manually and respond within 7 days. Only 100 spots available." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "beta-name",
            name: "full_name",
            autoComplete: "name",
            required: true,
            placeholder: "Full Name",
            className: "mavr-input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          V,
          {
            prefix: "Full Name",
            field: "full_name",
            errors: state.errors,
            className: "text-xs text-[#FF6666]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "beta-email",
            name: "email",
            autoComplete: "email",
            type: "email",
            required: true,
            placeholder: "Email Address",
            className: "mavr-input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          V,
          {
            prefix: "Email",
            field: "email",
            errors: state.errors,
            className: "text-xs text-[#FF6666]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "beta-phone",
            name: "phone",
            autoComplete: "tel",
            required: true,
            placeholder: "Phone / WhatsApp",
            className: "mavr-input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          V,
          {
            prefix: "Phone",
            field: "phone",
            errors: state.errors,
            className: "text-xs text-[#FF6666]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "beta-gym",
            name: "gym_city",
            required: true,
            placeholder: "Current Gym Name & City",
            className: "mavr-input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          V,
          {
            prefix: "Gym & City",
            field: "gym_city",
            errors: state.errors,
            className: "text-xs text-[#FF6666]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "training_frequency", required: true, defaultValue: "", className: "mavr-input", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Training frequency" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "3–4 days / week" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "5–6 days / week" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Every day" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Less than 3 days" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          V,
          {
            prefix: "Frequency",
            field: "training_frequency",
            errors: state.errors,
            className: "text-xs text-[#FF6666]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            name: "primary_sport_goal",
            required: true,
            placeholder: "Primary sport or goal",
            className: "mavr-input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          V,
          {
            prefix: "Goal",
            field: "primary_sport_goal",
            errors: state.errors,
            className: "text-xs text-[#FF6666]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            name: "frustration",
            required: true,
            minLength: 50,
            rows: 4,
            placeholder: "What is the single most frustrating thing about tracking your fitness right now? (min 50 chars)",
            className: "mavr-input resize-y"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          V,
          {
            prefix: "Message",
            field: "frustration",
            errors: state.errors,
            className: "text-xs text-[#FF6666]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: state.submitting, className: "btn-red w-full", children: state.submitting ? "SENDING..." : "APPLY FOR BETA" })
      ] })
    ] }) })
  ] });
}
const FAQS = [
  [
    "When does MAVR launch?",
    "MAVR is targeting a public launch in late 2025. Founding members on the waitlist receive early access before the public launch and a guaranteed Founding Athlete badge."
  ],
  [
    "Is the MAVR app free to download?",
    "Yes. MAVR is free to download on Android and iOS. A Pro subscription from ₹199/month unlocks advanced features including diet tracking, AI plans, and trainer connection. Every MAVR compression garment includes a product code for 6 months of Pro — worth ₹2,394 — completely free."
  ],
  [
    "What is a MAVR ID?",
    "Every athlete gets a unique auto-generated MAVR ID in the format MAVR_IronWolf2847. It is your permanent athlete identity — used to find training partners, send requests, co-plan sessions, and build your public athletic profile."
  ],
  [
    "Can any trainer use Coach Connect?",
    "Yes. Both certified and independent trainers can register. Trainers get a full real-time dashboard to assign plans, track student progress, and edit programmes. The first 3 months are free for registered trainers."
  ],
  [
    "Is my data private and secure?",
    "Yes. MAVR uses AES-256 encryption for all chat messages. You have granular control over every piece of your data — workouts, check-ins, stats, and profile visibility. You can block any user at any time. MAVR is compliant with the Indian DPDP Act 2023."
  ],
  [
    "What is the product code from apparel?",
    "Every MAVR compression garment ships with a unique product code inside the tag. Redeem it in the app and receive 6 months of MAVR Pro instantly — worth ₹2,394 — plus the exclusive Founding Athlete badge."
  ],
  [
    "What are Superpowers?",
    "Superpowers are real advantages unlocked by Pro and Elite subscribers — XP Booster (2× XP for 7 days), Stealth Mode, Nutrition Oracle, Recovery Advisor, and more. Not cosmetic. Actual competitive advantages."
  ],
  [
    "How does the referral leaderboard work?",
    "Every waitlist signup gets a unique referral link. Share it. Every person who signs up using your link moves you up the leaderboard. Top 10 referrers get founding member status locked in, first-batch compression at cost price, and a direct call with the founder."
  ]
];
function FAQSection() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section$1, { alt: true, id: "faq", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Overline$1, { children: "FAQ" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(H2$1, { children: "Common Questions." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 max-w-3xl", children: FAQS.map(([q, a], i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: Math.min(i * 50, 250), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-[#1A1A1A]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setOpen(isOpen ? null : i),
            className: "w-full text-left py-5 flex items-center justify-between gap-4 group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white text-[15px] md:text-base group-hover:text-[#CC0000] transition-colors", children: q }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-[#CC0000] text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`,
                  children: "+"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#888] text-sm md:text-[15px] leading-relaxed", children: a }) })
          }
        )
      ] }) }, q);
    }) })
  ] });
}
function Section({
  id: id2,
  children,
  alt = false,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: id2, className: `relative w-full ${alt ? "bg-[#050505]" : "bg-[#0A0A0A]"} py-24 md:py-32 px-6 ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children }) });
}
function Overline({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overline mb-4", children });
}
function H2({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl text-white leading-[0.95] mb-4", children });
}
function Index() {
  const [investorOpen, setInvestorOpen] = reactExports.useState(false);
  const scrollToWaitlist = () => document.getElementById("waitlist-final")?.scrollIntoView({
    behavior: "smooth"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { id: "top", className: "bg-[#0A0A0A] text-white overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CinematicNavbar, { onJoin: scrollToWaitlist }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CinematicHero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ticker, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProblemSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EcosystemSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "ecosystem", className: "relative w-full py-24 md:py-32 px-6 overflow-hidden bg-[#050505]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_182501_0216c2be-1b2f-40d3-8716-0d4f42e73b44.mp4", autoPlay: true, muted: true, loop: true, playsInline: true, preload: "auto", className: "absolute inset-0 w-full h-full object-cover z-0 opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#050505] via-[#050505]/60 to-[#050505]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,5,0.85)_75%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Overline, { children: "THE PLATFORM" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(H2, { children: "Everything an Indian Athlete Actually Needs." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12", children: [["DASHBOARD", "Live date, time, trainer tag, current streak, today's workout card, macro summary. Your entire athletic life visible in one glance."], ["WORKOUT TRACKING", "Log every set, every rep, every weight. Personal records detected automatically. Achievement unlocked the moment you break your own record."], ["INDIAN DIET TRACKING", "Dal makhani. Paneer bhurji. Poha. Buttermilk. A food database built for India — not a Western database with Indian items reluctantly added as an afterthought."], ["ACHIEVEMENTS & BADGES", "30+ achievements across Bronze, Silver, Gold, Platinum, and Diamond tiers. Every milestone triggers a fullscreen celebration. Because discipline deserves to feel like a win."], ["SUPERPOWERS", "Elite subscribers unlock Superpowers — XP Booster, Stealth Mode, Nutrition Oracle, Recovery Advisor, Iron Memory. Real competitive advantages, not cosmetic bonuses."], ["SMART WATCH SYNC", "Connect Apple Watch, WearOS, or Fitbit. Heart rate, calories, active minutes, and workout detection flow directly into your MAVR session in real time."], ["MAVR ID SOCIAL LAYER", "Every athlete gets a unique identity: MAVR_IronWolf2847. Send partner requests, chat, co-plan sessions, share workout activity. Instagram mechanics built for the gym."], ["REAL-TIME TRAINER EDIT", "A trainer edits your workout plan. You see it update live — no refresh, no reload, no delay. WebSocket sync in under 500ms. The future of coach-athlete communication."], ["PRIVACY AND SAFETY", "Granular privacy controls. Block and unblock any user. AES-256 encrypted chat. You decide who sees your workouts, your stats, your check-ins. Your data, your rules."]].map(([t, b2], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3 * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mavr-card p-6 h-full hover:border-[#CC0000]/50 hover:-translate-y-1 transition-all duration-300 group bg-[#0A0A0A]/70 backdrop-blur-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs text-[#CC0000] mb-3", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-3 group-hover:text-[#CC0000] transition-colors", children: t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#888] text-sm leading-relaxed", children: b2 })
        ] }) }, t)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IdentitySection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FoodSearchSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CalculatorSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { alt: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Overline, { children: "THE ACHIEVEMENT ENGINE" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(H2, { children: "Discipline Should Feel Like Unlocking a Superpower." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#888] max-w-2xl text-base md:text-lg mb-12", children: "Every milestone you hit inside MAVR triggers a fullscreen celebration — Lottie animation, badge reveal, XP counter, haptic feedback. Bronze to Diamond. Rookie to Legend. The app makes your consistency feel cinematic." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-5 gap-4", children: [{
        name: "BRONZE",
        color: "#CD7F32",
        xp: "50–200 XP per achievement"
      }, {
        name: "SILVER",
        color: "#C0C0C0",
        xp: "200–600 XP"
      }, {
        name: "GOLD",
        color: "#FFD700",
        xp: "500–2,000 XP"
      }, {
        name: "PLATINUM",
        color: "#E5E4E2",
        xp: "1,500–5,000 XP"
      }, {
        name: "DIAMOND",
        color: "#B9F2FF",
        xp: "5,000+ XP — Mythic",
        pulse: true
      }].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mavr-card p-5 md:p-6 relative overflow-hidden", style: {
        borderTop: `3px solid ${t.color}`,
        backgroundImage: `radial-gradient(800px circle at 30% 0%, ${t.color}22, transparent 45%)`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 rounded-full grid place-items-center font-display text-2xl ${t.pulse ? "tier-pulse" : ""}`, style: {
            background: "#0A0A0A",
            border: `2px solid ${t.color}`,
            color: t.color,
            "--tier": `${t.color}aa`
          }, children: "★" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] tracking-[0.3em] text-white/50", children: [
            "0",
            i + 1
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl", style: {
            color: t.color
          }, children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-[#A0A0A0] leading-relaxed", children: t.xp })
        ] })
      ] }) }, t.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 max-w-5xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] md:text-xs text-[#888] mb-4 tracking-wider", children: "YOUR JOURNEY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2", children: ["Rookie", "Trainee", "Athlete", "Competitor", "Elite", "Champion", "Legend"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 rounded-full border border-[#1A1A1A] bg-[#0A0A0A] text-xs text-white/80", children: l }, l)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 h-2 bg-[#111] border border-[#1A1A1A] rounded overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-[30%]", style: {
          background: "linear-gradient(135deg,#CC0000,#FF4444)"
        } }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Overline, { children: "THE APPAREL BRIDGE" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(H2, { children: "The Gear Unlocks the System." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center mt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#888] text-lg leading-relaxed mb-8", children: "Every MAVR compression garment ships with a unique product code inside the tag. Redeem it in the app and receive 6 months of MAVR Pro — worth ₹2,394 — instantly activated. The gear is not just performance wear. It is your entry into the MAVR Pro ecosystem." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row gap-3 items-stretch", children: [["01", "BUY THE GEAR", "Order MAVR Compression."], ["02", "REDEEM THE CODE", "Enter tag code in app."], ["03", "6 MONTHS PRO", "Activated instantly."]].map(([n, t, d], i, a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mavr-card mavr-card-top p-4 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[#CC0000] text-xs", children: n }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg mt-1", children: t }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#888] text-xs", children: d })
            ] }),
            i < a.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block text-[#CC0000] text-xl", children: "→" })
          ] }, n)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-[520px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mavr-card overflow-hidden", style: {
            boxShadow: "0 0 50px rgba(204,0,0,0.12)"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: connectMock, alt: "MAVR apparel bridge — connect and redeem product code", className: "w-full h-auto object-cover", loading: "lazy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between gap-4 text-xs text-[#888]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono tracking-wider", children: "ENTER PRODUCT CODE" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#CC0000]", children: "MAVR-FOUND-8472" }) })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "buildlog", alt: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Overline, { children: "BUILDING IN PUBLIC" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(H2, { children: "We Build in the Open. You Watch it Happen." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#888] max-w-2xl text-base md:text-lg mb-14", children: "No corporate veil. No polished PR. We show every decision, every design, every rejection, every iteration. This is the raw changelog of MAVR." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-2 top-0 bottom-0 w-px bg-[#CC0000]" }),
        [["MAY 2025 — WEEK 01", "COMPLETE", "App Architecture Finalised", "24-section developer build guide complete. Stack confirmed: React Native + Fastify + PostgreSQL + Redis + Razorpay Route. 30+ database tables documented."], ["MAY 2025 — WEEK 02", "COMPLETE", "Subscription Model Updated", "Apparel QR code now triggers 6-month Pro subscription credit. App moved to freemium — open access for all. Physical apparel is now the premium upgrade path."], ["MAY 2025 — WEEK 03", "COMPLETE", "Achievement and Badging Engine Designed", "30 achievements across 7 categories. Bronze to Diamond tier. XP system with 7 levels from Rookie to Legend. Lottie celebration animations specced."], ["MAY 2025 — WEEK 04", "COMPLETE", "Real-Time Trainer Edit Architecture", "WebSocket (Socket.io) architecture designed for trainer-to-student plan sync. Target: plan changes reflect in student app in under 500ms."], ["JUNE 2025 — WEEK 01", "COMPLETE", "MAVR ID Social Layer Added", "Every user gets MAVR_[Adjective][Noun][4digits] identity. Partner requests, partner chat, co-workout planning, activity feed — all specced and in database schema."], ["JUNE 2025 — WEEK 02", "IN PROGRESS", "Compression Sample Testing", "Fabric samples in review. Standard: must survive 200 wash cycles without compression loss. 2 of 4 fabric options rejected. Testing continues."], ["JUNE 2025 — WEEK 03", "IN PROGRESS", "Smart Watch Integration Specced", "Apple HealthKit (iOS) and Google Health Connect (Android) integration documented. Real-time heart rate during workouts. Fitbit OAuth flow planned."], ["JUNE 2025 — WEEK 04", "UPCOMING", "Investor Deck Finalisation", "Unit economics, 3-year projection, and subscription model review in progress. Deck available on request from the investor section below."], ["JULY 2025", "UPCOMING", "Closed Beta — First 100 Athletes", "First 100 waitlist members invited to closed beta. Full app access. Direct founder feedback line. Your bug report shapes the final product."]].map(([ts, status, title, body], i) => {
          const pill = status === "COMPLETE" ? "bg-[#22c55e]/15 text-[#22c55e] border-[#22c55e]/40" : status === "IN PROGRESS" ? "bg-yellow-500/15 text-yellow-400 border-yellow-500/40" : "bg-[#888]/10 text-[#888] border-[#888]/30";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 4 * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-[28px] top-5 w-3 h-3 rounded-full bg-[#CC0000] ring-4 ring-[#050505]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mavr-card p-5", style: {
              borderLeft: "4px solid #CC0000"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] text-[#888]", children: ts }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] px-2 py-0.5 rounded border ${pill}`, children: status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-lg mb-1", children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#888] text-sm leading-relaxed", children: body })
            ] })
          ] }) }, i);
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com", target: "_blank", rel: "noreferrer", className: "btn-ghost inline-flex mt-6", children: "FOLLOW THE FULL BUILD ON INSTAGRAM →" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LeaderboardSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "investors", className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none", style: {
        background: "radial-gradient(ellipse at 0% 50%, rgba(204,0,0,0.08), transparent 60%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Overline, { children: "THE OPPORTUNITY" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(H2, { children: "India's Fitness Market is Massively Underbuilt." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8 mt-14", children: [["₹34,000 Cr+", "Indian fitness industry market size by 2026"], ["5 Cr+", "Active gym-goers in India with no structured digital tracking"], ["₹199 / month", "MAVR Pro starting price — less than one protein bar"]].map(([n, l], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl md:text-7xl text-white leading-none", children: n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#888] text-sm mt-3 max-w-xs", children: l })
        ] }) }, n)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 mt-16 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#1A1A1A]" }),
          [{
            h: "WHAT EXISTS TODAY",
            items: ["Generic Western apps where dal makhani isn't in the database", "Trainers managing 40 students via WhatsApp voice notes", "Gym members restarting from zero every time their trainer leaves", "No achievement system, no community, no identity"]
          }, {
            h: "WHAT MAVR BUILDS",
            items: ["Indian food database from day one — not an afterthought", "Real-time trainer-student plan sync via WebSocket", "Achievement system that makes discipline feel like a reward", "MAVR ID — a permanent athlete identity that grows with you"]
          }].map((col, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:px-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-5", style: {
              color: i === 0 ? "#888" : "#CC0000"
            }, children: col.h }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-[#cccccc] text-sm", children: col.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#CC0000]", children: "→" }),
              it
            ] }, it)) })
          ] }) }, col.h))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mt-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setInvestorOpen(true), className: "btn-red", children: "REQUEST INVESTOR DECK" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#ecosystem", className: "btn-ghost", children: "VIEW FULL ECOSYSTEM DOCS →" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { alt: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Overline, { children: "WHO IS MAVR" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(H2, { children: "Built by Athletes. For Athletes." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center mt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-sm aspect-[3/4] mx-auto", children: [
          ["top-0 left-0 border-l-4 border-t-4", "top-0 right-0 border-r-4 border-t-4", "bottom-0 left-0 border-l-4 border-b-4", "bottom-0 right-0 border-r-4 border-b-4"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute ${p} w-8 h-8 border-[#CC0000]` }, p)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-3 bg-[#111] grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "MAVR", className: "h-20 w-auto opacity-60" }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "italic text-lg md:text-xl text-white leading-relaxed", children: [
          '"India has 1.4 billion people. A generation of athletes training in gyms, on fields, in academies — all underserved by technology built for someone else. Not our food. Not our sports. Not our trainers. Not our gyms.',
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          'MAVR is being built to fix that. One system. Every athlete. Built in India."'
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-4 mt-12", children: [["24 Sections", "Complete developer build guide"], ["30+ Tables", "Full database schema documented"], ["₹2,394", "Pro value included with every apparel purchase"]].map(([n, d], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mavr-card mavr-card-top px-4 py-4 flex items-center justify-between min-h-[80px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl", children: n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[#888] text-xs text-right max-w-[60%]", children: d })
      ] }) }, n)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrainerSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BetaSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "waitlist-final", className: "relative py-28 md:py-40 px-6", style: {
      background: "radial-gradient(ellipse at center, rgba(180,0,0,0.18), #0A0A0A 70%)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[60px] md:text-[96px] leading-[0.95]", children: [
        "THE WAITLIST",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "IS OPEN."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[#cccccc] text-base md:text-lg mt-6 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#888]", children: "Be among the first 1,000 founding athletes on MAVR. Founding members get:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "→ Early app access before public launch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "→ Exclusive Founding Athlete badge — never available again" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "→ First access to MAVR Compression at founding price" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "→ Direct line to the founder during beta" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 250, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WaitlistForm, { ctaLabel: "JOIN THE FOUNDING 1,000" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-xl mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[#888] mb-2 text-left", children: "847 of 1,000 founding spots claimed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-[#111] border border-[#1A1A1A] rounded overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full", style: {
            width: "84.7%",
            background: "linear-gradient(135deg,#CC0000,#FF4444)"
          } }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShareRow, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-[#888] mt-2", children: "No spam. No noise. Only updates that matter. Unsubscribe any time." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4", autoPlay: true, loop: true, muted: true, playsInline: true, className: "absolute inset-0 w-full h-full object-cover z-0 opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-[1] bg-gradient-to-b from-[#0A0A0A]/80 via-black/60 to-black/90 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative z-10 w-full px-6 py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/10 pb-12 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "MAVR", className: "h-10 w-auto mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#888] text-sm max-w-sm leading-relaxed", children: "India's first athlete operating system. Built for Indian athletes, Indian food, Indian trainers, and Indian gyms." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-8 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] text-[#CC0000] tracking-widest mb-4", children: "PRODUCT" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-[#888]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "hover:text-white transition-colors", children: "MAVR App" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#ecosystem", className: "hover:text-white transition-colors", children: "Ecosystem" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "hover:text-white transition-colors", children: "Compression Gear" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "hover:text-white transition-colors", children: "Coach Connect" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] text-[#CC0000] tracking-widest mb-4", children: "COMPANY" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-[#888]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#buildlog", className: "hover:text-white transition-colors", children: "Build Log" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#investors", className: "hover:text-white transition-colors", children: "Investors" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com", target: "_blank", rel: "noreferrer", className: "hover:text-white transition-colors", children: "Instagram" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] text-[#CC0000] tracking-widest mb-4", children: "LEGAL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-[#888]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Privacy Policy" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Terms of Use" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white transition-colors", children: "Refund Policy" }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[11px] text-[#555] tracking-widest", children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " MAVR TECHNOLOGIES PVT. LTD. — ALL RIGHTS RESERVED"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] text-[#555]", children: "BUILT IN INDIA  ·  mavr.in" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InvestorModal, { open: investorOpen, onClose: () => setInvestorOpen(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollDepth, {})
  ] });
}
function ScrollDepth() {
  reactExports.useEffect(() => {
    const w = window;
    if (w.__mavrScroll) return;
    w.__mavrScroll = {
      50: false,
      100: false
    };
    const onScroll = () => {
      const h2 = document.documentElement;
      const pct = (h2.scrollTop + window.innerHeight) / h2.scrollHeight;
      if (pct >= 0.5 && !w.__mavrScroll[50]) {
        w.__mavrScroll[50] = true;
      }
      if (pct >= 0.99 && !w.__mavrScroll[100]) {
        w.__mavrScroll[100] = true;
      }
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return null;
}
export {
  Index as component
};
