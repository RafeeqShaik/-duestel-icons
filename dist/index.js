'use strict';

var jsxRuntime = require('react/jsx-runtime');

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var SvgBold = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M17.18 5.25c-1.71 0-3.75.65-3.75 3.75v6c0 3.1 2.04 3.75 3.75 3.75s3.75-.65 3.75-3.75V9c0-3.1-2.04-3.75-3.75-3.75M6.82 5.25c-1.71 0-3.75.65-3.75 3.75v6c0 3.1 2.04 3.75 3.75 3.75s3.75-.65 3.75-3.75V9c0-3.1-2.04-3.75-3.75-3.75M13.43 11.25h-2.86v1.5h2.86zM22.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75M1.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75"
      }
    )
  })
);
var Bold_default = SvgBold;
var SvgBroken = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M17.18 18c2.4 0 3-1.35 3-3V9c0-1.65-.6-3-3-3s-3 1.35-3 3v6c0 1.65.6 3 3 3M3.82 11.3V9c0-1.65.6-3 3-3s3 1.35 3 3v6c0 1.65-.6 3-3 3s-3-1.35-3-3M9.82 12h4.36M22.5 14.5v-5M1.5 14.5v-5"
      }
    )
  })
);
var Broken_default = SvgBroken;
var SvgBulk = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.18 5.25c-1.71 0-3.75.65-3.75 3.75v6c0 3.1 2.04 3.75 3.75 3.75s3.75-.65 3.75-3.75V9c0-3.1-2.04-3.75-3.75-3.75M6.82 5.25c-1.71 0-3.75.65-3.75 3.75v6c0 3.1 2.04 3.75 3.75 3.75s3.75-.65 3.75-3.75V9c0-3.1-2.04-3.75-3.75-3.75",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M13.43 11.25h-2.86v1.5h2.86zM22.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75M1.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default = SvgBulk;
var SvgLinear = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M17.18 18c2.4 0 3-1.35 3-3V9c0-1.65-.6-3-3-3s-3 1.35-3 3v6c0 1.65.6 3 3 3M6.82 18c-2.4 0-3-1.35-3-3V9c0-1.65.6-3 3-3s3 1.35 3 3v6c0 1.65-.6 3-3 3M9.82 12h4.36M22.5 14.5v-5M1.5 14.5v-5"
      }
    )
  })
);
var Linear_default = SvgLinear;
var SvgOutline = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.18 18.75c-1.71 0-3.75-.65-3.75-3.75V9c0-3.1 2.04-3.75 3.75-3.75s3.75.65 3.75 3.75v6c0 3.1-2.04 3.75-3.75 3.75m0-12c-1.62 0-2.25.63-2.25 2.25v6c0 1.62.63 2.25 2.25 2.25s2.25-.63 2.25-2.25V9c0-1.62-.63-2.25-2.25-2.25M6.82 18.75c-1.71 0-3.75-.65-3.75-3.75V9c0-3.1 2.04-3.75 3.75-3.75s3.75.65 3.75 3.75v6c0 3.1-2.04 3.75-3.75 3.75m0-12c-1.62 0-2.25.63-2.25 2.25v6c0 1.62.63 2.25 2.25 2.25s2.25-.63 2.25-2.25V9c0-1.62-.63-2.25-2.25-2.25"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.18 12.75H9.82c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.36a.749.749 0 1 1 0 1.5M22.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75M1.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default = SvgOutline;
var SvgTwotone = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M17.18 18c2.4 0 3-1.35 3-3V9c0-1.65-.6-3-3-3s-3 1.35-3 3v6c0 1.65.6 3 3 3M6.82 18c-2.4 0-3-1.35-3-3V9c0-1.65.6-3 3-3s3 1.35 3 3v6c0 1.65-.6 3-3 3"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.82 12h4.36M22.5 14.5v-5M1.5 14.5v-5",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default = SvgTwotone;
var components = {
  bold: Bold_default,
  broken: Broken_default,
  bulk: Bulk_default,
  linear: Linear_default,
  outline: Outline_default,
  twotone: Twotone_default
};
var Weight = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var weight_default = Weight;
var SvgBold2 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M6.47 7.72c.29-.29.77-.29 1.06 0 .71.71 1.87.71 2.58 0 .29-.29.77-.29 1.06 0s.29.77 0 1.06c-.65.65-1.5.97-2.35.97s-1.7-.32-2.35-.97a.754.754 0 0 1 0-1.06M12 18.78c-2.69 0-4.88-2.19-4.88-4.88 0-.7.57-1.28 1.27-1.28h7.2c.7 0 1.27.57 1.27 1.28.02 2.69-2.17 4.88-4.86 4.88m5.53-10c-.65.65-1.5.97-2.35.97s-1.7-.32-2.35-.97a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 .71.71 1.87.71 2.58 0 .29-.29.77-.29 1.06 0s.29.76 0 1.06"
      }
    )
  })
);
var Bold_default2 = SvgBold2;
var SvgBroken2 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M7 8.25c1 1 2.63 1 3.64 0M13.36 8.25c1 1 2.63 1 3.64 0M8.4 13h7.2c.5 0 .9.4.9.9 0 2.49-2.01 4.5-4.5 4.5s-4.5-2.01-4.5-4.5c0-.5.4-.9.9-.9"
        }
      )
    ]
  })
);
var Broken_default2 = SvgBroken2;
var SvgBulk2 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M8.82 9.75c-.85 0-1.7-.32-2.35-.97a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 .71.71 1.87.71 2.58 0 .29-.29.77-.29 1.06 0s.29.77 0 1.06c-.65.64-1.5.97-2.35.97M15.18 9.75c-.85 0-1.7-.32-2.35-.97a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 .71.71 1.87.71 2.58 0 .29-.29.77-.29 1.06 0s.29.77 0 1.06c-.65.64-1.5.97-2.35.97M15.6 12.62H8.4c-.7 0-1.27.57-1.27 1.28 0 2.69 2.19 4.88 4.88 4.88s4.88-2.19 4.88-4.88c-.01-.7-.59-1.28-1.29-1.28"
        }
      )
    ]
  })
);
var Bulk_default2 = SvgBulk2;
var SvgLinear2 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M7 8.25c1 1 2.63 1 3.64 0M13.36 8.25c1 1 2.63 1 3.64 0M8.4 13h7.2c.5 0 .9.4.9.9 0 2.49-2.01 4.5-4.5 4.5s-4.5-2.01-4.5-4.5c0-.5.4-.9.9-.9"
        }
      )
    ]
  })
);
var Linear_default2 = SvgLinear2;
var SvgOutline2 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M8.82 9.75c-.85 0-1.7-.32-2.35-.97a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 .71.71 1.87.71 2.58 0 .29-.29.77-.29 1.06 0s.29.77 0 1.06c-.65.64-1.5.97-2.35.97M15.18 9.75c-.85 0-1.7-.32-2.35-.97a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 .71.71 1.87.71 2.58 0 .29-.29.77-.29 1.06 0s.29.77 0 1.06c-.65.64-1.5.97-2.35.97M12 19.15c-2.9 0-5.25-2.36-5.25-5.25 0-.91.74-1.65 1.65-1.65h7.2c.91 0 1.65.74 1.65 1.65 0 2.89-2.35 5.25-5.25 5.25m-3.6-5.4c-.08 0-.15.07-.15.15 0 2.07 1.68 3.75 3.75 3.75s3.75-1.68 3.75-3.75c0-.08-.07-.15-.15-.15z"
        }
      )
    ]
  })
);
var Outline_default2 = SvgOutline2;
var SvgTwotone2 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M7 8.25c1 1 2.63 1 3.64 0M13.36 8.25c1 1 2.63 1 3.64 0M8.4 13h7.2c.5 0 .9.4.9.9 0 2.49-2.01 4.5-4.5 4.5s-4.5-2.01-4.5-4.5c0-.5.4-.9.9-.9",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default2 = SvgTwotone2;
var components2 = {
  bold: Bold_default2,
  broken: Broken_default2,
  bulk: Bulk_default2,
  linear: Linear_default2,
  outline: Outline_default2,
  twotone: Twotone_default2
};
var EmojiNormal = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components2[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var emojiNormal_default = EmojiNormal;
var SvgBold3 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07M12.93 4.79H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35M7.1 14.18c-.08.34-.39.57-.73.57-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.4-.1.81.15.91.55.36 1.43.36 2.93 0 4.36"
      }
    )
  })
);
var Bold_default3 = SvgBold3;
var SvgBroken3 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.99 5H13c4 0 5 1 5 5v4c0 4-1 5-5 5H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6.38 10c.24.98.31 1.99.19 2.99-.04.34-.1.68-.19 1.01"
        }
      )
    ]
  })
);
var Broken_default3 = SvgBroken3;
var SvgBulk3 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12.93 4.79H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07M6.38 14.75c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.39-.1.8.15.9.55.36 1.43.36 2.94 0 4.36-.08.34-.39.57-.72.57"
        }
      )
    ]
  })
);
var Bulk_default3 = SvgBulk3;
var SvgLinear3 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13 19H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5h6c4 0 5 1 5 5v4c0 4-1 5-5 5M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6.38 10c.33 1.31.33 2.69 0 4"
        }
      )
    ]
  })
);
var Linear_default3 = SvgLinear3;
var SvgOutline3 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M13 19.75H7c-4.41 0-5.75-1.34-5.75-5.75v-4c0-4.41 1.34-5.75 5.75-5.75h6c4.41 0 5.75 1.34 5.75 5.75v4c0 4.41-1.34 5.75-5.75 5.75m-6-14c-3.58 0-4.25.68-4.25 4.25v4c0 3.57.67 4.25 4.25 4.25h6c3.58 0 4.25-.68 4.25-4.25v-4c0-3.57-.67-4.25-4.25-4.25zM20.5 15.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.59 0 .72-.09.73-.09.02-.06.02-.41.02-.66v-2c0-.25 0-.59-.04-.68-.01.01-.16-.07-.71-.07-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.08 0 2.25 1.02 2.25 2.25v2c0 1.23-.17 2.25-2.25 2.25"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M6.38 14.75c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.39-.1.8.15.9.55.36 1.43.36 2.94 0 4.36-.08.34-.39.57-.72.57"
        }
      )
    ]
  })
);
var Outline_default3 = SvgOutline3;
var SvgTwotone3 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13 19H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5h6c4 0 5 1 5 5v4c0 4-1 5-5 5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M6.38 10c.33 1.31.33 2.69 0 4",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default3 = SvgTwotone3;
var components3 = {
  bold: Bold_default3,
  broken: Broken_default3,
  bulk: Bulk_default3,
  linear: Linear_default3,
  outline: Outline_default3,
  twotone: Twotone_default3
};
var BatteryEmpty2 = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components3[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var batteryEmpty2_default = BatteryEmpty2;
var SvgBold4 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "m18.34 14.13-2.18-1.75c-.31-.24-.7-.38-1.1-.38h-2.31V9h4.47c.97 0 1.75-.78 1.75-1.75v-3.5c0-.97-.78-1.75-1.75-1.75H8.96c-.39 0-.78.14-1.09.38L5.68 4.13c-.87.7-.87 2.04 0 2.74l2.19 1.75c.31.24.7.38 1.09.38h2.29v3H6.8c-.97 0-1.75.78-1.75 1.75v3.5c0 .97.78 1.75 1.75 1.75h4.45v2.25H9c-.41 0-.75.34-.75.75s.34.75.75.75h6c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.25V19h2.31c.4 0 .79-.14 1.1-.38l2.18-1.75c.88-.7.88-2.04 0-2.74"
      }
    )
  })
);
var Bold_default4 = SvgBold4;
var SvgBroken4 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M13.03 2H8.96c-.4 0-.78.14-1.09.38L5.68 4.13c-.88.7-.88 2.03 0 2.73l2.19 1.75c.31.25.7.38 1.09.38h8.26c.97 0 1.75-.78 1.75-1.75v-3.5c0-.97-.78-1.75-1.75-1.75M6.8 12h8.26c.4 0 .78.14 1.09.38l2.19 1.75c.88.7.88 2.03 0 2.73l-2.19 1.75c-.31.25-.7.38-1.09.38H6.8c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.96.78-1.74 1.75-1.74M12 12V9M12 22v-3M9 22h6"
      }
    )
  })
);
var Broken_default4 = SvgBroken4;
var SvgBulk4 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18.97 3.75v3.5c0 .97-.78 1.75-1.75 1.75H8.96c-.39 0-.78-.14-1.09-.38L5.68 6.87c-.87-.7-.87-2.04 0-2.74l2.19-1.75c.31-.24.7-.38 1.09-.38h8.26c.97 0 1.75.78 1.75 1.75M18.34 16.87l-2.18 1.75c-.31.24-.7.38-1.1.38H6.8c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.97.78-1.75 1.75-1.75h8.26c.4 0 .79.14 1.1.38l2.18 1.75c.88.7.88 2.04 0 2.74"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12.75 9h-1.5v3h1.5zM15.75 22c0 .41-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25V19h1.5v2.25H15c.41 0 .75.34.75.75",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default4 = SvgBulk4;
var SvgLinear4 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M17.22 2H8.96c-.4 0-.78.14-1.09.38L5.68 4.13c-.88.7-.88 2.03 0 2.73l2.19 1.75c.31.25.7.38 1.09.38h8.26c.97 0 1.75-.78 1.75-1.75v-3.5c0-.96-.78-1.74-1.75-1.74M6.8 12h8.26c.4 0 .78.14 1.09.38l2.19 1.75c.88.7.88 2.03 0 2.73l-2.19 1.75c-.31.25-.7.38-1.09.38H6.8c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.96.78-1.74 1.75-1.74M12 12V9M12 22v-3M9 22h6"
      }
    )
  })
);
var Linear_default4 = SvgLinear4;
var SvgOutline4 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.22 9.75H8.96c-.56 0-1.12-.19-1.56-.55L5.21 7.45c-.6-.48-.94-1.19-.94-1.95s.34-1.48.94-1.95L7.4 1.8c.44-.35 1-.55 1.56-.55h8.26a2.5 2.5 0 0 1 2.5 2.5v3.5a2.5 2.5 0 0 1-2.5 2.5m-8.26-7c-.23 0-.45.08-.62.22L6.15 4.72a1 1 0 0 0-.38.78c0 .3.14.59.38.78l2.19 1.75c.18.14.4.22.62.22h8.26c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM15.06 19.75H6.8a2.5 2.5 0 0 1-2.5-2.5v-3.5a2.5 2.5 0 0 1 2.5-2.5h8.26c.57 0 1.12.19 1.56.55l2.19 1.75c.6.48.94 1.19.94 1.95s-.34 1.48-.94 1.95l-2.19 1.75c-.44.36-.99.55-1.56.55m-8.26-7c-.55 0-1 .45-1 1v3.5c0 .55.45 1 1 1h8.26c.23 0 .45-.08.62-.22l2.19-1.75a1 1 0 0 0 .38-.78 1 1 0 0 0-.38-.78l-2.19-1.75c-.18-.14-.4-.22-.62-.22z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 12.75c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75M12 22.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15 22.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default4 = SvgOutline4;
var SvgTwotone4 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M17.22 2H8.96c-.4 0-.78.14-1.09.38L5.68 4.13c-.88.7-.88 2.03 0 2.73l2.19 1.75c.31.25.7.38 1.09.38h8.26c.97 0 1.75-.78 1.75-1.75v-3.5c0-.96-.78-1.74-1.75-1.74M6.8 12h8.26c.4 0 .78.14 1.09.38l2.19 1.75c.88.7.88 2.03 0 2.73l-2.19 1.75c-.31.25-.7.38-1.09.38H6.8c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.96.78-1.74 1.75-1.74"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 12V9",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "g",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          opacity: 0.4,
          children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 22v-3M9 22h6", opacity: 0.4 })
        }
      )
    ]
  })
);
var Twotone_default4 = SvgTwotone4;
var components4 = {
  bold: Bold_default4,
  broken: Broken_default4,
  bulk: Bulk_default4,
  linear: Linear_default4,
  outline: Outline_default4,
  twotone: Twotone_default4
};
var SignPost = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components4[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var signPost_default = SignPost;
var SvgBold5 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M19.09 12.59c-.16 0-.32-.05-.46-.16-4.03-3.11-9.24-3.11-13.27 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 4.59-3.55 10.52-3.55 15.1 0 .33.25.39.72.13 1.05-.13.19-.35.29-.58.29"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M22 9.11c-.16 0-.32-.05-.46-.16-5.8-4.48-13.29-4.48-19.08 0-.33.25-.8.19-1.05-.13a.74.74 0 0 1 .13-1.05c6.35-4.91 14.56-4.91 20.92 0 .33.25.39.72.13 1.05-.14.19-.37.29-.59.29M17.21 16.24c-.16 0-.32-.05-.46-.16-2.88-2.23-6.61-2.23-9.5 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 3.44-2.66 7.89-2.66 11.33 0 .33.25.39.72.13 1.05a.72.72 0 0 1-.58.29M14.6 19.9c-.16 0-.32-.05-.46-.16-1.3-1.01-2.99-1.01-4.29 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 1.86-1.44 4.26-1.44 6.12 0 .33.25.39.72.13 1.05a.72.72 0 0 1-.58.29"
        }
      )
    ]
  })
);
var Bold_default5 = SvgBold5;
var SvgBroken5 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M16.31 10.21c.97.4 1.9.94 2.78 1.62M4.91 11.84c2.44-1.89 5.3-2.7 8.1-2.44M8.36 5.28c4.63-1.1 9.55-.08 13.64 3.08M2 8.36c.94-.72 1.92-1.34 2.93-1.84M6.79 15.49c3.15-2.44 7.26-2.44 10.41 0M9.4 19.15c1.58-1.22 3.63-1.22 5.21 0"
      }
    )
  })
);
var Broken_default5 = SvgBroken5;
var SvgBulk5 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M19.09 12.59c-.16 0-.32-.05-.46-.16-4.03-3.11-9.24-3.11-13.27 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 4.59-3.55 10.52-3.55 15.1 0 .33.25.39.72.13 1.05-.13.19-.35.29-.58.29",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M22 9.11c-.16 0-.32-.05-.46-.16-5.8-4.48-13.29-4.48-19.08 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 6.35-4.91 14.56-4.91 20.92 0 .33.25.39.72.13 1.05-.14.19-.37.29-.59.29M17.21 16.24c-.16 0-.32-.05-.46-.16-2.88-2.23-6.61-2.23-9.5 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 3.44-2.66 7.89-2.66 11.33 0 .33.25.39.72.13 1.05a.72.72 0 0 1-.58.29"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.6 19.9c-.16 0-.32-.05-.46-.16-1.3-1.01-2.99-1.01-4.29 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 1.86-1.44 4.26-1.44 6.12 0 .33.25.39.72.13 1.05a.72.72 0 0 1-.58.29",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default5 = SvgBulk5;
var SvgLinear5 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M4.91 11.84c4.3-3.32 9.89-3.32 14.19 0M2 8.36c6.06-4.68 13.94-4.68 20 0M6.79 15.49c3.15-2.44 7.26-2.44 10.41 0M9.4 19.15c1.58-1.22 3.63-1.22 5.21 0"
      }
    )
  })
);
var Linear_default5 = SvgLinear5;
var SvgOutline5 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M19.09 12.59c-.16 0-.32-.05-.46-.16-4.03-3.11-9.24-3.11-13.27 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 4.59-3.55 10.52-3.55 15.1 0 .33.25.39.72.13 1.05-.13.19-.35.29-.58.29"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M22 9.11c-.16 0-.32-.05-.46-.16-5.8-4.48-13.29-4.48-19.08 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 6.35-4.91 14.56-4.91 20.92 0 .33.25.39.72.13 1.05-.14.19-.37.29-.59.29M17.21 16.24c-.16 0-.32-.05-.46-.16-2.88-2.23-6.61-2.23-9.5 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 3.44-2.66 7.89-2.66 11.33 0 .33.25.39.72.13 1.05a.72.72 0 0 1-.58.29M14.6 19.9c-.16 0-.32-.05-.46-.16-1.3-1.01-2.99-1.01-4.29 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 1.86-1.44 4.26-1.44 6.12 0 .33.25.39.72.13 1.05a.72.72 0 0 1-.58.29"
        }
      )
    ]
  })
);
var Outline_default5 = SvgOutline5;
var SvgTwotone5 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.91 11.84c4.3-3.32 9.89-3.32 14.19 0",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2 8.36c6.06-4.68 13.94-4.68 20 0M6.79 15.49c3.15-2.44 7.26-2.44 10.41 0"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.4 19.15c1.58-1.22 3.63-1.22 5.21 0",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default5 = SvgTwotone5;
var components5 = {
  bold: Bold_default5,
  broken: Broken_default5,
  bulk: Bulk_default5,
  linear: Linear_default5,
  outline: Outline_default5,
  twotone: Twotone_default5
};
var Wifi = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components5[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var wifi_default = Wifi;
var SvgBold6 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.8 0l4.17 5.84c.69.96.28 1.75-.9 1.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.59 18H6.41c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.58l3.99 5.61c.93 1.28.39 2.33-1.19 2.33M12.75 18v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4z"
        }
      )
    ]
  })
);
var Bold_default6 = SvgBold6;
var SvgBroken6 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.79 0l4.17 5.84c.7.96.29 1.75-.89 1.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M18.78 15.67c.93 1.28.39 2.33-1.19 2.33H6.42c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.57L16.17 12M12 22v-4"
        }
      )
    ]
  })
);
var Broken_default6 = SvgBroken6;
var SvgBulk6 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.8 0l4.17 5.84c.69.96.28 1.75-.9 1.75",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.59 18H6.41c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.58l3.99 5.61c.93 1.28.39 2.33-1.19 2.33M12.75 18v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4z"
        }
      )
    ]
  })
);
var Bulk_default6 = SvgBulk6;
var SvgLinear6 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.79 0l4.17 5.84c.7.96.29 1.75-.89 1.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M17.59 18H6.42c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.57l3.99 5.61c.93 1.28.39 2.33-1.19 2.33M12 22v-4"
        }
      )
    ]
  })
);
var Linear_default6 = SvgLinear6;
var SvgOutline6 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.17 10.81H7.83c-.86 0-1.52-.34-1.82-.92-.3-.59-.18-1.32.32-2.01l4.17-5.84a1.827 1.827 0 0 1 3.02.01l4.17 5.83c.5.69.62 1.42.32 2.01-.32.58-.98.92-1.84.92M12 2.7c-.09 0-.19.08-.28.2L7.55 8.75c-.2.27-.21.43-.2.46.01.02.15.1.49.1h8.34c.33 0 .47-.09.49-.11 0-.02-.01-.18-.2-.45L12.3 2.91q-.165-.21-.3-.21"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.59 18.75H6.42c-1.43 0-2-.69-2.21-1.1s-.43-1.27.41-2.43l3.99-5.6c.14-.2.37-.31.61-.31h5.57c.24 0 .47.12.61.31l3.99 5.61c.84 1.15.61 2.01.4 2.42s-.77 1.1-2.2 1.1M9.6 10.81 5.83 16.1c-.32.44-.35.74-.29.87.07.13.33.28.87.28h11.17c.54 0 .81-.15.87-.28.07-.13.03-.43-.29-.87l-3.77-5.3H9.6z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default6 = SvgOutline6;
var SvgTwotone6 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.79 0l4.17 5.84c.7.96.29 1.75-.89 1.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M17.59 18H6.42c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.57l3.99 5.61c.93 1.28.39 2.33-1.19 2.33"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 22v-4",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default6 = SvgTwotone6;
var components6 = {
  bold: Bold_default6,
  broken: Broken_default6,
  bulk: Bulk_default6,
  linear: Linear_default6,
  outline: Outline_default6,
  twotone: Twotone_default6
};
var Tree = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components6[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var tree_default = Tree;
var SvgBold7 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M22 5.71v9.58c0 2.76-2.24 5-5 5H7c-.46 0-.9-.06-1.33-.18-.62-.17-.82-.96-.36-1.42L15.94 8.06c.22-.22.55-.27.86-.21.32.06.67-.03.92-.27L20.29 5c.94-.94 1.71-.63 1.71.71M14.64 7.36 4.17 17.83c-.48.48-1.28.36-1.6-.24-.37-.68-.57-1.47-.57-2.3V5.71c0-1.34.77-1.65 1.71-.71l2.58 2.59c.39.38 1.03.38 1.42 0L11.29 4c.39-.39 1.03-.39 1.42 0l1.94 1.94c.38.39.38 1.03-.01 1.42"
      }
    )
  })
);
var Bold_default7 = SvgBold7;
var SvgBroken7 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M2 10.99V5.71c0-1.33.77-1.65 1.71-.71L6.3 7.59c.39.39 1.03.39 1.41 0L11.29 4a.996.996 0 0 1 1.41 0l3.59 3.59c.39.39 1.03.39 1.41 0L20.29 5c.94-.94 1.71-.62 1.71.71v9.59c0 3-2 5-5 5H7c-2.76 0-5-2.24-5-5"
      }
    )
  })
);
var Broken_default7 = SvgBroken7;
var SvgBulk7 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M22 5.71v9.58c0 2.76-2.24 5-5 5H7c-.46 0-.9-.06-1.33-.18-.62-.17-.82-.96-.36-1.42L15.94 8.06c.22-.22.55-.27.86-.21.32.06.67-.03.92-.27L20.29 5c.94-.94 1.71-.63 1.71.71"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.64 7.36 4.17 17.83c-.48.48-1.28.36-1.6-.24-.37-.68-.57-1.47-.57-2.3V5.71c0-1.34.77-1.65 1.71-.71l2.58 2.59c.39.38 1.03.38 1.42 0L11.29 4c.39-.39 1.03-.39 1.42 0l1.94 1.94c.38.39.38 1.03-.01 1.42",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default7 = SvgBulk7;
var SvgLinear7 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M2 15.29V5.71c0-1.33.77-1.65 1.71-.71L6.3 7.59c.39.39 1.03.39 1.41 0L11.29 4a.996.996 0 0 1 1.41 0l3.59 3.59c.39.39 1.03.39 1.41 0L20.29 5c.94-.94 1.71-.62 1.71.71v9.59c0 3-2 5-5 5H7c-2.76-.01-5-2.25-5-5.01"
      }
    )
  })
);
var Linear_default7 = SvgLinear7;
var SvgOutline7 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M17 21.04H7c-3.17 0-5.75-2.58-5.75-5.75V5.71c0-1.3.6-1.75.96-1.9s1.1-.26 2.02.66l2.59 2.59c.1.1.26.1.35 0l3.59-3.59c.66-.66 1.82-.66 2.47 0l3.59 3.59c.1.1.26.1.35 0l2.59-2.59c.92-.92 1.66-.8 2.02-.66.36.15.96.59.96 1.9v9.59c.01 3.43-2.3 5.74-5.74 5.74M2.81 5.24c-.03.08-.06.23-.06.47v9.59A4.26 4.26 0 0 0 7 19.55h10c2.58 0 4.25-1.67 4.25-4.25V5.71c0-.24-.03-.38-.06-.46-.08.04-.2.12-.37.29l-2.59 2.59c-.66.66-1.82.66-2.47 0l-3.59-3.59c-.1-.1-.26-.1-.35 0L8.24 8.12c-.66.66-1.82.66-2.47 0L3.18 5.53c-.17-.17-.3-.25-.37-.29"
      }
    )
  })
);
var Outline_default7 = SvgOutline7;
var SvgTwotone7 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M2 15.29V5.71c0-1.33.77-1.65 1.71-.71L6.3 7.59c.39.39 1.03.39 1.41 0L11.29 4a.996.996 0 0 1 1.41 0l3.59 3.59c.39.39 1.03.39 1.41 0L20.29 5c.94-.94 1.71-.62 1.71.71v9.59c0 3-2 5-5 5H7c-2.76-.01-5-2.25-5-5.01"
      }
    )
  })
);
var Twotone_default7 = SvgTwotone7;
var components7 = {
  bold: Bold_default7,
  broken: Broken_default7,
  bulk: Bulk_default7,
  linear: Linear_default7,
  outline: Outline_default7,
  twotone: Twotone_default7
};
var Crown = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components7[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var crown_default = Crown;
var SvgBold8 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M23 15.37v2.19c0 2.44-1.78 4.74-4.2 5.41-.17.04-.35.04-.51 0A5.7 5.7 0 0 1 15.34 21c-.79-.98-1.25-2.19-1.25-3.44v-2.19c0-.42.31-.88.69-1.04l2.78-1.14c.63-.25 1.33-.25 1.96 0l1 .41 1.79.73c.38.16.69.62.69 1.04"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m20.95 11.01-.18 1.07-.7-.28c-.99-.4-2.07-.4-3.08 0l-2.79 1.15c-.95.4-1.61 1.39-1.61 2.42v2.19c0 1.19.33 2.38.94 3.44H6.18c-1.37 0-2.66-1.09-2.89-2.44l-1.26-7.55c-.16-.93.31-2.18 1.05-2.77l6.58-5.26c1.01-.81 2.65-.81 3.66.01l6.58 5.25c.73.59 1.21 1.84 1.05 2.77"
        }
      )
    ]
  })
);
var Bold_default8 = SvgBold8;
var SvgBroken8 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M23 17.56v-2.19c0-.42-.31-.88-.69-1.04l-1.79-.73-1-.41c-.63-.25-1.33-.25-1.96 0l-2.78 1.14c-.38.16-.69.62-.69 1.04v2.19c0 1.25.46 2.46 1.25 3.44.73.93 1.77 1.65 2.95 1.97.16.04.34.04.51 0 .99-.27 1.87-.82 2.56-1.53"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2.03 11.01c-.16-.93.31-2.18 1.05-2.77l6.58-5.26c1.01-.81 2.65-.81 3.66.01l6.58 5.25c.73.59 1.21 1.84 1.05 2.77l-.43 2.59-1-.41c-.63-.25-1.33-.25-1.96 0l-2.78 1.14c-.38.16-.69.62-.69 1.04v2.19c0 1.25.46 2.46 1.25 3.44H6.18c-1.37 0-2.66-1.09-2.89-2.44l-.55-3.32"
        }
      )
    ]
  })
);
var Broken_default8 = SvgBroken8;
var SvgBulk8 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M23 15.37v2.19c0 2.44-1.78 4.74-4.2 5.41-.17.04-.35.04-.51 0A5.7 5.7 0 0 1 15.34 21c-.79-.98-1.25-2.19-1.25-3.44v-2.19c0-.42.31-.88.69-1.04l2.78-1.14c.63-.25 1.33-.25 1.96 0l1 .41 1.79.73c.38.16.69.62.69 1.04"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m20.95 11.01-.43 2.59-1-.41c-.63-.25-1.33-.25-1.96 0l-2.78 1.14c-.38.16-.69.62-.69 1.04v2.19c0 1.25.46 2.46 1.25 3.44H6.18c-1.37 0-2.66-1.09-2.89-2.44l-1.26-7.55c-.16-.93.31-2.18 1.05-2.77l6.58-5.26c1.01-.81 2.65-.81 3.66.01l6.58 5.25c.73.59 1.21 1.84 1.05 2.77",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default8 = SvgBulk8;
var SvgLinear8 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M23 15.37v2.19c0 2.44-1.78 4.74-4.2 5.41-.17.04-.35.04-.51 0A5.7 5.7 0 0 1 15.34 21c-.79-.98-1.25-2.19-1.25-3.44v-2.19c0-.42.31-.88.69-1.04l2.78-1.14c.63-.25 1.33-.25 1.96 0l1 .41 1.79.73c.38.16.69.62.69 1.04"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m20.95 11.01-.43 2.59-1-.41c-.63-.25-1.33-.25-1.96 0l-2.78 1.14c-.38.16-.69.62-.69 1.04v2.19c0 1.25.46 2.46 1.25 3.44H6.18c-1.37 0-2.66-1.09-2.89-2.44l-1.26-7.55c-.16-.93.31-2.18 1.05-2.77l6.58-5.26c1.01-.81 2.65-.81 3.66.01l6.58 5.25c.73.59 1.21 1.84 1.05 2.77"
        }
      )
    ]
  })
);
var Linear_default8 = SvgLinear8;
var SvgOutline8 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18.53 23.75c-.15 0-.29-.02-.42-.05a6.47 6.47 0 0 1-3.36-2.23c-.91-1.13-1.41-2.51-1.41-3.9v-2.19c0-.72.48-1.45 1.15-1.73l2.79-1.14c.82-.32 1.71-.32 2.52 0l2.8 1.14c.67.28 1.16 1.01 1.16 1.73v2.19c0 2.79-2 5.37-4.75 6.13-.17.03-.33.05-.48.05m.01-10c-.24 0-.48.04-.71.14l-2.77 1.14c-.1.04-.22.23-.22.35v2.19c0 1.05.38 2.1 1.08 2.97.66.84 1.57 1.45 2.56 1.72.03.01.09.01.14-.01 2.05-.57 3.62-2.58 3.62-4.68v-2.19c0-.12-.12-.3-.23-.35l-2.78-1.14a1.8 1.8 0 0 0-.69-.14"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15.34 21.75H6.18c-1.74 0-3.34-1.35-3.63-3.06l-1.26-7.55c-.21-1.19.38-2.72 1.32-3.48L9.19 2.4c1.29-1.04 3.31-1.03 4.6.01l6.58 5.25c.95.76 1.53 2.29 1.32 3.48l-.43 2.59c-.04.22-.18.42-.38.53s-.44.13-.65.04l-1-.41c-.44-.18-.94-.18-1.4 0l-2.77 1.14c-.1.04-.22.23-.22.35v2.19c0 1.05.38 2.1 1.08 2.97.18.22.22.53.09.79-.12.25-.38.42-.67.42M11.48 3.12c-.49 0-.99.15-1.35.44L3.55 8.82c-.52.42-.89 1.4-.78 2.06l1.26 7.55c.17.98 1.15 1.81 2.15 1.81h7.8c-.42-.85-.64-1.77-.64-2.69v-2.19c0-.72.48-1.45 1.15-1.73l2.79-1.14c.82-.32 1.71-.32 2.52 0l.14.06.28-1.66c.11-.66-.26-1.64-.78-2.06l-6.58-5.25c-.38-.31-.88-.46-1.38-.46"
        }
      )
    ]
  })
);
var Outline_default8 = SvgOutline8;
var SvgTwotone8 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M23 15.37v2.19c0 2.44-1.78 4.74-4.2 5.41-.17.04-.35.04-.51 0A5.7 5.7 0 0 1 15.34 21c-.79-.98-1.25-2.19-1.25-3.44v-2.19c0-.42.31-.88.69-1.04l2.78-1.14c.63-.25 1.33-.25 1.96 0l1 .41 1.79.73c.38.16.69.62.69 1.04"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m20.95 11.01-.43 2.59-1-.41c-.63-.25-1.33-.25-1.96 0l-2.78 1.14c-.38.16-.69.62-.69 1.04v2.19c0 1.25.46 2.46 1.25 3.44H6.18c-1.37 0-2.66-1.09-2.89-2.44l-1.26-7.55c-.16-.93.31-2.18 1.05-2.77l6.58-5.26c1.01-.81 2.65-.81 3.66.01l6.58 5.25c.73.59 1.21 1.84 1.05 2.77",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default8 = SvgTwotone8;
var components8 = {
  bold: Bold_default8,
  broken: Broken_default8,
  bulk: Bulk_default8,
  linear: Linear_default8,
  outline: Outline_default8,
  twotone: Twotone_default8
};
var SafeHome = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components8[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var safeHome_default = SafeHome;
var SvgBold9 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M12.5 5.48c.08 0 .16 0 .25.01V2.53c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.96c.08-.01.16-.01.25-.01-4.61.23-8.28 4.03-8.28 8.7v1.94c0 1.1.9 2 2 2h13.56c1.1 0 2-.9 2-2v-1.94c0-4.67-3.67-8.47-8.28-8.7M14.73 19.11c.33 0 .57.31.49.63A3.336 3.336 0 0 1 12 22.22c-1.54 0-2.84-1.05-3.22-2.48-.08-.32.16-.63.49-.63z"
      }
    )
  })
);
var Bold_default9 = SvgBold9;
var SvgBroken9 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M4.53 9.04a8.71 8.71 0 0 1 7.41-4.11h.12c4.82 0 8.72 3.9 8.72 8.72v4.94H3.22v-4.94M12 2v2.93M15.65 18.59A3.66 3.66 0 0 1 12 22c-1.93 0-3.52-1.5-3.65-3.41z"
      }
    )
  })
);
var Broken_default9 = SvgBroken9;
var SvgBulk9 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.78 14.18v2.94c0 1.1-.9 2-2 2H5.22c-1.1 0-2-.9-2-2v-2.94c0-4.82 3.9-8.72 8.72-8.72h.12c4.82-.01 8.72 3.9 8.72 8.72",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12.75 2.53v2.96q-.345-.03-.69-.03h-.12q-.345 0-.69.03V2.53c0-.41.34-.75.75-.75s.75.34.75.75M15.32 19.11a3.326 3.326 0 0 1-6.64 0z"
        }
      )
    ]
  })
);
var Bulk_default9 = SvgBulk9;
var SvgLinear9 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M20.78 13.65v4.94H3.22v-4.94c0-4.82 3.9-8.72 8.72-8.72h.12c4.82 0 8.72 3.9 8.72 8.72M12 2v2.93M15.65 18.59A3.66 3.66 0 0 1 12 22c-1.93 0-3.52-1.5-3.65-3.41z"
      }
    )
  })
);
var Linear_default9 = SvgLinear9;
var SvgOutline9 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.78 19.34H3.22c-.41 0-.75-.34-.75-.75v-4.94c0-5.22 4.25-9.47 9.47-9.47h.12c5.22 0 9.47 4.25 9.47 9.47v4.94c0 .41-.34.75-.75.75m-16.81-1.5h16.06v-4.19c0-4.4-3.58-7.97-7.97-7.97h-.12c-4.4 0-7.97 3.58-7.97 7.97z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 5.68c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2.93c0 .41-.34.75-.75.75M12 22.75c-2.31 0-4.24-1.81-4.4-4.11a.76.76 0 0 1 .2-.56c.14-.15.34-.24.55-.24h7.3c.21 0 .41.09.55.24s.21.36.2.56c-.16 2.3-2.09 4.11-4.4 4.11m-2.73-3.41A2.92 2.92 0 0 0 12 21.25c1.24 0 2.32-.79 2.73-1.91z"
        }
      )
    ]
  })
);
var Outline_default9 = SvgOutline9;
var SvgTwotone9 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M20.78 13.65v4.94H3.22v-4.94c0-4.82 3.9-8.72 8.72-8.72h.12c4.82 0 8.72 3.9 8.72 8.72"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 2v2.93M15.65 18.59A3.66 3.66 0 0 1 12 22c-1.93 0-3.52-1.5-3.65-3.41z",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default9 = SvgTwotone9;
var components9 = {
  bold: Bold_default9,
  broken: Broken_default9,
  bulk: Bulk_default9,
  linear: Linear_default9,
  outline: Outline_default9,
  twotone: Twotone_default9
};
var Lamp = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components9[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var lamp_default = Lamp;
var SvgBold10 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "m20.83 8.01-6.55-5.24C13 1.75 11 1.74 9.73 2.76L3.18 8.01c-.94.75-1.51 2.25-1.31 3.43l1.26 7.54C3.42 20.67 4.99 22 6.7 22h10.6c1.69 0 3.29-1.36 3.58-3.03l1.26-7.54c.18-1.17-.39-2.67-1.31-3.42M12.75 18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75z"
      }
    )
  })
);
var Bold_default10 = SvgBold10;
var SvgBroken10 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M12 18v-3M20.64 19.24c-.24 1.41-1.61 2.57-3.04 2.57H6.4c-1.44 0-2.8-1.15-3.04-2.57l-1.33-7.96c-.17-.98.33-2.29 1.11-2.91l6.93-5.55c1.06-.85 2.79-.85 3.86.01l6.93 5.54c.77.62 1.27 1.93 1.11 2.91L21.35 15"
      }
    )
  })
);
var Broken_default10 = SvgBroken10;
var SvgBulk10 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m20.83 8.01-6.55-5.24C13 1.75 11 1.74 9.73 2.76L3.18 8.01c-.94.75-1.51 2.25-1.31 3.43l1.26 7.54C3.42 20.67 4.99 22 6.7 22h10.6c1.69 0 3.29-1.36 3.58-3.03l1.26-7.54c.18-1.17-.39-2.67-1.31-3.42",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default10 = SvgBulk10;
var SvgLinear10 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M12 18v-3M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01"
      }
    )
  })
);
var Linear_default10 = SvgLinear10;
var SvgOutline10 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.6 22.56H6.4c-1.82 0-3.48-1.4-3.78-3.19L1.29 11.4c-.22-1.24.39-2.83 1.38-3.62L9.6 2.23c1.34-1.08 3.45-1.07 4.8.01l6.93 5.54c.98.79 1.58 2.38 1.38 3.62l-1.33 7.96c-.3 1.77-2 3.2-3.78 3.2M11.99 2.93c-.53 0-1.06.16-1.45.47L3.61 8.96c-.56.45-.96 1.49-.84 2.2l1.33 7.96c.18 1.05 1.23 1.94 2.3 1.94h11.2c1.07 0 2.12-.89 2.3-1.95l1.33-7.96c.11-.7-.29-1.76-.84-2.2l-6.93-5.54c-.4-.32-.94-.48-1.47-.48"
        }
      )
    ]
  })
);
var Outline_default10 = SvgOutline10;
var SvgTwotone10 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 18v-3",
          opacity: 0.34
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01"
        }
      )
    ]
  })
);
var Twotone_default10 = SvgTwotone10;
var components10 = {
  bold: Bold_default10,
  broken: Broken_default10,
  bulk: Bulk_default10,
  linear: Linear_default10,
  outline: Outline_default10,
  twotone: Twotone_default10
};
var Home = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components10[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var home_default = Home;
var SvgBold11 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.92 10.12a4.4 4.4 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53.74.49 1.62.77 2.56.77 1.74 0 3.25-.93 4.07-2.3.44-.72.68-1.56.68-2.45a4.74 4.74 0 0 0-3.71-4.63m1.33 4.01-2.54 2.34c-.14.13-.33.2-.51.2-.19 0-.38-.07-.53-.22l-1.17-1.17a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.66.66 2.01-1.85c.31-.28.78-.26 1.06.04.28.31.26.78-.04 1.06"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.58 4.02v2.22c0 .81-.5 1.82-1 2.33l-.18.16c-.14.13-.35.16-.53.1-.2-.07-.4-.12-.6-.17-.44-.11-.91-.16-1.39-.16-3.45 0-6.25 2.8-6.25 6.25 0 1.14.31 2.26.9 3.22.5.84 1.2 1.54 1.96 2.01.23.15.32.47.12.65-.07.06-.14.11-.21.16l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.32 8.47c-.5-.51-.9-1.42-.9-2.02V4.12c0-1.21.9-2.12 1.99-2.12h13.18c1.09 0 1.99.91 1.99 2.02"
        }
      )
    ]
  })
);
var Bold_default11 = SvgBold11;
var SvgBroken11 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M21.63 14.75c0 .89-.24 1.73-.68 2.45a4.74 4.74 0 0 1-4.07 2.3c-.94 0-1.82-.28-2.56-.77-.62-.38-1.13-.91-1.5-1.53-.44-.72-.69-1.56-.69-2.45 0-2.62 2.13-4.75 4.75-4.75.36 0 .71.04 1.04.12a4.74 4.74 0 0 1 3.71 4.63"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m15.03 14.75 1.17 1.17 2.53-2.34"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M5.33 2h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.4 4.4 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02"
        }
      )
    ]
  })
);
var Broken_default11 = SvgBroken11;
var SvgBulk11 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.92 10.12a4.4 4.4 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53.74.49 1.62.77 2.56.77 1.74 0 3.25-.93 4.07-2.3.44-.72.68-1.56.68-2.45a4.74 4.74 0 0 0-3.71-4.63m1.33 4.01-2.54 2.34c-.14.13-.33.2-.51.2-.19 0-.38-.07-.53-.22l-1.17-1.17a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.66.66 2.01-1.85c.31-.28.78-.26 1.06.04.28.31.26.78-.04 1.06"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M5.41 2h13.17c1.1 0 2 .91 2 2.02v2.22c0 .81-.5 1.82-1 2.32l-4.29 3.84c-.6.51-1 1.52-1 2.32v4.34c0 .61-.4 1.41-.9 1.72l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.31 8.46c-.5-.51-.9-1.41-.9-2.02V4.12c.01-1.21.91-2.12 2-2.12",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default11 = SvgBulk11;
var SvgLinear11 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M21.63 14.75c0 .89-.24 1.73-.68 2.45a4.74 4.74 0 0 1-4.07 2.3c-.94 0-1.82-.28-2.56-.77-.62-.38-1.13-.91-1.5-1.53-.44-.72-.69-1.56-.69-2.45 0-2.62 2.13-4.75 4.75-4.75.36 0 .71.04 1.04.12a4.74 4.74 0 0 1 3.71 4.63"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m15.03 14.75 1.17 1.17 2.53-2.34"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M20.69 4.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.4 4.4 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02V4.12C3.31 2.91 4.22 2 5.33 2h13.34c1.11 0 2.02.91 2.02 2.02"
        }
      )
    ]
  })
);
var Linear_default11 = SvgLinear11;
var SvgOutline11 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.88 20.25a5.3 5.3 0 0 1-2.97-.9 5.24 5.24 0 0 1-1.73-1.77c-.52-.85-.8-1.83-.8-2.83 0-3.03 2.47-5.5 5.5-5.5.42 0 .83.05 1.22.14 2.48.55 4.28 2.8 4.28 5.36 0 1.01-.27 1.99-.79 2.84a5.51 5.51 0 0 1-4.71 2.66m0-9.5c-2.21 0-4 1.79-4 4 0 .73.2 1.44.58 2.06.32.53.75.97 1.25 1.28.66.44 1.4.66 2.17.66 1.4 0 2.71-.74 3.43-1.94.38-.62.57-1.33.57-2.06 0-1.86-1.31-3.5-3.12-3.9-.29-.07-.58-.1-.88-.1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.2 16.67c-.19 0-.38-.07-.53-.22l-1.17-1.17a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.66.66 2.01-1.85c.31-.28.78-.26 1.06.04s.26.78-.04 1.06l-2.54 2.34c-.14.13-.33.2-.51.2"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.93 22.75c-.48 0-.96-.12-1.39-.36-.89-.5-1.42-1.4-1.42-2.41v-5.35c0-.51-.33-1.26-.65-1.65l-3.8-3.99c-.63-.65-1.12-1.74-1.12-2.54V4.12c0-1.61 1.22-2.87 2.77-2.87h13.34a2.77 2.77 0 0 1 2.77 2.77v2.22c0 1.05-.62 2.23-1.23 2.85l-1.8 1.59a.77.77 0 0 1-.67.17c-.27-.07-.56-.1-.86-.1-2.21 0-4 1.79-4 4 0 .73.2 1.44.58 2.06.32.53.75.97 1.25 1.28.22.14.36.38.36.64v.34c0 .79-.48 1.9-1.28 2.37l-1.38.89c-.44.28-.96.42-1.47.42m-5.6-20c-.71 0-1.27.6-1.27 1.37v2.33c0 .36.3 1.09.7 1.49l3.85 4.05c.51.63 1.02 1.69 1.02 2.64v5.35c0 .66.46.99.65 1.1.43.24.94.23 1.33-.01l1.4-.9c.27-.16.54-.67.56-1.03-.55-.41-1.03-.94-1.39-1.54-.52-.85-.8-1.83-.8-2.83a5.51 5.51 0 0 1 6.32-5.44l1.48-1.31c.34-.35.76-1.18.76-1.77V4.03c0-.7-.57-1.27-1.27-1.27H5.33z"
        }
      )
    ]
  })
);
var Outline_default11 = SvgOutline11;
var SvgTwotone11 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M21.63 14.75c0 .89-.24 1.73-.68 2.45a4.74 4.74 0 0 1-4.07 2.3c-.94 0-1.82-.28-2.56-.77-.62-.38-1.13-.91-1.5-1.53-.44-.72-.69-1.56-.69-2.45 0-2.62 2.13-4.75 4.75-4.75.36 0 .71.04 1.04.12a4.74 4.74 0 0 1 3.71 4.63"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m15.03 14.75 1.17 1.17 2.53-2.34"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M20.69 4.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.4 4.4 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02V4.12C3.31 2.91 4.22 2 5.33 2h13.34c1.11 0 2.02.91 2.02 2.02",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default11 = SvgTwotone11;
var components11 = {
  bold: Bold_default11,
  broken: Broken_default11,
  bulk: Bulk_default11,
  linear: Linear_default11,
  outline: Outline_default11,
  twotone: Twotone_default11
};
var FilterTick = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components11[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var filterTick_default = FilterTick;
var SvgBold12 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "m18.02 12.33-1.22-1.22a1.4 1.4 0 0 1-.47-1.03c-.02-.45.16-.9.49-1.23l1.2-1.2c1.04-1.04 1.43-2.04 1.1-2.83-.32-.78-1.31-1.21-2.77-1.21H5.9v-.86c0-.41-.34-.75-.75-.75s-.75.34-.75.75v18.5c0 .41.34.75.75.75s.75-.34.75-.75v-4.88h10.45c1.44 0 2.41-.44 2.74-1.23s-.05-1.78-1.07-2.81"
      }
    )
  })
);
var Bold_default12 = SvgBold12;
var SvgBroken12 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
        d: "M5.15 2v20M16.35 4c2.7 0 3.3 1.5 1.4 3.4l-1.2 1.2c-.8.8-.8 2.1 0 2.8l1.2 1.2c1.9 1.9 1.2 3.4-1.4 3.4H5.15M5.15 4H12"
      }
    )
  })
);
var Broken_default12 = SvgBroken12;
var SvgBulk12 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M5.15 22c-.41 0-.75-.34-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5c0 .41-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m18.02 12.33-1.22-1.22a1.4 1.4 0 0 1-.47-1.03c-.02-.45.16-.9.49-1.23l1.2-1.2c1.04-1.04 1.43-2.04 1.1-2.83-.32-.78-1.31-1.21-2.77-1.21H5.15c-.21.01-.38.18-.38.39v12c0 .21.17.38.38.38h11.2c1.44 0 2.41-.44 2.74-1.23.33-.8-.05-1.79-1.07-2.82",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default12 = SvgBulk12;
var SvgLinear12 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
        d: "M5.15 2v20M5.15 4h11.2c2.7 0 3.3 1.5 1.4 3.4l-1.2 1.2c-.8.8-.8 2.1 0 2.8l1.2 1.2c1.9 1.9 1.2 3.4-1.4 3.4H5.15"
      }
    )
  })
);
var Linear_default12 = SvgLinear12;
var SvgOutline12 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M5.15 22.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v20c0 .41-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.35 16.75H5.15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11.2c1.09 0 1.6-.29 1.7-.54s-.05-.81-.83-1.58l-1.2-1.2c-.49-.43-.79-1.08-.82-1.8-.03-.76.27-1.51.82-2.06l1.2-1.2c.74-.74.97-1.34.86-1.6s-.68-.52-1.73-.52H5.15a.749.749 0 1 1 0-1.5h11.2c2.19 0 2.89.91 3.12 1.45.22.54.37 1.68-1.19 3.24l-1.2 1.2c-.25.25-.39.6-.38.95.01.3.13.57.34.76l1.24 1.23c1.53 1.53 1.38 2.67 1.16 3.22-.23.53-.94 1.45-3.09 1.45"
        }
      )
    ]
  })
);
var Outline_default12 = SvgOutline12;
var SvgTwotone12 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M5.15 2v20"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M5.15 4h11.2c2.7 0 3.3 1.5 1.4 3.4l-1.2 1.2c-.8.8-.8 2.1 0 2.8l1.2 1.2c1.9 1.9 1.2 3.4-1.4 3.4H5.15",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default12 = SvgTwotone12;
var components12 = {
  bold: Bold_default12,
  broken: Broken_default12,
  bulk: Bulk_default12,
  linear: Linear_default12,
  outline: Outline_default12,
  twotone: Twotone_default12
};
var Flag = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components12[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var flag_default = Flag;
var SvgBold13 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M12.93 4.79H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07"
      }
    )
  })
);
var Bold_default13 = SvgBold13;
var SvgBroken13 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M10.97 5H13c4 0 5 1 5 5v4c0 2-.25 3.25-1 4s-2 1-4 1H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5M20.5 9.5c.86 0 1.23.16 1.38.49.12.25.12.58.12 1.01v2c0 1 0 1.5-1.5 1.5"
      }
    )
  })
);
var Broken_default13 = SvgBroken13;
var SvgBulk13 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12.93 4.79H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07"
        }
      )
    ]
  })
);
var Bulk_default13 = SvgBulk13;
var SvgLinear13 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M13 19H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5h6c4 0 5 1 5 5v4c0 4-1 5-5 5M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5"
      }
    )
  })
);
var Linear_default13 = SvgLinear13;
var SvgOutline13 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M13 19.75H7c-4.41 0-5.75-1.34-5.75-5.75v-4c0-4.41 1.34-5.75 5.75-5.75h6c4.41 0 5.75 1.34 5.75 5.75v4c0 4.41-1.34 5.75-5.75 5.75m-6-14c-3.58 0-4.25.68-4.25 4.25v4c0 3.57.67 4.25 4.25 4.25h6c3.58 0 4.25-.68 4.25-4.25v-4c0-3.57-.67-4.25-4.25-4.25zM20.5 15.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.59 0 .72-.09.73-.09.02-.06.02-.41.02-.66v-2c0-.25 0-.59-.04-.68.01.01-.16-.07-.71-.07-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.08 0 2.25 1.02 2.25 2.25v2c0 1.23-.17 2.25-2.25 2.25"
      }
    )
  })
);
var Outline_default13 = SvgOutline13;
var SvgTwotone13 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13 19H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5h6c4 0 5 1 5 5v4c0 4-1 5-5 5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default13 = SvgTwotone13;
var components13 = {
  bold: Bold_default13,
  broken: Broken_default13,
  bulk: Bulk_default13,
  linear: Linear_default13,
  outline: Outline_default13,
  twotone: Twotone_default13
};
var BatteryEmpty = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components13[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var batteryEmpty_default = BatteryEmpty;
var SvgBold14 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M6.47 9.28a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22c-.71-.71-1.87-.71-2.58 0-.29.3-.77.3-1.06 0m9.13 8.8H8.4c-.7 0-1.27-.57-1.27-1.28 0-2.69 2.19-4.88 4.88-4.88s4.88 2.19 4.88 4.88c-.01.7-.59 1.28-1.29 1.28m1.93-8.8c-.29.29-.77.29-1.06 0-.71-.71-1.87-.71-2.58 0-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.3.29.77 0 1.06"
      }
    )
  })
);
var Bold_default14 = SvgBold14;
var SvgBroken14 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M7 8.75c1-1 2.63-1 3.64 0M13.36 8.75c1-1 2.63-1 3.64 0M8.4 17.7h7.2c.5 0 .9-.4.9-.9 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5c0 .5.4.9.9.9"
        }
      )
    ]
  })
);
var Broken_default14 = SvgBroken14;
var SvgBulk14 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.64 9.5c-.19 0-.38-.07-.53-.22-.71-.71-1.87-.71-2.58 0-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.29.29.77 0 1.06-.15.15-.34.22-.53.22M13.36 9.5c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.29.29.77 0 1.06s-.77.29-1.06 0c-.71-.71-1.87-.71-2.58 0a.7.7 0 0 1-.53.22M12 11.92c-2.69 0-4.88 2.19-4.88 4.88 0 .7.57 1.28 1.27 1.28h7.2c.7 0 1.27-.57 1.27-1.28.02-2.69-2.17-4.88-4.86-4.88"
        }
      )
    ]
  })
);
var Bulk_default14 = SvgBulk14;
var SvgLinear14 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M7 8.75c1-1 2.63-1 3.64 0M13.36 8.75c1-1 2.63-1 3.64 0M8.4 17.7h7.2c.5 0 .9-.4.9-.9 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5c0 .5.4.9.9.9"
        }
      )
    ]
  })
);
var Linear_default14 = SvgLinear14;
var SvgOutline14 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.64 9.5c-.19 0-.38-.07-.53-.22-.71-.71-1.87-.71-2.58 0-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.29.29.77 0 1.06-.15.15-.34.22-.53.22M13.36 9.5c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.29.29.77 0 1.06s-.77.29-1.06 0c-.71-.71-1.87-.71-2.58 0a.7.7 0 0 1-.53.22M15.6 18.45H8.4c-.91 0-1.65-.74-1.65-1.65 0-2.89 2.35-5.25 5.25-5.25s5.25 2.36 5.25 5.25c0 .91-.74 1.65-1.65 1.65m-3.6-5.4c-2.07 0-3.75 1.68-3.75 3.75 0 .08.07.15.15.15h7.2c.08 0 .15-.07.15-.15 0-2.07-1.68-3.75-3.75-3.75"
        }
      )
    ]
  })
);
var Outline_default14 = SvgOutline14;
var SvgTwotone14 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M7 8.75c1-1 2.63-1 3.64 0M13.36 8.75c1-1 2.63-1 3.64 0M8.4 17.7h7.2c.5 0 .9-.4.9-.9 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5c0 .5.4.9.9.9",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default14 = SvgTwotone14;
var components14 = {
  bold: Bold_default14,
  broken: Broken_default14,
  bulk: Bulk_default14,
  linear: Linear_default14,
  outline: Outline_default14,
  twotone: Twotone_default14
};
var EmojiSad = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components14[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var emojiSad_default = EmojiSad;
var SvgBold15 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M6.67 14H4c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h3.67c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1M13.33 10h-2.67c-1.1 0-2 .9-2 2v9c0 .55.45 1 1 1h4.67c.55 0 1-.45 1-1v-9a2 2 0 0 0-2-2M20 17h-2.67c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1H21c.55 0 1-.45 1-1v-2c0-1.1-.9-2-2-2M15.01 4.85c.31-.31.43-.68.33-1s-.41-.55-.85-.62l-.96-.16c-.04 0-.13-.07-.15-.11l-.53-1.06c-.4-.81-1.31-.81-1.71 0l-.53 1.06c-.01.04-.1.11-.14.11l-.96.16c-.44.07-.74.3-.85.62-.1.32.02.69.33 1l.74.75c.04.03.07.15.06.19l-.21.92c-.16.69.1 1 .27 1.12s.54.28 1.15-.08l.9-.53c.04-.03.17-.03.21 0l.89.53c.28.17.51.22.69.22.21 0 .36-.08.45-.14.17-.12.43-.43.27-1.12l-.21-.92c-.01-.05.02-.16.06-.19z"
      }
    )
  })
);
var Bold_default15 = SvgBold15;
var SvgBroken15 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M8.67 14H4c-1.1 0-2 .9-2 2v6h6.67z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M15.33 12c0-1.1-.9-2-2-2h-2.67c-1.1 0-2 .9-2 2v10h6.67v-6M20 17h-4.67v5H22v-3c0-1.1-.9-2-2-2"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m12.52 2.07.53 1.06c.07.15.26.29.42.31l.96.16c.61.1.76.55.32.98l-.75.75c-.13.13-.2.37-.16.54l.21.92c.17.73-.22 1.01-.86.63l-.9-.53c-.16-.1-.43-.1-.59 0l-.9.53c-.64.38-1.03.1-.86-.63l.21-.92a.63.63 0 0 0-.16-.54l-.74-.74c-.44-.44-.3-.88.32-.98l.96-.16c.16-.03.35-.17.42-.31l.53-1.06c.29-.58.75-.58 1.04-.01"
        }
      )
    ]
  })
);
var Broken_default15 = SvgBroken15;
var SvgBulk15 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx("path", { fill: props.color || "currentColor", d: "M8.67 14H4c-1.1 0-2 .9-2 2v6h6.67z", opacity: 0.4 }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M13.33 10h-2.67c-1.1 0-2 .9-2 2v10h6.67V12a2 2 0 0 0-2-2"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20 17h-4.67v5H22v-3c0-1.1-.9-2-2-2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15.01 4.85c.31-.31.43-.68.33-1s-.41-.55-.85-.62l-.96-.16a.33.33 0 0 1-.15-.11l-.53-1.06c-.4-.81-1.31-.81-1.71 0l-.53 1.06c-.02.04-.11.1-.15.11l-.96.16c-.44.07-.74.3-.85.62-.1.32.02.69.33 1l.74.75c.03.03.07.15.06.19l-.21.92c-.16.68.1.99.27 1.12.17.12.54.28 1.15-.08l.9-.53c.04-.03.17-.03.21 0l.9.53c.28.17.51.22.69.22.21 0 .36-.08.45-.14.17-.12.43-.43.27-1.12l-.21-.92c-.01-.05.02-.16.06-.19z"
        }
      )
    ]
  })
);
var Bulk_default15 = SvgBulk15;
var SvgLinear15 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M8.67 14H4c-1.1 0-2 .9-2 2v6h6.67z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M13.33 10h-2.67c-1.1 0-2 .9-2 2v10h6.67V12a2 2 0 0 0-2-2M20 17h-4.67v5H22v-3c0-1.1-.9-2-2-2"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m12.52 2.07.53 1.06c.07.15.26.29.42.31l.96.16c.61.1.76.55.32.98l-.75.75c-.13.13-.2.37-.16.54l.21.92c.17.73-.22 1.01-.86.63l-.9-.53c-.16-.1-.43-.1-.59 0l-.9.53c-.64.38-1.03.1-.86-.63l.21-.92a.63.63 0 0 0-.16-.54l-.74-.74c-.44-.44-.3-.88.32-.98l.96-.16c.16-.03.35-.17.42-.31l.53-1.06c.29-.58.75-.58 1.04-.01"
        }
      )
    ]
  })
);
var Linear_default15 = SvgLinear15;
var SvgOutline15 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M8.67 22.75H2c-.41 0-.75-.34-.75-.75v-6c0-1.52 1.23-2.75 2.75-2.75h4.67c.41 0 .75.34.75.75v8c0 .41-.34.75-.75.75m-5.92-1.5h5.17v-6.5H4c-.69 0-1.25.56-1.25 1.25z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15.33 22.75H8.66c-.41 0-.75-.34-.75-.75V12c0-1.52 1.23-2.75 2.75-2.75h2.67c1.52 0 2.75 1.23 2.75 2.75v10c0 .41-.33.75-.75.75m-5.91-1.5h5.17V12c0-.69-.56-1.25-1.25-1.25h-2.67c-.69 0-1.25.56-1.25 1.25z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M22 22.75h-6.67c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75H20c1.52 0 2.75 1.23 2.75 2.75v3c0 .41-.34.75-.75.75m-5.92-1.5h5.17V19c0-.69-.56-1.25-1.25-1.25h-3.92zM13.7 8.35c-.24 0-.54-.07-.88-.27L12 7.59l-.81.48c-.82.49-1.36.2-1.56.06s-.63-.58-.42-1.5l.19-.83-.68-.68c-.42-.42-.57-.92-.42-1.38s.56-.78 1.14-.88l.87-.15.49-.98c.54-1.07 1.85-1.07 2.38 0l.49.98.87.15c.58.1 1 .42 1.14.88.15.46-.01.96-.42 1.38l-.68.68.19.83c.21.93-.22 1.36-.42 1.51-.09.08-.32.21-.65.21M12 6.08c.24 0 .48.06.68.18l.56.33-.12-.54c-.1-.42.05-.93.36-1.24l.51-.51-.63-.11c-.4-.07-.79-.36-.97-.72L12 2.72l-.38.75c-.18.36-.57.65-.97.72l-.63.1.51.51c.31.31.45.82.36 1.24l-.12.54.56-.33c.19-.12.43-.17.67-.17"
        }
      )
    ]
  })
);
var Outline_default15 = SvgOutline15;
var SvgTwotone15 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M8.67 14H4c-1.1 0-2 .9-2 2v6h6.67z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M13.33 10h-2.67c-1.1 0-2 .9-2 2v10h6.67V12a2 2 0 0 0-2-2M20 17h-4.67v5H22v-3c0-1.1-.9-2-2-2"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m12.52 2.07.53 1.06c.07.15.26.29.42.31l.96.16c.61.1.76.55.32.98l-.75.75c-.13.13-.2.37-.16.54l.21.92c.17.73-.22 1.01-.86.63l-.9-.53c-.16-.1-.43-.1-.59 0l-.9.53c-.64.38-1.03.1-.86-.63l.21-.92a.63.63 0 0 0-.16-.54l-.74-.74c-.44-.44-.3-.88.32-.98l.96-.16c.16-.03.35-.17.42-.31l.53-1.06c.29-.58.75-.58 1.04-.01",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default15 = SvgTwotone15;
var components15 = {
  bold: Bold_default15,
  broken: Broken_default15,
  bulk: Bulk_default15,
  linear: Linear_default15,
  outline: Outline_default15,
  twotone: Twotone_default15
};
var Ranking = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components15[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var ranking_default = Ranking;
var SvgBold16 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M5.33 19.42c-.11 0-.23-.03-.33-.08l-2.22-1.11a.76.76 0 0 1-.41-.67v-2.78c0-.41.34-.75.75-.75s.75.34.75.75v2.31l1.8.91c.37.18.52.63.33 1-.13.26-.39.42-.67.42M12 22.75a1 1 0 0 1-.17-.02.7.7 0 0 1-.18-.07l-2.21-1.1a.763.763 0 0 1-.34-1.01c.19-.37.64-.52 1.01-.34l1.14.57v-1.56c0-.41.34-.75.75-.75s.75.34.75.75v1.56l1.14-.57c.37-.18.82-.03 1.01.34s.04.82-.34 1.01l-2.21 1.1c-.06.03-.12.05-.18.07-.06.01-.11.02-.17.02M18.67 19.42c-.27 0-.54-.15-.67-.41a.745.745 0 0 1 .34-1.01l1.81-.9v-2.31c0-.41.34-.75.75-.75s.75.34.75.75v2.78c0 .28-.16.54-.41.67L19 19.34a.8.8 0 0 1-.33.08M12 14.42c-.41 0-.75-.34-.75-.75v-2.31l-1.81-.9a.763.763 0 0 1-.34-1.01c.19-.37.64-.52 1.01-.34l1.89.94 1.89-.94c.37-.18.82-.04 1.01.34.19.37.04.82-.34 1.01l-1.81.9v2.31c0 .41-.34.75-.75.75M3.11 9.97c-.41 0-.75-.34-.75-.75V6.45a.789.789 0 0 1 .11-.4c.03-.05.07-.09.11-.13s.09-.08.14-.11c.02-.01.05-.03.07-.04L5 4.66c.37-.18.82-.03 1 .34.19.37.04.82-.33 1l-.88.44.88.44c.37.19.52.64.33 1.01-.18.37-.63.52-1 .34l-1.14-.57v1.56c0 .42-.33.75-.75.75M14.22 3.86c-.11 0-.23-.03-.33-.08L12 2.84l-1.89.94c-.37.19-.82.04-1-.33a.75.75 0 0 1 .33-1.01l2.22-1.11c.21-.11.46-.11.67 0l2.22 1.11c.37.19.52.64.34 1.01-.13.26-.39.41-.67.41M20.89 9.97c-.41 0-.75-.34-.75-.75V7.66L19 8.23c-.37.18-.82.03-1-.34a.745.745 0 0 1 .34-1.01l.88-.44-.89-.44A.736.736 0 0 1 18 5c.19-.37.63-.52 1-.34l2.21 1.1c.02.01.05.02.07.04.06.03.11.08.16.13l.09.12c.04.07.07.14.09.22.01.06.02.12.02.17v2.7699999999999996c0 .43-.34.76-.75.76"
      }
    )
  })
);
var Bold_default16 = SvgBold16;
var SvgBroken16 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "m18.67 18.67 2.22-1.11v-2.78m-6.67-5L12 10.89zM12 10.89 9.78 9.78zm0 0v2.78zm8.89-4.45-2.22 1.11zm0 0-2.22-1.11zm0 0v2.78zm-6.67-3.33L12 2 9.78 3.11zM3.11 6.44l2.22-1.11zm0 0 2.22 1.11zm0 0v2.78zM12 22l-2.22-1.11zm0 0 2.22-1.11zm0 0v-2.78zm-6.67-3.33-2.22-1.11v-2.78z"
      }
    )
  })
);
var Broken_default16 = SvgBroken16;
var SvgBulk16 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M5.33 19.42c-.11 0-.23-.03-.33-.08l-2.22-1.11a.76.76 0 0 1-.41-.67v-2.78c0-.41.34-.75.75-.75s.75.34.75.75v2.31l1.81.9c.37.19.52.64.34 1.01-.15.26-.41.42-.69.42",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.75a1 1 0 0 1-.17-.02.7.7 0 0 1-.18-.07l-2.21-1.1a.763.763 0 0 1-.34-1.01c.19-.37.64-.52 1.01-.34l1.14.57v-1.56c0-.41.34-.75.75-.75s.75.34.75.75v1.56l1.14-.57c.37-.18.82-.03 1.01.34s.04.82-.34 1.01l-2.21 1.1c-.06.03-.12.05-.18.07-.06.01-.11.02-.17.02"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18.67 19.42c-.27 0-.54-.15-.67-.41a.745.745 0 0 1 .34-1.01l1.81-.9v-2.31c0-.41.34-.75.75-.75s.75.34.75.75v2.78c0 .28-.16.54-.41.67l-2.22 1.11c-.13.04-.24.07-.35.07",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 14.42c-.41 0-.75-.34-.75-.75v-2.31l-1.81-.9a.763.763 0 0 1-.34-1.01c.19-.37.64-.52 1.01-.34l1.89.94 1.89-.94c.37-.18.82-.04 1.01.34.19.37.04.82-.34 1.01l-1.81.9v2.31c0 .41-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M3.11 9.97c-.41 0-.75-.34-.75-.75V6.45c0-.06.01-.12.02-.17.02-.08.05-.15.09-.22.03-.05.06-.09.1-.13s.09-.08.14-.11c.02-.01.05-.03.07-.04l2.21-1.1c.37-.18.82-.04 1.01.34.19.37.04.82-.34 1.01l-.88.44.88.44c.37.19.52.64.34 1.01a.76.76 0 0 1-1.01.34l-1.14-.57v1.56c.01.39-.32.72-.74.72",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.22 3.86c-.11 0-.23-.03-.33-.08L12 2.84l-1.89.94c-.37.19-.82.04-1.01-.34a.745.745 0 0 1 .34-1.01l2.22-1.11c.21-.11.46-.11.67 0l2.22 1.11c.37.19.52.64.34 1.01-.13.27-.39.42-.67.42"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.89 9.97c-.41 0-.75-.34-.75-.75V7.66L19 8.23c-.37.19-.82.04-1.01-.34a.745.745 0 0 1 .34-1.01l.88-.44-.88-.44a.763.763 0 0 1-.34-1.01.76.76 0 0 1 1.01-.34l2.21 1.1c.02.01.05.02.07.04.06.03.11.08.16.13l.09.12c.04.07.07.14.09.22.01.06.02.12.02.17V9.2c0 .44-.34.77-.75.77",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default16 = SvgBulk16;
var SvgLinear16 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "m18.67 18.67 2.22-1.11v-2.78m-6.67-5L12 10.89zM12 10.89 9.78 9.78zm0 0v2.78zm8.89-4.45-2.22 1.11zm0 0-2.22-1.11zm0 0v2.78zm-6.67-3.33L12 2 9.78 3.11zM3.11 6.44l2.22-1.11zm0 0 2.22 1.11zm0 0v2.78zM12 22l-2.22-1.11zm0 0 2.22-1.11zm0 0v-2.78zm-6.67-3.33-2.22-1.11v-2.78z"
      }
    )
  })
);
var Linear_default16 = SvgLinear16;
var SvgOutline16 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M12 22.75a1 1 0 0 1-.17-.02.7.7 0 0 1-.18-.07l-2.21-1.1a.763.763 0 0 1-.34-1.01c.19-.37.64-.52 1.01-.34l1.14.57v-1.56c0-.41.34-.75.75-.75s.75.34.75.75v1.56l1.14-.57c.37-.18.82-.03 1.01.34s.04.82-.34 1.01l-2.21 1.1c-.06.03-.12.05-.18.07-.06.01-.11.02-.17.02m6.67-3.33c-.27 0-.54-.15-.67-.41a.745.745 0 0 1 .34-1.01l1.81-.9v-2.31c0-.41.34-.75.75-.75s.75.34.75.75v2.78c0 .28-.16.54-.41.67l-2.22 1.11c-.13.04-.24.07-.35.07m-13.34 0c-.11 0-.23-.03-.33-.08l-2.22-1.11a.76.76 0 0 1-.41-.67v-2.78c0-.41.34-.75.75-.75s.75.34.75.75v2.31l1.81.9c.37.19.52.64.34 1.01-.15.26-.41.42-.69.42m6.67-5c-.41 0-.75-.34-.75-.75v-2.31l-1.81-.9a.763.763 0 0 1-.34-1.01c.19-.37.64-.52 1.01-.34l1.89.94 1.89-.94c.37-.18.82-.04 1.01.34s.04.82-.34 1.01l-1.81.9v2.31c0 .41-.34.75-.75.75m8.89-4.45c-.41 0-.75-.34-.75-.75V7.66L19 8.23c-.37.19-.82.04-1.01-.34a.745.745 0 0 1 .34-1.01l.88-.44-.88-.44a.763.763 0 0 1-.34-1.01c.19-.37.64-.52 1.01-.34l2.21 1.1c.02.01.05.02.07.04.06.03.11.08.16.13l.09.12c.04.07.07.14.09.22.01.06.02.12.02.17V9.2c0 .44-.34.77-.75.77m-17.78 0c-.41 0-.75-.34-.75-.75V6.45c0-.06.01-.12.02-.17.02-.08.05-.15.09-.22.03-.05.06-.09.1-.13s.09-.08.14-.11c.02-.01.05-.03.07-.04l2.21-1.1c.37-.18.82-.04 1.01.34s.04.82-.34 1.01l-.88.44.88.44c.37.19.52.64.34 1.01a.76.76 0 0 1-1.01.34l-1.14-.57v1.56c.01.39-.32.72-.74.72m11.11-6.11c-.11 0-.23-.03-.33-.08L12 2.84l-1.89.94c-.37.19-.82.04-1.01-.34a.745.745 0 0 1 .34-1.01l2.22-1.11c.21-.11.46-.11.67 0l2.22 1.11c.37.19.52.64.34 1.01-.13.27-.39.42-.67.42"
      }
    )
  })
);
var Outline_default16 = SvgOutline16;
var SvgTwotone16 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M14.22 9.78 12 10.89m0 0L9.78 9.78M12 10.89v2.78m2.22-10.56L12 2 9.78 3.11M5.33 18.67l-2.22-1.11v-2.78m15.56 3.89 2.22-1.11v-2.78"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "g",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          opacity: 0.4,
          children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m20.89 6.91-2.22 1.11M20.89 6.91 18.67 5.8M20.89 6.91v2.78M3.11 6.91 5.33 5.8M3.11 6.91l2.22 1.11M3.11 6.91v2.78M12 22.47l-2.22-1.11M12 22.47l2.22-1.11M12 22.47v-2.78" })
        }
      )
    ]
  })
);
var Twotone_default16 = SvgTwotone16;
var components16 = {
  bold: Bold_default16,
  broken: Broken_default16,
  bulk: Bulk_default16,
  linear: Linear_default16,
  outline: Outline_default16,
  twotone: Twotone_default16
};
var Box2 = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components16[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var box2_default = Box2;
var SvgBold17 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "m21.56 10.74-1.35-1.58c-.25-.3-.46-.86-.46-1.26V6.2c0-1.06-.87-1.93-1.93-1.93h-1.7c-.4 0-.97-.21-1.27-.46l-1.58-1.35c-.69-.59-1.82-.59-2.51 0l-1.6 1.35c-.3.25-.86.46-1.26.46H6.17c-1.06 0-1.93.87-1.93 1.93v1.7c0 .39-.2.95-.45 1.25l-1.35 1.59c-.58.7-.58 1.82 0 2.5l1.35 1.59c.25.29.45.86.45 1.25v1.71c0 1.06.87 1.93 1.93 1.93h1.74c.39 0 .96.21 1.26.46l1.58 1.35c.69.59 1.82.59 2.51 0l1.58-1.35c.3-.25.86-.46 1.26-.46h1.7c1.06 0 1.93-.87 1.93-1.93v-1.7c0-.4.21-.96.46-1.26l1.35-1.58c.61-.68.61-1.81.02-2.51M11.25 8.13c0-.41.34-.75.75-.75s.75.34.75.75v4.83c0 .41-.34.75-.75.75s-.75-.34-.75-.75zm.75 8.74c-.55 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.44 1-1 1"
      }
    )
  })
);
var Bold_default17 = SvgBold17;
var SvgBroken17 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M12 8.13v4.83M4.24 6.2c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46l1.58-1.35c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46H6.17c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l.56-.66M11.995 16h.009"
      }
    )
  })
);
var Broken_default17 = SvgBroken17;
var SvgBulk17 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.75 2.45c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46H6.17c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.45-.86.45-1.25V6.2c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46z",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 16.87c-.55 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.44 1-1 1M12 13.72c-.41 0-.75-.34-.75-.75V8.13c0-.41.34-.75.75-.75s.75.34.75.75v4.83c0 .42-.33.76-.75.76"
        }
      )
    ]
  })
);
var Bulk_default17 = SvgBulk17;
var SvgLinear17 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M10.75 2.45c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46H6.17c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.45-.86.45-1.25V6.2c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46zM12 8.13v4.83M11.995 16h.009"
      }
    )
  })
);
var Linear_default17 = SvgLinear17;
var SvgOutline17 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12.01 22.74c-.63 0-1.25-.21-1.74-.63l-1.58-1.35c-.16-.14-.56-.28-.77-.28H6.17a2.68 2.68 0 0 1-2.68-2.68v-1.71c0-.21-.14-.61-.27-.76l-1.36-1.6c-.82-.97-.82-2.49 0-3.47l1.36-1.6c.13-.15.27-.55.27-.76V6.2c0-1.48 1.2-2.68 2.68-2.68H7.9c.21 0 .6-.15.77-.29l1.58-1.35c.98-.83 2.51-.83 3.49 0l1.58 1.35c.16.14.57.28.78.28h1.7c1.48 0 2.68 1.2 2.68 2.68v1.7c0 .21.15.6.29.77l1.35 1.58c.84.99.83 2.52 0 3.49l-1.35 1.58c-.14.17-.28.56-.28.77v1.7c0 1.48-1.2 2.68-2.68 2.68h-1.7c-.21 0-.6.15-.78.29l-1.58 1.35c-.49.43-1.12.64-1.74.64M6.17 5.02c-.65 0-1.18.53-1.18 1.18v1.7c0 .57-.26 1.29-.63 1.73L3 11.23c-.34.41-.34 1.13 0 1.53l1.35 1.59c.36.41.63 1.16.63 1.73v1.71c0 .65.53 1.18 1.18 1.18H7.9c.56 0 1.3.27 1.74.64l1.59 1.36c.41.35 1.13.35 1.54 0l1.58-1.35c.45-.38 1.18-.64 1.74-.64h1.7c.65 0 1.18-.53 1.18-1.18v-1.7c0-.56.27-1.29.64-1.74l1.36-1.59c.35-.41.35-1.13 0-1.54l-1.35-1.58c-.38-.45-.64-1.18-.64-1.74V6.2c0-.65-.53-1.18-1.18-1.18h-1.7c-.57 0-1.31-.27-1.75-.64l-1.59-1.36c-.41-.35-1.12-.35-1.54 0L9.65 4.38c-.45.37-1.18.64-1.75.64z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 16.87c-.55 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.44 1-1 1M12 13.72c-.41 0-.75-.34-.75-.75V8.13c0-.41.34-.75.75-.75s.75.34.75.75v4.83c0 .42-.33.76-.75.76"
        }
      )
    ]
  })
);
var Outline_default17 = SvgOutline17;
var SvgTwotone17 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.75 2.45c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46H6.17c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.45-.86.45-1.25V6.2c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "g",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          opacity: 0.4,
          children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 8.13v4.83M11.994 16h.01" })
        }
      )
    ]
  })
);
var Twotone_default17 = SvgTwotone17;
var components17 = {
  bold: Bold_default17,
  broken: Broken_default17,
  bulk: Bulk_default17,
  linear: Linear_default17,
  outline: Outline_default17,
  twotone: Twotone_default17
};
var Information = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components17[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var information_default = Information;
var SvgBold18 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M20.98 3.02a3.43 3.43 0 0 0-3.29-.91l-9.8 2.45a4.56 4.56 0 0 0-3.33 3.33L2.11 17.7c-.3 1.19.04 2.42.91 3.29.66.65 1.53 1.01 2.43 1.01.28 0 .57-.03.85-.11l9.81-2.45a4.56 4.56 0 0 0 3.33-3.33l2.45-9.81c.3-1.19-.04-2.42-.91-3.28M12 15.88c-2.14 0-3.88-1.74-3.88-3.88S9.86 8.12 12 8.12s3.88 1.74 3.88 3.88-1.74 3.88-3.88 3.88"
      }
    )
  })
);
var Bold_default18 = SvgBold18;
var SvgBroken18 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.87 4.59c-1.45.36-2.92 1.83-3.28 3.28L2.1 17.8c-.75 3 1.09 4.85 4.1 4.1l9.93-2.48c1.44-.36 2.92-1.84 3.28-3.28L21.9 6.2c.75-3-1.09-4.85-4.1-4.1l-4.79 1.2"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
        }
      )
    ]
  })
);
var Broken_default18 = SvgBroken18;
var SvgBulk18 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.98 3.02a3.43 3.43 0 0 0-3.29-.91l-9.8 2.45a4.56 4.56 0 0 0-3.33 3.33L2.11 17.7c-.3 1.19.04 2.42.91 3.29.66.65 1.53 1.01 2.43 1.01.28 0 .57-.03.85-.11l9.81-2.45a4.56 4.56 0 0 0 3.33-3.33l2.45-9.81c.3-1.19-.04-2.42-.91-3.28",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 15.88a3.88 3.88 0 1 0 0-7.76 3.88 3.88 0 0 0 0 7.76"
        }
      )
    ]
  })
);
var Bulk_default18 = SvgBulk18;
var SvgLinear18 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M17.8 2.1 7.87 4.59c-1.45.36-2.92 1.83-3.28 3.28L2.1 17.8c-.75 3 1.09 4.85 4.1 4.1l9.93-2.48c1.44-.36 2.92-1.84 3.28-3.28L21.9 6.2c.75-3-1.1-4.85-4.1-4.1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
        }
      )
    ]
  })
);
var Linear_default18 = SvgLinear18;
var SvgOutline18 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M4.91 22.82c-1.09 0-2.02-.35-2.7-1.03-.97-.97-1.27-2.45-.84-4.17l2.48-9.93c.43-1.72 2.11-3.39 3.82-3.82l9.93-2.48c1.72-.43 3.2-.13 4.17.84s1.27 2.45.84 4.17l-2.48 9.93c-.43 1.72-2.11 3.39-3.82 3.82l-9.93 2.48c-.51.12-1 .19-1.47.19M17.98 2.83 8.05 5.32c-1.17.29-2.44 1.56-2.74 2.73l-2.48 9.93c-.3 1.19-.14 2.16.44 2.75.58.58 1.56.74 2.75.44l9.93-2.48c1.17-.29 2.44-1.57 2.73-2.73l2.48-9.93c.3-1.19.14-2.16-.44-2.75s-1.55-.74-2.74-.45"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 16.25A4.26 4.26 0 0 1 7.75 12 4.26 4.26 0 0 1 12 7.75 4.26 4.26 0 0 1 16.25 12 4.26 4.26 0 0 1 12 16.25m0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75S13.52 9.25 12 9.25"
        }
      )
    ]
  })
);
var Outline_default18 = SvgOutline18;
var SvgTwotone18 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M17.8 2.1 7.87 4.59c-1.45.36-2.92 1.83-3.28 3.28L2.1 17.8c-.75 3 1.09 4.85 4.1 4.1l9.93-2.48c1.44-.36 2.92-1.84 3.28-3.28L21.9 6.2c.75-3-1.1-4.85-4.1-4.1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default18 = SvgTwotone18;
var components18 = {
  bold: Bold_default18,
  broken: Broken_default18,
  bulk: Bulk_default18,
  linear: Linear_default18,
  outline: Outline_default18,
  twotone: Twotone_default18
};
var Discover = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components18[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var discover_default = Discover;
var SvgBold19 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M11.97 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10m5.43 14.43a6.58 6.58 0 0 1-5.4 2.82c-2.15 0-4.17-1.05-5.4-2.82a.74.74 0 0 1 .19-1.04c.34-.24.81-.15 1.04.19A5.1 5.1 0 0 0 12 17.76c1.66 0 3.22-.81 4.17-2.18.24-.34.7-.42 1.04-.19.35.23.43.7.19 1.04"
      }
    )
  })
);
var Bold_default19 = SvgBold19;
var SvgBroken19 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.21 16A5.83 5.83 0 0 0 12 18.5c1.98 0 3.73-.99 4.79-2.5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
        }
      )
    ]
  })
);
var Broken_default19 = SvgBroken19;
var SvgBulk19 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 19.25c-2.15 0-4.17-1.05-5.4-2.82a.74.74 0 0 1 .19-1.04c.34-.24.81-.15 1.04.19A5.1 5.1 0 0 0 12 17.76c1.66 0 3.22-.81 4.17-2.18.24-.34.7-.42 1.04-.19.34.24.42.7.19 1.04a6.58 6.58 0 0 1-5.4 2.82"
        }
      )
    ]
  })
);
var Bulk_default19 = SvgBulk19;
var SvgLinear19 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.21 16A5.83 5.83 0 0 0 12 18.5c1.98 0 3.73-.99 4.79-2.5"
        }
      )
    ]
  })
);
var Linear_default19 = SvgLinear19;
var SvgOutline19 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M11.97 22.75C6.05 22.75 1.22 17.93 1.22 12S6.05 1.25 11.97 1.25 22.72 6.07 22.72 12 17.9 22.75 11.97 22.75m0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 19.25c-2.15 0-4.17-1.05-5.4-2.82a.74.74 0 0 1 .19-1.04c.34-.24.81-.15 1.04.19A5.1 5.1 0 0 0 12 17.76c1.66 0 3.22-.81 4.17-2.18.24-.34.7-.42 1.04-.19.34.24.42.7.19 1.04a6.58 6.58 0 0 1-5.4 2.82"
        }
      )
    ]
  })
);
var Outline_default19 = SvgOutline19;
var SvgTwotone19 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.21 16A5.83 5.83 0 0 0 12 18.5c1.98 0 3.73-.99 4.79-2.5",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default19 = SvgTwotone19;
var components19 = {
  bold: Bold_default19,
  broken: Broken_default19,
  bulk: Bulk_default19,
  linear: Linear_default19,
  outline: Outline_default19,
  twotone: Twotone_default19
};
var HappyEmoji = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components19[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var happyEmoji_default = HappyEmoji;
var SvgBold20 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M11.25 18.25H9c-1.1 0-2 .9-2 2v.25H6c-.41 0-.75.34-.75.75s.34.75.75.75h12c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1v-.25c0-1.1-.9-2-2-2h-2.25v-2.29c-.25.03-.5.04-.75.04s-.5-.01-.75-.04z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18.48 11.64c.66-.25 1.24-.66 1.7-1.12.93-1.03 1.54-2.26 1.54-3.7s-1.13-2.57-2.57-2.57h-.56A4 4 0 0 0 15 2H9c-1.58 0-2.94.92-3.59 2.25h-.56c-1.44 0-2.57 1.13-2.57 2.57s.61 2.67 1.54 3.7c.46.46 1.04.87 1.7 1.12A6.98 6.98 0 0 0 12 16c2.94 0 5.44-1.8 6.48-4.36m-3.64-3.19-.62.76c-.1.11-.17.33-.16.48l.06.98c.04.6-.39.91-.95.69l-.91-.36a.9.9 0 0 0-.52 0l-.91.36c-.56.22-.99-.09-.95-.69l.06-.98a.75.75 0 0 0-.16-.48l-.62-.76c-.39-.46-.22-.97.36-1.12l.95-.24c.15-.04.33-.18.41-.31l.53-.82c.33-.51.85-.51 1.18 0l.53.82c.08.13.26.27.41.31l.95.24c.58.15.75.66.36 1.12"
        }
      )
    ]
  })
);
var Bold_default20 = SvgBold20;
var SvgBroken20 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12.15 16.5v2.1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M7.15 22h10v-1c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v1Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6.15 22h12M8.51 15.07A6.99 6.99 0 0 1 5 9V6c0-2.21 1.79-4 4-4h6c2.21 0 4 1.79 4 4v3c0 3.82-3.05 6.92-6.85 7H12"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.47 11.65c-.75-.24-1.41-.68-1.93-1.2-.9-1-1.5-2.2-1.5-3.6s1.1-2.5 2.5-2.5h.65c-.2.46-.3.97-.3 1.5v3c0 1 .21 1.94.58 2.8M18.53 11.65c.75-.24 1.41-.68 1.93-1.2.9-1 1.5-2.2 1.5-3.6s-1.1-2.5-2.5-2.5h-.65c.2.46.3.97.3 1.5v3c0 1-.21 1.94-.58 2.8"
        }
      )
    ]
  })
);
var Broken_default20 = SvgBroken20;
var SvgBulk20 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18 20.5h-1v-.25c0-1.1-.9-2-2-2h-2.25v-2.29c-.25.03-.5.04-.75.04s-.5-.01-.75-.04v2.29H9c-1.1 0-2 .9-2 2v.25H6c-.41 0-.75.34-.75.75s.34.75.75.75h12c.41 0 .75-.34.75-.75s-.34-.75-.75-.75M5.52 11.64c-.66-.25-1.24-.66-1.7-1.12-.93-1.03-1.54-2.26-1.54-3.7s1.13-2.57 2.57-2.57h.56C5.15 4.78 5 5.37 5 6v3c0 .94.18 1.83.52 2.64M21.72 6.82c0 1.44-.61 2.67-1.54 3.7-.46.46-1.04.87-1.7 1.12.34-.81.52-1.7.52-2.64V6c0-.63-.15-1.22-.41-1.75h.56c1.44 0 2.57 1.13 2.57 2.57",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15 2H9C6.79 2 5 3.79 5 6v3c0 3.87 3.13 7 7 7s7-3.13 7-7V6c0-2.21-1.79-4-4-4m-.16 6.45-.62.76c-.1.11-.17.33-.16.48l.06.98c.04.6-.39.91-.95.69l-.91-.36a.9.9 0 0 0-.52 0l-.91.36c-.56.22-.99-.09-.95-.69l.06-.98a.75.75 0 0 0-.16-.48l-.62-.76c-.39-.46-.22-.97.36-1.12l.95-.24c.15-.04.33-.18.41-.31l.53-.82c.33-.51.85-.51 1.18 0l.53.82c.08.13.26.27.41.31l.95.24c.58.15.75.66.36 1.12"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m14.84 8.45-.62.76c-.1.11-.17.33-.16.48l.06.98c.04.6-.39.91-.95.69l-.91-.36a.9.9 0 0 0-.52 0l-.91.36c-.56.22-.99-.09-.95-.69l.06-.98a.75.75 0 0 0-.16-.48l-.62-.76c-.39-.46-.22-.97.36-1.12l.95-.24c.15-.04.33-.18.41-.31l.53-.82c.33-.51.85-.51 1.18 0l.53.82c.08.13.26.27.41.31l.95.24c.58.15.75.66.36 1.12",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default20 = SvgBulk20;
var SvgLinear20 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12.15 16.5v2.1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M7.15 22h10v-1c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v1Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6.15 22h12M12 16c-3.87 0-7-3.13-7-7V6c0-2.21 1.79-4 4-4h6c2.21 0 4 1.79 4 4v3c0 3.87-3.13 7-7 7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.47 11.65c-.75-.24-1.41-.68-1.93-1.2-.9-1-1.5-2.2-1.5-3.6s1.1-2.5 2.5-2.5h.65c-.2.46-.3.97-.3 1.5v3c0 1 .21 1.94.58 2.8M18.53 11.65c.75-.24 1.41-.68 1.93-1.2.9-1 1.5-2.2 1.5-3.6s-1.1-2.5-2.5-2.5h-.65c.2.46.3.97.3 1.5v3c0 1-.21 1.94-.58 2.8"
        }
      )
    ]
  })
);
var Linear_default20 = SvgLinear20;
var SvgOutline20 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12.15 19.35c-.41 0-.75-.34-.75-.75v-2.1c0-.41.34-.75.75-.75s.75.34.75.75v2.1c0 .41-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.9 22.75H6.4V21c0-1.52 1.23-2.75 2.75-2.75h6c1.52 0 2.75 1.23 2.75 2.75zm-10-1.5h8.5V21c0-.69-.56-1.25-1.25-1.25h-6c-.69 0-1.25.56-1.25 1.25z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18.15 22.75h-12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75M18.43 12.44c-.21 0-.42-.09-.57-.26a.74.74 0 0 1-.12-.79c.34-.78.51-1.61.51-2.48v-3c0-.35-.06-.69-.18-1.05-.01-.03-.02-.07-.03-.11-.03-.15-.04-.3-.04-.44 0-.41.34-.75.75-.75h.6c1.79 0 3.25 1.5 3.25 3.35 0 1.53-.63 3.04-1.72 4.13-.02.02-.08.07-.09.08-.59.49-1.26 1.04-2.16 1.29-.07.02-.13.03-.2.03m1.25-7.35c.05.27.07.55.07.82v3c0 .41-.03.8-.09 1.2l.17-.14c.8-.8 1.27-1.92 1.27-3.06 0-.9-.61-1.66-1.42-1.82M5.58 12.4a.6.6 0 0 1-.23-.04c-.82-.26-1.59-.74-2.23-1.38C1.97 9.71 1.4 8.32 1.4 6.85c0-1.82 1.43-3.25 3.25-3.25h.65c.25 0 .49.13.63.34s.16.48.06.71c-.16.36-.24.77-.24 1.2v3c0 .86.17 1.7.52 2.5.12.27.06.58-.13.8-.15.16-.35.25-.56.25M4.3 5.13c-.81.16-1.4.86-1.4 1.72 0 1.09.44 2.14 1.31 3.1.04.05.09.09.14.13-.07-.41-.1-.82-.1-1.23v-3c0-.24.02-.48.05-.72"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 16.75c-4.27 0-7.75-3.48-7.75-7.75V6c0-2.62 2.13-4.75 4.75-4.75h6c2.62 0 4.75 2.13 4.75 4.75v3c0 4.27-3.48 7.75-7.75 7.75m-3-14C7.21 2.75 5.75 4.21 5.75 6v3c0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25V6c0-1.79-1.46-3.25-3.25-3.25z"
        }
      )
    ]
  })
);
var Outline_default20 = SvgOutline20;
var SvgTwotone20 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12.15 16.5v2.1",
          opacity: 0.34
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M7.15 22h10v-1c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v1Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6.15 22h12M12 16c-3.87 0-7-3.13-7-7V6c0-2.21 1.79-4 4-4h6c2.21 0 4 1.79 4 4v3c0 3.87-3.13 7-7 7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.47 11.65c-.75-.24-1.41-.68-1.93-1.2-.9-1-1.5-2.2-1.5-3.6s1.1-2.5 2.5-2.5h.65c-.2.46-.3.97-.3 1.5v3c0 1 .21 1.94.58 2.8M18.53 11.65c.75-.24 1.41-.68 1.93-1.2.9-1 1.5-2.2 1.5-3.6s-1.1-2.5-2.5-2.5h-.65c.2.46.3.97.3 1.5v3c0 1-.21 1.94-.58 2.8",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default20 = SvgTwotone20;
var components20 = {
  bold: Bold_default20,
  broken: Broken_default20,
  bulk: Bulk_default20,
  linear: Linear_default20,
  outline: Outline_default20,
  twotone: Twotone_default20
};
var Cup = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components20[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var cup_default = Cup;
var SvgBold21 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "m21.12 6.98-4.1-4.1C16.54 2.4 15.58 2 14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1v5.8c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12m-5.09 7.99c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22L12 13.06l-2.97 2.97c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L10.94 12 7.97 9.03a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0L12 10.94l2.97-2.97c.29-.29.77-.29 1.06 0s.29.77 0 1.06L13.06 12z"
      }
    )
  })
);
var Bold_default21 = SvgBold21;
var SvgBroken21 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M2 13.02v1.88c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1C16.54 2.4 15.58 2 14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1M8.5 15.5l7-7M15.5 15.5l-7-7"
      }
    )
  })
);
var Broken_default21 = SvgBroken21;
var SvgBulk21 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1v5.8c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1C16.54 2.4 15.58 2 14.9 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m13.06 12 2.97-2.97c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0L12 10.94 9.03 7.97a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06L10.94 12l-2.97 2.97c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22L12 13.06l2.97 2.97c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06z"
        }
      )
    ]
  })
);
var Bulk_default21 = SvgBulk21;
var SvgLinear21 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1v5.8c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1C16.54 2.4 15.58 2 14.9 2M8.5 15.5l7-7M15.5 15.5l-7-7"
      }
    )
  })
);
var Linear_default21 = SvgLinear21;
var SvgOutline21 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.9 22.75H9.1c-.89 0-2.03-.47-2.65-1.1l-4.1-4.1c-.63-.63-1.1-1.77-1.1-2.65V9.1c0-.89.47-2.03 1.1-2.65l4.1-4.1c.63-.63 1.77-1.1 2.65-1.1h5.8c.89 0 2.03.47 2.65 1.1l4.1 4.1c.63.63 1.1 1.77 1.1 2.65v5.8c0 .89-.47 2.03-1.1 2.65l-4.1 4.1c-.63.63-1.76 1.1-2.65 1.1m-5.8-20c-.49 0-1.25.31-1.59.66l-4.1 4.1c-.34.35-.66 1.1-.66 1.59v5.8c0 .49.31 1.25.66 1.59l4.1 4.1c.35.34 1.1.66 1.59.66h5.8c.49 0 1.25-.31 1.59-.66l4.1-4.1c.34-.35.66-1.1.66-1.59V9.1c0-.49-.31-1.25-.66-1.59l-4.1-4.1c-.35-.34-1.1-.66-1.59-.66z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M8.5 16.25c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l7-7c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-7 7c-.15.15-.34.22-.53.22"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15.5 16.25c-.19 0-.38-.07-.53-.22l-7-7a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l7 7c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
        }
      )
    ]
  })
);
var Outline_default21 = SvgOutline21;
var SvgTwotone21 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1v5.8c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1C16.54 2.4 15.58 2 14.9 2"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "g",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          opacity: 0.4,
          children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m8.5 15.5 7-7M15.5 15.5l-7-7" })
        }
      )
    ]
  })
);
var Twotone_default21 = SvgTwotone21;
var components21 = {
  bold: Bold_default21,
  broken: Broken_default21,
  bulk: Bulk_default21,
  linear: Linear_default21,
  outline: Outline_default21,
  twotone: Twotone_default21
};
var Forbidden2 = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components21[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var forbidden2_default = Forbidden2;
var SvgBold22 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M17 3.75h-6.72c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.053 4.053 0 0 0 0 5.46l3.53 3.88a5.01 5.01 0 0 0 3.7 1.64H17c2.76 0 5-2.24 5-5v-6.5c0-2.76-2.24-5-5-5m-.47 10.19c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.94-1.94L11.59 15c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L12.47 12l-1.94-1.94a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.94 1.94L15.47 9c.29-.29.77-.29 1.06 0s.29.77 0 1.06L14.59 12z"
      }
    )
  })
);
var Bold_default22 = SvgBold22;
var SvgBroken22 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12.92 3.75h-2.64c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.053 4.053 0 0 0 0 5.46l3.53 3.88a5.01 5.01 0 0 0 3.7 1.64H17c2.76 0 5-2.24 5-5v-6.5c0-2.76-2.24-5-5-5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeWidth: 1.5,
          d: "m16 14.47-4.94-4.94M15.21 10.32l.79-.79M11.06 14.47l2.28-2.29"
        }
      )
    ]
  })
);
var Broken_default22 = SvgBroken22;
var SvgBulk22 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.28 20.25H17c2.76 0 5-2.24 5-5v-6.5c0-2.76-2.24-5-5-5h-6.72c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.053 4.053 0 0 0 0 5.46l3.53 3.88a4.98 4.98 0 0 0 3.7 1.64",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m14.59 12 1.94-1.94c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.94 1.94L11.59 9a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06L12.47 12l-1.94 1.94c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.94-1.94L15.47 15c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06z"
        }
      )
    ]
  })
);
var Bulk_default22 = SvgBulk22;
var SvgLinear22 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.28 20.25H17c2.76 0 5-2.24 5-5v-6.5c0-2.76-2.24-5-5-5h-6.72c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.053 4.053 0 0 0 0 5.46l3.53 3.88a4.98 4.98 0 0 0 3.7 1.64"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeWidth: 1.5,
          d: "m16 14.47-4.94-4.94M11.06 14.47 16 9.53"
        }
      )
    ]
  })
);
var Linear_default22 = SvgLinear22;
var SvgOutline22 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17 21h-6.72c-1.62 0-3.17-.69-4.25-1.88L2.5 15.24a4.783 4.783 0 0 1 0-6.47l3.53-3.88A5.73 5.73 0 0 1 10.28 3H17c3.17 0 5.75 2.58 5.75 5.75v6.5c0 3.17-2.58 5.75-5.75 5.75M10.28 4.5c-1.19 0-2.34.51-3.14 1.39L3.6 9.78a3.3 3.3 0 0 0 0 4.45l3.53 3.88c.8.88 1.95 1.39 3.14 1.39H17a4.26 4.26 0 0 0 4.25-4.25v-6.5A4.26 4.26 0 0 0 17 4.5z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16 15.22c-.19 0-.38-.07-.53-.22l-4.94-4.95a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l4.94 4.95c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M11.06 15.22c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L15.47 9c.29-.29.77-.29 1.06 0s.29.77 0 1.06L11.59 15c-.15.15-.34.22-.53.22"
        }
      )
    ]
  })
);
var Outline_default22 = SvgOutline22;
var SvgTwotone22 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.28 20.25H17c2.76 0 5-2.24 5-5v-6.5c0-2.76-2.24-5-5-5h-6.72c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.053 4.053 0 0 0 0 5.46l3.53 3.88a4.98 4.98 0 0 0 3.7 1.64"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("g", { stroke: props.color || "currentColor", strokeLinecap: "round", strokeWidth: 1.5, opacity: 0.4, children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m16 14.47-4.94-4.94M11.06 14.47 16 9.53" }) })
    ]
  })
);
var Twotone_default22 = SvgTwotone22;
var components22 = {
  bold: Bold_default22,
  broken: Broken_default22,
  bulk: Bulk_default22,
  linear: Linear_default22,
  outline: Outline_default22,
  twotone: Twotone_default22
};
var TagCross = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components22[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var tagCross_default = TagCross;
var SvgBold23 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Bold_default23 = SvgBold23;
var SvgBroken23 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M16 12h2M6 12h5.66"
      }
    )
  })
);
var Broken_default23 = SvgBroken23;
var SvgBulk23 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default23 = SvgBulk23;
var SvgLinear23 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M6 12h12"
      }
    )
  })
);
var Linear_default23 = SvgLinear23;
var SvgOutline23 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Outline_default23 = SvgOutline23;
var SvgTwotone23 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M6 12h12"
      }
    )
  })
);
var Twotone_default23 = SvgTwotone23;
var components23 = {
  bold: Bold_default23,
  broken: Broken_default23,
  bulk: Bulk_default23,
  linear: Linear_default23,
  outline: Outline_default23,
  twotone: Twotone_default23
};
var Minus = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components23[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var minus_default = Minus;
var SvgBold24 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M22 5v2c0 1.83-.83 2.82-2.5 2.97-.16.02-.33.03-.5.03H5c-.17 0-.34-.01-.5-.03C2.83 9.82 2 8.83 2 7V5q0-3 3-3h14q3 0 3 3M5.5 11.25c-.55 0-1 .45-1 1V19c0 2 .5 3 3 3h9c2.5 0 3-1 3-3v-6.75c0-.55-.45-1-1-1zm8.32 4.5h-3.64c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.64c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Bold_default24 = SvgBold24;
var SvgBroken24 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M4.5 13.01v-2.79M19.5 10.22V19c0 2-.5 3-3 3h-9c-2.5 0-3-1-3-3v-2.03M5 2h14q3 0 3 3v2q0 3-3 3H5q-3 0-3-3V5q0-3 3-3M10.18 14h3.64"
      }
    )
  })
);
var Broken_default24 = SvgBroken24;
var SvgBulk24 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M19.5 9.97V19c0 2-.5 3-3 3h-9c-2.5 0-3-1-3-3V9.97c.16.02.33.03.5.03h14c.17 0 .34-.01.5-.03",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M22 5v2c0 1.83-.83 2.82-2.5 2.97-.16.02-.33.03-.5.03H5c-.17 0-.34-.01-.5-.03C2.83 9.82 2 8.83 2 7V5q0-3 3-3h14q3 0 3 3M13.82 14.75h-3.64c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.64c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default24 = SvgBulk24;
var SvgLinear24 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M19.5 10.22V19c0 2-.5 3-3 3h-9c-2.5 0-3-1-3-3v-8.78M5 2h14q3 0 3 3v2q0 3-3 3H5q-3 0-3-3V5q0-3 3-3M10.18 14h3.64"
      }
    )
  })
);
var Linear_default24 = SvgLinear24;
var SvgOutline24 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.5 22.75h-9c-3.3 0-3.75-1.8-3.75-3.75v-8.78c0-.41.34-.75.75-.75s.75.34.75.75V19c0 1.74.3 2.25 2.25 2.25h9c1.95 0 2.25-.51 2.25-2.25v-8.78c0-.41.34-.75.75-.75s.75.34.75.75V19c0 1.95-.45 3.75-3.75 3.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M19 10.75H5c-2.42 0-3.75-1.33-3.75-3.75V5c0-2.42 1.33-3.75 3.75-3.75h14c2.42 0 3.75 1.33 3.75 3.75v2c0 2.42-1.33 3.75-3.75 3.75m-14-8c-1.58 0-2.25.67-2.25 2.25v2c0 1.58.67 2.25 2.25 2.25h14c1.58 0 2.25-.67 2.25-2.25V5c0-1.58-.67-2.25-2.25-2.25zM13.82 14.75h-3.64c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.64c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default24 = SvgOutline24;
var SvgTwotone24 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M19.5 10.22V19c0 2-.5 3-3 3h-9c-2.5 0-3-1-3-3v-8.78M5 2h14q3 0 3 3v2q0 3-3 3H5q-3 0-3-3V5q0-3 3-3"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.18 14h3.64",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default24 = SvgTwotone24;
var components24 = {
  bold: Bold_default24,
  broken: Broken_default24,
  bulk: Bulk_default24,
  linear: Linear_default24,
  outline: Outline_default24,
  twotone: Twotone_default24
};
var Archive = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components24[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var archive_default = Archive;
var SvgBold25 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m-.43 13.76c-.06.85-.13 1.91-2.05 1.91h-3.42c-1.91 0-1.99-1.06-2.05-1.91l-.31-3.96a.94.94 0 0 1 .24-.7.9.9 0 0 1 .67-.29h6.32c.25 0 .5.11.67.29.17.19.26.44.24.69zm1.04-5.94h-.06c-1.04-.1-1.99-.17-2.9-.21a41 41 0 0 0-3.67-.03c-.6.03-1.21.07-1.81.13l-1.09.11H7.2c-.35 0-.65-.26-.68-.62-.04-.37.24-.71.61-.74l1.09-.11c.43-.04.85-.07 1.28-.09l.08-.47c.08-.5.23-1.46 1.73-1.46h1.39c1.51 0 1.66.99 1.73 1.47l.08.48c.75.04 1.52.1 2.36.18.38.04.65.37.62.75-.04.35-.34.61-.69.61"
      }
    )
  })
);
var Bold_default25 = SvgBold25;
var SvgBroken25 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M17.9 9.05a66 66 0 0 0-6.57-.33c-1.3 0-2.6.07-3.89.2l-1.34.13M9.71 8.39l.14-.86c.1-.62.18-1.09 1.29-1.09h1.72c1.11 0 1.19.49 1.29 1.09l.14.85M16.49 9.13l-.43 6.6c-.07 1.03-.13 1.83-1.96 1.83H9.89c-1.83 0-1.89-.8-1.96-1.83l-.43-6.6"
        }
      )
    ]
  })
);
var Broken_default25 = SvgBroken25;
var SvgBulk25 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.86 8.46c-.84-.08-1.61-.13-2.36-.18l-.08-.48c-.07-.48-.22-1.47-1.73-1.47H11.3c-1.49 0-1.65.95-1.73 1.46l-.08.47c-.43.03-.85.05-1.28.09l-1.09.11c-.38.04-.65.37-.61.75.04.35.33.62.68.62h.07l1.08-.11c.6-.05 1.21-.1 1.81-.13 1.22-.05 2.44-.03 3.67.03.91.04 1.86.11 2.9.21h.06c.35 0 .65-.27.68-.62a.66.66 0 0 0-.6-.75M15.83 11.1a.9.9 0 0 0-.67-.29H8.84c-.25 0-.5.11-.67.29a.93.93 0 0 0-.24.69l.31 3.96c.06.85.13 1.91 2.05 1.91h3.42c1.92 0 1.99-1.06 2.05-1.91l.31-3.96a.93.93 0 0 0-.24-.69"
        }
      )
    ]
  })
);
var Bulk_default25 = SvgBulk25;
var SvgLinear25 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M17.9 9.05a66 66 0 0 0-6.57-.33c-1.3 0-2.6.07-3.89.2l-1.34.13M9.71 8.39l.14-.86c.1-.62.18-1.09 1.29-1.09h1.72c1.11 0 1.19.49 1.29 1.09l.14.85M16.49 9.13l-.43 6.6c-.07 1.03-.13 1.83-1.96 1.83H9.89c-1.83 0-1.89-.8-1.96-1.83l-.43-6.6"
        }
      )
    ]
  })
);
var Linear_default25 = SvgLinear25;
var SvgOutline25 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.9 9.8h-.07c-3.46-.34-6.9-.48-10.31-.13l-1.34.13a.745.745 0 0 1-.82-.67.75.75 0 0 1 .67-.82l1.34-.13c3.51-.35 7.05-.22 10.61.13.41.04.71.41.67.82-.04.38-.37.67-.75.67"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.29 9.14a.75.75 0 0 1-.74-.62l-.14-.85c-.02-.14-.06-.36-.1-.41 0 0-.1-.06-.46-.06h-1.72c-.37 0-.47.06-.47.06-.02.04-.06.26-.08.4l-.14.86a.76.76 0 0 1-.86.62.76.76 0 0 1-.62-.86l.14-.86c.11-.64.29-1.71 2.03-1.71h1.72c1.75 0 1.93 1.12 2.03 1.72l.14.85c.07.41-.21.8-.61.86z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.1 18.31H9.89c-2.53 0-2.64-1.52-2.71-2.53l-.43-6.61a.75.75 0 1 1 1.5-.1l.43 6.6c.07.98.08 1.13 1.21 1.13h4.21c1.13 0 1.14-.15 1.21-1.13l.43-6.6c.03-.41.37-.73.8-.7.41.03.73.38.7.8l-.43 6.6c-.07 1.02-.17 2.54-2.71 2.54"
        }
      )
    ]
  })
);
var Outline_default25 = SvgOutline25;
var SvgTwotone25 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "g",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          opacity: 0.4,
          children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17.9 9.05a66 66 0 0 0-6.57-.33c-1.3 0-2.6.07-3.89.2l-1.34.13M9.71 8.39l.14-.86c.1-.62.18-1.09 1.29-1.09h1.72c1.11 0 1.19.49 1.29 1.09l.14.85M16.49 9.13l-.43 6.6c-.07 1.03-.13 1.83-1.96 1.83H9.89c-1.83 0-1.89-.8-1.96-1.83l-.43-6.6" })
        }
      )
    ]
  })
);
var Twotone_default25 = SvgTwotone25;
var components25 = {
  bold: Bold_default25,
  broken: Broken_default25,
  bulk: Bulk_default25,
  linear: Linear_default25,
  outline: Outline_default25,
  twotone: Twotone_default25
};
var TrashSquare = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components25[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var trashSquare_default = TrashSquare;
var SvgBold26 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "m20.86 8.56-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01L3.14 8.56c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96C3.6 20.85 4.96 22 6.4 22h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91M9.38 17.38c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m3.01-.26h-.02c-.41 0-.74-.33-.75-.73-.03-1.35-.92-2.24-2.27-2.27a.75.75 0 0 1-.73-.77c.01-.41.34-.73.75-.73h.02c2.15.05 3.69 1.58 3.73 3.73.01.42-.31.77-.73.77m2.99 0c-.42 0-.75-.33-.76-.74-.01-.66-.12-1.29-.32-1.88-.51-1.46-1.6-2.54-3.06-3.06-.59-.21-1.22-.32-1.88-.32-.41 0-.75-.34-.74-.76 0-.41.34-.74.75-.74h.01c.83.01 1.62.15 2.36.41 1.89.67 3.3 2.08 3.97 3.97.26.74.4 1.54.41 2.36.01.42-.32.76-.74.76"
      }
    )
  })
);
var Bold_default26 = SvgBold26;
var SvgBroken26 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M21.97 11.28c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01L3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l.28 1.68M11.4 21.81h6.2c1.43 0 2.8-1.16 3.04-2.57l.63-3.74M2 19c1.76.04 2.96 1.24 3 3M2 16q.78.015 1.5.18M8 22c-.01-.76-.14-1.47-.37-2.12-.27-.76-.67-1.43-1.19-1.99M1.996 22h.009"
      }
    )
  })
);
var Broken_default26 = SvgBroken26;
var SvgBulk26 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.07 3.01 3.14 8.56c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96C3.6 20.85 4.96 22 6.4 22h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12.37 17.12c-.41 0-.74-.33-.75-.73-.03-1.35-.92-2.24-2.27-2.27a.75.75 0 0 1-.73-.77c.01-.41.34-.73.75-.73h.02c2.15.05 3.69 1.58 3.73 3.73.01.41-.32.76-.73.77z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15.37 17.12c-.41 0-.75-.33-.75-.74-.01-.66-.12-1.29-.32-1.88-.51-1.46-1.6-2.54-3.06-3.06-.59-.21-1.22-.32-1.88-.32-.41 0-.75-.34-.74-.76 0-.41.34-.74.75-.74h.01c.83.01 1.62.15 2.36.41 1.89.67 3.3 2.08 3.97 3.97.26.74.4 1.54.41 2.36.01.42-.32.76-.75.76q.015 0 0 0M9.38 17.38c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"
        }
      )
    ]
  })
);
var Bulk_default26 = SvgBulk26;
var SvgLinear26 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M11.4 21.81h6.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01L3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l.28 1.68M2 19c1.76.04 2.96 1.24 3 3M8 22c-.01-.76-.14-1.47-.37-2.12a5.69 5.69 0 0 0-3.51-3.51c-.65-.23-1.36-.36-2.12-.37M1.996 22h.009"
      }
    )
  })
);
var Linear_default26 = SvgLinear26;
var SvgOutline26 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.6 22.56h-6.2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.2c1.07 0 2.12-.89 2.3-1.95l1.33-7.96c.12-.72-.28-1.75-.84-2.2l-6.93-5.54c-.8-.64-2.13-.64-2.92-.01L3.61 8.95c-.57.46-.96 1.48-.84 2.2l.28 1.69c.07.41-.21.8-.62.86-.41.08-.79-.21-.86-.62l-.28-1.68c-.21-1.24.39-2.83 1.38-3.62L9.6 2.23c1.34-1.08 3.45-1.07 4.8.01l6.93 5.54c.98.79 1.58 2.38 1.38 3.62l-1.33 7.96c-.3 1.77-1.99 3.2-3.78 3.2M5 22.75c-.41 0-.74-.33-.75-.73-.03-1.35-.92-2.24-2.27-2.27a.75.75 0 0 1-.73-.77c.01-.41.34-.73.75-.73h.02c2.15.05 3.69 1.58 3.73 3.73.01.41-.32.76-.73.77z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M8 22.75c-.41 0-.75-.33-.75-.74-.01-.66-.12-1.29-.32-1.88-.51-1.46-1.6-2.54-3.06-3.06-.59-.21-1.22-.32-1.88-.32-.41 0-.75-.34-.74-.76 0-.41.34-.74.75-.74h.01c.83.01 1.62.15 2.36.41 1.89.67 3.3 2.08 3.97 3.97.26.74.4 1.54.41 2.36 0 .42-.33.76-.75.76.01 0 0 0 0 0M2 23c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1"
        }
      )
    ]
  })
);
var Outline_default26 = SvgOutline26;
var SvgTwotone26 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.4 21.81h6.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01L3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l.28 1.68"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2 19c1.76.04 2.96 1.24 3 3M8 22c-.01-.76-.14-1.47-.37-2.12a5.69 5.69 0 0 0-3.51-3.51c-.65-.23-1.36-.36-2.12-.37M1.996 22h.009",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default26 = SvgTwotone26;
var components26 = {
  bold: Bold_default26,
  broken: Broken_default26,
  bulk: Bulk_default26,
  linear: Linear_default26,
  outline: Outline_default26,
  twotone: Twotone_default26
};
var SmartHome = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components26[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var smartHome_default = SmartHome;
var SvgBold27 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m-2.86 15h-2.67c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.67a.749.749 0 1 1 0 1.5M16 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75m2-4.25H6c-.41 0-.75-.34-.75-.75S5.59 7 6 7h12c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Bold_default27 = SvgBold27;
var SvgBroken27 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeWidth: 1.5,
        d: "M10 7h11M3 7h3M6 12h12M10 17h4"
      }
    )
  })
);
var Broken_default27 = SvgBroken27;
var SvgBulk27 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18 8.5H6c-.41 0-.75-.34-.75-.75S5.59 7 6 7h12c.41 0 .75.34.75.75s-.34.75-.75.75M16 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75M13.33 17h-2.67c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.67a.749.749 0 1 1 0 1.5"
        }
      )
    ]
  })
);
var Bulk_default27 = SvgBulk27;
var SvgLinear27 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeWidth: 1.5,
        d: "M3 7h18M6 12h12M10 17h4"
      }
    )
  })
);
var Linear_default27 = SvgLinear27;
var SvgOutline27 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M21 7.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75M14 17.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Outline_default27 = SvgOutline27;
var SvgTwotone27 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeWidth: 1.5,
          d: "M3 7h18"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeWidth: 1.5,
          d: "M6 12h12",
          opacity: 0.34
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeWidth: 1.5,
          d: "M10 17h4"
        }
      )
    ]
  })
);
var Twotone_default27 = SvgTwotone27;
var components27 = {
  bold: Bold_default27,
  broken: Broken_default27,
  bulk: Bulk_default27,
  linear: Linear_default27,
  outline: Outline_default27,
  twotone: Twotone_default27
};
var Sort = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components27[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var sort_default = Sort;
var SvgBold28 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m4.78 7.7-5.67 5.67a.75.75 0 0 1-1.06 0l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0s.29.76 0 1.06"
      }
    )
  })
);
var Bold_default28 = SvgBold28;
var SvgBroken28 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85M15 10.38l1.12-1.13"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m7.88 12 2.74 2.75 2.55-2.54"
        }
      )
    ]
  })
);
var Broken_default28 = SvgBroken28;
var SvgBulk28 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.58 15.58a.75.75 0 0 1-.53-.22l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5.67 5.67a.75.75 0 0 1-.53.22"
        }
      )
    ]
  })
);
var Bulk_default28 = SvgBulk28;
var SvgLinear28 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m7.75 12 2.83 2.83 5.67-5.66"
        }
      )
    ]
  })
);
var Linear_default28 = SvgLinear28;
var SvgOutline28 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.58 15.58a.75.75 0 0 1-.53-.22l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5.67 5.67a.75.75 0 0 1-.53.22"
        }
      )
    ]
  })
);
var Outline_default28 = SvgOutline28;
var SvgTwotone28 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m7.75 12 2.83 2.83 5.67-5.66",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default28 = SvgTwotone28;
var components28 = {
  bold: Bold_default28,
  broken: Broken_default28,
  bulk: Bulk_default28,
  linear: Linear_default28,
  outline: Outline_default28,
  twotone: Twotone_default28
};
var TickCircle = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components28[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var tickCircle_default = TickCircle;
var SvgBold29 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m3.36 12.3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.3-2.3-2.3 2.3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.3-2.3-2.3-2.3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 2.3-2.3c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.3 2.3z"
      }
    )
  })
);
var Bold_default29 = SvgBold29;
var SvgBroken29 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "m13.99 10.01.84-.84M9.17 14.83l2.75-2.75M14.83 14.83 9.17 9.17M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
      }
    )
  })
);
var Broken_default29 = SvgBroken29;
var SvgBulk29 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m13.06 12 2.3-2.3c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-2.3 2.3-2.3-2.3a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2.3 2.3-2.3 2.3c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.3-2.3 2.3 2.3c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06z"
        }
      )
    ]
  })
);
var Bulk_default29 = SvgBulk29;
var SvgLinear29 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10M9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17"
      }
    )
  })
);
var Linear_default29 = SvgLinear29;
var SvgOutline29 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M9.17 15.58c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l5.66-5.66c.29-.29.77-.29 1.06 0s.29.77 0 1.06L9.7 15.36c-.14.15-.34.22-.53.22"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.83 15.58c-.19 0-.38-.07-.53-.22L8.64 9.7a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l5.66 5.66c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
        }
      )
    ]
  })
);
var Outline_default29 = SvgOutline29;
var SvgTwotone29 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "g",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          opacity: 0.4,
          children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m9.17 14.83 5.66-5.66M14.83 14.83 9.17 9.17" })
        }
      )
    ]
  })
);
var Twotone_default29 = SvgTwotone29;
var components29 = {
  bold: Bold_default29,
  broken: Broken_default29,
  bulk: Bulk_default29,
  linear: Linear_default29,
  outline: Outline_default29,
  twotone: Twotone_default29
};
var CloseCircle = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components29[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var closeCircle_default = CloseCircle;
var SvgBold30 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M21.56 10.74 20.2 9.16c-.26-.3-.47-.86-.47-1.26V6.2c0-1.06-.87-1.93-1.93-1.93h-1.7c-.39 0-.96-.21-1.26-.47l-1.58-1.36c-.69-.59-1.82-.59-2.52 0L9.17 3.81c-.3.25-.87.46-1.26.46H6.18c-1.06 0-1.93.87-1.93 1.93v1.71c0 .39-.21.95-.46 1.25l-1.35 1.59c-.58.69-.58 1.81 0 2.5l1.35 1.59c.25.3.46.86.46 1.25v1.71c0 1.06.87 1.93 1.93 1.93h1.73c.39 0 .96.21 1.26.47l1.58 1.36c.69.59 1.82.59 2.52 0l1.58-1.36c.3-.26.86-.47 1.26-.47h1.7c1.06 0 1.93-.87 1.93-1.93v-1.7c0-.39.21-.96.47-1.26l1.36-1.58c.58-.69.58-1.83-.01-2.52m-5.4-.63-4.83 4.83a.75.75 0 0 1-1.06 0l-2.42-2.42a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.89 1.89 4.3-4.3c.29-.29.77-.29 1.06 0s.29.77 0 1.06"
      }
    )
  })
);
var Bold_default30 = SvgBold30;
var SvgBroken30 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m8.38 12 2.41 2.42 4.83-4.84"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.24 6.2c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46l1.58-1.35c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46H6.17c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l.56-.66"
        }
      )
    ]
  })
);
var Broken_default30 = SvgBroken30;
var SvgBulk30 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.75 2.45c.69-.59 1.82-.59 2.52 0l1.58 1.36c.3.26.86.47 1.26.47h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .39.21.96.47 1.26l1.36 1.58c.59.69.59 1.82 0 2.52l-1.36 1.58c-.26.3-.47.86-.47 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.39 0-.96.21-1.26.47l-1.58 1.36c-.69.59-1.82.59-2.52 0l-1.58-1.36c-.3-.26-.86-.47-1.26-.47H6.18c-1.06 0-1.93-.87-1.93-1.93V16.1c0-.39-.21-.95-.46-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.46-.86.46-1.25V6.2c0-1.06.87-1.93 1.93-1.93h1.73c.39 0 .96-.21 1.26-.47z",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.79 15.17a.75.75 0 0 1-.53-.22l-2.42-2.42a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.89 1.89 4.3-4.3c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-4.83 4.83a.75.75 0 0 1-.53.22"
        }
      )
    ]
  })
);
var Bulk_default30 = SvgBulk30;
var SvgLinear30 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m8.38 12 2.41 2.42 4.83-4.84"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.75 2.45c.69-.59 1.82-.59 2.52 0l1.58 1.36c.3.26.86.47 1.26.47h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .39.21.96.47 1.26l1.36 1.58c.59.69.59 1.82 0 2.52l-1.36 1.58c-.26.3-.47.86-.47 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.39 0-.96.21-1.26.47l-1.58 1.36c-.69.59-1.82.59-2.52 0l-1.58-1.36c-.3-.26-.86-.47-1.26-.47H6.18c-1.06 0-1.93-.87-1.93-1.93V16.1c0-.39-.21-.95-.46-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.46-.86.46-1.25V6.2c0-1.06.87-1.93 1.93-1.93h1.73c.39 0 .96-.21 1.26-.47z"
        }
      )
    ]
  })
);
var Linear_default30 = SvgLinear30;
var SvgOutline30 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.79 15.17a.75.75 0 0 1-.53-.22l-2.42-2.42a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.89 1.89 4.3-4.3c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-4.83 4.83a.75.75 0 0 1-.53.22"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.75c-.63 0-1.26-.21-1.75-.63l-1.58-1.36c-.16-.14-.56-.28-.77-.28H6.18A2.68 2.68 0 0 1 3.5 17.8v-1.71c0-.21-.14-.6-.28-.76l-1.35-1.59c-.82-.97-.82-2.5 0-3.47l1.35-1.59c.14-.16.28-.55.28-.76V6.2c0-1.48 1.2-2.68 2.68-2.68h1.73c.21 0 .61-.15.77-.28l1.58-1.36c.98-.84 2.51-.84 3.49 0l1.58 1.36c.16.14.56.28.77.28h1.7c1.48 0 2.68 1.2 2.68 2.68v1.7c0 .21.15.61.29.77l1.36 1.58c.84.98.84 2.51 0 3.49l-1.36 1.58c-.14.16-.29.56-.29.77v1.7c0 1.48-1.2 2.68-2.68 2.68h-1.7c-.21 0-.61.15-.77.28l-1.58 1.36c-.49.43-1.12.64-1.75.64M6.18 5.02C5.53 5.02 5 5.55 5 6.2v1.71c0 .57-.27 1.3-.64 1.73l-1.35 1.59c-.35.41-.35 1.12 0 1.53l1.35 1.59c.37.44.64 1.16.64 1.73v1.71c0 .65.53 1.18 1.18 1.18h1.73c.58 0 1.31.27 1.75.65l1.58 1.36c.41.35 1.13.35 1.54 0l1.58-1.36c.44-.37 1.17-.65 1.75-.65h1.7c.65 0 1.18-.53 1.18-1.18v-1.7c0-.58.27-1.31.65-1.75L21 12.76c.35-.41.35-1.13 0-1.54l-1.36-1.58c-.38-.44-.65-1.17-.65-1.75V6.2c0-.65-.53-1.18-1.18-1.18h-1.7c-.58 0-1.31-.27-1.75-.65l-1.58-1.36c-.41-.35-1.13-.35-1.54 0L9.66 4.38c-.44.37-1.18.64-1.75.64z"
        }
      )
    ]
  })
);
var Outline_default30 = SvgOutline30;
var SvgTwotone30 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m8.38 12 2.41 2.42 4.83-4.84",
          opacity: 0.34
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.75 2.45c.69-.59 1.82-.59 2.52 0l1.58 1.36c.3.26.86.47 1.26.47h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .39.21.96.47 1.26l1.36 1.58c.59.69.59 1.82 0 2.52l-1.36 1.58c-.26.3-.47.86-.47 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.39 0-.96.21-1.26.47l-1.58 1.36c-.69.59-1.82.59-2.52 0l-1.58-1.36c-.3-.26-.86-.47-1.26-.47H6.18c-1.06 0-1.93-.87-1.93-1.93V16.1c0-.39-.21-.95-.46-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.46-.86.46-1.25V6.2c0-1.06.87-1.93 1.93-1.93h1.73c.39 0 .96-.21 1.26-.47z"
        }
      )
    ]
  })
);
var Twotone_default30 = SvgTwotone30;
var components30 = {
  bold: Bold_default30,
  broken: Broken_default30,
  bulk: Bulk_default30,
  linear: Linear_default30,
  outline: Outline_default30,
  twotone: Twotone_default30
};
var Verify = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components30[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var verify_default = Verify;
var SvgBold31 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "m20.86 8.37-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01L3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91m-8.15 8.83c-.2.2-.45.3-.71.3s-.51-.1-.71-.29a.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0 .39.38.39 1.01 0 1.4m1.95-2.3a.75.75 0 0 1-1.06.02c-.97-.93-2.23-.93-3.21 0-.3.29-.77.28-1.06-.02s-.28-.77.02-1.06c1.55-1.49 3.72-1.49 5.28 0 .31.28.32.76.03 1.06m2.12-2.12c-.15.15-.34.23-.54.23-.19 0-.38-.07-.52-.21a5.9 5.9 0 0 0-1.56-1.1c-1.4-.67-2.93-.67-4.32 0-.56.27-1.08.64-1.56 1.1-.29.29-.77.29-1.06-.01s-.28-.77.01-1.06c.59-.58 1.25-1.04 1.96-1.38 1.81-.87 3.81-.87 5.61 0 .71.34 1.37.8 1.96 1.38.3.28.31.76.02 1.05"
      }
    )
  })
);
var Bold_default31 = SvgBold31;
var SvgBroken31 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2.03 11.28c-.17-.98.33-2.29 1.11-2.91l6.93-5.55c1.06-.85 2.79-.85 3.86.01l6.93 5.54c.77.62 1.27 1.93 1.11 2.91l-1.33 7.96c-.24 1.41-1.61 2.57-3.04 2.57H6.4c-1.44 0-2.8-1.15-3.04-2.57l-.64-3.86"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.88 14.38c1.27-1.21 2.97-1.21 4.24 0M8.75 11.45c-.35.23-.68.5-1 .81M16.24 12.26a6.6 6.6 0 0 0-1.76-1.24 5.76 5.76 0 0 0-2.48-.57M11.996 16.5h.008"
        }
      )
    ]
  })
);
var Broken_default31 = SvgBroken31;
var SvgBulk31 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.12 15.13a.75.75 0 0 1-.52-.21c-.97-.93-2.23-.93-3.21 0-.3.29-.77.28-1.06-.02s-.28-.77.02-1.06c1.55-1.49 3.72-1.49 5.28 0 .3.29.31.76.02 1.06-.13.15-.33.23-.53.23"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.24 13.01c-.19 0-.38-.07-.52-.21a5.9 5.9 0 0 0-1.56-1.1c-1.4-.67-2.93-.67-4.32 0-.56.27-1.08.64-1.56 1.1-.29.29-.77.29-1.06-.01s-.28-.77.01-1.06c.59-.58 1.25-1.04 1.96-1.38 1.81-.87 3.81-.87 5.61 0 .71.34 1.37.8 1.96 1.38a.745.745 0 0 1-.52 1.28M12 17.5c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0s.39 1.02 0 1.41c-.2.19-.45.29-.71.29"
        }
      )
    ]
  })
);
var Bulk_default31 = SvgBulk31;
var SvgLinear31 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.88 14.38c1.27-1.21 2.97-1.21 4.24 0M16.24 12.26a6.6 6.6 0 0 0-1.76-1.24 5.7 5.7 0 0 0-4.97 0c-.62.3-1.21.71-1.76 1.24M11.996 17h.008"
        }
      )
    ]
  })
);
var Linear_default31 = SvgLinear31;
var SvgOutline31 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.6 22.56H6.4c-1.82 0-3.48-1.4-3.78-3.2L1.29 11.4c-.21-1.24.39-2.83 1.38-3.62L9.6 2.23c1.34-1.08 3.45-1.07 4.8.01l6.93 5.54c.98.79 1.58 2.38 1.38 3.62l-1.33 7.96c-.3 1.77-1.99 3.2-3.78 3.2M11.99 2.94c-.53 0-1.06.16-1.45.47L3.61 8.96c-.57.46-.96 1.48-.84 2.2l1.33 7.96c.18 1.05 1.23 1.94 2.3 1.94h11.2c1.07 0 2.12-.89 2.3-1.95l1.33-7.96c.12-.72-.28-1.75-.84-2.2l-6.93-5.54c-.4-.31-.93-.47-1.47-.47"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.12 15.13a.75.75 0 0 1-.52-.21c-.97-.93-2.23-.93-3.21 0-.3.29-.77.28-1.06-.02s-.28-.77.02-1.06c1.55-1.49 3.72-1.49 5.28 0 .3.29.31.76.02 1.06-.13.15-.33.23-.53.23"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.24 13.01c-.19 0-.38-.07-.52-.21-.47-.46-1-.83-1.56-1.1-1.4-.67-2.93-.67-4.32 0-.56.27-1.08.64-1.56 1.1-.29.29-.77.29-1.06-.01s-.28-.77.01-1.06c.59-.58 1.25-1.04 1.96-1.38 1.81-.87 3.81-.87 5.61 0 .71.34 1.37.8 1.96 1.38a.746.746 0 0 1-.52 1.28M12 17.5c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0s.39 1.02 0 1.41c-.2.19-.45.29-.71.29"
        }
      )
    ]
  })
);
var Outline_default31 = SvgOutline31;
var SvgTwotone31 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.88 14.38c1.27-1.21 2.97-1.21 4.24 0M16.24 12.26a6.6 6.6 0 0 0-1.76-1.24 5.7 5.7 0 0 0-4.97 0c-.62.3-1.21.71-1.76 1.24M11.996 16.5h.008",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default31 = SvgTwotone31;
var components31 = {
  bold: Bold_default31,
  broken: Broken_default31,
  bulk: Bulk_default31,
  linear: Linear_default31,
  outline: Outline_default31,
  twotone: Twotone_default31
};
var HomeWifi = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components31[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var homeWifi_default = HomeWifi;
var SvgBold32 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07M12.93 4.79H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35M7.1 14.18c-.08.34-.39.57-.73.57-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91s.81.15.91.55c.36 1.43.36 2.93 0 4.36m3.5 0c-.08.34-.39.57-.73.57-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.4-.1.81.14.91.55.36 1.43.36 2.93 0 4.36m3.5 0c-.08.34-.39.57-.73.57-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.4-.1.81.14.91.55.36 1.43.36 2.93 0 4.36"
      }
    )
  })
);
var Bold_default32 = SvgBold32;
var SvgBroken32 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M6.38 10c.33 1.31.33 2.69 0 4M9.88 10c.33 1.31.33 2.69 0 4M13.38 10c.33 1.31.33 2.69 0 4"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.97 5H13c4 0 5 1 5 5v4c0 4-1 5-5 5H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5"
        }
      )
    ]
  })
);
var Broken_default32 = SvgBroken32;
var SvgBulk32 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12.93 4.79H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07M6.38 14.75c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64a.748.748 0 1 1 1.45-.36c.36 1.43.36 2.94 0 4.36-.08.34-.39.57-.72.57M9.88 14.75c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.4-.1.81.14.91.55.36 1.43.36 2.94 0 4.36-.09.34-.4.57-.73.57M13.38 14.75c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.4-.1.81.14.91.55.36 1.43.36 2.94 0 4.36-.09.34-.4.57-.73.57"
        }
      )
    ]
  })
);
var Bulk_default32 = SvgBulk32;
var SvgLinear32 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M6.38 10c.33 1.31.33 2.69 0 4M9.88 10c.33 1.31.33 2.69 0 4M13.38 10c.33 1.31.33 2.69 0 4"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13 19H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5h6c4 0 5 1 5 5v4c0 4-1 5-5 5"
        }
      )
    ]
  })
);
var Linear_default32 = SvgLinear32;
var SvgOutline32 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.5 15.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.59 0 .72-.09.73-.09.02-.06.02-.41.02-.66v-2c0-.25 0-.59-.04-.68-.01.01-.16-.07-.71-.07-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.08 0 2.25 1.02 2.25 2.25v2c0 1.23-.17 2.25-2.25 2.25M6.38 14.75c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64a.748.748 0 1 1 1.45-.36c.36 1.43.36 2.94 0 4.36-.08.34-.39.57-.72.57M9.88 14.75c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.4-.1.81.14.91.55.36 1.43.36 2.94 0 4.36-.09.34-.4.57-.73.57M13.38 14.75c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.4-.1.81.14.91.55.36 1.43.36 2.94 0 4.36-.09.34-.4.57-.73.57"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M13 19.75H7c-4.41 0-5.75-1.34-5.75-5.75v-4c0-4.41 1.34-5.75 5.75-5.75h6c4.41 0 5.75 1.34 5.75 5.75v4c0 4.41-1.34 5.75-5.75 5.75m-6-14c-3.57 0-4.25.68-4.25 4.25v4c0 3.57.68 4.25 4.25 4.25h6c3.57 0 4.25-.68 4.25-4.25v-4c0-3.57-.68-4.25-4.25-4.25z"
        }
      )
    ]
  })
);
var Outline_default32 = SvgOutline32;
var SvgTwotone32 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M6.38 10c.33 1.31.33 2.69 0 4M9.88 10c.33 1.31.33 2.69 0 4M13.38 10c.33 1.31.33 2.69 0 4",
          opacity: 0.34
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13 19H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5h6c4 0 5 1 5 5v4c0 4-1 5-5 5"
        }
      )
    ]
  })
);
var Twotone_default32 = SvgTwotone32;
var components32 = {
  bold: Bold_default32,
  broken: Broken_default32,
  bulk: Bulk_default32,
  linear: Linear_default32,
  outline: Outline_default32,
  twotone: Twotone_default32
};
var BatteryFull = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components32[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var batteryFull_default = BatteryFull;
var SvgBold33 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M8 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1m4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1m4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1"
      }
    )
  })
);
var Bold_default33 = SvgBold33;
var SvgBroken33 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M2 12.96V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M15.997 12h.008M11.996 12h.008M7.995 12h.008"
      }
    )
  })
);
var Broken_default33 = SvgBroken33;
var SvgBulk33 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1M16 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1M8 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1"
        }
      )
    ]
  })
);
var Bulk_default33 = SvgBulk33;
var SvgLinear33 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7M15.997 12h.008M11.996 12h.008M7.995 12h.008"
      }
    )
  })
);
var Linear_default33 = SvgLinear33;
var SvgOutline33 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1M16 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1M8 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1"
        }
      )
    ]
  })
);
var Outline_default33 = SvgOutline33;
var SvgTwotone33 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M15.997 12h.008M11.996 12h.008M7.995 12h.008",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default33 = SvgTwotone33;
var components33 = {
  bold: Bold_default33,
  broken: Broken_default33,
  bulk: Bulk_default33,
  linear: Linear_default33,
  outline: Outline_default33,
  twotone: Twotone_default33
};
var MoreSquare = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components33[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var moreSquare_default = MoreSquare;
var SvgBold34 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M18 16v3c0 1.65-1.35 3-3 3H9c-1.65 0-3-1.35-3-3v-4.01c0-.55.45-1 1.01-1l2.88.01c.69 0 1.37.15 2 .45.69.32 1.42.55 2.19.55H17c.55 0 1 .45 1 1M17.41 9.41l-2.12-2.12a.98.98 0 0 1-.29-.7V4.91A1.498 1.498 0 0 0 14.5 2h-5A1.498 1.498 0 0 0 9 4.91v1.68c0 .26-.1.51-.29.7L6.59 9.41c-.32.32-.59.97-.59 1.42v.65c0 .55.44 1 .99 1l2.91.02c.98 0 1.97.24 2.85.7.42.22.9.3 1.37.3H17c.55 0 1-.45 1-1v-1.67c0-.45-.27-1.1-.59-1.42"
      }
    )
  })
);
var Bold_default34 = SvgBold34;
var SvgBroken34 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m6 13.98 3.89.02c.73 0 1.45.17 2.11.5s1.38.5 2.12.5H18v4c0 1.65-1.35 3-3 3H9c-1.65 0-3-1.35-3-3v-1.01"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M18 10.83V15h-3.88c-.74 0-1.46-.17-2.12-.5a4.7 4.7 0 0 0-2.11-.5L6 13.98v-3.15c0-.46.26-1.09.59-1.42l2.12-2.12c.18-.18.29-.44.29-.7V5h6v1.59c0 .26.11.52.29.7l2.12 2.12c.33.33.59.96.59 1.42M18 16v-1M14.5 5h-5C8.67 5 8 4.32 8 3.5S8.67 2 9.5 2h5c.83 0 1.5.68 1.5 1.5S15.33 5 14.5 5"
        }
      )
    ]
  })
);
var Broken_default34 = SvgBroken34;
var SvgBulk34 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18 15v4c0 1.65-1.35 3-3 3H9c-1.65 0-3-1.35-3-3v-5.02l3.89.02c.73 0 1.45.17 2.11.5s1.38.5 2.12.5z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18 10.83V15h-3.88c-.74 0-1.46-.17-2.12-.5a4.7 4.7 0 0 0-2.11-.5L6 13.98v-3.15c0-.46.26-1.09.59-1.42l2.12-2.12c.18-.18.29-.44.29-.7V4.91c.16.06.32.09.5.09h5c.18 0 .34-.03.5-.09v1.68c0 .26.11.52.29.7l2.12 2.12c.33.33.59.96.59 1.42",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.5 2h-5A1.498 1.498 0 0 0 9 4.91c.16.06.32.09.5.09h5c.18 0 .34-.03.5-.09A1.498 1.498 0 0 0 14.5 2"
        }
      )
    ]
  })
);
var Bulk_default34 = SvgBulk34;
var SvgLinear34 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M18 15v4c0 1.65-1.35 3-3 3H9c-1.65 0-3-1.35-3-3v-5.02l3.89.02c.73 0 1.45.17 2.11.5s1.38.5 2.12.5z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M18 10.83V15h-3.88c-.74 0-1.46-.17-2.12-.5a4.7 4.7 0 0 0-2.11-.5L6 13.98v-3.15c0-.46.26-1.09.59-1.42l2.12-2.12c.18-.18.29-.44.29-.7V5h6v1.59c0 .26.11.52.29.7l2.12 2.12c.33.33.59.96.59 1.42M18 16v-1M6 14.98v-1M14.5 5h-5C8.67 5 8 4.32 8 3.5S8.67 2 9.5 2h5c.83 0 1.5.68 1.5 1.5S15.33 5 14.5 5"
        }
      )
    ]
  })
);
var Linear_default34 = SvgLinear34;
var SvgOutline34 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15 22.75H9c-2.07 0-3.75-1.68-3.75-3.75v-5.02a.75.75 0 0 1 .75-.75l3.89.02c.84 0 1.68.2 2.44.58.56.28 1.16.42 1.79.42H18c.41 0 .75.34.75.75v4c0 2.07-1.68 3.75-3.75 3.75m-8.25-8.02V19c0 1.24 1.01 2.25 2.25 2.25h6c1.24 0 2.25-1.01 2.25-2.25v-3.25h-3.13c-.86 0-1.69-.19-2.46-.58-.56-.28-1.16-.42-1.77-.42z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18 15.75h-3.88c-.86 0-1.69-.19-2.46-.58-.56-.28-1.16-.42-1.77-.42L6 14.73c-.41 0-.75-.34-.75-.75v-3.15c0-.66.34-1.48.81-1.95l2.12-2.12a.26.26 0 0 0 .07-.17V5c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75v1.59c0 .06.03.13.07.17l2.12 2.12c.47.47.81 1.29.81 1.95V15c0 .41-.34.75-.75.75M6.75 13.23l3.14.02c.84 0 1.68.2 2.44.58.56.28 1.16.42 1.79.42h3.13v-3.42c0-.26-.18-.7-.37-.89l-2.12-2.12c-.32-.32-.51-.77-.51-1.23v-.84h-4.5v.84c0 .46-.19.91-.51 1.23L7.12 9.94c-.19.19-.37.63-.37.89z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18 16.75c-.41 0-.75-.34-.75-.75v-1c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75M6 15.73c-.41 0-.75-.34-.75-.75v-1c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75M14.5 5.75h-5c-1.24 0-2.25-1.01-2.25-2.25S8.26 1.25 9.5 1.25h5c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25m-5-3c-.41 0-.75.34-.75.75s.34.75.75.75h5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"
        }
      )
    ]
  })
);
var Outline_default34 = SvgOutline34;
var SvgTwotone34 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M18 15v4c0 1.65-1.35 3-3 3H9c-1.65 0-3-1.35-3-3v-5.02l3.89.02c.73 0 1.45.17 2.11.5s1.38.5 2.12.5z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M18 10.83V15h-3.88c-.74 0-1.46-.17-2.12-.5a4.7 4.7 0 0 0-2.11-.5L6 13.98v-3.15c0-.46.26-1.09.59-1.42l2.12-2.12c.18-.18.29-.44.29-.7V5h6v1.59c0 .26.11.52.29.7l2.12 2.12c.33.33.59.96.59 1.42",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M18 16v-1M6 14.98v-1M14.5 5h-5C8.67 5 8 4.32 8 3.5S8.67 2 9.5 2h5c.83 0 1.5.68 1.5 1.5S15.33 5 14.5 5"
        }
      )
    ]
  })
);
var Twotone_default34 = SvgTwotone34;
var components34 = {
  bold: Bold_default34,
  broken: Broken_default34,
  bulk: Bulk_default34,
  linear: Linear_default34,
  outline: Outline_default34,
  twotone: Twotone_default34
};
var Milk = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components34[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var milk_default = Milk;
var SvgBold35 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M17.88 6.12 3.92 20.08c-.43.43-1.15.39-1.5-.1-.5-.69-.6-1.65-.08-2.48l2.76-4.43c.37-.59.37-1.55 0-2.14L2.34 6.5c-.93-1.48.14-3.4 1.88-3.4h11.45c.68 0 1.52.47 1.88 1.04l.47.74c.24.4.19.91-.14 1.24M21.63 13.11l-5.18 6.9c-.36.49-1.16.89-1.78.89H7.51c-.89 0-1.34-1.08-.71-1.71L18.32 7.68c.45-.45 1.22-.37 1.56.18l1.85 2.97c.4.64.36 1.67-.1 2.28"
      }
    )
  })
);
var Bold_default35 = SvgBold35;
var SvgBroken35 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
        d: "M4.22 3.1c-1.75 0-2.81 1.92-1.89 3.41l2.77 4.43c.37.59.37 1.55 0 2.14l-2.77 4.43c-.93 1.48.14 3.41 1.89 3.41h10.45c.61 0 1.41-.4 1.78-.89l5.18-6.9c.46-.61.5-1.64.1-2.28l-4.18-6.68c-.36-.58-1.21-1.05-1.89-1.05h-7"
      }
    )
  })
);
var Broken_default35 = SvgBroken35;
var SvgBulk35 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.88 6.12 3.93 20.07c-.43.43-1.15.39-1.5-.1-.5-.69-.6-1.65-.08-2.48l2.76-4.43c.37-.59.37-1.55 0-2.14L2.35 6.49c-.93-1.48.14-3.4 1.88-3.4h11.45c.68 0 1.52.47 1.88 1.04l.47.74c.23.41.18.92-.15 1.25"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m21.63 13.11-5.18 6.9c-.36.49-1.16.89-1.78.89H7.51c-.89 0-1.34-1.08-.71-1.71L18.31 7.68c.45-.45 1.22-.37 1.56.18l1.85 2.97c.41.64.37 1.67-.09 2.28",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default35 = SvgBulk35;
var SvgLinear35 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
        d: "M4.22 3.1h11.44c.68 0 1.53.47 1.89 1.05l4.18 6.68c.4.65.36 1.67-.1 2.28l-5.18 6.9c-.37.49-1.17.89-1.78.89H4.22c-1.75 0-2.81-1.92-1.89-3.41l2.77-4.43c.37-.59.37-1.55 0-2.14L2.33 6.49c-.92-1.47.15-3.39 1.89-3.39"
      }
    )
  })
);
var Linear_default35 = SvgLinear35;
var SvgOutline35 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M14.67 21.65H4.22c-1.1 0-2.07-.57-2.6-1.53s-.5-2.09.08-3.02l2.77-4.43c.22-.35.22-1 0-1.34L1.7 6.9c-.58-.93-.61-2.06-.08-3.02s1.51-1.53 2.6-1.53h11.44c.94 0 2.03.6 2.52 1.4l4.18 6.68c.56.9.51 2.28-.13 3.13l-5.18 6.9c-.51.68-1.53 1.19-2.38 1.19M4.22 3.85c-.54 0-1.03.28-1.29.76s-.25 1.04.04 1.5l2.77 4.43c.52.84.52 2.1 0 2.94l-2.77 4.43c-.29.46-.3 1.02-.04 1.5s.75.76 1.29.76h10.45c.38 0 .95-.29 1.18-.59l5.18-6.9c.27-.36.3-1.05.06-1.43l-4.18-6.68c-.22-.36-.83-.69-1.25-.69H4.22z"
      }
    )
  })
);
var Outline_default35 = SvgOutline35;
var SvgTwotone35 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
        d: "M4.22 3.1h11.44c.68 0 1.53.47 1.89 1.05l4.18 6.68c.4.65.36 1.67-.1 2.28l-5.18 6.9c-.37.49-1.17.89-1.78.89H4.22c-1.75 0-2.81-1.92-1.89-3.41l2.77-4.43c.37-.59.37-1.55 0-2.14L2.33 6.49c-.92-1.47.15-3.39 1.89-3.39"
      }
    )
  })
);
var Twotone_default35 = SvgTwotone35;
var components35 = {
  bold: Bold_default35,
  broken: Broken_default35,
  bulk: Bulk_default35,
  linear: Linear_default35,
  outline: Outline_default35,
  twotone: Twotone_default35
};
var TagRight = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components35[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var tagRight_default = TagRight;
var SvgBold36 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M19.14 20.25c-.19 0-.38-.07-.53-.21-.3-.29-.3-.76-.01-1.06a9.2 9.2 0 0 0 2.65-6.48c0-5.1-4.15-9.25-9.25-9.25S2.75 7.4 2.75 12.5c0 2.43.93 4.72 2.63 6.46.29.3.28.77-.01 1.06-.3.29-.77.28-1.06-.01a10.7 10.7 0 0 1-3.06-7.51C1.25 6.57 6.07 1.75 12 1.75S22.75 6.57 22.75 12.5c0 2.83-1.09 5.51-3.08 7.53-.14.15-.34.22-.53.22"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22a3.88 3.88 0 1 0 0-7.76A3.88 3.88 0 0 0 12 22M16 8.5c-1.1 0-2 .9-2 2v.75c0 .69.56 1.25 1.25 1.25H16c1.1 0 2-.9 2-2s-.9-2-2-2"
        }
      )
    ]
  })
);
var Bold_default36 = SvgBold36;
var SvgBroken36 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M4.84 19.48A9.97 9.97 0 0 1 2 12.49C2 8.8 4 5.58 6.97 3.84c.31-.18.63-.35.97-.49M19.14 19.5a9.96 9.96 0 0 0 2.86-7c0-5.52-4.48-10-10-10M8.62 18.12c0 1.86 1.51 3.38 3.38 3.38s3.38-1.51 3.38-3.38-1.51-3.38-3.38-3.38a3.38 3.38 0 0 0-3.38 3.38"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M15.25 12H16c.82 0 1.5-.67 1.5-1.5 0-.82-.68-1.5-1.5-1.5s-1.5.67-1.5 1.5v.75c0 .41.34.75.75.75"
        }
      )
    ]
  })
);
var Broken_default36 = SvgBroken36;
var SvgBulk36 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M19.1 20.3c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1 1.7-1.7 2.6-4 2.6-6.5 0-5.1-4.1-9.2-9.2-9.2s-9.2 4.1-9.2 9.2c0 2.4.9 4.7 2.6 6.5.3.3.3.8 0 1.1s-.8.3-1.1 0c-2-2-3.1-4.7-3.1-7.5 0-6 4.9-10.9 10.8-10.9s10.8 4.8 10.8 10.8c0 2.8-1.1 5.5-3.1 7.5q-.3.3-.6.3",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22a3.9 3.9 0 1 0 0-7.8 3.9 3.9 0 0 0 0 7.8M16 8.5c-1.1 0-2 .9-2 2v.8c0 .7.6 1.2 1.2 1.2h.8c1.1 0 2-.9 2-2s-.9-2-2-2"
        }
      )
    ]
  })
);
var Bulk_default36 = SvgBulk36;
var SvgLinear36 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M19.14 19.5a9.96 9.96 0 0 0 2.86-7c0-5.52-4.48-10-10-10S2 6.98 2 12.5c0 2.72 1.08 5.18 2.84 6.99"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M12 21.5a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76M15.25 12H16c.82 0 1.5-.67 1.5-1.5 0-.82-.68-1.5-1.5-1.5s-1.5.67-1.5 1.5v.75c0 .41.34.75.75.75"
        }
      )
    ]
  })
);
var Linear_default36 = SvgLinear36;
var SvgOutline36 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M19.14 20.25c-.19 0-.38-.07-.53-.21-.3-.29-.3-.76-.01-1.06a9.2 9.2 0 0 0 2.65-6.48c0-5.1-4.15-9.25-9.25-9.25S2.75 7.4 2.75 12.5c0 2.43.93 4.72 2.63 6.46.29.3.28.77-.01 1.06-.3.29-.77.28-1.06-.01a10.7 10.7 0 0 1-3.06-7.51C1.25 6.57 6.07 1.75 12 1.75S22.75 6.57 22.75 12.5c0 2.83-1.09 5.51-3.08 7.53-.14.15-.34.22-.53.22"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.25c-2.27 0-4.12-1.85-4.12-4.12S9.73 14 12 14s4.12 1.85 4.12 4.12-1.85 4.13-4.12 4.13m0-6.75c-1.45 0-2.62 1.18-2.62 2.62s1.18 2.62 2.62 2.62 2.62-1.18 2.62-2.62S13.45 15.5 12 15.5M16 12.75h-.75c-.83 0-1.5-.67-1.5-1.5v-.75c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25m0-3c-.41 0-.75.34-.75.75v.75H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75"
        }
      )
    ]
  })
);
var Outline_default36 = SvgOutline36;
var SvgTwotone36 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M19.14 19.5a9.96 9.96 0 0 0 2.86-7c0-5.52-4.48-10-10-10S2 6.98 2 12.5c0 2.72 1.08 5.18 2.84 6.99",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M12 21.5a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76M15.25 12H16c.82 0 1.5-.67 1.5-1.5 0-.82-.68-1.5-1.5-1.5s-1.5.67-1.5 1.5v.75c0 .41.34.75.75.75"
        }
      )
    ]
  })
);
var Twotone_default36 = SvgTwotone36;
var components36 = {
  bold: Bold_default36,
  broken: Broken_default36,
  bulk: Bulk_default36,
  linear: Linear_default36,
  outline: Outline_default36,
  twotone: Twotone_default36
};
var Speedometer = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components36[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var speedometer_default = Speedometer;
var SvgBold37 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.88 10c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.82 1.38 2.33 2.3 4.06 2.3s3.24-.93 4.06-2.3c.44-.71.69-1.56.69-2.45 0-2.62-2.12-4.75-4.75-4.75m1.78 5.48h-1.03v1.07c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.07h-1.02c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.02V13c0-.41.34-.75.75-.75s.75.34.75.75v.98h1.03c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.58 4.02v2.22c0 .81-.5 1.82-1 2.33l-.18.16c-.14.13-.35.16-.53.1-.2-.07-.4-.12-.6-.17-.44-.11-.91-.16-1.39-.16-3.45 0-6.25 2.8-6.25 6.25 0 1.14.31 2.26.9 3.22.5.84 1.2 1.54 1.96 2.01.23.15.32.47.12.65-.07.06-.14.11-.21.16l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.32 8.47c-.5-.51-.9-1.42-.9-2.02V4.12c0-1.21.9-2.12 1.99-2.12h13.18c1.09 0 1.99.91 1.99 2.02"
        }
      )
    ]
  })
);
var Bold_default37 = SvgBold37;
var SvgBroken37 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M21.63 14.75c0 .89-.25 1.73-.69 2.45a4.71 4.71 0 0 1-4.06 2.3 4.73 4.73 0 0 1-4.06-2.3 4.66 4.66 0 0 1-.69-2.45c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75M18.66 14.73h-3.55M16.88 13v3.55"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M5.33 2h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.4 4.4 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02"
        }
      )
    ]
  })
);
var Broken_default37 = SvgBroken37;
var SvgBulk37 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M5.41 2h13.17c1.1 0 2 .91 2 2.02v2.22c0 .81-.5 1.82-1 2.32l-4.29 3.84c-.6.51-1 1.52-1 2.32v4.34c0 .61-.4 1.41-.9 1.72L12 21.7c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.32 8.47c-.5-.51-.9-1.41-.9-2.02V4.13c0-1.22.9-2.13 1.99-2.13",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.88 10c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.82 1.38 2.33 2.3 4.06 2.3s3.24-.93 4.06-2.3c.44-.71.69-1.56.69-2.45 0-2.62-2.12-4.75-4.75-4.75m1.78 5.48h-1.03v1.07c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.07h-1.02c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.02V13c0-.41.34-.75.75-.75s.75.34.75.75v.98h1.03c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default37 = SvgBulk37;
var SvgLinear37 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M21.63 14.75c0 .89-.25 1.73-.69 2.45a4.71 4.71 0 0 1-4.06 2.3 4.73 4.73 0 0 1-4.06-2.3 4.66 4.66 0 0 1-.69-2.45c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75M18.66 14.73h-3.55M16.88 13v3.55"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M20.69 4.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.4 4.4 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02V4.12C3.31 2.91 4.22 2 5.33 2h13.34c1.11 0 2.02.91 2.02 2.02"
        }
      )
    ]
  })
);
var Linear_default37 = SvgLinear37;
var SvgOutline37 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.88 20.25c-1.92 0-3.73-1.02-4.71-2.67-.52-.84-.79-1.82-.79-2.83 0-3.03 2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5c0 1.01-.28 1.99-.8 2.84-.97 1.64-2.77 2.66-4.7 2.66m0-9.5c-2.21 0-4 1.79-4 4 0 .73.2 1.44.58 2.05a4 4 0 0 0 3.42 1.95c1.42 0 2.7-.72 3.42-1.94.38-.62.58-1.33.58-2.06 0-2.21-1.79-4-4-4"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18.66 15.48h-3.55c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.55c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.88 17.29c-.41 0-.75-.34-.75-.75V13c0-.41.34-.75.75-.75s.75.34.75.75v3.55c0 .41-.33.74-.75.74"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.93 22.75c-.48 0-.96-.12-1.39-.36-.89-.5-1.42-1.4-1.42-2.41v-5.35c0-.5-.33-1.26-.65-1.65l-3.8-3.99c-.63-.65-1.12-1.74-1.12-2.54V4.12c0-1.61 1.22-2.87 2.77-2.87h13.34a2.77 2.77 0 0 1 2.77 2.77v2.22c0 1.05-.62 2.23-1.22 2.85l-1.8 1.59a.77.77 0 0 1-.67.17c-.27-.07-.56-.1-.86-.1-2.21 0-4 1.79-4 4 0 .73.2 1.44.58 2.06.32.53.75.97 1.25 1.28.22.14.36.38.36.64v.34c0 .79-.48 1.9-1.28 2.37l-1.38.89c-.45.28-.97.42-1.48.42m-5.6-20c-.71 0-1.27.6-1.27 1.37v2.33c0 .36.3 1.1.7 1.5L8.61 12c.51.63 1.02 1.7 1.02 2.64v5.35c0 .66.46.99.65 1.1.43.24.94.23 1.33-.01l1.4-.9c.27-.16.54-.67.56-1.03-.55-.41-1.03-.94-1.39-1.54-.52-.85-.8-1.83-.8-2.83a5.51 5.51 0 0 1 6.32-5.44l1.48-1.31c.34-.35.76-1.18.76-1.77V4.04c0-.7-.57-1.27-1.27-1.27H5.33z"
        }
      )
    ]
  })
);
var Outline_default37 = SvgOutline37;
var SvgTwotone37 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M21.63 14.75c0 .89-.25 1.73-.69 2.45a4.71 4.71 0 0 1-4.06 2.3 4.73 4.73 0 0 1-4.06-2.3 4.66 4.66 0 0 1-.69-2.45c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75M18.66 14.73h-3.55M16.88 13v3.55"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M20.69 4.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.4 4.4 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02V4.12C3.31 2.91 4.22 2 5.33 2h13.34c1.11 0 2.02.91 2.02 2.02",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default37 = SvgTwotone37;
var components37 = {
  bold: Bold_default37,
  broken: Broken_default37,
  bulk: Bulk_default37,
  linear: Linear_default37,
  outline: Outline_default37,
  twotone: Twotone_default37
};
var FilterAdd = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components37[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var filterAdd_default = FilterAdd;
var SvgBold38 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M17 22H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75M20.35 5.52l-4 2.86c-.53.38-1.29.15-1.52-.46l-1.89-5.04c-.32-.87-1.55-.87-1.87 0l-1.9 5.03c-.23.62-.98.85-1.51.46l-4-2.86c-.8-.56-1.86.23-1.53 1.16l4.16 11.65c.14.4.52.66.94.66h9.53c.42 0 .8-.27.94-.66l4.16-11.65c.34-.93-.72-1.72-1.51-1.15m-5.85 9.23h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Bold_default38 = SvgBold38;
var SvgBroken38 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M20.1 5.69c1.56-1.12 2.31-.55 1.67 1.26l-4.04 11.31c-.14.4-.61.73-1.03.73H7.3c-.42 0-.89-.33-1.03-.73L2.13 6.67c-.59-1.66.1-2.17 1.52-1.15l3.9 2.79c.65.45 1.39.22 1.67-.51l1.76-4.69c.56-1.5 1.49-1.5 2.05 0l1.76 4.69c.28.73 1.02.96 1.66.51l.63-.45M6.5 22h11M9.5 14h5"
      }
    )
  })
);
var Broken_default38 = SvgBroken38;
var SvgBulk38 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.77 18.98H7.23c-.42 0-.8-.27-.94-.66L2.13 6.67c-.33-.93.73-1.72 1.52-1.15l4 2.86c.53.38 1.29.15 1.52-.46l1.89-5.04c.32-.87 1.55-.87 1.87 0l1.89 5.04a1 1 0 0 0 1.52.46l4-2.86c.8-.57 1.85.23 1.52 1.15L17.7 18.32c-.13.39-.51.66-.93.66",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17 22H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75M14.5 14.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default38 = SvgBulk38;
var SvgLinear38 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M16.7 18.98H7.3c-.42 0-.89-.33-1.03-.73L2.13 6.67c-.59-1.66.1-2.17 1.52-1.15l3.9 2.79c.65.45 1.39.22 1.67-.51l1.76-4.69c.56-1.5 1.49-1.5 2.05 0l1.76 4.69c.28.73 1.02.96 1.66.51l3.66-2.61c1.56-1.12 2.31-.55 1.67 1.26l-4.04 11.31c-.15.38-.62.71-1.04.71M6.5 22h11M9.5 14h5"
      }
    )
  })
);
var Linear_default38 = SvgLinear38;
var SvgOutline38 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.7 19.73H7.3c-.74 0-1.49-.53-1.74-1.22L1.42 6.92c-.51-1.46-.14-2.13.26-2.43s1.15-.48 2.41.42l3.9 2.79c.12.07.23.1.31.08.09-.03.16-.11.21-.25l1.76-4.69c.53-1.4 1.31-1.61 1.73-1.61s1.2.21 1.73 1.61l1.76 4.69c.05.13.12.22.21.25s.2 0 .31-.09l3.66-2.61c1.34-.96 2.12-.77 2.55-.46.42.32.81 1.03.26 2.58l-4.04 11.31c-.25.69-1 1.22-1.74 1.22M2.68 5.81c.02.14.06.34.16.6L6.98 18c.04.1.22.23.32.23h9.4c.11 0 .29-.13.32-.23l4.04-11.3c.14-.38.18-.64.19-.79-.15.05-.38.16-.71.4l-3.66 2.61c-.5.35-1.09.46-1.62.3s-.96-.58-1.18-1.15l-1.76-4.69c-.13-.35-.25-.52-.32-.6-.07.08-.19.25-.32.59L9.92 8.06c-.21.57-.64.99-1.18 1.15-.53.16-1.13.05-1.62-.3l-3.9-2.79a2.8 2.8 0 0 0-.54-.31M17.5 22.75h-11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.5 14.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default38 = SvgOutline38;
var SvgTwotone38 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M16.7 18.98H7.3c-.42 0-.89-.33-1.03-.73L2.13 6.67c-.59-1.66.1-2.17 1.52-1.15l3.9 2.79c.65.45 1.39.22 1.67-.51l1.76-4.69c.56-1.5 1.49-1.5 2.05 0l1.76 4.69c.28.73 1.02.96 1.66.51l3.66-2.61c1.56-1.12 2.31-.55 1.67 1.26l-4.04 11.31c-.15.38-.62.71-1.04.71"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6.5 22h11M9.5 14h5",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default38 = SvgTwotone38;
var components38 = {
  bold: Bold_default38,
  broken: Broken_default38,
  bulk: Bulk_default38,
  linear: Linear_default38,
  outline: Outline_default38,
  twotone: Twotone_default38
};
var Crown2 = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components38[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var crown2_default = Crown2;
var SvgBold39 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07M12.93 4.79H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35M7.1 14.18c-.08.34-.39.57-.73.57-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91s.81.15.91.55c.36 1.43.36 2.93 0 4.36m3.5 0c-.08.34-.39.57-.73.57-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.4-.1.81.14.91.55.36 1.43.36 2.93 0 4.36"
      }
    )
  })
);
var Bold_default39 = SvgBold39;
var SvgBroken39 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M6.38 10c.33 1.31.33 2.69 0 4M9.88 10c.33 1.31.33 2.69 0 4"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.01 5H13c4 0 5 1 5 5v4c0 4-1 5-5 5H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5"
        }
      )
    ]
  })
);
var Broken_default39 = SvgBroken39;
var SvgBulk39 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12.93 4.79H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07M6.38 14.75c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64a.748.748 0 1 1 1.45-.36c.36 1.43.36 2.94 0 4.36-.08.34-.39.57-.72.57M9.88 14.75c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.4-.1.81.14.91.55.36 1.43.36 2.94 0 4.36-.09.34-.4.57-.73.57"
        }
      )
    ]
  })
);
var Bulk_default39 = SvgBulk39;
var SvgLinear39 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M6.38 10c.33 1.31.33 2.69 0 4M9.88 10c.33 1.31.33 2.69 0 4"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13 19H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5h6c4 0 5 1 5 5v4c0 4-1 5-5 5"
        }
      )
    ]
  })
);
var Linear_default39 = SvgLinear39;
var SvgOutline39 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.5 15.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.59 0 .72-.09.73-.09.02-.06.02-.41.02-.66v-2c0-.25 0-.59-.04-.68-.01.01-.16-.07-.71-.07-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.08 0 2.25 1.02 2.25 2.25v2c0 1.23-.17 2.25-2.25 2.25M6.38 14.75c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64a.748.748 0 1 1 1.45-.36c.36 1.43.36 2.94 0 4.36-.08.34-.39.57-.72.57M9.88 14.75c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.4-.1.81.14.91.55.36 1.43.36 2.94 0 4.36-.09.34-.4.57-.73.57"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M13 19.75H7c-4.41 0-5.75-1.34-5.75-5.75v-4c0-4.41 1.34-5.75 5.75-5.75h6c4.41 0 5.75 1.34 5.75 5.75v4c0 4.41-1.34 5.75-5.75 5.75m-6-14c-3.57 0-4.25.68-4.25 4.25v4c0 3.57.68 4.25 4.25 4.25h6c3.57 0 4.25-.68 4.25-4.25v-4c0-3.57-.68-4.25-4.25-4.25z"
        }
      )
    ]
  })
);
var Outline_default39 = SvgOutline39;
var SvgTwotone39 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M6.38 10c.33 1.31.33 2.69 0 4M9.88 10c.33 1.31.33 2.69 0 4",
          opacity: 0.34
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13 19H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5h6c4 0 5 1 5 5v4c0 4-1 5-5 5"
        }
      )
    ]
  })
);
var Twotone_default39 = SvgTwotone39;
var components39 = {
  bold: Bold_default39,
  broken: Broken_default39,
  bulk: Bulk_default39,
  linear: Linear_default39,
  outline: Outline_default39,
  twotone: Twotone_default39
};
var Battery2 = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components39[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var battery2_default = Battery2;
var SvgBold40 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 6.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.79 0 3.25-1.46 3.25-3.25S13.79 8.75 12 8.75m0 11c-4.27 0-7.75-3.48-7.75-7.75 0-.41.34-.75.75-.75s.75.34.75.75c0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.27 0 7.75 3.48 7.75 7.75s-3.48 7.75-7.75 7.75"
      }
    )
  })
);
var Bold_default40 = SvgBold40;
var SvgBroken40 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.02 5.97A9.97 9.97 0 0 0 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5 12c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4"
        }
      )
    ]
  })
);
var Broken_default40 = SvgBroken40;
var SvgBulk40 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 19.75c-4.27 0-7.75-3.48-7.75-7.75 0-.41.34-.75.75-.75s.75.34.75.75c0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.27 0 7.75 3.48 7.75 7.75s-3.48 7.75-7.75 7.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 16.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.79 0 3.25-1.46 3.25-3.25S13.79 8.75 12 8.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75"
        }
      )
    ]
  })
);
var Bulk_default40 = SvgBulk40;
var SvgLinear40 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.02 5.97A9.97 9.97 0 0 0 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5 12c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4"
        }
      )
    ]
  })
);
var Linear_default40 = SvgLinear40;
var SvgOutline40 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12c0-2.36.75-4.6 2.17-6.48.25-.33.72-.39 1.05-.14s.4.72.15 1.05A9.16 9.16 0 0 0 2.75 12c0 5.1 4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c5.93 0 10.75 4.82 10.75 10.75S17.93 22.75 12 22.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 19.75c-4.27 0-7.75-3.48-7.75-7.75 0-.41.34-.75.75-.75s.75.34.75.75c0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.27 0 7.75 3.48 7.75 7.75s-3.48 7.75-7.75 7.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 16.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.79 0 3.25-1.46 3.25-3.25S13.79 8.75 12 8.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75"
        }
      )
    ]
  })
);
var Outline_default40 = SvgOutline40;
var SvgTwotone40 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.02 5.97A9.97 9.97 0 0 0 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5 12c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7",
          opacity: 0.34
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default40 = SvgTwotone40;
var components40 = {
  bold: Bold_default40,
  broken: Broken_default40,
  bulk: Bulk_default40,
  linear: Linear_default40,
  outline: Outline_default40,
  twotone: Twotone_default40
};
var Chart = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components40[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var chart_default = Chart;
var SvgBold41 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m20.72 18.24-.94-.94c.49-.74.78-1.63.78-2.59 0-2.6-2.11-4.71-4.71-4.71s-4.71 2.11-4.71 4.71 2.11 4.71 4.71 4.71c.96 0 1.84-.29 2.59-.78l.94.94c.19.19.43.28.68.28s.49-.09.68-.28c.35-.36.35-.96-.02-1.34"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M19.58 4.02v2.22c0 .81-.5 1.82-1 2.33l-.18.16c-.14.13-.35.16-.53.1-.2-.07-.4-.12-.6-.17-.44-.11-.91-.16-1.39-.16-3.45 0-6.25 2.8-6.25 6.25 0 1.14.31 2.26.9 3.22.5.84 1.2 1.54 1.96 2.01.23.15.32.47.12.65-.07.06-.14.11-.21.16l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L3.32 8.47c-.5-.51-.9-1.42-.9-2.02V4.12c0-1.21.9-2.12 1.99-2.12h13.18c1.09 0 1.99.91 1.99 2.02"
        }
      )
    ]
  })
);
var Bold_default41 = SvgBold41;
var SvgBroken41 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M5.33 2h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32M14.32 19.07c0 .61-.4 1.41-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.22 8.47c-.51-.51-.91-1.41-.91-2.02"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M16.07 16.52a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4M19.87 17.12l-1-1"
        }
      )
    ]
  })
);
var Broken_default41 = SvgBroken41;
var SvgBulk41 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m19.75 15.41-.85-.85c.44-.67.7-1.46.7-2.32C19.6 9.9 17.7 8 15.36 8s-4.24 1.9-4.24 4.24 1.9 4.24 4.24 4.24c.86 0 1.66-.26 2.32-.7l.85.85c.17.17.39.25.61.25s.44-.08.61-.25c.33-.34.33-.89 0-1.22"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M5.41 2h13.17c1.1 0 2 .91 2 2.02v2.22c0 .81-.5 1.82-1 2.32l-4.29 3.84c-.6.51-1 1.52-1 2.32v4.34c0 .61-.4 1.41-.9 1.72l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.31 8.46c-.5-.51-.9-1.41-.9-2.02V4.12c.01-1.21.91-2.12 2-2.12",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default41 = SvgBulk41;
var SvgLinear41 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M14.32 19.07c0 .61-.4 1.41-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.22 8.47c-.51-.51-.91-1.41-.91-2.02V4.13c0-1.21.91-2.12 2.02-2.12h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M16.07 16.52a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4M19.87 17.12l-1-1"
        }
      )
    ]
  })
);
var Linear_default41 = SvgLinear41;
var SvgOutline41 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.93 22.75c-.48 0-.96-.12-1.4-.36-.89-.5-1.42-1.39-1.42-2.4v-5.35c0-.51-.33-1.26-.64-1.65L3.67 9c-.63-.63-1.12-1.73-1.12-2.54V4.14c0-1.61 1.22-2.87 2.77-2.87h13.34a2.77 2.77 0 0 1 2.77 2.77v2.22c0 1.05-.63 2.26-1.23 2.85-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06c.37-.37.79-1.2.79-1.79V4.04c0-.7-.57-1.27-1.27-1.27H5.32c-.71 0-1.27.6-1.27 1.37v2.32c0 .37.3 1.1.69 1.49L8.59 12c.51.63 1.01 1.69 1.01 2.64v5.35c0 .66.45.98.65 1.09.43.24.94.23 1.34-.01l1.4-.9c.29-.17.57-.72.57-1.09 0-.41.34-.75.75-.75s.75.34.75.75c0 .9-.56 1.93-1.27 2.36l-1.39.9c-.45.27-.96.41-1.47.41"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.07 17.27c-2.18 0-3.95-1.77-3.95-3.95s1.77-3.95 3.95-3.95 3.95 1.77 3.95 3.95-1.77 3.95-3.95 3.95m0-6.4c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45 2.45-1.1 2.45-2.45-1.1-2.45-2.45-2.45"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M19.87 17.87c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06-.14.14-.34.22-.53.22"
        }
      )
    ]
  })
);
var Outline_default41 = SvgOutline41;
var SvgTwotone41 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M14.32 19.07c0 .61-.4 1.41-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.22 8.47c-.51-.51-.91-1.41-.91-2.02V4.13c0-1.21.91-2.12 2.02-2.12h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M16.07 16.52a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4M19.87 17.12l-1-1"
        }
      )
    ]
  })
);
var Twotone_default41 = SvgTwotone41;
var components41 = {
  bold: Bold_default41,
  broken: Broken_default41,
  bulk: Bulk_default41,
  linear: Linear_default41,
  outline: Outline_default41,
  twotone: Twotone_default41
};
var FilterSearch = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components41[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var filterSearch_default = FilterSearch;
var SvgBold42 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M16 12.75h-3.25V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V8c0-.41.34-.75.75-.75s.75.34.75.75v3.25H16c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Bold_default42 = SvgBold42;
var SvgBroken42 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M14.99 12H16M8 12h3.81M12 16V8M2 13.04V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      }
    )
  })
);
var Broken_default42 = SvgBroken42;
var SvgBulk42 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16 11.25h-3.25V8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3.25H8c-.41 0-.75.34-.75.75s.34.75.75.75h3.25V16c0 .41.34.75.75.75s.75-.34.75-.75v-3.25H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75"
        }
      )
    ]
  })
);
var Bulk_default42 = SvgBulk42;
var SvgLinear42 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M8 12h8M12 16V8M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
      }
    )
  })
);
var Linear_default42 = SvgLinear42;
var SvgOutline42 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 16.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v8c0 .41-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
        }
      )
    ]
  })
);
var Outline_default42 = SvgOutline42;
var SvgTwotone42 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "g",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          opacity: 0.4,
          children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8 12h8M12 16V8" })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      )
    ]
  })
);
var Twotone_default42 = SvgTwotone42;
var components42 = {
  bold: Bold_default42,
  broken: Broken_default42,
  bulk: Bulk_default42,
  linear: Linear_default42,
  outline: Outline_default42,
  twotone: Twotone_default42
};
var AddSquare = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components42[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var addSquare_default = AddSquare;
var SvgBold43 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M16 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Bold_default43 = SvgBold43;
var SvgBroken43 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M14.99 12H16M8 12h4M2 12.95V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      }
    )
  })
);
var Broken_default43 = SvgBroken43;
var SvgBulk43 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default43 = SvgBulk43;
var SvgLinear43 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M8 12h8M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
      }
    )
  })
);
var Linear_default43 = SvgLinear43;
var SvgOutline43 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
        }
      )
    ]
  })
);
var Outline_default43 = SvgOutline43;
var SvgTwotone43 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8 12h8",
          opacity: 0.34
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      )
    ]
  })
);
var Twotone_default43 = SvgTwotone43;
var components43 = {
  bold: Bold_default43,
  broken: Broken_default43,
  bulk: Bulk_default43,
  linear: Linear_default43,
  outline: Outline_default43,
  twotone: Twotone_default43
};
var MinusSquare = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components43[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var minusSquare_default = MinusSquare;
var SvgBold44 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "m21.77 9.8-.8-1.8-1.76-3.96C18.74 3 18 2.15 16.3 2.15H7.7C6 2.15 5.26 3 4.79 4.04L3.03 8l-.8 1.8c-.46 1.05-.21 2.59.56 3.44l6.85 7.54c1.3 1.43 3.42 1.43 4.72 0l6.85-7.54c.77-.85 1.02-2.39.56-3.44"
      }
    )
  })
);
var Bold_default44 = SvgBold44;
var SvgBroken44 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M21.21 13.23c.77-.85 1.02-2.39.55-3.43L19.2 4.04c-.46-1.04-1.21-1.89-2.91-1.89H7.7C6 2.15 5.25 3 4.79 4.04L2.23 9.8c-.46 1.04-.21 2.59.56 3.43l6.86 7.54c1.3 1.42 3.42 1.42 4.71 0l4.03-4.44M3.5 8h17"
      }
    )
  })
);
var Broken_default44 = SvgBroken44;
var SvgBulk44 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m21.21 13.24-6.85 7.54c-1.3 1.43-3.42 1.43-4.72 0l-6.85-7.54c-.77-.85-1.02-2.39-.56-3.44l.8-1.8h17.94l.8 1.8c.46 1.05.21 2.59-.56 3.44"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.97 8H3.03l1.76-3.96C5.26 3 6 2.15 7.7 2.15h8.6c1.7 0 2.44.85 2.91 1.89z",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default44 = SvgBulk44;
var SvgLinear44 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M16.29 2.15H7.7C6 2.15 5.25 3 4.79 4.04L2.23 9.8c-.46 1.04-.21 2.59.56 3.43l6.86 7.54c1.3 1.42 3.42 1.42 4.71 0l6.85-7.55c.77-.85 1.02-2.39.55-3.43L19.2 4.03c-.46-1.03-1.21-1.88-2.91-1.88M3.5 8h17"
      }
    )
  })
);
var Linear_default44 = SvgLinear44;
var SvgOutline44 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.6c-1.11 0-2.14-.47-2.91-1.31l-6.86-7.54c-.97-1.06-1.27-2.93-.69-4.24L4.1 3.75c.7-1.57 1.87-2.34 3.59-2.34h8.59v.75-.75c1.72 0 2.89.76 3.59 2.33l2.56 5.76c.58 1.31.29 3.18-.68 4.24l-6.85 7.55c-.75.84-1.79 1.31-2.9 1.31m4.29-19.7H7.7c-1.31 0-1.84.58-2.22 1.45l-2.56 5.76c-.34.77-.14 2 .42 2.62l6.86 7.54c.48.53 1.12.82 1.8.82s1.32-.29 1.8-.82l6.85-7.55c.57-.63.77-1.85.42-2.62l-2.56-5.76c-.38-.86-.91-1.44-2.22-1.44"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M3.5 8.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75l17-.01c.41 0 .75.34.75.75s-.34.75-.75.75z"
        }
      )
    ]
  })
);
var Outline_default44 = SvgOutline44;
var SvgTwotone44 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M16.29 2.15H7.7C6 2.15 5.25 3 4.79 4.04L2.23 9.8c-.46 1.04-.21 2.59.56 3.43l6.86 7.54c1.3 1.42 3.42 1.42 4.71 0l6.85-7.55c.77-.85 1.02-2.39.55-3.43L19.2 4.03c-.46-1.03-1.21-1.88-2.91-1.88"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M3.5 8h17",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default44 = SvgTwotone44;
var components44 = {
  bold: Bold_default44,
  broken: Broken_default44,
  bulk: Bulk_default44,
  linear: Linear_default44,
  outline: Outline_default44,
  twotone: Twotone_default44
};
var Diamonds = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components44[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var diamonds_default = Diamonds;
var SvgBold45 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M18 16.01c.55 0 1 .45 1 1V18c0 2.2-1.5 4-4 4H9c-2.5 0-4-1.8-4-4v-.99c0-.55.45-1 1-1zM19 6v7.5c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V6c0-2.2 1.5-4 4-4h6c2.5 0 4 1.8 4 4M3 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75M21 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75"
      }
    )
  })
);
var Bold_default45 = SvgBold45;
var SvgBroken45 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M15 2c2.5 0 4 1.8 4 4v12c0 2.2-1.5 4-4 4H9c-2.5 0-4-1.8-4-4V6c0-2.2 1.5-4 4-4h1.98M5 16.01h14M2 4v16M22 4v16"
      }
    )
  })
);
var Broken_default45 = SvgBroken45;
var SvgBulk45 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M19 16.01V18c0 2.2-1.5 4-4 4H9c-2.5 0-4-1.8-4-4v-1.99z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M19 6v10.01H5V6c0-2.2 1.5-4 4-4h6c2.5 0 4 1.8 4 4",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M3 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75M21 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default45 = SvgBulk45;
var SvgLinear45 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M15 22H9c-2.5 0-4-1.8-4-4V6c0-2.2 1.5-4 4-4h6c2.5 0 4 1.8 4 4v12c0 2.2-1.5 4-4 4M5 16.01h14M2 4v16M22 4v16"
      }
    )
  })
);
var Linear_default45 = SvgLinear45;
var SvgOutline45 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15 22.75H9c-2.75 0-4.75-2-4.75-4.75V6c0-2.75 2-4.75 4.75-4.75h6c2.75 0 4.75 2 4.75 4.75v12c0 2.75-2 4.75-4.75 4.75m-6-20C6.75 2.75 5.75 4.38 5.75 6v12c0 1.62 1 3.25 3.25 3.25h6c2.25 0 3.25-1.63 3.25-3.25V6c0-1.62-1-3.25-3.25-3.25z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M19 16.76H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14c.41 0 .75.34.75.75s-.34.75-.75.75M2 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75M22 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default45 = SvgOutline45;
var SvgTwotone45 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M15 22H9c-2.5 0-4-1.8-4-4V6c0-2.2 1.5-4 4-4h6c2.5 0 4 1.8 4 4v12c0 2.2-1.5 4-4 4"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5 16.01h14M2 4v16M22 4v16",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default45 = SvgTwotone45;
var components45 = {
  bold: Bold_default45,
  broken: Broken_default45,
  bulk: Bulk_default45,
  linear: Linear_default45,
  outline: Outline_default45,
  twotone: Twotone_default45
};
var Slider = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components45[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var slider_default = Slider;
var SvgBold46 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M11.25 3.9v9.02c0 .33-.16.63-.43.82l-7.21 5.05c-.59.41-1.43.09-1.56-.62-.15-.86.05-1.87.65-2.96L5.82 9.6l2.94-5.29c.23-.41.48-.77.74-1.08.6-.7 1.75-.25 1.75.67M20.39 18.79l-7.21-5.05a1 1 0 0 1-.43-.82V3.9c0-.92 1.15-1.37 1.75-.67.26.31.51.67.74 1.08l2.94 5.29 3.12 5.61c.6 1.09.8 2.1.65 2.96-.13.71-.97 1.03-1.56.62M5.26 19.14l6.15-4.1c.33-.22.87-.22 1.2 0l6.15 4.1c1.63 1.09 1.36 1.98-.6 1.98H5.85c-1.95-.01-2.22-.9-.59-1.98"
      }
    )
  })
);
var Bold_default46 = SvgBold46;
var SvgBroken46 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.76 5c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29 3.12 5.62c1.68 3.03.22 5.51-3.24 5.51H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62.59-1.05"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M21.44 20 12 13.39 2.56 20M12 3v10.39"
        }
      )
    ]
  })
);
var Broken_default46 = SvgBroken46;
var SvgBulk46 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 2.59v11.02l-9.35 6.54c-.85-1.01-.9-2.54.05-4.25l3.12-5.61L8.76 5c.89-1.6 2.06-2.41 3.24-2.41"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21.35 20.15c-.65.79-1.78 1.26-3.29 1.26H5.94c-1.51 0-2.64-.47-3.29-1.26L12 13.61z",
          opacity: 0.6
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21.35 20.15 12 13.61V2.59c1.18 0 2.35.81 3.24 2.41l2.94 5.29 3.12 5.61c.95 1.71.9 3.24.05 4.25",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default46 = SvgBulk46;
var SvgLinear46 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 21.41H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62L8.76 5c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29 3.12 5.62c1.68 3.03.22 5.51-3.24 5.51H12z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M21.44 20 12 13.39 2.56 20M12 3v10.39"
        }
      )
    ]
  })
);
var Linear_default46 = SvgLinear46;
var SvgOutline46 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18.06 22.16H5.94c-1.95 0-3.44-.71-4.2-1.99-.75-1.28-.65-2.93.3-4.63L8.1 4.63c1-1.8 2.38-2.79 3.9-2.79s2.9.99 3.9 2.79l6.06 10.91c.95 1.71 1.06 3.35.3 4.63s-2.25 1.99-4.2 1.99M12 3.34c-.94 0-1.86.72-2.59 2.02L3.36 16.27c-.68 1.22-.79 2.34-.32 3.15.47.8 1.51 1.25 2.91 1.25h12.12c1.4 0 2.43-.44 2.91-1.25.47-.81.36-1.92-.32-3.15L14.59 5.36c-.73-1.3-1.65-2.02-2.59-2.02"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21.44 20.75c-.15 0-.3-.04-.43-.14L12 14.3l-9.01 6.31a.74.74 0 0 1-1.04-.18.74.74 0 0 1 .18-1.04l9.44-6.61c.26-.18.6-.18.86 0l9.44 6.61c.34.24.42.71.18 1.04-.14.21-.37.32-.61.32"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 14.14c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75v10.39c0 .41-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default46 = SvgOutline46;
var SvgTwotone46 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 21.41H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62L8.76 5c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29 3.12 5.62c1.68 3.03.22 5.51-3.24 5.51H12z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "g",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          opacity: 0.4,
          children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.44 20 12 13.39 2.56 20M12 3v10.39" })
        }
      )
    ]
  })
);
var Twotone_default46 = SvgTwotone46;
var components46 = {
  bold: Bold_default46,
  broken: Broken_default46,
  bulk: Bulk_default46,
  linear: Linear_default46,
  outline: Outline_default46,
  twotone: Twotone_default46
};
var Triangle = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components46[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var triangle_default = Triangle;
var SvgBold47 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M19.33 5.68 13.06 2.3c-.66-.36-1.46-.36-2.12 0L4.67 5.68c-.46.25-.74.73-.74 1.28 0 .54.28 1.03.74 1.28l6.27 3.38c.33.18.7.27 1.06.27s.73-.09 1.06-.27l6.27-3.38c.46-.25.74-.73.74-1.28s-.28-1.03-.74-1.28M9.91 12.79 4.07 9.87c-.45-.22-.97-.2-1.39.06-.43.27-.68.72-.68 1.22v5.51c0 .95.53 1.81 1.38 2.24l5.83 2.92a1.442 1.442 0 0 0 1.39-.06c.43-.26.68-.72.68-1.22v-5.51c.01-.96-.52-1.82-1.37-2.24M21.32 9.93c-.43-.26-.95-.29-1.39-.06l-5.83 2.92c-.85.43-1.38 1.28-1.38 2.24v5.51c0 .5.25.96.68 1.22a1.44 1.44 0 0 0 1.39.06l5.83-2.92c.85-.43 1.38-1.28 1.38-2.24v-5.51c0-.5-.25-.95-.68-1.22"
      }
    )
  })
);
var Bold_default47 = SvgBold47;
var SvgBroken47 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M19.43 7.76c.76-.41.76-1.58 0-1.99l-6.51-3.51c-.58-.31-1.26-.31-1.84 0L4.57 5.77c-.76.41-.76 1.58 0 1.99l6.51 3.51c.58.31 1.26.31 1.84 0l2.34-1.26M2 11.12c0-.83.87-1.36 1.61-.99l6.05 3.03c.75.38 1.23 1.15 1.23 1.99v5.72c0 .83-.87 1.36-1.61.99l-6.05-3.03A2.24 2.24 0 0 1 2 16.84v-1.88M20.39 10.13l-6.05 3.03c-.75.38-1.23 1.15-1.23 1.99v5.72c0 .83.87 1.36 1.61.99l6.05-3.03c.75-.38 1.23-1.15 1.23-1.99v-5.72c0-.83-.87-1.36-1.61-.99"
      }
    )
  })
);
var Broken_default47 = SvgBroken47;
var SvgBulk47 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M19.33 5.68 13.06 2.3c-.66-.36-1.46-.36-2.12 0L4.67 5.68c-.46.25-.74.73-.74 1.28 0 .54.28 1.03.74 1.28l6.27 3.38c.33.18.7.27 1.06.27s.73-.09 1.06-.27l6.27-3.38c.46-.25.74-.73.74-1.28s-.28-1.03-.74-1.28"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M9.91 12.79 4.07 9.87c-.45-.22-.97-.2-1.39.06-.43.27-.68.72-.68 1.22v5.51c0 .95.53 1.81 1.38 2.24l5.83 2.92a1.442 1.442 0 0 0 1.39-.06c.43-.26.68-.72.68-1.22v-5.51c.01-.96-.52-1.82-1.37-2.24M21.32 9.93c-.43-.26-.95-.29-1.39-.06l-5.83 2.92c-.85.43-1.38 1.28-1.38 2.24v5.51c0 .5.25.96.68 1.22a1.44 1.44 0 0 0 1.39.06l5.83-2.92c.85-.43 1.38-1.28 1.38-2.24v-5.51c0-.5-.25-.95-.68-1.22",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default47 = SvgBulk47;
var SvgLinear47 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "m12.92 2.26 6.51 3.51c.76.41.76 1.58 0 1.99l-6.51 3.51c-.58.31-1.26.31-1.84 0L4.57 7.76c-.76-.41-.76-1.58 0-1.99l6.51-3.51c.58-.31 1.26-.31 1.84 0M3.61 10.13l6.05 3.03c.75.38 1.23 1.15 1.23 1.99v5.72c0 .83-.87 1.36-1.61.99l-6.05-3.03A2.24 2.24 0 0 1 2 16.84v-5.72c0-.83.87-1.36 1.61-.99M20.39 10.13l-6.05 3.03c-.75.38-1.23 1.15-1.23 1.99v5.72c0 .83.87 1.36 1.61.99l6.05-3.03c.75-.38 1.23-1.15 1.23-1.99v-5.72c0-.83-.87-1.36-1.61-.99"
      }
    )
  })
);
var Linear_default47 = SvgLinear47;
var SvgOutline47 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M12 12.25c-.44 0-.88-.11-1.28-.32L4.21 8.42c-.59-.32-.96-.95-.96-1.65s.37-1.33.96-1.65l6.51-3.51c.8-.43 1.76-.43 2.55 0l6.51 3.51c.59.32.96.95.96 1.65s-.37 1.33-.96 1.65l-6.51 3.51c-.39.22-.83.32-1.27.32m0-9.47c-.19 0-.39.05-.57.15l-6.5 3.5c-.17.09-.18.28-.18.34s.01.25.18.33l6.51 3.51c.36.19.77.19 1.13 0l6.51-3.51c.16-.09.18-.28.18-.33 0-.06-.01-.25-.18-.33l-6.51-3.51c-.18-.1-.38-.15-.57-.15M9.78 22.72c-.28 0-.57-.07-.83-.2L2.89 19.5a2.97 2.97 0 0 1-1.64-2.66v-5.72c0-.65.33-1.24.88-1.58.56-.34 1.23-.37 1.81-.08L10 12.48c1.01.51 1.64 1.52 1.64 2.66v5.72c0 .65-.33 1.24-.88 1.58-.3.19-.64.28-.98.28M3.11 10.76c-.08 0-.15.03-.19.05-.06.04-.17.13-.17.31v5.72c0 .56.31 1.07.81 1.32l6.05 3.03c.16.08.29.02.35-.01.06-.04.17-.13.17-.31v-5.72c0-.56-.31-1.07-.81-1.32L3.27 10.8a.34.34 0 0 0-.16-.04M14.22 22.72c-.34 0-.68-.09-.98-.28-.55-.34-.88-.93-.88-1.58v-5.72c0-1.13.63-2.15 1.64-2.66l6.05-3.03c.58-.29 1.26-.26 1.81.08s.88.93.88 1.58v5.72c0 1.13-.63 2.15-1.64 2.66l-6.05 3.03c-.26.14-.55.2-.83.2m6.67-11.96c-.05 0-.1.01-.16.04l-6.05 3.03c-.5.25-.81.75-.81 1.32v5.72c0 .18.11.27.17.31s.19.09.35.01l6.05-3.03c.5-.25.81-.76.81-1.32v-5.72c0-.18-.11-.27-.17-.31a.4.4 0 0 0-.19-.05"
      }
    )
  })
);
var Outline_default47 = SvgOutline47;
var SvgTwotone47 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m12.92 2.26 6.51 3.51c.76.41.76 1.58 0 1.99l-6.51 3.51c-.58.31-1.26.31-1.84 0L4.57 7.76c-.76-.41-.76-1.58 0-1.99l6.51-3.51c.58-.31 1.26-.31 1.84 0"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m3.61 10.13 6.05 3.03c.75.38 1.23 1.15 1.23 1.99v5.72c0 .83-.87 1.36-1.61.99l-6.05-3.03A2.24 2.24 0 0 1 2 16.84v-5.72c0-.83.87-1.36 1.61-.99M20.39 10.13l-6.05 3.03c-.75.38-1.23 1.15-1.23 1.99v5.72c0 .83.87 1.36 1.61.99l6.05-3.03c.75-.38 1.23-1.15 1.23-1.99v-5.72c0-.83-.87-1.36-1.61-.99",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default47 = SvgTwotone47;
var components47 = {
  bold: Bold_default47,
  broken: Broken_default47,
  bulk: Bulk_default47,
  linear: Linear_default47,
  outline: Outline_default47,
  twotone: Twotone_default47
};
var _3DCube = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components47[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var DCube_default = _3DCube;
var SvgBold48 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07M12.93 4.79H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35m-.4 8.89c-.02.04-.05.08-.08.11l-1.87 2.19c-.15.17-.36.26-.57.26-.17 0-.35-.06-.49-.18A.756.756 0 0 1 9.44 15l1.8-2.11c.01-.03 0-.06-.02-.09-.02-.04-.06-.06-.11-.06H9.12c-.59 0-1.11-.3-1.41-.81-.29-.51-.29-1.11 0-1.62l1.71-2.26a.75.75 0 0 1 1.2.9l-1.65 2.19c.03-.04.03 0 .05.05.02.04.06.06.11.06h2.01c.59 0 1.11.3 1.41.81.27.51.27 1.11-.02 1.62"
      }
    )
  })
);
var Bold_default48 = SvgBold48;
var SvgBroken48 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M11.27 12c.77 0 1.25.83.87 1.5L10 16M10 8l-1.89 2.5c-.39.67.09 1.5.86 1.5M2 10c0-4 1-5 5-5M7 19c-4 0-5-1-5-5M13 5c4 0 5 1 5 5v4c0 4-1 5-5 5"
      }
    )
  })
);
var Broken_default48 = SvgBroken48;
var SvgBulk48 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12.93 4.79H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07M10.01 16.24c-.17 0-.35-.06-.49-.18A.756.756 0 0 1 9.44 15l1.8-2.11c.01-.03 0-.06-.02-.09-.02-.04-.06-.06-.11-.06H9.12c-.59 0-1.11-.3-1.41-.81-.29-.51-.29-1.11 0-1.62l1.71-2.26a.75.75 0 0 1 1.2.9l-1.65 2.19c.03-.04.03 0 .05.05.02.04.06.06.11.06h2.01c.59 0 1.11.3 1.41.81.29.51.29 1.11 0 1.62-.02.04-.05.08-.08.11l-1.87 2.19c-.16.18-.37.26-.59.26"
        }
      )
    ]
  })
);
var Bulk_default48 = SvgBulk48;
var SvgLinear48 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M10 8l-1.89 2.5c-.39.67.09 1.5.86 1.5h2.3c.77 0 1.25.83.87 1.5L10 16M7 19c-4 0-5-1-5-5v-4c0-4 1-5 5-5M13 5c4 0 5 1 5 5v4c0 4-1 5-5 5"
      }
    )
  })
);
var Linear_default48 = SvgLinear48;
var SvgOutline48 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.5 15.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.59 0 .72-.09.73-.09.02-.06.02-.41.02-.66v-2c0-.25 0-.59-.04-.68-.01.01-.16-.07-.71-.07-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.08 0 2.25 1.02 2.25 2.25v2c0 1.23-.17 2.25-2.25 2.25M10 16.75c-.17 0-.35-.06-.49-.18a.756.756 0 0 1-.08-1.06l2.08-2.43c.03-.09 0-.17-.02-.21a.24.24 0 0 0-.22-.12h-2.3c-.63 0-1.2-.33-1.52-.87s-.32-1.2 0-1.75L9.4 7.55a.75.75 0 0 1 1.2.9l-1.89 2.5c-.01.03.03.12.05.17.03.05.09.12.22.12h2.3c.63 0 1.2.33 1.52.87s.32 1.2 0 1.75c-.02.04-.05.08-.08.11l-2.14 2.5c-.16.19-.37.28-.58.28"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M7 19.75c-4.41 0-5.75-1.34-5.75-5.75v-4c0-4.41 1.34-5.75 5.75-5.75.41 0 .75.34.75.75s-.34.75-.75.75c-3.57 0-4.25.68-4.25 4.25v4c0 3.57.68 4.25 4.25 4.25.41 0 .75.34.75.75s-.34.75-.75.75M13 19.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c3.57 0 4.25-.68 4.25-4.25v-4c0-3.57-.68-4.25-4.25-4.25-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.41 0 5.75 1.34 5.75 5.75v4c0 4.41-1.34 5.75-5.75 5.75"
        }
      )
    ]
  })
);
var Outline_default48 = SvgOutline48;
var SvgTwotone48 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M10 8l-1.89 2.5c-.39.67.09 1.5.86 1.5h2.3c.77 0 1.25.83.87 1.5L10 16",
          opacity: 0.34
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7 19c-4 0-5-1-5-5v-4c0-4 1-5 5-5M13 5c4 0 5 1 5 5v4c0 4-1 5-5 5"
        }
      )
    ]
  })
);
var Twotone_default48 = SvgTwotone48;
var components48 = {
  bold: Bold_default48,
  broken: Broken_default48,
  bulk: Bulk_default48,
  linear: Linear_default48,
  outline: Outline_default48,
  twotone: Twotone_default48
};
var BatteryCharging = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components48[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var batteryCharging_default = BatteryCharging;
var SvgBold49 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M21.07 5.23c-1.61-.16-3.22-.28-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28c-.93.06-1.86.12-2.79.21l-2.04.2c-.42.04-.72.41-.68.82s.4.71.82.67l2.04-.2c5.24-.52 10.52-.32 15.82.21h.08c.38 0 .71-.29.75-.68a.766.766 0 0 0-.69-.82M19.23 8.14c-.24-.25-.57-.39-.91-.39H5.68c-.34 0-.68.14-.91.39s-.36.59-.34.94l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25c.02-.36-.11-.7-.34-.95m-5.57 9.61h-3.33c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.33c.41 0 .75.34.75.75s-.34.75-.75.75m.84-4h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Bold_default49 = SvgBold49;
var SvgBroken49 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M21 5.98c-3.33-.33-6.68-.5-10.02-.5q-2.97 0-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M18.85 9.14l-.65 10.07M10.33 16.5h3.33M12.82 12.5h1.68M9.5 12.5h.83"
      }
    )
  })
);
var Broken_default49 = SvgBroken49;
var SvgBulk49 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21.07 5.23c-1.61-.16-3.22-.28-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28c-.93.06-1.86.12-2.79.21l-2.04.2c-.42.04-.72.41-.68.82s.4.71.82.67l2.04-.2c5.24-.52 10.52-.32 15.82.21h.08c.38 0 .71-.29.75-.68a.766.766 0 0 0-.69-.82"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M19.23 8.14c-.24-.25-.57-.39-.91-.39H5.68c-.34 0-.68.14-.91.39s-.36.59-.34.94l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25c.02-.36-.11-.7-.34-.95",
          opacity: 0.399
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          fillRule: "evenodd",
          d: "M9.58 17a.75.75 0 0 1 .75-.75h3.33a.75.75 0 0 1 0 1.5h-3.33a.75.75 0 0 1-.75-.75M8.75 13a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75",
          clipRule: "evenodd"
        }
      )
    ]
  })
);
var Bulk_default49 = SvgBulk49;
var SvgLinear49 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M21 5.98c-3.33-.33-6.68-.5-10.02-.5q-2.97 0-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.14l-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5h3.33M9.5 12.5h5"
      }
    )
  })
);
var Linear_default49 = SvgLinear49;
var SvgOutline49 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21 6.73h-.08c-5.29-.53-10.57-.73-15.8-.2l-2.04.2a.755.755 0 0 1-.83-.68c-.04-.42.26-.78.67-.82l2.04-.2c5.32-.54 10.71-.33 16.11.2.41.04.71.41.67.82a.74.74 0 0 1-.74.68"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M8.5 5.72c-.04 0-.08 0-.13-.01a.753.753 0 0 1-.61-.86l.22-1.31c.16-.96.38-2.29 2.71-2.29h2.62c2.34 0 2.56 1.38 2.71 2.3l.22 1.3c.07.41-.21.8-.61.86-.41.07-.8-.21-.86-.61l-.22-1.3c-.14-.87-.17-1.04-1.23-1.04H10.7c-1.06 0-1.08.14-1.23 1.03l-.23 1.3a.75.75 0 0 1-.74.63M15.21 22.75H8.79c-3.49 0-3.63-1.93-3.74-3.49L4.4 9.19c-.03-.41.29-.77.7-.8.42-.02.77.29.8.7l.65 10.07c.11 1.52.15 2.09 2.24 2.09h6.42c2.1 0 2.14-.57 2.24-2.09l.65-10.07c.03-.41.39-.72.8-.7.41.03.73.38.7.8l-.65 10.07c-.11 1.56-.25 3.49-3.74 3.49"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M13.66 17.25h-3.33c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.33c.41 0 .75.34.75.75s-.34.75-.75.75M14.5 13.25h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default49 = SvgOutline49;
var SvgTwotone49 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M21 5.98c-3.33-.33-6.68-.5-10.02-.5q-2.97 0-5.94.3L3 5.98"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m8.5 4.97.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3",
          opacity: 0.34
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m18.85 9.14-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.33 16.5h3.33M9.5 12.5h5",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default49 = SvgTwotone49;
var components49 = {
  bold: Bold_default49,
  broken: Broken_default49,
  bulk: Bulk_default49,
  linear: Linear_default49,
  outline: Outline_default49,
  twotone: Twotone_default49
};
var Trash = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components49[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var trash_default = Trash;
var SvgBold50 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M9 14.22H3.92c-.61 0-1.17.31-1.49.83-.32.51-.35 1.12-.09 1.66a10.84 10.84 0 0 0 6.09 5.43c.18.06.38.1.57.1a1.764 1.764 0 0 0 1.75-1.76l.01-4.5c0-.47-.18-.91-.51-1.24A1.8 1.8 0 0 0 9 14.22M22.48 9.6C21.36 4.68 17.05 1.25 12 1.25S2.64 4.68 1.52 9.6c-.12.52 0 1.05.34 1.47s.84.66 1.38.66h17.53a1.735 1.735 0 0 0 1.71-2.13M20.06 14.27 15 14.26a1.74 1.74 0 0 0-1.75 1.75l.01 4.48a1.764 1.764 0 0 0 1.75 1.76c.19 0 .38-.03.56-.1 2.62-.92 4.84-2.89 6.07-5.38a1.7 1.7 0 0 0-.08-1.65c-.33-.54-.89-.85-1.5-.85"
      }
    )
  })
);
var Bold_default50 = SvgBold50;
var SvgBroken50 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
        d: "M2.45 14.97c1.07 3.44 3.95 6.09 7.53 6.82M2.05 10.98A9.996 9.996 0 0 1 12 2c5.18 0 9.44 3.94 9.95 8.98M14.01 21.8c3.57-.73 6.44-3.35 7.53-6.78"
      }
    )
  })
);
var Broken_default50 = SvgBroken50;
var SvgBulk50 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.24 14.74c-.33-.33-.77-.52-1.24-.52H3.92c-.61 0-1.17.31-1.49.83-.32.51-.35 1.12-.09 1.66a10.84 10.84 0 0 0 6.09 5.43c.18.06.38.1.57.1a1.764 1.764 0 0 0 1.75-1.76l.01-4.5c-.01-.47-.19-.91-.52-1.24",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M22.48 9.6C21.36 4.68 17.05 1.25 12 1.25S2.64 4.68 1.52 9.6c-.12.52 0 1.05.34 1.47s.84.66 1.38.66h17.53a1.735 1.735 0 0 0 1.71-2.13"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21.56 15.1c-.32-.52-.88-.84-1.5-.84L15 14.25A1.74 1.74 0 0 0 13.25 16l.01 4.48a1.764 1.764 0 0 0 1.75 1.76c.19 0 .38-.03.56-.1 2.62-.92 4.84-2.89 6.07-5.38.26-.53.23-1.15-.08-1.66",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default50 = SvgBulk50;
var SvgLinear50 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
        d: "M2.45 14.97c1.07 3.44 3.95 6.09 7.53 6.82M2.05 10.98A9.996 9.996 0 0 1 12 2c5.18 0 9.44 3.94 9.95 8.98M14.01 21.8c3.57-.73 6.44-3.35 7.53-6.78"
      }
    )
  })
);
var Linear_default50 = SvgLinear50;
var SvgOutline50 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M9.99 22.55c-.05 0-.1 0-.15-.02-3.83-.78-6.94-3.6-8.1-7.34-.12-.4.1-.82.49-.94.4-.12.82.1.94.49 1 3.22 3.67 5.64 6.97 6.31.41.08.67.48.58.89-.07.36-.39.61-.73.61M21.95 11.73c-.38 0-.71-.29-.75-.67A9.22 9.22 0 0 0 12 2.75c-4.77 0-8.72 3.57-9.2 8.3-.04.41-.4.72-.82.67a.75.75 0 0 1-.67-.82C1.87 5.4 6.47 1.25 12 1.25c5.54 0 10.14 4.15 10.69 9.65a.75.75 0 0 1-.67.82c-.02.01-.05.01-.07.01M14.01 22.55c-.35 0-.66-.24-.73-.6-.08-.41.18-.8.58-.88a9.24 9.24 0 0 0 6.96-6.27c.12-.4.55-.62.94-.49.4.12.61.55.49.94a10.76 10.76 0 0 1-8.09 7.29c-.05 0-.1.01-.15.01"
      }
    )
  })
);
var Outline_default50 = SvgOutline50;
var SvgTwotone50 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M2.45 14.97c1.07 3.44 3.95 6.09 7.53 6.82",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M2.05 10.98A9.996 9.996 0 0 1 12 2c5.18 0 9.44 3.94 9.95 8.98M14.01 21.8c3.57-.73 6.44-3.35 7.53-6.78"
        }
      )
    ]
  })
);
var Twotone_default50 = SvgTwotone50;
var components50 = {
  bold: Bold_default50,
  broken: Broken_default50,
  bulk: Bulk_default50,
  linear: Linear_default50,
  outline: Outline_default50,
  twotone: Twotone_default50
};
var Status = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components50[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var status_default = Status;
var SvgBold51 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21 7.52v5.88c0 .34-.33.58-.65.48l-3.93-1.22a3.02 3.02 0 0 0-3.78 3.79l1.21 3.9c.1.32-.14.65-.48.65H7.52C4.07 21 2 18.94 2 15.48V7.52C2 4.06 4.07 2 7.52 2h7.96C18.93 2 21 4.06 21 7.52"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m21.96 18.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L14.08 16c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
        }
      )
    ]
  })
);
var Bold_default51 = SvgBold51;
var SvgBroken51 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M2 13.02V15c0 5 2 7 7 7h3M22 12V9c0-5-2-7-7-7H9C4 2 2 4 2 9M20.96 17.84l-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L13.08 15c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
      }
    )
  })
);
var Broken_default51 = SvgBroken51;
var SvgBulk51 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15.48 2H7.53C4.07 2 2.01 4.06 2.01 7.52v7.95c0 3.46 2.07 5.52 5.52 5.52h7.95c3.46 0 5.52-2.06 5.52-5.52V7.52C21 4.06 18.93 2 15.48 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m21.96 18.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L14.08 16c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
        }
      )
    ]
  })
);
var Bulk_default51 = SvgBulk51;
var SvgLinear51 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M22 12V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h3"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m20.96 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L13.08 15c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
        }
      )
    ]
  })
);
var Linear_default51 = SvgLinear51;
var SvgOutline51 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v3c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-4.61-1.64-6.25-6.25-6.25H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h3c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.37 22.77h-.02a2.23 2.23 0 0 1-2.15-1.6l-1.85-5.95c-.25-.82-.04-1.7.57-2.29.6-.59 1.47-.81 2.27-.56l5.96 1.85c.96.3 1.59 1.14 1.6 2.15.01 1-.6 1.85-1.56 2.17l-1.63.55c-.23.08-.41.25-.48.48l-.56 1.64c-.31.95-1.15 1.56-2.15 1.56m-1.86-9c-.27 0-.45.15-.53.22-.21.21-.28.5-.19.79l1.85 5.95c.16.51.58.53.74.54.14 0 .57-.04.73-.53l.56-1.64c.22-.67.76-1.2 1.43-1.43l1.63-.55c.5-.16.53-.6.53-.73s-.04-.57-.54-.73l-5.96-1.85a.9.9 0 0 0-.25-.04"
        }
      )
    ]
  })
);
var Outline_default51 = SvgOutline51;
var SvgTwotone51 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M22 12V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h3"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m20.96 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L13.08 15c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default51 = SvgTwotone51;
var components51 = {
  bold: Bold_default51,
  broken: Broken_default51,
  bulk: Bulk_default51,
  linear: Linear_default51,
  outline: Outline_default51,
  twotone: Twotone_default51
};
var MouseSquare = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components51[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var mouseSquare_default = MouseSquare;
var SvgBold52 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.92 6.37a4.4 4.4 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53.74.49 1.62.77 2.56.77 1.74 0 3.25-.93 4.07-2.3.44-.72.68-1.56.68-2.45a4.74 4.74 0 0 0-3.71-4.63m.91 4.2L16.4 13c-.09.09-.28.18-.41.2l-.93.13c-.34.05-.57-.19-.52-.52l.13-.93c.02-.13.11-.31.2-.41l2.08-2.08.35-.35c.42-.42.91-.62 1.52 0s.43 1.11.01 1.53"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.58 4.02v.96c0 .41-.47.66-.84.47q-.69-.36-1.47-.54c-.44-.11-.91-.16-1.39-.16-3.45 0-6.25 2.8-6.25 6.25 0 1.14.31 2.26.9 3.22.5.84 1.2 1.54 1.96 2.01.17.11.35.21.52.31.17.09.29.27.29.46v2.07c0 .61-.4 1.42-.9 1.72l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.32 8.47c-.5-.51-.9-1.42-.9-2.02V4.12c0-1.21.9-2.12 1.99-2.12h13.18c1.09 0 1.99.91 1.99 2.02"
        }
      )
    ]
  })
);
var Bold_default52 = SvgBold52;
var SvgBroken52 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M5.33 2h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32M13.41 20.79 12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.22 8.47c-.51-.51-.91-1.41-.91-2.02M17.08 11.89l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M16.58 12.39c.3 1.08 1.14 1.92 2.22 2.22"
        }
      )
    ]
  })
);
var Broken_default52 = SvgBroken52;
var SvgBulk52 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.58 4.02v1.95c-.68-.5-1.46-.87-2.31-1.06-.44-.11-.91-.16-1.39-.16-3.45 0-6.25 2.8-6.25 6.25 0 1.14.31 2.26.9 3.22.5.84 1.2 1.54 1.96 2.01q.39.255.81.45v2.39c0 .61-.4 1.42-.9 1.72l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.32 8.47c-.5-.51-.9-1.42-.9-2.02V4.12c0-1.21.9-2.12 1.99-2.12h13.18c1.09 0 1.99.91 1.99 2.02",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.92 6.37a4.4 4.4 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53.74.49 1.62.77 2.56.77 1.74 0 3.25-.93 4.07-2.3.44-.72.68-1.56.68-2.45a4.74 4.74 0 0 0-3.71-4.63m.91 4.2L16.4 13c-.09.09-.28.18-.41.2l-.93.13c-.34.05-.57-.19-.52-.52l.13-.93c.02-.13.11-.31.2-.41l2.08-2.08.35-.35c.42-.42.91-.62 1.52 0s.43 1.11.01 1.53"
        }
      )
    ]
  })
);
var Bulk_default52 = SvgBulk52;
var SvgLinear52 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M13.41 20.79 12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.22 8.47c-.51-.51-.91-1.41-.91-2.02V4.13c0-1.21.91-2.12 2.02-2.12h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "m17.08 11.89-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M16.58 12.39c.3 1.08 1.14 1.92 2.22 2.22"
        }
      )
    ]
  })
);
var Linear_default52 = SvgLinear52;
var SvgOutline52 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.93 22.75c-.48 0-.96-.12-1.4-.36-.89-.5-1.42-1.39-1.42-2.4v-5.35c0-.51-.33-1.26-.64-1.65L3.67 9c-.63-.63-1.12-1.73-1.12-2.54V4.14c0-1.61 1.22-2.87 2.77-2.87h13.34a2.77 2.77 0 0 1 2.77 2.77v2.22c0 1.05-.63 2.26-1.23 2.85-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06c.37-.37.79-1.2.79-1.79V4.04c0-.7-.57-1.27-1.27-1.27H5.32c-.71 0-1.27.6-1.27 1.37v2.32c0 .37.3 1.1.69 1.49L8.59 12c.51.63 1.01 1.69 1.01 2.64v5.35c0 .66.45.98.65 1.09.43.24.94.23 1.34-.01l1.4-.9c.35-.22.81-.12 1.04.23.22.35.12.81-.22 1.04l-1.41.91c-.45.26-.96.4-1.47.4"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M13.69 18.89c-.38 0-.74-.14-1-.4-.31-.31-.45-.76-.38-1.23l.19-1.35c.05-.35.26-.76.51-1.01l3.54-3.54c.48-.48.95-.73 1.46-.78.62-.06 1.24.2 1.82.78s.84 1.19.78 1.82c-.05.5-.31.98-.78 1.46l-3.54 3.54c-.25.25-.67.46-1.02.51l-1.35.19c-.08.01-.15.01-.23.01m4.49-6.83h-.03c-.14.01-.33.13-.54.35l-3.54 3.54a.4.4 0 0 0-.08.17l-.18 1.25 1.25-.18c.04-.01.14-.06.17-.09l3.54-3.54c.21-.21.34-.4.35-.54.02-.2-.18-.44-.35-.61-.16-.16-.39-.35-.59-.35"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18.79 15.36c-.07 0-.14-.01-.2-.03a3.98 3.98 0 0 1-2.74-2.74.76.76 0 0 1 .52-.93c.4-.11.81.12.92.52.23.82.88 1.47 1.7 1.7.4.11.63.53.52.93-.09.34-.39.55-.72.55"
        }
      )
    ]
  })
);
var Outline_default52 = SvgOutline52;
var SvgTwotone52 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M13.41 20.79 12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.22 8.47c-.51-.51-.91-1.41-.91-2.02V4.13c0-1.21.91-2.12 2.02-2.12h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "m17.08 11.89-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M16.58 12.39c.3 1.08 1.14 1.92 2.22 2.22"
        }
      )
    ]
  })
);
var Twotone_default52 = SvgTwotone52;
var components52 = {
  bold: Bold_default52,
  broken: Broken_default52,
  bulk: Bulk_default52,
  linear: Linear_default52,
  outline: Outline_default52,
  twotone: Twotone_default52
};
var FilterEdit = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components52[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var filterEdit_default = FilterEdit;
var SvgBold53 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "m19.51 5.85-5.94-3.43c-.97-.56-2.17-.56-3.15 0L4.49 5.85a3.15 3.15 0 0 0-1.57 2.73v6.84c0 1.12.6 2.16 1.57 2.73l5.94 3.43c.97.56 2.17.56 3.15 0l5.94-3.43a3.15 3.15 0 0 0 1.57-2.73V8.58a3.19 3.19 0 0 0-1.58-2.73m-8.26 1.9c0-.41.34-.75.75-.75s.75.34.75.75V13c0 .41-.34.75-.75.75s-.75-.34-.75-.75zm1.67 8.88q-.075.18-.21.33a.99.99 0 0 1-1.09.21c-.13-.05-.23-.12-.33-.21-.09-.1-.16-.21-.22-.33a1 1 0 0 1-.07-.38c0-.26.1-.52.29-.71.1-.09.2-.16.33-.21.37-.16.81-.07 1.09.21.09.1.16.2.21.33.05.12.08.25.08.38s-.03.26-.08.38"
      }
    )
  })
);
var Bold_default53 = SvgBold53;
var SvgBroken53 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M12 7.75V13M2.92 8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.56 1.57 1.6 1.57 2.73v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 0 1-1.57-2.73v-2.76M12 16.2v.1"
      }
    )
  })
);
var Broken_default53 = SvgBroken53;
var SvgBulk53 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21.08 8.58v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 0 1-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.57 1.57 1.6 1.57 2.73",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 13.75c-.41 0-.75-.34-.75-.75V7.75c0-.41.34-.75.75-.75s.75.34.75.75V13c0 .41-.34.75-.75.75M12 17.25c-.13 0-.26-.03-.38-.08-.13-.05-.23-.12-.33-.21-.09-.1-.16-.21-.22-.33a1 1 0 0 1-.07-.38c0-.26.1-.52.29-.71.1-.09.2-.16.33-.21.37-.16.81-.07 1.09.21.09.1.16.2.21.33.05.12.08.25.08.38s-.03.26-.08.38q-.075.18-.21.33a1 1 0 0 1-.71.29"
        }
      )
    ]
  })
);
var Bulk_default53 = SvgBulk53;
var SvgLinear53 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M12 7.75V13M21.08 8.58v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 0 1-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.57 1.57 1.6 1.57 2.73M12 16.2v.1"
      }
    )
  })
);
var Linear_default53 = SvgLinear53;
var SvgOutline53 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 13.75c-.41 0-.75-.34-.75-.75V7.75c0-.41.34-.75.75-.75s.75.34.75.75V13c0 .41-.34.75-.75.75M12 17.25a1 1 0 0 1-.71-.29c-.09-.1-.16-.21-.22-.33a1 1 0 0 1-.07-.38c0-.26.11-.52.29-.71.37-.37 1.05-.37 1.42 0 .18.19.29.45.29.71 0 .13-.03.26-.08.38q-.075.18-.21.33a1 1 0 0 1-.71.29"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.75c-.67 0-1.35-.17-1.95-.52L4.11 18.8c-1.2-.7-1.95-1.99-1.95-3.38V8.58c0-1.39.75-2.68 1.95-3.38l5.94-3.43c1.2-.7 2.69-.7 3.9 0l5.94 3.43c1.2.7 1.95 1.99 1.95 3.38v6.84c0 1.39-.75 2.68-1.95 3.38l-5.94 3.43c-.6.35-1.28.52-1.95.52m0-20c-.41 0-.83.11-1.2.32L4.86 6.5c-.74.43-1.2 1.22-1.2 2.08v6.84c0 .85.46 1.65 1.2 2.08l5.94 3.43c.74.43 1.66.43 2.39 0l5.94-3.43c.74-.43 1.2-1.22 1.2-2.08V8.58c0-.85-.46-1.65-1.2-2.08l-5.94-3.43c-.36-.21-.78-.32-1.19-.32"
        }
      )
    ]
  })
);
var Outline_default53 = SvgOutline53;
var SvgTwotone53 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 7.75V13",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M21.08 8.58v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 0 1-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.57 1.57 1.6 1.57 2.73"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 16.2v.1",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default53 = SvgTwotone53;
var components53 = {
  bold: Bold_default53,
  broken: Broken_default53,
  bulk: Bulk_default53,
  linear: Linear_default53,
  outline: Outline_default53,
  twotone: Twotone_default53
};
var Warning2 = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components53[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var warning2_default = Warning2;
var SvgBold54 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M15.59 1.75c-2.97 0-5.38 2.41-5.38 5.38s2.41 5.38 5.38 5.38 5.38-2.41 5.38-5.38-2.41-5.38-5.38-5.38M6.36 13.03a3.329 3.329 0 1 0-.002 6.662 3.329 3.329 0 0 0 .002-6.662M16.62 16.62c-1.55 0-2.81 1.26-2.81 2.81s1.26 2.81 2.81 2.81 2.81-1.26 2.81-2.81-1.26-2.81-2.81-2.81"
      }
    )
  })
);
var Bold_default54 = SvgBold54;
var SvgBroken54 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M15.59 12.26c2.83 0 5.13-2.3 5.13-5.13S18.42 2 15.59 2s-5.13 2.3-5.13 5.13c0 1.3.48 2.48 1.28 3.38M3.28 16.36c0 1.7 1.38 3.08 3.08 3.08s3.08-1.38 3.08-3.08-1.38-3.08-3.08-3.08"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M16.62 22a2.56 2.56 0 1 0 0-5.12 2.56 2.56 0 0 0 0 5.12Z"
        }
      )
    ]
  })
);
var Broken_default54 = SvgBroken54;
var SvgBulk54 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15.59 1.75c-2.97 0-5.38 2.41-5.38 5.38s2.41 5.38 5.38 5.38 5.38-2.41 5.38-5.38-2.41-5.38-5.38-5.38"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M6.36 13.03a3.329 3.329 0 1 0 3.33 3.33c0-1.84-1.5-3.33-3.33-3.33M16.62 16.62c-1.55 0-2.81 1.26-2.81 2.81s1.26 2.81 2.81 2.81 2.81-1.26 2.81-2.81-1.26-2.81-2.81-2.81",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default54 = SvgBulk54;
var SvgLinear54 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
        d: "M15.59 12.26a5.13 5.13 0 1 0 0-10.26 5.13 5.13 0 0 0 0 10.26ZM6.36 19.44a3.08 3.08 0 1 0 0-6.16 3.08 3.08 0 0 0 0 6.16ZM16.62 22a2.56 2.56 0 1 0 0-5.12 2.56 2.56 0 0 0 0 5.12Z"
      }
    )
  })
);
var Linear_default54 = SvgLinear54;
var SvgOutline54 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M15.59 13.01a5.89 5.89 0 0 1-5.88-5.88 5.89 5.89 0 0 1 5.88-5.88 5.89 5.89 0 0 1 5.88 5.88 5.89 5.89 0 0 1-5.88 5.88m0-10.26c-2.41 0-4.38 1.96-4.38 4.38s1.96 4.38 4.38 4.38 4.38-1.96 4.38-4.38S18 2.75 15.59 2.75M6.36 20.19c-2.11 0-3.83-1.72-3.83-3.83s1.72-3.83 3.83-3.83 3.83 1.72 3.83 3.83-1.72 3.83-3.83 3.83m0-6.16c-1.28 0-2.33 1.04-2.33 2.33 0 1.28 1.04 2.33 2.33 2.33 1.28 0 2.33-1.04 2.33-2.33 0-1.28-1.05-2.33-2.33-2.33M16.62 22.75c-1.83 0-3.31-1.49-3.31-3.31 0-1.83 1.49-3.31 3.31-3.31a3.32 3.32 0 0 1 3.31 3.31 3.32 3.32 0 0 1-3.31 3.31m0-5.13a1.81 1.81 0 1 0 0 3.619 1.81 1.81 0 0 0 0-3.62"
      }
    )
  })
);
var Outline_default54 = SvgOutline54;
var SvgTwotone54 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M15.59 12.26a5.13 5.13 0 1 0 0-10.26 5.13 5.13 0 0 0 0 10.26Z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M6.36 19.44a3.08 3.08 0 1 0 0-6.16 3.08 3.08 0 0 0 0 6.16ZM16.62 22a2.56 2.56 0 1 0 0-5.12 2.56 2.56 0 0 0 0 5.12Z",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default54 = SvgTwotone54;
var components54 = {
  bold: Bold_default54,
  broken: Broken_default54,
  bulk: Bulk_default54,
  linear: Linear_default54,
  outline: Outline_default54,
  twotone: Twotone_default54
};
var Bubble = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components54[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var bubble_default = Bubble;
var SvgBold55 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21.96 11.66a7.5 7.5 0 0 0-3.99-1.16c-4.14 0-7.5 3.36-7.5 7.5 0 1.42.4 2.79 1.15 3.98-.46-.01-.93-.06-1.41-.13-4.11-.7-7.42-4.03-8.1-8.15A10.01 10.01 0 0 1 13.67 2.14c4.12.68 7.45 3.99 8.15 8.1.08.48.13.96.14 1.42"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M13.38 21.86A5.96 5.96 0 0 1 11.97 18c0-3.31 2.69-6 6-6 1.47 0 2.82.53 3.86 1.41"
        }
      )
    ]
  })
);
var Bold_default55 = SvgBold55;
var SvgBroken55 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M21.82 10.24c.15.9.19 1.77.11 2.62-.02.19-.05.37-.1.55A5.96 5.96 0 0 0 17.97 12c-3.31 0-6 2.69-6 6 0 1.47.53 2.82 1.41 3.86-.18.05-.36.08-.55.1-.85.08-1.72.04-2.62-.11-4.11-.7-7.42-4.03-8.1-8.15A10.01 10.01 0 0 1 13.67 2.14c2.29.38 4.34 1.57 5.83 3.27"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M21.83 13.41c-.14.49-.4.93-.77 1.3l-6.38 6.38c-.37.37-.81.63-1.3.77A5.96 5.96 0 0 1 11.97 18c0-3.31 2.69-6 6-6 1.47 0 2.82.53 3.86 1.41"
        }
      )
    ]
  })
);
var Broken_default55 = SvgBroken55;
var SvgBulk55 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21.93 12.86c-.02.19-.05.37-.1.55A5.96 5.96 0 0 0 17.97 12c-3.31 0-6 2.69-6 6 0 1.47.53 2.82 1.41 3.86-.18.05-.36.08-.55.1-.85.08-1.72.04-2.62-.11-4.11-.7-7.42-4.03-8.1-8.15A10.01 10.01 0 0 1 13.67 2.14c4.12.68 7.45 3.99 8.15 8.1.15.9.19 1.77.11 2.62",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21.83 13.41c-.14.49-.4.93-.77 1.3l-6.38 6.38c-.37.37-.81.63-1.3.77A5.96 5.96 0 0 1 11.97 18c0-3.31 2.69-6 6-6 1.47 0 2.82.53 3.86 1.41"
        }
      )
    ]
  })
);
var Bulk_default55 = SvgBulk55;
var SvgLinear55 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M21.93 12.86c-.02.19-.05.37-.1.55A5.96 5.96 0 0 0 17.97 12c-3.31 0-6 2.69-6 6 0 1.47.53 2.82 1.41 3.86-.18.05-.36.08-.55.1-.85.08-1.72.04-2.62-.11-4.11-.7-7.42-4.03-8.1-8.15A10.01 10.01 0 0 1 13.67 2.14c4.12.68 7.45 3.99 8.15 8.1.15.9.19 1.77.11 2.62"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M21.83 13.41c-.14.49-.4.93-.77 1.3l-6.38 6.38c-.37.37-.81.63-1.3.77A5.96 5.96 0 0 1 11.97 18c0-3.31 2.69-6 6-6 1.47 0 2.82.53 3.86 1.41"
        }
      )
    ]
  })
);
var Linear_default55 = SvgLinear55;
var SvgOutline55 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M11.97 22.75c-.61 0-1.24-.05-1.88-.16-4.4-.75-7.99-4.35-8.72-8.77-.58-3.51.51-6.94 3-9.43s5.92-3.57 9.42-3c4.41.73 8.02 4.31 8.77 8.71.16.97.2 1.92.12 2.82v.01c-.02.23-.06.45-.12.67-.07.25-.26.44-.5.52s-.51.02-.71-.14a5.26 5.26 0 0 0-3.38-1.23c-2.9 0-5.25 2.36-5.25 5.25 0 1.24.44 2.44 1.23 3.38.17.2.22.46.14.71s-.27.43-.52.5c-.22.06-.44.1-.67.12-.3.03-.61.04-.93.04m0-20c-2.45 0-4.77.95-6.53 2.71-2.14 2.14-3.08 5.1-2.58 8.12.63 3.79 3.7 6.89 7.49 7.53.6.1 1.17.16 1.72.14-.54-.99-.83-2.11-.83-3.25 0-3.72 3.03-6.75 6.75-6.75 1.14 0 2.26.29 3.25.83.01-.55-.04-1.12-.14-1.72-.64-3.78-3.74-6.86-7.53-7.48-.55-.09-1.08-.13-1.6-.13"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M13.38 22.61a.71.71 0 0 1-.57-.27A6.75 6.75 0 0 1 11.22 18c0-3.72 3.03-6.75 6.75-6.75 1.59 0 3.13.56 4.34 1.59.23.19.32.5.24.78q-.27.93-.96 1.62l-6.38 6.38c-.46.46-1.01.78-1.62.96q-.105.03-.21.03m4.59-9.86c-2.9 0-5.25 2.36-5.25 5.25 0 1.06.32 2.09.91 2.95.19-.1.36-.23.52-.39l6.38-6.38c.16-.16.29-.33.39-.52-.86-.59-1.89-.91-2.95-.91"
        }
      )
    ]
  })
);
var Outline_default55 = SvgOutline55;
var SvgTwotone55 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M21.93 12.86c-.02.19-.05.37-.1.55A5.96 5.96 0 0 0 17.97 12c-3.31 0-6 2.69-6 6 0 1.47.53 2.82 1.41 3.86-.18.05-.36.08-.55.1-.85.08-1.72.04-2.62-.11-4.11-.7-7.42-4.03-8.1-8.15A10.01 10.01 0 0 1 13.67 2.14c4.12.68 7.45 3.99 8.15 8.1.15.9.19 1.77.11 2.62",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M21.83 13.41c-.14.49-.4.93-.77 1.3l-6.38 6.38c-.37.37-.81.63-1.3.77A5.96 5.96 0 0 1 11.97 18c0-3.31 2.69-6 6-6 1.47 0 2.82.53 3.86 1.41"
        }
      )
    ]
  })
);
var Twotone_default55 = SvgTwotone55;
var components55 = {
  bold: Bold_default55,
  broken: Broken_default55,
  bulk: Bulk_default55,
  linear: Linear_default55,
  outline: Outline_default55,
  twotone: Twotone_default55
};
var Sticker = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components55[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var sticker_default = Sticker;
var SvgBold56 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M12 2C6.5 2 2 6.58 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.92.84 1.67.5 1.67-.76v-7.89C22 6.58 17.5 2 12 2m0 4.62c1.31 0 2.38 1.07 2.38 2.38s-1.07 2.38-2.38 2.38S9.62 10.31 9.62 9 10.69 6.62 12 6.62m4.45 7.98A7.42 7.42 0 0 1 12 16.07c-1.57 0-3.14-.49-4.45-1.47a.75.75 0 0 1 .9-1.2 5.94 5.94 0 0 0 7.1 0 .75.75 0 0 1 .9 1.2"
      }
    )
  })
);
var Bold_default56 = SvgBold56;
var SvgBroken56 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2 16.07v4.01c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.92.84 1.67.5 1.67-.76v-7.89c0-5.6-4.5-10.18-10-10.18s-10 4.58-10 10.18"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8 14a6.66 6.66 0 0 0 8 0M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        }
      )
    ]
  })
);
var Broken_default56 = SvgBroken56;
var SvgBulk56 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M22 20.07v-7.89C22 6.58 17.5 2 12 2S2 6.58 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.88.84 1.63.5 1.63-.76",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 16.07c-1.57 0-3.14-.49-4.45-1.47a.75.75 0 0 1 .9-1.2 5.94 5.94 0 0 0 7.1 0 .75.75 0 0 1 .9 1.2A7.42 7.42 0 0 1 12 16.07M12 11.38a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76"
        }
      )
    ]
  })
);
var Bulk_default56 = SvgBulk56;
var SvgLinear56 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M22 20.07v-7.89C22 6.58 17.5 2 12 2S2 6.58 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.88.84 1.63.5 1.63-.76"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8 14a6.66 6.66 0 0 0 8 0M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        }
      )
    ]
  })
);
var Linear_default56 = SvgLinear56;
var SvgOutline56 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15.33 22.75c-.42 0-.85-.15-1.18-.45l-2-1.83c-.08-.07-.24-.07-.33 0L9.83 22.3c-.66.61-1.69.6-2.35 0l-2-1.83c-.08-.07-.24-.07-.33 0l-.99.91c-.91.83-1.63.7-1.98.54s-.94-.6-.94-1.85v-7.89c0-6.03 4.82-10.93 10.75-10.93s10.75 4.9 10.75 10.93v7.89c0 1.25-.59 1.7-.94 1.85s-1.07.29-1.98-.54l-1-.91c-.08-.07-.24-.07-.32 0l-2 1.83c-.32.3-.74.45-1.17.45M12 18.91c.42 0 .85.15 1.17.45l2 1.83c.08.07.24.07.32 0l2-1.83c.66-.6 1.69-.6 2.35 0l1 .91c.17.15.28.22.35.24.03-.07.06-.21.06-.45v-7.89c0-5.2-4.15-9.43-9.25-9.43s-9.25 4.23-9.25 9.43v7.89c0 .24.04.38.06.45.07-.03.19-.09.35-.24l1-.91c.66-.6 1.69-.6 2.35 0l2 1.83c.08.07.24.07.32 0l2-1.83c.32-.3.75-.45 1.17-.45"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 16.07c-1.57 0-3.14-.49-4.45-1.47a.75.75 0 0 1 .9-1.2 5.94 5.94 0 0 0 7.1 0 .75.75 0 0 1 .9 1.2A7.42 7.42 0 0 1 12 16.07M12 11.75c-1.52 0-2.75-1.23-2.75-2.75S10.48 6.25 12 6.25 14.75 7.48 14.75 9s-1.23 2.75-2.75 2.75m0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
        }
      )
    ]
  })
);
var Outline_default56 = SvgOutline56;
var SvgTwotone56 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M22 20.07v-7.89C22 6.58 17.5 2 12 2S2 6.58 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.88.84 1.63.5 1.63-.76"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8 14a6.66 6.66 0 0 0 8 0M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default56 = SvgTwotone56;
var components56 = {
  bold: Bold_default56,
  broken: Broken_default56,
  bulk: Bulk_default56,
  linear: Linear_default56,
  outline: Outline_default56,
  twotone: Twotone_default56
};
var Ghost = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components56[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var ghost_default = Ghost;
var SvgBold57 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m4.15 10.83-1.73.58c-.48.16-.85.53-1.01 1.01l-.58 1.73c-.49 1.49-2.59 1.46-3.05-.03L7.83 9.84c-.38-1.25.77-2.4 2-2.02l6.29 1.95c1.49.47 1.51 2.57.03 3.06"
      }
    )
  })
);
var Bold_default57 = SvgBold57;
var SvgBroken57 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m16.15 12.83-1.73.58c-.48.16-.85.53-1.01 1.01l-.58 1.73c-.49 1.49-2.59 1.46-3.05-.03L7.83 9.84c-.38-1.25.77-2.4 2-2.02l6.29 1.95c1.49.47 1.51 2.57.03 3.06"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
        }
      )
    ]
  })
);
var Broken_default57 = SvgBroken57;
var SvgBulk57 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m16.15 12.83-1.73.58c-.48.16-.85.53-1.01 1.01l-.58 1.73c-.49 1.49-2.59 1.46-3.05-.03L7.83 9.84c-.38-1.25.77-2.4 2-2.02l6.29 1.95c1.49.47 1.51 2.57.03 3.06"
        }
      )
    ]
  })
);
var Bulk_default57 = SvgBulk57;
var SvgLinear57 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m16.15 12.83-1.73.58c-.48.16-.85.53-1.01 1.01l-.58 1.73c-.49 1.49-2.59 1.46-3.05-.03L7.83 9.84c-.38-1.25.77-2.4 2-2.02l6.29 1.95c1.49.47 1.51 2.57.03 3.06"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        }
      )
    ]
  })
);
var Linear_default57 = SvgLinear57;
var SvgOutline57 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M11.31 18h-.02a2.33 2.33 0 0 1-2.23-1.65l-1.95-6.28c-.26-.85-.04-1.76.59-2.38a2.34 2.34 0 0 1 2.36-.58l6.29 1.95c1 .31 1.65 1.19 1.66 2.23a2.31 2.31 0 0 1-1.61 2.25l-1.72.58c-.26.09-.45.28-.54.53l-.59 1.73c-.33.99-1.21 1.62-2.24 1.62M9.34 8.5c-.3 0-.5.16-.59.25a.85.85 0 0 0-.21.87l1.95 6.28c.17.55.66.6.81.6.12-.01.63-.04.81-.59l.59-1.73c.23-.69.79-1.25 1.48-1.48l1.72-.58h.01c.55-.18.59-.67.59-.81 0-.15-.05-.64-.6-.81L9.61 8.55a.7.7 0 0 0-.27-.05"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
        }
      )
    ]
  })
);
var Outline_default57 = SvgOutline57;
var SvgTwotone57 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m16.15 12.83-1.73.58c-.48.16-.85.53-1.01 1.01l-.58 1.73c-.49 1.49-2.59 1.46-3.05-.03L7.83 9.84c-.38-1.25.77-2.4 2-2.02l6.29 1.95c1.49.47 1.51 2.57.03 3.06",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        }
      )
    ]
  })
);
var Twotone_default57 = SvgTwotone57;
var components57 = {
  bold: Bold_default57,
  broken: Broken_default57,
  bulk: Bulk_default57,
  linear: Linear_default57,
  outline: Outline_default57,
  twotone: Twotone_default57
};
var Mouse = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components57[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var mouse_default = Mouse;
var SvgBold58 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M17.71 2h-.95a.715.715 0 0 0 0 1.43h.95a3.1 3.1 0 0 1 3.1 3.09v5.88c-.36-.19-.76-.29-1.19-.29h-3.81c-1.44 0-2.62 1.17-2.62 2.62v1.56h-2.38v-1.56c0-1.45-1.18-2.62-2.62-2.62H4.38c-.43 0-.83.1-1.19.29V6.52a3.1 3.1 0 0 1 3.1-3.09h.95a.715.715 0 0 0 0-1.43h-.95a4.53 4.53 0 0 0-4.53 4.52v12.86c0 1.45 1.18 2.62 2.62 2.62h3.81c1.44 0 2.62-1.17 2.62-2.62v-1.67h2.38v1.67c0 1.45 1.18 2.62 2.62 2.62h3.81c1.44 0 2.62-1.17 2.62-2.62V6.52A4.53 4.53 0 0 0 17.71 2"
      }
    )
  })
);
var Bold_default58 = SvgBold58;
var SvgBroken58 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10 17.5h4M2 17.5v-10c0-4 1-5 5-5M22 17.5v-10c0-4-1-5-5-5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10 15.91v3.29c0 2-.8 2.8-2.8 2.8H4.8c-2 0-2.8-.8-2.8-2.8v-3.29c0-2 .8-2.8 2.8-2.8h2.4M22 15.91v3.29c0 2-.8 2.8-2.8 2.8h-2.4c-2 0-2.8-.8-2.8-2.8v-3.29c0-2 .8-2.8 2.8-2.8h2.4c2 0 2.8.8 2.8 2.8"
        }
      )
    ]
  })
);
var Broken_default58 = SvgBroken58;
var SvgBulk58 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M13.19 16.29h-2.38v1.42h2.38zM7.95 2.71c0 .4-.32.72-.71.72h-.95a3.1 3.1 0 0 0-3.1 3.09v5.88c-.85.43-1.43 1.31-1.43 2.33V6.52A4.53 4.53 0 0 1 6.29 2h.95c.39 0 .71.32.71.71M22.24 6.52v8.21c0-1.02-.58-1.9-1.43-2.33V6.52a3.1 3.1 0 0 0-3.1-3.09h-.95a.715.715 0 0 1 0-1.43h.95c2.5 0 4.53 2.03 4.53 4.52"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.81 14.73v4.65c0 1.45-1.18 2.62-2.62 2.62H4.38c-1.44 0-2.62-1.17-2.62-2.62v-4.65c0-1.02.58-1.9 1.43-2.33.36-.19.76-.29 1.19-.29h3.81c1.44 0 2.62 1.17 2.62 2.62M22.24 14.73v4.65c0 1.45-1.18 2.62-2.62 2.62h-3.81c-1.44 0-2.62-1.17-2.62-2.62v-4.65c0-1.45 1.18-2.62 2.62-2.62h3.81c.43 0 .83.1 1.19.29.85.43 1.43 1.31 1.43 2.33",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default58 = SvgBulk58;
var SvgLinear58 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10 17.5h4M2 17.5v-10c0-4 1-5 5-5M22 17.5v-10c0-4-1-5-5-5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10 15.91v3.29c0 2-.8 2.8-2.8 2.8H4.8c-2 0-2.8-.8-2.8-2.8v-3.29c0-2 .8-2.8 2.8-2.8h2.4c2 0 2.8.8 2.8 2.8M22 15.91v3.29c0 2-.8 2.8-2.8 2.8h-2.4c-2 0-2.8-.8-2.8-2.8v-3.29c0-2 .8-2.8 2.8-2.8h2.4c2 0 2.8.8 2.8 2.8"
        }
      )
    ]
  })
);
var Linear_default58 = SvgLinear58;
var SvgOutline58 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14 18.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75M2 18.25c-.41 0-.75-.34-.75-.75v-10c0-4.41 1.34-5.75 5.75-5.75.41 0 .75.34.75.75s-.34.75-.75.75c-3.57 0-4.25.67-4.25 4.25v10c0 .41-.34.75-.75.75M22 18.25c-.41 0-.75-.34-.75-.75v-10c0-3.58-.68-4.25-4.25-4.25-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.41 0 5.75 1.34 5.75 5.75v10c0 .41-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M7.2 22.75H4.8c-2.42 0-3.55-1.13-3.55-3.55v-3.29c0-2.42 1.13-3.55 3.55-3.55h2.4c2.42 0 3.55 1.13 3.55 3.55v3.29c0 2.42-1.13 3.55-3.55 3.55m-2.4-8.89c-1.59 0-2.05.46-2.05 2.05v3.29c0 1.59.46 2.05 2.05 2.05h2.4c1.59 0 2.05-.46 2.05-2.05v-3.29c0-1.59-.46-2.05-2.05-2.05zM19.2 22.75h-2.4c-2.42 0-3.55-1.13-3.55-3.55v-3.29c0-2.42 1.13-3.55 3.55-3.55h2.4c2.42 0 3.55 1.13 3.55 3.55v3.29c0 2.42-1.13 3.55-3.55 3.55m-2.4-8.89c-1.59 0-2.05.46-2.05 2.05v3.29c0 1.59.46 2.05 2.05 2.05h2.4c1.59 0 2.05-.46 2.05-2.05v-3.29c0-1.59-.46-2.05-2.05-2.05z"
        }
      )
    ]
  })
);
var Outline_default58 = SvgOutline58;
var SvgTwotone58 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10 17.5h4M2 17.5v-10c0-4 1-5 5-5M22 17.5v-10c0-4-1-5-5-5",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10 15.91v3.29c0 2-.8 2.8-2.8 2.8H4.8c-2 0-2.8-.8-2.8-2.8v-3.29c0-2 .8-2.8 2.8-2.8h2.4c2 0 2.8.8 2.8 2.8M22 15.91v3.29c0 2-.8 2.8-2.8 2.8h-2.4c-2 0-2.8-.8-2.8-2.8v-3.29c0-2 .8-2.8 2.8-2.8h2.4c2 0 2.8.8 2.8 2.8"
        }
      )
    ]
  })
);
var Twotone_default58 = SvgTwotone58;
var components58 = {
  bold: Bold_default58,
  broken: Broken_default58,
  bulk: Bulk_default58,
  linear: Linear_default58,
  outline: Outline_default58,
  twotone: Twotone_default58
};
var Glass = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components58[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var glass_default = Glass;
var SvgBold59 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M20.95 4.13c-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81c-.2 0-.4.01-.59.03C3.94 2.24 2 4.37 2 7.81v8.38c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.82.6 1.86.95 3.09 1.03.19.01.39.02.59.02h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-1.49-.36-2.73-1.05-3.68M8.46 10.68l-.49-.51c-.26-.26-.47-.73-.47-1.05v-1.2c0-.63.47-1.1 1.05-1.1h2.14c.41 0 .66.45.44.8L9.28 10.6c-.18.29-.59.33-.82.08m8.04-1.66c0 .42-.26.94-.52 1.2l-2.25 1.99c-.31.26-.52.78-.52 1.2v2.25c0 .31-.21.73-.47.89l-.74.47c-.68.42-1.62-.05-1.62-.89v-2.77c0-.37-.21-.84-.42-1.1L9.72 12a.54.54 0 0 1-.07-.64l2.68-4.3c.1-.15.26-.25.44-.25h2.68c.58 0 1.05.47 1.05 1.05z"
      }
    )
  })
);
var Bold_default59 = SvgBold59;
var SvgBroken59 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M8.16 6.65h7.67c.64 0 1.16.52 1.16 1.16v1.28c0 .47-.29 1.05-.58 1.34l-2.5 2.21c-.35.29-.58.87-.58 1.34v2.5c0 .35-.23.81-.52.99l-.81.51c-.76.47-1.8-.06-1.8-.99v-3.08c0-.41-.23-.93-.47-1.22l-2.21-2.33C7.23 10.08 7 9.55 7 9.2V7.87c0-.7.52-1.22 1.16-1.22"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2 12.92V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
        }
      )
    ]
  })
);
var Broken_default59 = SvgBroken59;
var SvgBulk59 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M22 7.81v8.38c0 3.64-2.17 5.81-5.81 5.81H7.81c-.2 0-.4-.01-.59-.02-1.23-.08-2.27-.43-3.09-1.03-.42-.29-.79-.66-1.08-1.08C2.36 18.92 2 17.68 2 16.19V7.81c0-3.44 1.94-5.57 5.22-5.78.19-.02.39-.03.59-.03h8.38c1.49 0 2.73.36 3.68 1.05.42.29.79.66 1.08 1.08.69.95 1.05 2.19 1.05 3.68",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M8.16 6.65h7.67c.64 0 1.16.52 1.16 1.16v1.28c0 .47-.29 1.05-.58 1.34l-2.5 2.21c-.35.29-.58.87-.58 1.34v2.5c0 .35-.23.81-.52.99l-.81.51c-.76.47-1.8-.06-1.8-.99v-3.08c0-.41-.23-.93-.47-1.22l-2.21-2.33C7.23 10.08 7 9.55 7 9.2V7.87c0-.7.52-1.22 1.16-1.22"
        }
      )
    ]
  })
);
var Bulk_default59 = SvgBulk59;
var SvgLinear59 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M8.16 6.65h7.67c.64 0 1.16.52 1.16 1.16v1.28c0 .47-.29 1.05-.58 1.34l-2.5 2.21c-.35.29-.58.87-.58 1.34v2.5c0 .35-.23.81-.52.99l-.81.51c-.76.47-1.8-.06-1.8-.99v-3.08c0-.41-.23-.93-.47-1.22l-2.21-2.33C7.23 10.08 7 9.55 7 9.2V7.87c0-.7.52-1.22 1.16-1.22"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      )
    ]
  })
);
var Linear_default59 = SvgLinear59;
var SvgOutline59 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M11.38 18.9c-.33 0-.66-.08-.96-.25-.61-.34-.98-.96-.98-1.66v-3.08c0-.19-.15-.56-.3-.75l-2.17-2.28c-.41-.41-.72-1.13-.72-1.68V7.87c0-1.11.84-1.97 1.91-1.97h7.67c1.05 0 1.91.86 1.91 1.91v1.28c0 .7-.4 1.47-.8 1.87l-2.53 2.24c-.16.14-.33.49-.33.78v2.5c0 .63-.38 1.33-.89 1.63l-.79.51c-.31.19-.66.28-1.02.28M8.16 7.4c-.24 0-.41.2-.41.47V9.2c0 .13.14.47.3.63l2.22 2.34c.34.43.67 1.12.67 1.74v3.08c0 .2.13.31.21.35.11.06.29.1.45 0l.8-.52a.62.62 0 0 0 .18-.36v-2.5c0-.71.35-1.5.85-1.91l2.48-2.2c.13-.13.33-.53.33-.78V7.81c0-.22-.19-.41-.41-.41z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
        }
      )
    ]
  })
);
var Outline_default59 = SvgOutline59;
var SvgTwotone59 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M8.16 6.65h7.67c.64 0 1.16.52 1.16 1.16v1.28c0 .47-.29 1.05-.58 1.34l-2.5 2.21c-.35.29-.58.87-.58 1.34v2.5c0 .35-.23.81-.52.99l-.81.51c-.76.47-1.8-.06-1.8-.99v-3.08c0-.41-.23-.93-.47-1.22l-2.21-2.33C7.23 10.08 7 9.55 7 9.2V7.87c0-.7.52-1.22 1.16-1.22",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      )
    ]
  })
);
var Twotone_default59 = SvgTwotone59;
var components59 = {
  bold: Bold_default59,
  broken: Broken_default59,
  bulk: Bulk_default59,
  linear: Linear_default59,
  outline: Outline_default59,
  twotone: Twotone_default59
};
var FilterSquare = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components59[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var filterSquare_default = FilterSquare;
var SvgBold60 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.02 2.88C16.54 2.4 15.58 2 14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1v5.8c0 .68.4 1.64.88 2.12l1.53 1.53L18.55 4.41zM21.12 6.98l-1.51-1.51L5.47 19.61l1.51 1.51c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M2.49 20.47c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.92-1.92-1.06-1.06zM21.53 3.55c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.92 1.92 1.06 1.06z"
        }
      )
    ]
  })
);
var Bold_default60 = SvgBold60;
var SvgBroken60 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M4.94 19.08 19.08 4.94M2 13.02v1.88c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1C16.54 2.4 15.58 2 14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1"
      }
    )
  })
);
var Broken_default60 = SvgBroken60;
var SvgBulk60 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1v5.8c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1C16.54 2.4 15.58 2 14.9 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M3.02 21.75c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L20.47 2.49c.29-.29.77-.29 1.06 0s.29.77 0 1.06L3.55 21.53a.7.7 0 0 1-.53.22"
        }
      )
    ]
  })
);
var Bulk_default60 = SvgBulk60;
var SvgLinear60 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1v5.8c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1C16.54 2.4 15.58 2 14.9 2M4.94 19.08 19.08 4.94"
      }
    )
  })
);
var Linear_default60 = SvgLinear60;
var SvgOutline60 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.9 22.75H9.1c-.89 0-2.03-.47-2.65-1.1l-4.1-4.1c-.63-.63-1.1-1.77-1.1-2.65V9.1c0-.89.47-2.03 1.1-2.65l4.1-4.1c.63-.63 1.77-1.1 2.65-1.1h5.8c.89 0 2.03.47 2.65 1.1l4.1 4.1c.63.63 1.1 1.77 1.1 2.65v5.8c0 .89-.47 2.03-1.1 2.65l-4.1 4.1c-.63.63-1.76 1.1-2.65 1.1m-5.8-20c-.49 0-1.25.31-1.59.66l-4.1 4.1c-.34.35-.66 1.1-.66 1.59v5.8c0 .49.31 1.25.66 1.59l4.1 4.1c.35.34 1.1.66 1.59.66h5.8c.49 0 1.25-.31 1.59-.66l4.1-4.1c.34-.35.66-1.1.66-1.59V9.1c0-.49-.31-1.25-.66-1.59l-4.1-4.1c-.35-.34-1.1-.66-1.59-.66z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M4.94 19.83c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L18.55 4.41c.29-.29.77-.29 1.06 0s.29.77 0 1.06L5.47 19.61c-.15.15-.34.22-.53.22"
        }
      )
    ]
  })
);
var Outline_default60 = SvgOutline60;
var SvgTwotone60 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1v5.8c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1C16.54 2.4 15.58 2 14.9 2"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.94 19.08 19.08 4.94",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default60 = SvgTwotone60;
var components60 = {
  bold: Bold_default60,
  broken: Broken_default60,
  bulk: Bulk_default60,
  linear: Linear_default60,
  outline: Outline_default60,
  twotone: Twotone_default60
};
var Forbidden = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components60[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var forbidden_default = Forbidden;
var SvgBold61 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m19.53 5.53-14 14c-.02.02-.03.03-.05.04q-.57-.48-1.05-1.05A9.9 9.9 0 0 1 2 12C2 6.48 6.48 2 12 2c2.49 0 4.77.91 6.52 2.43q.57.48 1.05 1.05c-.01.02-.02.03-.04.05M22 12c0 5.49-4.51 10-10 10-1.5 0-2.92-.33-4.2-.93-.62-.29-.74-1.12-.26-1.61L19.46 7.54c.48-.48 1.32-.36 1.61.26.6 1.27.93 2.7.93 4.2"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21.77 2.23c-.3-.3-.79-.3-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01L21.77 3.31c.31-.3.31-.78 0-1.08"
        }
      )
    ]
  })
);
var Bold_default61 = SvgBold61;
var SvgBroken61 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "m18.9 5-14 14"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
        }
      )
    ]
  })
);
var Broken_default61 = SvgBroken61;
var SvgBulk61 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m19.53 5.53-14 14c-.02.02-.03.03-.05.04q-.57-.48-1.05-1.05A9.9 9.9 0 0 1 2 12C2 6.48 6.48 2 12 2c2.49 0 4.77.91 6.52 2.43q.57.48 1.05 1.05c-.01.02-.02.03-.04.05M22 12c0 5.52-4.48 10-10 10-1.99 0-3.84-.58-5.4-1.6L20.4 6.6A9.8 9.8 0 0 1 22 12",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21.77 2.23c-.3-.3-.79-.3-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01L21.77 3.31c.31-.3.31-.78 0-1.08"
        }
      )
    ]
  })
);
var Bulk_default61 = SvgBulk61;
var SvgLinear61 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
        d: "M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10M18.9 5l-14 14"
      }
    )
  })
);
var Linear_default61 = SvgLinear61;
var SvgOutline61 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M4.9 19.75c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l14-14c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-14 14c-.15.15-.34.22-.53.22"
        }
      )
    ]
  })
);
var Outline_default61 = SvgOutline61;
var SvgTwotone61 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "m18.9 5-14 14",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default61 = SvgTwotone61;
var components61 = {
  bold: Bold_default61,
  broken: Broken_default61,
  bulk: Bulk_default61,
  linear: Linear_default61,
  outline: Outline_default61,
  twotone: Twotone_default61
};
var Slash = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components61[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var slash_default = Slash;
var SvgBold62 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m21.56 10.74-1.35-1.58c-.25-.3-.46-.86-.46-1.26V6.2c0-1.06-.87-1.93-1.93-1.93h-1.7c-.4 0-.97-.21-1.27-.46l-1.58-1.35c-.69-.59-1.82-.59-2.51 0l-1.6 1.35c-.3.25-.86.46-1.26.46H6.17c-1.06 0-1.93.87-1.93 1.93v1.7c0 .39-.2.95-.45 1.25l-1.35 1.59c-.58.7-.58 1.82 0 2.5l1.35 1.59c.25.29.45.86.45 1.25v1.71c0 1.06.87 1.93 1.93 1.93h1.74c.39 0 .96.21 1.26.46l1.58 1.35c.69.59 1.82.59 2.51 0l1.58-1.35c.3-.25.86-.46 1.26-.46h1.7c1.06 0 1.93-.87 1.93-1.93v-1.7c0-.4.21-.96.46-1.26l1.35-1.58c.61-.68.61-1.81.02-2.51m-6.75 5.5-.98-2.2c-.03 0-.06.02-.09.02h-3.5c-.03 0-.06-.01-.09-.02l-.98 2.2-1.37-.61 3.5-7.88h1.37l3.5 7.88z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("path", { fill: props.color || "currentColor", d: "M10.82 12.56h2.36L12 9.91z" })
    ]
  })
);
var Bold_default62 = SvgBold62;
var SvgBroken62 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.24 6.2c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46l1.58-1.35c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46H6.17c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l.56-.66"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinejoin: "bevel",
          strokeWidth: 1.5,
          d: "M8.5 15.94 12 8.06l3.5 7.88"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.75 13.31h-3.5"
        }
      )
    ]
  })
);
var Broken_default62 = SvgBroken62;
var SvgBulk62 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.75 2.45c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46H6.17c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.45-.86.45-1.25V6.2c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46z",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.81 16.24 12 9.91l-2.81 6.33-1.38-.61 3.5-7.87h1.38l3.5 7.87z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M13.75 14.06h-3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.5c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default62 = SvgBulk62;
var SvgLinear62 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.75 2.45c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46H6.17c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.45-.86.45-1.25V6.2c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinejoin: "bevel",
          strokeWidth: 1.5,
          d: "M8.5 15.94 12 8.06l3.5 7.88"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.75 13.31h-3.5"
        }
      )
    ]
  })
);
var Linear_default62 = SvgLinear62;
var SvgOutline62 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12.01 22.74c-.63 0-1.25-.21-1.74-.63l-1.58-1.35c-.16-.14-.56-.28-.77-.28H6.17a2.68 2.68 0 0 1-2.68-2.68v-1.71c0-.21-.14-.61-.27-.76l-1.36-1.6c-.82-.97-.82-2.49 0-3.47l1.36-1.6c.13-.15.27-.55.27-.76V6.2c0-1.48 1.2-2.68 2.68-2.68H7.9c.21 0 .6-.15.77-.29l1.58-1.35c.98-.83 2.51-.83 3.49 0l1.58 1.35c.16.14.57.28.78.28h1.7c1.48 0 2.68 1.2 2.68 2.68v1.7c0 .21.15.6.29.77l1.35 1.58c.84.99.83 2.52 0 3.49l-1.35 1.58c-.14.17-.28.56-.28.77v1.7c0 1.48-1.2 2.68-2.68 2.68h-1.7c-.21 0-.6.15-.78.29l-1.58 1.35c-.49.43-1.12.64-1.74.64M6.17 5.02c-.65 0-1.18.53-1.18 1.18v1.7c0 .57-.26 1.29-.63 1.73L3 11.23c-.34.41-.34 1.13 0 1.53l1.35 1.59c.36.41.63 1.16.63 1.73v1.71c0 .65.53 1.18 1.18 1.18H7.9c.56 0 1.3.27 1.74.64l1.59 1.36c.41.35 1.12.35 1.54 0l1.58-1.35c.45-.38 1.18-.64 1.74-.64h1.7c.65 0 1.18-.53 1.18-1.18v-1.7c0-.56.27-1.29.64-1.74l1.36-1.59c.35-.41.35-1.13 0-1.54l-1.35-1.58c-.38-.45-.64-1.18-.64-1.74V6.2c0-.65-.53-1.18-1.18-1.18h-1.7c-.57 0-1.31-.27-1.75-.64l-1.59-1.36c-.41-.35-1.12-.35-1.54 0L9.65 4.38c-.45.37-1.18.64-1.75.64z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.81 16.24 12 9.91l-2.81 6.33-1.38-.61 3.5-7.87h1.38l3.5 7.87z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M13.75 14.06h-3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.5c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default62 = SvgOutline62;
var SvgTwotone62 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.75 2.45c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46H6.17c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.45-.86.45-1.25V6.2c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs("g", { stroke: props.color || "currentColor", strokeWidth: 1.5, opacity: 0.4, children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { strokeLinejoin: "bevel", d: "M8.5 15.94 12 8.06l3.5 7.88" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M13.75 13.31h-3.5"
          }
        )
      ] })
    ]
  })
);
var Twotone_default62 = SvgTwotone62;
var components62 = {
  bold: Bold_default62,
  broken: Broken_default62,
  bulk: Bulk_default62,
  linear: Linear_default62,
  outline: Outline_default62,
  twotone: Twotone_default62
};
var AutoBrightness = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components62[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var autoBrightness_default = AutoBrightness;
var SvgBold63 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M18 12.75h-5.25V18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.25V6c0-.41.34-.75.75-.75s.75.34.75.75v5.25H18c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Bold_default63 = SvgBold63;
var SvgBroken63 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M12 18V6M16 12h2M6 12h5.66M12 18V6"
      }
    )
  })
);
var Broken_default63 = SvgBroken63;
var SvgBulk63 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18 11.25h-5.25V6c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5.25H6c-.41 0-.75.34-.75.75s.34.75.75.75h5.25V18c0 .41.34.75.75.75s.75-.34.75-.75v-5.25H18c.41 0 .75-.34.75-.75s-.34-.75-.75-.75"
        }
      )
    ]
  })
);
var Bulk_default63 = SvgBulk63;
var SvgLinear63 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M6 12h12M12 18V6"
      }
    )
  })
);
var Linear_default63 = SvgLinear63;
var SvgOutline63 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 18.75c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75s.75.34.75.75v12c0 .41-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default63 = SvgOutline63;
var SvgTwotone63 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6 12h12",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 18V6"
        }
      )
    ]
  })
);
var Twotone_default63 = SvgTwotone63;
var components63 = {
  bold: Bold_default63,
  broken: Broken_default63,
  bulk: Bulk_default63,
  linear: Linear_default63,
  outline: Outline_default63,
  twotone: Twotone_default63
};
var Add = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components63[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var add_default = Add;
var SvgBold64 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M19.08 15.72c-.59-3.53-3.98-6.4-7.56-6.4-3.89 0-7.31 3.15-7.64 7.03-.13 1.5.35 2.92 1.34 3.99C6.2 21.41 7.58 22 9.08 22h4.68c1.69 0 3.17-.66 4.18-1.85s1.41-2.77 1.14-4.43M10.28 7.86a2.93 2.93 0 1 0 0-5.86 2.93 2.93 0 0 0 0 5.86M16.94 9.03a2.44 2.44 0 1 0 0-4.88 2.44 2.44 0 0 0 0 4.88M20.55 12.93a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9M3.94 10.98a2.44 2.44 0 1 0 0-4.88 2.44 2.44 0 0 0 0 4.88"
      }
    )
  })
);
var Bold_default64 = SvgBold64;
var SvgBroken64 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M4.41 16.75C4.17 19.64 6.35 22 9.25 22h4.79c3.26 0 5.5-2.63 4.96-5.85-.57-3.38-3.83-6.15-7.26-6.15-2.28 0-4.4 1.14-5.77 2.87M10.47 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M17.3 8.7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M21 12.7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M3.97 10.7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      }
    )
  })
);
var Broken_default64 = SvgBroken64;
var SvgBulk64 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M19.08 15.72c-.59-3.53-3.98-6.4-7.56-6.4-3.89 0-7.31 3.15-7.64 7.03-.13 1.5.35 2.92 1.34 3.99C6.2 21.41 7.58 22 9.08 22h4.68c1.69 0 3.17-.66 4.18-1.85s1.41-2.77 1.14-4.43",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.28 7.86a2.93 2.93 0 1 0 0-5.86 2.93 2.93 0 0 0 0 5.86M16.94 9.03a2.44 2.44 0 1 0 0-4.88 2.44 2.44 0 0 0 0 4.88M20.55 12.93a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9M3.94 10.98a2.44 2.44 0 1 0 0-4.88 2.44 2.44 0 0 0 0 4.88"
        }
      )
    ]
  })
);
var Bulk_default64 = SvgBulk64;
var SvgLinear64 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M4.41 16.75C4.17 19.64 6.35 22 9.25 22h4.79c3.26 0 5.5-2.63 4.96-5.85-.57-3.38-3.83-6.15-7.26-6.15-3.72 0-7.02 3.04-7.33 6.75M10.47 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M17.3 8.7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M21 12.7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M3.97 10.7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      }
    )
  })
);
var Linear_default64 = SvgLinear64;
var SvgOutline64 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.04 22.75H9.25c-1.62 0-3.09-.63-4.15-1.79-1.06-1.15-1.57-2.67-1.43-4.28.34-4.1 3.96-7.43 8.08-7.43 3.79 0 7.37 3.04 8 6.77.3 1.78-.14 3.46-1.22 4.74-1.1 1.28-2.69 1.99-4.49 1.99m-2.3-12c-3.35 0-6.3 2.72-6.58 6.06-.1 1.19.27 2.3 1.04 3.14s1.85 1.3 3.04 1.3h4.79c1.35 0 2.54-.52 3.33-1.45s1.11-2.19.89-3.53c-.5-3.04-3.42-5.52-6.51-5.52M10.47 8.25C8.68 8.25 7.22 6.79 7.22 5s1.46-3.25 3.25-3.25S13.72 3.21 13.72 5a3.25 3.25 0 0 1-3.25 3.25m0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.78-1.75-1.75-1.75M17.3 9.45c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75 2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75m0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M21 13.45c-1.24 0-2.25-1.01-2.25-2.25S19.76 8.95 21 8.95s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25m0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M3.97 11.45c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75S6.72 7.18 6.72 8.7s-1.23 2.75-2.75 2.75m0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
        }
      )
    ]
  })
);
var Outline_default64 = SvgOutline64;
var SvgTwotone64 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.41 16.75C4.17 19.64 6.35 22 9.25 22h4.79c3.26 0 5.5-2.63 4.96-5.85-.57-3.38-3.83-6.15-7.26-6.15-3.72 0-7.02 3.04-7.33 6.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.47 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M17.3 8.7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M21 12.7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M3.97 10.7a2 2 0 1 0 0-4 2 2 0 0 0 0 4",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default64 = SvgTwotone64;
var components64 = {
  bold: Bold_default64,
  broken: Broken_default64,
  bulk: Bulk_default64,
  linear: Linear_default64,
  outline: Outline_default64,
  twotone: Twotone_default64
};
var Pet = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components64[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var pet_default = Pet;
var SvgBold65 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "m15.2 7.16-8-3.46v-.95c0-.41-.34-.75-.75-.75s-.75.34-.75.75v18.5c0 .41.34.75.75.75s.75-.34.75-.75v-3.96l8.22-4.06h.01c1.66-.86 2.55-1.97 2.5-3.14s-1.02-2.21-2.73-2.93"
      }
    )
  })
);
var Bold_default65 = SvgBold65;
var SvgBroken65 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
        d: "M6.45 2v20M15.05 7.5c3.3 1.4 3.3 3.8.2 5.4L6.95 17M6.95 4l4.59 1.98"
      }
    )
  })
);
var Broken_default65 = SvgBroken65;
var SvgBulk65 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M6.45 22c-.41 0-.75-.34-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5c0 .41-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m15.2 7.16-8.1-3.5a.36.36 0 0 0-.36.03.37.37 0 0 0-.16.31v13c0 .13.07.25.18.32.06.04.13.06.2.06.06 0 .11-.01.17-.04l8.3-4.1h.01c1.66-.86 2.55-1.97 2.5-3.14-.06-1.18-1.03-2.22-2.74-2.94",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default65 = SvgBulk65;
var SvgLinear65 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
        d: "M6.45 2v20M6.95 4l8.1 3.5c3.3 1.4 3.3 3.8.2 5.4L6.95 17"
      }
    )
  })
);
var Linear_default65 = SvgLinear65;
var SvgOutline65 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M6.45 22.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v20c0 .41-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M6.95 17.75c-.28 0-.54-.15-.67-.42a.75.75 0 0 1 .34-1l8.3-4.1c1.22-.63 1.91-1.39 1.88-2.1-.03-.69-.77-1.4-2.04-1.94l-8.1-3.5a.756.756 0 0 1-.4-.99c.16-.38.61-.56.99-.39l8.1 3.5c2.5 1.06 2.92 2.5 2.95 3.26.05 1.33-.91 2.57-2.7 3.49l-8.31 4.11c-.11.06-.23.08-.34.08"
        }
      )
    ]
  })
);
var Outline_default65 = SvgOutline65;
var SvgTwotone65 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M6.45 2v20"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "m6.95 4 8.1 3.5c3.3 1.4 3.3 3.8.2 5.4L6.95 17",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default65 = SvgTwotone65;
var components65 = {
  bold: Bold_default65,
  broken: Broken_default65,
  bulk: Bulk_default65,
  linear: Linear_default65,
  outline: Outline_default65,
  twotone: Twotone_default65
};
var Flag2 = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components65[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var flag2_default = Flag2;
var SvgBold66 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M11.82 6.9a23 23 0 0 1 8.63-.24A9.98 9.98 0 0 0 12 2C8.89 2 6.11 3.42 4.27 5.65c.44 1.3 1 2.54 1.67 3.72.38.68 1.35.65 1.74-.02a5 5 0 0 1 4.14-2.45M7.72 14.72c-2-2.14-3.56-4.58-4.63-7.28a9.95 9.95 0 0 0 .34 9.64 9.98 9.98 0 0 0 7.1 4.76c.89-1.05 1.67-2.17 2.34-3.34.39-.68-.14-1.49-.92-1.49-1.67.01-3.28-.81-4.23-2.29"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M8.57 12c0 .61.15 1.18.46 1.72a3.44 3.44 0 0 0 2.96 1.71c1.22 0 2.36-.66 2.96-1.71.31-.54.47-1.11.47-1.72 0-1.89-1.54-3.42-3.43-3.42-1.88-.01-3.42 1.53-3.42 3.42"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21.34 8.42a21.5 21.5 0 0 0-4.14-.47c-.79-.01-1.24.85-.85 1.54.4.71.63 1.53.63 2.4 0 .84-.22 1.67-.63 2.41-.94 2.88-2.34 5.44-4.19 7.7 5.45-.09 9.84-4.53 9.84-10 0-1.26-.23-2.47-.66-3.58"
        }
      )
    ]
  })
);
var Bold_default66 = SvgBold66;
var SvgBroken66 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M3.13 16.62A9.99 9.99 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4M21.17 8c-3.02-.66-6.15-.66-9.17 0"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m3.95 6.06.02.06C4.98 9.01 6.53 11.69 8.54 14M10.88 21.94c2.06-2.27 3.61-4.95 4.55-7.86l.03-.08"
        }
      )
    ]
  })
);
var Broken_default66 = SvgBroken66;
var SvgBulk66 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M22 12c0 5.47-4.39 9.91-9.84 10H12c-.61 0-1.21-.06-1.79-.16C5.54 20.99 2 16.91 2 12c0-1.71.43-3.32 1.19-4.73.31-.57.67-1.12 1.08-1.62A10 10 0 0 1 12 2a9.98 9.98 0 0 1 8.45 4.66A9.897 9.897 0 0 1 22 12",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15.1 8.02a21.5 21.5 0 0 1 6.24.4c-.24-.62-.54-1.21-.89-1.76a23 23 0 0 0-8.63.24 5.005 5.005 0 0 0-4.78 4.23c-1.16-1.68-2.1-3.51-2.77-5.48-.41.5-.77 1.05-1.08 1.62 1.06 2.69 2.55 5.09 4.46 7.2.02.02.05.03.07.05a5.01 5.01 0 0 0 4.25 2.38c.61 0 1.2-.12 1.75-.33-.91 1.91-2.07 3.68-3.51 5.27.58.1 1.18.16 1.79.16h.16c1.85-2.26 3.25-4.82 4.19-7.7.41-.74.63-1.57.63-2.41 0-1.57-.74-2.95-1.88-3.87m-.17 5.59a3.42 3.42 0 0 1-2.96 1.71c-1.22 0-2.35-.66-2.96-1.71-.31-.54-.46-1.11-.46-1.72 0-1.89 1.53-3.42 3.42-3.42S15.4 10 15.4 11.89c0 .61-.16 1.18-.47 1.72"
        }
      )
    ]
  })
);
var Bulk_default66 = SvgBulk66;
var SvgLinear66 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4M21.17 8c-3.02-.66-6.15-.66-9.17 0"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m3.95 6.06.02.06C4.98 9.01 6.53 11.69 8.54 14M10.88 21.94c2.06-2.27 3.61-4.95 4.55-7.86l.03-.08"
        }
      )
    ]
  })
);
var Linear_default66 = SvgLinear66;
var SvgOutline66 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 16.75c-2.62 0-4.75-2.13-4.75-4.75S9.38 7.25 12 7.25s4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75m0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25S13.79 8.75 12 8.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21.17 8.75c-.05 0-.11-.01-.16-.02-2.94-.64-5.91-.64-8.85 0-.41.09-.8-.17-.89-.57-.09-.41.17-.8.57-.89 3.15-.69 6.34-.69 9.49 0 .4.09.66.49.57.89a.74.74 0 0 1-.73.59M8.54 14.75c-.21 0-.42-.09-.57-.26a24.8 24.8 0 0 1-4.71-8.12l.69-.31.71-.24.02.06a23.2 23.2 0 0 0 4.43 7.63c.27.31.24.79-.07 1.06-.15.12-.33.18-.5.18M10.88 22.69a.746.746 0 0 1-.55-1.25c2-2.2 3.48-4.75 4.4-7.58.13-.39.57-.65.96-.52s.62.51.5.9c-1.01 3.12-2.6 5.86-4.74 8.22-.16.15-.37.23-.57.23"
        }
      )
    ]
  })
);
var Outline_default66 = SvgOutline66;
var SvgTwotone66 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsxs(
        "g",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          opacity: 0.4,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4M21.17 8c-3.02-.66-6.15-.66-9.17 0" }),
            /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m3.95 6.06.02.06C4.98 9.01 6.53 11.69 8.54 14M10.88 21.94c2.06-2.27 3.61-4.95 4.55-7.86l.03-.08" })
          ]
        }
      )
    ]
  })
);
var Twotone_default66 = SvgTwotone66;
var components66 = {
  bold: Bold_default66,
  broken: Broken_default66,
  bulk: Bulk_default66,
  linear: Linear_default66,
  outline: Outline_default66,
  twotone: Twotone_default66
};
var Chrome = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components66[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var chrome_default = Chrome;
var SvgBold67 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m.59 7.7-5.67 5.67a.75.75 0 0 1-1.06 0l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0s.29.76 0 1.06"
      }
    )
  })
);
var Bold_default67 = SvgBold67;
var SvgBroken67 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2 12.96V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M15 10.38l1.12-1.13"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m7.88 12 2.74 2.75 2.55-2.54"
        }
      )
    ]
  })
);
var Broken_default67 = SvgBroken67;
var SvgBulk67 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.58 15.58a.75.75 0 0 1-.53-.22l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5.67 5.67a.75.75 0 0 1-.53.22"
        }
      )
    ]
  })
);
var Bulk_default67 = SvgBulk67;
var SvgLinear67 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m7.75 12 2.83 2.83 5.67-5.66"
        }
      )
    ]
  })
);
var Linear_default67 = SvgLinear67;
var SvgOutline67 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.58 15.58a.75.75 0 0 1-.53-.22l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5.67 5.67a.75.75 0 0 1-.53.22"
        }
      )
    ]
  })
);
var Outline_default67 = SvgOutline67;
var SvgTwotone67 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m7.75 12 2.83 2.83 5.67-5.66",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default67 = SvgTwotone67;
var components67 = {
  bold: Bold_default67,
  broken: Broken_default67,
  bulk: Bulk_default67,
  linear: Linear_default67,
  outline: Outline_default67,
  twotone: Twotone_default67
};
var TickSquare = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components67[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var tickSquare_default = TickSquare;
var SvgBold68 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m-.83 12.3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.3-2.3-2.3 2.3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.3-2.3-2.3-2.3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 2.3-2.3c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.3 2.3z"
      }
    )
  })
);
var Bold_default68 = SvgBold68;
var SvgBroken68 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "m13.99 10.01.84-.84M9.17 14.83l2.75-2.75M14.83 14.83 9.17 9.17M2 12.96V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      }
    )
  })
);
var Broken_default68 = SvgBroken68;
var SvgBulk68 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m13.06 12 2.3-2.3c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-2.3 2.3-2.3-2.3a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2.3 2.3-2.3 2.3c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.3-2.3 2.3 2.3c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06z"
        }
      )
    ]
  })
);
var Bulk_default68 = SvgBulk68;
var SvgLinear68 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "m9.17 14.83 5.66-5.66M14.83 14.83 9.17 9.17M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
      }
    )
  })
);
var Linear_default68 = SvgLinear68;
var SvgOutline68 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M9.17 15.58c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l5.66-5.66c.29-.29.77-.29 1.06 0s.29.77 0 1.06L9.7 15.36c-.14.15-.34.22-.53.22"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.83 15.58c-.19 0-.38-.07-.53-.22L8.64 9.7a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l5.66 5.66c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
        }
      )
    ]
  })
);
var Outline_default68 = SvgOutline68;
var SvgTwotone68 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "g",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          opacity: 0.4,
          children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "m9.17 14.83 5.66-5.66M14.83 14.83 9.17 9.17" })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      )
    ]
  })
);
var Twotone_default68 = SvgTwotone68;
var components68 = {
  bold: Bold_default68,
  broken: Broken_default68,
  bulk: Bulk_default68,
  linear: Linear_default68,
  outline: Outline_default68,
  twotone: Twotone_default68
};
var CloseSquare = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components68[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var closeSquare_default = CloseSquare;
var SvgBold69 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M17 17.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75m0-4.5H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75m0-4.5H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Bold_default69 = SvgBold69;
var SvgBroken69 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeWidth: 1.5,
        d: "M3 7h18M9.49 12H21M3 12h2.99M3 17h18"
      }
    )
  })
);
var Broken_default69 = SvgBroken69;
var SvgBulk69 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17 8.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75M17 12.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75M17 17.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default69 = SvgBulk69;
var SvgLinear69 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeWidth: 1.5,
        d: "M3 7h18M3 12h18M3 17h18"
      }
    )
  })
);
var Linear_default69 = SvgLinear69;
var SvgOutline69 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M21 7.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75M21 12.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75M21 17.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Outline_default69 = SvgOutline69;
var SvgTwotone69 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeWidth: 1.5,
          d: "M3 7h18"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeWidth: 1.5,
          d: "M3 12h18",
          opacity: 0.34
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeWidth: 1.5,
          d: "M3 17h18"
        }
      )
    ]
  })
);
var Twotone_default69 = SvgTwotone69;
var components69 = {
  bold: Bold_default69,
  broken: Broken_default69,
  bulk: Bulk_default69,
  linear: Linear_default69,
  outline: Outline_default69,
  twotone: Twotone_default69
};
var Menu = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components69[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var menu_default = Menu;
var SvgBold70 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M6 5.12c-.41 0-.75-.34-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75M10 5.12c-.41 0-.75-.34-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75M14 5.12c-.41 0-.75-.34-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75M22.25 13.25c0-2.62-2.03-4.74-4.59-4.96-.74-1.21-2.06-2.03-3.58-2.03H6.71c-2.32 0-4.21 1.89-4.21 4.21V11h15.79v-.53c0-.19-.03-.38-.06-.56 1.45.43 2.52 1.75 2.52 3.34 0 1.57-1.04 2.88-2.46 3.32V12H2.5v5.79C2.5 20.11 4.39 22 6.71 22h7.37c2.2 0 3.99-1.7 4.17-3.86 2.28-.46 4-2.48 4-4.89"
      }
    )
  })
);
var Bold_default70 = SvgBold70;
var SvgBroken70 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M2 13.55v-3.08a4.21 4.21 0 0 1 4.21-4.21h7.37a4.21 4.21 0 0 1 4.21 4.21v7.32A4.21 4.21 0 0 1 13.58 22H6.21C3.89 22 2 20.11 2 17.79M5.5 4V2.25M9.5 4V2.25M13.5 4V2.25M22 13.16c0 2.32-1.89 4.21-4.21 4.21V8.95A4.21 4.21 0 0 1 22 13.16M2 12h15.51"
      }
    )
  })
);
var Broken_default70 = SvgBroken70;
var SvgBulk70 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.79 10.47V12H2v-1.53c0-2.32 1.89-4.21 4.21-4.21h7.37c2.32 0 4.21 1.89 4.21 4.21",
          opacity: 0.6
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.79 12v5.79c0 2.32-1.89 4.21-4.21 4.21H6.21C3.89 22 2 20.11 2 17.79V12z",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M5.5 5.12c-.41 0-.75-.34-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75M9.5 5.12c-.41 0-.75-.34-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75M13.5 5.12c-.41 0-.75-.34-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75M21.65 14.32c0 2.15-1.74 3.89-3.89 3.89v-7.79c2.14 0 3.89 1.75 3.89 3.9"
        }
      )
    ]
  })
);
var Bulk_default70 = SvgBulk70;
var SvgLinear70 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M17.79 10.47v7.32A4.21 4.21 0 0 1 13.58 22H6.21C3.89 22 2 20.11 2 17.79v-7.32a4.21 4.21 0 0 1 4.21-4.21h7.37c2.32 0 4.21 1.89 4.21 4.21M5.5 4V2.25M9.5 4V2.25M13.5 4V2.25M22 13.16c0 2.32-1.89 4.21-4.21 4.21V8.95A4.21 4.21 0 0 1 22 13.16M2 12h15.51"
      }
    )
  })
);
var Linear_default70 = SvgLinear70;
var SvgOutline70 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M13.58 22.75H6.21c-2.74 0-4.96-2.23-4.96-4.96v-7.32c0-2.74 2.23-4.96 4.96-4.96h7.37c2.74 0 4.96 2.23 4.96 4.96v7.32c0 2.73-2.23 4.96-4.96 4.96M6.21 7.01c-1.91 0-3.46 1.55-3.46 3.46v7.32c0 1.91 1.55 3.46 3.46 3.46h7.37c1.91 0 3.46-1.55 3.46-3.46v-7.32c0-1.91-1.55-3.46-3.46-3.46zM5.5 4.75c-.41 0-.75-.34-.75-.75V2.25c0-.41.34-.75.75-.75s.75.34.75.75V4c0 .41-.34.75-.75.75M9.5 4.75c-.41 0-.75-.34-.75-.75V2.25c0-.41.34-.75.75-.75s.75.34.75.75V4c0 .41-.34.75-.75.75M13.5 4.75c-.41 0-.75-.34-.75-.75V2.25c0-.41.34-.75.75-.75s.75.34.75.75V4c0 .41-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.79 18.12c-.41 0-.75-.34-.75-.75V8.95c0-.41.34-.75.75-.75 2.74 0 4.96 2.23 4.96 4.96s-2.23 4.96-4.96 4.96m.75-8.34v6.76a3.464 3.464 0 0 0 0-6.76"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.51 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h15.51c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default70 = SvgOutline70;
var SvgTwotone70 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M17.79 10.47v7.32A4.21 4.21 0 0 1 13.58 22H6.21C3.89 22 2 20.11 2 17.79v-7.32a4.21 4.21 0 0 1 4.21-4.21h7.37c2.32 0 4.21 1.89 4.21 4.21"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.5 4V2.25M9.5 4V2.25M13.5 4V2.25",
          opacity: 0.34
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M22 13.16c0 2.32-1.89 4.21-4.21 4.21V8.95A4.21 4.21 0 0 1 22 13.16"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2 12h15.51",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default70 = SvgTwotone70;
var components70 = {
  bold: Bold_default70,
  broken: Broken_default70,
  bulk: Bulk_default70,
  linear: Linear_default70,
  outline: Outline_default70,
  twotone: Twotone_default70
};
var Coffee = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components70[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var coffee_default = Coffee;
var SvgBold71 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.54 19.04c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-4.95-4.95.53-.53.53-.53 4.95 4.95c.29.29.29.77 0 1.06M6.47 9.28l5.8 5.8c.39.39.39 1.02 0 1.41l-.9.91c-.81.8-2.09.8-2.89 0l-4.34-4.34c-.79-.79-.79-2.08 0-2.88l.91-.91c.39-.38 1.03-.38 1.42.01"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m18.59 10.19-3.81 3.8c-.4.4-1.04.4-1.44 0L7.56 8.21c-.4-.4-.4-1.04 0-1.44l3.81-3.81c.79-.79 2.08-.79 2.88 0l4.34 4.34c.79.8.79 2.08 0 2.89M8 21.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bold_default71 = SvgBold71;
var SvgBroken71 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
        d: "m20.01 18.51-4.95-4.95M18.6 7.2c.78.78.78 2.05 0 2.83l-3.54 3.54M15.06 13.56l-3.54 3.54c-.78.78-2.05.78-2.83 0l-4.24-4.24c-.78-.78-.78-2.05 0-2.83l7.07-7.07c.78-.78 2.05-.78 2.83 0l1.46 1.46M2 21h6M6.56 7.92l7.07 7.07"
      }
    )
  })
);
var Broken_default71 = SvgBroken71;
var SvgBulk71 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.54 19.04c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-4.95-4.95.53-.53.53-.53 4.95 4.95c.29.29.29.77 0 1.06"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m6.47 9.28 5.8 5.8c.39.39.39 1.02 0 1.41l-.9.91c-.81.8-2.09.8-2.89 0l-4.34-4.34c-.79-.79-.79-2.08 0-2.88l.91-.91c.39-.38 1.03-.38 1.42.01",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m18.59 10.19-3.81 3.8c-.4.4-1.04.4-1.44 0L7.57 8.22c-.4-.4-.4-1.04 0-1.44l3.81-3.81c.79-.79 2.08-.79 2.88 0l4.34 4.34c.78.79.78 2.07-.01 2.88M8 21.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default71 = SvgBulk71;
var SvgLinear71 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
        d: "m20.01 18.51-4.95-4.95M15.06 13.56l-3.54 3.54c-.78.78-2.05.78-2.83 0l-4.24-4.24c-.78-.78-.78-2.05 0-2.83l7.07-7.07c.78-.78 2.05-.78 2.83 0l4.24 4.24c.78.78.78 2.05 0 2.83zM2 21h6M6.56 7.92l7.07 7.07"
      }
    )
  })
);
var Linear_default71 = SvgLinear71;
var SvgOutline71 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.01 19.26c-.19 0-.38-.07-.53-.22l-4.95-4.95a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l4.95 4.95c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.11 18.43c-.73 0-1.43-.29-1.94-.81l-4.24-4.24a2.76 2.76 0 0 1 0-3.89L11 2.42a2.76 2.76 0 0 1 3.89 0l4.24 4.24a2.73 2.73 0 0 1 0 3.88l-7.07 7.07c-.52.54-1.21.82-1.95.82m2.83-15.31c-.32 0-.64.12-.88.37l-7.07 7.07a1.25 1.25 0 0 0 0 1.77l4.24 4.24c.47.47 1.29.47 1.77 0l7.07-7.07a1.234 1.234 0 0 0 0-1.76L13.83 3.5a1.22 1.22 0 0 0-.89-.38M8 21.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M13.63 15.74c-.19 0-.38-.07-.53-.22L6.03 8.45a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l7.07 7.07c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22"
        }
      )
    ]
  })
);
var Outline_default71 = SvgOutline71;
var SvgTwotone71 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "m20.01 18.51-4.95-4.95M15.06 13.56l-3.54 3.54c-.78.78-2.05.78-2.83 0l-4.24-4.24c-.78-.78-.78-2.05 0-2.83l7.07-7.07c.78-.78 2.05-.78 2.83 0l4.24 4.24c.78.78.78 2.05 0 2.83z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M2 21h6M6.56 7.92l7.07 7.07",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default71 = SvgTwotone71;
var components71 = {
  bold: Bold_default71,
  broken: Broken_default71,
  bulk: Bulk_default71,
  linear: Linear_default71,
  outline: Outline_default71,
  twotone: Twotone_default71
};
var Judge = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components71[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var judge_default = Judge;
var SvgBold72 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M8.82 4.9 7.54 2.78C7.06 2 6.11 1.56 5.22 1.82c-1.34.4-1.86 1.91-1.19 3.02l1.32 2.17c.15.23.46.31.69.17l2.61-1.59c.24-.15.32-.46.17-.69M19.74 14.21l-2.81-3.8c-.98-1.32-2.68-1.94-4.28-1.51 0-.01-.01-.01-.01-.02l-1.66-2.73c-.3-.47-.92-.62-1.39-.33L6.12 7.93c-.48.28-.63.91-.34 1.39l1.65 2.73s0 .01.01.01a4.05 4.05 0 0 0-.61 4.51l2.08 4.24c.64 1.31 2.15 1.81 3.43 1.15.1-.05.13-.17.07-.27l-1.56-2.58a.765.765 0 0 1 .25-1.05c.36-.21.82-.1 1.05.25l1.57 2.58c.06.09.18.12.27.07l.96-.58c.09-.06.12-.18.07-.27l-1.57-2.58c-.21-.36-.1-.82.25-1.05.37-.21.83-.1 1.05.25l1.57 2.58c.06.09.18.12.27.07l.96-.58c.09-.06.12-.18.07-.27l-1.57-2.58c-.21-.36-.1-.82.25-1.05.37-.21.83-.1 1.05.25l1.58 2.57c.06.09.18.12.27.06 1.16-.83 1.42-2.39.54-3.57"
      }
    )
  })
);
var Bold_default72 = SvgBold72;
var SvgBroken72 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.87 5.67 6.45 7.75 4.89 5.19a2.01 2.01 0 0 1 .67-2.75 2.01 2.01 0 0 1 2.75.67zM9.2 20.44c.66 1.35 2.26 1.82 3.54 1.03l6.43-3.91c1.29-.78 1.6-2.41.71-3.62l-2.77-3.74c-1.2-1.61-3.46-2.16-5.29-1.04l-3.16 1.92a3.98 3.98 0 0 0-1.51 5.18"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m10.757 5.098-5.125 3.12 2.08 3.417 5.125-3.12zM14.31 16.81l1.65 2.71M11.75 18.37l1.65 2.71M16.87 15.25l1.65 2.71"
        }
      )
    ]
  })
);
var Broken_default72 = SvgBroken72;
var SvgBulk72 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M9.83 5.57 6.36 7.68l-1.58-2.6c-.58-.95-.28-2.21.68-2.79.95-.58 2.21-.28 2.79.68zM19.27 17.64l-.01.01-1.3.79-1.3.79-1.3.79-1.3.79-1.3.79h-.01c-1.31.8-2.93.32-3.6-1.05l-2.08-4.24c-.73-1.48-.5-3.28.62-4.51.26-.28.56-.54.91-.75l3.21-1.95c.36-.21.72-.37 1.09-.46 1.6-.44 3.3.18 4.28 1.51l2.81 3.8c.91 1.25.59 2.9-.72 3.69",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12.9 8.66c-.37.09-.73.24-1.09.46L8.6 11.07c-.36.21-.65.47-.91.75-.01 0-.01-.01-.01-.01L6.03 9.08c-.29-.48-.14-1.11.33-1.39l3.47-2.11c.48-.29 1.1-.14 1.39.33l1.66 2.73c.01.01.02.01.02.02M16.66 19.23l-1.3.79-1.67-2.75c-.21-.36-.1-.82.25-1.05.37-.21.83-.1 1.05.25zM14.06 20.82l-1.3.79-1.67-2.75a.765.765 0 0 1 .25-1.05c.36-.21.82-.1 1.05.25zM19.26 17.65l-1.3.79-1.67-2.75c-.21-.36-.1-.82.25-1.05.37-.21.83-.1 1.05.25z"
        }
      )
    ]
  })
);
var Bulk_default72 = SvgBulk72;
var SvgLinear72 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.87 5.67 6.45 7.75 4.89 5.19a2.01 2.01 0 0 1 .67-2.75 2.01 2.01 0 0 1 2.75.67zM11.82 9.16l-3.16 1.92a3.98 3.98 0 0 0-1.51 5.18l2.05 4.18c.66 1.35 2.26 1.82 3.54 1.03l6.43-3.91c1.29-.78 1.6-2.41.71-3.62l-2.77-3.74c-1.2-1.62-3.45-2.16-5.29-1.04"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m10.757 5.098-5.125 3.12 2.08 3.417 5.125-3.12zM14.31 16.81l1.65 2.71M11.75 18.37l1.65 2.71M16.87 15.25l1.65 2.71"
        }
      )
    ]
  })
);
var Linear_default72 = SvgLinear72;
var SvgOutline72 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M6.45 8.5c-.06 0-.12-.01-.18-.02a.76.76 0 0 1-.46-.34L4.25 5.58c-.38-.62-.5-1.36-.32-2.08.17-.71.61-1.32 1.24-1.7.62-.38 1.36-.5 2.08-.32.72.17 1.32.61 1.7 1.24l1.56 2.56c.22.35.1.81-.25 1.03L6.84 8.39c-.12.07-.25.11-.39.11m.14-5.6c-.23 0-.45.06-.64.18a1.256 1.256 0 0 0-.42 1.71L6.7 6.71l2.14-1.3-1.17-1.92c-.17-.28-.45-.48-.77-.56-.11-.02-.21-.03-.31-.03M11.42 22.61c-.3 0-.6-.04-.89-.13-.88-.26-1.59-.86-2-1.71l-2.05-4.18a4.73 4.73 0 0 1 1.79-6.15l3.16-1.92a4.724 4.724 0 0 1 6.29 1.23l2.77 3.74c.56.76.77 1.67.6 2.56s-.71 1.66-1.52 2.15l-6.43 3.91c-.54.33-1.13.5-1.72.5M13.9 9.32c-.58 0-1.16.16-1.7.48l-3.16 1.92a3.24 3.24 0 0 0-1.23 4.21l2.05 4.18c.23.46.61.79 1.08.93s.97.06 1.4-.2l6.43-3.91c.44-.27.73-.68.83-1.16.09-.48-.02-.97-.33-1.38l-2.77-3.74a3.19 3.19 0 0 0-2.6-1.33"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M7.68 12.43c-.06 0-.12-.01-.18-.02a.76.76 0 0 1-.46-.34L4.96 8.65a.75.75 0 0 1 .25-1.03l5.12-3.12c.35-.21.82-.1 1.03.25l2.08 3.42c.1.17.14.37.09.57-.05.19-.17.36-.34.46l-5.12 3.12c-.12.08-.26.11-.39.11M6.63 8.52l1.3 2.14 3.84-2.34-1.3-2.14zM15.96 20.27c-.25 0-.5-.13-.64-.36l-1.65-2.71a.75.75 0 0 1 .25-1.03c.35-.21.82-.1 1.03.25l1.65 2.71a.75.75 0 0 1-.64 1.14M13.4 21.83c-.25 0-.5-.13-.64-.36l-1.65-2.71a.75.75 0 0 1 .25-1.03c.35-.21.82-.1 1.03.25l1.65 2.71a.75.75 0 0 1-.64 1.14M18.52 18.71c-.25 0-.5-.13-.64-.36l-1.65-2.71a.75.75 0 0 1 .25-1.03c.35-.21.82-.1 1.03.25l1.65 2.71a.75.75 0 0 1-.64 1.14"
        }
      )
    ]
  })
);
var Outline_default72 = SvgOutline72;
var SvgTwotone72 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.87 5.67 6.45 7.75 4.89 5.19a2.01 2.01 0 0 1 .67-2.75 2.01 2.01 0 0 1 2.75.67z",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m11.82 9.16-3.16 1.92a3.98 3.98 0 0 0-1.51 5.18l2.05 4.18c.66 1.35 2.26 1.82 3.54 1.03l6.43-3.91c1.29-.78 1.6-2.41.71-3.62l-2.77-3.74c-1.2-1.62-3.45-2.16-5.29-1.04M10.757 5.098l-5.125 3.12 2.08 3.417 5.125-3.12z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m14.31 16.81 1.65 2.71M11.75 18.37l1.65 2.71M16.87 15.25l1.65 2.71",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default72 = SvgTwotone72;
var components72 = {
  bold: Bold_default72,
  broken: Broken_default72,
  bulk: Bulk_default72,
  linear: Linear_default72,
  outline: Outline_default72,
  twotone: Twotone_default72
};
var Broom = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components72[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var broom_default = Broom;
var SvgBold73 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M20.95 4.13 4.13 20.95c.95.69 2.19 1.05 3.68 1.05h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-1.49-.36-2.73-1.05-3.68M18.5 16.25h-1.69V18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.75H13.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.81V13c0-.41.34-.75.75-.75s.75.34.75.75v1.75h1.69c.41 0 .75.34.75.75s-.34.75-.75.75M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38c0 1.49.36 2.73 1.05 3.68L19.87 3.05C18.92 2.36 17.68 2 16.19 2M10.5 8.25h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Bold_default73 = SvgBold73;
var SvgBroken73 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.97 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7M19.72 3.25 3.27 19.7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M16.06 18v-5M18.5 15.5h-5M10.5 7.5h-5"
        }
      )
    ]
  })
);
var Broken_default73 = SvgBroken73;
var SvgBulk73 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M22 7.81v8.38c0 3.64-2.17 5.81-5.81 5.81H7.81c-1.49 0-2.73-.36-3.68-1.05-.42-.29-.79-.66-1.08-1.08C2.36 18.92 2 17.68 2 16.19V7.81C2 4.17 4.17 2 7.81 2h8.38c1.49 0 2.73.36 3.68 1.05.42.29.79.66 1.08 1.08.69.95 1.05 2.19 1.05 3.68",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.95 4.13 4.13 20.95c-.42-.29-.79-.66-1.08-1.08L19.87 3.05c.42.29.79.66 1.08 1.08M18.5 14.75h-1.69V13c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.75H13.5c-.41 0-.75.34-.75.75s.34.75.75.75h1.81V18c0 .41.34.75.75.75s.75-.34.75-.75v-1.75h1.69c.41 0 .75-.34.75-.75s-.34-.75-.75-.75M10.5 8.25h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default73 = SvgBulk73;
var SvgLinear73 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7M19.72 3.25 3.27 19.7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M16.06 18v-5M18.5 15.5h-5M10.5 7.5h-5"
        }
      )
    ]
  })
);
var Linear_default73 = SvgLinear73;
var SvgOutline73 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.97 22.75h-6c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.31 7.75-7.75 7.75m-6-20C4.36 2.75 2.72 4.39 2.72 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M3.27 20.45c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L19.19 2.72c.29-.29.77-.29 1.06 0s.29.77 0 1.06L3.8 20.23a.7.7 0 0 1-.53.22M16.06 18.75c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18.5 16.25h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75M10.5 8.25h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default73 = SvgOutline73;
var SvgTwotone73 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7M19.72 3.25 3.27 19.7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "g",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          opacity: 0.4,
          children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.06 18v-5M18.5 15.5h-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M10.5 7.5h-5",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default73 = SvgTwotone73;
var components73 = {
  bold: Bold_default73,
  broken: Broken_default73,
  bulk: Bulk_default73,
  linear: Linear_default73,
  outline: Outline_default73,
  twotone: Twotone_default73
};
var Computing = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components73[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var computing_default = Computing;
var SvgBold74 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.88 10c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.82 1.38 2.33 2.3 4.06 2.3s3.24-.93 4.06-2.3c.44-.71.69-1.56.69-2.45 0-2.62-2.12-4.75-4.75-4.75m1.8 6.52c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.72-.72-.75.75c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.75-.75-.72-.73a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.72.72.7-.7c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.7.7.72.73c.3.29.3.77 0 1.06"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.58 4.02v2.22c0 .81-.5 1.82-1 2.33l-.18.16c-.14.13-.35.16-.53.1-.2-.07-.4-.12-.6-.17-.44-.11-.91-.16-1.39-.16-3.45 0-6.25 2.8-6.25 6.25 0 1.14.31 2.26.9 3.22.5.84 1.2 1.54 1.96 2.01.23.15.32.47.12.65-.07.06-.14.11-.21.16l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.32 8.47c-.5-.51-.9-1.42-.9-2.02V4.12c0-1.21.9-2.12 1.99-2.12h13.18c1.09 0 1.99.91 1.99 2.02"
        }
      )
    ]
  })
);
var Bold_default74 = SvgBold74;
var SvgBroken74 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M21.63 14.75c0 .89-.25 1.73-.69 2.45a4.71 4.71 0 0 1-4.06 2.3 4.73 4.73 0 0 1-4.06-2.3 4.66 4.66 0 0 1-.69-2.45c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75M18.15 15.99l-2.51-2.51M18.13 13.51l-2.51 2.51"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M5.33 2h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.4 4.4 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02"
        }
      )
    ]
  })
);
var Broken_default74 = SvgBroken74;
var SvgBulk74 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M5.41 2h13.17c1.1 0 2 .91 2 2.02v2.22c0 .81-.5 1.82-1 2.32l-4.29 3.84c-.6.51-1 1.52-1 2.32v4.34c0 .61-.4 1.41-.9 1.72L12 21.7c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.32 8.47c-.5-.51-.9-1.41-.9-2.02V4.13c0-1.22.9-2.13 1.99-2.13",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.88 10c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.82 1.38 2.33 2.3 4.06 2.3s3.24-.93 4.06-2.3c.44-.71.69-1.56.69-2.45 0-2.62-2.12-4.75-4.75-4.75m1.8 6.52c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.72-.72-.75.75c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.75-.75-.72-.73a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.72.72.7-.7c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.7.7.72.73c.3.29.3.77 0 1.06"
        }
      )
    ]
  })
);
var Bulk_default74 = SvgBulk74;
var SvgLinear74 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M13.41 20.79 12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.22 8.47c-.51-.51-.91-1.41-.91-2.02V4.13c0-1.21.91-2.12 2.02-2.12h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M21.63 14.75c0 .89-.25 1.73-.69 2.45a4.71 4.71 0 0 1-4.06 2.3 4.73 4.73 0 0 1-4.06-2.3 4.66 4.66 0 0 1-.69-2.45c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75M18.15 15.99l-2.51-2.51M18.13 13.51l-2.51 2.51"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M20.69 4.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.4 4.4 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02V4.12C3.31 2.91 4.22 2 5.33 2h13.34c1.11 0 2.02.91 2.02 2.02"
        }
      )
    ]
  })
);
var Linear_default74 = SvgLinear74;
var SvgOutline74 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.93 22.75c-.48 0-.96-.12-1.4-.37-.89-.5-1.42-1.39-1.42-2.4v-5.35c0-.51-.33-1.26-.64-1.65l-3.8-3.99c-.63-.63-1.12-1.73-1.12-2.54V4.13c0-1.61 1.22-2.87 2.77-2.87h13.33a2.77 2.77 0 0 1 2.77 2.77v2.22c0 1.05-.63 2.26-1.23 2.85-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06c.37-.37.79-1.2.79-1.79V4.03c0-.7-.57-1.27-1.27-1.27H5.33c-.71 0-1.27.6-1.27 1.37v2.32c0 .37.3 1.1.69 1.49l3.85 4.05c.51.63 1.01 1.69 1.01 2.64v5.35c0 .66.45.98.65 1.09.43.24.94.23 1.34-.01l1.4-.9c.35-.22.81-.12 1.04.23.22.35.12.81-.23 1.04l-1.41.91c-.45.27-.96.41-1.47.41"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.88 20.25c-1.92 0-3.73-1.02-4.71-2.67-.52-.84-.79-1.82-.79-2.83 0-3.03 2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5c0 1.01-.28 1.99-.8 2.84-.97 1.64-2.77 2.66-4.7 2.66m0-9.5c-2.21 0-4 1.79-4 4 0 .73.2 1.44.58 2.05a4 4 0 0 0 3.42 1.95c1.42 0 2.7-.72 3.42-1.94.38-.62.58-1.33.58-2.06 0-2.21-1.79-4-4-4"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18.15 16.74c-.19 0-.38-.07-.53-.22l-2.51-2.51a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.51 2.51c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15.62 16.77c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.51-2.51c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2.51 2.51c-.15.15-.34.22-.53.22"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.93 22.75c-.48 0-.96-.12-1.39-.36-.89-.5-1.42-1.4-1.42-2.41v-5.35c0-.5-.33-1.26-.65-1.65l-3.8-3.99c-.63-.65-1.12-1.74-1.12-2.54V4.12c0-1.61 1.22-2.87 2.77-2.87h13.34a2.77 2.77 0 0 1 2.77 2.77v2.22c0 1.05-.62 2.23-1.22 2.85l-1.8 1.59c-.18.16-.44.22-.67.17-.27-.07-.56-.1-.86-.1-2.21 0-4 1.79-4 4 0 .73.2 1.44.58 2.06.32.53.75.97 1.25 1.28.22.14.36.38.36.64v.34c0 .79-.48 1.9-1.28 2.37l-1.38.89c-.45.28-.97.42-1.48.42m-5.6-20c-.71 0-1.27.6-1.27 1.37v2.33c0 .36.3 1.1.7 1.5L8.61 12c.51.63 1.02 1.7 1.02 2.64v5.35c0 .66.46.99.65 1.1.43.24.94.23 1.33-.01l1.4-.9c.27-.16.54-.67.56-1.03-.55-.41-1.03-.94-1.39-1.54-.52-.85-.8-1.83-.8-2.83a5.51 5.51 0 0 1 6.32-5.44l1.48-1.31c.34-.35.76-1.18.76-1.77V4.04c0-.7-.57-1.27-1.27-1.27H5.33z"
        }
      )
    ]
  })
);
var Outline_default74 = SvgOutline74;
var SvgTwotone74 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M21.63 14.75c0 .89-.25 1.73-.69 2.45a4.71 4.71 0 0 1-4.06 2.3 4.73 4.73 0 0 1-4.06-2.3 4.66 4.66 0 0 1-.69-2.45c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75M18.15 15.99l-2.51-2.51M18.13 13.51l-2.51 2.51"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M20.69 4.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.4 4.4 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02V4.12C3.31 2.91 4.22 2 5.33 2h13.34c1.11 0 2.02.91 2.02 2.02",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default74 = SvgTwotone74;
var components74 = {
  bold: Bold_default74,
  broken: Broken_default74,
  bulk: Bulk_default74,
  linear: Linear_default74,
  outline: Outline_default74,
  twotone: Twotone_default74
};
var FilterRemove = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components74[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var filterRemove_default = FilterRemove;
var SvgBold75 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 12.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5"
      }
    )
  })
);
var Bold_default75 = SvgBold75;
var SvgBroken75 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
        }
      )
    ]
  })
);
var Broken_default75 = SvgBroken75;
var SvgBulk75 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("path", { fill: props.color || "currentColor", d: "M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" })
    ]
  })
);
var Bulk_default75 = SvgBulk75;
var SvgLinear75 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        }
      )
    ]
  })
);
var Linear_default75 = SvgLinear75;
var SvgOutline75 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 14.75c-1.52 0-2.75-1.23-2.75-2.75S10.48 9.25 12 9.25s2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75m0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
        }
      )
    ]
  })
);
var Outline_default75 = SvgOutline75;
var SvgTwotone75 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default75 = SvgTwotone75;
var components75 = {
  bold: Bold_default75,
  broken: Broken_default75,
  bulk: Bulk_default75,
  linear: Linear_default75,
  outline: Outline_default75,
  twotone: Twotone_default75
};
var Cd = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components75[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var cd_default = Cd;
var SvgBold76 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M21.97 18v1c0 1.65 0 3-3 3h-14c-3 0-3-1.35-3-3v-1c0-.55.45-1 1-1h18c.55 0 1 .45 1 1M14.41 5.18c.05-.2.08-.39.09-.6.03-1.16-.68-2.18-1.8-2.48a2.506 2.506 0 0 0-3.11 3.08A8 8 0 0 0 3.27 13v1.5c0 .55.45 1 1 1h15.45c.55 0 1-.45 1-1V13c0-3.84-2.7-7.04-6.31-7.82m.59 6.57H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Bold_default76 = SvgBold76;
var SvgBroken76 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M18.97 22h-14c-3 0-3-1.35-3-3v-1c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v1c0 1.65 0 3-3 3M4.62 8.56A8.02 8.02 0 0 1 11.27 5h1.45c.58 0 1.15.06 1.69.18 3.61.78 6.31 3.98 6.31 7.82v4H3.27v-4"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M14.5 4.5c0 .24-.03.46-.09.68-.54-.12-1.11-.18-1.69-.18h-1.45q-.87 0-1.68.18c-.06-.22-.09-.44-.09-.68a2.5 2.5 0 0 1 5 0M15 11H9"
        }
      )
    ]
  })
);
var Broken_default76 = SvgBroken76;
var SvgBulk76 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21.97 18v1c0 1.65 0 3-3 3h-14c-3 0-3-1.35-3-3v-1c0-.55.45-1 1-1h18c.55 0 1 .45 1 1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.72 13v4H3.27v-4a8 8 0 0 1 8-8h1.45c.58 0 1.15.06 1.69.18 3.61.78 6.31 3.98 6.31 7.82",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.5 4.5c0 .24-.03.46-.09.68-.54-.12-1.11-.18-1.69-.18h-1.45q-.87 0-1.68.18c-.06-.22-.09-.44-.09-.68a2.5 2.5 0 0 1 5 0M15 11.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default76 = SvgBulk76;
var SvgLinear76 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M18.97 22h-14c-3 0-3-1.35-3-3v-1c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v1c0 1.65 0 3-3 3M20.72 13v4H3.27v-4a8 8 0 0 1 8-8h1.45c.58 0 1.15.06 1.69.18 3.61.78 6.31 3.98 6.31 7.82"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M14.5 4.5c0 .24-.03.46-.09.68-.54-.12-1.11-.18-1.69-.18h-1.45q-.87 0-1.68.18c-.06-.22-.09-.44-.09-.68a2.5 2.5 0 0 1 5 0M15 11H9"
        }
      )
    ]
  })
);
var Linear_default76 = SvgLinear76;
var SvgOutline76 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18.97 22.75h-14c-3.75 0-3.75-2.08-3.75-3.75v-1c0-.96.79-1.75 1.75-1.75h18c.96 0 1.75.79 1.75 1.75v1c0 1.67 0 3.75-3.75 3.75m-16-5c-.14 0-.25.11-.25.25v1c0 1.64 0 2.25 2.25 2.25h14c2.25 0 2.25-.61 2.25-2.25v-1c0-.14-.11-.25-.25-.25z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.72 17.75H3.27c-.41 0-.75-.34-.75-.75v-4c0-4.1 2.91-7.7 6.91-8.55.59-.13 1.21-.2 1.84-.2h1.45c.64 0 1.26.07 1.85.2 4 .86 6.9 4.46 6.9 8.55v4c0 .41-.33.75-.75.75m-16.7-1.5h15.95V13c0-3.39-2.4-6.37-5.72-7.09-.49-.11-1-.16-1.53-.16h-1.45c-.52 0-1.03.05-1.52.16C6.43 6.62 4.02 9.6 4.02 13z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M9.59 5.93c-.33 0-.63-.22-.72-.55A3.256 3.256 0 0 1 12 1.25a3.256 3.256 0 0 1 3.13 4.13c-.1.38-.48.62-.88.53-.49-.11-1-.16-1.53-.16h-1.45c-.52 0-1.03.05-1.52.16-.05.01-.1.02-.16.02m1.68-1.68h1.45c.34 0 .69.02 1.02.06-.09-.88-.84-1.56-1.74-1.56s-1.64.68-1.74 1.56c.34-.04.67-.06 1.01-.06M15 11.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default76 = SvgOutline76;
var SvgTwotone76 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M18.97 22h-14c-3 0-3-1.35-3-3v-1c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v1c0 1.65 0 3-3 3M20.72 13v4H3.27v-4a8 8 0 0 1 8-8h1.45c.58 0 1.15.06 1.69.18 3.61.78 6.31 3.98 6.31 7.82"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M14.5 4.5c0 .24-.03.46-.09.68-.54-.12-1.11-.18-1.69-.18h-1.45q-.87 0-1.68.18c-.06-.22-.09-.44-.09-.68a2.5 2.5 0 0 1 5 0M15 11H9",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default76 = SvgTwotone76;
var components76 = {
  bold: Bold_default76,
  broken: Broken_default76,
  bulk: Bulk_default76,
  linear: Linear_default76,
  outline: Outline_default76,
  twotone: Twotone_default76
};
var Reserve = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components76[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var reserve_default = Reserve;
var SvgBold77 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "m20.86 8.37-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01L3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91M12 15.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5"
      }
    )
  })
);
var Bold_default77 = SvgBold77;
var SvgBroken77 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M3.36 19.24c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01L3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l.68 4.09"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 10.5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 2.5-2.5"
        }
      )
    ]
  })
);
var Broken_default77 = SvgBroken77;
var SvgBulk77 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx("path", { fill: props.color || "currentColor", d: "M12 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" })
    ]
  })
);
var Bulk_default77 = SvgBulk77;
var SvgLinear77 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
        }
      )
    ]
  })
);
var Linear_default77 = SvgLinear77;
var SvgOutline77 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.6 22.56H6.4c-1.82 0-3.48-1.4-3.78-3.2L1.29 11.4c-.21-1.24.39-2.83 1.38-3.62L9.6 2.23c1.34-1.08 3.45-1.07 4.8.01l6.93 5.54c.98.79 1.58 2.38 1.38 3.62l-1.33 7.96c-.3 1.77-1.99 3.2-3.78 3.2M11.99 2.94c-.53 0-1.06.16-1.45.47L3.61 8.96c-.57.46-.96 1.48-.84 2.2l1.33 7.96c.18 1.05 1.23 1.94 2.3 1.94h11.2c1.07 0 2.12-.89 2.3-1.95l1.33-7.96c.12-.72-.28-1.75-.84-2.2l-6.93-5.54c-.4-.31-.93-.47-1.47-.47"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 16.25c-1.79 0-3.25-1.46-3.25-3.25S10.21 9.75 12 9.75s3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25m0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.79-1.75-1.75-1.75"
        }
      )
    ]
  })
);
var Outline_default77 = SvgOutline77;
var SvgTwotone77 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default77 = SvgTwotone77;
var components77 = {
  bold: Bold_default77,
  broken: Broken_default77,
  bulk: Bulk_default77,
  linear: Linear_default77,
  outline: Outline_default77,
  twotone: Twotone_default77
};
var Home3 = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components77[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var home3_default = Home3;
var SvgBold78 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M8.5 6.38c1.03 0 1.88.84 1.88 1.88s-.84 1.88-1.88 1.88-1.88-.86-1.88-1.89.85-1.87 1.88-1.87m3.5 12.7c-2.69 0-4.88-2.19-4.88-4.88 0-.7.57-1.28 1.27-1.28h7.2c.7 0 1.27.57 1.27 1.28.02 2.69-2.17 4.88-4.86 4.88m3.5-8.96c-1.03 0-1.88-.84-1.88-1.88s.84-1.88 1.88-1.88 1.88.84 1.88 1.88-.85 1.88-1.88 1.88"
      }
    )
  })
);
var Bold_default78 = SvgBold78;
var SvgBroken78 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2 12.96V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M15.5 9.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M8.5 9.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M8.4 13.3h7.2c.5 0 .9.4.9.9 0 2.49-2.01 4.5-4.5 4.5s-4.5-2.01-4.5-4.5c0-.5.4-.9.9-.9"
        }
      )
    ]
  })
);
var Broken_default78 = SvgBroken78;
var SvgBulk78 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15.5 10.13a1.88 1.88 0 1 0 0-3.76 1.88 1.88 0 0 0 0 3.76M8.5 10.13a1.88 1.88 0 1 0 0-3.76 1.88 1.88 0 0 0 0 3.76M15.6 12.92H8.4c-.7 0-1.27.57-1.27 1.28 0 2.69 2.19 4.88 4.88 4.88s4.88-2.19 4.88-4.88c-.01-.7-.59-1.28-1.29-1.28"
        }
      )
    ]
  })
);
var Bulk_default78 = SvgBulk78;
var SvgLinear78 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M15.5 9.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M8.5 9.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M8.4 13.3h7.2c.5 0 .9.4.9.9 0 2.49-2.01 4.5-4.5 4.5s-4.5-2.01-4.5-4.5c0-.5.4-.9.9-.9"
        }
      )
    ]
  })
);
var Linear_default78 = SvgLinear78;
var SvgOutline78 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15.5 10.5c-1.24 0-2.25-1.01-2.25-2.25S14.26 6 15.5 6s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25m0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75M8.5 10.5c-1.24 0-2.25-1.01-2.25-2.25S7.26 6 8.5 6s2.25 1.01 2.25 2.25S9.74 10.5 8.5 10.5m0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75M12 19.45c-2.9 0-5.25-2.36-5.25-5.25 0-.91.74-1.65 1.65-1.65h7.2c.91 0 1.65.74 1.65 1.65 0 2.89-2.35 5.25-5.25 5.25m-3.6-5.4c-.08 0-.15.07-.15.15 0 2.07 1.68 3.75 3.75 3.75s3.75-1.68 3.75-3.75c0-.08-.07-.15-.15-.15z"
        }
      )
    ]
  })
);
var Outline_default78 = SvgOutline78;
var SvgTwotone78 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M15.5 9.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M8.5 9.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M8.4 13.3h7.2c.5 0 .9.4.9.9 0 2.49-2.01 4.5-4.5 4.5s-4.5-2.01-4.5-4.5c0-.5.4-.9.9-.9",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default78 = SvgTwotone78;
var components78 = {
  bold: Bold_default78,
  broken: Broken_default78,
  bulk: Bulk_default78,
  linear: Linear_default78,
  outline: Outline_default78,
  twotone: Twotone_default78
};
var EmojiHappy = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components78[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var emojiHappy_default = EmojiHappy;
var SvgBold79 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7 12.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75m5 1.5c-1.24 0-2.25-1.01-2.25-2.25S10.76 9.75 12 9.75s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25m7-1.5h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Bold_default79 = SvgBold79;
var SvgBroken79 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M2.2 14.02A9.99 9.99 0 0 0 12 22c4.82 0 8.84-3.41 9.79-7.95M7.49 3.07C4.81 4.43 2.82 6.96 2.21 9.98M21.81 10.06C20.91 5.46 16.86 2 12 2M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      }
    )
  })
);
var Broken_default79 = SvgBroken79;
var SvgBulk79 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5M7 12.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75M19 12.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default79 = SvgBulk79;
var SvgLinear79 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M2.2 14.02A9.99 9.99 0 0 0 12 22c4.82 0 8.84-3.41 9.79-7.95M21.81 10.06C20.91 5.46 16.86 2 12 2 7.17 2 3.14 5.43 2.2 9.98M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      }
    )
  })
);
var Linear_default79 = SvgLinear79;
var SvgOutline79 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.75c-5.08 0-9.51-3.61-10.53-8.58a.76.76 0 0 1 .58-.89c.41-.08.8.18.89.58.88 4.28 4.69 7.39 9.06 7.39 4.36 0 8.17-3.09 9.06-7.35a.74.74 0 0 1 .89-.58c.41.08.67.48.58.89-1.04 4.94-5.46 8.54-10.53 8.54M21.81 10.81c-.35 0-.66-.25-.73-.61-.85-4.32-4.67-7.46-9.08-7.46-4.38 0-8.19 3.11-9.06 7.39-.08.41-.48.66-.89.58a.74.74 0 0 1-.58-.89C2.49 4.85 6.92 1.24 12 1.24c5.13 0 9.56 3.65 10.55 8.67.08.41-.19.8-.59.88-.05.02-.1.02-.15.02"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 14.25c-1.24 0-2.25-1.01-2.25-2.25S10.76 9.75 12 9.75s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25m0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75"
        }
      )
    ]
  })
);
var Outline_default79 = SvgOutline79;
var SvgTwotone79 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2.2 14.02A9.99 9.99 0 0 0 12 22c4.82 0 8.84-3.41 9.79-7.95M21.81 10.06C20.91 5.46 16.86 2 12 2 7.17 2 3.14 5.43 2.2 9.98"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default79 = SvgTwotone79;
var components79 = {
  bold: Bold_default79,
  broken: Broken_default79,
  bulk: Bulk_default79,
  linear: Linear_default79,
  outline: Outline_default79,
  twotone: Twotone_default79
};
var Level = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components79[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var level_default = Level;
var SvgBold80 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m4 10.75h-3.25V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V8c0-.41.34-.75.75-.75s.75.34.75.75v3.25H16c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Bold_default80 = SvgBold80;
var SvgBroken80 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M12 16V8M14.99 12H16M8 12h3.81M12 16V8M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
      }
    )
  })
);
var Broken_default80 = SvgBroken80;
var SvgBulk80 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16 11.25h-3.25V8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3.25H8c-.41 0-.75.34-.75.75s.34.75.75.75h3.25V16c0 .41.34.75.75.75s.75-.34.75-.75v-3.25H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75"
        }
      )
    ]
  })
);
var Bulk_default80 = SvgBulk80;
var SvgLinear80 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10M8 12h8M12 16V8"
      }
    )
  })
);
var Linear_default80 = SvgLinear80;
var SvgOutline80 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 16.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v8c0 .41-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default80 = SvgOutline80;
var SvgTwotone80 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "g",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          opacity: 0.4,
          children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8 12h8M12 16V8" })
        }
      )
    ]
  })
);
var Twotone_default80 = SvgTwotone80;
var components80 = {
  bold: Bold_default80,
  broken: Broken_default80,
  bulk: Bulk_default80,
  linear: Linear_default80,
  outline: Outline_default80,
  twotone: Twotone_default80
};
var AddCircle = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components80[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var addCircle_default = AddCircle;
var SvgBold81 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M20.6 4.1v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3V19c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-.47-.49a.995.995 0 0 1-.12-1.22l5.12-8.22c.18-.29.5-.47.85-.47h5.12c1.1 0 2 .9 2 2M10.35 3.63 6.8 9.32c-.34.55-1.12.63-1.57.16L4.3 8.5c-.5-.5-.9-1.4-.9-2V4.2c0-1.2.9-2.1 2-2.1h4.1c.78 0 1.26.86.85 1.53"
      }
    )
  })
);
var Bold_default81 = SvgBold81;
var SvgBroken81 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
        d: "M18.6 2.1c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3V19c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2V4.2c0-1.2.9-2.1 2-2.1h9M10.93 2.1 6 10"
      }
    )
  })
);
var Broken_default81 = SvgBroken81;
var SvgBulk81 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.6 4.1v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3V19c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-1-1.05 5.82-9.35h5.68c1.1 0 2 .9 2 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m11.3 2.1-5.18 8.31L4.3 8.5c-.5-.5-.9-1.4-.9-2V4.2c0-1.2.9-2.1 2-2.1z"
        }
      )
    ]
  })
);
var Bulk_default81 = SvgBulk81;
var SvgLinear81 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
        d: "M5.4 2.1h13.2c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3V19c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2V4.2c0-1.2.9-2.1 2-2.1M10.93 2.1 6 10"
      }
    )
  })
);
var Linear_default81 = SvgLinear81;
var SvgOutline81 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.94 22.65c-.48 0-.95-.12-1.39-.36a2.7 2.7 0 0 1-1.41-2.38v-5.3c0-.5-.33-1.25-.64-1.63L3.76 9.02c-.63-.63-1.11-1.71-1.11-2.52V4.2c0-1.6 1.21-2.85 2.75-2.85h13.2c1.52 0 2.75 1.23 2.75 2.75v2.2c0 1.05-.63 2.24-1.22 2.83l-4.33 3.83c-.42.35-.75 1.12-.75 1.74V19c0 .89-.56 1.92-1.26 2.34l-1.38.89c-.45.28-.96.42-1.47.42M5.4 2.85c-.7 0-1.25.59-1.25 1.35v2.3c0 .37.3 1.09.68 1.47l3.81 4.01c.51.63 1.01 1.68 1.01 2.62v5.3c0 .65.45.97.64 1.07.42.23.93.23 1.32-.01l1.39-.89c.28-.17.56-.71.56-1.07v-4.3c0-1.07.52-2.25 1.27-2.88l4.28-3.79c.34-.34.75-1.15.75-1.74V4.1c0-.69-.56-1.25-1.25-1.25z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M6 10.75a.83.83 0 0 1-.4-.11.76.76 0 0 1-.24-1.04l4.93-7.9a.747.747 0 1 1 1.27.79l-4.93 7.9c-.14.23-.38.36-.63.36"
        }
      )
    ]
  })
);
var Outline_default81 = SvgOutline81;
var SvgTwotone81 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M5.4 2.1h13.2c1.1 0 2 .9 2 2v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3V19c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-3.8-4c-.5-.5-.9-1.4-.9-2V4.2c0-1.2.9-2.1 2-2.1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M10.93 2.1 6 10",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default81 = SvgTwotone81;
var components81 = {
  bold: Bold_default81,
  broken: Broken_default81,
  bulk: Bulk_default81,
  linear: Linear_default81,
  outline: Outline_default81,
  twotone: Twotone_default81
};
var Filter = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components81[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var filter_default = Filter;
var SvgBold82 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M19.11 4.96c-3.91-3.91-10.26-3.91-14.17 0-3.98 3.98-3.91 10.47.2 14.37 3.8 3.59 9.96 3.59 13.76 0 4.12-3.9 4.19-10.39.21-14.37m-2.73 11.69c-1.2 1.14-2.78 1.71-4.36 1.71s-3.16-.57-4.36-1.71a.755.755 0 0 1-.03-1.06c.29-.3.76-.31 1.06-.03 1.83 1.73 4.82 1.74 6.66 0 .3-.28.78-.27 1.06.03.29.3.27.77-.03 1.06"
      }
    )
  })
);
var Bold_default82 = SvgBold82;
var SvgBroken82 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M15.84 16.07c-2.12 2-5.56 2-7.67 0"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
        }
      )
    ]
  })
);
var Broken_default82 = SvgBroken82;
var SvgBulk82 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M19.07 4.95c3.97 3.97 3.9 10.45-.2 14.34-3.79 3.59-9.94 3.59-13.74 0C1.02 15.4.95 8.92 4.93 4.95c3.9-3.91 10.24-3.91 14.14 0",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 18.32c-1.58 0-3.15-.57-4.35-1.7a.755.755 0 0 1-.03-1.06c.29-.3.76-.31 1.06-.03 1.83 1.73 4.81 1.73 6.64 0 .3-.28.78-.27 1.06.03s.27.78-.03 1.06c-1.2 1.13-2.77 1.7-4.35 1.7"
        }
      )
    ]
  })
);
var Bulk_default82 = SvgBulk82;
var SvgLinear82 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M19.07 4.95c3.97 3.97 3.9 10.45-.2 14.34-3.79 3.59-9.94 3.59-13.74 0C1.02 15.4.95 8.92 4.93 4.95c3.9-3.91 10.24-3.91 14.14 0"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M15.84 16.07c-2.12 2-5.56 2-7.67 0"
        }
      )
    ]
  })
);
var Linear_default82 = SvgLinear82;
var SvgOutline82 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.72c-2.67 0-5.35-.96-7.38-2.89-2.13-2.02-3.33-4.74-3.37-7.66-.04-2.93 1.08-5.68 3.15-7.75C8.59.23 15.41.23 19.6 4.42c2.07 2.07 3.19 4.82 3.15 7.75s-1.24 5.65-3.37 7.66c-2.03 1.93-4.71 2.89-7.38 2.89m0-19.94c-2.37 0-4.74.9-6.54 2.7a9.2 9.2 0 0 0-2.71 6.67 9.12 9.12 0 0 0 2.9 6.59c3.5 3.32 9.2 3.31 12.7 0a9.22 9.22 0 0 0 2.9-6.59c.04-2.51-.93-4.89-2.71-6.67A9.22 9.22 0 0 0 12 2.78"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 18.32c-1.58 0-3.15-.57-4.35-1.7a.755.755 0 0 1-.03-1.06c.29-.3.76-.31 1.06-.03 1.83 1.73 4.81 1.73 6.64 0 .3-.28.78-.27 1.06.03s.27.78-.03 1.06c-1.2 1.13-2.77 1.7-4.35 1.7"
        }
      )
    ]
  })
);
var Outline_default82 = SvgOutline82;
var SvgTwotone82 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M19.07 4.95c3.97 3.97 3.9 10.45-.2 14.34-3.79 3.59-9.94 3.59-13.74 0C1.02 15.4.95 8.92 4.93 4.95c3.9-3.91 10.24-3.91 14.14 0"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M15.84 16.07c-2.12 2-5.56 2-7.67 0",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default82 = SvgTwotone82;
var components82 = {
  bold: Bold_default82,
  broken: Broken_default82,
  bulk: Bulk_default82,
  linear: Linear_default82,
  outline: Outline_default82,
  twotone: Twotone_default82
};
var Grammerly = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components82[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var grammerly_default = Grammerly;
var SvgBold83 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "m16.14 2.96-9.03 3c-6.07 2.03-6.07 5.34 0 7.36l2.68.89.89 2.68c2.02 6.07 5.34 6.07 7.36 0l3.01-9.02c1.34-4.05-.86-6.26-4.91-4.91m.32 5.38-3.8 3.82c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.8-3.82c.29-.29.77-.29 1.06 0s.29.77 0 1.06"
      }
    )
  })
);
var Bold_default83 = SvgBold83;
var SvgBroken83 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M15.89 3.49c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.49c-1.9 5.71-5.02 5.71-6.92 0l-.84-2.52-2.52-.84c-5.71-1.9-5.71-5.01 0-6.92L12 4.79M10.11 13.65l3.58-3.59"
      }
    )
  })
);
var Broken_default83 = SvgBroken83;
var SvgBulk83 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m7.11 5.96 9.02-3.01c4.05-1.35 6.25.86 4.91 4.91l-3.01 9.02c-2.02 6.07-5.34 6.07-7.36 0l-.89-2.68-2.68-.89c-6.06-2.01-6.06-5.32.01-7.35",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m12.12 11.63 3.81-3.82zM12.12 12.38c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.8-3.82c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-3.8 3.82c-.15.14-.34.22-.53.22"
        }
      )
    ]
  })
);
var Bulk_default83 = SvgBulk83;
var SvgLinear83 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "m7.4 6.32 8.49-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.49c-1.9 5.71-5.02 5.71-6.92 0l-.84-2.52-2.52-.84c-5.71-1.9-5.71-5.01 0-6.92M10.11 13.65l3.58-3.59"
      }
    )
  })
);
var Linear_default83 = SvgLinear83;
var SvgOutline83 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.22 21.63c-1.18 0-2.85-.83-4.17-4.8l-.72-2.16-2.16-.72c-3.96-1.32-4.79-2.99-4.79-4.17 0-1.17.83-2.85 4.79-4.18l8.49-2.83c2.12-.71 3.89-.5 4.98.58s1.3 2.86.59 4.98l-2.83 8.49c-1.33 3.98-3 4.81-4.18 4.81M7.64 7.03c-2.78.93-3.77 2.03-3.77 2.75s.99 1.82 3.77 2.74l2.52.84c.22.07.4.25.47.47l.84 2.52c.92 2.78 2.03 3.77 2.75 3.77s1.82-.99 2.75-3.77l2.83-8.49c.51-1.54.42-2.8-.23-3.45s-1.91-.73-3.44-.22z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.11 14.4c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.58-3.59c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-3.58 3.59c-.14.15-.34.22-.53.22"
        }
      )
    ]
  })
);
var Outline_default83 = SvgOutline83;
var SvgTwotone83 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m7.4 6.32 8.49-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.49c-1.9 5.71-5.02 5.71-6.92 0l-.84-2.52-2.52-.84c-5.71-1.9-5.71-5.01 0-6.92"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m10.11 13.65 3.58-3.59",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default83 = SvgTwotone83;
var components83 = {
  bold: Bold_default83,
  broken: Broken_default83,
  bulk: Bulk_default83,
  linear: Linear_default83,
  outline: Outline_default83,
  twotone: Twotone_default83
};
var Send2 = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components83[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var send2_default = Send2;
var SvgBold84 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2M8 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1m4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1m4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1"
      }
    )
  })
);
var Bold_default84 = SvgBold84;
var SvgBroken84 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85M15.997 12h.008M11.996 12h.008M7.995 12h.008"
      }
    )
  })
);
var Broken_default84 = SvgBroken84;
var SvgBulk84 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1M16 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1M8 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1"
        }
      )
    ]
  })
);
var Bulk_default84 = SvgBulk84;
var SvgLinear84 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10M15.997 12h.008M11.996 12h.008M7.995 12h.008"
      }
    )
  })
);
var Linear_default84 = SvgLinear84;
var SvgOutline84 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1M16 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1M8 13c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1"
        }
      )
    ]
  })
);
var Outline_default84 = SvgOutline84;
var SvgTwotone84 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M15.997 12h.008M11.996 12h.008M7.995 12h.008",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default84 = SvgTwotone84;
var components84 = {
  bold: Bold_default84,
  broken: Broken_default84,
  bulk: Bulk_default84,
  linear: Linear_default84,
  outline: Outline_default84,
  twotone: Twotone_default84
};
var MoreCircle = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components84[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var moreCircle_default = MoreCircle;
var SvgBold85 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "m20.04 6.82-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13L3.78 6.83c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62V10.6c0-1.35-.87-3.01-1.97-3.78M12.75 18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75z"
      }
    )
  })
);
var Bold_default85 = SvgBold85;
var SvgBroken85 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M22 10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12l-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-3.1M12 17.99v-3"
      }
    )
  })
);
var Broken_default85 = SvgBroken85;
var SvgBulk85 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m20.04 6.82-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13L3.78 6.83c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62V10.6c0-1.35-.87-3.01-1.97-3.78",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default85 = SvgBulk85;
var SvgLinear85 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12M12 17.99v-3"
      }
    )
  })
);
var Linear_default85 = SvgLinear85;
var SvgOutline85 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M17.79 22.75H6.21c-2.74 0-4.96-2.23-4.96-4.97v-7.41c0-1.36.84-3.07 1.92-3.91l5.39-4.2C10.18 1 12.77.94 14.45 2.12l6.18 4.33c1.19.83 2.12 2.61 2.12 4.06v7.28c0 2.73-2.22 4.96-4.96 4.96M9.48 3.44l-5.39 4.2c-.71.56-1.34 1.83-1.34 2.73v7.41a3.47 3.47 0 0 0 3.46 3.47h11.58c1.91 0 3.46-1.55 3.46-3.46v-7.28c0-.96-.69-2.29-1.48-2.83l-6.18-4.33c-1.14-.8-3.02-.76-4.11.09"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default85 = SvgOutline85;
var SvgTwotone85 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 17.99v-3",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default85 = SvgTwotone85;
var components85 = {
  bold: Bold_default85,
  broken: Broken_default85,
  bulk: Bulk_default85,
  linear: Linear_default85,
  outline: Outline_default85,
  twotone: Twotone_default85
};
var Home2 = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components85[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var home2_default = Home2;
var SvgBold86 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M18.07 8.51 9.51 4.23C3.76 1.35 1.4 3.71 4.28 9.46l.87 1.74c.25.51.25 1.1 0 1.61l-.87 1.73c-2.88 5.75-.53 8.11 5.23 5.23l8.56-4.28c3.84-1.92 3.84-5.06 0-6.98m-3.23 4.24h-5.4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.4c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Bold_default86 = SvgBold86;
var SvgBroken86 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M18.07 8.51c3.84 1.92 3.84 5.06 0 6.98l-8.56 4.28c-5.76 2.88-8.11.52-5.23-5.23l.87-1.73c.22-.44.22-1.17 0-1.61l-.87-1.74C1.4 3.71 3.76 1.35 9.51 4.23l4.51 2.26M5.44 12h5.4"
      }
    )
  })
);
var Broken_default86 = SvgBroken86;
var SvgBulk86 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m9.51 4.23 8.56 4.28c3.84 1.92 3.84 5.06 0 6.98l-8.56 4.28c-5.76 2.88-8.11.52-5.23-5.23l.87-1.73c.25-.51.25-1.1 0-1.61l-.87-1.74C1.4 3.71 3.76 1.35 9.51 4.23",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.84 12.75h-5.4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.4c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default86 = SvgBulk86;
var SvgLinear86 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "m9.51 4.23 8.56 4.28c3.84 1.92 3.84 5.06 0 6.98l-8.56 4.28c-5.76 2.88-8.11.52-5.23-5.23l.87-1.73c.22-.44.22-1.17 0-1.61l-.87-1.74C1.4 3.71 3.76 1.35 9.51 4.23M5.44 12h5.4"
      }
    )
  })
);
var Linear_default86 = SvgLinear86;
var SvgOutline86 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M5.41 21.75c-1.12 0-1.83-.38-2.28-.83-.88-.88-1.5-2.75.48-6.72l.87-1.73c.11-.23.11-.71 0-.94L3.61 9.8c-1.99-3.97-1.36-5.85-.48-6.72.87-.88 2.75-1.51 6.71.48l8.56 4.28c2.13 1.06 3.3 2.54 3.3 4.16s-1.17 3.1-3.29 4.16l-8.56 4.28c-1.94.97-3.38 1.31-4.44 1.31m0-18c-.54 0-.96.13-1.22.39-.73.72-.44 2.59.76 4.98l.87 1.74c.32.65.32 1.63 0 2.28l-.87 1.73c-1.2 2.4-1.49 4.26-.76 4.98.72.73 2.59.44 4.99-.76l8.56-4.28c1.57-.78 2.46-1.81 2.46-2.82s-.9-2.04-2.47-2.82L9.17 4.9c-1.52-.76-2.83-1.15-3.76-1.15"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M10.84 12.75h-5.4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.4c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default86 = SvgOutline86;
var SvgTwotone86 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m9.51 4.23 8.56 4.28c3.84 1.92 3.84 5.06 0 6.98l-8.56 4.28c-5.76 2.88-8.11.52-5.23-5.23l.87-1.73c.22-.44.22-1.17 0-1.61l-.87-1.74C1.4 3.71 3.76 1.35 9.51 4.23"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.44 12h5.4",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default86 = SvgTwotone86;
var components86 = {
  bold: Bold_default86,
  broken: Broken_default86,
  bulk: Bulk_default86,
  linear: Linear_default86,
  outline: Outline_default86,
  twotone: Twotone_default86
};
var Send = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components86[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var send_default = Send;
var SvgBold87 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M3 16.5c-.41 0-.75-.34-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75M7.5 19c-.41 0-.75-.34-.75-.75V5.75c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .41-.34.75-.75.75M12 21.5c-.41 0-.75-.34-.75-.75V3.25c0-.41.34-.75.75-.75s.75.34.75.75v17.5c0 .41-.34.75-.75.75M16.5 19c-.41 0-.75-.34-.75-.75V5.75c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .41-.34.75-.75.75M21 16.5c-.41 0-.75-.34-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75"
      }
    )
  })
);
var Bold_default87 = SvgBold87;
var SvgBroken87 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M3 8.25v7.5M7.5 5.75v12.5M12 9.96v10.79M12 3.25v2.72M16.5 5.75v12.5M21 8.25v7.5"
      }
    )
  })
);
var Broken_default87 = SvgBroken87;
var SvgBulk87 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M3 16.5c-.41 0-.75-.34-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M7.5 19c-.41 0-.75-.34-.75-.75V5.75c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .41-.34.75-.75.75",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 21.5c-.41 0-.75-.34-.75-.75V3.25c0-.41.34-.75.75-.75s.75.34.75.75v17.5c0 .41-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.5 19c-.41 0-.75-.34-.75-.75V5.75c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .41-.34.75-.75.75",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21 16.5c-.41 0-.75-.34-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default87 = SvgBulk87;
var SvgLinear87 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M3 8.25v7.5M7.5 5.75v12.5M12 3.25v17.5M16.5 5.75v12.5M21 8.25v7.5"
      }
    )
  })
);
var Linear_default87 = SvgLinear87;
var SvgOutline87 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M3 16.5c-.41 0-.75-.34-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75M7.5 19c-.41 0-.75-.34-.75-.75V5.75c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .41-.34.75-.75.75M12 21.5c-.41 0-.75-.34-.75-.75V3.25c0-.41.34-.75.75-.75s.75.34.75.75v17.5c0 .41-.34.75-.75.75M16.5 19c-.41 0-.75-.34-.75-.75V5.75c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .41-.34.75-.75.75M21 16.5c-.41 0-.75-.34-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75"
      }
    )
  })
);
var Outline_default87 = SvgOutline87;
var SvgTwotone87 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M3 8.25v7.5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 5.75v12.5",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 3.25v17.5"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M16.5 5.75v12.5",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M21 8.25v7.5"
        }
      )
    ]
  })
);
var Twotone_default87 = SvgTwotone87;
var components87 = {
  bold: Bold_default87,
  broken: Broken_default87,
  bulk: Bulk_default87,
  linear: Linear_default87,
  outline: Outline_default87,
  twotone: Twotone_default87
};
var Sound = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components87[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var sound_default = Sound;
var SvgBold88 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m-.75 6c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75zm1.67 8.38c-.05.13-.12.23-.21.33q-.15.135-.33.21c-.12.05-.25.08-.38.08s-.26-.03-.38-.08q-.18-.075-.33-.21c-.09-.1-.16-.2-.21-.33A1 1 0 0 1 11 16c0-.13.03-.26.08-.38q.075-.18.21-.33.15-.135.33-.21a1 1 0 0 1 .76 0q.18.075.33.21.135.15.21.33c.05.12.08.25.08.38s-.03.26-.08.38"
      }
    )
  })
);
var Bold_default88 = SvgBold88;
var SvgBroken88 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M12 8v5M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85M11.995 16h.009"
      }
    )
  })
);
var Broken_default88 = SvgBroken88;
var SvgBulk88 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 13.75c.41 0 .75-.34.75-.75V8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5c0 .41.34.75.75.75M12.92 15.62q-.075-.18-.21-.33-.15-.135-.33-.21a1 1 0 0 0-.76 0q-.18.075-.33.21-.135.15-.21.33c-.05.12-.08.25-.08.38s.03.26.08.38c.05.13.12.23.21.33q.15.135.33.21c.12.05.25.08.38.08s.26-.03.38-.08q.18-.075.33-.21c.09-.1.16-.2.21-.33.05-.12.08-.25.08-.38s-.03-.26-.08-.38"
        }
      )
    ]
  })
);
var Bulk_default88 = SvgBulk88;
var SvgLinear88 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10M12 8v5M11.995 16h.009"
      }
    )
  })
);
var Linear_default88 = SvgLinear88;
var SvgOutline88 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75M12 17c-.13 0-.26-.03-.38-.08q-.18-.075-.33-.21c-.09-.1-.16-.2-.21-.33A1 1 0 0 1 11 16c0-.13.03-.26.08-.38q.075-.18.21-.33.15-.135.33-.21a1 1 0 0 1 .76 0q.18.075.33.21.135.15.21.33c.05.12.08.25.08.38s-.03.26-.08.38c-.05.13-.12.23-.21.33q-.15.135-.33.21c-.12.05-.25.08-.38.08"
        }
      )
    ]
  })
);
var Outline_default88 = SvgOutline88;
var SvgTwotone88 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 8v5M11.995 16h.009",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default88 = SvgTwotone88;
var components88 = {
  bold: Bold_default88,
  broken: Broken_default88,
  bulk: Bulk_default88,
  linear: Linear_default88,
  outline: Outline_default88,
  twotone: Twotone_default88
};
var InfoCircle = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components88[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var infoCircle_default = InfoCircle;
var SvgBold89 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M17.91 10.72h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-.8.91-6.77 7.7c-.93 1.05-.54 1.91.86 1.91h3.09v7.2c0 1.68.91 2.02 2.02.76l.8-.91 6.77-7.7c.93-1.05.54-1.91-.86-1.91"
      }
    )
  })
);
var Bold_default89 = SvgBold89;
var SvgBroken89 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
        d: "M14.82 7.02v-3.5c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.93 1.05-.54 1.92.87 1.92h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09"
      }
    )
  })
);
var Broken_default89 = SvgBroken89;
var SvgBulk89 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 3.67v16.66l-.8.91c-1.11 1.26-2.02.92-2.02-.76v-7.2H6.09c-1.4 0-1.79-.86-.86-1.91z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18.77 12.63 12 20.33V3.67l.8-.91c1.11-1.26 2.02-.92 2.02.76v7.2h3.09c1.4 0 1.79.86.86 1.91",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default89 = SvgBulk89;
var SvgLinear89 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
        d: "M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92"
      }
    )
  })
);
var Linear_default89 = SvgLinear89;
var SvgOutline89 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M9.99 22.75c-.2 0-.36-.04-.48-.09-.4-.15-1.08-.64-1.08-2.19v-6.45H6.09c-1.34 0-1.82-.63-1.99-1-.17-.38-.32-1.15.56-2.16l7.57-8.6c1.02-1.16 1.85-1.08 2.25-.93s1.08.64 1.08 2.19v6.45h2.34c1.34 0 1.82.63 1.99 1 .17.38.32 1.15-.56 2.16l-7.57 8.6c-.71.81-1.33 1.02-1.77 1.02m3.94-20.01c-.03.04-.24.14-.57.52l-7.57 8.6c-.28.32-.32.52-.32.56.02.01.2.11.62.11h3.09c.41 0 .75.34.75.75v7.2c0 .5.09.72.13.78.03-.04.24-.14.57-.52l7.57-8.6c.28-.32.32-.52.32-.56-.02-.01-.2-.11-.62-.11h-3.09c-.41 0-.75-.34-.75-.75v-7.2c.01-.5-.09-.71-.13-.78"
      }
    )
  })
);
var Outline_default89 = SvgOutline89;
var SvgTwotone89 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
        d: "M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92"
      }
    )
  })
);
var Twotone_default89 = SvgTwotone89;
var components89 = {
  bold: Bold_default89,
  broken: Broken_default89,
  bulk: Bulk_default89,
  linear: Linear_default89,
  outline: Outline_default89,
  twotone: Twotone_default89
};
var Share1 = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components89[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var share1_default = Share1;
var SvgBold90 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2M12 15.88c-2.14 0-3.88-1.74-3.88-3.88S9.86 8.12 12 8.12s3.88 1.74 3.88 3.88-1.74 3.88-3.88 3.88m5.92-9q-.075.18-.21.33-.15.135-.33.21a.995.995 0 0 1-1.09-.21q-.135-.15-.21-.33A1 1 0 0 1 16 6.5c0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.23-.23.58-.34.9-.27.07.01.13.03.19.06q.09.03.18.09c.05.03.1.08.15.12.09.1.16.2.21.33.05.12.08.25.08.38s-.03.26-.08.38"
      }
    )
  })
);
var Bold_default90 = SvgBold90;
var SvgBroken90 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2 13.03V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M17.636 7h.012"
        }
      )
    ]
  })
);
var Broken_default90 = SvgBroken90;
var SvgBulk90 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 15.88a3.88 3.88 0 1 0 0-7.76 3.88 3.88 0 0 0 0 7.76M17 7.5a1 1 0 0 1-.71-.29q-.135-.15-.21-.33A1 1 0 0 1 16 6.5c0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.23-.23.58-.34.9-.27.07.01.13.03.19.06q.09.03.18.09c.05.03.1.08.15.12.09.1.16.2.21.33.05.12.08.25.08.38s-.03.26-.08.38q-.075.18-.21.33-.15.135-.33.21c-.12.05-.25.08-.38.08"
        }
      )
    ]
  })
);
var Bulk_default90 = SvgBulk90;
var SvgLinear90 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M17.636 7h.012"
        }
      )
    ]
  })
);
var Linear_default90 = SvgLinear90;
var SvgOutline90 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 16.25A4.26 4.26 0 0 1 7.75 12 4.26 4.26 0 0 1 12 7.75 4.26 4.26 0 0 1 16.25 12 4.26 4.26 0 0 1 12 16.25m0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75S13.52 9.25 12 9.25M17 7.5c-.13 0-.26-.03-.38-.08q-.18-.075-.33-.21c-.09-.1-.17-.21-.22-.33A1 1 0 0 1 16 6.5c0-.13.02-.26.07-.38.06-.13.13-.23.22-.33.05-.04.1-.09.15-.12q.09-.06.18-.09a1.006 1.006 0 0 1 1.09.21c.09.1.16.2.21.33.05.12.08.25.08.38s-.03.26-.08.38q-.075.18-.21.33-.15.135-.33.21c-.12.05-.25.08-.38.08"
        }
      )
    ]
  })
);
var Outline_default90 = SvgOutline90;
var SvgTwotone90 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M17.636 7h.012",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default90 = SvgTwotone90;
var components90 = {
  bold: Bold_default90,
  broken: Broken_default90,
  bulk: Bulk_default90,
  linear: Linear_default90,
  outline: Outline_default90,
  twotone: Twotone_default90
};
var Instagram = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components90[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var instagram_default = Instagram;
var SvgBold91 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07M18.28 10.14v3.72c0 2.95-2.4 5.35-5.35 5.35H9.26c-.79 0-1.27-.87-.85-1.53L15.67 6.2c.36-.57 1.17-.62 1.62-.11.72.83.99 2.12.99 4.05M16.4 1.87a.745.745 0 0 0-1.03.23l-1.71 2.71c-.23-.01-.47-.02-.73-.02H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 3.05.7 4.51 2.74 5.06L3.37 21.1c-.22.35-.12.81.23 1.03.12.08.26.12.4.12.25 0 .49-.12.63-.35l12-19c.23-.35.12-.81-.23-1.03"
      }
    )
  })
);
var Bold_default91 = SvgBold91;
var SvgBroken91 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M4 21.5l4.09-6.47L16 2.5M2 14c0 3.4.72 4.63 3.39 4.92M7 5c-4 0-5 1-5 5M13 19c4 0 5-1 5-5v-4c0-3.39-.72-4.63-3.37-4.92"
      }
    )
  })
);
var Broken_default91 = SvgBroken91;
var SvgBulk91 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.5 4.87 5.52 19.09C2.87 18.71 2 17.27 2 13.86v-3.72c0-4.1 1.25-5.35 5.35-5.35h5.58c.58 0 1.1.02 1.57.08M18.28 10.14v3.72c0 2.95-2.4 5.35-5.35 5.35H7.45l8.78-13.9c1.52.69 2.05 2.15 2.05 4.83",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M4 22.25c-.14 0-.28-.04-.4-.12a.736.736 0 0 1-.23-1.03l12-19c.22-.35.69-.45 1.03-.23.35.22.46.68.23 1.03l-12 19c-.14.23-.38.35-.63.35"
        }
      )
    ]
  })
);
var Bulk_default91 = SvgBulk91;
var SvgLinear91 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M4 21.5l12-19M7 5c-4 0-5 1-5 5v4c0 3.4.72 4.63 3.39 4.92M13 19c4 0 5-1 5-5v-4c0-3.39-.72-4.63-3.37-4.92"
      }
    )
  })
);
var Linear_default91 = SvgLinear91;
var SvgOutline91 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.5 15.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.59 0 .72-.09.73-.09.02-.06.02-.41.02-.66v-2c0-.25 0-.59-.04-.68-.01.01-.16-.07-.71-.07-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.08 0 2.25 1.02 2.25 2.25v2c0 1.23-.17 2.25-2.25 2.25M4 22.25c-.14 0-.28-.04-.4-.12a.736.736 0 0 1-.23-1.03l12-19c.22-.35.69-.45 1.03-.23.35.22.46.68.23 1.03l-12 19c-.14.23-.38.35-.63.35"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M5.39 19.67h-.08c-3.4-.38-4.06-2.36-4.06-5.67v-4c0-4.41 1.34-5.75 5.75-5.75.41 0 .75.34.75.75s-.34.75-.75.75c-3.57 0-4.25.68-4.25 4.25v4c0 3.32.68 3.95 2.72 4.18.41.05.71.42.66.83-.04.38-.37.66-.74.66M13 19.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c3.57 0 4.25-.68 4.25-4.25v-4c0-3.31-.68-3.95-2.71-4.18a.75.75 0 0 1-.66-.83c.05-.41.41-.72.83-.66 3.38.38 4.04 2.37 4.04 5.67v4c0 4.41-1.34 5.75-5.75 5.75"
        }
      )
    ]
  })
);
var Outline_default91 = SvgOutline91;
var SvgTwotone91 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5",
          opacity: 0.34
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m4 21.5 12-19M7 5c-4 0-5 1-5 5v4c0 3.4.72 4.63 3.39 4.92"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13 19c4 0 5-1 5-5v-4c0-3.39-.72-4.63-3.37-4.92",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default91 = SvgTwotone91;
var components91 = {
  bold: Bold_default91,
  broken: Broken_default91,
  bulk: Bulk_default91,
  linear: Linear_default91,
  outline: Outline_default91,
  twotone: Twotone_default91
};
var BatteryDisable = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components91[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var batteryDisable_default = BatteryDisable;
var SvgBold92 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m20.96 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L13.08 15c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21 11.5c0 .43-.03.86-.08 1.28-.04.3-.35.48-.64.39l-4.85-1.51a3.03 3.03 0 0 0-3.03.74c-.8.8-1.09 1.97-.75 3.05l1.5 4.83c.09.29-.1.6-.4.64-.42.05-.83.08-1.25.08-5.34 0-9.64-4.39-9.5-9.77.14-4.96 4.27-9.09 9.23-9.23C16.61 1.86 21 6.16 21 11.5"
        }
      )
    ]
  })
);
var Bold_default92 = SvgBold92;
var SvgBroken92 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "m20.96 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L13.08 15c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9M3.98 6.03A9.97 9.97 0 0 0 2 12c0 5.52 4.48 10 10 10M22 12c0-5.52-4.48-10-10-10-1.52 0-2.95.34-4.24.94"
      }
    )
  })
);
var Broken_default92 = SvgBroken92;
var SvgBulk92 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "m20.96 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L13.08 15c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default92 = SvgBulk92;
var SvgLinear92 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m20.96 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L13.08 15c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10"
        }
      )
    ]
  })
);
var Linear_default92 = SvgLinear92;
var SvgOutline92 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.37 22.77h-.02a2.23 2.23 0 0 1-2.15-1.6l-1.85-5.95c-.25-.82-.04-1.7.57-2.29.6-.59 1.47-.81 2.27-.56l5.96 1.85c.96.3 1.59 1.14 1.6 2.15.01 1-.6 1.85-1.56 2.17l-1.63.55c-.23.08-.41.25-.48.48l-.56 1.64c-.31.95-1.15 1.56-2.15 1.56m-1.86-9c-.27 0-.45.15-.53.22-.21.21-.28.5-.19.79l1.85 5.95c.16.51.6.53.74.54.14 0 .57-.04.73-.53l.56-1.64c.22-.67.76-1.2 1.43-1.43l1.63-.55c.5-.16.53-.6.53-.73s-.04-.57-.54-.73l-5.96-1.85a.9.9 0 0 0-.25-.04"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-5.1-4.15-9.25-9.25-9.25S2.75 6.9 2.75 12 6.9 21.25 12 21.25c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default92 = SvgOutline92;
var SvgTwotone92 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m20.96 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L13.08 15c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10"
        }
      )
    ]
  })
);
var Twotone_default92 = SvgTwotone92;
var components92 = {
  bold: Bold_default92,
  broken: Broken_default92,
  bulk: Bulk_default92,
  linear: Linear_default92,
  outline: Outline_default92,
  twotone: Twotone_default92
};
var MouseCircle = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components92[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var mouseCircle_default = MouseCircle;
var SvgBold93 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21.77 2.23c-.3-.3-.79-.3-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01L21.77 3.31c.31-.3.31-.78 0-1.08"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.82 3.52v5.66l-5.64 5.64v-1.54H6.09c-1.4 0-1.79-.86-.86-1.91L12 3.67l.8-.91c1.11-1.26 2.02-.92 2.02.76M18.77 12.63 12 20.33l-.8.91c-1.11 1.26-2.02.92-2.02-.76v-2.66l7.1-7.1h1.63c1.4 0 1.79.86.86 1.91"
        }
      )
    ]
  })
);
var Bold_default93 = SvgBold93;
var SvgBroken93 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M9.18 18.04v2.44c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-.93M9.98 5.96l-4.76 5.41c-.93 1.05-.54 1.92.87 1.92h3.09v1.18M14.82 8.84V3.52c0-1.68-.91-2.02-2.02-.76"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M22 2 2 22"
        }
      )
    ]
  })
);
var Broken_default93 = SvgBroken93;
var SvgBulk93 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21.77 2.23c-.3-.3-.79-.3-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01L21.77 3.31c.31-.3.31-.78 0-1.08"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M14.82 3.52v5.66l-5.64 5.64v-1.54H6.09c-1.4 0-1.79-.86-.86-1.91L12 3.67l.8-.91c1.11-1.26 2.02-.92 2.02.76M18.77 12.63 12 20.33l-.8.91c-1.11 1.26-2.02.92-2.02-.76v-2.66l7.1-7.1h1.63c1.4 0 1.79.86.86 1.91",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default93 = SvgBulk93;
var SvgLinear93 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M9.18 18.04v2.44c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-.93M14.82 8.84V3.52c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.93 1.05-.54 1.92.87 1.92h3.09v1.18"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M22 2 2 22"
        }
      )
    ]
  })
);
var Linear_default93 = SvgLinear93;
var SvgOutline93 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M9.99 22.75c-.2 0-.36-.04-.48-.09-.4-.15-1.08-.64-1.08-2.19v-2.44c0-.41.34-.75.75-.75s.75.34.75.75v2.44c0 .5.09.72.13.78.03-.04.24-.14.57-.52l7.57-8.6c.28-.32.32-.52.32-.56-.02-.01-.2-.11-.62-.11h-.93c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.93c1.34 0 1.82.63 1.99 1 .17.38.32 1.15-.56 2.16l-7.57 8.6c-.71.82-1.33 1.03-1.77 1.03M9.18 15.22c-.41 0-.75-.34-.75-.75v-.43H6.09c-1.34 0-1.82-.63-1.99-1-.17-.38-.32-1.15.56-2.16l7.57-8.6c1.02-1.16 1.85-1.08 2.25-.93s1.08.64 1.08 2.19v5.31c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3.52c0-.5-.09-.72-.13-.78-.03.04-.24.14-.57.52l-7.57 8.6c-.28.32-.32.52-.32.56.02.01.2.11.62.11h3.09c.41 0 .75.34.75.75v1.18c0 .42-.34.76-.75.76"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M2 22.75c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l20-20c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22"
        }
      )
    ]
  })
);
var Outline_default93 = SvgOutline93;
var SvgTwotone93 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M9.18 18.04v2.44c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-.93",
          opacity: 0.34
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M14.82 8.84V3.52c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.93 1.05-.54 1.92.87 1.92h3.09v1.18"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M22 2 2 22"
        }
      )
    ]
  })
);
var Twotone_default93 = SvgTwotone93;
var components93 = {
  bold: Bold_default93,
  broken: Broken_default93,
  bulk: Bulk_default93,
  linear: Linear_default93,
  outline: Outline_default93,
  twotone: Twotone_default93
};
var FlashSlash = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components93[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var flashSlash_default = FlashSlash;
var SvgBold94 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M21.76 15.92 15.36 4.4C14.5 2.85 13.31 2 12 2s-2.5.85-3.36 2.4l-6.4 11.52c-.81 1.47-.9 2.88-.25 3.99s1.93 1.72 3.61 1.72h12.8c1.68 0 2.96-.61 3.61-1.72s.56-2.53-.25-3.99M11.25 9c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75zm1.46 8.71-.15.12q-.09.06-.18.09c-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02s-.13-.01-.2-.02a.6.6 0 0 1-.18-.06.8.8 0 0 1-.18-.09l-.15-.12c-.18-.19-.29-.45-.29-.71s.11-.52.29-.71l.15-.12q.09-.06.18-.09.09-.045.18-.06c.13-.03.27-.03.39 0 .07.01.13.03.19.06q.09.03.18.09l.15.12c.18.19.29.45.29.71s-.11.52-.29.71"
      }
    )
  })
);
var Bold_default94 = SvgBold94;
var SvgBroken94 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M12 9v5M20.24 14l1.06 1.9c1.68 3.03.22 5.51-3.24 5.51H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62L8.76 5c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29M11.995 17h.009"
      }
    )
  })
);
var Broken_default94 = SvgBroken94;
var SvgBulk94 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21.76 15.92 15.36 4.4C14.5 2.85 13.31 2 12 2s-2.5.85-3.36 2.4l-6.4 11.52c-.81 1.47-.9 2.88-.25 3.99s1.93 1.72 3.61 1.72h12.8c1.68 0 2.96-.61 3.61-1.72s.56-2.53-.25-3.99",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 14.75c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75M12 18c-.06 0-.13-.01-.2-.02a.6.6 0 0 1-.18-.06.8.8 0 0 1-.18-.09l-.15-.12c-.18-.19-.29-.45-.29-.71s.11-.52.29-.71l.15-.12q.09-.06.18-.09.09-.045.18-.06c.13-.03.27-.03.39 0 .07.01.13.03.19.06q.09.03.18.09l.15.12c.18.19.29.45.29.71s-.11.52-.29.71l-.15.12q-.09.06-.18.09c-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02"
        }
      )
    ]
  })
);
var Bulk_default94 = SvgBulk94;
var SvgLinear94 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M12 9v5M12 21.41H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62L8.76 5c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29 3.12 5.62c1.68 3.03.22 5.51-3.24 5.51H12zM11.995 17h.009"
      }
    )
  })
);
var Linear_default94 = SvgLinear94;
var SvgOutline94 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 14.75c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75M12 18c-.06 0-.13-.01-.2-.02a.6.6 0 0 1-.18-.06.8.8 0 0 1-.18-.09l-.15-.12c-.18-.19-.29-.45-.29-.71s.11-.52.29-.71l.15-.12q.09-.06.18-.09.09-.045.18-.06c.13-.03.27-.03.39 0 .07.01.13.03.19.06q.09.03.18.09l.15.12c.18.19.29.45.29.71s-.11.52-.29.71l-.15.12q-.09.06-.18.09c-.06.03-.12.05-.19.06-.06.01-.13.02-.19.02"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18.06 22.16H5.94c-1.95 0-3.44-.71-4.2-1.99-.75-1.28-.65-2.93.3-4.64L8.1 4.63c1-1.8 2.38-2.79 3.9-2.79s2.9.99 3.9 2.79l6.06 10.91c.95 1.71 1.06 3.35.3 4.64-.76 1.27-2.25 1.98-4.2 1.98M12 3.34c-.94 0-1.86.72-2.59 2.02L3.36 16.27c-.68 1.22-.79 2.34-.32 3.15s1.51 1.25 2.91 1.25h12.12c1.4 0 2.43-.44 2.91-1.25s.36-1.92-.32-3.15L14.59 5.36c-.73-1.3-1.65-2.02-2.59-2.02"
        }
      )
    ]
  })
);
var Outline_default94 = SvgOutline94;
var SvgTwotone94 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 9v5",
          opacity: 0.34
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 21.41H5.94c-3.47 0-4.92-2.48-3.24-5.51l3.12-5.62L8.76 5c1.78-3.21 4.7-3.21 6.48 0l2.94 5.29 3.12 5.62c1.68 3.03.22 5.51-3.24 5.51H12z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.995 17h.009",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default94 = SvgTwotone94;
var components94 = {
  bold: Bold_default94,
  broken: Broken_default94,
  bulk: Bulk_default94,
  linear: Linear_default94,
  outline: Outline_default94,
  twotone: Twotone_default94
};
var Danger = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components94[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var danger_default = Danger;
var SvgBold95 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m-1.4 14.6c-.15.19-.37.29-.59.29-.16 0-.32-.05-.46-.16-1.06-.82-2.43-.82-3.49 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05a4.296 4.296 0 0 1 5.32 0c.34.25.4.72.14 1.05M17 13.51c-.15.19-.37.29-.59.29-.16 0-.32-.05-.46-.16-2.4-1.85-5.49-1.85-7.89 0a.751.751 0 1 1-.93-1.18c2.95-2.28 6.77-2.28 9.72 0 .34.25.4.72.15 1.05m1.59-3.09c-.15.19-.37.29-.59.29-.16 0-.32-.05-.46-.16-3.37-2.6-7.72-2.6-11.08 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 3.92-3.03 8.99-3.03 12.92 0 .33.25.39.72.13 1.05"
      }
    )
  })
);
var Bold_default95 = SvgBold95;
var SvgBroken95 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6 9.96c3.63-2.81 8.37-2.81 12 0M7.6 13.05c2.67-2.06 6.14-2.06 8.81 0M9.8 16.14c1.33-1.03 3.07-1.03 4.4 0"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
        }
      )
    ]
  })
);
var Broken_default95 = SvgBroken95;
var SvgBulk95 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.19 2H7.82C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18 10.71c-.16 0-.32-.05-.46-.16-3.37-2.6-7.72-2.6-11.08 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 3.92-3.03 8.99-3.03 12.92 0 .33.25.39.72.13 1.05-.14.19-.37.29-.59.29"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.4 13.8c-.16 0-.32-.05-.46-.16-2.4-1.85-5.49-1.85-7.89 0-.33.25-.8.19-1.05-.13s-.19-.8.13-1.05c2.95-2.28 6.77-2.28 9.72 0 .33.25.39.72.13 1.05-.13.19-.35.29-.58.29M14.2 16.89c-.16 0-.32-.05-.46-.16-1.06-.82-2.43-.82-3.49 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05a4.296 4.296 0 0 1 5.32 0c.33.25.39.72.13 1.05-.13.19-.35.29-.58.29"
        }
      )
    ]
  })
);
var Bulk_default95 = SvgBulk95;
var SvgLinear95 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6 9.96c3.63-2.81 8.37-2.81 12 0M7.6 13.05c2.67-2.06 6.14-2.06 8.81 0M9.8 16.14c1.33-1.03 3.07-1.03 4.4 0"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      )
    ]
  })
);
var Linear_default95 = SvgLinear95;
var SvgOutline95 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18 10.71c-.16 0-.32-.05-.46-.16-3.37-2.6-7.72-2.6-11.08 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 3.92-3.03 8.99-3.03 12.92 0 .33.25.39.72.13 1.05-.14.19-.37.29-.59.29"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.4 13.8c-.16 0-.32-.05-.46-.16-2.4-1.85-5.49-1.85-7.89 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 2.95-2.28 6.77-2.28 9.72 0 .33.25.39.72.13 1.05-.13.19-.35.29-.58.29M14.2 16.89c-.16 0-.32-.05-.46-.16-1.06-.82-2.43-.82-3.49 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05a4.296 4.296 0 0 1 5.32 0c.33.25.39.72.13 1.05-.13.19-.35.29-.58.29"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
        }
      )
    ]
  })
);
var Outline_default95 = SvgOutline95;
var SvgTwotone95 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6 9.96c3.63-2.81 8.37-2.81 12 0M7.6 13.05c2.67-2.06 6.14-2.06 8.81 0M9.8 16.14c1.33-1.03 3.07-1.03 4.4 0",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
        }
      )
    ]
  })
);
var Twotone_default95 = SvgTwotone95;
var components95 = {
  bold: Bold_default95,
  broken: Broken_default95,
  bulk: Bulk_default95,
  linear: Linear_default95,
  outline: Outline_default95,
  twotone: Twotone_default95
};
var WifiSquare = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components95[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var wifiSquare_default = WifiSquare;
var SvgBold96 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M16.42 7.95a6.253 6.253 0 0 1 0 8.84 6.253 6.253 0 0 1-8.84 0 6.253 6.253 0 0 1 0-8.84 6.253 6.253 0 0 1 8.84 0M8.25 22.39c-.09 0-.19-.02-.28-.05-2.25-.9-4.07-2.49-5.29-4.59a10.6 10.6 0 0 1-1.34-6.73c.05-.41.44-.7.84-.65.41.05.7.43.65.84A9.2 9.2 0 0 0 3.98 17a9.1 9.1 0 0 0 4.54 3.94c.38.16.57.59.42.98-.11.29-.4.47-.69.47M5.85 5.23c-.22 0-.44-.1-.59-.29a.74.74 0 0 1 .13-1.05C7.29 2.4 9.58 1.61 12 1.61c2.36 0 4.61.76 6.5 2.2A.749.749 0 1 1 17.59 5 9.15 9.15 0 0 0 12 3.11c-2.08 0-4.05.68-5.69 1.96-.14.11-.3.16-.46.16M15.75 22.39c-.3 0-.58-.18-.7-.47a.76.76 0 0 1 .42-.98c1.93-.78 3.5-2.14 4.54-3.94a9.04 9.04 0 0 0 1.15-5.78c-.05-.41.24-.79.65-.84.4-.05.79.24.84.65.3 2.35-.16 4.68-1.34 6.73-1.21 2.1-3.04 3.68-5.29 4.59-.08.02-.17.04-.27.04"
      }
    )
  })
);
var Bold_default96 = SvgBold96;
var SvgBroken96 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M16.42 7.95a6.253 6.253 0 0 1 0 8.84 6.253 6.253 0 0 1-8.84 0 6.253 6.253 0 0 1 0-8.84 6.25 6.25 0 0 1 5.02-1.8M8.25 21.64c-2-.8-3.75-2.25-4.91-4.26a9.9 9.9 0 0 1-1.25-6.25M5.85 4.48A9.94 9.94 0 0 1 12 2.36c2.27 0 4.36.77 6.04 2.05M15.75 21.64c2-.8 3.75-2.25 4.91-4.26a9.9 9.9 0 0 0 1.25-6.25"
      }
    )
  })
);
var Broken_default96 = SvgBroken96;
var SvgBulk96 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M16.42 7.95a6.253 6.253 0 0 1 0 8.84 6.253 6.253 0 0 1-8.84 0 6.253 6.253 0 0 1 0-8.84 6.253 6.253 0 0 1 8.84 0"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M8.25 22.39c-.09 0-.19-.02-.28-.05-2.25-.9-4.07-2.49-5.29-4.59a10.6 10.6 0 0 1-1.34-6.73c.05-.41.44-.7.84-.65.41.05.7.43.65.84-.26 2.02.14 4.02 1.15 5.78a9.1 9.1 0 0 0 4.54 3.94c.38.16.57.59.42.98-.11.3-.4.48-.69.48M5.85 5.23c-.22 0-.44-.1-.59-.29-.26-.33-.2-.8.13-1.05C7.3 2.4 9.58 1.61 12 1.61c2.36 0 4.61.76 6.5 2.2A.749.749 0 1 1 17.59 5 9.1 9.1 0 0 0 12 3.11c-2.08 0-4.05.68-5.69 1.96-.14.11-.3.16-.46.16M15.75 22.39c-.3 0-.58-.18-.7-.47a.76.76 0 0 1 .42-.98c1.93-.78 3.5-2.14 4.54-3.94a9.04 9.04 0 0 0 1.15-5.78c-.05-.41.24-.79.65-.84.4-.05.79.24.84.65.3 2.35-.16 4.68-1.34 6.73-1.21 2.1-3.04 3.68-5.29 4.59-.08.02-.17.04-.27.04",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default96 = SvgBulk96;
var SvgLinear96 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M16.42 7.95a6.253 6.253 0 0 1 0 8.84 6.253 6.253 0 0 1-8.84 0 6.253 6.253 0 0 1 0-8.84 6.253 6.253 0 0 1 8.84 0M8.25 21.64c-2-.8-3.75-2.25-4.91-4.26a9.9 9.9 0 0 1-1.25-6.25M5.85 4.48A9.94 9.94 0 0 1 12 2.36c2.27 0 4.36.77 6.04 2.05M15.75 21.64c2-.8 3.75-2.25 4.91-4.26a9.9 9.9 0 0 0 1.25-6.25"
      }
    )
  })
);
var Linear_default96 = SvgLinear96;
var SvgOutline96 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 19.37c-1.79 0-3.58-.68-4.95-2.05a7.007 7.007 0 0 1 0-9.9 7.007 7.007 0 0 1 9.9 0 7.007 7.007 0 0 1 0 9.9A6.97 6.97 0 0 1 12 19.37m0-12.5c-1.41 0-2.82.54-3.89 1.61a5.517 5.517 0 0 0 0 7.78 5.51 5.51 0 0 0 7.78 0 5.517 5.517 0 0 0 0-7.78A5.5 5.5 0 0 0 12 6.87"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M8.25 22.39c-.09 0-.19-.02-.28-.05-2.25-.9-4.07-2.49-5.29-4.59a10.6 10.6 0 0 1-1.34-6.73c.05-.41.43-.7.84-.65s.7.43.65.84c-.26 2.02.14 4.02 1.15 5.78a9.1 9.1 0 0 0 4.54 3.94c.38.16.57.59.42.98-.11.3-.4.48-.69.48M5.85 5.23c-.22 0-.44-.1-.59-.29-.26-.33-.2-.8.13-1.05C7.3 2.4 9.58 1.61 12 1.61c2.36 0 4.61.76 6.5 2.2A.749.749 0 1 1 17.59 5 9.1 9.1 0 0 0 12 3.11c-2.08 0-4.05.68-5.69 1.96-.14.11-.3.16-.46.16M15.75 22.39c-.3 0-.58-.18-.7-.47a.76.76 0 0 1 .42-.98c1.93-.78 3.5-2.14 4.54-3.94a9.04 9.04 0 0 0 1.15-5.78c-.05-.41.24-.79.65-.84.4-.05.79.24.84.65.3 2.35-.16 4.68-1.34 6.73-1.21 2.1-3.04 3.68-5.29 4.59-.08.02-.17.04-.27.04"
        }
      )
    ]
  })
);
var Outline_default96 = SvgOutline96;
var SvgTwotone96 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M16.42 7.95a6.253 6.253 0 0 1 0 8.84 6.253 6.253 0 0 1-8.84 0 6.253 6.253 0 0 1 0-8.84 6.253 6.253 0 0 1 8.84 0"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.25 21.64c-2-.8-3.75-2.25-4.91-4.26a9.9 9.9 0 0 1-1.25-6.25M5.85 4.48A9.94 9.94 0 0 1 12 2.36c2.27 0 4.36.77 6.04 2.05M15.75 21.64c2-.8 3.75-2.25 4.91-4.26a9.9 9.9 0 0 0 1.25-6.25",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default96 = SvgTwotone96;
var components96 = {
  bold: Bold_default96,
  broken: Broken_default96,
  bulk: Bulk_default96,
  linear: Linear_default96,
  outline: Outline_default96,
  twotone: Twotone_default96
};
var Story = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components96[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var story_default = Story;
var SvgBold97 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.89 13v1h-.87c-.74 0-1.34.6-1.34 1.35v.3a1.344 1.344 0 1 1-2.69 0v-.3c0-.75-.61-1.35-1.35-1.35s-1.34.6-1.34 1.35v.3a1.35 1.35 0 0 1-2.7 0v-.3c0-.75-.6-1.35-1.34-1.35s-1.35.6-1.35 1.35v.3a1.344 1.344 0 1 1-2.69 0v-.32c0-.74-.59-1.34-1.32-1.35h-.79V13c0-1.38 1.04-2.55 2.45-2.89.28-.07.57-.11.88-.11h11.12c.31 0 .6.04.88.11 1.41.34 2.45 1.51 2.45 2.89M18.44 7.17v1.41c-.29-.06-.58-.08-.88-.08H6.44c-.3 0-.59.03-.88.09V7.17C5.56 5.97 6.64 5 7.98 5h8.04c1.34 0 2.42.97 2.42 2.17"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M8.75 3.55v1.46h-.77c-.26 0-.5.03-.73.09V3.55c0-.35.34-.65.75-.65s.75.3.75.65M16.75 3.33V5.1c-.23-.07-.47-.1-.73-.1h-.77V3.33c0-.41.34-.75.75-.75s.75.34.75.75M12.75 2.82V5h-1.5V2.82c0-.45.34-.82.75-.82s.75.37.75.82M22 21.25c0 .41-.34.75-.75.75H2.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.36v-5.02h.61v.07c0 1.34.88 2.58 2.19 2.87 1.02.24 1.99-.09 2.65-.74.38-.38 1-.39 1.38-.01.52.51 1.23.83 2.01.83s1.49-.31 2.01-.83c.38-.37.99-.37 1.38.01.65.65 1.62.98 2.65.74 1.31-.29 2.19-1.53 2.19-2.87v-.05h.71v5h.36c.41 0 .75.34.75.75"
        }
      )
    ]
  })
);
var Bold_default97 = SvgBold97;
var SvgBroken97 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2 22h20M17.56 10c1.84 0 3.33 1.34 3.33 3v9M3.11 22v-9c0-1.66 1.49-3 3.33-3h6.86M5.56 10V7.17C5.56 5.97 6.64 5 7.98 5h8.05c1.33 0 2.41.97 2.41 2.17V10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M20.47 14h-.45c-.74 0-1.35.6-1.35 1.35v.31a1.35 1.35 0 0 1-2.7 0v-.31a1.35 1.35 0 0 0-2.7 0v.31a1.35 1.35 0 0 1-2.7 0v-.31C10.6 14.6 10 14 9.26 14s-1.35.6-1.35 1.35M3.53 13.98l.37.01c.74.01 1.33.61 1.33 1.35v.33c0 .74.6 1.35 1.35 1.35M8 5V3M16 5V3M12 5V2"
        }
      )
    ]
  })
);
var Broken_default97 = SvgBroken97;
var SvgBulk97 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.89 13v1h-.87c-.74 0-1.34.6-1.34 1.35v.3a1.344 1.344 0 1 1-2.69 0v-.3c0-.75-.61-1.35-1.35-1.35s-1.34.6-1.34 1.35v.3a1.35 1.35 0 0 1-2.7 0v-.3c0-.75-.6-1.35-1.34-1.35s-1.35.6-1.35 1.35v.3a1.344 1.344 0 1 1-2.69 0v-.32c0-.74-.59-1.34-1.32-1.35h-.79V13c0-1.38 1.04-2.55 2.45-2.89.28-.07.57-.11.88-.11h11.12c.31 0 .6.04.88.11 1.41.34 2.45 1.51 2.45 2.89"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18.44 7.17v2.94c-.28-.07-.57-.11-.88-.11H6.44c-.31 0-.6.04-.88.11V7.17C5.56 5.97 6.64 5 7.98 5h8.04c1.34 0 2.42.97 2.42 2.17",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M8.75 3.55v1.46h-.77c-.26 0-.5.03-.73.09V3.55c0-.35.34-.65.75-.65s.75.3.75.65M16.75 3.33V5.1c-.23-.07-.47-.1-.73-.1h-.77V3.33c0-.41.34-.75.75-.75s.75.34.75.75M12.75 2.82V5h-1.5V2.82c0-.45.34-.82.75-.82s.75.37.75.82"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M21.25 20.5h-.36V14h-.87c-.74 0-1.34.6-1.34 1.35v.3a1.344 1.344 0 1 1-2.69 0v-.3c0-.75-.61-1.35-1.35-1.35s-1.34.6-1.34 1.35v.3a1.35 1.35 0 0 1-2.7 0v-.3c0-.75-.6-1.35-1.34-1.35s-1.35.6-1.35 1.35v.3a1.344 1.344 0 1 1-2.69 0v-.32c0-.74-.59-1.34-1.32-1.35h-.79v6.52h-.36c-.41 0-.75.34-.75.75s.34.75.75.75h18.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75",
          opacity: 0.4
        }
      )
    ]
  })
);
var Bulk_default97 = SvgBulk97;
var SvgLinear97 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2 22h20M3.11 22v-9c0-1.66 1.49-3 3.33-3h11.11c1.84 0 3.33 1.34 3.33 3v9M5.56 10V7.17C5.56 5.97 6.64 5 7.98 5h8.05c1.33 0 2.41.97 2.41 2.17V10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m3.53 13.98.37.01c.74.01 1.33.61 1.33 1.35v.33a1.35 1.35 0 0 0 2.7 0v-.31a1.35 1.35 0 0 1 2.7 0v.31a1.35 1.35 0 0 0 2.7 0v-.31a1.35 1.35 0 0 1 2.7 0v.31a1.35 1.35 0 0 0 2.7 0v-.31c0-.74.6-1.35 1.35-1.35h.45M8 5V3M16 5V3M12 5V2"
        }
      )
    ]
  })
);
var Linear_default97 = SvgLinear97;
var SvgOutline97 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.89 22.75c-.41 0-.75-.34-.75-.75v-9c0-1.24-1.16-2.25-2.58-2.25H6.44c-1.42 0-2.58 1.01-2.58 2.25v9c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-9c0-2.07 1.83-3.75 4.08-3.75h11.11c2.25 0 4.08 1.68 4.08 3.75v9a.74.74 0 0 1-.74.75"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18.44 10.75c-.41 0-.75-.34-.75-.75V7.17c0-.78-.75-1.42-1.66-1.42H7.98c-.92 0-1.66.64-1.66 1.42V10c0 .41-.34.75-.75.75s-.76-.34-.76-.75V7.17c0-1.61 1.42-2.92 3.16-2.92h8.05c1.74 0 3.16 1.31 3.16 2.92V10a.74.74 0 0 1-.74.75M17.33 17.75a2.1 2.1 0 0 1-2.1-2.1v-.31c0-.33-.27-.6-.6-.6s-.6.27-.6.6v.31a2.1 2.1 0 1 1-4.2 0v-.31c0-.33-.27-.6-.6-.6s-.6.27-.6.6v.31a2.1 2.1 0 1 1-4.2 0v-.33c0-.32-.26-.59-.59-.6h-.37a.755.755 0 0 1-.74-.76c.01-.41.34-.74.75-.74h.38c1.14.02 2.07.96 2.07 2.1v.33c0 .33.27.6.6.6s.6-.27.6-.6v-.31a2.1 2.1 0 1 1 4.2 0v.31c0 .33.27.6.6.6s.6-.27.6-.6v-.31a2.1 2.1 0 1 1 4.2 0v.31c0 .33.27.6.6.6s.6-.27.6-.6v-.31c0-1.16.94-2.1 2.1-2.1h.45c.41 0 .75.34.75.75s-.34.75-.75.75h-.45c-.33 0-.6.27-.6.6v.31a2.1 2.1 0 0 1-2.1 2.1"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M8 5.75c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75M16 5.75c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75M12 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default97 = SvgOutline97;
var SvgTwotone97 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2 22h20M3.11 22v-9c0-1.66 1.49-3 3.33-3h11.11c1.84 0 3.33 1.34 3.33 3v9M5.56 10V7.17C5.56 5.97 6.64 5 7.98 5h8.05c1.33 0 2.41.97 2.41 2.17V10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m3.53 13.98.37.01c.74.01 1.33.61 1.33 1.35v.33a1.35 1.35 0 0 0 2.7 0v-.31a1.35 1.35 0 0 1 2.7 0v.31a1.35 1.35 0 0 0 2.7 0v-.31a1.35 1.35 0 0 1 2.7 0v.31a1.35 1.35 0 0 0 2.7 0v-.31c0-.74.6-1.35 1.35-1.35h.45M8 5V3M16 5V3M12 5V2",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default97 = SvgTwotone97;
var components97 = {
  bold: Bold_default97,
  broken: Broken_default97,
  bulk: Bulk_default97,
  linear: Linear_default97,
  outline: Outline_default97,
  twotone: Twotone_default97
};
var Cake = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components97[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var cake_default = Cake;
var SvgBold98 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m3.92 10.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8a.749.749 0 1 1 0 1.5"
      }
    )
  })
);
var Bold_default98 = SvgBold98;
var SvgBroken98 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M14.99 12H16M8 12h4M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
      }
    )
  })
);
var Broken_default98 = SvgBroken98;
var SvgBulk98 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15.92 12.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8a.749.749 0 1 1 0 1.5"
        }
      )
    ]
  })
);
var Bulk_default98 = SvgBulk98;
var SvgLinear98 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M11.92 22c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10M7.92 12h8"
      }
    )
  })
);
var Linear_default98 = SvgLinear98;
var SvgOutline98 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M11.92 22.75C6 22.75 1.17 17.93 1.17 12S6 1.25 11.92 1.25 22.67 6.07 22.67 12s-4.82 10.75-10.75 10.75m0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15.92 12.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8a.749.749 0 1 1 0 1.5"
        }
      )
    ]
  })
);
var Outline_default98 = SvgOutline98;
var SvgTwotone98 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.92 22c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.92 12h8",
          opacity: 0.34
        }
      )
    ]
  })
);
var Twotone_default98 = SvgTwotone98;
var components98 = {
  bold: Bold_default98,
  broken: Broken_default98,
  bulk: Bulk_default98,
  linear: Linear_default98,
  outline: Outline_default98,
  twotone: Twotone_default98
};
var MinusCircle = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components98[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var minusCircle_default = MinusCircle;
var SvgBold99 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M20.36 12.73c-.37 0-.68-.28-.72-.65a7.61 7.61 0 0 0-3.24-5.44.723.723 0 0 1-.18-1.01c.23-.33.68-.41 1.01-.18a9.12 9.12 0 0 1 3.86 6.48c.04.4-.25.76-.65.8zM3.74 12.78h-.07a.73.73 0 0 1-.65-.8 9.08 9.08 0 0 1 3.8-6.49c.32-.23.78-.15 1.01.17.23.33.15.78-.17 1.01a7.63 7.63 0 0 0-3.19 5.45c-.04.38-.36.66-.73.66M15.99 21.1c-1.23.59-2.55.89-3.93.89-1.44 0-2.81-.32-4.09-.97a.715.715 0 0 1-.32-.97c.17-.36.61-.5.97-.33.63.32 1.3.54 1.98.67.92.18 1.86.19 2.78.03.68-.12 1.35-.33 1.97-.63.37-.17.81-.03.97.34.18.36.04.8-.33.97M12.05 2.01c-1.55 0-2.82 1.26-2.82 2.82s1.26 2.82 2.82 2.82 2.82-1.26 2.82-2.82-1.26-2.82-2.82-2.82M5.05 13.87c-1.55 0-2.82 1.26-2.82 2.82s1.26 2.82 2.82 2.82 2.82-1.26 2.82-2.82-1.27-2.82-2.82-2.82M18.95 13.87c-1.55 0-2.82 1.26-2.82 2.82s1.26 2.82 2.82 2.82 2.82-1.26 2.82-2.82-1.26-2.82-2.82-2.82"
      }
    )
  })
);
var Bold_default99 = SvgBold99;
var SvgBroken99 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.49 12.37a8.6 8.6 0 0 1 3.6-6.15M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M9.28 4.92a2.78 2.78 0 1 0 2.78-2.78M4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56M21.94 17.14a2.78 2.78 0 1 0-2.78 2.78"
      }
    )
  })
);
var Broken_default99 = SvgBroken99;
var SvgBulk99 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M20.36 12.73c-.37 0-.68-.28-.72-.65a7.61 7.61 0 0 0-3.24-5.44.723.723 0 0 1-.18-1.01c.23-.33.68-.41 1.01-.18a9.12 9.12 0 0 1 3.86 6.48c.04.4-.25.76-.65.8zM3.74 12.78h-.07a.73.73 0 0 1-.65-.8 9.08 9.08 0 0 1 3.8-6.49c.32-.23.78-.15 1.01.17.23.33.15.78-.17 1.01a7.63 7.63 0 0 0-3.19 5.45c-.04.38-.36.66-.73.66M15.99 21.1c-1.23.59-2.55.89-3.93.89-1.44 0-2.81-.32-4.09-.97a.715.715 0 0 1-.32-.97c.17-.36.61-.5.97-.33.63.32 1.3.54 1.98.67.92.18 1.86.19 2.78.03.68-.12 1.35-.33 1.97-.63.37-.17.81-.03.97.34.18.36.04.8-.33.97",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12.05 2.01c-1.55 0-2.82 1.26-2.82 2.82s1.26 2.82 2.82 2.82 2.82-1.26 2.82-2.82-1.26-2.82-2.82-2.82M5.05 13.87c-1.55 0-2.82 1.26-2.82 2.82s1.26 2.82 2.82 2.82 2.82-1.26 2.82-2.82-1.27-2.82-2.82-2.82M18.95 13.87c-1.55 0-2.82 1.26-2.82 2.82s1.26 2.82 2.82 2.82 2.82-1.26 2.82-2.82-1.26-2.82-2.82-2.82"
        }
      )
    ]
  })
);
var Bulk_default99 = SvgBulk99;
var SvgLinear99 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.49 12.37a8.6 8.6 0 0 1 3.6-6.15M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M12.06 7.7a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56M4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56M19.17 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56"
      }
    )
  })
);
var Linear_default99 = SvgLinear99;
var SvgOutline99 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M20.62 13.07c-.38 0-.7-.29-.75-.67a7.83 7.83 0 0 0-3.34-5.61.75.75 0 0 1-.19-1.04c.24-.34.71-.42 1.04-.19a9.34 9.34 0 0 1 3.97 6.68c.04.41-.25.78-.67.83zM3.49 13.12h-.08a.766.766 0 0 1-.67-.83c.27-2.69 1.7-5.12 3.91-6.69a.753.753 0 1 1 .87 1.23 7.85 7.85 0 0 0-3.29 5.62.74.74 0 0 1-.74.67M12.06 22.61c-1.48 0-2.89-.34-4.21-1a.75.75 0 0 1-.33-1.01.75.75 0 0 1 1.01-.33 7.9 7.9 0 0 0 6.94.06c.37-.18.82-.02 1 .35s.02.82-.35 1c-1.28.62-2.64.93-4.06.93M12.06 8.44a3.53 3.53 0 1 1-.001-7.059 3.53 3.53 0 0 1 0 7.059m0-5.55c-1.12 0-2.03.91-2.03 2.03s.91 2.03 2.03 2.03 2.03-.91 2.03-2.03-.92-2.03-2.03-2.03M4.83 20.67a3.53 3.53 0 1 1-.001-7.059 3.53 3.53 0 0 1 0 7.06m0-5.56c-1.12 0-2.03.91-2.03 2.03s.91 2.03 2.03 2.03 2.03-.91 2.03-2.03-.91-2.03-2.03-2.03M19.17 20.67a3.53 3.53 0 1 1 3.53-3.53c-.01 1.94-1.59 3.53-3.53 3.53m0-5.56c-1.12 0-2.03.91-2.03 2.03s.91 2.03 2.03 2.03 2.03-.91 2.03-2.03a2.04 2.04 0 0 0-2.03-2.03"
      }
    )
  })
);
var Outline_default99 = SvgOutline99;
var SvgTwotone99 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.49 12.37a8.6 8.6 0 0 1 3.6-6.15M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85",
          opacity: 0.34
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12.06 7.7a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56M4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56M19.17 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56"
        }
      )
    ]
  })
);
var Twotone_default99 = SvgTwotone99;
var components99 = {
  bold: Bold_default99,
  broken: Broken_default99,
  bulk: Bulk_default99,
  linear: Linear_default99,
  outline: Outline_default99,
  twotone: Twotone_default99
};
var Share = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components99[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var share_default = Share;
var SvgBold100 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M12 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16M18 22.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Bold_default100 = SvgBold100;
var SvgBroken100 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M12 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8c0-2.71 1.35-5.11 3.41-6.55M16 22h2M6 22h7"
      }
    )
  })
);
var Broken_default100 = SvgBroken100;
var SvgBulk100 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M12 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M18 22.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default100 = SvgBulk100;
var SvgLinear100 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        stroke: props.color || "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M12 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16M6 22h12"
      }
    )
  })
);
var Linear_default100 = SvgLinear100;
var SvgOutline100 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M12 18.75c-4.83 0-8.75-3.93-8.75-8.75S7.17 1.25 12 1.25s8.75 3.93 8.75 8.75-3.92 8.75-8.75 8.75m0-16C8 2.75 4.75 6 4.75 10S8 17.25 12 17.25 19.25 14 19.25 10 16 2.75 12 2.75M18 22.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75"
      }
    )
  })
);
var Outline_default100 = SvgOutline100;
var SvgTwotone100 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6 22h12",
          opacity: 0.4
        }
      )
    ]
  })
);
var Twotone_default100 = SvgTwotone100;
var components100 = {
  bold: Bold_default100,
  broken: Broken_default100,
  bulk: Bulk_default100,
  linear: Linear_default100,
  outline: Outline_default100,
  twotone: Twotone_default100
};
var Mirror = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components100[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var mirror_default = Mirror;
var SvgBold101 = (props) => /* @__PURE__ */ jsxRuntime.jsx(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: /* @__PURE__ */ jsxRuntime.jsx(
      "path",
      {
        fill: props.color || "currentColor",
        d: "M11.97 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10m3.75 10.35L12 16.58l-.44.5c-.61.69-1.11.51-1.11-.42V12.7h-1.7c-.77 0-.98-.47-.47-1.05L12 7.42l.44-.5c.61-.69 1.11-.51 1.11.42v3.96h1.7c.77 0 .98.47.47 1.05"
      }
    )
  })
);
var Bold_default101 = SvgBold101;
var SvgBroken101 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M8.68 12.72h1.74v4.05c0 .6.74.88 1.14.43l4.26-4.84a.65.65 0 0 0-.49-1.08h-1.74V7.23c0-.6-.74-.88-1.14-.43l-4.26 4.84a.65.65 0 0 0 .49 1.08"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
        }
      )
    ]
  })
);
var Broken_default101 = SvgBroken101;
var SvgBulk101 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M15.25 11.3h-1.7V7.34c0-.92-.5-1.11-1.11-.42l-.44.5-3.72 4.23c-.51.58-.3 1.05.47 1.05h1.7v3.96c0 .92.5 1.11 1.11.42l.44-.5 3.72-4.23c.51-.58.3-1.05-.47-1.05"
        }
      )
    ]
  })
);
var Bulk_default101 = SvgBulk101;
var SvgLinear101 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M8.68 12.72h1.74v4.05c0 .6.74.88 1.14.43l4.26-4.84a.65.65 0 0 0-.49-1.08h-1.74V7.23c0-.6-.74-.88-1.14-.43l-4.26 4.84a.65.65 0 0 0 .49 1.08"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10"
        }
      )
    ]
  })
);
var Linear_default101 = SvgLinear101;
var SvgOutline101 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M11.07 18.17c-.17 0-.33-.03-.5-.09-.55-.21-.91-.72-.91-1.31v-3.3h-.98c-.56 0-1.05-.32-1.28-.82-.23-.51-.14-1.08.23-1.5l4.26-4.84c.39-.44.99-.59 1.54-.38s.91.72.91 1.31v3.3h.99c.56 0 1.05.32 1.28.82.23.51.14 1.08-.23 1.5l-4.26 4.84c-.28.3-.66.47-1.05.47m-2.17-6.2h1.51c.41 0 .75.34.75.75v3.78l3.94-4.47h-1.51c-.41 0-.75-.34-.75-.75V7.5z"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fill: props.color || "currentColor",
          d: "M11.97 22.75C6.05 22.75 1.22 17.93 1.22 12S6.05 1.25 11.97 1.25 22.72 6.07 22.72 12 17.9 22.75 11.97 22.75m0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25"
        }
      )
    ]
  })
);
var Outline_default101 = SvgOutline101;
var SvgTwotone101 = (props) => /* @__PURE__ */ jsxRuntime.jsxs(
  "svg",
  __spreadProps(__spreadValues(__spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg"
  }, props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" }), {
    fill: "none",
    viewBox: "0 0 24 24"
  }), props), {
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M8.68 12.72h1.74v4.05c0 .6.74.88 1.14.43l4.26-4.84a.65.65 0 0 0-.49-1.08h-1.74V7.23c0-.6-.74-.88-1.14-.43l-4.26 4.84a.65.65 0 0 0 .49 1.08",
          opacity: 0.34
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          stroke: props.color || "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeWidth: 1.5,
          d: "M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10"
        }
      )
    ]
  })
);
var Twotone_default101 = SvgTwotone101;
var components101 = {
  bold: Bold_default101,
  broken: Broken_default101,
  bulk: Bulk_default101,
  linear: Linear_default101,
  outline: Outline_default101,
  twotone: Twotone_default101
};
var FlashCircle = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components101[variant];
  return /* @__PURE__ */ jsxRuntime.jsx(Slot, __spreadValues({}, rest));
};
var flashCircle_default = FlashCircle;

exports.Add = add_default;
exports.AddCircle = addCircle_default;
exports.AddSquare = addSquare_default;
exports.Archive = archive_default;
exports.AutoBrightness = autoBrightness_default;
exports.Battery2 = battery2_default;
exports.BatteryCharging = batteryCharging_default;
exports.BatteryDisable = batteryDisable_default;
exports.BatteryEmpty = batteryEmpty_default;
exports.BatteryEmpty2 = batteryEmpty2_default;
exports.BatteryFull = batteryFull_default;
exports.Box2 = box2_default;
exports.Broom = broom_default;
exports.Bubble = bubble_default;
exports.Cake = cake_default;
exports.Cd = cd_default;
exports.Chart = chart_default;
exports.Chrome = chrome_default;
exports.CloseCircle = closeCircle_default;
exports.CloseSquare = closeSquare_default;
exports.Coffee = coffee_default;
exports.Computing = computing_default;
exports.Crown = crown_default;
exports.Crown2 = crown2_default;
exports.Cup = cup_default;
exports.Danger = danger_default;
exports.Diamonds = diamonds_default;
exports.Discover = discover_default;
exports.EmojiHappy = emojiHappy_default;
exports.EmojiNormal = emojiNormal_default;
exports.EmojiSad = emojiSad_default;
exports.Filter = filter_default;
exports.FilterAdd = filterAdd_default;
exports.FilterEdit = filterEdit_default;
exports.FilterRemove = filterRemove_default;
exports.FilterSearch = filterSearch_default;
exports.FilterSquare = filterSquare_default;
exports.FilterTick = filterTick_default;
exports.Flag = flag_default;
exports.Flag2 = flag2_default;
exports.FlashCircle = flashCircle_default;
exports.FlashSlash = flashSlash_default;
exports.Forbidden = forbidden_default;
exports.Forbidden2 = forbidden2_default;
exports.Ghost = ghost_default;
exports.Glass = glass_default;
exports.Grammerly = grammerly_default;
exports.HappyEmoji = happyEmoji_default;
exports.Home = home_default;
exports.Home2 = home2_default;
exports.Home3 = home3_default;
exports.HomeWifi = homeWifi_default;
exports.InfoCircle = infoCircle_default;
exports.Information = information_default;
exports.Instagram = instagram_default;
exports.Judge = judge_default;
exports.Lamp = lamp_default;
exports.Level = level_default;
exports.Menu = menu_default;
exports.Milk = milk_default;
exports.Minus = minus_default;
exports.MinusCircle = minusCircle_default;
exports.MinusSquare = minusSquare_default;
exports.Mirror = mirror_default;
exports.MoreCircle = moreCircle_default;
exports.MoreSquare = moreSquare_default;
exports.Mouse = mouse_default;
exports.MouseCircle = mouseCircle_default;
exports.MouseSquare = mouseSquare_default;
exports.Pet = pet_default;
exports.Ranking = ranking_default;
exports.Reserve = reserve_default;
exports.SafeHome = safeHome_default;
exports.Send = send_default;
exports.Send2 = send2_default;
exports.Share = share_default;
exports.Share1 = share1_default;
exports.SignPost = signPost_default;
exports.Slash = slash_default;
exports.Slider = slider_default;
exports.SmartHome = smartHome_default;
exports.Sort = sort_default;
exports.Sound = sound_default;
exports.Speedometer = speedometer_default;
exports.Status = status_default;
exports.Sticker = sticker_default;
exports.Story = story_default;
exports.TagCross = tagCross_default;
exports.TagRight = tagRight_default;
exports.TickCircle = tickCircle_default;
exports.TickSquare = tickSquare_default;
exports.Trash = trash_default;
exports.TrashSquare = trashSquare_default;
exports.Tree = tree_default;
exports.Triangle = triangle_default;
exports.Verify = verify_default;
exports.Warning2 = warning2_default;
exports.Weight = weight_default;
exports.Wifi = wifi_default;
exports.WifiSquare = wifiSquare_default;
exports._3DCube = DCube_default;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map