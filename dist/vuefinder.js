import { ref as A, watch as je, inject as P, openBlock as w, createElementBlock as D, createElementVNode as f, unref as x, normalizeClass as ct, createTextVNode as st, toDisplayString as E, createCommentVNode as Z, createVNode as Ct, TransitionGroup as Lo, withCtx as F, Fragment as lt, renderList as wt, reactive as Le, onMounted as Mt, onUpdated as Oo, withDirectives as St, vShow as $e, withModifiers as Wt, nextTick as Re, isRef as as, vModelSelect as Nr, createStaticVNode as Po, customRef as No, withKeys as oe, vModelText as ne, normalizeStyle as ls, provide as Ut, createBlock as q, resolveDynamicComponent as jo, renderSlot as Ge } from "vue";
import de from "plupload";
var is;
const jr = (is = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : is.getAttribute("content"), Ro = localStorage.getItem("token"), Oe = (r, { method: t = "GET", params: s = {}, json: o = !0, signal: i = null }) => {
  const a = { method: t };
  if (a.signal = i, a.headers = {}, a.headers.Authorization = `Bearer ${Ro}`, t === "GET")
    r += "?" + new URLSearchParams(s);
  else {
    const d = new FormData();
    for (const [m, l] of Object.entries(s))
      d.append(m, l);
    a.body = d;
  }
  return console.log(r, a), fetch(r, a).then((d) => d.ok ? o ? d.json() : d.text() : d.json().then(Promise.reject.bind(Promise)));
};
function Vo(r) {
  return { all: r = r || /* @__PURE__ */ new Map(), on: function(t, s) {
    var o = r.get(t);
    o ? o.push(s) : r.set(t, [s]);
  }, off: function(t, s) {
    var o = r.get(t);
    o && (s ? o.splice(o.indexOf(s) >>> 0, 1) : r.set(t, []));
  }, emit: function(t, s) {
    var o = r.get(t);
    o && o.slice().map(function(i) {
      i(s);
    }), (o = r.get("*")) && o.slice().map(function(i) {
      i(t, s);
    });
  } };
}
function Je(r) {
  let t = localStorage.getItem(r + "_storage");
  const s = A(JSON.parse(t));
  je(s, o);
  function o() {
    s.value === null || s.value === "" ? localStorage.removeItem(r + "_storage") : localStorage.setItem(r + "_storage", JSON.stringify(s.value));
  }
  function i(m, l) {
    s.value = Object.assign({ ...s.value }, { [m]: l });
  }
  function a() {
    s.value = null;
  }
  return { getStore: (m, l = null) => s.value === null || s.value === "" ? l : s.value.hasOwnProperty(m) ? s.value[m] : l, setStore: i, clearStore: a };
}
const Rr = A("");
function At() {
  function r(t) {
    Rr.value = t;
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
], tn = ["aria-label"], en = /* @__PURE__ */ f("svg", {
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
  en
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
    const t = P("emitter"), { getStore: s, setStore: o } = P("storage"), { t: i } = P("i18n"), a = A(s("viewport", "grid")), d = A([]), m = A(s("full-screen", !1)), l = A("");
    t.on("vf-search-query", ({ newQuery: S }) => {
      l.value = S;
    });
    const b = P("loadingState"), p = () => b.value, v = () => {
      m.value = !m.value, t.emit("vf-fullscreen-toggle");
    };
    return t.on("vf-nodes-selected", (S) => {
      d.value = S;
    }), t.on("vf-view-toggle", (S) => {
      o("viewport", S), a.value = S;
    }), (S, M) => (w(), D("div", Bo, [
      l.value.length ? (w(), D("div", un, [
        f("div", dn, [
          st(E(x(i)("Search results for")) + " ", 1),
          f("span", hn, E(l.value), 1)
        ]),
        p() ? (w(), D("svg", fn, mn)) : Z("", !0)
      ])) : (w(), D("div", zo, [
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: M[0] || (M[0] = ($) => x(t).emit("vf-modal-show", { type: "new-folder", items: d.value }))
        }, Ko, 8, Ho),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("New File"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[1] || (M[1] = ($) => x(t).emit("vf-modal-show", { type: "new-file", items: d.value }))
        }, Xo, 8, Yo),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Rename"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[2] || (M[2] = ($) => d.value.length != 1 || x(t).emit("vf-modal-show", { type: "rename", items: d.value }))
        }, [
          (w(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([d.value.length == 1 ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
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
          onClick: M[3] || (M[3] = ($) => !d.value.length || x(t).emit("vf-modal-show", { type: "delete", items: d.value }))
        }, [
          (w(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([d.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
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
          onClick: M[4] || (M[4] = ($) => x(t).emit("vf-modal-show", { type: "upload", items: d.value }))
        }, rn, 8, tn),
        d.value.length == 1 && d.value[0].mime_type == "application/zip" ? (w(), D("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": x(i)("Unrchive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: M[5] || (M[5] = ($) => !d.value.length || x(t).emit("vf-modal-show", { type: "unarchive", items: d.value }))
        }, [
          (w(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([d.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
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
          onClick: M[6] || (M[6] = ($) => !d.value.length || x(t).emit("vf-modal-show", { type: "archive", items: d.value }))
        }, [
          (w(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([d.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
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
            onClick: M[7] || (M[7] = ($) => x(t).emit("vf-darkMode-toggle")),
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
          onClick: v
        }, [
          (w(), D("svg", _n, [
            m.value ? (w(), D("path", xn)) : (w(), D("path", kn))
          ]))
        ], 8, wn),
        f("div", {
          class: "mx-1.5",
          "aria-label": x(i)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: M[8] || (M[8] = ($) => l.value.length || x(t).emit("vf-view-toggle", a.value == "list" ? "grid" : "list"))
        }, [
          (w(), D("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ct([l.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
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
(function(r, t) {
  (function(s, o) {
    r.exports = o();
  })(Tn, function() {
    function s(c, u) {
      var e = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (e != null) {
        var g, n, h, y, _ = [], C = !0, B = !1;
        try {
          if (h = (e = e.call(c)).next, u === 0) {
            if (Object(e) !== e)
              return;
            C = !1;
          } else
            for (; !(C = (g = h.call(e)).done) && (_.push(g.value), _.length !== u); C = !0)
              ;
        } catch (X) {
          B = !0, n = X;
        } finally {
          try {
            if (!C && e.return != null && (y = e.return(), Object(y) !== y))
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
      var e = Object.keys(c);
      if (Object.getOwnPropertySymbols) {
        var g = Object.getOwnPropertySymbols(c);
        u && (g = g.filter(function(n) {
          return Object.getOwnPropertyDescriptor(c, n).enumerable;
        })), e.push.apply(e, g);
      }
      return e;
    }
    function i(c) {
      for (var u = 1; u < arguments.length; u++) {
        var e = arguments[u] != null ? arguments[u] : {};
        u % 2 ? o(Object(e), !0).forEach(function(g) {
          l(c, g, e[g]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(e)) : o(Object(e)).forEach(function(g) {
          Object.defineProperty(c, g, Object.getOwnPropertyDescriptor(e, g));
        });
      }
      return c;
    }
    function a(c, u) {
      if (!(c instanceof u))
        throw new TypeError("Cannot call a class as a function");
    }
    function d(c, u) {
      for (var e = 0; e < u.length; e++) {
        var g = u[e];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(c, R(g.key), g);
      }
    }
    function m(c, u, e) {
      return u && d(c.prototype, u), e && d(c, e), Object.defineProperty(c, "prototype", {
        writable: !1
      }), c;
    }
    function l(c, u, e) {
      return u = R(u), u in c ? Object.defineProperty(c, u, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : c[u] = e, c;
    }
    function b(c, u) {
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
      }), u && v(c, u);
    }
    function p(c) {
      return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, p(c);
    }
    function v(c, u) {
      return v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(g, n) {
        return g.__proto__ = n, g;
      }, v(c, u);
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
    function M(c, u, e) {
      return S() ? M = Reflect.construct.bind() : M = function(n, h, y) {
        var _ = [null];
        _.push.apply(_, h);
        var C = Function.bind.apply(n, _), B = new C();
        return y && v(B, y.prototype), B;
      }, M.apply(null, arguments);
    }
    function $(c) {
      return Function.toString.call(c).indexOf("[native code]") !== -1;
    }
    function I(c) {
      var u = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return I = function(g) {
        if (g === null || !$(g))
          return g;
        if (typeof g != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof u < "u") {
          if (u.has(g))
            return u.get(g);
          u.set(g, n);
        }
        function n() {
          return M(g, arguments, p(this).constructor);
        }
        return n.prototype = Object.create(g.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), v(n, g);
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
        var g = p(c), n;
        if (u) {
          var h = p(this).constructor;
          n = Reflect.construct(g, arguments, h);
        } else
          n = g.apply(this, arguments);
        return H(this, n);
      };
    }
    function j(c, u) {
      for (; !Object.prototype.hasOwnProperty.call(c, u) && (c = p(c), c !== null); )
        ;
      return c;
    }
    function z() {
      return typeof Reflect < "u" && Reflect.get ? z = Reflect.get.bind() : z = function(u, e, g) {
        var n = j(u, e);
        if (n) {
          var h = Object.getOwnPropertyDescriptor(n, e);
          return h.get ? h.get.call(arguments.length < 3 ? u : g) : h.value;
        }
      }, z.apply(this, arguments);
    }
    function W(c, u) {
      return G(c) || s(c, u) || et(c, u) || pt();
    }
    function k(c) {
      return N(c) || ot(c) || et(c) || vt();
    }
    function N(c) {
      if (Array.isArray(c))
        return ut(c);
    }
    function G(c) {
      if (Array.isArray(c))
        return c;
    }
    function ot(c) {
      if (typeof Symbol < "u" && c[Symbol.iterator] != null || c["@@iterator"] != null)
        return Array.from(c);
    }
    function et(c, u) {
      if (c) {
        if (typeof c == "string")
          return ut(c, u);
        var e = Object.prototype.toString.call(c).slice(8, -1);
        if (e === "Object" && c.constructor && (e = c.constructor.name), e === "Map" || e === "Set")
          return Array.from(c);
        if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
          return ut(c, u);
      }
    }
    function ut(c, u) {
      (u == null || u > c.length) && (u = c.length);
      for (var e = 0, g = new Array(u); e < u; e++)
        g[e] = c[e];
      return g;
    }
    function vt() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function pt() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function gt(c, u) {
      var e = typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
      if (!e) {
        if (Array.isArray(c) || (e = et(c)) || u && c && typeof c.length == "number") {
          e && (c = e);
          var g = 0, n = function() {
          };
          return {
            s: n,
            n: function() {
              return g >= c.length ? {
                done: !0
              } : {
                done: !1,
                value: c[g++]
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
          e = e.call(c);
        },
        n: function() {
          var C = e.next();
          return h = C.done, C;
        },
        e: function(C) {
          y = !0, _ = C;
        },
        f: function() {
          try {
            !h && e.return != null && e.return();
          } finally {
            if (y)
              throw _;
          }
        }
      };
    }
    function L(c, u) {
      if (typeof c != "object" || c === null)
        return c;
      var e = c[Symbol.toPrimitive];
      if (e !== void 0) {
        var g = e.call(c, u || "default");
        if (typeof g != "object")
          return g;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (u === "string" ? String : Number)(c);
    }
    function R(c) {
      var u = L(c, "string");
      return typeof u == "symbol" ? u : String(u);
    }
    var O = function(u, e, g) {
      var n = u.x, h = u.y, y = g.x, _ = g.y, C = {
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
      return C[e];
    }, tt = function(u) {
      return {
        x: u.left,
        y: u.top
      };
    }, U = function(u) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return {
        left: u.x,
        top: u.y,
        right: u.x,
        bottom: u.y,
        width: e,
        height: e
      };
    }, _t = function(u) {
      return {
        x: u,
        y: u
      };
    }, bt = function(c, u) {
      var e = u;
      window.addEventListener("resize", e), window.addEventListener("scroll", e);
      var g = new MutationObserver(e);
      c.forEach(function(h, y) {
        g.observe(h, {
          childList: y !== 0,
          attributes: !0
        });
      });
      var n = function() {
        return fo(g, e);
      };
      return {
        observer: g,
        callback: e,
        cleanup: n
      };
    }, xe = function(c) {
      var u = Ce(c);
      return u.x || u.y ? !0 : c instanceof Document ? c.body ? !!(c.body.scrollTop = 1) : !!(c.documentElement.scrollTop = 1) : !!(c.scrollTop = 1);
    }, ke = function() {
      var c = document.createElement("div");
      return c.style.position = "fixed", c.style.overflow = "hidden", c.style.pointerEvents = "none", c.style.zIndex = "999999999999999999", c;
    }, Ke = function(c) {
      var u = document.createElement("div");
      return u.style.position = "absolute", c || (u.style.background = "rgba(0, 175, 255, 0.2)", u.style.border = "1px solid rgba(0, 175, 255, 0.8)", u.style.display = "none", u.style.pointerEvents = "none"), u;
    }, De = function(c, u) {
      var e;
      return function() {
        for (var g = arguments.length, n = new Array(g), h = 0; h < g; h++)
          n[h] = arguments[h];
        var y = function() {
          e = null, c.apply(void 0, n);
        };
        clearTimeout(e), e = setTimeout(y, u);
      };
    }, Ye = function() {
      var c, u, e, g;
      return {
        y: ((c = document.body) === null || c === void 0 ? void 0 : c.scrollTop) || ((u = document.documentElement) === null || u === void 0 ? void 0 : u.scrollTop) || 0,
        x: ((e = document.body) === null || e === void 0 ? void 0 : e.scrollLeft) || ((g = document.documentElement) === null || g === void 0 ? void 0 : g.scrollLeft) || 0
      };
    }, Mr = function(c) {
      var u = function e(g) {
        var n, h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = (n = g[h]) === null || n === void 0 ? void 0 : n.parentNode;
        return y ? (g.push(y), h++, e(g, h)) : g;
      };
      return u([c]);
    }, eo = function(c, u) {
      if (c instanceof Document)
        return {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      var e = c.getBoundingClientRect();
      return {
        top: e.top,
        left: e.left,
        bottom: e.bottom,
        right: e.right,
        width: (c.clientWidth || e.width) * u,
        height: (c.clientHeight || e.height) * u
      };
    }, Er = function(c, u) {
      var e = {
        top: Number.POSITIVE_INFINITY,
        left: Number.POSITIVE_INFINITY,
        bottom: Number.NEGATIVE_INFINITY,
        right: Number.NEGATIVE_INFINITY,
        width: Number.NEGATIVE_INFINITY,
        height: Number.NEGATIVE_INFINITY
      };
      return Nt(c).forEach(function(g) {
        var n = u.getRect(g);
        e.top = Math.min(e.top, n.top), e.left = Math.min(e.left, n.left), e.bottom = Math.max(e.bottom, n.bottom), e.right = Math.max(e.right, n.right);
      }), e.height = e.bottom - e.top, e.width = e.right - e.left, e;
    }, Ce = function(c) {
      return !c || c instanceof Document ? Ye() : {
        x: c.scrollLeft >= 0 ? c.scrollLeft : Ye().x,
        y: c.scrollTop >= 0 ? c.scrollTop : Ye().y
      };
    }, $r = function(c) {
      var u = c.elementRect, e = c.containerRect, g = c.tolerance, n = g === void 0 ? {
        x: 0,
        y: 0
      } : g, h = [];
      return u.top - n.y < e.top && h.push("top"), u.left - n.x < e.left && h.push("left"), u.bottom + n.y > e.bottom && h.push("bottom"), u.right + n.y > e.right && h.push("right"), /** @type {DSEdges} */
      h;
    }, ro = function(c) {
      var u = c.event;
      return {
        x: u.clientX,
        y: u.clientY
      };
    }, so = function(c) {
      var u = c.scrollAmount, e = c.initialPointerPos, g = c.pointerPos, n = {};
      return g.x > e.x - u.x ? (n.left = e.x - u.x, n.width = g.x - e.x + u.x) : (n.left = g.x, n.width = e.x - g.x - u.x), g.y > e.y - u.y ? (n.top = e.y - u.y, n.height = g.y - e.y + u.y) : (n.top = g.y, n.height = e.y - g.y - u.y), n;
    }, Tr = function(u) {
      var e = {
        x: 0,
        y: 0
      }, g = window.getComputedStyle(u);
      if (!g.transform || g.transform === "none")
        return e;
      if (g.transform.indexOf("3d") >= 0) {
        var n = g.transform.trim().match(/matrix3d\((.*?)\)/);
        if (n && n.length) {
          var h, y = (h = n[1]) === null || h === void 0 ? void 0 : h.split(",");
          e.x = parseInt(y[12]) || 0, e.y = parseInt(y[13]) || 0;
        }
        return e;
      }
      var _ = g.transform.trim().match(/matrix\((.*?)\)/);
      if (_ && _.length) {
        var C, B = (C = _[1]) === null || C === void 0 ? void 0 : C.split(",");
        e.x = parseInt(B[4]) || 0, e.y = parseInt(B[5]) || 0;
      }
      return e;
    }, oo = function(u) {
      var e = u.style.transform;
      if (!e || e.indexOf("translate") < 0)
        return Tr(u);
      var g = {
        x: 0,
        y: 0
      }, n = e.trim().match(/translate[3dD]*?\(.*?\)/);
      if (n) {
        var h, y = (h = n[0]) === null || h === void 0 ? void 0 : h.split("(");
        if (y) {
          var _, C = (_ = y[1]) === null || _ === void 0 ? void 0 : _.split(",");
          g.x = parseInt(C[0]) || 0, g.y = parseInt(C[1]) || 0;
        }
      }
      return !g.x && !g.x ? Tr(u) : g;
    }, no = function(u) {
      var e = u.style, g = {
        x: parseInt(e.left) || 0,
        y: parseInt(e.top) || 0
      };
      if (!g.x && !g.x) {
        var n = window.getComputedStyle(u);
        return {
          x: parseInt(n.left) || 0,
          y: parseInt(n.top) || 0
        };
      }
      return g;
    }, io = function(c, u) {
      return u ? oo(c) : no(c);
    }, ao = function(c) {
      var u = c.element, e = c.edges, g = c.elementRect, n = c.containerRect, h = c.elementPos, y = c.useTransform;
      e.includes("top") && le(u, {
        y: h.y + n.top - g.top,
        x: h.x
      }, y), e.includes("left") && le(u, {
        y: h.y,
        x: h.x + n.left - g.left
      }, y), e.includes("bottom") && le(u, {
        y: h.y + n.bottom - g.bottom,
        x: h.x
      }, y), e.includes("right") && le(u, {
        y: h.y,
        x: h.x + n.right - g.right
      }, y);
    }, Ir = function(c) {
      var u = c.computedStyle, e = c.node, g = u.position, n = g === "absolute" || g === "relative" || g === "fixed";
      !(e instanceof Document) && !n && (e.style.position = "relative");
    }, lo = function(c) {
      var u = c.shiftKey, e = c.keyboardDragSpeed, g = c.zoom, n = c.key, h = c.dragKeys, y = c.scrollDiff, _ = c.canScroll, C = c.scrollCallback, B = {
        x: 0,
        y: 0
      }, X = u ? e * 4 * g : e * g;
      return h.left.includes(n) && (B.x = y.x || -X, !u && !y.x && _ && C(["left"], e)), h.right.includes(n) && (B.x = y.x || X, !u && !y.x && _ && C(["right"], e)), h.up.includes(n) && (B.y = y.y || -X, !u && !y.y && _ && C(["top"], e)), h.down.includes(n) && (B.y = y.y || X, !u && !y.y && _ && C(["bottom"], e)), B;
    }, co = function(c) {
      var u = c.element, e = c.force, g = c.multiSelectionToggle, n = c.SelectedSet, h = c.hoverClassName;
      u.classList.contains(h) && !e || (n.has(u) ? g && n.delete(u) : n.add(u), u.classList.add(h));
    }, uo = function(c) {
      var u = c.element, e = c.force, g = c.SelectedSet, n = c.PrevSelectedSet, h = c.hoverClassName;
      if (!u.classList.contains(h) && !e)
        return !1;
      var y = g.has(u), _ = n.has(u);
      y && !_ ? g.delete(u) : !y && _ && g.add(u), u.classList.remove(h);
    }, ae = function(u, e, g) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(u, '" is not of type "').concat(e, '".'));
    }, Y = function(u, e, g, n) {
      if (e === void 0)
        return g ? l({}, u, n) : {};
      if (e === null)
        return l({}, u, null);
      var h = !0, y = !1, _ = typeof n == "string";
      _ && (h = typeof e == "string" || e instanceof String), _ && !h && (y = !0, ae(u, "string"));
      var C = !Number.isNaN(n) && typeof n == "number";
      C && (h = !Number.isNaN(e) && typeof e == "number"), C && !h && (y = !0, ae(u, "number"));
      var B = Object.prototype.toString.call(n) === "[object Object]";
      B && (h = Object.prototype.toString.call(e) === "[object Object]"), B && !h && (y = !0, ae(u, "object"));
      var X = typeof n == "boolean";
      X && (h = typeof e == "boolean"), X && !h && (y = !0, ae(u, "boolean"));
      var it = Array.isArray(n);
      it && (h = Array.isArray(e)), it && !h && (y = !0, ae(u, "array"));
      var xt = y || g;
      return u === "dragKeys" && h ? l({}, u, Object.assign(n, e)) : u === "dragKeys" && !h ? xt ? l({}, u, n) : {} : (u === "dropZones" && h && new Set(e.map(function(kt) {
        return kt.id;
      })).size !== e.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), h ? l({}, u, e) : xt ? l({}, u, n) : {});
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
    }, Gt = function(c, u) {
      var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, g = c;
      if (e > 0) {
        var n = (c.right - c.left) * e, h = (c.bottom - c.top) * e;
        g = {
          left: c.left + n,
          right: c.right - n,
          top: c.top + h,
          bottom: c.bottom - h
        };
      }
      return g.left < u.right && // 1.
      g.right > u.left && // 2.
      g.top < u.bottom && // 3.
      g.bottom > u.top;
    }, Ar = function(c) {
      var u = c.element, e = c.posDirection, g = c.containerRect, n = c.useTransform, h = io(u, n), y = O(h, "+", e);
      le(u, y, n);
      var _ = u.getBoundingClientRect(), C = $r({
        elementRect: _,
        containerRect: g
      });
      ao({
        element: u,
        edges: C,
        elementRect: _,
        containerRect: g,
        elementPos: y,
        useTransform: n
      });
    }, fo = function(c, u) {
      window.removeEventListener("resize", u), window.removeEventListener("scroll", u), c.disconnect();
    }, po = function(c, u, e) {
      if (u.length) {
        var g = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, n = c instanceof Document ? g || document.body : c, h = u.includes("top") && n.scrollTop > 0, y = u.includes("bottom") && n.scrollTop < n.scrollHeight, _ = u.includes("left") && n.scrollLeft > 0, C = u.includes("right") && n.scrollLeft < n.scrollWidth;
        h && (n.scrollTop -= 1 * e), y && (n.scrollTop += 1 * e), _ && (n.scrollLeft -= 1 * e), C && (n.scrollLeft += 1 * e);
      }
    }, le = function(c, u, e) {
      if (e) {
        var g = c.style.transform;
        c.style.transform = "translate3d(".concat(u.x, "px,").concat(u.y, "px,1px) ").concat(g.replace(/translate.*?\)/g, ""));
      } else
        c.style.left = "".concat(u.x, "px"), c.style.top = "".concat(u.y, "px");
      return c;
    }, go = function(c) {
      for (var u = c.subscribe, e = c.publish, g = c.Interaction, n = c.SelectedSet, h = c.DropZones, y = {
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
            condition: function(it) {
              return it.event;
            }
          }
        ],
        "Interaction:end": [
          // event, isDraggingKeyboard
          {
            name: "callback",
            extraData: function() {
              var it = h.getTarget();
              return i({}, it ? {
                dropTarget: it.toObject()
              } : {});
            }
          }
        ]
      }, _ = function() {
        var it = W(B[C], 2), xt = it[0], kt = it[1];
        ["pre", !1].forEach(function(Et) {
          return u(Et ? "".concat(xt, ":").concat(Et) : xt, function(nt) {
            return kt.forEach(function(mt) {
              return (!mt.condition || mt.condition(nt)) && e(Et ? "".concat(Et).concat(mt.name) : mt.name, i(i({
                items: n.elements,
                isDragging: g.isDragging
              }, nt), mt.extraData ? mt.extraData(nt) : {}));
            });
          });
        });
      }, C = 0, B = Object.entries(y); C < B.length; C++)
        _();
    }, Nt = function(c) {
      return c ? !Array.isArray(c) && (c instanceof HTMLElement || c instanceof SVGElement) ? [c] : k(new Set(k(c))) : [];
    }, Lr = function(c, u) {
      c.style.left = "".concat(u.left, "px"), c.style.top = "".concat(u.top, "px"), c.style.width = "".concat(u.width, "px"), c.style.height = "".concat(u.height, "px");
    }, mo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        a(this, c), l(this, "DS", void 0), l(this, "_observers", void 0), l(this, "_node", void 0), l(this, "_parentNodes", void 0), l(this, "_computedStyle", void 0), l(this, "_computedBorder", void 0), l(this, "_rect", void 0), l(this, "setArea", function(n) {
          e.reset(), e._node = n, Ir({
            computedStyle: e.computedStyle,
            node: e._node
          }), setTimeout(function() {
            e.DS.PubSub.publish("Area:modified:pre", {
              item: e
            }), e.reset(), e.DS.PubSub.publish("Area:modified", {
              item: e
            });
          });
        }), l(this, "start", function() {
          e._observers = bt(e.parentNodes, De(function(n) {
            e.DS.PubSub.publish("Area:modified:pre", {
              event: n,
              item: e
            }), e.reset(), e.DS.PubSub.publish("Area:modified", {
              event: n,
              item: e
            });
          }, 60));
        }), l(this, "reset", function() {
          e._computedStyle = void 0, e._rect = void 0, e._computedBorder = void 0, e._parentNodes = void 0;
        }), l(this, "stop", function() {
          e._observers.cleanup(), e.reset();
        }), l(this, "scroll", function(n, h) {
          var y = {
            scroll_directions: n,
            scroll_multiplier: h
          };
          e.DS.PubSub.publish("Area:scroll:pre", y), po(e._node, n, h), e.DS.PubSub.publish("Area:scroll", y);
        }), this.DS = g, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(n) {
          var h = n.settings;
          e.setArea(h.area);
        }), this.DS.PubSub.subscribe("Interaction:init", this.start), this.DS.PubSub.subscribe("Interaction:end", this.reset);
      }
      return m(c, [{
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
          return this._rect ? this._rect : this._rect = eo(this.HTMLNode, this.DS.stores.SettingsStore.s.zoom);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Mr(this.HTMLNode);
        }
      }]), c;
    }(), vo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        a(this, c), l(this, "_prevCursorPos", void 0), l(this, "_prevScrollPos", void 0), l(this, "_elements", []), l(this, "_dragKeys", void 0), l(this, "_dragKeysFlat", []), l(this, "_selectionRect", void 0), l(this, "assignDragkeys", function() {
          e._dragKeys = {
            up: e.DS.stores.SettingsStore.s.dragKeys.up.map(function(n) {
              return n.toLowerCase();
            }),
            down: e.DS.stores.SettingsStore.s.dragKeys.down.map(function(n) {
              return n.toLowerCase();
            }),
            left: e.DS.stores.SettingsStore.s.dragKeys.left.map(function(n) {
              return n.toLowerCase();
            }),
            right: e.DS.stores.SettingsStore.s.dragKeys.right.map(function(n) {
              return n.toLowerCase();
            })
          }, e._dragKeysFlat = [].concat(k(e._dragKeys.up), k(e._dragKeys.down), k(e._dragKeys.left), k(e._dragKeys.right));
        }), l(this, "keyboardDrag", function(n) {
          var h = n.event, y = n.key, _ = y.toLowerCase();
          if (!(!e.DS.stores.SettingsStore.s.keyboardDrag || !e._dragKeysFlat.includes(_) || !e.DS.SelectedSet.size || !e.DS.stores.SettingsStore.s.draggability || e.DS.continue)) {
            var C = {
              event: h,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            e.DS.publish(["Interaction:start:pre", "Interaction:start"], C), e._elements = e.DS.getSelection(), e.DS.stores.SettingsStore.s.dragAsBlock && (e._selectionRect = Er(e._elements, e.DS.SelectableSet)), e.handleZIndex(!0);
            var B = lo({
              shiftKey: e.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: e.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: e.DS.stores.SettingsStore.s.zoom,
              key: _,
              scrollCallback: e.DS.Area.scroll,
              scrollDiff: e._scrollDiff,
              canScroll: e.DS.stores.ScrollStore.canScroll,
              dragKeys: e._dragKeys
            });
            e.DS.stores.SettingsStore.s.dragAsBlock && (B = e.limitDirection(B)), e._elements.forEach(function(X) {
              return Ar({
                element: X,
                posDirection: B,
                containerRect: e.DS.SelectorArea.rect,
                useTransform: e.DS.stores.SettingsStore.s.useTransform
              });
            }), e.DS.publish(["Interaction:update:pre", "Interaction:update"], C);
          }
        }), l(this, "keyboardEnd", function(n) {
          var h = n.event, y = n.key, _ = y.toLowerCase();
          if (!(!e.DS.stores.SettingsStore.s.keyboardDrag || !e._dragKeysFlat.includes(_) || !e.DS.SelectedSet.size || !e.DS.stores.SettingsStore.s.draggability)) {
            var C = {
              event: h,
              isDragging: e.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            e.DS.publish(["Interaction:end:pre", "Interaction:end"], C);
          }
        }), l(this, "start", function(n) {
          var h = n.isDragging, y = n.isDraggingKeyboard;
          !h || y || (e._prevCursorPos = null, e._prevScrollPos = null, e._elements = e.DS.getSelection(), e.DS.stores.SettingsStore.s.dragAsBlock && (e._selectionRect = Er(e._elements, e.DS.SelectableSet)), e.handleZIndex(!0));
        }), l(this, "stop", function(n) {
          n != null && n.isKeyboard || (e._prevCursorPos = null, e._prevScrollPos = null, e.handleZIndex(!1), e._elements = []);
        }), l(this, "update", function(n) {
          var h = n.isDragging, y = n.isDraggingKeyboard;
          if (!(!h || !e._elements.length || y || e.DS.continue)) {
            var _ = O(e._cursorDiff, "+", e._scrollDiff);
            e.DS.stores.SettingsStore.s.dragAsBlock && (_ = e.limitDirection(_)), e._elements.forEach(function(C) {
              return Ar({
                element: C,
                posDirection: _,
                containerRect: e.DS.SelectorArea.rect,
                useTransform: e.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), l(this, "limitDirection", function(n) {
          var h = e.DS.SelectorArea.rect, y = e.DS.stores.ScrollStore.scrollAmount, _ = {
            top: h.top - e._selectionRect.top + y.y,
            left: h.left - e._selectionRect.left + y.x,
            bottom: h.bottom - e._selectionRect.bottom + y.y,
            right: h.right - e._selectionRect.right + y.x
          };
          return n.x === 0 && n.y === 0 || (n.y < 0 && (n.y = Math.max(n.y, _.top)), n.x < 0 && (n.x = Math.max(n.x, _.left)), n.y > 0 && (n.y = Math.min(n.y, _.bottom)), n.x > 0 && (n.x = Math.min(n.x, _.right)), e._selectionRect.top += n.y, e._selectionRect.bottom += n.y, e._selectionRect.left += n.x, e._selectionRect.right += n.x), n;
        }), l(this, "handleZIndex", function(n) {
          e._elements.forEach(function(h) {
            return h.style.zIndex = "".concat((parseInt(h.style.zIndex) || 0) + n ? 9999 : -9998);
          });
        }), this.DS = g, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return m(c, [{
        key: "_cursorDiff",
        get: function() {
          var e = this.DS.stores.PointerStore.currentVal, g = this._prevCursorPos ? O(e, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = e, g;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var e = this.DS.stores.ScrollStore.currentVal, g = this._prevScrollPos ? O(e, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = e, g;
        }
      }]), c;
    }(), bo = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS, n = u.id, h = u.element, y = u.droppables;
        a(this, c), l(this, "id", void 0), l(this, "element", void 0), l(this, "_droppables", void 0), l(this, "_rect", void 0), l(this, "_observers", void 0), l(this, "_timeout", void 0), l(this, "_itemsDropped", []), l(this, "_itemsInside", void 0), l(this, "setReadyClasses", function(_) {
          if (!e.isDestroyed) {
            var C = e.droppables.filter(function(B) {
              return e.DS.SelectedSet.has(B);
            });
            C.length && (C.forEach(function(B) {
              B.classList[_]("".concat(e.Settings.droppableClass)), B.classList[_]("".concat(e.Settings.droppableClass, "-").concat(e.id));
            }), e.element.classList[_]("".concat(e.Settings.dropZoneReadyClass)));
          }
        }), l(this, "handleNoDrop", function() {
          var _;
          e.isDestroyed || (e.DS.SelectedSet.forEach(function(C) {
            C.classList.remove(e.Settings.droppedTargetClass), C.classList.remove("".concat(e.Settings.droppedTargetClass, "-").concat(e.id));
          }), e._itemsDropped = e._itemsDropped.filter(function(C) {
            return !e.DS.SelectedSet.has(C);
          }), (_ = e._itemsDropped) !== null && _ !== void 0 && _.length || e.element.classList.remove("".concat(e.Settings.dropZoneTargetClass)));
        }), l(this, "handleDrop", function() {
          var _, C, B;
          e.isDestroyed || (e._itemsDropped = k(new Set([].concat(k(e._itemsDropped), k((_ = e.droppables) === null || _ === void 0 ? void 0 : _.filter(function(X) {
            return e.DS.SelectedSet.has(X);
          }))))), (C = e._itemsDropped) === null || C === void 0 || C.forEach(function(X) {
            X.classList.add("".concat(e.Settings.droppedTargetClass)), X.classList.add("".concat(e.Settings.droppedTargetClass, "-").concat(e.id));
          }), (B = e._itemsDropped) !== null && B !== void 0 && B.length && e.element.classList.add("".concat(e.Settings.dropZoneTargetClass)));
        }), l(this, "handleItemsInsideClasses", function() {
          var _ = !1;
          e.droppables.forEach(function(C) {
            e.itemsInside.includes(C) ? (C.classList.add("".concat(e.Settings.droppedInsideClass)), C.classList.add("".concat(e.Settings.droppedInsideClass, "-").concat(e.id)), _ = !0) : (C.classList.remove("".concat(e.Settings.droppedInsideClass, "-").concat(e.id)), C.className.includes("".concat(e.Settings.droppedInsideClass, "-")) || C.classList.remove("".concat(e.Settings.droppedInsideClass)));
          }), _ ? e.element.classList.add("".concat(e.Settings.dropZoneInsideClass)) : e.element.classList.remove("".concat(e.Settings.dropZoneInsideClass));
        }), l(this, "start", function(_) {
          var C = _.isDragging;
          !C || e.isDestroyed || e.setReadyClasses("add");
        }), l(this, "stop", function(_) {
          var C = _.isDragging;
          !C || e.isDestroyed || (e.setReadyClasses("remove"), e.handleItemsInsideClasses());
        }), l(this, "toObject", function() {
          return {
            id: e.id,
            element: e.element,
            droppables: e.droppables,
            itemsDropped: e.itemsDropped,
            itemsInside: e.itemsInside
          };
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.id = n, this.element = h, y && (this.droppables = Nt(y)), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(_) {
          var C = _.settings;
          e.element && (e.element.classList.remove(C["dropZoneClass:pre"]), e.element.classList.add(C.dropZoneClass));
        }), this._observers = bt(this.parentNodes, De(function() {
          return e._rect = null;
        }, this.Settings.refreshMemoryRate)), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop);
      }
      return m(c, [{
        key: "destroy",
        value: function() {
          var e = this;
          this._observers.cleanup(), this.element.classList.remove("".concat(this.Settings.dropZoneClass)), this.element.classList.remove("".concat(this.Settings.dropZoneTargetClass)), this.element.classList.remove("".concat(this.Settings.dropZoneReadyClass)), this.droppables.forEach(function(g) {
            g.classList.remove("".concat(e.Settings.droppedTargetClass)), g.classList.remove("".concat(e.Settings.droppedTargetClass, "-").concat(e.id)), g.classList.remove("".concat(e.Settings.droppableClass)), g.classList.remove("".concat(e.Settings.droppableClass, "-").concat(e.id));
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
          var e = this;
          return this.isDestroyed ? null : this._itemsInside ? this._itemsInside : (this._itemsInside = this.droppables.flatMap(function(g) {
            return Gt(e.DS.SelectableSet.rects.get(g), e.rect, e.Settings.dropInsideThreshold) ? [g] : [];
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return e._itemsInside = null;
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
        set: function(e) {
          this._droppables = e;
        }
      }]), c;
    }(), yo = /* @__PURE__ */ m(
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
        var e = this, g = u.DS;
        a(this, c), l(this, "_zoneByElement", /* @__PURE__ */ new Map()), l(this, "_zoneById", /* @__PURE__ */ new Map()), l(this, "_zonesByDroppable", /* @__PURE__ */ new Map()), l(this, "_zones", void 0), l(this, "setDropZones", function(n) {
          var h = n.dropZones;
          h && (e._zones && e._zones.forEach(function(y) {
            return y.destroy();
          }), e._zones = h.map(function(y) {
            return new bo(i({
              DS: e.DS
            }, y));
          }), e._zones.forEach(function(y) {
            e._zoneByElement.set(y.element, y), e._zoneById.set(y.id, y), y.droppables.forEach(function(_) {
              var C = e._zonesByDroppable.get(_);
              if (!(C != null && C.length))
                return e._zonesByDroppable.set(_, [y]);
              e._zonesByDroppable.set(_, k(new Set([].concat(k(C), [y]))));
            });
          }));
        }), l(this, "_handleDrop", function(n) {
          e._zones.forEach(function(h) {
            h !== n && h.handleNoDrop();
          }), n && n.handleDrop();
        }), l(this, "_getZoneByElementsFromPoint", function(n, h) {
          for (var y = h.x, _ = h.y, C = 0, B = n.length; C < B; C++) {
            var X = e._zoneByElement.get(n[C]);
            if (X && Gt(X.rect, {
              left: y,
              right: y,
              top: _,
              bottom: _
            }, Math.min(e.Settings.dropTargetThreshold, 0.5)))
              return X;
          }
        }), l(this, "stop", function(n) {
          var h = n.isDragging;
          if (h) {
            var y = e.getTarget();
            e._handleDrop(y);
          }
        }), l(this, "getItemsDroppedById", function(n) {
          var h = e._zoneById.get(n);
          return h ? h.itemsDropped : console.warn("[DragSelect] No zone found (id: ".concat(n, ")"));
        }), l(this, "getItemsInsideById", function(n, h) {
          var y = e._zoneById.get(n);
          if (!y)
            return console.warn("[DragSelect] No zone found (id: ".concat(n, ")"));
          var _ = y.itemsInside;
          return h && y.handleItemsInsideClasses(), _;
        }), l(this, "getTarget", function(n) {
          var h;
          if ((h = e._zones) !== null && h !== void 0 && h.length) {
            var y = (n == null ? void 0 : n.x) || e.DS.stores.PointerStore.currentVal.x, _ = (n == null ? void 0 : n.y) || e.DS.stores.PointerStore.currentVal.y, C = document.elementsFromPoint(y, _);
            return e._getZoneByElementsFromPoint(
              /** @type {DSElements} */
              C,
              {
                x: y,
                y: _
              }
            );
          }
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:dropZones", function(n) {
          var h = n.settings;
          return e.setDropZones(h);
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
        var e = this, g = u.DS;
        a(this, c), l(this, "isInteracting", void 0), l(this, "isDragging", void 0), l(this, "init", function() {
          return e.DS.publish("Interaction:init:pre", {});
        }), l(this, "_init", function() {
          e.stop(), e.Settings.usePointerEvents ? e.DS.Area.HTMLNode.addEventListener("pointerdown", e.start, {
            passive: !1
          }) : e.DS.Area.HTMLNode.addEventListener("mousedown", e.start), e.DS.Area.HTMLNode.addEventListener("touchstart", e.start, {
            passive: !1
          }), e.DS.publish("Interaction:init", {});
        }), l(this, "start", function(n) {
          return e.DS.publish("Interaction:start:pre", {
            event: n,
            isDragging: e.isDragging
          });
        }), l(this, "_start", function(n) {
          n.type === "touchstart" && n.preventDefault(), e._canInteract(n) && (e.isInteracting = !0, e.isDragging = e.isDragEvent(n), e.DS.publish("Interaction:start", {
            event: n,
            isDragging: e.isDragging
          }), e.Settings.usePointerEvents ? (document.addEventListener("pointerup", e.reset), document.addEventListener("pointercancel", e.reset)) : document.addEventListener("mouseup", e.reset), document.addEventListener("touchend", e.reset));
        }), l(this, "isDragEvent", function(n) {
          var h = (
            /** @type {Element} */
            n.target.closest(".".concat(e.Settings.selectableClass))
          );
          return !e.Settings.draggability || e.DS.stores.KeyStore.isMultiSelectKeyPressed(n) || !h ? !1 : (e.Settings.immediateDrag && (e.DS.SelectedSet.size ? e.DS.SelectedSet.has(h) || (e.DS.SelectedSet.clear(), e.DS.SelectedSet.add(
            /** @type {DSElement} */
            h
          )) : e.DS.SelectedSet.add(
            /** @type {DSElement} */
            h
          )), !!e.DS.SelectedSet.has(h));
        }), l(this, "onClick", function(n) {
          var h = n.event;
          if (e._canInteract(h) && !(h.detail > 0)) {
            var y = e.DS, _ = y.stores, C = _.PointerStore, B = _.KeyStore, X = y.SelectableSet, it = y.SelectedSet;
            C.start(h);
            var xt = (
              /** @type {any} */
              h.target
            );
            X.has(xt) && (B.isMultiSelectKeyPressed(h) || it.clear(), it.toggle(xt), e.reset());
          }
        }), l(this, "stop", function() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.DS.Area.HTMLNode;
          e.isInteracting = !1, e.isDragging = !1, e.Settings.usePointerEvents ? (n.removeEventListener("pointerdown", e.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("pointerup", e.reset), document.removeEventListener("pointercancel", e.reset)) : (n.removeEventListener("mousedown", e.start), document.removeEventListener("mouseup", e.reset)), n.removeEventListener("touchstart", e.start, {
            // @ts-ignore
            passive: !1
          }), document.removeEventListener("touchend", e.reset);
        }), l(this, "update", function(n) {
          var h = n.event, y = n.scroll_directions, _ = n.scroll_multiplier;
          e.isInteracting && e.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: h,
            scroll_directions: y,
            scroll_multiplier: _,
            isDragging: e.isDragging
          });
        }), l(this, "reset", function(n) {
          return e.DS.publish("Interaction:end:pre", {
            event: n,
            isDragging: e.isDragging
          });
        }), l(this, "_reset", function(n) {
          var h = e.isDragging;
          e.stop(), e.init(), e.DS.publish("Interaction:end", {
            event: n,
            isDragging: h
          });
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:area", function(n) {
          var h = n.settings;
          e.stop(h["area:pre"]), e.init();
        }), this.DS.subscribe("PointerStore:updated", this.update), this.DS.subscribe("Selectable:click", this.onClick), this.DS.subscribe("Selectable:pointer", function(n) {
          var h = n.event;
          return e.start(h);
        }), this.DS.subscribe("Interaction:start:pre", function(n) {
          var h = n.event;
          return e._start(h);
        }), this.DS.subscribe("Interaction:init:pre", this._init), this.DS.subscribe("Interaction:end:pre", function(n) {
          var h = n.event;
          return e._reset(h);
        }), this.DS.subscribe("Area:scroll", this.update);
      }
      return m(c, [{
        key: "_canInteract",
        value: (
          /**
           * @param {DSEvent} event
           */
          function(e) {
            var g = (
              /** @type {MouseEvent} */
              e.clientX === 0 && /** @type {MouseEvent} */
              e.clientY === 0 && /** @type {MouseEvent} */
              e.detail === 0 && e.target
            );
            return (
              /** @type {MouseEvent} */
              !(e.button === 2 || // right-clicks
              this.isInteracting || // fix double-click issues
              e.target && !this.DS.SelectorArea.isInside(
                /** @type {DSElement} */
                e.target
              ) || // fix outside elements issue
              !g && !this.DS.SelectorArea.isClicked(e))
            );
          }
        )
        /**
         * @param {DSEvent} event
         */
      }]), c;
    }(), wo = /* @__PURE__ */ m(
      function c(u) {
        var e = this, g = u.DS;
        a(this, c), l(this, "subscribers", {}), l(this, "subscribe", function(n, h) {
          return Array.isArray(e.subscribers[n]) || (e.subscribers[n] = []), e.subscribers[n].push(h), e.subscribers[n].length - 1;
        }), l(this, "unsubscribe", function(n, h, y) {
          y >= 0 ? e.subscribers[n].splice(y, 1) : h && (e.subscribers[n] = e.subscribers[n].filter(function(_) {
            return _ !== h;
          }));
        }), l(this, "publish", function(n, h) {
          Array.isArray(n) ? n.forEach(function(y) {
            return e._publish(y, h);
          }) : e._publish(n, h);
        }), l(this, "_publish", function(n, h) {
          var y = e.subscribers[n];
          Array.isArray(y) && (n.includes(":pre") ? e._handlePrePublish(y, h) : e._handlePublish(y, h));
        }), l(this, "_handlePublish", function(n, h) {
          for (var y = 0, _ = n.length; y < _; y++) {
            if (e.DS.stopped)
              return;
            n[y](h);
          }
        }), l(this, "_handlePrePublish", function(n, h) {
          for (var y = n.length; y--; ) {
            if (e.DS.stopped)
              return;
            n[y](h);
          }
        }), this.DS = g;
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
      b(e, c);
      var u = V(e);
      function e(g) {
        var n, h = g.DS;
        return a(this, e), n = u.call(this), l(T(n), "_rects", void 0), l(T(n), "_timeout", void 0), l(T(n), "init", function() {
          return Nt(n.Settings.selectables).forEach(function(y) {
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
      return m(e, [{
        key: "add",
        value: (
          /** 
           * @param {DSElement} element
           * @return {this}
           * */
          function(n) {
            if (z(p(e.prototype), "has", this).call(this, n))
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
            }), z(p(e.prototype), "add", this).call(this, n), this.DS.publish("Selectable:added", h), this;
          }
        )
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(n) {
          if (!z(p(e.prototype), "has", this).call(this, n))
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
          }), z(p(e.prototype), "delete", this).call(this, n), this.DS.publish("Selectable:removed", h), !0;
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
      }]), e;
    }(/* @__PURE__ */ I(Set)), xo = /* @__PURE__ */ function(c) {
      b(e, c);
      var u = V(e);
      function e(g) {
        var n, h = g.DS;
        return a(this, e), n = u.call(this), l(T(n), "clear", function() {
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
      return m(e, [{
        key: "add",
        value: function(n) {
          if (z(p(e.prototype), "has", this).call(this, n))
            return this;
          var h = {
            items: this.elements,
            item: n
          };
          return this.DS.publish("Selected:added:pre", h), z(p(e.prototype), "add", this).call(this, n), n.classList.add(this.DS.stores.SettingsStore.s.selectedClass), n.style.zIndex = "".concat((parseInt(n.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", h), this;
        }
        /** @param {DSElement} element */
      }, {
        key: "delete",
        value: function(n) {
          if (!z(p(e.prototype), "has", this).call(this, n))
            return !0;
          var h = {
            items: this.elements,
            item: n
          };
          this.DS.publish("Selected:removed:pre", h);
          var y = z(p(e.prototype), "delete", this).call(this, n);
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
      }]), e;
    }(/* @__PURE__ */ I(Set)), ko = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        a(this, c), l(this, "_prevSelectedSet", void 0), l(this, "start", function(n) {
          var h = n.event, y = n.isDragging;
          y || (e._storePrevious(h), e._handleInsideSelection(!0, h));
        }), l(this, "update", function(n) {
          var h = n.isDragging;
          h || e.DS.continue || e._handleInsideSelection();
        }), l(this, "_handleInsideSelection", function(n, h) {
          var y = e.DS, _ = y.SelectableSet, C = y.SelectorArea, B = y.Selector, X = e.DS.stores.KeyStore.isMultiSelectKeyPressed(h) && e.Settings.multiSelectToggling, it = e.Settings.selectionThreshold, xt = _.rects, kt = B.rect, Et = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), mt = gt(xt), ce;
          try {
            for (mt.s(); !(ce = mt.n()).done; ) {
              var Me = W(ce.value, 2), ue = Me[0], Ee = Me[1];
              C.isInside(ue, Ee) && (Gt(Ee, kt, it) ? Et.set(ue, Ee) : nt.set(ue, Ee));
            }
          } catch (We) {
            mt.e(We);
          } finally {
            mt.f();
          }
          if (!e.DS.continue) {
            var Pr = e.filterSelected({
              select: Et,
              unselect: nt,
              selectorRect: kt
            }), Io = Pr.select, Ao = Pr.unselect;
            Io.forEach(function(We, Xe) {
              return co({
                element: Xe,
                force: n,
                multiSelectionToggle: X,
                SelectedSet: e.DS.SelectedSet,
                hoverClassName: e.Settings.hoverClass
              });
            }), Ao.forEach(function(We, Xe) {
              return uo({
                element: Xe,
                force: n,
                SelectedSet: e.DS.SelectedSet,
                hoverClassName: e.Settings.hoverClass,
                PrevSelectedSet: e._prevSelectedSet
              });
            });
          }
        }), l(this, "filterSelected", function(n) {
          var h = n.select, y = n.unselect;
          return n.selectorRect, {
            select: h,
            unselect: y
          };
        }), this.DS = g, this.Settings = this.DS.stores.SettingsStore.s, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return m(c, [{
        key: "_storePrevious",
        value: function(e) {
          var g = this.DS, n = g.stores.KeyStore, h = g.SelectedSet;
          n.isMultiSelectKeyPressed(e) ? this._prevSelectedSet = new Set(h) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
        /** @param {{event:DSEvent,isDragging:boolean}} event */
      }]), c;
    }(), Do = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        a(this, c), l(this, "_rect", void 0), l(this, "attachSelector", function() {
          var n, h;
          e.HTMLNode && (n = e.DS.SelectorArea) !== null && n !== void 0 && n.HTMLNode && e.DS.SelectorArea.HTMLNode.removeChild(e.HTMLNode), e.HTMLNode = e.DS.stores.SettingsStore.s.selector || Ke(e.DS.stores.SettingsStore.s.customStyles), e.HTMLNode.classList.add(e.DS.stores.SettingsStore.s.selectorClass), e.HTMLNode && (h = e.DS.SelectorArea) !== null && h !== void 0 && h.HTMLNode && e.DS.SelectorArea.HTMLNode.appendChild(e.HTMLNode);
        }), l(this, "start", function(n) {
          var h = n.isDragging;
          if (!h) {
            var y = e.DS.stores.PointerStore, _ = y.initialValArea;
            Lr(e.HTMLNode, U(_, 1)), e.HTMLNode.style.display = "block", e._rect = null;
          }
        }), l(this, "stop", function() {
          e.HTMLNode.style.width = "0", e.HTMLNode.style.height = "0", e.HTMLNode.style.display = "none";
        }), l(this, "update", function(n) {
          var h = n.isDragging;
          if (!(h || e.DS.continue)) {
            var y = e.DS.stores, _ = y.ScrollStore, C = y.PointerStore, B = so({
              scrollAmount: _.scrollAmount,
              initialPointerPos: C.initialValArea,
              pointerPos: C.currentValArea
            });
            Lr(e.HTMLNode, B), e._rect = null;
          }
        }), this.DS = g, this.DS.subscribe("Settings:updated:selectorClass", function(n) {
          var h = n.settings;
          e.HTMLNode.classList.remove(h["selectorClass:pre"]), e.HTMLNode.classList.add(h.selectorClass);
        }), this.DS.subscribe("Settings:updated:selector", this.attachSelector), this.DS.subscribe("Settings:updated:customStyles", this.attachSelector), this.attachSelector(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return m(c, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), c;
    }(), Co = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        a(this, c), l(this, "_scrollInterval", void 0), l(this, "_rect", void 0), l(this, "currentEdges", []), l(this, "start", function() {
          e.applyElements("append"), e.updatePos();
        }), l(this, "applyElements", function() {
          var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", h = document.body ? "body" : "documentElement", y = "".concat(n, "Child");
          e.HTMLNode[y](e.DS.Selector.HTMLNode), document[h][y](e.HTMLNode);
        }), l(this, "updatePos", function() {
          e._rect = null;
          var n = e.DS.Area.rect, h = e.DS.Area.computedBorder, y = e.HTMLNode.style, _ = "".concat(n.top + h.top, "px"), C = "".concat(n.left + h.left, "px"), B = "".concat(n.width, "px"), X = "".concat(n.height, "px");
          y.top !== _ && (y.top = _), y.left !== C && (y.left = C), y.width !== B && (y.width = B), y.height !== X && (y.height = X);
        }), l(this, "stop", function(n) {
          e.stopAutoScroll(), n && e.applyElements("remove");
        }), l(this, "startAutoScroll", function() {
          e.currentEdges = [], e._scrollInterval = setInterval(function() {
            return e.handleAutoScroll();
          }, 16);
        }), l(this, "handleAutoScroll", function() {
          if (!e.DS.continue) {
            var n = e.DS, h = n.stores.PointerStore, y = n.Area;
            e.currentEdges = $r({
              elementRect: U(h.currentVal),
              containerRect: e.rect,
              tolerance: e.DS.stores.SettingsStore.s.overflowTolerance
            }), e.currentEdges.length && y.scroll(e.currentEdges, e.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), l(this, "stopAutoScroll", function() {
          e.currentEdges = [], clearInterval(e._scrollInterval);
        }), l(this, "isInside", function(n, h) {
          return e.DS.Area.HTMLNode.contains(n) && e.DS.stores.ScrollStore.canScroll ? !0 : Gt(e.rect, h || n.getBoundingClientRect());
        }), this.DS = g, this.HTMLNode = ke(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(n) {
          var h = n.settings;
          e.HTMLNode.classList.remove(h["selectorAreaClass:pre"]), e.HTMLNode.classList.add(h.selectorAreaClass);
        }), this.HTMLNode.classList.add(this.DS.stores.SettingsStore.s.selectorAreaClass), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Interaction:init", this.start), this.DS.subscribe("Interaction:start", this.startAutoScroll), this.DS.subscribe("Interaction:end", function() {
          e.updatePos(), e.stopAutoScroll();
        });
      }
      return m(c, [{
        key: "isClicked",
        value: (
          /**
           * checks if the click was triggered on the area.
           * @param {DSEvent} [event]
           * @returns {boolean}
           */
          function(e) {
            var g = this.DS.stores.PointerStore, n = e ? g.getPointerPosition(e) : g.initialVal;
            return Gt({
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
        var e = this, g = u.DS;
        a(this, c), l(this, "_currentValues", /* @__PURE__ */ new Set()), l(this, "_keyMapping", {
          control: "ctrlKey",
          shift: "shiftKey",
          meta: "metaKey"
        }), l(this, "init", function() {
          document.addEventListener("keydown", e.keydown), document.addEventListener("keyup", e.keyup), window.addEventListener("blur", e.reset);
        }), l(this, "keydown", function(n) {
          var h = n.key.toLowerCase();
          e.DS.publish("KeyStore:down:pre", {
            event: n,
            key: h
          }), e._currentValues.add(h), e.DS.publish("KeyStore:down", {
            event: n,
            key: h
          });
        }), l(this, "keyup", function(n) {
          var h = n.key.toLowerCase();
          e.DS.publish("KeyStore:up:pre", {
            event: n,
            key: h
          }), e._currentValues.delete(h), e.DS.publish("KeyStore:up", {
            event: n,
            key: h
          });
        }), l(this, "stop", function() {
          document.removeEventListener("keydown", e.keydown), document.removeEventListener("keyup", e.reset), window.removeEventListener("blur", e.reset), e.reset();
        }), l(this, "reset", function() {
          return e._currentValues.clear();
        }), this.DS = g, this.DS.subscribe("Interaction:init", this.init);
      }
      return m(c, [{
        key: "isMultiSelectKeyPressed",
        value: (
          /** @param {KeyboardEvent|MouseEvent|PointerEvent|TouchEvent} [event] */
          function(e) {
            var g = this;
            if (this.DS.stores.SettingsStore.s.multiSelectMode)
              return !0;
            var n = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(h) {
              return h.toLocaleLowerCase();
            });
            return !!(this.currentValues.some(function(h) {
              return n.includes(h.toLocaleLowerCase());
            }) || e && n.some(function(h) {
              return e[g._keyMapping[h]];
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
        var e = this, g = u.DS;
        a(this, c), l(this, "_isMouseInteraction", !1), l(this, "_initialValArea", void 0), l(this, "_currentValArea", void 0), l(this, "_lastValArea", void 0), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_lastVal", void 0), l(this, "_lastTouch", void 0), l(this, "init", function() {
          e.Settings.usePointerEvents ? document.addEventListener("pointermove", e.update, {
            // @ts-ignore
            passive: !1
          }) : document.addEventListener("mousemove", e.update), document.addEventListener("touchmove", e.update, {
            // @ts-ignore
            passive: !1
          });
        }), l(this, "getPointerPosition", function(n) {
          return ro({
            event: e._normalizedEvent(n)
          });
        }), l(this, "update", function(n) {
          n && (e.DS.publish("PointerStore:updated:pre", {
            event: n
          }), e.currentVal = e.getPointerPosition(n), e._isMouseInteraction && e.DS.publish("PointerStore:updated", {
            event: n
          }));
        }), l(this, "stop", function() {
          e.Settings.usePointerEvents ? document.removeEventListener("pointermove", e.update, {
            // @ts-ignore
            passive: !1
          }) : document.removeEventListener("mousemove", e.update), document.removeEventListener("touchmove", e.update, {
            // @ts-ignore
            passive: !1
          }), setTimeout(function() {
            return e._isMouseInteraction = !1;
          }, 100);
        }), l(this, "reset", function(n) {
          n && (e.currentVal = e.lastVal = e.getPointerPosition(n), e.stop(), e.init());
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(n) {
          var h = n.event;
          return e.start(h);
        }), this.DS.subscribe("Interaction:end", function(n) {
          var h = n.event;
          return e.reset(h);
        });
      }
      return m(c, [{
        key: "start",
        value: (
          /** @param {DSEvent} [event] */
          function(e) {
            e && (this._isMouseInteraction = !0, this.currentVal = this.initialVal = this.getPointerPosition(e));
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
          function(e) {
            return "touches" in e && e.type !== "touchend" && (this._lastTouch = e), "touches" in e ? this._lastTouch.touches[0] : e;
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
        set: function(e) {
          this._initialVal = e, this._initialValArea = e && O(e, "-", O(tt(this.DS.Area.rect), "+", tt(this.DS.Area.computedBorder)));
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal ? this._currentVal : {
            x: 0,
            y: 0
          };
        },
        set: function(e) {
          this._currentVal = e, this._currentValArea = e && O(e, "-", O(tt(this.DS.Area.rect), "+", tt(this.DS.Area.computedBorder)));
        }
      }, {
        key: "lastVal",
        get: function() {
          return this._lastVal ? this._lastVal : {
            x: 0,
            y: 0
          };
        },
        set: function(e) {
          this._lastVal = e, this._lastValArea = e && O(e, "-", O(tt(this.DS.Area.rect), "+", tt(this.DS.Area.computedBorder)));
        }
      }]), c;
    }(), $o = /* @__PURE__ */ function() {
      function c(u) {
        var e = this, g = u.DS;
        a(this, c), l(this, "_initialVal", void 0), l(this, "_currentVal", void 0), l(this, "_canScroll", void 0), l(this, "init", function() {
          return e.DS.stores.SettingsStore.s.area.addEventListener("scroll", e.update);
        }), l(this, "start", function() {
          e._currentVal = e._initialVal = Ce(e.DS.stores.SettingsStore.s.area), e.DS.stores.SettingsStore.s.area.addEventListener("scroll", e.update);
        }), l(this, "update", function() {
          return e._currentVal = Ce(e.DS.stores.SettingsStore.s.area);
        }), l(this, "stop", function() {
          e.DS.stores.SettingsStore.s.area.removeEventListener("scroll", e.update), e._initialVal = {
            x: 0,
            y: 0
          }, e._canScroll = null;
        }), l(this, "reset", function() {
          e.stop(), e.start();
        }), this.DS = g, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function() {
          return e.start();
        }), this.DS.subscribe("Interaction:end", function() {
          return e.reset();
        });
      }
      return m(c, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = xe(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var e = O(this.currentVal, "-", this.initialVal), g = _t(this.DS.stores.SettingsStore.s.zoom), n = O(O(e, "*", g), "-", e);
          return {
            x: e.x + n.x,
            y: e.y + n.y
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
          return this._currentVal || (this._currentVal = Ce(this.DS.stores.SettingsStore.s.area)), this._currentVal;
        }
      }]), c;
    }(), To = /* @__PURE__ */ m(
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
        var e = this, g = u.DS, n = u.settings;
        a(this, c), l(this, "_settings", {}), l(this, "s", {}), l(this, "update", function(h) {
          var y = h.settings, _ = h.init;
          return e.DS.publish("Settings:updated:pre", i({
            settings: y
          }, _ ? {
            init: _
          } : {}));
        }), l(this, "_update", function(h) {
          for (var y = h.settings, _ = h.init, C = ho(y, _), B = function() {
            var kt, Et = W(it[X], 2), nt = Et[0], mt = Et[1];
            nt in e._settings || Object.defineProperty(e.s, nt, {
              get: function() {
                return e._settings[nt];
              },
              set: function(ue) {
                return e.update({
                  settings: l({}, nt, ue)
                });
              }
            }), e._settings["".concat(nt, ":pre")] = e._settings[nt], e._settings[nt] = mt;
            var ce = {
              settings: (kt = {}, l(kt, nt, e._settings[nt]), l(kt, "".concat(nt, ":pre"), e._settings["".concat(nt, ":pre")]), kt)
            };
            e.DS.publish("Settings:updated", ce), e.DS.publish("Settings:updated:".concat(nt), ce);
          }, X = 0, it = Object.entries(C); X < it.length; X++)
            B();
        }), this.DS = g, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
          settings: n,
          init: !0
        });
      }
      /** @param {{settings: Settings, init?: boolean}} props */
    ), Or = /* @__PURE__ */ function() {
      function c(u) {
        var e = this;
        a(this, c), l(this, "continue", !1), l(this, "start", function() {
          e.stopped = !1, e.Interaction.init();
        }), l(this, "break", function() {
          return e.continue = !0;
        }), l(this, "setSettings", function(g) {
          return e.stores.SettingsStore.update({
            settings: g
          });
        }), l(this, "getSelection", function() {
          return e.SelectedSet.elements;
        }), l(this, "getSelectables", function() {
          return e.SelectableSet.elements;
        }), l(this, "getInitialCursorPosition", function() {
          return e.stores.PointerStore.initialVal;
        }), l(this, "getCurrentCursorPosition", function() {
          return e.stores.PointerStore.currentVal;
        }), l(this, "getPreviousCursorPosition", function() {
          return e.stores.PointerStore.lastVal;
        }), l(this, "getInitialCursorPositionArea", function() {
          return e.stores.PointerStore.initialValArea;
        }), l(this, "getCurrentCursorPositionArea", function() {
          return e.stores.PointerStore.currentValArea;
        }), l(this, "getPreviousCursorPositionArea", function() {
          return e.stores.PointerStore.lastValArea;
        }), l(this, "isMultiSelect", function(g) {
          return e.stores.KeyStore.isMultiSelectKeyPressed(g);
        }), l(this, "isDragging", function() {
          return e.Interaction.isDragging;
        }), l(this, "getZoneByCoordinates", function(g) {
          var n;
          return (n = e.DropZones.getTarget(g)) === null || n === void 0 ? void 0 : n.toObject();
        }), l(this, "getItemsDroppedByZoneId", function(g) {
          return e.DropZones.getItemsDroppedById(g);
        }), l(this, "getItemsInsideByZoneId", function(g, n) {
          return e.DropZones.getItemsInsideById(g, n);
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
          return e.continue = !1;
        }), this.start();
      }
      return m(c, [{
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
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            n && this.publish("callback", {
              items: this.getSelection()
            }), this.Interaction.stop(), this.Area.stop(), this.Drag.stop(), this.Selector.stop(), this.SelectorArea.stop(e), this.stores.KeyStore.stop(), this.stores.PointerStore.stop(), this.stores.ScrollStore.stop(), e && this.SelectableSet.clear(), g && this.SelectedSet.clear(), this.stopped = !0;
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
          function(e) {
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return this.SelectedSet.addAll(Nt(e)), n || this.addSelectables(e), g && this.PubSub.publish("callback", {
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
        value: function(e) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Nt(e)), n && this.removeSelectables(e), g && this.PubSub.publish("callback", {
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
        value: function(e) {
          var g = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Nt(e).forEach(function(y) {
            return g.SelectedSet.has(y) ? g.removeSelection(e, n, h) : g.addSelection(e, n, h);
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
        value: function(e) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(e, g, n), this.getSelection();
        }
        /**
         * Unselect / Deselect all current selected Nodes
         * @param {boolean} [triggerCallback] - if callback should be called
         * @return {DSElements} this.selected, should be empty
         */
      }, {
        key: "clearSelection",
        value: function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          return this.SelectedSet.clear(), e && this.PubSub.publish("callback", {
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
        value: function(e, g, n) {
          var h = Nt(e);
          return this.SelectableSet.addAll(h), g && this.SelectedSet.addAll(h), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), e;
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
          function(e) {
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(e, g), this.addSelectables(e, n);
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
        value: function(e, g, n) {
          return this.SelectableSet.deleteAll(Nt(e)), g && this.removeSelection(e), n && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), e;
        }
        /** The starting/initial position of the cursor/selector @return {Vect2} */
      }]), c;
    }();
    return Or.isCollision = Gt, Or;
  });
})(cs);
var An = cs.exports;
const Ln = /* @__PURE__ */ In(An), us = (r, t, s, o, i) => (t = Math, s = t.log, o = 1024, i = s(r) / s(o) | 0, r / t.pow(o, i)).toFixed(0) + " " + (i ? "KMGTPEZY"[--i] + "iB" : "B"), ds = (r, t = null) => new Date(r * 1e3).toLocaleString(t ?? navigator.language ?? "en-US"), On = {
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
}, Te = /* @__PURE__ */ Object.assign(Bn, {
  props: { direction: String },
  setup(r) {
    return (t, s) => (w(), D("div", null, [
      r.direction == "down" ? (w(), D("svg", On, Nn)) : Z("", !0),
      r.direction == "up" ? (w(), D("svg", jn, Vn)) : Z("", !0)
    ]));
  }
}), zn = ["onClick"], Hn = {
  name: "VFToast.vue"
}, Un = /* @__PURE__ */ Object.assign(Hn, {
  setup(r) {
    const t = P("emitter"), { getStore: s } = P("storage"), o = A(s("full-screen", !1)), i = (l) => l == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", a = A([]), d = (l) => {
      a.value.splice(l, 1);
    }, m = (l) => {
      let b = a.value.findIndex((p) => p.id === l);
      b !== -1 && d(b);
    };
    return t.on("vf-toast-clear", () => {
      a.value = [];
    }), t.on("vf-toast-push", (l) => {
      let b = (/* @__PURE__ */ new Date()).getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      l.id = b, a.value.push(l), setTimeout(() => {
        m(b);
      }, 5e3);
    }), (l, b) => (w(), D("div", {
      class: ct([o.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Ct(Lo, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: F(() => [
          (w(!0), D(lt, null, wt(a.value, (p, v) => (w(), D("div", {
            onClick: (S) => d(v),
            key: p,
            class: ct([i(p.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, E(p.label), 11, zn))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Ft = (r) => Object.entries(r).map((t) => t.map(encodeURIComponent).join("=")).join("&"), { apiUrl: Kn } = At(), Qe = (r, t) => Kn.value + "?" + Ft({ q: "preview", adapter: r, path: t }), zt = typeof window < "u", hs = zt && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), fs = zt && "IntersectionObserver" in window, ps = zt && "classList" in document.createElement("p"), gs = zt && window.devicePixelRatio > 1, Yn = {
  elements_selector: ".lazy",
  container: hs || zt ? document : null,
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
}, ms = (r) => Object.assign({}, Yn, r), Vr = function(r, t) {
  let s;
  const o = "LazyLoad::Initialized", i = new r(t);
  try {
    s = new CustomEvent(o, { detail: { instance: i } });
  } catch {
    s = document.createEvent("CustomEvent"), s.initCustomEvent(o, !1, !1, { instance: i });
  }
  window.dispatchEvent(s);
}, Wn = (r, t) => {
  if (t)
    if (!t.length)
      Vr(r, t);
    else
      for (let s = 0, o; o = t[s]; s += 1)
        Vr(r, o);
}, Pt = "src", dr = "srcset", hr = "sizes", vs = "poster", Se = "llOriginalAttrs", bs = "data", fr = "loading", ys = "loaded", Ss = "applied", Xn = "entered", pr = "error", ws = "native", _s = "data-", xs = "ll-status", ft = (r, t) => r.getAttribute(_s + t), Zn = (r, t, s) => {
  var o = _s + t;
  if (s === null) {
    r.removeAttribute(o);
    return;
  }
  r.setAttribute(o, s);
}, we = (r) => ft(r, xs), qt = (r, t) => Zn(r, xs, t), Ve = (r) => qt(r, null), gr = (r) => we(r) === null, Fn = (r) => we(r) === fr, qn = (r) => we(r) === pr, mr = (r) => we(r) === ws, Gn = [fr, ys, Ss, pr], Jn = (r) => Gn.indexOf(we(r)) >= 0, Ht = (r, t, s, o) => {
  if (r) {
    if (o !== void 0) {
      r(t, s, o);
      return;
    }
    if (s !== void 0) {
      r(t, s);
      return;
    }
    r(t);
  }
}, ie = (r, t) => {
  if (ps) {
    r.classList.add(t);
    return;
  }
  r.className += (r.className ? " " : "") + t;
}, $t = (r, t) => {
  if (ps) {
    r.classList.remove(t);
    return;
  }
  r.className = r.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, Qn = (r) => {
  r.llTempImage = document.createElement("IMG");
}, ti = (r) => {
  delete r.llTempImage;
}, ks = (r) => r.llTempImage, Be = (r, t) => {
  if (!t)
    return;
  const s = t._observer;
  s && s.unobserve(r);
}, ei = (r) => {
  r.disconnect();
}, ri = (r, t, s) => {
  t.unobserve_entered && Be(r, s);
}, vr = (r, t) => {
  r && (r.loadingCount += t);
}, si = (r) => {
  r && (r.toLoadCount -= 1);
}, Ds = (r, t) => {
  r && (r.toLoadCount = t);
}, oi = (r) => r.loadingCount > 0, ni = (r) => r.toLoadCount > 0, Cs = (r) => {
  let t = [];
  for (let s = 0, o; o = r.children[s]; s += 1)
    o.tagName === "SOURCE" && t.push(o);
  return t;
}, br = (r, t) => {
  const s = r.parentNode;
  if (!s || s.tagName !== "PICTURE")
    return;
  Cs(s).forEach(t);
}, Ms = (r, t) => {
  Cs(r).forEach(t);
}, ze = [Pt], Es = [Pt, vs], ve = [Pt, dr, hr], $s = [bs], He = (r) => !!r[Se], Ts = (r) => r[Se], Is = (r) => delete r[Se], se = (r, t) => {
  if (He(r))
    return;
  const s = {};
  t.forEach((o) => {
    s[o] = r.getAttribute(o);
  }), r[Se] = s;
}, ii = (r) => {
  He(r) || (r[Se] = { backgroundImage: r.style.backgroundImage });
}, ai = (r, t, s) => {
  if (!s) {
    r.removeAttribute(t);
    return;
  }
  r.setAttribute(t, s);
}, Xt = (r, t) => {
  if (!He(r))
    return;
  const s = Ts(r);
  t.forEach((o) => {
    ai(r, o, s[o]);
  });
}, li = (r) => {
  if (!He(r))
    return;
  const t = Ts(r);
  r.style.backgroundImage = t.backgroundImage;
}, As = (r, t, s) => {
  ie(r, t.class_applied), qt(r, Ss), s && (t.unobserve_completed && Be(r, t), Ht(t.callback_applied, r, s));
}, Ls = (r, t, s) => {
  ie(r, t.class_loading), qt(r, fr), s && (vr(s, 1), Ht(t.callback_loading, r, s));
}, Bt = (r, t, s) => {
  s && r.setAttribute(t, s);
}, Br = (r, t) => {
  Bt(r, hr, ft(r, t.data_sizes)), Bt(r, dr, ft(r, t.data_srcset)), Bt(r, Pt, ft(r, t.data_src));
}, ci = (r, t) => {
  br(r, (s) => {
    se(s, ve), Br(s, t);
  }), se(r, ve), Br(r, t);
}, ui = (r, t) => {
  se(r, ze), Bt(r, Pt, ft(r, t.data_src));
}, di = (r, t) => {
  Ms(r, (s) => {
    se(s, ze), Bt(s, Pt, ft(s, t.data_src));
  }), se(r, Es), Bt(r, vs, ft(r, t.data_poster)), Bt(r, Pt, ft(r, t.data_src)), r.load();
}, hi = (r, t) => {
  se(r, $s), Bt(r, bs, ft(r, t.data_src));
}, fi = (r, t, s) => {
  const o = ft(r, t.data_bg), i = ft(r, t.data_bg_hidpi), a = gs && i ? i : o;
  a && (r.style.backgroundImage = `url("${a}")`, ks(r).setAttribute(Pt, a), Ls(r, t, s));
}, pi = (r, t, s) => {
  const o = ft(r, t.data_bg_multi), i = ft(r, t.data_bg_multi_hidpi), a = gs && i ? i : o;
  a && (r.style.backgroundImage = a, As(r, t, s));
}, gi = (r, t, s) => {
  const o = ft(r, t.data_bg_set);
  if (!o)
    return;
  const i = o.split("|");
  let a = i.map((d) => `image-set(${d})`);
  r.style.backgroundImage = a.join(), r.style.backgroundImage === "" && (a = i.map((d) => `-webkit-image-set(${d})`), r.style.backgroundImage = a.join()), As(r, t, s);
}, Os = {
  IMG: ci,
  IFRAME: ui,
  VIDEO: di,
  OBJECT: hi
}, mi = (r, t) => {
  const s = Os[r.tagName];
  s && s(r, t);
}, vi = (r, t, s) => {
  const o = Os[r.tagName];
  o && (o(r, t), Ls(r, t, s));
}, bi = ["IMG", "IFRAME", "VIDEO", "OBJECT"], yi = (r) => bi.indexOf(r.tagName) > -1, Ps = (r, t) => {
  t && !oi(t) && !ni(t) && Ht(r.callback_finish, t);
}, zr = (r, t, s) => {
  r.addEventListener(t, s), r.llEvLisnrs[t] = s;
}, Si = (r, t, s) => {
  r.removeEventListener(t, s);
}, yr = (r) => !!r.llEvLisnrs, wi = (r, t, s) => {
  yr(r) || (r.llEvLisnrs = {});
  const o = r.tagName === "VIDEO" ? "loadeddata" : "load";
  zr(r, o, t), zr(r, "error", s);
}, tr = (r) => {
  if (!yr(r))
    return;
  const t = r.llEvLisnrs;
  for (let s in t) {
    const o = t[s];
    Si(r, s, o);
  }
  delete r.llEvLisnrs;
}, Ns = (r, t, s) => {
  ti(r), vr(s, -1), si(s), $t(r, t.class_loading), t.unobserve_completed && Be(r, s);
}, _i = (r, t, s, o) => {
  const i = mr(t);
  Ns(t, s, o), ie(t, s.class_loaded), qt(t, ys), Ht(s.callback_loaded, t, o), i || Ps(s, o);
}, xi = (r, t, s, o) => {
  const i = mr(t);
  Ns(t, s, o), ie(t, s.class_error), qt(t, pr), Ht(s.callback_error, t, o), s.restore_on_error && Xt(t, ve), i || Ps(s, o);
}, Sr = (r, t, s) => {
  const o = ks(r) || r;
  if (yr(o))
    return;
  wi(o, (d) => {
    _i(d, r, t, s), tr(o);
  }, (d) => {
    xi(d, r, t, s), tr(o);
  });
}, ki = (r, t, s) => {
  Qn(r), Sr(r, t, s), ii(r), fi(r, t, s), pi(r, t, s), gi(r, t, s);
}, Di = (r, t, s) => {
  Sr(r, t, s), vi(r, t, s);
}, wr = (r, t, s) => {
  yi(r) ? Di(r, t, s) : ki(r, t, s);
}, Ci = (r, t, s) => {
  r.setAttribute("loading", "lazy"), Sr(r, t, s), mi(r, t), qt(r, ws);
}, Hr = (r) => {
  r.removeAttribute(Pt), r.removeAttribute(dr), r.removeAttribute(hr);
}, Mi = (r) => {
  br(r, (t) => {
    Hr(t);
  }), Hr(r);
}, js = (r) => {
  br(r, (t) => {
    Xt(t, ve);
  }), Xt(r, ve);
}, Ei = (r) => {
  Ms(r, (t) => {
    Xt(t, ze);
  }), Xt(r, Es), r.load();
}, $i = (r) => {
  Xt(r, ze);
}, Ti = (r) => {
  Xt(r, $s);
}, Ii = {
  IMG: js,
  IFRAME: $i,
  VIDEO: Ei,
  OBJECT: Ti
}, Ai = (r) => {
  const t = Ii[r.tagName];
  if (!t) {
    li(r);
    return;
  }
  t(r);
}, Li = (r, t) => {
  gr(r) || mr(r) || ($t(r, t.class_entered), $t(r, t.class_exited), $t(r, t.class_applied), $t(r, t.class_loading), $t(r, t.class_loaded), $t(r, t.class_error));
}, Oi = (r, t) => {
  Ai(r), Li(r, t), Ve(r), Is(r);
}, Pi = (r, t, s, o) => {
  s.cancel_on_exit && Fn(r) && r.tagName === "IMG" && (tr(r), Mi(r), js(r), $t(r, s.class_loading), vr(o, -1), Ve(r), Ht(s.callback_cancel, r, t, o));
}, Ni = (r, t, s, o) => {
  const i = Jn(r);
  qt(r, Xn), ie(r, s.class_entered), $t(r, s.class_exited), ri(r, s, o), Ht(s.callback_enter, r, t, o), !i && wr(r, s, o);
}, ji = (r, t, s, o) => {
  gr(r) || (ie(r, s.class_exited), Pi(r, t, s, o), Ht(s.callback_exit, r, t, o));
}, Ri = ["IMG", "IFRAME", "VIDEO"], Rs = (r) => r.use_native && "loading" in HTMLImageElement.prototype, Vi = (r, t, s) => {
  r.forEach((o) => {
    Ri.indexOf(o.tagName) !== -1 && Ci(o, t, s);
  }), Ds(s, 0);
}, Bi = (r) => r.isIntersecting || r.intersectionRatio > 0, zi = (r) => ({
  root: r.container === document ? null : r.container,
  rootMargin: r.thresholds || r.threshold + "px"
}), Hi = (r, t, s) => {
  r.forEach(
    (o) => Bi(o) ? Ni(o.target, o, t, s) : ji(o.target, o, t, s)
  );
}, Ui = (r, t) => {
  t.forEach((s) => {
    r.observe(s);
  });
}, Ki = (r, t) => {
  ei(r), Ui(r, t);
}, Yi = (r, t) => {
  !fs || Rs(r) || (t._observer = new IntersectionObserver((s) => {
    Hi(s, r, t);
  }, zi(r)));
}, Vs = (r) => Array.prototype.slice.call(r), Pe = (r) => r.container.querySelectorAll(r.elements_selector), Wi = (r) => Vs(r).filter(gr), Xi = (r) => qn(r), Zi = (r) => Vs(r).filter(Xi), Ur = (r, t) => Wi(r || Pe(t)), Fi = (r, t) => {
  Zi(Pe(r)).forEach((o) => {
    $t(o, r.class_error), Ve(o);
  }), t.update();
}, qi = (r, t) => {
  zt && (t._onlineHandler = () => {
    Fi(r, t);
  }, window.addEventListener("online", t._onlineHandler));
}, Gi = (r) => {
  zt && window.removeEventListener("online", r._onlineHandler);
}, _e = function(r, t) {
  const s = ms(r);
  this._settings = s, this.loadingCount = 0, Yi(s, this), qi(s, this), this.update(t);
};
_e.prototype = {
  update: function(r) {
    const t = this._settings, s = Ur(r, t);
    if (Ds(this, s.length), hs || !fs) {
      this.loadAll(s);
      return;
    }
    if (Rs(t)) {
      Vi(s, t, this);
      return;
    }
    Ki(this._observer, s);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), Gi(this), Pe(this._settings).forEach((r) => {
      Is(r);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(r) {
    const t = this._settings;
    Ur(r, t).forEach((o) => {
      Be(o, this), wr(o, t, this);
    });
  },
  restoreAll: function() {
    const r = this._settings;
    Pe(r).forEach((t) => {
      Oi(t, r);
    });
  }
};
_e.load = (r, t) => {
  const s = ms(t);
  wr(r, s);
};
_e.resetStatus = (r) => {
  Ve(r);
};
zt && Wn(_e, window.lazyLoadOptions);
const Ji = { class: "relative flex-auto flex flex-col overflow-hidden" }, Qi = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-xs select-none"
}, ta = { class: "absolute" }, ea = /* @__PURE__ */ f("svg", {
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
    const t = r, s = P("emitter"), { setStore: o, getStore: i } = P("storage"), a = P("adapter"), d = (L) => L == null ? void 0 : L.substring(0, 3), m = (L) => L.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), l = A(null), b = A(null), p = A(0), v = A(null), { t: S } = P("i18n"), M = Math.floor(Math.random() * 2 ** 32), $ = A(i("full-screen", !1)), I = new _e();
    s.on("vf-fullscreen-toggle", () => {
      l.value.style.height = null, $.value = !$.value, o("full-screen", $.value);
    });
    const T = A("");
    s.on("vf-search-query", ({ newQuery: L }) => {
      T.value = L, L ? s.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: t.data.adapter,
          path: t.data.dirname,
          filter: L
        },
        onSuccess: (R) => {
          R.files.length || s.emit("vf-toast-push", { label: S("No search result found.") });
        }
      }) : s.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: t.data.dirname } });
    });
    let H = null;
    const V = () => {
      H && clearTimeout(H);
    }, j = A(!0), z = (L) => {
      L.touches.length > 1 && (j.value ? (v.value.stop(), s.emit("vf-toast-push", { label: S("Drag&Drop: off") })) : (v.value.start(), s.emit("vf-toast-push", { label: S("Drag&Drop: on") }), s.emit("vf-explorer-update")), j.value = !j.value);
    }, W = (L) => {
      H = setTimeout(() => {
        const R = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: L.target.getBoundingClientRect().x,
          clientY: L.target.getBoundingClientRect().y
        });
        L.target.dispatchEvent(R);
      }, 500);
    }, k = (L) => {
      L.type == "dir" ? (s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: L.path } })) : s.emit("vf-modal-show", { type: "preview", adapter: t.data.adapter, item: L });
    }, N = Le({ active: !1, column: "", order: "" }), G = (L = !0) => {
      let R = [...t.data.files], O = N.column, tt = N.order == "asc" ? 1 : -1;
      if (!L)
        return R;
      const U = (_t, bt) => typeof _t == "string" && typeof bt == "string" ? _t.toLowerCase().localeCompare(bt.toLowerCase()) : _t < bt ? -1 : _t > bt ? 1 : 0;
      return N.active && (R = R.slice().sort((_t, bt) => U(_t[O], bt[O]) * tt)), R;
    }, ot = (L) => {
      N.active && N.column == L ? (N.active = N.order == "asc", N.column = L, N.order = "desc") : (N.active = !0, N.column = L, N.order = "asc");
    }, et = () => v.value.getSelection().map((L) => JSON.parse(L.dataset.item)), ut = (L, R) => {
      if (L.altKey || L.ctrlKey || L.metaKey)
        return L.preventDefault(), !1;
      L.dataTransfer.setDragImage(b.value, 0, 15), L.dataTransfer.effectAllowed = "all", L.dataTransfer.dropEffect = "copy", L.dataTransfer.setData("items", JSON.stringify(et()));
    }, vt = (L, R) => {
      L.preventDefault();
      let O = JSON.parse(L.dataTransfer.getData("items"));
      if (O.find((tt) => tt.storage != a.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      s.emit("vf-modal-show", { type: "move", items: { from: O, to: R } });
    }, pt = (L, R) => {
      L.preventDefault(), !R || R.type !== "dir" || v.value.getSelection().find((O) => O == L.currentTarget) ? (L.dataTransfer.dropEffect = "none", L.dataTransfer.effectAllowed = "none") : L.dataTransfer.dropEffect = "copy";
    };
    return Mt(() => {
      v.value = new Ln({
        area: l.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), s.on("vf-explorer-update", () => Re(() => {
        v.value.clearSelection(), v.value.setSelectables(document.getElementsByClassName("vf-item-" + M));
      })), v.value.subscribe("predragstart", ({ event: L, isDragging: R }) => {
        if (R)
          p.value = v.value.getSelection().length, v.value.break();
        else {
          const O = L.target.offsetWidth - L.offsetX, tt = L.target.offsetHeight - L.offsetY;
          O < 15 && tt < 15 && (v.value.clearSelection(), v.value.break());
        }
      }), v.value.subscribe("predragmove", ({ isDragging: L }) => {
        L && v.value.break();
      }), v.value.subscribe("callback", ({ items: L, event: R, isDragging: O }) => {
        s.emit("vf-nodes-selected", et()), p.value = v.value.getSelection().length;
      });
    }), Oo(() => {
      v.value.Area.reset(), v.value.SelectorArea.updatePos(), I.update();
    }), Mt(() => {
      je(() => t.view, () => s.emit("vf-explorer-update"));
    }), (L, R) => (w(), D("div", Ji, [
      r.view == "list" || T.value.length ? (w(), D("div", Qi, [
        f("div", {
          onClick: R[0] || (R[0] = (O) => ot("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          st(E(x(S)("Name")) + " ", 1),
          St(Ct(Te, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [$e, N.active && N.column == "basename"]
          ])
        ]),
        T.value.length ? Z("", !0) : (w(), D("div", {
          key: 0,
          onClick: R[1] || (R[1] = (O) => ot("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          st(E(x(S)("Size")) + " ", 1),
          St(Ct(Te, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [$e, N.active && N.column == "file_size"]
          ])
        ])),
        T.value.length ? Z("", !0) : (w(), D("div", {
          key: 1,
          onClick: R[2] || (R[2] = (O) => ot("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          st(E(x(S)("Date")) + " ", 1),
          St(Ct(Te, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [$e, N.active && N.column == "last_modified"]
          ])
        ])),
        T.value.length ? (w(), D("div", {
          key: 2,
          onClick: R[3] || (R[3] = (O) => ot("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          st(E(x(S)("Filepath")) + " ", 1),
          St(Ct(Te, {
            direction: N.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [$e, N.active && N.column == "path"]
          ])
        ])) : Z("", !0)
      ])) : Z("", !0),
      f("div", ta, [
        f("div", {
          ref_key: "dragImage",
          ref: b,
          class: "absolute -z-50 -top-96"
        }, [
          ea,
          f("div", ra, E(p.value), 1)
        ], 512)
      ]),
      f("div", {
        onTouchstart: z,
        onContextmenu: R[10] || (R[10] = Wt((O) => x(s).emit("vf-contextmenu-show", { event: O, area: l.value, items: et() }), ["self", "prevent"])),
        class: ct([$.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: l
      }, [
        T.value.length ? (w(!0), D(lt, { key: 0 }, wt(G(), (O, tt) => (w(), D("div", {
          onDblclick: (U) => k(O),
          onTouchstart: R[4] || (R[4] = (U) => W(U)),
          onTouchend: R[5] || (R[5] = (U) => V()),
          onContextmenu: Wt((U) => x(s).emit("vf-contextmenu-show", { event: U, area: l.value, items: et(), target: O }), ["prevent"]),
          class: ct(["vf-item-" + x(M), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": tt
        }, [
          f("div", oa, [
            f("div", na, [
              O.type == "dir" ? (w(), D("svg", ia, la)) : (w(), D("svg", ca, da)),
              f("span", ha, E(O.basename), 1)
            ]),
            f("div", fa, E(O.path), 1)
          ])
        ], 42, sa))), 256)) : Z("", !0),
        r.view == "list" && !T.value.length ? (w(!0), D(lt, { key: 1 }, wt(G(), (O, tt) => (w(), D("div", {
          draggable: "true",
          onDblclick: (U) => k(O),
          onTouchstart: R[6] || (R[6] = (U) => W(U)),
          onTouchend: R[7] || (R[7] = (U) => V()),
          onContextmenu: Wt((U) => x(s).emit("vf-contextmenu-show", { event: U, area: l.value, items: et(), target: O }), ["prevent"]),
          onDragstart: (U) => ut(U),
          onDragover: (U) => pt(U, O),
          onDrop: (U) => vt(U, O),
          class: ct(["vf-item-" + x(M), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": tt
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
        r.view == "grid" && !T.value.length ? (w(!0), D(lt, { key: 2 }, wt(G(!1), (O, tt) => (w(), D("div", {
          draggable: "true",
          onDblclick: (U) => k(O),
          onTouchstart: R[8] || (R[8] = (U) => W(U)),
          onTouchend: R[9] || (R[9] = (U) => V()),
          onContextmenu: Wt((U) => x(s).emit("vf-contextmenu-show", { event: U, area: l.value, items: et(), target: O }), ["prevent"]),
          onDragstart: (U) => ut(U),
          onDragover: (U) => pt(U, O),
          onDrop: (U) => vt(U, O),
          class: ct(["vf-item-" + x(M), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
          "data-type": O.type,
          "data-item": JSON.stringify(O),
          "data-index": tt
        }, [
          f("div", null, [
            f("div", Ma, [
              O.type == "dir" ? (w(), D("svg", Ea, Ta)) : (O.mime_type ?? "").startsWith("image") ? (w(), D("img", {
                key: 1,
                class: "lazy h-10 md:h-12 m-auto",
                "data-src": x(Qe)(x(a).value, O.path),
                alt: O.basename
              }, null, 8, Ia)) : (w(), D("svg", Aa, Oa)),
              !(O.mime_type ?? "").startsWith("image") && O.type != "dir" ? (w(), D("div", Pa, E(d(O.extension)), 1)) : Z("", !0)
            ]),
            f("span", Na, E(m(O.basename)), 1)
          ])
        ], 42, Ca))), 256)) : Z("", !0)
      ], 34),
      Ct(Un)
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
], -1), tl = [
  Qa
], el = {
  name: "VFStatusbar"
}, rl = /* @__PURE__ */ Object.assign(el, {
  props: {
    data: Object
  },
  setup(r) {
    const t = P("emitter"), { getStore: s, setStore: o } = P("storage"), i = A(0), a = P("adapter"), { t: d, changeLocale: m } = P("i18n"), l = A(s("locale", "")), b = () => {
      t.emit("vf-search-exit"), t.emit("vf-fetch", { params: { q: "index", adapter: a.value } }), o("adapter", a.value);
    };
    t.on("vf-nodes-selected", (v) => {
      i.value = v.length;
    });
    const p = A("");
    return t.on("vf-search-query", ({ newQuery: v }) => {
      p.value = v;
    }), (v, S) => (w(), D("div", Ba, [
      f("div", za, [
        f("div", {
          class: "mx-2",
          "aria-label": x(d)("Storage"),
          "data-microtip-position": "top-right",
          role: "tooltip"
        }, Ka, 8, Ha),
        St(f("select", {
          "onUpdate:modelValue": S[0] || (S[0] = (M) => as(a) ? a.value = M : null),
          onChange: b,
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8"
        }, [
          (w(!0), D(lt, null, wt(r.data.storages, (M) => (w(), D("option", { value: M }, E(M), 9, Ya))), 256))
        ], 544), [
          [Nr, x(a)]
        ]),
        f("div", Wa, [
          p.value.length ? (w(), D("span", Xa, E(r.data.files.length) + " items found. ", 1)) : Z("", !0),
          f("span", Za, E(i.value > 0 ? i.value + " " + x(d)("item(s) selected.") : ""), 1)
        ])
      ]),
      f("div", Fa, [
        St(f("select", {
          "onUpdate:modelValue": S[1] || (S[1] = (M) => l.value = M),
          onChange: S[2] || (S[2] = (M) => x(m)(M.target.value)),
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
          onClick: S[3] || (S[3] = (M) => x(t).emit("vf-modal-show", { type: "message", title: "Vuefinder " + x(Va), message: x(d)("Vuefinder is a file manager component for vue 3.") }))
        }, tl, 8, Ja)
      ])
    ]));
  }
}), sl = (r, t = 0, s = !1) => {
  let o;
  return (...i) => {
    s && !o && r(...i), clearTimeout(o), o = setTimeout(() => {
      r(...i);
    }, t);
  };
}, ol = (r, t, s) => {
  const o = A(r);
  return No((a, d) => ({
    get() {
      return a(), o.value;
    },
    set: sl(
      (m) => {
        o.value = m, d();
      },
      t,
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
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), i = A(null), a = A([]), d = A(!1), m = A(null), { t: l } = P("i18n"), b = P("loadingState");
    s.on("vf-explorer-update", () => {
      let V = [], j = [];
      i.value = t.data.dirname ?? o.value + "://", i.value.length == 0 && (a.value = []), i.value.replace(o.value + "://", "").split("/").forEach(function(z) {
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
    const v = () => {
      d.value = !0, Re(() => m.value.focus());
    }, S = ol("", 400), M = () => b.value;
    je(S, (V) => {
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
            var W;
            return !$() || x(s).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter, path: ((W = a.value[a.value.length - 2]) == null ? void 0 : W.path) ?? x(o) + "://" } });
          }),
          class: ct(["h-6 w-6 p-0.5 rounded", $() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
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
        St(f("input", {
          ref_key: "searchInput",
          ref: m,
          onKeydown: oe(p, ["esc"]),
          onBlur: H,
          "onUpdate:modelValue": j[6] || (j[6] = (z) => as(S) ? S.value = z : null),
          placeholder: x(l)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, El), [
          [ne, x(S)]
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
        onClick: Wt(v, ["self"])
      }, [
        (w(), D("svg", {
          onClick: j[5] || (j[5] = (z) => x(s).emit("vf-fetch", { params: { q: "index", adapter: r.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, vl)),
        f("div", bl, [
          (w(!0), D(lt, null, wt(a.value, (z, W) => (w(), D("div", { key: W }, [
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
    const t = r, s = P("emitter"), o = A(null), { apiUrl: i } = At(), a = Le({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), d = A([]);
    s.on("vf-context-selected", (S) => {
      d.value = S;
    });
    const { t: m } = P("i18n"), l = {
      newfolder: {
        title: () => m("New Folder"),
        action: () => {
          s.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => m("Delete"),
        action: () => {
          s.emit("vf-modal-show", { type: "delete", items: d });
        }
      },
      refresh: {
        title: () => m("Refresh"),
        action: () => {
          s.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: t.current.dirname } });
        }
      },
      preview: {
        title: () => m("Preview"),
        action: () => {
          s.emit("vf-modal-show", { type: "preview", adapter: t.current.adapter, item: d.value[0] });
        }
      },
      open: {
        title: () => m("Open"),
        action: () => {
          s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: d.value[0].path } });
        }
      },
      openDir: {
        title: () => m("Open containing folder"),
        action: () => {
          s.emit("vf-search-exit"), s.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: d.value[0].dir } });
        }
      },
      download: {
        title: () => m("Download"),
        action: () => {
          const S = i.value + "?" + Ft({ q: "download", adapter: t.current.adapter, path: d.value[0].path });
          s.emit("vf-download", S);
        }
      },
      archive: {
        title: () => m("Archive"),
        action: () => {
          s.emit("vf-modal-show", { type: "archive", items: d });
        }
      },
      unarchive: {
        title: () => m("Unarchive"),
        action: () => {
          s.emit("vf-modal-show", { type: "unarchive", items: d });
        }
      },
      rename: {
        title: () => m("Rename"),
        action: () => {
          s.emit("vf-modal-show", { type: "rename", items: d });
        }
      }
    }, b = (S) => {
      s.emit("vf-contextmenu-hide"), S.action();
    }, p = A("");
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
      v(S, M);
    }), s.on("vf-contextmenu-hide", () => {
      a.active = !1;
    });
    const v = (S, M) => {
      a.active = !0, Re(() => {
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
      (w(!0), D(lt, null, wt(a.items, ($) => (w(), D("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: $.title,
        onClick: (I) => b($)
      }, [
        Ol,
        f("span", null, E($.title()), 1)
      ], 8, Ll))), 128))
    ], 4)) : Z("", !0);
  }
}), jl = (r, t) => {
  const s = r[t];
  return s ? typeof s == "function" ? s() : Promise.resolve(s) : new Promise((o, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
async function Rl(r) {
  const t = await jl(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en-ed1f1848.js"), "../locales/fa.json": () => import("./fa-49628944.js"), "../locales/he.json": () => import("./he-736e9ea8.js"), "../locales/ru.json": () => import("./ru-d8535e72.js"), "../locales/tr.json": () => import("./tr-6f9ffcfe.js") }), `../locales/${r}.json`);
  return JSON.parse(t.default);
}
function Vl(r, t, s) {
  const { getStore: o, setStore: i } = Je(r), a = A({}), d = (b) => {
    Rl(b).then((p) => {
      a.value = p, i("locale", b), i("translations", p), s.emit("vf-toast-push", { label: "The language is set to " + b });
    }).catch((p) => {
      s.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), d("en");
    });
  };
  o("locale") ? a.value = o("translations") : d(t);
  const m = (b, ...p) => p.length ? m(b = b.replace("%s", p.shift()), ...p) : b;
  function l(b, ...p) {
    return a.value.hasOwnProperty(b) ? m(a.value[b], ...p) : m(b, ...p);
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
      default: "800mb"
    },
    postData: {
      type: Object,
      default: {}
    }
  },
  setup(r) {
    const t = r, s = Vo(), { setStore: o, getStore: i } = Je(t.id), a = A("local");
    Ut("emitter", s), Ut("storage", Je(t.id)), Ut("postData", t.postData), Ut("adapter", a), Ut("maxFileSize", t.maxFileSize);
    const d = Vl(t.id, t.locale, s);
    Ut("i18n", d);
    const { apiUrl: m, setApiUrl: l } = At();
    l(t.url);
    const b = Le({ adapter: a.value, storages: [], dirname: "local://", files: [] }), p = A(i("viewport", "grid")), v = A(i("darkMode", t.dark));
    s.on("vf-darkMode-toggle", () => {
      v.value = !v.value, o("darkMode", v.value);
    });
    const S = A(!1);
    Ut("loadingState", S);
    const M = A(i("full-screen", !1));
    s.on("vf-fullscreen-toggle", () => {
      M.value = !M.value, o("full-screen", M.value);
    }), s.on("vf-view-toggle", (H) => {
      p.value = H;
    });
    const $ = Le({
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
      Object.assign(b, H), s.emit("vf-nodes-selected", {}), s.emit("vf-explorer-update");
    };
    let T;
    return s.on("vf-fetch-abort", () => {
      T.abort(), S.value = !1;
    }), s.on("vf-fetch", ({ params: H, onSuccess: V = null, onError: j = null }) => {
      ["index", "search"].includes(H.q) && (T && T.abort(), S.value = !0), T = new AbortController();
      const z = T.signal;
      Oe(m.value, { params: H, signal: z }).then((W) => {
        a.value = W ? W.adapter : "local", ["index", "search"].includes(H.q) && (S.value = !1), s.emit("vf-modal-close"), console.log(W), I(W), V(W);
      }).catch((W) => {
        j && j(W);
      }).finally(() => {
      });
    }), s.on("vf-download", (H) => {
      document.getElementById("download_frame").src = H, s.emit("vf-modal-close");
    }), Mt(() => {
      s.emit("vf-fetch", { params: { q: "index", adapter: a.value } });
    }), (H, V) => (w(), D("div", Bl, [
      f("div", {
        class: ct(v.value ? "dark" : "")
      }, [
        f("div", {
          class: ct([M.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"]),
          style: ls(M.value ? "" : "max-height: " + r.maxHeight),
          onMousedown: V[0] || (V[0] = (j) => x(s).emit("vf-contextmenu-hide")),
          onTouchstart: V[1] || (V[1] = (j) => x(s).emit("vf-contextmenu-hide"))
        }, [
          Ct($n, { data: b }, null, 8, ["data"]),
          Ct(Al, { data: b }, null, 8, ["data"]),
          Ct(Ra, {
            view: p.value,
            data: b
          }, null, 8, ["view", "data"]),
          Ct(rl, { data: b }, null, 8, ["data"])
        ], 38),
        $.active ? (w(), q(jo("v-f-modal-" + $.type), {
          key: 0,
          selection: $.data,
          current: b
        }, null, 8, ["selection", "current"])) : Z("", !0),
        Ct(Nl, { current: b }, null, 8, ["current"]),
        zl
      ], 2)
    ]));
  }
}), Kl = /* @__PURE__ */ f("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity" }, null, -1), Yl = { class: "fixed z-10 inset-0 overflow-hidden" }, Wl = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, Xl = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Zl = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Lt = {
  __name: "ModalLayout",
  setup(r) {
    const t = P("emitter");
    return Mt(() => {
      const s = document.querySelector(".v-f-modal input");
      s && s.focus();
    }), (s, o) => (w(), D("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: o[1] || (o[1] = oe((i) => x(t).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      Kl,
      f("div", Yl, [
        f("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: o[0] || (o[0] = Wt((i) => x(t).emit("vf-modal-close"), ["self"]))
        }, [
          f("div", Wl, [
            f("div", Xl, [
              Ge(s.$slots, "default")
            ]),
            f("div", Zl, [
              Ge(s.$slots, "buttons")
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
}, Ot = /* @__PURE__ */ Object.assign(Jl, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(r, { emit: t }) {
    var m;
    const { t: s } = P("i18n"), o = A(!1), i = A(null), a = A((m = i.value) == null ? void 0 : m.strMessage);
    je(a, () => o.value = !1);
    const d = () => {
      t("hidden"), o.value = !0;
    };
    return (l, b) => (w(), D("div", null, [
      o.value ? Z("", !0) : (w(), D("div", {
        key: 0,
        ref_key: "strMessage",
        ref: i,
        class: ct(["flex mt-1 p-1 px-2 rounded text-sm", r.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Ge(l.$slots, "default"),
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
}), Ql = { class: "sm:flex sm:items-start" }, tc = /* @__PURE__ */ f("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
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
], -1), ec = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, rc = {
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
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: i } = P("i18n"), a = A(t.selection.items), d = A(""), m = () => {
      a.value.length && s.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: o.value,
          path: t.current.dirname,
          items: JSON.stringify(a.value.map(({ path: l, type: b }) => ({ path: l, type: b })))
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: i("Files deleted.") });
        },
        onError: (l) => {
          d.value = i(l.message);
        }
      });
    };
    return (l, b) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Yes, Delete!")), 1),
        f("button", {
          type: "button",
          onClick: b[1] || (b[1] = (p) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Cancel")), 1),
        f("div", fc, E(x(i)("This action cannot be undone.")), 1)
      ]),
      default: F(() => [
        f("div", Ql, [
          tc,
          f("div", ec, [
            f("h3", rc, E(x(i)("Delete files")), 1),
            f("div", sc, [
              f("p", oc, E(x(i)("Are you sure you want to delete these files?")), 1),
              (w(!0), D(lt, null, wt(a.value, (p) => (w(), D("p", nc, [
                p.type == "dir" ? (w(), D("svg", ic, lc)) : (w(), D("svg", cc, dc)),
                f("span", hc, E(p.basename), 1)
              ]))), 256)),
              d.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: b[0] || (b[0] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  st(E(d.value), 1)
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
    const t = P("emitter"), { t: s } = P("i18n");
    return (o, i) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: i[0] || (i[0] = (a) => x(t).emit("vf-modal-close")),
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
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: i } = P("i18n"), a = A(""), d = A(""), m = () => {
      a.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: o.value ? o.value : "local",
          path: t.current.dirname,
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
    return (l, b) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Create")), 1),
        f("button", {
          type: "button",
          onClick: b[2] || (b[2] = (p) => x(s).emit("vf-modal-close")),
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
              St(f("input", {
                "onUpdate:modelValue": b[0] || (b[0] = (p) => a.value = p),
                onKeyup: oe(m, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(i)("Folder Name"),
                type: "text"
              }, null, 40, Tc), [
                [ne, a.value]
              ]),
              d.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: b[1] || (b[1] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  st(E(d.value), 1)
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
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: i } = P("i18n"), a = A(""), d = A(""), m = () => {
      a.value != "" && s.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: o.value || "local",
          path: t.current.dirname,
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
    return (l, b) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Create")), 1),
        f("button", {
          type: "button",
          onClick: b[2] || (b[2] = (p) => x(s).emit("vf-modal-close")),
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
              St(f("input", {
                "onUpdate:modelValue": b[0] || (b[0] = (p) => a.value = p),
                onKeyup: oe(m, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(i)("File Name"),
                type: "text"
              }, null, 40, Vc), [
                [ne, a.value]
              ]),
              d.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: b[1] || (b[1] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  st(E(d.value), 1)
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
  setup(r, { emit: t }) {
    const s = r, o = A(""), i = A(""), a = A(null), d = A(!1), { apiUrl: m } = At(), l = A(""), b = A(!1), { t: p } = P("i18n");
    Mt(() => {
      Oe(m.value, {
        params: { q: "preview", adapter: s.selection.adapter, path: s.selection.item.path },
        json: !1
      }).then(($) => {
        o.value = $, t("load");
      });
    });
    const v = () => {
      d.value = !d.value, i.value = o.value, d.value == !0 && Re(() => {
        a.value.focus();
      });
    }, S = P("postData"), M = () => {
      l.value = "", b.value = !1, Oe(m.value, {
        method: "POST",
        params: Object.assign(S, {
          q: "save",
          adapter: s.selection.adapter,
          path: s.selection.item.path,
          content: i.value
        }),
        json: !1
      }).then(($) => {
        l.value = p("Updated."), o.value = $, t("load"), d.value = !d.value;
      }).catch(($) => {
        l.value = p($.message), b.value = !0;
      });
    };
    return ($, I) => (w(), D(lt, null, [
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
            onClick: I[0] || (I[0] = (T) => v())
          }, E(d.value ? x(p)("Cancel") : x(p)("Edit")), 1)
        ])
      ]),
      f("div", null, [
        d.value ? (w(), D("div", Wc, [
          St(f("textarea", {
            ref_key: "editInput",
            ref: a,
            "onUpdate:modelValue": I[1] || (I[1] = (T) => i.value = T),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [ne, i.value]
          ])
        ])) : (w(), D("pre", Yc, E(o.value), 1)),
        l.value.length ? (w(), q(Ot, {
          key: 2,
          onHidden: I[2] || (I[2] = (T) => l.value = ""),
          error: b.value
        }, {
          default: F(() => [
            st(E(l.value), 1)
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
function Kr(r, t) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    t && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), s.push.apply(s, o);
  }
  return s;
}
function Bs(r) {
  for (var t = 1; t < arguments.length; t++) {
    var s = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kr(Object(s), !0).forEach(function(o) {
      qc(r, o, s[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : Kr(Object(s)).forEach(function(o) {
      Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(s, o));
    });
  }
  return r;
}
function er(r) {
  "@babel/helpers - typeof";
  return er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, er(r);
}
function Zc(r, t) {
  if (!(r instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yr(r, t) {
  for (var s = 0; s < t.length; s++) {
    var o = t[s];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(r, o.key, o);
  }
}
function Fc(r, t, s) {
  return t && Yr(r.prototype, t), s && Yr(r, s), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function qc(r, t, s) {
  return t in r ? Object.defineProperty(r, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = s, r;
}
function zs(r) {
  return Gc(r) || Jc(r) || Qc(r) || tu();
}
function Gc(r) {
  if (Array.isArray(r))
    return rr(r);
}
function Jc(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function Qc(r, t) {
  if (r) {
    if (typeof r == "string")
      return rr(r, t);
    var s = Object.prototype.toString.call(r).slice(8, -1);
    if (s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set")
      return Array.from(r);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return rr(r, t);
  }
}
function rr(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var s = 0, o = new Array(t); s < t; s++)
    o[s] = r[s];
  return o;
}
function tu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ue = typeof window < "u" && typeof window.document < "u", It = Ue ? window : {}, _r = Ue && It.document.documentElement ? "ontouchstart" in It.document.documentElement : !1, xr = Ue ? "PointerEvent" in It : !1, J = "cropper", kr = "all", Hs = "crop", Us = "move", Ks = "zoom", Kt = "e", Yt = "w", Jt = "s", jt = "n", he = "ne", fe = "nw", pe = "se", ge = "sw", sr = "".concat(J, "-crop"), Wr = "".concat(J, "-disabled"), ht = "".concat(J, "-hidden"), Xr = "".concat(J, "-hide"), eu = "".concat(J, "-invisible"), Ne = "".concat(J, "-modal"), or = "".concat(J, "-move"), be = "".concat(J, "Action"), Ie = "".concat(J, "Preview"), Dr = "crop", Ys = "move", Ws = "none", nr = "crop", ir = "cropend", ar = "cropmove", lr = "cropstart", Zr = "dblclick", ru = _r ? "touchstart" : "mousedown", su = _r ? "touchmove" : "mousemove", ou = _r ? "touchend touchcancel" : "mouseup", Fr = xr ? "pointerdown" : ru, qr = xr ? "pointermove" : su, Gr = xr ? "pointerup pointercancel" : ou, Jr = "ready", Qr = "resize", ts = "wheel", cr = "zoom", es = "image/jpeg", nu = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, iu = /^data:/, au = /^data:image\/jpeg;base64,/, lu = /^img|canvas$/i, Xs = 200, Zs = 100, rs = {
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
}, cu = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', uu = Number.isNaN || It.isNaN;
function K(r) {
  return typeof r == "number" && !uu(r);
}
var ss = function(t) {
  return t > 0 && t < 1 / 0;
};
function Ze(r) {
  return typeof r > "u";
}
function Zt(r) {
  return er(r) === "object" && r !== null;
}
var du = Object.prototype.hasOwnProperty;
function Qt(r) {
  if (!Zt(r))
    return !1;
  try {
    var t = r.constructor, s = t.prototype;
    return t && s && du.call(s, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function dt(r) {
  return typeof r == "function";
}
var hu = Array.prototype.slice;
function Fs(r) {
  return Array.from ? Array.from(r) : hu.call(r);
}
function rt(r, t) {
  return r && dt(t) && (Array.isArray(r) || K(r.length) ? Fs(r).forEach(function(s, o) {
    t.call(r, s, o, r);
  }) : Zt(r) && Object.keys(r).forEach(function(s) {
    t.call(r, r[s], s, r);
  })), r;
}
var Q = Object.assign || function(t) {
  for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), i = 1; i < s; i++)
    o[i - 1] = arguments[i];
  return Zt(t) && o.length > 0 && o.forEach(function(a) {
    Zt(a) && Object.keys(a).forEach(function(d) {
      t[d] = a[d];
    });
  }), t;
}, fu = /\.\d*(?:0|9){12}\d*$/;
function ee(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return fu.test(r) ? Math.round(r * t) / t : r;
}
var pu = /^width|height|left|top|marginLeft|marginTop$/;
function Rt(r, t) {
  var s = r.style;
  rt(t, function(o, i) {
    pu.test(i) && K(o) && (o = "".concat(o, "px")), s[i] = o;
  });
}
function gu(r, t) {
  return r.classList ? r.classList.contains(t) : r.className.indexOf(t) > -1;
}
function at(r, t) {
  if (t) {
    if (K(r.length)) {
      rt(r, function(o) {
        at(o, t);
      });
      return;
    }
    if (r.classList) {
      r.classList.add(t);
      return;
    }
    var s = r.className.trim();
    s ? s.indexOf(t) < 0 && (r.className = "".concat(s, " ").concat(t)) : r.className = t;
  }
}
function Tt(r, t) {
  if (t) {
    if (K(r.length)) {
      rt(r, function(s) {
        Tt(s, t);
      });
      return;
    }
    if (r.classList) {
      r.classList.remove(t);
      return;
    }
    r.className.indexOf(t) >= 0 && (r.className = r.className.replace(t, ""));
  }
}
function te(r, t, s) {
  if (t) {
    if (K(r.length)) {
      rt(r, function(o) {
        te(o, t, s);
      });
      return;
    }
    s ? at(r, t) : Tt(r, t);
  }
}
var mu = /([a-z\d])([A-Z])/g;
function Cr(r) {
  return r.replace(mu, "$1-$2").toLowerCase();
}
function ur(r, t) {
  return Zt(r[t]) ? r[t] : r.dataset ? r.dataset[t] : r.getAttribute("data-".concat(Cr(t)));
}
function ye(r, t, s) {
  Zt(s) ? r[t] = s : r.dataset ? r.dataset[t] = s : r.setAttribute("data-".concat(Cr(t)), s);
}
function vu(r, t) {
  if (Zt(r[t]))
    try {
      delete r[t];
    } catch {
      r[t] = void 0;
    }
  else if (r.dataset)
    try {
      delete r.dataset[t];
    } catch {
      r.dataset[t] = void 0;
    }
  else
    r.removeAttribute("data-".concat(Cr(t)));
}
var qs = /\s\s*/, Gs = function() {
  var r = !1;
  if (Ue) {
    var t = !1, s = function() {
    }, o = Object.defineProperty({}, "once", {
      get: function() {
        return r = !0, t;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function(a) {
        t = a;
      }
    });
    It.addEventListener("test", s, o), It.removeEventListener("test", s, o);
  }
  return r;
}();
function Dt(r, t, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = s;
  t.trim().split(qs).forEach(function(a) {
    if (!Gs) {
      var d = r.listeners;
      d && d[a] && d[a][s] && (i = d[a][s], delete d[a][s], Object.keys(d[a]).length === 0 && delete d[a], Object.keys(d).length === 0 && delete r.listeners);
    }
    r.removeEventListener(a, i, o);
  });
}
function yt(r, t, s) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = s;
  t.trim().split(qs).forEach(function(a) {
    if (o.once && !Gs) {
      var d = r.listeners, m = d === void 0 ? {} : d;
      i = function() {
        delete m[a][s], r.removeEventListener(a, i, o);
        for (var b = arguments.length, p = new Array(b), v = 0; v < b; v++)
          p[v] = arguments[v];
        s.apply(r, p);
      }, m[a] || (m[a] = {}), m[a][s] && r.removeEventListener(a, m[a][s], o), m[a][s] = i, r.listeners = m;
    }
    r.addEventListener(a, i, o);
  });
}
function re(r, t, s) {
  var o;
  return dt(Event) && dt(CustomEvent) ? o = new CustomEvent(t, {
    detail: s,
    bubbles: !0,
    cancelable: !0
  }) : (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, !0, !0, s)), r.dispatchEvent(o);
}
function Js(r) {
  var t = r.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Fe = It.location, bu = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function os(r) {
  var t = r.match(bu);
  return t !== null && (t[1] !== Fe.protocol || t[2] !== Fe.hostname || t[3] !== Fe.port);
}
function ns(r) {
  var t = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return r + (r.indexOf("?") === -1 ? "?" : "&") + t;
}
function me(r) {
  var t = r.rotate, s = r.scaleX, o = r.scaleY, i = r.translateX, a = r.translateY, d = [];
  K(i) && i !== 0 && d.push("translateX(".concat(i, "px)")), K(a) && a !== 0 && d.push("translateY(".concat(a, "px)")), K(t) && t !== 0 && d.push("rotate(".concat(t, "deg)")), K(s) && s !== 1 && d.push("scaleX(".concat(s, ")")), K(o) && o !== 1 && d.push("scaleY(".concat(o, ")"));
  var m = d.length ? d.join(" ") : "none";
  return {
    WebkitTransform: m,
    msTransform: m,
    transform: m
  };
}
function yu(r) {
  var t = Bs({}, r), s = 0;
  return rt(r, function(o, i) {
    delete t[i], rt(t, function(a) {
      var d = Math.abs(o.startX - a.startX), m = Math.abs(o.startY - a.startY), l = Math.abs(o.endX - a.endX), b = Math.abs(o.endY - a.endY), p = Math.sqrt(d * d + m * m), v = Math.sqrt(l * l + b * b), S = (v - p) / p;
      Math.abs(S) > Math.abs(s) && (s = S);
    });
  }), s;
}
function Ae(r, t) {
  var s = r.pageX, o = r.pageY, i = {
    endX: s,
    endY: o
  };
  return t ? i : Bs({
    startX: s,
    startY: o
  }, i);
}
function Su(r) {
  var t = 0, s = 0, o = 0;
  return rt(r, function(i) {
    var a = i.startX, d = i.startY;
    t += a, s += d, o += 1;
  }), t /= o, s /= o, {
    pageX: t,
    pageY: s
  };
}
function Vt(r) {
  var t = r.aspectRatio, s = r.height, o = r.width, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", a = ss(o), d = ss(s);
  if (a && d) {
    var m = s * t;
    i === "contain" && m > o || i === "cover" && m < o ? s = o / t : o = s * t;
  } else
    a ? s = o / t : d && (o = s * t);
  return {
    width: o,
    height: s
  };
}
function wu(r) {
  var t = r.width, s = r.height, o = r.degree;
  if (o = Math.abs(o) % 180, o === 90)
    return {
      width: s,
      height: t
    };
  var i = o % 90 * Math.PI / 180, a = Math.sin(i), d = Math.cos(i), m = t * d + s * a, l = t * a + s * d;
  return o > 90 ? {
    width: l,
    height: m
  } : {
    width: m,
    height: l
  };
}
function _u(r, t, s, o) {
  var i = t.aspectRatio, a = t.naturalWidth, d = t.naturalHeight, m = t.rotate, l = m === void 0 ? 0 : m, b = t.scaleX, p = b === void 0 ? 1 : b, v = t.scaleY, S = v === void 0 ? 1 : v, M = s.aspectRatio, $ = s.naturalWidth, I = s.naturalHeight, T = o.fillColor, H = T === void 0 ? "transparent" : T, V = o.imageSmoothingEnabled, j = V === void 0 ? !0 : V, z = o.imageSmoothingQuality, W = z === void 0 ? "low" : z, k = o.maxWidth, N = k === void 0 ? 1 / 0 : k, G = o.maxHeight, ot = G === void 0 ? 1 / 0 : G, et = o.minWidth, ut = et === void 0 ? 0 : et, vt = o.minHeight, pt = vt === void 0 ? 0 : vt, gt = document.createElement("canvas"), L = gt.getContext("2d"), R = Vt({
    aspectRatio: M,
    width: N,
    height: ot
  }), O = Vt({
    aspectRatio: M,
    width: ut,
    height: pt
  }, "cover"), tt = Math.min(R.width, Math.max(O.width, $)), U = Math.min(R.height, Math.max(O.height, I)), _t = Vt({
    aspectRatio: i,
    width: N,
    height: ot
  }), bt = Vt({
    aspectRatio: i,
    width: ut,
    height: pt
  }, "cover"), xe = Math.min(_t.width, Math.max(bt.width, a)), ke = Math.min(_t.height, Math.max(bt.height, d)), Ke = [-xe / 2, -ke / 2, xe, ke];
  return gt.width = ee(tt), gt.height = ee(U), L.fillStyle = H, L.fillRect(0, 0, tt, U), L.save(), L.translate(tt / 2, U / 2), L.rotate(l * Math.PI / 180), L.scale(p, S), L.imageSmoothingEnabled = j, L.imageSmoothingQuality = W, L.drawImage.apply(L, [r].concat(zs(Ke.map(function(De) {
    return Math.floor(ee(De));
  })))), L.restore(), gt;
}
var Qs = String.fromCharCode;
function xu(r, t, s) {
  var o = "";
  s += t;
  for (var i = t; i < s; i += 1)
    o += Qs(r.getUint8(i));
  return o;
}
var ku = /^data:.*,/;
function Du(r) {
  var t = r.replace(ku, ""), s = atob(t), o = new ArrayBuffer(s.length), i = new Uint8Array(o);
  return rt(i, function(a, d) {
    i[d] = s.charCodeAt(d);
  }), o;
}
function Cu(r, t) {
  for (var s = [], o = 8192, i = new Uint8Array(r); i.length > 0; )
    s.push(Qs.apply(null, Fs(i.subarray(0, o)))), i = i.subarray(o);
  return "data:".concat(t, ";base64,").concat(btoa(s.join("")));
}
function Mu(r) {
  var t = new DataView(r), s;
  try {
    var o, i, a;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var d = t.byteLength, m = 2; m + 1 < d; ) {
        if (t.getUint8(m) === 255 && t.getUint8(m + 1) === 225) {
          i = m;
          break;
        }
        m += 1;
      }
    if (i) {
      var l = i + 4, b = i + 10;
      if (xu(t, l, 4) === "Exif") {
        var p = t.getUint16(b);
        if (o = p === 18761, (o || p === 19789) && t.getUint16(b + 2, o) === 42) {
          var v = t.getUint32(b + 4, o);
          v >= 8 && (a = b + v);
        }
      }
    }
    if (a) {
      var S = t.getUint16(a, o), M, $;
      for ($ = 0; $ < S; $ += 1)
        if (M = a + $ * 12 + 2, t.getUint16(M, o) === 274) {
          M += 8, s = t.getUint16(M, o), t.setUint16(M, 1, o);
          break;
        }
    }
  } catch {
    s = 1;
  }
  return s;
}
function Eu(r) {
  var t = 0, s = 1, o = 1;
  switch (r) {
    case 2:
      s = -1;
      break;
    case 3:
      t = -180;
      break;
    case 4:
      o = -1;
      break;
    case 5:
      t = 90, o = -1;
      break;
    case 6:
      t = 90;
      break;
    case 7:
      t = 90, s = -1;
      break;
    case 8:
      t = -90;
      break;
  }
  return {
    rotate: t,
    scaleX: s,
    scaleY: o
  };
}
var $u = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, s = this.options, o = this.container, i = this.cropper, a = Number(s.minContainerWidth), d = Number(s.minContainerHeight);
    at(i, ht), Tt(t, ht);
    var m = {
      width: Math.max(o.offsetWidth, a >= 0 ? a : Xs),
      height: Math.max(o.offsetHeight, d >= 0 ? d : Zs)
    };
    this.containerData = m, Rt(i, {
      width: m.width,
      height: m.height
    }), at(t, ht), Tt(i, ht);
  },
  // Canvas (image wrapper)
  initCanvas: function() {
    var t = this.containerData, s = this.imageData, o = this.options.viewMode, i = Math.abs(s.rotate) % 180 === 90, a = i ? s.naturalHeight : s.naturalWidth, d = i ? s.naturalWidth : s.naturalHeight, m = a / d, l = t.width, b = t.height;
    t.height * m > t.width ? o === 3 ? l = t.height * m : b = t.width / m : o === 3 ? b = t.width / m : l = t.height * m;
    var p = {
      aspectRatio: m,
      naturalWidth: a,
      naturalHeight: d,
      width: l,
      height: b
    };
    this.canvasData = p, this.limited = o === 1 || o === 2, this.limitCanvas(!0, !0), p.width = Math.min(Math.max(p.width, p.minWidth), p.maxWidth), p.height = Math.min(Math.max(p.height, p.minHeight), p.maxHeight), p.left = (t.width - p.width) / 2, p.top = (t.height - p.height) / 2, p.oldLeft = p.left, p.oldTop = p.top, this.initialCanvasData = Q({}, p);
  },
  limitCanvas: function(t, s) {
    var o = this.options, i = this.containerData, a = this.canvasData, d = this.cropBoxData, m = o.viewMode, l = a.aspectRatio, b = this.cropped && d;
    if (t) {
      var p = Number(o.minCanvasWidth) || 0, v = Number(o.minCanvasHeight) || 0;
      m > 1 ? (p = Math.max(p, i.width), v = Math.max(v, i.height), m === 3 && (v * l > p ? p = v * l : v = p / l)) : m > 0 && (p ? p = Math.max(p, b ? d.width : 0) : v ? v = Math.max(v, b ? d.height : 0) : b && (p = d.width, v = d.height, v * l > p ? p = v * l : v = p / l));
      var S = Vt({
        aspectRatio: l,
        width: p,
        height: v
      });
      p = S.width, v = S.height, a.minWidth = p, a.minHeight = v, a.maxWidth = 1 / 0, a.maxHeight = 1 / 0;
    }
    if (s)
      if (m > (b ? 0 : 1)) {
        var M = i.width - a.width, $ = i.height - a.height;
        a.minLeft = Math.min(0, M), a.minTop = Math.min(0, $), a.maxLeft = Math.max(0, M), a.maxTop = Math.max(0, $), b && this.limited && (a.minLeft = Math.min(d.left, d.left + (d.width - a.width)), a.minTop = Math.min(d.top, d.top + (d.height - a.height)), a.maxLeft = d.left, a.maxTop = d.top, m === 2 && (a.width >= i.width && (a.minLeft = Math.min(0, M), a.maxLeft = Math.max(0, M)), a.height >= i.height && (a.minTop = Math.min(0, $), a.maxTop = Math.max(0, $))));
      } else
        a.minLeft = -a.width, a.minTop = -a.height, a.maxLeft = i.width, a.maxTop = i.height;
  },
  renderCanvas: function(t, s) {
    var o = this.canvasData, i = this.imageData;
    if (s) {
      var a = wu({
        width: i.naturalWidth * Math.abs(i.scaleX || 1),
        height: i.naturalHeight * Math.abs(i.scaleY || 1),
        degree: i.rotate || 0
      }), d = a.width, m = a.height, l = o.width * (d / o.naturalWidth), b = o.height * (m / o.naturalHeight);
      o.left -= (l - o.width) / 2, o.top -= (b - o.height) / 2, o.width = l, o.height = b, o.aspectRatio = d / m, o.naturalWidth = d, o.naturalHeight = m, this.limitCanvas(!0, !1);
    }
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCanvas(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, Rt(this.canvas, Q({
      width: o.width,
      height: o.height
    }, me({
      translateX: o.left,
      translateY: o.top
    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(t) {
    var s = this.canvasData, o = this.imageData, i = o.naturalWidth * (s.width / s.naturalWidth), a = o.naturalHeight * (s.height / s.naturalHeight);
    Q(o, {
      width: i,
      height: a,
      left: (s.width - i) / 2,
      top: (s.height - a) / 2
    }), Rt(this.image, Q({
      width: o.width,
      height: o.height
    }, me(Q({
      translateX: o.left,
      translateY: o.top
    }, o)))), t && this.output();
  },
  initCropBox: function() {
    var t = this.options, s = this.canvasData, o = t.aspectRatio || t.initialAspectRatio, i = Number(t.autoCropArea) || 0.8, a = {
      width: s.width,
      height: s.height
    };
    o && (s.height * o > s.width ? a.height = a.width / o : a.width = a.height * o), this.cropBoxData = a, this.limitCropBox(!0, !0), a.width = Math.min(Math.max(a.width, a.minWidth), a.maxWidth), a.height = Math.min(Math.max(a.height, a.minHeight), a.maxHeight), a.width = Math.max(a.minWidth, a.width * i), a.height = Math.max(a.minHeight, a.height * i), a.left = s.left + (s.width - a.width) / 2, a.top = s.top + (s.height - a.height) / 2, a.oldLeft = a.left, a.oldTop = a.top, this.initialCropBoxData = Q({}, a);
  },
  limitCropBox: function(t, s) {
    var o = this.options, i = this.containerData, a = this.canvasData, d = this.cropBoxData, m = this.limited, l = o.aspectRatio;
    if (t) {
      var b = Number(o.minCropBoxWidth) || 0, p = Number(o.minCropBoxHeight) || 0, v = m ? Math.min(i.width, a.width, a.width + a.left, i.width - a.left) : i.width, S = m ? Math.min(i.height, a.height, a.height + a.top, i.height - a.top) : i.height;
      b = Math.min(b, i.width), p = Math.min(p, i.height), l && (b && p ? p * l > b ? p = b / l : b = p * l : b ? p = b / l : p && (b = p * l), S * l > v ? S = v / l : v = S * l), d.minWidth = Math.min(b, v), d.minHeight = Math.min(p, S), d.maxWidth = v, d.maxHeight = S;
    }
    s && (m ? (d.minLeft = Math.max(0, a.left), d.minTop = Math.max(0, a.top), d.maxLeft = Math.min(i.width, a.left + a.width) - d.width, d.maxTop = Math.min(i.height, a.top + a.height) - d.height) : (d.minLeft = 0, d.minTop = 0, d.maxLeft = i.width - d.width, d.maxTop = i.height - d.height));
  },
  renderCropBox: function() {
    var t = this.options, s = this.containerData, o = this.cropBoxData;
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCropBox(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, t.movable && t.cropBoxMovable && ye(this.face, be, o.width >= s.width && o.height >= s.height ? Us : kr), Rt(this.cropBox, Q({
      width: o.width,
      height: o.height
    }, me({
      translateX: o.left,
      translateY: o.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), re(this.element, nr, this.getData());
  }
}, Tu = {
  initPreview: function() {
    var t = this.element, s = this.crossOrigin, o = this.options.preview, i = s ? this.crossOriginUrl : this.url, a = t.alt || "The image to preview", d = document.createElement("img");
    if (s && (d.crossOrigin = s), d.src = i, d.alt = a, this.viewBox.appendChild(d), this.viewBoxImage = d, !!o) {
      var m = o;
      typeof o == "string" ? m = t.ownerDocument.querySelectorAll(o) : o.querySelector && (m = [o]), this.previews = m, rt(m, function(l) {
        var b = document.createElement("img");
        ye(l, Ie, {
          width: l.offsetWidth,
          height: l.offsetHeight,
          html: l.innerHTML
        }), s && (b.crossOrigin = s), b.src = i, b.alt = a, b.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', l.innerHTML = "", l.appendChild(b);
      });
    }
  },
  resetPreview: function() {
    rt(this.previews, function(t) {
      var s = ur(t, Ie);
      Rt(t, {
        width: s.width,
        height: s.height
      }), t.innerHTML = s.html, vu(t, Ie);
    });
  },
  preview: function() {
    var t = this.imageData, s = this.canvasData, o = this.cropBoxData, i = o.width, a = o.height, d = t.width, m = t.height, l = o.left - s.left - t.left, b = o.top - s.top - t.top;
    !this.cropped || this.disabled || (Rt(this.viewBoxImage, Q({
      width: d,
      height: m
    }, me(Q({
      translateX: -l,
      translateY: -b
    }, t)))), rt(this.previews, function(p) {
      var v = ur(p, Ie), S = v.width, M = v.height, $ = S, I = M, T = 1;
      i && (T = S / i, I = a * T), a && I > M && (T = M / a, $ = i * T, I = M), Rt(p, {
        width: $,
        height: I
      }), Rt(p.getElementsByTagName("img")[0], Q({
        width: d * T,
        height: m * T
      }, me(Q({
        translateX: -l * T,
        translateY: -b * T
      }, t))));
    }));
  }
}, Iu = {
  bind: function() {
    var t = this.element, s = this.options, o = this.cropper;
    dt(s.cropstart) && yt(t, lr, s.cropstart), dt(s.cropmove) && yt(t, ar, s.cropmove), dt(s.cropend) && yt(t, ir, s.cropend), dt(s.crop) && yt(t, nr, s.crop), dt(s.zoom) && yt(t, cr, s.zoom), yt(o, Fr, this.onCropStart = this.cropStart.bind(this)), s.zoomable && s.zoomOnWheel && yt(o, ts, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && yt(o, Zr, this.onDblclick = this.dblclick.bind(this)), yt(t.ownerDocument, qr, this.onCropMove = this.cropMove.bind(this)), yt(t.ownerDocument, Gr, this.onCropEnd = this.cropEnd.bind(this)), s.responsive && yt(window, Qr, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, s = this.options, o = this.cropper;
    dt(s.cropstart) && Dt(t, lr, s.cropstart), dt(s.cropmove) && Dt(t, ar, s.cropmove), dt(s.cropend) && Dt(t, ir, s.cropend), dt(s.crop) && Dt(t, nr, s.crop), dt(s.zoom) && Dt(t, cr, s.zoom), Dt(o, Fr, this.onCropStart), s.zoomable && s.zoomOnWheel && Dt(o, ts, this.onWheel, {
      passive: !1,
      capture: !0
    }), s.toggleDragModeOnDblclick && Dt(o, Zr, this.onDblclick), Dt(t.ownerDocument, qr, this.onCropMove), Dt(t.ownerDocument, Gr, this.onCropEnd), s.responsive && Dt(window, Qr, this.onResize);
  }
}, Au = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, s = this.container, o = this.containerData, i = s.offsetWidth / o.width, a = s.offsetHeight / o.height, d = Math.abs(i - 1) > Math.abs(a - 1) ? i : a;
      if (d !== 1) {
        var m, l;
        t.restore && (m = this.getCanvasData(), l = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(rt(m, function(b, p) {
          m[p] = b * d;
        })), this.setCropBoxData(rt(l, function(b, p) {
          l[p] = b * d;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Ws || this.setDragMode(gu(this.dragBox, sr) ? Ys : Dr);
  },
  wheel: function(t) {
    var s = this, o = Number(this.options.wheelZoomRatio) || 0.1, i = 1;
    this.disabled || (t.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      s.wheeling = !1;
    }, 50), t.deltaY ? i = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? i = -t.wheelDelta / 120 : t.detail && (i = t.detail > 0 ? 1 : -1), this.zoom(-i * o, t)));
  },
  cropStart: function(t) {
    var s = t.buttons, o = t.button;
    if (!(this.disabled || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && // No primary button (Usually the left button)
    (K(s) && s !== 1 || K(o) && o !== 0 || t.ctrlKey))) {
      var i = this.options, a = this.pointers, d;
      t.changedTouches ? rt(t.changedTouches, function(m) {
        a[m.identifier] = Ae(m);
      }) : a[t.pointerId || 0] = Ae(t), Object.keys(a).length > 1 && i.zoomable && i.zoomOnTouch ? d = Ks : d = ur(t.target, be), nu.test(d) && re(this.element, lr, {
        originalEvent: t,
        action: d
      }) !== !1 && (t.preventDefault(), this.action = d, this.cropping = !1, d === Hs && (this.cropping = !0, at(this.dragBox, Ne)));
    }
  },
  cropMove: function(t) {
    var s = this.action;
    if (!(this.disabled || !s)) {
      var o = this.pointers;
      t.preventDefault(), re(this.element, ar, {
        originalEvent: t,
        action: s
      }) !== !1 && (t.changedTouches ? rt(t.changedTouches, function(i) {
        Q(o[i.identifier] || {}, Ae(i, !0));
      }) : Q(o[t.pointerId || 0] || {}, Ae(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var s = this.action, o = this.pointers;
      t.changedTouches ? rt(t.changedTouches, function(i) {
        delete o[i.identifier];
      }) : delete o[t.pointerId || 0], s && (t.preventDefault(), Object.keys(o).length || (this.action = ""), this.cropping && (this.cropping = !1, te(this.dragBox, Ne, this.cropped && this.options.modal)), re(this.element, ir, {
        originalEvent: t,
        action: s
      }));
    }
  }
}, Lu = {
  change: function(t) {
    var s = this.options, o = this.canvasData, i = this.containerData, a = this.cropBoxData, d = this.pointers, m = this.action, l = s.aspectRatio, b = a.left, p = a.top, v = a.width, S = a.height, M = b + v, $ = p + S, I = 0, T = 0, H = i.width, V = i.height, j = !0, z;
    !l && t.shiftKey && (l = v && S ? v / S : 1), this.limited && (I = a.minLeft, T = a.minTop, H = I + Math.min(i.width, o.width, o.left + o.width), V = T + Math.min(i.height, o.height, o.top + o.height));
    var W = d[Object.keys(d)[0]], k = {
      x: W.endX - W.startX,
      y: W.endY - W.startY
    }, N = function(ot) {
      switch (ot) {
        case Kt:
          M + k.x > H && (k.x = H - M);
          break;
        case Yt:
          b + k.x < I && (k.x = I - b);
          break;
        case jt:
          p + k.y < T && (k.y = T - p);
          break;
        case Jt:
          $ + k.y > V && (k.y = V - $);
          break;
      }
    };
    switch (m) {
      case kr:
        b += k.x, p += k.y;
        break;
      case Kt:
        if (k.x >= 0 && (M >= H || l && (p <= T || $ >= V))) {
          j = !1;
          break;
        }
        N(Kt), v += k.x, v < 0 && (m = Yt, v = -v, b -= v), l && (S = v / l, p += (a.height - S) / 2);
        break;
      case jt:
        if (k.y <= 0 && (p <= T || l && (b <= I || M >= H))) {
          j = !1;
          break;
        }
        N(jt), S -= k.y, p += k.y, S < 0 && (m = Jt, S = -S, p -= S), l && (v = S * l, b += (a.width - v) / 2);
        break;
      case Yt:
        if (k.x <= 0 && (b <= I || l && (p <= T || $ >= V))) {
          j = !1;
          break;
        }
        N(Yt), v -= k.x, b += k.x, v < 0 && (m = Kt, v = -v, b -= v), l && (S = v / l, p += (a.height - S) / 2);
        break;
      case Jt:
        if (k.y >= 0 && ($ >= V || l && (b <= I || M >= H))) {
          j = !1;
          break;
        }
        N(Jt), S += k.y, S < 0 && (m = jt, S = -S, p -= S), l && (v = S * l, b += (a.width - v) / 2);
        break;
      case he:
        if (l) {
          if (k.y <= 0 && (p <= T || M >= H)) {
            j = !1;
            break;
          }
          N(jt), S -= k.y, p += k.y, v = S * l;
        } else
          N(jt), N(Kt), k.x >= 0 ? M < H ? v += k.x : k.y <= 0 && p <= T && (j = !1) : v += k.x, k.y <= 0 ? p > T && (S -= k.y, p += k.y) : (S -= k.y, p += k.y);
        v < 0 && S < 0 ? (m = ge, S = -S, v = -v, p -= S, b -= v) : v < 0 ? (m = fe, v = -v, b -= v) : S < 0 && (m = pe, S = -S, p -= S);
        break;
      case fe:
        if (l) {
          if (k.y <= 0 && (p <= T || b <= I)) {
            j = !1;
            break;
          }
          N(jt), S -= k.y, p += k.y, v = S * l, b += a.width - v;
        } else
          N(jt), N(Yt), k.x <= 0 ? b > I ? (v -= k.x, b += k.x) : k.y <= 0 && p <= T && (j = !1) : (v -= k.x, b += k.x), k.y <= 0 ? p > T && (S -= k.y, p += k.y) : (S -= k.y, p += k.y);
        v < 0 && S < 0 ? (m = pe, S = -S, v = -v, p -= S, b -= v) : v < 0 ? (m = he, v = -v, b -= v) : S < 0 && (m = ge, S = -S, p -= S);
        break;
      case ge:
        if (l) {
          if (k.x <= 0 && (b <= I || $ >= V)) {
            j = !1;
            break;
          }
          N(Yt), v -= k.x, b += k.x, S = v / l;
        } else
          N(Jt), N(Yt), k.x <= 0 ? b > I ? (v -= k.x, b += k.x) : k.y >= 0 && $ >= V && (j = !1) : (v -= k.x, b += k.x), k.y >= 0 ? $ < V && (S += k.y) : S += k.y;
        v < 0 && S < 0 ? (m = he, S = -S, v = -v, p -= S, b -= v) : v < 0 ? (m = pe, v = -v, b -= v) : S < 0 && (m = fe, S = -S, p -= S);
        break;
      case pe:
        if (l) {
          if (k.x >= 0 && (M >= H || $ >= V)) {
            j = !1;
            break;
          }
          N(Kt), v += k.x, S = v / l;
        } else
          N(Jt), N(Kt), k.x >= 0 ? M < H ? v += k.x : k.y >= 0 && $ >= V && (j = !1) : v += k.x, k.y >= 0 ? $ < V && (S += k.y) : S += k.y;
        v < 0 && S < 0 ? (m = fe, S = -S, v = -v, p -= S, b -= v) : v < 0 ? (m = ge, v = -v, b -= v) : S < 0 && (m = he, S = -S, p -= S);
        break;
      case Us:
        this.move(k.x, k.y), j = !1;
        break;
      case Ks:
        this.zoom(yu(d), t), j = !1;
        break;
      case Hs:
        if (!k.x || !k.y) {
          j = !1;
          break;
        }
        z = Js(this.cropper), b = W.startX - z.left, p = W.startY - z.top, v = a.minWidth, S = a.minHeight, k.x > 0 ? m = k.y > 0 ? pe : he : k.x < 0 && (b -= v, m = k.y > 0 ? ge : fe), k.y < 0 && (p -= S), this.cropped || (Tt(this.cropBox, ht), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    j && (a.width = v, a.height = S, a.left = b, a.top = p, this.action = m, this.renderCropBox()), rt(d, function(G) {
      G.startX = G.endX, G.startY = G.endY;
    });
  }
}, Ou = {
  // Show the crop box manually
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && at(this.dragBox, Ne), Tt(this.cropBox, ht), this.setCropBoxData(this.initialCropBoxData)), this;
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
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Tt(this.dragBox, Ne), at(this.cropBox, ht)), this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && t && (this.isImg && (this.element.src = t), s ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, rt(this.previews, function(o) {
      o.getElementsByTagName("img")[0].src = t;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this;
  },
  // Enable (unfreeze) the cropper
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, Tt(this.cropper, Wr)), this;
  },
  // Disable (freeze) the cropper
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, at(this.cropper, Wr)), this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function() {
    var t = this.element;
    return t[J] ? (t[J] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this) : this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, o = this.canvasData, i = o.left, a = o.top;
    return this.moveTo(Ze(t) ? t : i + Number(t), Ze(s) ? s : a + Number(s));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, o = this.canvasData, i = !1;
    return t = Number(t), s = Number(s), this.ready && !this.disabled && this.options.movable && (K(t) && (o.left = t, i = !0), K(s) && (o.top = s, i = !0), i && this.renderCanvas(!0)), this;
  },
  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function(t, s) {
    var o = this.canvasData;
    return t = Number(t), t < 0 ? t = 1 / (1 - t) : t = 1 + t, this.zoomTo(o.width * t / o.naturalWidth, null, s);
  },
  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function(t, s, o) {
    var i = this.options, a = this.canvasData, d = a.width, m = a.height, l = a.naturalWidth, b = a.naturalHeight;
    if (t = Number(t), t >= 0 && this.ready && !this.disabled && i.zoomable) {
      var p = l * t, v = b * t;
      if (re(this.element, cr, {
        ratio: t,
        oldRatio: d / l,
        originalEvent: o
      }) === !1)
        return this;
      if (o) {
        var S = this.pointers, M = Js(this.cropper), $ = S && Object.keys(S).length ? Su(S) : {
          pageX: o.pageX,
          pageY: o.pageY
        };
        a.left -= (p - d) * (($.pageX - M.left - a.left) / d), a.top -= (v - m) * (($.pageY - M.top - a.top) / m);
      } else
        Qt(s) && K(s.x) && K(s.y) ? (a.left -= (p - d) * ((s.x - a.left) / d), a.top -= (v - m) * ((s.y - a.top) / m)) : (a.left -= (p - d) / 2, a.top -= (v - m) / 2);
      a.width = p, a.height = v, this.renderCanvas(!0);
    }
    return this;
  },
  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function(t) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(t));
  },
  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function(t) {
    return t = Number(t), K(t) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function(t) {
    var s = this.imageData.scaleY;
    return this.scale(t, K(s) ? s : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function(t) {
    var s = this.imageData.scaleX;
    return this.scale(K(s) ? s : 1, t);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, o = this.imageData, i = !1;
    return t = Number(t), s = Number(s), this.ready && !this.disabled && this.options.scalable && (K(t) && (o.scaleX = t, i = !0), K(s) && (o.scaleY = s, i = !0), i && this.renderCanvas(!0, !0)), this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, s = this.options, o = this.imageData, i = this.canvasData, a = this.cropBoxData, d;
    if (this.ready && this.cropped) {
      d = {
        x: a.left - i.left,
        y: a.top - i.top,
        width: a.width,
        height: a.height
      };
      var m = o.width / o.naturalWidth;
      if (rt(d, function(p, v) {
        d[v] = p / m;
      }), t) {
        var l = Math.round(d.y + d.height), b = Math.round(d.x + d.width);
        d.x = Math.round(d.x), d.y = Math.round(d.y), d.width = b - d.x, d.height = l - d.y;
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
  setData: function(t) {
    var s = this.options, o = this.imageData, i = this.canvasData, a = {};
    if (this.ready && !this.disabled && Qt(t)) {
      var d = !1;
      s.rotatable && K(t.rotate) && t.rotate !== o.rotate && (o.rotate = t.rotate, d = !0), s.scalable && (K(t.scaleX) && t.scaleX !== o.scaleX && (o.scaleX = t.scaleX, d = !0), K(t.scaleY) && t.scaleY !== o.scaleY && (o.scaleY = t.scaleY, d = !0)), d && this.renderCanvas(!0, !0);
      var m = o.width / o.naturalWidth;
      K(t.x) && (a.left = t.x * m + i.left), K(t.y) && (a.top = t.y * m + i.top), K(t.width) && (a.width = t.width * m), K(t.height) && (a.height = t.height * m), this.setCropBoxData(a);
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
    var t = this.canvasData, s = {};
    return this.ready && rt(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(o) {
      s[o] = t[o];
    }), s;
  },
  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function(t) {
    var s = this.canvasData, o = s.aspectRatio;
    return this.ready && !this.disabled && Qt(t) && (K(t.left) && (s.left = t.left), K(t.top) && (s.top = t.top), K(t.width) ? (s.width = t.width, s.height = t.width / o) : K(t.height) && (s.height = t.height, s.width = t.height * o), this.renderCanvas(!0)), this;
  },
  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function() {
    var t = this.cropBoxData, s;
    return this.ready && this.cropped && (s = {
      left: t.left,
      top: t.top,
      width: t.width,
      height: t.height
    }), s || {};
  },
  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function(t) {
    var s = this.cropBoxData, o = this.options.aspectRatio, i, a;
    return this.ready && this.cropped && !this.disabled && Qt(t) && (K(t.left) && (s.left = t.left), K(t.top) && (s.top = t.top), K(t.width) && t.width !== s.width && (i = !0, s.width = t.width), K(t.height) && t.height !== s.height && (a = !0, s.height = t.height), o && (i ? s.height = s.width / o : a && (s.width = s.height * o)), this.renderCropBox()), this;
  },
  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var s = this.canvasData, o = _u(this.image, this.imageData, s, t);
    if (!this.cropped)
      return o;
    var i = this.getData(), a = i.x, d = i.y, m = i.width, l = i.height, b = o.width / Math.floor(s.naturalWidth);
    b !== 1 && (a *= b, d *= b, m *= b, l *= b);
    var p = m / l, v = Vt({
      aspectRatio: p,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), S = Vt({
      aspectRatio: p,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), M = Vt({
      aspectRatio: p,
      width: t.width || (b !== 1 ? o.width : m),
      height: t.height || (b !== 1 ? o.height : l)
    }), $ = M.width, I = M.height;
    $ = Math.min(v.width, Math.max(S.width, $)), I = Math.min(v.height, Math.max(S.height, I));
    var T = document.createElement("canvas"), H = T.getContext("2d");
    T.width = ee($), T.height = ee(I), H.fillStyle = t.fillColor || "transparent", H.fillRect(0, 0, $, I);
    var V = t.imageSmoothingEnabled, j = V === void 0 ? !0 : V, z = t.imageSmoothingQuality;
    H.imageSmoothingEnabled = j, z && (H.imageSmoothingQuality = z);
    var W = o.width, k = o.height, N = a, G = d, ot, et, ut, vt, pt, gt;
    N <= -m || N > W ? (N = 0, ot = 0, ut = 0, pt = 0) : N <= 0 ? (ut = -N, N = 0, ot = Math.min(W, m + N), pt = ot) : N <= W && (ut = 0, ot = Math.min(m, W - N), pt = ot), ot <= 0 || G <= -l || G > k ? (G = 0, et = 0, vt = 0, gt = 0) : G <= 0 ? (vt = -G, G = 0, et = Math.min(k, l + G), gt = et) : G <= k && (vt = 0, et = Math.min(l, k - G), gt = et);
    var L = [N, G, ot, et];
    if (pt > 0 && gt > 0) {
      var R = $ / m;
      L.push(ut * R, vt * R, pt * R, gt * R);
    }
    return H.drawImage.apply(H, [o].concat(zs(L.map(function(O) {
      return Math.floor(ee(O));
    })))), T;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function(t) {
    var s = this.options;
    return !this.disabled && !Ze(t) && (s.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function(t) {
    var s = this.options, o = this.dragBox, i = this.face;
    if (this.ready && !this.disabled) {
      var a = t === Dr, d = s.movable && t === Ys;
      t = a || d ? t : Ws, s.dragMode = t, ye(o, be, t), te(o, sr, a), te(o, or, d), s.cropBoxMovable || (ye(i, be, t), te(i, sr, a), te(i, or, d));
    }
    return this;
  }
}, Pu = It.Cropper, to = /* @__PURE__ */ function() {
  function r(t) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Zc(this, r), !t || !lu.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = Q({}, rs, Qt(s) && s), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
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
        var d = new XMLHttpRequest(), m = this.clone.bind(this);
        this.reloading = !0, this.xhr = d, d.onabort = m, d.onerror = m, d.ontimeout = m, d.onprogress = function() {
          d.getResponseHeader("content-type") !== es && d.abort();
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
      var o = this.options, i = this.imageData, a = Mu(s), d = 0, m = 1, l = 1;
      if (a > 1) {
        this.url = Cu(s, es);
        var b = Eu(a);
        d = b.rotate, m = b.scaleX, l = b.scaleY;
      }
      o.rotatable && (i.rotate = d), o.scalable && (i.scaleX = m, i.scaleY = l), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var s = this.element, o = this.url, i = s.crossOrigin, a = o;
      this.options.checkCrossOrigin && os(o) && (i || (i = "anonymous"), a = ns(o)), this.crossOrigin = i, this.crossOriginUrl = a;
      var d = document.createElement("img");
      i && (d.crossOrigin = i), d.src = a || o, d.alt = s.alt || "The image to crop", this.image = d, d.onload = this.start.bind(this), d.onerror = this.stop.bind(this), at(d, Xr), s.parentNode.insertBefore(d, s.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var s = this, o = this.image;
      o.onload = null, o.onerror = null, this.sizing = !0;
      var i = It.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(It.navigator.userAgent), a = function(b, p) {
        Q(s.imageData, {
          naturalWidth: b,
          naturalHeight: p,
          aspectRatio: b / p
        }), s.initialImageData = Q({}, s.imageData), s.sizing = !1, s.sized = !0, s.build();
      };
      if (o.naturalWidth && !i) {
        a(o.naturalWidth, o.naturalHeight);
        return;
      }
      var d = document.createElement("img"), m = document.body || document.documentElement;
      this.sizingImage = d, d.onload = function() {
        a(d.width, d.height), i || m.removeChild(d);
      }, d.src = o.src, i || (d.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", m.appendChild(d));
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
        var m = d.querySelector(".".concat(J, "-container")), l = m.querySelector(".".concat(J, "-canvas")), b = m.querySelector(".".concat(J, "-drag-box")), p = m.querySelector(".".concat(J, "-crop-box")), v = p.querySelector(".".concat(J, "-face"));
        this.container = a, this.cropper = m, this.canvas = l, this.dragBox = b, this.cropBox = p, this.viewBox = m.querySelector(".".concat(J, "-view-box")), this.face = v, l.appendChild(i), at(s, ht), a.insertBefore(m, s.nextSibling), Tt(i, Xr), this.initPreview(), this.bind(), o.initialAspectRatio = Math.max(0, o.initialAspectRatio) || NaN, o.aspectRatio = Math.max(0, o.aspectRatio) || NaN, o.viewMode = Math.max(0, Math.min(3, Math.round(o.viewMode))) || 0, at(p, ht), o.guides || at(p.getElementsByClassName("".concat(J, "-dashed")), ht), o.center || at(p.getElementsByClassName("".concat(J, "-center")), ht), o.background && at(m, "".concat(J, "-bg")), o.highlight || at(v, eu), o.cropBoxMovable && (at(v, or), ye(v, be, kr)), o.cropBoxResizable || (at(p.getElementsByClassName("".concat(J, "-line")), ht), at(p.getElementsByClassName("".concat(J, "-point")), ht)), this.render(), this.ready = !0, this.setDragMode(o.dragMode), o.autoCrop && this.crop(), this.setData(o.data), dt(o.ready) && yt(s, Jr, o.ready, {
          once: !0
        }), re(s, Jr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var s = this.cropper.parentNode;
        s && s.removeChild(this.cropper), Tt(this.element, ht);
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
      Q(rs, Qt(s) && s);
    }
  }]), r;
}();
Q(to.prototype, $u, Tu, Iu, Au, Lu, Ou);
const Nu = { class: "flex" }, ju = ["aria-label"], Ru = { class: "ml-auto mb-2" }, Vu = { class: "w-full flex justify-center" }, Bu = ["src"], zu = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, { t: o } = P("i18n"), { apiUrl: i } = At(), a = A(null), d = A(null), m = A(!1), l = A(""), b = A(!1), p = () => {
      m.value = !m.value, m.value ? d.value = new to(a.value, {
        crop(M) {
        }
      }) : d.value.destroy();
    }, v = P("postData"), S = () => {
      d.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        (M) => {
          l.value = "", b.value = !1, Oe(i.value, {
            method: "POST",
            params: Object.assign(v, {
              q: "upload",
              adapter: s.selection.adapter,
              path: s.selection.item.path,
              file: M
            }),
            name: s.selection.item.basename,
            json: !1
          }).then(($) => {
            l.value = o("Updated."), a.value.src = Qe(s.selection.adapter, s.selection.item.path), p(), t("load");
          }).catch(($) => {
            l.value = o($.message), b.value = !0;
          });
        }
      );
    };
    return Mt(() => {
      t("load");
    }), (M, $) => (w(), D(lt, null, [
      f("div", Nu, [
        f("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": r.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(r.selection.item.basename), 9, ju),
        f("div", Ru, [
          m.value ? (w(), D("button", {
            key: 0,
            onClick: S,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(o)("Crop")), 1)) : Z("", !0),
          f("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: $[0] || ($[0] = (I) => p())
          }, E(m.value ? x(o)("Cancel") : x(o)("Edit")), 1)
        ])
      ]),
      f("div", Vu, [
        f("img", {
          ref_key: "image",
          ref: a,
          class: "max-w-[50vh] max-h-[50vh]",
          src: x(Qe)(s.selection.adapter, s.selection.item.path),
          alt: ""
        }, null, 8, Bu)
      ]),
      l.value.length ? (w(), q(Ot, {
        key: 0,
        onHidden: $[1] || ($[1] = (I) => l.value = ""),
        error: b.value
      }, {
        default: F(() => [
          st(E(l.value), 1)
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
  setup(r, { emit: t }) {
    return Mt(() => {
      t("load");
    }), (s, o) => (w(), D(lt, null, [
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
  setup(r, { emit: t }) {
    const s = r, { apiUrl: o } = At(), i = () => o.value + "?" + Ft({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return Mt(() => {
      t("load");
    }), (a, d) => (w(), D(lt, null, [
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
          st(" Your browser does not support the video tag. ")
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
  setup(r, { emit: t }) {
    const s = r, { apiUrl: o } = At(), i = () => o.value + "?" + Ft({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return Mt(() => {
      t("load");
    }), (a, d) => (w(), D(lt, null, [
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
          st(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, td = ["aria-label"], ed = ["data"], rd = ["src"], sd = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(r, { emit: t }) {
    const s = r, { apiUrl: o } = At(), i = () => o.value + "?" + Ft({ q: "preview", adapter: s.selection.adapter, path: s.selection.item.path });
    return Mt(() => {
      t("load");
    }), (a, d) => (w(), D(lt, null, [
      f("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": r.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(r.selection.item.basename), 9, td),
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
        ], 8, ed)
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
    const t = r, { apiUrl: s } = At(), o = P("emitter"), { t: i } = P("i18n"), a = A(!1), d = (p) => a.value = p, m = A("local"), l = (p) => (t.selection.item.mime_type ?? "").startsWith(p), b = () => {
      const p = s.value + "?" + Ft({ q: "download", adapter: m.value, path: t.selection.item.path });
      o.emit("vf-download", p);
    };
    return (p, v) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: v[6] || (v[6] = (S) => x(o).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Close")), 1),
        f("button", {
          type: "button",
          onClick: v[7] || (v[7] = (S) => b()),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Download")), 1)
      ]),
      default: F(() => [
        f("div", od, [
          f("div", nd, [
            f("div", null, [
              l("text") ? (w(), q(Xc, {
                key: 0,
                selection: r.selection,
                onLoad: v[0] || (v[0] = (S) => d(!0))
              }, null, 8, ["selection"])) : l("image") ? (w(), q(zu, {
                key: 1,
                selection: r.selection,
                onLoad: v[1] || (v[1] = (S) => d(!0))
              }, null, 8, ["selection"])) : l("video") ? (w(), q(Fu, {
                key: 2,
                selection: r.selection,
                onLoad: v[2] || (v[2] = (S) => d(!0))
              }, null, 8, ["selection"])) : l("audio") ? (w(), q(Qu, {
                key: 3,
                selection: r.selection,
                onLoad: v[3] || (v[3] = (S) => d(!0))
              }, null, 8, ["selection"])) : l("application/pdf") ? (w(), q(sd, {
                key: 4,
                selection: r.selection,
                onLoad: v[4] || (v[4] = (S) => d(!0))
              }, null, 8, ["selection"])) : (w(), q(Yu, {
                key: 5,
                selection: r.selection,
                onLoad: v[5] || (v[5] = (S) => d(!0))
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
            st(E(x(us)(r.selection.item.file_size)), 1)
          ]),
          f("div", null, [
            f("span", dd, E(x(i)("Last Modified")) + ": ", 1),
            st(" " + E(x(ds)(r.selection.item.last_modified)), 1)
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
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: i } = P("i18n"), a = A(t.selection.items[0]), d = A(t.selection.items[0].basename), m = A(""), l = () => {
      d.value != "" && s.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: o.value,
          path: t.current.dirname,
          item: a.value.path,
          name: d.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: i("%s is renamed.", d.value) });
        },
        onError: (b) => {
          m.value = i(b.message);
        }
      });
    };
    return (b, p) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: l,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Rename")), 1),
        f("button", {
          type: "button",
          onClick: p[2] || (p[2] = (v) => x(s).emit("vf-modal-close")),
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
              St(f("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (v) => d.value = v),
                onKeyup: oe(l, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, Md), [
                [ne, d.value]
              ]),
              m.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: p[1] || (p[1] = (v) => m.value = ""),
                error: ""
              }, {
                default: F(() => [
                  st(E(m.value), 1)
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
    const t = r, s = P("emitter"), { apiUrl: o } = At(), { t: i } = P("i18n"), a = P("maxFileSize"), d = A(null), m = A(null), l = A(null), b = A([]), p = A(""), v = A(!0), S = () => {
      p.value = "", d.value.start();
    }, M = P("postData");
    return Mt(() => {
      d.value = new de.Uploader({
        runtimes: "html5",
        browse_button: l.value,
        container: m.value,
        max_file_size: a,
        multiple_queues: !0,
        file_data_name: "file",
        url: o.value + "?" + Ft(Object.assign(M, { q: "upload", adapter: t.current.adapter, path: t.current.dirname })),
        // filters : [
        // 	{title : "Image files", extensions : "jpg,gif,png,jpeg"},
        // 	{title : "Zip files", extensions : "zip"}
        // ],
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          ...jr && { "X-CSRF-Token": jr }
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function($, I) {
            v.value = !1, de.each(I, function(T) {
              b.value.push({
                id: T.id,
                name: T.name,
                size: de.formatSize(T.size),
                percent: ""
              });
            });
          },
          UploadProgress: function($, I) {
            b.value[b.value.findIndex((T) => T.id == I.id)].percent = I.percent + "%";
          },
          UploadComplete: function() {
            v.value = !0, s.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: t.current.dirname } });
          },
          Error: function($, I) {
            d.value.stop(), I.code == de.HTTP_ERROR ? p.value = i(JSON.parse(I.response).message) : I.code == de.FILE_SIZE_ERROR ? p.value = i("The selected file exceeds the maximum file size. You cannot upload files greater than %s", [a]) : p.value = i(I.message);
          }
        }
      }), d.value.init();
    }), ($, I) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          disabled: v.value,
          onClick: Wt(S, ["prevent"]),
          type: "button",
          class: ct([v.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500", "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"])
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
                (w(!0), D(lt, null, wt(b.value, (T) => (w(), D("div", null, [
                  f("div", {
                    id: T.id
                  }, [
                    st(E(T.name) + " ( " + E(T.size) + ") ", 1),
                    f("b", null, E(T.percent), 1)
                  ], 8, Nd)
                ]))), 256)),
                b.value.length ? Z("", !0) : (w(), D("div", jd, E(x(i)("No files selected!")), 1))
              ]),
              f("div", {
                class: "text-gray-500",
                ref_key: "container",
                ref: m
              }, [
                f("button", {
                  ref_key: "pickFiles",
                  ref: l,
                  type: "button",
                  class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                }, E(x(i)("Select Files")), 513)
              ], 512),
              p.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: I[0] || (I[0] = (T) => p.value = ""),
                error: ""
              }, {
                default: F(() => [
                  st(E(p.value), 1)
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
], Qd = { class: "ml-1.5" }, th = ["onKeyup", "placeholder"], eh = {
  name: "VFModalArchive"
}, rh = /* @__PURE__ */ Object.assign(eh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(r) {
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: i } = P("i18n"), a = A(""), d = A(""), m = A(t.selection.items), l = () => {
      m.value.length && s.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: o.value,
          path: t.current.dirname,
          items: JSON.stringify(m.value.map(({ path: b, type: p }) => ({ path: b, type: p }))),
          name: a.value
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: i("The file(s) archived.") });
        },
        onError: (b) => {
          d.value = i(b.message);
        }
      });
    };
    return (b, p) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: l,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Archive")), 1),
        f("button", {
          type: "button",
          onClick: p[2] || (p[2] = (v) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", zd, [
          Hd,
          f("div", Ud, [
            f("h3", Kd, E(x(i)("Archive the files")), 1),
            f("div", Yd, [
              (w(!0), D(lt, null, wt(m.value, (v) => (w(), D("p", Wd, [
                v.type == "dir" ? (w(), D("svg", Xd, Fd)) : (w(), D("svg", qd, Jd)),
                f("span", Qd, E(v.basename), 1)
              ]))), 256)),
              St(f("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (v) => a.value = v),
                onKeyup: oe(l, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(i)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, th), [
                [ne, a.value]
              ]),
              d.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: p[1] || (p[1] = (v) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  st(E(d.value), 1)
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
    const t = r, s = P("emitter");
    P("storage");
    const o = P("adapter"), { t: i } = P("i18n");
    A("");
    const a = A(t.selection.items[0]), d = A(""), m = A([]), l = () => {
      s.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: o.value,
          path: t.current.dirname,
          item: a.value.path
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: i("The file unarchived.") });
        },
        onError: (b) => {
          d.value = i(b.message);
        }
      });
    };
    return (b, p) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: l,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Unarchive")), 1),
        f("button", {
          type: "button",
          onClick: p[1] || (p[1] = (v) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(i)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", sh, [
          oh,
          f("div", nh, [
            f("h3", ih, E(x(i)("Unarchive")), 1),
            f("div", ah, [
              (w(!0), D(lt, null, wt(m.value, (v) => (w(), D("p", lh, [
                v.type == "dir" ? (w(), D("svg", ch, dh)) : (w(), D("svg", hh, ph)),
                f("span", gh, E(v.basename), 1)
              ]))), 256)),
              f("p", mh, E(x(i)("The archive will be unarchived at")) + " (" + E(r.current.dirname) + ")", 1),
              d.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: p[0] || (p[0] = (v) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  st(E(d.value), 1)
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
    const t = r, s = P("emitter"), { t: o } = P("i18n");
    P("storage");
    const i = P("adapter"), a = A(t.selection.items.from), d = A(""), m = () => {
      a.value.length && s.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: i.value,
          path: t.current.dirname,
          items: JSON.stringify(a.value.map(({ path: l, type: b }) => ({ path: l, type: b }))),
          item: t.selection.items.to.path
        },
        onSuccess: () => {
          s.emit("vf-toast-push", { label: o("Files moved.", t.selection.items.to.name) });
        },
        onError: (l) => {
          d.value = o(l.message);
        }
      });
    };
    return (l, b) => (w(), q(Lt, null, {
      buttons: F(() => [
        f("button", {
          type: "button",
          onClick: m,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Yes, Move!")), 1),
        f("button", {
          type: "button",
          onClick: b[1] || (b[1] = (p) => x(s).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(o)("Cancel")), 1)
      ]),
      default: F(() => [
        f("div", yh, [
          Sh,
          f("div", wh, [
            f("h3", _h, E(x(o)("Move files")), 1),
            f("div", xh, [
              (w(!0), D(lt, null, wt(a.value, (p) => (w(), D("p", kh, [
                p.type == "dir" ? (w(), D("svg", Dh, Mh)) : (w(), D("svg", Eh, Th)),
                f("span", Ih, E(p.path), 1)
              ]))), 256)),
              f("p", Ah, E(x(o)("Are you sure you want to move these files?")), 1),
              f("p", Lh, [
                Oh,
                f("span", Ph, E(r.selection.items.to.path), 1)
              ]),
              d.value.length ? (w(), q(Ot, {
                key: 0,
                onHidden: b[0] || (b[0] = (p) => d.value = ""),
                error: ""
              }, {
                default: F(() => [
                  st(E(d.value), 1)
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
}, Symbol.toStringTag, { value: "Module" })), qe = {
  VueFinder: Ul,
  ...Rh
};
const zh = {
  install(r) {
    for (const t in qe)
      if (qe.hasOwnProperty(t)) {
        const s = qe[t];
        r.component(s.name, s);
      }
  }
};
export {
  zh as default
};
