import { ref as L, watch as jt, inject as P, openBlock as w, createElementBlock as D, createElementVNode as f, unref as x, normalizeClass as ce, createTextVNode as se, toDisplayString as E, createCommentVNode as Z, createVNode as Ce, TransitionGroup as Lo, withCtx as F, Fragment as le, renderList as we, reactive as Lt, onMounted as Me, onUpdated as Oo, withDirectives as Se, vShow as $t, withModifiers as We, nextTick as Rt, isRef as as, vModelSelect as Nr, createStaticVNode as Po, customRef as No, withKeys as ot, vModelText as nt, normalizeStyle as ls, provide as Ue, createBlock as q, resolveDynamicComponent as jo, renderSlot as Gt } from "vue";
import dt from "plupload";
var is;
const jr = (is = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : is.getAttribute("content"), Ro = localStorage.getItem("token"), Ot = (r, e = !1, { method: s = "GET", params: o = {}, json: i = !0, signal: a = null }) => {
  let d = e ? "https://sf-gate.7de-dev.space/api/vuefinder" : "https://sf-core.7de-dev.space/api/vuefinder";
  const g = { method: s };
  if (g.signal = a, g.headers = {}, g.headers["Content-Type"] = "application/json", g.headers.Accept = "application/json, */*", g.headers.Authorization = `Bearer ${Ro}`, g.headers["Access-Control-Allow-Origin"] = "*", g.headers["Access-Control-Allow-Methods"] = "", g.headers["Access-Control-Allow-Headers"] = "*", s === "GET")
    d += "?" + new URLSearchParams(o);
  else {
    const l = new FormData();
    for (const [v, p] of Object.entries(o))
      l.append(v, p);
    g.body = l;
  }
  return fetch(d, g).then((l) => l.ok ? i ? l.json() : l.text() : l.json().then(Promise.reject.bind(Promise)));
};
function Vo(r) {
  return { all: r = r || /* @__PURE__ */ new Map(), on: function(e, s) {
    var o = r.get(e);
    o ? o.push(s) : r.set(e, [s]);
  }, off: function(e, s) {
    var o = r.get(e);
    o && (s ? o.splice(o.indexOf(s) >>> 0, 1) : r.set(e, []));
  }, emit: function(e, s) {
    var o = r.get(e);
    o && o.slice().map(function(i) {
      i(s);
    }), (o = r.get("*")) && o.slice().map(function(i) {
      i(e, s);
    });
  } };
}
function Jt(r) {
  let e = localStorage.getItem(r + "_storage");
  const s = L(JSON.parse(e));
  jt(s, o);
  function o() {
    s.value === null || s.value === "" ? localStorage.removeItem(r + "_storage") : localStorage.setItem(r + "_storage", JSON.stringify(s.value));
  }
  function i(g, l) {
    s.value = Object.assign({ ...s.value }, { [g]: l });
  }
  function a() {
    s.value = null;
  }
  return { getStore: (g, l = null) => s.value === null || s.value === "" ? l : s.value.hasOwnProperty(g) ? s.value[g] : l, setStore: i, clearStore: a };
}
const Rr = L("");
function Ae() {
  function r(e) {
    Rr.value = e;
  }
  return { apiUrl: Rr, setApiUrl: r };
}
const Bo = { class: "border-neutral-300 flex justify-between items-center py-1 text-sm" }, zo = {
  key: 0,
  class: "flex text-center"
}, Ho = ["aria-label"], Uo = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
  })
], -1), Ko = [
  Uo
], Yo = ["aria-label"], Wo = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
  })
], -1), Xo = [
  Wo
], Zo = ["aria-label"], Fo = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
}, null, -1), qo = [
  Fo
], Go = ["aria-label"], Jo = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), Qo = [
  Jo
], en = ["aria-label"], tn = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
  })
], -1), rn = [
  tn
], sn = ["aria-label"], on = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), nn = [
  on
], an = ["aria-label"], ln = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), cn = [
  ln
], un = {
  key: 1,
  class: "flex text-center"
}, dn = { class: "pl-2" }, hn = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, fn = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, pn = /* @__PURE__ */ f("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), gn = /* @__PURE__ */ f("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), mn = [
  pn,
  gn
], vn = { class: "flex text-center items-center justify-end" }, bn = ["aria-label"], yn = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
}, null, -1), Sn = [
  yn
], wn = ["aria-label"], _n = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, xn = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
}, kn = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
}, Dn = ["aria-label"], Cn = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, Mn = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, En = {
  name: "VFToolbar"
}, $n = /* @__PURE__ */ Object.assign(En, {
  props: {
    data: Object
  },
  setup(r) {
    const e = P("emitter"), { getStore: s, setStore: o } = P("storage"), { t: i } = P("i18n"), a = L(s("viewport", "grid")), d = L([]), g = L(s("full-screen", !1)), l = L("");
    e.on("vf-search-query", ({ newQuery: S }) => {
      l.value = S;
    });
    const v = P("loadingState"), p = () => v.value, b = () => {
      g.value = !g.value, e.emit("vf-fullscreen-toggle");
    };
    return e.on("vf-nodes-selected", (S) => {
      d.value = S;
    }), e.on("vf-view-toggle", (S) => {
      o("viewport", S), a.value = S;
    }), (S, M) => (w(), D("div", Bo, [
      l.value.length ? (w(), D("div", un, [
        f("div", dn, [
          se(E(x(i)("Search results for")) + " ", 1),
          f("span", hn, E(l.value), 1)
        ]),
        p() ? (w(), D("svg", fn, mn)) : Z("", !0)
      ])) : (w(), D("div", zo, [
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: M[0] || (M[0] = ($) => x(e).emit("vf-modal-show", { type: "new-folder", items: d.value }))
        }, Ko, 8, Ho),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("New File"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[1] || (M[1] = ($) => x(e).emit("vf-modal-show", { type: "new-file", items: d.value }))
        }, Xo, 8, Yo),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Rename"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[2] || (M[2] = ($) => d.value.length != 1 || x(e).emit("vf-modal-show", { type: "rename", items: d.value }))
        }, [
          (w(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ce([d.value.length == 1 ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, qo, 2))
        ], 8, Zo),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[3] || (M[3] = ($) => !d.value.length || x(e).emit("vf-modal-show", { type: "delete", items: d.value }))
        }, [
          (w(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ce([d.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Qo, 2))
        ], 8, Go),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Upload"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[4] || (M[4] = ($) => x(e).emit("vf-modal-show", { type: "upload", items: d.value }))
        }, rn, 8, en),
        d.value.length == 1 && d.value[0].mime_type == "application/zip" ? (w(), D("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": x(i)("Unrchive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[5] || (M[5] = ($) => !d.value.length || x(e).emit("vf-modal-show", { type: "unarchive", items: d.value }))
        }, [
          (w(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ce([d.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, nn, 2))
        ], 8, sn)) : (w(), D("div", {
          key: 1,
          class: "mx-1.5",
          "aria-label": x(i)("Archive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[6] || (M[6] = ($) => !d.value.length || x(e).emit("vf-modal-show", { type: "archive", items: d.value }))
        }, [
          (w(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ce([d.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, cn, 2))
        ], 8, an))
      ])),
      f("div", vn, [
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (w(), D("svg", {
            onClick: M[7] || (M[7] = ($) => x(e).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, Sn))
        ], 8, bn),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Toggle Full Screen"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: b
        }, [
          (w(), D("svg", _n, [
            g.value ? (w(), D("path", xn)) : (w(), D("path", kn))
          ]))
        ], 8, wn),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: M[8] || (M[8] = ($) => l.value.length || x(e).emit("vf-view-toggle", a.value == "list" ? "grid" : "list"))
        }, [
          (w(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ce([l.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            a.value == "grid" ? (w(), D("path", Cn)) : Z("", !0),
            a.value == "list" ? (w(), D("path", Mn)) : Z("", !0)
          ], 2))
        ], 8, Dn)
      ])
    ]));
  }
});
var Tn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function In(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var cs = { exports: {} };
(function(r, e) {
  (function(s, o) {
    r.exports = o();
  })(Tn, function() {
    function s(c, u) {
      var t = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (t != null) {
        var m, n, h, y, _ = [], C = !0, B = !1;
        try {
          if (h = (t = t.call(c)).next, u === 0) {
            if (Object(t) !== t)
              return;
            C = !1;
          } else
            for (; !(C = (m = h.call(t)).done) && (_.push(m.value), _.length !== u); C = !0)
              ;
        } catch (W) {
          B = !0, n = W;
        } finally {
          try {
            if (!C && t.return != null && (y = t.return(), Object(y) !== y))
              return;
          } finally {
            if (B)
              throw n;
          }
        }
        return _;
      }
    }
    function o(c, u) {
      var t = Object.keys(c);
      if (Object.getOwnPropertySymbols) {
        var m = Object.getOwnPropertySymbols(c);
        u && (m = m.filter(function(n) {
          return Object.getOwnPropertyDescriptor(c, n).enumerable;
        })), t.push.apply(t, m);
      }
      return t;
    }
    function i(c) {
      for (var u = 1; u < arguments.length; u++) {
        var t = arguments[u] != null ? arguments[u] : {};
        u % 2 ? o(Object(t), !0).forEach(function(m) {
          l(c, m, t[m]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(m) {
          Object.defineProperty(c, m, Object.getOwnPropertyDescriptor(t, m));
        });
      }
      return c;
    }
    function a(c, u) {
      if (!(c instanceof u))
        throw new TypeError("Cannot call a class as a function");
    }
    function d(c, u) {
      for (var t = 0; t < u.length; t++) {
        var m = u[t];
        m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(c, R(m.key), m);
      }
    }
    function g(c, u, t) {
      return u && d(c.prototype, u), t && d(c, t), Object.defineProperty(c, "prototype", {
        writable: !1
      }), c;
    }
    function l(c, u, t) {
      return u = R(u), u in c ? Object.defineProperty(c, u, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : c[u] = t, c;
    }
    function v(c, u) {
      if (typeof u != "function" && u !== null)
        throw new TypeError("Super expression must either be null or a function");
      c.prototype = Object.create(u && u.prototype, {
        constructor: {
          value: c,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(c, "prototype", {
        writable: !1
      }), u && b(c, u);
    }
    function p(c) {
      return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, p(c);
    }
    function b(c, u) {
      return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(m, n) {
        return m.__proto__ = n, m;
      }, b(c, u);
    }
    function S() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function M(c, u, t) {
      return S() ? M = Reflect.construct.bind() : M = function(n, h, y) {
        var _ = [null];
        _.push.apply(_, h);
        var C = Function.bind.apply(n, _), B = new C();
        return y && b(B, y.prototype), B;
      }, M.apply(null, arguments);
    }
    function $(c) {
      return Function.toString.call(c).indexOf("[native code]") !== -1;
    }
    function I(c) {
      var u = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return I = function(m) {
        if (m === null || !$(m))
          return m;
        if (typeof m != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof u < "u") {
          if (u.has(m))
            return u.get(m);
          u.set(m, n);
        }
        function n() {
          return M(m, arguments, p(this).constructor);
        }
        return n.prototype = Object.create(m.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), b(n, m);
      }, I(c);
    }
    function T(c) {
      if (c === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return c;
    }
    function H(c, u) {
      if (u && (typeof u == "object" || typeof u == "function"))
        return u;
      if (u !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return T(c);
    }
    function V(c) {
      var u = S();
      return function() {
        var m = p(c), n;
        if (u) {
          var h = p(this).constructor;
          n = Reflect.construct(m, arguments, h);
        } else
          n = m.apply(this, arguments);
        return H(this, n);
      };
    }
    function j(c, u) {
      for (; !Object.prototype.hasOwnProperty.call(c, u) && (c = p(c), c !== null); )
        ;
      return c;
    }
    function z() {
      return typeof Reflect < "u" && Reflect.get ? z = Reflect.get.bind() : z = function(u, t, m) {
        var n = j(u, t);
        if (n) {
          var h = Object.getOwnPropertyDescriptor(n, t);
          return h.get ? h.get.call(arguments.length < 3 ? u : m) : h.value;
        }
      }, z.apply(this, arguments);
    }
    function X(c, u) {
      return G(c) || s(c, u) || te(c, u) || pe();
    }
    function k(c) {
      return N(c) || oe(c) || te(c) || ve();
    }
    function N(c) {
      if (Array.isArray(c))
        return ue(c);
    }
    function G(c) {
      if (Array.isArray(c))
        return c;
    }
    function oe(c) {
      if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null)
        return Array.from(c);
    }
    function te(c, u) {
      if (c) {
        if (typeof c == "string")
          return ue(c, u);
        var t = Object.prototype.toString.call(c).slice(8, -1);
        if (t === "Object" && c.constructor && (t = c.constructor.name), t === "Map" || t === "Set")
          return Array.from(c);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
          return ue(c, u);
      }
    }
    function ue(c, u) {
      (u == null || u > c.length) && (u = c.length);
      for (var t = 0, m = new Array(u); t < u; t++)
        m[t] = c[t];
      return m;
    }
    function ve() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function pe() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function ge(c, u) {
      var t = typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (!t) {
        if (Array.isArray(c) || (t = te(c)) || u && c && typeof c.length == "number") {
          t && (c = t);
          var m = 0, n = function() {
          };
          return {
            s: n,
            n: function() {
              return m >= c.length ? {
                done: !0
              } : {
                done: !1,
                value: c[m++]
              };
            },
            e: function(C) {
              throw C;
            },
            f: n
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var h = !0, y = !1, _;
      return {
        s: function() {
          t = t.call(c);
        },
        n: function() {
          var C = t.next();
          return h = C.done, C;
        },
        e: function(C) {
          y = !0, _ = C;
        },
        f: function() {
          try {
            !h && t.return != null && t.return();
          } finally {
            if (y)
              throw _;
          }
        }
      };
    }
    function A(c, u) {
      if (typeof c != "object" || c === null)
        return c;
      var t = c[Symbol.toPrimitive];
      if (t !== void 0) {
        var m = t.call(c, u || "default");
        if (typeof m != "object")
          return m;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (u === "string" ? String : Number)(c);
    }
    function R(c) {
      var u = A(c, "string");
      return typeof u == "symbol" ? u : String(u);
    }
    var O = function(u, t, m) {
      var n = u.x, h = u.y, y = m.x, _ = m.y, C = {
        "+": {
          x: n + y,
          y: h + _
        },
        "-": {
          x: n - y,
          y: h - _
        },
        "*": {
          x: n * y,
          y: h * _
        },
        "/": {
          x: n / y,
          y: h / _
        }
      };
      return C[t];
    }, ee = function(u) {
      return {
        x: u.left,
        y: u.top
      };
    }, U = function(u) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return {
        left: u.x,
        top: u.y,
        right: u.x,
        bottom: u.y,
        width: t,
        height: t
      };
    }, _e = function(u) {
      return {
        x: u,
        y: u
      };
    }, be = function(c, u) {
      var t = u;
      window.addEventListener("resize", t), window.addEventListener("scroll", t);
      var m = new MutationObserver(t);
      c.forEach(function(h, y) {
        m.observe(h, {
          childList: y !== 0,
          attributes: !0
        });
      });
      var n = function() {
        return fo(m, t);
      };
      return {
        observer: m,
        callback: t,
        cleanup: n
      };
    }, xt = function(c) {
      var u = Ct(c);
      return u.x || u.y ? !0 : c instanceof Document ? c.body ? !!(c.body.scrollTop = 1) : !!(c.documentElement.scrollTop = 1) : !!(c.scrollTop = 1);
    }, kt = function() {
      var c = document.createElement("div");
      return c.style.position = "fixed", c.style.overflow = "hidden", c.style.pointerEvents = "none", c.style.zIndex = "999999999999999999", c;
    }, Kt = function(c) {
      var u = document.createElement("div");
      return u.style.position = "absolute", c || (u.style.background = "rgba(0, 175, 255, 0.2)", u.style.border = "1px solid rgba(0, 175, 255, 0.8)", u.style.display = "none", u.style.pointerEvents = "none"), u;
    }, Dt = function(c, u) {
      var t;
      return function() {
        for (var m = arguments.length, n = new Array(m), h = 0; h < m; h++)
          n[h] = arguments[h];
        var y = function() {
          t = null, c.apply(void 0, n);
        };
        clearTimeout(t), t = setTimeout(y, u);
      };
    }, Yt = function() {
      var c, u, t, m;
      return {
        y: ((c = document.body) === null || c === void 0 ? void 0 : c.scrollTop) || ((u = document.documentElement) === null || u === void 0 ? void 0 : u.scrollTop) || 0,
        x: ((t = document.body) === null || t === void 0 ? void 0 : t.scrollLeft) || ((m = document.documentElement) === null || m === void 0 ? void 0 : m.scrollLeft) || 0
      };
    }, Mr = function(c) {
      var u = function t(m) {
        var n, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = (n = m[h]) === null || n === void 0 ? void 0 : n.parentNode;
        return y ? (m.push(y), h++, t(m, h)) : m;
      };
      return u([c]);
    }, to = function(c, u) {
      if (c instanceof Document)
        return {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      var t = c.getBoundingClientRect();
      return {
        top: t.top,
        left: t.left,
        bottom: t.bottom,
        right: t.right,
        width: (c.clientWidth || t.width) * u,
        height: (c.clientHeight || t.height) * u
      };
    }, Er = function(c, u) {
      var t = {
        top: Number.POSITIVE_INFINITY,
        left: Number.POSITIVE_INFINITY,
        bottom: Number.NEGATIVE_INFINITY,
        right: Number.NEGATIVE_INFINITY,
        width: Number.NEGATIVE_INFINITY,
        height: Number.NEGATIVE_INFINITY
      };
      return Ne(c).forEach(function(m) {
        var n = u.getRect(m);
        t.top = Math.min(t.top, n.top), t.left = Math.min(t.left, n.left), t.bottom = Math.max(t.bottom, n.bottom), t.right = Math.max(t.right, n.right);
      }), t.height = t.bottom - t.top, t.width = t.right - t.left, t;
    }, Ct = function(c) {
      return !c || c instanceof Document ? Yt() : {
        x: c.scrollLeft >= 0 ? c.scrollLeft : Yt().x,
        y: c.scrollTop >= 0 ? c.scrollTop : Yt().y
      };
    }, $r = function(c) {
      var u = c.elementRect, t = c.containerRect, m = c.tolerance, n = m === void 0 ? {
        x: 0,
        y: 0
      } : m, h = [];
      return u.top - n.y < t.top && h.push("top"), u.left - n.x < t.left && h.push("left"), u.bottom + n.y > t.bottom && h.push("bottom"), u.right + n.y > t.right && h.push("right"), /** @type {DSEdges} */
      h;
    }, ro = function(c) {
      var u = c.event;
      return {
        x: u.clientX,
        y: u.clientY
      };
    }, so = function(c) {
      var u = c.scrollAmount, t = c.initialPointerPos, m = c.pointerPos, n = {};
      return m.x > t.x - u.x ? (n.left = t.x - u.x, n.width = m.x - t.x + u.x) : (n.left = m.x, n.width = t.x - m.x - u.x), m.y > t.y - u.y ? (n.top = t.y - u.y, n.height = m.y - t.y + u.y) : (n.top = m.y, n.height = t.y - m.y - u.y), n;
    }, Tr = function(u) {
      var t = {
        x: 0,
        y: 0
      }, m = window.getComputedStyle(u);
      if (!m.transform || m.transform === "none")
        return t;
      if (m.transform.indexOf("3d") >= 0) {
        var n = m.transform.trim().match(/matrix3d\((.*?)\)/);
        if (n && n.length) {
          var h, y = (h = n[1]) === null || h === void 0 ? void 0 : h.split(",");
          t.x = parseInt(y[12]) || 0, t.y = parseInt(y[13]) || 0;
        }
        return t;
      }
      var _ = m.transform.trim().match(/matrix\((.*?)\)/);
      if (_ && _.length) {
        var C, B = (C = _[1]) === null || C === void 0 ? void 0 : C.split(",");
        t.x = parseInt(B[4]) || 0, t.y = parseInt(B[5]) || 0;
      }
      return t;
    }, oo = function(u) {
      var t = u.style.transform;
      if (!t || t.indexOf("translate") < 0)
        return Tr(u);
      var m = {
        x: 0,
        y: 0
      }, n = t.trim().match(/translate[3dD]*?\(.*?\)/);
      if (n) {
        var h, y = (h = n[0]) === null || h === void 0 ? void 0 : h.split("(");
        if (y) {
          var _, C = (_ = y[1]) === null || _ === void 0 ? void 0 : _.split(",");
          m.x = parseInt(C[0]) || 0, m.y = parseInt(C[1]) || 0;
        }
      }
      return !m.x && !m.x ? Tr(u) : m;
    }, no = function(u) {
      var t = u.style, m = {
        x: parseInt(t.left) || 0,
        y: parseInt(t.top) || 0
      };
      if (!m.x && !m.x) {
        var n = window.getComputedStyle(u);
        return {
          x: parseInt(n.left) || 0,
          y: parseInt(n.top) || 0
        };
      }
      return m;
    }, io = function(c, u) {
      return u ? oo(c) : no(c);
    }, ao = function(c) {
      var u = c.element, t = c.edges, m = c.elementRect, n = c.containerRect, h = c.elementPos, y = c.useTransform;
      t.includes("top") && lt(u, {
        y: h.y + n.top - m.top,
        x: h.x
      }, y), t.includes("left") && lt(u, {
        y: h.y,
        x: h.x + n.left - m.left
      }, y), t.includes("bottom") && lt(u, {
        y: h.y + n.bottom - m.bottom,
        x: h.x
      }, y), t.includes("right") && lt(u, {
        y: h.y,
        x: h.x + n.right - m.right
      }, y);
    }, Ir = function(c) {
      var u = c.computedStyle, t = c.node, m = u.position, n = m === "absolute" || m === "relative" || m === "fixed";
      !(t instanceof Document) && !n && (t.style.position = "relative");
    }, lo = function(c) {
      var u = c.shiftKey, t = c.keyboardDragSpeed, m = c.zoom, n = c.key, h = c.dragKeys, y = c.scrollDiff, _ = c.canScroll, C = c.scrollCallback, B = {
        x: 0,
        y: 0
      }, W = u ? t * 4 * m : t * m;
      return h.left.includes(n) && (B.x = y.x || -W, !u && !y.x && _ && C(["left"], t)), h.right.includes(n) && (B.x = y.x || W, !u && !y.x && _ && C(["right"], t)), h.up.includes(n) && (B.y = y.y || -W, !u && !y.y && _ && C(["top"], t)), h.down.includes(n) && (B.y = y.y || W, !u && !y.y && _ && C(["bottom"], t)), B;
    }, co = function(c) {
      var u = c.element, t = c.force, m = c.multiSelectionToggle, n = c.SelectedSet, h = c.hoverClassName;
      u.classList.contains(h) && !t || (n.has(u) ? m && n.delete(u) : n.add(u), u.classList.add(h));
    }, uo = function(c) {
      var u = c.element, t = c.force, m = c.SelectedSet, n = c.PrevSelectedSet, h = c.hoverClassName;
      if (!u.classList.contains(h) && !t)
        return !1;
      var y = m.has(u), _ = n.has(u);
      y && !_ ? m.delete(u) : !y && _ && m.add(u), u.classList.remove(h);
    }, at = function(u, t, m) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(u, '" is not of type "').concat(t, '".'));
    }, Y = function(u, t, m, n) {
      if (t === void 0)
        return m ? l({}, u, n) : {};
      if (t === null)
        return l({}, u, null);
      var h = !0, y = !1, _ = typeof n == "string";
      _ && (h = typeof t == "string" || t instanceof String), _ && !h && (y = !0, at(u, "string"));
      var C = !Number.isNaN(n) && typeof n == "number";
      C && (h = !Number.isNaN(t) && typeof t == "number"), C && !h && (y = !0, at(u, "number"));
      var B = Object.prototype.toString.call(n) === "[object Object]";
      B && (h = Object.prototype.toString.call(t) === "[object Object]"), B && !h && (y = !0, at(u, "object"));
      var W = typeof n == "boolean";
      W && (h = typeof t == "boolean"), W && !h && (y = !0, at(u, "boolean"));
      var ie = Array.isArray(n);
      ie && (h = Array.isArray(t)), ie && !h && (y = !0, at(u, "array"));
      var xe = y || m;
      return u === "dragKeys" && h ? l({}, u, Object.assign(n, t)) : u === "dragKeys" && !h ? xe ? l({}, u, n) : {} : (u === "dropZones" && h && new Set(t.map(function(ke) {
        return ke.id;
      })).size !== t.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), h ? l({}, u, t) : xe ? l({}, u, n) : {});
    }, ho = function(c, u) {
      return i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i(i({}, Y("area", c.area, u, document)), Y("selectables", c.selectables, u, null)), Y("autoScrollSpeed", c.autoScrollSpeed, u, 5)), Y("overflowTolerance", c.overflowTolerance, u, {
        x: 25,
        y: 25
      })), Y("zoom", c.zoom, u, 1)), Y("customStyles", c.customStyles, u, !1)), Y("multiSelectMode", c.multiSelectMode, u, !1)), Y("multiSelectToggling", c.multiSelectToggling, u, !0)), Y("multiSelectKeys", c.multiSelectKeys, u, ["Control", "Shift", "Meta"])), Y("selector", c.selector, u, null)), Y("selectionThreshold", c.selectionThreshold, u, 0)), Y("draggability", c.draggability, u, !0)), Y("immediateDrag", c.immediateDrag, u, !0)), Y("keyboardDrag", c.keyboardDrag, u, !0)), Y("dragKeys", c.dragKeys, u, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), Y("keyboardDragSpeed", c.keyboardDragSpeed, u, 10)), Y("useTransform", c.useTransform, u, !0)), Y("refreshMemoryRate", c.refreshMemoryRate, u, 80)), Y("dropZones", c.dropZones, u, [])), Y("dropInsideThreshold", c.dropInsideThreshold, u, 1)), Y("dropTargetThreshold", c.dropTargetThreshold, u, 0)), Y("usePointerEvents", c.usePointerEvents, u, !1)), Y("hoverClass", c.hoverClass, u, "ds-hover")), Y("selectableClass", c.selectableClass, u, "ds-selectable")), Y("selectedClass", c.selectedClass, u, "ds-selected")), Y("selectorClass", c.selectorClass, u, "ds-selector")), Y("selectorAreaClass", c.selectorAreaClass, u, "ds-selector-area")), Y("droppedTargetClass", c.droppedTargetClass, u, "ds-dropped-target")), Y("droppedInsideClass", c.droppedInsideClass, u, "ds-dropped-inside")), Y("droppableClass", c.droppableClass, u, "ds-droppable")), Y("dropZoneClass", c.dropZoneClass, u, "ds-dropzone")), Y("dropZoneReadyClass", c.dropZoneReadyClass, u, "ds-dropzone-ready")), Y("dropZoneTargetClass", c.dropZoneTargetClass, u, "ds-dropzone-target")), Y("dropZoneInsideClass", c.dropZoneInsideClass, u, "ds-dropzone-inside")), Y("dragAsBlock", c.dragAsBlock, u, !1));
    }, Ge = function(c, u) {
      var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, m = c;
      if (t > 0) {
        var n = (c.right - c.left) * t, h = (c.bottom - c.top) * t;
        m = {
          left: c.left + n,
          right: c.right - n,
          top: c.top + h,
          bottom: c.bottom - h
        };
      }
      return m.left < u.right && // 1.
      m.right > u.left && // 2.
      m.top < u.bottom && // 3.
      m.bottom > u.top;
    }, Ar = function(c) {
      var u = c.element, t = c.posDirection, m = c.containerRect, n = c.useTransform, h = io(u, n), y = O(h, "+", t);
      lt(u, y, n);
      var _ = u.getBoundingClientRect(), C = $r({
        elementRect: _,
        containerRect: m
      });
      ao({
        element: u,
        edges: C,
        elementRect: _,
        containerRect: m,
        elementPos: y,
        useTransform: n
      });
    }, fo = function(c, u) {
      window.removeEventListener("resize", u), window.removeEventListener("scroll", u), c.disconnect();
    }, po = function(c, u, t) {
      if (u.length) {
        var m = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, n = c instanceof Document ? m || document.body : c, h = u.includes("top") && n.scrollTop > 0, y = u.includes("bottom") && n.scrollTop < n.scrollHeight, _ = u.includes("left") && n.scrollLeft > 0, C = u.includes("right") && n.scrollLeft < n.scrollWidth;
        h && (n.scrollTop -= 1 * t), y && (n.scrollTop += 1 * t), _ && (n.scrollLeft -= 1 * t), C && (n.scrollLeft += 1 * t);
      }
    }, lt = function(c, u, t) {
      if (t) {
        var m = c.style.transform;
        c.style.transform = "translate3d(".concat(u.x, "px,").concat(u.y, "px,1px) ").concat(m.replace(/translate.*?\)/g, ""));
      } else
        c.style.left = "".concat(u.x, "px"), c.style.top = "".concat(u.y, "px");
      return c;
    }, go = function(c) {
      for (var u = c.subscribe, t = c.publish, m = c.Interaction, n = c.SelectedSet, h = c.DropZones, y = {
        "Selected:added": [{
          name: "elementselect"
        }],
        "Selected:removed": [{
          name: "elementunselect"
        }],
        "Area:scroll": [{
          name: "autoscroll"
        }],
        // scroll_directions, scroll_multiplier
        "Interaction:start": [{
          name: "dragstart"
        }],
        // event, isDraggingKeyboard
        "Interaction:update": [
          // event, isDraggingKeyboard
          {
            name: "dragmove",
            condition: function(ie) {
              return ie.event;
            }
          }
        ],
        "Interaction:end": [
          // event, isDraggingKeyboard
          {
            name: "callback",
            extraData: function() {
              var ie = h.getTarget();
              return i({}, ie ? {
                dropTarget: ie.toObject()
              } : {});
            }
          }
        ]
      }, _ = function() {
        var ie = X(B[C], 2), xe = ie[0], ke = ie[1];
        ["pre", !1].forEach(function(Ee) {
          return u(Ee ? "".concat(xe, ":").concat(Ee) : xe, function(ne) {
            return ke.forEach(function(me) {
              return (!me.condition || me.condition(ne)) && t(Ee ? "".concat(Ee).concat(me.name) : me.name, i(i({
                items: n.elements,
                isDragging: m.isDragging
              }, ne), me.extraData ? me.extraData(ne) : {}));
            });
          });
        });
      }, C = 0, B = Object.entries(y); C < B.length; C++)
        _();
    }, Ne = function(c) {
      return c ? !Array.isArray(c) && (c instanceof HTMLElement || c instanceof SVGElement) ? [c] : k(new Set(k(c))) : [];
    }, Lr = function(c, u) {
      c.style.left = "".concat(u.left, "px"), c.style.top = "".concat(u.top, "px"), c.style.width = "".concat(u.width, "px"), c.style.height = "".concat(u.height, "px");
    }, mo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        a(this, c), l(this, "DS", void 0), l(this, "_observers", void 0), l(this, "_node", void 0), l(this, "_parentNodes", void 0), l(this, "_computedStyle", void 0), l(this, "_computedBorder", void 0), l(this, "_rect", void 0), l(this, "setArea", function(n) {
          t.reset(), t._node = n, Ir({
            computedStyle: t.computedStyle,
            node: t._node
          }), setTimeout(function() {
            t.DS.PubSub.publish("Area:modified:pre", {
              item: t
            }), t.reset(), t.DS.PubSub.publish("Area:modified", {
              item: t
            });
          });
        }), l(this, "start", function() {
          t._observers = be(t.parentNodes, Dt(function(n) {
            t.DS.PubSub.publish("Area:modified:pre", {
              event: n,
              item: t
            }), t.reset(), t.DS.PubSub.publish("Area:modified", {
              event: n,
              item: t
            });
          }, 60));
        }), l(this, "reset", function() {
          t._computedStyle = void 0, t._rect = void 0, t._computedBorder = void 0, t._parentNodes = void 0;
        }), l(this, "stop", function() {
          t._observers.cleanup(), t.reset();
        }), l(this, "scroll", function(n, h) {
          var y = {
            scroll_directions: n,
            scroll_multiplier: h
          };
          t.DS.PubSub.publish("Area:scroll:pre", y), po(t._node, n, h), t.DS.PubSub.publish("Area:scroll", y);
        }), this.DS = m, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(n) {
          var h = n.settings;
          t.setArea(h.area);
        }), this.DS.PubSub.subscribe("Interaction:init", this.start), this.DS.PubSub.subscribe("Interaction:end", this.reset);
      }
      return g(c, [{
        key: "HTMLNode",
        get: (
          /// ///////////////////////////////////////////////////////////////////////////////////
          // Node Getters
          function() {
            return (
              /** @type {DSArea} */
              this._node
            );
          }
        )
        /**
         * The computed border from the element (caches result)
         * @type {{top:number,bottom:number,left:number,right:number}}
         */
      }, {
        key: "computedBorder",
        get: function() {
          return this._computedBorder ? this._computedBorder : {
            top: parseInt(this.computedStyle.borderTopWidth),
            bottom: parseInt(this.computedStyle.borderBottomWidth),
            left: parseInt(this.computedStyle.borderLeftWidth),
            right: parseInt(this.computedStyle.borderRightWidth)
          };
        }
        /**
         * The computed styles from the element (caches result)
         * @type {CSSStyleDeclaration}
         */
      }, {
        key: "computedStyle",
        get: function() {
          return this._computedStyle ? this._computedStyle : this.HTMLNode instanceof Document ? this._computedStyle = window.getComputedStyle(this.HTMLNode.body || this.HTMLNode.documentElement) : this._computedStyle = window.getComputedStyle(this.HTMLNode);
        }
        /**
         * The element rect (caches result) (without scrollbar or borders)
         * @type {DSBoundingRect}
         */
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = to(this.HTMLNode, this.DS.stores.SettingsStore.s.zoom);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Mr(this.HTMLNode);
        }
      }]), c;
    }(), vo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        a(this, c), l(this, "_prevCursorPos", void 0), l(this, "_prevScrollPos", void 0), l(this, "_elements", []), l(this, "_dragKeys", void 0), l(this, "_dragKeysFlat", []), l(this, "_selectionRect", void 0), l(this, "assignDragkeys", function() {
          t._dragKeys = {
            up: t.DS.stores.SettingsStore.s.dragKeys.up.map(function(n) {
              return n.toLowerCase();
            }),
            down: t.DS.stores.SettingsStore.s.dragKeys.down.map(function(n) {
              return n.toLowerCase();
            }),
            left: t.DS.stores.SettingsStore.s.dragKeys.left.map(function(n) {
              return n.toLowerCase();
            }),
            right: t.DS.stores.SettingsStore.s.dragKeys.right.map(function(n) {
              return n.toLowerCase();
            })
          }, t._dragKeysFlat = [].concat(k(t._dragKeys.up), k(t._dragKeys.down), k(t._dragKeys.left), k(t._dragKeys.right));
        }), l(this, "keyboardDrag", function(n) {
          var h = n.event, y = n.key, _ = y.toLowerCase();
          if (!(!t.DS.stores.SettingsStore.s.keyboardDrag || !t._dragKeysFlat.includes(_) || !t.DS.SelectedSet.size || !t.DS.stores.SettingsStore.s.draggability || t.DS.continue)) {
            var C = {
              event: h,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            t.DS.publish(["Interaction:start:pre", "Interaction:start"], C), t._elements = t.DS.getSelection(), t.DS.stores.SettingsStore.s.dragAsBlock && (t._selectionRect = Er(t._elements, t.DS.SelectableSet)), t.handleZIndex(!0);
            var B = lo({
              shiftKey: t.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: t.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: t.DS.stores.SettingsStore.s.zoom,
              key: _,
              scrollCallback: t.DS.Area.scroll,
              scrollDiff: t._scrollDiff,
              canScroll: t.DS.stores.ScrollStore.canScroll,
              dragKeys: t._dragKeys
            });
            t.DS.stores.SettingsStore.s.dragAsBlock && (B = t.limitDirection(B)), t._elements.forEach(function(W) {
              return Ar({
                element: W,
                posDirection: B,
                containerRect: t.DS.SelectorArea.rect,
                useTransform: t.DS.stores.SettingsStore.s.useTransform
              });
            }), t.DS.publish(["Interaction:update:pre", "Interaction:update"], C);
          }
        }), l(this, "keyboardEnd", function(n) {
          var h = n.event, y = n.key, _ = y.toLowerCase();
          if (!(!t.DS.stores.SettingsStore.s.keyboardDrag || !t._dragKeysFlat.includes(_) || !t.DS.SelectedSet.size || !t.DS.stores.SettingsStore.s.draggability)) {
            var C = {
              event: h,
              isDragging: t.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            t.DS.publish(["Interaction:end:pre", "Interaction:end"], C);
          }
        }), l(this, "start", function(n) {
          var h = n.isDragging, y = n.isDraggingKeyboard;
          !h || y || (t._prevCursorPos = null, t._prevScrollPos = null, t._elements = t.DS.getSelection(), t.DS.stores.SettingsStore.s.dragAsBlock && (t._selectionRect = Er(t._elements, t.DS.SelectableSet)), t.handleZIndex(!0));
        }), l(this, "stop", function(n) {
          n != null && n.isKeyboard || (t._prevCursorPos = null, t._prevScrollPos = null, t.handleZIndex(!1), t._elements = []);
        }), l(this, "update", function(n) {
          var h = n.isDragging, y = n.isDraggingKeyboard;
          if (!(!h || !t._elements.length || y || t.DS.continue)) {
            var _ = O(t._cursorDiff, "+", t._scrollDiff);
            t.DS.stores.SettingsStore.s.dragAsBlock && (_ = t.limitDirection(_)), t._elements.forEach(function(C) {
              return Ar({
                element: C,
                posDirection: _,
                containerRect: t.DS.SelectorArea.rect,
                useTransform: t.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), l(this, "limitDirection", function(n) {
          var h = t.DS.SelectorArea.rect, y = t.DS.stores.ScrollStore.scrollAmount, _ = {
            top: h.top - t._selectionRect.top + y.y,
            left: h.left - t._selectionRect.left + y.x,
            bottom: h.bottom - t._selectionRect.bottom + y.y,
            right: h.right - t._selectionRect.right + y.x
          };
          return n.x === 0 && n.y === 0 || (n.y < 0 && (n.y = Math.max(n.y, _.top)), n.x < 0 && (n.x = Math.max(n.x, _.left)), n.y > 0 && (n.y = Math.min(n.y, _.bottom)), n.x > 0 && (n.x = Math.min(n.x, _.right)), t._selectionRect.top += n.y, t._selectionRect.bottom += n.y, t._selectionRect.left += n.x, t._selectionRect.right += n.x), n;
        }), l(this, "handleZIndex", function(n) {
          t._elements.forEach(function(h) {
            return h.style.zIndex = "".concat((parseInt(h.style.zIndex) || 0) + n ? 9999 : -9998);
          });
        }), this.DS = m, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return g(c, [{
        key: "_cursorDiff",
        get: function() {
          var t = this.DS.stores.PointerStore.currentVal, m = this._prevCursorPos ? O(t, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = t, m;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var t = this.DS.stores.ScrollStore.currentVal, m = this._prevScrollPos ? O(t, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = t, m;
        }
      }]), c;
    }(), bo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS, n = u.id, h = u.element, y = u.droppables;
        a(this, c), l(this, "id", void 0), l(this, "element", void 0), l(this, "_droppables", void 0), l(this, "_rect", void 0), l(this, "_observers", void 0), l(this, "_timeout", void 0), l(this, "_itemsDropped", []), l(this, "_itemsInside", void 0), l(this, "setReadyClasses", function(_) {
          if (!t.isDestroyed) {
            var C = t.droppables.filter(function(B) {
              return t.DS.SelectedSet.has(B);
            });
            C.length && (C.forEach(function(B) {
              B.classList[_]("".concat(t.Settings.droppableClass)), B.classList[_]("".concat(t.Settings.droppableClass, "-").concat(t.id));
            }), t.element.classList[_]("".concat(t.Settings.dropZoneReadyClass)));
          }
        }), l(this, "handleNoDrop", function() {
          var _;
          t.isDestroyed || (t.DS.SelectedSet.forEach(function(C) {
            C.classList.remove(t.Settings.droppedTargetClass), C.classList.remove("".concat(t.Settings.droppedTargetClass, "-").concat(t.id));
          }), t._itemsDropped = t._itemsDropped.filter(function(C) {
            return !t.DS.SelectedSet.has(C);
          }), (_ = t._itemsDropped) !== null && _ !== void 0 && _.length || t.element.classList.remove("".concat(t.Settings.dropZoneTargetClass)));
        }), l(this, "handleDrop", function() {
          var _, C, B;
          t.isDestroyed || (t._itemsDropped = k(new Set([].concat(k(t._itemsDropped), k((_ = t.droppables) === null || _ === void 0 ? void 0 : _.filter(function(W) {
            return t.DS.SelectedSet.has(W);
          }))))), (C = t._itemsDropped) === null || C === void 0 || C.forEach(function(W) {
            W.classList.add("".concat(t.Settings.droppedTargetClass)), W.classList.add("".concat(t.Settings.droppedTargetClass, "-").concat(t.id));
          }), (B = t._itemsDropped) !== null && B !== void 0 && B.length && t.element.classList.add("".concat(t.Settings.dropZoneTargetClass)));
        }), l(this, "handleItemsInsideClasses", function() {
          var _ = !1;
          t.droppables.forEach(function(C) {
            t.itemsInside.includes(C) ? (C.classList.add("".concat(t.Settings.droppedInsideClass)), C.classList.add("".concat(t.Settings.droppedInsideClass, "-").concat(t.id)), _ = !0) : (C.classList.remove("".concat(t.Settings.droppedInsideClass, "-").concat(t.id)), C.className.includes("".concat(t.Settings.droppedInsideClass, "-")) || C.classList.remove("".concat(t.Settings.droppedInsideClass)));
          }), _ ? t.element.classList.add("".concat(t.Settings.dropZoneInsideClass)) : t.element.classList.remove("".concat(t.Settings.dropZoneInsideClass));
        }), l(this, "start", function(_) {
          var C = _.isDragging;
          !C || t.isDestroyed || t.setReadyClasses("add");
        }), l(this, "stop", function(_) {
          var C = _.isDragging;
          !C || t.isDestroyed || (t.setReadyClasses("remove"), t.handleItemsInsideClasses());
        }), l(this, "toObject", function() {
          return {
            id: t.id,
            element: t.element,
            droppables: t.droppables,
            itemsDropped: t.itemsDropped,
            itemsInside: t.itemsInside
          };
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.id = n, this.element = h, y && (this.droppables = Ne(y)), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(_) {
          var C = _.settings;
          t.element && (t.element.classList.remove(C["dropZoneClass:pre"]), t.element.classList.add(C.dropZoneClass));
        }), this._observers = be(this.parentNodes, Dt(function() {
          return t._rect = null;
        }, this.Settings.refreshMemoryRate)), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop);
      }
      return g(c, [{
        key: "destroy",
        value: function() {
          var t = this;
          this._observers.cleanup(), this.element.classList.remove("".concat(this.Settings.dropZoneClass)), this.element.classList.remove("".concat(this.Settings.dropZoneTargetClass)), this.element.classList.remove("".concat(this.Settings.dropZoneReadyClass)), this.droppables.forEach(function(m) {
            m.classList.remove("".concat(t.Settings.droppedTargetClass)), m.classList.remove("".concat(t.Settings.droppedTargetClass, "-").concat(t.id)), m.classList.remove("".concat(t.Settings.droppableClass)), m.classList.remove("".concat(t.Settings.droppableClass, "-").concat(t.id));
          }), this.DS.unsubscribe("Interaction:start", this.start), this.DS.unsubscribe("Interaction:end", this.stop), this.element = null, this.droppables = null, this.id = null, this._itemsDropped = null, this._itemsInside = null, this.isDestroyed = !0;
        }
        /**
         * @returns {DSDropZone}
         */
      }, {
        key: "rect",
        get: function() {
          return this.isDestroyed ? null : this._rect ? this._rect : this._rect = this.element.getBoundingClientRect();
        }
      }, {
        key: "itemsDropped",
        get: function() {
          return this.isDestroyed ? null : this._itemsDropped;
        }
      }, {
        key: "itemsInside",
        get: function() {
          var t = this;
          return this.isDestroyed ? null : this._itemsInside ? this._itemsInside : (this._itemsInside = this.droppables.flatMap(function(m) {
            return Ge(t.DS.SelectableSet.rects.get(m), t.rect, t.Settings.dropInsideThreshold) ? [m] : [];
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return t._itemsInside = null;
          }, this.Settings.refreshMemoryRate), this._itemsInside);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Mr(this.element);
        }
      }, {
        key: "droppables",
        get: function() {
          return this._droppables ? this._droppables : this.DS.SelectableSet.elements;
        },
        set: function(t) {
          this._droppables = t;
        }
      }]), c;
    }(), yo = /* @__PURE__ */ g(
      /**
       * Get the drop zone by the zone element
       * @type {Map<DSElement, DropZone>}
       * @private
       */
      /**
       * Get the drop zone by the zone id
       * @type {Map<string, DropZone>}
       * @private
       */
      /**
       * Get the drop zones by one zone item
       * @type {Map<DSElement,DropZone[]>}
       * @private
       */
      /**
       * Get the drop zones by one zone item
       * @type {DropZone[]}
       * @private
       */
      /**
       * @constructor Drag
       * @param {{DS:DragSelect}} obj
       * @ignore
       */
      function c(u) {
        var t = this, m = u.DS;
        a(this, c), l(this, "_zoneByElement", /* @__PURE__ */ new Map()), l(this, "_zoneById", /* @__PURE__ */ new Map()), l(this, "_zonesByDroppable", /* @__PURE__ */ new Map()), l(this, "_zones", void 0), l(this, "setDropZones", function(n) {
          var h = n.dropZones;
          h && (t._zones && t._zones.forEach(function(y) {
            return y.destroy();
          }), t._zones = h.map(function(y) {
            return new bo(i({
              DS: t.DS
            }, y));
          }), t._zones.forEach(function(y) {
            t._zoneByElement.set(y.element, y), t._zoneById.set(y.id, y), y.droppables.forEach(function(_) {
              var C = t._zonesByDroppable.get(_);
              if (!(C != null && C.length))
                return t._zonesByDroppable.set(_, [y]);
              t._zonesByDroppable.set(_, k(new Set([].concat(k(C), [y]))));
            });
          }));
        }), l(this, "_handleDrop", function(n) {
          t._zones.forEach(function(h) {
            h !== n && h.handleNoDrop();
          }), n && n.handleDrop();
        }), l(this, "_getZoneByElementsFromPoint", function(n, h) {
          for (var y = h.x, _ = h.y, C = 0, B = n.length; C < B; C++) {
            var W = t._zoneByElement.get(n[C]);
            if (W && Ge(W.rect, {
              left: y,
              right: y,
              top: _,
              bottom: _
            }, Math.min(t.Settings.dropTargetThreshold, 0.5)))
              return W;
          }
        }), l(this, "stop", function(n) {
          var h = n.isDragging;
          if (h) {
            var y = t.getTarget();
            t._handleDrop(y);
          }
        }), l(this, "getItemsDroppedById", function(n) {
          var h = t._zoneById.get(n);
          return h ? h.itemsDropped : console.warn("[DragSelect] No zone found (id: ".concat(n, ")"));
        }), l(this, "getItemsInsideById", function(n, h) {
          var y = t._zoneById.get(n);
          if (!y)
            return console.warn("[DragSelect] No zone found (id: ".concat(n, ")"));
          var _ = y.itemsInside;
          return h && y.handleItemsInsideClasses(), _;
        }), l(this, "getTarget", function(n) {
          var h;
          if ((h = t._zones) !== null && h !== void 0 && h.length) {
            var y = (n == null ? void 0 : n.x) || t.DS.stores.PointerStore.currentVal.x, _ = (n == null ? void 0 : n.y) || t.DS.stores.PointerStore.currentVal.y, C = document.elementsFromPoint(y, _);
            return t._getZoneByElementsFromPoint(
              /** @type {DSElements} */
              C,
              {
                x: y,
                y: _
              }
            );
          }
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:dropZones", function(n) {
          var h = n.settings;
          return t.setDropZones(h);
        }), this.setDropZones({
          dropZones: (
            /** @type {DSDropZone[]} */
            this.DS.stores.SettingsStore.s.dropZones
          )
        }), this.DS.subscribe("Interaction:end", this.stop);
      }
      /**
       * @param {Object} obj
       * @param {DSDropZone[]} [obj.dropZones]
       */
    ), So = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        a(this, c), l(this, "isInteracting", void 0), l(this, "isDragging", void 0), l(this, "init", function() {
          return t.DS.publish("Interaction:init:pre", {});
        }), l(this, "_init", function() {
          t.stop(), t.Settings.usePointerEvents ? t.DS.Area.HTMLNode.addEventListener("pointerdown", t.start, {
            passive: !1
          }) : t.DS.Area.HTMLNode.addEventListener("mousedown", t.start), t.DS.Area.HTMLNode.addEventListener("touchstart", t.start, {
            passive: !1
          }), t.DS.publish("Interaction:init", {});
        }), l(this, "start", function(n) {
          return t.DS.publish("Interaction:start:pre", {
            event: n,
            isDragging: t.isDragging
          });
        }), l(this, "_start", function(n) {
          n.type === "touchstart" && n.preventDefault(), t._canInteract(n) && (t.isInteracting = !0, t.isDragging = t.isDragEvent(n), t.DS.publish("Interaction:start", {
            event: n,
            isDragging: t.isDragging
          }), t.Settings.usePointerEvents ? (document.addEventListener("pointerup", t.reset), document.addEventListener("pointercancel", t.reset)) : document.addEventListener("mouseup", t.reset), document.addEventListener("touchend", t.reset));
        }), l(this, "isDragEvent", function(n) {
          var h = (
            /** @type {Element} */
            n.target.closest(".".concat(t.Settings.selectableClass))
          );
          return !t.Settings.draggability || t.DS.stores.KeyStore.isMultiSelectKeyPressed(n) || !h ? !1 : (t.Settings.immediateDrag && (t.DS.SelectedSet.size ? t.DS.SelectedSet.has(h) || (t.DS.SelectedSet.clear(), t.DS.SelectedSet.add(
            /** @type {DSElement} */
            h
          )) : t.DS.SelectedSet.add(
            /** @type {DSElement} */
            h
          )), !!t.DS.SelectedSet.has(h));
        }), l(this, "onClick", function(n) {
          var h = n.event;
          if (t._canInteract(h) && !(h.detail > 0)) {
            var y = t.DS, _ = y.stores, C = _.PointerStore, B = _.KeyStore, W = y.SelectableSet, ie = y.SelectedSet;
            C.start(h);
            var xe = (
              /** @type {any} */
              h.target
            );
            W.has(xe) && (B.isMultiSelectKeyPressed(h) || ie.clear(), ie.toggle(xe), t.reset());
          }
        }), l(this, "stop", function() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : t.DS.Area.HTMLNode;
          t.isInteracting = !1, t.isDragging = !1, t.Settings.usePointerEvents ? (n.removeEventListener("pointerdown", t.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("pointerup", t.reset), document.removeEventListener("pointercancel", t.reset)) : (n.removeEventListener("mousedown", t.start), document.removeEventListener("mouseup", t.reset)), n.removeEventListener("touchstart", t.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("touchend", t.reset);
        }), l(this, "update", function(n) {
          var h = n.event, y = n.scroll_directions, _ = n.scroll_multiplier;
          t.isInteracting && t.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: h,
            scroll_directions: y,
            scroll_multiplier: _,
            isDragging: t.isDragging
          });
        }), l(this, "reset", function(n) {
          return t.DS.publish("Interaction:end:pre", {
            event: n,
            isDragging: t.isDragging
          });
        }), l(this, "_reset", function(n) {
          var h = t.isDragging;
          t.stop(), t.init(), t.DS.publish("Interaction:end", {
            event: n,
            isDragging: h
          });
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:area", function(n) {
          var h = n.settings;
          t.stop(h["area:pre"]), t.init();
        }), this.DS.subscribe("PointerStore:updated", this.update), this.DS.subscribe("Selectable:click", this.onClick), this.DS.subscribe("Selectable:pointer", function(n) {
          var h = n.event;
          return t.start(h);
        }), this.DS.subscribe("Interaction:start:pre", function(n) {
          var h = n.event;
          return t._start(h);
        }), this.DS.subscribe("Interaction:init:pre", this._init), this.DS.subscribe("Interaction:end:pre", function(n) {
          var h = n.event;
          return t._reset(h);
        }), this.DS.subscribe("Area:scroll", this.update);
      }
      return g(c, [{
        key: "_canInteract",
        value: (
          /**
           * @param {DSEvent} event
           */
          function(t) {
            var m = (
              /** @type {MouseEvent} */
              t.clientX === 0 && /** @type {MouseEvent} */
              t.clientY === 0 && /** @type {MouseEvent} */
              t.detail === 0 && t.target
            );
            return (
              /** @type {MouseEvent} */
              !(t.button === 2 || // right-clicks
              this.isInteracting || // fix double-click issues
              t.target && !this.DS.SelectorArea.isInside(
                /** @type {DSElement} */
                t.target
              ) || // fix outside elements issue
              !m && !this.DS.SelectorArea.isClicked(t))
            );
          }
        )
        /**
         * @param {DSEvent} event
         */
      }]), c;
    }(), wo = /* @__PURE__ */ g(
      function c(u) {
        var t = this, m = u.DS;
        a(this, c), l(this, "subscribers", {}), l(this, "subscribe", function(n, h) {
          return Array.isArray(t.subscribers[n]) || (t.subscribers[n] = []), t.subscribers[n].push(h), t.subscribers[n].length - 1;
        }), l(this, "unsubscribe", function(n, h, y) {
          y >= 0 ? t.subscribers[n].splice(y, 1) : h && (t.subscribers[n] = t.subscribers[n].filter(function(_) {
            return _ !== h;
          }));
        }), l(this, "publish", function(n, h) {
          Array.isArray(n) ? n.forEach(function(y) {
            return t._publish(y, h);
          }) : t._publish(n, h);
        }), l(this, "_publish", function(n, h) {
          var y = t.subscribers[n];
          Array.isArray(y) && (n.includes(":pre") ? t._handlePrePublish(y, h) : t._handlePublish(y, h));
        }), l(this, "_handlePublish", function(n, h) {
          for (var y = 0, _ = n.length; y < _; y++) {
            if (t.DS.stopped)
              return;
            n[y](h);
          }
        }), l(this, "_handlePrePublish", function(n, h) {
          for (var y = n.length; y--; ) {
            if (t.DS.stopped)
              return;
            n[y](h);
          }
        }), this.DS = m;
      }
      /**
       * Subscribe to an event
       * @memberof DragSelect#
       * @function subscribe
       * @param {DSCallbackNames} eventName
       * @param {DSCallback} callback
       * @returns {number} event id, can be used to unsubscribe more efficiently
       */
    ), _o = /* @__PURE__ */ function(c) {
      v(t, c);
      var u = V(t);
      function t(m) {
        var n, h = m.DS;
        return a(this, t), n = u.call(this), l(T(n), "_rects", void 0), l(T(n), "_timeout", void 0), l(T(n), "init", function() {
          return Ne(n.Settings.selectables).forEach(function(y) {
            return n.add(y);
          });
        }), l(T(n), "clear", function() {
          return n.forEach(function(y) {
            return n.delete(y);
          });
        }), l(T(n), "_onClick", function(y) {
          return n.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: y
          });
        }), l(T(n), "_onPointer", function(y) {
          return n.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: y
          });
        }), l(T(n), "addAll", function(y) {
          return y.forEach(function(_) {
            return n.add(_);
          });
        }), l(T(n), "deleteAll", function(y) {
          return y.forEach(function(_) {
            return n.delete(_);
          });
        }), l(T(n), "getRect", function(y) {
          return n._rects ? n.rects.get(y) : y.getBoundingClientRect();
        }), n.DS = h, n.Settings = h.stores.SettingsStore.s, n.DS.subscribe("Interaction:init", n.init), n.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          n.clear(), n.init();
        }), n.DS.subscribe("Settings:updated:selectableClass", function(y) {
          var _ = y.settings;
          n.forEach(function(C) {
            C.classList.remove(_["selectableClass:pre"]), C.classList.add(_.selectableClass);
          });
        }), n;
      }
      return g(t, [{
        key: "add",
        value: (
          /** 
           * @param {DSElement} element
           * @return {this}
           * */
          function(n) {
            if (z(p(t.prototype), "has", this).call(this, n))
              return this;
            var h = {
              items: this.elements,
              item: n
            };
            return this.DS.publish("Selectable:added:pre", h), n.classList.add(this.Settings.selectableClass), n.addEventListener("click", this._onClick), this.Settings.usePointerEvents ? n.addEventListener("pointerdown", this._onPointer, {
              // @ts-ignore
              passive: !1
            }) : n.addEventListener("mousedown", this._onPointer), n.addEventListener("touchstart", this._onPointer, {
              // @ts-ignore
              passive: !1
            }), this.Settings.draggability && !this.Settings.useTransform && Ir({
              computedStyle: window.getComputedStyle(n),
              node: n
            }), z(p(t.prototype), "add", this).call(this, n), this.DS.publish("Selectable:added", h), this;
          }
        )
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(n) {
          if (!z(p(t.prototype), "has", this).call(this, n))
            return !0;
          var h = {
            items: this.elements,
            item: n
          };
          return this.DS.publish("Selectable:removed:pre", h), n.classList.remove(this.Settings.selectableClass), n.classList.remove(this.Settings.hoverClass), n.removeEventListener("click", this._onClick), this.Settings.usePointerEvents ? n.removeEventListener("pointerdown", this._onPointer, {
            // @ts-ignore
            passive: !1
          }) : n.removeEventListener("mousedown", this._onPointer), n.removeEventListener("touchstart", this._onPointer, {
            // @ts-ignore
            passive: !1
          }), z(p(t.prototype), "delete", this).call(this, n), this.DS.publish("Selectable:removed", h), !0;
        }
      }, {
        key: "elements",
        get: (
          /** @return {DSElements} */
          function() {
            return Array.from(this.values());
          }
        )
      }, {
        key: "rects",
        get: function() {
          var n = this;
          return this._rects ? this._rects : (this._rects = /* @__PURE__ */ new Map(), this.forEach(function(h) {
            return n._rects.set(h, h.getBoundingClientRect());
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return n._rects = null;
          }, this.Settings.refreshMemoryRate), this._rects);
        }
      }]), t;
    }(/* @__PURE__ */ I(Set)), xo = /* @__PURE__ */ function(c) {
      v(t, c);
      var u = V(t);
      function t(m) {
        var n, h = m.DS;
        return a(this, t), n = u.call(this), l(T(n), "clear", function() {
          return n.forEach(function(y) {
            return n.delete(y);
          });
        }), l(T(n), "addAll", function(y) {
          return y.forEach(function(_) {
            return n.add(_);
          });
        }), l(T(n), "deleteAll", function(y) {
          return y.forEach(function(_) {
            return n.delete(_);
          });
        }), n.DS = h, n;
      }
      return g(t, [{
        key: "add",
        value: function(n) {
          if (z(p(t.prototype), "has", this).call(this, n))
            return this;
          var h = {
            items: this.elements,
            item: n
          };
          return this.DS.publish("Selected:added:pre", h), z(p(t.prototype), "add", this).call(this, n), n.classList.add(this.DS.stores.SettingsStore.s.selectedClass), n.style.zIndex = "".concat((parseInt(n.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", h), this;
        }
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(n) {
          if (!z(p(t.prototype), "has", this).call(this, n))
            return !0;
          var h = {
            items: this.elements,
            item: n
          };
          this.DS.publish("Selected:removed:pre", h);
          var y = z(p(t.prototype), "delete", this).call(this, n);
          return n.classList.remove(this.DS.stores.SettingsStore.s.selectedClass), n.style.zIndex = "".concat((parseInt(n.style.zIndex) || 0) - 1), this.DS.publish("Selected:removed", h), y;
        }
      }, {
        key: "toggle",
        value: (
          /**
           * Adds/Removes an element. If it is already selected = remove, if not = add.
           * @param {DSElement} element
           * @return {DSElement}
           */
          function(n) {
            return this.has(n) ? this.delete(n) : this.add(n), n;
          }
        )
        /** @param {DSElements} elements */
      }, {
        key: "elements",
        get: (
          /** @return {DSElements} */
          function() {
            return Array.from(this.values());
          }
        )
      }]), t;
    }(/* @__PURE__ */ I(Set)), ko = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        a(this, c), l(this, "_prevSelectedSet", void 0), l(this, "start", function(n) {
          var h = n.event, y = n.isDragging;
          y || (t._storePrevious(h), t._handleInsideSelection(!0, h));
        }), l(this, "update", function(n) {
          var h = n.isDragging;
          h || t.DS.continue || t._handleInsideSelection();
        }), l(this, "_handleInsideSelection", function(n, h) {
          var y = t.DS, _ = y.SelectableSet, C = y.SelectorArea, B = y.Selector, W = t.DS.stores.KeyStore.isMultiSelectKeyPressed(h) && t.Settings.multiSelectToggling, ie = t.Settings.selectionThreshold, xe = _.rects, ke = B.rect, Ee = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), me = ge(xe), ct;
          try {
            for (me.s(); !(ct = me.n()).done; ) {
              var Mt = X(ct.value, 2), ut = Mt[0], Et = Mt[1];
              C.isInside(ut, Et) && (Ge(Et, ke, ie) ? Ee.set(ut, Et) : ne.set(ut, Et));
            }
          } catch (Wt) {
            me.e(Wt);
          } finally {
            me.f();
          }
          if (!t.DS.continue) {
            var Pr = t.filterSelected({
              select: Ee,
              unselect: ne,
              selectorRect: ke
            }), Io = Pr.select, Ao = Pr.unselect;
            Io.forEach(function(Wt, Xt) {
              return co({
                element: Xt,
                force: n,
                multiSelectionToggle: W,
                SelectedSet: t.DS.SelectedSet,
                hoverClassName: t.Settings.hoverClass
              });
            }), Ao.forEach(function(Wt, Xt) {
              return uo({
                element: Xt,
                force: n,
                SelectedSet: t.DS.SelectedSet,
                hoverClassName: t.Settings.hoverClass,
                PrevSelectedSet: t._prevSelectedSet
              });
            });
          }
        }), l(this, "filterSelected", function(n) {
          var h = n.select, y = n.unselect;
          return n.selectorRect, {
            select: h,
            unselect: y
          };
        }), this.DS = m, this.Settings = this.DS.stores.SettingsStore.s, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return g(c, [{
        key: "_storePrevious",
        value: function(t) {
          var m = this.DS, n = m.stores.KeyStore, h = m.SelectedSet;
          n.isMultiSelectKeyPressed(t) ? this._prevSelectedSet = new Set(h) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
        /** @param {{event:DSEvent,isDragging:boolean}} event */
      }]), c;
    }(), Do = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        a(this, c), l(this, "_rect", void 0), l(this, "attachSelector", function() {
          var n, h;
          t.HTMLNode && (n = t.DS.SelectorArea) !== null && n !== void 0 && n.HTMLNode && t.DS.SelectorArea.HTMLNode.removeChild(t.HTMLNode), t.HTMLNode = t.DS.stores.SettingsStore.s.selector || Kt(t.DS.stores.SettingsStore.s.customStyles), t.HTMLNode.classList.add(t.DS.stores.SettingsStore.s.selectorClass), t.HTMLNode && (h = t.DS.SelectorArea) !== null && h !== void 0 && h.HTMLNode && t.DS.SelectorArea.HTMLNode.appendChild(t.HTMLNode);
        }), l(this, "start", function(n) {
          var h = n.isDragging;
          if (!h) {
            var y = t.DS.stores.PointerStore, _ = y.initialValArea;
            Lr(t.HTMLNode, U(_, 1)), t.HTMLNode.style.display = "block", t._rect = null;
          }
        }), l(this, "stop", function() {
          t.HTMLNode.style.width = "0", t.HTMLNode.style.height = "0", t.HTMLNode.style.display = "none";
        }), l(this, "update", function(n) {
          var h = n.isDragging;
          if (!(h || t.DS.continue)) {
            var y = t.DS.stores, _ = y.ScrollStore, C = y.PointerStore, B = so({
              scrollAmount: _.scrollAmount,
              initialPointerPos: C.initialValArea,
              pointerPos: C.currentValArea
            });
            Lr(t.HTMLNode, B), t._rect = null;
          }
        }), this.DS = m, this.DS.subscribe("Settings:updated:selectorClass", function(n) {
          var h = n.settings;
          t.HTMLNode.classList.remove(h["selectorClass:pre"]), t.HTMLNode.classList.add(h.selectorClass);
        }), this.DS.subscribe("Settings:updated:selector", this.attachSelector), this.DS.subscribe("Settings:updated:customStyles", this.attachSelector), this.attachSelector(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return g(c, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Co = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        a(this, c), l(this, "_scrollInterval", void 0), l(this, "_rect", void 0), l(this, "currentEdges", []), l(this, "start", function() {
          t.applyElements("append"), t.updatePos();
        }), l(this, "applyElements", function() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", h = document.body ? "body" : "documentElement", y = "".concat(n, "Child");
          t.HTMLNode[y](t.DS.Selector.HTMLNode), document[h][y](t.HTMLNode);
        }), l(this, "updatePos", function() {
          t._rect = null;
          var n = t.DS.Area.rect, h = t.DS.Area.computedBorder, y = t.HTMLNode.style, _ = "".concat(n.top + h.top, "px"), C = "".concat(n.left + h.left, "px"), B = "".concat(n.width, "px"), W = "".concat(n.height, "px");
          y.top !== _ && (y.top = _), y.left !== C && (y.left = C), y.width !== B && (y.width = B), y.height !== W && (y.height = W);
        }), l(this, "stop", function(n) {
          t.stopAutoScroll(), n && t.applyElements("remove");
        }), l(this, "startAutoScroll", function() {
          t.currentEdges = [], t._scrollInterval = setInterval(function() {
            return t.handleAutoScroll();
          }, 16);
        }), l(this, "handleAutoScroll", function() {
          if (!t.DS.continue) {
            var n = t.DS, h = n.stores.PointerStore, y = n.Area;
            t.currentEdges = $r({
              elementRect: U(h.currentVal),
              containerRect: t.rect,
              tolerance: t.DS.stores.SettingsStore.s.overflowTolerance
            }), t.currentEdges.length && y.scroll(t.currentEdges, t.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), l(this, "stopAutoScroll", function() {
          t.currentEdges = [], clearInterval(t._scrollInterval);
        }), l(this, "isInside", function(n, h) {
          return t.DS.Area.HTMLNode.contains(n) && t.DS.stores.ScrollStore.canScroll ? !0 : Ge(t.rect, h || n.getBoundingClientRect());
        }), this.DS = m, this.HTMLNode = kt(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(n) {
          var h = n.settings;
          t.HTMLNode.classList.remove(h["selectorAreaClass:pre"]), t.HTMLNode.classList.add(h.selectorAreaClass);
        }), this.HTMLNode.classList.add(this.DS.stores.SettingsStore.s.selectorAreaClass), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Interaction:init", this.start), this.DS.subscribe("Interaction:start", this.startAutoScroll), this.DS.subscribe("Interaction:end", function() {
          t.updatePos(), t.stopAutoScroll();
        });
      }
      return g(c, [{
        key: "isClicked",
        value: (
          /**
           * checks if the click was triggered on the area.
           * @param {DSEvent} [event]
           * @returns {boolean}
           */
          function(t) {
            var m = this.DS.stores.PointerStore, n = t ? m.getPointerPosition(t) : m.initialVal;
            return Ge({
              left: n.x,
              top: n.y,
              right: n.x,
              bottom: n.y
            }, this.rect);
          }
        )
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Mo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        a(this, c), l(this, "_currentValues", /* @__PURE__ */ new Set()), l(this, "_keyMapping", {
          control: "ctrlKey",
          shift: "shiftKey",
          meta: "metaKey"
        }), l(this, "init", function() {
          document.addEventListener("keydown", t.keydown), document.addEventListener("keyup", t.keyup), window.addEventListener("blur", t.reset);
        }), l(this, "keydown", function(n) {
          var h = n.key.toLowerCase();
          t.DS.publish("KeyStore:down:pre", {
            event: n,
            key: h
          }), t._currentValues.add(h), t.DS.publish("KeyStore:down", {
            event: n,
            key: h
          });
        }), l(this, "keyup", function(n) {
          var h = n.key.toLowerCase();
          t.DS.publish("KeyStore:up:pre", {
            event: n,
            key: h
          }), t._currentValues.delete(h), t.DS.publish("KeyStore:up", {
            event: n,
            key: h
          });
        }), l(this, "stop", function() {
          document.removeEventListener("keydown", t.keydown), document.removeEventListener("keyup", t.reset), window.removeEventListener("blur", t.reset), t.reset();
        }), l(this, "reset", function() {
          return t._currentValues.clear();
        }), this.DS = m, this.DS.subscribe("Interaction:init", this.init);
      }
      return g(c, [{
        key: "isMultiSelectKeyPressed",
        value: (
          /** @param {KeyboardEvent|MouseEvent|PointerEvent|TouchEvent} [event] */
          function(t) {
            var m = this;
            if (this.DS.stores.SettingsStore.s.multiSelectMode)
              return !0;
            var n = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(h) {
              return h.toLocaleLowerCase();
            });
            return !!(this.currentValues.some(function(h) {
              return n.includes(h.toLocaleLowerCase());
            }) || t && n.some(function(h) {
              return t[m._keyMapping[h]];
            }));
          }
        )
      }, {
        key: "currentValues",
        get: function() {
          return Array.from(this._currentValues.values());
        }
      }]), c;
    }(), Eo = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        a(this, c), l(this, "_isMouseInteraction", !1), l(this, "_initialValArea", void 0), l(this, "_currentValArea", void 0), l(this, "_lastValArea", void 0), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_lastVal", void 0), l(this, "_lastTouch", void 0), l(this, "init", function() {
          t.Settings.usePointerEvents ? document.addEventListener("pointermove", t.update, {
            // @ts-ignore
            passive: !1
          }) : document.addEventListener("mousemove", t.update), document.addEventListener("touchmove", t.update, {
            // @ts-ignore
            passive: !1
          });
        }), l(this, "getPointerPosition", function(n) {
          return ro({
            event: t._normalizedEvent(n)
          });
        }), l(this, "update", function(n) {
          n && (t.DS.publish("PointerStore:updated:pre", {
            event: n
          }), t.currentVal = t.getPointerPosition(n), t._isMouseInteraction && t.DS.publish("PointerStore:updated", {
            event: n
          }));
        }), l(this, "stop", function() {
          t.Settings.usePointerEvents ? document.removeEventListener("pointermove", t.update, {
            // @ts-ignore
            passive: !1
          }) : document.removeEventListener("mousemove", t.update), document.removeEventListener("touchmove", t.update, {
            // @ts-ignore
            passive: !1
          }), setTimeout(function() {
            return t._isMouseInteraction = !1;
          }, 100);
        }), l(this, "reset", function(n) {
          n && (t.currentVal = t.lastVal = t.getPointerPosition(n), t.stop(), t.init());
        }), this.DS = m, this.Settings = m.stores.SettingsStore.s, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(n) {
          var h = n.event;
          return t.start(h);
        }), this.DS.subscribe("Interaction:end", function(n) {
          var h = n.event;
          return t.reset(h);
        });
      }
      return g(c, [{
        key: "start",
        value: (
          /** @param {DSEvent} [event] */
          function(t) {
            t && (this._isMouseInteraction = !0, this.currentVal = this.initialVal = this.getPointerPosition(t));
          }
        )
        /** @param {DSEvent} event */
      }, {
        key: "_normalizedEvent",
        value: (
          /**
           * @param {DSEvent} event
           * @return {MouseEvent|PointerEvent|Touch}
           * @private
           */
          function(t) {
            return "touches" in t && t.type !== "touchend" && (this._lastTouch = t), "touches" in t ? this._lastTouch.touches[0] : t;
          }
        )
        /** First recorded pointer position within the area */
      }, {
        key: "initialValArea",
        get: function() {
          return this._initialValArea ? this._initialValArea : {
            x: 0,
            y: 0
          };
        }
        /** Current pointer position within the area */
      }, {
        key: "currentValArea",
        get: function() {
          return this._currentValArea ? this._currentValArea : {
            x: 0,
            y: 0
          };
        }
        /** Last recorded pointer position within the area */
      }, {
        key: "lastValArea",
        get: function() {
          return this._lastValArea ? this._lastValArea : {
            x: 0,
            y: 0
          };
        }
        /** First recorded pointer position */
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        },
        set: function(t) {
          this._initialVal = t, this._initialValArea = t && O(t, "-", O(ee(this.DS.Area.rect), "+", ee(this.DS.Area.computedBorder)));
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal ? this._currentVal : {
            x: 0,
            y: 0
          };
        },
        set: function(t) {
          this._currentVal = t, this._currentValArea = t && O(t, "-", O(ee(this.DS.Area.rect), "+", ee(this.DS.Area.computedBorder)));
        }
      }, {
        key: "lastVal",
        get: function() {
          return this._lastVal ? this._lastVal : {
            x: 0,
            y: 0
          };
        },
        set: function(t) {
          this._lastVal = t, this._lastValArea = t && O(t, "-", O(ee(this.DS.Area.rect), "+", ee(this.DS.Area.computedBorder)));
        }
      }]), c;
    }(), $o = /* @__PURE__ */ function() {
      function c(u) {
        var t = this, m = u.DS;
        a(this, c), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_canScroll", void 0), l(this, "init", function() {
          return t.DS.stores.SettingsStore.s.area.addEventListener("scroll", t.update);
        }), l(this, "start", function() {
          t._currentVal = t._initialVal = Ct(t.DS.stores.SettingsStore.s.area), t.DS.stores.SettingsStore.s.area.addEventListener("scroll", t.update);
        }), l(this, "update", function() {
          return t._currentVal = Ct(t.DS.stores.SettingsStore.s.area);
        }), l(this, "stop", function() {
          t.DS.stores.SettingsStore.s.area.removeEventListener("scroll", t.update), t._initialVal = {
            x: 0,
            y: 0
          }, t._canScroll = null;
        }), l(this, "reset", function() {
          t.stop(), t.start();
        }), this.DS = m, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function() {
          return t.start();
        }), this.DS.subscribe("Interaction:end", function() {
          return t.reset();
        });
      }
      return g(c, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = xt(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var t = O(this.currentVal, "-", this.initialVal), m = _e(this.DS.stores.SettingsStore.s.zoom), n = O(O(t, "*", m), "-", t);
          return {
            x: t.x + n.x,
            y: t.y + n.y
          };
        }
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal || (this._currentVal = Ct(this.DS.stores.SettingsStore.s.area)), this._currentVal;
        }
      }]), c;
    }(), To = /* @__PURE__ */ g(
      /**
       * @type {Settings}
       * @private
       * */
      /**
       * Holds the settings and their previous value `:pre`
       * @example {
       *    autoScrollSpeed: 3,
       *    'autoScrollSpeed:pre': 5
       * }
       * @type {Settings}
       * */
      /**
       * @class ScrollStore
       * @constructor ScrollStore
       * @param {{ DS:DragSelect, settings:Settings }} p
       * @ignore
       */
      function c(u) {
        var t = this, m = u.DS, n = u.settings;
        a(this, c), l(this, "_settings", {}), l(this, "s", {}), l(this, "update", function(h) {
          var y = h.settings, _ = h.init;
          return t.DS.publish("Settings:updated:pre", i({
            settings: y
          }, _ ? {
            init: _
          } : {}));
        }), l(this, "_update", function(h) {
          for (var y = h.settings, _ = h.init, C = ho(y, _), B = function() {
            var ke, Ee = X(ie[W], 2), ne = Ee[0], me = Ee[1];
            ne in t._settings || Object.defineProperty(t.s, ne, {
              get: function() {
                return t._settings[ne];
              },
              set: function(ut) {
                return t.update({
                  settings: l({}, ne, ut)
                });
              }
            }), t._settings["".concat(ne, ":pre")] = t._settings[ne], t._settings[ne] = me;
            var ct = {
              settings: (ke = {}, l(ke, ne, t._settings[ne]), l(ke, "".concat(ne, ":pre"), t._settings["".concat(ne, ":pre")]), ke)
            };
            t.DS.publish("Settings:updated", ct), t.DS.publish("Settings:updated:".concat(ne), ct);
          }, W = 0, ie = Object.entries(C); W < ie.length; W++)
            B();
        }), this.DS = m, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
          settings: n,
          init: !0
        });
      }
      /** @param {{settings: Settings, init?: boolean}} props */
    ), Or = /* @__PURE__ */ function() {
      function c(u) {
        var t = this;
        a(this, c), l(this, "continue", !1), l(this, "start", function() {
          t.stopped = !1, t.Interaction.init();
        }), l(this, "break", function() {
          return t.continue = !0;
        }), l(this, "setSettings", function(m) {
          return t.stores.SettingsStore.update({
            settings: m
          });
        }), l(this, "getSelection", function() {
          return t.SelectedSet.elements;
        }), l(this, "getSelectables", function() {
          return t.SelectableSet.elements;
        }), l(this, "getInitialCursorPosition", function() {
          return t.stores.PointerStore.initialVal;
        }), l(this, "getCurrentCursorPosition", function() {
          return t.stores.PointerStore.currentVal;
        }), l(this, "getPreviousCursorPosition", function() {
          return t.stores.PointerStore.lastVal;
        }), l(this, "getInitialCursorPositionArea", function() {
          return t.stores.PointerStore.initialValArea;
        }), l(this, "getCurrentCursorPositionArea", function() {
          return t.stores.PointerStore.currentValArea;
        }), l(this, "getPreviousCursorPositionArea", function() {
          return t.stores.PointerStore.lastValArea;
        }), l(this, "isMultiSelect", function(m) {
          return t.stores.KeyStore.isMultiSelectKeyPressed(m);
        }), l(this, "isDragging", function() {
          return t.Interaction.isDragging;
        }), l(this, "getZoneByCoordinates", function(m) {
          var n;
          return (n = t.DropZones.getTarget(m)) === null || n === void 0 ? void 0 : n.toObject();
        }), l(this, "getItemsDroppedByZoneId", function(m) {
          return t.DropZones.getItemsDroppedById(m);
        }), l(this, "getItemsInsideByZoneId", function(m, n) {
          return t.DropZones.getItemsInsideById(m, n);
        }), this.PubSub = new wo({
          DS: this
        }), this.subscribe = this.PubSub.subscribe, this.unsubscribe = this.PubSub.unsubscribe, this.publish = this.PubSub.publish, this.stores = /** @type {{ SettingsStore:SettingsStore, PointerStore:PointerStore, ScrollStore:ScrollStore, KeyStore:KeyStore }} */
        {}, this.stores.SettingsStore = new To({
          DS: this,
          settings: u
        }), this.stores.PointerStore = new Eo({
          DS: this
        }), this.stores.ScrollStore = new $o({
          DS: this
        }), this.stores.KeyStore = new Mo({
          DS: this
        }), this.Area = new mo({
          DS: this
        }), this.Selector = new Do({
          DS: this
        }), this.SelectorArea = new Co({
          DS: this
        }), this.SelectableSet = new _o({
          DS: this
        }), this.SelectedSet = new xo({
          DS: this
        }), this.Selection = new ko({
          DS: this
        }), this.Drag = new vo({
          DS: this
        }), this.DropZones = new yo({
          DS: this
        }), this.Interaction = new So({
          DS: this
        }), go({
          subscribe: this.subscribe,
          publish: this.publish,
          SelectedSet: this.SelectedSet,
          Interaction: this.Interaction,
          DropZones: this.DropZones
        }), this.subscribe("Interaction:end", function() {
          return t.continue = !1;
        }), this.start();
      }
      return g(c, [{
        key: "stop",
        value: (
          /**
           * Complete function teardown
           * Will teardown/stop the whole functionality
           * @param {boolean} [remove] - if elements should be removed.
           * @param {boolean} [fromSelection] - if elements should also be added/removed to the selection.
           * @param {boolean} [withCallback] - if elements should also be added/removed to the selection.
           */
          function() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            n && this.publish("callback", {
              items: this.getSelection()
            }), this.Interaction.stop(), this.Area.stop(), this.Drag.stop(), this.Selector.stop(), this.SelectorArea.stop(t), this.stores.KeyStore.stop(), this.stores.PointerStore.stop(), this.stores.ScrollStore.stop(), t && this.SelectableSet.clear(), m && this.SelectedSet.clear(), this.stopped = !0;
          }
        )
        /**
         * Utility to override DragSelect internal functionality:
         * Break will skip the selection or dragging functionality (until after the callback) but let everything continue to run.
         * Useful utility to write your own functionality/move/dragNdrop based on DragSelect pointer positions.
         */
      }, {
        key: "addSelection",
        value: (
          /**
           * Adds several elements to the selection list also adds the specific classes and take into account all calculations.
           * Does not clear the selection, in contrary to .setSelection. Can add multiple elements at once
           * @param {DSInputElements} elements one or multiple elements
           * @param {boolean} [triggerCallback] - if callback should be called
           * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable elements
           * @return {DSElements} all selected elements
           */
          function(t) {
            var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return this.SelectedSet.addAll(Ne(t)), n || this.addSelectables(t), m && this.PubSub.publish("callback", {
              items: this.getSelection()
            }), this.getSelection();
          }
        )
        /**
         * Removes specific elements from the selection
         * Multiple elements can be given at once, in contrary to unselect
         * @param {DSInputElements} elements one or multiple elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [removeFromSelectables] - if element should be removed from the list of selectable elements
         * @return {DSElements} all selected elements
         */
      }, {
        key: "removeSelection",
        value: function(t) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Ne(t)), n && this.removeSelectables(t), m && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Toggles specific elements from the selection:
         * If element is not in selection it will be added, if it is already selected, it will be removed.
         * Multiple elements can be given at once.
         * @param {DSInputElements} elements one or multiple elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [removeFromSelectables] - if element should not be added/removed to the list of selectable elements accordingly
         * @return {DSElements} all selected elements
         */
      }, {
        key: "toggleSelection",
        value: function(t) {
          var m = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Ne(t).forEach(function(y) {
            return m.SelectedSet.has(y) ? m.removeSelection(t, n, h) : m.addSelection(t, n, h);
          }), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Sets the current selected elements and optionally run the callback
         * By default, adds new elements also to the list of selectables
         * @param {DSInputElements} elements – dom elements
         * @param {boolean} [triggerCallback] - if callback should be called
         * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable elements
         * @return {DSElements}
         */
      }, {
        key: "setSelection",
        value: function(t) {
          var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(t, m, n), this.getSelection();
        }
        /**
         * Unselect / Deselect all current selected Nodes
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSElements} this.selected, should be empty
         */
      }, {
        key: "clearSelection",
        value: function() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          return this.SelectedSet.clear(), t && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
        /**
         * Add elements that can be selected. No node is added twice
         * @param {DSInputElements} elements dom element(s)
         * @param {boolean} [addToSelection] if elements should also be added to current selection
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSInputElements} the added element(s)
         */
      }, {
        key: "addSelectables",
        value: function(t, m, n) {
          var h = Ne(t);
          return this.SelectableSet.addAll(h), m && this.SelectedSet.addAll(h), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), t;
        }
        /**
         * Gets all nodes that can potentially be selected
         * @return {DSElements} this.selectables
         */
      }, {
        key: "setSelectables",
        value: (
          /**
           * Sets all elements that can be selected.
           * Removes all current selectables (& their respective classes).
           * Adds the new set to the selectables set, thus replacing the original set.
           * @param {DSInputElements} elements – dom element(s)
           * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
           * @param {boolean} [addToSelection] if elements should also be added to current selection
           * @return {DSInputElements} elements – the added element(s)
           */
          function(t) {
            var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(t, m), this.addSelectables(t, n);
          }
        )
        /**
         * Remove elements from the elements that can be selected.
         * @param {DSInputElements} elements – dom element(s)
         * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSInputElements} the removed element(s)
         */
      }, {
        key: "removeSelectables",
        value: function(t, m, n) {
          return this.SelectableSet.deleteAll(Ne(t)), m && this.removeSelection(t), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), t;
        }
        /** The starting/initial position of the cursor/selector @return {Vect2} */
      }]), c;
    }();
    return Or.isCollision = Ge, Or;
  });
})(cs);
var An = cs.exports;
const Ln = /* @__PURE__ */ In(An), us = (r, e, s, o, i) => (e = Math, s = e.log, o = 1024, i = s(r) / s(o) | 0, r / e.pow(o, i)).toFixed(0) + " " + (i ? "KMGTPEZY"[--i] + "iB" : "B"), ds = (r, e = null) => new Date(r * 1e3).toLocaleString(e ?? navigator.language ?? "en-US"), On = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Pn = /* @__PURE__ */ f("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), Nn = [
  Pn
], jn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Rn = /* @__PURE__ */ f("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), Vn = [
  Rn
], Bn = {
  name: "VFSortIcon"
}, Tt = /* @__PURE__ */ Object.assign(Bn, {
  props: { direction: String },
  setup(r) {
    return (e, s) => (w(), D("div", null, [
      r.direction == "down" ? (w(), D("svg", On, Nn)) : Z("", !0),
      r.direction == "up" ? (w(), D("svg", jn, Vn)) : Z("", !0)
    ]));
  }
}), zn = ["onClick"], Hn = {
  name: "VFToast.vue"
}, Un = /* @__PURE__ */ Object.assign(Hn, {
  setup(r) {
    const e = P("emitter"), { getStore: s } = P("storage"), o = L(s("full-screen", !1)), i = (l) => l == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", a = L([]), d = (l) => {
      a.value.splice(l, 1);
    }, g = (l) => {
      let v = a.value.findIndex((p) => p.id === l);
      v !== -1 && d(v);
    };
    return e.on("vf-toast-clear", () => {
      a.value = [];
    }), e.on("vf-toast-push", (l) => {
      let v = (/* @__PURE__ */ new Date()).getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      l.id = v, a.value.push(l), setTimeout(() => {
        g(v);
      }, 5e3);
    }), (l, v) => (w(), D("div", {
      class: ce([o.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Ce(Lo, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: F(() => [
          (w(!0), D(le, null, we(a.value, (p, b) => (w(), D("div", {
            onClick: (S) => d(b),
            key: p,
            class: ce([i(p.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, E(p.label), 11, zn))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Fe = (r) => Object.entries(r).map((e) => e.map(encodeURIComponent).join("=")).join("&"), { apiUrl: Kn } = Ae(), Qt = (r, e) => Kn.value + "?" + Fe({ q: "preview", adapter: r, path: e }), ze = typeof window < "u", hs = ze && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), fs = ze && "IntersectionObserver" in window, ps = ze && "classList" in document.createElement("p"), gs = ze && window.devicePixelRatio > 1, Yn = {
  elements_selector: ".lazy",
  container: hs || ze ? document : null,
  threshold: 300,
  thresholds: null,
  data_src: "src",
  data_srcset: "srcset",
  data_sizes: "sizes",
  data_bg: "bg",
  data_bg_hidpi: "bg-hidpi",
  data_bg_multi: "bg-multi",
  data_bg_multi_hidpi: "bg-multi-hidpi",
  data_bg_set: "bg-set",
  data_poster: "poster",
  class_applied: "applied",
  class_loading: "loading",
  class_loaded: "loaded",
  class_error: "error",
  class_entered: "entered",
  class_exited: "exited",
  unobserve_completed: !0,
  unobserve_entered: !1,
  cancel_on_exit: !0,
  callback_enter: null,
  callback_exit: null,
  callback_applied: null,
  callback_loading: null,
  callback_loaded: null,
  callback_error: null,
  callback_finish: null,
  callback_cancel: null,
  use_native: !1,
  restore_on_error: !1
}, ms = (r) => Object.assign({}, Yn, r), Vr = function(r, e) {
  let s;
  const o = "LazyLoad::Initialized", i = new r(e);
  try {
    s = new CustomEvent(o, { detail: { instance: i } });
  } catch {
    s = document.createEvent("CustomEvent"), s.initCustomEvent(o, !1, !1, { instance: i });
  }
  window.dispatchEvent(s);
}, Wn = (r, e) => {
  if (e)
    if (!e.length)
      Vr(r, e);
    else
      for (let s = 0, o; o = e[s]; s += 1)
        Vr(r, o);
}, Pe = "src", dr = "srcset", hr = "sizes", vs = "poster", St = "llOriginalAttrs", bs = "data", fr = "loading", ys = "loaded", Ss = "applied", Xn = "entered", pr = "error", ws = "native", _s = "data-", xs = "ll-status", fe = (r, e) => r.getAttribute(_s + e), Zn = (r, e, s) => {
  var o = _s + e;
  if (s === null) {
    r.removeAttribute(o);
    return;
  }
  r.setAttribute(o, s);
}, wt = (r) => fe(r, xs), qe = (r, e) => Zn(r, xs, e), Vt = (r) => qe(r, null), gr = (r) => wt(r) === null, Fn = (r) => wt(r) === fr, qn = (r) => wt(r) === pr, mr = (r) => wt(r) === ws, Gn = [fr, ys, Ss, pr], Jn = (r) => Gn.indexOf(wt(r)) >= 0, He = (r, e, s, o) => {
  if (r) {
    if (o !== void 0) {
      r(e, s, o);
      return;
    }
    if (s !== void 0) {
      r(e, s);
      return;
    }
    r(e);
  }
}, it = (r, e) => {
  if (ps) {
    r.classList.add(e);
    return;
  }
  r.className += (r.className ? " " : "") + e;
}, $e = (r, e) => {
  if (ps) {
    r.classList.remove(e);
    return;
  }
  r.className = r.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, Qn = (r) => {
  r.llTempImage = document.createElement("IMG");
}, ei = (r) => {
  delete r.llTempImage;
}, ks = (r) => r.llTempImage, Bt = (r, e) => {
  if (!e)
    return;
  const s = e._observer;
  s && s.unobserve(r);
}, ti = (r) => {
  r.disconnect();
}, ri = (r, e, s) => {
  e.unobserve_entered && Bt(r, s);
}, vr = (r, e) => {
  r && (r.loadingCount += e);
}, si = (r) => {
  r && (r.toLoadCount -= 1);
}, Ds = (r, e) => {
  r && (r.toLoadCount = e);
}, oi = (r) => r.loadingCount > 0, ni = (r) => r.toLoadCount > 0, Cs = (r) => {
  let e = [];
  for (let s = 0, o; o = r.children[s]; s += 1)
    o.tagName === "SOURCE" && e.push(o);
  return e;
}, br = (r, e) => {
  const s = r.parentNode;
  if (!s || s.tagName !== "PICTURE")
    return;
  Cs(s).forEach(e);
}, Ms = (r, e) => {
  Cs(r).forEach(e);
}, zt = [Pe], Es = [Pe, vs], vt = [Pe, dr, hr], $s = [bs], Ht = (r) => !!r[St], Ts = (r) => r[St], Is = (r) => delete r[St], st = (r, e) => {
  if (Ht(r))
    return;
  const s = {};
  e.forEach((o) => {
    s[o] = r.getAttribute(o);
  }), r[St] = s;
}, ii = (r) => {
  Ht(r) || (r[St] = { backgroundImage: r.style.backgroundImage });
}, ai = (r, e, s) => {
  if (!s) {
    r.removeAttribute(e);
    return;
  }
  r.setAttribute(e, s);
}, Xe = (r, e) => {
  if (!Ht(r))
    return;
  const s = Ts(r);
  e.forEach((o) => {
    ai(r, o, s[o]);
  });
}, li = (r) => {
  if (!Ht(r))
    return;
  const e = Ts(r);
  r.style.backgroundImage = e.backgroundImage;
}, As = (r, e, s) => {
  it(r, e.class_applied), qe(r, Ss), s && (e.unobserve_completed && Bt(r, e), He(e.callback_applied, r, s));
}, Ls = (r, e, s) => {
  it(r, e.class_loading), qe(r, fr), s && (vr(s, 1), He(e.callback_loading, r, s));
}, Be = (r, e, s) => {
  s && r.setAttribute(e, s);
}, Br = (r, e) => {
  Be(r, hr, fe(r, e.data_sizes)), Be(r, dr, fe(r, e.data_srcset)), Be(r, Pe, fe(r, e.data_src));
}, ci = (r, e) => {
  br(r, (s) => {
    st(s, vt), Br(s, e);
  }), st(r, vt), Br(r, e);
}, ui = (r, e) => {
  st(r, zt), Be(r, Pe, fe(r, e.data_src));
}, di = (r, e) => {
  Ms(r, (s) => {
    st(s, zt), Be(s, Pe, fe(s, e.data_src));
  }), st(r, Es), Be(r, vs, fe(r, e.data_poster)), Be(r, Pe, fe(r, e.data_src)), r.load();
}, hi = (r, e) => {
  st(r, $s), Be(r, bs, fe(r, e.data_src));
}, fi = (r, e, s) => {
  const o = fe(r, e.data_bg), i = fe(r, e.data_bg_hidpi), a = gs && i ? i : o;
  a && (r.style.backgroundImage = `url("${a}")`, ks(r).setAttribute(Pe, a), Ls(r, e, s));
}, pi = (r, e, s) => {
  const o = fe(r, e.data_bg_multi), i = fe(r, e.data_bg_multi_hidpi), a = gs && i ? i : o;
  a && (r.style.backgroundImage = a, As(r, e, s));
}, gi = (r, e, s) => {
  const o = fe(r, e.data_bg_set);
  if (!o)
    return;
  const i = o.split("|");
  let a = i.map((d) => `image-set(${d})`);
  r.style.backgroundImage = a.join(), r.style.backgroundImage === "" && (a = i.map((d) => `-webkit-image-set(${d})`), r.style.backgroundImage = a.join()), As(r, e, s);
}, Os = {
  IMG: ci,
  IFRAME: ui,
  VIDEO: di,
  OBJECT: hi
}, mi = (r, e) => {
  const s = Os[r.tagName];
  s && s(r, e);
}, vi = (r, e, s) => {
  const o = Os[r.tagName];
  o && (o(r, e), Ls(r, e, s));
}, bi = ["IMG", "IFRAME", "VIDEO", "OBJECT"], yi = (r) => bi.indexOf(r.tagName) > -1, Ps = (r, e) => {
  e && !oi(e) && !ni(e) && He(r.callback_finish, e);
}, zr = (r, e, s) => {
  r.addEventListener(e, s), r.llEvLisnrs[e] = s;
}, Si = (r, e, s) => {
  r.removeEventListener(e, s);
}, yr = (r) => !!r.llEvLisnrs, wi = (r, e, s) => {
  yr(r) || (r.llEvLisnrs = {});
  const o = r.tagName === "VIDEO" ? "loadeddata" : "load";
  zr(r, o, e), zr(r, "error", s);
}, er = (r) => {
  if (!yr(r))
    return;
  const e = r.llEvLisnrs;
  for (let s in e) {
    const o = e[s];
    Si(r, s, o);
  }
  delete r.llEvLisnrs;
}, Ns = (r, e, s) => {
  ei(r), vr(s, -1), si(s), $e(r, e.class_loading), e.unobserve_completed && Bt(r, s);
}, _i = (r, e, s, o) => {
  const i = mr(e);
  Ns(e, s, o), it(e, s.class_loaded), qe(e, ys), He(s.callback_loaded, e, o), i || Ps(s, o);
}, xi = (r, e, s, o) => {
  const i = mr(e);
  Ns(e, s, o), it(e, s.class_error), qe(e, pr), He(s.callback_error, e, o), s.restore_on_error && Xe(e, vt), i || Ps(s, o);
}, Sr = (r, e, s) => {
  const o = ks(r) || r;
  if (yr(o))
    return;
  wi(o, (d) => {
    _i(d, r, e, s), er(o);
  }, (d) => {
    xi(d, r, e, s), er(o);
  });
}, ki = (r, e, s) => {
  Qn(r), Sr(r, e, s), ii(r), fi(r, e, s), pi(r, e, s), gi(r, e, s);
}, Di = (r, e, s) => {
  Sr(r, e, s), vi(r, e, s);
}, wr = (r, e, s) => {
  yi(r) ? Di(r, e, s) : ki(r, e, s);
}, Ci = (r, e, s) => {
  r.setAttribute("loading", "lazy"), Sr(r, e, s), mi(r, e), qe(r, ws);
}, Hr = (r) => {
  r.removeAttribute(Pe), r.removeAttribute(dr), r.removeAttribute(hr);
}, Mi = (r) => {
  br(r, (e) => {
    Hr(e);
  }), Hr(r);
}, js = (r) => {
  br(r, (e) => {
    Xe(e, vt);
  }), Xe(r, vt);
}, Ei = (r) => {
  Ms(r, (e) => {
    Xe(e, zt);
  }), Xe(r, Es), r.load();
}, $i = (r) => {
  Xe(r, zt);
}, Ti = (r) => {
  Xe(r, $s);
}, Ii = {
  IMG: js,
  IFRAME: $i,
  VIDEO: Ei,
  OBJECT: Ti
}, Ai = (r) => {
  const e = Ii[r.tagName];
  if (!e) {
    li(r);
    return;
  }
  e(r);
}, Li = (r, e) => {
  gr(r) || mr(r) || ($e(r, e.class_entered), $e(r, e.class_exited), $e(r, e.class_applied), $e(r, e.class_loading), $e(r, e.class_loaded), $e(r, e.class_error));
}, Oi = (r, e) => {
  Ai(r), Li(r, e), Vt(r), Is(r);
}, Pi = (r, e, s, o) => {
  s.cancel_on_exit && Fn(r) && r.tagName === "IMG" && (er(r), Mi(r), js(r), $e(r, s.class_loading), vr(o, -1), Vt(r), He(s.callback_cancel, r, e, o));
}, Ni = (r, e, s, o) => {
  const i = Jn(r);
  qe(r, Xn), it(r, s.class_entered), $e(r, s.class_exited), ri(r, s, o), He(s.callback_enter, r, e, o), !i && wr(r, s, o);
}, ji = (r, e, s, o) => {
  gr(r) || (it(r, s.class_exited), Pi(r, e, s, o), He(s.callback_exit, r, e, o));
}, Ri = ["IMG", "IFRAME", "VIDEO"], Rs = (r) => r.use_native && "loading" in HTMLImageElement.prototype, Vi = (r, e, s) => {
  r.forEach((o) => {
    Ri.indexOf(o.tagName) !== -1 && Ci(o, e, s);
  }), Ds(s, 0);
}, Bi = (r) => r.isIntersecting || r.intersectionRatio > 0, zi = (r) => ({
  root: r.container === document ? null : r.container,
  rootMargin: r.thresholds || r.threshold + "px"
}), Hi = (r, e, s) => {
  r.forEach(
    (o) => Bi(o) ? Ni(o.target, o, e, s) : ji(o.target, o, e, s)
  );
}, Ui = (r, e) => {
  e.forEach((s) => {
    r.observe(s);
  });
}, Ki = (r, e) => {
  ti(r), Ui(r, e);
}, Yi = (r, e) => {
  !fs || Rs(r) || (e._observer = new IntersectionObserver((s) => {
    Hi(s, r, e);
  }, zi(r)));
}, Vs = (r) => Array.prototype.slice.call(r), Pt = (r) => r.container.querySelectorAll(r.elements_selector), Wi = (r) => Vs(r).filter(gr), Xi = (r) => qn(r), Zi = (r) => Vs(r).filter(Xi), Ur = (r, e) => Wi(r || Pt(e)), Fi = (r, e) => {
  Zi(Pt(r)).forEach((o) => {
    $e(o, r.class_error), Vt(o);
  }), e.update();
}, qi = (r, e) => {
  ze && (e._onlineHandler = () => {
    Fi(r, e);
  }, window.addEventListener("online", e._onlineHandler));
}, Gi = (r) => {
  ze && window.removeEventListener("online", r._onlineHandler);
}, _t = function(r, e) {
  const s = ms(r);
  this._settings = s, this.loadingCount = 0, Yi(s, this), qi(s, this), this.update(e);
};
_t.prototype = {
  update: function(r) {
    const e = this._settings, s = Ur(r, e);
    if (Ds(this, s.length), hs || !fs) {
      this.loadAll(s);
      return;
    }
    if (Rs(e)) {
      Vi(s, e, this);
      return;
    }
    Ki(this._observer, s);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), Gi(this), Pt(this._settings).forEach((r) => {
      Is(r);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(r) {
    const e = this._settings;
    Ur(r, e).forEach((o) => {
      Bt(o, this), wr(o, e, this);
    });
  },
  restoreAll: function() {
    const r = this._settings;
    Pt(r).forEach((e) => {
      Oi(e, r);
    });
  }
};
_t.load = (r, e) => {
  const s = ms(e);
  wr(r, s);
};
_t.resetStatus = (r) => {
  Vt(r);
};
ze && Wn(_t, window.lazyLoadOptions);
const Ji = { class: "relative flex-auto flex flex-col overflow-hidden" }, Qi = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-xs select-none"
}, ea = { class: "absolute" }, ta = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "absolute h-6 w-6 md:h-12 md:w-12 m-auto stroke-neutral-500 fill-white dark:fill-gray-700 dark:stroke-gray-600 z-10",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  })
], -1), ra = { class: "text-neutral-700 dark:text-neutral-300 p-1 absolute text-center top-4 right-[-2rem] md:top-5 md:right-[-2.4rem] z-20 text-xs" }, sa = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], oa = { class: "grid grid-cols-12 items-center" }, na = { class: "flex col-span-7 items-center" }, ia = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, aa = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), la = [
  aa
], ca = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ua = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), da = [
  ua
], ha = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, fa = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, pa = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], ga = { class: "grid grid-cols-12 items-center" }, ma = { class: "flex col-span-7 items-center" }, va = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ba = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ya = [
  ba
], Sa = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, wa = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), _a = [
  wa
], xa = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, ka = { class: "col-span-2 text-center" }, Da = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, Ca = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], Ma = { class: "relative" }, Ea = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, $a = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Ta = [
  $a
], Ia = ["data-src", "alt"], Aa = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, La = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Oa = [
  La
], Pa = {
  key: 3,
  class: "absolute hidden md:block top-1/2 w-full text-center text-neutral-500"
}, Na = { class: "break-all" }, ja = {
  name: "VFExplorer"
}, Ra = /* @__PURE__ */ Object.assign(ja, {
  props: {
    view: String,
    data: Object,
    search: Object
  },
  setup(r) {
    const e = r, s = P("emitter"), { setStore: o, getStore: i } = P("storage"), a = P("adapter"), d = (A) => A == null ? void 0 : A.substring(0, 3), g = (A) => A.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), l = L(null), v = L(null), p = L(0), b = L(null), { t: S } = P("i18n"), M = Math.floor(Math.random() * 2 ** 32), $ = L(i("full-screen", !1)), I = new _t();
    s.on("vf-fullscreen-toggle", () => {
      l.value.style.height = null, $.value = !$.value, o("full-screen", $.value);
    });
    const T = L("");
    s.on("vf-search-query", ({ newQuery: A }) => {
      T.value = A, A ? s.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: e.data.adapter,
          path: e.data.dirname,
          filter: A
        },
        onSuccess: (R) => {
          R.files.length || s.emit("vf-toast-push", { label: S("No search result found.") });
        }
      }) : s.emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: e.data.dirname } });
    });
    let H = null;
    const V = () => {
      H && clearTimeout(H);
    }, j = L(!0), z = (A) => {
      A.touches.length > 1 && (j.value ? (b.value.stop(), s.emit("vf-toast-push", { label: S("Drag&Drop: off") })) : (b.value.start(), s.emit("vf-toast-push", { label: S("Drag&Drop: on") }), s.emit("vf-explorer-update")), j.value = !j.value);
    }, X = (A) => {
      H = setTimeout(() => {
        const R = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: A.target.getBoundingClientRect().x,
          clientY: A.target.getBoundingClientRect().y
        });
        A.target.dispatchEvent(R);
      }, 500);
    }, k = (A) => {
      A.type == "dir" ? (s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: A.path } })) : s.emit("vf-modal-show", { type: "preview", adapter: e.data.adapter, item: A });
    }, N = Lt({ active: !1, column: "", order: "" }), G = (A = !0) => {
      let R = [...e.data.files], O = N.column, ee = N.order == "asc" ? 1 : -1;
      if (!A)
        return R;
      const U = (_e, be) => typeof _e == "string" && typeof be == "string" ? _e.toLowerCase().localeCompare(be.toLowerCase()) : _e < be ? -1 : _e > be ? 1 : 0;
      return N.active && (R = R.slice().sort((_e, be) => U(_e[O], be[O]) * ee)), R;
    }, oe = (A) => {
      N.active && N.column == A ? (N.active = N.order == "asc", N.column = A, N.order = "desc") : (N.active = !0, N.column = A, N.order = "asc");
    }, te = () => b.value.getSelection().map((A) => JSON.parse(A.dataset.item)), ue = (A, R) => {
      if (A.altKey || A.ctrlKey || A.metaKey)
        return A.preventDefault(), !1;
      A.dataTransfer.setDragImage(v.value, 0, 15), A.dataTransfer.effectAllowed = "all", A.dataTransfer.dropEffect = "copy", A.dataTransfer.setData("items", JSON.stringify(te()));
    }, ve = (A, R) => {
      A.preventDefault();
      let O = JSON.parse(A.dataTransfer.getData("items"));
      if (O.find((ee) => ee.storage != a.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", { type: "move", items: { from: O, to: R } });
    }, pe = (A, R) => {
      A.preventDefault(), !R || R.type !== "dir" || b.value.getSelection().find((O) => O == A.currentTarget) ? (A.dataTransfer.dropEffect = "none", A.dataTransfer.effectAllowed = "none") : A.dataTransfer.dropEffect = "copy";
    };
    return Me(() => {
      b.value = new Ln({
        area: l.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), s.on("vf-explorer-update", () => Rt(() => {
        b.value.clearSelection(), b.value.setSelectables(document.getElementsByClassName("vf-item-" + M));
      })), b.value.subscribe("predragstart", ({ event: A, isDragging: R }) => {
        if (R)
          p.value = b.value.getSelection().length, b.value.break();
        else {
          const O = A.target.offsetWidth - A.offsetX, ee = A.target.offsetHeight - A.offsetY;
          O < 15 && ee < 15 && (b.value.clearSelection(), b.value.break());
        }
      }), b.value.subscribe("predragmove", ({ isDragging: A }) => {
        A && b.value.break();
      }), b.value.subscribe("callback", ({ items: A, event: R, isDragging: O }) => {
        s.emit("vf-nodes-selected", te()), p.value = b.value.getSelection().length;
      });
    }), Oo(() => {
      b.value.Area.reset(), b.value.SelectorArea.updatePos(), I.update();
    }), Me(() => {
      jt(() => e.view, () => s.emit("vf-explorer-update"));
    }), (A, R) => (w(), D("div", Ji, [
      r.view == "list" || T.value.length ? (w(), D("div", Qi, [
        f("div", {
          onClick: R[0] || (R[0] = (O) => oe("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          se(E(x(S)("Name")) + " ", 1),
          Se(Ce(Tt, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [$t, N.active && N.column == "basename"]
          ])
        ]),
        T.value.length ? Z("", !0) : (w(), D("div", {
          key: 0,
          onClick: R[1] || (R[1] = (O) => oe("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          se(E(x(S)("Size")) + " ", 1),
          Se(Ce(Tt, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [$t, N.active && N.column == "file_size"]
          ])
        ])),
        T.value.length ? Z("", !0) : (w(), D("div", {
          key: 1,
          onClick: R[2] || (R[2] = (O) => oe("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          se(E(x(S)("Date")) + " ", 1),
          Se(Ce(Tt, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [$t, N.active && N.column == "last_modified"]
          ])
        ])),
        T.value.length ? (w(), D("div", {
          key: 2,
          onClick: R[3] || (R[3] = (O) => oe("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          se(E(x(S)("Filepath")) + " ", 1),
          Se(Ce(Tt, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [$t, N.active && N.column == "path"]
          ])
        ])) : Z("", !0)
      ])) : Z("", !0),
      f("div", ea, [
        f("div", {
          ref_key: "dragImage",
          ref: v,
          class: "absolute -z-50 -top-96"
        }, [
          ta,
          f("div", ra, E(p.value), 1)
        ], 512)
      ]),
      f("div", {
        onTouchstart: z,
        onContextmenu: R[10] || (R[10] = We((O) => x(s).emit("vf-contextmenu-show", { event: O, area: l.value, items: te() }), ["self", "prevent"])),
        class: ce([$.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: l
      }, [
        T.value.length ? (w(!0), D(le, { key: 0 }, we(G(), (O, ee) => (w(), D("div", {
          onDblclick: (U) => k(O),
          onTouchstart: R[4] || (R[4] = (U) => X(U)),
          onTouchend: R[5] || (R[5] = (U) => V()),
          onContextmenu: We((U) => x(s).emit("vf-contextmenu-show", { event: U, area: l.value, items: te(), target: O }), ["prevent"]),
          class: ce(["vf-item-" + x(M), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": ee
        }, [
          f("div", oa, [
            f("div", na, [
              O.type == "dir" ? (w(), D("svg", ia, la)) : (w(), D("svg", ca, da)),
              f("span", ha, E(O.basename), 1)
            ]),
            f("div", fa, E(O.path), 1)
          ])
        ], 42, sa))), 256)) : Z("", !0),
        r.view == "list" && !T.value.length ? (w(!0), D(le, { key: 1 }, we(G(), (O, ee) => (w(), D("div", {
          draggable: "true",
          onDblclick: (U) => k(O),
          onTouchstart: R[6] || (R[6] = (U) => X(U)),
          onTouchend: R[7] || (R[7] = (U) => V()),
          onContextmenu: We((U) => x(s).emit("vf-contextmenu-show", { event: U, area: l.value, items: te(), target: O }), ["prevent"]),
          onDragstart: (U) => ue(U),
          onDragover: (U) => pe(U, O),
          onDrop: (U) => ve(U, O),
          class: ce(["vf-item-" + x(M), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": ee
        }, [
          f("div", ga, [
            f("div", ma, [
              O.type == "dir" ? (w(), D("svg", va, ya)) : (w(), D("svg", Sa, _a)),
              f("span", xa, E(O.basename), 1)
            ]),
            f("div", ka, E(O.file_size ? x(us)(O.file_size) : ""), 1),
            f("div", Da, E(x(ds)(O.last_modified)), 1)
          ])
        ], 42, pa))), 256)) : Z("", !0),
        r.view == "grid" && !T.value.length ? (w(!0), D(le, { key: 2 }, we(G(!1), (O, ee) => (w(), D("div", {
          draggable: "true",
          onDblclick: (U) => k(O),
          onTouchstart: R[8] || (R[8] = (U) => X(U)),
          onTouchend: R[9] || (R[9] = (U) => V()),
          onContextmenu: We((U) => x(s).emit("vf-contextmenu-show", { event: U, area: l.value, items: te(), target: O }), ["prevent"]),
          onDragstart: (U) => ue(U),
          onDragover: (U) => pe(U, O),
          onDrop: (U) => ve(U, O),
          class: ce(["vf-item-" + x(M), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": ee
        }, [
          f("div", null, [
            f("div", Ma, [
              O.type == "dir" ? (w(), D("svg", Ea, Ta)) : (O.mime_type ?? "").startsWith("image") ? (w(), D("img", {
                key: 1,
                class: "lazy h-10 md:h-12 m-auto",
                "data-src": x(Qt)(x(a).value, O.path),
                alt: O.basename
              }, null, 8, Ia)) : (w(), D("svg", Aa, Oa)),
              !(O.mime_type ?? "").startsWith("image") && O.type != "dir" ? (w(), D("div", Pa, E(d(O.extension)), 1)) : Z("", !0)
            ]),
            f("span", Na, E(g(O.basename)), 1)
          ])
        ], 42, Ca))), 256)) : Z("", !0)
      ], 34),
      Ce(Un)
    ]));
  }
}), Va = "1.2.0", Ba = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, za = { class: "flex leading-5 items-center" }, Ha = ["aria-label"], Ua = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
  })
], -1), Ka = [
  Ua
], Ya = ["value"], Wa = { class: "ml-3" }, Xa = { key: 0 }, Za = { class: "ml-1" }, Fa = { class: "flex leading-5 items-center" }, qa = {
  value: "",
  disabled: ""
}, Ga = /* @__PURE__ */ Po('<option value="en">English</option><option value="fr">French</option><option value="fa">Persian</option><option value="ru">Russian</option><option value="tr">Turkish</option><option value="tr">Hebrew</option>', 6), Ja = ["aria-label"], Qa = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 stroke-slate-500 cursor-pointer",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1), el = [
  Qa
], tl = {
  name: "VFStatusbar"
}, rl = /* @__PURE__ */ Object.assign(tl, {
  props: {
    data: Object
  },
  setup(r) {
    const e = P("emitter"), { getStore: s, setStore: o } = P("storage"), i = L(0), a = P("adapter"), { t: d, changeLocale: g } = P("i18n"), l = L(s("locale", "")), v = () => {
      e.emit("vf-search-exit"), e.emit("vf-fetch", { params: { q: "index", adapter: a.value } }), o("adapter", a.value);
    };
    e.on("vf-nodes-selected", (b) => {
      i.value = b.length;
    });
    const p = L("");
    return e.on("vf-search-query", ({ newQuery: b }) => {
      p.value = b;
    }), (b, S) => (w(), D("div", Ba, [
      f("div", za, [
        f("div", {
          class: "mx-2",
          "aria-label": x(d)("Storage"),
          "data-microtip-position": "top-right",
          role: "tooltip"
        }, Ka, 8, Ha),
        Se(f("select", {
          "onUpdate:modelValue": S[0] || (S[0] = (M) => as(a) ? a.value = M : null),
          onChange: v,
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8"
        }, [
          (w(!0), D(le, null, we(r.data.storages, (M) => (w(), D("option", { value: M }, E(M), 9, Ya))), 256))
        ], 544), [
          [Nr, x(a)]
        ]),
        f("div", Wa, [
          p.value.length ? (w(), D("span", Xa, E(r.data.files.length) + " items found. ", 1)) : Z("", !0),
          f("span", Za, E(i.value > 0 ? i.value + " " + x(d)("item(s) selected.") : ""), 1)
        ])
      ]),
      f("div", Fa, [
        Se(f("select", {
          "onUpdate:modelValue": S[1] || (S[1] = (M) => l.value = M),
          onChange: S[2] || (S[2] = (M) => x(g)(M.target.value)),
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8 mr-3"
        }, [
          f("option", qa, E(x(d)("Language")), 1),
          Ga
        ], 544), [
          [Nr, l.value]
        ]),
        f("span", {
          class: "mr-1",
          "aria-label": x(d)("About"),
          "data-microtip-position": "top-left",
          role: "tooltip",
          onClick: S[3] || (S[3] = (M) => x(e).emit("vf-modal-show", { type: "message", title: "Vuefinder " + x(Va), message: x(d)("Vuefinder is a file manager component for vue 3.") }))
        }, el, 8, Ja)
      ])
    ]));
  }
}), sl = (r, e = 0, s = !1) => {
  let o;
  return (...i) => {
    s && !o && r(...i), clearTimeout(o), o = setTimeout(() => {
      r(...i);
    }, e);
  };
}, ol = (r, e, s) => {
  const o = L(r);
  return No((a, d) => ({
    get() {
      return a(), o.value;
    },
    set: sl(
      (g) => {
        o.value = g, d();
      },
      e,
      s
    )
  }));
}, nl = { class: "flex p-1.5 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, il = ["aria-label"], al = /* @__PURE__ */ f("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), ll = [
  al
], cl = ["aria-label"], ul = /* @__PURE__ */ f("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), dl = [
  ul
], hl = ["aria-label"], fl = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), pl = [
  fl
], gl = ["onClick"], ml = /* @__PURE__ */ f("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), vl = [
  ml
], bl = { class: "flex leading-5" }, yl = /* @__PURE__ */ f("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), Sl = ["title", "onClick"], wl = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, _l = /* @__PURE__ */ f("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), xl = /* @__PURE__ */ f("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), kl = [
  _l,
  xl
], Dl = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, Cl = /* @__PURE__ */ f("svg", {
  class: "h-6 w-6 p-1 m-auto stroke-gray-400 fill-gray-100 dark:stroke-gray-400 dark:fill-gray-400/20",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })
], -1), Ml = /* @__PURE__ */ f("div", { class: "w-full" }, null, -1), El = ["onKeydown", "placeholder"], $l = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), Tl = [
  $l
], Il = {
  name: "VFBreadcrumb"
}, Al = /* @__PURE__ */ Object.assign(Il, {
  props: {
    data: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), i = L(null), a = L([]), d = L(!1), g = L(null), { t: l } = P("i18n"), v = P("loadingState");
    s.on("vf-explorer-update", () => {
      let V = [], j = [];
      i.value = e.data.dirname ?? o.value + "://", i.value.length == 0 && (a.value = []), i.value.replace(o.value + "://", "").split("/").forEach(function(z) {
        V.push(z), V.join("/") != "" && j.push({
          basename: z,
          name: z,
          path: o.value + "://" + V.join("/"),
          type: "dir"
        });
      }), j.length > 4 && (j = j.slice(-5), j[0].name = ".."), a.value = j;
    });
    const p = () => {
      d.value = !1, S.value = "";
    };
    s.on("vf-search-exit", () => {
      p();
    });
    const b = () => {
      d.value = !0, Rt(() => g.value.focus());
    }, S = ol("", 400), M = () => v.value;
    jt(S, (V) => {
      s.emit("vf-toast-clear"), s.emit("vf-search-query", { newQuery: V });
    });
    const $ = () => a.value.length && !d.value, I = (V) => {
      V.preventDefault();
      let j = JSON.parse(V.dataTransfer.getData("items"));
      if (j.find((z) => z.storage != o.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", {
        type: "move",
        items: { from: j, to: a.value[a.value.length - 2] ?? { path: o.value + "://" } }
      });
    }, T = (V) => {
      V.preventDefault(), $() ? V.dataTransfer.dropEffect = "copy" : (V.dataTransfer.dropEffect = "none", V.dataTransfer.effectAllowed = "none");
    }, H = () => {
      S.value == "" && p();
    };
    return (V, j) => (w(), D("div", nl, [
      f("span", {
        "aria-label": x(l)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), D("svg", {
          onDragover: j[0] || (j[0] = (z) => T(z)),
          onDrop: j[1] || (j[1] = (z) => I(z)),
          onClick: j[2] || (j[2] = (z) => {
            var X;
            return !$() || x(s).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: ((X = a.value[a.value.length - 2]) == null ? void 0 : X.path) ?? x(o) + "://" } });
          }),
          class: ce(["h-6 w-6 p-0.5 rounded", $() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, ll, 34))
      ], 8, il),
      M() ? (w(), D("span", {
        key: 1,
        "aria-label": x(l)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), D("svg", {
          onClick: j[4] || (j[4] = (z) => x(s).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, pl))
      ], 8, hl)) : (w(), D("span", {
        key: 0,
        "aria-label": x(l)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (w(), D("svg", {
          onClick: j[3] || (j[3] = (z) => {
            x(s).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: r.data.dirname } });
          }),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, dl))
      ], 8, cl)),
      d.value ? (w(), D("div", Dl, [
        Cl,
        Ml,
        Se(f("input", {
          ref_key: "searchInput",
          ref: g,
          onKeydown: ot(p, ["esc"]),
          onBlur: H,
          "onUpdate:modelValue": j[6] || (j[6] = (z) => as(S) ? S.value = z : null),
          placeholder: x(l)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, El), [
          [nt, x(S)]
        ]),
        (w(), D("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: p,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, Tl))
      ])) : (w(), D("div", {
        key: 2,
        class: "group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: We(b, ["self"])
      }, [
        (w(), D("svg", {
          onClick: j[5] || (j[5] = (z) => x(s).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, vl)),
        f("div", bl, [
          (w(!0), D(le, null, we(a.value, (z, X) => (w(), D("div", { key: X }, [
            yl,
            f("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: z.basename,
              onClick: (k) => x(s).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: z.path } })
            }, E(z.name), 9, Sl)
          ]))), 128))
        ]),
        M() ? (w(), D("svg", wl, kl)) : Z("", !0)
      ], 8, gl))
    ]));
  }
}), Ll = ["onClick"], Ol = /* @__PURE__ */ f("span", { class: "px-1" }, null, -1), Pl = {
  name: "VFContextMenu"
}, Nl = /* @__PURE__ */ Object.assign(Pl, {
  props: {
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter"), o = L(null), { apiUrl: i } = Ae(), a = Lt({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), d = L([]);
    s.on("vf-context-selected", (S) => {
      d.value = S;
    });
    const { t: g } = P("i18n"), l = {
      newfolder: {
        title: () => g("New Folder"),
        action: () => {
          s.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => g("Delete"),
        action: () => {
          s.emit("vf-modal-show", { type: "delete", items: d });
        }
      },
      refresh: {
        title: () => g("Refresh"),
        action: () => {
          s.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: e.current.dirname } });
        }
      },
      preview: {
        title: () => g("Preview"),
        action: () => {
          s.emit("vf-modal-show", { type: "preview", adapter: e.current.adapter, item: d.value[0] });
        }
      },
      open: {
        title: () => g("Open"),
        action: () => {
          s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: d.value[0].path } });
        }
      },
      openDir: {
        title: () => g("Open containing folder"),
        action: () => {
          s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: d.value[0].dir } });
        }
      },
      download: {
        title: () => g("Download"),
        action: () => {
          const S = i.value + "?" + Fe({ q: "download", adapter: e.current.adapter, path: d.value[0].path });
          s.emit("vf-download", S);
        }
      },
      archive: {
        title: () => g("Archive"),
        action: () => {
          s.emit("vf-modal-show", { type: "archive", items: d });
        }
      },
      unarchive: {
        title: () => g("Unarchive"),
        action: () => {
          s.emit("vf-modal-show", { type: "unarchive", items: d });
        }
      },
      rename: {
        title: () => g("Rename"),
        action: () => {
          s.emit("vf-modal-show", { type: "rename", items: d });
        }
      }
    }, v = (S) => {
      s.emit("vf-contextmenu-hide"), S.action();
    }, p = L("");
    s.on("vf-search-query", ({ newQuery: S }) => {
      p.value = S;
    }), s.on("vf-contextmenu-show", ({ event: S, area: M, items: $, target: I = null }) => {
      if (a.items = [], p.value)
        if (I)
          a.items.push(l.openDir), s.emit("vf-context-selected", [I]);
        else
          return;
      else
        !I && !p.value ? (a.items.push(l.refresh), a.items.push(l.newfolder), s.emit("vf-context-selected", [])) : $.length > 1 && $.some((T) => T.path === I.path) ? (a.items.push(l.refresh), a.items.push(l.archive), a.items.push(l.delete), s.emit("vf-context-selected", $)) : (I.type == "dir" ? a.items.push(l.open) : (a.items.push(l.preview), a.items.push(l.download)), a.items.push(l.rename), I.mime_type == "application/zip" ? a.items.push(l.unarchive) : a.items.push(l.archive), a.items.push(l.delete), s.emit("vf-context-selected", [I]));
      b(S, M);
    }), s.on("vf-contextmenu-hide", () => {
      a.active = !1;
    });
    const b = (S, M) => {
      a.active = !0, Rt(() => {
        let $ = M.getBoundingClientRect(), I = S.pageX, T = S.pageY, H = o.value.offsetHeight, V = o.value.offsetWidth;
        I = $.right - S.pageX + window.scrollX < V ? I - V : I, T = $.bottom - S.pageY + window.scrollY < H ? T - H : T, a.positions = {
          left: I + "px",
          top: T + "px"
        };
      });
    };
    return (S, M) => a.active ? (w(), D("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: o,
      style: ls(a.positions)
    }, [
      (w(!0), D(le, null, we(a.items, ($) => (w(), D("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: $.title,
        onClick: (I) => v($)
      }, [
        Ol,
        f("span", null, E($.title()), 1)
      ], 8, Ll))), 128))
    ], 4)) : Z("", !0);
  }
}), jl = (r, e) => {
  const s = r[e];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((o, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + e)));
  });
};
async function Rl(r) {
  const e = await jl(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en-ed1f1848.js"), "../locales/fa.json": () => import("./fa-49628944.js"), "../locales/he.json": () => import("./he-736e9ea8.js"), "../locales/ru.json": () => import("./ru-d8535e72.js"), "../locales/tr.json": () => import("./tr-6f9ffcfe.js") }), `../locales/${r}.json`);
  return JSON.parse(e.default);
}
function Vl(r, e, s) {
  const { getStore: o, setStore: i } = Jt(r), a = L({}), d = (v) => {
    Rl(v).then((p) => {
      a.value = p, i("locale", v), i("translations", p), s.emit("vf-toast-push", { label: "The language is set to " + v });
    }).catch((p) => {
      s.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), d("en");
    });
  };
  o("locale") ? a.value = o("translations") : d(e);
  const g = (v, ...p) => p.length ? g(v = v.replace("%s", p.shift()), ...p) : v;
  function l(v, ...p) {
    return a.value.hasOwnProperty(v) ? g(a.value[v], ...p) : g(v, ...p);
  }
  return { t: l, changeLocale: d };
}
const Bl = { class: "vuefinder" }, zl = /* @__PURE__ */ f("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), Hl = {
  name: "VueFinder"
}, Ul = /* @__PURE__ */ Object.assign(Hl, {
  props: {
    dev: {
      type: Boolean
    },
    url: {
      type: [String]
    },
    id: {
      type: String,
      default: "vf"
    },
    dark: {
      type: Boolean,
      default: !1
    },
    locale: {
      type: String,
      default: "en"
    },
    maxHeight: {
      type: String,
      default: "600px"
    },
    maxFileSize: {
      type: String,
      default: "10mb"
    },
    postData: {
      type: Object,
      default: {}
    }
  },
  setup(r) {
    const e = r, s = Vo(), { setStore: o, getStore: i } = Jt(e.id), a = L(i("adapter"));
    Ue("emitter", s), Ue("storage", Jt(e.id)), Ue("postData", e.postData), Ue("adapter", a), Ue("maxFileSize", e.maxFileSize);
    const d = Vl(e.id, e.locale, s);
    Ue("i18n", d);
    const { apiUrl: g, setApiUrl: l } = Ae();
    l(e.url);
    const v = Lt({ adapter: a.value, storages: [], dirname: ".", files: [] }), p = L(i("viewport", "grid")), b = L(i("darkMode", e.dark));
    s.on("vf-darkMode-toggle", () => {
      b.value = !b.value, o("darkMode", b.value);
    });
    const S = L(!1);
    Ue("loadingState", S);
    const M = L(i("full-screen", !1));
    s.on("vf-fullscreen-toggle", () => {
      M.value = !M.value, o("full-screen", M.value);
    }), s.on("vf-view-toggle", (H) => {
      p.value = H;
    });
    const $ = Lt({
      active: !1,
      type: "delete",
      data: {}
    });
    s.on("vf-modal-close", () => {
      $.active = !1;
    }), s.on("vf-modal-show", (H) => {
      $.active = !0, $.type = H.type, $.data = H;
    });
    const I = (H) => {
      Object.assign(v, H), s.emit("vf-nodes-selected", {}), s.emit("vf-explorer-update");
    };
    let T;
    return s.on("vf-fetch-abort", () => {
      T.abort(), S.value = !1;
    }), s.on("vf-fetch", ({ params: H, onSuccess: V = null, onError: j = null }) => {
      ["index", "search"].includes(H.q) && (T && T.abort(), S.value = !0), T = new AbortController();
      const z = T.signal;
      Ot(g.value, e.dev, { params: H, signal: z }).then((X) => {
        a.value = X.adapter, ["index", "search"].includes(H.q) && (S.value = !1), s.emit("vf-modal-close"), I(X), V(X);
      }).catch((X) => {
        j && j(X);
      }).finally(() => {
      });
    }), s.on("vf-download", (H) => {
      document.getElementById("download_frame").src = H, s.emit("vf-modal-close");
    }), Me(() => {
      s.emit("vf-fetch", { params: { q: "index", adapter: a.value } });
    }), (H, V) => (w(), D("div", Bl, [
      f("div", {
        class: ce(b.value ? "dark" : "")
      }, [
        f("div", {
          class: ce([M.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"]),
          style: ls(M.value ? "" : "max-height: " + r.maxHeight),
          onMousedown: V[0] || (V[0] = (j) => x(s).emit("vf-contextmenu-hide")),
          onTouchstart: V[1] || (V[1] = (j) => x(s).emit("vf-contextmenu-hide"))
        }, [
          Ce($n, { data: v }, null, 8, ["data"]),
          Ce(Al, { data: v }, null, 8, ["data"]),
          Ce(Ra, {
            view: p.value,
            data: v
          }, null, 8, ["view", "data"]),
          Ce(rl, { data: v }, null, 8, ["data"])
        ], 38),
        $.active ? (w(), q(jo("v-f-modal-" + $.type), {
          key: 0,
          selection: $.data,
          current: v
        }, null, 8, ["selection", "current"])) : Z("", !0),
        Ce(Nl, { current: v }, null, 8, ["current"]),
        zl
      ], 2)
    ]));
  }
}), Kl = /* @__PURE__ */ f("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity" }, null, -1), Yl = { class: "fixed z-10 inset-0 overflow-hidden" }, Wl = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, Xl = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Zl = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Le = {
  __name: "ModalLayout",
  setup(r) {
    const e = P("emitter");
    return Me(() => {
      const s = document.querySelector(".v-f-modal input");
      s && s.focus();
    }), (s, o) => (w(), D("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: o[1] || (o[1] = ot((i) => x(e).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      Kl,
      f("div", Yl, [
        f("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: o[0] || (o[0] = We((i) => x(e).emit("vf-modal-close"), ["self"]))
        }, [
          f("div", Wl, [
            f("div", Xl, [
              Gt(s.$slots, "default")
            ]),
            f("div", Zl, [
              Gt(s.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, Fl = ["aria-label"], ql = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Gl = [
  ql
], Jl = {
  name: "Message"
}, Oe = /* @__PURE__ */ Object.assign(Jl, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(r, { emit: e }) {
    var g;
    const { t: s } = P("i18n"), o = L(!1), i = L(null), a = L((g = i.value) == null ? void 0 : g.strMessage);
    jt(a, () => o.value = !1);
    const d = () => {
      e("hidden"), o.value = !0;
    };
    return (l, v) => (w(), D("div", null, [
      o.value ? Z("", !0) : (w(), D("div", {
        key: 0,
        ref_key: "strMessage",
        ref: i,
        class: ce(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Gt(l.$slots, "default"),
        f("div", {
          class: "ml-auto cursor-pointer",
          onClick: d,
          "aria-label": x(s)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, Gl, 8, Fl)
      ], 2))
    ]));
  }
}), Ql = { class: "sm:flex sm:items-start" }, ec = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })
  ])
], -1), tc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, rc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, sc = { class: "mt-2" }, oc = { class: "text-sm text-gray-500" }, nc = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, ic = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ac = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), lc = [
  ac
], cc = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, uc = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), dc = [
  uc
], hc = { class: "ml-1.5" }, fc = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, pc = {
  name: "VFModalDelete"
}, gc = /* @__PURE__ */ Object.assign(pc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: i } = P("i18n"), a = L(e.selection.items), d = L(""), g = () => {
      a.value.length && s.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: o.value,
          path: e.current.dirname,
          items: JSON.stringify(a.value.map(({ path: l, type: v }) => ({ path: l, type: v })))
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: i("Files deleted.") });
        },
        onError: (l) => {
          d.value = i(l.message);
        }
      });
    };
    return (l, v) => (w(), q(Le, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: g,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Yes, Delete!")), 1),
        f("button", {
          type: "button",
          onClick: v[1] || (v[1] = (p) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Cancel")), 1),
        f("div", fc, E(x(i)("This action cannot be undone.")), 1)
      ]),
      default: F(() => [
        f("div", Ql, [
          ec,
          f("div", tc, [
            f("h3", rc, E(x(i)("Delete files")), 1),
            f("div", sc, [
              f("p", oc, E(x(i)("Are you sure you want to delete these files?")), 1),
              (w(!0), D(le, null, we(a.value, (p) => (w(), D("p", nc, [
                p.type == "dir" ? (w(), D("svg", ic, lc)) : (w(), D("svg", cc, dc)),
                f("span", hc, E(p.basename), 1)
              ]))), 256)),
              d.value.length ? (w(), q(Oe, {
                key: 0,
                onHidden: v[0] || (v[0] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  se(E(d.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), mc = { class: "sm:flex sm:items-start" }, vc = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ])
], -1), bc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, yc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Sc = { class: "mt-2" }, wc = { class: "text-sm text-gray-500" }, _c = {
  name: "VFModalMessage"
}, xc = /* @__PURE__ */ Object.assign(_c, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = P("emitter"), { t: s } = P("i18n");
    return (o, i) => (w(), q(Le, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: i[0] || (i[0] = (a) => x(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(s)("Close")), 1)
      ]),
      default: F(() => {
        var a, d;
        return [
          f("div", mc, [
            vc,
            f("div", bc, [
              f("h3", yc, E(((a = r.selection) == null ? void 0 : a.title) ?? "Title"), 1),
              f("div", Sc, [
                f("p", wc, E(((d = r.selection) == null ? void 0 : d.message) ?? "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), kc = { class: "sm:flex sm:items-start" }, Dc = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
    })
  ])
], -1), Cc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Mc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ec = { class: "mt-2" }, $c = { class: "text-sm text-gray-500" }, Tc = ["onKeyup", "placeholder"], Ic = {
  name: "VFModalNewFolder"
}, Ac = /* @__PURE__ */ Object.assign(Ic, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: i } = P("i18n"), a = L(""), d = L(""), g = () => {
      a.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: o.value,
          path: e.current.dirname,
          name: a.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: i("%s is created.", a.value) });
        },
        onError: (l) => {
          d.value = i(l.message);
        }
      });
    };
    return (l, v) => (w(), q(Le, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: g,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Create")), 1),
        f("button", {
          type: "button",
          onClick: v[2] || (v[2] = (p) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", kc, [
          Dc,
          f("div", Cc, [
            f("h3", Mc, E(x(i)("New Folder")), 1),
            f("div", Ec, [
              f("p", $c, E(x(i)("Create a new folder")), 1),
              Se(f("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (p) => a.value = p),
                onKeyup: ot(g, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(i)("Folder Name"),
                type: "text"
              }, null, 40, Tc), [
                [nt, a.value]
              ]),
              d.value.length ? (w(), q(Oe, {
                key: 0,
                onHidden: v[1] || (v[1] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  se(E(d.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Lc = { class: "sm:flex sm:items-start" }, Oc = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })
  ])
], -1), Pc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Nc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, jc = { class: "mt-2" }, Rc = { class: "text-sm text-gray-500" }, Vc = ["onKeyup", "placeholder"], Bc = {
  name: "VFModalNewFile"
}, zc = /* @__PURE__ */ Object.assign(Bc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: i } = P("i18n"), a = L(""), d = L(""), g = () => {
      a.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: o.value,
          path: e.current.dirname,
          name: a.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: i("%s is created.", a.value) });
        },
        onError: (l) => {
          d.value = i(l.message);
        }
      });
    };
    return (l, v) => (w(), q(Le, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: g,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Create")), 1),
        f("button", {
          type: "button",
          onClick: v[2] || (v[2] = (p) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", Lc, [
          Oc,
          f("div", Pc, [
            f("h3", Nc, E(x(i)("New File")), 1),
            f("div", jc, [
              f("p", Rc, E(x(i)("Create a new file")), 1),
              Se(f("input", {
                "onUpdate:modelValue": v[0] || (v[0] = (p) => a.value = p),
                onKeyup: ot(g, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(i)("File Name"),
                type: "text"
              }, null, 40, Vc), [
                [nt, a.value]
              ]),
              d.value.length ? (w(), q(Oe, {
                key: 0,
                onHidden: v[1] || (v[1] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  se(E(d.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Hc = { class: "flex" }, Uc = ["aria-label"], Kc = { class: "ml-auto mb-2" }, Yc = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, Wc = { key: 1 }, Xc = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, o = L(""), i = L(""), a = L(null), d = L(!1), { apiUrl: g } = Ae(), l = L(""), v = L(!1), { t: p } = P("i18n");
    Me(() => {
      Ot(g.value, {
        params: { q: "preview", adapter: s.selection.adapter, path: s.selection.item.path },
        json: !1
      }).then(($) => {
        o.value = $, e("load");
      });
    });
    const b = () => {
      d.value = !d.value, i.value = o.value, d.value == !0 && Rt(() => {
        a.value.focus();
      });
    }, S = P("postData"), M = () => {
      l.value = "", v.value = !1, Ot(g.value, {
        method: "POST",
        params: Object.assign(S, {
          q: "save",
          adapter: s.selection.adapter,
          path: s.selection.item.path,
          content: i.value
        }),
        json: !1
      }).then(($) => {
        l.value = p("Updated."), o.value = $, e("load"), d.value = !d.value;
      }).catch(($) => {
        l.value = p($.message), v.value = !0;
      });
    };
    return ($, I) => (w(), D(le, null, [
      f("div", Hc, [
        f("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, Uc),
        f("div", Kc, [
          d.value ? (w(), D("button", {
            key: 0,
            onClick: M,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(p)("Save")), 1)) : Z("", !0),
          f("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: I[0] || (I[0] = (T) => b())
          }, E(d.value ? x(p)("Cancel") : x(p)("Edit")), 1)
        ])
      ]),
      f("div", null, [
        d.value ? (w(), D("div", Wc, [
          Se(f("textarea", {
            ref_key: "editInput",
            ref: a,
            "onUpdate:modelValue": I[1] || (I[1] = (T) => i.value = T),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [nt, i.value]
          ])
        ])) : (w(), D("pre", Yc, E(o.value), 1)),
        l.value.length ? (w(), q(Oe, {
          key: 2,
          onHidden: I[2] || (I[2] = (T) => l.value = ""),
          error: v.value
        }, {
          default: F(() => [
            se(E(l.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : Z("", !0)
      ])
    ], 64));
  }
};
/*!
 * Cropper.js v1.5.13
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-11-20T05:30:46.114Z
 */
function Kr(r, e) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    e && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), s.push.apply(s, o);
  }
  return s;
}
function Bs(r) {
  for (var e = 1; e < arguments.length; e++) {
    var s = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Kr(Object(s), !0).forEach(function(o) {
      qc(r, o, s[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : Kr(Object(s)).forEach(function(o) {
      Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(s, o));
    });
  }
  return r;
}
function tr(r) {
  "@babel/helpers - typeof";
  return tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, tr(r);
}
function Zc(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Yr(r, e) {
  for (var s = 0; s < e.length; s++) {
    var o = e[s];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, o.key, o);
  }
}
function Fc(r, e, s) {
  return e && Yr(r.prototype, e), s && Yr(r, s), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function qc(r, e, s) {
  return e in r ? Object.defineProperty(r, e, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = s, r;
}
function zs(r) {
  return Gc(r) || Jc(r) || Qc(r) || eu();
}
function Gc(r) {
  if (Array.isArray(r))
    return rr(r);
}
function Jc(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function Qc(r, e) {
  if (r) {
    if (typeof r == "string")
      return rr(r, e);
    var s = Object.prototype.toString.call(r).slice(8, -1);
    if (s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set")
      return Array.from(r);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return rr(r, e);
  }
}
function rr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var s = 0, o = new Array(e); s < e; s++)
    o[s] = r[s];
  return o;
}
function eu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ut = typeof window < "u" && typeof window.document < "u", Ie = Ut ? window : {}, _r = Ut && Ie.document.documentElement ? "ontouchstart" in Ie.document.documentElement : !1, xr = Ut ? "PointerEvent" in Ie : !1, J = "cropper", kr = "all", Hs = "crop", Us = "move", Ks = "zoom", Ke = "e", Ye = "w", Je = "s", je = "n", ht = "ne", ft = "nw", pt = "se", gt = "sw", sr = "".concat(J, "-crop"), Wr = "".concat(J, "-disabled"), he = "".concat(J, "-hidden"), Xr = "".concat(J, "-hide"), tu = "".concat(J, "-invisible"), Nt = "".concat(J, "-modal"), or = "".concat(J, "-move"), bt = "".concat(J, "Action"), It = "".concat(J, "Preview"), Dr = "crop", Ys = "move", Ws = "none", nr = "crop", ir = "cropend", ar = "cropmove", lr = "cropstart", Zr = "dblclick", ru = _r ? "touchstart" : "mousedown", su = _r ? "touchmove" : "mousemove", ou = _r ? "touchend touchcancel" : "mouseup", Fr = xr ? "pointerdown" : ru, qr = xr ? "pointermove" : su, Gr = xr ? "pointerup pointercancel" : ou, Jr = "ready", Qr = "resize", es = "wheel", cr = "zoom", ts = "image/jpeg", nu = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, iu = /^data:/, au = /^data:image\/jpeg;base64,/, lu = /^img|canvas$/i, Xs = 200, Zs = 100, rs = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: Dr,
  // 'crop', 'move' or 'none'
  // Define the initial aspect ratio of the crop box
  initialAspectRatio: NaN,
  // Define the aspect ratio of the crop box
  aspectRatio: NaN,
  // An object with the previous cropping result data
  data: null,
  // A selector for adding extra containers to preview
  preview: "",
  // Re-render the cropper when resize the window
  responsive: !0,
  // Restore the cropped area after resize the window
  restore: !0,
  // Check if the current image is a cross-origin image
  checkCrossOrigin: !0,
  // Check the current image's Exif Orientation information
  checkOrientation: !0,
  // Show the black modal
  modal: !0,
  // Show the dashed lines for guiding
  guides: !0,
  // Show the center indicator for guiding
  center: !0,
  // Show the white modal to highlight the crop box
  highlight: !0,
  // Show the grid background
  background: !0,
  // Enable to crop the image automatically when initialize
  autoCrop: !0,
  // Define the percentage of automatic cropping area when initializes
  autoCropArea: 0.8,
  // Enable to move the image
  movable: !0,
  // Enable to rotate the image
  rotatable: !0,
  // Enable to scale the image
  scalable: !0,
  // Enable to zoom the image
  zoomable: !0,
  // Enable to zoom the image by dragging touch
  zoomOnTouch: !0,
  // Enable to zoom the image by wheeling mouse
  zoomOnWheel: !0,
  // Define zoom ratio when zoom the image by wheeling mouse
  wheelZoomRatio: 0.1,
  // Enable to move the crop box
  cropBoxMovable: !0,
  // Enable to resize the crop box
  cropBoxResizable: !0,
  // Toggle drag mode between "crop" and "move" when click twice on the cropper
  toggleDragModeOnDblclick: !0,
  // Size limitation
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: Xs,
  minContainerHeight: Zs,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, cu = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', uu = Number.isNaN || Ie.isNaN;
function K(r) {
  return typeof r == "number" && !uu(r);
}
var ss = function(e) {
  return e > 0 && e < 1 / 0;
};
function Zt(r) {
  return typeof r > "u";
}
function Ze(r) {
  return tr(r) === "object" && r !== null;
}
var du = Object.prototype.hasOwnProperty;
function Qe(r) {
  if (!Ze(r))
    return !1;
  try {
    var e = r.constructor, s = e.prototype;
    return e && s && du.call(s, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function de(r) {
  return typeof r == "function";
}
var hu = Array.prototype.slice;
function Fs(r) {
  return Array.from ? Array.from(r) : hu.call(r);
}
function re(r, e) {
  return r && de(e) && (Array.isArray(r) || K(r.length) ? Fs(r).forEach(function(s, o) {
    e.call(r, s, o, r);
  }) : Ze(r) && Object.keys(r).forEach(function(s) {
    e.call(r, r[s], s, r);
  })), r;
}
var Q = Object.assign || function(e) {
  for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), i = 1; i < s; i++)
    o[i - 1] = arguments[i];
  return Ze(e) && o.length > 0 && o.forEach(function(a) {
    Ze(a) && Object.keys(a).forEach(function(d) {
      e[d] = a[d];
    });
  }), e;
}, fu = /\.\d*(?:0|9){12}\d*$/;
function tt(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return fu.test(r) ? Math.round(r * e) / e : r;
}
var pu = /^width|height|left|top|marginLeft|marginTop$/;
function Re(r, e) {
  var s = r.style;
  re(e, function(o, i) {
    pu.test(i) && K(o) && (o = "".concat(o, "px")), s[i] = o;
  });
}
function gu(r, e) {
  return r.classList ? r.classList.contains(e) : r.className.indexOf(e) > -1;
}
function ae(r, e) {
  if (e) {
    if (K(r.length)) {
      re(r, function(o) {
        ae(o, e);
      });
      return;
    }
    if (r.classList) {
      r.classList.add(e);
      return;
    }
    var s = r.className.trim();
    s ? s.indexOf(e) < 0 && (r.className = "".concat(s, " ").concat(e)) : r.className = e;
  }
}
function Te(r, e) {
  if (e) {
    if (K(r.length)) {
      re(r, function(s) {
        Te(s, e);
      });
      return;
    }
    if (r.classList) {
      r.classList.remove(e);
      return;
    }
    r.className.indexOf(e) >= 0 && (r.className = r.className.replace(e, ""));
  }
}
function et(r, e, s) {
  if (e) {
    if (K(r.length)) {
      re(r, function(o) {
        et(o, e, s);
      });
      return;
    }
    s ? ae(r, e) : Te(r, e);
  }
}
var mu = /([a-z\d])([A-Z])/g;
function Cr(r) {
  return r.replace(mu, "$1-$2").toLowerCase();
}
function ur(r, e) {
  return Ze(r[e]) ? r[e] : r.dataset ? r.dataset[e] : r.getAttribute("data-".concat(Cr(e)));
}
function yt(r, e, s) {
  Ze(s) ? r[e] = s : r.dataset ? r.dataset[e] = s : r.setAttribute("data-".concat(Cr(e)), s);
}
function vu(r, e) {
  if (Ze(r[e]))
    try {
      delete r[e];
    } catch {
      r[e] = void 0;
    }
  else if (r.dataset)
    try {
      delete r.dataset[e];
    } catch {
      r.dataset[e] = void 0;
    }
  else
    r.removeAttribute("data-".concat(Cr(e)));
}
var qs = /\s\s*/, Gs = function() {
  var r = !1;
  if (Ut) {
    var e = !1, s = function() {
    }, o = Object.defineProperty({}, "once", {
      get: function() {
        return r = !0, e;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function(a) {
        e = a;
      }
    });
    Ie.addEventListener("test", s, o), Ie.removeEventListener("test", s, o);
  }
  return r;
}();
function De(r, e, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = s;
  e.trim().split(qs).forEach(function(a) {
    if (!Gs) {
      var d = r.listeners;
      d && d[a] && d[a][s] && (i = d[a][s], delete d[a][s], Object.keys(d[a]).length === 0 && delete d[a], Object.keys(d).length === 0 && delete r.listeners);
    }
    r.removeEventListener(a, i, o);
  });
}
function ye(r, e, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = s;
  e.trim().split(qs).forEach(function(a) {
    if (o.once && !Gs) {
      var d = r.listeners, g = d === void 0 ? {} : d;
      i = function() {
        delete g[a][s], r.removeEventListener(a, i, o);
        for (var v = arguments.length, p = new Array(v), b = 0; b < v; b++)
          p[b] = arguments[b];
        s.apply(r, p);
      }, g[a] || (g[a] = {}), g[a][s] && r.removeEventListener(a, g[a][s], o), g[a][s] = i, r.listeners = g;
    }
    r.addEventListener(a, i, o);
  });
}
function rt(r, e, s) {
  var o;
  return de(Event) && de(CustomEvent) ? o = new CustomEvent(e, {
    detail: s,
    bubbles: !0,
    cancelable: !0
  }) : (o = document.createEvent("CustomEvent"), o.initCustomEvent(e, !0, !0, s)), r.dispatchEvent(o);
}
function Js(r) {
  var e = r.getBoundingClientRect();
  return {
    left: e.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: e.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Ft = Ie.location, bu = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function os(r) {
  var e = r.match(bu);
  return e !== null && (e[1] !== Ft.protocol || e[2] !== Ft.hostname || e[3] !== Ft.port);
}
function ns(r) {
  var e = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + e;
}
function mt(r) {
  var e = r.rotate, s = r.scaleX, o = r.scaleY, i = r.translateX, a = r.translateY, d = [];
  K(i) && i !== 0 && d.push("translateX(".concat(i, "px)")), K(a) && a !== 0 && d.push("translateY(".concat(a, "px)")), K(e) && e !== 0 && d.push("rotate(".concat(e, "deg)")), K(s) && s !== 1 && d.push("scaleX(".concat(s, ")")), K(o) && o !== 1 && d.push("scaleY(".concat(o, ")"));
  var g = d.length ? d.join(" ") : "none";
  return {
    WebkitTransform: g,
    msTransform: g,
    transform: g
  };
}
function yu(r) {
  var e = Bs({}, r), s = 0;
  return re(r, function(o, i) {
    delete e[i], re(e, function(a) {
      var d = Math.abs(o.startX - a.startX), g = Math.abs(o.startY - a.startY), l = Math.abs(o.endX - a.endX), v = Math.abs(o.endY - a.endY), p = Math.sqrt(d * d + g * g), b = Math.sqrt(l * l + v * v), S = (b - p) / p;
      Math.abs(S) > Math.abs(s) && (s = S);
    });
  }), s;
}
function At(r, e) {
  var s = r.pageX, o = r.pageY, i = {
    endX: s,
    endY: o
  };
  return e ? i : Bs({
    startX: s,
    startY: o
  }, i);
}
function Su(r) {
  var e = 0, s = 0, o = 0;
  return re(r, function(i) {
    var a = i.startX, d = i.startY;
    e += a, s += d, o += 1;
  }), e /= o, s /= o, {
    pageX: e,
    pageY: s
  };
}
function Ve(r) {
  var e = r.aspectRatio, s = r.height, o = r.width, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", a = ss(o), d = ss(s);
  if (a && d) {
    var g = s * e;
    i === "contain" && g > o || i === "cover" && g < o ? s = o / e : o = s * e;
  } else
    a ? s = o / e : d && (o = s * e);
  return {
    width: o,
    height: s
  };
}
function wu(r) {
  var e = r.width, s = r.height, o = r.degree;
  if (o = Math.abs(o) % 180, o === 90)
    return {
      width: s,
      height: e
    };
  var i = o % 90 * Math.PI / 180, a = Math.sin(i), d = Math.cos(i), g = e * d + s * a, l = e * a + s * d;
  return o > 90 ? {
    width: l,
    height: g
  } : {
    width: g,
    height: l
  };
}
function _u(r, e, s, o) {
  var i = e.aspectRatio, a = e.naturalWidth, d = e.naturalHeight, g = e.rotate, l = g === void 0 ? 0 : g, v = e.scaleX, p = v === void 0 ? 1 : v, b = e.scaleY, S = b === void 0 ? 1 : b, M = s.aspectRatio, $ = s.naturalWidth, I = s.naturalHeight, T = o.fillColor, H = T === void 0 ? "transparent" : T, V = o.imageSmoothingEnabled, j = V === void 0 ? !0 : V, z = o.imageSmoothingQuality, X = z === void 0 ? "low" : z, k = o.maxWidth, N = k === void 0 ? 1 / 0 : k, G = o.maxHeight, oe = G === void 0 ? 1 / 0 : G, te = o.minWidth, ue = te === void 0 ? 0 : te, ve = o.minHeight, pe = ve === void 0 ? 0 : ve, ge = document.createElement("canvas"), A = ge.getContext("2d"), R = Ve({
    aspectRatio: M,
    width: N,
    height: oe
  }), O = Ve({
    aspectRatio: M,
    width: ue,
    height: pe
  }, "cover"), ee = Math.min(R.width, Math.max(O.width, $)), U = Math.min(R.height, Math.max(O.height, I)), _e = Ve({
    aspectRatio: i,
    width: N,
    height: oe
  }), be = Ve({
    aspectRatio: i,
    width: ue,
    height: pe
  }, "cover"), xt = Math.min(_e.width, Math.max(be.width, a)), kt = Math.min(_e.height, Math.max(be.height, d)), Kt = [-xt / 2, -kt / 2, xt, kt];
  return ge.width = tt(ee), ge.height = tt(U), A.fillStyle = H, A.fillRect(0, 0, ee, U), A.save(), A.translate(ee / 2, U / 2), A.rotate(l * Math.PI / 180), A.scale(p, S), A.imageSmoothingEnabled = j, A.imageSmoothingQuality = X, A.drawImage.apply(A, [r].concat(zs(Kt.map(function(Dt) {
    return Math.floor(tt(Dt));
  })))), A.restore(), ge;
}
var Qs = String.fromCharCode;
function xu(r, e, s) {
  var o = "";
  s += e;
  for (var i = e; i < s; i += 1)
    o += Qs(r.getUint8(i));
  return o;
}
var ku = /^data:.*,/;
function Du(r) {
  var e = r.replace(ku, ""), s = atob(e), o = new ArrayBuffer(s.length), i = new Uint8Array(o);
  return re(i, function(a, d) {
    i[d] = s.charCodeAt(d);
  }), o;
}
function Cu(r, e) {
  for (var s = [], o = 8192, i = new Uint8Array(r); i.length > 0; )
    s.push(Qs.apply(null, Fs(i.subarray(0, o)))), i = i.subarray(o);
  return "data:".concat(e, ";base64,").concat(btoa(s.join("")));
}
function Mu(r) {
  var e = new DataView(r), s;
  try {
    var o, i, a;
    if (e.getUint8(0) === 255 && e.getUint8(1) === 216)
      for (var d = e.byteLength, g = 2; g + 1 < d; ) {
        if (e.getUint8(g) === 255 && e.getUint8(g + 1) === 225) {
          i = g;
          break;
        }
        g += 1;
      }
    if (i) {
      var l = i + 4, v = i + 10;
      if (xu(e, l, 4) === "Exif") {
        var p = e.getUint16(v);
        if (o = p === 18761, (o || p === 19789) && e.getUint16(v + 2, o) === 42) {
          var b = e.getUint32(v + 4, o);
          b >= 8 && (a = v + b);
        }
      }
    }
    if (a) {
      var S = e.getUint16(a, o), M, $;
      for ($ = 0; $ < S; $ += 1)
        if (M = a + $ * 12 + 2, e.getUint16(M, o) === 274) {
          M += 8, s = e.getUint16(M, o), e.setUint16(M, 1, o);
          break;
        }
    }
  } catch {
    s = 1;
  }
  return s;
}
function Eu(r) {
  var e = 0, s = 1, o = 1;
  switch (r) {
    case 2:
      s = -1;
      break;
    case 3:
      e = -180;
      break;
    case 4:
      o = -1;
      break;
    case 5:
      e = 90, o = -1;
      break;
    case 6:
      e = 90;
      break;
    case 7:
      e = 90, s = -1;
      break;
    case 8:
      e = -90;
      break;
  }
  return {
    rotate: e,
    scaleX: s,
    scaleY: o
  };
}
var $u = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var e = this.element, s = this.options, o = this.container, i = this.cropper, a = Number(s.minContainerWidth), d = Number(s.minContainerHeight);
    ae(i, he), Te(e, he);
    var g = {
      width: Math.max(o.offsetWidth, a >= 0 ? a : Xs),
      height: Math.max(o.offsetHeight, d >= 0 ? d : Zs)
    };
    this.containerData = g, Re(i, {
      width: g.width,
      height: g.height
    }), ae(e, he), Te(i, he);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var e = this.containerData, s = this.imageData, o = this.options.viewMode, i = Math.abs(s.rotate) % 180 === 90, a = i ? s.naturalHeight : s.naturalWidth, d = i ? s.naturalWidth : s.naturalHeight, g = a / d, l = e.width, v = e.height;
    e.height * g > e.width ? o === 3 ? l = e.height * g : v = e.width / g : o === 3 ? v = e.width / g : l = e.height * g;
    var p = {
      aspectRatio: g,
      naturalWidth: a,
      naturalHeight: d,
      width: l,
      height: v
    };
    this.canvasData = p, this.limited = o === 1 || o === 2, this.limitCanvas(!0, !0), p.width = Math.min(Math.max(p.width, p.minWidth), p.maxWidth), p.height = Math.min(Math.max(p.height, p.minHeight), p.maxHeight), p.left = (e.width - p.width) / 2, p.top = (e.height - p.height) / 2, p.oldLeft = p.left, p.oldTop = p.top, this.initialCanvasData = Q({}, p);
  },
  limitCanvas: function(e, s) {
    var o = this.options, i = this.containerData, a = this.canvasData, d = this.cropBoxData, g = o.viewMode, l = a.aspectRatio, v = this.cropped && d;
    if (e) {
      var p = Number(o.minCanvasWidth) || 0, b = Number(o.minCanvasHeight) || 0;
      g > 1 ? (p = Math.max(p, i.width), b = Math.max(b, i.height), g === 3 && (b * l > p ? p = b * l : b = p / l)) : g > 0 && (p ? p = Math.max(p, v ? d.width : 0) : b ? b = Math.max(b, v ? d.height : 0) : v && (p = d.width, b = d.height, b * l > p ? p = b * l : b = p / l));
      var S = Ve({
        aspectRatio: l,
        width: p,
        height: b
      });
      p = S.width, b = S.height, a.minWidth = p, a.minHeight = b, a.maxWidth = 1 / 0, a.maxHeight = 1 / 0;
    }
    if (s)
      if (g > (v ? 0 : 1)) {
        var M = i.width - a.width, $ = i.height - a.height;
        a.minLeft = Math.min(0, M), a.minTop = Math.min(0, $), a.maxLeft = Math.max(0, M), a.maxTop = Math.max(0, $), v && this.limited && (a.minLeft = Math.min(d.left, d.left + (d.width - a.width)), a.minTop = Math.min(d.top, d.top + (d.height - a.height)), a.maxLeft = d.left, a.maxTop = d.top, g === 2 && (a.width >= i.width && (a.minLeft = Math.min(0, M), a.maxLeft = Math.max(0, M)), a.height >= i.height && (a.minTop = Math.min(0, $), a.maxTop = Math.max(0, $))));
      } else
        a.minLeft = -a.width, a.minTop = -a.height, a.maxLeft = i.width, a.maxTop = i.height;
  },
  renderCanvas: function(e, s) {
    var o = this.canvasData, i = this.imageData;
    if (s) {
      var a = wu({
        width: i.naturalWidth * Math.abs(i.scaleX || 1),
        height: i.naturalHeight * Math.abs(i.scaleY || 1),
        degree: i.rotate || 0
      }), d = a.width, g = a.height, l = o.width * (d / o.naturalWidth), v = o.height * (g / o.naturalHeight);
      o.left -= (l - o.width) / 2, o.top -= (v - o.height) / 2, o.width = l, o.height = v, o.aspectRatio = d / g, o.naturalWidth = d, o.naturalHeight = g, this.limitCanvas(!0, !1);
    }
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCanvas(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, Re(this.canvas, Q({
      width: o.width,
      height: o.height
    }, mt({
      translateX: o.left,
      translateY: o.top
    }))), this.renderImage(e), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(e) {
    var s = this.canvasData, o = this.imageData, i = o.naturalWidth * (s.width / s.naturalWidth), a = o.naturalHeight * (s.height / s.naturalHeight);
    Q(o, {
      width: i,
      height: a,
      left: (s.width - i) / 2,
      top: (s.height - a) / 2
    }), Re(this.image, Q({
      width: o.width,
      height: o.height
    }, mt(Q({
      translateX: o.left,
      translateY: o.top
    }, o)))), e && this.output();
  },
  initCropBox: function() {
    var e = this.options, s = this.canvasData, o = e.aspectRatio || e.initialAspectRatio, i = Number(e.autoCropArea) || 0.8, a = {
      width: s.width,
      height: s.height
    };
    o && (s.height * o > s.width ? a.height = a.width / o : a.width = a.height * o), this.cropBoxData = a, this.limitCropBox(!0, !0), a.width = Math.min(Math.max(a.width, a.minWidth), a.maxWidth), a.height = Math.min(Math.max(a.height, a.minHeight), a.maxHeight), a.width = Math.max(a.minWidth, a.width * i), a.height = Math.max(a.minHeight, a.height * i), a.left = s.left + (s.width - a.width) / 2, a.top = s.top + (s.height - a.height) / 2, a.oldLeft = a.left, a.oldTop = a.top, this.initialCropBoxData = Q({}, a);
  },
  limitCropBox: function(e, s) {
    var o = this.options, i = this.containerData, a = this.canvasData, d = this.cropBoxData, g = this.limited, l = o.aspectRatio;
    if (e) {
      var v = Number(o.minCropBoxWidth) || 0, p = Number(o.minCropBoxHeight) || 0, b = g ? Math.min(i.width, a.width, a.width + a.left, i.width - a.left) : i.width, S = g ? Math.min(i.height, a.height, a.height + a.top, i.height - a.top) : i.height;
      v = Math.min(v, i.width), p = Math.min(p, i.height), l && (v && p ? p * l > v ? p = v / l : v = p * l : v ? p = v / l : p && (v = p * l), S * l > b ? S = b / l : b = S * l), d.minWidth = Math.min(v, b), d.minHeight = Math.min(p, S), d.maxWidth = b, d.maxHeight = S;
    }
    s && (g ? (d.minLeft = Math.max(0, a.left), d.minTop = Math.max(0, a.top), d.maxLeft = Math.min(i.width, a.left + a.width) - d.width, d.maxTop = Math.min(i.height, a.top + a.height) - d.height) : (d.minLeft = 0, d.minTop = 0, d.maxLeft = i.width - d.width, d.maxTop = i.height - d.height));
  },
  renderCropBox: function() {
    var e = this.options, s = this.containerData, o = this.cropBoxData;
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCropBox(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, e.movable && e.cropBoxMovable && yt(this.face, bt, o.width >= s.width && o.height >= s.height ? Us : kr), Re(this.cropBox, Q({
      width: o.width,
      height: o.height
    }, mt({
      translateX: o.left,
      translateY: o.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), rt(this.element, nr, this.getData());
  }
}, Tu = {
  initPreview: function() {
    var e = this.element, s = this.crossOrigin, o = this.options.preview, i = s ? this.crossOriginUrl : this.url, a = e.alt || "The image to preview", d = document.createElement("img");
    if (s && (d.crossOrigin = s), d.src = i, d.alt = a, this.viewBox.appendChild(d), this.viewBoxImage = d, !!o) {
      var g = o;
      typeof o == "string" ? g = e.ownerDocument.querySelectorAll(o) : o.querySelector && (g = [o]), this.previews = g, re(g, function(l) {
        var v = document.createElement("img");
        yt(l, It, {
          width: l.offsetWidth,
          height: l.offsetHeight,
          html: l.innerHTML
        }), s && (v.crossOrigin = s), v.src = i, v.alt = a, v.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', l.innerHTML = "", l.appendChild(v);
      });
    }
  },
  resetPreview: function() {
    re(this.previews, function(e) {
      var s = ur(e, It);
      Re(e, {
        width: s.width,
        height: s.height
      }), e.innerHTML = s.html, vu(e, It);
    });
  },
  preview: function() {
    var e = this.imageData, s = this.canvasData, o = this.cropBoxData, i = o.width, a = o.height, d = e.width, g = e.height, l = o.left - s.left - e.left, v = o.top - s.top - e.top;
    !this.cropped || this.disabled || (Re(this.viewBoxImage, Q({
      width: d,
      height: g
    }, mt(Q({
      translateX: -l,
      translateY: -v
    }, e)))), re(this.previews, function(p) {
      var b = ur(p, It), S = b.width, M = b.height, $ = S, I = M, T = 1;
      i && (T = S / i, I = a * T), a && I > M && (T = M / a, $ = i * T, I = M), Re(p, {
        width: $,
        height: I
      }), Re(p.getElementsByTagName("img")[0], Q({
        width: d * T,
        height: g * T
      }, mt(Q({
        translateX: -l * T,
        translateY: -v * T
      }, e))));
    }));
  }
}, Iu = {
  bind: function() {
    var e = this.element, s = this.options, o = this.cropper;
    de(s.cropstart) && ye(e, lr, s.cropstart), de(s.cropmove) && ye(e, ar, s.cropmove), de(s.cropend) && ye(e, ir, s.cropend), de(s.crop) && ye(e, nr, s.crop), de(s.zoom) && ye(e, cr, s.zoom), ye(o, Fr, this.onCropStart = this.cropStart.bind(this)), s.zoomable && s.zoomOnWheel && ye(o, es, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && ye(o, Zr, this.onDblclick = this.dblclick.bind(this)), ye(e.ownerDocument, qr, this.onCropMove = this.cropMove.bind(this)), ye(e.ownerDocument, Gr, this.onCropEnd = this.cropEnd.bind(this)), s.responsive && ye(window, Qr, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var e = this.element, s = this.options, o = this.cropper;
    de(s.cropstart) && De(e, lr, s.cropstart), de(s.cropmove) && De(e, ar, s.cropmove), de(s.cropend) && De(e, ir, s.cropend), de(s.crop) && De(e, nr, s.crop), de(s.zoom) && De(e, cr, s.zoom), De(o, Fr, this.onCropStart), s.zoomable && s.zoomOnWheel && De(o, es, this.onWheel, {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && De(o, Zr, this.onDblclick), De(e.ownerDocument, qr, this.onCropMove), De(e.ownerDocument, Gr, this.onCropEnd), s.responsive && De(window, Qr, this.onResize);
  }
}, Au = {
  resize: function() {
    if (!this.disabled) {
      var e = this.options, s = this.container, o = this.containerData, i = s.offsetWidth / o.width, a = s.offsetHeight / o.height, d = Math.abs(i - 1) > Math.abs(a - 1) ? i : a;
      if (d !== 1) {
        var g, l;
        e.restore && (g = this.getCanvasData(), l = this.getCropBoxData()), this.render(), e.restore && (this.setCanvasData(re(g, function(v, p) {
          g[p] = v * d;
        })), this.setCropBoxData(re(l, function(v, p) {
          l[p] = v * d;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Ws || this.setDragMode(gu(this.dragBox, sr) ? Ys : Dr);
  },
  wheel: function(e) {
    var s = this, o = Number(this.options.wheelZoomRatio) || 0.1, i = 1;
    this.disabled || (e.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      s.wheeling = !1;
    }, 50), e.deltaY ? i = e.deltaY > 0 ? 1 : -1 : e.wheelDelta ? i = -e.wheelDelta / 120 : e.detail && (i = e.detail > 0 ? 1 : -1), this.zoom(-i * o, e)));
  },
  cropStart: function(e) {
    var s = e.buttons, o = e.button;
    if (!(this.disabled || (e.type === "mousedown" || e.type === "pointerdown" && e.pointerType === "mouse") && // No primary button (Usually the left button)
    (K(s) && s !== 1 || K(o) && o !== 0 || e.ctrlKey))) {
      var i = this.options, a = this.pointers, d;
      e.changedTouches ? re(e.changedTouches, function(g) {
        a[g.identifier] = At(g);
      }) : a[e.pointerId || 0] = At(e), Object.keys(a).length > 1 && i.zoomable && i.zoomOnTouch ? d = Ks : d = ur(e.target, bt), nu.test(d) && rt(this.element, lr, {
        originalEvent: e,
        action: d
      }) !== !1 && (e.preventDefault(), this.action = d, this.cropping = !1, d === Hs && (this.cropping = !0, ae(this.dragBox, Nt)));
    }
  },
  cropMove: function(e) {
    var s = this.action;
    if (!(this.disabled || !s)) {
      var o = this.pointers;
      e.preventDefault(), rt(this.element, ar, {
        originalEvent: e,
        action: s
      }) !== !1 && (e.changedTouches ? re(e.changedTouches, function(i) {
        Q(o[i.identifier] || {}, At(i, !0));
      }) : Q(o[e.pointerId || 0] || {}, At(e, !0)), this.change(e));
    }
  },
  cropEnd: function(e) {
    if (!this.disabled) {
      var s = this.action, o = this.pointers;
      e.changedTouches ? re(e.changedTouches, function(i) {
        delete o[i.identifier];
      }) : delete o[e.pointerId || 0], s && (e.preventDefault(), Object.keys(o).length || (this.action = ""), this.cropping && (this.cropping = !1, et(this.dragBox, Nt, this.cropped && this.options.modal)), rt(this.element, ir, {
        originalEvent: e,
        action: s
      }));
    }
  }
}, Lu = {
  change: function(e) {
    var s = this.options, o = this.canvasData, i = this.containerData, a = this.cropBoxData, d = this.pointers, g = this.action, l = s.aspectRatio, v = a.left, p = a.top, b = a.width, S = a.height, M = v + b, $ = p + S, I = 0, T = 0, H = i.width, V = i.height, j = !0, z;
    !l && e.shiftKey && (l = b && S ? b / S : 1), this.limited && (I = a.minLeft, T = a.minTop, H = I + Math.min(i.width, o.width, o.left + o.width), V = T + Math.min(i.height, o.height, o.top + o.height));
    var X = d[Object.keys(d)[0]], k = {
      x: X.endX - X.startX,
      y: X.endY - X.startY
    }, N = function(oe) {
      switch (oe) {
        case Ke:
          M + k.x > H && (k.x = H - M);
          break;
        case Ye:
          v + k.x < I && (k.x = I - v);
          break;
        case je:
          p + k.y < T && (k.y = T - p);
          break;
        case Je:
          $ + k.y > V && (k.y = V - $);
          break;
      }
    };
    switch (g) {
      case kr:
        v += k.x, p += k.y;
        break;
      case Ke:
        if (k.x >= 0 && (M >= H || l && (p <= T || $ >= V))) {
          j = !1;
          break;
        }
        N(Ke), b += k.x, b < 0 && (g = Ye, b = -b, v -= b), l && (S = b / l, p += (a.height - S) / 2);
        break;
      case je:
        if (k.y <= 0 && (p <= T || l && (v <= I || M >= H))) {
          j = !1;
          break;
        }
        N(je), S -= k.y, p += k.y, S < 0 && (g = Je, S = -S, p -= S), l && (b = S * l, v += (a.width - b) / 2);
        break;
      case Ye:
        if (k.x <= 0 && (v <= I || l && (p <= T || $ >= V))) {
          j = !1;
          break;
        }
        N(Ye), b -= k.x, v += k.x, b < 0 && (g = Ke, b = -b, v -= b), l && (S = b / l, p += (a.height - S) / 2);
        break;
      case Je:
        if (k.y >= 0 && ($ >= V || l && (v <= I || M >= H))) {
          j = !1;
          break;
        }
        N(Je), S += k.y, S < 0 && (g = je, S = -S, p -= S), l && (b = S * l, v += (a.width - b) / 2);
        break;
      case ht:
        if (l) {
          if (k.y <= 0 && (p <= T || M >= H)) {
            j = !1;
            break;
          }
          N(je), S -= k.y, p += k.y, b = S * l;
        } else
          N(je), N(Ke), k.x >= 0 ? M < H ? b += k.x : k.y <= 0 && p <= T && (j = !1) : b += k.x, k.y <= 0 ? p > T && (S -= k.y, p += k.y) : (S -= k.y, p += k.y);
        b < 0 && S < 0 ? (g = gt, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (g = ft, b = -b, v -= b) : S < 0 && (g = pt, S = -S, p -= S);
        break;
      case ft:
        if (l) {
          if (k.y <= 0 && (p <= T || v <= I)) {
            j = !1;
            break;
          }
          N(je), S -= k.y, p += k.y, b = S * l, v += a.width - b;
        } else
          N(je), N(Ye), k.x <= 0 ? v > I ? (b -= k.x, v += k.x) : k.y <= 0 && p <= T && (j = !1) : (b -= k.x, v += k.x), k.y <= 0 ? p > T && (S -= k.y, p += k.y) : (S -= k.y, p += k.y);
        b < 0 && S < 0 ? (g = pt, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (g = ht, b = -b, v -= b) : S < 0 && (g = gt, S = -S, p -= S);
        break;
      case gt:
        if (l) {
          if (k.x <= 0 && (v <= I || $ >= V)) {
            j = !1;
            break;
          }
          N(Ye), b -= k.x, v += k.x, S = b / l;
        } else
          N(Je), N(Ye), k.x <= 0 ? v > I ? (b -= k.x, v += k.x) : k.y >= 0 && $ >= V && (j = !1) : (b -= k.x, v += k.x), k.y >= 0 ? $ < V && (S += k.y) : S += k.y;
        b < 0 && S < 0 ? (g = ht, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (g = pt, b = -b, v -= b) : S < 0 && (g = ft, S = -S, p -= S);
        break;
      case pt:
        if (l) {
          if (k.x >= 0 && (M >= H || $ >= V)) {
            j = !1;
            break;
          }
          N(Ke), b += k.x, S = b / l;
        } else
          N(Je), N(Ke), k.x >= 0 ? M < H ? b += k.x : k.y >= 0 && $ >= V && (j = !1) : b += k.x, k.y >= 0 ? $ < V && (S += k.y) : S += k.y;
        b < 0 && S < 0 ? (g = ft, S = -S, b = -b, p -= S, v -= b) : b < 0 ? (g = gt, b = -b, v -= b) : S < 0 && (g = ht, S = -S, p -= S);
        break;
      case Us:
        this.move(k.x, k.y), j = !1;
        break;
      case Ks:
        this.zoom(yu(d), e), j = !1;
        break;
      case Hs:
        if (!k.x || !k.y) {
          j = !1;
          break;
        }
        z = Js(this.cropper), v = X.startX - z.left, p = X.startY - z.top, b = a.minWidth, S = a.minHeight, k.x > 0 ? g = k.y > 0 ? pt : ht : k.x < 0 && (v -= b, g = k.y > 0 ? gt : ft), k.y < 0 && (p -= S), this.cropped || (Te(this.cropBox, he), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    j && (a.width = b, a.height = S, a.left = v, a.top = p, this.action = g, this.renderCropBox()), re(d, function(G) {
      G.startX = G.endX, G.startY = G.endY;
    });
  }
}, Ou = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && ae(this.dragBox, Nt), Te(this.cropBox, he), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  // Reset the image and crop box to their initial states
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = Q({}, this.initialImageData), this.canvasData = Q({}, this.initialCanvasData), this.cropBoxData = Q({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  // Clear the crop box
  clear: function() {
    return this.cropped && !this.disabled && (Q(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Te(this.dragBox, Nt), ae(this.cropBox, he)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && e && (this.isImg && (this.element.src = e), s ? (this.url = e, this.image.src = e, this.ready && (this.viewBoxImage.src = e, re(this.previews, function(o) {
      o.getElementsByTagName("img")[0].src = e;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(e))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, Te(this.cropper, Wr)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, ae(this.cropper, Wr)), this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function() {
    var e = this.element;
    return e[J] ? (e[J] = void 0, this.isImg && this.replaced && (e.src = this.originalUrl), this.uncreate(), this) : this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, o = this.canvasData, i = o.left, a = o.top;
    return this.moveTo(Zt(e) ? e : i + Number(e), Zt(s) ? s : a + Number(s));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, o = this.canvasData, i = !1;
    return e = Number(e), s = Number(s), this.ready && !this.disabled && this.options.movable && (K(e) && (o.left = e, i = !0), K(s) && (o.top = s, i = !0), i && this.renderCanvas(!0)), this;
  },
  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function(e, s) {
    var o = this.canvasData;
    return e = Number(e), e < 0 ? e = 1 / (1 - e) : e = 1 + e, this.zoomTo(o.width * e / o.naturalWidth, null, s);
  },
  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function(e, s, o) {
    var i = this.options, a = this.canvasData, d = a.width, g = a.height, l = a.naturalWidth, v = a.naturalHeight;
    if (e = Number(e), e >= 0 && this.ready && !this.disabled && i.zoomable) {
      var p = l * e, b = v * e;
      if (rt(this.element, cr, {
        ratio: e,
        oldRatio: d / l,
        originalEvent: o
      }) === !1)
        return this;
      if (o) {
        var S = this.pointers, M = Js(this.cropper), $ = S && Object.keys(S).length ? Su(S) : {
          pageX: o.pageX,
          pageY: o.pageY
        };
        a.left -= (p - d) * (($.pageX - M.left - a.left) / d), a.top -= (b - g) * (($.pageY - M.top - a.top) / g);
      } else
        Qe(s) && K(s.x) && K(s.y) ? (a.left -= (p - d) * ((s.x - a.left) / d), a.top -= (b - g) * ((s.y - a.top) / g)) : (a.left -= (p - d) / 2, a.top -= (b - g) / 2);
      a.width = p, a.height = b, this.renderCanvas(!0);
    }
    return this;
  },
  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function(e) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(e));
  },
  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function(e) {
    return e = Number(e), K(e) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = e % 360, this.renderCanvas(!0, !0)), this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function(e) {
    var s = this.imageData.scaleY;
    return this.scale(e, K(s) ? s : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function(e) {
    var s = this.imageData.scaleX;
    return this.scale(K(s) ? s : 1, e);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, o = this.imageData, i = !1;
    return e = Number(e), s = Number(s), this.ready && !this.disabled && this.options.scalable && (K(e) && (o.scaleX = e, i = !0), K(s) && (o.scaleY = s, i = !0), i && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, s = this.options, o = this.imageData, i = this.canvasData, a = this.cropBoxData, d;
    if (this.ready && this.cropped) {
      d = {
        x: a.left - i.left,
        y: a.top - i.top,
        width: a.width,
        height: a.height
      };
      var g = o.width / o.naturalWidth;
      if (re(d, function(p, b) {
        d[b] = p / g;
      }), e) {
        var l = Math.round(d.y + d.height), v = Math.round(d.x + d.width);
        d.x = Math.round(d.x), d.y = Math.round(d.y), d.width = v - d.x, d.height = l - d.y;
      }
    } else
      d = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    return s.rotatable && (d.rotate = o.rotate || 0), s.scalable && (d.scaleX = o.scaleX || 1, d.scaleY = o.scaleY || 1), d;
  },
  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function(e) {
    var s = this.options, o = this.imageData, i = this.canvasData, a = {};
    if (this.ready && !this.disabled && Qe(e)) {
      var d = !1;
      s.rotatable && K(e.rotate) && e.rotate !== o.rotate && (o.rotate = e.rotate, d = !0), s.scalable && (K(e.scaleX) && e.scaleX !== o.scaleX && (o.scaleX = e.scaleX, d = !0), K(e.scaleY) && e.scaleY !== o.scaleY && (o.scaleY = e.scaleY, d = !0)), d && this.renderCanvas(!0, !0);
      var g = o.width / o.naturalWidth;
      K(e.x) && (a.left = e.x * g + i.left), K(e.y) && (a.top = e.y * g + i.top), K(e.width) && (a.width = e.width * g), K(e.height) && (a.height = e.height * g), this.setCropBoxData(a);
    }
    return this;
  },
  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function() {
    return this.ready ? Q({}, this.containerData) : {};
  },
  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function() {
    return this.sized ? Q({}, this.imageData) : {};
  },
  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function() {
    var e = this.canvasData, s = {};
    return this.ready && re(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(o) {
      s[o] = e[o];
    }), s;
  },
  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function(e) {
    var s = this.canvasData, o = s.aspectRatio;
    return this.ready && !this.disabled && Qe(e) && (K(e.left) && (s.left = e.left), K(e.top) && (s.top = e.top), K(e.width) ? (s.width = e.width, s.height = e.width / o) : K(e.height) && (s.height = e.height, s.width = e.height * o), this.renderCanvas(!0)), this;
  },
  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function() {
    var e = this.cropBoxData, s;
    return this.ready && this.cropped && (s = {
      left: e.left,
      top: e.top,
      width: e.width,
      height: e.height
    }), s || {};
  },
  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function(e) {
    var s = this.cropBoxData, o = this.options.aspectRatio, i, a;
    return this.ready && this.cropped && !this.disabled && Qe(e) && (K(e.left) && (s.left = e.left), K(e.top) && (s.top = e.top), K(e.width) && e.width !== s.width && (i = !0, s.width = e.width), K(e.height) && e.height !== s.height && (a = !0, s.height = e.height), o && (i ? s.height = s.width / o : a && (s.width = s.height * o)), this.renderCropBox()), this;
  },
  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var s = this.canvasData, o = _u(this.image, this.imageData, s, e);
    if (!this.cropped)
      return o;
    var i = this.getData(), a = i.x, d = i.y, g = i.width, l = i.height, v = o.width / Math.floor(s.naturalWidth);
    v !== 1 && (a *= v, d *= v, g *= v, l *= v);
    var p = g / l, b = Ve({
      aspectRatio: p,
      width: e.maxWidth || 1 / 0,
      height: e.maxHeight || 1 / 0
    }), S = Ve({
      aspectRatio: p,
      width: e.minWidth || 0,
      height: e.minHeight || 0
    }, "cover"), M = Ve({
      aspectRatio: p,
      width: e.width || (v !== 1 ? o.width : g),
      height: e.height || (v !== 1 ? o.height : l)
    }), $ = M.width, I = M.height;
    $ = Math.min(b.width, Math.max(S.width, $)), I = Math.min(b.height, Math.max(S.height, I));
    var T = document.createElement("canvas"), H = T.getContext("2d");
    T.width = tt($), T.height = tt(I), H.fillStyle = e.fillColor || "transparent", H.fillRect(0, 0, $, I);
    var V = e.imageSmoothingEnabled, j = V === void 0 ? !0 : V, z = e.imageSmoothingQuality;
    H.imageSmoothingEnabled = j, z && (H.imageSmoothingQuality = z);
    var X = o.width, k = o.height, N = a, G = d, oe, te, ue, ve, pe, ge;
    N <= -g || N > X ? (N = 0, oe = 0, ue = 0, pe = 0) : N <= 0 ? (ue = -N, N = 0, oe = Math.min(X, g + N), pe = oe) : N <= X && (ue = 0, oe = Math.min(g, X - N), pe = oe), oe <= 0 || G <= -l || G > k ? (G = 0, te = 0, ve = 0, ge = 0) : G <= 0 ? (ve = -G, G = 0, te = Math.min(k, l + G), ge = te) : G <= k && (ve = 0, te = Math.min(l, k - G), ge = te);
    var A = [N, G, oe, te];
    if (pe > 0 && ge > 0) {
      var R = $ / g;
      A.push(ue * R, ve * R, pe * R, ge * R);
    }
    return H.drawImage.apply(H, [o].concat(zs(A.map(function(O) {
      return Math.floor(tt(O));
    })))), T;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function(e) {
    var s = this.options;
    return !this.disabled && !Zt(e) && (s.aspectRatio = Math.max(0, e) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function(e) {
    var s = this.options, o = this.dragBox, i = this.face;
    if (this.ready && !this.disabled) {
      var a = e === Dr, d = s.movable && e === Ys;
      e = a || d ? e : Ws, s.dragMode = e, yt(o, bt, e), et(o, sr, a), et(o, or, d), s.cropBoxMovable || (yt(i, bt, e), et(i, sr, a), et(i, or, d));
    }
    return this;
  }
}, Pu = Ie.Cropper, eo = /* @__PURE__ */ function() {
  function r(e) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Zc(this, r), !e || !lu.test(e.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = e, this.options = Q({}, rs, Qe(s) && s), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return Fc(r, [{
    key: "init",
    value: function() {
      var s = this.element, o = s.tagName.toLowerCase(), i;
      if (!s[J]) {
        if (s[J] = this, o === "img") {
          if (this.isImg = !0, i = s.getAttribute("src") || "", this.originalUrl = i, !i)
            return;
          i = s.src;
        } else
          o === "canvas" && window.HTMLCanvasElement && (i = s.toDataURL());
        this.load(i);
      }
    }
  }, {
    key: "load",
    value: function(s) {
      var o = this;
      if (s) {
        this.url = s, this.imageData = {};
        var i = this.element, a = this.options;
        if (!a.rotatable && !a.scalable && (a.checkOrientation = !1), !a.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (iu.test(s)) {
          au.test(s) ? this.read(Du(s)) : this.clone();
          return;
        }
        var d = new XMLHttpRequest(), g = this.clone.bind(this);
        this.reloading = !0, this.xhr = d, d.onabort = g, d.onerror = g, d.ontimeout = g, d.onprogress = function() {
          d.getResponseHeader("content-type") !== ts && d.abort();
        }, d.onload = function() {
          o.read(d.response);
        }, d.onloadend = function() {
          o.reloading = !1, o.xhr = null;
        }, a.checkCrossOrigin && os(s) && i.crossOrigin && (s = ns(s)), d.open("GET", s, !0), d.responseType = "arraybuffer", d.withCredentials = i.crossOrigin === "use-credentials", d.send();
      }
    }
  }, {
    key: "read",
    value: function(s) {
      var o = this.options, i = this.imageData, a = Mu(s), d = 0, g = 1, l = 1;
      if (a > 1) {
        this.url = Cu(s, ts);
        var v = Eu(a);
        d = v.rotate, g = v.scaleX, l = v.scaleY;
      }
      o.rotatable && (i.rotate = d), o.scalable && (i.scaleX = g, i.scaleY = l), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var s = this.element, o = this.url, i = s.crossOrigin, a = o;
      this.options.checkCrossOrigin && os(o) && (i || (i = "anonymous"), a = ns(o)), this.crossOrigin = i, this.crossOriginUrl = a;
      var d = document.createElement("img");
      i && (d.crossOrigin = i), d.src = a || o, d.alt = s.alt || "The image to crop", this.image = d, d.onload = this.start.bind(this), d.onerror = this.stop.bind(this), ae(d, Xr), s.parentNode.insertBefore(d, s.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var s = this, o = this.image;
      o.onload = null, o.onerror = null, this.sizing = !0;
      var i = Ie.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Ie.navigator.userAgent), a = function(v, p) {
        Q(s.imageData, {
          naturalWidth: v,
          naturalHeight: p,
          aspectRatio: v / p
        }), s.initialImageData = Q({}, s.imageData), s.sizing = !1, s.sized = !0, s.build();
      };
      if (o.naturalWidth && !i) {
        a(o.naturalWidth, o.naturalHeight);
        return;
      }
      var d = document.createElement("img"), g = document.body || document.documentElement;
      this.sizingImage = d, d.onload = function() {
        a(d.width, d.height), i || g.removeChild(d);
      }, d.src = o.src, i || (d.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", g.appendChild(d));
    }
  }, {
    key: "stop",
    value: function() {
      var s = this.image;
      s.onload = null, s.onerror = null, s.parentNode.removeChild(s), this.image = null;
    }
  }, {
    key: "build",
    value: function() {
      if (!(!this.sized || this.ready)) {
        var s = this.element, o = this.options, i = this.image, a = s.parentNode, d = document.createElement("div");
        d.innerHTML = cu;
        var g = d.querySelector(".".concat(J, "-container")), l = g.querySelector(".".concat(J, "-canvas")), v = g.querySelector(".".concat(J, "-drag-box")), p = g.querySelector(".".concat(J, "-crop-box")), b = p.querySelector(".".concat(J, "-face"));
        this.container = a, this.cropper = g, this.canvas = l, this.dragBox = v, this.cropBox = p, this.viewBox = g.querySelector(".".concat(J, "-view-box")), this.face = b, l.appendChild(i), ae(s, he), a.insertBefore(g, s.nextSibling), Te(i, Xr), this.initPreview(), this.bind(), o.initialAspectRatio = Math.max(0, o.initialAspectRatio) || NaN, o.aspectRatio = Math.max(0, o.aspectRatio) || NaN, o.viewMode = Math.max(0, Math.min(3, Math.round(o.viewMode))) || 0, ae(p, he), o.guides || ae(p.getElementsByClassName("".concat(J, "-dashed")), he), o.center || ae(p.getElementsByClassName("".concat(J, "-center")), he), o.background && ae(g, "".concat(J, "-bg")), o.highlight || ae(b, tu), o.cropBoxMovable && (ae(b, or), yt(b, bt, kr)), o.cropBoxResizable || (ae(p.getElementsByClassName("".concat(J, "-line")), he), ae(p.getElementsByClassName("".concat(J, "-point")), he)), this.render(), this.ready = !0, this.setDragMode(o.dragMode), o.autoCrop && this.crop(), this.setData(o.data), de(o.ready) && ye(s, Jr, o.ready, {
          once: !0
        }), rt(s, Jr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var s = this.cropper.parentNode;
        s && s.removeChild(this.cropper), Te(this.element, he);
      }
    }
  }, {
    key: "uncreate",
    value: function() {
      this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
    }
    /**
     * Get the no conflict cropper class.
     * @returns {Cropper} The cropper class.
     */
  }], [{
    key: "noConflict",
    value: function() {
      return window.Cropper = Pu, r;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(s) {
      Q(rs, Qe(s) && s);
    }
  }]), r;
}();
Q(eo.prototype, $u, Tu, Iu, Au, Lu, Ou);
const Nu = { class: "flex" }, ju = ["aria-label"], Ru = { class: "ml-auto mb-2" }, Vu = { class: "w-full flex justify-center" }, Bu = ["src"], zu = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { t: o } = P("i18n"), { apiUrl: i } = Ae(), a = L(null), d = L(null), g = L(!1), l = L(""), v = L(!1), p = () => {
      g.value = !g.value, g.value ? d.value = new eo(a.value, {
        crop(M) {
        }
      }) : d.value.destroy();
    }, b = P("postData"), S = () => {
      d.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        (M) => {
          l.value = "", v.value = !1, Ot(i.value, {
            method: "POST",
            params: Object.assign(b, {
              q: "upload",
              adapter: s.selection.adapter,
              path: s.selection.item.path,
              file: M
            }),
            name: s.selection.item.basename,
            json: !1
          }).then(($) => {
            l.value = o("Updated."), a.value.src = Qt(s.selection.adapter, s.selection.item.path), p(), e("load");
          }).catch(($) => {
            l.value = o($.message), v.value = !0;
          });
        }
      );
    };
    return Me(() => {
      e("load");
    }), (M, $) => (w(), D(le, null, [
      f("div", Nu, [
        f("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, ju),
        f("div", Ru, [
          g.value ? (w(), D("button", {
            key: 0,
            onClick: S,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(o)("Crop")), 1)) : Z("", !0),
          f("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: $[0] || ($[0] = (I) => p())
          }, E(g.value ? x(o)("Cancel") : x(o)("Edit")), 1)
        ])
      ]),
      f("div", Vu, [
        f("img", {
          ref_key: "image",
          ref: a,
          class: "max-w-[50vh] max-h-[50vh]",
          src: x(Qt)(s.selection.adapter, s.selection.item.path),
          alt: ""
        }, null, 8, Bu)
      ]),
      l.value.length ? (w(), q(Oe, {
        key: 0,
        onHidden: $[1] || ($[1] = (I) => l.value = ""),
        error: v.value
      }, {
        default: F(() => [
          se(E(l.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : Z("", !0)
    ], 64));
  }
}, Hu = { class: "flex" }, Uu = ["aria-label"], Ku = /* @__PURE__ */ f("div", null, null, -1), Yu = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    return Me(() => {
      e("load");
    }), (s, o) => (w(), D(le, null, [
      f("div", Hu, [
        f("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, Uu)
      ]),
      Ku
    ], 64));
  }
}, Wu = ["aria-label"], Xu = {
  class: "w-full",
  preload: "",
  controls: ""
}, Zu = ["src"], Fu = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { apiUrl: o } = Ae(), i = () => o.value + "?" + Fe({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return Me(() => {
      e("load");
    }), (a, d) => (w(), D(le, null, [
      f("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, Wu),
      f("div", null, [
        f("video", Xu, [
          f("source", {
            src: i(),
            type: "video/mp4"
          }, null, 8, Zu),
          se(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, qu = ["aria-label"], Gu = {
  class: "w-full",
  controls: ""
}, Ju = ["src"], Qu = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { apiUrl: o } = Ae(), i = () => o.value + "?" + Fe({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return Me(() => {
      e("load");
    }), (a, d) => (w(), D(le, null, [
      f("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, qu),
      f("div", null, [
        f("audio", Gu, [
          f("source", {
            src: i(),
            type: "audio/mpeg"
          }, null, 8, Ju),
          se(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, ed = ["aria-label"], td = ["data"], rd = ["src"], sd = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: e }) {
    const s = r, { apiUrl: o } = Ae(), i = () => o.value + "?" + Fe({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return Me(() => {
      e("load");
    }), (a, d) => (w(), D(le, null, [
      f("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, ed),
      f("div", null, [
        f("object", {
          class: "h-[60vh]",
          data: i(),
          type: "application/pdf",
          width: "100%",
          height: "100%"
        }, [
          f("iframe", {
            class: "border-0",
            src: i(),
            width: "100%",
            height: "100%"
          }, `
          <p>
            Your browser does not support PDFs.
            <a href="https://example.com/test.pdf">Download the PDF</a>
            .
          </p>
        `, 8, rd)
        ], 8, td)
      ])
    ], 64));
  }
}, od = { class: "sm:flex sm:items-start" }, nd = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, id = { class: "text-gray-700 dark:text-gray-200 text-sm" }, ad = {
  key: 0,
  class: "flex leading-5"
}, ld = /* @__PURE__ */ f("svg", {
  class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ f("circle", {
    class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }),
  /* @__PURE__ */ f("path", {
    class: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })
], -1), cd = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, ud = { class: "font-bold pl-2" }, dd = { class: "font-bold pl-2" }, hd = {
  name: "VFModalPreview"
}, fd = /* @__PURE__ */ Object.assign(hd, {
  props: {
    selection: Object
  },
  setup(r) {
    const e = r, { apiUrl: s } = Ae(), o = P("emitter"), { t: i } = P("i18n"), a = L(!1), d = (v) => a.value = v, g = (v) => (e.selection.item.mime_type ?? "").startsWith(v), l = () => {
      const v = s.value + "?" + Fe({ q: "download", adapter: e.selection.adapter, path: e.selection.item.path });
      o.emit("vf-download", v);
    };
    return (v, p) => (w(), q(Le, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: p[6] || (p[6] = (b) => x(o).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Close")), 1),
        f("button", {
          type: "button",
          onClick: p[7] || (p[7] = (b) => l()),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Download")), 1)
      ]),
      default: F(() => [
        f("div", od, [
          f("div", nd, [
            f("div", null, [
              g("text") ? (w(), q(Xc, {
                key: 0,
                selection: r.selection,
                onLoad: p[0] || (p[0] = (b) => d(!0))
              }, null, 8, ["selection"])) : g("image") ? (w(), q(zu, {
                key: 1,
                selection: r.selection,
                onLoad: p[1] || (p[1] = (b) => d(!0))
              }, null, 8, ["selection"])) : g("video") ? (w(), q(Fu, {
                key: 2,
                selection: r.selection,
                onLoad: p[2] || (p[2] = (b) => d(!0))
              }, null, 8, ["selection"])) : g("audio") ? (w(), q(Qu, {
                key: 3,
                selection: r.selection,
                onLoad: p[3] || (p[3] = (b) => d(!0))
              }, null, 8, ["selection"])) : g("application/pdf") ? (w(), q(sd, {
                key: 4,
                selection: r.selection,
                onLoad: p[4] || (p[4] = (b) => d(!0))
              }, null, 8, ["selection"])) : (w(), q(Yu, {
                key: 5,
                selection: r.selection,
                onLoad: p[5] || (p[5] = (b) => d(!0))
              }, null, 8, ["selection"]))
            ]),
            f("div", id, [
              a.value == !1 ? (w(), D("div", ad, [
                ld,
                f("span", null, E(x(i)("Loading")), 1)
              ])) : Z("", !0)
            ])
          ])
        ]),
        f("div", cd, [
          f("div", null, [
            f("span", ud, E(x(i)("File Size")) + ": ", 1),
            se(E(x(us)(r.selection.item.file_size)), 1)
          ]),
          f("div", null, [
            f("span", dd, E(x(i)("Last Modified")) + ": ", 1),
            se(" " + E(x(ds)(r.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), pd = { class: "sm:flex sm:items-start" }, gd = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    })
  ])
], -1), md = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, vd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, bd = { class: "mt-2" }, yd = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, Sd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, wd = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), _d = [
  wd
], xd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, kd = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Dd = [
  kd
], Cd = { class: "ml-1.5" }, Md = ["onKeyup"], Ed = {
  name: "VFModalRename"
}, $d = /* @__PURE__ */ Object.assign(Ed, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: i } = P("i18n"), a = L(e.selection.items[0]), d = L(e.selection.items[0].basename), g = L(""), l = () => {
      d.value != "" && s.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: o.value,
          path: e.current.dirname,
          item: a.value.path,
          name: d.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: i("%s is renamed.", d.value) });
        },
        onError: (v) => {
          g.value = i(v.message);
        }
      });
    };
    return (v, p) => (w(), q(Le, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: l,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Rename")), 1),
        f("button", {
          type: "button",
          onClick: p[2] || (p[2] = (b) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", pd, [
          gd,
          f("div", md, [
            f("h3", vd, E(x(i)("Rename")), 1),
            f("div", bd, [
              f("p", yd, [
                a.value.type == "dir" ? (w(), D("svg", Sd, _d)) : (w(), D("svg", xd, Dd)),
                f("span", Cd, E(a.value.basename), 1)
              ]),
              Se(f("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (b) => d.value = b),
                onKeyup: ot(l, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, Md), [
                [nt, d.value]
              ]),
              g.value.length ? (w(), q(Oe, {
                key: 0,
                onHidden: p[1] || (p[1] = (b) => g.value = ""),
                error: ""
              }, {
                default: F(() => [
                  se(E(g.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Td = { class: "sm:flex sm:items-start" }, Id = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    })
  ])
], -1), Ad = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Ld = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Od = { class: "mt-2" }, Pd = { class: "text-gray-500 mb-1" }, Nd = ["id"], jd = {
  key: 0,
  class: "py-2"
}, Rd = ["disabled", "onClick"], Vd = {
  name: "VFModalUpload"
}, Bd = /* @__PURE__ */ Object.assign(Vd, {
  props: {
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter"), { apiUrl: o } = Ae(), { t: i } = P("i18n"), a = P("maxFileSize"), d = L(null), g = L(null), l = L(null), v = L([]), p = L(""), b = L(!0), S = () => {
      p.value = "", d.value.start();
    }, M = P("postData");
    return Me(() => {
      d.value = new dt.Uploader({
        runtimes: "html5",
        browse_button: l.value,
        container: g.value,
        max_file_size: a,
        multiple_queues: !0,
        file_data_name: "file",
        url: o.value + "?" + Fe(Object.assign(M, { q: "upload", adapter: e.current.adapter, path: e.current.dirname })),
        // filters : [
        // 	{title : "Image files", extensions : "jpg,gif,png,jpeg"},
        // 	{title : "Zip files", extensions : "zip"}
        // ],
        headers: {
          ...jr && { "X-CSRF-Token": jr }
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function($, I) {
            b.value = !1, dt.each(I, function(T) {
              v.value.push({
                id: T.id,
                name: T.name,
                size: dt.formatSize(T.size),
                percent: ""
              });
            });
          },
          UploadProgress: function($, I) {
            v.value[v.value.findIndex((T) => T.id == I.id)].percent = I.percent + "%";
          },
          UploadComplete: function() {
            b.value = !0, s.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: e.current.dirname } });
          },
          Error: function($, I) {
            d.value.stop(), I.code == dt.HTTP_ERROR ? p.value = i(JSON.parse(I.response).message) : I.code == dt.FILE_SIZE_ERROR ? p.value = i("The selected file exceeds the maximum file size. You cannot upload files greater than %s", [a]) : p.value = i(I.message);
          }
        }
      }), d.value.init();
    }), ($, I) => (w(), q(Le, null, {
      buttons: F(() => [
        f("button", {
          disabled: b.value,
          onClick: We(S, ["prevent"]),
          type: "button",
          class: ce([b.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500", "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"])
        }, E(x(i)("Upload")), 11, Rd),
        f("button", {
          type: "button",
          onClick: I[1] || (I[1] = (T) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", Td, [
          Id,
          f("div", Ad, [
            f("h3", Ld, E(x(i)("Upload files")), 1),
            f("div", Od, [
              f("div", Pd, [
                (w(!0), D(le, null, we(v.value, (T) => (w(), D("div", null, [
                  f("div", {
                    id: T.id
                  }, [
                    se(E(T.name) + " ( " + E(T.size) + ") ", 1),
                    f("b", null, E(T.percent), 1)
                  ], 8, Nd)
                ]))), 256)),
                v.value.length ? Z("", !0) : (w(), D("div", jd, E(x(i)("No files selected!")), 1))
              ]),
              f("div", {
                class: "text-gray-500",
                ref_key: "container",
                ref: g
              }, [
                f("button", {
                  ref_key: "pickFiles",
                  ref: l,
                  type: "button",
                  class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                }, E(x(i)("Select Files")), 513)
              ], 512),
              p.value.length ? (w(), q(Oe, {
                key: 0,
                onHidden: I[0] || (I[0] = (T) => p.value = ""),
                error: ""
              }, {
                default: F(() => [
                  se(E(p.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), zd = { class: "sm:flex sm:items-start" }, Hd = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), Ud = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Kd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Yd = { class: "mt-2" }, Wd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Xd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Zd = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Fd = [
  Zd
], qd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Gd = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Jd = [
  Gd
], Qd = { class: "ml-1.5" }, eh = ["onKeyup", "placeholder"], th = {
  name: "VFModalArchive"
}, rh = /* @__PURE__ */ Object.assign(th, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: i } = P("i18n"), a = L(""), d = L(""), g = L(e.selection.items), l = () => {
      g.value.length && s.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: o.value,
          path: e.current.dirname,
          items: JSON.stringify(g.value.map(({ path: v, type: p }) => ({ path: v, type: p }))),
          name: a.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: i("The file(s) archived.") });
        },
        onError: (v) => {
          d.value = i(v.message);
        }
      });
    };
    return (v, p) => (w(), q(Le, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: l,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Archive")), 1),
        f("button", {
          type: "button",
          onClick: p[2] || (p[2] = (b) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", zd, [
          Hd,
          f("div", Ud, [
            f("h3", Kd, E(x(i)("Archive the files")), 1),
            f("div", Yd, [
              (w(!0), D(le, null, we(g.value, (b) => (w(), D("p", Wd, [
                b.type == "dir" ? (w(), D("svg", Xd, Fd)) : (w(), D("svg", qd, Jd)),
                f("span", Qd, E(b.basename), 1)
              ]))), 256)),
              Se(f("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (b) => a.value = b),
                onKeyup: ot(l, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(i)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, eh), [
                [nt, a.value]
              ]),
              d.value.length ? (w(), q(Oe, {
                key: 0,
                onHidden: p[1] || (p[1] = (b) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  se(E(d.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), sh = { class: "sm:flex sm:items-start" }, oh = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), nh = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, ih = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, ah = { class: "mt-2" }, lh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, ch = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, uh = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), dh = [
  uh
], hh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, fh = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ph = [
  fh
], gh = { class: "ml-1.5" }, mh = { class: "my-1 text-sm text-gray-500" }, vh = {
  name: "VFModalUnarchive"
}, bh = /* @__PURE__ */ Object.assign(vh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: i } = P("i18n");
    L("");
    const a = L(e.selection.items[0]), d = L(""), g = L([]), l = () => {
      s.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: o.value,
          path: e.current.dirname,
          item: a.value.path
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: i("The file unarchived.") });
        },
        onError: (v) => {
          d.value = i(v.message);
        }
      });
    };
    return (v, p) => (w(), q(Le, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: l,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Unarchive")), 1),
        f("button", {
          type: "button",
          onClick: p[1] || (p[1] = (b) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", sh, [
          oh,
          f("div", nh, [
            f("h3", ih, E(x(i)("Unarchive")), 1),
            f("div", ah, [
              (w(!0), D(le, null, we(g.value, (b) => (w(), D("p", lh, [
                b.type == "dir" ? (w(), D("svg", ch, dh)) : (w(), D("svg", hh, ph)),
                f("span", gh, E(b.basename), 1)
              ]))), 256)),
              f("p", mh, E(x(i)("The archive will be unarchived at")) + " (" + E(r.current.dirname) + ")", 1),
              d.value.length ? (w(), q(Oe, {
                key: 0,
                onHidden: p[0] || (p[0] = (b) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  se(E(d.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), yh = { class: "sm:flex sm:items-start" }, Sh = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ f("svg", {
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ])
], -1), wh = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, _h = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, xh = { class: "mt-2" }, kh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Dh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ch = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Mh = [
  Ch
], Eh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, $h = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Th = [
  $h
], Ih = { class: "ml-1.5" }, Ah = { class: "text-sm text-gray-500 pb-1 pt-3" }, Lh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Oh = /* @__PURE__ */ f("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ f("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  })
], -1), Ph = { class: "ml-1.5 overflow-auto" }, Nh = {
  name: "VFModalMove"
}, jh = /* @__PURE__ */ Object.assign(Nh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const e = r, s = P("emitter"), { t: o } = P("i18n");
    P("storage");
    const i = P("adapter"), a = L(e.selection.items.from), d = L(""), g = () => {
      a.value.length && s.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: i.value,
          path: e.current.dirname,
          items: JSON.stringify(a.value.map(({ path: l, type: v }) => ({ path: l, type: v }))),
          item: e.selection.items.to.path
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: o("Files moved.", e.selection.items.to.name) });
        },
        onError: (l) => {
          d.value = o(l.message);
        }
      });
    };
    return (l, v) => (w(), q(Le, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: g,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Yes, Move!")), 1),
        f("button", {
          type: "button",
          onClick: v[1] || (v[1] = (p) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", yh, [
          Sh,
          f("div", wh, [
            f("h3", _h, E(x(o)("Move files")), 1),
            f("div", xh, [
              (w(!0), D(le, null, we(a.value, (p) => (w(), D("p", kh, [
                p.type == "dir" ? (w(), D("svg", Dh, Mh)) : (w(), D("svg", Eh, Th)),
                f("span", Ih, E(p.path), 1)
              ]))), 256)),
              f("p", Ah, E(x(o)("Are you sure you want to move these files?")), 1),
              f("p", Lh, [
                Oh,
                f("span", Ph, E(r.selection.items.to.path), 1)
              ]),
              d.value.length ? (w(), q(Oe, {
                key: 0,
                onHidden: v[0] || (v[0] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  se(E(d.value), 1)
                ]),
                _: 1
              })) : Z("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Rh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalArchive: rh,
  ModalDelete: gc,
  ModalMessage: xc,
  ModalMove: jh,
  ModalNewFile: zc,
  ModalNewFolder: Ac,
  ModalPreview: fd,
  ModalRename: $d,
  ModalUnarchive: bh,
  ModalUpload: Bd
}, Symbol.toStringTag, { value: "Module" })), qt = {
  VueFinder: Ul,
  ...Rh
};
const zh = {
  install(r) {
    for (const e in qt)
      if (qt.hasOwnProperty(e)) {
        const s = qt[e];
        r.component(s.name, s);
      }
  }
};
export {
  zh as default
};
