import Svg, { Path } from 'react-native-svg';
import { jsx, jsxs } from 'react/jsx-runtime';

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
var SvgBold = (props) => /* @__PURE__ */ jsx(
  Svg,
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: props.color || "currentColor",
    viewBox: "0 0 24 24"
  }, props), {
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: props.color || "currentColor",
        d: "m20.04 6.82-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13L3.78 6.83c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62V10.6c0-1.35-.87-3.01-1.97-3.78M12.75 18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75z"
      }
    )
  })
);
var Bold_default = SvgBold;
var SvgBroken = (props) => /* @__PURE__ */ jsx(
  Svg,
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: props.color || "currentColor",
    viewBox: "0 0 24 24"
  }, props), {
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "#171717",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M22 10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12l-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-3.1M12 17.99v-3"
      }
    )
  })
);
var Broken_default = SvgBroken;
var SvgBulk = (props) => /* @__PURE__ */ jsxs(
  Svg,
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: props.color || "currentColor",
    viewBox: "0 0 24 24"
  }, props), {
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: props.color || "currentColor",
          d: "m20.04 6.82-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13L3.78 6.83c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62V10.6c0-1.35-.87-3.01-1.97-3.78",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: props.color || "currentColor",
          d: "M12 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default = SvgBulk;
var SvgLinear = (props) => /* @__PURE__ */ jsx(
  Svg,
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: props.color || "currentColor",
    viewBox: "0 0 24 24"
  }, props), {
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "#171717",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12M12 17.99v-3"
      }
    )
  })
);
var Linear_default = SvgLinear;
var SvgOutline = (props) => /* @__PURE__ */ jsxs(
  Svg,
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: props.color || "currentColor",
    viewBox: "0 0 24 24"
  }, props), {
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: props.color || "currentColor",
          d: "M17.79 22.75H6.21c-2.74 0-4.96-2.23-4.96-4.97v-7.41c0-1.36.84-3.07 1.92-3.91l5.39-4.2C10.18 1 12.77.94 14.45 2.12l6.18 4.33c1.19.83 2.12 2.61 2.12 4.06v7.28c0 2.73-2.22 4.96-4.96 4.96M9.48 3.44l-5.39 4.2c-.71.56-1.34 1.83-1.34 2.73v7.41a3.47 3.47 0 0 0 3.46 3.47h11.58c1.91 0 3.46-1.55 3.46-3.46v-7.28c0-.96-.69-2.29-1.48-2.83l-6.18-4.33c-1.14-.8-3.02-.76-4.11.09"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: props.color || "currentColor",
          d: "M12 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default = SvgOutline;
var SvgTwotone = (props) => /* @__PURE__ */ jsxs(
  Svg,
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: props.color || "currentColor",
    viewBox: "0 0 24 24"
  }, props), {
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "#171717",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "#171717",
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
var Twotone_default = SvgTwotone;
var components = {
  bold: Bold_default,
  broken: Broken_default,
  bulk: Bulk_default,
  linear: Linear_default,
  outline: Outline_default,
  twotone: Twotone_default
};
var Home = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components[variant];
  return /* @__PURE__ */ jsx(Slot, __spreadValues({}, rest));
};
var home_default = Home;
var SvgBold2 = (props) => /* @__PURE__ */ jsx(
  Svg,
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: props.color || "currentColor",
    viewBox: "0 0 24 24"
  }, props), {
    children: /* @__PURE__ */ jsx(
      Path,
      {
        fill: props.color || "currentColor",
        d: "m20.04 6.82-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13L3.78 6.83c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62V10.6c0-1.35-.87-3.01-1.97-3.78M12.75 18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75z"
      }
    )
  })
);
var Bold_default2 = SvgBold2;
var SvgBroken2 = (props) => /* @__PURE__ */ jsx(
  Svg,
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: props.color || "currentColor",
    viewBox: "0 0 24 24"
  }, props), {
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "#171717",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M22 10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12l-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-3.1M12 17.99v-3"
      }
    )
  })
);
var Broken_default2 = SvgBroken2;
var SvgBulk2 = (props) => /* @__PURE__ */ jsxs(
  Svg,
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: props.color || "currentColor",
    viewBox: "0 0 24 24"
  }, props), {
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: props.color || "currentColor",
          d: "m20.04 6.82-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13L3.78 6.83c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62V10.6c0-1.35-.87-3.01-1.97-3.78",
          opacity: 0.4
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: props.color || "currentColor",
          d: "M12 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
        }
      )
    ]
  })
);
var Bulk_default2 = SvgBulk2;
var SvgLinear2 = (props) => /* @__PURE__ */ jsx(
  Svg,
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: props.color || "currentColor",
    viewBox: "0 0 24 24"
  }, props), {
    children: /* @__PURE__ */ jsx(
      Path,
      {
        stroke: "#171717",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12M12 17.99v-3"
      }
    )
  })
);
var Linear_default2 = SvgLinear2;
var SvgOutline2 = (props) => /* @__PURE__ */ jsxs(
  Svg,
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: props.color || "currentColor",
    viewBox: "0 0 24 24"
  }, props), {
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: props.color || "currentColor",
          d: "M17.79 22.75H6.21c-2.74 0-4.96-2.23-4.96-4.97v-7.41c0-1.36.84-3.07 1.92-3.91l5.39-4.2C10.18 1 12.77.94 14.45 2.12l6.18 4.33c1.19.83 2.12 2.61 2.12 4.06v7.28c0 2.73-2.22 4.96-4.96 4.96M9.48 3.44l-5.39 4.2c-.71.56-1.34 1.83-1.34 2.73v7.41a3.47 3.47 0 0 0 3.46 3.47h11.58c1.91 0 3.46-1.55 3.46-3.46v-7.28c0-.96-.69-2.29-1.48-2.83l-6.18-4.33c-1.14-.8-3.02-.76-4.11.09"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          fill: props.color || "currentColor",
          d: "M12 18.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75"
        }
      )
    ]
  })
);
var Outline_default2 = SvgOutline2;
var SvgTwotone2 = (props) => /* @__PURE__ */ jsxs(
  Svg,
  __spreadProps(__spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: props.color || "currentColor",
    viewBox: "0 0 24 24"
  }, props), {
    children: [
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "#171717",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12"
        }
      ),
      /* @__PURE__ */ jsx(
        Path,
        {
          stroke: "#171717",
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
var Twotone_default2 = SvgTwotone2;
var components2 = {
  bold: Bold_default2,
  broken: Broken_default2,
  bulk: Bulk_default2,
  linear: Linear_default2,
  outline: Outline_default2,
  twotone: Twotone_default2
};
var Buildings = (_a) => {
  var _b = _a, { variant = "outline" } = _b, rest = __objRest(_b, ["variant"]);
  const Slot = components2[variant];
  return /* @__PURE__ */ jsx(Slot, __spreadValues({}, rest));
};
var buildings_default = Buildings;

export { buildings_default as Buildings, home_default as Home };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map