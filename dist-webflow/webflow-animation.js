var wa = Object.defineProperty;
var Gi = (n) => {
  throw TypeError(n);
};
var xa = (n, t, e) => t in n ? wa(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var yt = (n, t, e) => xa(n, typeof t != "symbol" ? t + "" : t, e), Hi = (n, t, e) => t.has(n) || Gi("Cannot " + e);
var tt = (n, t, e) => (Hi(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Ir = (n, t, e) => t.has(n) ? Gi("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), Br = (n, t, e, r) => (Hi(n, t, "write to private field"), r ? r.call(n, e) : t.set(n, e), e);
const ba = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ba);
let Ze = !1, Ta = !1;
function Sa() {
  Ze = !0;
}
Sa();
const Oa = "[", Ca = "]", or = {}, Hr = !1, Pt = 2, Pn = 4, En = 8, $n = 16, Gt = 32, De = 64, pr = 128, mt = 256, mr = 512, gt = 1024, Ht = 2048, Me = 4096, gr = 8192, Ar = 16384, Pa = 32768, Ea = 65536, $a = 1 << 19, kn = 1 << 20, Ki = Symbol("$state"), ka = Symbol("legacy props");
var Aa = Array.isArray, Da = Array.prototype.indexOf, Ma = Array.from, vr = Object.keys, yr = Object.defineProperty, Kr = Object.getOwnPropertyDescriptor, Ra = Object.getOwnPropertyDescriptors, Fa = Object.getPrototypeOf;
function Na(n) {
  return n();
}
function Qi(n) {
  for (var t = 0; t < n.length; t++)
    n[t]();
}
function An(n) {
  return n === this.v;
}
function La(n, t) {
  return n != n ? t == t : n !== t || n !== null && typeof n == "object" || typeof n == "function";
}
function za(n) {
  return !La(n, this.v);
}
function Ia(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ba() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Va(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ja() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Wa() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ya() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ua() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Dn(n, t) {
  var e = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: An,
    rv: 0,
    wv: 0
  };
  return e;
}
// @__NO_SIDE_EFFECTS__
function qa(n, t = !1) {
  var r;
  const e = Dn(n);
  return t || (e.equals = za), Ze && L !== null && L.l !== null && ((r = L.l).s ?? (r.s = [])).push(e), e;
}
function Xa(n, t) {
  return R !== null && !Rt && Rr() && R.f & (Pt | $n) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ae === null || !ae.includes(n)) && Ua(), Ga(n, t);
}
function Ga(n, t) {
  return n.equals(t) || (n.v, n.v = t, n.wv = jn(), Mn(n, Ht), Rr() && D !== null && D.f & gt && !(D.f & (Gt | De)) && (At === null ? ro([n]) : At.push(n))), t;
}
function Mn(n, t) {
  var e = n.reactions;
  if (e !== null)
    for (var r = Rr(), i = e.length, s = 0; s < i; s++) {
      var a = e[s], o = a.f;
      o & Ht || !r && a === D || (Yt(a, t), o & (gt | mt) && (o & Pt ? Mn(
        /** @type {Derived} */
        a,
        Me
      ) : Si(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Ha(n) {
  var t = Pt | Ht, e = R !== null && R.f & Pt ? (
    /** @type {Derived} */
    R
  ) : null;
  return D === null || e !== null && e.f & mt ? t |= mt : D.f |= kn, {
    ctx: L,
    deps: null,
    effects: null,
    equals: An,
    f: t,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: e ?? D
  };
}
function Rn(n) {
  var t = n.effects;
  if (t !== null) {
    n.effects = null;
    for (var e = 0; e < t.length; e += 1)
      Ut(
        /** @type {Effect} */
        t[e]
      );
  }
}
function Ka(n) {
  for (var t = n.parent; t !== null; ) {
    if (!(t.f & Pt))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Qa(n) {
  var t, e = D;
  Oe(Ka(n));
  try {
    Rn(n), t = Yn(n);
  } finally {
    Oe(e);
  }
  return t;
}
function Fn(n) {
  var t = Qa(n), e = (zt || n.f & mt) && n.deps !== null ? Me : gt;
  Yt(n, e), n.equals(t) || (n.v = t, n.wv = jn());
}
function Nn(n) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let je = !1;
function ir(n) {
  je = n;
}
let Lt;
function Qr(n) {
  if (n === null)
    throw Nn(), or;
  return Lt = n;
}
function Ln() {
  return Qr(
    /** @type {TemplateNode} */
    /* @__PURE__ */ xi(Lt)
  );
}
var Zi, zn, In;
function Zr() {
  if (Zi === void 0) {
    Zi = window;
    var n = Element.prototype, t = Node.prototype;
    zn = Kr(t, "firstChild").get, In = Kr(t, "nextSibling").get, n.__click = void 0, n.__className = "", n.__attributes = null, n.__styles = null, n.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Za(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function Ja(n) {
  return zn.call(n);
}
// @__NO_SIDE_EFFECTS__
function xi(n) {
  return In.call(n);
}
function to(n) {
  n.textContent = "";
}
const Bn = 0, eo = 1;
let ur = !1, lr = Bn, We = !1, Ye = null, ye = !1, bi = !1;
function Ji(n) {
  ye = n;
}
function tn(n) {
  bi = n;
}
let re = [], we = 0;
let R = null, Rt = !1;
function Se(n) {
  R = n;
}
let D = null;
function Oe(n) {
  D = n;
}
let ae = null, Q = null, at = 0, At = null;
function ro(n) {
  At = n;
}
let Vn = 1, wr = 0, zt = !1;
function jn() {
  return ++Vn;
}
function Dr(n) {
  var c;
  var t = n.f;
  if (t & Ht)
    return !0;
  if (t & Me) {
    var e = n.deps, r = (t & mt) !== 0;
    if (e !== null) {
      var i, s, a = (t & mr) !== 0, o = r && D !== null && !zt, u = e.length;
      if (a || o) {
        var l = (
          /** @type {Derived} */
          n
        ), f = l.parent;
        for (i = 0; i < u; i++)
          s = e[i], (a || !((c = s == null ? void 0 : s.reactions) != null && c.includes(l))) && (s.reactions ?? (s.reactions = [])).push(l);
        a && (l.f ^= mr), o && f !== null && !(f.f & mt) && (l.f ^= mt);
      }
      for (i = 0; i < u; i++)
        if (s = e[i], Dr(
          /** @type {Derived} */
          s
        ) && Fn(
          /** @type {Derived} */
          s
        ), s.wv > n.wv)
          return !0;
    }
    (!r || D !== null && !zt) && Yt(n, gt);
  }
  return !1;
}
function io(n, t) {
  for (var e = t; e !== null; ) {
    if (e.f & pr)
      try {
        e.fn(n);
        return;
      } catch {
        e.f ^= pr;
      }
    e = e.parent;
  }
  throw ur = !1, n;
}
function no(n) {
  return (n.f & Ar) === 0 && (n.parent === null || (n.parent.f & pr) === 0);
}
function Mr(n, t, e, r) {
  if (ur) {
    if (e === null && (ur = !1), no(t))
      throw n;
    return;
  }
  e !== null && (ur = !0);
  {
    io(n, t);
    return;
  }
}
function Wn(n, t, e = !0) {
  var r = n.reactions;
  if (r !== null)
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      s.f & Pt ? Wn(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (e ? Yt(s, Ht) : s.f & gt && Yt(s, Me), Si(
        /** @type {Effect} */
        s
      ));
    }
}
function Yn(n) {
  var d;
  var t = Q, e = at, r = At, i = R, s = zt, a = ae, o = L, u = Rt, l = n.f;
  Q = /** @type {null | Value[]} */
  null, at = 0, At = null, R = l & (Gt | De) ? null : n, zt = (l & mt) !== 0 && (!ye || i === null || u), ae = null, en(n.ctx), Rt = !1, wr++;
  try {
    var f = (
      /** @type {Function} */
      (0, n.fn)()
    ), c = n.deps;
    if (Q !== null) {
      var _;
      if (xr(n, at), c !== null && at > 0)
        for (c.length = at + Q.length, _ = 0; _ < Q.length; _++)
          c[at + _] = Q[_];
      else
        n.deps = c = Q;
      if (!zt)
        for (_ = at; _ < c.length; _++)
          ((d = c[_]).reactions ?? (d.reactions = [])).push(n);
    } else c !== null && at < c.length && (xr(n, at), c.length = at);
    if (Rr() && At !== null && !Rt && c !== null && !(n.f & (Pt | Me | Ht)))
      for (_ = 0; _ < /** @type {Source[]} */
      At.length; _++)
        Wn(
          At[_],
          /** @type {Effect} */
          n
        );
    return i !== null && wr++, f;
  } finally {
    Q = t, at = e, At = r, R = i, zt = s, ae = a, en(o), Rt = u;
  }
}
function so(n, t) {
  let e = t.reactions;
  if (e !== null) {
    var r = Da.call(e, n);
    if (r !== -1) {
      var i = e.length - 1;
      i === 0 ? e = t.reactions = null : (e[r] = e[i], e.pop());
    }
  }
  e === null && t.f & Pt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Q === null || !Q.includes(t)) && (Yt(t, Me), t.f & (mt | mr) || (t.f ^= mr), Rn(
    /** @type {Derived} **/
    t
  ), xr(
    /** @type {Derived} **/
    t,
    0
  ));
}
function xr(n, t) {
  var e = n.deps;
  if (e !== null)
    for (var r = t; r < e.length; r++)
      so(n, e[r]);
}
function Ti(n) {
  var t = n.f;
  if (!(t & Ar)) {
    Yt(n, gt);
    var e = D, r = L;
    D = n;
    try {
      t & $n ? vo(n) : Zn(n), Qn(n);
      var i = Yn(n);
      n.teardown = typeof i == "function" ? i : null, n.wv = Vn;
      var s = n.deps, a;
      Hr && Ta && n.f & Ht;
    } catch (o) {
      Mr(o, n, e, r || n.ctx);
    } finally {
      D = e;
    }
  }
}
function Un() {
  if (we > 1e3) {
    we = 0;
    try {
      ja();
    } catch (n) {
      if (Ye !== null)
        Mr(n, Ye, null);
      else
        throw n;
    }
  }
  we++;
}
function qn(n) {
  var t = n.length;
  if (t !== 0) {
    Un();
    var e = ye;
    ye = !0;
    try {
      for (var r = 0; r < t; r++) {
        var i = n[r];
        i.f & gt || (i.f ^= gt);
        var s = uo(i);
        ao(s);
      }
    } finally {
      ye = e;
    }
  }
}
function ao(n) {
  var t = n.length;
  if (t !== 0)
    for (var e = 0; e < t; e++) {
      var r = n[e];
      if (!(r.f & (Ar | gr)))
        try {
          Dr(r) && (Ti(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Jn(r) : r.fn = null));
        } catch (i) {
          Mr(i, r, null, r.ctx);
        }
    }
}
function oo() {
  if (We = !1, we > 1001)
    return;
  const n = re;
  re = [], qn(n), We || (we = 0, Ye = null);
}
function Si(n) {
  lr === Bn && (We || (We = !0, queueMicrotask(oo))), Ye = n;
  for (var t = n; t.parent !== null; ) {
    t = t.parent;
    var e = t.f;
    if (e & (De | Gt)) {
      if (!(e & gt)) return;
      t.f ^= gt;
    }
  }
  re.push(t);
}
function uo(n) {
  var t = [], e = n.first;
  t: for (; e !== null; ) {
    var r = e.f, i = (r & Gt) !== 0, s = i && (r & gt) !== 0, a = e.next;
    if (!s && !(r & gr)) {
      if (r & Pn)
        t.push(e);
      else if (i)
        e.f ^= gt;
      else {
        var o = R;
        try {
          R = e, Dr(e) && Ti(e);
        } catch (f) {
          Mr(f, e, null, e.ctx);
        } finally {
          R = o;
        }
      }
      var u = e.first;
      if (u !== null) {
        e = u;
        continue;
      }
    }
    if (a === null) {
      let f = e.parent;
      for (; f !== null; ) {
        if (n === f)
          break t;
        var l = f.next;
        if (l !== null) {
          e = l;
          continue t;
        }
        f = f.parent;
      }
    }
    e = a;
  }
  return t;
}
function Oi(n) {
  var t = lr, e = re;
  try {
    Un();
    const i = [];
    lr = eo, re = i, We = !1, qn(e);
    var r = n == null ? void 0 : n();
    return (re.length > 0 || i.length > 0) && Oi(), we = 0, Ye = null, r;
  } finally {
    lr = t, re = e;
  }
}
async function lo() {
  await Promise.resolve(), Oi();
}
function br(n) {
  var t = n.f, e = (t & Pt) !== 0;
  if (R !== null && !Rt) {
    ae !== null && ae.includes(n) && Ya();
    var r = R.deps;
    n.rv < wr && (n.rv = wr, Q === null && r !== null && r[at] === n ? at++ : Q === null ? Q = [n] : (!zt || !Q.includes(n)) && Q.push(n));
  } else if (e && /** @type {Derived} */
  n.deps === null && /** @type {Derived} */
  n.effects === null) {
    var i = (
      /** @type {Derived} */
      n
    ), s = i.parent;
    s !== null && !(s.f & mt) && (i.f ^= mt);
  }
  return e && (i = /** @type {Derived} */
  n, Dr(i) && Fn(i)), n.v;
}
function Xn(n) {
  var t = Rt;
  try {
    return Rt = !0, n();
  } finally {
    Rt = t;
  }
}
const fo = -7169;
function Yt(n, t) {
  n.f = n.f & fo | t;
}
function co(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (Ki in n)
      Jr(n);
    else if (!Array.isArray(n))
      for (let t in n) {
        const e = n[t];
        typeof e == "object" && e && Ki in e && Jr(e);
      }
  }
}
function Jr(n, t = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !t.has(n)) {
    t.add(n), n instanceof Date && n.getTime();
    for (let r in n)
      try {
        Jr(n[r], t);
      } catch {
      }
    const e = Fa(n);
    if (e !== Object.prototype && e !== Array.prototype && e !== Map.prototype && e !== Set.prototype && e !== Date.prototype) {
      const r = Ra(e);
      for (let i in r) {
        const s = r[i].get;
        if (s)
          try {
            s.call(n);
          } catch {
          }
      }
    }
  }
}
function Gn(n) {
  D === null && R === null && Va(), R !== null && R.f & mt && D === null && Ba(), bi && Ia();
}
function ho(n, t) {
  var e = t.last;
  e === null ? t.last = t.first = n : (e.next = n, n.prev = e, t.last = n);
}
function Je(n, t, e, r = !0) {
  var i = (n & De) !== 0, s = D, a = {
    ctx: L,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: n | Ht,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i ? null : s,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (e) {
    var o = ye;
    try {
      Ji(!0), Ti(a), a.f |= Pa;
    } catch (f) {
      throw Ut(a), f;
    } finally {
      Ji(o);
    }
  } else t !== null && Si(a);
  var u = e && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (kn | pr)) === 0;
  if (!u && !i && r && (s !== null && ho(a, s), R !== null && R.f & Pt)) {
    var l = (
      /** @type {Derived} */
      R
    );
    (l.effects ?? (l.effects = [])).push(a);
  }
  return a;
}
function ti(n) {
  Gn();
  var t = D !== null && (D.f & Gt) !== 0 && L !== null && !L.m;
  if (t) {
    var e = (
      /** @type {ComponentContext} */
      L
    );
    (e.e ?? (e.e = [])).push({
      fn: n,
      effect: D,
      reaction: R
    });
  } else {
    var r = Hn(n);
    return r;
  }
}
function _o(n) {
  return Gn(), Kn(n);
}
function po(n) {
  const t = Je(De, n, !0);
  return () => {
    Ut(t);
  };
}
function mo(n) {
  const t = Je(De, n, !0);
  return (e = {}) => new Promise((r) => {
    e.outro ? yo(t, () => {
      Ut(t), r(void 0);
    }) : (Ut(t), r(void 0));
  });
}
function Hn(n) {
  return Je(Pn, n, !1);
}
function Kn(n) {
  return Je(En, n, !0);
}
function go(n, t = !0) {
  return Je(En | Gt, n, !0, t);
}
function Qn(n) {
  var t = n.teardown;
  if (t !== null) {
    const e = bi, r = R;
    tn(!0), Se(null);
    try {
      t.call(null);
    } finally {
      tn(e), Se(r);
    }
  }
}
function Zn(n, t = !1) {
  var e = n.first;
  for (n.first = n.last = null; e !== null; ) {
    var r = e.next;
    Ut(e, t), e = r;
  }
}
function vo(n) {
  for (var t = n.first; t !== null; ) {
    var e = t.next;
    t.f & Gt || Ut(t), t = e;
  }
}
function Ut(n, t = !0) {
  var e = !1;
  if ((t || n.f & $a) && n.nodes_start !== null) {
    for (var r = n.nodes_start, i = n.nodes_end; r !== null; ) {
      var s = r === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xi(r)
      );
      r.remove(), r = s;
    }
    e = !0;
  }
  Zn(n, t && !e), xr(n, 0), Yt(n, Ar);
  var a = n.transitions;
  if (a !== null)
    for (const u of a)
      u.stop();
  Qn(n);
  var o = n.parent;
  o !== null && o.first !== null && Jn(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = null;
}
function Jn(n) {
  var t = n.parent, e = n.prev, r = n.next;
  e !== null && (e.next = r), r !== null && (r.prev = e), t !== null && (t.first === n && (t.first = r), t.last === n && (t.last = e));
}
function yo(n, t) {
  var e = [];
  ts(n, e, !0), wo(e, () => {
    Ut(n), t && t();
  });
}
function wo(n, t) {
  var e = n.length;
  if (e > 0) {
    var r = () => --e || t();
    for (var i of n)
      i.out(r);
  } else
    t();
}
function ts(n, t, e) {
  if (!(n.f & gr)) {
    if (n.f ^= gr, n.transitions !== null)
      for (const a of n.transitions)
        (a.is_global || e) && t.push(a);
    for (var r = n.first; r !== null; ) {
      var i = r.next, s = (r.f & Ea) !== 0 || (r.f & Gt) !== 0;
      ts(r, t, s ? e : !1), r = i;
    }
  }
}
function xo(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let L = null;
function en(n) {
  L = n;
}
function es(n, t = !1, e) {
  L = {
    p: L,
    c: null,
    e: null,
    m: !1,
    s: n,
    x: null,
    l: null
  }, Ze && !t && (L.l = {
    s: null,
    u: null,
    r1: [],
    r2: Dn(!1)
  });
}
function rs(n) {
  const t = L;
  if (t !== null) {
    const a = t.e;
    if (a !== null) {
      var e = D, r = R;
      t.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var s = a[i];
          Oe(s.effect), Se(s.reaction), Hn(s.fn);
        }
      } finally {
        Oe(e), Se(r);
      }
    }
    L = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function Rr() {
  return !Ze || L !== null && L.l === null;
}
const bo = ["touchstart", "touchmove"];
function To(n) {
  return bo.includes(n);
}
const So = /* @__PURE__ */ new Set(), rn = /* @__PURE__ */ new Set();
function nr(n) {
  var w;
  var t = this, e = (
    /** @type {Node} */
    t.ownerDocument
  ), r = n.type, i = ((w = n.composedPath) == null ? void 0 : w.call(n)) || [], s = (
    /** @type {null | Element} */
    i[0] || n.target
  ), a = 0, o = n.__root;
  if (o) {
    var u = i.indexOf(o);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      n.__root = t;
      return;
    }
    var l = i.indexOf(t);
    if (l === -1)
      return;
    u <= l && (a = u);
  }
  if (s = /** @type {Element} */
  i[a] || n.target, s !== t) {
    yr(n, "currentTarget", {
      configurable: !0,
      get() {
        return s || e;
      }
    });
    var f = R, c = D;
    Se(null), Oe(null);
    try {
      for (var _, d = []; s !== null; ) {
        var p = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var h = s["__" + r];
          if (h !== void 0 && !/** @type {any} */
          s.disabled)
            if (Aa(h)) {
              var [m, ...y] = h;
              m.apply(s, [n, ...y]);
            } else
              h.call(s, n);
        } catch (b) {
          _ ? d.push(b) : _ = b;
        }
        if (n.cancelBubble || p === t || p === null)
          break;
        s = p;
      }
      if (_) {
        for (let b of d)
          queueMicrotask(() => {
            throw b;
          });
        throw _;
      }
    } finally {
      n.__root = t, delete n.currentTarget, Se(f), Oe(c);
    }
  }
}
function Oo(n, t) {
  var e = (
    /** @type {Effect} */
    D
  );
  e.nodes_start === null && (e.nodes_start = n, e.nodes_end = t);
}
function Co(n, t) {
  if (je) {
    D.nodes_end = Lt, Ln();
    return;
  }
  n !== null && n.before(
    /** @type {Node} */
    t
  );
}
function is(n, t) {
  return ns(n, t);
}
function Po(n, t) {
  Zr(), t.intro = t.intro ?? !1;
  const e = t.target, r = je, i = Lt;
  try {
    for (var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ja(e)
    ); s && (s.nodeType !== 8 || /** @type {Comment} */
    s.data !== Oa); )
      s = /** @type {TemplateNode} */
      /* @__PURE__ */ xi(s);
    if (!s)
      throw or;
    ir(!0), Qr(
      /** @type {Comment} */
      s
    ), Ln();
    const a = ns(n, { ...t, anchor: s });
    if (Lt === null || Lt.nodeType !== 8 || /** @type {Comment} */
    Lt.data !== Ca)
      throw Nn(), or;
    return ir(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === or)
      return t.recover === !1 && Wa(), Zr(), to(e), ir(!1), is(n, t);
    throw a;
  } finally {
    ir(r), Qr(i);
  }
}
const de = /* @__PURE__ */ new Map();
function ns(n, { target: t, anchor: e, props: r = {}, events: i, context: s, intro: a = !0 }) {
  Zr();
  var o = /* @__PURE__ */ new Set(), u = (c) => {
    for (var _ = 0; _ < c.length; _++) {
      var d = c[_];
      if (!o.has(d)) {
        o.add(d);
        var p = To(d);
        t.addEventListener(d, nr, { passive: p });
        var h = de.get(d);
        h === void 0 ? (document.addEventListener(d, nr, { passive: p }), de.set(d, 1)) : de.set(d, h + 1);
      }
    }
  };
  u(Ma(So)), rn.add(u);
  var l = void 0, f = mo(() => {
    var c = e ?? t.appendChild(Za());
    return go(() => {
      if (s) {
        es({});
        var _ = (
          /** @type {ComponentContext} */
          L
        );
        _.c = s;
      }
      i && (r.$$events = i), je && Oo(
        /** @type {TemplateNode} */
        c,
        null
      ), l = n(c, r) || {}, je && (D.nodes_end = Lt), s && rs();
    }), () => {
      var p;
      for (var _ of o) {
        t.removeEventListener(_, nr);
        var d = (
          /** @type {number} */
          de.get(_)
        );
        --d === 0 ? (document.removeEventListener(_, nr), de.delete(_)) : de.set(_, d);
      }
      rn.delete(u), c !== e && ((p = c.parentNode) == null || p.removeChild(c));
    };
  });
  return ei.set(l, f), l;
}
let ei = /* @__PURE__ */ new WeakMap();
function Eo(n, t) {
  const e = ei.get(n);
  return e ? (ei.delete(n), e(t)) : Promise.resolve();
}
function $o(n = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    L
  ), e = t.l.u;
  if (!e) return;
  let r = () => co(t.s);
  if (n) {
    let i = 0, s = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ Ha(() => {
      let o = !1;
      const u = t.s;
      for (const l in u)
        u[l] !== s[l] && (s[l] = u[l], o = !0);
      return o && i++, i;
    });
    r = () => br(a);
  }
  e.b.length && _o(() => {
    nn(t, r), Qi(e.b);
  }), ti(() => {
    const i = Xn(() => e.m.map(Na));
    return () => {
      for (const s of i)
        typeof s == "function" && s();
    };
  }), e.a.length && ti(() => {
    nn(t, r), Qi(e.a);
  });
}
function nn(n, t) {
  if (n.l.s)
    for (const e of n.l.s) br(e);
  t();
}
function ko(n) {
  L === null && xo(), Ze && L.l !== null ? Ao(L).m.push(n) : ti(() => {
    const t = Xn(n);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ao(n) {
  var t = (
    /** @type {ComponentContextLegacy} */
    n.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function Do(n) {
  return new Mo(n);
}
var Mt, dt;
class Mo {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Ir(this, Mt);
    /** @type {Record<string, any>} */
    Ir(this, dt);
    var s;
    var e = /* @__PURE__ */ new Map(), r = (a, o) => {
      var u = /* @__PURE__ */ qa(o);
      return e.set(a, u), u;
    };
    const i = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, o) {
          return br(e.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === ka ? !0 : (br(e.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, u) {
          return Xa(e.get(o) ?? r(o, u), u), Reflect.set(a, o, u);
        }
      }
    );
    Br(this, dt, (t.hydrate ? Po : is)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: i,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((s = t == null ? void 0 : t.props) != null && s.$$host) || t.sync === !1) && Oi(), Br(this, Mt, i.$$events);
    for (const a of Object.keys(tt(this, dt)))
      a === "$set" || a === "$destroy" || a === "$on" || yr(this, a, {
        get() {
          return tt(this, dt)[a];
        },
        /** @param {any} value */
        set(o) {
          tt(this, dt)[a] = o;
        },
        enumerable: !0
      });
    tt(this, dt).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, tt(this, dt).$destroy = () => {
      Eo(tt(this, dt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    tt(this, dt).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, e) {
    tt(this, Mt)[t] = tt(this, Mt)[t] || [];
    const r = (...i) => e.call(this, ...i);
    return tt(this, Mt)[t].push(r), () => {
      tt(this, Mt)[t] = tt(this, Mt)[t].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    tt(this, dt).$destroy();
  }
}
Mt = new WeakMap(), dt = new WeakMap();
let ss;
typeof HTMLElement == "function" && (ss = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, e, r) {
    super();
    /** The Svelte component constructor */
    yt(this, "$$ctor");
    /** Slots */
    yt(this, "$$s");
    /** @type {any} The Svelte component instance */
    yt(this, "$$c");
    /** Whether or not the custom element is connected */
    yt(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    yt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    yt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    yt(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    yt(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    yt(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    yt(this, "$$me");
    this.$$ctor = t, this.$$s = e, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, e, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(e), this.$$c) {
      const i = this.$$c.$on(t, e);
      this.$$l_u.set(e, i);
    }
    super.addEventListener(t, e, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, e, r) {
    if (super.removeEventListener(t, e, r), this.$$c) {
      const i = this.$$l_u.get(e);
      i && (i(), this.$$l_u.delete(e));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return (s) => {
          const a = document.createElement("slot");
          i !== "default" && (a.name = i), Co(s, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, r = Ro(this);
      for (const i of this.$$s)
        i in r && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), e.default = !0) : e[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = fr(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Do({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = po(() => {
        Kn(() => {
          var i;
          this.$$r = !0;
          for (const s of vr(this.$$c)) {
            if (!((i = this.$$p_d[s]) != null && i.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const a = fr(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, a);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const s of this.$$l[i]) {
          const a = this.$$c.$on(i, s);
          this.$$l_u.set(s, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, e, r) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = fr(t, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return vr(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === t || !this.$$p_d[e].attribute && e.toLowerCase() === t
    ) || t;
  }
});
function fr(n, t, e, r) {
  var s;
  const i = (s = e[n]) == null ? void 0 : s.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !e[n])
    return t;
  if (r === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Ro(n) {
  const t = {};
  return n.childNodes.forEach((e) => {
    t[
      /** @type {Element} node */
      e.slot || "default"
    ] = !0;
  }), t;
}
function Fo(n, t, e, r, i, s) {
  let a = class extends ss {
    constructor() {
      super(n, e, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return vr(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return vr(t).forEach((o) => {
    yr(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(u) {
        var c;
        u = fr(o, u, t), this.$$d[o] = u;
        var l = this.$$c;
        if (l) {
          var f = (c = Kr(l, o)) == null ? void 0 : c.get;
          f ? l[o] = u : l.$set({ [o]: u });
        }
      }
    });
  }), r.forEach((o) => {
    yr(a.prototype, o, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[o];
      }
    });
  }), n.element = /** @type {any} */
  a, a;
}
(function() {
  function n() {
    for (var r = arguments.length, i = 0; i < r; i++) {
      var s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      s.nodeType === 1 || s.nodeType === 11 ? this.appendChild(s) : this.appendChild(document.createTextNode(String(s)));
    }
  }
  function t() {
    for (; this.lastChild; )
      this.removeChild(this.lastChild);
    arguments.length && this.append.apply(this, arguments);
  }
  function e() {
    for (var r = this.parentNode, i = arguments.length, s = new Array(i), a = 0; a < i; a++)
      s[a] = arguments[a];
    var o = s.length;
    if (r)
      for (o || r.removeChild(this); o--; ) {
        var u = s[o];
        typeof u != "object" ? u = this.ownerDocument.createTextNode(u) : u.parentNode && u.parentNode.removeChild(u), o ? r.insertBefore(this.previousSibling, u) : r.replaceChild(u, this);
      }
  }
  typeof Element < "u" && (Element.prototype.append || (Element.prototype.append = n, DocumentFragment.prototype.append = n), Element.prototype.replaceChildren || (Element.prototype.replaceChildren = t, DocumentFragment.prototype.replaceChildren = t), Element.prototype.replaceWith || (Element.prototype.replaceWith = e, DocumentFragment.prototype.replaceWith = e));
})();
function No(n, t) {
  if (!(n instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sn(n, t) {
  for (var e = 0; e < t.length; e++) {
    var r = t[e];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
  }
}
function an(n, t, e) {
  return t && sn(n.prototype, t), e && sn(n, e), n;
}
function Lo(n, t, e) {
  return t in n ? Object.defineProperty(n, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[t] = e, n;
}
function on(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), e.push.apply(e, r);
  }
  return e;
}
function un(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? on(Object(e), !0).forEach(function(r) {
      Lo(n, r, e[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : on(Object(e)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(e, r));
    });
  }
  return n;
}
function as(n, t) {
  return Io(n) || Vo(n, t) || os(n, t) || Wo();
}
function Z(n) {
  return zo(n) || Bo(n) || os(n) || jo();
}
function zo(n) {
  if (Array.isArray(n)) return ri(n);
}
function Io(n) {
  if (Array.isArray(n)) return n;
}
function Bo(n) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(n)) return Array.from(n);
}
function Vo(n, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(n)))) {
    var e = [], r = !0, i = !1, s = void 0;
    try {
      for (var a = n[Symbol.iterator](), o; !(r = (o = a.next()).done) && (e.push(o.value), !(t && e.length === t)); r = !0)
        ;
    } catch (u) {
      i = !0, s = u;
    } finally {
      try {
        !r && a.return != null && a.return();
      } finally {
        if (i) throw s;
      }
    }
    return e;
  }
}
function os(n, t) {
  if (n) {
    if (typeof n == "string") return ri(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    if (e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set") return Array.from(n);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ri(n, t);
  }
}
function ri(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
  return r;
}
function jo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ie(n, t) {
  return Object.getOwnPropertyNames(Object(n)).reduce(function(e, r) {
    var i = Object.getOwnPropertyDescriptor(Object(n), r), s = Object.getOwnPropertyDescriptor(Object(t), r);
    return Object.defineProperty(e, r, s || i);
  }, {});
}
function tr(n) {
  return typeof n == "string";
}
function Ci(n) {
  return Array.isArray(n);
}
function sr() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = ie(n), e;
  return t.types !== void 0 ? e = t.types : t.split !== void 0 && (e = t.split), e !== void 0 && (t.types = (tr(e) || Ci(e) ? String(e) : "").split(",").map(function(r) {
    return String(r).trim();
  }).filter(function(r) {
    return /((line)|(word)|(char))/i.test(r);
  })), (t.absolute || t.position) && (t.absolute = t.absolute || /absolute/.test(n.position)), t;
}
function Pi(n) {
  var t = tr(n) || Ci(n) ? String(n) : "";
  return {
    none: !t,
    lines: /line/i.test(t),
    words: /word/i.test(t),
    chars: /char/i.test(t)
  };
}
function Fr(n) {
  return n !== null && typeof n == "object";
}
function Yo(n) {
  return Fr(n) && /^(1|3|11)$/.test(n.nodeType);
}
function Uo(n) {
  return typeof n == "number" && n > -1 && n % 1 === 0;
}
function qo(n) {
  return Fr(n) && Uo(n.length);
}
function ce(n) {
  return Ci(n) ? n : n == null ? [] : qo(n) ? Array.prototype.slice.call(n) : [n];
}
function ln(n) {
  var t = n;
  return tr(n) && (/^(#[a-z]\w+)$/.test(n.trim()) ? t = document.getElementById(n.trim().slice(1)) : t = document.querySelectorAll(n)), ce(t).reduce(function(e, r) {
    return [].concat(Z(e), Z(ce(r).filter(Yo)));
  }, []);
}
var Xo = Object.entries, Tr = "_splittype", wt = {}, Go = 0;
function Tt(n, t, e) {
  if (!Fr(n))
    return console.warn("[data.set] owner is not an object"), null;
  var r = n[Tr] || (n[Tr] = ++Go), i = wt[r] || (wt[r] = {});
  return e === void 0 ? t && Object.getPrototypeOf(t) === Object.prototype && (wt[r] = un(un({}, i), t)) : t !== void 0 && (i[t] = e), e;
}
function ne(n, t) {
  var e = Fr(n) ? n[Tr] : null, r = e && wt[e] || {};
  return r;
}
function us(n) {
  var t = n && n[Tr];
  t && (delete n[t], delete wt[t]);
}
function Ho() {
  Object.keys(wt).forEach(function(n) {
    delete wt[n];
  });
}
function Ko() {
  Xo(wt).forEach(function(n) {
    var t = as(n, 2), e = t[0], r = t[1], i = r.isRoot, s = r.isSplit;
    (!i || !s) && (wt[e] = null, delete wt[e]);
  });
}
function Qo(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ", e = n ? String(n) : "";
  return e.trim().replace(/\s+/g, " ").split(t);
}
var Ei = "\\ud800-\\udfff", ls = "\\u0300-\\u036f\\ufe20-\\ufe23", fs = "\\u20d0-\\u20f0", cs = "\\ufe0e\\ufe0f", Zo = "[".concat(Ei, "]"), ii = "[".concat(ls).concat(fs, "]"), ni = "\\ud83c[\\udffb-\\udfff]", Jo = "(?:".concat(ii, "|").concat(ni, ")"), hs = "[^".concat(Ei, "]"), _s = "(?:\\ud83c[\\udde6-\\uddff]){2}", ds = "[\\ud800-\\udbff][\\udc00-\\udfff]", ps = "\\u200d", ms = "".concat(Jo, "?"), gs = "[".concat(cs, "]?"), tu = "(?:" + ps + "(?:" + [hs, _s, ds].join("|") + ")" + gs + ms + ")*", eu = gs + ms + tu, ru = "(?:".concat(["".concat(hs).concat(ii, "?"), ii, _s, ds, Zo].join("|"), `
)`), iu = RegExp("".concat(ni, "(?=").concat(ni, ")|").concat(ru).concat(eu), "g"), nu = [ps, Ei, ls, fs, cs], su = RegExp("[".concat(nu.join(""), "]"));
function au(n) {
  return n.split("");
}
function vs(n) {
  return su.test(n);
}
function ou(n) {
  return n.match(iu) || [];
}
function uu(n) {
  return vs(n) ? ou(n) : au(n);
}
function lu(n) {
  return n == null ? "" : String(n);
}
function fu(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return n = lu(n), n && tr(n) && !t && vs(n) ? uu(n) : n.split(t);
}
function si(n, t) {
  var e = document.createElement(n);
  return t && Object.keys(t).forEach(function(r) {
    var i = t[r], s = tr(i) ? i.trim() : i;
    s === null || s === "" || (r === "children" ? e.append.apply(e, Z(ce(s))) : e.setAttribute(r, s));
  }), e;
}
var $i = {
  splitClass: "",
  lineClass: "line",
  wordClass: "word",
  charClass: "char",
  types: ["lines", "words", "chars"],
  absolute: !1,
  tagName: "div"
};
function cu(n, t) {
  t = ie($i, t);
  var e = Pi(t.types), r = t.tagName, i = n.nodeValue, s = document.createDocumentFragment(), a = [], o = [];
  return /^\s/.test(i) && s.append(" "), a = Qo(i).reduce(function(u, l, f, c) {
    var _, d;
    return e.chars && (d = fu(l).map(function(p) {
      var h = si(r, {
        class: "".concat(t.splitClass, " ").concat(t.charClass),
        style: "display: inline-block;",
        children: p
      });
      return Tt(h, "isChar", !0), o = [].concat(Z(o), [h]), h;
    })), e.words || e.lines ? (_ = si(r, {
      class: "".concat(t.wordClass, " ").concat(t.splitClass),
      style: "display: inline-block; ".concat(e.words && t.absolute ? "position: relative;" : ""),
      children: e.chars ? d : l
    }), Tt(_, {
      isWord: !0,
      isWordStart: !0,
      isWordEnd: !0
    }), s.appendChild(_)) : d.forEach(function(p) {
      s.appendChild(p);
    }), f < c.length - 1 && s.append(" "), e.words ? u.concat(_) : u;
  }, []), /\s$/.test(i) && s.append(" "), n.replaceWith(s), {
    words: a,
    chars: o
  };
}
function ys(n, t) {
  var e = n.nodeType, r = {
    words: [],
    chars: []
  };
  if (!/(1|3|11)/.test(e))
    return r;
  if (e === 3 && /\S/.test(n.nodeValue))
    return cu(n, t);
  var i = ce(n.childNodes);
  if (i.length && (Tt(n, "isSplit", !0), !ne(n).isRoot)) {
    n.style.display = "inline-block", n.style.position = "relative";
    var s = n.nextSibling, a = n.previousSibling, o = n.textContent || "", u = s ? s.textContent : " ", l = a ? a.textContent : " ";
    Tt(n, {
      isWordEnd: /\s$/.test(o) || /^\s/.test(u),
      isWordStart: /^\s/.test(o) || /\s$/.test(l)
    });
  }
  return i.reduce(function(f, c) {
    var _ = ys(c, t), d = _.words, p = _.chars;
    return {
      words: [].concat(Z(f.words), Z(d)),
      chars: [].concat(Z(f.chars), Z(p))
    };
  }, r);
}
function hu(n, t, e, r) {
  if (!e.absolute)
    return {
      top: t ? n.offsetTop : null
    };
  var i = n.offsetParent, s = as(r, 2), a = s[0], o = s[1], u = 0, l = 0;
  if (i && i !== document.body) {
    var f = i.getBoundingClientRect();
    u = f.x + a, l = f.y + o;
  }
  var c = n.getBoundingClientRect(), _ = c.width, d = c.height, p = c.x, h = c.y, m = h + o - l, y = p + a - u;
  return {
    width: _,
    height: d,
    top: m,
    left: y
  };
}
function ws(n) {
  ne(n).isWord ? (us(n), n.replaceWith.apply(n, Z(n.childNodes))) : ce(n.children).forEach(function(t) {
    return ws(t);
  });
}
var _u = function() {
  return document.createDocumentFragment();
};
function du(n, t, e) {
  var r = Pi(t.types), i = t.tagName, s = n.getElementsByTagName("*"), a = [], o = [], u = null, l, f, c, _ = [], d = n.parentElement, p = n.nextElementSibling, h = _u(), m = window.getComputedStyle(n), y = m.textAlign, w = parseFloat(m.fontSize), b = w * 0.2;
  return t.absolute && (c = {
    left: n.offsetLeft,
    top: n.offsetTop,
    width: n.offsetWidth
  }, f = n.offsetWidth, l = n.offsetHeight, Tt(n, {
    cssWidth: n.style.width,
    cssHeight: n.style.height
  })), ce(s).forEach(function(v) {
    var g = v.parentElement === n, T = hu(v, g, t, e), S = T.width, O = T.height, x = T.top, C = T.left;
    /^br$/i.test(v.nodeName) || (r.lines && g && ((u === null || x - u >= b) && (u = x, a.push(o = [])), o.push(v)), t.absolute && Tt(v, {
      top: x,
      left: C,
      width: S,
      height: O
    }));
  }), d && d.removeChild(n), r.lines && (_ = a.map(function(v) {
    var g = si(i, {
      class: "".concat(t.splitClass, " ").concat(t.lineClass),
      style: "display: block; text-align: ".concat(y, "; width: 100%;")
    });
    Tt(g, "isLine", !0);
    var T = {
      height: 0,
      top: 1e4
    };
    return h.appendChild(g), v.forEach(function(S, O, x) {
      var C = ne(S), $ = C.isWordEnd, E = C.top, k = C.height, W = x[O + 1];
      T.height = Math.max(T.height, k), T.top = Math.min(T.top, E), g.appendChild(S), $ && ne(W).isWordStart && g.append(" ");
    }), t.absolute && Tt(g, {
      height: T.height,
      top: T.top
    }), g;
  }), r.words || ws(h), n.replaceChildren(h)), t.absolute && (n.style.width = "".concat(n.style.width || f, "px"), n.style.height = "".concat(l, "px"), ce(s).forEach(function(v) {
    var g = ne(v), T = g.isLine, S = g.top, O = g.left, x = g.width, C = g.height, $ = ne(v.parentElement), E = !T && $.isLine;
    v.style.top = "".concat(E ? S - $.top : S, "px"), v.style.left = T ? "".concat(c.left, "px") : "".concat(O - (E ? c.left : 0), "px"), v.style.height = "".concat(C, "px"), v.style.width = T ? "".concat(c.width, "px") : "".concat(x, "px"), v.style.position = "absolute";
  })), d && (p ? d.insertBefore(n, p) : d.appendChild(n)), _;
}
var pe = ie($i, {}), pu = /* @__PURE__ */ function() {
  an(n, null, [{
    key: "clearData",
    /**
     * CLears all data
     */
    value: function() {
      Ho();
    }
    /**
     * The default settings for all splitType instances
     * @static
     */
  }, {
    key: "setDefaults",
    /**
     * Sets the default settings for all SplitType instances.
     * The provided object will be merged with the existing defaults objects.
     *
     * @param {Object} settings an object containing the settings to override
     * @returns {Object} the new default settings
     * @public
     * @static
     * @example
     * SplitType.setDefaults({ "position": "absolute" })
     */
    value: function(e) {
      return pe = ie(pe, sr(e)), $i;
    }
    /**
     * Revert target elements to their original html content
     * Has no effect on that
     *
     * @param {any} elements The target elements to revert. One of:
     *  - {string} A css selector
     *  - {HTMLElement} A single element
     * -  {NodeList} A NodeList or collection
     *  - {HTMLElement[]} An array of Elements
     * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
     * @static
     */
  }, {
    key: "revert",
    value: function(e) {
      ln(e).forEach(function(r) {
        var i = ne(r), s = i.isSplit, a = i.html, o = i.cssWidth, u = i.cssHeight;
        s && (r.innerHTML = a, r.style.width = o || "", r.style.height = u || "", us(r));
      });
    }
    /**
     * Creates a new SplitType instance
     * This static method provides a way to create a `SplitType` instance without
     * using the `new` keyword.
     *
     * @param {any} target The target elements to split. One of:
     *  - {string} A css selector
     *  - {HTMLElement} A single element
     * -  {NodeList} A NodeList or collection
     *  - {HTMLElement[]} An array of Elements
     * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
     * @param {Object} [options] Settings for the SplitType instance
     * @return {SplitType} the SplitType instance
     * @static
     */
  }, {
    key: "create",
    value: function(e, r) {
      return new n(e, r);
    }
    /**
     * Creates a new `SplitType` instance
     *
     * @param {any} elements The target elements to split. One of:
     *  - {string} A css selector
     *  - {HTMLElement} A single element
     * -  {NodeList} A NodeList or collection
     *  - {HTMLElement[]} An array of Elements
     * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
     * @param {Object} [options] Settings for the SplitType instance
     */
  }, {
    key: "data",
    /**
     * The internal data store
     */
    get: function() {
      return wt;
    }
  }, {
    key: "defaults",
    get: function() {
      return pe;
    },
    set: function(e) {
      pe = ie(pe, sr(e));
    }
  }]);
  function n(t, e) {
    No(this, n), this.isSplit = !1, this.settings = ie(pe, sr(e)), this.elements = ln(t), this.split();
  }
  return an(n, [{
    key: "split",
    value: function(e) {
      var r = this;
      this.revert(), this.elements.forEach(function(a) {
        Tt(a, "html", a.innerHTML);
      }), this.lines = [], this.words = [], this.chars = [];
      var i = [window.pageXOffset, window.pageYOffset];
      e !== void 0 && (this.settings = ie(this.settings, sr(e)));
      var s = Pi(this.settings.types);
      s.none || (this.elements.forEach(function(a) {
        Tt(a, "isRoot", !0);
        var o = ys(a, r.settings), u = o.words, l = o.chars;
        r.words = [].concat(Z(r.words), Z(u)), r.chars = [].concat(Z(r.chars), Z(l));
      }), this.elements.forEach(function(a) {
        if (s.lines || r.settings.absolute) {
          var o = du(a, r.settings, i);
          r.lines = [].concat(Z(r.lines), Z(o));
        }
      }), this.isSplit = !0, window.scrollTo(i[0], i[1]), Ko());
    }
    /**
     * Reverts target element(s) back to their original html content
     * Deletes all stored data associated with the target elements
     * Resets the properties on the splitType instance
     *
     * @public
     */
  }, {
    key: "revert",
    value: function() {
      this.isSplit && (this.lines = null, this.words = null, this.chars = null, this.isSplit = !1), n.revert(this.elements);
    }
  }]), n;
}();
function kt(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function xs(n, t) {
  n.prototype = Object.create(t.prototype), n.prototype.constructor = n, n.__proto__ = t;
}
/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ft = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Ce = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, ki, X, M, Ot = 1e8, H = 1 / Ot, ai = Math.PI * 2, mu = ai / 4, gu = 0, bs = Math.sqrt, vu = Math.cos, yu = Math.sin, q = function(t) {
  return typeof t == "string";
}, z = function(t) {
  return typeof t == "function";
}, Ft = function(t) {
  return typeof t == "number";
}, Ai = function(t) {
  return typeof t > "u";
}, Et = function(t) {
  return typeof t == "object";
}, et = function(t) {
  return t !== !1;
}, Di = function() {
  return typeof window < "u";
}, ar = function(t) {
  return z(t) || q(t);
}, Ts = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, K = Array.isArray, oi = /(?:-?\.?\d|\.)+/gi, Ss = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ge = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Vr = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Os = /[+-]=-?[.\d]+/, Cs = /[^,'"\[\]\s]+/gi, wu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, F, xt, ui, Mi, ct = {}, Sr = {}, Ps, Es = function(t) {
  return (Sr = Pe(t, ct)) && st;
}, Ri = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, Ue = function(t, e) {
  return !e && console.warn(t);
}, $s = function(t, e) {
  return t && (ct[t] = e) && Sr && (Sr[t] = e) || ct;
}, qe = function() {
  return 0;
}, xu = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, cr = {
  suppressEvents: !0,
  kill: !1
}, bu = {
  suppressEvents: !0
}, Fi = {}, jt = [], li = {}, ks, ot = {}, jr = {}, fn = 30, hr = [], Ni = "", Li = function(t) {
  var e = t[0], r, i;
  if (Et(e) || z(e) || (t = [t]), !(r = (e._gsap || {}).harness)) {
    for (i = hr.length; i-- && !hr[i].targetTest(e); )
      ;
    r = hr[i];
  }
  for (i = t.length; i--; )
    t[i] && (t[i]._gsap || (t[i]._gsap = new ta(t[i], r))) || t.splice(i, 1);
  return t;
}, oe = function(t) {
  return t._gsap || Li(pt(t))[0]._gsap;
}, As = function(t, e, r) {
  return (r = t[e]) && z(r) ? t[e]() : Ai(r) && t.getAttribute && t.getAttribute(e) || r;
}, rt = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, I = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, j = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, xe = function(t, e) {
  var r = e.charAt(0), i = parseFloat(e.substr(2));
  return t = parseFloat(t), r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i;
}, Tu = function(t, e) {
  for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, Or = function() {
  var t = jt.length, e = jt.slice(0), r, i;
  for (li = {}, jt.length = 0, r = 0; r < t; r++)
    i = e[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Ds = function(t, e, r, i) {
  jt.length && !X && Or(), t.render(e, r, X && e < 0 && (t._initted || t._startAt)), jt.length && !X && Or();
}, Ms = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(Cs).length < 2 ? e : q(t) ? t.trim() : t;
}, Rs = function(t) {
  return t;
}, ht = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, Su = function(t) {
  return function(e, r) {
    for (var i in r)
      i in e || i === "duration" && t || i === "ease" || (e[i] = r[i]);
  };
}, Pe = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, cn = function n(t, e) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = Et(e[r]) ? n(t[r] || (t[r] = {}), e[r]) : e[r]);
  return t;
}, Cr = function(t, e) {
  var r = {}, i;
  for (i in t)
    i in e || (r[i] = t[i]);
  return r;
}, Ie = function(t) {
  var e = t.parent || F, r = t.keyframes ? Su(K(t.keyframes)) : ht;
  if (et(t.inherit))
    for (; e; )
      r(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Ou = function(t, e) {
  for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
    ;
  return r < 0;
}, Fs = function(t, e, r, i, s) {
  var a = t[i], o;
  if (s)
    for (o = e[s]; a && a[s] > o; )
      a = a._prev;
  return a ? (e._next = a._next, a._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = a, e.parent = e._dp = t, e;
}, Nr = function(t, e, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var s = e._prev, a = e._next;
  s ? s._next = a : t[r] === e && (t[r] = a), a ? a._prev = s : t[i] === e && (t[i] = s), e._next = e._prev = e.parent = null;
}, qt = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, ue = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var r = t; r; )
      r._dirty = 1, r = r.parent;
  return t;
}, Cu = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, fi = function(t, e, r, i) {
  return t._startAt && (X ? t._startAt.revert(cr) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i));
}, Pu = function n(t) {
  return !t || t._ts && n(t.parent);
}, hn = function(t) {
  return t._repeat ? Ee(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Ee = function(t, e) {
  var r = Math.floor(t = j(t / e));
  return t && r === t ? r - 1 : r;
}, Pr = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Lr = function(t) {
  return t._end = j(t._start + (t._tDur / Math.abs(t._ts || t._rts || H) || 0));
}, zr = function(t, e) {
  var r = t._dp;
  return r && r.smoothChildTiming && t._ts && (t._start = j(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Lr(t), r._dirty || ue(r, t)), t;
}, Ns = function(t, e) {
  var r;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Pr(t.rawTime(), e), (!e._dur || er(0, e.totalDuration(), r) - e._tTime > H) && e.render(r, !0)), ue(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (r = t; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    t._zTime = -1e-8;
  }
}, bt = function(t, e, r, i) {
  return e.parent && qt(e), e._start = j((Ft(r) ? r : r || t !== F ? _t(t, r, e) : t._time) + e._delay), e._end = j(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Fs(t, e, "_first", "_last", t._sort ? "_start" : 0), ci(e) || (t._recent = e), i || Ns(t, e), t._ts < 0 && zr(t, t._tTime), t;
}, Ls = function(t, e) {
  return (ct.ScrollTrigger || Ri("scrollTrigger", e)) && ct.ScrollTrigger.create(e, t);
}, zs = function(t, e, r, i, s) {
  if (Ii(t, e, s), !t._initted)
    return 1;
  if (!r && t._pt && !X && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && ks !== ut.frame)
    return jt.push(t), t._lazy = [s, i], 1;
}, Eu = function n(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || n(e));
}, ci = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, $u = function(t, e, r, i) {
  var s = t.ratio, a = e < 0 || !e && (!t._start && Eu(t) && !(!t._initted && ci(t)) || (t._ts < 0 || t._dp._ts < 0) && !ci(t)) ? 0 : 1, o = t._rDelay, u = 0, l, f, c;
  if (o && t._repeat && (u = er(0, t._tDur, e), f = Ee(u, o), t._yoyo && f & 1 && (a = 1 - a), f !== Ee(t._tTime, o) && (s = 1 - a, t.vars.repeatRefresh && t._initted && t.invalidate())), a !== s || X || i || t._zTime === H || !e && t._zTime) {
    if (!t._initted && zs(t, e, i, r, u))
      return;
    for (c = t._zTime, t._zTime = e || (r ? H : 0), r || (r = e && !c), t.ratio = a, t._from && (a = 1 - a), t._time = 0, t._tTime = u, l = t._pt; l; )
      l.r(a, l.d), l = l._next;
    e < 0 && fi(t, e, r, !0), t._onUpdate && !r && lt(t, "onUpdate"), u && t._repeat && !r && t.parent && lt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === a && (a && qt(t, 1), !r && !X && (lt(t, a ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, ku = function(t, e, r) {
  var i;
  if (r > e)
    for (i = t._first; i && i._start <= r; ) {
      if (i.data === "isPause" && i._start > e)
        return i;
      i = i._next;
    }
  else
    for (i = t._last; i && i._start >= r; ) {
      if (i.data === "isPause" && i._start < e)
        return i;
      i = i._prev;
    }
}, $e = function(t, e, r, i) {
  var s = t._repeat, a = j(e) || 0, o = t._tTime / t._tDur;
  return o && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = s ? s < 0 ? 1e10 : j(a * (s + 1) + t._rDelay * s) : a, o > 0 && !i && zr(t, t._tTime = t._tDur * o), t.parent && Lr(t), r || ue(t.parent, t), t;
}, _n = function(t) {
  return t instanceof J ? ue(t) : $e(t, t._dur);
}, Au = {
  _start: 0,
  endTime: qe,
  totalDuration: qe
}, _t = function n(t, e, r) {
  var i = t.labels, s = t._recent || Au, a = t.duration() >= Ot ? s.endTime(!1) : t._dur, o, u, l;
  return q(e) && (isNaN(e) || e in i) ? (u = e.charAt(0), l = e.substr(-1) === "%", o = e.indexOf("="), u === "<" || u === ">" ? (o >= 0 && (e = e.replace(/=/, "")), (u === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (l ? (o < 0 ? s : r).totalDuration() / 100 : 1)) : o < 0 ? (e in i || (i[e] = a), i[e]) : (u = parseFloat(e.charAt(o - 1) + e.substr(o + 1)), l && r && (u = u / 100 * (K(r) ? r[0] : r).totalDuration()), o > 1 ? n(t, e.substr(0, o - 1), r) + u : a + u)) : e == null ? a : +e;
}, Be = function(t, e, r) {
  var i = Ft(e[1]), s = (i ? 2 : 1) + (t < 2 ? 0 : 1), a = e[s], o, u;
  if (i && (a.duration = e[1]), a.parent = r, t) {
    for (o = a, u = r; u && !("immediateRender" in o); )
      o = u.vars.defaults || {}, u = et(u.vars.inherit) && u.parent;
    a.immediateRender = et(o.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1];
  }
  return new V(e[0], a, e[s + 1]);
}, Kt = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, er = function(t, e, r) {
  return r < t ? t : r > e ? e : r;
}, G = function(t, e) {
  return !q(t) || !(e = wu.exec(t)) ? "" : e[1];
}, Du = function(t, e, r) {
  return Kt(r, function(i) {
    return er(t, e, i);
  });
}, hi = [].slice, Is = function(t, e) {
  return t && Et(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Et(t[0])) && !t.nodeType && t !== xt;
}, Mu = function(t, e, r) {
  return r === void 0 && (r = []), t.forEach(function(i) {
    var s;
    return q(i) && !e || Is(i, 1) ? (s = r).push.apply(s, pt(i)) : r.push(i);
  }) || r;
}, pt = function(t, e, r) {
  return M && !e && M.selector ? M.selector(t) : q(t) && !r && (ui || !ke()) ? hi.call((e || Mi).querySelectorAll(t), 0) : K(t) ? Mu(t, r) : Is(t) ? hi.call(t, 0) : t ? [t] : [];
}, _i = function(t) {
  return t = pt(t)[0] || Ue("Invalid scope") || {}, function(e) {
    var r = t.current || t.nativeElement || t;
    return pt(e, r.querySelectorAll ? r : r === t ? Ue("Invalid scope") || Mi.createElement("div") : t);
  };
}, Bs = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Vs = function(t) {
  if (z(t))
    return t;
  var e = Et(t) ? t : {
    each: t
  }, r = le(e.ease), i = e.from || 0, s = parseFloat(e.base) || 0, a = {}, o = i > 0 && i < 1, u = isNaN(i) || o, l = e.axis, f = i, c = i;
  return q(i) ? f = c = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !o && u && (f = i[0], c = i[1]), function(_, d, p) {
    var h = (p || e).length, m = a[h], y, w, b, v, g, T, S, O, x;
    if (!m) {
      if (x = e.grid === "auto" ? 0 : (e.grid || [1, Ot])[1], !x) {
        for (S = -1e8; S < (S = p[x++].getBoundingClientRect().left) && x < h; )
          ;
        x < h && x--;
      }
      for (m = a[h] = [], y = u ? Math.min(x, h) * f - 0.5 : i % x, w = x === Ot ? 0 : u ? h * c / x - 0.5 : i / x | 0, S = 0, O = Ot, T = 0; T < h; T++)
        b = T % x - y, v = w - (T / x | 0), m[T] = g = l ? Math.abs(l === "y" ? v : b) : bs(b * b + v * v), g > S && (S = g), g < O && (O = g);
      i === "random" && Bs(m), m.max = S - O, m.min = O, m.v = h = (parseFloat(e.amount) || parseFloat(e.each) * (x > h ? h - 1 : l ? l === "y" ? h / x : x : Math.max(x, h / x)) || 0) * (i === "edges" ? -1 : 1), m.b = h < 0 ? s - h : s, m.u = G(e.amount || e.each) || 0, r = r && h < 0 ? Qs(r) : r;
    }
    return h = (m[_] - m.min) / m.max || 0, j(m.b + (r ? r(h) : h) * m.v) + m.u;
  };
}, di = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(r) {
    var i = j(Math.round(parseFloat(r) / t) * t * e);
    return (i - i % 1) / e + (Ft(r) ? 0 : G(r));
  };
}, js = function(t, e) {
  var r = K(t), i, s;
  return !r && Et(t) && (i = r = t.radius || Ot, t.values ? (t = pt(t.values), (s = !Ft(t[0])) && (i *= i)) : t = di(t.increment)), Kt(e, r ? z(t) ? function(a) {
    return s = t(a), Math.abs(s - a) <= i ? s : a;
  } : function(a) {
    for (var o = parseFloat(s ? a.x : a), u = parseFloat(s ? a.y : 0), l = Ot, f = 0, c = t.length, _, d; c--; )
      s ? (_ = t[c].x - o, d = t[c].y - u, _ = _ * _ + d * d) : _ = Math.abs(t[c] - o), _ < l && (l = _, f = c);
    return f = !i || l <= i ? t[f] : a, s || f === a || Ft(a) ? f : f + G(a);
  } : di(t));
}, Ws = function(t, e, r, i) {
  return Kt(K(t) ? !e : r === !0 ? !!(r = 0) : !i, function() {
    return K(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * 0.99)) / r) * r * i) / i;
  });
}, Ru = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return function(i) {
    return e.reduce(function(s, a) {
      return a(s);
    }, i);
  };
}, Fu = function(t, e) {
  return function(r) {
    return t(parseFloat(r)) + (e || G(r));
  };
}, Nu = function(t, e, r) {
  return Us(t, e, 0, 1, r);
}, Ys = function(t, e, r) {
  return Kt(r, function(i) {
    return t[~~e(i)];
  });
}, Lu = function n(t, e, r) {
  var i = e - t;
  return K(t) ? Ys(t, n(0, t.length), e) : Kt(r, function(s) {
    return (i + (s - t) % i) % i + t;
  });
}, zu = function n(t, e, r) {
  var i = e - t, s = i * 2;
  return K(t) ? Ys(t, n(0, t.length - 1), e) : Kt(r, function(a) {
    return a = (s + (a - t) % s) % s || 0, t + (a > i ? s - a : a);
  });
}, Xe = function(t) {
  for (var e = 0, r = "", i, s, a, o; ~(i = t.indexOf("random(", e)); )
    a = t.indexOf(")", i), o = t.charAt(i + 7) === "[", s = t.substr(i + 7, a - i - 7).match(o ? Cs : oi), r += t.substr(e, i - e) + Ws(o ? s : +s[0], o ? 0 : +s[1], +s[2] || 1e-5), e = a + 1;
  return r + t.substr(e, t.length - e);
}, Us = function(t, e, r, i, s) {
  var a = e - t, o = i - r;
  return Kt(s, function(u) {
    return r + ((u - t) / a * o || 0);
  });
}, Iu = function n(t, e, r, i) {
  var s = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!s) {
    var a = q(t), o = {}, u, l, f, c, _;
    if (r === !0 && (i = 1) && (r = null), a)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (K(t) && !K(e)) {
      for (f = [], c = t.length, _ = c - 2, l = 1; l < c; l++)
        f.push(n(t[l - 1], t[l]));
      c--, s = function(p) {
        p *= c;
        var h = Math.min(_, ~~p);
        return f[h](p - h);
      }, r = e;
    } else i || (t = Pe(K(t) ? [] : {}, t));
    if (!f) {
      for (u in e)
        zi.call(o, t, u, "get", e[u]);
      s = function(p) {
        return ji(p, o) || (a ? t.p : t);
      };
    }
  }
  return Kt(r, s);
}, dn = function(t, e, r) {
  var i = t.labels, s = Ot, a, o, u;
  for (a in i)
    o = i[a] - e, o < 0 == !!r && o && s > (o = Math.abs(o)) && (u = a, s = o);
  return u;
}, lt = function(t, e, r) {
  var i = t.vars, s = i[e], a = M, o = t._ctx, u, l, f;
  if (s)
    return u = i[e + "Params"], l = i.callbackScope || t, r && jt.length && Or(), o && (M = o), f = u ? s.apply(l, u) : s.call(l), M = a, f;
}, Le = function(t) {
  return qt(t), t.scrollTrigger && t.scrollTrigger.kill(!!X), t.progress() < 1 && lt(t, "onInterrupt"), t;
}, ve, qs = [], Xs = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Di() || t.headless) {
      var e = t.name, r = z(t), i = e && !r && t.init ? function() {
        this._props = [];
      } : t, s = {
        init: qe,
        render: ji,
        add: zi,
        kill: el,
        modifier: tl,
        rawVars: 0
      }, a = {
        targetTest: 0,
        get: 0,
        getSetter: Vi,
        aliases: {},
        register: 0
      };
      if (ke(), t !== i) {
        if (ot[e])
          return;
        ht(i, ht(Cr(t, s), a)), Pe(i.prototype, Pe(s, Cr(t, a))), ot[i.prop = e] = i, t.targetTest && (hr.push(i), Fi[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      $s(e, i), t.register && t.register(st, i, it);
    } else
      qs.push(t);
}, A = 255, ze = {
  aqua: [0, A, A],
  lime: [0, A, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, A],
  navy: [0, 0, 128],
  white: [A, A, A],
  olive: [128, 128, 0],
  yellow: [A, A, 0],
  orange: [A, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [A, 0, 0],
  pink: [A, 192, 203],
  cyan: [0, A, A],
  transparent: [A, A, A, 0]
}, Wr = function(t, e, r) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * A + 0.5 | 0;
}, Gs = function(t, e, r) {
  var i = t ? Ft(t) ? [t >> 16, t >> 8 & A, t & A] : 0 : ze.black, s, a, o, u, l, f, c, _, d, p;
  if (!i) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), ze[t])
      i = ze[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (s = t.charAt(1), a = t.charAt(2), o = t.charAt(3), t = "#" + s + s + a + a + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & A, i & A, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & A, t & A];
    } else if (t.substr(0, 3) === "hsl") {
      if (i = p = t.match(oi), !e)
        u = +i[0] % 360 / 360, l = +i[1] / 100, f = +i[2] / 100, a = f <= 0.5 ? f * (l + 1) : f + l - f * l, s = f * 2 - a, i.length > 3 && (i[3] *= 1), i[0] = Wr(u + 1 / 3, s, a), i[1] = Wr(u, s, a), i[2] = Wr(u - 1 / 3, s, a);
      else if (~t.indexOf("="))
        return i = t.match(Ss), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = t.match(oi) || ze.transparent;
    i = i.map(Number);
  }
  return e && !p && (s = i[0] / A, a = i[1] / A, o = i[2] / A, c = Math.max(s, a, o), _ = Math.min(s, a, o), f = (c + _) / 2, c === _ ? u = l = 0 : (d = c - _, l = f > 0.5 ? d / (2 - c - _) : d / (c + _), u = c === s ? (a - o) / d + (a < o ? 6 : 0) : c === a ? (o - s) / d + 2 : (s - a) / d + 4, u *= 60), i[0] = ~~(u + 0.5), i[1] = ~~(l * 100 + 0.5), i[2] = ~~(f * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, Hs = function(t) {
  var e = [], r = [], i = -1;
  return t.split(Wt).forEach(function(s) {
    var a = s.match(ge) || [];
    e.push.apply(e, a), r.push(i += a.length + 1);
  }), e.c = r, e;
}, pn = function(t, e, r) {
  var i = "", s = (t + i).match(Wt), a = e ? "hsla(" : "rgba(", o = 0, u, l, f, c;
  if (!s)
    return t;
  if (s = s.map(function(_) {
    return (_ = Gs(_, e, 1)) && a + (e ? _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : _.join(",")) + ")";
  }), r && (f = Hs(t), u = r.c, u.join(i) !== f.c.join(i)))
    for (l = t.replace(Wt, "1").split(ge), c = l.length - 1; o < c; o++)
      i += l[o] + (~u.indexOf(o) ? s.shift() || a + "0,0,0,0)" : (f.length ? f : s.length ? s : r).shift());
  if (!l)
    for (l = t.split(Wt), c = l.length - 1; o < c; o++)
      i += l[o] + s[o];
  return i + l[c];
}, Wt = function() {
  var n = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in ze)
    n += "|" + t + "\\b";
  return new RegExp(n + ")", "gi");
}(), Bu = /hsl[a]?\(/, Ks = function(t) {
  var e = t.join(" "), r;
  if (Wt.lastIndex = 0, Wt.test(e))
    return r = Bu.test(e), t[1] = pn(t[1], r), t[0] = pn(t[0], r, Hs(t[1])), !0;
}, Ge, ut = function() {
  var n = Date.now, t = 500, e = 33, r = n(), i = r, s = 1e3 / 240, a = s, o = [], u, l, f, c, _, d, p = function h(m) {
    var y = n() - i, w = m === !0, b, v, g, T;
    if ((y > t || y < 0) && (r += y - e), i += y, g = i - r, b = g - a, (b > 0 || w) && (T = ++c.frame, _ = g - c.time * 1e3, c.time = g = g / 1e3, a += b + (b >= s ? 4 : s - b), v = 1), w || (u = l(h)), v)
      for (d = 0; d < o.length; d++)
        o[d](g, _, T, m);
  };
  return c = {
    time: 0,
    frame: 0,
    tick: function() {
      p(!0);
    },
    deltaRatio: function(m) {
      return _ / (1e3 / (m || 60));
    },
    wake: function() {
      Ps && (!ui && Di() && (xt = ui = window, Mi = xt.document || {}, ct.gsap = st, (xt.gsapVersions || (xt.gsapVersions = [])).push(st.version), Es(Sr || xt.GreenSockGlobals || !xt.gsap && xt || {}), qs.forEach(Xs)), f = typeof requestAnimationFrame < "u" && requestAnimationFrame, u && c.sleep(), l = f || function(m) {
        return setTimeout(m, a - c.time * 1e3 + 1 | 0);
      }, Ge = 1, p(2));
    },
    sleep: function() {
      (f ? cancelAnimationFrame : clearTimeout)(u), Ge = 0, l = qe;
    },
    lagSmoothing: function(m, y) {
      t = m || 1 / 0, e = Math.min(y || 33, t);
    },
    fps: function(m) {
      s = 1e3 / (m || 240), a = c.time * 1e3 + s;
    },
    add: function(m, y, w) {
      var b = y ? function(v, g, T, S) {
        m(v, g, T, S), c.remove(b);
      } : m;
      return c.remove(m), o[w ? "unshift" : "push"](b), ke(), b;
    },
    remove: function(m, y) {
      ~(y = o.indexOf(m)) && o.splice(y, 1) && d >= y && d--;
    },
    _listeners: o
  }, c;
}(), ke = function() {
  return !Ge && ut.wake();
}, P = {}, Vu = /^[\d.\-M][\d.\-,\s]/, ju = /["']/g, Wu = function(t) {
  for (var e = {}, r = t.substr(1, t.length - 3).split(":"), i = r[0], s = 1, a = r.length, o, u, l; s < a; s++)
    u = r[s], o = s !== a - 1 ? u.lastIndexOf(",") : u.length, l = u.substr(0, o), e[i] = isNaN(l) ? l.replace(ju, "").trim() : +l, i = u.substr(o + 1).trim();
  return e;
}, Yu = function(t) {
  var e = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", e);
  return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
}, Uu = function(t) {
  var e = (t + "").split("("), r = P[e[0]];
  return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [Wu(e[1])] : Yu(t).split(",").map(Ms)) : P._CE && Vu.test(t) ? P._CE("", t) : r;
}, Qs = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Zs = function n(t, e) {
  for (var r = t._first, i; r; )
    r instanceof J ? n(r, e) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== e && (r.timeline ? n(r.timeline, e) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = e)), r = r._next;
}, le = function(t, e) {
  return t && (z(t) ? t : P[t] || Uu(t)) || e;
}, _e = function(t, e, r, i) {
  r === void 0 && (r = function(u) {
    return 1 - e(1 - u);
  }), i === void 0 && (i = function(u) {
    return u < 0.5 ? e(u * 2) / 2 : 1 - e((1 - u) * 2) / 2;
  });
  var s = {
    easeIn: e,
    easeOut: r,
    easeInOut: i
  }, a;
  return rt(t, function(o) {
    P[o] = ct[o] = s, P[a = o.toLowerCase()] = r;
    for (var u in s)
      P[a + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = P[o + "." + u] = s[u];
  }), s;
}, Js = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, Yr = function n(t, e, r) {
  var i = e >= 1 ? e : 1, s = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), a = s / ai * (Math.asin(1 / i) || 0), o = function(f) {
    return f === 1 ? 1 : i * Math.pow(2, -10 * f) * yu((f - a) * s) + 1;
  }, u = t === "out" ? o : t === "in" ? function(l) {
    return 1 - o(1 - l);
  } : Js(o);
  return s = ai / s, u.config = function(l, f) {
    return n(t, l, f);
  }, u;
}, Ur = function n(t, e) {
  e === void 0 && (e = 1.70158);
  var r = function(a) {
    return a ? --a * a * ((e + 1) * a + e) + 1 : 0;
  }, i = t === "out" ? r : t === "in" ? function(s) {
    return 1 - r(1 - s);
  } : Js(r);
  return i.config = function(s) {
    return n(t, s);
  }, i;
};
rt("Linear,Quad,Cubic,Quart,Quint,Strong", function(n, t) {
  var e = t < 5 ? t + 1 : t;
  _e(n + ",Power" + (e - 1), t ? function(r) {
    return Math.pow(r, e);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, e);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, e) / 2 : 1 - Math.pow((1 - r) * 2, e) / 2;
  });
});
P.Linear.easeNone = P.none = P.Linear.easeIn;
_e("Elastic", Yr("in"), Yr("out"), Yr());
(function(n, t) {
  var e = 1 / t, r = 2 * e, i = 2.5 * e, s = function(o) {
    return o < e ? n * o * o : o < r ? n * Math.pow(o - 1.5 / t, 2) + 0.75 : o < i ? n * (o -= 2.25 / t) * o + 0.9375 : n * Math.pow(o - 2.625 / t, 2) + 0.984375;
  };
  _e("Bounce", function(a) {
    return 1 - s(1 - a);
  }, s);
})(7.5625, 2.75);
_e("Expo", function(n) {
  return Math.pow(2, 10 * (n - 1)) * n + n * n * n * n * n * n * (1 - n);
});
_e("Circ", function(n) {
  return -(bs(1 - n * n) - 1);
});
_e("Sine", function(n) {
  return n === 1 ? 1 : -vu(n * mu) + 1;
});
_e("Back", Ur("in"), Ur("out"), Ur());
P.SteppedEase = P.steps = ct.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var r = 1 / t, i = t + (e ? 0 : 1), s = e ? 1 : 0, a = 1 - H;
    return function(o) {
      return ((i * er(0, a, o) | 0) + s) * r;
    };
  }
};
Ce.ease = P["quad.out"];
rt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(n) {
  return Ni += n + "," + n + "Params,";
});
var ta = function(t, e) {
  this.id = gu++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : As, this.set = e ? e.getSetter : Vi;
}, He = /* @__PURE__ */ function() {
  function n(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, $e(this, +e.duration, 1, 1), this.data = e.data, M && (this._ctx = M, M.data.push(this)), Ge || ut.wake();
  }
  var t = n.prototype;
  return t.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, t.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, $e(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(r, i) {
    if (ke(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (zr(this, r), !s._dp || s.parent || Ns(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && bt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === H || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Ds(this, r, i)), this;
  }, t.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + hn(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, t.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + hn(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(r, i) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * s, i) : this._repeat ? Ee(this._tTime, s) + 1 : 1;
  }, t.timeScale = function(r, i) {
    if (!arguments.length)
      return this._rts === -1e-8 ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var s = this.parent && this._ts ? Pr(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -1e-8 ? 0 : this._rts, this.totalTime(er(-Math.abs(this._delay), this._tDur, s), i !== !1), Lr(this), Cu(this);
  }, t.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ke(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== H && (this._tTime -= H)))), this) : this._ps;
  }, t.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && bt(i, this, r - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(r) {
    return this._start + (et(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Pr(i.rawTime(r), this) : this._tTime : this._tTime;
  }, t.revert = function(r) {
    r === void 0 && (r = bu);
    var i = X;
    return X = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), X = i, this;
  }, t.globalTime = function(r) {
    for (var i = this, s = arguments.length ? r : i.rawTime(); i; )
      s = i._start + s / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : s;
  }, t.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, _n(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, _n(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, t.seek = function(r, i) {
    return this.totalTime(_t(this, r), et(i));
  }, t.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, et(i)), this._dur || (this._zTime = -1e-8), this;
  }, t.play = function(r, i) {
    return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
  }, t.reverse = function(r, i) {
    return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, t.pause = function(r, i) {
    return r != null && this.seek(r, i), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -1e-8 : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -1e-8, this;
  }, t.isActive = function() {
    var r = this.parent || this._dp, i = this._start, s;
    return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= i && s < this.endTime(!0) - H);
  }, t.eventCallback = function(r, i, s) {
    var a = this.vars;
    return arguments.length > 1 ? (i ? (a[r] = i, s && (a[r + "Params"] = s), r === "onUpdate" && (this._onUpdate = i)) : delete a[r], this) : a[r];
  }, t.then = function(r) {
    var i = this;
    return new Promise(function(s) {
      var a = z(r) ? r : Rs, o = function() {
        var l = i.then;
        i.then = null, z(a) && (a = a(i)) && (a.then || a === i) && (i.then = l), s(a), i.then = l;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? o() : i._prom = o;
    });
  }, t.kill = function() {
    Le(this);
  }, n;
}();
ht(He.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -1e-8,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var J = /* @__PURE__ */ function(n) {
  xs(t, n);
  function t(r, i) {
    var s;
    return r === void 0 && (r = {}), s = n.call(this, r) || this, s.labels = {}, s.smoothChildTiming = !!r.smoothChildTiming, s.autoRemoveChildren = !!r.autoRemoveChildren, s._sort = et(r.sortChildren), F && bt(r.parent || F, kt(s), i), r.reversed && s.reverse(), r.paused && s.paused(!0), r.scrollTrigger && Ls(kt(s), r.scrollTrigger), s;
  }
  var e = t.prototype;
  return e.to = function(i, s, a) {
    return Be(0, arguments, this), this;
  }, e.from = function(i, s, a) {
    return Be(1, arguments, this), this;
  }, e.fromTo = function(i, s, a, o) {
    return Be(2, arguments, this), this;
  }, e.set = function(i, s, a) {
    return s.duration = 0, s.parent = this, Ie(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new V(i, s, _t(this, a), 1), this;
  }, e.call = function(i, s, a) {
    return bt(this, V.delayedCall(0, i, s), a);
  }, e.staggerTo = function(i, s, a, o, u, l, f) {
    return a.duration = s, a.stagger = a.stagger || o, a.onComplete = l, a.onCompleteParams = f, a.parent = this, new V(i, a, _t(this, u)), this;
  }, e.staggerFrom = function(i, s, a, o, u, l, f) {
    return a.runBackwards = 1, Ie(a).immediateRender = et(a.immediateRender), this.staggerTo(i, s, a, o, u, l, f);
  }, e.staggerFromTo = function(i, s, a, o, u, l, f, c) {
    return o.startAt = a, Ie(o).immediateRender = et(o.immediateRender), this.staggerTo(i, s, o, u, l, f, c);
  }, e.render = function(i, s, a) {
    var o = this._time, u = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, f = i <= 0 ? 0 : j(i), c = this._zTime < 0 != i < 0 && (this._initted || !l), _, d, p, h, m, y, w, b, v, g, T, S;
    if (this !== F && f > u && i >= 0 && (f = u), f !== this._tTime || a || c) {
      if (o !== this._time && l && (f += this._time - o, i += this._time - o), _ = f, v = this._start, b = this._ts, y = !b, c && (l || (o = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
        if (T = this._yoyo, m = l + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(m * 100 + i, s, a);
        if (_ = j(f % m), f === u ? (h = this._repeat, _ = l) : (g = j(f / m), h = ~~g, h && h === g && (_ = l, h--), _ > l && (_ = l)), g = Ee(this._tTime, m), !o && this._tTime && g !== h && this._tTime - g * m - this._dur <= 0 && (g = h), T && h & 1 && (_ = l - _, S = 1), h !== g && !this._lock) {
          var O = T && g & 1, x = O === (T && h & 1);
          if (h < g && (O = !O), o = O ? 0 : f % l ? l : f, this._lock = 1, this.render(o || (S ? 0 : j(h * m)), s, !l)._lock = 0, this._tTime = f, !s && this.parent && lt(this, "onRepeat"), this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1), o && o !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (l = this._dur, u = this._tDur, x && (this._lock = 2, o = O ? l : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !S && this.invalidate()), this._lock = 0, !this._ts && !y)
            return this;
          Zs(this, S);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (w = ku(this, j(o), j(_)), w && (f -= _ - (_ = w._start))), this._tTime = f, this._time = _, this._act = !b, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && _ && !s && !h && (lt(this, "onStart"), this._tTime !== f))
        return this;
      if (_ >= o && i >= 0)
        for (d = this._first; d; ) {
          if (p = d._next, (d._act || _ >= d._start) && d._ts && w !== d) {
            if (d.parent !== this)
              return this.render(i, s, a);
            if (d.render(d._ts > 0 ? (_ - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (_ - d._start) * d._ts, s, a), _ !== this._time || !this._ts && !y) {
              w = 0, p && (f += this._zTime = -1e-8);
              break;
            }
          }
          d = p;
        }
      else {
        d = this._last;
        for (var C = i < 0 ? i : _; d; ) {
          if (p = d._prev, (d._act || C <= d._end) && d._ts && w !== d) {
            if (d.parent !== this)
              return this.render(i, s, a);
            if (d.render(d._ts > 0 ? (C - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (C - d._start) * d._ts, s, a || X && (d._initted || d._startAt)), _ !== this._time || !this._ts && !y) {
              w = 0, p && (f += this._zTime = C ? -1e-8 : H);
              break;
            }
          }
          d = p;
        }
      }
      if (w && !s && (this.pause(), w.render(_ >= o ? 0 : -1e-8)._zTime = _ >= o ? 1 : -1, this._ts))
        return this._start = v, Lr(this), this.render(i, s, a);
      this._onUpdate && !s && lt(this, "onUpdate", !0), (f === u && this._tTime >= this.totalDuration() || !f && o) && (v === this._start || Math.abs(b) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (f === u && this._ts > 0 || !f && this._ts < 0) && qt(this, 1), !s && !(i < 0 && !o) && (f || o || !u) && (lt(this, f === u && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < u && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(i, s) {
    var a = this;
    if (Ft(s) || (s = _t(this, s, i)), !(i instanceof He)) {
      if (K(i))
        return i.forEach(function(o) {
          return a.add(o, s);
        }), this;
      if (q(i))
        return this.addLabel(i, s);
      if (z(i))
        i = V.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? bt(this, i, s) : this;
  }, e.getChildren = function(i, s, a, o) {
    i === void 0 && (i = !0), s === void 0 && (s = !0), a === void 0 && (a = !0), o === void 0 && (o = -1e8);
    for (var u = [], l = this._first; l; )
      l._start >= o && (l instanceof V ? s && u.push(l) : (a && u.push(l), i && u.push.apply(u, l.getChildren(!0, s, a)))), l = l._next;
    return u;
  }, e.getById = function(i) {
    for (var s = this.getChildren(1, 1, 1), a = s.length; a--; )
      if (s[a].vars.id === i)
        return s[a];
  }, e.remove = function(i) {
    return q(i) ? this.removeLabel(i) : z(i) ? this.killTweensOf(i) : (i.parent === this && Nr(this, i), i === this._recent && (this._recent = this._last), ue(this));
  }, e.totalTime = function(i, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = j(ut.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), n.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(i, s) {
    return this.labels[i] = _t(this, s), this;
  }, e.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, e.addPause = function(i, s, a) {
    var o = V.delayedCall(0, s || qe, a);
    return o.data = "isPause", this._hasPause = 1, bt(this, o, _t(this, i));
  }, e.removePause = function(i) {
    var s = this._first;
    for (i = _t(this, i); s; )
      s._start === i && s.data === "isPause" && qt(s), s = s._next;
  }, e.killTweensOf = function(i, s, a) {
    for (var o = this.getTweensOf(i, a), u = o.length; u--; )
      It !== o[u] && o[u].kill(i, s);
    return this;
  }, e.getTweensOf = function(i, s) {
    for (var a = [], o = pt(i), u = this._first, l = Ft(s), f; u; )
      u instanceof V ? Tu(u._targets, o) && (l ? (!It || u._initted && u._ts) && u.globalTime(0) <= s && u.globalTime(u.totalDuration()) > s : !s || u.isActive()) && a.push(u) : (f = u.getTweensOf(o, s)).length && a.push.apply(a, f), u = u._next;
    return a;
  }, e.tweenTo = function(i, s) {
    s = s || {};
    var a = this, o = _t(a, i), u = s, l = u.startAt, f = u.onStart, c = u.onStartParams, _ = u.immediateRender, d, p = V.to(a, ht({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: s.duration || Math.abs((o - (l && "time" in l ? l.time : a._time)) / a.timeScale()) || H,
      onStart: function() {
        if (a.pause(), !d) {
          var m = s.duration || Math.abs((o - (l && "time" in l ? l.time : a._time)) / a.timeScale());
          p._dur !== m && $e(p, m, 0, 1).render(p._time, !0, !0), d = 1;
        }
        f && f.apply(p, c || []);
      }
    }, s));
    return _ ? p.render(0) : p;
  }, e.tweenFromTo = function(i, s, a) {
    return this.tweenTo(s, ht({
      startAt: {
        time: _t(this, i)
      }
    }, a));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(i) {
    return i === void 0 && (i = this._time), dn(this, _t(this, i));
  }, e.previousLabel = function(i) {
    return i === void 0 && (i = this._time), dn(this, _t(this, i), 1);
  }, e.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + H);
  }, e.shiftChildren = function(i, s, a) {
    a === void 0 && (a = 0);
    for (var o = this._first, u = this.labels, l; o; )
      o._start >= a && (o._start += i, o._end += i), o = o._next;
    if (s)
      for (l in u)
        u[l] >= a && (u[l] += i);
    return ue(this);
  }, e.invalidate = function(i) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(i), s = s._next;
    return n.prototype.invalidate.call(this, i);
  }, e.clear = function(i) {
    i === void 0 && (i = !0);
    for (var s = this._first, a; s; )
      a = s._next, this.remove(s), s = a;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), ue(this);
  }, e.totalDuration = function(i) {
    var s = 0, a = this, o = a._last, u = Ot, l, f, c;
    if (arguments.length)
      return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -i : i));
    if (a._dirty) {
      for (c = a.parent; o; )
        l = o._prev, o._dirty && o.totalDuration(), f = o._start, f > u && a._sort && o._ts && !a._lock ? (a._lock = 1, bt(a, o, f - o._delay, 1)._lock = 0) : u = f, f < 0 && o._ts && (s -= f, (!c && !a._dp || c && c.smoothChildTiming) && (a._start += f / a._ts, a._time -= f, a._tTime -= f), a.shiftChildren(-f, !1, -1 / 0), u = 0), o._end > s && o._ts && (s = o._end), o = l;
      $e(a, a === F && a._time > s ? a._time : s, 1, 1), a._dirty = 0;
    }
    return a._tDur;
  }, t.updateRoot = function(i) {
    if (F._ts && (Ds(F, Pr(i, F)), ks = ut.frame), ut.frame >= fn) {
      fn += ft.autoSleep || 120;
      var s = F._first;
      if ((!s || !s._ts) && ft.autoSleep && ut._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || ut.sleep();
      }
    }
  }, t;
}(He);
ht(J.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var qu = function(t, e, r, i, s, a, o) {
  var u = new it(this._pt, t, e, 0, 1, aa, null, s), l = 0, f = 0, c, _, d, p, h, m, y, w;
  for (u.b = r, u.e = i, r += "", i += "", (y = ~i.indexOf("random(")) && (i = Xe(i)), a && (w = [r, i], a(w, t, e), r = w[0], i = w[1]), _ = r.match(Vr) || []; c = Vr.exec(i); )
    p = c[0], h = i.substring(l, c.index), d ? d = (d + 1) % 5 : h.substr(-5) === "rgba(" && (d = 1), p !== _[f++] && (m = parseFloat(_[f - 1]) || 0, u._pt = {
      _next: u._pt,
      p: h || f === 1 ? h : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: p.charAt(1) === "=" ? xe(m, p) - m : parseFloat(p) - m,
      m: d && d < 4 ? Math.round : 0
    }, l = Vr.lastIndex);
  return u.c = l < i.length ? i.substring(l, i.length) : "", u.fp = o, (Os.test(i) || y) && (u.e = 0), this._pt = u, u;
}, zi = function(t, e, r, i, s, a, o, u, l, f) {
  z(i) && (i = i(s || 0, t, a));
  var c = t[e], _ = r !== "get" ? r : z(c) ? l ? t[e.indexOf("set") || !z(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : c, d = z(c) ? l ? Qu : na : Bi, p;
  if (q(i) && (~i.indexOf("random(") && (i = Xe(i)), i.charAt(1) === "=" && (p = xe(_, i) + (G(_) || 0), (p || p === 0) && (i = p))), !f || _ !== i || pi)
    return !isNaN(_ * i) && i !== "" ? (p = new it(this._pt, t, e, +_ || 0, i - (_ || 0), typeof c == "boolean" ? Ju : sa, 0, d), l && (p.fp = l), o && p.modifier(o, this, t), this._pt = p) : (!c && !(e in t) && Ri(e, i), qu.call(this, t, e, _, i, d, u || ft.stringFilter, l));
}, Xu = function(t, e, r, i, s) {
  if (z(t) && (t = Ve(t, s, e, r, i)), !Et(t) || t.style && t.nodeType || K(t) || Ts(t))
    return q(t) ? Ve(t, s, e, r, i) : t;
  var a = {}, o;
  for (o in t)
    a[o] = Ve(t[o], s, e, r, i);
  return a;
}, ea = function(t, e, r, i, s, a) {
  var o, u, l, f;
  if (ot[t] && (o = new ot[t]()).init(s, o.rawVars ? e[t] : Xu(e[t], i, s, a, r), r, i, a) !== !1 && (r._pt = u = new it(r._pt, s, t, 0, 1, o.render, o, 0, o.priority), r !== ve))
    for (l = r._ptLookup[r._targets.indexOf(s)], f = o._props.length; f--; )
      l[o._props[f]] = u;
  return o;
}, It, pi, Ii = function n(t, e, r) {
  var i = t.vars, s = i.ease, a = i.startAt, o = i.immediateRender, u = i.lazy, l = i.onUpdate, f = i.runBackwards, c = i.yoyoEase, _ = i.keyframes, d = i.autoRevert, p = t._dur, h = t._startAt, m = t._targets, y = t.parent, w = y && y.data === "nested" ? y.vars.targets : m, b = t._overwrite === "auto" && !ki, v = t.timeline, g, T, S, O, x, C, $, E, k, W, Y, B, U;
  if (v && (!_ || !s) && (s = "none"), t._ease = le(s, Ce.ease), t._yEase = c ? Qs(le(c === !0 ? s : c, Ce.ease)) : 0, c && t._yoyo && !t._repeat && (c = t._yEase, t._yEase = t._ease, t._ease = c), t._from = !v && !!i.runBackwards, !v || _ && !i.stagger) {
    if (E = m[0] ? oe(m[0]).harness : 0, B = E && i[E.prop], g = Cr(i, Fi), h && (h._zTime < 0 && h.progress(1), e < 0 && f && o && !d ? h.render(-1, !0) : h.revert(f && p ? cr : xu), h._lazy = 0), a) {
      if (qt(t._startAt = V.set(m, ht({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !h && et(u),
        startAt: null,
        delay: 0,
        onUpdate: l && function() {
          return lt(t, "onUpdate");
        },
        stagger: 0
      }, a))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (X || !o && !d) && t._startAt.revert(cr), o && p && e <= 0 && r <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (f && p && !h) {
      if (e && (o = !1), S = ht({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !h && et(u),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, g), B && (S[E.prop] = B), qt(t._startAt = V.set(m, S)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (X ? t._startAt.revert(cr) : t._startAt.render(-1, !0)), t._zTime = e, !o)
        n(t._startAt, H, H);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, u = p && et(u) || u && !p, T = 0; T < m.length; T++) {
      if (x = m[T], $ = x._gsap || Li(m)[T]._gsap, t._ptLookup[T] = W = {}, li[$.id] && jt.length && Or(), Y = w === m ? T : w.indexOf(x), E && (k = new E()).init(x, B || g, t, Y, w) !== !1 && (t._pt = O = new it(t._pt, x, k.name, 0, 1, k.render, k, 0, k.priority), k._props.forEach(function(vt) {
        W[vt] = O;
      }), k.priority && (C = 1)), !E || B)
        for (S in g)
          ot[S] && (k = ea(S, g, t, Y, x, w)) ? k.priority && (C = 1) : W[S] = O = zi.call(t, x, S, "get", g[S], Y, w, 0, i.stringFilter);
      t._op && t._op[T] && t.kill(x, t._op[T]), b && t._pt && (It = t, F.killTweensOf(x, W, t.globalTime(e)), U = !t.parent, It = 0), t._pt && u && (li[$.id] = 1);
    }
    C && oa(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = l, t._initted = (!t._op || t._pt) && !U, _ && e <= 0 && v.render(Ot, !0, !0);
}, Gu = function(t, e, r, i, s, a, o, u) {
  var l = (t._pt && t._ptCache || (t._ptCache = {}))[e], f, c, _, d;
  if (!l)
    for (l = t._ptCache[e] = [], _ = t._ptLookup, d = t._targets.length; d--; ) {
      if (f = _[d][e], f && f.d && f.d._pt)
        for (f = f.d._pt; f && f.p !== e && f.fp !== e; )
          f = f._next;
      if (!f)
        return pi = 1, t.vars[e] = "+=0", Ii(t, o), pi = 0, u ? Ue(e + " not eligible for reset") : 1;
      l.push(f);
    }
  for (d = l.length; d--; )
    c = l[d], f = c._pt || c, f.s = (i || i === 0) && !s ? i : f.s + (i || 0) + a * f.c, f.c = r - f.s, c.e && (c.e = I(r) + G(c.e)), c.b && (c.b = f.s + G(c.b));
}, Hu = function(t, e) {
  var r = t[0] ? oe(t[0]).harness : 0, i = r && r.aliases, s, a, o, u;
  if (!i)
    return e;
  s = Pe({}, e);
  for (a in i)
    if (a in s)
      for (u = i[a].split(","), o = u.length; o--; )
        s[u[o]] = s[a];
  return s;
}, Ku = function(t, e, r, i) {
  var s = e.ease || i || "power1.inOut", a, o;
  if (K(e))
    o = r[t] || (r[t] = []), e.forEach(function(u, l) {
      return o.push({
        t: l / (e.length - 1) * 100,
        v: u,
        e: s
      });
    });
  else
    for (a in e)
      o = r[a] || (r[a] = []), a === "ease" || o.push({
        t: parseFloat(t),
        v: e[a],
        e: s
      });
}, Ve = function(t, e, r, i, s) {
  return z(t) ? t.call(e, r, i, s) : q(t) && ~t.indexOf("random(") ? Xe(t) : t;
}, ra = Ni + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", ia = {};
rt(ra + ",id,stagger,delay,duration,paused,scrollTrigger", function(n) {
  return ia[n] = 1;
});
var V = /* @__PURE__ */ function(n) {
  xs(t, n);
  function t(r, i, s, a) {
    var o;
    typeof i == "number" && (s.duration = i, i = s, s = null), o = n.call(this, a ? i : Ie(i)) || this;
    var u = o.vars, l = u.duration, f = u.delay, c = u.immediateRender, _ = u.stagger, d = u.overwrite, p = u.keyframes, h = u.defaults, m = u.scrollTrigger, y = u.yoyoEase, w = i.parent || F, b = (K(r) || Ts(r) ? Ft(r[0]) : "length" in i) ? [r] : pt(r), v, g, T, S, O, x, C, $;
    if (o._targets = b.length ? Li(b) : Ue("GSAP target " + r + " not found. https://gsap.com", !ft.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = d, p || _ || ar(l) || ar(f)) {
      if (i = o.vars, v = o.timeline = new J({
        data: "nested",
        defaults: h || {},
        targets: w && w.data === "nested" ? w.vars.targets : b
      }), v.kill(), v.parent = v._dp = kt(o), v._start = 0, _ || ar(l) || ar(f)) {
        if (S = b.length, C = _ && Vs(_), Et(_))
          for (O in _)
            ~ra.indexOf(O) && ($ || ($ = {}), $[O] = _[O]);
        for (g = 0; g < S; g++)
          T = Cr(i, ia), T.stagger = 0, y && (T.yoyoEase = y), $ && Pe(T, $), x = b[g], T.duration = +Ve(l, kt(o), g, x, b), T.delay = (+Ve(f, kt(o), g, x, b) || 0) - o._delay, !_ && S === 1 && T.delay && (o._delay = f = T.delay, o._start += f, T.delay = 0), v.to(x, T, C ? C(g, x, b) : 0), v._ease = P.none;
        v.duration() ? l = f = 0 : o.timeline = 0;
      } else if (p) {
        Ie(ht(v.vars.defaults, {
          ease: "none"
        })), v._ease = le(p.ease || i.ease || "none");
        var E = 0, k, W, Y;
        if (K(p))
          p.forEach(function(B) {
            return v.to(b, B, ">");
          }), v.duration();
        else {
          T = {};
          for (O in p)
            O === "ease" || O === "easeEach" || Ku(O, p[O], T, p.easeEach);
          for (O in T)
            for (k = T[O].sort(function(B, U) {
              return B.t - U.t;
            }), E = 0, g = 0; g < k.length; g++)
              W = k[g], Y = {
                ease: W.e,
                duration: (W.t - (g ? k[g - 1].t : 0)) / 100 * l
              }, Y[O] = W.v, v.to(b, Y, E), E += Y.duration;
          v.duration() < l && v.to({}, {
            duration: l - v.duration()
          });
        }
      }
      l || o.duration(l = v.duration());
    } else
      o.timeline = 0;
    return d === !0 && !ki && (It = kt(o), F.killTweensOf(b), It = 0), bt(w, kt(o), s), i.reversed && o.reverse(), i.paused && o.paused(!0), (c || !l && !p && o._start === j(w._time) && et(c) && Pu(kt(o)) && w.data !== "nested") && (o._tTime = -1e-8, o.render(Math.max(0, -f) || 0)), m && Ls(kt(o), m), o;
  }
  var e = t.prototype;
  return e.render = function(i, s, a) {
    var o = this._time, u = this._tDur, l = this._dur, f = i < 0, c = i > u - H && !f ? u : i < H ? 0 : i, _, d, p, h, m, y, w, b, v;
    if (!l)
      $u(this, i, s, a);
    else if (c !== this._tTime || !i || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f || this._lazy) {
      if (_ = c, b = this.timeline, this._repeat) {
        if (h = l + this._rDelay, this._repeat < -1 && f)
          return this.totalTime(h * 100 + i, s, a);
        if (_ = j(c % h), c === u ? (p = this._repeat, _ = l) : (m = j(c / h), p = ~~m, p && p === m ? (_ = l, p--) : _ > l && (_ = l)), y = this._yoyo && p & 1, y && (v = this._yEase, _ = l - _), m = Ee(this._tTime, h), _ === o && !a && this._initted && p === m)
          return this._tTime = c, this;
        p !== m && (b && this._yEase && Zs(b, y), this.vars.repeatRefresh && !y && !this._lock && _ !== h && this._initted && (this._lock = a = 1, this.render(j(h * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (zs(this, f ? i : _, a, s, c))
          return this._tTime = 0, this;
        if (o !== this._time && !(a && this.vars.repeatRefresh && p !== m))
          return this;
        if (l !== this._dur)
          return this.render(i, s, a);
      }
      if (this._tTime = c, this._time = _, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = w = (v || this._ease)(_ / l), this._from && (this.ratio = w = 1 - w), _ && !o && !s && !p && (lt(this, "onStart"), this._tTime !== c))
        return this;
      for (d = this._pt; d; )
        d.r(w, d.d), d = d._next;
      b && b.render(i < 0 ? i : b._dur * b._ease(_ / this._dur), s, a) || this._startAt && (this._zTime = i), this._onUpdate && !s && (f && fi(this, i, s, a), lt(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !s && this.parent && lt(this, "onRepeat"), (c === this._tDur || !c) && this._tTime === c && (f && !this._onUpdate && fi(this, i, !0, !0), (i || !l) && (c === this._tDur && this._ts > 0 || !c && this._ts < 0) && qt(this, 1), !s && !(f && !o) && (c || o || y) && (lt(this, c === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < u && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), n.prototype.invalidate.call(this, i);
  }, e.resetTo = function(i, s, a, o, u) {
    Ge || ut.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
    return this._initted || Ii(this, l), f = this._ease(l / this._dur), Gu(this, i, s, a, o, f, l, u) ? this.resetTo(i, s, a, o, 1) : (zr(this, 0), this.parent || Fs(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(i, s) {
    if (s === void 0 && (s = "all"), !i && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? Le(this) : this.scrollTrigger && this.scrollTrigger.kill(!!X), this;
    if (this.timeline) {
      var a = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, s, It && It.vars.overwrite !== !0)._first || Le(this), this.parent && a !== this.timeline.totalDuration() && $e(this, this._dur * this.timeline._tDur / a, 0, 1), this;
    }
    var o = this._targets, u = i ? pt(i) : o, l = this._ptLookup, f = this._pt, c, _, d, p, h, m, y;
    if ((!s || s === "all") && Ou(o, u))
      return s === "all" && (this._pt = 0), Le(this);
    for (c = this._op = this._op || [], s !== "all" && (q(s) && (h = {}, rt(s, function(w) {
      return h[w] = 1;
    }), s = h), s = Hu(o, s)), y = o.length; y--; )
      if (~u.indexOf(o[y])) {
        _ = l[y], s === "all" ? (c[y] = s, p = _, d = {}) : (d = c[y] = c[y] || {}, p = s);
        for (h in p)
          m = _ && _[h], m && ((!("kill" in m.d) || m.d.kill(h) === !0) && Nr(this, m, "_pt"), delete _[h]), d !== "all" && (d[h] = 1);
      }
    return this._initted && !this._pt && f && Le(this), this;
  }, t.to = function(i, s) {
    return new t(i, s, arguments[2]);
  }, t.from = function(i, s) {
    return Be(1, arguments);
  }, t.delayedCall = function(i, s, a, o) {
    return new t(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: a,
      onReverseCompleteParams: a,
      callbackScope: o
    });
  }, t.fromTo = function(i, s, a) {
    return Be(2, arguments);
  }, t.set = function(i, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new t(i, s);
  }, t.killTweensOf = function(i, s, a) {
    return F.killTweensOf(i, s, a);
  }, t;
}(He);
ht(V.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
rt("staggerTo,staggerFrom,staggerFromTo", function(n) {
  V[n] = function() {
    var t = new J(), e = hi.call(arguments, 0);
    return e.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), t[n].apply(t, e);
  };
});
var Bi = function(t, e, r) {
  return t[e] = r;
}, na = function(t, e, r) {
  return t[e](r);
}, Qu = function(t, e, r, i) {
  return t[e](i.fp, r);
}, Zu = function(t, e, r) {
  return t.setAttribute(e, r);
}, Vi = function(t, e) {
  return z(t[e]) ? na : Ai(t[e]) && t.setAttribute ? Zu : Bi;
}, sa = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, Ju = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, aa = function(t, e) {
  var r = e._pt, i = "";
  if (!t && e.b)
    i = e.b;
  else if (t === 1 && e.e)
    i = e.e;
  else {
    for (; r; )
      i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + i, r = r._next;
    i += e.c;
  }
  e.set(e.t, e.p, i, e);
}, ji = function(t, e) {
  for (var r = e._pt; r; )
    r.r(t, r.d), r = r._next;
}, tl = function(t, e, r, i) {
  for (var s = this._pt, a; s; )
    a = s._next, s.p === i && s.modifier(t, e, r), s = a;
}, el = function(t) {
  for (var e = this._pt, r, i; e; )
    i = e._next, e.p === t && !e.op || e.op === t ? Nr(this, e, "_pt") : e.dep || (r = 1), e = i;
  return !r;
}, rl = function(t, e, r, i) {
  i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
}, oa = function(t) {
  for (var e = t._pt, r, i, s, a; e; ) {
    for (r = e._next, i = s; i && i.pr > e.pr; )
      i = i._next;
    (e._prev = i ? i._prev : a) ? e._prev._next = e : s = e, (e._next = i) ? i._prev = e : a = e, e = r;
  }
  t._pt = s;
}, it = /* @__PURE__ */ function() {
  function n(e, r, i, s, a, o, u, l, f) {
    this.t = r, this.s = s, this.c = a, this.p = i, this.r = o || sa, this.d = u || this, this.set = l || Bi, this.pr = f || 0, this._next = e, e && (e._prev = this);
  }
  var t = n.prototype;
  return t.modifier = function(r, i, s) {
    this.mSet = this.mSet || this.set, this.set = rl, this.m = r, this.mt = s, this.tween = i;
  }, n;
}();
rt(Ni + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(n) {
  return Fi[n] = 1;
});
ct.TweenMax = ct.TweenLite = V;
ct.TimelineLite = ct.TimelineMax = J;
F = new J({
  sortChildren: !1,
  defaults: Ce,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ft.stringFilter = Ks;
var fe = [], _r = {}, il = [], mn = 0, nl = 0, qr = function(t) {
  return (_r[t] || il).map(function(e) {
    return e();
  });
}, mi = function() {
  var t = Date.now(), e = [];
  t - mn > 2 && (qr("matchMediaInit"), fe.forEach(function(r) {
    var i = r.queries, s = r.conditions, a, o, u, l;
    for (o in i)
      a = xt.matchMedia(i[o]).matches, a && (u = 1), a !== s[o] && (s[o] = a, l = 1);
    l && (r.revert(), u && e.push(r));
  }), qr("matchMediaRevert"), e.forEach(function(r) {
    return r.onMatch(r, function(i) {
      return r.add(null, i);
    });
  }), mn = t, qr("matchMedia"));
}, ua = /* @__PURE__ */ function() {
  function n(e, r) {
    this.selector = r && _i(r), this.data = [], this._r = [], this.isReverted = !1, this.id = nl++, e && this.add(e);
  }
  var t = n.prototype;
  return t.add = function(r, i, s) {
    z(r) && (s = i, i = r, r = z);
    var a = this, o = function() {
      var l = M, f = a.selector, c;
      return l && l !== a && l.data.push(a), s && (a.selector = _i(s)), M = a, c = i.apply(a, arguments), z(c) && a._r.push(c), M = l, a.selector = f, a.isReverted = !1, c;
    };
    return a.last = o, r === z ? o(a, function(u) {
      return a.add(null, u);
    }) : r ? a[r] = o : o;
  }, t.ignore = function(r) {
    var i = M;
    M = null, r(this), M = i;
  }, t.getTweens = function() {
    var r = [];
    return this.data.forEach(function(i) {
      return i instanceof n ? r.push.apply(r, i.getTweens()) : i instanceof V && !(i.parent && i.parent.data === "nested") && r.push(i);
    }), r;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(r, i) {
    var s = this;
    if (r ? function() {
      for (var o = s.getTweens(), u = s.data.length, l; u--; )
        l = s.data[u], l.data === "isFlip" && (l.revert(), l.getChildren(!0, !0, !1).forEach(function(f) {
          return o.splice(o.indexOf(f), 1);
        }));
      for (o.map(function(f) {
        return {
          g: f._dur || f._delay || f._sat && !f._sat.vars.immediateRender ? f.globalTime(0) : -1 / 0,
          t: f
        };
      }).sort(function(f, c) {
        return c.g - f.g || -1 / 0;
      }).forEach(function(f) {
        return f.t.revert(r);
      }), u = s.data.length; u--; )
        l = s.data[u], l instanceof J ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof V) && l.revert && l.revert(r);
      s._r.forEach(function(f) {
        return f(r, s);
      }), s.isReverted = !0;
    }() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), i)
      for (var a = fe.length; a--; )
        fe[a].id === this.id && fe.splice(a, 1);
  }, t.revert = function(r) {
    this.kill(r || {});
  }, n;
}(), sl = /* @__PURE__ */ function() {
  function n(e) {
    this.contexts = [], this.scope = e, M && M.data.push(this);
  }
  var t = n.prototype;
  return t.add = function(r, i, s) {
    Et(r) || (r = {
      matches: r
    });
    var a = new ua(0, s || this.scope), o = a.conditions = {}, u, l, f;
    M && !a.selector && (a.selector = M.selector), this.contexts.push(a), i = a.add("onMatch", i), a.queries = r;
    for (l in r)
      l === "all" ? f = 1 : (u = xt.matchMedia(r[l]), u && (fe.indexOf(a) < 0 && fe.push(a), (o[l] = u.matches) && (f = 1), u.addListener ? u.addListener(mi) : u.addEventListener("change", mi)));
    return f && i(a, function(c) {
      return a.add(null, c);
    }), this;
  }, t.revert = function(r) {
    this.kill(r || {});
  }, t.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, n;
}(), Er = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    e.forEach(function(i) {
      return Xs(i);
    });
  },
  timeline: function(t) {
    return new J(t);
  },
  getTweensOf: function(t, e) {
    return F.getTweensOf(t, e);
  },
  getProperty: function(t, e, r, i) {
    q(t) && (t = pt(t)[0]);
    var s = oe(t || {}).get, a = r ? Rs : Ms;
    return r === "native" && (r = ""), t && (e ? a((ot[e] && ot[e].get || s)(t, e, r, i)) : function(o, u, l) {
      return a((ot[o] && ot[o].get || s)(t, o, u, l));
    });
  },
  quickSetter: function(t, e, r) {
    if (t = pt(t), t.length > 1) {
      var i = t.map(function(f) {
        return st.quickSetter(f, e, r);
      }), s = i.length;
      return function(f) {
        for (var c = s; c--; )
          i[c](f);
      };
    }
    t = t[0] || {};
    var a = ot[e], o = oe(t), u = o.harness && (o.harness.aliases || {})[e] || e, l = a ? function(f) {
      var c = new a();
      ve._pt = 0, c.init(t, r ? f + r : f, ve, 0, [t]), c.render(1, c), ve._pt && ji(1, ve);
    } : o.set(t, u);
    return a ? l : function(f) {
      return l(t, u, r ? f + r : f, o, 1);
    };
  },
  quickTo: function(t, e, r) {
    var i, s = st.to(t, ht((i = {}, i[e] = "+=0.1", i.paused = !0, i.stagger = 0, i), r || {})), a = function(u, l, f) {
      return s.resetTo(e, u, l, f);
    };
    return a.tween = s, a;
  },
  isTweening: function(t) {
    return F.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = le(t.ease, Ce.ease)), cn(Ce, t || {});
  },
  config: function(t) {
    return cn(ft, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, r = t.effect, i = t.plugins, s = t.defaults, a = t.extendTimeline;
    (i || "").split(",").forEach(function(o) {
      return o && !ot[o] && !ct[o] && Ue(e + " effect requires " + o + " plugin.");
    }), jr[e] = function(o, u, l) {
      return r(pt(o), ht(u || {}, s), l);
    }, a && (J.prototype[e] = function(o, u, l) {
      return this.add(jr[e](o, Et(u) ? u : (l = u) && {}, this), l);
    });
  },
  registerEase: function(t, e) {
    P[t] = le(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? le(t, e) : P;
  },
  getById: function(t) {
    return F.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var r = new J(t), i, s;
    for (r.smoothChildTiming = et(t.smoothChildTiming), F.remove(r), r._dp = 0, r._time = r._tTime = F._time, i = F._first; i; )
      s = i._next, (e || !(!i._dur && i instanceof V && i.vars.onComplete === i._targets[0])) && bt(r, i, i._start - i._delay), i = s;
    return bt(F, r, 0), r;
  },
  context: function(t, e) {
    return t ? new ua(t, e) : M;
  },
  matchMedia: function(t) {
    return new sl(t);
  },
  matchMediaRefresh: function() {
    return fe.forEach(function(t) {
      var e = t.conditions, r, i;
      for (i in e)
        e[i] && (e[i] = !1, r = 1);
      r && t.revert();
    }) || mi();
  },
  addEventListener: function(t, e) {
    var r = _r[t] || (_r[t] = []);
    ~r.indexOf(e) || r.push(e);
  },
  removeEventListener: function(t, e) {
    var r = _r[t], i = r && r.indexOf(e);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: Lu,
    wrapYoyo: zu,
    distribute: Vs,
    random: Ws,
    snap: js,
    normalize: Nu,
    getUnit: G,
    clamp: Du,
    splitColor: Gs,
    toArray: pt,
    selector: _i,
    mapRange: Us,
    pipe: Ru,
    unitize: Fu,
    interpolate: Iu,
    shuffle: Bs
  },
  install: Es,
  effects: jr,
  ticker: ut,
  updateRoot: J.updateRoot,
  plugins: ot,
  globalTimeline: F,
  core: {
    PropTween: it,
    globals: $s,
    Tween: V,
    Timeline: J,
    Animation: He,
    getCache: oe,
    _removeLinkedListItem: Nr,
    reverting: function() {
      return X;
    },
    context: function(t) {
      return t && M && (M.data.push(t), t._ctx = M), M;
    },
    suppressOverwrites: function(t) {
      return ki = t;
    }
  }
};
rt("to,from,fromTo,delayedCall,set,killTweensOf", function(n) {
  return Er[n] = V[n];
});
ut.add(J.updateRoot);
ve = Er.to({}, {
  duration: 0
});
var al = function(t, e) {
  for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
    r = r._next;
  return r;
}, ol = function(t, e) {
  var r = t._targets, i, s, a;
  for (i in e)
    for (s = r.length; s--; )
      a = t._ptLookup[s][i], a && (a = a.d) && (a._pt && (a = al(a, i)), a && a.modifier && a.modifier(e[i], t, r[s], i));
}, Xr = function(t, e) {
  return {
    name: t,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, s, a) {
      a._onInit = function(o) {
        var u, l;
        if (q(s) && (u = {}, rt(s, function(f) {
          return u[f] = 1;
        }), s = u), e) {
          u = {};
          for (l in s)
            u[l] = e(s[l]);
          s = u;
        }
        ol(o, s);
      };
    }
  };
}, st = Er.registerPlugin({
  name: "attr",
  init: function(t, e, r, i, s) {
    var a, o, u;
    this.tween = r;
    for (a in e)
      u = t.getAttribute(a) || "", o = this.add(t, "setAttribute", (u || 0) + "", e[a], i, s, 0, 0, a), o.op = a, o.b = u, this._props.push(a);
  },
  render: function(t, e) {
    for (var r = e._pt; r; )
      X ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next;
  }
}, {
  name: "endArray",
  init: function(t, e) {
    for (var r = e.length; r--; )
      this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
  }
}, Xr("roundProps", di), Xr("modifiers"), Xr("snap", js)) || Er;
V.version = J.version = st.version = "3.12.7";
Ps = 1;
Di() && ke();
P.Power0;
P.Power1;
P.Power2;
P.Power3;
P.Power4;
P.Linear;
P.Quad;
P.Cubic;
P.Quart;
P.Quint;
P.Strong;
P.Elastic;
P.Back;
P.SteppedEase;
P.Bounce;
P.Sine;
P.Expo;
P.Circ;
/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var gn, Bt, be, Wi, se, vn, Yi, ul = function() {
  return typeof window < "u";
}, Nt = {}, ee = 180 / Math.PI, Te = Math.PI / 180, me = Math.atan2, yn = 1e8, Ui = /([A-Z])/g, ll = /(left|right|width|margin|padding|x)/i, fl = /[\s,\(]\S/, St = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, gi = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, cl = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, hl = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, _l = function(t, e) {
  var r = e.s + e.c * t;
  e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
}, la = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, fa = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, dl = function(t, e, r) {
  return t.style[e] = r;
}, pl = function(t, e, r) {
  return t.style.setProperty(e, r);
}, ml = function(t, e, r) {
  return t._gsap[e] = r;
}, gl = function(t, e, r) {
  return t._gsap.scaleX = t._gsap.scaleY = r;
}, vl = function(t, e, r, i, s) {
  var a = t._gsap;
  a.scaleX = a.scaleY = r, a.renderTransform(s, a);
}, yl = function(t, e, r, i, s) {
  var a = t._gsap;
  a[e] = r, a.renderTransform(s, a);
}, N = "transform", nt = N + "Origin", wl = function n(t, e) {
  var r = this, i = this.target, s = i.style, a = i._gsap;
  if (t in Nt && s) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = St[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
        return r.tfm[o] = Dt(i, o);
      }) : this.tfm[t] = a.x ? a[t] : Dt(i, t), t === nt && (this.tfm.zOrigin = a.zOrigin);
    else
      return St.transform.split(",").forEach(function(o) {
        return n.call(r, o, e);
      });
    if (this.props.indexOf(N) >= 0)
      return;
    a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(nt, e, "")), t = N;
  }
  (s || e) && this.props.push(t, e, s[t]);
}, ca = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, xl = function() {
  var t = this.props, e = this.target, r = e.style, i = e._gsap, s, a;
  for (s = 0; s < t.length; s += 3)
    t[s + 1] ? t[s + 1] === 2 ? e[t[s]](t[s + 2]) : e[t[s]] = t[s + 2] : t[s + 2] ? r[t[s]] = t[s + 2] : r.removeProperty(t[s].substr(0, 2) === "--" ? t[s] : t[s].replace(Ui, "-$1").toLowerCase());
  if (this.tfm) {
    for (a in this.tfm)
      i[a] = this.tfm[a];
    i.svg && (i.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), s = Yi(), (!s || !s.isStart) && !r[N] && (ca(r), i.zOrigin && r[nt] && (r[nt] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, ha = function(t, e) {
  var r = {
    target: t,
    props: [],
    revert: xl,
    save: wl
  };
  return t._gsap || st.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, _a, vi = function(t, e) {
  var r = Bt.createElementNS ? Bt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Bt.createElement(t);
  return r && r.style ? r : Bt.createElement(t);
}, Ct = function n(t, e, r) {
  var i = getComputedStyle(t);
  return i[e] || i.getPropertyValue(e.replace(Ui, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && n(t, Ae(e) || e, 1) || "";
}, wn = "O,Moz,ms,Ms,Webkit".split(","), Ae = function(t, e, r) {
  var i = e || se, s = i.style, a = 5;
  if (t in s && !r)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); a-- && !(wn[a] + t in s); )
    ;
  return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? wn[a] : "") + t;
}, yi = function() {
  ul() && window.document && (gn = window, Bt = gn.document, be = Bt.documentElement, se = vi("div") || {
    style: {}
  }, vi("div"), N = Ae(N), nt = N + "Origin", se.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", _a = !!Ae("perspective"), Yi = st.core.reverting, Wi = 1);
}, xn = function(t) {
  var e = t.ownerSVGElement, r = vi("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = t.cloneNode(!0), s;
  i.style.display = "block", r.appendChild(i), be.appendChild(r);
  try {
    s = i.getBBox();
  } catch {
  }
  return r.removeChild(i), be.removeChild(r), s;
}, bn = function(t, e) {
  for (var r = e.length; r--; )
    if (t.hasAttribute(e[r]))
      return t.getAttribute(e[r]);
}, da = function(t) {
  var e, r;
  try {
    e = t.getBBox();
  } catch {
    e = xn(t), r = 1;
  }
  return e && (e.width || e.height) || r || (e = xn(t)), e && !e.width && !e.x && !e.y ? {
    x: +bn(t, ["x", "cx", "x1"]) || 0,
    y: +bn(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, pa = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && da(t));
}, he = function(t, e) {
  if (e) {
    var r = t.style, i;
    e in Nt && e !== nt && (e = N), r.removeProperty ? (i = e.substr(0, 2), (i === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(i === "--" ? e : e.replace(Ui, "-$1").toLowerCase())) : r.removeAttribute(e);
  }
}, Vt = function(t, e, r, i, s, a) {
  var o = new it(t._pt, e, r, 0, 1, a ? fa : la);
  return t._pt = o, o.b = i, o.e = s, t._props.push(r), o;
}, Tn = {
  deg: 1,
  rad: 1,
  turn: 1
}, bl = {
  grid: 1,
  flex: 1
}, Xt = function n(t, e, r, i) {
  var s = parseFloat(r) || 0, a = (r + "").trim().substr((s + "").length) || "px", o = se.style, u = ll.test(e), l = t.tagName.toLowerCase() === "svg", f = (l ? "client" : "offset") + (u ? "Width" : "Height"), c = 100, _ = i === "px", d = i === "%", p, h, m, y;
  if (i === a || !s || Tn[i] || Tn[a])
    return s;
  if (a !== "px" && !_ && (s = n(t, e, r, "px")), y = t.getCTM && pa(t), (d || a === "%") && (Nt[e] || ~e.indexOf("adius")))
    return p = y ? t.getBBox()[u ? "width" : "height"] : t[f], I(d ? s / p * c : s / 100 * p);
  if (o[u ? "width" : "height"] = c + (_ ? a : i), h = i !== "rem" && ~e.indexOf("adius") || i === "em" && t.appendChild && !l ? t : t.parentNode, y && (h = (t.ownerSVGElement || {}).parentNode), (!h || h === Bt || !h.appendChild) && (h = Bt.body), m = h._gsap, m && d && m.width && u && m.time === ut.time && !m.uncache)
    return I(s / m.width * c);
  if (d && (e === "height" || e === "width")) {
    var w = t.style[e];
    t.style[e] = c + i, p = t[f], w ? t.style[e] = w : he(t, e);
  } else
    (d || a === "%") && !bl[Ct(h, "display")] && (o.position = Ct(t, "position")), h === t && (o.position = "static"), h.appendChild(se), p = se[f], h.removeChild(se), o.position = "absolute";
  return u && d && (m = oe(h), m.time = ut.time, m.width = h[f]), I(_ ? p * s / c : p && s ? c / p * s : 0);
}, Dt = function(t, e, r, i) {
  var s;
  return Wi || yi(), e in St && e !== "transform" && (e = St[e], ~e.indexOf(",") && (e = e.split(",")[0])), Nt[e] && e !== "transform" ? (s = Qe(t, i), s = e !== "transformOrigin" ? s[e] : s.svg ? s.origin : kr(Ct(t, nt)) + " " + s.zOrigin + "px") : (s = t.style[e], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = $r[e] && $r[e](t, e, r) || Ct(t, e) || As(t, e) || (e === "opacity" ? 1 : 0))), r && !~(s + "").trim().indexOf(" ") ? Xt(t, e, s, r) + r : s;
}, Tl = function(t, e, r, i) {
  if (!r || r === "none") {
    var s = Ae(e, t, 1), a = s && Ct(t, s, 1);
    a && a !== r ? (e = s, r = a) : e === "borderColor" && (r = Ct(t, "borderTopColor"));
  }
  var o = new it(this._pt, t.style, e, 0, 1, aa), u = 0, l = 0, f, c, _, d, p, h, m, y, w, b, v, g;
  if (o.b = r, o.e = i, r += "", i += "", i === "auto" && (h = t.style[e], t.style[e] = i, i = Ct(t, e) || i, h ? t.style[e] = h : he(t, e)), f = [r, i], Ks(f), r = f[0], i = f[1], _ = r.match(ge) || [], g = i.match(ge) || [], g.length) {
    for (; c = ge.exec(i); )
      m = c[0], w = i.substring(u, c.index), p ? p = (p + 1) % 5 : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (p = 1), m !== (h = _[l++] || "") && (d = parseFloat(h) || 0, v = h.substr((d + "").length), m.charAt(1) === "=" && (m = xe(d, m) + v), y = parseFloat(m), b = m.substr((y + "").length), u = ge.lastIndex - b.length, b || (b = b || ft.units[e] || v, u === i.length && (i += b, o.e += b)), v !== b && (d = Xt(t, e, h, b) || 0), o._pt = {
        _next: o._pt,
        p: w || l === 1 ? w : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: y - d,
        m: p && p < 4 || e === "zIndex" ? Math.round : 0
      });
    o.c = u < i.length ? i.substring(u, i.length) : "";
  } else
    o.r = e === "display" && i === "none" ? fa : la;
  return Os.test(i) && (o.e = 0), this._pt = o, o;
}, Sn = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Sl = function(t) {
  var e = t.split(" "), r = e[0], i = e[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (t = r, r = i, i = t), e[0] = Sn[r] || r, e[1] = Sn[i] || i, e.join(" ");
}, Ol = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var r = e.t, i = r.style, s = e.u, a = r._gsap, o, u, l;
    if (s === "all" || s === !0)
      i.cssText = "", u = 1;
    else
      for (s = s.split(","), l = s.length; --l > -1; )
        o = s[l], Nt[o] && (u = 1, o = o === "transformOrigin" ? nt : N), he(r, o);
    u && (he(r, N), a && (a.svg && r.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", Qe(r, 1), a.uncache = 1, ca(i)));
  }
}, $r = {
  clearProps: function(t, e, r, i, s) {
    if (s.data !== "isFromStart") {
      var a = t._pt = new it(t._pt, e, r, 0, 0, Ol);
      return a.u = i, a.pr = -10, a.tween = s, t._props.push(r), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, Ke = [1, 0, 0, 1, 0, 0], ma = {}, ga = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, On = function(t) {
  var e = Ct(t, N);
  return ga(e) ? Ke : e.substr(7).match(Ss).map(I);
}, qi = function(t, e) {
  var r = t._gsap || oe(t), i = t.style, s = On(t), a, o, u, l;
  return r.svg && t.getAttribute("transform") ? (u = t.transform.baseVal.consolidate().matrix, s = [u.a, u.b, u.c, u.d, u.e, u.f], s.join(",") === "1,0,0,1,0,0" ? Ke : s) : (s === Ke && !t.offsetParent && t !== be && !r.svg && (u = i.display, i.display = "block", a = t.parentNode, (!a || !t.offsetParent && !t.getBoundingClientRect().width) && (l = 1, o = t.nextElementSibling, be.appendChild(t)), s = On(t), u ? i.display = u : he(t, "display"), l && (o ? a.insertBefore(t, o) : a ? a.appendChild(t) : be.removeChild(t))), e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, wi = function(t, e, r, i, s, a) {
  var o = t._gsap, u = s || qi(t, !0), l = o.xOrigin || 0, f = o.yOrigin || 0, c = o.xOffset || 0, _ = o.yOffset || 0, d = u[0], p = u[1], h = u[2], m = u[3], y = u[4], w = u[5], b = e.split(" "), v = parseFloat(b[0]) || 0, g = parseFloat(b[1]) || 0, T, S, O, x;
  r ? u !== Ke && (S = d * m - p * h) && (O = v * (m / S) + g * (-h / S) + (h * w - m * y) / S, x = v * (-p / S) + g * (d / S) - (d * w - p * y) / S, v = O, g = x) : (T = da(t), v = T.x + (~b[0].indexOf("%") ? v / 100 * T.width : v), g = T.y + (~(b[1] || b[0]).indexOf("%") ? g / 100 * T.height : g)), i || i !== !1 && o.smooth ? (y = v - l, w = g - f, o.xOffset = c + (y * d + w * h) - y, o.yOffset = _ + (y * p + w * m) - w) : o.xOffset = o.yOffset = 0, o.xOrigin = v, o.yOrigin = g, o.smooth = !!i, o.origin = e, o.originIsAbsolute = !!r, t.style[nt] = "0px 0px", a && (Vt(a, o, "xOrigin", l, v), Vt(a, o, "yOrigin", f, g), Vt(a, o, "xOffset", c, o.xOffset), Vt(a, o, "yOffset", _, o.yOffset)), t.setAttribute("data-svg-origin", v + " " + g);
}, Qe = function(t, e) {
  var r = t._gsap || new ta(t);
  if ("x" in r && !e && !r.uncache)
    return r;
  var i = t.style, s = r.scaleX < 0, a = "px", o = "deg", u = getComputedStyle(t), l = Ct(t, nt) || "0", f, c, _, d, p, h, m, y, w, b, v, g, T, S, O, x, C, $, E, k, W, Y, B, U, vt, rr, Re, Fe, Qt, Xi, $t, Zt;
  return f = c = _ = h = m = y = w = b = v = 0, d = p = 1, r.svg = !!(t.getCTM && pa(t)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (i[N] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[N] !== "none" ? u[N] : "")), i.scale = i.rotate = i.translate = "none"), S = qi(t, r.svg), r.svg && (r.uncache ? (vt = t.getBBox(), l = r.xOrigin - vt.x + "px " + (r.yOrigin - vt.y) + "px", U = "") : U = !e && t.getAttribute("data-svg-origin"), wi(t, U || l, !!U || r.originIsAbsolute, r.smooth !== !1, S)), g = r.xOrigin || 0, T = r.yOrigin || 0, S !== Ke && ($ = S[0], E = S[1], k = S[2], W = S[3], f = Y = S[4], c = B = S[5], S.length === 6 ? (d = Math.sqrt($ * $ + E * E), p = Math.sqrt(W * W + k * k), h = $ || E ? me(E, $) * ee : 0, w = k || W ? me(k, W) * ee + h : 0, w && (p *= Math.abs(Math.cos(w * Te))), r.svg && (f -= g - (g * $ + T * k), c -= T - (g * E + T * W))) : (Zt = S[6], Xi = S[7], Re = S[8], Fe = S[9], Qt = S[10], $t = S[11], f = S[12], c = S[13], _ = S[14], O = me(Zt, Qt), m = O * ee, O && (x = Math.cos(-O), C = Math.sin(-O), U = Y * x + Re * C, vt = B * x + Fe * C, rr = Zt * x + Qt * C, Re = Y * -C + Re * x, Fe = B * -C + Fe * x, Qt = Zt * -C + Qt * x, $t = Xi * -C + $t * x, Y = U, B = vt, Zt = rr), O = me(-k, Qt), y = O * ee, O && (x = Math.cos(-O), C = Math.sin(-O), U = $ * x - Re * C, vt = E * x - Fe * C, rr = k * x - Qt * C, $t = W * C + $t * x, $ = U, E = vt, k = rr), O = me(E, $), h = O * ee, O && (x = Math.cos(O), C = Math.sin(O), U = $ * x + E * C, vt = Y * x + B * C, E = E * x - $ * C, B = B * x - Y * C, $ = U, Y = vt), m && Math.abs(m) + Math.abs(h) > 359.9 && (m = h = 0, y = 180 - y), d = I(Math.sqrt($ * $ + E * E + k * k)), p = I(Math.sqrt(B * B + Zt * Zt)), O = me(Y, B), w = Math.abs(O) > 2e-4 ? O * ee : 0, v = $t ? 1 / ($t < 0 ? -$t : $t) : 0), r.svg && (U = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !ga(Ct(t, N)), U && t.setAttribute("transform", U))), Math.abs(w) > 90 && Math.abs(w) < 270 && (s ? (d *= -1, w += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (p *= -1, w += w <= 0 ? 180 : -180)), e = e || r.uncache, r.x = f - ((r.xPercent = f && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + a, r.y = c - ((r.yPercent = c && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + a, r.z = _ + a, r.scaleX = I(d), r.scaleY = I(p), r.rotation = I(h) + o, r.rotationX = I(m) + o, r.rotationY = I(y) + o, r.skewX = w + o, r.skewY = b + o, r.transformPerspective = v + a, (r.zOrigin = parseFloat(l.split(" ")[2]) || !e && r.zOrigin || 0) && (i[nt] = kr(l)), r.xOffset = r.yOffset = 0, r.force3D = ft.force3D, r.renderTransform = r.svg ? Pl : _a ? va : Cl, r.uncache = 0, r;
}, kr = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Gr = function(t, e, r) {
  var i = G(e);
  return I(parseFloat(e) + parseFloat(Xt(t, "x", r + "px", i))) + i;
}, Cl = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, va(t, e);
}, Jt = "0deg", Ne = "0px", te = ") ", va = function(t, e) {
  var r = e || this, i = r.xPercent, s = r.yPercent, a = r.x, o = r.y, u = r.z, l = r.rotation, f = r.rotationY, c = r.rotationX, _ = r.skewX, d = r.skewY, p = r.scaleX, h = r.scaleY, m = r.transformPerspective, y = r.force3D, w = r.target, b = r.zOrigin, v = "", g = y === "auto" && t && t !== 1 || y === !0;
  if (b && (c !== Jt || f !== Jt)) {
    var T = parseFloat(f) * Te, S = Math.sin(T), O = Math.cos(T), x;
    T = parseFloat(c) * Te, x = Math.cos(T), a = Gr(w, a, S * x * -b), o = Gr(w, o, -Math.sin(T) * -b), u = Gr(w, u, O * x * -b + b);
  }
  m !== Ne && (v += "perspective(" + m + te), (i || s) && (v += "translate(" + i + "%, " + s + "%) "), (g || a !== Ne || o !== Ne || u !== Ne) && (v += u !== Ne || g ? "translate3d(" + a + ", " + o + ", " + u + ") " : "translate(" + a + ", " + o + te), l !== Jt && (v += "rotate(" + l + te), f !== Jt && (v += "rotateY(" + f + te), c !== Jt && (v += "rotateX(" + c + te), (_ !== Jt || d !== Jt) && (v += "skew(" + _ + ", " + d + te), (p !== 1 || h !== 1) && (v += "scale(" + p + ", " + h + te), w.style[N] = v || "translate(0, 0)";
}, Pl = function(t, e) {
  var r = e || this, i = r.xPercent, s = r.yPercent, a = r.x, o = r.y, u = r.rotation, l = r.skewX, f = r.skewY, c = r.scaleX, _ = r.scaleY, d = r.target, p = r.xOrigin, h = r.yOrigin, m = r.xOffset, y = r.yOffset, w = r.forceCSS, b = parseFloat(a), v = parseFloat(o), g, T, S, O, x;
  u = parseFloat(u), l = parseFloat(l), f = parseFloat(f), f && (f = parseFloat(f), l += f, u += f), u || l ? (u *= Te, l *= Te, g = Math.cos(u) * c, T = Math.sin(u) * c, S = Math.sin(u - l) * -_, O = Math.cos(u - l) * _, l && (f *= Te, x = Math.tan(l - f), x = Math.sqrt(1 + x * x), S *= x, O *= x, f && (x = Math.tan(f), x = Math.sqrt(1 + x * x), g *= x, T *= x)), g = I(g), T = I(T), S = I(S), O = I(O)) : (g = c, O = _, T = S = 0), (b && !~(a + "").indexOf("px") || v && !~(o + "").indexOf("px")) && (b = Xt(d, "x", a, "px"), v = Xt(d, "y", o, "px")), (p || h || m || y) && (b = I(b + p - (p * g + h * S) + m), v = I(v + h - (p * T + h * O) + y)), (i || s) && (x = d.getBBox(), b = I(b + i / 100 * x.width), v = I(v + s / 100 * x.height)), x = "matrix(" + g + "," + T + "," + S + "," + O + "," + b + "," + v + ")", d.setAttribute("transform", x), w && (d.style[N] = x);
}, El = function(t, e, r, i, s) {
  var a = 360, o = q(s), u = parseFloat(s) * (o && ~s.indexOf("rad") ? ee : 1), l = u - i, f = i + l + "deg", c, _;
  return o && (c = s.split("_")[1], c === "short" && (l %= a, l !== l % (a / 2) && (l += l < 0 ? a : -360)), c === "cw" && l < 0 ? l = (l + a * yn) % a - ~~(l / a) * a : c === "ccw" && l > 0 && (l = (l - a * yn) % a - ~~(l / a) * a)), t._pt = _ = new it(t._pt, e, r, i, l, cl), _.e = f, _.u = "deg", t._props.push(r), _;
}, Cn = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, $l = function(t, e, r) {
  var i = Cn({}, r._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", a = r.style, o, u, l, f, c, _, d, p;
  i.svg ? (l = r.getAttribute("transform"), r.setAttribute("transform", ""), a[N] = e, o = Qe(r, 1), he(r, N), r.setAttribute("transform", l)) : (l = getComputedStyle(r)[N], a[N] = e, o = Qe(r, 1), a[N] = l);
  for (u in Nt)
    l = i[u], f = o[u], l !== f && s.indexOf(u) < 0 && (d = G(l), p = G(f), c = d !== p ? Xt(r, u, l, p) : parseFloat(l), _ = parseFloat(f), t._pt = new it(t._pt, o, u, c, _ - c, gi), t._pt.u = p || 0, t._props.push(u));
  Cn(o, i);
};
rt("padding,margin,Width,Radius", function(n, t) {
  var e = "Top", r = "Right", i = "Bottom", s = "Left", a = (t < 3 ? [e, r, i, s] : [e + s, e + r, i + r, i + s]).map(function(o) {
    return t < 2 ? n + o : "border" + o + n;
  });
  $r[t > 1 ? "border" + n : n] = function(o, u, l, f, c) {
    var _, d;
    if (arguments.length < 4)
      return _ = a.map(function(p) {
        return Dt(o, p, l);
      }), d = _.join(" "), d.split(_[0]).length === 5 ? _[0] : d;
    _ = (f + "").split(" "), d = {}, a.forEach(function(p, h) {
      return d[p] = _[h] = _[h] || _[(h - 1) / 2 | 0];
    }), o.init(u, d, c);
  };
});
var ya = {
  name: "css",
  register: yi,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, r, i, s) {
    var a = this._props, o = t.style, u = r.vars.startAt, l, f, c, _, d, p, h, m, y, w, b, v, g, T, S, O;
    Wi || yi(), this.styles = this.styles || ha(t), O = this.styles.props, this.tween = r;
    for (h in e)
      if (h !== "autoRound" && (f = e[h], !(ot[h] && ea(h, e, r, i, t, s)))) {
        if (d = typeof f, p = $r[h], d === "function" && (f = f.call(r, i, t, s), d = typeof f), d === "string" && ~f.indexOf("random(") && (f = Xe(f)), p)
          p(this, t, h, f, r) && (S = 1);
        else if (h.substr(0, 2) === "--")
          l = (getComputedStyle(t).getPropertyValue(h) + "").trim(), f += "", Wt.lastIndex = 0, Wt.test(l) || (m = G(l), y = G(f)), y ? m !== y && (l = Xt(t, h, l, y) + y) : m && (f += m), this.add(o, "setProperty", l, f, i, s, 0, 0, h), a.push(h), O.push(h, 0, o[h]);
        else if (d !== "undefined") {
          if (u && h in u ? (l = typeof u[h] == "function" ? u[h].call(r, i, t, s) : u[h], q(l) && ~l.indexOf("random(") && (l = Xe(l)), G(l + "") || l === "auto" || (l += ft.units[h] || G(Dt(t, h)) || ""), (l + "").charAt(1) === "=" && (l = Dt(t, h))) : l = Dt(t, h), _ = parseFloat(l), w = d === "string" && f.charAt(1) === "=" && f.substr(0, 2), w && (f = f.substr(2)), c = parseFloat(f), h in St && (h === "autoAlpha" && (_ === 1 && Dt(t, "visibility") === "hidden" && c && (_ = 0), O.push("visibility", 0, o.visibility), Vt(this, o, "visibility", _ ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), h !== "scale" && h !== "transform" && (h = St[h], ~h.indexOf(",") && (h = h.split(",")[0]))), b = h in Nt, b) {
            if (this.styles.save(h), v || (g = t._gsap, g.renderTransform && !e.parseTransform || Qe(t, e.parseTransform), T = e.smoothOrigin !== !1 && g.smooth, v = this._pt = new it(this._pt, o, N, 0, 1, g.renderTransform, g, 0, -1), v.dep = 1), h === "scale")
              this._pt = new it(this._pt, g, "scaleY", g.scaleY, (w ? xe(g.scaleY, w + c) : c) - g.scaleY || 0, gi), this._pt.u = 0, a.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              O.push(nt, 0, o[nt]), f = Sl(f), g.svg ? wi(t, f, 0, T, 0, this) : (y = parseFloat(f.split(" ")[2]) || 0, y !== g.zOrigin && Vt(this, g, "zOrigin", g.zOrigin, y), Vt(this, o, h, kr(l), kr(f)));
              continue;
            } else if (h === "svgOrigin") {
              wi(t, f, 1, T, 0, this);
              continue;
            } else if (h in ma) {
              El(this, g, h, _, w ? xe(_, w + f) : f);
              continue;
            } else if (h === "smoothOrigin") {
              Vt(this, g, "smooth", g.smooth, f);
              continue;
            } else if (h === "force3D") {
              g[h] = f;
              continue;
            } else if (h === "transform") {
              $l(this, f, t);
              continue;
            }
          } else h in o || (h = Ae(h) || h);
          if (b || (c || c === 0) && (_ || _ === 0) && !fl.test(f) && h in o)
            m = (l + "").substr((_ + "").length), c || (c = 0), y = G(f) || (h in ft.units ? ft.units[h] : m), m !== y && (_ = Xt(t, h, l, y)), this._pt = new it(this._pt, b ? g : o, h, _, (w ? xe(_, w + c) : c) - _, !b && (y === "px" || h === "zIndex") && e.autoRound !== !1 ? _l : gi), this._pt.u = y || 0, m !== y && y !== "%" && (this._pt.b = l, this._pt.r = hl);
          else if (h in o)
            Tl.call(this, t, h, l, w ? w + f : f);
          else if (h in t)
            this.add(t, h, l || t[h], w ? w + f : f, i, s);
          else if (h !== "parseTransform") {
            Ri(h, f);
            continue;
          }
          b || (h in o ? O.push(h, 0, o[h]) : typeof t[h] == "function" ? O.push(h, 2, t[h]()) : O.push(h, 1, l || t[h])), a.push(h);
        }
      }
    S && oa(this);
  },
  render: function(t, e) {
    if (e.tween._time || !Yi())
      for (var r = e._pt; r; )
        r.r(t, r.d), r = r._next;
    else
      e.styles.revert();
  },
  get: Dt,
  aliases: St,
  getSetter: function(t, e, r) {
    var i = St[e];
    return i && i.indexOf(",") < 0 && (e = i), e in Nt && e !== nt && (t._gsap.x || Dt(t, "x")) ? r && vn === r ? e === "scale" ? gl : ml : (vn = r || {}) && (e === "scale" ? vl : yl) : t.style && !Ai(t.style[e]) ? dl : ~e.indexOf("-") ? pl : Vi(t, e);
  },
  core: {
    _removeProperty: he,
    _getMatrix: qi
  }
};
st.utils.checkPrefix = Ae;
st.core.getStyleSaver = ha;
(function(n, t, e, r) {
  var i = rt(n + "," + t + "," + e, function(s) {
    Nt[s] = 1;
  });
  rt(t, function(s) {
    ft.units[s] = "deg", ma[s] = 1;
  }), St[i[13]] = n + "," + t, rt(r, function(s) {
    var a = s.split(":");
    St[a[1]] = i[a[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
rt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(n) {
  ft.units[n] = "px";
});
st.registerPlugin(ya);
var dr = st.registerPlugin(ya) || st;
dr.core.Tween;
function kl(n, t) {
  es(t, !1);
  let e, r = 0;
  ko(async () => {
    e = document.querySelectorAll(".animated-word-box"), console.log(e), e.forEach((a) => {
      a.style.display = "none";
    });
    const i = async (a) => {
      const o = e[a];
      if (!o) return;
      o.style.display = "flex";
      const u = new pu(o, { types: "chars" });
      return dr.set(u.chars, { opacity: 0, y: "2rem", filter: "blur(20px)" }), await lo(), dr.to(u.chars, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.05,
        duration: 0.5,
        onComplete: () => {
          dr.set(u.chars, { clearProps: "all" });
        }
      });
    };
    await i(r);
    const s = setInterval(
      async () => {
        e.forEach((a) => {
          a.style.display = "none";
        }), r = (r + 1) % e.length, await i(r);
      },
      2e3
    );
    return () => clearInterval(s);
  }), $o(), rs();
}
Fo(kl, {}, [], [], !0);
export {
  kl as default
};
