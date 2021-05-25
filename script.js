if (!("IntersectionObserver" in window)) {
  const e = document.createElement("script");
  e.src =
    "https://img1.wsimg.com/poly/v2/polyfill.min.js?unknown=polyfill&flags=gated&features=default%2Cfetch%2CArray.prototype.%40%40iterator%2CArray.prototype.find%2CArray.prototype.findIndex%2CFunction.name%2CNumber.isFinite%2CPromise%2CString.prototype.repeat%2CMath.sign%2CMath.trunc%2CArray.prototype.includes%2CObject.entries%2CObject.values%2CObject.is%2CIntersectionObserver%2CIntl.~locale.en-US",
    document.head.appendChild(e)
}

! function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var r = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }
  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    })
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var r in e) n.d(o, r, function (t) {
        return e[t]
      }.bind(null, r));
    return o
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 0)
}([function (e, t, n) {
  e.exports = n(1)
}, function (e, t, n) {
  "use strict";
  window.guacImage = n(2), window.guacDefer = n(3), window.onVisualComplete = n(4), window
    .markVisuallyComplete = n(5), window.deferBootstrap = n(6)
}, function (e, t, n) {
  "use strict";

  function o(e, t, n, o) {
    const c = (n = n || {}).delay || 500,
      s = n.cellSize || {
        x: 20,
        y: 20
      };
    let u, d, a, w, l, f, g, p = !0;
    const h = function (e) {
        const o = 'url("' + e + '")';
        let r = o;
        if (n.backgroundLayers && n.backgroundLayers.constructor === Array) {
          const e = n.backgroundLayers.map((function (e) {
            return e.replace(/{width}/g, a.w).replace(/{height}/g, a.h)
          }));
          r = [].concat(e, [o]).join(", ")
        }
        t.style.backgroundImage = r, setTimeout((function () {
          t.style.opacity = 1
        }), 300)
      }.bind(this),
      b = function () {
        p && (o ? o(d, a) : n.useTreatmentData ? h(d) : t.style.backgroundImage = 'url("' + d + '")', n
          .shouldMarkVisuallyComplete && window && window.markVisuallyComplete(), t.setAttribute(
            "data-guac-image", "loaded"))
      }.bind(this),
      v = function () {
        const e = document.createElement("img");
        e.src = d, e.complete || !e.addEventListener ? b() : e.addEventListener("load", b)
      }.bind(this),
      m = function () {
        if (!p) return;
        t.setAttribute("data-guac-image", "loading"), u = null;
        const n = r(t, s);
        return n ? (a || (a = n), n.w !== a.w || n.h !== a.h ? (a = n, l(1)) : (d = i(e, n, s), void(d !== w ? (
          w = d, !g && window.IntersectionObserver ? (g = new window.IntersectionObserver((e, t) => {
            e.forEach(e => {
              const {
                target: n,
                isIntersecting: o
              } = e;
              o && (v(), t.unobserve(n))
            })
          }), g.observe(t)) : v(), !f && window.MutationObserver && (f = new MutationObserver((
            function () {
              l(1)
            })), f.observe(t, {
            childList: !0,
            subtree: !0
          }))) : t.setAttribute("data-guac-image", "loaded")))) : l()
      }.bind(this);
    l = function (e) {
      u && clearTimeout(u), u = setTimeout(m, isNaN(e) ? c : e)
    }.bind(this), this.unmount = function () {
      u && (clearTimeout(u), u = null), window.removeEventListener("resize", l), f && f.disconnect(), g && g
        .disconnect(), p = !1
    };
    const y = function () {
      t.removeEventListener("load", y), window.addEventListener("resize", l), m()
    };
    window.guacDefer && !n.loadEagerly ? (t.addEventListener("load", y), window.guacDefer.background(t)) : y()
  }

  function r(e, t) {
    const n = {
      w: t.x,
      h: t.y
    };
    if ("undefined" != typeof window && e) {
      const t = Math.min(window.devicePixelRatio || 1, 3),
        o = window.getComputedStyle(e);
      if (n.w = Math.round(parseInt(o.width, 10) * t), n.h = Math.round(parseInt(o.height, 10) * t), isNaN(n
          .w) || isNaN(n.h)) return
    }
    return n
  }

  function i(e, t, n) {
    const o = t.w % n.x,
      r = t.h % n.y,
      i = Math.max(o ? t.w + (n.x - o) : t.w, n.x),
      c = Math.max(r ? t.h + (n.y - r) : t.h, n.y);
    return e.replace(/\{width\}/g, i).replace(/\{height\}/g, c)
  }
  o.getUrl = function (e, t, n) {
    if (!t) throw new Error("cellSize is required");
    const o = r(n, t);
    if (o) return i(e, o, t)
  }, e.exports = o
}, function (e, t, n) {
  "use strict";
  let o = [],
    r = !1;
  const i = function (e) {
      e.dispatchEvent(new Event("load"))
    },
    c = {
      background: new IntersectionObserver((function (e, t) {
        e.forEach((function (e) {
          e.isIntersecting && (t.unobserve(e.target), i(e.target))
        }))
      }), {
        rootMargin: "50% 0%"
      })
    };
  window.addEventListener("load", (function () {
    o.forEach((function (e) {
      window.requestIdleCallback((function () {
        c.background.unobserve(e), i(e)
      }))
    })), r = !0, o = []
  })), e.exports = {
    background: function (e) {
      if (window.requestIdleCallback) {
        if (r) return void i(e);
        o.push(e)
      }
      c.background.observe(e)
    }
  }
}, function (e, t, n) {
  "use strict";
  e.exports = function (e) {
    return window.VISUAL_COMPLETE ? void e() : (window._vctListeners = window._vctListeners || [], void window
      ._vctListeners.push(e))
  }
}, function (e, t, n) {
  "use strict";
  e.exports = function () {
    window.vctElements--, window.VISUAL_COMPLETE || window.vctElements || (window.VISUAL_COMPLETE = window
      .performance.now(), window._trfd && window._trfd.push({
        vct: window.VISUAL_COMPLETE
      }), window._vctListeners && window._vctListeners.forEach((function (e) {
        e()
      })))
  }
}, function (e, t, n) {
  "use strict";
  const o = new Set,
    r = {},
    i = "undefined" != typeof window && new window.IntersectionObserver((e, t) => {
      e.forEach(e => {
        const {
          target: n,
          isIntersecting: o
        } = e;
        o && (window.Core.utils.renderBootstrap(r[n.id]), delete r[n.id], t.unobserve(n))
      })
    });
  e.exports = function (e, t = !1) {
    const {
      radpack: n,
      elId: c
    } = e;
    n && t && window.radpack.getDeps(n).then(e => {
      e.forEach(e => {
        if (!o.has(e)) {
          const t = document.createElement("link");
          t.rel = "prefetch", t.href = e, t.as = "script", t.crossOrigin = "Anonymous", document.head
            .appendChild(t), o.add(e)
        }
      })
    }), r[c] = e, i.observe(document.getElementById(c))
  }
}]);

"undefined" === typeof _trfq && (window._trfq = []);
"undefined" == typeof _trfd && (window._trfd = []);
"undefined" === typeof _gaDataLayer && (window._gaDataLayer = []);

window._gaDataLayer.push({
  metaData: {
    "commerce": false,
    "hasMessagingWidget": true,
    "headerTreatment": "Fill",
    "hasSlideshow": false,
    "hasFreemiumBanner": false,
    "homepageFirstWidgetType": "INTRODUCTION",
    "homepageFirstWidgetPreset": "introduction1",
    "businessCategory": "health",
    "theme": "layout26",
    "fontPack": "yellowtail",
    "cookieBannerEnabled": true,
    "numberOfPages": 1,
    "publishDate": 1617047771654,
    "hasHomepageShop": false,
    "hasHomepageOla": false,
    "hasHomepageBlog": false,
    "hasShop": false,
    "hasOla": false,
    "planType": "websiteStarter",
    "isHomepage": true
  }
})

function trackingEnabledForType(t) {
  return !("undefined" != typeof document && "click" === t && !Boolean(window._allowCT)) || (window._allowCT = -
    1 !== document.cookie.indexOf("cookie_terms_accepted"), window._allowCT)
}

function logTcclEvent(t, e) {
  var n = e || this.getAttribute("data-tccl");
  if (window._trfq && n) try {
    var o = n.split(","),
      d = o[0],
      r = o[1];
    if (!trackingEnabledForType(r)) return;
    for (var c = o.splice(2), i = [], l = 0; l < c.length; l += 2) i.push([c[l], c[l + 1]]);
    window._trfq.push(["cmdLogEvent", r, d, i])
  } catch (t) {
    window._trfq.push(["cmdLogEvent", "gc_published_site_error", "tccl.published.log", [
      ["error", t.toString()],
      ["data", n]
    ]])
  }
}
"undefined" != typeof window && "undefined" != typeof document && window.addEventListener("DOMContentLoaded",
  function () {
    for (var t = document.querySelectorAll("[data-tccl]"), e = 0; e < t.length; e++) try {
      var n = t[e].getAttribute("data-tccl").split(",");
      t[e].addEventListener(n[1], logTcclEvent)
    } catch (t) {
      window._trfq.push(["cmdLogEvent", "gc_published_site_error", "tccl.published.add", [
        ["error", t.toString()]
      ]])
    }
  });

var radpack = function () {
  "use strict";
  var e = e => e.load ? e.load : e.load = e.url ? new Promise(((r, t) => {
      e.resolve = r, e.reject = t;
      const n = document,
        s = n.createElement("script");
      s.crossOrigin = "Anonymous", s.addEventListener("error", t), s.src = e.url, n.head.appendChild(s)
    })) : Promise.resolve(),
    r = e => {
      const [r, t = 0, n = 0, s = ""] = e;
      return {
        major: r,
        minor: t,
        patch: n,
        release: s,
        version: `${r}.${t}.${n}${s}`,
        array: e,
        tilde: `~${r}${t?`.${t}`:""}`,
        caret: `^${r}`
      }
    },
    t = ({
      major: e,
      minor: r,
      patch: t,
      release: n
    }) => {
      if (n) return [e, r, t, n];
      const s = [e];
      return t ? (s.push(r), s.push(t)) : r && s.push(r), s
    };
  const n = /^([~^]|)(\d+)(?:\.(\d+))?(?:\.(\d+))?([^+]+|)/;
  var s = ({
      exp: e,
      tmp: s
    }, o) => {
      let i = e.get(o);
      if (!i) {
        const {
          id: a,
          name: c,
          path: l,
          version: d
        } = ((e, r) => {
          const t = "$e:" + e;
          let n = r && r.get(t);
          if (!n) {
            const s = e.split("/"),
              o = s[0].startsWith("@") ? s.shift() + "/" : "",
              [i, a] = (s.shift() || "").split("@"),
              c = o + i,
              l = s.join("/") || "index",
              d = "index" === l ? "" : `/${l}`;
            n = {
              id: c + d,
              version: a,
              name: c,
              entry: l,
              path: d
            }, r && r.set(t, n)
          }
          return n
        })(o, s);
        if (d) try {
          let u = [];
          const h = e => `${c}@${e}${l}`,
            {
              prefix: f,
              release: p,
              tilde: v,
              caret: m,
              version: g
            } = ((e, s) => {
              const o = "$v:" + e;
              let i = s && s.get(o);
              if (!i) {
                const [, a, c = 0, l = 0, d = 0, u] = e.match(n);
                i = {
                  prefix: a,
                  ...r(t({
                    major: +c,
                    minor: +l,
                    patch: +d,
                    release: u
                  }))
                }, s && s.set(o, i)
              }
              return i
            })(d, s);
          if (p) u = [h(g)];
          else {
            const e = h(v),
              r = h(m);
            u = "~" === f ? [e, r, a] : [r, e, a]
          }
          let y;
          for (y of u)
            if (i = e.get(y)) break;
          i && console.warn(`resolve called with '${o}', change to '${y}'`)
        } catch {} else i = e.get(a), i && console.warn(`resolve called with '${o}', change to '${a}'`)
      }
      return i
    },
    o = ({
      cache: e
    }, r, t = !0) => {
      const {
        id: n,
        url: s
      } = r, o = s || n;
      let i = e.get(o);
      return t && !i && (i = {
        url: s
      }, e.set(o, i)), i
    };

  function i(e, r) {
    if (Array.isArray(r)) return Promise.all(r.map((r => i(e, r))));
    const t = s(e, r);
    if (!t) return Promise.reject(new Error(`Unable to resolve ${r}`));
    const n = o(e, t);
    return (n.load ? n.load : e.loader(e, t, n)).then((() => n.result || {}))
  }
  var a = (e, r) => {
      const t = s(e, r);
      if (!t) throw new Error(`Unknown export ${r}`);
      return (o(e, t, !1) || {}).result
    },
    c = (e, r, t) => {
      const n = s(e, r);
      if (!n) throw new Error(`Unknown export ${r}`);
      const i = o(e, n);
      i.result = t, i.load || (i.load = Promise.resolve())
    };
  const l = (e, r, t) => {
    const n = s(e, r);
    if (!n) throw new Error(`Unable to resolve ${r}`);
    const {
      id: o = r,
      url: i = !1,
      data: {
        statics: a = []
      }
    } = n;
    t.has(o) || (t.set(o, i), a.forEach((r => {
      l(e, r, t)
    })))
  };
  var d = (e, r) => {
    const t = new Map;
    return [].concat(r || Array.from(e.exp.keys())).forEach((r => l(e, r, t))), Array.from(t.values()).filter(
      Boolean)
  };
  const u = "require",
    h = "exports",
    f = "radpack";

  function p(e, r = [], t, n) {
    const s = [],
      o = {},
      i = {};
    r.forEach((e => {
      if (e === u || e === h || e === f) return;
      const t = r.scope && e.startsWith("~/") ? r.scope + e.substr(1) : e;
      s.push(t), o[e] = t
    }));
    const a = this(s);
    if (t) {
      let e;
      if (r.scope) {
        const t = this;
        e = function (e, ...n) {
          return Object.defineProperty(e, "scope", {
            value: r.scope
          }), t.require(e, ...n)
        }
      }
      a.then((() => {
        t(...r.map((r => {
          switch (r) {
            case u:
              return e || this.require;
            case h:
              return i;
            case f:
              return e ? {
                ...this,
                require: e
              } : this;
            default:
              return this.static(o[r])
          }
        })))
      }))
    }
    n && a.catch(n)
  }

  function v(e, r, t = [], n, i) {
    const a = s(e, r);
    if (!a) return void(i && i(new Error(`Unable to resolve ${r}`)));
    const c = o(e, a, !1),
      l = e.define = Promise.all([e.define, new Promise(((e, s) => {
        const o = ["exports"].concat(t);
        Object.defineProperty(o, "scope", {
          value: a.name
        }), this.require(o, ((t, ...s) => {
          var o;
          n && n(...s), this.set(r, t), e(), null == c || null === (o = c.resolve) || void 0 ===
            o || o.call(c)
        }), (e => {
          var r;
          i && i(e), s(e), null == c || null === (r = c.reject) || void 0 === r || r.call(c, e)
        }))
      }))]).then((() => {
        l === e.define && (e.define = Promise.resolve())
      }))
  }
  const m = ({
    fetch: e,
    loader: r,
    register: t,
    hydrate: n,
    dehydrate: s,
    exp: o = new Map,
    cache: l = new Map,
    tmp: u = new Map,
    registers: h = []
  }) => {
    const f = {
        fetch: e,
        loader: r,
        exp: o,
        cache: l,
        tmp: u,
        registers: h,
        register: Promise.resolve(),
        define: Promise.resolve()
      },
      g = e => g.register().then((() => i(f, e)));
    return f.loader = r.bind(g), g.create = o => m({
      fetch: e,
      loader: r,
      register: t,
      hydrate: n,
      dehydrate: s,
      ...o
    }), g.clone = () => g.register().then((() => g.create({
      exp: new Map(o),
      cache: new Map(l),
      tmp: new Map(u),
      registers: [...h]
    }))), g.register = t.bind(g, f), g.hydrate = n && n.bind(g, f), g.dehydrate = s && (e => g.register()
      .then((() => s.call(g, f, e)))), g.require = p.bind(g, f), g.define = v.bind(g, f), g.static = a.bind(g,
      f), g.set = c.bind(g, f), g.getDepsSync = d.bind(g, f), g.getDeps = e => g.register().then((() => g
      .getDepsSync(e))), g
  };

  function g(e, r, t) {
    const n = new Set;
    r.forEach((r => {
      const {
        data: {
          statics: s = []
        } = {}
      } = r;
      if (s.some((r => {
          const n = e.exp.get(r);
          return n && t.has(n.id)
        }))) {
        const s = o(e, r, !1);
        s && delete s.load, r.id && !t.has(r.id) && n.add(r.id)
      }
    })), n.size && g(e, r, n)
  }
  var y = (e, r, t = !1) => {
      const {
        exp: n,
        cache: s
      } = e, o = new Map, i = Object.keys(r), a = i.reduce(((e, t) => {
        const n = r[t];
        return e.add(n.name), e
      }), new Set);
      Object.keys(t || {}).forEach((e => {
        if (e in r) return;
        const t = n.get(e);
        t && o.set(e, t)
      })), n.forEach((e => {
        a.has(e.name) && !(e.id in r) && o.set(e.id, e)
      })), o.size && (g(e, n, o), o.forEach(((e, r) => {
        s.delete(e.url), n.delete(r)
      }))), i.forEach((e => n.set(e, r[e])))
    },
    w = (e, r) => "index" === r ? e : `${e}/${r}`,
    $ = {
      url: "${baseUrl}/${file}"
    },
    x = (e, {
      resolveEntry: r,
      resolveVersion: t
    }) => Object.keys(e.exports).reduce(((n, s) => {
      const o = e.exports[s],
        i = o.v.map((e => t(e))),
        a = o.d.slice(0),
        c = a.findIndex((e => !Array.isArray(e))),
        l = a.slice(0, ~c ? c : void 0),
        d = {
          vars: {
            ...$,
            ...e.vars
          },
          name: s
        };
      return l.forEach((([e], t) => {
        a[t] = r(e, d)
      })), l.forEach((([e, r]) => {
        const t = ((e, r, {
          name: t,
          vars: n
        }) => ({
          id: w(t, e),
          vars: n,
          name: t,
          entry: e,
          versions: r
        }))(e, r.reduce(((e, {
          v: r,
          u: t = null,
          f: n = null,
          s: s = [],
          d: o = []
        }) => {
          const c = s.map((e => a[e])),
            l = o.map((e => a[e]));
          return [].concat(r).forEach((r => {
            e.push(((e, {
              version: r
            }) => ({
              version: r,
              statics: [],
              dynamics: [],
              ...e
            }))({
              url: t,
              file: n,
              statics: c,
              dynamics: l
            }, {
              version: i[r]
            }))
          })), e
        }), []), d);
        n.push(t)
      })), n
    }), []);
  const E = /\${\s*(\w+)\s*}/g;
  const b = (e, {
      name: r
    }) => w(r, e),
    P = e => {
      const {
        version: t,
        release: n,
        caret: s,
        tilde: o
      } = r(e);
      return {
        version: t,
        versions: n ? [t] : [s, o]
      }
    };

  function j(e) {
    const {
      register: r = !0
    } = e;
    return x(e, {
      resolveEntry: b,
      resolveVersion: P
    }).reduce(((e, {
      vars: t,
      name: n,
      entry: s,
      versions: o
    }) => {
      const i = {
          ...t,
          name: n,
          entry: s
        },
        a = w("", s);
      return o.forEach((s => {
        const {
          version: o,
          file: c
        } = s;
        let l = s.url || c && t.url;
        l = !!l && ((e, r = {}) => e.replace(E, ((e, t) => r[t] || "")))(l, {
          ...i,
          file: c
        });
        const d = {
          url: l,
          data: s,
          name: n,
          internal: !r
        };
        let u = !1;
        c && (u = !0, e[d.id = `${n}/${c}`] = d), [n + a].concat(o.versions.map((e =>
          `${n}@${e}${a}`))).forEach((r => {
          r in e || (e[r] = u ? d : {
            id: r,
            ...d
          })
        }))
      })), e
    }), {})
  }
  const k = ["register", "_id", "_index"],
    A = ["vars", "exports"];
  var M = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" !=
    typeof window ? window : "undefined" != typeof global ? global : Function("return this")();
  const O = m({
    fetch: M.fetch,
    loader: (r, t, n) => {
      const {
        data: {
          statics: s = []
        }
      } = t;
      return Promise.all([e(n), i(r, s)])
    },
    register: (e, r) => {
      if ((r = [].concat(r || [])).length) {
        const t = Promise.all(r.map((r => {
          const t = "string" == typeof r ? {
              url: r
            } : r,
            {
              url: n
            } = t;
          if (n) {
            const r = n.slice(0, n.lastIndexOf("/"));
            return ((e, r, t = !1) => {
              const {
                fetch: n
              } = e, s = o(e, {
                url: r
              }), i = t ? "json" : "text";
              return s.fetch || (s.fetch = n(r).then((e => {
                if (!e.ok) throw new Error(`${r} returned ${e.status}`);
                return e[i]()
              })).then((e => s[i] = e)).catch((e => {
                throw delete s.fetch, e
              })))
            })(e, n, !0).then((e => ((e, r) => [].concat(r).map((r => (e = e || {}, r = r || {}, k
              .forEach((t => {
                const n = null != e[t] ? e[t] : r[t];
                null != n && (r[t] = n)
              })), A.forEach((t => {
                r[t] = Object.assign(r[t] || {}, e[t])
              })), r))))(t, e).map((e => (e.vars.baseUrl = e.vars.baseUrl || r, e))))).catch((e =>
              (console.error("radpack.register.error:", e.message), !1)))
          }
          return Promise.resolve(t).then((e => [].concat(e)))
        })));
        e.register = e.register.then((() => Promise.all([t, Promise.all(Array.from(e.cache.values()).map((
          e => {
            var r, t;
            return null === (r = e.load) || void 0 === r || null === (t = r.catch) ||
              void 0 === t ? void 0 : t.call(r, (() => {}))
          })))]).then((([r]) => {
          r.forEach((r => [].concat(r || []).forEach(((r, t) => ((e, r, t) => {
            if (!r || !r.exports) return;
            let n;
            if (r._index = t, r._id) {
              let t = -1;
              const s = e.registers.find(((e, n) => e._id === r._id && e._index === r
                ._index && (t = n, !0)));
              s && (n = j(s)), t > -1 ? e.registers[t] = r : e.registers.push(r)
            }
            y(e, j(r), n)
          })(e, r, t)))))
        }))))
      }
      const t = e.register;
      return Promise.resolve(t).then((() => {
        e.register === t && (e.register = Promise.resolve())
      }))
    },
    hydrate: function (e, r) {
      return this.register(r || [])
    }
  });
  return M.define = O.define, O
}();
window.cxs && window.cxs.setOptions({
  prefix: "c2-"
});
window.wsb = window.wsb || {};
window.wsb["Theme26"] = window.wsb["Theme26"] || window.radpack("@widget/LAYOUT/bs-layout26-Theme-publish-Theme")
  .then(function (t) {
    return new t.default();
  });

window.wsb["DynamicFontScaler"] = function ({
  containerId: e,
  targetId: t,
  fontSizes: a,
  maxLines: o,
  prioritizeDefault: r
}) {
  if ("undefined" == typeof document) return;
  const l = document.getElementById(e),
    n = document.getElementById(t);
  let i = document.querySelector(`#${t}-style`);
  const s = n ? n.getAttribute("data-last-size") : "";

  function c(e) {
    return function (e) {
      const t = parseInt(p(e, "padding-left") || 0, 10),
        a = parseInt(p(e, "padding-right") || 0, 10);
      return e.scrollWidth + t + a
    }(e) <= l.clientWidth && function (e) {
      const t = e.offsetHeight,
        a = parseInt(p(e, "line-height"), 10) || 1;
      return Math.floor(t / a)
    }(e) <= o
  }

  function g() {
    if (!l || !n) return;
    if (n.hasAttribute("data-font-scaled")) return void

    function () {
      if (!s) return;
      n.removeAttribute("data-last-size"), i && (i.parentNode.removeChild(i), i = null)
    }();
    const o = Array.prototype.slice.call(l.querySelectorAll(`[data-scaler-id="scaler-${e}"]`)).sort(((e, t) => a
      .indexOf(e.getAttribute("data-size")) - a.indexOf(t.getAttribute("data-size"))));
    if (l.clientWidth && o.length) {
      const e = l.style.width || "";
      l.style.width = "100%", o.forEach((e => {
        e.style.display = "inline-block", e.style.maxWidth = `${l.clientWidth}px`
      }));
      const a = function (e) {
        return e.find(c) || e[e.length - 1]
      }(o);
      ! function (e) {
        e.forEach((e => {
          e.style.display = "none", e.style.maxWidth = ""
        }))
      }(o), l.style.width = e;
      const g = p(a, "font-size");
      if (g && g !== s) {
        if (r) {
          const e = p(n, "font-size");
          if (parseInt(g, 10) >= parseInt(e, 10)) return
        }
        n.setAttribute("data-last-size", g), i || (i = document.createElement("style"), i.id = `${t}-style`,
          document.head.appendChild(i)), i.textContent = `#${n.id} { font-size: ${g} !important; }`
      }
    }
  }

  function p(e, t) {
    return document.defaultView.getComputedStyle(e).getPropertyValue(t)
  }
  if (g(), window.ResizeObserver && l) {
    new ResizeObserver((() => {
      window.requestAnimationFrame(g)
    })).observe(l)
  } else window.addEventListener("resize", g)
};
window.wsb["DynamicFontScaler"](JSON.parse(
  "{\"containerId\":\"tagline-container-6503\",\"targetId\":\"dynamic-tagline-6504\",\"fontSizes\":[\"medium\",\"small\",\"xsmall\"],\"maxLines\":4}"
));
Number(window.vctElements) || (window.vctElements = 0), window.vctElements++, window.markVisuallyComplete();
window.wsb["CookieBannerScript"] = function ({
  id: e,
  acceptCookie: t,
  dismissCookie: o
}) {
  let a, n, i;

  function l(e, t = 60) {
    const o = new Date;
    o.setTime(o.getTime() + 864e5 * t);
    const a = `expires=${o.toUTCString()}`;
    document.cookie = `${e}=true;${a};path=/`
  }

  function r(e) {
    return document.cookie.includes(e)
  }

  function s() {
    n && n.removeEventListener("click", c), i && i.removeEventListener("click", p), a.style.display = "none"
  }

  function c(e) {
    e.preventDefault(), g(), l(o), l(t), s()
  }

  function p(e) {
    var a;
    e.preventDefault(), l(o), r(t) && (a = t, document.cookie =
      `${a}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`), s()
  }

  function g() {
    if (window._allowCT = !0, "function" == typeof window.fbq && window.fbq("consent", "grant"), void 0 !== window
      ._gaID) {
      const e = void 0 !== window.ga,
        t = void 0 !== window.gtag;
      (t || e) && (window[`ga-disable-${window._gaID}`] = !1), e && (window.ga("create", window._gaID, "auto"),
        window.ga("send", "pageview")), t && window.gtag("config", window._gaID)
    }
  }
  r(t) ? g() : r(o) || setTimeout((() => {
    a = document.getElementById(`${e}-banner`), n = document.getElementById(`${e}-accept`), i = document
      .getElementById(`${e}-decline`), n && n.addEventListener("click", c), i && i.addEventListener("click",
        p), a.style.transform = "translateY(-500px)"
  }), 200)
};
window.wsb["CookieBannerScript"](JSON.parse(
  "{\"id\":\"1238b14c-5615-4ac6-b13e-e0ff4ec44e2f\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"
));
window.wsb['context-bs-1'] = JSON.parse(
  "{\"renderMode\":\"PUBLISH\",\"fonts\":[\"yellowtail\",\"default\",\"cinzel\"],\"colors\":[\"#43555f\"],\"fontScale\":\"medium\",\"locale\":\"en-US\",\"language\":\"en\",\"internalLinks\":{},\"isHomepage\":true,\"navigationMap\":{\"8c2592d1-090d-4798-ac26-d413467db7eb\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"8c2592d1-090d-4798-ac26-d413467db7eb\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"fonts\":{\"primary\":{\"id\":\"yellowtail\",\"description\":\"\",\"tags\":[\"handwriting\",\"casual\"],\"meta\":{\"order\":41,\"primary\":{\"id\":\"yellowtail\",\"name\":\"Yellowtail\",\"url\":\"//fonts.googleapis.com/css?family=Yellowtail&display=swap\",\"family\":\"'Yellowtail', serif, system-ui\",\"size\":19,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"lora\",\"name\":\"Lora\",\"url\":\"//fonts.googleapis.com/css?family=Lora:400,400i,700,700i&display=swap\",\"family\":\"Lora, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}},\"logo\":{\"id\":\"cinzel\",\"description\":\"\",\"tags\":[\"serif\",\"elegant\"],\"meta\":{\"order\":8,\"logo\":{\"id\":\"cinzel\",\"name\":\"Cinzel\",\"url\":\"//fonts.googleapis.com/css?family=Cinzel:400&display=swap\",\"family\":\"'Cinzel', Georgia, serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"2px\",\"textTransform\":\"uppercase\",\"fontWeight\":400,\"fontSize\":\"xlarge\"}}}}},\"colors\":[{\"id\":\"#43555f\",\"meta\":{\"primary\":\"rgb(67, 85, 95)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}]},\"theme\":\"Theme26\"}"
);
! function (e, t) {
  Core.utils.renderBootstrap({
    elId: 'bs-1',
    componentName: '@widget/MESSAGING/bs-Component',
    props: e,
    context: t,
    contextKey: 'context-bs-1',
    radpack: "@widget/MESSAGING/bs-Component"
  });
}(JSON.parse(
  "{\"config\":{\"formSubmitEndpoint\":\"/messaging\",\"contactsHost\":\"https://contacts.godaddy.com\",\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"generateUrlHost\":\"https://url-generator.apps.secureserver.net\",\"vNextApiHost\":\"https://websites.api.godaddy.com\"},\"upgradeable\":false,\"preset\":\"messaging1\",\"order\":0,\"id\":\"93753359-1499-40c3-87f7-94bd2c73778c\",\"env\":\"production\",\"isMobile\":null,\"websiteId\":\"a0b9dd5c-ce4a-40d0-b6cd-4b74dacfc14b\",\"accountId\":\"21686c01-8e42-11eb-8213-3417ebe7253b\",\"isReseller\":false,\"domainName\":\"medequipconsulting.com\",\"staticContent\":{\"submitButtonLoadingLabel\":\"Sending\",\"infoStartTitle\":\"Conversations\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"infoStartDesc\":\"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.\",\"infoStartTag\":\"New\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"contactsLinkInfoMessaging\":\"Contacts from your website messaging form are captured in Connections.\",\"defaultSubmitButtonLabel\":\"Send\",\"endOfChat\":\"end of chat\",\"infoConnectedDesc\":\"You are connected to the Conversations mobile app and are currently receiving all website messages there.\",\"infoRecommendedTag\":\"Recommended\",\"infoStartLink\":\"Get Started\",\"phoneUsOnlyValidationErrorMessage\":\"Please enter a valid U.S. mobile phone number.\",\"infoIncludedTag\":\"Included\",\"infoPublishRequiredDesc\":\"A publish is needed in order to complete this first step of enabling this feature.\",\"infoPendingLoginDesc\":\"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.\",\"termsOfSerivce\":\"Terms of Service\",\"infoUnavailableDesc\":\"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"infoUnavailableTitle\":\"Conversations\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"infoUnavailableTag\":\"Unavailable\",\"contactsLinkText\":\"Manage my contacts\",\"privacyPolicy\":\"Privacy Policy\",\"infoPublishRequiredLink\":\"Publish Now\",\"infoPendingLoginLink\":\"Resend Link\",\"infoConnectedTitle\":\"Conversations Mobile App\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"messagesRatesLegalDisclosure\":\"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\",\"infoConnectedTag\":\"Connected\"},\"businessName\":\"Med-eQuip Consulting\",\"emailConfirmationMessage\":\"We've sent you a confirmation email, please click the link to verify your address.\",\"recaptchaType\":\"V3\",\"formFields\":[{\"keyName\":\"name\",\"type\":\"SINGLE_LINE\",\"label\":\"Name\",\"validation\":\"required\",\"required\":true},{\"keyName\":\"phone\",\"type\":\"PHONE\",\"label\":\"Mobile\",\"validation\":\"phone\",\"required\":true},{\"keyName\":\"email\",\"type\":\"EMAIL\",\"label\":\"Email\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"keyName\":\"message\",\"type\":\"MULTI_LINE\",\"label\":\"How can we help?\",\"validation\":\"required\",\"required\":true},{\"type\":\"SUBMIT\",\"label\":\"Send\"}],\"notificationPreference\":\"EMAIL\",\"formEmail\":\"quinn@medequipconsulting.com\",\"welcomeMessage\":\"Hi! Let us know how we can help and we\u2019ll respond shortly.\",\"formSuccessMessage\":\"{\\\"blocks\\\":[{\\\"key\\\":\\\"9c0es\\\",\\\"text\\\":\\\"Thank you for the message. One of our consultants will be following up with you momentarily \\\",\\\"type\\\":\\\"unstyled\\\",\\\"depth\\\":0,\\\"inlineStyleRanges\\\":[],\\\"entityRanges\\\":[],\\\"data\\\":{}}],\\\"entityMap\\\":{}}\",\"emailOptInEnabled\":true,\"emailOptInMessage\":\"Sign up to receive email updates, announcements, and more.\",\"widgetId\":\"93753359-1499-40c3-87f7-94bd2c73778c\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-US\",\"renderMode\":\"PUBLISH\"}"
), JSON.parse(
  "{\"widgetId\":\"93753359-1499-40c3-87f7-94bd2c73778c\",\"widgetType\":\"MESSAGING\",\"widgetPreset\":\"messaging1\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"SOLID\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}}},\"widgetThemeOverrides\":{}}"
));
document.getElementById('page-6499').addEventListener('click', function () {}, false);
var imageObserver = new IntersectionObserver((e, t) => {
  e.forEach(e => {
    if (e.isIntersecting) {
      var r = e.target;
      r.src = r.getAttribute("data-srclazy"), r.srcset = r.getAttribute("data-srcsetlazy") || "", r
        .removeAttribute("data-srclazy"), r.removeAttribute("data-srcsetlazy"), t.unobserve(r)
    }
  })
}, {
  rootMargin: "150px"
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-srclazy]").forEach(e => imageObserver.observe(e))
});

function tccl_dpsid() {
  for (var t = "dps_site_id=", i = document.cookie.split(";"), e = 0; e < i.length; e++) {
    for (var n = i[e];
      " " == n.charAt(0);) n = n.substring(1);
    if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
  }
  return null
}
_trfd.push({
  "tccl.baseHost": "secureserver.net"
}), _trfd.push({
  "websiteId": "a0b9dd5c-ce4a-40d0-b6cd-4b74dacfc14b"
}), _trfd.push({
  "pd": "2021-03-29T19:56:12.777Z"
}), _trfd.push({
  ap: "IPv2",
  ds: tccl_dpsid() || "-1"
});

function addTccl() {
  if (Number(window.vctElements) && !window.VISUAL_COMPLETE) {
    setTimeout(addTccl, 500)
  } else {
    var t = document.createElement("script");
    t.setAttribute("src", "//img1.wsimg.com/tcc/tcc_l.combined.1.0.6.min.js");
    document.body.appendChild(t)
  }
}
addTccl();
_trfd.push({
  "meta.numWidgets": 4,
  "meta.theme": "layout26",
  "meta.headerMediaType": "Image",
  "meta.isOLS": false,
  "meta.isOLA": false,
  "meta.isMembership": false
})
