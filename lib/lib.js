!function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = "length" in t && t.length,
            n = Z.type(t);
        return "function" === n || Z.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }
    function r(t, e, n) {
        if (Z.isFunction(e)) return Z.grep(t, function(t, r) {
            return !!e.call(t, r, t) !== n
        });
        if (e.nodeType) return Z.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (at.test(e)) return Z.filter(e, t, n);
            e = Z.filter(e, t)
        }
        return Z.grep(t, function(t) {
            return z.call(e, t) >= 0 !== n
        })
    }
    function i(t, e) {
        for (;
        (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    function o(t) {
        var e = dt[t] = {};
        return Z.each(t.match(pt) || [], function(t, n) {
            e[n] = !0
        }), e
    }
    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1), Z.ready()
    }
    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Z.expando + a.uid++
    }
    function l(t, e, n) {
        var r;
        if (void 0 === n && 1 === t.nodeType) if (r = "data-" + e.replace(bt, "-$1").toLowerCase(), n = t.getAttribute(r), "string" == typeof n) {
            try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : wt.test(n) ? Z.parseJSON(n) : n
            } catch (i) {}
            yt.set(t, e, n)
        } else n = void 0;
        return n
    }
    function u() {
        return !0
    }
    function c() {
        return !1
    }
    function f() {
        try {
            return J.activeElement
        } catch (t) {}
    }
    function h(t, e) {
        return Z.nodeName(t, "table") && Z.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function p(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }
    function d(t) {
        var e = Ot.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }
    function g(t, e) {
        for (var n = 0, r = t.length; r > n; n++) mt.set(t[n], "globalEval", !e || mt.get(e[n], "globalEval"))
    }
    function v(t, e) {
        var n, r, i, o, s, a, l, u;
        if (1 === e.nodeType) {
            if (mt.hasData(t) && (o = mt.access(t), s = mt.set(e, o), u = o.events)) {
                delete s.handle, s.events = {};
                for (i in u) for (n = 0, r = u[i].length; r > n; n++) Z.event.add(e, i, u[i][n])
            }
            yt.hasData(t) && (a = yt.access(t), l = Z.extend({}, a), yt.set(e, l))
        }
    }
    function m(t, e) {
        var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && Z.nodeName(t, e) ? Z.merge([t], n) : n
    }
    function y(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Tt.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }
    function w(e, n) {
        var r, i = Z(n.createElement(e)).appendTo(n.body),
            o = t.getDefaultComputedStyle && (r = t.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
        return i.detach(), o
    }
    function b(t) {
        var e = J,
            n = _t[t];
        return n || (n = w(t, e), "none" !== n && n || (Ft = (Ft || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ft[0].contentDocument, e.write(), e.close(), n = w(t, e), Ft.detach()), _t[t] = n), n
    }
    function x(t, e, n) {
        var r, i, o, s, a = t.style;
        return n = n || Qt(t), n && (s = n.getPropertyValue(e) || n[e]), n && ("" !== s || Z.contains(t.ownerDocument, t) || (s = Z.style(t, e)), Rt.test(s) && qt.test(e) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }
    function A(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    function C(t, e) {
        if (e in t) return e;
        for (var n = e[0].toUpperCase() + e.slice(1), r = e, i = Vt.length; i--;) if (e = Vt[i] + n, e in t) return e;
        return r
    }
    function T(t, e, n) {
        var r = Wt.exec(e);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
    }
    function E(t, e, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += Z.css(t, n + At[o], !0, i)), r ? ("content" === n && (s -= Z.css(t, "padding" + At[o], !0, i)), "margin" !== n && (s -= Z.css(t, "border" + At[o] + "Width", !0, i))) : (s += Z.css(t, "padding" + At[o], !0, i), "padding" !== n && (s += Z.css(t, "border" + At[o] + "Width", !0, i)));
        return s
    }
    function k(t, e, n) {
        var r = !0,
            i = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = Qt(t),
            s = "border-box" === Z.css(t, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = x(t, e, o), (0 > i || null == i) && (i = t.style[e]), Rt.test(i)) return i;
            r = s && (X.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
        }
        return i + E(t, e, n || (s ? "border" : "content"), r, o) + "px"
    }
    function S(t, e) {
        for (var n, r, i, o = [], s = 0, a = t.length; a > s; s++) r = t[s], r.style && (o[s] = mt.get(r, "olddisplay"), n = r.style.display, e ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ct(r) && (o[s] = mt.access(r, "olddisplay", b(r.nodeName)))) : (i = Ct(r), "none" === n && i || mt.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
        for (s = 0; a > s; s++) r = t[s], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[s] || "" : "none"));
        return t
    }
    function D(t, e, n, r, i) {
        return new D.prototype.init(t, e, n, r, i)
    }
    function j() {
        return setTimeout(function() {
            Xt = void 0
        }), Xt = Z.now()
    }
    function N(t, e) {
        var n, r = 0,
            i = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = At[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }
    function I(t, e, n) {
        for (var r, i = (ne[e] || []).concat(ne["*"]), o = 0, s = i.length; s > o; o++) if (r = i[o].call(n, e, t)) return r
    }
    function $(t, e, n) {
        var r, i, o, s, a, l, u, c, f = this,
            h = {},
            p = t.style,
            d = t.nodeType && Ct(t),
            g = mt.get(t, "fxshow");
        n.queue || (a = Z._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, f.always(function() {
            f.always(function() {
                a.unqueued--, Z.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = Z.css(t, "display"), c = "none" === u ? mt.get(t, "olddisplay") || b(t.nodeName) : u, "inline" === c && "none" === Z.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in e) if (i = e[r], Gt.exec(i)) {
            if (delete e[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                if ("show" !== i || !g || void 0 === g[r]) continue;
                d = !0
            }
            h[r] = g && g[r] || Z.style(t, r)
        } else u = void 0;
        if (Z.isEmptyObject(h))"inline" === ("none" === u ? b(t.nodeName) : u) && (p.display = u);
        else {
            g ? "hidden" in g && (d = g.hidden) : g = mt.access(t, "fxshow", {}), o && (g.hidden = !d), d ? Z(t).show() : f.done(function() {
                Z(t).hide()
            }), f.done(function() {
                var e;
                mt.remove(t, "fxshow");
                for (e in h) Z.style(t, e, h[e])
            });
            for (r in h) s = I(d ? g[r] : 0, r, f), r in g || (g[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function L(t, e) {
        var n, r, i, o, s;
        for (n in t) if (r = Z.camelCase(n), i = e[r], o = t[n], Z.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), s = Z.cssHooks[r], s && "expand" in s) {
            o = s.expand(o), delete t[r];
            for (n in o) n in t || (t[n] = o[n], e[n] = i)
        } else e[r] = i
    }
    function B(t, e, n) {
        var r, i, o = 0,
            s = ee.length,
            a = Z.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var e = Xt || j(), n = Math.max(0, u.startTime + u.duration - e), r = n / u.duration || 0, o = 1 - r, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
                return a.notifyWith(t, [u, o, n]), 1 > o && l ? n : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: Z.extend({}, e),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Xt || j(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var r = Z.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(e) {
                    var n = 0,
                        r = e ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (L(c, u.opts.specialEasing); s > o; o++) if (r = ee[o].call(u, t, c, u.opts)) return r;
        return Z.map(c, I, u), Z.isFunction(u.opts.start) && u.opts.start.call(t, u), Z.fx.timer(Z.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function P(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var r, i = 0,
                o = e.toLowerCase().match(pt) || [];
            if (Z.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
        }
    }
    function O(t, e, n, r) {
        function i(a) {
            var l;
            return o[a] = !0, Z.each(t[a] || [], function(t, a) {
                var u = a(e, n, r);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var o = {},
            s = t === we;
        return i(e.dataTypes[0]) || !o["*"] && i("*")
    }
    function M(t, e) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
        return r && Z.extend(!0, t, r), t
    }
    function H(t, e, n) {
        for (var r, i, o, s, a = t.contents, l = t.dataTypes;
        "*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r) for (i in a) if (a[i] && a[i].test(r)) {
            l.unshift(i);
            break
        }
        if (l[0] in n) o = l[0];
        else {
            for (i in n) {
                if (!l[0] || t.converters[i + " " + l[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }
    function F(t, e, n, r) {
        var i, o, s, a, l, u = {},
            c = t.dataTypes.slice();
        if (c[1]) for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
            if (s = u[l + " " + o] || u["* " + o], !s) for (i in u) if (a = i.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                s === !0 ? s = u[i] : u[i] !== !0 && (o = a[0], c.unshift(a[1]));
                break
            }
            if (s !== !0) if (s && t["throws"]) e = s(e);
            else try {
                e = s(e)
            } catch (f) {
                return {
                    state: "parsererror",
                    error: s ? f : "No conversion from " + l + " to " + o
                }
            }
        }
        return {
            state: "success",
            data: e
        }
    }
    function _(t, e, n, r) {
        var i;
        if (Z.isArray(e)) Z.each(e, function(e, i) {
            n || Te.test(t) ? r(t, i) : _(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, r)
        });
        else if (n || "object" !== Z.type(e)) r(t, e);
        else for (i in e) _(t + "[" + i + "]", e[i], n, r)
    }
    function q(t) {
        return Z.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var R = [],
        Q = R.slice,
        U = R.concat,
        W = R.push,
        z = R.indexOf,
        K = {},
        Y = K.toString,
        V = K.hasOwnProperty,
        X = {},
        J = t.document,
        G = "2.1.4",
        Z = function(t, e) {
            return new Z.fn.init(t, e)
        },
        tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        et = /^-ms-/,
        nt = /-([\da-z])/gi,
        rt = function(t, e) {
            return e.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: G,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
        },
        pushStack: function(t) {
            var e = Z.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return Z.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(Z.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: W,
        sort: R.sort,
        splice: R.splice
    }, Z.extend = Z.fn.extend = function() {
        var t, e, n, r, i, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++) if (null != (t = arguments[a])) for (e in t) n = s[e], r = t[e], s !== r && (u && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[e] = Z.extend(u, o, r)) : void 0 !== r && (s[e] = r));
        return s
    }, Z.extend({
        expando: "jQuery" + (G + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === Z.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !Z.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(t) {
            return "object" !== Z.type(t) || t.nodeType || Z.isWindow(t) ? !1 : t.constructor && !V.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? K[Y.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, n = eval;
            t = Z.trim(t), t && (1 === t.indexOf("use strict") ? (e = J.createElement("script"), e.text = t, J.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function(t) {
            return t.replace(et, "ms-").replace(nt, rt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, r) {
            var i, o = 0,
                s = t.length,
                a = n(t);
            if (r) {
                if (a) for (; s > o && (i = e.apply(t[o], r), i !== !1); o++);
                else for (o in t) if (i = e.apply(t[o], r), i === !1) break
            } else if (a) for (; s > o && (i = e.call(t[o], o, t[o]), i !== !1); o++);
            else for (o in t) if (i = e.call(t[o], o, t[o]), i === !1) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(tt, "")
        },
        makeArray: function(t, e) {
            var r = e || [];
            return null != t && (n(Object(t)) ? Z.merge(r, "string" == typeof t ? [t] : t) : W.call(r, t)), r
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : z.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, r = 0, i = t.length; n > r; r++) t[i++] = e[r];
            return t.length = i, t
        },
        grep: function(t, e, n) {
            for (var r, i = [], o = 0, s = t.length, a = !n; s > o; o++) r = !e(t[o], o), r !== a && i.push(t[o]);
            return i
        },
        map: function(t, e, r) {
            var i, o = 0,
                s = t.length,
                a = n(t),
                l = [];
            if (a) for (; s > o; o++) i = e(t[o], o, r), null != i && l.push(i);
            else for (o in t) i = e(t[o], o, r), null != i && l.push(i);
            return U.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, r, i;
            return "string" == typeof e && (n = t[e], e = t, t = n), Z.isFunction(t) ? (r = Q.call(arguments, 2), i = function() {
                return t.apply(e || this, r.concat(Q.call(arguments)))
            }, i.guid = t.guid = t.guid || Z.guid++, i) : void 0
        },
        now: Date.now,
        support: X
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        K["[object " + e + "]"] = e.toLowerCase()
    });
    var it = function(t) {
            function e(t, e, n, r) {
                var i, o, s, a, l, u, f, p, d, g;
                if ((e ? e.ownerDocument || e : _) !== $ && I(e), e = e || $, n = n || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return n;
                if (!r && B) {
                    if (11 !== a && (i = yt.exec(t))) if (s = i[1]) {
                        if (9 === a) {
                            if (o = e.getElementById(s), !o || !o.parentNode) return n;
                            if (o.id === s) return n.push(o), n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && H(e, o) && o.id === s) return n.push(o), n
                    } else {
                        if (i[2]) return G.apply(n, e.getElementsByTagName(t)), n;
                        if ((s = i[3]) && x.getElementsByClassName) return G.apply(n, e.getElementsByClassName(s)), n
                    }
                    if (x.qsa && (!P || !P.test(t))) {
                        if (p = f = F, d = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (u = E(t), (f = e.getAttribute("id")) ? p = f.replace(bt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;) u[l] = p + h(u[l]);
                            d = wt.test(t) && c(e.parentNode) || e, g = u.join(",")
                        }
                        if (g) try {
                            return G.apply(n, d.querySelectorAll(g)), n
                        } catch (v) {} finally {
                            f || e.removeAttribute("id")
                        }
                    }
                }
                return S(t.replace(lt, "$1"), e, n, r)
            }
            function n() {
                function t(n, r) {
                    return e.push(n + " ") > A.cacheLength && delete t[e.shift()], t[n + " "] = r
                }
                var e = [];
                return t
            }
            function r(t) {
                return t[F] = !0, t
            }
            function i(t) {
                var e = $.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }
            function o(t, e) {
                for (var n = t.split("|"), r = t.length; r--;) A.attrHandle[n[r]] = e
            }
            function s(t, e) {
                var n = e && t,
                    r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || K) - (~t.sourceIndex || K);
                if (r) return r;
                if (n) for (; n = n.nextSibling;) if (n === e) return -1;
                return t ? 1 : -1
            }
            function a(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }
            function l(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }
            function u(t) {
                return r(function(e) {
                    return e = +e, r(function(n, r) {
                        for (var i, o = t([], n.length, e), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            function c(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }
            function f() {}
            function h(t) {
                for (var e = 0, n = t.length, r = ""; n > e; e++) r += t[e].value;
                return r
            }
            function p(t, e, n) {
                var r = e.dir,
                    i = n && "parentNode" === r,
                    o = R++;
                return e.first ?
                function(e, n, o) {
                    for (; e = e[r];) if (1 === e.nodeType || i) return t(e, n, o)
                } : function(e, n, s) {
                    var a, l, u = [q, o];
                    if (s) {
                        for (; e = e[r];) if ((1 === e.nodeType || i) && t(e, n, s)) return !0
                    } else for (; e = e[r];) if (1 === e.nodeType || i) {
                        if (l = e[F] || (e[F] = {}), (a = l[r]) && a[0] === q && a[1] === o) return u[2] = a[2];
                        if (l[r] = u, u[2] = t(e, n, s)) return !0
                    }
                }
            }
            function d(t) {
                return t.length > 1 ?
                function(e, n, r) {
                    for (var i = t.length; i--;) if (!t[i](e, n, r)) return !1;
                    return !0
                } : t[0]
            }
            function g(t, n, r) {
                for (var i = 0, o = n.length; o > i; i++) e(t, n[i], r);
                return r
            }
            function v(t, e, n, r, i) {
                for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(o = t[a]) && (!n || n(o, r, i)) && (s.push(o), u && e.push(a));
                return s
            }
            function m(t, e, n, i, o, s) {
                return i && !i[F] && (i = m(i)), o && !o[F] && (o = m(o, s)), r(function(r, s, a, l) {
                    var u, c, f, h = [],
                        p = [],
                        d = s.length,
                        m = r || g(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !r && e ? m : v(m, h, t, a, l),
                        w = n ? o || (r ? t : d || i) ? [] : s : y;
                    if (n && n(y, w, a, l), i) for (u = v(w, p), i(u, [], a, l), c = u.length; c--;)(f = u[c]) && (w[p[c]] = !(y[p[c]] = f));
                    if (r) {
                        if (o || t) {
                            if (o) {
                                for (u = [], c = w.length; c--;)(f = w[c]) && u.push(y[c] = f);
                                o(null, w = [], u, l)
                            }
                            for (c = w.length; c--;)(f = w[c]) && (u = o ? tt(r, f) : h[c]) > -1 && (r[u] = !(s[u] = f))
                        }
                    } else w = v(w === s ? w.splice(d, w.length) : w), o ? o(null, s, w, l) : G.apply(s, w)
                })
            }
            function y(t) {
                for (var e, n, r, i = t.length, o = A.relative[t[0].type], s = o || A.relative[" "], a = o ? 1 : 0, l = p(function(t) {
                    return t === e
                }, s, !0), u = p(function(t) {
                    return tt(e, t) > -1
                }, s, !0), c = [function(t, n, r) {
                    var i = !o && (r || n !== D) || ((e = n).nodeType ? l(t, n, r) : u(t, n, r));
                    return e = null, i
                }]; i > a; a++) if (n = A.relative[t[a].type]) c = [p(d(c), n)];
                else {
                    if (n = A.filter[t[a].type].apply(null, t[a].matches), n[F]) {
                        for (r = ++a; i > r && !A.relative[t[r].type]; r++);
                        return m(a > 1 && d(c), a > 1 && h(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(lt, "$1"), n, r > a && y(t.slice(a, r)), i > r && y(t = t.slice(r)), i > r && h(t))
                    }
                    c.push(n)
                }
                return d(c)
            }
            function w(t, n) {
                var i = n.length > 0,
                    o = t.length > 0,
                    s = function(r, s, a, l, u) {
                        var c, f, h, p = 0,
                            d = "0",
                            g = r && [],
                            m = [],
                            y = D,
                            w = r || o && A.find.TAG("*", u),
                            b = q += null == y ? 1 : Math.random() || .1,
                            x = w.length;
                        for (u && (D = s !== $ && s); d !== x && null != (c = w[d]); d++) {
                            if (o && c) {
                                for (f = 0; h = t[f++];) if (h(c, s, a)) {
                                    l.push(c);
                                    break
                                }
                                u && (q = b)
                            }
                            i && ((c = !h && c) && p--, r && g.push(c))
                        }
                        if (p += d, i && d !== p) {
                            for (f = 0; h = n[f++];) h(g, m, s, a);
                            if (r) {
                                if (p > 0) for (; d--;) g[d] || m[d] || (m[d] = X.call(l));
                                m = v(m)
                            }
                            G.apply(l, m), u && !r && m.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                        }
                        return u && (q = b, D = y), g
                    };
                return i ? r(s) : s
            }
            var b, x, A, C, T, E, k, S, D, j, N, I, $, L, B, P, O, M, H, F = "sizzle" + 1 * new Date,
                _ = t.document,
                q = 0,
                R = 0,
                Q = n(),
                U = n(),
                W = n(),
                z = function(t, e) {
                    return t === e && (N = !0), 0
                },
                K = 1 << 31,
                Y = {}.hasOwnProperty,
                V = [],
                X = V.pop,
                J = V.push,
                G = V.push,
                Z = V.slice,
                tt = function(t, e) {
                    for (var n = 0, r = t.length; r > n; n++) if (t[n] === e) return n;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                it = rt.replace("w", "w#"),
                ot = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                st = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                at = new RegExp(nt + "+", "g"),
                lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                ut = new RegExp("^" + nt + "*," + nt + "*"),
                ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                ht = new RegExp(st),
                pt = new RegExp("^" + it + "$"),
                dt = {
                    ID: new RegExp("^#(" + rt + ")"),
                    CLASS: new RegExp("^\\.(" + rt + ")"),
                    TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ot),
                    PSEUDO: new RegExp("^" + st),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                },
                gt = /^(?:input|select|textarea|button)$/i,
                vt = /^h\d$/i,
                mt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                wt = /[+~]/,
                bt = /'|\\/g,
                xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                At = function(t, e, n) {
                    var r = "0x" + e - 65536;
                    return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                Ct = function() {
                    I()
                };
            try {
                G.apply(V = Z.call(_.childNodes), _.childNodes), V[_.childNodes.length].nodeType
            } catch (Tt) {
                G = {
                    apply: V.length ?
                    function(t, e) {
                        J.apply(t, Z.call(e))
                    } : function(t, e) {
                        for (var n = t.length, r = 0; t[n++] = e[r++];);
                        t.length = n - 1
                    }
                }
            }
            x = e.support = {}, T = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, I = e.setDocument = function(t) {
                var e, n, r = t ? t.ownerDocument || t : _;
                return r !== $ && 9 === r.nodeType && r.documentElement ? ($ = r, L = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), B = !T(r), x.attributes = i(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = i(function(t) {
                    return t.appendChild(r.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = mt.test(r.getElementsByClassName), x.getById = i(function(t) {
                    return L.appendChild(t).id = F, !r.getElementsByName || !r.getElementsByName(F).length
                }), x.getById ? (A.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && B) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, A.filter.ID = function(t) {
                    var e = t.replace(xt, At);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete A.find.ID, A.filter.ID = function(t) {
                    var e = t.replace(xt, At);
                    return function(t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), A.find.TAG = x.getElementsByTagName ?
                function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, r = [],
                        i = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, A.find.CLASS = x.getElementsByClassName &&
                function(t, e) {
                    return B ? e.getElementsByClassName(t) : void 0
                }, O = [], P = [], (x.qsa = mt.test(r.querySelectorAll)) && (i(function(t) {
                    L.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || P.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + F + "-]").length || P.push("~="), t.querySelectorAll(":checked").length || P.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || P.push(".#.+[+~]")
                }), i(function(t) {
                    var e = r.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && P.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), P.push(",.*:")
                })), (x.matchesSelector = mt.test(M = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(t) {
                    x.disconnectedMatch = M.call(t, "div"), M.call(t, "[s!='']:x"), O.push("!=", st)
                }), P = P.length && new RegExp(P.join("|")), O = O.length && new RegExp(O.join("|")), e = mt.test(L.compareDocumentPosition), H = e || mt.test(L.contains) ?
                function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        r = e && e.parentNode;
                    return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                } : function(t, e) {
                    if (e) for (; e = e.parentNode;) if (e === t) return !0;
                    return !1
                }, z = e ?
                function(t, e) {
                    if (t === e) return N = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === r || t.ownerDocument === _ && H(_, t) ? -1 : e === r || e.ownerDocument === _ && H(_, e) ? 1 : j ? tt(j, t) - tt(j, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return N = !0, 0;
                    var n, i = 0,
                        o = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        u = [e];
                    if (!o || !a) return t === r ? -1 : e === r ? 1 : o ? -1 : a ? 1 : j ? tt(j, t) - tt(j, e) : 0;
                    if (o === a) return s(t, e);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (n = e; n = n.parentNode;) u.unshift(n);
                    for (; l[i] === u[i];) i++;
                    return i ? s(l[i], u[i]) : l[i] === _ ? -1 : u[i] === _ ? 1 : 0
                }, r) : $
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== $ && I(t), n = n.replace(ft, "='$1']"), x.matchesSelector && B && (!O || !O.test(n)) && (!P || !P.test(n))) try {
                    var r = M.call(t, n);
                    if (r || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
                } catch (i) {}
                return e(n, $, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== $ && I(t), H(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== $ && I(t);
                var n = A.attrHandle[e.toLowerCase()],
                    r = n && Y.call(A.attrHandle, e.toLowerCase()) ? n(t, e, !B) : void 0;
                return void 0 !== r ? r : x.attributes || !B ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    r = 0,
                    i = 0;
                if (N = !x.detectDuplicates, j = !x.sortStable && t.slice(0), t.sort(z), N) {
                    for (; e = t[i++];) e === t[i] && (r = n.push(i));
                    for (; r--;) t.splice(n[r], 1)
                }
                return j = null, t
            }, C = e.getText = function(t) {
                var e, n = "",
                    r = 0,
                    i = t.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                    } else if (3 === i || 4 === i) return t.nodeValue
                } else for (; e = t[r++];) n += C(e);
                return n
            }, A = e.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: dt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(xt, At), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, At), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(xt, At).toLowerCase();
                        return "*" === t ?
                        function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = Q[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && Q(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, r) {
                        return function(i) {
                            var o = e.attr(i, t);
                            return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, n, r, i) {
                        var o = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === r && 0 === i ?
                        function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var u, c, f, h, p, d, g = o !== s ? "nextSibling" : "previousSibling",
                                v = e.parentNode,
                                m = a && e.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (v) {
                                if (o) {
                                    for (; g;) {
                                        for (f = e; f = f[g];) if (a ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                        d = g = "only" === t && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [s ? v.firstChild : v.lastChild], s && y) {
                                    for (c = v[F] || (v[F] = {}), u = c[t] || [], p = u[0] === q && u[1], h = u[0] === q && u[2], f = p && v.childNodes[p]; f = ++p && f && f[g] || (h = p = 0) || d.pop();) if (1 === f.nodeType && ++h && f === e) {
                                        c[t] = [q, p, h];
                                        break
                                    }
                                } else if (y && (u = (e[F] || (e[F] = {}))[t]) && u[0] === q) h = u[1];
                                else for (;
                                (f = ++p && f && f[g] || (h = p = 0) || d.pop()) && ((a ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++h || (y && ((f[F] || (f[F] = {}))[t] = [q, h]), f !== e)););
                                return h -= i, h === r || h % r === 0 && h / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var i, o = A.pseudos[t] || A.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[F] ? o(n) : o.length > 1 ? (i = [t, t, "", n], A.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
                            for (var r, i = o(t, n), s = i.length; s--;) r = tt(t, i[s]), t[r] = !(e[r] = i[s])
                        }) : function(t) {
                            return o(t, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: r(function(t) {
                        var e = [],
                            n = [],
                            i = k(t.replace(lt, "$1"));
                        return i[F] ? r(function(t, e, n, r) {
                            for (var o, s = i(t, null, r, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                        }) : function(t, r, o) {
                            return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: r(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: r(function(t) {
                        return t = t.replace(xt, At), function(e) {
                            return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                        }
                    }),
                    lang: r(function(t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, At).toLowerCase(), function(e) {
                            var n;
                            do
                            if (n = B ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === L
                    },
                    focus: function(t) {
                        return t === $.activeElement && (!$.hasFocus || $.hasFocus()) && !! (t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !! t.checked || "option" === e && !! t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !A.pseudos.empty(t)
                    },
                    header: function(t) {
                        return vt.test(t.nodeName)
                    },
                    input: function(t) {
                        return gt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(t, e) {
                        return [e - 1]
                    }),
                    eq: u(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: u(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: u(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: u(function(t, e, n) {
                        for (var r = 0 > n ? n + e : n; --r >= 0;) t.push(r);
                        return t
                    }),
                    gt: u(function(t, e, n) {
                        for (var r = 0 > n ? n + e : n; ++r < e;) t.push(r);
                        return t
                    })
                }
            }, A.pseudos.nth = A.pseudos.eq;
            for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) A.pseudos[b] = a(b);
            for (b in {
                submit: !0,
                reset: !0
            }) A.pseudos[b] = l(b);
            return f.prototype = A.filters = A.pseudos, A.setFilters = new f, E = e.tokenize = function(t, n) {
                var r, i, o, s, a, l, u, c = U[t + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = t, l = [], u = A.preFilter; a;) {
                    (!r || (i = ut.exec(a))) && (i && (a = a.slice(i[0].length) || a), l.push(o = [])), r = !1, (i = ct.exec(a)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(lt, " ")
                    }), a = a.slice(r.length));
                    for (s in A.filter)!(i = dt[s].exec(a)) || u[s] && !(i = u[s](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: s,
                        matches: i
                    }), a = a.slice(r.length));
                    if (!r) break
                }
                return n ? a.length : a ? e.error(t) : U(t, l).slice(0)
            }, k = e.compile = function(t, e) {
                var n, r = [],
                    i = [],
                    o = W[t + " "];
                if (!o) {
                    for (e || (e = E(t)), n = e.length; n--;) o = y(e[n]), o[F] ? r.push(o) : i.push(o);
                    o = W(t, w(i, r)), o.selector = t
                }
                return o
            }, S = e.select = function(t, e, n, r) {
                var i, o, s, a, l, u = "function" == typeof t && t,
                    f = !r && E(t = u.selector || t);
                if (n = n || [], 1 === f.length) {
                    if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === e.nodeType && B && A.relative[o[1].type]) {
                        if (e = (A.find.ID(s.matches[0].replace(xt, At), e) || [])[0], !e) return n;
                        u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (i = dt.needsContext.test(t) ? 0 : o.length; i-- && (s = o[i], !A.relative[a = s.type]);) if ((l = A.find[a]) && (r = l(s.matches[0].replace(xt, At), wt.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(i, 1), t = r.length && h(o), !t) return G.apply(n, r), n;
                        break
                    }
                }
                return (u || k(t, f))(r, e, !B, n, wt.test(t) && c(e.parentNode) || e), n
            }, x.sortStable = F.split("").sort(z).join("") === F, x.detectDuplicates = !! N, I(), x.sortDetached = i(function(t) {
                return 1 & t.compareDocumentPosition($.createElement("div"))
            }), i(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && i(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), i(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(et, function(t, e, n) {
                var r;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
            }), e
        }(t);
    Z.find = it, Z.expr = it.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = it.uniqueSort, Z.text = it.getText, Z.isXMLDoc = it.isXML, Z.contains = it.contains;
    var ot = Z.expr.match.needsContext,
        st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        at = /^.[^:#\[\.,]*$/;
    Z.filter = function(t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? Z.find.matchesSelector(r, t) ? [r] : [] : Z.find.matches(t, Z.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, Z.fn.extend({
        find: function(t) {
            var e, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof t) return this.pushStack(Z(t).filter(function() {
                for (e = 0; n > e; e++) if (Z.contains(i[e], this)) return !0
            }));
            for (e = 0; n > e; e++) Z.find(t, i[e], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + t : t, r
        },
        filter: function(t) {
            return this.pushStack(r(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(r(this, t || [], !0))
        },
        is: function(t) {
            return !!r(this, "string" == typeof t && ot.test(t) ? Z(t) : t || [], !1).length
        }
    });
    var lt, ut = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ct = Z.fn.init = function(t, e) {
            var n, r;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ut.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof Z ? e[0] : e, Z.merge(this, Z.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : J, !0)), st.test(n[1]) && Z.isPlainObject(e)) for (n in e) Z.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Z.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(Z) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), Z.makeArray(t, this))
        };
    ct.prototype = Z.fn, lt = Z(J);
    var ft = /^(?:parents|prev(?:Until|All))/,
        ht = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function(t, e, n) {
            for (var r = [], i = void 0 !== n;
            (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                if (i && Z(t).is(n)) break;
                r.push(t)
            }
            return r
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), Z.fn.extend({
        has: function(t) {
            var e = Z(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; n > t; t++) if (Z.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, r = 0, i = this.length, o = [], s = ot.test(t) || "string" != typeof t ? Z(t, e || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, t))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? z.call(Z(t), this[0]) : z.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), Z.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return Z.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return Z.dir(t, "parentNode", n)
        },
        next: function(t) {
            return i(t, "nextSibling")
        },
        prev: function(t) {
            return i(t, "previousSibling")
        },
        nextAll: function(t) {
            return Z.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return Z.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return Z.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return Z.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return Z.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return Z.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || Z.merge([], t.childNodes)
        }
    }, function(t, e) {
        Z.fn[t] = function(n, r) {
            var i = Z.map(this, e, n);
            return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (ht[t] || Z.unique(i), ft.test(t) && i.reverse()), this.pushStack(i)
        }
    });
    var pt = /\S+/g,
        dt = {};
    Z.Callbacks = function(t) {
        t = "string" == typeof t ? dt[t] || o(t) : Z.extend({}, t);
        var e, n, r, i, s, a, l = [],
            u = !t.once && [],
            c = function(o) {
                for (e = t.memory && o, n = !0, a = i || 0, i = 0, s = l.length, r = !0; l && s > a; a++) if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                    e = !1;
                    break
                }
                r = !1, l && (u ? u.length && c(u.shift()) : e ? l = [] : f.disable())
            },
            f = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        !
                        function o(e) {
                            Z.each(e, function(e, n) {
                                var r = Z.type(n);
                                "function" === r ? t.unique && f.has(n) || l.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), r ? s = l.length : e && (i = n, c(e))
                    }
                    return this
                },
                remove: function() {
                    return l && Z.each(arguments, function(t, e) {
                        for (var n;
                        (n = Z.inArray(e, l, n)) > -1;) l.splice(n, 1), r && (s >= n && s--, a >= n && a--)
                    }), this
                },
                has: function(t) {
                    return t ? Z.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], s = 0, this
                },
                disable: function() {
                    return l = u = e = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, e || f.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(t, e) {
                    return !l || n && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? u.push(e) : c(e)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return f
    }, Z.extend({
        Deferred: function(t) {
            var e = [
                ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                ["notify", "progress", Z.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return Z.Deferred(function(n) {
                            Z.each(e, function(e, o) {
                                var s = Z.isFunction(t[e]) && t[e];
                                i[o[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && Z.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? Z.extend(t, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, Z.each(e, function(t, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), t && t.call(i, i), i
        },
        when: function(t) {
            var e, n, r, i = 0,
                o = Q.call(arguments),
                s = o.length,
                a = 1 !== s || t && Z.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : Z.Deferred(),
                u = function(t, n, r) {
                    return function(i) {
                        n[t] = this, r[t] = arguments.length > 1 ? Q.call(arguments) : i, r === e ? l.notifyWith(n, r) : --a || l.resolveWith(n, r)
                    }
                };
            if (s > 1) for (e = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, e)) : --a;
            return a || l.resolveWith(r, o), l.promise()
        }
    });
    var gt;
    Z.fn.ready = function(t) {
        return Z.ready.promise().done(t), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, t !== !0 && --Z.readyWait > 0 || (gt.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
        }
    }), Z.ready.promise = function(e) {
        return gt || (gt = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1))), gt.promise(e)
    }, Z.ready.promise();
    var vt = Z.access = function(t, e, n, r, i, o, s) {
            var a = 0,
                l = t.length,
                u = null == n;
            if ("object" === Z.type(n)) {
                i = !0;
                for (a in n) Z.access(t, e, a, n[a], !0, o, s)
            } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), u && (s ? (e.call(t, r), e = null) : (u = e, e = function(t, e, n) {
                return u.call(Z(t), n)
            })), e)) for (; l > a; a++) e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
            return i ? t : u ? e.call(t) : l ? e(t[0], n) : o
        };
    Z.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
        key: function(t) {
            if (!a.accepts(t)) return 0;
            var e = {},
                n = t[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    e[this.expando] = {
                        value: n
                    }, Object.defineProperties(t, e)
                } catch (r) {
                    e[this.expando] = n, Z.extend(t, e)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(t, e, n) {
            var r, i = this.key(t),
                o = this.cache[i];
            if ("string" == typeof e) o[e] = n;
            else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], e);
            else for (r in e) o[r] = e[r];
            return o
        },
        get: function(t, e) {
            var n = this.cache[this.key(t)];
            return void 0 === e ? n : n[e]
        },
        access: function(t, e, n) {
            var r;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (r = this.get(t, e), void 0 !== r ? r : this.get(t, Z.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, r, i, o = this.key(t),
                s = this.cache[o];
            if (void 0 === e) this.cache[o] = {};
            else {
                Z.isArray(e) ? r = e.concat(e.map(Z.camelCase)) : (i = Z.camelCase(e), e in s ? r = [e, i] : (r = i, r = r in s ? [r] : r.match(pt) || [])), n = r.length;
                for (; n--;) delete s[r[n]]
            }
        },
        hasData: function(t) {
            return !Z.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var mt = new a,
        yt = new a,
        wt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        bt = /([A-Z])/g;
    Z.extend({
        hasData: function(t) {
            return yt.hasData(t) || mt.hasData(t)
        },
        data: function(t, e, n) {
            return yt.access(t, e, n)
        },
        removeData: function(t, e) {
            yt.remove(t, e)
        },
        _data: function(t, e, n) {
            return mt.access(t, e, n)
        },
        _removeData: function(t, e) {
            mt.remove(t, e)
        }
    }), Z.fn.extend({
        data: function(t, e) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (i = yt.get(o), 1 === o.nodeType && !mt.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), l(o, r, i[r])));
                    mt.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof t ? this.each(function() {
                yt.set(this, t)
            }) : vt(this, function(e) {
                var n, r = Z.camelCase(t);
                if (o && void 0 === e) {
                    if (n = yt.get(o, t), void 0 !== n) return n;
                    if (n = yt.get(o, r), void 0 !== n) return n;
                    if (n = l(o, r, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = yt.get(this, r);
                    yt.set(this, r, e), -1 !== t.indexOf("-") && void 0 !== n && yt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                yt.remove(this, t)
            })
        }
    }), Z.extend({
        queue: function(t, e, n) {
            var r;
            return t ? (e = (e || "fx") + "queue", r = mt.get(t, e), n && (!r || Z.isArray(n) ? r = mt.access(t, e, Z.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = Z.queue(t, e),
                r = n.length,
                i = n.shift(),
                o = Z._queueHooks(t, e),
                s = function() {
                    Z.dequeue(t, e)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return mt.get(t, n) || mt.access(t, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    mt.remove(t, [e + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? Z.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = Z.queue(this, t, e);
                Z._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && Z.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                Z.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, r = 1,
                i = Z.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = mt.get(o[s], t + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(e)
        }
    });
    var xt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        At = ["Top", "Right", "Bottom", "Left"],
        Ct = function(t, e) {
            return t = e || t, "none" === Z.css(t, "display") || !Z.contains(t.ownerDocument, t)
        },
        Tt = /^(?:checkbox|radio)$/i;
    !
    function() {
        var t = J.createDocumentFragment(),
            e = t.appendChild(J.createElement("div")),
            n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), X.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", X.noCloneChecked = !! e.cloneNode(!0).lastChild.defaultValue
    }();
    var Et = "undefined";
    X.focusinBubbles = "onfocusin" in t;
    var kt = /^key/,
        St = /^(?:mouse|pointer|contextmenu)|click/,
        Dt = /^(?:focusinfocus|focusoutblur)$/,
        jt = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, l, u, c, f, h, p, d, g, v = mt.get(t);
            if (v) for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(e) {
                return typeof Z !== Et && Z.event.triggered !== e.type ? Z.event.dispatch.apply(t, arguments) : void 0
            }), e = (e || "").match(pt) || [""], u = e.length; u--;) a = jt.exec(e[u]) || [], p = g = a[1], d = (a[2] || "").split(".").sort(), p && (f = Z.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = Z.event.special[p] || {}, c = Z.extend({
                type: p,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && Z.expr.match.needsContext.test(i),
                namespace: d.join(".")
            }, o), (h = l[p]) || (h = l[p] = [], h.delegateCount = 0, f.setup && f.setup.call(t, r, d, s) !== !1 || t.addEventListener && t.addEventListener(p, s, !1)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) : h.push(c), Z.event.global[p] = !0)
        },
        remove: function(t, e, n, r, i) {
            var o, s, a, l, u, c, f, h, p, d, g, v = mt.hasData(t) && mt.get(t);
            if (v && (l = v.events)) {
                for (e = (e || "").match(pt) || [""], u = e.length; u--;) if (a = jt.exec(e[u]) || [], p = g = a[1], d = (a[2] || "").split(".").sort(), p) {
                    for (f = Z.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, h = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(t, c));
                    s && !h.length && (f.teardown && f.teardown.call(t, d, v.handle) !== !1 || Z.removeEvent(t, p, v.handle), delete l[p])
                } else for (p in l) Z.event.remove(t, p + e[u], n, r, !0);
                Z.isEmptyObject(l) && (delete v.handle, mt.remove(t, "events"))
            }
        },
        trigger: function(e, n, r, i) {
            var o, s, a, l, u, c, f, h = [r || J],
                p = V.call(e, "type") ? e.type : e,
                d = V.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !Dt.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (d = p.split("."), p = d.shift(), d.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[Z.expando] ? e : new Z.Event(p, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : Z.makeArray(n, [e]), f = Z.event.special[p] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !Z.isWindow(r)) {
                    for (l = f.delegateType || p, Dt.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                    a === (r.ownerDocument || J) && h.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0;
                (s = h[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : f.bindType || p, c = (mt.get(s, "events") || {})[e.type] && mt.get(s, "handle"), c && c.apply(s, n), c = u && s[u], c && c.apply && Z.acceptData(s) && (e.result = c.apply(s, n), e.result === !1 && e.preventDefault());
                return e.type = p, i || e.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !Z.acceptData(r) || u && Z.isFunction(r[p]) && !Z.isWindow(r) && (a = r[u], a && (r[u] = null), Z.event.triggered = p, r[p](), Z.event.triggered = void 0, a && (r[u] = a)), e.result
            }
        },
        dispatch: function(t) {
            t = Z.event.fix(t);
            var e, n, r, i, o, s = [],
                a = Q.call(arguments),
                l = (mt.get(this, "events") || {})[t.type] || [],
                u = Z.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (s = Z.event.handlers.call(this, t, l), e = 0;
                (i = s[e++]) && !t.isPropagationStopped();) for (t.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, r, i, o, s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type)) for (; l !== this; l = l.parentNode || this) if (l.disabled !== !0 || "click" !== t.type) {
                for (r = [], n = 0; a > n; n++) o = e[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(l) >= 0 : Z.find(i, this, null, [l]).length), r[i] && r.push(o);
                r.length && s.push({
                    elem: l,
                    handlers: r
                })
            }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, r, i, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || J, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[Z.expando]) return t;
            var e, n, r, i = t.type,
                o = t,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = St.test(i) ? this.mouseHooks : kt.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, t = new Z.Event(o), e = r.length; e--;) n = r[e], t[n] = o[n];
            return t.target || (t.target = J), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return Z.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, r) {
            var i = Z.extend(new Z.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Z.event.trigger(i, null, e) : Z.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }, Z.Event = function(t, e) {
        return this instanceof Z.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? u : c) : this.type = t, e && Z.extend(this, e), this.timeStamp = t && t.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(t, e)
    }, Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = u, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = u, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = u, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        Z.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, r = this,
                    i = t.relatedTarget,
                    o = t.handleObj;
                return (!i || i !== r && !Z.contains(r, i)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), X.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
                Z.event.simulate(e, t.target, Z.event.fix(t), !0)
            };
        Z.event.special[e] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = mt.access(r, e);
                i || r.addEventListener(t, n, !0), mt.access(r, e, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = mt.access(r, e) - 1;
                i ? mt.access(r, e, i) : (r.removeEventListener(t, n, !0), mt.remove(r, e))
            }
        }
    }), Z.fn.extend({
        on: function(t, e, n, r, i) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (s in t) this.on(s, e, n, t[s], i);
                return this
            }
            if (null == n && null == r ? (r = e, n = e = void 0) : null == r && ("string" == typeof e ? (r = n, n = void 0) : (r = n, n = e, e = void 0)), r === !1) r = c;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(t) {
                return Z().off(t), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, t, r, n, e)
            })
        },
        one: function(t, e, n, r) {
            return this.on(t, e, n, r, 1)
        },
        off: function(t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj) return r = t.handleObj, Z(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof t) {
                for (i in t) this.off(i, e, t[i]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = c), this.each(function() {
                Z.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                Z.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? Z.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        It = /<([\w:]+)/,
        $t = /<|&#?\w+;/,
        Lt = /<(?:script|style|link)/i,
        Bt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Pt = /^$|\/(?:java|ecma)script/i,
        Ot = /^true\/(.*)/,
        Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ht = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ht.optgroup = Ht.option, Ht.tbody = Ht.tfoot = Ht.colgroup = Ht.caption = Ht.thead, Ht.th = Ht.td, Z.extend({
        clone: function(t, e, n) {
            var r, i, o, s, a = t.cloneNode(!0),
                l = Z.contains(t.ownerDocument, t);
            if (!(X.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Z.isXMLDoc(t))) for (s = m(a), o = m(t), r = 0, i = o.length; i > r; r++) y(o[r], s[r]);
            if (e) if (n) for (o = o || m(t), s = s || m(a), r = 0, i = o.length; i > r; r++) v(o[r], s[r]);
            else v(t, a);
            return s = m(a, "script"), s.length > 0 && g(s, !l && m(t, "script")), a
        },
        buildFragment: function(t, e, n, r) {
            for (var i, o, s, a, l, u, c = e.createDocumentFragment(), f = [], h = 0, p = t.length; p > h; h++) if (i = t[h], i || 0 === i) if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
            else if ($t.test(i)) {
                for (o = o || c.appendChild(e.createElement("div")), s = (It.exec(i) || ["", ""])[1].toLowerCase(), a = Ht[s] || Ht._default, o.innerHTML = a[1] + i.replace(Nt, "<$1></$2>") + a[2], u = a[0]; u--;) o = o.lastChild;
                Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
            } else f.push(e.createTextNode(i));
            for (c.textContent = "", h = 0; i = f[h++];) if ((!r || -1 === Z.inArray(i, r)) && (l = Z.contains(i.ownerDocument, i), o = m(c.appendChild(i), "script"), l && g(o), n)) for (u = 0; i = o[u++];) Pt.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(t) {
            for (var e, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = t[s]); s++) {
                if (Z.acceptData(n) && (i = n[mt.expando], i && (e = mt.cache[i]))) {
                    if (e.events) for (r in e.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, e.handle);
                    mt.cache[i] && delete mt.cache[i]
                }
                delete yt.cache[n[yt.expando]]
            }
        }
    }), Z.fn.extend({
        text: function(t) {
            return vt(this, function(t) {
                return void 0 === t ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = h(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = h(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, r = t ? Z.filter(t, this) : this, i = 0; null != (n = r[i]); i++) e || 1 !== n.nodeType || Z.cleanData(m(n)), n.parentNode && (e && Z.contains(n.ownerDocument, n) && g(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (Z.cleanData(m(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return Z.clone(this, t, e)
            })
        },
        html: function(t) {
            return vt(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Lt.test(t) && !Ht[(It.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Nt, "<$1></$2>");
                    try {
                        for (; r > n; n++) e = this[n] || {}, 1 === e.nodeType && (Z.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (i) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, Z.cleanData(m(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = U.apply([], t);
            var n, r, i, o, s, a, l = 0,
                u = this.length,
                c = this,
                f = u - 1,
                h = t[0],
                g = Z.isFunction(h);
            if (g || u > 1 && "string" == typeof h && !X.checkClone && Bt.test(h)) return this.each(function(n) {
                var r = c.eq(n);
                g && (t[0] = h.call(this, n, r.html())), r.domManip(t, e)
            });
            if (u && (n = Z.buildFragment(t, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = Z.map(m(n, "script"), p), o = i.length; u > l; l++) s = n, l !== f && (s = Z.clone(s, !0, !0), o && Z.merge(i, m(s, "script"))), e.call(this[l], s, l);
                if (o) for (a = i[i.length - 1].ownerDocument, Z.map(i, d), l = 0; o > l; l++) s = i[l], Pt.test(s.type || "") && !mt.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Mt, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        Z.fn[t] = function(t) {
            for (var n, r = [], i = Z(t), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), Z(i[s])[e](n), W.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ft, _t = {},
        qt = /^margin/,
        Rt = new RegExp("^(" + xt + ")(?!px)[a-z%]+$", "i"),
        Qt = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        };
    !
    function() {
        function e() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
            var e = t.getComputedStyle(s, null);
            n = "1%" !== e.top, r = "4px" === e.width, i.removeChild(o)
        }
        var n, r, i = J.documentElement,
            o = J.createElement("div"),
            s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", X.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), t.getComputedStyle && Z.extend(X, {
            pixelPosition: function() {
                return e(), n
            },
            boxSizingReliable: function() {
                return null == r && e(), r
            },
            reliableMarginRight: function() {
                var e, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), e = !parseFloat(t.getComputedStyle(n, null).marginRight), i.removeChild(o), s.removeChild(n), e
            }
        }))
    }(), Z.swap = function(t, e, n, r) {
        var i, o, s = {};
        for (o in e) s[o] = t.style[o], t.style[o] = e[o];
        i = n.apply(t, r || []);
        for (o in e) t.style[o] = s[o];
        return i
    };
    var Ut = /^(none|table(?!-c[ea]).+)/,
        Wt = new RegExp("^(" + xt + ")(.*)$", "i"),
        zt = new RegExp("^([+-])=(" + xt + ")", "i"),
        Kt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Yt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Vt = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = x(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, o, s, a = Z.camelCase(e),
                    l = t.style;
                return e = Z.cssProps[a] || (Z.cssProps[a] = C(l, a)), s = Z.cssHooks[e] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(t, !1, r)) ? i : l[e] : (o = typeof n, "string" === o && (i = zt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), X.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, r)) || (l[e] = n)), void 0)
            }
        },
        css: function(t, e, n, r) {
            var i, o, s, a = Z.camelCase(e);
            return e = Z.cssProps[a] || (Z.cssProps[a] = C(t.style, a)), s = Z.cssHooks[e] || Z.cssHooks[a], s && "get" in s && (i = s.get(t, !0, n)), void 0 === i && (i = x(t, e, r)), "normal" === i && e in Yt && (i = Yt[e]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
        }
    }), Z.each(["height", "width"], function(t, e) {
        Z.cssHooks[e] = {
            get: function(t, n, r) {
                return n ? Ut.test(Z.css(t, "display")) && 0 === t.offsetWidth ? Z.swap(t, Kt, function() {
                    return k(t, e, r)
                }) : k(t, e, r) : void 0
            },
            set: function(t, n, r) {
                var i = r && Qt(t);
                return T(t, n, r ? E(t, e, r, "border-box" === Z.css(t, "boxSizing", !1, i), i) : 0)
            }
        }
    }), Z.cssHooks.marginRight = A(X.reliableMarginRight, function(t, e) {
        return e ? Z.swap(t, {
            display: "inline-block"
        }, x, [t, "marginRight"]) : void 0
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        Z.cssHooks[t + e] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[t + At[r] + e] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, qt.test(t) || (Z.cssHooks[t + e].set = T)
    }), Z.fn.extend({
        css: function(t, e) {
            return vt(this, function(t, e, n) {
                var r, i, o = {},
                    s = 0;
                if (Z.isArray(e)) {
                    for (r = Qt(t), i = e.length; i > s; s++) o[e[s]] = Z.css(t, e[s], !1, r);
                    return o
                }
                return void 0 !== n ? Z.style(t, e, n) : Z.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return S(this, !0)
        },
        hide: function() {
            return S(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Ct(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = D, D.prototype = {
        constructor: D,
        init: function(t, e, n, r, i, o) {
            this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = D.propHooks[this.prop];
            return t && t.get ? t.get(this) : D.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = D.propHooks[this.prop];
            return this.options.duration ? this.pos = e = Z.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Z.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                Z.fx.step[t.prop] ? Z.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Z.cssProps[t.prop]] || Z.cssHooks[t.prop]) ? Z.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, Z.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, Z.fx = D.prototype.init, Z.fx.step = {};
    var Xt, Jt, Gt = /^(?:toggle|show|hide)$/,
        Zt = new RegExp("^(?:([+-])=|)(" + xt + ")([a-z%]*)$", "i"),
        te = /queueHooks$/,
        ee = [$],
        ne = {
            "*": [function(t, e) {
                var n = this.createTween(t, e),
                    r = n.cur(),
                    i = Zt.exec(e),
                    o = i && i[3] || (Z.cssNumber[t] ? "" : "px"),
                    s = (Z.cssNumber[t] || "px" !== o && +r) && Zt.exec(Z.css(n.elem, t)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], i = i || [], s = +r || 1;
                    do a = a || ".5", s /= a, Z.style(n.elem, t, s + o);
                    while (a !== (a = n.cur() / r) && 1 !== a && --l)
                }
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    Z.Animation = Z.extend(B, {
        tweener: function(t, e) {
            Z.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, r = 0, i = t.length; i > r; r++) n = t[r], ne[n] = ne[n] || [], ne[n].unshift(e)
        },
        prefilter: function(t, e) {
            e ? ee.unshift(t) : ee.push(t)
        }
    }), Z.speed = function(t, e, n) {
        var r = t && "object" == typeof t ? Z.extend({}, t) : {
            complete: n || !n && e || Z.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !Z.isFunction(e) && e
        };
        return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
        }, r
    }, Z.fn.extend({
        fadeTo: function(t, e, n, r) {
            return this.filter(Ct).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, r)
        },
        animate: function(t, e, n, r) {
            var i = Z.isEmptyObject(t),
                o = Z.speed(e, n, r),
                s = function() {
                    var e = B(this, Z.extend({}, t), o);
                    (i || mt.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(t, e, n) {
            var r = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    i = null != t && t + "queueHooks",
                    o = Z.timers,
                    s = mt.get(this);
                if (i) s[i] && s[i].stop && r(s[i]);
                else for (i in s) s[i] && s[i].stop && te.test(i) && r(s[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                (e || !n) && Z.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e, n = mt.get(this),
                    r = n[t + "queue"],
                    i = n[t + "queueHooks"],
                    o = Z.timers,
                    s = r ? r.length : 0;
                for (n.finish = !0, Z.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; s > e; e++) r[e] && r[e].finish && r[e].finish.call(this);
                delete n.finish
            })
        }
    }), Z.each(["toggle", "show", "hide"], function(t, e) {
        var n = Z.fn[e];
        Z.fn[e] = function(t, r, i) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(N(e, !0), t, r, i)
        }
    }), Z.each({
        slideDown: N("show"),
        slideUp: N("hide"),
        slideToggle: N("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        Z.fn[t] = function(t, n, r) {
            return this.animate(e, t, n, r)
        }
    }), Z.timers = [], Z.fx.tick = function() {
        var t, e = 0,
            n = Z.timers;
        for (Xt = Z.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
        n.length || Z.fx.stop(), Xt = void 0
    }, Z.fx.timer = function(t) {
        Z.timers.push(t), t() ? Z.fx.start() : Z.timers.pop()
    }, Z.fx.interval = 13, Z.fx.start = function() {
        Jt || (Jt = setInterval(Z.fx.tick, Z.fx.interval))
    }, Z.fx.stop = function() {
        clearInterval(Jt), Jt = null
    }, Z.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, Z.fn.delay = function(t, e) {
        return t = Z.fx ? Z.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
            var r = setTimeout(e, t);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    }, function() {
        var t = J.createElement("input"),
            e = J.createElement("select"),
            n = e.appendChild(J.createElement("option"));
        t.type = "checkbox", X.checkOn = "" !== t.value, X.optSelected = n.selected, e.disabled = !0, X.optDisabled = !n.disabled, t = J.createElement("input"), t.value = "t", t.type = "radio", X.radioValue = "t" === t.value
    }();
    var re, ie, oe = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(t, e) {
            return vt(this, Z.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                Z.removeAttr(this, t)
            })
        }
    }), Z.extend({
        attr: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Et ? Z.prop(t, e, n) : (1 === o && Z.isXMLDoc(t) || (e = e.toLowerCase(), r = Z.attrHooks[e] || (Z.expr.match.bool.test(e) ? ie : re)), void 0 === n ? r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = Z.find.attr(t, e), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : void Z.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var n, r, i = 0,
                o = e && e.match(pt);
            if (o && 1 === t.nodeType) for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (t[r] = !1), t.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!X.radioValue && "radio" === e && Z.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), ie = {
        set: function(t, e, n) {
            return e === !1 ? Z.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = oe[e] || Z.find.attr;
        oe[e] = function(t, e, r) {
            var i, o;
            return r || (o = oe[e], oe[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, oe[e] = o), i
        }
    });
    var se = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(t, e) {
            return vt(this, Z.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[Z.propFix[t] || t]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var r, i, o, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !Z.isXMLDoc(t), o && (e = Z.propFix[e] || e, i = Z.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || se.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), X.optSelected || (Z.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var ae = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s, a = "string" == typeof t && t,
                l = 0,
                u = this.length;
            if (Z.isFunction(t)) return this.each(function(e) {
                Z(this).addClass(t.call(this, e, this.className))
            });
            if (a) for (e = (t || "").match(pt) || []; u > l; l++) if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ae, " ") : " ")) {
                for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                s = Z.trim(r), n.className !== s && (n.className = s)
            }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof t && t,
                l = 0,
                u = this.length;
            if (Z.isFunction(t)) return this.each(function(e) {
                Z(this).removeClass(t.call(this, e, this.className))
            });
            if (a) for (e = (t || "").match(pt) || []; u > l; l++) if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ae, " ") : "")) {
                for (o = 0; i = e[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                s = t ? Z.trim(r) : "", n.className !== s && (n.className = s)
            }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : Z.isFunction(t) ? this.each(function(n) {
                Z(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function() {
                if ("string" === n) for (var e, r = 0, i = Z(this), o = t.match(pt) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else(n === Et || "boolean" === n) && (this.className && mt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : mt.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ae, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var le = /\r/g;
    Z.fn.extend({
        val: function(t) {
            var e, n, r, i = this[0]; {
                if (arguments.length) return r = Z.isFunction(t), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? t.call(this, n, Z(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(t) {
                        return null == t ? "" : t + ""
                    })), e = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                });
                if (i) return e = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(le, "") : null == n ? "" : n)
            }
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = Z.find.attr(t, "value");
                    return null != e ? e : Z.trim(Z.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, l = 0 > i ? a : o ? i : 0; a > l; l++) if (n = r[l], (n.selected || l === i) && (X.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Z.nodeName(n.parentNode, "optgroup"))) {
                        if (e = Z(n).val(), o) return e;
                        s.push(e)
                    }
                    return s
                },
                set: function(t, e) {
                    for (var n, r, i = t.options, o = Z.makeArray(e), s = i.length; s--;) r = i[s], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(t, e) {
                return Z.isArray(e) ? t.checked = Z.inArray(Z(t).val(), e) >= 0 : void 0
            }
        }, X.checkOn || (Z.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        Z.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), Z.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var ue = Z.now(),
        ce = /\?/;
    Z.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, Z.parseXML = function(t) {
        var e, n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new DOMParser, e = n.parseFromString(t, "text/xml")
        } catch (r) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + t), e
    };
    var fe = /#.*$/,
        he = /([?&])_=[^&]*/,
        pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        de = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ge = /^(?:GET|HEAD)$/,
        ve = /^\/\//,
        me = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        ye = {},
        we = {},
        be = "*/".concat("*"),
        xe = t.location.href,
        Ae = me.exec(xe.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xe,
            type: "GET",
            isLocal: de.test(Ae[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": be,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? M(M(t, Z.ajaxSettings), e) : M(Z.ajaxSettings, t)
        },
        ajaxPrefilter: P(ye),
        ajaxTransport: P(we),
        ajax: function(t, e) {
            function n(t, e, n, s) {
                var l, c, m, y, b, A = e;
                2 !== w && (w = 2, a && clearTimeout(a), r = void 0, o = s || "", x.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, n && (y = H(f, x, n)), y = F(f, y, x, l), l ? (f.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), b = x.getResponseHeader("etag"), b && (Z.etag[i] = b)), 204 === t || "HEAD" === f.type ? A = "nocontent" : 304 === t ? A = "notmodified" : (A = y.state, c = y.data, m = y.error, l = !m)) : (m = A, (t || !A) && (A = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || A) + "", l ? d.resolveWith(h, [c, A, x]) : d.rejectWith(h, [x, A, m]), x.statusCode(v), v = void 0, u && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, f, l ? c : m]), g.fireWith(h, [x, A]), u && (p.trigger("ajaxComplete", [x, f]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var r, i, o, s, a, l, u, c, f = Z.ajaxSetup({}, e),
                h = f.context || f,
                p = f.context && (h.nodeType || h.jquery) ? Z(h) : Z.event,
                d = Z.Deferred(),
                g = Z.Callbacks("once memory"),
                v = f.statusCode || {},
                m = {},
                y = {},
                w = 0,
                b = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === w) {
                            if (!s) for (s = {}; e = pe.exec(o);) s[e[1].toLowerCase()] = e[2];
                            e = s[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return w || (t = y[n] = y[n] || t, m[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return w || (f.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t) if (2 > w) for (e in t) v[e] = [v[e], t[e]];
                        else x.always(t[x.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || b;
                        return r && r.abort(e), n(0, e), this
                    }
                };
            if (d.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, f.url = ((t || f.url || xe) + "").replace(fe, "").replace(ve, Ae[1] + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(pt) || [""], null == f.crossDomain && (l = me.exec(f.url.toLowerCase()), f.crossDomain = !(!l || l[1] === Ae[1] && l[2] === Ae[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Ae[3] || ("http:" === Ae[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), O(ye, f, e, x), 2 === w) return x;
            u = Z.event && f.global, u && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !ge.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (ce.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = he.test(i) ? i.replace(he, "$1_=" + ue++) : i + (ce.test(i) ? "&" : "?") + "_=" + ue++)), f.ifModified && (Z.lastModified[i] && x.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && x.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + be + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers) x.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(h, x, f) === !1 || 2 === w)) return x.abort();
            b = "abort";
            for (c in {
                success: 1,
                error: 1,
                complete: 1
            }) x[c](f[c]);
            if (r = O(we, f, e, x)) {
                x.readyState = 1, u && p.trigger("ajaxSend", [x, f]), f.async && f.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                }, f.timeout));
                try {
                    w = 1, r.send(m, n)
                } catch (A) {
                    if (!(2 > w)) throw A;
                    n(-1, A)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function(t, e, n) {
            return Z.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return Z.get(t, void 0, e, "script")
        }
    }), Z.each(["get", "post"], function(t, e) {
        Z[e] = function(t, n, r, i) {
            return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
                url: t,
                type: e,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), Z._evalUrl = function(t) {
        return Z.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function(t) {
            var e;
            return Z.isFunction(t) ? this.each(function(e) {
                Z(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = Z(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return Z.isFunction(t) ? this.each(function(e) {
                Z(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = Z(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = Z.isFunction(t);
            return this.each(function(n) {
                Z(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, Z.expr.filters.visible = function(t) {
        return !Z.expr.filters.hidden(t)
    };
    var Ce = /%20/g,
        Te = /\[\]$/,
        Ee = /\r?\n/g,
        ke = /^(?:submit|button|image|reset|file)$/i,
        Se = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(t, e) {
        var n, r = [],
            i = function(t, e) {
                e = Z.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(t) || t.jquery && !Z.isPlainObject(t)) Z.each(t, function() {
            i(this.name, this.value)
        });
        else for (n in t) _(n, t[n], e, i);
        return r.join("&").replace(Ce, "+")
    }, Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = Z.prop(this, "elements");
                return t ? Z.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !Z(this).is(":disabled") && Se.test(this.nodeName) && !ke.test(t) && (this.checked || !Tt.test(t))
            }).map(function(t, e) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ee, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Ee, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var De = 0,
        je = {},
        Ne = {
            0: 200,
            1223: 204
        },
        Ie = Z.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in je) je[t]()
    }), X.cors = !! Ie && "withCredentials" in Ie, X.ajax = Ie = !! Ie, Z.ajaxTransport(function(t) {
        var e;
        return X.cors || Ie && !t.crossDomain ? {
            send: function(n, r) {
                var i, o = t.xhr(),
                    s = ++De;
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (i in t.xhrFields) o[i] = t.xhrFields[i];
                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                e = function(t) {
                    return function() {
                        e && (delete je[s], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? r(o.status, o.statusText) : r(Ne[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = e(), o.onerror = e("error"), e = je[s] = e("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (a) {
                    if (e) throw a
                }
            },
            abort: function() {
                e && e()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return Z.globalEval(t), t
            }
        }
    }), Z.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), Z.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(r, i) {
                    e = Z("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
                    }), J.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var $e = [],
        Le = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = $e.pop() || Z.expando + "_" + ue++;
            return this[t] = !0, t
        }
    }), Z.ajaxPrefilter("json jsonp", function(e, n, r) {
        var i, o, s, a = e.jsonp !== !1 && (Le.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Le.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = Z.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Le, "$1" + i) : e.jsonp !== !1 && (e.url += (ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return s || Z.error(i + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[i], t[i] = function() {
            s = arguments
        }, r.always(function() {
            t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, $e.push(i)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), Z.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || J;
        var r = st.exec(t),
            i = !n && [];
        return r ? [e.createElement(r[1])] : (r = Z.buildFragment([t], e, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
    };
    var Be = Z.fn.load;
    Z.fn.load = function(t, e, n) {
        if ("string" != typeof t && Be) return Be.apply(this, arguments);
        var r, i, o, s = this,
            a = t.indexOf(" ");
        return a >= 0 && (r = Z.trim(t.slice(a)), t = t.slice(0, a)), Z.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), s.length > 0 && Z.ajax({
            url: t,
            type: i,
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(t)).find(r) : t)
        }).complete(n &&
        function(t, e) {
            s.each(n, o || [t.responseText, e, t])
        }), this
    }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        Z.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), Z.expr.filters.animated = function(t) {
        return Z.grep(Z.timers, function(e) {
            return t === e.elem
        }).length
    };
    var Pe = t.document.documentElement;
    Z.offset = {
        setOffset: function(t, e, n) {
            var r, i, o, s, a, l, u, c = Z.css(t, "position"),
                f = Z(t),
                h = {};
            "static" === c && (t.style.position = "relative"), a = f.offset(), o = Z.css(t, "top"), l = Z.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), Z.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + i), "using" in e ? e.using.call(t, h) : f.css(h)
        }
    }, Z.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                Z.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            if (o) return e = o.documentElement, Z.contains(e, r) ? (typeof r.getBoundingClientRect !== Et && (i = r.getBoundingClientRect()), n = q(o), {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) : i
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Z.nodeName(t[0], "html") || (r = t.offset()), r.top += Z.css(t[0], "borderTopWidth", !0), r.left += Z.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - r.top - Z.css(n, "marginTop", !0),
                    left: e.left - r.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || Pe; t && !Z.nodeName(t, "html") && "static" === Z.css(t, "position");) t = t.offsetParent;
                return t || Pe
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = "pageYOffset" === n;
        Z.fn[e] = function(i) {
            return vt(this, function(e, i, o) {
                var s = q(e);
                return void 0 === o ? s ? s[n] : e[i] : void(s ? s.scrollTo(r ? t.pageXOffset : o, r ? o : t.pageYOffset) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(t, e) {
        Z.cssHooks[e] = A(X.pixelPosition, function(t, n) {
            return n ? (n = x(t, e), Rt.test(n) ? Z(t).position()[e] + "px" : n) : void 0
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        Z.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, r) {
            Z.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || i === !0 ? "margin" : "border");
                return vt(this, function(e, n, r) {
                    var i;
                    return Z.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? Z.css(e, n, s) : Z.style(e, n, r, s)
                }, e, o ? r : void 0, o, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Oe = t.jQuery,
        Me = t.$;
    return Z.noConflict = function(e) {
        return t.$ === Z && (t.$ = Me), e && t.jQuery === Z && (t.jQuery = Oe), Z
    }, typeof e === Et && (t.jQuery = t.$ = Z), Z
}), function(t) {
    "use strict";
    var e = -1,
        n = function(n, r) {
            return this.itemsContainerSelector = r.container, this.itemSelector = r.item, this.nextSelector = r.next, this.paginationSelector = r.pagination, this.$scrollContainer = n, this.$itemsContainer = t(this.itemsContainerSelector), this.$container = window === n.get(0) ? t(document) : n, this.defaultDelay = r.delay, this.negativeMargin = r.negativeMargin, this.nextUrl = null, this.isBound = !1, this.listeners = {
                next: new IASCallbacks,
                load: new IASCallbacks,
                loaded: new IASCallbacks,
                render: new IASCallbacks,
                rendered: new IASCallbacks,
                scroll: new IASCallbacks,
                noneLeft: new IASCallbacks,
                ready: new IASCallbacks
            }, this.extensions = [], this.scrollHandler = function() {
                var t = this.getCurrentScrollOffset(this.$scrollContainer),
                    n = this.getScrollThreshold();
                this.isBound && e != n && (this.fire("scroll", [t, n]), t >= n && this.next())
            }, this.getLastItem = function() {
                return t(this.itemSelector, this.$itemsContainer.get(0)).last()
            }, this.getFirstItem = function() {
                return t(this.itemSelector, this.$itemsContainer.get(0)).first()
            }, this.getScrollThreshold = function(t) {
                var n;
                return t = t || this.negativeMargin, t = t >= 0 ? -1 * t : t, n = this.getLastItem(), 0 === n.size() ? e : n.offset().top + n.height() + t
            }, this.getCurrentScrollOffset = function(t) {
                var e = 0,
                    n = t.height();
                return e = window === t.get(0) ? t.scrollTop() : t.offset().top, (-1 != navigator.platform.indexOf("iPhone") || -1 != navigator.platform.indexOf("iPod")) && (n += 80), e + n
            }, this.getNextUrl = function(e) {
                return e || (e = this.$container), t(this.nextSelector, e).last().attr("href")
            }, this.load = function(e, n, r) {
                var i, o, s = this,
                    a = [],
                    l = +new Date;
                r = r || this.defaultDelay;
                var u = {
                    url: e
                };
                return s.fire("load", [u]), t.get(u.url, null, t.proxy(function(e) {
                    i = t(this.itemsContainerSelector, e).eq(0), 0 === i.length && (i = t(e).filter(this.itemsContainerSelector).eq(0)), i && i.find(this.itemSelector).each(function() {
                        a.push(this)
                    }), s.fire("loaded", [e, a]), n && (o = +new Date - l, r > o ? setTimeout(function() {
                        n.call(s, e, a)
                    }, r - o) : n.call(s, e, a))
                }, s), "html")
            }, this.render = function(e, n) {
                var r = this,
                    i = this.getLastItem(),
                    o = 0,
                    s = this.fire("render", [e]);
                s.done(function() {
                    t(e).hide(), i.after(e), t(e).fadeIn(400, function() {
                        ++o < e.length || (r.fire("rendered", [e]), n && n())
                    })
                })
            }, this.hidePagination = function() {
                this.paginationSelector && t(this.paginationSelector, this.$container).hide()
            }, this.restorePagination = function() {
                this.paginationSelector && t(this.paginationSelector, this.$container).show()
            }, this.throttle = function(e, n) {
                var r, i, o = 0;
                return r = function() {
                    function t() {
                        o = +new Date, e.apply(r, s)
                    }
                    var r = this,
                        s = arguments,
                        a = +new Date - o;
                    i ? clearTimeout(i) : t(), a > n ? t() : i = setTimeout(t, n)
                }, t.guid && (r.guid = e.guid = e.guid || t.guid++), r
            }, this.fire = function(t, e) {
                return this.listeners[t].fireWith(this, e)
            }, this
        };
    n.prototype.initialize = function() {
        var t = this.getCurrentScrollOffset(this.$scrollContainer),
            e = this.getScrollThreshold();
        this.hidePagination(), this.bind();
        for (var n = 0, r = this.extensions.length; r > n; n++) this.extensions[n].bind(this);
        return this.fire("ready"), this.nextUrl = this.getNextUrl(), t >= e && this.next(), this
    }, n.prototype.bind = function() {
        this.isBound || (this.$scrollContainer.on("scroll", t.proxy(this.throttle(this.scrollHandler, 150), this)), this.isBound = !0)
    }, n.prototype.unbind = function() {
        this.isBound && (this.$scrollContainer.off("scroll", this.scrollHandler), this.isBound = !1)
    }, n.prototype.destroy = function() {
        this.unbind()
    }, n.prototype.on = function(e, n, r) {
        if ("undefined" == typeof this.listeners[e]) throw new Error('There is no event called "' + e + '"');
        return r = r || 0, this.listeners[e].add(t.proxy(n, this), r), this
    }, n.prototype.one = function(t, e) {
        var n = this,
            r = function() {
                n.off(t, e), n.off(t, r)
            };
        return this.on(t, e), this.on(t, r), this
    }, n.prototype.off = function(t, e) {
        if ("undefined" == typeof this.listeners[t]) throw new Error('There is no event called "' + t + '"');
        return this.listeners[t].remove(e), this
    }, n.prototype.next = function() {
        var t = this.nextUrl,
            e = this;
        if (this.unbind(), !t) return this.fire("noneLeft", [this.getLastItem()]), this.listeners.noneLeft.disable(), e.bind(), !1;
        var n = this.fire("next", [t]);
        return n.done(function() {
            e.load(t, function(t, n) {
                e.render(n, function() {
                    e.nextUrl = e.getNextUrl(t), e.bind()
                })
            })
        }), n.fail(function() {
            e.bind()
        }), !0
    }, n.prototype.extension = function(t) {
        if ("undefined" == typeof t.bind) throw new Error('Extension doesn\'t have required method "bind"');
        return "undefined" != typeof t.initialize && t.initialize(this), this.extensions.push(t), this
    }, t.ias = function(e) {
        var n = t(window);
        return n.ias.apply(n, arguments)
    }, t.fn.ias = function(e) {
        var r = Array.prototype.slice.call(arguments),
            i = this;
        return this.each(function() {
            var o = t(this),
                s = o.data("ias"),
                a = t.extend({}, t.fn.ias.defaults, o.data(), "object" == typeof e && e);
            if (s || (o.data("ias", s = new n(o, a)), t(document).ready(t.proxy(s.initialize, s))), "string" == typeof e) {
                if ("function" != typeof s[e]) throw new Error('There is no method called "' + e + '"');
                r.shift(), s[e].apply(s, r), "destroy" === e && o.data("ias", null)
            }
            i = o.data("ias")
        }), i
    }, t.fn.ias.defaults = {
        item: ".item",
        container: ".listing",
        next: ".next",
        pagination: !1,
        delay: 600,
        negativeMargin: 10
    }
}(jQuery);
var IASCallbacks = function() {
        return this.list = [], this.fireStack = [], this.isFiring = !1, this.isDisabled = !1, this.fire = function(t) {
            var e = t[0],
                n = t[1],
                r = t[2];
            this.isFiring = !0;
            for (var i = 0, o = this.list.length; o > i; i++) if (!1 === this.list[i].fn.apply(e, r)) {
                n.reject();
                break
            }
            this.isFiring = !1, n.resolve(), this.fireStack.length && this.fire(this.fireStack.shift())
        }, this.inList = function(t, e) {
            e = e || 0;
            for (var n = e, r = this.list.length; r > n; n++) if (this.list[n].fn === t || t.guid && this.list[n].fn.guid && t.guid === this.list[n].fn.guid) return n;
            return -1
        }, this
    };
IASCallbacks.prototype = {
    add: function(t, e) {
        var n = {
            fn: t,
            priority: e
        };
        e = e || 0;
        for (var r = 0, i = this.list.length; i > r; r++) if (e > this.list[r].priority) return this.list.splice(r, 0, n), this;
        return this.list.push(n), this
    },
    remove: function(t) {
        for (var e = 0;
        (e = this.inList(t, e)) > -1;) this.list.splice(e, 1);
        return this
    },
    has: function(t) {
        return this.inList(t) > -1
    },
    fireWith: function(t, e) {
        var n = jQuery.Deferred();
        return this.isDisabled ? n.reject() : (e = e || [], e = [t, n, e.slice ? e.slice() : e], this.isFiring ? this.fireStack.push(e) : this.fire(e), n)
    },
    disable: function() {
        this.isDisabled = !0
    },
    enable: function() {
        this.isDisabled = !1
    }
};
var IASHistoryExtension = function(t) {
        return t = jQuery.extend({}, this.defaults, t), this.ias = null, this.prevSelector = t.prev, this.prevUrl = null, this.listeners = {
            prev: new IASCallbacks
        }, this.onPageChange = function(t, e, n) {
            var r = {};
            window.history && window.history.replaceState && history.replaceState(r, document.title, n)
        }, this.onScroll = function(t, e) {
            var n = this.getScrollThresholdFirstItem();
            this.prevUrl && (t -= this.ias.$scrollContainer.height(), n >= t && this.prev())
        }, this.getPrevUrl = function(t) {
            return t || (t = this.ias.$container), jQuery(this.prevSelector, t).last().attr("href")
        }, this.getScrollThresholdFirstItem = function() {
            var t;
            return t = this.ias.getFirstItem(), 0 === t.size() ? -1 : t.offset().top
        }, this.renderBefore = function(t, e) {
            var n = this.ias,
                r = n.getFirstItem(),
                i = 0;
            n.fire("render", [t]), jQuery(t).hide(), r.before(t), jQuery(t).fadeIn(400, function() {
                ++i < t.length || (n.fire("rendered", [t]), e && e())
            })
        }, this
    };
IASHistoryExtension.prototype.initialize = function(t) {
    var e = this;
    this.ias = t, jQuery.extend(t.listeners, this.listeners), t.prev = function() {
        return e.prev()
    }, this.prevUrl = this.getPrevUrl()
}, IASHistoryExtension.prototype.bind = function(t) {
    var e = this;
    t.on("pageChange", jQuery.proxy(this.onPageChange, this)), t.on("scroll", jQuery.proxy(this.onScroll, this)), t.on("ready", function() {
        var n = t.getCurrentScrollOffset(t.$scrollContainer),
            r = e.getScrollThresholdFirstItem();
        n -= t.$scrollContainer.height(), r >= n && e.prev()
    })
}, IASHistoryExtension.prototype.prev = function() {
    var t = this.prevUrl,
        e = this,
        n = this.ias;
    if (!t) return !1;
    n.unbind();
    var r = n.fire("prev", [t]);
    return r.done(function() {
        n.load(t, function(t, r) {
            e.renderBefore(r, function() {
                e.prevUrl = e.getPrevUrl(t), n.bind(), e.prevUrl && e.prev()
            })
        })
    }), r.fail(function() {
        n.bind()
    }), !0
}, IASHistoryExtension.prototype.defaults = {
    prev: ".prev"
};
var IASNoneLeftExtension = function(t) {
        return t = jQuery.extend({}, this.defaults, t), this.ias = null, this.uid = (new Date).getTime(), this.html = t.html.replace("{text}", t.text), this.showNoneLeft = function() {
            var t = jQuery(this.html).attr("id", "ias_noneleft_" + this.uid),
                e = this.ias.getLastItem();
            e.after(t), t.fadeIn()
        }, this
    };
IASNoneLeftExtension.prototype.bind = function(t) {
    this.ias = t, t.on("noneLeft", jQuery.proxy(this.showNoneLeft, this))
}, IASNoneLeftExtension.prototype.defaults = {
    text: "You reached the end.",
    html: '<div class="ias-noneleft" style="text-align: center;">{text}</div>'
};
var IASPagingExtension = function() {
        return this.ias = null, this.pagebreaks = [
            [0, document.location.toString()]
        ], this.lastPageNum = 1, this.enabled = !0, this.listeners = {
            pageChange: new IASCallbacks
        }, this.onScroll = function(t, e) {
            if (this.enabled) {
                var n, r = this.ias,
                    i = this.getCurrentPageNum(t),
                    o = this.getCurrentPagebreak(t);
                this.lastPageNum !== i && (n = o[1], r.fire("pageChange", [i, t, n])), this.lastPageNum = i
            }
        }, this.onNext = function(t) {
            var e = this.ias.getCurrentScrollOffset(this.ias.$scrollContainer);
            this.pagebreaks.push([e, t]);
            var n = this.getCurrentPageNum(e) + 1;
            this.ias.fire("pageChange", [n, e, t]), this.lastPageNum = n
        }, this.onPrev = function(t) {
            var e = this,
                n = e.ias,
                r = n.getCurrentScrollOffset(n.$scrollContainer),
                i = r - n.$scrollContainer.height(),
                o = n.getFirstItem();
            this.enabled = !1, this.pagebreaks.unshift([0, t]), n.one("rendered", function() {
                for (var r = 1, s = e.pagebreaks.length; s > r; r++) e.pagebreaks[r][0] = e.pagebreaks[r][0] + o.offset().top;
                var a = e.getCurrentPageNum(i) + 1;
                n.fire("pageChange", [a, i, t]), e.lastPageNum = a, e.enabled = !0
            })
        }, this
    };
IASPagingExtension.prototype.initialize = function(t) {
    this.ias = t, jQuery.extend(t.listeners, this.listeners)
}, IASPagingExtension.prototype.bind = function(t) {
    try {
        t.on("prev", jQuery.proxy(this.onPrev, this), this.priority)
    } catch (e) {}
    t.on("next", jQuery.proxy(this.onNext, this), this.priority), t.on("scroll", jQuery.proxy(this.onScroll, this), this.priority)
}, IASPagingExtension.prototype.getCurrentPageNum = function(t) {
    for (var e = this.pagebreaks.length - 1; e > 0; e--) if (t > this.pagebreaks[e][0]) return e + 1;
    return 1
}, IASPagingExtension.prototype.getCurrentPagebreak = function(t) {
    for (var e = this.pagebreaks.length - 1; e >= 0; e--) if (t > this.pagebreaks[e][0]) return this.pagebreaks[e];
    return null
}, IASPagingExtension.prototype.priority = 500;
var IASSpinnerExtension = function(t) {
        return t = jQuery.extend({}, this.defaults, t), this.ias = null, this.uid = (new Date).getTime(), this.src = t.src, this.html = t.html.replace("{src}", this.src), this.showSpinner = function() {
            var t = this.getSpinner() || this.createSpinner(),
                e = this.ias.getLastItem();
            e.after(t), t.fadeIn()
        }, this.showSpinnerBefore = function() {
            var t = this.getSpinner() || this.createSpinner(),
                e = this.ias.getFirstItem();
            e.before(t), t.fadeIn()
        }, this.removeSpinner = function() {
            this.hasSpinner() && this.getSpinner().remove()
        }, this.getSpinner = function() {
            var t = jQuery("#ias_spinner_" + this.uid);
            return t.size() > 0 ? t : !1
        }, this.hasSpinner = function() {
            var t = jQuery("#ias_spinner_" + this.uid);
            return t.size() > 0
        }, this.createSpinner = function() {
            var t = jQuery(this.html).attr("id", "ias_spinner_" + this.uid);
            return t.hide(), t
        }, this
    };
IASSpinnerExtension.prototype.bind = function(t) {
    this.ias = t, t.on("next", jQuery.proxy(this.showSpinner, this));
    try {
        t.on("prev", jQuery.proxy(this.showSpinnerBefore, this))
    } catch (e) {}
    t.on("render", jQuery.proxy(this.removeSpinner, this))
}, IASSpinnerExtension.prototype.defaults = {
    src: "data:image/gif;base64,R0lGODlhEAAQAPQAAP///wAAAPDw8IqKiuDg4EZGRnp6egAAAFhYWCQkJKysrL6+vhQUFJycnAQEBDY2NmhoaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFdyAgAgIJIeWoAkRCCMdBkKtIHIngyMKsErPBYbADpkSCwhDmQCBethRB6Vj4kFCkQPG4IlWDgrNRIwnO4UKBXDufzQvDMaoSDBgFb886MiQadgNABAokfCwzBA8LCg0Egl8jAggGAA1kBIA1BAYzlyILczULC2UhACH5BAkKAAAALAAAAAAQABAAAAV2ICACAmlAZTmOREEIyUEQjLKKxPHADhEvqxlgcGgkGI1DYSVAIAWMx+lwSKkICJ0QsHi9RgKBwnVTiRQQgwF4I4UFDQQEwi6/3YSGWRRmjhEETAJfIgMFCnAKM0KDV4EEEAQLiF18TAYNXDaSe3x6mjidN1s3IQAh+QQJCgAAACwAAAAAEAAQAAAFeCAgAgLZDGU5jgRECEUiCI+yioSDwDJyLKsXoHFQxBSHAoAAFBhqtMJg8DgQBgfrEsJAEAg4YhZIEiwgKtHiMBgtpg3wbUZXGO7kOb1MUKRFMysCChAoggJCIg0GC2aNe4gqQldfL4l/Ag1AXySJgn5LcoE3QXI3IQAh+QQJCgAAACwAAAAAEAAQAAAFdiAgAgLZNGU5joQhCEjxIssqEo8bC9BRjy9Ag7GILQ4QEoE0gBAEBcOpcBA0DoxSK/e8LRIHn+i1cK0IyKdg0VAoljYIg+GgnRrwVS/8IAkICyosBIQpBAMoKy9dImxPhS+GKkFrkX+TigtLlIyKXUF+NjagNiEAIfkECQoAAAAsAAAAABAAEAAABWwgIAICaRhlOY4EIgjH8R7LKhKHGwsMvb4AAy3WODBIBBKCsYA9TjuhDNDKEVSERezQEL0WrhXucRUQGuik7bFlngzqVW9LMl9XWvLdjFaJtDFqZ1cEZUB0dUgvL3dgP4WJZn4jkomWNpSTIyEAIfkECQoAAAAsAAAAABAAEAAABX4gIAICuSxlOY6CIgiD8RrEKgqGOwxwUrMlAoSwIzAGpJpgoSDAGifDY5kopBYDlEpAQBwevxfBtRIUGi8xwWkDNBCIwmC9Vq0aiQQDQuK+VgQPDXV9hCJjBwcFYU5pLwwHXQcMKSmNLQcIAExlbH8JBwttaX0ABAcNbWVbKyEAIfkECQoAAAAsAAAAABAAEAAABXkgIAICSRBlOY7CIghN8zbEKsKoIjdFzZaEgUBHKChMJtRwcWpAWoWnifm6ESAMhO8lQK0EEAV3rFopIBCEcGwDKAqPh4HUrY4ICHH1dSoTFgcHUiZjBhAJB2AHDykpKAwHAwdzf19KkASIPl9cDgcnDkdtNwiMJCshACH5BAkKAAAALAAAAAAQABAAAAV3ICACAkkQZTmOAiosiyAoxCq+KPxCNVsSMRgBsiClWrLTSWFoIQZHl6pleBh6suxKMIhlvzbAwkBWfFWrBQTxNLq2RG2yhSUkDs2b63AYDAoJXAcFRwADeAkJDX0AQCsEfAQMDAIPBz0rCgcxky0JRWE1AmwpKyEAIfkECQoAAAAsAAAAABAAEAAABXkgIAICKZzkqJ4nQZxLqZKv4NqNLKK2/Q4Ek4lFXChsg5ypJjs1II3gEDUSRInEGYAw6B6zM4JhrDAtEosVkLUtHA7RHaHAGJQEjsODcEg0FBAFVgkQJQ1pAwcDDw8KcFtSInwJAowCCA6RIwqZAgkPNgVpWndjdyohACH5BAkKAAAALAAAAAAQABAAAAV5ICACAimc5KieLEuUKvm2xAKLqDCfC2GaO9eL0LABWTiBYmA06W6kHgvCqEJiAIJiu3gcvgUsscHUERm+kaCxyxa+zRPk0SgJEgfIvbAdIAQLCAYlCj4DBw0IBQsMCjIqBAcPAooCBg9pKgsJLwUFOhCZKyQDA3YqIQAh+QQJCgAAACwAAAAAEAAQAAAFdSAgAgIpnOSonmxbqiThCrJKEHFbo8JxDDOZYFFb+A41E4H4OhkOipXwBElYITDAckFEOBgMQ3arkMkUBdxIUGZpEb7kaQBRlASPg0FQQHAbEEMGDSVEAA1QBhAED1E0NgwFAooCDWljaQIQCE5qMHcNhCkjIQAh+QQJCgAAACwAAAAAEAAQAAAFeSAgAgIpnOSoLgxxvqgKLEcCC65KEAByKK8cSpA4DAiHQ/DkKhGKh4ZCtCyZGo6F6iYYPAqFgYy02xkSaLEMV34tELyRYNEsCQyHlvWkGCzsPgMCEAY7Cg04Uk48LAsDhRA8MVQPEF0GAgqYYwSRlycNcWskCkApIyEAOwAAAAAAAAAAAA==",
    html: '<div class="ias-spinner" style="text-align: center;"><img src="{src}"/></div>'
};
var IASTriggerExtension = function(t) {
        return t = jQuery.extend({}, this.defaults, t), this.ias = null, this.html = t.html.replace("{text}", t.text), this.htmlPrev = t.htmlPrev.replace("{text}", t.textPrev), this.enabled = !0, this.count = 0, this.offset = t.offset, this.$triggerNext = null, this.$triggerPrev = null, this.showTriggerNext = function() {
            if (!this.enabled) return !0;
            if (!1 === this.offset || ++this.count < this.offset) return !0;
            var t = this.$triggerNext || (this.$triggerNext = this.createTrigger(this.next, this.html)),
                e = this.ias.getLastItem();
            return e.after(t), t.fadeIn(), !1
        }, this.showTriggerPrev = function() {
            if (!this.enabled) return !0;
            var t = this.$triggerPrev || (this.$triggerPrev = this.createTrigger(this.prev, this.htmlPrev)),
                e = this.ias.getFirstItem();
            return e.before(t), t.fadeIn(), !1
        }, this.createTrigger = function(t, e) {
            var n, r = (new Date).getTime();
            return e = e || this.html, n = jQuery(e).attr("id", "ias_trigger_" + r), n.hide(), n.on("click", jQuery.proxy(t, this)), n
        }, this
    };
if (IASTriggerExtension.prototype.bind = function(t) {
    var e = this;
    this.ias = t;
    try {
        t.on("prev", jQuery.proxy(this.showTriggerPrev, this), this.priority)
    } catch (n) {}
    t.on("next", jQuery.proxy(this.showTriggerNext, this), this.priority), t.on("rendered", function() {
        e.enabled = !0
    }, this.priority)
}, IASTriggerExtension.prototype.next = function() {
    this.enabled = !1, this.ias.unbind(), this.$triggerNext && (this.$triggerNext.remove(), this.$triggerNext = null), this.ias.next()
}, IASTriggerExtension.prototype.prev = function() {
    this.enabled = !1, this.ias.unbind(), this.$triggerPrev && (this.$triggerPrev.remove(), this.$triggerPrev = null), this.ias.prev()
}, IASTriggerExtension.prototype.defaults = {
    text: "Load more items",
    html: '<div class="ias-trigger ias-trigger-next" style="text-align: center; cursor: pointer;"><a>{text}</a></div>',
    textPrev: "Load previous items",
    htmlPrev: '<div class="ias-trigger ias-trigger-prev" style="text-align: center; cursor: pointer;"><a>{text}</a></div>',
    offset: 0
}, IASTriggerExtension.prototype.priority = 1e3, function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function(t) {
    function e(e) {
        var s = e || window.event,
            a = l.call(arguments, 1),
            u = 0,
            f = 0,
            h = 0,
            p = 0,
            d = 0,
            g = 0;
        if (e = t.event.fix(s), e.type = "mousewheel", "detail" in s && (h = -1 * s.detail), "wheelDelta" in s && (h = s.wheelDelta), "wheelDeltaY" in s && (h = s.wheelDeltaY), "wheelDeltaX" in s && (f = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (f = -1 * h, h = 0), u = 0 === h ? f : h, "deltaY" in s && (h = -1 * s.deltaY, u = h), "deltaX" in s && (f = s.deltaX, 0 === h && (u = -1 * f)), 0 !== h || 0 !== f) {
            if (1 === s.deltaMode) {
                var v = t.data(this, "mousewheel-line-height");
                u *= v, h *= v, f *= v
            } else if (2 === s.deltaMode) {
                var m = t.data(this, "mousewheel-page-height");
                u *= m, h *= m, f *= m
            }
            if (p = Math.max(Math.abs(h), Math.abs(f)), (!o || o > p) && (o = p, r(s, p) && (o /= 40)), r(s, p) && (u /= 40, f /= 40, h /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / o), f = Math[f >= 1 ? "floor" : "ceil"](f / o), h = Math[h >= 1 ? "floor" : "ceil"](h / o), c.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                d = e.clientX - y.left, g = e.clientY - y.top
            }
            return e.deltaX = f, e.deltaY = h, e.deltaFactor = o, e.offsetX = d, e.offsetY = g, e.deltaMode = 0, a.unshift(e, u, f, h), i && clearTimeout(i), i = setTimeout(n, 200), (t.event.dispatch || t.event.handle).apply(this, a)
        }
    }
    function n() {
        o = null
    }
    function r(t, e) {
        return c.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
    }
    var i, o, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        l = Array.prototype.slice;
    if (t.event.fixHooks) for (var u = s.length; u;) t.event.fixHooks[s[--u]] = t.event.mouseHooks;
    var c = t.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener) for (var n = a.length; n;) this.addEventListener(a[--n], e, !1);
            else this.onmousewheel = e;
            t.data(this, "mousewheel-line-height", c.getLineHeight(this)), t.data(this, "mousewheel-page-height", c.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener) for (var n = a.length; n;) this.removeEventListener(a[--n], e, !1);
            else this.onmousewheel = null;
            t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(e) {
            var n = t(e),
                r = n["offsetParent" in t.fn ? "offsetParent" : "parent"]();
            return r.length || (r = t("body")), parseInt(r.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
        },
        getPageHeight: function(e) {
            return t(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    t.fn.extend({
        mousewheel: function(t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        },
        unmousewheel: function(t) {
            return this.unbind("mousewheel", t)
        }
    })
}), function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function(t) {
    function e(t) {
        return a.raw ? t : encodeURIComponent(t)
    }
    function n(t) {
        return a.raw ? t : decodeURIComponent(t)
    }
    function r(t) {
        return e(a.json ? JSON.stringify(t) : String(t))
    }
    function i(t) {
        0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return t = decodeURIComponent(t.replace(s, " ")), a.json ? JSON.parse(t) : t
        } catch (e) {}
    }
    function o(e, n) {
        var r = a.raw ? e : i(e);
        return t.isFunction(n) ? n(r) : r
    }
    var s = /\+/g,
        a = t.cookie = function(i, s, l) {
            if (void 0 !== s && !t.isFunction(s)) {
                if (l = t.extend({}, a.defaults, l), "number" == typeof l.expires) {
                    var u = l.expires,
                        c = l.expires = new Date;
                    c.setTime(+c + 864e5 * u)
                }
                return document.cookie = [e(i), "=", r(s), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
            }
            for (var f = i ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], p = 0, d = h.length; d > p; p++) {
                var g = h[p].split("="),
                    v = n(g.shift()),
                    m = g.join("=");
                if (i && i === v) {
                    f = o(m, s);
                    break
                }
                i || void 0 === (m = o(m)) || (f[v] = m)
            }
            return f
        };
    a.defaults = {}, t.removeCookie = function(e, n) {
        return void 0 === t.cookie(e) ? !1 : (t.cookie(e, "", t.extend({}, n, {
            expires: -1
        })), !t.cookie(e))
    }
}), !
function(t) {
    "use strict";

    function e(e, n, r, i) {
        function o(t, e) {
            return t -= i, e -= i, 0 > t || t >= a || 0 > e || e >= a ? !1 : s.isDark(t, e)
        }
        var s = t(r, n);
        s.addData(e), s.make(), i = i || 0;
        var a = s.getModuleCount(),
            l = s.getModuleCount() + 2 * i,
            u = function(t, e, n, r) {
                var i = this.isDark,
                    o = 1 / l;
                this.isDark = function(s, a) {
                    var l = a * o,
                        u = s * o,
                        c = l + o,
                        f = u + o;
                    return i(s, a) && (t > c || l > n || e > f || u > r)
                }
            };
        this.text = e, this.level = n, this.version = r, this.moduleCount = l, this.isDark = o, this.addBlank = u
    }
    function n(t, n, r, i, o) {
        r = Math.max(1, r || 1), i = Math.min(40, i || 40);
        for (var s = r; i >= s; s += 1) try {
            return new e(t, n, s, o)
        } catch (a) {}
    }
    function r(t, e, n) {
        var r = n.size,
            i = "bold " + n.mSize * r + "px " + n.fontname,
            o = v("<canvas/>")[0].getContext("2d");
        o.font = i;
        var s = o.measureText(n.label).width,
            a = n.mSize,
            l = s / r,
            u = (1 - l) * n.mPosX,
            c = (1 - a) * n.mPosY,
            f = u + l,
            h = c + a,
            p = .01;
        1 === n.mode ? t.addBlank(0, c - p, r, h + p) : t.addBlank(u - p, c - p, f + p, h + p), e.fillStyle = n.fontcolor, e.font = i, e.fillText(n.label, u * r, c * r + .75 * n.mSize * r)
    }
    function i(t, e, n) {
        var r = n.size,
            i = n.image.naturalWidth || 1,
            o = n.image.naturalHeight || 1,
            s = n.mSize,
            a = s * i / o,
            l = (1 - a) * n.mPosX,
            u = (1 - s) * n.mPosY,
            c = l + a,
            f = u + s,
            h = .01;
        3 === n.mode ? t.addBlank(0, u - h, r, f + h) : t.addBlank(l - h, u - h, c + h, f + h), e.drawImage(n.image, l * r, u * r, a * r, s * r)
    }
    function o(t, e, n) {
        v(n.background).is("img") ? e.drawImage(n.background, 0, 0, n.size, n.size) : n.background && (e.fillStyle = n.background, e.fillRect(n.left, n.top, n.size, n.size));
        var o = n.mode;
        1 === o || 2 === o ? r(t, e, n) : (3 === o || 4 === o) && i(t, e, n)
    }
    function s(t, e, n, r, i, o, s, a) {
        t.isDark(s, a) && e.rect(r, i, o, o)
    }
    function a(t, e, n, r, i, o, s, a, l, u) {
        s ? t.moveTo(e + o, n) : t.moveTo(e, n), a ? (t.lineTo(r - o, n), t.arcTo(r, n, r, i, o)) : t.lineTo(r, n), l ? (t.lineTo(r, i - o), t.arcTo(r, i, e, i, o)) : t.lineTo(r, i), u ? (t.lineTo(e + o, i), t.arcTo(e, i, e, n, o)) : t.lineTo(e, i), s ? (t.lineTo(e, n + o), t.arcTo(e, n, r, n, o)) : t.lineTo(e, n)
    }
    function l(t, e, n, r, i, o, s, a, l, u) {
        s && (t.moveTo(e + o, n), t.lineTo(e, n), t.lineTo(e, n + o), t.arcTo(e, n, e + o, n, o)), a && (t.moveTo(r - o, n), t.lineTo(r, n), t.lineTo(r, n + o), t.arcTo(r, n, r - o, n, o)), l && (t.moveTo(r - o, i), t.lineTo(r, i), t.lineTo(r, i - o), t.arcTo(r, i, r - o, i, o)), u && (t.moveTo(e + o, i), t.lineTo(e, i), t.lineTo(e, i - o), t.arcTo(e, i, e + o, i, o))
    }
    function u(t, e, n, r, i, o, s, u) {
        var c = t.isDark,
            f = r + o,
            h = i + o,
            p = n.radius * o,
            d = s - 1,
            g = s + 1,
            v = u - 1,
            m = u + 1,
            y = c(s, u),
            w = c(d, v),
            b = c(d, u),
            x = c(d, m),
            A = c(s, m),
            C = c(g, m),
            T = c(g, u),
            E = c(g, v),
            k = c(s, v);
        y ? a(e, r, i, f, h, p, !b && !k, !b && !A, !T && !A, !T && !k) : l(e, r, i, f, h, p, b && k && w, b && A && x, T && A && C, T && k && E)
    }
    function c(t, e, n) {
        var r, i, o = t.moduleCount,
            a = n.size / o,
            l = s;
        for (y && n.radius > 0 && n.radius <= .5 && (l = u), e.beginPath(), r = 0; o > r; r += 1) for (i = 0; o > i; i += 1) {
            var c = n.left + i * a,
                f = n.top + r * a,
                h = a;
            l(t, e, n, c, f, h, r, i)
        }
        if (v(n.fill).is("img")) {
            e.strokeStyle = "rgba(0,0,0,0.5)", e.lineWidth = 2, e.stroke();
            var p = e.globalCompositeOperation;
            e.globalCompositeOperation = "destination-out", e.fill(), e.globalCompositeOperation = p, e.clip(), e.drawImage(n.fill, 0, 0, n.size, n.size), e.restore()
        } else e.fillStyle = n.fill, e.fill()
    }
    function f(t, e) {
        var r = n(e.text, e.ecLevel, e.minVersion, e.maxVersion, e.quiet);
        if (!r) return null;
        var i = v(t).data("qrcode", r),
            s = i[0].getContext("2d");
        return o(r, s, e), c(r, s, e), i
    }
    function h(t) {
        var e = v("<canvas/>").attr("width", t.size).attr("height", t.size);
        return f(e, t)
    }
    function p(t) {
        return v("<img/>").attr("src", h(t)[0].toDataURL("image/png"))
    }
    function d(t) {
        var e = n(t.text, t.ecLevel, t.minVersion, t.maxVersion, t.quiet);
        if (!e) return null;
        var r, i, o = t.size,
            s = t.background,
            a = Math.floor,
            l = e.moduleCount,
            u = a(o / l),
            c = a(.5 * (o - u * l)),
            f = {
                position: "relative",
                left: 0,
                top: 0,
                padding: 0,
                margin: 0,
                width: o,
                height: o
            },
            h = {
                position: "absolute",
                padding: 0,
                margin: 0,
                width: u,
                height: u,
                "background-color": t.fill
            },
            p = v("<div/>").data("qrcode", e).css(f);
        for (s && p.css("background-color", s), r = 0; l > r; r += 1) for (i = 0; l > i; i += 1) e.isDark(r, i) && v("<div/>").css(h).css({
            left: c + i * u,
            top: c + r * u
        }).appendTo(p);
        return p
    }
    function g(t) {
        return m && "canvas" === t.render ? h(t) : m && "image" === t.render ? p(t) : d(t)
    }
    var v = jQuery,
        m = function() {
            var t = document.createElement("canvas");
            return Boolean(t.getContext && t.getContext("2d"))
        }(),
        y = "[object Opera]" !== Object.prototype.toString.call(window.opera),
        w = {
            render: "canvas",
            minVersion: 1,
            maxVersion: 40,
            ecLevel: "L",
            left: 0,
            top: 0,
            size: 200,
            fill: "#000",
            background: null,
            text: "no text",
            radius: 0,
            quiet: 0,
            mode: 0,
            mSize: .1,
            mPosX: .5,
            mPosY: .5,
            label: "no label",
            fontname: "sans",
            fontcolor: "#000",
            image: null
        };
    v.fn.qrcode = function(t) {
        var e = v.extend({}, w, t);
        return this.each(function() {
            "canvas" === this.nodeName.toLowerCase() ? f(this, e) : v(this).append(g(e))
        })
    }
}(function() {
    var t = function() {
            function t(e, n) {
                if ("undefined" == typeof e.length) throw new Error(e.length + "/" + n);
                var r = function() {
                        for (var t = 0; t < e.length && 0 == e[t];) t += 1;
                        for (var r = new Array(e.length - t + n), i = 0; i < e.length - t; i += 1) r[i] = e[i + t];
                        return r
                    }(),
                    i = {};
                return i.getAt = function(t) {
                    return r[t]
                }, i.getLength = function() {
                    return r.length
                }, i.multiply = function(e) {
                    for (var n = new Array(i.getLength() + e.getLength() - 1), r = 0; r < i.getLength(); r += 1) for (var o = 0; o < e.getLength(); o += 1) n[r + o] ^= s.gexp(s.glog(i.getAt(r)) + s.glog(e.getAt(o)));
                    return t(n, 0)
                }, i.mod = function(e) {
                    if (i.getLength() - e.getLength() < 0) return i;
                    for (var n = s.glog(i.getAt(0)) - s.glog(e.getAt(0)), r = new Array(i.getLength()), o = 0; o < i.getLength(); o += 1) r[o] = i.getAt(o);
                    for (var o = 0; o < e.getLength(); o += 1) r[o] ^= s.gexp(s.glog(e.getAt(o)) + n);
                    return t(r, 0).mod(e)
                }, i
            }
            var e = function(e, n) {
                    var i = 236,
                        s = 17,
                        c = e,
                        f = r[n],
                        h = null,
                        p = 0,
                        g = null,
                        v = new Array,
                        m = {},
                        y = function(t, e) {
                            p = 4 * c + 17, h = function(t) {
                                for (var e = new Array(t), n = 0; t > n; n += 1) {
                                    e[n] = new Array(t);
                                    for (var r = 0; t > r; r += 1) e[n][r] = null
                                }
                                return e
                            }(p), w(0, 0), w(p - 7, 0), w(0, p - 7), A(), x(), T(t, e), c >= 7 && C(t), null == g && (g = S(c, f, v)), E(g, e)
                        },
                        w = function(t, e) {
                            for (var n = -1; 7 >= n; n += 1) if (!(-1 >= t + n || t + n >= p)) for (var r = -1; 7 >= r; r += 1) - 1 >= e + r || e + r >= p || (n >= 0 && 6 >= n && (0 == r || 6 == r) || r >= 0 && 6 >= r && (0 == n || 6 == n) || n >= 2 && 4 >= n && r >= 2 && 4 >= r ? h[t + n][e + r] = !0 : h[t + n][e + r] = !1)
                        },
                        b = function() {
                            for (var t = 0, e = 0, n = 0; 8 > n; n += 1) {
                                y(!0, n);
                                var r = o.getLostPoint(m);
                                (0 == n || t > r) && (t = r, e = n)
                            }
                            return e
                        },
                        x = function() {
                            for (var t = 8; p - 8 > t; t += 1) null == h[t][6] && (h[t][6] = t % 2 == 0);
                            for (var e = 8; p - 8 > e; e += 1) null == h[6][e] && (h[6][e] = e % 2 == 0)
                        },
                        A = function() {
                            for (var t = o.getPatternPosition(c), e = 0; e < t.length; e += 1) for (var n = 0; n < t.length; n += 1) {
                                var r = t[e],
                                    i = t[n];
                                if (null == h[r][i]) for (var s = -2; 2 >= s; s += 1) for (var a = -2; 2 >= a; a += 1) - 2 == s || 2 == s || -2 == a || 2 == a || 0 == s && 0 == a ? h[r + s][i + a] = !0 : h[r + s][i + a] = !1
                            }
                        },
                        C = function(t) {
                            for (var e = o.getBCHTypeNumber(c), n = 0; 18 > n; n += 1) {
                                var r = !t && 1 == (e >> n & 1);
                                h[Math.floor(n / 3)][n % 3 + p - 8 - 3] = r
                            }
                            for (var n = 0; 18 > n; n += 1) {
                                var r = !t && 1 == (e >> n & 1);
                                h[n % 3 + p - 8 - 3][Math.floor(n / 3)] = r
                            }
                        },
                        T = function(t, e) {
                            for (var n = f << 3 | e, r = o.getBCHTypeInfo(n), i = 0; 15 > i; i += 1) {
                                var s = !t && 1 == (r >> i & 1);
                                6 > i ? h[i][8] = s : 8 > i ? h[i + 1][8] = s : h[p - 15 + i][8] = s
                            }
                            for (var i = 0; 15 > i; i += 1) {
                                var s = !t && 1 == (r >> i & 1);
                                8 > i ? h[8][p - i - 1] = s : 9 > i ? h[8][15 - i - 1 + 1] = s : h[8][15 - i - 1] = s
                            }
                            h[p - 8][8] = !t
                        },
                        E = function(t, e) {
                            for (var n = -1, r = p - 1, i = 7, s = 0, a = o.getMaskFunction(e), l = p - 1; l > 0; l -= 2) for (6 == l && (l -= 1);;) {
                                for (var u = 0; 2 > u; u += 1) if (null == h[r][l - u]) {
                                    var c = !1;
                                    s < t.length && (c = 1 == (t[s] >>> i & 1));
                                    var f = a(r, l - u);
                                    f && (c = !c), h[r][l - u] = c, i -= 1, -1 == i && (s += 1, i = 7)
                                }
                                if (r += n, 0 > r || r >= p) {
                                    r -= n, n = -n;
                                    break
                                }
                            }
                        },
                        k = function(e, n) {
                            for (var r = 0, i = 0, s = 0, a = new Array(n.length), l = new Array(n.length), u = 0; u < n.length; u += 1) {
                                var c = n[u].dataCount,
                                    f = n[u].totalCount - c;
                                i = Math.max(i, c), s = Math.max(s, f), a[u] = new Array(c);
                                for (var h = 0; h < a[u].length; h += 1) a[u][h] = 255 & e.getBuffer()[h + r];
                                r += c;
                                var p = o.getErrorCorrectPolynomial(f),
                                    d = t(a[u], p.getLength() - 1),
                                    g = d.mod(p);
                                l[u] = new Array(p.getLength() - 1);
                                for (var h = 0; h < l[u].length; h += 1) {
                                    var v = h + g.getLength() - l[u].length;
                                    l[u][h] = v >= 0 ? g.getAt(v) : 0
                                }
                            }
                            for (var m = 0, h = 0; h < n.length; h += 1) m += n[h].totalCount;
                            for (var y = new Array(m), w = 0, h = 0; i > h; h += 1) for (var u = 0; u < n.length; u += 1) h < a[u].length && (y[w] = a[u][h], w += 1);
                            for (var h = 0; s > h; h += 1) for (var u = 0; u < n.length; u += 1) h < l[u].length && (y[w] = l[u][h], w += 1);
                            return y
                        },
                        S = function(t, e, n) {
                            for (var r = a.getRSBlocks(t, e), u = l(), c = 0; c < n.length; c += 1) {
                                var f = n[c];
                                u.put(f.getMode(), 4), u.put(f.getLength(), o.getLengthInBits(f.getMode(), t)), f.write(u)
                            }
                            for (var h = 0, c = 0; c < r.length; c += 1) h += r[c].dataCount;
                            if (u.getLengthInBits() > 8 * h) throw new Error("code length overflow. (" + u.getLengthInBits() + ">" + 8 * h + ")");
                            for (u.getLengthInBits() + 4 <= 8 * h && u.put(0, 4); u.getLengthInBits() % 8 != 0;) u.putBit(!1);
                            for (; !(u.getLengthInBits() >= 8 * h) && (u.put(i, 8), !(u.getLengthInBits() >= 8 * h));) u.put(s, 8);
                            return k(u, r)
                        };
                    return m.addData = function(t) {
                        var e = u(t);
                        v.push(e), g = null
                    }, m.isDark = function(t, e) {
                        if (0 > t || t >= p || 0 > e || e >= p) throw new Error(t + "," + e);
                        return h[t][e]
                    }, m.getModuleCount = function() {
                        return p
                    }, m.make = function() {
                        y(!1, b())
                    }, m.createTableTag = function(t, e) {
                        t = t || 2, e = "undefined" == typeof e ? 4 * t : e;
                        var n = "";
                        n += '<table style="', n += " border-width: 0px; border-style: none;", n += " border-collapse: collapse;", n += " padding: 0px; margin: " + e + "px;", n += '">', n += "<tbody>";
                        for (var r = 0; r < m.getModuleCount(); r += 1) {
                            n += "<tr>";
                            for (var i = 0; i < m.getModuleCount(); i += 1) n += '<td style="', n += " border-width: 0px; border-style: none;", n += " border-collapse: collapse;", n += " padding: 0px; margin: 0px;", n += " width: " + t + "px;", n += " height: " + t + "px;", n += " background-color: ", n += m.isDark(r, i) ? "#000000" : "#ffffff", n += ";", n += '"/>';
                            n += "</tr>"
                        }
                        return n += "</tbody>", n += "</table>"
                    }, m.createImgTag = function(t, e) {
                        t = t || 2, e = "undefined" == typeof e ? 4 * t : e;
                        var n = m.getModuleCount() * t + 2 * e,
                            r = e,
                            i = n - e;
                        return d(n, n, function(e, n) {
                            if (e >= r && i > e && n >= r && i > n) {
                                var o = Math.floor((e - r) / t),
                                    s = Math.floor((n - r) / t);
                                return m.isDark(s, o) ? 0 : 1
                            }
                            return 1
                        })
                    }, m
                };
            e.stringToBytes = function(t) {
                for (var e = new Array, n = 0; n < t.length; n += 1) {
                    var r = t.charCodeAt(n);
                    e.push(255 & r)
                }
                return e
            }, e.createStringToBytes = function(t, e) {
                var n = function() {
                        for (var n = h(t), r = function() {
                                var t = n.read();
                                if (-1 == t) throw new Error;
                                return t
                            }, i = 0, o = {};;) {
                            var s = n.read();
                            if (-1 == s) break;
                            var a = r(),
                                l = r(),
                                u = r(),
                                c = String.fromCharCode(s << 8 | a),
                                f = l << 8 | u;
                            o[c] = f, i += 1
                        }
                        if (i != e) throw new Error(i + " != " + e);
                        return o
                    }(),
                    r = "?".charCodeAt(0);
                return function(t) {
                    for (var e = new Array, i = 0; i < t.length; i += 1) {
                        var o = t.charCodeAt(i);
                        if (128 > o) e.push(o);
                        else {
                            var s = n[t.charAt(i)];
                            "number" == typeof s ? (255 & s) == s ? e.push(s) : (e.push(s >>> 8), e.push(255 & s)) : e.push(r)
                        }
                    }
                    return e
                }
            };
            var n = {
                MODE_NUMBER: 1,
                MODE_ALPHA_NUM: 2,
                MODE_8BIT_BYTE: 4,
                MODE_KANJI: 8
            },
                r = {
                    L: 1,
                    M: 0,
                    Q: 3,
                    H: 2
                },
                i = {
                    PATTERN000: 0,
                    PATTERN001: 1,
                    PATTERN010: 2,
                    PATTERN011: 3,
                    PATTERN100: 4,
                    PATTERN101: 5,
                    PATTERN110: 6,
                    PATTERN111: 7
                },
                o = function() {
                    var e = [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ],
                        r = 1335,
                        o = 7973,
                        a = 21522,
                        l = {},
                        u = function(t) {
                            for (var e = 0; 0 != t;) e += 1, t >>>= 1;
                            return e
                        };
                    return l.getBCHTypeInfo = function(t) {
                        for (var e = t << 10; u(e) - u(r) >= 0;) e ^= r << u(e) - u(r);
                        return (t << 10 | e) ^ a
                    }, l.getBCHTypeNumber = function(t) {
                        for (var e = t << 12; u(e) - u(o) >= 0;) e ^= o << u(e) - u(o);
                        return t << 12 | e
                    }, l.getPatternPosition = function(t) {
                        return e[t - 1]
                    }, l.getMaskFunction = function(t) {
                        switch (t) {
                        case i.PATTERN000:
                            return function(t, e) {
                                return (t + e) % 2 == 0
                            };
                        case i.PATTERN001:
                            return function(t, e) {
                                return t % 2 == 0
                            };
                        case i.PATTERN010:
                            return function(t, e) {
                                return e % 3 == 0
                            };
                        case i.PATTERN011:
                            return function(t, e) {
                                return (t + e) % 3 == 0
                            };
                        case i.PATTERN100:
                            return function(t, e) {
                                return (Math.floor(t / 2) + Math.floor(e / 3)) % 2 == 0
                            };
                        case i.PATTERN101:
                            return function(t, e) {
                                return t * e % 2 + t * e % 3 == 0
                            };
                        case i.PATTERN110:
                            return function(t, e) {
                                return (t * e % 2 + t * e % 3) % 2 == 0
                            };
                        case i.PATTERN111:
                            return function(t, e) {
                                return (t * e % 3 + (t + e) % 2) % 2 == 0
                            };
                        default:
                            throw new Error("bad maskPattern:" + t)
                        }
                    }, l.getErrorCorrectPolynomial = function(e) {
                        for (var n = t([1], 0), r = 0; e > r; r += 1) n = n.multiply(t([1, s.gexp(r)], 0));
                        return n
                    }, l.getLengthInBits = function(t, e) {
                        if (e >= 1 && 10 > e) switch (t) {
                        case n.MODE_NUMBER:
                            return 10;
                        case n.MODE_ALPHA_NUM:
                            return 9;
                        case n.MODE_8BIT_BYTE:
                            return 8;
                        case n.MODE_KANJI:
                            return 8;
                        default:
                            throw new Error("mode:" + t)
                        } else if (27 > e) switch (t) {
                        case n.MODE_NUMBER:
                            return 12;
                        case n.MODE_ALPHA_NUM:
                            return 11;
                        case n.MODE_8BIT_BYTE:
                            return 16;
                        case n.MODE_KANJI:
                            return 10;
                        default:
                            throw new Error("mode:" + t)
                        } else {
                            if (!(41 > e)) throw new Error("type:" + e);
                            switch (t) {
                            case n.MODE_NUMBER:
                                return 14;
                            case n.MODE_ALPHA_NUM:
                                return 13;
                            case n.MODE_8BIT_BYTE:
                                return 16;
                            case n.MODE_KANJI:
                                return 12;
                            default:
                                throw new Error("mode:" + t)
                            }
                        }
                    }, l.getLostPoint = function(t) {
                        for (var e = t.getModuleCount(), n = 0, r = 0; e > r; r += 1) for (var i = 0; e > i; i += 1) {
                            for (var o = 0, s = t.isDark(r, i), a = -1; 1 >= a; a += 1) if (!(0 > r + a || r + a >= e)) for (var l = -1; 1 >= l; l += 1) 0 > i + l || i + l >= e || (0 != a || 0 != l) && s == t.isDark(r + a, i + l) && (o += 1);
                            o > 5 && (n += 3 + o - 5)
                        }
                        for (var r = 0; e - 1 > r; r += 1) for (var i = 0; e - 1 > i; i += 1) {
                            var u = 0;
                            t.isDark(r, i) && (u += 1), t.isDark(r + 1, i) && (u += 1), t.isDark(r, i + 1) && (u += 1), t.isDark(r + 1, i + 1) && (u += 1), (0 == u || 4 == u) && (n += 3)
                        }
                        for (var r = 0; e > r; r += 1) for (var i = 0; e - 6 > i; i += 1) t.isDark(r, i) && !t.isDark(r, i + 1) && t.isDark(r, i + 2) && t.isDark(r, i + 3) && t.isDark(r, i + 4) && !t.isDark(r, i + 5) && t.isDark(r, i + 6) && (n += 40);
                        for (var i = 0; e > i; i += 1) for (var r = 0; e - 6 > r; r += 1) t.isDark(r, i) && !t.isDark(r + 1, i) && t.isDark(r + 2, i) && t.isDark(r + 3, i) && t.isDark(r + 4, i) && !t.isDark(r + 5, i) && t.isDark(r + 6, i) && (n += 40);
                        for (var c = 0, i = 0; e > i; i += 1) for (var r = 0; e > r; r += 1) t.isDark(r, i) && (c += 1);
                        var f = Math.abs(100 * c / e / e - 50) / 5;
                        return n += 10 * f
                    }, l
                }(),
                s = function() {
                    for (var t = new Array(256), e = new Array(256), n = 0; 8 > n; n += 1) t[n] = 1 << n;
                    for (var n = 8; 256 > n; n += 1) t[n] = t[n - 4] ^ t[n - 5] ^ t[n - 6] ^ t[n - 8];
                    for (var n = 0; 255 > n; n += 1) e[t[n]] = n;
                    var r = {};
                    return r.glog = function(t) {
                        if (1 > t) throw new Error("glog(" + t + ")");
                        return e[t]
                    }, r.gexp = function(e) {
                        for (; 0 > e;) e += 255;
                        for (; e >= 256;) e -= 255;
                        return t[e]
                    }, r
                }(),
                a = function() {
                    var t = [
                        [1, 26, 19],
                        [1, 26, 16],
                        [1, 26, 13],
                        [1, 26, 9],
                        [1, 44, 34],
                        [1, 44, 28],
                        [1, 44, 22],
                        [1, 44, 16],
                        [1, 70, 55],
                        [1, 70, 44],
                        [2, 35, 17],
                        [2, 35, 13],
                        [1, 100, 80],
                        [2, 50, 32],
                        [2, 50, 24],
                        [4, 25, 9],
                        [1, 134, 108],
                        [2, 67, 43],
                        [2, 33, 15, 2, 34, 16],
                        [2, 33, 11, 2, 34, 12],
                        [2, 86, 68],
                        [4, 43, 27],
                        [4, 43, 19],
                        [4, 43, 15],
                        [2, 98, 78],
                        [4, 49, 31],
                        [2, 32, 14, 4, 33, 15],
                        [4, 39, 13, 1, 40, 14],
                        [2, 121, 97],
                        [2, 60, 38, 2, 61, 39],
                        [4, 40, 18, 2, 41, 19],
                        [4, 40, 14, 2, 41, 15],
                        [2, 146, 116],
                        [3, 58, 36, 2, 59, 37],
                        [4, 36, 16, 4, 37, 17],
                        [4, 36, 12, 4, 37, 13],
                        [2, 86, 68, 2, 87, 69],
                        [4, 69, 43, 1, 70, 44],
                        [6, 43, 19, 2, 44, 20],
                        [6, 43, 15, 2, 44, 16],
                        [4, 101, 81],
                        [1, 80, 50, 4, 81, 51],
                        [4, 50, 22, 4, 51, 23],
                        [3, 36, 12, 8, 37, 13],
                        [2, 116, 92, 2, 117, 93],
                        [6, 58, 36, 2, 59, 37],
                        [4, 46, 20, 6, 47, 21],
                        [7, 42, 14, 4, 43, 15],
                        [4, 133, 107],
                        [8, 59, 37, 1, 60, 38],
                        [8, 44, 20, 4, 45, 21],
                        [12, 33, 11, 4, 34, 12],
                        [3, 145, 115, 1, 146, 116],
                        [4, 64, 40, 5, 65, 41],
                        [11, 36, 16, 5, 37, 17],
                        [11, 36, 12, 5, 37, 13],
                        [5, 109, 87, 1, 110, 88],
                        [5, 65, 41, 5, 66, 42],
                        [5, 54, 24, 7, 55, 25],
                        [11, 36, 12, 7, 37, 13],
                        [5, 122, 98, 1, 123, 99],
                        [7, 73, 45, 3, 74, 46],
                        [15, 43, 19, 2, 44, 20],
                        [3, 45, 15, 13, 46, 16],
                        [1, 135, 107, 5, 136, 108],
                        [10, 74, 46, 1, 75, 47],
                        [1, 50, 22, 15, 51, 23],
                        [2, 42, 14, 17, 43, 15],
                        [5, 150, 120, 1, 151, 121],
                        [9, 69, 43, 4, 70, 44],
                        [17, 50, 22, 1, 51, 23],
                        [2, 42, 14, 19, 43, 15],
                        [3, 141, 113, 4, 142, 114],
                        [3, 70, 44, 11, 71, 45],
                        [17, 47, 21, 4, 48, 22],
                        [9, 39, 13, 16, 40, 14],
                        [3, 135, 107, 5, 136, 108],
                        [3, 67, 41, 13, 68, 42],
                        [15, 54, 24, 5, 55, 25],
                        [15, 43, 15, 10, 44, 16],
                        [4, 144, 116, 4, 145, 117],
                        [17, 68, 42],
                        [17, 50, 22, 6, 51, 23],
                        [19, 46, 16, 6, 47, 17],
                        [2, 139, 111, 7, 140, 112],
                        [17, 74, 46],
                        [7, 54, 24, 16, 55, 25],
                        [34, 37, 13],
                        [4, 151, 121, 5, 152, 122],
                        [4, 75, 47, 14, 76, 48],
                        [11, 54, 24, 14, 55, 25],
                        [16, 45, 15, 14, 46, 16],
                        [6, 147, 117, 4, 148, 118],
                        [6, 73, 45, 14, 74, 46],
                        [11, 54, 24, 16, 55, 25],
                        [30, 46, 16, 2, 47, 17],
                        [8, 132, 106, 4, 133, 107],
                        [8, 75, 47, 13, 76, 48],
                        [7, 54, 24, 22, 55, 25],
                        [22, 45, 15, 13, 46, 16],
                        [10, 142, 114, 2, 143, 115],
                        [19, 74, 46, 4, 75, 47],
                        [28, 50, 22, 6, 51, 23],
                        [33, 46, 16, 4, 47, 17],
                        [8, 152, 122, 4, 153, 123],
                        [22, 73, 45, 3, 74, 46],
                        [8, 53, 23, 26, 54, 24],
                        [12, 45, 15, 28, 46, 16],
                        [3, 147, 117, 10, 148, 118],
                        [3, 73, 45, 23, 74, 46],
                        [4, 54, 24, 31, 55, 25],
                        [11, 45, 15, 31, 46, 16],
                        [7, 146, 116, 7, 147, 117],
                        [21, 73, 45, 7, 74, 46],
                        [1, 53, 23, 37, 54, 24],
                        [19, 45, 15, 26, 46, 16],
                        [5, 145, 115, 10, 146, 116],
                        [19, 75, 47, 10, 76, 48],
                        [15, 54, 24, 25, 55, 25],
                        [23, 45, 15, 25, 46, 16],
                        [13, 145, 115, 3, 146, 116],
                        [2, 74, 46, 29, 75, 47],
                        [42, 54, 24, 1, 55, 25],
                        [23, 45, 15, 28, 46, 16],
                        [17, 145, 115],
                        [10, 74, 46, 23, 75, 47],
                        [10, 54, 24, 35, 55, 25],
                        [19, 45, 15, 35, 46, 16],
                        [17, 145, 115, 1, 146, 116],
                        [14, 74, 46, 21, 75, 47],
                        [29, 54, 24, 19, 55, 25],
                        [11, 45, 15, 46, 46, 16],
                        [13, 145, 115, 6, 146, 116],
                        [14, 74, 46, 23, 75, 47],
                        [44, 54, 24, 7, 55, 25],
                        [59, 46, 16, 1, 47, 17],
                        [12, 151, 121, 7, 152, 122],
                        [12, 75, 47, 26, 76, 48],
                        [39, 54, 24, 14, 55, 25],
                        [22, 45, 15, 41, 46, 16],
                        [6, 151, 121, 14, 152, 122],
                        [6, 75, 47, 34, 76, 48],
                        [46, 54, 24, 10, 55, 25],
                        [2, 45, 15, 64, 46, 16],
                        [17, 152, 122, 4, 153, 123],
                        [29, 74, 46, 14, 75, 47],
                        [49, 54, 24, 10, 55, 25],
                        [24, 45, 15, 46, 46, 16],
                        [4, 152, 122, 18, 153, 123],
                        [13, 74, 46, 32, 75, 47],
                        [48, 54, 24, 14, 55, 25],
                        [42, 45, 15, 32, 46, 16],
                        [20, 147, 117, 4, 148, 118],
                        [40, 75, 47, 7, 76, 48],
                        [43, 54, 24, 22, 55, 25],
                        [10, 45, 15, 67, 46, 16],
                        [19, 148, 118, 6, 149, 119],
                        [18, 75, 47, 31, 76, 48],
                        [34, 54, 24, 34, 55, 25],
                        [20, 45, 15, 61, 46, 16]
                    ],
                        e = function(t, e) {
                            var n = {};
                            return n.totalCount = t, n.dataCount = e, n
                        },
                        n = {},
                        i = function(e, n) {
                            switch (n) {
                            case r.L:
                                return t[4 * (e - 1) + 0];
                            case r.M:
                                return t[4 * (e - 1) + 1];
                            case r.Q:
                                return t[4 * (e - 1) + 2];
                            case r.H:
                                return t[4 * (e - 1) + 3];
                            default:
                                return
                            }
                        };
                    return n.getRSBlocks = function(t, n) {
                        var r = i(t, n);
                        if ("undefined" == typeof r) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + n);
                        for (var o = r.length / 3, s = new Array, a = 0; o > a; a += 1) for (var l = r[3 * a + 0], u = r[3 * a + 1], c = r[3 * a + 2], f = 0; l > f; f += 1) s.push(e(u, c));
                        return s
                    }, n
                }(),
                l = function() {
                    var t = new Array,
                        e = 0,
                        n = {};
                    return n.getBuffer = function() {
                        return t
                    }, n.getAt = function(e) {
                        var n = Math.floor(e / 8);
                        return 1 == (t[n] >>> 7 - e % 8 & 1)
                    }, n.put = function(t, e) {
                        for (var r = 0; e > r; r += 1) n.putBit(1 == (t >>> e - r - 1 & 1))
                    }, n.getLengthInBits = function() {
                        return e
                    }, n.putBit = function(n) {
                        var r = Math.floor(e / 8);
                        t.length <= r && t.push(0), n && (t[r] |= 128 >>> e % 8), e += 1
                    }, n
                },
                u = function(t) {
                    var r = n.MODE_8BIT_BYTE,
                        i = e.stringToBytes(t),
                        o = {};
                    return o.getMode = function() {
                        return r
                    }, o.getLength = function(t) {
                        return i.length
                    }, o.write = function(t) {
                        for (var e = 0; e < i.length; e += 1) t.put(i[e], 8)
                    }, o
                },
                c = function() {
                    var t = new Array,
                        e = {};
                    return e.writeByte = function(e) {
                        t.push(255 & e)
                    }, e.writeShort = function(t) {
                        e.writeByte(t), e.writeByte(t >>> 8)
                    }, e.writeBytes = function(t, n, r) {
                        n = n || 0, r = r || t.length;
                        for (var i = 0; r > i; i += 1) e.writeByte(t[i + n])
                    }, e.writeString = function(t) {
                        for (var n = 0; n < t.length; n += 1) e.writeByte(t.charCodeAt(n))
                    }, e.toByteArray = function() {
                        return t
                    }, e.toString = function() {
                        var e = "";
                        e += "[";
                        for (var n = 0; n < t.length; n += 1) n > 0 && (e += ","), e += t[n];
                        return e += "]"
                    }, e
                },
                f = function() {
                    var t = 0,
                        e = 0,
                        n = 0,
                        r = "",
                        i = {},
                        o = function(t) {
                            r += String.fromCharCode(s(63 & t))
                        },
                        s = function(t) {
                            if (0 > t);
                            else {
                                if (26 > t) return 65 + t;
                                if (52 > t) return 97 + (t - 26);
                                if (62 > t) return 48 + (t - 52);
                                if (62 == t) return 43;
                                if (63 == t) return 47
                            }
                            throw new Error("n:" + t)
                        };
                    return i.writeByte = function(r) {
                        for (t = t << 8 | 255 & r, e += 8, n += 1; e >= 6;) o(t >>> e - 6), e -= 6
                    }, i.flush = function() {
                        if (e > 0 && (o(t << 6 - e), t = 0, e = 0), n % 3 != 0) for (var i = 3 - n % 3, s = 0; i > s; s += 1) r += "="
                    }, i.toString = function() {
                        return r
                    }, i
                },
                h = function(t) {
                    var e = t,
                        n = 0,
                        r = 0,
                        i = 0,
                        o = {};
                    o.read = function() {
                        for (; 8 > i;) {
                            if (n >= e.length) {
                                if (0 == i) return -1;
                                throw new Error("unexpected end of file./" + i)
                            }
                            var t = e.charAt(n);
                            if (n += 1, "=" == t) return i = 0, -1;
                            t.match(/^\s$/) || (r = r << 6 | s(t.charCodeAt(0)), i += 6)
                        }
                        var o = r >>> i - 8 & 255;
                        return i -= 8, o
                    };
                    var s = function(t) {
                            if (t >= 65 && 90 >= t) return t - 65;
                            if (t >= 97 && 122 >= t) return t - 97 + 26;
                            if (t >= 48 && 57 >= t) return t - 48 + 52;
                            if (43 == t) return 62;
                            if (47 == t) return 63;
                            throw new Error("c:" + t)
                        };
                    return o
                },
                p = function(t, e) {
                    var n = t,
                        r = e,
                        i = new Array(t * e),
                        o = {};
                    o.setPixel = function(t, e, r) {
                        i[e * n + t] = r
                    }, o.write = function(t) {
                        t.writeString("GIF87a"), t.writeShort(n), t.writeShort(r), t.writeByte(128), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(255), t.writeByte(255), t.writeByte(255), t.writeString(","), t.writeShort(0), t.writeShort(0), t.writeShort(n), t.writeShort(r), t.writeByte(0);
                        var e = 2,
                            i = a(e);
                        t.writeByte(e);
                        for (var o = 0; i.length - o > 255;) t.writeByte(255), t.writeBytes(i, o, 255), o += 255;
                        t.writeByte(i.length - o), t.writeBytes(i, o, i.length - o), t.writeByte(0), t.writeString(";")
                    };
                    var s = function(t) {
                            var e = t,
                                n = 0,
                                r = 0,
                                i = {};
                            return i.write = function(t, i) {
                                if (t >>> i != 0) throw new Error("length over");
                                for (; n + i >= 8;) e.writeByte(255 & (t << n | r)), i -= 8 - n, t >>>= 8 - n, r = 0, n = 0;
                                r = t << n | r, n += i
                            }, i.flush = function() {
                                n > 0 && e.writeByte(r)
                            }, i
                        },
                        a = function(t) {
                            for (var e = 1 << t, n = (1 << t) + 1, r = t + 1, o = l(), a = 0; e > a; a += 1) o.add(String.fromCharCode(a));
                            o.add(String.fromCharCode(e)), o.add(String.fromCharCode(n));
                            var u = c(),
                                f = s(u);
                            f.write(e, r);
                            var h = 0,
                                p = String.fromCharCode(i[h]);
                            for (h += 1; h < i.length;) {
                                var d = String.fromCharCode(i[h]);
                                h += 1, o.contains(p + d) ? p += d : (f.write(o.indexOf(p), r), o.size() < 4095 && (o.size() == 1 << r && (r += 1), o.add(p + d)), p = d)
                            }
                            return f.write(o.indexOf(p), r), f.write(n, r), f.flush(), u.toByteArray()
                        },
                        l = function() {
                            var t = {},
                                e = 0,
                                n = {};
                            return n.add = function(r) {
                                if (n.contains(r)) throw new Error("dup key:" + r);
                                t[r] = e, e += 1
                            }, n.size = function() {
                                return e
                            }, n.indexOf = function(e) {
                                return t[e]
                            }, n.contains = function(e) {
                                return "undefined" != typeof t[e]
                            }, n
                        };
                    return o
                },
                d = function(t, e, n, r) {
                    for (var i = p(t, e), o = 0; e > o; o += 1) for (var s = 0; t > s; s += 1) i.setPixel(s, o, n(s, o));
                    var a = c();
                    i.write(a);
                    for (var l = f(), u = a.toByteArray(), h = 0; h < u.length; h += 1) l.writeByte(u[h]);
                    l.flush();
                    var d = "";
                    return d += "<img", d += ' src="', d += "data:image/gif;base64,", d += l, d += '"', d += ' width="', d += t, d += '"', d += ' height="', d += e, d += '"', r && (d += ' alt="', d += r, d += '"'), d += "/>"
                };
            return e
        }();
    return function(t) {
        "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports && (module.exports = t())
    }(function() {
        return t
    }), !
    function(t) {
        t.stringToBytes = function(t) {
            function e(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var r = t.charCodeAt(n);
                    128 > r ? e.push(r) : 2048 > r ? e.push(192 | r >> 6, 128 | 63 & r) : 55296 > r || r >= 57344 ? e.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | 63 & r) : (n++, r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(n)), e.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | 63 & r))
                }
                return e
            }
            return e(t)
        }
    }(t), t
}()), function(t, e, n, r) {
    var i = t(e);
    t.fn.lazyload = function(o) {
        function s() {
            var e = 0;
            l.each(function() {
                var n = t(this);
                if (!u.skip_invisible || n.is(":visible")) if (t.abovethetop(this, u) || t.leftofbegin(this, u));
                else if (t.belowthefold(this, u) || t.rightoffold(this, u)) {
                    if (++e > u.failure_limit) return !1
                } else n.trigger("appear"), e = 0
            })
        }
        var a, l = this,
            u = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: e,
                data_attribute: "original",
                skip_invisible: !1,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
        return o && (r !== o.failurelimit && (o.failure_limit = o.failurelimit, delete o.failurelimit), r !== o.effectspeed && (o.effect_speed = o.effectspeed, delete o.effectspeed), t.extend(u, o)), a = u.container === r || u.container === e ? i : t(u.container), 0 === u.event.indexOf("scroll") && a.bind(u.event, function() {
            return s()
        }), this.each(function() {
            var e = this,
                n = t(e);
            e.loaded = !1, (n.attr("src") === r || n.attr("src") === !1) && n.is("img") && n.attr("src", u.placeholder), n.one("appear", function() {
                if (!this.loaded) {
                    if (u.appear) {
                        var r = l.length;
                        u.appear.call(e, r, u)
                    }
                    t("<img />").bind("load", function() {
                        var r = n.attr("data-" + u.data_attribute);
                        n.hide(), n.is("img") ? n.attr("src", r) : n.css("background-image", "url('" + r + "')"), n[u.effect](u.effect_speed), e.loaded = !0;
                        var i = t.grep(l, function(t) {
                            return !t.loaded
                        });
                        if (l = t(i), u.load) {
                            var o = l.length;
                            u.load.call(e, o, u)
                        }
                    }).attr("src", n.attr("data-" + u.data_attribute))
                }
            }), 0 !== u.event.indexOf("scroll") && n.bind(u.event, function() {
                e.loaded || n.trigger("appear")
            })
        }), i.bind("resize", function() {
            s()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && i.bind("pageshow", function(e) {
            e.originalEvent && e.originalEvent.persisted && l.each(function() {
                t(this).trigger("appear")
            })
        }), t(n).ready(function() {
            s()
        }), this
    }, t.belowthefold = function(n, o) {
        var s;
        return s = o.container === r || o.container === e ? (e.innerHeight ? e.innerHeight : i.height()) + i.scrollTop() : t(o.container).offset().top + t(o.container).height(), s <= t(n).offset().top - o.threshold
    }, t.rightoffold = function(n, o) {
        var s;
        return s = o.container === r || o.container === e ? i.width() + i.scrollLeft() : t(o.container).offset().left + t(o.container).width(), s <= t(n).offset().left - o.threshold
    }, t.abovethetop = function(n, o) {
        var s;
        return s = o.container === r || o.container === e ? i.scrollTop() : t(o.container).offset().top, s >= t(n).offset().top + o.threshold + t(n).height()
    }, t.leftofbegin = function(n, o) {
        var s;
        return s = o.container === r || o.container === e ? i.scrollLeft() : t(o.container).offset().left, s >= t(n).offset().left + o.threshold + t(n).width()
    }, t.inviewport = function(e, n) {
        return !(t.rightoffold(e, n) || t.leftofbegin(e, n) || t.belowthefold(e, n) || t.abovethetop(e, n))
    }, t.extend(t.expr[":"], {
        "below-the-fold": function(e) {
            return t.belowthefold(e, {
                threshold: 0
            })
        },
        "above-the-top": function(e) {
            return !t.belowthefold(e, {
                threshold: 0
            })
        },
        "right-of-screen": function(e) {
            return t.rightoffold(e, {
                threshold: 0
            })
        },
        "left-of-screen": function(e) {
            return !t.rightoffold(e, {
                threshold: 0
            })
        },
        "in-viewport": function(e) {
            return t.inviewport(e, {
                threshold: 0
            })
        },
        "above-the-fold": function(e) {
            return !t.belowthefold(e, {
                threshold: 0
            })
        },
        "right-of-fold": function(e) {
            return t.rightoffold(e, {
                threshold: 0
            })
        },
        "left-of-fold": function(e) {
            return !t.rightoffold(e, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document), function() {
    !
    function(t) {
        var e, n, r;
        return e = t.document, n = e.documentElement, r = function() {
            var t, e;
            return e = n.getBoundingClientRect().width, e > 720 && (e = 720), t = e / 20, t = Math.max(24, t), n.style.fontSize = t + "px", this
        }, t.addEventListener("resize", function() {
            var t;
            clearTimeout(t), t = setTimeout(r, 300)
        }, !1), t.addEventListener("pageshow", function(t) {
            var e;
            t.persisted && (clearTimeout(e), e = setTimeout(r, 300))
        }, !1), r()
    }(window)
}.call(this), function(t, e) {
    "object" == typeof exports && exports ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.Mustache = {})
}(this, function(t) {
    function e(t) {
        return "function" == typeof t
    }
    function n(t) {
        return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }
    function r(t, e) {
        return d.call(t, e)
    }
    function i(t) {
        return !r(g, t)
    }
    function o(t) {
        return String(t).replace(/[&<>"'\/]/g, function(t) {
            return v[t]
        })
    }
    function s(e, r) {
        function o() {
            if (A && !C) for (; v.length;) delete g[v.pop()];
            else v = [];
            A = !1, C = !1
        }
        function s(t) {
            if ("string" == typeof t && (t = t.split(y, 2)), !p(t) || 2 !== t.length) throw new Error("Invalid tags: " + t);
            c = new RegExp(n(t[0]) + "\\s*"), f = new RegExp("\\s*" + n(t[1])), h = new RegExp("\\s*" + n("}" + t[1]))
        }
        if (!e) return [];
        var c, f, h, d = [],
            g = [],
            v = [],
            A = !1,
            C = !1;
        s(r || t.tags);
        for (var T, E, k, S, D, j, N = new u(e); !N.eos();) {
            if (T = N.pos, k = N.scanUntil(c)) for (var I = 0, $ = k.length; $ > I; ++I) S = k.charAt(I), i(S) ? v.push(g.length) : C = !0, g.push(["text", S, T, T + 1]), T += 1, "\n" === S && o();
            if (!N.scan(c)) break;
            if (A = !0, E = N.scan(x) || "name", N.scan(m), "=" === E ? (k = N.scanUntil(w), N.scan(w), N.scanUntil(f)) : "{" === E ? (k = N.scanUntil(h), N.scan(b), N.scanUntil(f), E = "&") : k = N.scanUntil(f), !N.scan(f)) throw new Error("Unclosed tag at " + N.pos);
            if (D = [E, k, T, N.pos], g.push(D), "#" === E || "^" === E) d.push(D);
            else if ("/" === E) {
                if (j = d.pop(), !j) throw new Error('Unopened section "' + k + '" at ' + T);
                if (j[1] !== k) throw new Error('Unclosed section "' + j[1] + '" at ' + T)
            } else "name" === E || "{" === E || "&" === E ? C = !0 : "=" === E && s(k)
        }
        if (j = d.pop()) throw new Error('Unclosed section "' + j[1] + '" at ' + N.pos);
        return l(a(g))
    }
    function a(t) {
        for (var e, n, r = [], i = 0, o = t.length; o > i; ++i) e = t[i], e && ("text" === e[0] && n && "text" === n[0] ? (n[1] += e[1], n[3] = e[3]) : (r.push(e), n = e));
        return r
    }
    function l(t) {
        for (var e, n, r = [], i = r, o = [], s = 0, a = t.length; a > s; ++s) switch (e = t[s], e[0]) {
        case "#":
        case "^":
            i.push(e), o.push(e), i = e[4] = [];
            break;
        case "/":
            n = o.pop(), n[5] = e[2], i = o.length > 0 ? o[o.length - 1][4] : r;
            break;
        default:
            i.push(e)
        }
        return r
    }
    function u(t) {
        this.string = t, this.tail = t, this.pos = 0
    }
    function c(t, e) {
        this.view = null == t ? {} : t, this.cache = {
            ".": this.view
        }, this.parent = e
    }
    function f() {
        this.cache = {}
    }
    var h = Object.prototype.toString,
        p = Array.isArray ||
    function(t) {
        return "[object Array]" === h.call(t)
    }, d = RegExp.prototype.test, g = /\S/, v = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    }, m = /\s*/, y = /\s+/, w = /\s*=/, b = /\s*\}/, x = /#|\^|\/|>|\{|&|=|!/;
    u.prototype.eos = function() {
        return "" === this.tail
    }, u.prototype.scan = function(t) {
        var e = this.tail.match(t);
        if (!e || 0 !== e.index) return "";
        var n = e[0];
        return this.tail = this.tail.substring(n.length), this.pos += n.length, n
    }, u.prototype.scanUntil = function(t) {
        var e, n = this.tail.search(t);
        switch (n) {
        case -1:
            e = this.tail, this.tail = "";
            break;
        case 0:
            e = "";
            break;
        default:
            e = this.tail.substring(0, n), this.tail = this.tail.substring(n)
        }
        return this.pos += e.length, e
    }, c.prototype.push = function(t) {
        return new c(t, this)
    }, c.prototype.lookup = function(t) {
        var n, r = this.cache;
        if (t in r) n = r[t];
        else {
            for (var i, o, s = this; s;) {
                if (t.indexOf(".") > 0) for (n = s.view, i = t.split("."), o = 0; null != n && o < i.length;) n = n[i[o++]];
                else "object" == typeof s.view && (n = s.view[t]);
                if (null != n) break;
                s = s.parent
            }
            r[t] = n
        }
        return e(n) && (n = n.call(this.view)), n
    }, f.prototype.clearCache = function() {
        this.cache = {}
    }, f.prototype.parse = function(t, e) {
        var n = this.cache,
            r = n[t];
        return null == r && (r = n[t] = s(t, e)), r
    }, f.prototype.render = function(t, e, n) {
        var r = this.parse(t),
            i = e instanceof c ? e : new c(e);
        return this.renderTokens(r, i, n, t)
    }, f.prototype.renderTokens = function(t, e, n, r) {
        for (var i, o, s, a = "", l = 0, u = t.length; u > l; ++l) s = void 0, i = t[l], o = i[0], "#" === o ? s = this._renderSection(i, e, n, r) : "^" === o ? s = this._renderInverted(i, e, n, r) : ">" === o ? s = this._renderPartial(i, e, n, r) : "&" === o ? s = this._unescapedValue(i, e) : "name" === o ? s = this._escapedValue(i, e) : "text" === o && (s = this._rawValue(i)), void 0 !== s && (a += s);
        return a
    }, f.prototype._renderSection = function(t, n, r, i) {
        function o(t) {
            return s.render(t, n, r)
        }
        var s = this,
            a = "",
            l = n.lookup(t[1]);
        if (l) {
            if (p(l)) for (var u = 0, c = l.length; c > u; ++u) a += this.renderTokens(t[4], n.push(l[u]), r, i);
            else if ("object" == typeof l || "string" == typeof l) a += this.renderTokens(t[4], n.push(l), r, i);
            else if (e(l)) {
                if ("string" != typeof i) throw new Error("Cannot use higher-order sections without the original template");
                l = l.call(n.view, i.slice(t[3], t[5]), o), null != l && (a += l)
            } else a += this.renderTokens(t[4], n, r, i);
            return a
        }
    }, f.prototype._renderInverted = function(t, e, n, r) {
        var i = e.lookup(t[1]);
        return !i || p(i) && 0 === i.length ? this.renderTokens(t[4], e, n, r) : void 0
    }, f.prototype._renderPartial = function(t, n, r) {
        if (r) {
            var i = e(r) ? r(t[1]) : r[t[1]];
            return null != i ? this.renderTokens(this.parse(i), n, r, i) : void 0
        }
    }, f.prototype._unescapedValue = function(t, e) {
        var n = e.lookup(t[1]);
        return null != n ? n : void 0
    }, f.prototype._escapedValue = function(e, n) {
        var r = n.lookup(e[1]);
        return null != r ? t.escape(r) : void 0
    }, f.prototype._rawValue = function(t) {
        return t[1]
    }, t.name = "mustache.js", t.version = "1.1.0", t.tags = ["{{", "}}"];
    var A = new f;
    t.clearCache = function() {
        return A.clearCache()
    }, t.parse = function(t, e) {
        return A.parse(t, e)
    }, t.render = function(t, e, n) {
        return A.render(t, e, n)
    }, t.to_html = function(n, r, i, o) {
        var s = t.render(n, r, i);
        return e(o) ? void o(s) : s
    }, t.escape = o, t.Scanner = u, t.Context = c, t.Writer = f
}), function(t, e) {
    "use strict";

    function n(t) {
        this.callback = t, this.ticking = !1
    }
    function r(e) {
        return e && "undefined" != typeof t && (e === t || e.nodeType)
    }
    function i(t) {
        if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
        var e, n, o = t || {};
        for (n = 1; n < arguments.length; n++) {
            var s = arguments[n] || {};
            for (e in s)"object" != typeof o[e] || r(o[e]) ? o[e] = o[e] || s[e] : o[e] = i(o[e], s[e])
        }
        return o
    }
    function o(t) {
        return t === Object(t) ? t : {
            down: t,
            up: t
        }
    }
    function s(t, e) {
        e = i(e, s.options), this.lastKnownScrollY = 0, this.elem = t, this.debouncer = new n(this.update.bind(this)), this.tolerance = o(e.tolerance), this.classes = e.classes, this.offset = e.offset, this.scroller = e.scroller, this.initialised = !1, this.onPin = e.onPin, this.onUnpin = e.onUnpin, this.onTop = e.onTop, this.onNotTop = e.onNotTop
    }
    var a = {
        bind: !!
        function() {}.bind,
        classList: "classList" in e.documentElement,
        rAF: !! (t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame)
    };
    t.requestAnimationFrame = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame, n.prototype = {
        constructor: n,
        update: function() {
            this.callback && this.callback(), this.ticking = !1
        },
        requestTick: function() {
            this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0)
        },
        handleEvent: function() {
            this.requestTick()
        }
    }, s.prototype = {
        constructor: s,
        init: function() {
            return s.cutsTheMustard ? (this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this) : void 0
        },
        destroy: function() {
            var t = this.classes;
            this.initialised = !1, this.elem.classList.remove(t.unpinned, t.pinned, t.top, t.initial), this.scroller.removeEventListener("scroll", this.debouncer, !1)
        },
        attachEvent: function() {
            this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent())
        },
        unpin: function() {
            var t = this.elem.classList,
                e = this.classes;
            (t.contains(e.pinned) || !t.contains(e.unpinned)) && (t.add(e.unpinned), t.remove(e.pinned), this.onUnpin && this.onUnpin.call(this))
        },
        pin: function() {
            var t = this.elem.classList,
                e = this.classes;
            t.contains(e.unpinned) && (t.remove(e.unpinned), t.add(e.pinned), this.onPin && this.onPin.call(this))
        },
        top: function() {
            var t = this.elem.classList,
                e = this.classes;
            t.contains(e.top) || (t.add(e.top), t.remove(e.notTop), this.onTop && this.onTop.call(this))
        },
        notTop: function() {
            var t = this.elem.classList,
                e = this.classes;
            t.contains(e.notTop) || (t.add(e.notTop), t.remove(e.top), this.onNotTop && this.onNotTop.call(this))
        },
        getScrollY: function() {
            return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (e.documentElement || e.body.parentNode || e.body).scrollTop
        },
        getViewportHeight: function() {
            return t.innerHeight || e.documentElement.clientHeight || e.body.clientHeight
        },
        getDocumentHeight: function() {
            var t = e.body,
                n = e.documentElement;
            return Math.max(t.scrollHeight, n.scrollHeight, t.offsetHeight, n.offsetHeight, t.clientHeight, n.clientHeight)
        },
        getElementHeight: function(t) {
            return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight)
        },
        getScrollerHeight: function() {
            return this.scroller === t || this.scroller === e.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller)
        },
        isOutOfBounds: function(t) {
            var e = 0 > t,
                n = t + this.getViewportHeight() > this.getScrollerHeight();
            return e || n
        },
        toleranceExceeded: function(t, e) {
            return Math.abs(t - this.lastKnownScrollY) >= this.tolerance[e]
        },
        shouldUnpin: function(t, e) {
            var n = t > this.lastKnownScrollY,
                r = t >= this.offset;
            return n && r && e
        },
        shouldPin: function(t, e) {
            var n = t < this.lastKnownScrollY,
                r = t <= this.offset;
            return n && e || r
        },
        update: function() {
            var t = this.getScrollY(),
                e = t > this.lastKnownScrollY ? "down" : "up",
                n = this.toleranceExceeded(t, e);
            this.isOutOfBounds(t) || (t <= this.offset ? this.top() : this.notTop(), this.shouldUnpin(t, n) ? this.unpin() : this.shouldPin(t, n) && this.pin(), this.lastKnownScrollY = t)
        }
    }, s.options = {
        tolerance: {
            up: 0,
            down: 0
        },
        offset: 0,
        scroller: t,
        classes: {
            pinned: "headroom--pinned",
            unpinned: "headroom--unpinned",
            top: "headroom--top",
            notTop: "headroom--not-top",
            initial: "headroom"
        }
    }, s.cutsTheMustard = "undefined" != typeof a && a.rAF && a.bind && a.classList, t.Headroom = s
}(window, document), function(t) {
    t && (t.fn.headroom = function(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("headroom"),
                i = "object" == typeof e && e;
            i = t.extend(!0, {}, Headroom.options, i), r || (r = new Headroom(this, i), r.init(), n.data("headroom", r)), "string" == typeof e && r[e]()
        })
    }, t("[data-headroom]").each(function() {
        var e = t(this);
        e.headroom(e.data())
    }))
}(window.Zepto || window.jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +
function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e) if (void 0 !== t.style[n]) return {
            end: e[n]
        };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            r = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var i = function() {
                n || t(r).trigger(t.support.transition.end)
            };
        return setTimeout(i, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.alert");
            i || n.data("bs.alert", i = new r(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        r = function(e) {
            t(e).on("click", n, this.close)
        };
    r.VERSION = "3.2.0", r.prototype.close = function(e) {
        function n() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        var r = t(this),
            i = r.attr("data-target");
        i || (i = r.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t(i);
        e && e.preventDefault(), o.length || (o = r.hasClass("alert") ? r : r.parent()), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n())
    };
    var i = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = r, t.fn.alert.noConflict = function() {
        return t.fn.alert = i, this
    }, t(document).on("click.bs.alert.data-api", n, r.prototype.close)
}(jQuery), +
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.button"),
                o = "object" == typeof e && e;
            i || r.data("bs.button", i = new n(this, o)), "toggle" == e ? i.toggle() : e && i.setState(e)
        })
    }
    var n = function(e, r) {
            this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, r), this.isLoading = !1
        };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            r = this.$element,
            i = r.is("input") ? "val" : "html",
            o = r.data();
        e += "Text", null == o.resetText && r.data("resetText", r[i]()), r[i](null == o[e] ? this.options[e] : o[e]), setTimeout(t.proxy(function() {
            "loadingText" == e ? (this.isLoading = !0, r.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        t && this.$element.toggleClass("active")
    };
    var r = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = r, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var r = t(n.target);
        r.hasClass("btn") || (r = r.closest(".btn")), e.call(r, "toggle"), n.preventDefault()
    })
}(jQuery), +
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.carousel"),
                o = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : o.slide;
            i || r.data("bs.carousel", i = new n(this, o)), "number" == typeof e ? i.to(e) : s ? i[s]() : o.interval && i.pause().cycle()
        })
    }
    var n = function(e, n) {
            this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
        };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, n.prototype.keydown = function(t) {
        switch (t.which) {
        case 37:
            this.prev();
            break;
        case 39:
            this.next();
            break;
        default:
            return
        }
        t.preventDefault()
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.to = function(e) {
        var n = this,
            r = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            n.to(e)
        }) : r == e ? this.pause().cycle() : this.slide(e > r ? "next" : "prev", t(this.$items[e]))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(e, n) {
        var r = this.$element.find(".item.active"),
            i = n || r[e](),
            o = this.interval,
            s = "next" == e ? "left" : "right",
            a = "next" == e ? "first" : "last",
            l = this;
        if (!i.length) {
            if (!this.options.wrap) return;
            i = this.$element.find(".item")[a]()
        }
        if (i.hasClass("active")) return this.sliding = !1;
        var u = i[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: s
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var f = t(this.$indicators.children()[this.getItemIndex(i)]);
                f && f.addClass("active")
            }
            var h = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: s
            });
            return t.support.transition && this.$element.hasClass("slide") ? (i.addClass(e), i[0].offsetWidth, r.addClass(s), i.addClass(s), r.one("bsTransitionEnd", function() {
                i.removeClass([e, s].join(" ")).addClass("active"), r.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(h)
                }, 0)
            }).emulateTransitionEnd(1e3 * r.css("transition-duration").slice(0, -1))) : (r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger(h)), o && this.cycle(), this
        }
    };
    var r = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = r, this
    }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(n) {
        var r, i = t(this),
            o = t(i.attr("data-target") || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var s = t.extend({}, o.data(), i.data()),
                a = i.attr("data-slide-to");
            a && (s.interval = !1), e.call(o, s), a && o.data("bs.carousel").to(a), n.preventDefault()
        }
    }), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), +
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.collapse"),
                o = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e);
            !i && o.toggle && "show" == e && (e = !e), i || r.data("bs.collapse", i = new n(this, o)), "string" == typeof e && i[e]()
        })
    }
    var n = function(e, r) {
            this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, r), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
        };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var n = t.Event("show.bs.collapse");
            if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                var r = this.$parent && this.$parent.find("> .panel > .in");
                if (r && r.length) {
                    var i = r.data("bs.collapse");
                    if (i && i.transitioning) return;
                    e.call(r, "hide"), i || r.data("bs.collapse", null)
                }
                var o = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[o](0), this.transitioning = 1;
                var s = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                if (!t.support.transition) return s.call(this);
                var a = t.camelCase(["scroll", o].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(350)[o](this.$element[0][a])
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var r = function() {
                        this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                    };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(350) : r.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var r = t.fn.collapse;
    t.fn.collapse = e, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = r, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var r, i = t(this),
            o = i.attr("data-target") || n.preventDefault() || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""),
            s = t(o),
            a = s.data("bs.collapse"),
            l = a ? "toggle" : i.data(),
            u = i.attr("data-parent"),
            c = u && t(u);
        a && a.transitioning || (c && c.find('[data-toggle="collapse"][data-parent="' + u + '"]').not(i).addClass("collapsed"), i[s.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), e.call(s, l)
    })
}(jQuery), +
function(t) {
    "use strict";

    function e(e) {
        e && 3 === e.which || (t(i).remove(), t(o).each(function() {
            var r = n(t(this)),
                i = {
                    relatedTarget: this
                };
            r.hasClass("open") && (r.trigger(e = t.Event("hide.bs.dropdown", i)), e.isDefaultPrevented() || r.removeClass("open").trigger("hidden.bs.dropdown", i))
        }))
    }
    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && t(n);
        return r && r.length ? r : e.parent()
    }
    function r(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new s(this)), "string" == typeof e && r[e].call(n)
        })
    }
    var i = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.2.0", s.prototype.toggle = function(r) {
        var i = t(this);
        if (!i.is(".disabled, :disabled")) {
            var o = n(i),
                s = o.hasClass("open");
            if (e(), !s) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(r = t.Event("show.bs.dropdown", a)), r.isDefaultPrevented()) return;
                i.trigger("focus"), o.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, s.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var r = t(this);
            if (e.preventDefault(), e.stopPropagation(), !r.is(".disabled, :disabled")) {
                var i = n(r),
                    s = i.hasClass("open");
                if (!s || s && 27 == e.keyCode) return 27 == e.which && i.find(o).trigger("focus"), r.trigger("click");
                var a = " li:not(.divider):visible a",
                    l = i.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                if (l.length) {
                    var u = l.index(l.filter(":focus"));
                    38 == e.keyCode && u > 0 && u--, 40 == e.keyCode && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = r, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o + ', [role="menu"], [role="listbox"]', s.prototype.keydown)
}(jQuery), +
function(t) {
    "use strict";

    function e(e, r) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.modal"),
                s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            o || i.data("bs.modal", o = new n(this, s)), "string" == typeof e ? o[e](r) : s.show && o.show(r)
        })
    }
    var n = function(e, n) {
            this.options = n, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var n = this,
            r = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var r = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0).trigger("showing.bs.modal"), r && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var i = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            r ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(i)
            }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(i)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var n = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = t.support.transition && r;
            if (this.$backdrop = t('<div class="modal-backdrop ' + r + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            i ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() {
                    n.removeBackdrop(), e && e()
                };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o()
        } else e && e()
    }, n.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var r = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = r, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var r = t(this),
            i = r.attr("href"),
            o = t(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            s = o.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(i) && i
            }, o.data(), r.data());
        r.is("a") && n.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        }), e.call(o, s, this)
    })
}(jQuery), +
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.tooltip"),
                o = "object" == typeof e && e;
            (i || "destroy" != e) && (i || r.data("bs.tooltip", i = new n(this, o)), "string" == typeof e && i[e]())
        })
    }
    var n = function(t, e) {
            this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
        };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, r) {
        this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
            var s = i[o];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, r) {
            n[t] != r && (e[t] = r)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(document.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var r = this,
                i = this.tip(),
                o = this.getUID(this.type);
            this.setContent(), i.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && i.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                l = a.test(s);
            l && (s = s.replace(a, "") || "top"), i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
            var u = this.getPosition(),
                c = i[0].offsetWidth,
                f = i[0].offsetHeight;
            if (l) {
                var h = s,
                    p = this.$element.parent(),
                    d = this.getPosition(p);
                s = "bottom" == s && u.top + u.height + f - d.scroll > d.height ? "top" : "top" == s && u.top - d.scroll - f < 0 ? "bottom" : "right" == s && u.right + c > d.width ? "left" : "left" == s && u.left - c < d.left ? "right" : s, i.removeClass(h).addClass(s)
            }
            var g = this.getCalculatedOffset(s, u, c, f);
            this.applyPlacement(g, s);
            var v = function() {
                    r.$element.trigger("shown.bs." + r.type), r.hoverState = null
                };
            t.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", v).emulateTransitionEnd(150) : v()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var r = this.tip(),
            i = r[0].offsetWidth,
            o = r[0].offsetHeight,
            s = parseInt(r.css("margin-top"), 10),
            a = parseInt(r.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top = e.top + s, e.left = e.left + a, t.offset.setOffset(r[0], t.extend({
            using: function(t) {
                r.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), r.addClass("in");
        var l = r[0].offsetWidth,
            u = r[0].offsetHeight;
        "top" == n && u != o && (e.top = e.top + o - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var f = c.left ? 2 * c.left - i + l : 2 * c.top - o + u,
            h = c.left ? "left" : "top",
            p = c.left ? "offsetWidth" : "offsetHeight";
        r.offset(e), this.replaceArrow(f, r[0][p], h)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function() {
        function e() {
            "in" != n.hoverState && r.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
            r = this.tip(),
            i = t.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            r = "BODY" == n.tagName;
        return t.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
            scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
            width: r ? t(window).width() : e.outerWidth(),
            height: r ? t(window).height() : e.outerHeight()
        }, r ? {
            top: 0,
            left: 0
        } : e.offset())
    }, n.prototype.getCalculatedOffset = function(t, e, n, r) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - r,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - r / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - r / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, r) {
        var i = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return i;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - s.scroll,
                l = e.top + o - s.scroll + r;
            a < s.top ? i.top = s.top - a : l > s.top + s.height && (i.top = s.top + s.height - l)
        } else {
            var u = e.left - o,
                c = e.left + o + n;
            u < s.left ? i.left = s.left - u : c > s.width && (i.left = s.left + s.width - c)
        }
        return i
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~ (1e6 * Math.random());
        while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var r = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = r, this
    }
}(jQuery), +
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.popover"),
                o = "object" == typeof e && e;
            (i || "destroy" != e) && (i || r.data("bs.popover", i = new n(this, o)), "string" == typeof e && i[e]())
        })
    }
    var n = function(t, e) {
            this.init("popover", t, e)
        };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.2.0", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, n.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var r = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = r, this
    }
}(jQuery), +
function(t) {
    "use strict";

    function e(n, r) {
        var i = t.proxy(this.process, this);
        this.$body = t("body"), this.$scrollElement = t(t(n).is("body") ? window : n), this.options = t.extend({}, e.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", i), this.refresh(), this.process()
    }
    function n(n) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            i || r.data("bs.scrollspy", i = new e(this, o)), "string" == typeof n && i[n]()
        })
    }
    e.VERSION = "3.2.0", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = "offset",
            n = 0;
        t.isWindow(this.$scrollElement[0]) || (e = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var r = this;
        this.$body.find(this.selector).map(function() {
            var r = t(this),
                i = r.data("target") || r.attr("href"),
                o = /^#./.test(i) && t(i);
            return o && o.length && o.is(":visible") && [
                [o[e]().top + n, i]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            r.offsets.push(this[0]), r.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            r = this.options.offset + n - this.$scrollElement.height(),
            i = this.offsets,
            o = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= r) return s != (t = o[o.length - 1]) && this.activate(t);
        if (s && e <= i[0]) return s != (t = o[0]) && this.activate(t);
        for (t = i.length; t--;) s != o[t] && e >= i[t] && (!i[t + 1] || e <= i[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            r = t(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
    };
    var r = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = r, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), +
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.tab");
            i || r.data("bs.tab", i = new n(this)), "string" == typeof e && i[e]()
        })
    }
    var n = function(e) {
            this.element = t(e)
        };
    n.VERSION = "3.2.0", n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            r = e.data("target");
        if (r || (r = e.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var i = n.find(".active:last a")[0],
                o = t.Event("show.bs.tab", {
                    relatedTarget: i
                });
            if (e.trigger(o), !o.isDefaultPrevented()) {
                var s = t(r);
                this.activate(e.closest("li"), n), this.activate(s, s.parent(), function() {
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, n, r) {
        function i() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), r && r()
        }
        var o = n.find("> .active"),
            s = r && t.support.transition && o.hasClass("fade");
        s ? o.one("bsTransitionEnd", i).emulateTransitionEnd(150) : i(), o.removeClass("in")
    };
    var r = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = r, this
    }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(n) {
        n.preventDefault(), e.call(t(this), "show")
    })
}(jQuery), +
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.affix"),
                o = "object" == typeof e && e;
            i || r.data("bs.affix", i = new n(this, o)), "string" == typeof e && i[e]()
        })
    }
    var n = function(e, r) {
            this.options = t.extend({}, n.DEFAULTS, r), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
        };
    n.VERSION = "3.2.0", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = t(document).height(),
                r = this.$target.scrollTop(),
                i = this.$element.offset(),
                o = this.options.offset,
                s = o.top,
                a = o.bottom;
            "object" != typeof o && (a = s = o), "function" == typeof s && (s = o.top(this.$element)), "function" == typeof a && (a = o.bottom(this.$element));
            var l = null != this.unpin && r + this.unpin <= i.top ? !1 : null != a && i.top + this.$element.height() >= e - a ? "bottom" : null != s && s >= r ? "top" : !1;
            if (this.affixed !== l) {
                null != this.unpin && this.$element.css("top", "");
                var u = "affix" + (l ? "-" + l : ""),
                    c = t.Event(u + ".bs.affix");
                this.$element.trigger(c), c.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(u).trigger(t.Event(u.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                    top: e - this.$element.height() - a
                }))
            }
        }
    };
    var r = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = r, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                r = n.data();
            r.offset = r.offset || {}, r.offsetBottom && (r.offset.bottom = r.offsetBottom), r.offsetTop && (r.offset.top = r.offsetTop), e.call(n, r)
        })
    })
}(jQuery), function() {
    function t(t) {
        function e(e, n, r, i, o, s) {
            for (; o >= 0 && s > o; o += t) {
                var a = i ? i[o] : o;
                r = n(r, e[a], a, e)
            }
            return r
        }
        return function(n, r, i, o) {
            r = w(r, o, 4);
            var s = !k(n) && y.keys(n),
                a = (s || n).length,
                l = t > 0 ? 0 : a - 1;
            return arguments.length < 3 && (i = n[s ? s[l] : l], l += t), e(n, r, i, s, l, a)
        }
    }
    function e(t) {
        return function(e, n, r) {
            n = b(n, r);
            for (var i = E(e), o = t > 0 ? 0 : i - 1; o >= 0 && i > o; o += t) if (n(e[o], o, e)) return o;
            return -1
        }
    }
    function n(t, e, n) {
        return function(r, i, o) {
            var s = 0,
                a = E(r);
            if ("number" == typeof o) t > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
            else if (n && o && a) return o = n(r, i), r[o] === i ? o : -1;
            if (i !== i) return o = e(c.call(r, s, a), y.isNaN), o >= 0 ? o + s : -1;
            for (o = t > 0 ? s : a - 1; o >= 0 && a > o; o += t) if (r[o] === i) return o;
            return -1
        }
    }
    function r(t, e) {
        var n = I.length,
            r = t.constructor,
            i = y.isFunction(r) && r.prototype || a,
            o = "constructor";
        for (y.has(t, o) && !y.contains(e, o) && e.push(o); n--;) o = I[n], o in t && t[o] !== i[o] && !y.contains(e, o) && e.push(o)
    }
    var i = this,
        o = i._,
        s = Array.prototype,
        a = Object.prototype,
        l = Function.prototype,
        u = s.push,
        c = s.slice,
        f = a.toString,
        h = a.hasOwnProperty,
        p = Array.isArray,
        d = Object.keys,
        g = l.bind,
        v = Object.create,
        m = function() {},
        y = function(t) {
            return t instanceof y ? t : this instanceof y ? void(this._wrapped = t) : new y(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : i._ = y, y.VERSION = "1.8.3";
    var w = function(t, e, n) {
            if (void 0 === e) return t;
            switch (null == n ? 3 : n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return t.call(e, n, r, i)
                };
            case 4:
                return function(n, r, i, o) {
                    return t.call(e, n, r, i, o)
                }
            }
            return function() {
                return t.apply(e, arguments)
            }
        },
        b = function(t, e, n) {
            return null == t ? y.identity : y.isFunction(t) ? w(t, e, n) : y.isObject(t) ? y.matcher(t) : y.property(t)
        };
    y.iteratee = function(t, e) {
        return b(t, e, 1 / 0)
    };
    var x = function(t, e) {
            return function(n) {
                var r = arguments.length;
                if (2 > r || null == n) return n;
                for (var i = 1; r > i; i++) for (var o = arguments[i], s = t(o), a = s.length, l = 0; a > l; l++) {
                    var u = s[l];
                    e && void 0 !== n[u] || (n[u] = o[u])
                }
                return n
            }
        },
        A = function(t) {
            if (!y.isObject(t)) return {};
            if (v) return v(t);
            m.prototype = t;
            var e = new m;
            return m.prototype = null, e
        },
        C = function(t) {
            return function(e) {
                return null == e ? void 0 : e[t]
            }
        },
        T = Math.pow(2, 53) - 1,
        E = C("length"),
        k = function(t) {
            var e = E(t);
            return "number" == typeof e && e >= 0 && T >= e
        };
    y.each = y.forEach = function(t, e, n) {
        e = w(e, n);
        var r, i;
        if (k(t)) for (r = 0, i = t.length; i > r; r++) e(t[r], r, t);
        else {
            var o = y.keys(t);
            for (r = 0, i = o.length; i > r; r++) e(t[o[r]], o[r], t)
        }
        return t
    }, y.map = y.collect = function(t, e, n) {
        e = b(e, n);
        for (var r = !k(t) && y.keys(t), i = (r || t).length, o = Array(i), s = 0; i > s; s++) {
            var a = r ? r[s] : s;
            o[s] = e(t[a], a, t)
        }
        return o
    }, y.reduce = y.foldl = y.inject = t(1), y.reduceRight = y.foldr = t(-1), y.find = y.detect = function(t, e, n) {
        var r;
        return r = k(t) ? y.findIndex(t, e, n) : y.findKey(t, e, n), void 0 !== r && -1 !== r ? t[r] : void 0
    }, y.filter = y.select = function(t, e, n) {
        var r = [];
        return e = b(e, n), y.each(t, function(t, n, i) {
            e(t, n, i) && r.push(t)
        }), r
    }, y.reject = function(t, e, n) {
        return y.filter(t, y.negate(b(e)), n)
    }, y.every = y.all = function(t, e, n) {
        e = b(e, n);
        for (var r = !k(t) && y.keys(t), i = (r || t).length, o = 0; i > o; o++) {
            var s = r ? r[o] : o;
            if (!e(t[s], s, t)) return !1
        }
        return !0
    }, y.some = y.any = function(t, e, n) {
        e = b(e, n);
        for (var r = !k(t) && y.keys(t), i = (r || t).length, o = 0; i > o; o++) {
            var s = r ? r[o] : o;
            if (e(t[s], s, t)) return !0
        }
        return !1
    }, y.contains = y.includes = y.include = function(t, e, n, r) {
        return k(t) || (t = y.values(t)), ("number" != typeof n || r) && (n = 0), y.indexOf(t, e, n) >= 0
    }, y.invoke = function(t, e) {
        var n = c.call(arguments, 2),
            r = y.isFunction(e);
        return y.map(t, function(t) {
            var i = r ? e : t[e];
            return null == i ? i : i.apply(t, n)
        })
    }, y.pluck = function(t, e) {
        return y.map(t, y.property(e))
    }, y.where = function(t, e) {
        return y.filter(t, y.matcher(e))
    }, y.findWhere = function(t, e) {
        return y.find(t, y.matcher(e))
    }, y.max = function(t, e, n) {
        var r, i, o = -(1 / 0),
            s = -(1 / 0);
        if (null == e && null != t) {
            t = k(t) ? t : y.values(t);
            for (var a = 0, l = t.length; l > a; a++) r = t[a], r > o && (o = r)
        } else e = b(e, n), y.each(t, function(t, n, r) {
            i = e(t, n, r), (i > s || i === -(1 / 0) && o === -(1 / 0)) && (o = t, s = i)
        });
        return o
    }, y.min = function(t, e, n) {
        var r, i, o = 1 / 0,
            s = 1 / 0;
        if (null == e && null != t) {
            t = k(t) ? t : y.values(t);
            for (var a = 0, l = t.length; l > a; a++) r = t[a], o > r && (o = r)
        } else e = b(e, n), y.each(t, function(t, n, r) {
            i = e(t, n, r), (s > i || i === 1 / 0 && o === 1 / 0) && (o = t, s = i)
        });
        return o
    }, y.shuffle = function(t) {
        for (var e, n = k(t) ? t : y.values(t), r = n.length, i = Array(r), o = 0; r > o; o++) e = y.random(0, o), e !== o && (i[o] = i[e]), i[e] = n[o];
        return i
    }, y.sample = function(t, e, n) {
        return null == e || n ? (k(t) || (t = y.values(t)), t[y.random(t.length - 1)]) : y.shuffle(t).slice(0, Math.max(0, e))
    }, y.sortBy = function(t, e, n) {
        return e = b(e, n), y.pluck(y.map(t, function(t, n, r) {
            return {
                value: t,
                index: n,
                criteria: e(t, n, r)
            }
        }).sort(function(t, e) {
            var n = t.criteria,
                r = e.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (r > n || void 0 === r) return -1
            }
            return t.index - e.index
        }), "value")
    };
    var S = function(t) {
            return function(e, n, r) {
                var i = {};
                return n = b(n, r), y.each(e, function(r, o) {
                    var s = n(r, o, e);
                    t(i, r, s)
                }), i
            }
        };
    y.groupBy = S(function(t, e, n) {
        y.has(t, n) ? t[n].push(e) : t[n] = [e]
    }), y.indexBy = S(function(t, e, n) {
        t[n] = e
    }), y.countBy = S(function(t, e, n) {
        y.has(t, n) ? t[n]++ : t[n] = 1
    }), y.toArray = function(t) {
        return t ? y.isArray(t) ? c.call(t) : k(t) ? y.map(t, y.identity) : y.values(t) : []
    }, y.size = function(t) {
        return null == t ? 0 : k(t) ? t.length : y.keys(t).length
    }, y.partition = function(t, e, n) {
        e = b(e, n);
        var r = [],
            i = [];
        return y.each(t, function(t, n, o) {
            (e(t, n, o) ? r : i).push(t)
        }), [r, i]
    }, y.first = y.head = y.take = function(t, e, n) {
        return null != t ? null == e || n ? t[0] : y.initial(t, t.length - e) : void 0
    }, y.initial = function(t, e, n) {
        return c.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
    }, y.last = function(t, e, n) {
        return null != t ? null == e || n ? t[t.length - 1] : y.rest(t, Math.max(0, t.length - e)) : void 0
    }, y.rest = y.tail = y.drop = function(t, e, n) {
        return c.call(t, null == e || n ? 1 : e)
    }, y.compact = function(t) {
        return y.filter(t, y.identity)
    };
    var D = function(t, e, n, r) {
            for (var i = [], o = 0, s = r || 0, a = E(t); a > s; s++) {
                var l = t[s];
                if (k(l) && (y.isArray(l) || y.isArguments(l))) {
                    e || (l = D(l, e, n));
                    var u = 0,
                        c = l.length;
                    for (i.length += c; c > u;) i[o++] = l[u++]
                } else n || (i[o++] = l)
            }
            return i
        };
    y.flatten = function(t, e) {
        return D(t, e, !1)
    }, y.without = function(t) {
        return y.difference(t, c.call(arguments, 1))
    }, y.uniq = y.unique = function(t, e, n, r) {
        y.isBoolean(e) || (r = n, n = e, e = !1), null != n && (n = b(n, r));
        for (var i = [], o = [], s = 0, a = E(t); a > s; s++) {
            var l = t[s],
                u = n ? n(l, s, t) : l;
            e ? (s && o === u || i.push(l), o = u) : n ? y.contains(o, u) || (o.push(u), i.push(l)) : y.contains(i, l) || i.push(l)
        }
        return i
    }, y.union = function() {
        return y.uniq(D(arguments, !0, !0))
    }, y.intersection = function(t) {
        for (var e = [], n = arguments.length, r = 0, i = E(t); i > r; r++) {
            var o = t[r];
            if (!y.contains(e, o)) {
                for (var s = 1; n > s && y.contains(arguments[s], o); s++);
                s === n && e.push(o)
            }
        }
        return e
    }, y.difference = function(t) {
        var e = D(arguments, !0, !0, 1);
        return y.filter(t, function(t) {
            return !y.contains(e, t)
        })
    }, y.zip = function() {
        return y.unzip(arguments)
    }, y.unzip = function(t) {
        for (var e = t && y.max(t, E).length || 0, n = Array(e), r = 0; e > r; r++) n[r] = y.pluck(t, r);
        return n
    }, y.object = function(t, e) {
        for (var n = {}, r = 0, i = E(t); i > r; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
        return n
    }, y.findIndex = e(1), y.findLastIndex = e(-1), y.sortedIndex = function(t, e, n, r) {
        n = b(n, r, 1);
        for (var i = n(e), o = 0, s = E(t); s > o;) {
            var a = Math.floor((o + s) / 2);
            n(t[a]) < i ? o = a + 1 : s = a
        }
        return o
    }, y.indexOf = n(1, y.findIndex, y.sortedIndex), y.lastIndexOf = n(-1, y.findLastIndex), y.range = function(t, e, n) {
        null == e && (e = t || 0, t = 0), n = n || 1;
        for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), o = 0; r > o; o++, t += n) i[o] = t;
        return i
    };
    var j = function(t, e, n, r, i) {
            if (!(r instanceof e)) return t.apply(n, i);
            var o = A(t.prototype),
                s = t.apply(o, i);
            return y.isObject(s) ? s : o
        };
    y.bind = function(t, e) {
        if (g && t.bind === g) return g.apply(t, c.call(arguments, 1));
        if (!y.isFunction(t)) throw new TypeError("Bind must be called on a function");
        var n = c.call(arguments, 2),
            r = function() {
                return j(t, r, e, this, n.concat(c.call(arguments)))
            };
        return r
    }, y.partial = function(t) {
        var e = c.call(arguments, 1),
            n = function() {
                for (var r = 0, i = e.length, o = Array(i), s = 0; i > s; s++) o[s] = e[s] === y ? arguments[r++] : e[s];
                for (; r < arguments.length;) o.push(arguments[r++]);
                return j(t, n, this, this, o)
            };
        return n
    }, y.bindAll = function(t) {
        var e, n, r = arguments.length;
        if (1 >= r) throw new Error("bindAll must be passed function names");
        for (e = 1; r > e; e++) n = arguments[e], t[n] = y.bind(t[n], t);
        return t
    }, y.memoize = function(t, e) {
        var n = function(r) {
                var i = n.cache,
                    o = "" + (e ? e.apply(this, arguments) : r);
                return y.has(i, o) || (i[o] = t.apply(this, arguments)), i[o]
            };
        return n.cache = {}, n
    }, y.delay = function(t, e) {
        var n = c.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, n)
        }, e)
    }, y.defer = y.partial(y.delay, y, 1), y.throttle = function(t, e, n) {
        var r, i, o, s = null,
            a = 0;
        n || (n = {});
        var l = function() {
                a = n.leading === !1 ? 0 : y.now(), s = null, o = t.apply(r, i), s || (r = i = null)
            };
        return function() {
            var u = y.now();
            a || n.leading !== !1 || (a = u);
            var c = e - (u - a);
            return r = this, i = arguments, 0 >= c || c > e ? (s && (clearTimeout(s), s = null), a = u, o = t.apply(r, i), s || (r = i = null)) : s || n.trailing === !1 || (s = setTimeout(l, c)), o
        }
    }, y.debounce = function(t, e, n) {
        var r, i, o, s, a, l = function() {
                var u = y.now() - s;
                e > u && u >= 0 ? r = setTimeout(l, e - u) : (r = null, n || (a = t.apply(o, i), r || (o = i = null)))
            };
        return function() {
            o = this, i = arguments, s = y.now();
            var u = n && !r;
            return r || (r = setTimeout(l, e)), u && (a = t.apply(o, i), o = i = null), a
        }
    }, y.wrap = function(t, e) {
        return y.partial(e, t)
    }, y.negate = function(t) {
        return function() {
            return !t.apply(this, arguments)
        }
    }, y.compose = function() {
        var t = arguments,
            e = t.length - 1;
        return function() {
            for (var n = e, r = t[e].apply(this, arguments); n--;) r = t[n].call(this, r);
            return r
        }
    }, y.after = function(t, e) {
        return function() {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    }, y.before = function(t, e) {
        var n;
        return function() {
            return --t > 0 && (n = e.apply(this, arguments)), 1 >= t && (e = null), n
        }
    }, y.once = y.partial(y.before, 2);
    var N = !{
        toString: null
    }.propertyIsEnumerable("toString"),
        I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    y.keys = function(t) {
        if (!y.isObject(t)) return [];
        if (d) return d(t);
        var e = [];
        for (var n in t) y.has(t, n) && e.push(n);
        return N && r(t, e), e
    }, y.allKeys = function(t) {
        if (!y.isObject(t)) return [];
        var e = [];
        for (var n in t) e.push(n);
        return N && r(t, e), e
    }, y.values = function(t) {
        for (var e = y.keys(t), n = e.length, r = Array(n), i = 0; n > i; i++) r[i] = t[e[i]];
        return r
    }, y.mapObject = function(t, e, n) {
        e = b(e, n);
        for (var r, i = y.keys(t), o = i.length, s = {}, a = 0; o > a; a++) r = i[a], s[r] = e(t[r], r, t);
        return s
    }, y.pairs = function(t) {
        for (var e = y.keys(t), n = e.length, r = Array(n), i = 0; n > i; i++) r[i] = [e[i], t[e[i]]];
        return r
    }, y.invert = function(t) {
        for (var e = {}, n = y.keys(t), r = 0, i = n.length; i > r; r++) e[t[n[r]]] = n[r];
        return e
    }, y.functions = y.methods = function(t) {
        var e = [];
        for (var n in t) y.isFunction(t[n]) && e.push(n);
        return e.sort()
    }, y.extend = x(y.allKeys), y.extendOwn = y.assign = x(y.keys), y.findKey = function(t, e, n) {
        e = b(e, n);
        for (var r, i = y.keys(t), o = 0, s = i.length; s > o; o++) if (r = i[o], e(t[r], r, t)) return r
    }, y.pick = function(t, e, n) {
        var r, i, o = {},
            s = t;
        if (null == s) return o;
        y.isFunction(e) ? (i = y.allKeys(s), r = w(e, n)) : (i = D(arguments, !1, !1, 1), r = function(t, e, n) {
            return e in n
        }, s = Object(s));
        for (var a = 0, l = i.length; l > a; a++) {
            var u = i[a],
                c = s[u];
            r(c, u, s) && (o[u] = c)
        }
        return o
    }, y.omit = function(t, e, n) {
        if (y.isFunction(e)) e = y.negate(e);
        else {
            var r = y.map(D(arguments, !1, !1, 1), String);
            e = function(t, e) {
                return !y.contains(r, e)
            }
        }
        return y.pick(t, e, n)
    }, y.defaults = x(y.allKeys, !0), y.create = function(t, e) {
        var n = A(t);
        return e && y.extendOwn(n, e), n
    }, y.clone = function(t) {
        return y.isObject(t) ? y.isArray(t) ? t.slice() : y.extend({}, t) : t
    }, y.tap = function(t, e) {
        return e(t), t
    }, y.isMatch = function(t, e) {
        var n = y.keys(e),
            r = n.length;
        if (null == t) return !r;
        for (var i = Object(t), o = 0; r > o; o++) {
            var s = n[o];
            if (e[s] !== i[s] || !(s in i)) return !1
        }
        return !0
    };
    var $ = function(t, e, n, r) {
            if (t === e) return 0 !== t || 1 / t === 1 / e;
            if (null == t || null == e) return t === e;
            t instanceof y && (t = t._wrapped), e instanceof y && (e = e._wrapped);
            var i = f.call(t);
            if (i !== f.call(e)) return !1;
            switch (i) {
            case "[object RegExp]":
            case "[object String]":
                return "" + t == "" + e;
            case "[object Number]":
                return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t === +e
            }
            var o = "[object Array]" === i;
            if (!o) {
                if ("object" != typeof t || "object" != typeof e) return !1;
                var s = t.constructor,
                    a = e.constructor;
                if (s !== a && !(y.isFunction(s) && s instanceof s && y.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1
            }
            n = n || [], r = r || [];
            for (var l = n.length; l--;) if (n[l] === t) return r[l] === e;
            if (n.push(t), r.push(e), o) {
                if (l = t.length, l !== e.length) return !1;
                for (; l--;) if (!$(t[l], e[l], n, r)) return !1
            } else {
                var u, c = y.keys(t);
                if (l = c.length, y.keys(e).length !== l) return !1;
                for (; l--;) if (u = c[l], !y.has(e, u) || !$(t[u], e[u], n, r)) return !1
            }
            return n.pop(), r.pop(), !0
        };
    y.isEqual = function(t, e) {
        return $(t, e)
    }, y.isEmpty = function(t) {
        return null == t ? !0 : k(t) && (y.isArray(t) || y.isString(t) || y.isArguments(t)) ? 0 === t.length : 0 === y.keys(t).length
    }, y.isElement = function(t) {
        return !(!t || 1 !== t.nodeType)
    }, y.isArray = p ||
    function(t) {
        return "[object Array]" === f.call(t)
    }, y.isObject = function(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !! t
    }, y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
        y["is" + t] = function(e) {
            return f.call(e) === "[object " + t + "]"
        }
    }), y.isArguments(arguments) || (y.isArguments = function(t) {
        return y.has(t, "callee")
    }), "function" != typeof / . / && "object" != typeof Int8Array && (y.isFunction = function(t) {
        return "function" == typeof t || !1
    }), y.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, y.isNaN = function(t) {
        return y.isNumber(t) && t !== +t
    }, y.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" === f.call(t)
    }, y.isNull = function(t) {
        return null === t
    }, y.isUndefined = function(t) {
        return void 0 === t
    }, y.has = function(t, e) {
        return null != t && h.call(t, e)
    }, y.noConflict = function() {
        return i._ = o, this
    }, y.identity = function(t) {
        return t
    }, y.constant = function(t) {
        return function() {
            return t
        }
    }, y.noop = function() {}, y.property = C, y.propertyOf = function(t) {
        return null == t ?
        function() {} : function(e) {
            return t[e]
        }
    }, y.matcher = y.matches = function(t) {
        return t = y.extendOwn({}, t), function(e) {
            return y.isMatch(e, t)
        }
    }, y.times = function(t, e, n) {
        var r = Array(Math.max(0, t));
        e = w(e, n, 1);
        for (var i = 0; t > i; i++) r[i] = e(i);
        return r
    }, y.random = function(t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    }, y.now = Date.now ||
    function() {
        return (new Date).getTime()
    };
    var L = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    },
        B = y.invert(L),
        P = function(t) {
            var e = function(e) {
                    return t[e]
                },
                n = "(?:" + y.keys(t).join("|") + ")",
                r = RegExp(n),
                i = RegExp(n, "g");
            return function(t) {
                return t = null == t ? "" : "" + t, r.test(t) ? t.replace(i, e) : t
            }
        };
    y.escape = P(L), y.unescape = P(B), y.result = function(t, e, n) {
        var r = null == t ? void 0 : t[e];
        return void 0 === r && (r = n), y.isFunction(r) ? r.call(t) : r
    };
    var O = 0;
    y.uniqueId = function(t) {
        var e = ++O + "";
        return t ? t + e : e
    }, y.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var M = /(.)^/,
        H = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        F = /\\|'|\r|\n|\u2028|\u2029/g,
        _ = function(t) {
            return "\\" + H[t]
        };
    y.template = function(t, e, n) {
        !e && n && (e = n), e = y.defaults({}, e, y.templateSettings);
        var r = RegExp([(e.escape || M).source, (e.interpolate || M).source, (e.evaluate || M).source].join("|") + "|$", "g"),
            i = 0,
            o = "__p+='";
        t.replace(r, function(e, n, r, s, a) {
            return o += t.slice(i, a).replace(F, _), i = a + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), e
        }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var s = new Function(e.variable || "obj", "_", o)
        } catch (a) {
            throw a.source = o, a
        }
        var l = function(t) {
                return s.call(this, t, y)
            },
            u = e.variable || "obj";
        return l.source = "function(" + u + "){\n" + o + "}", l
    }, y.chain = function(t) {
        var e = y(t);
        return e._chain = !0, e
    };
    var q = function(t, e) {
            return t._chain ? y(e).chain() : e
        };
    y.mixin = function(t) {
        y.each(y.functions(t), function(e) {
            var n = y[e] = t[e];
            y.prototype[e] = function() {
                var t = [this._wrapped];
                return u.apply(t, arguments), q(this, n.apply(y, t))
            }
        })
    }, y.mixin(y), y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var e = s[t];
        y.prototype[t] = function() {
            var n = this._wrapped;
            return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], q(this, n)
        }
    }), y.each(["concat", "join", "slice"], function(t) {
        var e = s[t];
        y.prototype[t] = function() {
            return q(this, e.apply(this._wrapped, arguments))
        }
    }), y.prototype.value = function() {
        return this._wrapped
    }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return y
    })
}.call(this), function(t, e) {
    "use strict";
    var n;
    return n = e(), "object" == typeof module && "object" == typeof module.exports ? module.exports = n : "function" == typeof define && define.amd ? define(["jquery"], function() {
        return n
    }) : t.Gta = n
}("object" == typeof window ? window : this, function() {
    "use strict";
    var t, e, n, r, i, o, s, a, l, u, c, f, h, p, d;
    if (p = Array.prototype.slice, t = null, f = function(t) {
        return t.parentNode.removeChild(t)
    }, i = function(t, e) {
        return t.onerror = function() {
            return window[e] = null, f(t)
        }, t.onload = function() {
            return f(t)
        }
    }, s = function(t) {
        var e, n;
        return e = document.createElement("script"), n = document.getElementsByTagName("script")[0], e.async = 1, e.src = t, n.parentNode.insertBefore(e, n), e
    }, a = {
        setUserId: function(t) {
            var e, n, r, i, o;
            try {
                for (r = 0, i = c.length; i > r; r++) n = c[r], null != (o = n.setUserId) && o.apply(n, t)
            } catch (s) {
                e = s
            }
            return this
        },
        pageview: function() {
            var t, e, n, r;
            try {
                for (n = 0, r = c.length; r > n; n++) e = c[n], e.pageview.apply(e, arguments)
            } catch (i) {
                t = i
            }
            return this
        },
        event: function() {
            var e, n, r, i;
            try {
                for (arguments[0] || (arguments[0] = (null != t ? t.data("category") : void 0) || "gta"), r = 0, i = c.length; i > r; r++) n = c[r], n.event.apply(n, arguments)
            } catch (o) {
                e = o
            }
            return this
        },
        delegateEvents: function() {
            return window.$ ? (t = $("body"), $(document).off(".gta").on("click.gta", '[data-gta="event"]', function(t) {
                return function(e) {
                    var n, r, i, o, s;
                    return n = $(e.currentTarget), i = n.data("category"), i || (i = n.closest("[data-category]").data("category")), r = n.data("action") || e.type, o = n.data("label"), s = parseInt(n.data("value")), t.event(i, r, o, s)
                }
            }(this))) : void 0
        }
    }, n = {
        google: function(t) {
            var e;
            if (t) return window.GoogleAnalyticsObject = "_ga", window._ga = function() {
                return _ga.q.push(arguments)
            }, _ga.q = [], _ga.l = 1 * new Date, _ga("create", t, "auto"), _ga("require", "displayfeatures"), _ga("require", "linkid", "linkid.js"), _ga("send", "pageview"), e = s("//www.google-analytics.com/analytics.js"), i(e, "_ga"), {
                name: "google",
                pageview: function() {
                    var t, e;
                    if (window._ga) return t = p.call(arguments), e = "object" == typeof t[0] ? t[0] : t.join("_"), window._ga("send", "pageview", e)
                },
                event: function(t, e, n, r) {
                    var i;
                    if (window._ga) return i = ["send", "event", t, e, n], r > 0 && i.push(+r), window._ga.apply(null, i)
                }
            }
        },
        baidu: function(t) {
            var e;
            if (t) return window._hmt = [], e = s("//hm.baidu.com/hm.js?" + t), i(e, "_hmt"), {
                name: "baidu",
                pageview: function() {
                    var t, e, n, r, i;
                    if (window._hmt) {
                        if (t = p.call(arguments), "object" == typeof t[0]) {
                            if (e = t[0].page, !e) {
                                e = [], i = t[0];
                                for (n in i) r = i[n], e.push(r);
                                e = e.join("_")
                            }
                        } else e = t.join("_");
                        return window._hmt.push(["_trackPageview", e])
                    }
                },
                event: function(t, e, n, r) {
                    var i;
                    if (window._hmt) return i = ["_trackEvent", t, e, n], r > 0 && i.push(+r), window._hmt.push(i)
                }
            }
        },
        piwik: function(t, e, n) {
            var r;
            if (t && e && n) return window._paq = [
                ["trackPageView"],
                ["enableLinkTracking"],
                ["setTrackerUrl", n],
                ["setSiteId", t]
            ], r = s(e), i(r, "_paq"), {
                name: "piwik",
                setUserId: function(t) {
                    return window._paq ? window._paq.push(["setUserId", t]) : void 0
                },
                pageview: function() {
                    var t, e, n, r, i;
                    if (window._paq) {
                        if (t = p.call(arguments), "object" == typeof t[0]) {
                            if (e = t[0].page, !e) {
                                e = [], i = t[0];
                                for (n in i) r = i[n], e.push(r);
                                e = e.join("_")
                            }
                        } else e = t.join("_");
                        return window._paq.push(["trackPageView", e])
                    }
                },
                event: function(t, e, n, r) {
                    var i;
                    if (window._paq) return i = ["trackEvent", t, e, n], r > 0 && i.push(+r), window._paq.push(i)
                }
            }
        }
    }, o = document.getElementById("gta-main"), c = a.providers = [], !o) return a;
    for (l in n) e = n[l], r = o.getAttribute("data-" + l), h = o.getAttribute("data-" + l + "-script"), d = o.getAttribute("data-" + l + "-track"), r && (u = e(r, h, d)) && c.push(u);
    return a.delegateEvents(), f(o), a
});