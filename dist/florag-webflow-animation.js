var Xp=Object.defineProperty;var Su=i=>{throw TypeError(i)};var $p=(i,t,e)=>t in i?Xp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var qp=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var gt=(i,t,e)=>$p(i,typeof t!="symbol"?t+"":t,e),Mu=(i,t,e)=>t.has(i)||Su("Cannot "+e);var Ge=(i,t,e)=>(Mu(i,t,"read from private field"),e?e.call(i):t.get(i)),Eo=(i,t,e)=>t.has(i)?Su("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),To=(i,t,e,n)=>(Mu(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e);var ME=qp((EE,ea)=>{const Yp="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Yp);let Gs=!1,jp=!1;function Zp(){Gs=!0}Zp();const Kp=2,ih="[",rh="[!",sh="]",Ca={},Jp=Symbol(),ul=!1,Ln=2,ah=4,so=8,Rc=16,hi=32,fs=64,Va=128,xn=256,Ga=512,Ne=1024,di=2048,fr=4096,qr=8192,ao=16384,Qp=32768,Cc=65536,tm=1<<19,oh=1<<20,yu=Symbol("$state"),em=Symbol("legacy props");var nm=Array.isArray,im=Array.prototype.indexOf,rm=Array.from,Wa=Object.keys,Ds=Object.defineProperty,Xa=Object.getOwnPropertyDescriptor,sm=Object.getOwnPropertyDescriptors,am=Object.getPrototypeOf;const zr=()=>{};function om(i){return i()}function Eu(i){for(var t=0;t<i.length;t++)i[t]()}function lh(i){return i===this.v}function ch(i,t){return i!=i?t==t:i!==t||i!==null&&typeof i=="object"||typeof i=="function"}function lm(i){return!ch(i,this.v)}function cm(i){throw new Error("https://svelte.dev/e/effect_in_teardown")}function um(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function fm(i){throw new Error("https://svelte.dev/e/effect_orphan")}function hm(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function dm(){throw new Error("https://svelte.dev/e/hydration_failed")}function pm(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function mm(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function uh(i,t){var e={f:0,v:i,reactions:null,equals:lh,rv:0,wv:0};return e}function Pc(i,t=!1){var n;const e=uh(i);return t||(e.equals=lm),Gs&&ae!==null&&ae.l!==null&&((n=ae.l).s??(n.s=[])).push(e),e}function fh(i,t=!1){return _m(Pc(i,t))}function _m(i){return re!==null&&!On&&re.f&Ln&&(kn===null?Tm([i]):kn.push(i)),i}function Ws(i,t){return re!==null&&!On&&ho()&&re.f&(Ln|Rc)&&(kn===null||!kn.includes(i))&&mm(),gm(i,t)}function gm(i,t){return i.equals(t)||(i.v,i.v=t,i.wv=Mh(),hh(i,di),ho()&&se!==null&&se.f&Ne&&!(se.f&(hi|fs))&&(Qn===null?bm([i]):Qn.push(i))),t}function hh(i,t){var e=i.reactions;if(e!==null)for(var n=ho(),r=e.length,s=0;s<r;s++){var a=e[s],o=a.f;o&di||!n&&a===se||(Un(a,t),o&(Ne|xn)&&(o&Ln?hh(a,fr):co(a)))}}function vm(i){var t=Ln|di,e=re!==null&&re.f&Ln?re:null;return se===null||e!==null&&e.f&xn?t|=xn:se.f|=oh,{ctx:ae,deps:null,effects:null,equals:lh,f:t,fn:i,reactions:null,rv:0,v:null,wv:0,parent:e??se}}function dh(i){var t=i.effects;if(t!==null){i.effects=null;for(var e=0;e<t.length;e+=1)Pi(t[e])}}function xm(i){for(var t=i.parent;t!==null;){if(!(t.f&Ln))return t;t=t.parent}return null}function Sm(i){var t,e=se;Zr(xm(i));try{dh(i),t=Eh(i)}finally{Zr(e)}return t}function ph(i){var t=Sm(i),e=(yi||i.f&xn)&&i.deps!==null?fr:Ne;Un(i,e),i.equals(t)||(i.v=t,i.wv=Mh())}function mh(i){console.warn("https://svelte.dev/e/hydration_mismatch")}let on=!1;function Nr(i){on=i}let Le;function Yr(i){if(i===null)throw mh(),Ca;return Le=i}function Dc(){return Yr(hs(Le))}function Mm(){for(var i=0,t=Le;;){if(t.nodeType===8){var e=t.data;if(e===sh){if(i===0)return t;i-=1}else(e===ih||e===rh)&&(i+=1)}var n=hs(t);t.remove(),t=n}}var Tu,_h,gh,vh;function fl(){if(Tu===void 0){Tu=window,_h=/Firefox/.test(navigator.userAgent);var i=Element.prototype,t=Node.prototype;gh=Xa(t,"firstChild").get,vh=Xa(t,"nextSibling").get,i.__click=void 0,i.__className="",i.__attributes=null,i.__styles=null,i.__e=void 0,Text.prototype.__t=void 0}}function Lc(i=""){return document.createTextNode(i)}function Uc(i){return gh.call(i)}function hs(i){return vh.call(i)}function bu(i,t){if(!on){var e=Uc(i);return e instanceof Comment&&e.data===""?hs(e):e}return Le}function bo(i,t=1,e=!1){let n=on?Le:i;for(var r;t--;)r=n,n=hs(n);if(!on)return n;var s=n==null?void 0:n.nodeType;if(e&&s!==3){var a=Lc();return n===null?r==null||r.after(a):n.before(a),Yr(a),a}return Yr(n),n}function ym(i){i.textContent=""}const xh=0,Em=1;let Pa=!1,Da=xh,Ls=!1,Us=null,kr=!1,Ic=!1;function wu(i){kr=i}function Au(i){Ic=i}let Zi=[],Hr=0,re=null,On=!1;function jr(i){re=i}let se=null;function Zr(i){se=i}let kn=null;function Tm(i){kn=i}let Be=null,en=0,Qn=null;function bm(i){Qn=i}let Sh=1,$a=0,yi=!1;function Mh(){return++Sh}function ds(i){var f;var t=i.f;if(t&di)return!0;if(t&fr){var e=i.deps,n=(t&xn)!==0;if(e!==null){var r,s,a=(t&Ga)!==0,o=n&&se!==null&&!yi,l=e.length;if(a||o){var c=i,u=c.parent;for(r=0;r<l;r++)s=e[r],(a||!((f=s==null?void 0:s.reactions)!=null&&f.includes(c)))&&(s.reactions??(s.reactions=[])).push(c);a&&(c.f^=Ga),o&&u!==null&&!(u.f&xn)&&(c.f^=xn)}for(r=0;r<l;r++)if(s=e[r],ds(s)&&ph(s),s.wv>i.wv)return!0}(!n||se!==null&&!yi)&&Un(i,Ne)}return!1}function wm(i,t){for(var e=t;e!==null;){if(e.f&Va)try{e.fn(i);return}catch{e.f^=Va}e=e.parent}throw Pa=!1,i}function Am(i){return(i.f&ao)===0&&(i.parent===null||(i.parent.f&Va)===0)}function oo(i,t,e,n){if(Pa){if(e===null&&(Pa=!1),Am(t))throw i;return}e!==null&&(Pa=!0);{wm(i,t);return}}function yh(i,t,e=!0){var n=i.reactions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];s.f&Ln?yh(s,t,!1):t===s&&(e?Un(s,di):s.f&Ne&&Un(s,fr),co(s))}}function Eh(i){var p;var t=Be,e=en,n=Qn,r=re,s=yi,a=kn,o=ae,l=On,c=i.f;Be=null,en=0,Qn=null,re=c&(hi|fs)?null:i,yi=(c&xn)!==0&&(!kr||r===null||l),kn=null,Pu(i.ctx),On=!1,$a++;try{var u=(0,i.fn)(),f=i.deps;if(Be!==null){var h;if(qa(i,en),f!==null&&en>0)for(f.length=en+Be.length,h=0;h<Be.length;h++)f[en+h]=Be[h];else i.deps=f=Be;if(!yi)for(h=en;h<f.length;h++)((p=f[h]).reactions??(p.reactions=[])).push(i)}else f!==null&&en<f.length&&(qa(i,en),f.length=en);if(ho()&&Qn!==null&&!On&&f!==null&&!(i.f&(Ln|fr|di)))for(h=0;h<Qn.length;h++)yh(Qn[h],i);return r!==null&&$a++,u}finally{Be=t,en=e,Qn=n,re=r,yi=s,kn=a,Pu(o),On=l}}function Rm(i,t){let e=t.reactions;if(e!==null){var n=im.call(e,i);if(n!==-1){var r=e.length-1;r===0?e=t.reactions=null:(e[n]=e[r],e.pop())}}e===null&&t.f&Ln&&(Be===null||!Be.includes(t))&&(Un(t,fr),t.f&(xn|Ga)||(t.f^=Ga),dh(t),qa(t,0))}function qa(i,t){var e=i.deps;if(e!==null)for(var n=t;n<e.length;n++)Rm(i,e[n])}function lo(i){var t=i.f;if(!(t&ao)){Un(i,Ne);var e=se,n=ae;se=i;try{t&Rc?km(i):Dh(i),Ph(i);var r=Eh(i);i.teardown=typeof r=="function"?r:null,i.wv=Sh;var s=i.deps,a;ul&&jp&&i.f&di}catch(o){oo(o,i,e,n||i.ctx)}finally{se=e}}}function Th(){if(Hr>1e3){Hr=0;try{hm()}catch(i){if(Us!==null)oo(i,Us,null);else throw i}}Hr++}function bh(i){var t=i.length;if(t!==0){Th();var e=kr;kr=!0;try{for(var n=0;n<t;n++){var r=i[n];r.f&Ne||(r.f^=Ne);var s=Dm(r);Cm(s)}}finally{kr=e}}}function Cm(i){var t=i.length;if(t!==0)for(var e=0;e<t;e++){var n=i[e];if(!(n.f&(ao|qr)))try{ds(n)&&(lo(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?Lh(n):n.fn=null))}catch(r){oo(r,n,null,n.ctx)}}}function Pm(){if(Ls=!1,Hr>1001)return;const i=Zi;Zi=[],bh(i),Ls||(Hr=0,Us=null)}function co(i){Da===xh&&(Ls||(Ls=!0,queueMicrotask(Pm))),Us=i;for(var t=i;t.parent!==null;){t=t.parent;var e=t.f;if(e&(fs|hi)){if(!(e&Ne))return;t.f^=Ne}}Zi.push(t)}function Dm(i){var t=[],e=i.first;t:for(;e!==null;){var n=e.f,r=(n&hi)!==0,s=r&&(n&Ne)!==0,a=e.next;if(!s&&!(n&qr)){if(n&ah)t.push(e);else if(r)e.f^=Ne;else{var o=re;try{re=e,ds(e)&&lo(e)}catch(u){oo(u,e,null,e.ctx)}finally{re=o}}var l=e.first;if(l!==null){e=l;continue}}if(a===null){let u=e.parent;for(;u!==null;){if(i===u)break t;var c=u.next;if(c!==null){e=c;continue t}u=u.parent}}e=a}return t}function wh(i){var t=Da,e=Zi;try{Th();const r=[];Da=Em,Zi=r,Ls=!1,bh(e);var n=i==null?void 0:i();return(Zi.length>0||r.length>0)&&wh(),Hr=0,Us=null,n}finally{Da=t,Zi=e}}function ai(i){var t=i.f,e=(t&Ln)!==0;if(re!==null&&!On){kn!==null&&kn.includes(i)&&pm();var n=re.deps;i.rv<$a&&(i.rv=$a,Be===null&&n!==null&&n[en]===i?en++:Be===null?Be=[i]:(!yi||!Be.includes(i))&&Be.push(i))}else if(e&&i.deps===null&&i.effects===null){var r=i,s=r.parent;s!==null&&!(s.f&xn)&&(r.f^=xn)}return e&&(r=i,ds(r)&&ph(r)),i.v}function uo(i){var t=On;try{return On=!0,i()}finally{On=t}}const Lm=-7169;function Un(i,t){i.f=i.f&Lm|t}function Um(i){if(!(typeof i!="object"||!i||i instanceof EventTarget)){if(yu in i)hl(i);else if(!Array.isArray(i))for(let t in i){const e=i[t];typeof e=="object"&&e&&yu in e&&hl(e)}}}function hl(i,t=new Set){if(typeof i=="object"&&i!==null&&!(i instanceof EventTarget)&&!t.has(i)){t.add(i),i instanceof Date&&i.getTime();for(let n in i)try{hl(i[n],t)}catch{}const e=am(i);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const n=sm(e);for(let r in n){const s=n[r].get;if(s)try{s.call(i)}catch{}}}}}function Ah(i){se===null&&re===null&&fm(),re!==null&&re.f&xn&&se===null&&um(),Ic&&cm()}function Im(i,t){var e=t.last;e===null?t.last=t.first=i:(e.next=i,i.prev=e,t.last=i)}function hr(i,t,e,n=!0){var r=(i&fs)!==0,s=se,a={ctx:ae,deps:null,nodes_start:null,nodes_end:null,f:i|di,first:null,fn:t,last:null,next:null,parent:r?null:s,prev:null,teardown:null,transitions:null,wv:0};if(e){var o=kr;try{wu(!0),lo(a),a.f|=Qp}catch(u){throw Pi(a),u}finally{wu(o)}}else t!==null&&co(a);var l=e&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(oh|Va))===0;if(!l&&!r&&n&&(s!==null&&Im(a,s),re!==null&&re.f&Ln)){var c=re;(c.effects??(c.effects=[])).push(a)}return a}function Rh(i){const t=hr(so,null,!1);return Un(t,Ne),t.teardown=i,t}function dl(i){Ah();var t=se!==null&&(se.f&hi)!==0&&ae!==null&&!ae.m;if(t){var e=ae;(e.e??(e.e=[])).push({fn:i,effect:se,reaction:re})}else{var n=Ch(i);return n}}function Nm(i){return Ah(),fo(i)}function Fm(i){const t=hr(fs,i,!0);return()=>{Pi(t)}}function Om(i){const t=hr(fs,i,!0);return(e={})=>new Promise(n=>{e.outro?ml(t,()=>{Pi(t),n(void 0)}):(Pi(t),n(void 0))})}function Ch(i){return hr(ah,i,!1)}function Ru(i,t){var e=ae,n={effect:null,ran:!1};e.l.r1.push(n),n.effect=fo(()=>{i(),!n.ran&&(n.ran=!0,Ws(e.l.r2,!0),uo(t))})}function Bm(){var i=ae;fo(()=>{if(ai(i.l.r2)){for(var t of i.l.r1){var e=t.effect;e.f&Ne&&Un(e,fr),ds(e)&&lo(e),t.ran=!1}i.l.r2.v=!1}})}function fo(i){return hr(so,i,!0)}function zm(i,t=0){return hr(so|Rc|t,i,!0)}function pl(i,t=!0){return hr(so|hi,i,!0,t)}function Ph(i){var t=i.teardown;if(t!==null){const e=Ic,n=re;Au(!0),jr(null);try{t.call(null)}finally{Au(e),jr(n)}}}function Dh(i,t=!1){var e=i.first;for(i.first=i.last=null;e!==null;){var n=e.next;Pi(e,t),e=n}}function km(i){for(var t=i.first;t!==null;){var e=t.next;t.f&hi||Pi(t),t=e}}function Pi(i,t=!0){var e=!1;if((t||i.f&tm)&&i.nodes_start!==null){for(var n=i.nodes_start,r=i.nodes_end;n!==null;){var s=n===r?null:hs(n);n.remove(),n=s}e=!0}Dh(i,t&&!e),qa(i,0),Un(i,ao);var a=i.transitions;if(a!==null)for(const l of a)l.stop();Ph(i);var o=i.parent;o!==null&&o.first!==null&&Lh(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.fn=i.nodes_start=i.nodes_end=null}function Lh(i){var t=i.parent,e=i.prev,n=i.next;e!==null&&(e.next=n),n!==null&&(n.prev=e),t!==null&&(t.first===i&&(t.first=n),t.last===i&&(t.last=e))}function ml(i,t){var e=[];Uh(i,e,!0),Hm(e,()=>{Pi(i),t&&t()})}function Hm(i,t){var e=i.length;if(e>0){var n=()=>--e||t();for(var r of i)r.out(n)}else t()}function Uh(i,t,e){if(!(i.f&qr)){if(i.f^=qr,i.transitions!==null)for(const a of i.transitions)(a.is_global||e)&&t.push(a);for(var n=i.first;n!==null;){var r=n.next,s=(n.f&Cc)!==0||(n.f&hi)!==0;Uh(n,t,s?e:!1),n=r}}}function Cu(i){Ih(i,!0)}function Ih(i,t){if(i.f&qr){i.f^=qr,i.f&Ne||(i.f^=Ne),ds(i)&&(Un(i,di),co(i));for(var e=i.first;e!==null;){var n=e.next,r=(e.f&Cc)!==0||(e.f&hi)!==0;Ih(e,r?t:!1),e=n}if(i.transitions!==null)for(const s of i.transitions)(s.is_global||t)&&s.in()}}function Vm(i){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let ae=null;function Pu(i){ae=i}function ps(i,t=!1,e){ae={p:ae,c:null,e:null,m:!1,s:i,x:null,l:null},Gs&&!t&&(ae.l={s:null,u:null,r1:[],r2:uh(!1)})}function ms(i){const t=ae;if(t!==null){i!==void 0&&(t.x=i);const a=t.e;if(a!==null){var e=se,n=re;t.e=null;try{for(var r=0;r<a.length;r++){var s=a[r];Zr(s.effect),jr(s.reaction),Ch(s.fn)}}finally{Zr(e),jr(n)}}ae=t.p,t.m=!0}return i||{}}function ho(){return!Gs||ae!==null&&ae.l===null}const Gm=["touchstart","touchmove"];function Wm(i){return Gm.includes(i)}const Xm=new Set,Du=new Set;function ra(i){var T;var t=this,e=t.ownerDocument,n=i.type,r=((T=i.composedPath)==null?void 0:T.call(i))||[],s=r[0]||i.target,a=0,o=i.__root;if(o){var l=r.indexOf(o);if(l!==-1&&(t===document||t===window)){i.__root=t;return}var c=r.indexOf(t);if(c===-1)return;l<=c&&(a=l)}if(s=r[a]||i.target,s!==t){Ds(i,"currentTarget",{configurable:!0,get(){return s||e}});var u=re,f=se;jr(null),Zr(null);try{for(var h,p=[];s!==null;){var g=s.assignedSlot||s.parentNode||s.host||null;try{var _=s["__"+n];if(_!==void 0&&!s.disabled)if(nm(_)){var[m,...d]=_;m.apply(s,[i,...d])}else _.call(s,i)}catch(y){h?p.push(y):h=y}if(i.cancelBubble||g===t||g===null)break;s=g}if(h){for(let y of p)queueMicrotask(()=>{throw y});throw h}}finally{i.__root=t,delete i.currentTarget,jr(u),Zr(f)}}}function $m(i){var t=document.createElement("template");return t.innerHTML=i,t.content}function Is(i,t){var e=se;e.nodes_start===null&&(e.nodes_start=i,e.nodes_end=t)}function qm(i,t){var e=(t&Kp)!==0,n,r=!i.startsWith("<!>");return()=>{if(on)return Is(Le,null),Le;n===void 0&&(n=$m(r?i:"<!>"+i));var s=e||_h?document.importNode(n,!0):n.cloneNode(!0);{var a=Uc(s),o=s.lastChild;Is(a,o)}return s}}function Ym(){if(on)return Is(Le,null),Le;var i=document.createDocumentFragment(),t=document.createComment(""),e=Lc();return i.append(t,e),Is(t,e),i}function _l(i,t){if(on){se.nodes_end=Le,Dc();return}i!==null&&i.before(t)}function Nh(i,t){return Fh(i,t)}function jm(i,t){fl(),t.intro=t.intro??!1;const e=t.target,n=on,r=Le;try{for(var s=Uc(e);s&&(s.nodeType!==8||s.data!==ih);)s=hs(s);if(!s)throw Ca;Nr(!0),Yr(s),Dc();const a=Fh(i,{...t,anchor:s});if(Le===null||Le.nodeType!==8||Le.data!==sh)throw mh(),Ca;return Nr(!1),a}catch(a){if(a===Ca)return t.recover===!1&&dm(),fl(),ym(e),Nr(!1),Nh(i,t);throw a}finally{Nr(n),Yr(r)}}const _r=new Map;function Fh(i,{target:t,anchor:e,props:n={},events:r,context:s,intro:a=!0}){fl();var o=new Set,l=f=>{for(var h=0;h<f.length;h++){var p=f[h];if(!o.has(p)){o.add(p);var g=Wm(p);t.addEventListener(p,ra,{passive:g});var _=_r.get(p);_===void 0?(document.addEventListener(p,ra,{passive:g}),_r.set(p,1)):_r.set(p,_+1)}}};l(rm(Xm)),Du.add(l);var c=void 0,u=Om(()=>{var f=e??t.appendChild(Lc());return pl(()=>{if(s){ps({});var h=ae;h.c=s}r&&(n.$$events=r),on&&Is(f,null),c=i(f,n)||{},on&&(se.nodes_end=Le),s&&ms()}),()=>{var g;for(var h of o){t.removeEventListener(h,ra);var p=_r.get(h);--p===0?(document.removeEventListener(h,ra),_r.delete(h)):_r.set(h,p)}Du.delete(l),f!==e&&((g=f.parentNode)==null||g.removeChild(f))}});return gl.set(c,u),c}let gl=new WeakMap;function Zm(i,t){const e=gl.get(i);return e?(gl.delete(i),e(t)):Promise.resolve()}function Km(i,t,e=!1){on&&Dc();var n=i,r=null,s=null,a=Jp,o=e?Cc:0,l=!1;const c=(f,h=!0)=>{l=!0,u(h,f)},u=(f,h)=>{if(a===(a=f))return;let p=!1;if(on){const g=n.data===rh;!!a===g&&(n=Mm(),Yr(n),Nr(!1),p=!0)}a?(r?Cu(r):h&&(r=pl(()=>h(n))),s&&ml(s,()=>{s=null})):(s?Cu(s):h&&(s=pl(()=>h(n))),r&&ml(r,()=>{r=null})),p&&Nr(!0)};zm(()=>{l=!1,t(c),l||u(null,null)},o),on&&(n=Le)}const Jm=()=>performance.now(),wn={tick:i=>requestAnimationFrame(i),now:()=>Jm(),tasks:new Set};function Oh(){const i=wn.now();wn.tasks.forEach(t=>{t.c(i)||(wn.tasks.delete(t),t.f())}),wn.tasks.size!==0&&wn.tick(Oh)}function Qm(i){let t;return wn.tasks.size===0&&wn.tick(Oh),{promise:new Promise(e=>{wn.tasks.add(t={c:i,f:e})}),abort(){wn.tasks.delete(t)}}}function t_(i,t,e){var n=Xa(i,t);n&&n.set&&(i[t]=e,Rh(()=>{i[t]=null}))}function Xs(i=!1){const t=ae,e=t.l.u;if(!e)return;let n=()=>Um(t.s);if(i){let r=0,s={};const a=vm(()=>{let o=!1;const l=t.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&r++,r});n=()=>ai(a)}e.b.length&&Nm(()=>{Lu(t,n),Eu(e.b)}),dl(()=>{const r=uo(()=>e.m.map(om));return()=>{for(const s of r)typeof s=="function"&&s()}}),e.a.length&&dl(()=>{Lu(t,n),Eu(e.a)})}function Lu(i,t){if(i.l.s)for(const e of i.l.s)ai(e);t()}function $s(i){ae===null&&Vm(),Gs&&ae.l!==null?e_(ae).m.push(i):dl(()=>{const t=uo(i);if(typeof t=="function")return t})}function e_(i){var t=i.l;return t.u??(t.u={a:[],b:[],m:[]})}function Bh(i,t,e){if(i==null)return t(void 0),zr;const n=uo(()=>i.subscribe(t,e));return n.unsubscribe?()=>n.unsubscribe():n}const gr=[];function n_(i,t){return{subscribe:zh(i,t).subscribe}}function zh(i,t=zr){let e=null;const n=new Set;function r(o){if(ch(i,o)&&(i=o,e)){const l=!gr.length;for(const c of n)c[1](),gr.push(c,i);if(l){for(let c=0;c<gr.length;c+=2)gr[c][0](gr[c+1]);gr.length=0}}}function s(o){r(o(i))}function a(o,l=zr){const c=[o,l];return n.add(c),n.size===1&&(e=t(r,s)||zr),o(i),()=>{n.delete(c),n.size===0&&e&&(e(),e=null)}}return{set:r,update:s,subscribe:a}}function i_(i){let t;return Bh(i,e=>t=e)(),t}let vl=Symbol();function Uu(i,t,e){const n=e[t]??(e[t]={store:null,source:Pc(void 0),unsubscribe:zr});if(n.store!==i&&!(vl in e))if(n.unsubscribe(),n.store=i??null,i==null)n.source.v=void 0,n.unsubscribe=zr;else{var r=!0;n.unsubscribe=Bh(i,s=>{r?n.source.v=s:Ws(n.source,s)}),r=!1}return i&&vl in e?i_(i):ai(n.source)}function r_(i,t){return i.set(t),t}function s_(){const i={};function t(){Rh(()=>{for(var e in i)i[e].unsubscribe();Ds(i,vl,{enumerable:!1,value:!0})})}return[i,t]}function a_(i){return new o_(i)}var ei,_n;class o_{constructor(t){Eo(this,ei);Eo(this,_n);var s;var e=new Map,n=(a,o)=>{var l=Pc(o);return e.set(a,l),l};const r=new Proxy({...t.props||{},$$events:{}},{get(a,o){return ai(e.get(o)??n(o,Reflect.get(a,o)))},has(a,o){return o===em?!0:(ai(e.get(o)??n(o,Reflect.get(a,o))),Reflect.has(a,o))},set(a,o,l){return Ws(e.get(o)??n(o,l),l),Reflect.set(a,o,l)}});To(this,_n,(t.hydrate?jm:Nh)(t.component,{target:t.target,anchor:t.anchor,props:r,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((s=t==null?void 0:t.props)!=null&&s.$$host)||t.sync===!1)&&wh(),To(this,ei,r.$$events);for(const a of Object.keys(Ge(this,_n)))a==="$set"||a==="$destroy"||a==="$on"||Ds(this,a,{get(){return Ge(this,_n)[a]},set(o){Ge(this,_n)[a]=o},enumerable:!0});Ge(this,_n).$set=a=>{Object.assign(r,a)},Ge(this,_n).$destroy=()=>{Zm(Ge(this,_n))}}$set(t){Ge(this,_n).$set(t)}$on(t,e){Ge(this,ei)[t]=Ge(this,ei)[t]||[];const n=(...r)=>e.call(this,...r);return Ge(this,ei)[t].push(n),()=>{Ge(this,ei)[t]=Ge(this,ei)[t].filter(r=>r!==n)}}$destroy(){Ge(this,_n).$destroy()}}ei=new WeakMap,_n=new WeakMap;let kh;typeof HTMLElement=="function"&&(kh=class extends HTMLElement{constructor(t,e,n){super();gt(this,"$$ctor");gt(this,"$$s");gt(this,"$$c");gt(this,"$$cn",!1);gt(this,"$$d",{});gt(this,"$$r",!1);gt(this,"$$p_d",{});gt(this,"$$l",{});gt(this,"$$l_u",new Map);gt(this,"$$me");this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const r=this.$$c.$on(t,e);this.$$l_u.set(e,r)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const r=this.$$l_u.get(e);r&&(r(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(s){return a=>{const o=document.createElement("slot");s!=="default"&&(o.name=s),_l(a,o)}};var t=e;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=l_(this);for(const s of this.$$s)s in r&&(s==="default"&&!this.$$d.children?(this.$$d.children=e(s),n.default=!0):n[s]=e(s));for(const s of this.attributes){const a=this.$$g_p(s.name);a in this.$$d||(this.$$d[a]=La(a,s.value,this.$$p_d,"toProp"))}for(const s in this.$$p_d)!(s in this.$$d)&&this[s]!==void 0&&(this.$$d[s]=this[s],delete this[s]);this.$$c=a_({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=Fm(()=>{fo(()=>{var s;this.$$r=!0;for(const a of Wa(this.$$c)){if(!((s=this.$$p_d[a])!=null&&s.reflect))continue;this.$$d[a]=this.$$c[a];const o=La(a,this.$$d[a],this.$$p_d,"toAttribute");o==null?this.removeAttribute(this.$$p_d[a].attribute||a):this.setAttribute(this.$$p_d[a].attribute||a,o)}this.$$r=!1})});for(const s in this.$$l)for(const a of this.$$l[s]){const o=this.$$c.$on(s,a);this.$$l_u.set(a,o)}this.$$l={}}}attributeChangedCallback(t,e,n){var r;this.$$r||(t=this.$$g_p(t),this.$$d[t]=La(t,n,this.$$p_d,"toProp"),(r=this.$$c)==null||r.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return Wa(this.$$p_d).find(e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t)||t}});function La(i,t,e,n){var s;const r=(s=e[i])==null?void 0:s.type;if(t=r==="Boolean"&&typeof t!="boolean"?t!=null:t,!n||!e[i])return t;if(n==="toAttribute")switch(r){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(r){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function l_(i){const t={};return i.childNodes.forEach(e=>{t[e.slot||"default"]=!0}),t}function qs(i,t,e,n,r,s){let a=class extends kh{constructor(){super(i,e,r),this.$$p_d=t}static get observedAttributes(){return Wa(t).map(o=>(t[o].attribute||o).toLowerCase())}};return Wa(t).forEach(o=>{Ds(a.prototype,o,{get(){return this.$$c&&o in this.$$c?this.$$c[o]:this.$$d[o]},set(l){var f;l=La(o,l,t),this.$$d[o]=l;var c=this.$$c;if(c){var u=(f=Xa(c,o))==null?void 0:f.get;u?c[o]=l:c.$set({[o]:l})}}})}),n.forEach(o=>{Ds(a.prototype,o,{get(){var l;return(l=this.$$c)==null?void 0:l[o]}})}),i.element=a,a}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nc="173",c_=0,Iu=1,u_=2,Hh=1,f_=2,Kn=3,Di=0,Xe=1,ni=2,wi=0,nr=1,Nu=2,Fu=3,Ou=4,h_=5,Yi=100,d_=101,p_=102,m_=103,__=104,g_=200,v_=201,x_=202,S_=203,xl=204,Sl=205,M_=206,y_=207,E_=208,T_=209,b_=210,w_=211,A_=212,R_=213,C_=214,Ml=0,yl=1,El=2,Kr=3,Tl=4,bl=5,wl=6,Al=7,Vh=0,P_=1,D_=2,Ai=0,L_=1,U_=2,I_=3,N_=4,F_=5,O_=6,B_=7,Gh=300,Jr=301,Qr=302,Rl=303,Cl=304,po=306,Pl=1e3,Ki=1001,Dl=1002,Pn=1003,z_=1004,sa=1005,Te=1006,wo=1007,Ji=1008,oi=1009,Wh=1010,Xh=1011,Ns=1012,Fc=1013,lr=1014,ii=1015,Ys=1016,Oc=1017,Bc=1018,ts=1020,$h=35902,qh=1021,Yh=1022,He=1023,jh=1024,Zh=1025,Vr=1026,es=1027,Kh=1028,zc=1029,Jh=1030,kc=1031,Hc=1033,Ua=33776,Ia=33777,Na=33778,Fa=33779,Ll=35840,Ul=35841,Il=35842,Nl=35843,Fl=36196,Ol=37492,Bl=37496,zl=37808,kl=37809,Hl=37810,Vl=37811,Gl=37812,Wl=37813,Xl=37814,$l=37815,ql=37816,Yl=37817,jl=37818,Zl=37819,Kl=37820,Jl=37821,Oa=36492,Ql=36494,tc=36495,Qh=36283,ec=36284,nc=36285,ic=36286,k_=3200,H_=3201,V_=0,G_=1,Mi="",gn="srgb",ns="srgb-linear",Ya="linear",te="srgb",vr=7680,Bu=519,W_=512,X_=513,$_=514,td=515,q_=516,Y_=517,j_=518,Z_=519,zu=35044,ku="300 es",ri=2e3,ja=2001;class _s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ao=Math.PI/180,rc=180/Math.PI;function js(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function K_(i,t){return(i%t+t)%t}function Ro(i,t,e){return(1-e)*i+e*t}function xs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,r,s,a,o,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],_=r[0],m=r[3],d=r[6],T=r[1],y=r[4],v=r[7],b=r[2],w=r[5],A=r[8];return s[0]=a*_+o*T+l*b,s[3]=a*m+o*y+l*w,s[6]=a*d+o*v+l*A,s[1]=c*_+u*T+f*b,s[4]=c*m+u*y+f*w,s[7]=c*d+u*v+f*A,s[2]=h*_+p*T+g*b,s[5]=h*m+p*y+g*w,s[8]=h*d+p*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,g=e*f+n*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*c-u*n)*_,t[2]=(o*n-r*a)*_,t[3]=h*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Co.makeScale(t,e)),this}rotate(t){return this.premultiply(Co.makeRotation(-t)),this}translate(t,e){return this.premultiply(Co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Co=new Bt;function ed(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Za(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function J_(){const i=Za("canvas");return i.style.display="block",i}const Hu={};function Ir(i){i in Hu||(Hu[i]=!0,console.warn(i))}function Q_(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function tg(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function eg(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Vu=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gu=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ng(){const i={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===te&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(r.r=Gr(r.r),r.g=Gr(r.g),r.b=Gr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mi?Ya:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ns]:{primaries:t,whitePoint:n,transfer:Ya,toXYZ:Vu,fromXYZ:Gu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:n,transfer:te,toXYZ:Vu,fromXYZ:Gu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}const jt=ng();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let xr;class ig{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xr===void 0&&(xr=Za("canvas")),xr.width=t.width,xr.height=t.height;const n=xr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xr}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Za("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=si(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rg=0;class nd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=js(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Po(r[a].image)):s.push(Po(r[a]))}else s=Po(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ig.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sg=0;class $e extends _s{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,n=Ki,r=Ki,s=Te,a=Ji,o=He,l=oi,c=$e.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=js(),this.name="",this.source=new nd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pl:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case Dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pl:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case Dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Gh;$e.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,r=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(p+1)/2,b=(d+1)/2,w=(u+h)/4,A=(f+_)/4,P=(g+m)/4;return y>v&&y>b?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=w/n,s=A/n):v>b?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=P/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=A/s,r=P/s),this.set(n,r,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ag extends _s{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Te,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new $e(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new nd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends ag{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class id extends $e{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class og extends $e{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zs{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==p||u!==g){let m=1-o;const d=l*h+c*p+u*g+f*_,T=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const b=Math.sqrt(y),w=Math.atan2(b,d*T);m=Math.sin(m*w)/b,o=Math.sin(o*w)/b}const v=o*T;if(l=l*m+h*v,c=c*m+p*v,u=u*m+g*v,f=f*m+_*v,m===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+u*f+l*p-c*h,t[e+1]=l*g+u*h+c*f-o*p,t[e+2]=c*g+u*p+o*h-l*f,t[e+3]=u*g-o*f-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),h=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,n=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Do.copy(this).projectOnVector(t),this.sub(Do)}reflect(t){return this.sub(Do.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new X,Wu=new Zs;class Ks{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(s,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),aa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox)),aa.applyMatrix4(t.matrixWorld),this.union(aa)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),oa.subVectors(this.max,Ss),Sr.subVectors(t.a,Ss),Mr.subVectors(t.b,Ss),yr.subVectors(t.c,Ss),pi.subVectors(Mr,Sr),mi.subVectors(yr,Mr),Oi.subVectors(Sr,yr);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Oi.z,Oi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Oi.z,0,-Oi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Oi.y,Oi.x,0];return!Lo(e,Sr,Mr,yr,oa)||(e=[1,0,0,0,1,0,0,0,1],!Lo(e,Sr,Mr,yr,oa))?!1:(la.crossVectors(pi,mi),e=[la.x,la.y,la.z],Lo(e,Sr,Mr,yr,oa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $n=[new X,new X,new X,new X,new X,new X,new X,new X],yn=new X,aa=new Ks,Sr=new X,Mr=new X,yr=new X,pi=new X,mi=new X,Oi=new X,Ss=new X,oa=new X,la=new X,Bi=new X;function Lo(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Bi.fromArray(i,s);const o=r.x*Math.abs(Bi.x)+r.y*Math.abs(Bi.y)+r.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),u=n.dot(Bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const lg=new Ks,Ms=new X,Uo=new X;class Vc{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lg.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);const e=Ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ms,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(Uo)),this.expandByPoint(Ms.copy(t.center).sub(Uo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new X,Io=new X,ca=new X,_i=new X,No=new X,ua=new X,Fo=new X;class rd{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Io.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(Io);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ca),o=_i.dot(this.direction),l=-_i.dot(ca),c=_i.lengthSq(),u=Math.abs(1-a*a);let f,h,p,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Io).addScaledVector(ca,h),p}intersectSphere(t,e){qn.subVectors(t.center,this.origin);const n=qn.dot(this.direction),r=qn.dot(qn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,r,s){No.subVectors(e,t),ua.subVectors(n,t),Fo.crossVectors(No,ua);let a=this.direction.dot(Fo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,t);const l=o*this.direction.dot(ua.crossVectors(_i,ua));if(l<0)return null;const c=o*this.direction.dot(No.cross(_i));if(c<0||l+c>a)return null;const u=-o*_i.dot(Fo);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,r,s,a,o,l,c,u,f,h,p,g,_,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,f,h,p,g,_,m)}set(t,e,n,r,s,a,o,l,c,u,f,h,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Er.setFromMatrixColumn(t,0).length(),s=1/Er.setFromMatrixColumn(t,1).length(),a=1/Er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*u,p=a*f,g=o*u,_=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,p=l*f,g=c*u,_=c*f;e[0]=h+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,p=l*f,g=c*u,_=c*f;e[0]=h-_*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,p=a*f,g=o*u,_=o*f;e[0]=l*u,e[4]=g*c-p,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+p,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=a*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cg,t,ug)}lookAt(t,e,n){const r=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),gi.crossVectors(n,Qe),gi.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),gi.crossVectors(n,Qe)),gi.normalize(),fa.crossVectors(Qe,gi),r[0]=gi.x,r[4]=fa.x,r[8]=Qe.x,r[1]=gi.y,r[5]=fa.y,r[9]=Qe.y,r[2]=gi.z,r[6]=fa.z,r[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],T=n[3],y=n[7],v=n[11],b=n[15],w=r[0],A=r[4],P=r[8],x=r[12],M=r[1],L=r[5],k=r[9],O=r[13],q=r[2],$=r[6],V=r[10],Y=r[14],W=r[3],ot=r[7],U=r[11],C=r[15];return s[0]=a*w+o*M+l*q+c*W,s[4]=a*A+o*L+l*$+c*ot,s[8]=a*P+o*k+l*V+c*U,s[12]=a*x+o*O+l*Y+c*C,s[1]=u*w+f*M+h*q+p*W,s[5]=u*A+f*L+h*$+p*ot,s[9]=u*P+f*k+h*V+p*U,s[13]=u*x+f*O+h*Y+p*C,s[2]=g*w+_*M+m*q+d*W,s[6]=g*A+_*L+m*$+d*ot,s[10]=g*P+_*k+m*V+d*U,s[14]=g*x+_*O+m*Y+d*C,s[3]=T*w+y*M+v*q+b*W,s[7]=T*A+y*L+v*$+b*ot,s[11]=T*P+y*k+v*V+b*U,s[15]=T*x+y*O+v*Y+b*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*f-r*c*f-s*o*h+n*c*h+r*o*p-n*l*p)+_*(+e*l*p-e*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+m*(+e*c*f-e*o*p-s*a*f+n*a*p+s*o*u-n*c*u)+d*(-r*o*u-e*l*f+e*o*h+r*a*f-n*a*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],T=f*m*c-_*h*c+_*l*p-o*m*p-f*l*d+o*h*d,y=g*h*c-u*m*c-g*l*p+a*m*p+u*l*d-a*h*d,v=u*_*c-g*f*c+g*o*p-a*_*p-u*o*d+a*f*d,b=g*f*l-u*_*l-g*o*h+a*_*h+u*o*m-a*f*m,w=e*T+n*y+r*v+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=T*A,t[1]=(_*h*s-f*m*s-_*r*p+n*m*p+f*r*d-n*h*d)*A,t[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*d+n*l*d)*A,t[3]=(f*l*s-o*h*s-f*r*c+n*h*c+o*r*p-n*l*p)*A,t[4]=y*A,t[5]=(u*m*s-g*h*s+g*r*p-e*m*p-u*r*d+e*h*d)*A,t[6]=(g*l*s-a*m*s-g*r*c+e*m*c+a*r*d-e*l*d)*A,t[7]=(a*h*s-u*l*s+u*r*c-e*h*c-a*r*p+e*l*p)*A,t[8]=v*A,t[9]=(g*f*s-u*_*s-g*n*p+e*_*p+u*n*d-e*f*d)*A,t[10]=(a*_*s-g*o*s+g*n*c-e*_*c-a*n*d+e*o*d)*A,t[11]=(u*o*s-a*f*s-u*n*c+e*f*c+a*n*p-e*o*p)*A,t[12]=b*A,t[13]=(u*_*r-g*f*r+g*n*h-e*_*h-u*n*m+e*f*m)*A,t[14]=(g*o*r-a*_*r-g*n*l+e*_*l+a*n*m-e*o*m)*A,t[15]=(a*f*r-u*o*r+u*n*l-e*f*l-a*n*h+e*o*h)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,g=s*f,_=a*u,m=a*f,d=o*f,T=l*c,y=l*u,v=l*f,b=n.x,w=n.y,A=n.z;return r[0]=(1-(_+d))*b,r[1]=(p+v)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(p-v)*w,r[5]=(1-(h+d))*w,r[6]=(m+T)*w,r[7]=0,r[8]=(g+y)*A,r[9]=(m-T)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Er.set(r[0],r[1],r[2]).length();const a=Er.set(r[4],r[5],r[6]).length(),o=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],En.copy(this);const c=1/s,u=1/a,f=1/o;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,e.setFromRotationMatrix(En),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=ri){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),h=(n+r)/(n-r);let p,g;if(o===ri)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ja)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=ri){const l=this.elements,c=1/(e-t),u=1/(n-r),f=1/(a-s),h=(e+t)*c,p=(n+r)*u;let g,_;if(o===ri)g=(a+s)*f,_=-2*f;else if(o===ja)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Er=new X,En=new _e,cg=new X(0,0,0),ug=new X(1,1,1),gi=new X,fa=new X,Qe=new X,Xu=new _e,$u=new Zs;class li{constructor(t=0,e=0,n=0,r=li.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $u.setFromEuler(this),this.setFromQuaternion($u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class Gc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fg=0;const qu=new X,Tr=new Zs,Yn=new _e,ha=new X,ys=new X,hg=new X,dg=new Zs,Yu=new X(1,0,0),ju=new X(0,1,0),Zu=new X(0,0,1),Ku={type:"added"},pg={type:"removed"},br={type:"childadded",child:null},Oo={type:"childremoved",child:null};class ln extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const t=new X,e=new li,n=new Zs,r=new X(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _e},normalMatrix:{value:new Bt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Tr.setFromAxisAngle(t,e),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(t,e){return Tr.setFromAxisAngle(t,e),this.quaternion.premultiply(Tr),this}rotateX(t){return this.rotateOnAxis(Yu,t)}rotateY(t){return this.rotateOnAxis(ju,t)}rotateZ(t){return this.rotateOnAxis(Zu,t)}translateOnAxis(t,e){return qu.copy(t).applyQuaternion(this.quaternion),this.position.add(qu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yu,t)}translateY(t){return this.translateOnAxis(ju,t)}translateZ(t){return this.translateOnAxis(Zu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ha.copy(t):ha.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(ys,ha,this.up):Yn.lookAt(ha,ys,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),Tr.setFromRotationMatrix(Yn),this.quaternion.premultiply(Tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ku),br.child=t,this.dispatchEvent(br),br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pg),Oo.child=t,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ku),br.child=t,this.dispatchEvent(br),br.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,hg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,dg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ln.DEFAULT_UP=new X(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new X,jn=new X,Bo=new X,Zn=new X,wr=new X,Ar=new X,Ju=new X,zo=new X,ko=new X,Ho=new X,Vo=new me,Go=new me,Wo=new me;class An{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Tn.subVectors(t,e),r.cross(Tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Tn.subVectors(r,e),jn.subVectors(n,e),Bo.subVectors(t,e);const a=Tn.dot(Tn),o=Tn.dot(jn),l=Tn.dot(Bo),c=jn.dot(jn),u=jn.dot(Bo),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Vo.setScalar(0),Go.setScalar(0),Wo.setScalar(0),Vo.fromBufferAttribute(t,e),Go.fromBufferAttribute(t,n),Wo.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Vo,s.x),a.addScaledVector(Go,s.y),a.addScaledVector(Wo,s.z),a}static isFrontFacing(t,e,n,r){return Tn.subVectors(n,e),jn.subVectors(t,e),Tn.cross(jn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Tn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return An.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;wr.subVectors(r,n),Ar.subVectors(s,n),zo.subVectors(t,n);const l=wr.dot(zo),c=Ar.dot(zo);if(l<=0&&c<=0)return e.copy(n);ko.subVectors(t,r);const u=wr.dot(ko),f=Ar.dot(ko);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(wr,a);Ho.subVectors(t,s);const p=wr.dot(Ho),g=Ar.dot(Ho);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ar,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Ju.subVectors(s,r),o=(f-u)/(f-u+(p-g)),e.copy(r).addScaledVector(Ju,o);const d=1/(m+_+h);return a=_*d,o=h*d,e.copy(n).addScaledVector(wr,a).addScaledVector(Ar,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},da={h:0,s:0,l:0};function Xo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=jt.workingColorSpace){if(t=K_(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Xo(a,s,t+1/3),this.g=Xo(a,s,t),this.b=Xo(a,s,t-1/3)}return jt.toWorkingColorSpace(this,r),this}setStyle(t,e=gn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const n=sd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return jt.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Vt(Pe.r*255,0,255))*65536+Math.round(Vt(Pe.g*255,0,255))*256+Math.round(Vt(Pe.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,r=Pe.g,s=Pe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=gn){jt.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,r=Pe.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(da);const n=Ro(vi.h,da.h,e),r=Ro(vi.s,da.s,e),s=Ro(vi.l,da.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Qt;Qt.NAMES=sd;let mg=0;class mo extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=js(),this.name="",this.type="Material",this.blending=nr,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=Sl,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xl&&(n.blendSrc=this.blendSrc),this.blendDst!==Sl&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wc extends mo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new X,pa=new Xt;let _g=0;class Hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_g++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zu,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pa.fromBufferAttribute(this,e),pa.applyMatrix3(t),this.setXY(e,pa.x,pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),r=We(r,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zu&&(t.usage=this.usage),t}}class ad extends Hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class od extends Hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ir extends Hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gg=0;const pn=new _e,$o=new ln,Rr=new X,tn=new Ks,Es=new Ks,Ee=new X;class dr extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ed(t)?od:ad)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Bt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return $o.lookAt(t),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ir(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(tn.min,Es.min),tn.expandByPoint(Ee),Ee.addVectors(tn.max,Es.max),tn.expandByPoint(Ee)):(tn.expandByPoint(Es.min),tn.expandByPoint(Es.max))}tn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ee.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ee));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ee.fromBufferAttribute(o,c),l&&(Rr.fromBufferAttribute(t,c),Ee.add(Rr)),r=Math.max(r,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new X,l[P]=new X;const c=new X,u=new X,f=new X,h=new Xt,p=new Xt,g=new Xt,_=new X,m=new X;function d(P,x,M){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,x),f.fromBufferAttribute(n,M),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,x),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),o[P].add(_),o[x].add(_),o[M].add(_),l[P].add(m),l[x].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let P=0,x=T.length;P<x;++P){const M=T[P],L=M.start,k=M.count;for(let O=L,q=L+k;O<q;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new X,v=new X,b=new X,w=new X;function A(P){b.fromBufferAttribute(r,P),w.copy(b);const x=o[P];y.copy(x),y.sub(b.multiplyScalar(b.dot(x))).normalize(),v.crossVectors(w,x);const L=v.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,x=T.length;P<x;++P){const M=T[P],L=M.start,k=M.count;for(let O=L,q=L+k;O<q;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,f=new X;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new Hn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new dr,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=t(h,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qu=new _e,zi=new rd,ma=new Vc,tf=new X,_a=new X,ga=new X,va=new X,qo=new X,xa=new X,ef=new X,Sa=new X;class Cn extends ln{constructor(t=new dr,e=new Wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){xa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(qo.fromBufferAttribute(f,t),a?xa.addScaledVector(qo,u):xa.addScaledVector(qo.sub(e),u))}e.add(xa)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),zi.copy(t.ray).recast(t.near),!(ma.containsPoint(zi.origin)===!1&&(zi.intersectSphere(ma,tf)===null||zi.origin.distanceToSquared(tf)>(t.far-t.near)**2))&&(Qu.copy(s).invert(),zi.copy(t.ray).applyMatrix4(Qu),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=a[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,b=y;v<b;v+=3){const w=o.getX(v),A=o.getX(v+1),P=o.getX(v+2);r=Ma(this,d,t,n,c,u,f,w,A,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);r=Ma(this,a,t,n,c,u,f,T,y,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=a[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,b=y;v<b;v+=3){const w=v,A=v+1,P=v+2;r=Ma(this,d,t,n,c,u,f,w,A,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=m,y=m+1,v=m+2;r=Ma(this,a,t,n,c,u,f,T,y,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function vg(i,t,e,n,r,s,a,o){let l;if(t.side===Xe?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===Di,o),l===null)return null;Sa.copy(o),Sa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Sa);return c<e.near||c>e.far?null:{distance:c,point:Sa.clone(),object:i}}function Ma(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,_a),i.getVertexPosition(l,ga),i.getVertexPosition(c,va);const u=vg(i,t,e,n,_a,ga,va,ef);if(u){const f=new X;An.getBarycoord(ef,_a,ga,va,f),r&&(u.uv=An.getInterpolatedAttribute(r,o,l,c,f,new Xt)),s&&(u.uv1=An.getInterpolatedAttribute(s,o,l,c,f,new Xt)),a&&(u.normal=An.getInterpolatedAttribute(a,o,l,c,f,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new X,materialIndex:0};An.getNormal(_a,ga,va,h.normal),u.face=h,u.barycoord=f}return u}class Js extends dr{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ir(c,3)),this.setAttribute("normal",new ir(u,3)),this.setAttribute("uv",new ir(f,2));function g(_,m,d,T,y,v,b,w,A,P,x){const M=v/A,L=b/P,k=v/2,O=b/2,q=w/2,$=A+1,V=P+1;let Y=0,W=0;const ot=new X;for(let U=0;U<V;U++){const C=U*L-O;for(let nt=0;nt<$;nt++){const lt=nt*M-k;ot[_]=lt*T,ot[m]=C*y,ot[d]=q,c.push(ot.x,ot.y,ot.z),ot[_]=0,ot[m]=0,ot[d]=w>0?1:-1,u.push(ot.x,ot.y,ot.z),f.push(nt/A),f.push(1-U/P),Y+=1}}for(let U=0;U<P;U++)for(let C=0;C<A;C++){const nt=h+C+$*U,lt=h+C+$*(U+1),B=h+(C+1)+$*(U+1),j=h+(C+1)+$*U;l.push(nt,lt,j),l.push(lt,B,j),W+=6}o.addGroup(p,W,x),p+=W,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function is(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=is(i[e]);for(const r in n)t[r]=n[r]}return t}function xg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ld(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Sg={clone:is,merge:Oe};var Mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends mo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mg,this.fragmentShader=yg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=xg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class cd extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new X,nf=new Xt,rf=new Xt;class bn extends cd{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rc*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,nf,rf),e.subVectors(rf,nf)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ao*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Cr=-90,Pr=1;class Eg extends ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(Cr,Pr,t,e);r.layers=this.layers,this.add(r);const s=new bn(Cr,Pr,t,e);s.layers=this.layers,this.add(s);const a=new bn(Cr,Pr,t,e);a.layers=this.layers,this.add(a);const o=new bn(Cr,Pr,t,e);o.layers=this.layers,this.add(o);const l=new bn(Cr,Pr,t,e);l.layers=this.layers,this.add(l);const c=new bn(Cr,Pr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(f,h,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ud extends $e{constructor(t,e,n,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Jr,super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tg extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new ud(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Te}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Js(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:wi});s.uniforms.tEquirect.value=e;const a=new Cn(r,s),o=e.minFilter;return e.minFilter===Ji&&(e.minFilter=Te),new Eg(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class ya extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bg={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ya;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class sf extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const jo=new X,wg=new X,Ag=new Bt;class Xi{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=jo.subVectors(n,e).cross(wg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(jo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ag.getNormalMatrix(t),r=this.coplanarPoint(jo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Vc,Ea=new X;class fd{constructor(t=new Xi,e=new Xi,n=new Xi,r=new Xi,s=new Xi,a=new Xi){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],T=r[13],y=r[14],v=r[15];if(n[0].setComponents(l-s,h-c,m-p,v-d).normalize(),n[1].setComponents(l+s,h+c,m+p,v+d).normalize(),n[2].setComponents(l+a,h+u,m+g,v+T).normalize(),n[3].setComponents(l-a,h-u,m-g,v-T).normalize(),n[4].setComponents(l-o,h-f,m-_,v-y).normalize(),e===ri)n[5].setComponents(l+o,h+f,m+_,v+y).normalize();else if(e===ja)n[5].setComponents(o,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ea.x=r.normal.x>0?t.max.x:t.min.x,Ea.y=r.normal.y>0?t.max.y:t.min.y,Ea.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hd extends $e{constructor(t,e,n,r,s,a,o,l,c,u=Vr){if(u!==Vr&&u!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Vr&&(n=lr),n===void 0&&u===es&&(n=ts),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class rs extends dr{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=t/o,h=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const T=d*h-a;for(let y=0;y<c;y++){const v=y*f-s;g.push(v,-T,0),_.push(0,0,1),m.push(y/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){const y=T+c*d,v=T+c*(d+1),b=T+1+c*(d+1),w=T+1+c*d;p.push(y,v,w),p.push(v,b,w)}this.setIndex(p),this.setAttribute("position",new ir(g,3)),this.setAttribute("normal",new ir(_,3)),this.setAttribute("uv",new ir(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Rg extends mo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cg extends mo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class sc extends cd{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Pg extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const af=new _e;class Dg{constructor(t,e,n=0,r=1/0){this.ray=new rd(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Gc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return af.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(af),this}intersectObject(t,e=!0,n=[]){return ac(t,this,n,e),n.sort(of),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)ac(t[r],this,n,e);return n.sort(of),n}}function of(i,t){return i.distance-t.distance}function ac(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)ac(s[a],t,e,!0)}}function lf(i,t,e,n){const r=Lg(n);switch(e){case qh:return i*t;case jh:return i*t;case Zh:return i*t*2;case Kh:return i*t/r.components*r.byteLength;case zc:return i*t/r.components*r.byteLength;case Jh:return i*t*2/r.components*r.byteLength;case kc:return i*t*2/r.components*r.byteLength;case Yh:return i*t*3/r.components*r.byteLength;case He:return i*t*4/r.components*r.byteLength;case Hc:return i*t*4/r.components*r.byteLength;case Ua:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Na:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ul:case Nl:return Math.max(i,16)*Math.max(t,8)/4;case Ll:case Il:return Math.max(i,8)*Math.max(t,8)/2;case Fl:case Ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $l:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ql:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Oa:case Ql:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qh:case ec:return Math.ceil(i/4)*Math.ceil(t/4)*8;case nc:case ic:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lg(i){switch(i){case oi:case Wh:return{byteLength:1,components:1};case Ns:case Xh:case Ys:return{byteLength:2,components:1};case Oc:case Bc:return{byteLength:2,components:4};case lr:case Fc:case ii:return{byteLength:4,components:1};case $h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dd(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Ug(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Ig=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ng=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Og=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$g=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,av=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ov=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uv="gl_FragColor = linearToOutputTexel( gl_FragColor );",fv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_v=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ev=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Av=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Iv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ov=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$v=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,i0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,c0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,g0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,v0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,x0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,M0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,E0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,A0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,L0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const U0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,k0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,H0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,J0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ex=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ax=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ox=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ux=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:Ig,alphahash_pars_fragment:Ng,alphamap_fragment:Fg,alphamap_pars_fragment:Og,alphatest_fragment:Bg,alphatest_pars_fragment:zg,aomap_fragment:kg,aomap_pars_fragment:Hg,batching_pars_vertex:Vg,batching_vertex:Gg,begin_vertex:Wg,beginnormal_vertex:Xg,bsdfs:$g,iridescence_fragment:qg,bumpmap_pars_fragment:Yg,clipping_planes_fragment:jg,clipping_planes_pars_fragment:Zg,clipping_planes_pars_vertex:Kg,clipping_planes_vertex:Jg,color_fragment:Qg,color_pars_fragment:tv,color_pars_vertex:ev,color_vertex:nv,common:iv,cube_uv_reflection_fragment:rv,defaultnormal_vertex:sv,displacementmap_pars_vertex:av,displacementmap_vertex:ov,emissivemap_fragment:lv,emissivemap_pars_fragment:cv,colorspace_fragment:uv,colorspace_pars_fragment:fv,envmap_fragment:hv,envmap_common_pars_fragment:dv,envmap_pars_fragment:pv,envmap_pars_vertex:mv,envmap_physical_pars_fragment:wv,envmap_vertex:_v,fog_vertex:gv,fog_pars_vertex:vv,fog_fragment:xv,fog_pars_fragment:Sv,gradientmap_pars_fragment:Mv,lightmap_pars_fragment:yv,lights_lambert_fragment:Ev,lights_lambert_pars_fragment:Tv,lights_pars_begin:bv,lights_toon_fragment:Av,lights_toon_pars_fragment:Rv,lights_phong_fragment:Cv,lights_phong_pars_fragment:Pv,lights_physical_fragment:Dv,lights_physical_pars_fragment:Lv,lights_fragment_begin:Uv,lights_fragment_maps:Iv,lights_fragment_end:Nv,logdepthbuf_fragment:Fv,logdepthbuf_pars_fragment:Ov,logdepthbuf_pars_vertex:Bv,logdepthbuf_vertex:zv,map_fragment:kv,map_pars_fragment:Hv,map_particle_fragment:Vv,map_particle_pars_fragment:Gv,metalnessmap_fragment:Wv,metalnessmap_pars_fragment:Xv,morphinstance_vertex:$v,morphcolor_vertex:qv,morphnormal_vertex:Yv,morphtarget_pars_vertex:jv,morphtarget_vertex:Zv,normal_fragment_begin:Kv,normal_fragment_maps:Jv,normal_pars_fragment:Qv,normal_pars_vertex:t0,normal_vertex:e0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:i0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:s0,iridescence_pars_fragment:a0,opaque_fragment:o0,packing:l0,premultiplied_alpha_fragment:c0,project_vertex:u0,dithering_fragment:f0,dithering_pars_fragment:h0,roughnessmap_fragment:d0,roughnessmap_pars_fragment:p0,shadowmap_pars_fragment:m0,shadowmap_pars_vertex:_0,shadowmap_vertex:g0,shadowmask_pars_fragment:v0,skinbase_vertex:x0,skinning_pars_vertex:S0,skinning_vertex:M0,skinnormal_vertex:y0,specularmap_fragment:E0,specularmap_pars_fragment:T0,tonemapping_fragment:b0,tonemapping_pars_fragment:w0,transmission_fragment:A0,transmission_pars_fragment:R0,uv_pars_fragment:C0,uv_pars_vertex:P0,uv_vertex:D0,worldpos_vertex:L0,background_vert:U0,background_frag:I0,backgroundCube_vert:N0,backgroundCube_frag:F0,cube_vert:O0,cube_frag:B0,depth_vert:z0,depth_frag:k0,distanceRGBA_vert:H0,distanceRGBA_frag:V0,equirect_vert:G0,equirect_frag:W0,linedashed_vert:X0,linedashed_frag:$0,meshbasic_vert:q0,meshbasic_frag:Y0,meshlambert_vert:j0,meshlambert_frag:Z0,meshmatcap_vert:K0,meshmatcap_frag:J0,meshnormal_vert:Q0,meshnormal_frag:tx,meshphong_vert:ex,meshphong_frag:nx,meshphysical_vert:ix,meshphysical_frag:rx,meshtoon_vert:sx,meshtoon_frag:ax,points_vert:ox,points_frag:lx,shadow_vert:cx,shadow_frag:ux,sprite_vert:fx,sprite_frag:hx},ct={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Nn={basic:{uniforms:Oe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Oe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Qt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Oe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Oe([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Oe([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Qt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Oe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Oe([ct.points,ct.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Oe([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Oe([ct.common,ct.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Oe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Oe([ct.sprite,ct.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Oe([ct.common,ct.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Oe([ct.lights,ct.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Nn.physical={uniforms:Oe([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Ta={r:0,b:0,g:0},Hi=new li,dx=new _e;function px(i,t,e,n,r,s,a){const o=new Qt(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const b=g(y);b===null?d(o,l):b&&b.isColor&&(d(b,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){const b=g(v);b&&(b.isCubeTexture||b.mapping===po)?(u===void 0&&(u=new Cn(new Js(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:is(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Hi.copy(v.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dx.makeRotationFromEuler(Hi)),u.material.toneMapped=jt.getTransfer(b.colorSpace)!==te,(f!==b||h!==b.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Cn(new rs(2,2),new ci({name:"BackgroundMaterial",uniforms:is(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=jt.getTransfer(b.colorSpace)!==te,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,v){y.getRGB(Ta,ld(i)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,v,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:_,addToRenderList:m,dispose:T}}function mx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(M,L,k,O,q){let $=!1;const V=f(O,k,L);s!==V&&(s=V,c(s.object)),$=p(M,O,k,q),$&&g(M,O,k,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,v(M,L,k,O),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function f(M,L,k){const O=k.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let $=q[L.id];$===void 0&&($={},q[L.id]=$);let V=$[O];return V===void 0&&(V=h(l()),$[O]=V),V}function h(M){const L=[],k=[],O=[];for(let q=0;q<e;q++)L[q]=0,k[q]=0,O[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,L,k,O){const q=s.attributes,$=L.attributes;let V=0;const Y=k.getAttributes();for(const W in Y)if(Y[W].location>=0){const U=q[W];let C=$[W];if(C===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(C=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(C=M.instanceColor)),U===void 0||U.attribute!==C||C&&U.data!==C.data)return!0;V++}return s.attributesNum!==V||s.index!==O}function g(M,L,k,O){const q={},$=L.attributes;let V=0;const Y=k.getAttributes();for(const W in Y)if(Y[W].location>=0){let U=$[W];U===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(U=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(U=M.instanceColor));const C={};C.attribute=U,U&&U.data&&(C.data=U.data),q[W]=C,V++}s.attributes=q,s.attributesNum=V,s.index=O}function _(){const M=s.newAttributes;for(let L=0,k=M.length;L<k;L++)M[L]=0}function m(M){d(M,0)}function d(M,L){const k=s.newAttributes,O=s.enabledAttributes,q=s.attributeDivisors;k[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),q[M]!==L&&(i.vertexAttribDivisor(M,L),q[M]=L)}function T(){const M=s.newAttributes,L=s.enabledAttributes;for(let k=0,O=L.length;k<O;k++)L[k]!==M[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function y(M,L,k,O,q,$,V){V===!0?i.vertexAttribIPointer(M,L,k,q,$):i.vertexAttribPointer(M,L,k,O,q,$)}function v(M,L,k,O){_();const q=O.attributes,$=k.getAttributes(),V=L.defaultAttributeValues;for(const Y in $){const W=$[Y];if(W.location>=0){let ot=q[Y];if(ot===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),ot!==void 0){const U=ot.normalized,C=ot.itemSize,nt=t.get(ot);if(nt===void 0)continue;const lt=nt.buffer,B=nt.type,j=nt.bytesPerElement,it=B===i.INT||B===i.UNSIGNED_INT||ot.gpuType===Fc;if(ot.isInterleavedBufferAttribute){const K=ot.data,at=K.stride,Tt=ot.offset;if(K.isInstancedInterleavedBuffer){for(let pt=0;pt<W.locationSize;pt++)d(W.location+pt,K.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let pt=0;pt<W.locationSize;pt++)m(W.location+pt);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let pt=0;pt<W.locationSize;pt++)y(W.location+pt,C/W.locationSize,B,U,at*j,(Tt+C/W.locationSize*pt)*j,it)}else{if(ot.isInstancedBufferAttribute){for(let K=0;K<W.locationSize;K++)d(W.location+K,ot.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let K=0;K<W.locationSize;K++)m(W.location+K);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let K=0;K<W.locationSize;K++)y(W.location+K,C/W.locationSize,B,U,C*j,C/W.locationSize*K*j,it)}}else if(V!==void 0){const U=V[Y];if(U!==void 0)switch(U.length){case 2:i.vertexAttrib2fv(W.location,U);break;case 3:i.vertexAttrib3fv(W.location,U);break;case 4:i.vertexAttrib4fv(W.location,U);break;default:i.vertexAttrib1fv(W.location,U)}}}}T()}function b(){P();for(const M in n){const L=n[M];for(const k in L){const O=L[k];for(const q in O)u(O[q].object),delete O[q];delete L[k]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const k in L){const O=L[k];for(const q in O)u(O[q].object),delete O[q];delete L[k]}delete n[M.id]}function A(M){for(const L in n){const k=n[L];if(k[M.id]===void 0)continue;const O=k[M.id];for(const q in O)u(O[q].object),delete O[q];delete k[M.id]}}function P(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:x,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function _x(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];e.update(p,n,1)}function l(c,u,f,h){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function gx(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==He&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===Ys&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==oi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ii&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:b,maxSamples:w}}function vx(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Xi,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||r;return r=h,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,y=T*4;let v=d.clippingState||null;l.value=v,v=u(g,h,y,p);for(let b=0;b!==y;++b)v[b]=e[b];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,v=p;y!==_;++y,v+=4)a.copy(f[y]).applyMatrix4(T,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function xx(i){let t=new WeakMap;function e(a,o){return o===Rl?a.mapping=Jr:o===Cl&&(a.mapping=Qr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rl||o===Cl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Tg(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Fr=4,cf=[.125,.215,.35,.446,.526,.582],ji=20,Zo=new sc,uf=new Qt;let Ko=null,Jo=0,Qo=0,tl=!1;const $i=(1+Math.sqrt(5))/2,Dr=1/$i,ff=[new X(-$i,Dr,0),new X($i,Dr,0),new X(-Dr,0,$i),new X(Dr,0,$i),new X(0,$i,-Dr),new X(0,$i,Dr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class hf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Ko=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ko,Jo,Qo),this._renderer.xr.enabled=tl,t.scissorTest=!1,ba(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Jr||t.mapping===Qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ko=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Te,minFilter:Te,generateMipmaps:!1,type:Ys,format:He,colorSpace:ns,depthBuffer:!1},r=df(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sx(s)),this._blurMaterial=Mx(s,t,e)}return r}_compileMaterial(t){const e=new Cn(this._lodPlanes[0],t);this._renderer.compile(e,Zo)}_sceneToCubeUV(t,e,n,r){const o=new bn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(uf),u.toneMapping=Ai,u.autoClear=!1;const p=new Wc({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new Cn(new Js,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(uf),_=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):T===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const y=this._cubeSize;ba(r,T*y,d>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Jr||t.mapping===Qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Cn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ba(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Zo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ff[(r-s-1)%ff.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Cn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ji-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ji;m>ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);const d=[];let T=0;for(let A=0;A<ji;++A){const P=A/_,x=Math.exp(-P*P/2);d.push(x),A===0?T+=x:A<m&&(T+=2*x)}for(let A=0;A<d.length;A++)d[A]=d[A]/T;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const v=this._sizeLods[r],b=3*v*(r>y-Fr?r-y+Fr:0),w=4*(this._cubeSize-v);ba(e,b,w,3*v,2*v),l.setRenderTarget(e),l.render(f,Zo)}}function Sx(i){const t=[],e=[],n=[];let r=i;const s=i-Fr+1+cf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Fr?l=cf[a-i+Fr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,d=1,T=new Float32Array(_*g*p),y=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,P=w>2?0:-1,x=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];T.set(x,_*g*w),y.set(h,m*g*w);const M=[w,w,w,w,w,w];v.set(M,d*g*w)}const b=new dr;b.setAttribute("position",new Hn(T,_)),b.setAttribute("uv",new Hn(y,m)),b.setAttribute("faceIndex",new Hn(v,d)),t.push(b),r>Fr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function df(i,t,e){const n=new Rn(i,t,e);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ba(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Mx(i,t,e){const n=new Float32Array(ji),r=new X(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function pf(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function mf(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yx(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Rl||l===Cl,u=l===Jr||l===Qr;if(c||u){let f=t.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new hf(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new hf(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ex(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ir("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Tx(i,t,e,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(t.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)t.update(h[p],i.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let y=0,v=T.length;y<v;y+=3){const b=T[y+0],w=T[y+1],A=T[y+2];h.push(b,w,w,A,A,b)}}else if(g!==void 0){const T=g.array;_=g.version;for(let y=0,v=T.length/3-1;y<v;y+=3){const b=y+0,w=y+1,A=y+2;h.push(b,w,w,A,A,b)}}else return;const m=new(ed(h)?od:ad)(h,1);m.version=_;const d=s.get(f);d&&t.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function bx(i,t,e){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){i.drawElements(n,p,s,h*a),e.update(p,n,1)}function c(h,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,h*a,g),e.update(p,n,g))}function u(h,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function f(h,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,h,0,_,0,g);let d=0;for(let T=0;T<g;T++)d+=p[T]*_[T];e.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function wx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Ax(i,t,e){const n=new WeakMap,r=new me;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let b=o.attributes.position.count*v,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const A=new Float32Array(b*w*4*f),P=new id(A,b,w,f);P.type=ii,P.needsUpdate=!0;const x=v*4;for(let L=0;L<f;L++){const k=d[L],O=T[L],q=y[L],$=b*w*4*L;for(let V=0;V<k.count;V++){const Y=V*x;g===!0&&(r.fromBufferAttribute(k,V),A[$+Y+0]=r.x,A[$+Y+1]=r.y,A[$+Y+2]=r.z,A[$+Y+3]=0),_===!0&&(r.fromBufferAttribute(O,V),A[$+Y+4]=r.x,A[$+Y+5]=r.y,A[$+Y+6]=r.z,A[$+Y+7]=0),m===!0&&(r.fromBufferAttribute(q,V),A[$+Y+8]=r.x,A[$+Y+9]=r.y,A[$+Y+10]=r.z,A[$+Y+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new Xt(b,w)},n.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Rx(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const pd=new $e,_f=new hd(1,1),md=new id,_d=new og,gd=new ud,gf=[],vf=[],xf=new Float32Array(16),Sf=new Float32Array(9),Mf=new Float32Array(4);function gs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=gf[r];if(s===void 0&&(s=new Float32Array(r),gf[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _o(i,t){let e=vf[t];e===void 0&&(e=new Int32Array(t),vf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Px(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function Dx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function Lx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Ux(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;Mf.set(n),i.uniformMatrix2fv(this.addr,!1,Mf),ye(e,n)}}function Ix(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;Sf.set(n),i.uniformMatrix3fv(this.addr,!1,Sf),ye(e,n)}}function Nx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Me(e,n))return;xf.set(n),i.uniformMatrix4fv(this.addr,!1,xf),ye(e,n)}}function Fx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ox(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function Bx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function zx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function kx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function Vx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function Gx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function Wx(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(_f.compareFunction=td,s=_f):s=pd,e.setTexture2D(t||s,r)}function Xx(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||_d,r)}function $x(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||gd,r)}function qx(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||md,r)}function Yx(i){switch(i){case 5126:return Cx;case 35664:return Px;case 35665:return Dx;case 35666:return Lx;case 35674:return Ux;case 35675:return Ix;case 35676:return Nx;case 5124:case 35670:return Fx;case 35667:case 35671:return Ox;case 35668:case 35672:return Bx;case 35669:case 35673:return zx;case 5125:return kx;case 36294:return Hx;case 36295:return Vx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return qx}}function jx(i,t){i.uniform1fv(this.addr,t)}function Zx(i,t){const e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function Kx(i,t){const e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function Jx(i,t){const e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function Qx(i,t){const e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tS(i,t){const e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function eS(i,t){const e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function nS(i,t){i.uniform1iv(this.addr,t)}function iS(i,t){i.uniform2iv(this.addr,t)}function rS(i,t){i.uniform3iv(this.addr,t)}function sS(i,t){i.uniform4iv(this.addr,t)}function aS(i,t){i.uniform1uiv(this.addr,t)}function oS(i,t){i.uniform2uiv(this.addr,t)}function lS(i,t){i.uniform3uiv(this.addr,t)}function cS(i,t){i.uniform4uiv(this.addr,t)}function uS(i,t,e){const n=this.cache,r=t.length,s=_o(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||pd,s[a])}function fS(i,t,e){const n=this.cache,r=t.length,s=_o(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||_d,s[a])}function hS(i,t,e){const n=this.cache,r=t.length,s=_o(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||gd,s[a])}function dS(i,t,e){const n=this.cache,r=t.length,s=_o(e,r);Me(n,s)||(i.uniform1iv(this.addr,s),ye(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||md,s[a])}function pS(i){switch(i){case 5126:return jx;case 35664:return Zx;case 35665:return Kx;case 35666:return Jx;case 35674:return Qx;case 35675:return tS;case 35676:return eS;case 5124:case 35670:return nS;case 35667:case 35671:return iS;case 35668:case 35672:return rS;case 35669:case 35673:return sS;case 5125:return aS;case 36294:return oS;case 36295:return lS;case 36296:return cS;case 35678:case 36198:case 36298:case 36306:case 35682:return uS;case 35679:case 36299:case 36307:return fS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return dS}}class mS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yx(e.type)}}class _S{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pS(e.type)}}class gS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const el=/(\w+)(\])?(\[|\.)?/g;function yf(i,t){i.seq.push(t),i.map[t.id]=t}function vS(i,t,e){const n=i.name,r=n.length;for(el.lastIndex=0;;){const s=el.exec(n),a=el.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){yf(e,c===void 0?new mS(o,i,t):new _S(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new gS(o),yf(e,f)),e=f}}}class Ba{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);vS(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Ef(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const xS=37297;let SS=0;function MS(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Tf=new Bt;function yS(i){jt._getMatrix(Tf,jt.workingColorSpace,i);const t=`mat3( ${Tf.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case Ya:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+MS(i.getShaderSource(t),a)}else return r}function ES(i,t){const e=yS(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function TS(i,t){let e;switch(t){case L_:e="Linear";break;case U_:e="Reinhard";break;case I_:e="Cineon";break;case N_:e="ACESFilmic";break;case O_:e="AgX";break;case B_:e="Neutral";break;case F_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wa=new X;function bS(){jt.getLuminanceCoefficients(wa);const i=wa.x.toFixed(4),t=wa.y.toFixed(4),e=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function AS(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function RS(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function bs(i){return i!==""}function wf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Af(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const CS=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(i){return i.replace(CS,DS)}const PS=new Map;function DS(i,t){let e=kt[t];if(e===void 0){const n=PS.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return oc(e)}const LS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rf(i){return i.replace(LS,US)}function US(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function IS(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===f_?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function NS(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Jr:case Qr:t="ENVMAP_TYPE_CUBE";break;case po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function FS(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qr:t="ENVMAP_MODE_REFRACTION";break}return t}function OS(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vh:t="ENVMAP_BLENDING_MULTIPLY";break;case P_:t="ENVMAP_BLENDING_MIX";break;case D_:t="ENVMAP_BLENDING_ADD";break}return t}function BS(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zS(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=IS(e),c=NS(e),u=FS(e),f=OS(e),h=BS(e),p=wS(e),g=AS(s),_=r.createProgram();let m,d,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bs).join(`
`),d.length>0&&(d+=`
`)):(m=[Cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),d=[Cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?kt.tonemapping_pars_fragment:"",e.toneMapping!==Ai?TS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,ES("linearToOutputTexel",e.outputColorSpace),bS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),a=oc(a),a=wf(a,e),a=Af(a,e),o=oc(o),o=wf(o,e),o=Af(o,e),a=Rf(a),o=Rf(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=T+m+a,v=T+d+o,b=Ef(r,r.VERTEX_SHADER,y),w=Ef(r,r.FRAGMENT_SHADER,v);r.attachShader(_,b),r.attachShader(_,w),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(L){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(b).trim(),q=r.getShaderInfoLog(w).trim();let $=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,b,w);else{const Y=bf(r,b,"vertex"),W=bf(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+Y+`
`+W)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||q==="")&&(V=!1);V&&(L.diagnostics={runnable:$,programLog:k,vertexShader:{log:O,prefix:m},fragmentShader:{log:q,prefix:d}})}r.deleteShader(b),r.deleteShader(w),P=new Ba(r,_),x=RS(r,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,xS)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=SS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}let kS=0;class HS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new VS(t),e.set(t,n)),n}}class VS{constructor(t){this.id=kS++,this.code=t,this.usedTimes=0}}function GS(i,t,e,n,r,s,a){const o=new Gc,l=new HS,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,M,L,k,O){const q=k.fog,$=O.geometry,V=x.isMeshStandardMaterial?k.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||V),W=Y&&Y.mapping===po?Y.image.height:null,ot=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const U=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,C=U!==void 0?U.length:0;let nt=0;$.morphAttributes.position!==void 0&&(nt=1),$.morphAttributes.normal!==void 0&&(nt=2),$.morphAttributes.color!==void 0&&(nt=3);let lt,B,j,it;if(ot){const Jt=Nn[ot];lt=Jt.vertexShader,B=Jt.fragmentShader}else lt=x.vertexShader,B=x.fragmentShader,l.update(x),j=l.getVertexShaderID(x),it=l.getFragmentShaderID(x);const K=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),Tt=O.isInstancedMesh===!0,pt=O.isBatchedMesh===!0,Pt=!!x.map,Dt=!!x.matcap,wt=!!Y,D=!!x.aoMap,ee=!!x.lightMap,Lt=!!x.bumpMap,Ut=!!x.normalMap,Mt=!!x.displacementMap,$t=!!x.emissiveMap,vt=!!x.metalnessMap,R=!!x.roughnessMap,S=x.anisotropy>0,z=x.clearcoat>0,Q=x.dispersion>0,et=x.iridescence>0,J=x.sheen>0,bt=x.transmission>0,ut=S&&!!x.anisotropyMap,_t=z&&!!x.clearcoatMap,Ht=z&&!!x.clearcoatNormalMap,st=z&&!!x.clearcoatRoughnessMap,xt=et&&!!x.iridescenceMap,Rt=et&&!!x.iridescenceThicknessMap,It=J&&!!x.sheenColorMap,yt=J&&!!x.sheenRoughnessMap,Wt=!!x.specularMap,zt=!!x.specularColorMap,ie=!!x.specularIntensityMap,I=bt&&!!x.transmissionMap,ft=bt&&!!x.thicknessMap,Z=!!x.gradientMap,tt=!!x.alphaMap,mt=x.alphaTest>0,dt=!!x.alphaHash,Ot=!!x.extensions;let fe=Ai;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(fe=i.toneMapping);const Re={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:lt,fragmentShader:B,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:it,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:pt,batchingColor:pt&&O._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&O.instanceColor!==null,instancingMorph:Tt&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ns,alphaToCoverage:!!x.alphaToCoverage,map:Pt,matcap:Dt,envMap:wt,envMapMode:wt&&Y.mapping,envMapCubeUVHeight:W,aoMap:D,lightMap:ee,bumpMap:Lt,normalMap:Ut,displacementMap:h&&Mt,emissiveMap:$t,normalMapObjectSpace:Ut&&x.normalMapType===G_,normalMapTangentSpace:Ut&&x.normalMapType===V_,metalnessMap:vt,roughnessMap:R,anisotropy:S,anisotropyMap:ut,clearcoat:z,clearcoatMap:_t,clearcoatNormalMap:Ht,clearcoatRoughnessMap:st,dispersion:Q,iridescence:et,iridescenceMap:xt,iridescenceThicknessMap:Rt,sheen:J,sheenColorMap:It,sheenRoughnessMap:yt,specularMap:Wt,specularColorMap:zt,specularIntensityMap:ie,transmission:bt,transmissionMap:I,thicknessMap:ft,gradientMap:Z,opaque:x.transparent===!1&&x.blending===nr&&x.alphaToCoverage===!1,alphaMap:tt,alphaTest:mt,alphaHash:dt,combine:x.combine,mapUv:Pt&&_(x.map.channel),aoMapUv:D&&_(x.aoMap.channel),lightMapUv:ee&&_(x.lightMap.channel),bumpMapUv:Lt&&_(x.bumpMap.channel),normalMapUv:Ut&&_(x.normalMap.channel),displacementMapUv:Mt&&_(x.displacementMap.channel),emissiveMapUv:$t&&_(x.emissiveMap.channel),metalnessMapUv:vt&&_(x.metalnessMap.channel),roughnessMapUv:R&&_(x.roughnessMap.channel),anisotropyMapUv:ut&&_(x.anisotropyMap.channel),clearcoatMapUv:_t&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(x.sheenRoughnessMap.channel),specularMapUv:Wt&&_(x.specularMap.channel),specularColorMapUv:zt&&_(x.specularColorMap.channel),specularIntensityMapUv:ie&&_(x.specularIntensityMap.channel),transmissionMapUv:I&&_(x.transmissionMap.channel),thicknessMapUv:ft&&_(x.thicknessMap.channel),alphaMapUv:tt&&_(x.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ut||S),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(Pt||tt),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:at,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:nt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:Pt&&x.map.isVideoTexture===!0&&jt.getTransfer(x.map.colorSpace)===te,decodeVideoTextureEmissive:$t&&x.emissiveMap.isVideoTexture===!0&&jt.getTransfer(x.emissiveMap.colorSpace)===te,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ni,flipSided:x.side===Xe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ot&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&x.extensions.multiDraw===!0||pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function d(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)M.push(L),M.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(T(M,x),y(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function T(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function y(x,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){const M=g[x.type];let L;if(M){const k=Nn[M];L=Sg.clone(k.uniforms)}else L=x.uniforms;return L}function b(x,M){let L;for(let k=0,O=u.length;k<O;k++){const q=u[k];if(q.cacheKey===M){L=q,++L.usedTimes;break}}return L===void 0&&(L=new zS(i,M,x,s),u.push(L)),L}function w(x){if(--x.usedTimes===0){const M=u.indexOf(x);u[M]=u[u.length-1],u.pop(),x.destroy()}}function A(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:b,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:P}}function WS(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function XS(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Pf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Df(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,h,p,g,_,m){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),t++,d}function o(f,h,p,g,_,m){const d=a(f,h,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):e.push(d)}function l(f,h,p,g,_,m){const d=a(f,h,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function c(f,h){e.length>1&&e.sort(f||XS),n.length>1&&n.sort(h||Pf),r.length>1&&r.sort(h||Pf)}function u(){for(let f=t,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function $S(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Df,i.set(n,[a])):r>=s.length?(a=new Df,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function qS(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new Qt};break;case"SpotLight":e={position:new X,direction:new X,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new X,halfWidth:new X,halfHeight:new X};break}return i[t.id]=e,e}}}function YS(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let jS=0;function ZS(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function KS(i){const t=new qS,e=YS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const r=new X,s=new _e,a=new _e;function o(c){let u=0,f=0,h=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,T=0,y=0,v=0,b=0,w=0,A=0;c.sort(ZS);for(let x=0,M=c.length;x<M;x++){const L=c[x],k=L.color,O=L.intensity,q=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=k.r*O,f+=k.g*O,h+=k.b*O;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],O);A++}else if(L.isDirectionalLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,W=e.get(L);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=L.shadow.matrix,T++}n.directional[p]=V,p++}else if(L.isSpotLight){const V=t.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(k).multiplyScalar(O),V.distance=q,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[_]=V;const Y=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,Y.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=Y.matrix,L.castShadow){const W=e.get(L);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=$,v++}_++}else if(L.isRectAreaLight){const V=t.get(L);V.color.copy(k).multiplyScalar(O),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=V,m++}else if(L.isPointLight){const V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const Y=L.shadow,W=e.get(L);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=V,g++}else if(L.isHemisphereLight){const V=t.get(L);V.skyColor.copy(L.color).multiplyScalar(O),V.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[d]=V,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==T||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==b||P.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=T,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=b,P.numLightProbes=A,n.version=jS++)}function l(c,u){let f=0,h=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const y=c[d];if(y.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(y.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Lf(i){const t=new KS(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function JS(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Lf(i),t.set(r,[o])):s>=a.length?(o=new Lf(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const QS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eM(i,t,e){let n=new fd;const r=new Xt,s=new Xt,a=new me,o=new Rg({depthPacking:H_}),l=new Cg,c={},u=e.maxTextureSize,f={[Di]:Xe,[Xe]:Di,[ni]:ni},h=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:QS,fragmentShader:tM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new dr;g.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Cn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hh;let d=this.type;this.render=function(w,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const x=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(wi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=d!==Kn&&this.type===Kn,q=d===Kn&&this.type!==Kn;for(let $=0,V=w.length;$<V;$++){const Y=w[$],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ot=W.getFrameExtents();if(r.multiply(ot),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ot.x),r.x=s.x*ot.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ot.y),r.y=s.y*ot.y,W.mapSize.y=s.y)),W.map===null||O===!0||q===!0){const C=this.type!==Kn?{minFilter:Pn,magFilter:Pn}:{};W.map!==null&&W.map.dispose(),W.map=new Rn(r.x,r.y,C),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const U=W.getViewportCount();for(let C=0;C<U;C++){const nt=W.getViewport(C);a.set(s.x*nt.x,s.y*nt.y,s.x*nt.z,s.y*nt.w),k.viewport(a),W.updateMatrices(Y,C),n=W.getFrustum(),v(A,P,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Kn&&T(W,P),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(x,M,L)};function T(w,A){const P=t.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Rn(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,P,h,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,P,p,_,null)}function y(w,A,P,x){let M=null;const L=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=M.uuid,O=A.uuid;let q=c[k];q===void 0&&(q={},c[k]=q);let $=q[O];$===void 0&&($=M.clone(),q[O]=$,A.addEventListener("dispose",b)),M=$}if(M.visible=A.visible,M.wireframe=A.wireframe,x===Kn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=i.properties.get(M);k.light=P}return M}function v(w,A,P,x,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Kn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const O=t.update(w),q=w.material;if(Array.isArray(q)){const $=O.groups;for(let V=0,Y=$.length;V<Y;V++){const W=$[V],ot=q[W.materialIndex];if(ot&&ot.visible){const U=y(w,ot,x,M);w.onBeforeShadow(i,w,A,P,O,U,W),i.renderBufferDirect(P,null,O,U,w,W),w.onAfterShadow(i,w,A,P,O,U,W)}}}else if(q.visible){const $=y(w,q,x,M);w.onBeforeShadow(i,w,A,P,O,$,null),i.renderBufferDirect(P,null,O,$,w,null),w.onAfterShadow(i,w,A,P,O,$,null)}}const k=w.children;for(let O=0,q=k.length;O<q;O++)v(k[O],A,P,x,M)}function b(w){w.target.removeEventListener("dispose",b);for(const P in c){const x=c[P],M=w.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const nM={[Ml]:yl,[El]:wl,[Tl]:Al,[Kr]:bl,[yl]:Ml,[wl]:El,[Al]:Tl,[bl]:Kr};function iM(i,t){function e(){let I=!1;const ft=new me;let Z=null;const tt=new me(0,0,0,0);return{setMask:function(mt){Z!==mt&&!I&&(i.colorMask(mt,mt,mt,mt),Z=mt)},setLocked:function(mt){I=mt},setClear:function(mt,dt,Ot,fe,Re){Re===!0&&(mt*=fe,dt*=fe,Ot*=fe),ft.set(mt,dt,Ot,fe),tt.equals(ft)===!1&&(i.clearColor(mt,dt,Ot,fe),tt.copy(ft))},reset:function(){I=!1,Z=null,tt.set(-1,0,0,0)}}}function n(){let I=!1,ft=!1,Z=null,tt=null,mt=null;return{setReversed:function(dt){if(ft!==dt){const Ot=t.get("EXT_clip_control");ft?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const fe=mt;mt=null,this.setClear(fe)}ft=dt},getReversed:function(){return ft},setTest:function(dt){dt?K(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(dt){Z!==dt&&!I&&(i.depthMask(dt),Z=dt)},setFunc:function(dt){if(ft&&(dt=nM[dt]),tt!==dt){switch(dt){case Ml:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case El:i.depthFunc(i.LESS);break;case Kr:i.depthFunc(i.LEQUAL);break;case Tl:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case wl:i.depthFunc(i.GREATER);break;case Al:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=dt}},setLocked:function(dt){I=dt},setClear:function(dt){mt!==dt&&(ft&&(dt=1-dt),i.clearDepth(dt),mt=dt)},reset:function(){I=!1,Z=null,tt=null,mt=null,ft=!1}}}function r(){let I=!1,ft=null,Z=null,tt=null,mt=null,dt=null,Ot=null,fe=null,Re=null;return{setTest:function(Jt){I||(Jt?K(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(Jt){ft!==Jt&&!I&&(i.stencilMask(Jt),ft=Jt)},setFunc:function(Jt,Sn,Xn){(Z!==Jt||tt!==Sn||mt!==Xn)&&(i.stencilFunc(Jt,Sn,Xn),Z=Jt,tt=Sn,mt=Xn)},setOp:function(Jt,Sn,Xn){(dt!==Jt||Ot!==Sn||fe!==Xn)&&(i.stencilOp(Jt,Sn,Xn),dt=Jt,Ot=Sn,fe=Xn)},setLocked:function(Jt){I=Jt},setClear:function(Jt){Re!==Jt&&(i.clearStencil(Jt),Re=Jt)},reset:function(){I=!1,ft=null,Z=null,tt=null,mt=null,dt=null,Ot=null,fe=null,Re=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,T=null,y=null,v=null,b=null,w=null,A=new Qt(0,0,0),P=0,x=!1,M=null,L=null,k=null,O=null,q=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=Y>=2);let ot=null,U={};const C=i.getParameter(i.SCISSOR_BOX),nt=i.getParameter(i.VIEWPORT),lt=new me().fromArray(C),B=new me().fromArray(nt);function j(I,ft,Z,tt){const mt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(I,dt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<Z;Ot++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(ft+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return dt}const it={};it[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Kr),Lt(!1),Ut(Iu),K(i.CULL_FACE),D(wi);function K(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function at(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Tt(I,ft){return f[I]!==ft?(i.bindFramebuffer(I,ft),f[I]=ft,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ft),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function pt(I,ft){let Z=p,tt=!1;if(I){Z=h.get(ft),Z===void 0&&(Z=[],h.set(ft,Z));const mt=I.textures;if(Z.length!==mt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ot=mt.length;dt<Ot;dt++)Z[dt]=i.COLOR_ATTACHMENT0+dt;Z.length=mt.length,tt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,tt=!0);tt&&i.drawBuffers(Z)}function Pt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Dt={[Yi]:i.FUNC_ADD,[d_]:i.FUNC_SUBTRACT,[p_]:i.FUNC_REVERSE_SUBTRACT};Dt[m_]=i.MIN,Dt[__]=i.MAX;const wt={[g_]:i.ZERO,[v_]:i.ONE,[x_]:i.SRC_COLOR,[xl]:i.SRC_ALPHA,[b_]:i.SRC_ALPHA_SATURATE,[E_]:i.DST_COLOR,[M_]:i.DST_ALPHA,[S_]:i.ONE_MINUS_SRC_COLOR,[Sl]:i.ONE_MINUS_SRC_ALPHA,[T_]:i.ONE_MINUS_DST_COLOR,[y_]:i.ONE_MINUS_DST_ALPHA,[w_]:i.CONSTANT_COLOR,[A_]:i.ONE_MINUS_CONSTANT_COLOR,[R_]:i.CONSTANT_ALPHA,[C_]:i.ONE_MINUS_CONSTANT_ALPHA};function D(I,ft,Z,tt,mt,dt,Ot,fe,Re,Jt){if(I===wi){_===!0&&(at(i.BLEND),_=!1);return}if(_===!1&&(K(i.BLEND),_=!0),I!==h_){if(I!==m||Jt!==x){if((d!==Yi||v!==Yi)&&(i.blendEquation(i.FUNC_ADD),d=Yi,v=Yi),Jt)switch(I){case nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nu:i.blendFunc(i.ONE,i.ONE);break;case Fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ou:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ou:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,y=null,b=null,w=null,A.set(0,0,0),P=0,m=I,x=Jt}return}mt=mt||ft,dt=dt||Z,Ot=Ot||tt,(ft!==d||mt!==v)&&(i.blendEquationSeparate(Dt[ft],Dt[mt]),d=ft,v=mt),(Z!==T||tt!==y||dt!==b||Ot!==w)&&(i.blendFuncSeparate(wt[Z],wt[tt],wt[dt],wt[Ot]),T=Z,y=tt,b=dt,w=Ot),(fe.equals(A)===!1||Re!==P)&&(i.blendColor(fe.r,fe.g,fe.b,Re),A.copy(fe),P=Re),m=I,x=!1}function ee(I,ft){I.side===ni?at(i.CULL_FACE):K(i.CULL_FACE);let Z=I.side===Xe;ft&&(Z=!Z),Lt(Z),I.blending===nr&&I.transparent===!1?D(wi):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const tt=I.stencilWrite;o.setTest(tt),tt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),$t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function Ut(I){I!==c_?(K(i.CULL_FACE),I!==L&&(I===Iu?i.cullFace(i.BACK):I===u_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),L=I}function Mt(I){I!==k&&(V&&i.lineWidth(I),k=I)}function $t(I,ft,Z){I?(K(i.POLYGON_OFFSET_FILL),(O!==ft||q!==Z)&&(i.polygonOffset(ft,Z),O=ft,q=Z)):at(i.POLYGON_OFFSET_FILL)}function vt(I){I?K(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function R(I){I===void 0&&(I=i.TEXTURE0+$-1),ot!==I&&(i.activeTexture(I),ot=I)}function S(I,ft,Z){Z===void 0&&(ot===null?Z=i.TEXTURE0+$-1:Z=ot);let tt=U[Z];tt===void 0&&(tt={type:void 0,texture:void 0},U[Z]=tt),(tt.type!==I||tt.texture!==ft)&&(ot!==Z&&(i.activeTexture(Z),ot=Z),i.bindTexture(I,ft||it[I]),tt.type=I,tt.texture=ft)}function z(){const I=U[ot];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ht(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(I){lt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),lt.copy(I))}function yt(I){B.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),B.copy(I))}function Wt(I,ft){let Z=c.get(ft);Z===void 0&&(Z=new WeakMap,c.set(ft,Z));let tt=Z.get(I);tt===void 0&&(tt=i.getUniformBlockIndex(ft,I.name),Z.set(I,tt))}function zt(I,ft){const tt=c.get(ft).get(I);l.get(ft)!==tt&&(i.uniformBlockBinding(ft,tt,I.__bindingPointIndex),l.set(ft,tt))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ot=null,U={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,T=null,y=null,v=null,b=null,w=null,A=new Qt(0,0,0),P=0,x=!1,M=null,L=null,k=null,O=null,q=null,lt.set(0,0,i.canvas.width,i.canvas.height),B.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:at,bindFramebuffer:Tt,drawBuffers:pt,useProgram:Pt,setBlending:D,setMaterial:ee,setFlipSided:Lt,setCullFace:Ut,setLineWidth:Mt,setPolygonOffset:$t,setScissorTest:vt,activeTexture:R,bindTexture:S,unbindTexture:z,compressedTexImage2D:Q,compressedTexImage3D:et,texImage2D:xt,texImage3D:Rt,updateUBOMapping:Wt,uniformBlockBinding:zt,texStorage2D:Ht,texStorage3D:st,texSubImage2D:J,texSubImage3D:bt,compressedTexSubImage2D:ut,compressedTexSubImage3D:_t,scissor:It,viewport:yt,reset:ie}}function rM(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return p?new OffscreenCanvas(R,S):Za("canvas")}function _(R,S,z){let Q=1;const et=vt(R);if((et.width>z||et.height>z)&&(Q=z/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(Q*et.width),bt=Math.floor(Q*et.height);f===void 0&&(f=g(J,bt));const ut=S?g(J,bt):f;return ut.width=J,ut.height=bt,ut.getContext("2d").drawImage(R,0,0,J,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+bt+")."),ut}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,S,z,Q,et=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=S;if(S===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),S===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),S===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),S===i.RGBA){const bt=et?Ya:jt.getTransfer(Q);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=bt===te?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(R,S){let z;return R?S===null||S===lr||S===ts?z=i.DEPTH24_STENCIL8:S===ii?z=i.DEPTH32F_STENCIL8:S===Ns&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===lr||S===ts?z=i.DEPTH_COMPONENT24:S===ii?z=i.DEPTH_COMPONENT32F:S===Ns&&(z=i.DEPTH_COMPONENT16),z}function b(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Pn&&R.minFilter!==Te?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){const S=R.target;S.removeEventListener("dispose",w),P(S),S.isVideoTexture&&u.delete(S)}function A(R){const S=R.target;S.removeEventListener("dispose",A),M(S)}function P(R){const S=n.get(R);if(S.__webglInit===void 0)return;const z=R.source,Q=h.get(z);if(Q){const et=Q[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&x(R),Object.keys(Q).length===0&&h.delete(z)}n.remove(R)}function x(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const z=R.source,Q=h.get(z);delete Q[S.__cacheKey],a.memory.textures--}function M(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let et=0;et<S.__webglFramebuffer[Q].length;et++)i.deleteFramebuffer(S.__webglFramebuffer[Q][et]);else i.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[Q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=R.textures;for(let Q=0,et=z.length;Q<et;Q++){const J=n.get(z[Q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(z[Q])}n.remove(R)}let L=0;function k(){L=0}function O(){const R=L;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),L+=1,R}function q(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function $(R,S){const z=n.get(R);if(R.isVideoTexture&&Mt(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(z,R,S);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function V(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){B(z,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function Y(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){B(z,R,S);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function W(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){j(z,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}const ot={[Pl]:i.REPEAT,[Ki]:i.CLAMP_TO_EDGE,[Dl]:i.MIRRORED_REPEAT},U={[Pn]:i.NEAREST,[z_]:i.NEAREST_MIPMAP_NEAREST,[sa]:i.NEAREST_MIPMAP_LINEAR,[Te]:i.LINEAR,[wo]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},C={[W_]:i.NEVER,[Z_]:i.ALWAYS,[X_]:i.LESS,[td]:i.LEQUAL,[$_]:i.EQUAL,[j_]:i.GEQUAL,[q_]:i.GREATER,[Y_]:i.NOTEQUAL};function nt(R,S){if(S.type===ii&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Te||S.magFilter===wo||S.magFilter===sa||S.magFilter===Ji||S.minFilter===Te||S.minFilter===wo||S.minFilter===sa||S.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ot[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ot[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ot[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,U[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,U[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,C[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Pn||S.minFilter!==sa&&S.minFilter!==Ji||S.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function lt(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));const Q=S.source;let et=h.get(Q);et===void 0&&(et={},h.set(Q,et));const J=q(S);if(J!==R.__cacheKey){et[J]===void 0&&(et[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),et[J].usedTimes++;const bt=et[R.__cacheKey];bt!==void 0&&(et[R.__cacheKey].usedTimes--,bt.usedTimes===0&&x(S)),R.__cacheKey=J,R.__webglTexture=et[J].texture}return z}function B(R,S,z){let Q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=i.TEXTURE_3D);const et=lt(R,S),J=S.source;e.bindTexture(Q,R.__webglTexture,i.TEXTURE0+z);const bt=n.get(J);if(J.version!==bt.__version||et===!0){e.activeTexture(i.TEXTURE0+z);const ut=jt.getPrimaries(jt.workingColorSpace),_t=S.colorSpace===Mi?null:jt.getPrimaries(S.colorSpace),Ht=S.colorSpace===Mi||ut===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let st=_(S.image,!1,r.maxTextureSize);st=$t(S,st);const xt=s.convert(S.format,S.colorSpace),Rt=s.convert(S.type);let It=y(S.internalFormat,xt,Rt,S.colorSpace,S.isVideoTexture);nt(Q,S);let yt;const Wt=S.mipmaps,zt=S.isVideoTexture!==!0,ie=bt.__version===void 0||et===!0,I=J.dataReady,ft=b(S,st);if(S.isDepthTexture)It=v(S.format===es,S.type),ie&&(zt?e.texStorage2D(i.TEXTURE_2D,1,It,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,It,st.width,st.height,0,xt,Rt,null));else if(S.isDataTexture)if(Wt.length>0){zt&&ie&&e.texStorage2D(i.TEXTURE_2D,ft,It,Wt[0].width,Wt[0].height);for(let Z=0,tt=Wt.length;Z<tt;Z++)yt=Wt[Z],zt?I&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,yt.width,yt.height,xt,Rt,yt.data):e.texImage2D(i.TEXTURE_2D,Z,It,yt.width,yt.height,0,xt,Rt,yt.data);S.generateMipmaps=!1}else zt?(ie&&e.texStorage2D(i.TEXTURE_2D,ft,It,st.width,st.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,xt,Rt,st.data)):e.texImage2D(i.TEXTURE_2D,0,It,st.width,st.height,0,xt,Rt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){zt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,It,Wt[0].width,Wt[0].height,st.depth);for(let Z=0,tt=Wt.length;Z<tt;Z++)if(yt=Wt[Z],S.format!==He)if(xt!==null)if(zt){if(I)if(S.layerUpdates.size>0){const mt=lf(yt.width,yt.height,S.format,S.type);for(const dt of S.layerUpdates){const Ot=yt.data.subarray(dt*mt/yt.data.BYTES_PER_ELEMENT,(dt+1)*mt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,dt,yt.width,yt.height,1,xt,Ot)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,yt.width,yt.height,st.depth,xt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,It,yt.width,yt.height,st.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,yt.width,yt.height,st.depth,xt,Rt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,It,yt.width,yt.height,st.depth,0,xt,Rt,yt.data)}else{zt&&ie&&e.texStorage2D(i.TEXTURE_2D,ft,It,Wt[0].width,Wt[0].height);for(let Z=0,tt=Wt.length;Z<tt;Z++)yt=Wt[Z],S.format!==He?xt!==null?zt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,It,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?I&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,yt.width,yt.height,xt,Rt,yt.data):e.texImage2D(i.TEXTURE_2D,Z,It,yt.width,yt.height,0,xt,Rt,yt.data)}else if(S.isDataArrayTexture)if(zt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,It,st.width,st.height,st.depth),I)if(S.layerUpdates.size>0){const Z=lf(st.width,st.height,S.format,S.type);for(const tt of S.layerUpdates){const mt=st.data.subarray(tt*Z/st.data.BYTES_PER_ELEMENT,(tt+1)*Z/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,xt,Rt,mt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Rt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,st.width,st.height,st.depth,0,xt,Rt,st.data);else if(S.isData3DTexture)zt?(ie&&e.texStorage3D(i.TEXTURE_3D,ft,It,st.width,st.height,st.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Rt,st.data)):e.texImage3D(i.TEXTURE_3D,0,It,st.width,st.height,st.depth,0,xt,Rt,st.data);else if(S.isFramebufferTexture){if(ie)if(zt)e.texStorage2D(i.TEXTURE_2D,ft,It,st.width,st.height);else{let Z=st.width,tt=st.height;for(let mt=0;mt<ft;mt++)e.texImage2D(i.TEXTURE_2D,mt,It,Z,tt,0,xt,Rt,null),Z>>=1,tt>>=1}}else if(Wt.length>0){if(zt&&ie){const Z=vt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,ft,It,Z.width,Z.height)}for(let Z=0,tt=Wt.length;Z<tt;Z++)yt=Wt[Z],zt?I&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,xt,Rt,yt):e.texImage2D(i.TEXTURE_2D,Z,It,xt,Rt,yt);S.generateMipmaps=!1}else if(zt){if(ie){const Z=vt(st);e.texStorage2D(i.TEXTURE_2D,ft,It,Z.width,Z.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Rt,st)}else e.texImage2D(i.TEXTURE_2D,0,It,xt,Rt,st);m(S)&&d(Q),bt.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function j(R,S,z){if(S.image.length!==6)return;const Q=lt(R,S),et=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);const J=n.get(et);if(et.version!==J.__version||Q===!0){e.activeTexture(i.TEXTURE0+z);const bt=jt.getPrimaries(jt.workingColorSpace),ut=S.colorSpace===Mi?null:jt.getPrimaries(S.colorSpace),_t=S.colorSpace===Mi||bt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Ht=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,xt=[];for(let tt=0;tt<6;tt++)!Ht&&!st?xt[tt]=_(S.image[tt],!0,r.maxCubemapSize):xt[tt]=st?S.image[tt].image:S.image[tt],xt[tt]=$t(S,xt[tt]);const Rt=xt[0],It=s.convert(S.format,S.colorSpace),yt=s.convert(S.type),Wt=y(S.internalFormat,It,yt,S.colorSpace),zt=S.isVideoTexture!==!0,ie=J.__version===void 0||Q===!0,I=et.dataReady;let ft=b(S,Rt);nt(i.TEXTURE_CUBE_MAP,S);let Z;if(Ht){zt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Wt,Rt.width,Rt.height);for(let tt=0;tt<6;tt++){Z=xt[tt].mipmaps;for(let mt=0;mt<Z.length;mt++){const dt=Z[mt];S.format!==He?It!==null?zt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,dt.width,dt.height,It,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,Wt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,dt.width,dt.height,It,yt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,Wt,dt.width,dt.height,0,It,yt,dt.data)}}}else{if(Z=S.mipmaps,zt&&ie){Z.length>0&&ft++;const tt=vt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Wt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,xt[tt].width,xt[tt].height,It,yt,xt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Wt,xt[tt].width,xt[tt].height,0,It,yt,xt[tt].data);for(let mt=0;mt<Z.length;mt++){const Ot=Z[mt].image[tt].image;zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,Ot.width,Ot.height,It,yt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,Wt,Ot.width,Ot.height,0,It,yt,Ot.data)}}else{zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,It,yt,xt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Wt,It,yt,xt[tt]);for(let mt=0;mt<Z.length;mt++){const dt=Z[mt];zt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,It,yt,dt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,Wt,It,yt,dt.image[tt])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),J.__version=et.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function it(R,S,z,Q,et,J){const bt=s.convert(z.format,z.colorSpace),ut=s.convert(z.type),_t=y(z.internalFormat,bt,ut,z.colorSpace),Ht=n.get(S),st=n.get(z);if(st.__renderTarget=S,!Ht.__hasExternalTextures){const xt=Math.max(1,S.width>>J),Rt=Math.max(1,S.height>>J);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,J,_t,xt,Rt,S.depth,0,bt,ut,null):e.texImage2D(et,J,_t,xt,Rt,0,bt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ut(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,et,st.__webglTexture,0,Lt(S)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,et,st.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function K(R,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const Q=S.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,J=v(S.stencilBuffer,et),bt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Lt(S);Ut(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,J,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,R)}else{const Q=S.textures;for(let et=0;et<Q.length;et++){const J=Q[et],bt=s.convert(J.format,J.colorSpace),ut=s.convert(J.type),_t=y(J.internalFormat,bt,ut,J.colorSpace),Ht=Lt(S);z&&Ut(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,_t,S.width,S.height):Ut(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht,_t,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,_t,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const et=Q.__webglTexture,J=Lt(S);if(S.depthTexture.format===Vr)Ut(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(S.depthTexture.format===es)Ut(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Tt(R){const S=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=Q}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");at(S.__webglFramebuffer,R)}else if(z){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=i.createRenderbuffer(),K(S.__webglDepthbuffer[Q],R,!1);else{const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),K(S.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(R,S,z){const Q=n.get(R);S!==void 0&&it(Q.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Tt(R)}function Pt(R){const S=R.texture,z=n.get(R),Q=n.get(S);R.addEventListener("dispose",A);const et=R.textures,J=R.isWebGLCubeRenderTarget===!0,bt=et.length>1;if(bt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=S.version,a.memory.textures++),J){z.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ut]=[];for(let _t=0;_t<S.mipmaps.length;_t++)z.__webglFramebuffer[ut][_t]=i.createFramebuffer()}else z.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)z.__webglFramebuffer[ut]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ut=0,_t=et.length;ut<_t;ut++){const Ht=n.get(et[ut]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ut(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ut=0;ut<et.length;ut++){const _t=et[ut];z.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ut]);const Ht=s.convert(_t.format,_t.colorSpace),st=s.convert(_t.type),xt=y(_t.internalFormat,Ht,st,_t.colorSpace,R.isXRRenderTarget===!0),Rt=Lt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,xt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,z.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),K(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),nt(i.TEXTURE_CUBE_MAP,S);for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)it(z.__webglFramebuffer[ut][_t],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else it(z.__webglFramebuffer[ut],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(S)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ut=0,_t=et.length;ut<_t;ut++){const Ht=et[ut],st=n.get(Ht);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),nt(i.TEXTURE_2D,Ht),it(z.__webglFramebuffer,R,Ht,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(Ht)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,Q.__webglTexture),nt(ut,S),S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)it(z.__webglFramebuffer[_t],R,S,i.COLOR_ATTACHMENT0,ut,_t);else it(z.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,ut,0);m(S)&&d(ut),e.unbindTexture()}R.depthBuffer&&Tt(R)}function Dt(R){const S=R.textures;for(let z=0,Q=S.length;z<Q;z++){const et=S[z];if(m(et)){const J=T(R),bt=n.get(et).__webglTexture;e.bindTexture(J,bt),d(J),e.unbindTexture()}}}const wt=[],D=[];function ee(R){if(R.samples>0){if(Ut(R)===!1){const S=R.textures,z=R.width,Q=R.height;let et=i.COLOR_BUFFER_BIT;const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(R),ut=S.length>1;if(ut)for(let _t=0;_t<S.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let _t=0;_t<S.length;_t++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[_t]);const Ht=n.get(S[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,z,Q,0,0,z,Q,et,i.NEAREST),l===!0&&(wt.length=0,D.length=0,wt.push(i.COLOR_ATTACHMENT0+_t),R.depthBuffer&&R.resolveDepthBuffer===!1&&(wt.push(J),D.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<S.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,bt.__webglColorRenderbuffer[_t]);const Ht=n.get(S[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Lt(R){return Math.min(r.maxSamples,R.samples)}function Ut(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Mt(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function $t(R,S){const z=R.colorSpace,Q=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==ns&&z!==Mi&&(jt.getTransfer(z)===te?(Q!==He||et!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=pt,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Ut}function sM(i,t){function e(n,r=Mi){let s;const a=jt.getTransfer(r);if(n===oi)return i.UNSIGNED_BYTE;if(n===Oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return i.BYTE;if(n===Xh)return i.SHORT;if(n===Ns)return i.UNSIGNED_SHORT;if(n===Fc)return i.INT;if(n===lr)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===Ys)return i.HALF_FLOAT;if(n===qh)return i.ALPHA;if(n===Yh)return i.RGB;if(n===He)return i.RGBA;if(n===jh)return i.LUMINANCE;if(n===Zh)return i.LUMINANCE_ALPHA;if(n===Vr)return i.DEPTH_COMPONENT;if(n===es)return i.DEPTH_STENCIL;if(n===Kh)return i.RED;if(n===zc)return i.RED_INTEGER;if(n===Jh)return i.RG;if(n===kc)return i.RG_INTEGER;if(n===Hc)return i.RGBA_INTEGER;if(n===Ua||n===Ia||n===Na||n===Fa)if(a===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ua)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ua)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ia)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Na)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ll||n===Ul||n===Il||n===Nl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ll)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Il)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fl||n===Ol||n===Bl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fl||n===Ol)return a===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Bl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zl||n===kl||n===Hl||n===Vl||n===Gl||n===Wl||n===Xl||n===$l||n===ql||n===Yl||n===jl||n===Zl||n===Kl||n===Jl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===zl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$l)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ql)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oa||n===Ql||n===tc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Oa)return a===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ql)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qh||n===ec||n===nc||n===ic)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Oa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ec)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const aM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new $e,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ci({vertexShader:aM,fragmentShader:oM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Cn(new rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cM extends _s{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const _=new lM,m=e.getContextAttributes();let d=null,T=null;const y=[],v=[],b=new Xt;let w=null;const A=new bn;A.viewport=new me;const P=new bn;P.viewport=new me;const x=[A,P],M=new Pg;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=y[B];return j===void 0&&(j=new Yo,y[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=y[B];return j===void 0&&(j=new Yo,y[B]=j),j.getGripSpace()},this.getHand=function(B){let j=y[B];return j===void 0&&(j=new Yo,y[B]=j),j.getHandSpace()};function O(B){const j=v.indexOf(B.inputSource);if(j===-1)return;const it=y[j];it!==void 0&&(it.update(B.inputSource,B.frame,c||a),it.dispatchEvent({type:B.type,data:B.inputSource}))}function q(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",$);for(let B=0;B<y.length;B++){const j=v[B];j!==null&&(v[B]=null,y[B].disconnect(j))}L=null,k=null,_.reset(),t.setRenderTarget(d),p=null,h=null,f=null,r=null,T=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",q),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,K=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?es:Vr,K=m.stencil?ts:lr);const Tt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(Tt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),T=new Rn(h.textureWidth,h.textureHeight,{format:He,type:oi,depthTexture:new hd(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}else{const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,it),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Rn(p.framebufferWidth,p.framebufferHeight,{format:He,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),lt.setContext(r),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(B){for(let j=0;j<B.removed.length;j++){const it=B.removed[j],K=v.indexOf(it);K>=0&&(v[K]=null,y[K].disconnect(it))}for(let j=0;j<B.added.length;j++){const it=B.added[j];let K=v.indexOf(it);if(K===-1){for(let Tt=0;Tt<y.length;Tt++)if(Tt>=v.length){v.push(it),K=Tt;break}else if(v[Tt]===null){v[Tt]=it,K=Tt;break}if(K===-1)break}const at=y[K];at&&at.connect(it)}}const V=new X,Y=new X;function W(B,j,it){V.setFromMatrixPosition(j.matrixWorld),Y.setFromMatrixPosition(it.matrixWorld);const K=V.distanceTo(Y),at=j.projectionMatrix.elements,Tt=it.projectionMatrix.elements,pt=at[14]/(at[10]-1),Pt=at[14]/(at[10]+1),Dt=(at[9]+1)/at[5],wt=(at[9]-1)/at[5],D=(at[8]-1)/at[0],ee=(Tt[8]+1)/Tt[0],Lt=pt*D,Ut=pt*ee,Mt=K/(-D+ee),$t=Mt*-D;if(j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX($t),B.translateZ(Mt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),at[10]===-1)B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const vt=pt+Mt,R=Pt+Mt,S=Lt-$t,z=Ut+(K-$t),Q=Dt*Pt/R*vt,et=wt*Pt/R*vt;B.projectionMatrix.makePerspective(S,z,Q,et,vt,R),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function ot(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let j=B.near,it=B.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(it=_.depthFar)),M.near=P.near=A.near=j,M.far=P.far=A.far=it,(L!==M.near||k!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,k=M.far),A.layers.mask=B.layers.mask|2,P.layers.mask=B.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const K=B.parent,at=M.cameras;ot(M,K);for(let Tt=0;Tt<at.length;Tt++)ot(at[Tt],K);at.length===2?W(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),U(B,M,K)};function U(B,j,it){it===null?B.matrix.copy(j.matrixWorld):(B.matrix.copy(it.matrixWorld),B.matrix.invert(),B.matrix.multiply(j.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=rc*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let C=null;function nt(B,j){if(u=j.getViewerPose(c||a),g=j,u!==null){const it=u.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let K=!1;it.length!==M.cameras.length&&(M.cameras.length=0,K=!0);for(let pt=0;pt<it.length;pt++){const Pt=it[pt];let Dt=null;if(p!==null)Dt=p.getViewport(Pt);else{const D=f.getViewSubImage(h,Pt);Dt=D.viewport,pt===0&&(t.setRenderTargetTextures(T,D.colorTexture,h.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(T))}let wt=x[pt];wt===void 0&&(wt=new bn,wt.layers.enable(pt),wt.viewport=new me,x[pt]=wt),wt.matrix.fromArray(Pt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Pt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),pt===0&&(M.matrix.copy(wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),K===!0&&M.cameras.push(wt)}const at=r.enabledFeatures;if(at&&at.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const pt=f.getDepthInformation(it[0]);pt&&pt.isValid&&pt.texture&&_.init(t,pt,r.renderState)}}for(let it=0;it<y.length;it++){const K=v[it],at=y[it];K!==null&&at!==void 0&&at.update(K,j,c||a)}C&&C(B,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const lt=new dd;lt.setAnimationLoop(nt),this.setAnimationLoop=function(B){C=B},this.dispose=function(){}}}const Vi=new li,uM=new _e;function fM(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ld(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,T,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,T,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Xe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Xe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=t.get(d),y=T.envMap,v=T.envMapRotation;y&&(m.envMap.value=y,Vi.copy(v),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(uM.makeRotationFromEuler(Vi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xe&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const T=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function hM(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const v=y.program;n.uniformBlockBinding(T,v)}function c(T,y){let v=r[T.id];v===void 0&&(g(T),v=u(T),r[T.id]=v,T.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(T,b);const w=t.render.frame;s[T.id]!==w&&(h(T),s[T.id]=w)}function u(T){const y=f();T.__bindingPointIndex=y;const v=i.createBuffer(),b=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const y=r[T.id],v=T.uniforms,b=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,A=v.length;w<A;w++){const P=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,M=P.length;x<M;x++){const L=P[x];if(p(L,w,x,b)===!0){const k=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let $=0;$<O.length;$++){const V=O[$],Y=_(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,k+q,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,q),q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,y,v,b){const w=T.value,A=y+"_"+v;if(b[A]===void 0)return typeof w=="number"||typeof w=="boolean"?b[A]=w:b[A]=w.clone(),!0;{const P=b[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return b[A]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(T){const y=T.uniforms;let v=0;const b=16;for(let A=0,P=y.length;A<P;A++){const x=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,L=x.length;M<L;M++){const k=x[M],O=Array.isArray(k.value)?k.value:[k.value];for(let q=0,$=O.length;q<$;q++){const V=O[q],Y=_(V),W=v%b,ot=W%Y.boundary,U=W+ot;v+=ot,U!==0&&b-U<Y.storage&&(v+=b-U),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=Y.storage}}}const w=v%b;return w>0&&(v+=b-w),T.__size=v,T.__cache={},this}function _(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class dM{constructor(t={}){const{canvas:e=J_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const T=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=Ai,this.toneMappingExposure=1;const v=this;let b=!1,w=0,A=0,P=null,x=-1,M=null;const L=new me,k=new me;let O=null;const q=new Qt(0);let $=0,V=e.width,Y=e.height,W=1,ot=null,U=null;const C=new me(0,0,V,Y),nt=new me(0,0,V,Y);let lt=!1;const B=new fd;let j=!1,it=!1;this.transmissionResolutionScale=1;const K=new _e,at=new _e,Tt=new X,pt=new me,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function wt(){return P===null?W:1}let D=n;function ee(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nc}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),D===null){const N="webgl2";if(D=ee(N,E),D===null)throw ee(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Lt,Ut,Mt,$t,vt,R,S,z,Q,et,J,bt,ut,_t,Ht,st,xt,Rt,It,yt,Wt,zt,ie,I;function ft(){Lt=new Ex(D),Lt.init(),zt=new sM(D,Lt),Ut=new gx(D,Lt,t,zt),Mt=new iM(D,Lt),Ut.reverseDepthBuffer&&h&&Mt.buffers.depth.setReversed(!0),$t=new wx(D),vt=new WS,R=new rM(D,Lt,Mt,vt,Ut,zt,$t),S=new xx(v),z=new yx(v),Q=new Ug(D),ie=new mx(D,Q),et=new Tx(D,Q,$t,ie),J=new Rx(D,et,Q,$t),It=new Ax(D,Ut,R),st=new vx(vt),bt=new GS(v,S,z,Lt,Ut,ie,st),ut=new fM(v,vt),_t=new $S,Ht=new JS(Lt),Rt=new px(v,S,z,Mt,J,p,l),xt=new eM(v,J,Ut),I=new hM(D,$t,Ut,Mt),yt=new _x(D,Lt,$t),Wt=new bx(D,Lt,$t),$t.programs=bt.programs,v.capabilities=Ut,v.extensions=Lt,v.properties=vt,v.renderLists=_t,v.shadowMap=xt,v.state=Mt,v.info=$t}ft();const Z=new cM(v,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Lt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Lt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(V,Y,!1))},this.getSize=function(E){return E.set(V,Y)},this.setSize=function(E,N,H=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,Y=N,e.width=Math.floor(E*W),e.height=Math.floor(N*W),H===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(V*W,Y*W).floor()},this.setDrawingBufferSize=function(E,N,H){V=E,Y=N,W=H,e.width=Math.floor(E*H),e.height=Math.floor(N*H),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(C)},this.setViewport=function(E,N,H,G){E.isVector4?C.set(E.x,E.y,E.z,E.w):C.set(E,N,H,G),Mt.viewport(L.copy(C).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(nt)},this.setScissor=function(E,N,H,G){E.isVector4?nt.set(E.x,E.y,E.z,E.w):nt.set(E,N,H,G),Mt.scissor(k.copy(nt).multiplyScalar(W).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(E){Mt.setScissorTest(lt=E)},this.setOpaqueSort=function(E){ot=E},this.setTransparentSort=function(E){U=E},this.getClearColor=function(E){return E.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(E=!0,N=!0,H=!0){let G=0;if(E){let F=!1;if(P!==null){const rt=P.texture.format;F=rt===Hc||rt===kc||rt===zc}if(F){const rt=P.texture.type,ht=rt===oi||rt===lr||rt===Ns||rt===ts||rt===Oc||rt===Bc,St=Rt.getClearColor(),Et=Rt.getClearAlpha(),Nt=St.r,Ft=St.g,At=St.b;ht?(g[0]=Nt,g[1]=Ft,g[2]=At,g[3]=Et,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Nt,_[1]=Ft,_[2]=At,_[3]=Et,D.clearBufferiv(D.COLOR,0,_))}else G|=D.COLOR_BUFFER_BIT}N&&(G|=D.DEPTH_BUFFER_BIT),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Rt.dispose(),_t.dispose(),Ht.dispose(),vt.dispose(),S.dispose(),z.dispose(),J.dispose(),ie.dispose(),I.dispose(),bt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",du),Z.removeEventListener("sessionend",pu),Ni.stop()};function tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=$t.autoReset,N=xt.enabled,H=xt.autoUpdate,G=xt.needsUpdate,F=xt.type;ft(),$t.autoReset=E,xt.enabled=N,xt.autoUpdate=H,xt.needsUpdate=G,xt.type=F}function dt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ot(E){const N=E.target;N.removeEventListener("dispose",Ot),fe(N)}function fe(E){Re(E),vt.remove(E)}function Re(E){const N=vt.get(E).programs;N!==void 0&&(N.forEach(function(H){bt.releaseProgram(H)}),E.isShaderMaterial&&bt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,H,G,F,rt){N===null&&(N=Pt);const ht=F.isMesh&&F.matrixWorld.determinant()<0,St=zp(E,N,H,G,F);Mt.setMaterial(G,ht);let Et=H.index,Nt=1;if(G.wireframe===!0){if(Et=et.getWireframeAttribute(H),Et===void 0)return;Nt=2}const Ft=H.drawRange,At=H.attributes.position;let qt=Ft.start*Nt,Zt=(Ft.start+Ft.count)*Nt;rt!==null&&(qt=Math.max(qt,rt.start*Nt),Zt=Math.min(Zt,(rt.start+rt.count)*Nt)),Et!==null?(qt=Math.max(qt,0),Zt=Math.min(Zt,Et.count)):At!=null&&(qt=Math.max(qt,0),Zt=Math.min(Zt,At.count));const ge=Zt-qt;if(ge<0||ge===1/0)return;ie.setup(F,G,St,H,Et);let he,Yt=yt;if(Et!==null&&(he=Q.get(Et),Yt=Wt,Yt.setIndex(he)),F.isMesh)G.wireframe===!0?(Mt.setLineWidth(G.wireframeLinewidth*wt()),Yt.setMode(D.LINES)):Yt.setMode(D.TRIANGLES);else if(F.isLine){let Ct=G.linewidth;Ct===void 0&&(Ct=1),Mt.setLineWidth(Ct*wt()),F.isLineSegments?Yt.setMode(D.LINES):F.isLineLoop?Yt.setMode(D.LINE_LOOP):Yt.setMode(D.LINE_STRIP)}else F.isPoints?Yt.setMode(D.POINTS):F.isSprite&&Yt.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Yt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ct=F._multiDrawStarts,we=F._multiDrawCounts,Kt=F._multiDrawCount,Mn=Et?Q.get(Et).bytesPerElement:1,mr=vt.get(G).currentProgram.getUniforms();for(let Je=0;Je<Kt;Je++)mr.setValue(D,"_gl_DrawID",Je),Yt.render(Ct[Je]/Mn,we[Je])}else if(F.isInstancedMesh)Yt.renderInstances(qt,ge,F.count);else if(H.isInstancedBufferGeometry){const Ct=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,we=Math.min(H.instanceCount,Ct);Yt.renderInstances(qt,ge,we)}else Yt.render(qt,ge)};function Jt(E,N,H){E.transparent===!0&&E.side===ni&&E.forceSinglePass===!1?(E.side=Xe,E.needsUpdate=!0,ia(E,N,H),E.side=Di,E.needsUpdate=!0,ia(E,N,H),E.side=ni):ia(E,N,H)}this.compile=function(E,N,H=null){H===null&&(H=E),d=Ht.get(H),d.init(N),y.push(d),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),E!==H&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const G=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const rt=F.material;if(rt)if(Array.isArray(rt))for(let ht=0;ht<rt.length;ht++){const St=rt[ht];Jt(St,H,F),G.add(St)}else Jt(rt,H,F),G.add(rt)}),y.pop(),d=null,G},this.compileAsync=function(E,N,H=null){const G=this.compile(E,N,H);return new Promise(F=>{function rt(){if(G.forEach(function(ht){vt.get(ht).currentProgram.isReady()&&G.delete(ht)}),G.size===0){F(E);return}setTimeout(rt,10)}Lt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Sn=null;function Xn(E){Sn&&Sn(E)}function du(){Ni.stop()}function pu(){Ni.start()}const Ni=new dd;Ni.setAnimationLoop(Xn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(E){Sn=E,Z.setAnimationLoop(E),E===null?Ni.stop():Ni.start()},Z.addEventListener("sessionstart",du),Z.addEventListener("sessionend",pu),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(N),N=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,P),d=Ht.get(E,y.length),d.init(N),y.push(d),at.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),B.setFromProjectionMatrix(at),it=this.localClippingEnabled,j=st.init(this.clippingPlanes,it),m=_t.get(E,T.length),m.init(),T.push(m),Z.enabled===!0&&Z.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&Mo(rt,N,-1/0,v.sortObjects)}Mo(E,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ot,U),Dt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Dt&&Rt.addToRenderList(m,E),this.info.render.frame++,j===!0&&st.beginShadows();const H=d.state.shadowsArray;xt.render(H,E,N),j===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(d.setupLights(),N.isArrayCamera){const rt=N.cameras;if(F.length>0)for(let ht=0,St=rt.length;ht<St;ht++){const Et=rt[ht];_u(G,F,E,Et)}Dt&&Rt.render(E);for(let ht=0,St=rt.length;ht<St;ht++){const Et=rt[ht];mu(m,E,Et,Et.viewport)}}else F.length>0&&_u(G,F,E,N),Dt&&Rt.render(E),mu(m,E,N);P!==null&&A===0&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,N),ie.resetDefaultState(),x=-1,M=null,y.pop(),y.length>0?(d=y[y.length-1],j===!0&&st.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Mo(E,N,H,G){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||B.intersectsSprite(E)){G&&pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(at);const ht=J.update(E),St=E.material;St.visible&&m.push(E,ht,St,H,pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||B.intersectsObject(E))){const ht=J.update(E),St=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),pt.copy(E.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),pt.copy(ht.boundingSphere.center)),pt.applyMatrix4(E.matrixWorld).applyMatrix4(at)),Array.isArray(St)){const Et=ht.groups;for(let Nt=0,Ft=Et.length;Nt<Ft;Nt++){const At=Et[Nt],qt=St[At.materialIndex];qt&&qt.visible&&m.push(E,ht,qt,H,pt.z,At)}}else St.visible&&m.push(E,ht,St,H,pt.z,null)}}const rt=E.children;for(let ht=0,St=rt.length;ht<St;ht++)Mo(rt[ht],N,H,G)}function mu(E,N,H,G){const F=E.opaque,rt=E.transmissive,ht=E.transparent;d.setupLightsView(H),j===!0&&st.setGlobalState(v.clippingPlanes,H),G&&Mt.viewport(L.copy(G)),F.length>0&&na(F,N,H),rt.length>0&&na(rt,N,H),ht.length>0&&na(ht,N,H),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function _u(E,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new Rn(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?Ys:oi,minFilter:Ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const rt=d.state.transmissionRenderTarget[G.id],ht=G.viewport||L;rt.setSize(ht.z*v.transmissionResolutionScale,ht.w*v.transmissionResolutionScale);const St=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(q),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),Dt&&Rt.render(H);const Et=v.toneMapping;v.toneMapping=Ai;const Nt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),j===!0&&st.setGlobalState(v.clippingPlanes,G),na(E,H,G),R.updateMultisampleRenderTarget(rt),R.updateRenderTargetMipmap(rt),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let At=0,qt=N.length;At<qt;At++){const Zt=N[At],ge=Zt.object,he=Zt.geometry,Yt=Zt.material,Ct=Zt.group;if(Yt.side===ni&&ge.layers.test(G.layers)){const we=Yt.side;Yt.side=Xe,Yt.needsUpdate=!0,gu(ge,H,G,he,Yt,Ct),Yt.side=we,Yt.needsUpdate=!0,Ft=!0}}Ft===!0&&(R.updateMultisampleRenderTarget(rt),R.updateRenderTargetMipmap(rt))}v.setRenderTarget(St),v.setClearColor(q,$),Nt!==void 0&&(G.viewport=Nt),v.toneMapping=Et}function na(E,N,H){const G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,rt=E.length;F<rt;F++){const ht=E[F],St=ht.object,Et=ht.geometry,Nt=G===null?ht.material:G,Ft=ht.group;St.layers.test(H.layers)&&gu(St,N,H,Et,Nt,Ft)}}function gu(E,N,H,G,F,rt){E.onBeforeRender(v,N,H,G,F,rt),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(v,N,H,G,E,rt),F.transparent===!0&&F.side===ni&&F.forceSinglePass===!1?(F.side=Xe,F.needsUpdate=!0,v.renderBufferDirect(H,N,G,F,E,rt),F.side=Di,F.needsUpdate=!0,v.renderBufferDirect(H,N,G,F,E,rt),F.side=ni):v.renderBufferDirect(H,N,G,F,E,rt),E.onAfterRender(v,N,H,G,F,rt)}function ia(E,N,H){N.isScene!==!0&&(N=Pt);const G=vt.get(E),F=d.state.lights,rt=d.state.shadowsArray,ht=F.state.version,St=bt.getParameters(E,F.state,rt,N,H),Et=bt.getProgramCacheKey(St);let Nt=G.programs;G.environment=E.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(E.isMeshStandardMaterial?z:S).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",Ot),Nt=new Map,G.programs=Nt);let Ft=Nt.get(Et);if(Ft!==void 0){if(G.currentProgram===Ft&&G.lightsStateVersion===ht)return xu(E,St),Ft}else St.uniforms=bt.getUniforms(E),E.onBeforeCompile(St,v),Ft=bt.acquireProgram(St,Et),Nt.set(Et,Ft),G.uniforms=St.uniforms;const At=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=st.uniform),xu(E,St),G.needsLights=Hp(E),G.lightsStateVersion=ht,G.needsLights&&(At.ambientLightColor.value=F.state.ambient,At.lightProbe.value=F.state.probe,At.directionalLights.value=F.state.directional,At.directionalLightShadows.value=F.state.directionalShadow,At.spotLights.value=F.state.spot,At.spotLightShadows.value=F.state.spotShadow,At.rectAreaLights.value=F.state.rectArea,At.ltc_1.value=F.state.rectAreaLTC1,At.ltc_2.value=F.state.rectAreaLTC2,At.pointLights.value=F.state.point,At.pointLightShadows.value=F.state.pointShadow,At.hemisphereLights.value=F.state.hemi,At.directionalShadowMap.value=F.state.directionalShadowMap,At.directionalShadowMatrix.value=F.state.directionalShadowMatrix,At.spotShadowMap.value=F.state.spotShadowMap,At.spotLightMatrix.value=F.state.spotLightMatrix,At.spotLightMap.value=F.state.spotLightMap,At.pointShadowMap.value=F.state.pointShadowMap,At.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ft,G.uniformsList=null,Ft}function vu(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Ba.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function xu(E,N){const H=vt.get(E);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function zp(E,N,H,G,F){N.isScene!==!0&&(N=Pt),R.resetTextureUnits();const rt=N.fog,ht=G.isMeshStandardMaterial?N.environment:null,St=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ns,Et=(G.isMeshStandardMaterial?z:S).get(G.envMap||ht),Nt=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ft=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),At=!!H.morphAttributes.position,qt=!!H.morphAttributes.normal,Zt=!!H.morphAttributes.color;let ge=Ai;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ge=v.toneMapping);const he=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Yt=he!==void 0?he.length:0,Ct=vt.get(G),we=d.state.lights;if(j===!0&&(it===!0||E!==M)){const Fe=E===M&&G.id===x;st.setState(G,E,Fe)}let Kt=!1;G.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==we.state.version||Ct.outputColorSpace!==St||F.isBatchedMesh&&Ct.batching===!1||!F.isBatchedMesh&&Ct.batching===!0||F.isBatchedMesh&&Ct.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ct.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ct.instancing===!1||!F.isInstancedMesh&&Ct.instancing===!0||F.isSkinnedMesh&&Ct.skinning===!1||!F.isSkinnedMesh&&Ct.skinning===!0||F.isInstancedMesh&&Ct.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ct.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ct.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ct.instancingMorph===!1&&F.morphTexture!==null||Ct.envMap!==Et||G.fog===!0&&Ct.fog!==rt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==st.numPlanes||Ct.numIntersection!==st.numIntersection)||Ct.vertexAlphas!==Nt||Ct.vertexTangents!==Ft||Ct.morphTargets!==At||Ct.morphNormals!==qt||Ct.morphColors!==Zt||Ct.toneMapping!==ge||Ct.morphTargetsCount!==Yt)&&(Kt=!0):(Kt=!0,Ct.__version=G.version);let Mn=Ct.currentProgram;Kt===!0&&(Mn=ia(G,N,F));let mr=!1,Je=!1,vs=!1;const oe=Mn.getUniforms(),hn=Ct.uniforms;if(Mt.useProgram(Mn.program)&&(mr=!0,Je=!0,vs=!0),G.id!==x&&(x=G.id,Je=!0),mr||M!==E){Mt.buffers.depth.getReversed()?(K.copy(E.projectionMatrix),tg(K),eg(K),oe.setValue(D,"projectionMatrix",K)):oe.setValue(D,"projectionMatrix",E.projectionMatrix),oe.setValue(D,"viewMatrix",E.matrixWorldInverse);const Ve=oe.map.cameraPosition;Ve!==void 0&&Ve.setValue(D,Tt.setFromMatrixPosition(E.matrixWorld)),Ut.logarithmicDepthBuffer&&oe.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&oe.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Je=!0,vs=!0)}if(F.isSkinnedMesh){oe.setOptional(D,F,"bindMatrix"),oe.setOptional(D,F,"bindMatrixInverse");const Fe=F.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),oe.setValue(D,"boneTexture",Fe.boneTexture,R))}F.isBatchedMesh&&(oe.setOptional(D,F,"batchingTexture"),oe.setValue(D,"batchingTexture",F._matricesTexture,R),oe.setOptional(D,F,"batchingIdTexture"),oe.setValue(D,"batchingIdTexture",F._indirectTexture,R),oe.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&oe.setValue(D,"batchingColorTexture",F._colorsTexture,R));const dn=H.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&It.update(F,H,Mn),(Je||Ct.receiveShadow!==F.receiveShadow)&&(Ct.receiveShadow=F.receiveShadow,oe.setValue(D,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(hn.envMap.value=Et,hn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(hn.envMapIntensity.value=N.environmentIntensity),Je&&(oe.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ct.needsLights&&kp(hn,vs),rt&&G.fog===!0&&ut.refreshFogUniforms(hn,rt),ut.refreshMaterialUniforms(hn,G,W,Y,d.state.transmissionRenderTarget[E.id]),Ba.upload(D,vu(Ct),hn,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ba.upload(D,vu(Ct),hn,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&oe.setValue(D,"center",F.center),oe.setValue(D,"modelViewMatrix",F.modelViewMatrix),oe.setValue(D,"normalMatrix",F.normalMatrix),oe.setValue(D,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Fe=G.uniformsGroups;for(let Ve=0,yo=Fe.length;Ve<yo;Ve++){const Fi=Fe[Ve];I.update(Fi,Mn),I.bind(Fi,Mn)}}return Mn}function kp(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Hp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,N,H){vt.get(E.texture).__webglTexture=N,vt.get(E.depthTexture).__webglTexture=H;const G=vt.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const H=vt.get(E);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const Vp=D.createFramebuffer();this.setRenderTarget=function(E,N=0,H=0){P=E,w=N,A=H;let G=!0,F=null,rt=!1,ht=!1;if(E){const Et=vt.get(E);if(Et.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(Et.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Et.__hasExternalTextures)R.rebindTextures(E,vt.get(E.texture).__webglTexture,vt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const At=E.depthTexture;if(Et.__boundDepthTexture!==At){if(At!==null&&vt.has(At)&&(E.width!==At.image.width||E.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ht=!0);const Ft=vt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?F=Ft[N][H]:F=Ft[N],rt=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?F=vt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ft)?F=Ft[H]:F=Ft,L.copy(E.viewport),k.copy(E.scissor),O=E.scissorTest}else L.copy(C).multiplyScalar(W).floor(),k.copy(nt).multiplyScalar(W).floor(),O=lt;if(H!==0&&(F=Vp),Mt.bindFramebuffer(D.FRAMEBUFFER,F)&&G&&Mt.drawBuffers(E,F),Mt.viewport(L),Mt.scissor(k),Mt.setScissorTest(O),rt){const Et=vt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,Et.__webglTexture,H)}else if(ht){const Et=vt.get(E.texture),Nt=N;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.__webglTexture,H,Nt)}else if(E!==null&&H!==0){const Et=vt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Et.__webglTexture,H)}x=-1},this.readRenderTargetPixels=function(E,N,H,G,F,rt,ht){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ht!==void 0&&(St=St[ht]),St){Mt.bindFramebuffer(D.FRAMEBUFFER,St);try{const Et=E.texture,Nt=Et.format,Ft=Et.type;if(!Ut.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-G&&H>=0&&H<=E.height-F&&D.readPixels(N,H,G,F,zt.convert(Nt),zt.convert(Ft),rt)}finally{const Et=P!==null?vt.get(P).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(E,N,H,G,F,rt,ht){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ht!==void 0&&(St=St[ht]),St){const Et=E.texture,Nt=Et.format,Ft=Et.type;if(!Ut.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-G&&H>=0&&H<=E.height-F){Mt.bindFramebuffer(D.FRAMEBUFFER,St);const At=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,At),D.bufferData(D.PIXEL_PACK_BUFFER,rt.byteLength,D.STREAM_READ),D.readPixels(N,H,G,F,zt.convert(Nt),zt.convert(Ft),0);const qt=P!==null?vt.get(P).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,qt);const Zt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Q_(D,Zt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,At),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,rt),D.deleteBuffer(At),D.deleteSync(Zt),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,H=0){E.isTexture!==!0&&(Ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-H),F=Math.floor(E.image.width*G),rt=Math.floor(E.image.height*G),ht=N!==null?N.x:0,St=N!==null?N.y:0;R.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,ht,St,F,rt),Mt.unbindTexture()};const Gp=D.createFramebuffer(),Wp=D.createFramebuffer();this.copyTextureToTexture=function(E,N,H=null,G=null,F=0,rt=null){E.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],N=arguments[2],rt=arguments[3]||0,H=null),rt===null&&(F!==0?(Ir("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=F,F=0):rt=0);let ht,St,Et,Nt,Ft,At,qt,Zt,ge;const he=E.isCompressedTexture?E.mipmaps[rt]:E.image;if(H!==null)ht=H.max.x-H.min.x,St=H.max.y-H.min.y,Et=H.isBox3?H.max.z-H.min.z:1,Nt=H.min.x,Ft=H.min.y,At=H.isBox3?H.min.z:0;else{const dn=Math.pow(2,-F);ht=Math.floor(he.width*dn),St=Math.floor(he.height*dn),E.isDataArrayTexture?Et=he.depth:E.isData3DTexture?Et=Math.floor(he.depth*dn):Et=1,Nt=0,Ft=0,At=0}G!==null?(qt=G.x,Zt=G.y,ge=G.z):(qt=0,Zt=0,ge=0);const Yt=zt.convert(N.format),Ct=zt.convert(N.type);let we;N.isData3DTexture?(R.setTexture3D(N,0),we=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),we=D.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),we=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Kt=D.getParameter(D.UNPACK_ROW_LENGTH),Mn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),mr=D.getParameter(D.UNPACK_SKIP_PIXELS),Je=D.getParameter(D.UNPACK_SKIP_ROWS),vs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,he.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ft),D.pixelStorei(D.UNPACK_SKIP_IMAGES,At);const oe=E.isDataArrayTexture||E.isData3DTexture,hn=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const dn=vt.get(E),Fe=vt.get(N),Ve=vt.get(dn.__renderTarget),yo=vt.get(Fe.__renderTarget);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,Ve.__webglFramebuffer),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,yo.__webglFramebuffer);for(let Fi=0;Fi<Et;Fi++)oe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(E).__webglTexture,F,At+Fi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(N).__webglTexture,rt,ge+Fi)),D.blitFramebuffer(Nt,Ft,ht,St,qt,Zt,ht,St,D.DEPTH_BUFFER_BIT,D.NEAREST);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||vt.has(E)){const dn=vt.get(E),Fe=vt.get(N);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,Gp),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Wp);for(let Ve=0;Ve<Et;Ve++)oe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,dn.__webglTexture,F,At+Ve):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dn.__webglTexture,F),hn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Fe.__webglTexture,rt,ge+Ve):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Fe.__webglTexture,rt),F!==0?D.blitFramebuffer(Nt,Ft,ht,St,qt,Zt,ht,St,D.COLOR_BUFFER_BIT,D.NEAREST):hn?D.copyTexSubImage3D(we,rt,qt,Zt,ge+Ve,Nt,Ft,ht,St):D.copyTexSubImage2D(we,rt,qt,Zt,Nt,Ft,ht,St);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else hn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(we,rt,qt,Zt,ge,ht,St,Et,Yt,Ct,he.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(we,rt,qt,Zt,ge,ht,St,Et,Yt,he.data):D.texSubImage3D(we,rt,qt,Zt,ge,ht,St,Et,Yt,Ct,he):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,rt,qt,Zt,ht,St,Yt,Ct,he.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,rt,qt,Zt,he.width,he.height,Yt,he.data):D.texSubImage2D(D.TEXTURE_2D,rt,qt,Zt,ht,St,Yt,Ct,he);D.pixelStorei(D.UNPACK_ROW_LENGTH,Kt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mr),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,vs),rt===0&&N.generateMipmaps&&D.generateMipmap(we),Mt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,H=null,G=null,F=0){return E.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,E=arguments[2],N=arguments[3],F=arguments[4]||0),Ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,H,G,F)},this.initRenderTarget=function(E){vt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Mt.unbindTexture()},this.resetState=function(){w=0,A=0,P=null,Mt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}function vd(i,t){ps(t,!1);let e,n,r,s,a,o,l,c=new Xt,u=new Xt,f=new Dg,h=new Xt;const p=`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,g=`
    uniform sampler2D previousFrame;
    uniform vec2 pointerPosition;
    uniform vec2 lastPosition;
    varying vec2 vUv;

    // FBM noise functions
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));

      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    float fbm(vec2 st) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 2.0;
      
      for (int i = 0; i < 5; i++) {
        value += amplitude * noise(st * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
      }
      return value;
    }

    float distToLine(vec2 p, vec2 a, vec2 b) {
      vec2 pa = p - a;
      vec2 ba = b - a;
      float t = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
      return length(pa - ba * t);
    }

    void main() {
      vec4 prevColor = texture2D(previousFrame, vUv);
      float intensity = 0.0;
      
      float dist = distToLine(vUv, lastPosition, pointerPosition);
      float speed = length(pointerPosition - lastPosition);
      
      // Time-based progression factor (0 to 1 over 3 seconds)
      float timeFactor = min(length(pointerPosition) * 0.3, 1.0);
      
      // Increased base thickness for more continuous lines
      float thickness = mix(0.015, 0.025, timeFactor);
      
      float time = length(pointerPosition) * 1.2;
      vec2 fbmCoord = vUv * mix(18.0, 8.0, timeFactor) + time;
      float fbmValue = fbm(fbmCoord);
      
      // Reduced noise influence on thickness for smoother lines
      thickness += fbmValue * mix(0.005, 0.01, timeFactor);
      
      // Reduced edge noise displacement
      float edgeNoise = fbm(vUv * mix(24.0, 32.0, timeFactor) + vec2(time * 1.2));
      dist += edgeNoise * mix(0.002, 0.004, timeFactor);
      
      // Softer smoothstep for smoother transitions
      intensity = smoothstep(thickness, thickness * 0.5, dist);

      // Increased bloom size for better connection between strokes
      float bloomDist = length(vUv - pointerPosition);
      float bloomSize = mix(0.02, 0.03, timeFactor);
      float bloom = smoothstep(bloomSize + fbmValue * mix(0.01, 0.015, timeFactor), 0.001, bloomDist);
      intensity += bloom * mix(0.7, 0.9, timeFactor);

      float colorVar = fbm(vUv * mix(8.0, 12.0, timeFactor) - time * 0.8) * mix(0.25, 0.35, timeFactor);
      
      // Adjusted speed opacity for more continuous lines
      float speedOpacityFactor = mix(1.0, 0.8, clamp(speed * 1.5, 0.0, 1.0));
      
      float stationaryFactor = 1.0 - min(speed * 6.0, 1.0);
      float stationaryDarkening = stationaryFactor * mix(0.3, 0.5, timeFactor);
      
      // Softer radial gradient
      float radialGradient = 1.0 - smoothstep(0.0, thickness * 2.5, dist);
      intensity = intensity * radialGradient;
      
      intensity = clamp(intensity * speedOpacityFactor, 0.0, 1.0);
      
      vec4 brushColor = vec4(
        0.0,
        0.0,
        0.0,
        intensity * mix(0.4, 0.5, timeFactor) * speedOpacityFactor
      );
      
      // Enhanced color blending for smoother transitions
      vec3 finalColor = brushColor.a > 0.0 ? 
        mix(prevColor.rgb * 0.98, brushColor.rgb, brushColor.a * radialGradient) :
        prevColor.rgb;

      gl_FragColor = vec4(
        finalColor,
        max(prevColor.a, brushColor.a)
      );
    }
  `;function _(v){const b=n.getBoundingClientRect(),w=(v.clientX-b.left)/b.width,A=(v.clientY-b.top)/b.height;h.x=w*2-1,h.y=-(A*2)+1,f.setFromCamera(h,a);const P=f.intersectObjects(s.children);if(P.length>0){const x=P[0].uv;if(x)return new Xt(x.x,x.y)}return new Xt(-100,-100)}function m(){const v=s.children[0].material;v.uniforms.lastPosition.value.copy(c),v.uniforms.pointerPosition.value.copy(u)}function d(v){if(u=_(v),!c.equals(u)){m(),r.setRenderTarget(l),r.render(s,a),r.setRenderTarget(o),r.clear();const b=new sf,w=new sc(-1,1,1,-1,0,1),A=new rs(2,2),P=new Wc({map:l.texture,transparent:!0}),x=new Cn(A,P);b.add(x),r.render(b,w),c.copy(u)}}function T(){const v=document.createElement("canvas");v.width=n.width,v.height=n.height;const b=v.getContext("2d");if(b){b.drawImage(n,0,0);const w=document.createElement("a");w.download="drawing.png",w.href=v.toDataURL(),w.click()}}function y(){const v=s.children[0].material;o&&o.dispose(),l&&l.dispose(),o=new Rn(n.width,n.height,{minFilter:Te,magFilter:Te,format:He,stencilBuffer:!1}),l=new Rn(n.width,n.height,{minFilter:Te,magFilter:Te,format:He,stencilBuffer:!1}),v.uniforms.previousFrame.value=o.texture,r.setRenderTarget(o),r.clear(),r.setRenderTarget(l),r.clear(),r.setRenderTarget(null),r.clear(),c.set(-100,-100),u.set(-100,-100)}$s(()=>{e=document.querySelector(".drawing-canvas"),e.style.cursor="none",n=document.createElement("canvas");const v=window.devicePixelRatio||1;n.width=e.clientWidth*v,n.height=e.clientHeight*v,n.style.width=`${e.clientWidth}px`,n.style.height=`${e.clientHeight}px`,e.appendChild(n),console.log("Canvas dimensions:",{width:n.width,height:n.height,clientWidth:n.clientWidth,clientHeight:n.clientHeight,dpr:v});const b=document.querySelector("#download-btn"),w=document.querySelector("#reset-btn");if(!e||!b||!w){console.error("Required elements not found");return}const P=window.getComputedStyle(e).backgroundColor;r=new dM({canvas:n,alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),r.setPixelRatio(v),r.setSize(e.clientWidth,e.clientHeight,!1);const x=P.match(/\d+/g);if(x){const[$,V,Y]=x.map(Number);r.setClearColor(new Qt($/255,V/255,Y/255),1)}else r.setClearColor(16777215,1);s=new sf,n.width/n.height,a=new sc(-1,1,1,-1,.1,10),a.position.z=1,o=new Rn(n.width,n.height,{minFilter:Te,magFilter:Te,format:He,stencilBuffer:!1}),l=new Rn(n.width,n.height,{minFilter:Te,magFilter:Te,format:He,stencilBuffer:!1});const M=new rs(2,2),L=new ci({vertexShader:p,fragmentShader:g,uniforms:{previousFrame:{value:o.texture},pointerPosition:{value:new Xt},lastPosition:{value:new Xt}},transparent:!0,blending:nr}),k=new Cn(M,L);s.add(k),console.log("Scene setup complete"),n.addEventListener("pointermove",d),b.addEventListener("click",T),w.addEventListener("click",y);function O(){!r||!s||!a||(requestAnimationFrame(O),r.setRenderTarget(null),r.clear(),r.render(s,a))}O(),console.log("Animation loop started");function q(){const $=window.devicePixelRatio||1,V=e.clientWidth,Y=e.clientHeight;n.width=V*$,n.height=Y*$,n.style.width=`${V}px`,n.style.height=`${Y}px`;const W=V/Y;a.left=-1,a.right=1,a.top=1,a.bottom=-1,a.updateProjectionMatrix(),r.setSize(V,Y,!1),r.setPixelRatio($),o.setSize(V*$,Y*$),l.setSize(V*$,Y*$),console.log("Resize:",{width:V,height:Y,dpr:$,aspect:W,camera:{left:a.left,right:a.right,top:a.top,bottom:a.bottom}})}return window.addEventListener("resize",q),()=>{n.removeEventListener("pointermove",d),b.removeEventListener("click",T),w.removeEventListener("click",y),window.removeEventListener("resize",q),r.dispose()}}),Xs(),ms()}qs(vd,{},[],[],!0);(function(){function i(){for(var n=arguments.length,r=0;r<n;r++){var s=r<0||arguments.length<=r?void 0:arguments[r];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function t(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function e(){for(var n=this.parentNode,r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];var o=s.length;if(n)for(o||n.removeChild(this);o--;){var l=s[o];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),o?n.insertBefore(this.previousSibling,l):n.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=i,DocumentFragment.prototype.append=i),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=t,DocumentFragment.prototype.replaceChildren=t),Element.prototype.replaceWith||(Element.prototype.replaceWith=e,DocumentFragment.prototype.replaceWith=e))})();function pM(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function Uf(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function If(i,t,e){return t&&Uf(i.prototype,t),e&&Uf(i,e),i}function mM(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function Nf(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),e.push.apply(e,n)}return e}function Ff(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Nf(Object(e),!0).forEach(function(n){mM(i,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):Nf(Object(e)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(e,n))})}return i}function xd(i,t){return gM(i)||xM(i,t)||Sd(i,t)||MM()}function ze(i){return _M(i)||vM(i)||Sd(i)||SM()}function _M(i){if(Array.isArray(i))return lc(i)}function gM(i){if(Array.isArray(i))return i}function vM(i){if(typeof Symbol<"u"&&Symbol.iterator in Object(i))return Array.from(i)}function xM(i,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(i)))){var e=[],n=!0,r=!1,s=void 0;try{for(var a=i[Symbol.iterator](),o;!(n=(o=a.next()).done)&&(e.push(o.value),!(t&&e.length===t));n=!0);}catch(l){r=!0,s=l}finally{try{!n&&a.return!=null&&a.return()}finally{if(r)throw s}}return e}}function Sd(i,t){if(i){if(typeof i=="string")return lc(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return lc(i,t)}}function lc(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=i[e];return n}function SM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function MM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qi(i,t){return Object.getOwnPropertyNames(Object(i)).reduce(function(e,n){var r=Object.getOwnPropertyDescriptor(Object(i),n),s=Object.getOwnPropertyDescriptor(Object(t),n);return Object.defineProperty(e,n,s||r)},{})}function Qs(i){return typeof i=="string"}function $c(i){return Array.isArray(i)}function Aa(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=Qi(i),e;return t.types!==void 0?e=t.types:t.split!==void 0&&(e=t.split),e!==void 0&&(t.types=(Qs(e)||$c(e)?String(e):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(t.absolute||t.position)&&(t.absolute=t.absolute||/absolute/.test(i.position)),t}function qc(i){var t=Qs(i)||$c(i)?String(i):"";return{none:!t,lines:/line/i.test(t),words:/word/i.test(t),chars:/char/i.test(t)}}function go(i){return i!==null&&typeof i=="object"}function yM(i){return go(i)&&/^(1|3|11)$/.test(i.nodeType)}function EM(i){return typeof i=="number"&&i>-1&&i%1===0}function TM(i){return go(i)&&EM(i.length)}function cr(i){return $c(i)?i:i==null?[]:TM(i)?Array.prototype.slice.call(i):[i]}function Of(i){var t=i;return Qs(i)&&(/^(#[a-z]\w+)$/.test(i.trim())?t=document.getElementById(i.trim().slice(1)):t=document.querySelectorAll(i)),cr(t).reduce(function(e,n){return[].concat(ze(e),ze(cr(n).filter(yM)))},[])}var bM=Object.entries,Ka="_splittype",Dn={},wM=0;function Bn(i,t,e){if(!go(i))return console.warn("[data.set] owner is not an object"),null;var n=i[Ka]||(i[Ka]=++wM),r=Dn[n]||(Dn[n]={});return e===void 0?t&&Object.getPrototypeOf(t)===Object.prototype&&(Dn[n]=Ff(Ff({},r),t)):t!==void 0&&(r[t]=e),e}function tr(i,t){var e=go(i)?i[Ka]:null,n=e&&Dn[e]||{};return n}function Md(i){var t=i&&i[Ka];t&&(delete i[t],delete Dn[t])}function AM(){Object.keys(Dn).forEach(function(i){delete Dn[i]})}function RM(){bM(Dn).forEach(function(i){var t=xd(i,2),e=t[0],n=t[1],r=n.isRoot,s=n.isSplit;(!r||!s)&&(Dn[e]=null,delete Dn[e])})}function CM(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",e=i?String(i):"";return e.trim().replace(/\s+/g," ").split(t)}var Yc="\\ud800-\\udfff",yd="\\u0300-\\u036f\\ufe20-\\ufe23",Ed="\\u20d0-\\u20f0",Td="\\ufe0e\\ufe0f",PM="[".concat(Yc,"]"),cc="[".concat(yd).concat(Ed,"]"),uc="\\ud83c[\\udffb-\\udfff]",DM="(?:".concat(cc,"|").concat(uc,")"),bd="[^".concat(Yc,"]"),wd="(?:\\ud83c[\\udde6-\\uddff]){2}",Ad="[\\ud800-\\udbff][\\udc00-\\udfff]",Rd="\\u200d",Cd="".concat(DM,"?"),Pd="[".concat(Td,"]?"),LM="(?:"+Rd+"(?:"+[bd,wd,Ad].join("|")+")"+Pd+Cd+")*",UM=Pd+Cd+LM,IM="(?:".concat(["".concat(bd).concat(cc,"?"),cc,wd,Ad,PM].join("|"),`
)`),NM=RegExp("".concat(uc,"(?=").concat(uc,")|").concat(IM).concat(UM),"g"),FM=[Rd,Yc,yd,Ed,Td],OM=RegExp("[".concat(FM.join(""),"]"));function BM(i){return i.split("")}function Dd(i){return OM.test(i)}function zM(i){return i.match(NM)||[]}function kM(i){return Dd(i)?zM(i):BM(i)}function HM(i){return i==null?"":String(i)}function VM(i){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return i=HM(i),i&&Qs(i)&&!t&&Dd(i)?kM(i):i.split(t)}function fc(i,t){var e=document.createElement(i);return t&&Object.keys(t).forEach(function(n){var r=t[n],s=Qs(r)?r.trim():r;s===null||s===""||(n==="children"?e.append.apply(e,ze(cr(s))):e.setAttribute(n,s))}),e}var jc={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function GM(i,t){t=Qi(jc,t);var e=qc(t.types),n=t.tagName,r=i.nodeValue,s=document.createDocumentFragment(),a=[],o=[];return/^\s/.test(r)&&s.append(" "),a=CM(r).reduce(function(l,c,u,f){var h,p;return e.chars&&(p=VM(c).map(function(g){var _=fc(n,{class:"".concat(t.splitClass," ").concat(t.charClass),style:"display: inline-block;",children:g});return Bn(_,"isChar",!0),o=[].concat(ze(o),[_]),_})),e.words||e.lines?(h=fc(n,{class:"".concat(t.wordClass," ").concat(t.splitClass),style:"display: inline-block; ".concat(e.words&&t.absolute?"position: relative;":""),children:e.chars?p:c}),Bn(h,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(h)):p.forEach(function(g){s.appendChild(g)}),u<f.length-1&&s.append(" "),e.words?l.concat(h):l},[]),/\s$/.test(r)&&s.append(" "),i.replaceWith(s),{words:a,chars:o}}function Ld(i,t){var e=i.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(e))return n;if(e===3&&/\S/.test(i.nodeValue))return GM(i,t);var r=cr(i.childNodes);if(r.length&&(Bn(i,"isSplit",!0),!tr(i).isRoot)){i.style.display="inline-block",i.style.position="relative";var s=i.nextSibling,a=i.previousSibling,o=i.textContent||"",l=s?s.textContent:" ",c=a?a.textContent:" ";Bn(i,{isWordEnd:/\s$/.test(o)||/^\s/.test(l),isWordStart:/^\s/.test(o)||/\s$/.test(c)})}return r.reduce(function(u,f){var h=Ld(f,t),p=h.words,g=h.chars;return{words:[].concat(ze(u.words),ze(p)),chars:[].concat(ze(u.chars),ze(g))}},n)}function WM(i,t,e,n){if(!e.absolute)return{top:t?i.offsetTop:null};var r=i.offsetParent,s=xd(n,2),a=s[0],o=s[1],l=0,c=0;if(r&&r!==document.body){var u=r.getBoundingClientRect();l=u.x+a,c=u.y+o}var f=i.getBoundingClientRect(),h=f.width,p=f.height,g=f.x,_=f.y,m=_+o-c,d=g+a-l;return{width:h,height:p,top:m,left:d}}function Ud(i){tr(i).isWord?(Md(i),i.replaceWith.apply(i,ze(i.childNodes))):cr(i.children).forEach(function(t){return Ud(t)})}var XM=function(){return document.createDocumentFragment()};function $M(i,t,e){var n=qc(t.types),r=t.tagName,s=i.getElementsByTagName("*"),a=[],o=[],l=null,c,u,f,h=[],p=i.parentElement,g=i.nextElementSibling,_=XM(),m=window.getComputedStyle(i),d=m.textAlign,T=parseFloat(m.fontSize),y=T*.2;return t.absolute&&(f={left:i.offsetLeft,top:i.offsetTop,width:i.offsetWidth},u=i.offsetWidth,c=i.offsetHeight,Bn(i,{cssWidth:i.style.width,cssHeight:i.style.height})),cr(s).forEach(function(v){var b=v.parentElement===i,w=WM(v,b,t,e),A=w.width,P=w.height,x=w.top,M=w.left;/^br$/i.test(v.nodeName)||(n.lines&&b&&((l===null||x-l>=y)&&(l=x,a.push(o=[])),o.push(v)),t.absolute&&Bn(v,{top:x,left:M,width:A,height:P}))}),p&&p.removeChild(i),n.lines&&(h=a.map(function(v){var b=fc(r,{class:"".concat(t.splitClass," ").concat(t.lineClass),style:"display: block; text-align: ".concat(d,"; width: 100%;")});Bn(b,"isLine",!0);var w={height:0,top:1e4};return _.appendChild(b),v.forEach(function(A,P,x){var M=tr(A),L=M.isWordEnd,k=M.top,O=M.height,q=x[P+1];w.height=Math.max(w.height,O),w.top=Math.min(w.top,k),b.appendChild(A),L&&tr(q).isWordStart&&b.append(" ")}),t.absolute&&Bn(b,{height:w.height,top:w.top}),b}),n.words||Ud(_),i.replaceChildren(_)),t.absolute&&(i.style.width="".concat(i.style.width||u,"px"),i.style.height="".concat(c,"px"),cr(s).forEach(function(v){var b=tr(v),w=b.isLine,A=b.top,P=b.left,x=b.width,M=b.height,L=tr(v.parentElement),k=!w&&L.isLine;v.style.top="".concat(k?A-L.top:A,"px"),v.style.left=w?"".concat(f.left,"px"):"".concat(P-(k?f.left:0),"px"),v.style.height="".concat(M,"px"),v.style.width=w?"".concat(f.width,"px"):"".concat(x,"px"),v.style.position="absolute"})),p&&(g?p.insertBefore(i,g):p.appendChild(i)),h}var Lr=Qi(jc,{}),Id=function(){If(i,null,[{key:"clearData",value:function(){AM()}},{key:"setDefaults",value:function(e){return Lr=Qi(Lr,Aa(e)),jc}},{key:"revert",value:function(e){Of(e).forEach(function(n){var r=tr(n),s=r.isSplit,a=r.html,o=r.cssWidth,l=r.cssHeight;s&&(n.innerHTML=a,n.style.width=o||"",n.style.height=l||"",Md(n))})}},{key:"create",value:function(e,n){return new i(e,n)}},{key:"data",get:function(){return Dn}},{key:"defaults",get:function(){return Lr},set:function(e){Lr=Qi(Lr,Aa(e))}}]);function i(t,e){pM(this,i),this.isSplit=!1,this.settings=Qi(Lr,Aa(e)),this.elements=Of(t),this.split()}return If(i,[{key:"split",value:function(e){var n=this;this.revert(),this.elements.forEach(function(a){Bn(a,"html",a.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var r=[window.pageXOffset,window.pageYOffset];e!==void 0&&(this.settings=Qi(this.settings,Aa(e)));var s=qc(this.settings.types);s.none||(this.elements.forEach(function(a){Bn(a,"isRoot",!0);var o=Ld(a,n.settings),l=o.words,c=o.chars;n.words=[].concat(ze(n.words),ze(l)),n.chars=[].concat(ze(n.chars),ze(c))}),this.elements.forEach(function(a){if(s.lines||n.settings.absolute){var o=$M(a,n.settings,r);n.lines=[].concat(ze(n.lines),ze(o))}}),this.isSplit=!0,window.scrollTo(r[0],r[1]),RM())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),i.revert(this.elements)}}]),i}();function Jn(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Nd(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var cn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ss={duration:.5,overwrite:!1,delay:0},Zc,Ae,le,Vn=1e8,Ue=1/Vn,hc=Math.PI*2,qM=hc/4,YM=0,Fd=Math.sqrt,jM=Math.cos,ZM=Math.sin,be=function(t){return typeof t=="string"},de=function(t){return typeof t=="function"},ui=function(t){return typeof t=="number"},Kc=function(t){return typeof t>"u"},Wn=function(t){return typeof t=="object"},qe=function(t){return t!==!1},Jc=function(){return typeof window<"u"},Ra=function(t){return de(t)||be(t)},Od=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ie=Array.isArray,dc=/(?:-?\.?\d|\.)+/gi,Bd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Or=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zd=/[+-]=-?[.\d]+/,kd=/[^,'"\[\]\s]+/gi,KM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ce,In,pc,Qc,un={},Ja={},Hd,Vd=function(t){return(Ja=as(t,un))&&Ke},tu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Fs=function(t,e){return!e&&console.warn(t)},Gd=function(t,e){return t&&(un[t]=e)&&Ja&&(Ja[t]=e)||un},Os=function(){return 0},JM={suppressEvents:!0,isStart:!0,kill:!1},za={suppressEvents:!0,kill:!1},QM={suppressEvents:!0},eu={},Ri=[],mc={},Wd,nn={},il={},Bf=30,ka=[],nu="",iu=function(t){var e=t[0],n,r;if(Wn(e)||de(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=ka.length;r--&&!ka[r].targetTest(e););n=ka[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new pp(t[r],n)))||t.splice(r,1);return t},rr=function(t){return t._gsap||iu(vn(t))[0]._gsap},Xd=function(t,e,n){return(n=t[e])&&de(n)?t[e]():Kc(n)&&t.getAttribute&&t.getAttribute(e)||n},Ye=function(t,e){return(t=t.split(",")).forEach(e)||t},pe=function(t){return Math.round(t*1e5)/1e5||0},Se=function(t){return Math.round(t*1e7)/1e7||0},Wr=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},ty=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Qa=function(){var t=Ri.length,e=Ri.slice(0),n,r;for(mc={},Ri.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},$d=function(t,e,n,r){Ri.length&&!Ae&&Qa(),t.render(e,n,Ae&&e<0&&(t._initted||t._startAt)),Ri.length&&!Ae&&Qa()},qd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(kd).length<2?e:be(t)?t.trim():t},Yd=function(t){return t},fn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ey=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},as=function(t,e){for(var n in e)t[n]=e[n];return t},zf=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Wn(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},to=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},Rs=function(t){var e=t.parent||ce,n=t.keyframes?ey(Ie(t.keyframes)):fn;if(qe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},ny=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},jd=function(t,e,n,r,s){var a=t[r],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=a,e.parent=e._dp=t,e},vo=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Li=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},sr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},iy=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},_c=function(t,e,n,r){return t._startAt&&(Ae?t._startAt.revert(za):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},ry=function i(t){return!t||t._ts&&i(t.parent)},kf=function(t){return t._repeat?os(t._tTime,t=t.duration()+t._rDelay)*t:0},os=function(t,e){var n=Math.floor(t=Se(t/e));return t&&n===t?n-1:n},eo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},xo=function(t){return t._end=Se(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ue)||0))},So=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Se(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),xo(t),n._dirty||sr(n,t)),t},Zd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=eo(t.rawTime(),e),(!e._dur||ta(0,e.totalDuration(),n)-e._tTime>Ue)&&e.render(n,!0)),sr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-1e-8}},Fn=function(t,e,n,r){return e.parent&&Li(e),e._start=Se((ui(n)?n:n||t!==ce?mn(t,n,e):t._time)+e._delay),e._end=Se(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),jd(t,e,"_first","_last",t._sort?"_start":0),gc(e)||(t._recent=e),r||Zd(t,e),t._ts<0&&So(t,t._tTime),t},Kd=function(t,e){return(un.ScrollTrigger||tu("scrollTrigger",e))&&un.ScrollTrigger.create(e,t)},Jd=function(t,e,n,r,s){if(su(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ae&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Wd!==sn.frame)return Ri.push(t),t._lazy=[s,r],1},sy=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},gc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},ay=function(t,e,n,r){var s=t.ratio,a=e<0||!e&&(!t._start&&sy(t)&&!(!t._initted&&gc(t))||(t._ts<0||t._dp._ts<0)&&!gc(t))?0:1,o=t._rDelay,l=0,c,u,f;if(o&&t._repeat&&(l=ta(0,t._tDur,e),u=os(l,o),t._yoyo&&u&1&&(a=1-a),u!==os(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ae||r||t._zTime===Ue||!e&&t._zTime){if(!t._initted&&Jd(t,e,r,n,l))return;for(f=t._zTime,t._zTime=e||(n?Ue:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&_c(t,e,n,!0),t._onUpdate&&!n&&an(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&an(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Li(t,1),!n&&!Ae&&(an(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},oy=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},ls=function(t,e,n,r){var s=t._repeat,a=Se(e)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Se(a*(s+1)+t._rDelay*s):a,o>0&&!r&&So(t,t._tTime=t._tDur*o),t.parent&&xo(t),n||sr(t.parent,t),t},Hf=function(t){return t instanceof ke?sr(t):ls(t,t._dur)},ly={_start:0,endTime:Os,totalDuration:Os},mn=function i(t,e,n){var r=t.labels,s=t._recent||ly,a=t.duration()>=Vn?s.endTime(!1):t._dur,o,l,c;return be(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in r||(r[e]=a),r[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Ie(n)?n[0]:n).totalDuration()),o>1?i(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Cs=function(t,e,n){var r=ui(e[1]),s=(r?2:1)+(t<2?0:1),a=e[s],o,l;if(r&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=qe(l.vars.inherit)&&l.parent;a.immediateRender=qe(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new xe(e[0],a,e[s+1])},Ii=function(t,e){return t||t===0?e(t):e},ta=function(t,e,n){return n<t?t:n>e?e:n},De=function(t,e){return!be(t)||!(e=KM.exec(t))?"":e[1]},cy=function(t,e,n){return Ii(n,function(r){return ta(t,e,r)})},vc=[].slice,Qd=function(t,e){return t&&Wn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Wn(t[0]))&&!t.nodeType&&t!==In},uy=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return be(r)&&!e||Qd(r,1)?(s=n).push.apply(s,vn(r)):n.push(r)})||n},vn=function(t,e,n){return le&&!e&&le.selector?le.selector(t):be(t)&&!n&&(pc||!cs())?vc.call((e||Qc).querySelectorAll(t),0):Ie(t)?uy(t,n):Qd(t)?vc.call(t,0):t?[t]:[]},xc=function(t){return t=vn(t)[0]||Fs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return vn(e,n.querySelectorAll?n:n===t?Fs("Invalid scope")||Qc.createElement("div"):t)}},tp=function(t){return t.sort(function(){return .5-Math.random()})},ep=function(t){if(de(t))return t;var e=Wn(t)?t:{each:t},n=ar(e.ease),r=e.from||0,s=parseFloat(e.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=e.axis,u=r,f=r;return be(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(h,p,g){var _=(g||e).length,m=a[_],d,T,y,v,b,w,A,P,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,Vn])[1],!x){for(A=-1e8;A<(A=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=a[_]=[],d=l?Math.min(x,_)*u-.5:r%x,T=x===Vn?0:l?_*f/x-.5:r/x|0,A=0,P=Vn,w=0;w<_;w++)y=w%x-d,v=T-(w/x|0),m[w]=b=c?Math.abs(c==="y"?v:y):Fd(y*y+v*v),b>A&&(A=b),b<P&&(P=b);r==="random"&&tp(m),m.max=A-P,m.min=P,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=De(e.amount||e.each)||0,n=n&&_<0?fp(n):n}return _=(m[h]-m.min)/m.max||0,Se(m.b+(n?n(_):_)*m.v)+m.u}},Sc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=Se(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(ui(n)?0:De(n))}},np=function(t,e){var n=Ie(t),r,s;return!n&&Wn(t)&&(r=n=t.radius||Vn,t.values?(t=vn(t.values),(s=!ui(t[0]))&&(r*=r)):t=Sc(t.increment)),Ii(e,n?de(t)?function(a){return s=t(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Vn,u=0,f=t.length,h,p;f--;)s?(h=t[f].x-o,p=t[f].y-l,h=h*h+p*p):h=Math.abs(t[f]-o),h<c&&(c=h,u=f);return u=!r||c<=r?t[u]:a,s||u===a||ui(a)?u:u+De(a)}:Sc(t))},ip=function(t,e,n,r){return Ii(Ie(t)?!e:n===!0?!!(n=0):!r,function(){return Ie(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},fy=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,a){return a(s)},r)}},hy=function(t,e){return function(n){return t(parseFloat(n))+(e||De(n))}},dy=function(t,e,n){return sp(t,e,0,1,n)},rp=function(t,e,n){return Ii(n,function(r){return t[~~e(r)]})},py=function i(t,e,n){var r=e-t;return Ie(t)?rp(t,i(0,t.length),e):Ii(n,function(s){return(r+(s-t)%r)%r+t})},my=function i(t,e,n){var r=e-t,s=r*2;return Ie(t)?rp(t,i(0,t.length-1),e):Ii(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>r?s-a:a)})},Bs=function(t){for(var e=0,n="",r,s,a,o;~(r=t.indexOf("random(",e));)a=t.indexOf(")",r),o=t.charAt(r+7)==="[",s=t.substr(r+7,a-r-7).match(o?kd:dc),n+=t.substr(e,r-e)+ip(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},sp=function(t,e,n,r,s){var a=e-t,o=r-n;return Ii(s,function(l){return n+((l-t)/a*o||0)})},_y=function i(t,e,n,r){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var a=be(t),o={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),a)t={p:t},e={p:e};else if(Ie(t)&&!Ie(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(i(t[c-1],t[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=e}else r||(t=as(Ie(t)?[]:{},t));if(!u){for(l in e)ru.call(o,t,l,"get",e[l]);s=function(g){return lu(g,o)||(a?t.p:t)}}}return Ii(n,s)},Vf=function(t,e,n){var r=t.labels,s=Vn,a,o,l;for(a in r)o=r[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},an=function(t,e,n){var r=t.vars,s=r[e],a=le,o=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&Ri.length&&Qa(),o&&(le=o),u=l?s.apply(c,l):s.call(c),le=a,u},ws=function(t){return Li(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ae),t.progress()<1&&an(t,"onInterrupt"),t},Br,ap=[],op=function(t){if(t)if(t=!t.name&&t.default||t,Jc()||t.headless){var e=t.name,n=de(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Os,render:lu,add:ru,kill:Ly,modifier:Dy,rawVars:0},a={targetTest:0,get:0,getSetter:ou,aliases:{},register:0};if(cs(),t!==r){if(nn[e])return;fn(r,fn(to(t,s),a)),as(r.prototype,as(s,to(t,a))),nn[r.prop=e]=r,t.targetTest&&(ka.push(r),eu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Gd(e,r),t.register&&t.register(Ke,r,je)}else ap.push(t)},ne=255,As={aqua:[0,ne,ne],lime:[0,ne,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ne],navy:[0,0,128],white:[ne,ne,ne],olive:[128,128,0],yellow:[ne,ne,0],orange:[ne,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ne,0,0],pink:[ne,192,203],cyan:[0,ne,ne],transparent:[ne,ne,ne,0]},rl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ne+.5|0},lp=function(t,e,n){var r=t?ui(t)?[t>>16,t>>8&ne,t&ne]:0:As.black,s,a,o,l,c,u,f,h,p,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),As[t])r=As[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&ne,r&ne,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&ne,t&ne]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(dc),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=rl(l+1/3,s,a),r[1]=rl(l,s,a),r[2]=rl(l-1/3,s,a);else if(~t.indexOf("="))return r=t.match(Bd),n&&r.length<4&&(r[3]=1),r}else r=t.match(dc)||As.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/ne,a=r[1]/ne,o=r[2]/ne,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),l=f===s?(a-o)/p+(a<o?6:0):f===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},cp=function(t){var e=[],n=[],r=-1;return t.split(Ci).forEach(function(s){var a=s.match(Or)||[];e.push.apply(e,a),n.push(r+=a.length+1)}),e.c=n,e},Gf=function(t,e,n){var r="",s=(t+r).match(Ci),a=e?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=lp(h,e,1))&&a+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=cp(t),l=n.c,l.join(r)!==u.c.join(r)))for(c=t.replace(Ci,"1").split(Or),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Ci),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},Ci=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in As)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),gy=/hsl[a]?\(/,up=function(t){var e=t.join(" "),n;if(Ci.lastIndex=0,Ci.test(e))return n=gy.test(e),t[1]=Gf(t[1],n),t[0]=Gf(t[0],n,cp(t[1])),!0},zs,sn=function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,f,h,p,g=function _(m){var d=i()-r,T=m===!0,y,v,b,w;if((d>t||d<0)&&(n+=d-e),r+=d,b=r-n,y=b-a,(y>0||T)&&(w=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,a+=y+(y>=s?4:s-y),v=1),T||(l=c(_)),v)for(p=0;p<o.length;p++)o[p](b,h,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Hd&&(!pc&&Jc()&&(In=pc=window,Qc=In.document||{},un.gsap=Ke,(In.gsapVersions||(In.gsapVersions=[])).push(Ke.version),Vd(Ja||In.GreenSockGlobals||!In.gsap&&In||{}),ap.forEach(op)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},zs=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),zs=0,c=Os},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,d,T){var y=d?function(v,b,w,A){m(v,b,w,A),f.remove(y)}:m;return f.remove(m),o[T?"unshift":"push"](y),cs(),y},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},f}(),cs=function(){return!zs&&sn.wake()},Gt={},vy=/^[\d.\-M][\d.\-,\s]/,xy=/["']/g,Sy=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[r]=isNaN(c)?c.replace(xy,"").trim():+c,r=l.substr(o+1).trim();return e},My=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},yy=function(t){var e=(t+"").split("("),n=Gt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Sy(e[1])]:My(t).split(",").map(qd)):Gt._CE&&vy.test(t)?Gt._CE("",t):n},fp=function(t){return function(e){return 1-t(1-e)}},hp=function i(t,e){for(var n=t._first,r;n;)n instanceof ke?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},ar=function(t,e){return t&&(de(t)?t:Gt[t]||yy(t))||e},pr=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},a;return Ye(t,function(o){Gt[o]=un[o]=s,Gt[a=o.toLowerCase()]=n;for(var l in s)Gt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Gt[o+"."+l]=s[l]}),s},dp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},sl=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/hc*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*ZM((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:dp(o);return s=hc/s,l.config=function(c,u){return i(t,c,u)},l},al=function i(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:dp(n);return r.config=function(s){return i(t,s)},r};Ye("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;pr(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Gt.Linear.easeNone=Gt.none=Gt.Linear.easeIn;pr("Elastic",sl("in"),sl("out"),sl());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(o){return o<e?i*o*o:o<n?i*Math.pow(o-1.5/t,2)+.75:o<r?i*(o-=2.25/t)*o+.9375:i*Math.pow(o-2.625/t,2)+.984375};pr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);pr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});pr("Circ",function(i){return-(Fd(1-i*i)-1)});pr("Sine",function(i){return i===1?1:-jM(i*qM)+1});pr("Back",al("in"),al("out"),al());Gt.SteppedEase=Gt.steps=un.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,a=1-Ue;return function(o){return((r*ta(0,a,o)|0)+s)*n}}};ss.ease=Gt["quad.out"];Ye("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return nu+=i+","+i+"Params,"});var pp=function(t,e){this.id=YM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Xd,this.set=e?e.getSetter:ou},ks=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ls(this,+e.duration,1,1),this.data=e.data,le&&(this._ctx=le,le.data.push(this)),zs||sn.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ls(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(cs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(So(this,n),!s._dp||s.parent||Zd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Fn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ue||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$d(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+kf(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+kf(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?os(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?eo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(ta(-Math.abs(this._delay),this._tDur,s),r!==!1),xo(this),iy(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(cs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ue&&(this._tTime-=Ue)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Fn(r,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(qe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?eo(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=QM);var r=Ae;return Ae=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ae=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Hf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Hf(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(mn(this,n),qe(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,qe(r)),this._dur||(this._zTime=-1e-8),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ue)},t.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},t.then=function(n){var r=this;return new Promise(function(s){var a=de(n)?n:Yd,o=function(){var c=r.then;r.then=null,de(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},t.kill=function(){ws(this)},i}();fn(ks.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var ke=function(i){Nd(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=qe(n.sortChildren),ce&&Fn(n.parent||ce,Jn(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Kd(Jn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,a){return Cs(0,arguments,this),this},e.from=function(r,s,a){return Cs(1,arguments,this),this},e.fromTo=function(r,s,a,o){return Cs(2,arguments,this),this},e.set=function(r,s,a){return s.duration=0,s.parent=this,Rs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new xe(r,s,mn(this,a),1),this},e.call=function(r,s,a){return Fn(this,xe.delayedCall(0,r,s),a)},e.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new xe(r,a,mn(this,l)),this},e.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Rs(a).immediateRender=qe(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},e.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,Rs(o).immediateRender=qe(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},e.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Se(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,p,g,_,m,d,T,y,v,b,w,A;if(this!==ce&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,v=this._start,y=this._ts,d=!y,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(h=Se(u%m),u===l?(_=this._repeat,h=c):(b=Se(u/m),_=~~b,_&&_===b&&(h=c,_--),h>c&&(h=c)),b=os(this._tTime,m),!o&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),w&&_&1&&(h=c-h,A=1),_!==b&&!this._lock){var P=w&&b&1,x=P===(w&&_&1);if(_<b&&(P=!P),o=P?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Se(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&an(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;hp(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=oy(this,Se(o),Se(h)),T&&(u-=h-(h=T._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&h&&!s&&!_&&(an(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&T!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,a),h!==this._time||!this._ts&&!d){T=0,g&&(u+=this._zTime=-1e-8);break}}p=g}else{p=this._last;for(var M=r<0?r:h;p;){if(g=p._prev,(p._act||M<=p._end)&&p._ts&&T!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(M-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(M-p._start)*p._ts,s,a||Ae&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!d){T=0,g&&(u+=this._zTime=M?-1e-8:Ue);break}}p=g}}if(T&&!s&&(this.pause(),T.render(h>=o?0:-1e-8)._zTime=h>=o?1:-1,this._ts))return this._start=v,xo(this),this.render(r,s,a);this._onUpdate&&!s&&an(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Li(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(an(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var a=this;if(ui(s)||(s=mn(this,s,r)),!(r instanceof ks)){if(Ie(r))return r.forEach(function(o){return a.add(o,s)}),this;if(be(r))return this.addLabel(r,s);if(de(r))r=xe.delayedCall(0,r);else return this}return this!==r?Fn(this,r,s):this},e.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-1e8);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof xe?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},e.remove=function(r){return be(r)?this.removeLabel(r):de(r)?this.killTweensOf(r):(r.parent===this&&vo(this,r),r===this._recent&&(this._recent=this._last),sr(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Se(sn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=mn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,a){var o=xe.delayedCall(0,s||Os,a);return o.data="isPause",this._hasPause=1,Fn(this,o,mn(this,r))},e.removePause=function(r){var s=this._first;for(r=mn(this,r);s;)s._start===r&&s.data==="isPause"&&Li(s),s=s._next},e.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Ei!==o[l]&&o[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var a=[],o=vn(r),l=this._first,c=ui(s),u;l;)l instanceof xe?ty(l._targets,o)&&(c?(!Ei||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(r,s){s=s||{};var a=this,o=mn(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,p,g=xe.to(a,fn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ue,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&ls(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(r,s,a){return this.tweenTo(s,fn({startAt:{time:mn(this,r)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Vf(this,mn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Vf(this,mn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ue)},e.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return sr(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),sr(this)},e.totalDuration=function(r){var s=0,a=this,o=a._last,l=Vn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Fn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ls(a,a===ce&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(r){if(ce._ts&&($d(ce,eo(r,ce)),Wd=sn.frame),sn.frame>=Bf){Bf+=cn.autoSleep||120;var s=ce._first;if((!s||!s._ts)&&cn.autoSleep&&sn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||sn.sleep()}}},t}(ks);fn(ke.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ey=function(t,e,n,r,s,a,o){var l=new je(this._pt,t,e,0,1,Sp,null,s),c=0,u=0,f,h,p,g,_,m,d,T;for(l.b=n,l.e=r,n+="",r+="",(d=~r.indexOf("random("))&&(r=Bs(r)),a&&(T=[n,r],a(T,t,e),n=T[0],r=T[1]),h=n.match(nl)||[];f=nl.exec(r);)g=f[0],_=r.substring(c,f.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Wr(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=nl.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(zd.test(r)||d)&&(l.e=0),this._pt=l,l},ru=function(t,e,n,r,s,a,o,l,c,u){de(r)&&(r=r(s||0,t,a));var f=t[e],h=n!=="get"?n:de(f)?c?t[e.indexOf("set")||!de(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,p=de(f)?c?Ry:vp:au,g;if(be(r)&&(~r.indexOf("random(")&&(r=Bs(r)),r.charAt(1)==="="&&(g=Wr(h,r)+(De(h)||0),(g||g===0)&&(r=g))),!u||h!==r||Mc)return!isNaN(h*r)&&r!==""?(g=new je(this._pt,t,e,+h||0,r-(h||0),typeof f=="boolean"?Py:xp,0,p),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!f&&!(e in t)&&tu(e,r),Ey.call(this,t,e,h,r,p,l||cn.stringFilter,c))},Ty=function(t,e,n,r,s){if(de(t)&&(t=Ps(t,s,e,n,r)),!Wn(t)||t.style&&t.nodeType||Ie(t)||Od(t))return be(t)?Ps(t,s,e,n,r):t;var a={},o;for(o in t)a[o]=Ps(t[o],s,e,n,r);return a},mp=function(t,e,n,r,s,a){var o,l,c,u;if(nn[t]&&(o=new nn[t]).init(s,o.rawVars?e[t]:Ty(e[t],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new je(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Br))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ei,Mc,su=function i(t,e,n){var r=t.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,p=r.autoRevert,g=t._dur,_=t._startAt,m=t._targets,d=t.parent,T=d&&d.data==="nested"?d.vars.targets:m,y=t._overwrite==="auto"&&!Zc,v=t.timeline,b,w,A,P,x,M,L,k,O,q,$,V,Y;if(v&&(!h||!s)&&(s="none"),t._ease=ar(s,ss.ease),t._yEase=f?fp(ar(f===!0?s:f,ss.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!v&&!!r.runBackwards,!v||h&&!r.stagger){if(k=m[0]?rr(m[0]).harness:0,V=k&&r[k.prop],b=to(r,eu),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!p?_.render(-1,!0):_.revert(u&&g?za:JM),_._lazy=0),a){if(Li(t._startAt=xe.set(m,fn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&qe(l),startAt:null,delay:0,onUpdate:c&&function(){return an(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ae||!o&&!p)&&t._startAt.revert(za),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),A=fn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&qe(l),immediateRender:o,stagger:0,parent:d},b),V&&(A[k.prop]=V),Li(t._startAt=xe.set(m,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ae?t._startAt.revert(za):t._startAt.render(-1,!0)),t._zTime=e,!o)i(t._startAt,Ue,Ue);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&qe(l)||l&&!g,w=0;w<m.length;w++){if(x=m[w],L=x._gsap||iu(m)[w]._gsap,t._ptLookup[w]=q={},mc[L.id]&&Ri.length&&Qa(),$=T===m?w:T.indexOf(x),k&&(O=new k).init(x,V||b,t,$,T)!==!1&&(t._pt=P=new je(t._pt,x,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(W){q[W]=P}),O.priority&&(M=1)),!k||V)for(A in b)nn[A]&&(O=mp(A,b,t,$,x,T))?O.priority&&(M=1):q[A]=P=ru.call(t,x,A,"get",b[A],$,T,0,r.stringFilter);t._op&&t._op[w]&&t.kill(x,t._op[w]),y&&t._pt&&(Ei=t,ce.killTweensOf(x,q,t.globalTime(e)),Y=!t.parent,Ei=0),t._pt&&l&&(mc[L.id]=1)}M&&Mp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,h&&e<=0&&v.render(Vn,!0,!0)},by=function(t,e,n,r,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,p;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,p=t._targets.length;p--;){if(u=h[p][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Mc=1,t.vars[e]="+=0",su(t,o),Mc=0,l?Fs(e+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)f=c[p],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=pe(n)+De(f.e)),f.b&&(f.b=u.s+De(f.b))},wy=function(t,e){var n=t[0]?rr(t[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return e;s=as({},e);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Ay=function(t,e,n,r){var s=e.ease||r||"power1.inOut",a,o;if(Ie(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Ps=function(t,e,n,r,s){return de(t)?t.call(e,n,r,s):be(t)&&~t.indexOf("random(")?Bs(t):t},_p=nu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",gp={};Ye(_p+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return gp[i]=1});var xe=function(i){Nd(t,i);function t(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Rs(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,T=r.parent||ce,y=(Ie(n)||Od(n)?ui(n[0]):"length"in r)?[n]:vn(n),v,b,w,A,P,x,M,L;if(o._targets=y.length?iu(y):Fs("GSAP target "+n+" not found. https://gsap.com",!cn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||h||Ra(c)||Ra(u)){if(r=o.vars,v=o.timeline=new ke({data:"nested",defaults:_||{},targets:T&&T.data==="nested"?T.vars.targets:y}),v.kill(),v.parent=v._dp=Jn(o),v._start=0,h||Ra(c)||Ra(u)){if(A=y.length,M=h&&ep(h),Wn(h))for(P in h)~_p.indexOf(P)&&(L||(L={}),L[P]=h[P]);for(b=0;b<A;b++)w=to(r,gp),w.stagger=0,d&&(w.yoyoEase=d),L&&as(w,L),x=y[b],w.duration=+Ps(c,Jn(o),b,x,y),w.delay=(+Ps(u,Jn(o),b,x,y)||0)-o._delay,!h&&A===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),v.to(x,w,M?M(b,x,y):0),v._ease=Gt.none;v.duration()?c=u=0:o.timeline=0}else if(g){Rs(fn(v.vars.defaults,{ease:"none"})),v._ease=ar(g.ease||r.ease||"none");var k=0,O,q,$;if(Ie(g))g.forEach(function(V){return v.to(y,V,">")}),v.duration();else{w={};for(P in g)P==="ease"||P==="easeEach"||Ay(P,g[P],w,g.easeEach);for(P in w)for(O=w[P].sort(function(V,Y){return V.t-Y.t}),k=0,b=0;b<O.length;b++)q=O[b],$={ease:q.e,duration:(q.t-(b?O[b-1].t:0))/100*c},$[P]=q.v,v.to(y,$,k),k+=$.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return p===!0&&!Zc&&(Ei=Jn(o),ce.killTweensOf(y),Ei=0),Fn(T,Jn(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!g&&o._start===Se(T._time)&&qe(f)&&ry(Jn(o))&&T.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-u)||0)),m&&Kd(Jn(o),m),o}var e=t.prototype;return e.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Ue&&!u?l:r<Ue?0:r,h,p,g,_,m,d,T,y,v;if(!c)ay(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(h=Se(f%_),f===l?(g=this._repeat,h=c):(m=Se(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),d=this._yoyo&&g&1,d&&(v=this._yEase,h=c-h),m=os(this._tTime,_),h===o&&!a&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(y&&this._yEase&&hp(y,d),this.vars.repeatRefresh&&!d&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Se(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Jd(this,u?r:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(v||this._ease)(h/c),this._from&&(this.ratio=T=1-T),h&&!o&&!s&&!g&&(an(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(T,p.d),p=p._next;y&&y.render(r<0?r:y._dur*y._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&_c(this,r,s,a),an(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&an(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&_c(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Li(this,1),!s&&!(u&&!o)&&(f||o||d)&&(an(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,a,o,l){zs||sn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||su(this,c),u=this._ease(c/this._dur),by(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(So(this,0),this.parent||jd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ws(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ae),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ei&&Ei.vars.overwrite!==!0)._first||ws(this),this.parent&&a!==this.timeline.totalDuration()&&ls(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?vn(r):o,c=this._ptLookup,u=this._pt,f,h,p,g,_,m,d;if((!s||s==="all")&&ny(o,l))return s==="all"&&(this._pt=0),ws(this);for(f=this._op=this._op||[],s!=="all"&&(be(s)&&(_={},Ye(s,function(T){return _[T]=1}),s=_),s=wy(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){h=c[d],s==="all"?(f[d]=s,g=h,p={}):(p=f[d]=f[d]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&vo(this,m,"_pt"),delete h[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&ws(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Cs(1,arguments)},t.delayedCall=function(r,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(r,s,a){return Cs(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,a){return ce.killTweensOf(r,s,a)},t}(ks);fn(xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ye("staggerTo,staggerFrom,staggerFromTo",function(i){xe[i]=function(){var t=new ke,e=vc.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var au=function(t,e,n){return t[e]=n},vp=function(t,e,n){return t[e](n)},Ry=function(t,e,n,r){return t[e](r.fp,n)},Cy=function(t,e,n){return t.setAttribute(e,n)},ou=function(t,e){return de(t[e])?vp:Kc(t[e])&&t.setAttribute?Cy:au},xp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Py=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Sp=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},lu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Dy=function(t,e,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(t,e,n),s=a},Ly=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?vo(this,e,"_pt"):e.dep||(n=1),e=r;return!n},Uy=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},Mp=function(t){for(var e=t._pt,n,r,s,a;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:a)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:a=e,e=n}t._pt=s},je=function(){function i(e,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||xp,this.d=l||this,this.set=c||au,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Uy,this.m=n,this.mt=s,this.tween=r},i}();Ye(nu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return eu[i]=1});un.TweenMax=un.TweenLite=xe;un.TimelineLite=un.TimelineMax=ke;ce=new ke({sortChildren:!1,defaults:ss,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});cn.stringFilter=up;var or=[],Ha={},Iy=[],Wf=0,Ny=0,ol=function(t){return(Ha[t]||Iy).map(function(e){return e()})},yc=function(){var t=Date.now(),e=[];t-Wf>2&&(ol("matchMediaInit"),or.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=In.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),ol("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Wf=t,ol("matchMedia"))},yp=function(){function i(e,n){this.selector=n&&xc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ny++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){de(n)&&(s=r,r=n,n=de);var a=this,o=function(){var c=le,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=xc(s)),le=a,f=r.apply(a,arguments),de(f)&&a._r.push(f),le=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===de?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var r=le;le=null,n(this),le=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof xe&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof ke?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof xe)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=or.length;a--;)or[a].id===this.id&&or.splice(a,1)},t.revert=function(n){this.kill(n||{})},i}(),Fy=function(){function i(e){this.contexts=[],this.scope=e,le&&le.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){Wn(n)||(n={matches:n});var a=new yp(0,s||this.scope),o=a.conditions={},l,c,u;le&&!a.selector&&(a.selector=le.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=In.matchMedia(n[c]),l&&(or.indexOf(a)<0&&or.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(yc):l.addEventListener("change",yc)));return u&&r(a,function(f){return a.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),no={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return op(r)})},timeline:function(t){return new ke(t)},getTweensOf:function(t,e){return ce.getTweensOf(t,e)},getProperty:function(t,e,n,r){be(t)&&(t=vn(t)[0]);var s=rr(t||{}).get,a=n?Yd:qd;return n==="native"&&(n=""),t&&(e?a((nn[e]&&nn[e].get||s)(t,e,n,r)):function(o,l,c){return a((nn[o]&&nn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=vn(t),t.length>1){var r=t.map(function(u){return Ke.quickSetter(u,e,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}t=t[0]||{};var a=nn[e],o=rr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var f=new a;Br._pt=0,f.init(t,n?u+n:u,Br,0,[t]),f.render(1,f),Br._pt&&lu(1,Br)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var r,s=Ke.to(t,fn((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return ce.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ar(t.ease,ss.ease)),zf(ss,t||{})},config:function(t){return zf(cn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,a=t.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!nn[o]&&!un[o]&&Fs(e+" effect requires "+o+" plugin.")}),il[e]=function(o,l,c){return n(vn(o),fn(l||{},s),c)},a&&(ke.prototype[e]=function(o,l,c){return this.add(il[e](o,Wn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Gt[t]=ar(e)},parseEase:function(t,e){return arguments.length?ar(t,e):Gt},getById:function(t){return ce.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new ke(t),r,s;for(n.smoothChildTiming=qe(t.smoothChildTiming),ce.remove(n),n._dp=0,n._time=n._tTime=ce._time,r=ce._first;r;)s=r._next,(e||!(!r._dur&&r instanceof xe&&r.vars.onComplete===r._targets[0]))&&Fn(n,r,r._start-r._delay),r=s;return Fn(ce,n,0),n},context:function(t,e){return t?new yp(t,e):le},matchMedia:function(t){return new Fy(t)},matchMediaRefresh:function(){return or.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||yc()},addEventListener:function(t,e){var n=Ha[t]||(Ha[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ha[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:py,wrapYoyo:my,distribute:ep,random:ip,snap:np,normalize:dy,getUnit:De,clamp:cy,splitColor:lp,toArray:vn,selector:xc,mapRange:sp,pipe:fy,unitize:hy,interpolate:_y,shuffle:tp},install:Vd,effects:il,ticker:sn,updateRoot:ke.updateRoot,plugins:nn,globalTimeline:ce,core:{PropTween:je,globals:Gd,Tween:xe,Timeline:ke,Animation:ks,getCache:rr,_removeLinkedListItem:vo,reverting:function(){return Ae},context:function(t){return t&&le&&(le.data.push(t),t._ctx=le),le},suppressOverwrites:function(t){return Zc=t}}};Ye("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return no[i]=xe[i]});sn.add(ke.updateRoot);Br=no.to({},{duration:0});var Oy=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},By=function(t,e){var n=t._targets,r,s,a;for(r in e)for(s=n.length;s--;)a=t._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=Oy(a,r)),a&&a.modifier&&a.modifier(e[r],t,n[s],r))},ll=function(t,e){return{name:t,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(be(s)&&(l={},Ye(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}By(o,s)}}}},Ke=no.registerPlugin({name:"attr",init:function(t,e,n,r,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ae?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ll("roundProps",Sc),ll("modifiers"),ll("snap",np))||no;xe.version=ke.version=Ke.version="3.12.7";Hd=1;Jc()&&cs();Gt.Power0;Gt.Power1;Gt.Power2;Gt.Power3;Gt.Power4;Gt.Linear;Gt.Quad;Gt.Cubic;Gt.Quart;Gt.Quint;Gt.Strong;Gt.Elastic;Gt.Back;Gt.SteppedEase;Gt.Bounce;Gt.Sine;Gt.Expo;Gt.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Xf,Ti,Xr,cu,er,$f,uu,zy=function(){return typeof window<"u"},fi={},qi=180/Math.PI,$r=Math.PI/180,Ur=Math.atan2,qf=1e8,fu=/([A-Z])/g,ky=/(left|right|width|margin|padding|x)/i,Hy=/[\s,\(]\S/,zn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ec=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Vy=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Gy=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Wy=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Ep=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Tp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Xy=function(t,e,n){return t.style[e]=n},$y=function(t,e,n){return t.style.setProperty(e,n)},qy=function(t,e,n){return t._gsap[e]=n},Yy=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},jy=function(t,e,n,r,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Zy=function(t,e,n,r,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},ue="transform",Ze=ue+"Origin",Ky=function i(t,e){var n=this,r=this.target,s=r.style,a=r._gsap;if(t in fi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=zn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=ti(r,o)}):this.tfm[t]=a.x?a[t]:ti(r,t),t===Ze&&(this.tfm.zOrigin=a.zOrigin);else return zn.transform.split(",").forEach(function(o){return i.call(n,o,e)});if(this.props.indexOf(ue)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Ze,e,"")),t=ue}(s||e)&&this.props.push(t,e,s[t])},bp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Jy=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(fu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=uu(),(!s||!s.isStart)&&!n[ue]&&(bp(n),r.zOrigin&&n[Ze]&&(n[Ze]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},wp=function(t,e){var n={target:t,props:[],revert:Jy,save:Ky};return t._gsap||Ke.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return n.save(r)}),n},Ap,Tc=function(t,e){var n=Ti.createElementNS?Ti.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ti.createElement(t);return n&&n.style?n:Ti.createElement(t)},Gn=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(fu,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,us(e)||e,1)||""},Yf="O,Moz,ms,Ms,Webkit".split(","),us=function(t,e,n){var r=e||er,s=r.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Yf[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Yf[a]:"")+t},bc=function(){zy()&&window.document&&(Xf=window,Ti=Xf.document,Xr=Ti.documentElement,er=Tc("div")||{style:{}},Tc("div"),ue=us(ue),Ze=ue+"Origin",er.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ap=!!us("perspective"),uu=Ke.core.reverting,cu=1)},jf=function(t){var e=t.ownerSVGElement,n=Tc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Xr.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Xr.removeChild(n),s},Zf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Rp=function(t){var e,n;try{e=t.getBBox()}catch{e=jf(t),n=1}return e&&(e.width||e.height)||n||(e=jf(t)),e&&!e.width&&!e.x&&!e.y?{x:+Zf(t,["x","cx","x1"])||0,y:+Zf(t,["y","cy","y1"])||0,width:0,height:0}:e},Cp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Rp(t))},ur=function(t,e){if(e){var n=t.style,r;e in fi&&e!==Ze&&(e=ue),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(fu,"-$1").toLowerCase())):n.removeAttribute(e)}},bi=function(t,e,n,r,s,a){var o=new je(t._pt,e,n,0,1,a?Tp:Ep);return t._pt=o,o.b=r,o.e=s,t._props.push(n),o},Kf={deg:1,rad:1,turn:1},Qy={grid:1,flex:1},Ui=function i(t,e,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=er.style,l=ky.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",g,_,m,d;if(r===a||!s||Kf[r]||Kf[a])return s;if(a!=="px"&&!h&&(s=i(t,e,n,"px")),d=t.getCTM&&Cp(t),(p||a==="%")&&(fi[e]||~e.indexOf("adius")))return g=d?t.getBBox()[l?"width":"height"]:t[u],pe(p?s/g*f:s/100*g);if(o[l?"width":"height"]=f+(h?a:r),_=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Ti||!_.appendChild)&&(_=Ti.body),m=_._gsap,m&&p&&m.width&&l&&m.time===sn.time&&!m.uncache)return pe(s/m.width*f);if(p&&(e==="height"||e==="width")){var T=t.style[e];t.style[e]=f+r,g=t[u],T?t.style[e]=T:ur(t,e)}else(p||a==="%")&&!Qy[Gn(_,"display")]&&(o.position=Gn(t,"position")),_===t&&(o.position="static"),_.appendChild(er),g=er[u],_.removeChild(er),o.position="absolute";return l&&p&&(m=rr(_),m.time=sn.time,m.width=_[u]),pe(h?g*s/f:g&&s?f/g*s:0)},ti=function(t,e,n,r){var s;return cu||bc(),e in zn&&e!=="transform"&&(e=zn[e],~e.indexOf(",")&&(e=e.split(",")[0])),fi[e]&&e!=="transform"?(s=Vs(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ro(Gn(t,Ze))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=io[e]&&io[e](t,e,n)||Gn(t,e)||Xd(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ui(t,e,s,n)+n:s},tE=function(t,e,n,r){if(!n||n==="none"){var s=us(e,t,1),a=s&&Gn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Gn(t,"borderTopColor"))}var o=new je(this._pt,t.style,e,0,1,Sp),l=0,c=0,u,f,h,p,g,_,m,d,T,y,v,b;if(o.b=n,o.e=r,n+="",r+="",r==="auto"&&(_=t.style[e],t.style[e]=r,r=Gn(t,e)||r,_?t.style[e]=_:ur(t,e)),u=[n,r],up(u),n=u[0],r=u[1],h=n.match(Or)||[],b=r.match(Or)||[],b.length){for(;f=Or.exec(r);)m=f[0],T=r.substring(l,f.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(p=parseFloat(_)||0,v=_.substr((p+"").length),m.charAt(1)==="="&&(m=Wr(p,m)+v),d=parseFloat(m),y=m.substr((d+"").length),l=Or.lastIndex-y.length,y||(y=y||cn.units[e]||v,l===r.length&&(r+=y,o.e+=y)),v!==y&&(p=Ui(t,e,_,y)||0),o._pt={_next:o._pt,p:T||c===1?T:",",s:p,c:d-p,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=e==="display"&&r==="none"?Tp:Ep;return zd.test(r)&&(o.e=0),this._pt=o,o},Jf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eE=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=Jf[n]||n,e[1]=Jf[r]||r,e.join(" ")},nE=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],fi[o]&&(l=1,o=o==="transformOrigin"?Ze:ue),ur(n,o);l&&(ur(n,ue),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Vs(n,1),a.uncache=1,bp(r)))}},io={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var a=t._pt=new je(t._pt,e,n,0,0,nE);return a.u=r,a.pr=-10,a.tween=s,t._props.push(n),1}}},Hs=[1,0,0,1,0,0],Pp={},Dp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Qf=function(t){var e=Gn(t,ue);return Dp(e)?Hs:e.substr(7).match(Bd).map(pe)},hu=function(t,e){var n=t._gsap||rr(t),r=t.style,s=Qf(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Hs:s):(s===Hs&&!t.offsetParent&&t!==Xr&&!n.svg&&(l=r.display,r.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Xr.appendChild(t)),s=Qf(t),l?r.display=l:ur(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Xr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},wc=function(t,e,n,r,s,a){var o=t._gsap,l=s||hu(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],T=l[5],y=e.split(" "),v=parseFloat(y[0])||0,b=parseFloat(y[1])||0,w,A,P,x;n?l!==Hs&&(A=p*m-g*_)&&(P=v*(m/A)+b*(-_/A)+(_*T-m*d)/A,x=v*(-g/A)+b*(p/A)-(p*T-g*d)/A,v=P,b=x):(w=Rp(t),v=w.x+(~y[0].indexOf("%")?v/100*w.width:v),b=w.y+(~(y[1]||y[0]).indexOf("%")?b/100*w.height:b)),r||r!==!1&&o.smooth?(d=v-c,T=b-u,o.xOffset=f+(d*p+T*_)-d,o.yOffset=h+(d*g+T*m)-T):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=b,o.smooth=!!r,o.origin=e,o.originIsAbsolute=!!n,t.style[Ze]="0px 0px",a&&(bi(a,o,"xOrigin",c,v),bi(a,o,"yOrigin",u,b),bi(a,o,"xOffset",f,o.xOffset),bi(a,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+b)},Vs=function(t,e){var n=t._gsap||new pp(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Gn(t,Ze)||"0",u,f,h,p,g,_,m,d,T,y,v,b,w,A,P,x,M,L,k,O,q,$,V,Y,W,ot,U,C,nt,lt,B,j;return u=f=h=_=m=d=T=y=v=0,p=g=1,n.svg=!!(t.getCTM&&Cp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ue]!=="none"?l[ue]:"")),r.scale=r.rotate=r.translate="none"),A=hu(t,n.svg),n.svg&&(n.uncache?(W=t.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),wc(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,w=n.yOrigin||0,A!==Hs&&(L=A[0],k=A[1],O=A[2],q=A[3],u=$=A[4],f=V=A[5],A.length===6?(p=Math.sqrt(L*L+k*k),g=Math.sqrt(q*q+O*O),_=L||k?Ur(k,L)*qi:0,T=O||q?Ur(O,q)*qi+_:0,T&&(g*=Math.abs(Math.cos(T*$r))),n.svg&&(u-=b-(b*L+w*O),f-=w-(b*k+w*q))):(j=A[6],lt=A[7],U=A[8],C=A[9],nt=A[10],B=A[11],u=A[12],f=A[13],h=A[14],P=Ur(j,nt),m=P*qi,P&&(x=Math.cos(-P),M=Math.sin(-P),Y=$*x+U*M,W=V*x+C*M,ot=j*x+nt*M,U=$*-M+U*x,C=V*-M+C*x,nt=j*-M+nt*x,B=lt*-M+B*x,$=Y,V=W,j=ot),P=Ur(-O,nt),d=P*qi,P&&(x=Math.cos(-P),M=Math.sin(-P),Y=L*x-U*M,W=k*x-C*M,ot=O*x-nt*M,B=q*M+B*x,L=Y,k=W,O=ot),P=Ur(k,L),_=P*qi,P&&(x=Math.cos(P),M=Math.sin(P),Y=L*x+k*M,W=$*x+V*M,k=k*x-L*M,V=V*x-$*M,L=Y,$=W),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=pe(Math.sqrt(L*L+k*k+O*O)),g=pe(Math.sqrt(V*V+j*j)),P=Ur($,V),T=Math.abs(P)>2e-4?P*qi:0,v=B?1/(B<0?-B:B):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Dp(Gn(t,ue)),Y&&t.setAttribute("transform",Y))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(p*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=pe(p),n.scaleY=pe(g),n.rotation=pe(_)+o,n.rotationX=pe(m)+o,n.rotationY=pe(d)+o,n.skewX=T+o,n.skewY=y+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[Ze]=ro(c)),n.xOffset=n.yOffset=0,n.force3D=cn.force3D,n.renderTransform=n.svg?rE:Ap?Lp:iE,n.uncache=0,n},ro=function(t){return(t=t.split(" "))[0]+" "+t[1]},cl=function(t,e,n){var r=De(e);return pe(parseFloat(e)+parseFloat(Ui(t,"x",n+"px",r)))+r},iE=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Lp(t,e)},Gi="0deg",Ts="0px",Wi=") ",Lp=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,d=n.force3D,T=n.target,y=n.zOrigin,v="",b=d==="auto"&&t&&t!==1||d===!0;if(y&&(f!==Gi||u!==Gi)){var w=parseFloat(u)*$r,A=Math.sin(w),P=Math.cos(w),x;w=parseFloat(f)*$r,x=Math.cos(w),a=cl(T,a,A*x*-y),o=cl(T,o,-Math.sin(w)*-y),l=cl(T,l,P*x*-y+y)}m!==Ts&&(v+="perspective("+m+Wi),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(b||a!==Ts||o!==Ts||l!==Ts)&&(v+=l!==Ts||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Wi),c!==Gi&&(v+="rotate("+c+Wi),u!==Gi&&(v+="rotateY("+u+Wi),f!==Gi&&(v+="rotateX("+f+Wi),(h!==Gi||p!==Gi)&&(v+="skew("+h+", "+p+Wi),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Wi),T.style[ue]=v||"translate(0, 0)"},rE=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,d=n.yOffset,T=n.forceCSS,y=parseFloat(a),v=parseFloat(o),b,w,A,P,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=$r,c*=$r,b=Math.cos(l)*f,w=Math.sin(l)*f,A=Math.sin(l-c)*-h,P=Math.cos(l-c)*h,c&&(u*=$r,x=Math.tan(c-u),x=Math.sqrt(1+x*x),A*=x,P*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),b*=x,w*=x)),b=pe(b),w=pe(w),A=pe(A),P=pe(P)):(b=f,P=h,w=A=0),(y&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(y=Ui(p,"x",a,"px"),v=Ui(p,"y",o,"px")),(g||_||m||d)&&(y=pe(y+g-(g*b+_*A)+m),v=pe(v+_-(g*w+_*P)+d)),(r||s)&&(x=p.getBBox(),y=pe(y+r/100*x.width),v=pe(v+s/100*x.height)),x="matrix("+b+","+w+","+A+","+P+","+y+","+v+")",p.setAttribute("transform",x),T&&(p.style[ue]=x)},sE=function(t,e,n,r,s){var a=360,o=be(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?qi:1),c=l-r,u=r+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-360)),f==="cw"&&c<0?c=(c+a*qf)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*qf)%a-~~(c/a)*a)),t._pt=h=new je(t._pt,e,n,r,c,Vy),h.e=u,h.u="deg",t._props.push(n),h},th=function(t,e){for(var n in e)t[n]=e[n];return t},aE=function(t,e,n){var r=th({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,p,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ue]=e,o=Vs(n,1),ur(n,ue),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ue],a[ue]=e,o=Vs(n,1),a[ue]=c);for(l in fi)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=De(c),g=De(u),f=p!==g?Ui(n,l,c,g):parseFloat(c),h=parseFloat(u),t._pt=new je(t._pt,o,l,f,h-f,Ec),t._pt.u=g||0,t._props.push(l));th(o,r)};Ye("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",a=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(o){return t<2?i+o:"border"+o+i});io[t>1?"border"+i:i]=function(o,l,c,u,f){var h,p;if(arguments.length<4)return h=a.map(function(g){return ti(o,g,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},a.forEach(function(g,_){return p[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,p,f)}});var Up={name:"css",register:bc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,f,h,p,g,_,m,d,T,y,v,b,w,A,P;cu||bc(),this.styles=this.styles||wp(t),P=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(nn[_]&&mp(_,e,n,r,t,s)))){if(p=typeof u,g=io[_],p==="function"&&(u=u.call(n,r,t,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Bs(u)),g)g(this,t,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Ci.lastIndex=0,Ci.test(c)||(m=De(c),d=De(u)),d?m!==d&&(c=Ui(t,_,c,d)+d):m&&(u+=m),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),P.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,t,s):l[_],be(c)&&~c.indexOf("random(")&&(c=Bs(c)),De(c+"")||c==="auto"||(c+=cn.units[_]||De(ti(t,_))||""),(c+"").charAt(1)==="="&&(c=ti(t,_))):c=ti(t,_),h=parseFloat(c),T=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),f=parseFloat(u),_ in zn&&(_==="autoAlpha"&&(h===1&&ti(t,"visibility")==="hidden"&&f&&(h=0),P.push("visibility",0,o.visibility),bi(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=zn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in fi,y){if(this.styles.save(_),v||(b=t._gsap,b.renderTransform&&!e.parseTransform||Vs(t,e.parseTransform),w=e.smoothOrigin!==!1&&b.smooth,v=this._pt=new je(this._pt,o,ue,0,1,b.renderTransform,b,0,-1),v.dep=1),_==="scale")this._pt=new je(this._pt,b,"scaleY",b.scaleY,(T?Wr(b.scaleY,T+f):f)-b.scaleY||0,Ec),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(Ze,0,o[Ze]),u=eE(u),b.svg?wc(t,u,0,w,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==b.zOrigin&&bi(this,b,"zOrigin",b.zOrigin,d),bi(this,o,_,ro(c),ro(u)));continue}else if(_==="svgOrigin"){wc(t,u,1,w,0,this);continue}else if(_ in Pp){sE(this,b,_,h,T?Wr(h,T+u):u);continue}else if(_==="smoothOrigin"){bi(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){aE(this,u,t);continue}}else _ in o||(_=us(_)||_);if(y||(f||f===0)&&(h||h===0)&&!Hy.test(u)&&_ in o)m=(c+"").substr((h+"").length),f||(f=0),d=De(u)||(_ in cn.units?cn.units[_]:m),m!==d&&(h=Ui(t,_,c,d)),this._pt=new je(this._pt,y?b:o,_,h,(T?Wr(h,T+f):f)-h,!y&&(d==="px"||_==="zIndex")&&e.autoRound!==!1?Wy:Ec),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=Gy);else if(_ in o)tE.call(this,t,_,c,T?T+u:u);else if(_ in t)this.add(t,_,c||t[_],T?T+u:u,r,s);else if(_!=="parseTransform"){tu(_,u);continue}y||(_ in o?P.push(_,0,o[_]):typeof t[_]=="function"?P.push(_,2,t[_]()):P.push(_,1,c||t[_])),a.push(_)}}A&&Mp(this)},render:function(t,e){if(e.tween._time||!uu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ti,aliases:zn,getSetter:function(t,e,n){var r=zn[e];return r&&r.indexOf(",")<0&&(e=r),e in fi&&e!==Ze&&(t._gsap.x||ti(t,"x"))?n&&$f===n?e==="scale"?Yy:qy:($f=n||{})&&(e==="scale"?jy:Zy):t.style&&!Kc(t.style[e])?Xy:~e.indexOf("-")?$y:ou(t,e)},core:{_removeProperty:ur,_getMatrix:hu}};Ke.utils.checkPrefix=us;Ke.core.getStyleSaver=wp;(function(i,t,e,n){var r=Ye(i+","+t+","+e,function(s){fi[s]=1});Ye(t,function(s){cn.units[s]="deg",Pp[s]=1}),zn[r[13]]=i+","+t,Ye(n,function(s){var a=s.split(":");zn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ye("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){cn.units[i]="px"});Ke.registerPlugin(Up);var rn=Ke.registerPlugin(Up)||Ke;rn.core.Tween;function Ip(i,t){ps(t,!1);let e,n=0,r,s=document.createElement("div"),a=[],o=[],l=2e3,c=.5,u=.05,f,h;const p=async d=>{const T=e[d];if(!T)return;T.style.display="flex";const y=new Id(T,{types:"chars"});rn.set(y.chars,{opacity:0,y:"2rem",filter:"blur(20px)"}),await new Promise(v=>setTimeout(v,0)),rn.to(y.chars,{opacity:1,y:0,filter:"blur(0px)",stagger:u,duration:c*.3,onComplete:()=>{rn.set(y.chars,{clearProps:"all"})}});for(let v of T.children)v.setAttribute("style","display: flex; overflow-visible; position: relative;");s&&rn.to(s,{width:`calc(${a[d]}px + 1.15rem)`,height:`${o[d]}px`,duration:c*.8,ease:"power2.inOut"})},g=()=>{r=window.setInterval(async()=>{e.forEach(d=>{d.style.display="none"}),n=(n+1)%e.length,await p(n)},l)},_=async()=>{const d=document.createElement("div");d.style.position="absolute",d.style.visibility="hidden",d.style.display="flex",h.insertBefore(d,h.children[1]);const T=Array.from(e).map(y=>{const v=y.cloneNode(!0);return v.style.display="flex",d.appendChild(v),v});await new Promise(y=>{requestAnimationFrame(()=>{setTimeout(()=>{a=T.map(v=>v.getBoundingClientRect().width),o=T.map(v=>v.offsetHeight),s&&(s.style.width=`calc(${a[n]}px + 1.15rem)`,s.style.height=`${o[n]}px`),h.removeChild(d),y()},50)})})},m=async()=>{e=document.querySelectorAll(".animated-word-box"),h=e[0].parentElement;for(let d of e)s.appendChild(d);h.insertBefore(s,h.children[1]||null),s&&(s.style.marginLeft="0.25rem",s.style.display="flex",s.addEventListener("pointerenter",()=>{clearInterval(r),l=400,c=.3,u=.015,document.body.style.cursor="crosshair",g()}),s.addEventListener("pointerleave",()=>{clearInterval(r),l=2e3,c=.5,u=.05,document.body.style.cursor="default",g()})),setTimeout(()=>{_().then(()=>{e.forEach(d=>{d.style.display="none"}),p(n),g()})},100),f=new ResizeObserver(_),f.observe(h.parentElement)};$s(()=>(m(),()=>{f&&f.disconnect()})),Xs(),ms()}qs(Ip,{},[],[],!0);var oE="1.1.20";function Np(i,t,e){return Math.max(i,Math.min(t,e))}function lE(i,t,e){return(1-e)*i+e*t}function cE(i,t,e,n){return lE(i,t,1-Math.exp(-e*n))}function uE(i,t){return(i%t+t)%t}var fE=class{constructor(){gt(this,"isRunning",!1);gt(this,"value",0);gt(this,"from",0);gt(this,"to",0);gt(this,"currentTime",0);gt(this,"lerp");gt(this,"duration");gt(this,"easing");gt(this,"onUpdate")}advance(i){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=i;const n=Np(0,this.currentTime/this.duration,1);t=n>=1;const r=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=cE(this.value,this.to,this.lerp*60,i),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(i,t,{lerp:e,duration:n,easing:r,onStart:s,onUpdate:a}){this.from=this.value=i,this.to=t,this.lerp=e,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function hE(i,t){let e;return function(...n){let r=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,i.apply(r,n)},t)}}var dE=class{constructor(i,t,{autoResize:e=!0,debounce:n=250}={}){gt(this,"width",0);gt(this,"height",0);gt(this,"scrollHeight",0);gt(this,"scrollWidth",0);gt(this,"debouncedResize");gt(this,"wrapperResizeObserver");gt(this,"contentResizeObserver");gt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});gt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});gt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=t,e&&(this.debouncedResize=hE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var i,t;(i=this.wrapperResizeObserver)==null||i.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Fp=class{constructor(){gt(this,"events",{})}emit(i,...t){var n;let e=this.events[i]||[];for(let r=0,s=e.length;r<s;r++)(n=e[r])==null||n.call(e,...t)}on(i,t){var e;return(e=this.events[i])!=null&&e.push(t)||(this.events[i]=[t]),()=>{var n;this.events[i]=(n=this.events[i])==null?void 0:n.filter(r=>t!==r)}}off(i,t){var e;this.events[i]=(e=this.events[i])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},eh=100/6,Si={passive:!1},pE=class{constructor(i,t={wheelMultiplier:1,touchMultiplier:1}){gt(this,"touchStart",{x:0,y:0});gt(this,"lastDelta",{x:0,y:0});gt(this,"window",{width:0,height:0});gt(this,"emitter",new Fp);gt(this,"onTouchStart",i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});gt(this,"onTouchMove",i=>{const{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i,n=-(t-this.touchStart.x)*this.options.touchMultiplier,r=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:i})});gt(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});gt(this,"onWheel",i=>{let{deltaX:t,deltaY:e,deltaMode:n}=i;const r=n===1?eh:n===2?this.window.width:1,s=n===1?eh:n===2?this.window.height:1;t*=r,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:i})});gt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Si),this.element.addEventListener("touchstart",this.onTouchStart,Si),this.element.addEventListener("touchmove",this.onTouchMove,Si),this.element.addEventListener("touchend",this.onTouchEnd,Si)}on(i,t){return this.emitter.on(i,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Si),this.element.removeEventListener("touchstart",this.onTouchStart,Si),this.element.removeEventListener("touchmove",this.onTouchMove,Si),this.element.removeEventListener("touchend",this.onTouchEnd,Si)}},mE=class{constructor({wrapper:i=window,content:t=document.documentElement,eventsTarget:e=i,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:a=35,duration:o,easing:l=w=>Math.min(1,1.001-Math.pow(2,-10*w)),lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h="vertical",touchMultiplier:p=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:d,overscroll:T=!0,autoRaf:y=!1,anchors:v=!1,__experimental__naiveDimensions:b=!1}={}){gt(this,"_isScrolling",!1);gt(this,"_isStopped",!1);gt(this,"_isLocked",!1);gt(this,"_preventNextNativeScrollEvent",!1);gt(this,"_resetVelocityTimeout",null);gt(this,"__rafID",null);gt(this,"isTouching");gt(this,"time",0);gt(this,"userData",{});gt(this,"lastVelocity",0);gt(this,"velocity",0);gt(this,"direction",0);gt(this,"options");gt(this,"targetScroll");gt(this,"animatedScroll");gt(this,"animate",new fE);gt(this,"emitter",new Fp);gt(this,"dimensions");gt(this,"virtualScroll");gt(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});gt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});gt(this,"onClick",i=>{const e=i.composedPath().find(n=>{var r;return n instanceof HTMLAnchorElement&&((r=n.getAttribute("href"))==null?void 0:r.startsWith("#"))});if(e){const n=e.getAttribute("href");if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;this.scrollTo(n,r)}}});gt(this,"onPointerDown",i=>{i.button===1&&this.reset()});gt(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;const{deltaX:t,deltaY:e,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=t===0&&e===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(a||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>{var d,T,y;return m instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(m))||((d=m.hasAttribute)==null?void 0:d.call(m,"data-lenis-prevent"))||r&&((T=m.hasAttribute)==null?void 0:T.call(m,"data-lenis-prevent-touch"))||s&&((y=m.hasAttribute)==null?void 0:y.call(m,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=e;this.options.gestureOrientation==="both"?h=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(h=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const p=r&&this.options.syncTouch,_=r&&n.type==="touchend"&&Math.abs(h)>5;_&&(h=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+h,{programmatic:!1,...p?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});gt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});gt(this,"raf",i=>{const t=i-(this.time||i);this.time=i,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=oE,(!i||i===document.documentElement)&&(i=window),this.options={wrapper:i,content:t,eventsTarget:e,smoothWheel:n,syncTouch:r,syncTouchLerp:s,touchInertiaMultiplier:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:p,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:d,overscroll:T,autoRaf:y,anchors:v,__experimental__naiveDimensions:b},this.dimensions=new dE(i,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new pE(e,{touchMultiplier:p,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(i,t){return this.emitter.on(i,t)}off(i,t){return this.emitter.off(i,t)}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}scrollTo(i,{offset:t=0,immediate:e=!1,lock:n=!1,duration:r=this.options.duration,easing:s=this.options.easing,lerp:a=this.options.lerp,onStart:o,onComplete:l,force:c=!1,programmatic:u=!0,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof i=="string"&&["top","left","start"].includes(i))i=0;else if(typeof i=="string"&&["bottom","right","end"].includes(i))i=this.limit;else{let h;if(typeof i=="string"?h=document.querySelector(i):i instanceof HTMLElement&&(i!=null&&i.nodeType)&&(h=i),h){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?g.left:g.top}const p=h.getBoundingClientRect();i=(this.isHorizontal?p.left:p.top)+this.animatedScroll}}if(typeof i=="number"){if(i+=t,i=Math.round(i),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):i=Np(0,i,this.limit),i===this.targetScroll){o==null||o(this),l==null||l(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=i,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=i),this.animate.fromTo(this.animatedScroll,i,{duration:r,easing:s,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",o==null||o(this)},onUpdate:(h,p)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),u&&(this.targetScroll=h),p||this.emit(),p&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?uE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let i="lenis";return this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const _E=n_(null,i=>{const t=new mE({duration:1.2,easing:s=>Math.min(1,1.001-Math.pow(2,-10*s)),touchMultiplier:2,infinite:!1});function e(s){t.raf(s),requestAnimationFrame(e)}requestAnimationFrame(e),t.stop(),t.start();let n;function r(){clearTimeout(n),n=setTimeout(()=>{requestAnimationFrame(()=>{t.resize()})},300)}return window.addEventListener("load",r),document.querySelectorAll("img[loading='lazy']").forEach(s=>{s.addEventListener("load",r)}),i(t),()=>{t.destroy(),i(null)}});function nh(i){return Object.prototype.toString.call(i)==="[object Date]"}function Ac(i,t,e,n){if(typeof e=="number"||nh(e)){const r=n-e,s=(e-t)/(i.dt||1/60),a=i.opts.stiffness*r,o=i.opts.damping*s,l=(a-o)*i.inv_mass,c=(s+l)*i.dt;return Math.abs(c)<i.opts.precision&&Math.abs(r)<i.opts.precision?n:(i.settled=!1,nh(e)?new Date(e.getTime()+c):e+c)}else{if(Array.isArray(e))return e.map((r,s)=>Ac(i,t[s],e[s],n[s]));if(typeof e=="object"){const r={};for(const s in e)r[s]=Ac(i,t[s],e[s],n[s]);return r}else throw new Error(`Cannot spring ${typeof e} values`)}}function gE(i,t={}){const e=zh(i),{stiffness:n=.15,damping:r=.8,precision:s=.01}=t;let a,o,l,c=i,u=i,f=1,h=0,p=!1;function g(m,d={}){u=m;const T=l={};return i==null||d.hard||_.stiffness>=1&&_.damping>=1?(p=!0,a=wn.now(),c=m,e.set(i=u),Promise.resolve()):(d.soft&&(h=1/((d.soft===!0?.5:+d.soft)*60),f=0),o||(a=wn.now(),p=!1,o=Qm(y=>{if(p)return p=!1,o=null,!1;f=Math.min(f+h,1);const v=Math.min(y-a,1e3/30),b={inv_mass:f,opts:_,settled:!0,dt:v*60/1e3},w=Ac(b,c,i,u);return a=y,c=i,e.set(i=w),b.settled&&(o=null),!b.settled})),new Promise(y=>{o.promise.then(()=>{T===l&&y()})}))}const _={set:g,update:(m,d)=>g(m(u,i),d),subscribe:e.subscribe,stiffness:n,damping:r,precision:s};return _}function Op(i,t){ps(t,!1);const[e,n]=s_(),r=()=>Uu(o,"$velocitySpring",e),s=()=>Uu(_E,"$lenisController",e);let a;const o=gE(0,{stiffness:.1,damping:.5});let l=fh(!1);$s(()=>{document.body.style.setProperty("--scroll-velocity","0"),a=document.querySelectorAll(".home-project-instance");for(let c of a){const u=window.getComputedStyle(c).transform;c.style.transform="none";const f=c.querySelector(".home-project-image.original");f.style.zIndex="100";let h=8;const p=document.createElement("div");p.classList.add("clones-container"),p.style.zIndex="0",c.children[0].appendChild(p);for(let m=0;m<h;m++){const d=f.cloneNode(!0);d.classList.remove("original"),d.classList.add("clone"),p.appendChild(d)}const g=Array.from(p.querySelectorAll(".home-project-image.clone")),_=(m,{opacity:d,translate:T,transformIndex:y})=>{m.style.opacity=`${d}`;const v=`-${T*1.25+(y*y/2||0)*.1}rem`,b=`${T*2}rem`,A=`calc(var(--scroll-velocity)*${y}*0.05rem)`;m.style.transform=`${u} translateY(${A}) translateX(${v}) translateY(${b})`};for(let[m,d]of g.reverse().entries()){const T=rn.utils.interpolate(.85,.15,m/h),y=rn.utils.interpolate(.25,4,m/h);_(d,{opacity:T,translate:y,transformIndex:m+1})}_(f,{opacity:1,translate:0,transformIndex:0})}}),Ru(()=>(s(),ai(l)),()=>{s()&&!ai(l)&&(Ws(l,!0),s().on("scroll",c=>{r_(o,c.velocity)}))}),Ru(()=>r(),()=>{document.body.style.setProperty("--scroll-velocity",`${r()}`)}),Bm(),Xs(),ms(),n()}qs(Op,{},[],[],!0);var ea={};(function i(t,e,n,r){var s=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!t.OffscreenCanvas)return!1;var U=new OffscreenCanvas(1,1),C=U.getContext("2d");C.fillRect(0,0,1,1);var nt=U.transferToImageBitmap();try{C.createPattern(nt,"no-repeat")}catch{return!1}return!0}();function l(){}function c(U){var C=e.exports.Promise,nt=C!==void 0?C:t.Promise;return typeof nt=="function"?new nt(U):(U(l,l),null)}var u=function(U,C){return{transform:function(nt){if(U)return nt;if(C.has(nt))return C.get(nt);var lt=new OffscreenCanvas(nt.width,nt.height),B=lt.getContext("2d");return B.drawImage(nt,0,0),C.set(nt,lt),lt},clear:function(){C.clear()}}}(o,new Map),f=function(){var U=Math.floor(16.666666666666668),C,nt,lt={},B=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(j){var it=Math.random();return lt[it]=requestAnimationFrame(function K(at){B===at||B+U-1<at?(B=at,delete lt[it],j()):lt[it]=requestAnimationFrame(K)}),it},nt=function(j){lt[j]&&cancelAnimationFrame(lt[j])}):(C=function(j){return setTimeout(j,U)},nt=function(j){return clearTimeout(j)}),{frame:C,cancel:nt}}(),h=function(){var U,C,nt={};function lt(B){function j(it,K){B.postMessage({options:it||{},callback:K})}B.init=function(K){var at=K.transferControlToOffscreen();B.postMessage({canvas:at},[at])},B.fire=function(K,at,Tt){if(C)return j(K,null),C;var pt=Math.random().toString(36).slice(2);return C=c(function(Pt){function Dt(wt){wt.data.callback===pt&&(delete nt[pt],B.removeEventListener("message",Dt),C=null,u.clear(),Tt(),Pt())}B.addEventListener("message",Dt),j(K,pt),nt[pt]=Dt.bind(null,{data:{callback:pt}})}),C},B.reset=function(){B.postMessage({reset:!0});for(var K in nt)nt[K](),delete nt[K]}}return function(){if(U)return U;if(!n&&s){var B=["var CONFETTI, SIZE = {}, module = {};","("+i.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{U=new Worker(URL.createObjectURL(new Blob([B])))}catch(j){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",j),null}lt(U)}return U}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(U,C){return C?C(U):U}function _(U){return U!=null}function m(U,C,nt){return g(U&&_(U[C])?U[C]:p[C],nt)}function d(U){return U<0?0:Math.floor(U)}function T(U,C){return Math.floor(Math.random()*(C-U))+U}function y(U){return parseInt(U,16)}function v(U){return U.map(b)}function b(U){var C=String(U).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:y(C.substring(0,2)),g:y(C.substring(2,4)),b:y(C.substring(4,6))}}function w(U){var C=m(U,"origin",Object);return C.x=m(C,"x",Number),C.y=m(C,"y",Number),C}function A(U){U.width=document.documentElement.clientWidth,U.height=document.documentElement.clientHeight}function P(U){var C=U.getBoundingClientRect();U.width=C.width,U.height=C.height}function x(U){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=U,C}function M(U,C,nt,lt,B,j,it,K,at){U.save(),U.translate(C,nt),U.rotate(j),U.scale(lt,B),U.arc(0,0,1,it,K,at),U.restore()}function L(U){var C=U.angle*(Math.PI/180),nt=U.spread*(Math.PI/180);return{x:U.x,y:U.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:U.startVelocity*.5+Math.random()*U.startVelocity,angle2D:-C+(.5*nt-Math.random()*nt),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:U.color,shape:U.shape,tick:0,totalTicks:U.ticks,decay:U.decay,drift:U.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:U.gravity*3,ovalScalar:.6,scalar:U.scalar,flat:U.flat}}function k(U,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var nt=C.tick++/C.totalTicks,lt=C.x+C.random*C.tiltCos,B=C.y+C.random*C.tiltSin,j=C.wobbleX+C.random*C.tiltCos,it=C.wobbleY+C.random*C.tiltSin;if(U.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-nt)+")",U.beginPath(),a&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))U.fill(Y(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(j-lt)*.1,Math.abs(it-B)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var K=Math.PI/10*C.wobble,at=Math.abs(j-lt)*.1,Tt=Math.abs(it-B)*.1,pt=C.shape.bitmap.width*C.scalar,Pt=C.shape.bitmap.height*C.scalar,Dt=new DOMMatrix([Math.cos(K)*at,Math.sin(K)*at,-Math.sin(K)*Tt,Math.cos(K)*Tt,C.x,C.y]);Dt.multiplySelf(new DOMMatrix(C.shape.matrix));var wt=U.createPattern(u.transform(C.shape.bitmap),"no-repeat");wt.setTransform(Dt),U.globalAlpha=1-nt,U.fillStyle=wt,U.fillRect(C.x-pt/2,C.y-Pt/2,pt,Pt),U.globalAlpha=1}else if(C.shape==="circle")U.ellipse?U.ellipse(C.x,C.y,Math.abs(j-lt)*C.ovalScalar,Math.abs(it-B)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):M(U,C.x,C.y,Math.abs(j-lt)*C.ovalScalar,Math.abs(it-B)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var D=Math.PI/2*3,ee=4*C.scalar,Lt=8*C.scalar,Ut=C.x,Mt=C.y,$t=5,vt=Math.PI/$t;$t--;)Ut=C.x+Math.cos(D)*Lt,Mt=C.y+Math.sin(D)*Lt,U.lineTo(Ut,Mt),D+=vt,Ut=C.x+Math.cos(D)*ee,Mt=C.y+Math.sin(D)*ee,U.lineTo(Ut,Mt),D+=vt;else U.moveTo(Math.floor(C.x),Math.floor(C.y)),U.lineTo(Math.floor(C.wobbleX),Math.floor(B)),U.lineTo(Math.floor(j),Math.floor(it)),U.lineTo(Math.floor(lt),Math.floor(C.wobbleY));return U.closePath(),U.fill(),C.tick<C.totalTicks}function O(U,C,nt,lt,B){var j=C.slice(),it=U.getContext("2d"),K,at,Tt=c(function(pt){function Pt(){K=at=null,it.clearRect(0,0,lt.width,lt.height),u.clear(),B(),pt()}function Dt(){n&&!(lt.width===r.width&&lt.height===r.height)&&(lt.width=U.width=r.width,lt.height=U.height=r.height),!lt.width&&!lt.height&&(nt(U),lt.width=U.width,lt.height=U.height),it.clearRect(0,0,lt.width,lt.height),j=j.filter(function(wt){return k(it,wt)}),j.length?K=f.frame(Dt):Pt()}K=f.frame(Dt),at=Pt});return{addFettis:function(pt){return j=j.concat(pt),Tt},canvas:U,promise:Tt,reset:function(){K&&f.cancel(K),at&&at()}}}function q(U,C){var nt=!U,lt=!!m(C||{},"resize"),B=!1,j=m(C,"disableForReducedMotion",Boolean),it=s&&!!m(C||{},"useWorker"),K=it?h():null,at=nt?A:P,Tt=U&&K?!!U.__confetti_initialized:!1,pt=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Pt;function Dt(D,ee,Lt){for(var Ut=m(D,"particleCount",d),Mt=m(D,"angle",Number),$t=m(D,"spread",Number),vt=m(D,"startVelocity",Number),R=m(D,"decay",Number),S=m(D,"gravity",Number),z=m(D,"drift",Number),Q=m(D,"colors",v),et=m(D,"ticks",Number),J=m(D,"shapes"),bt=m(D,"scalar"),ut=!!m(D,"flat"),_t=w(D),Ht=Ut,st=[],xt=U.width*_t.x,Rt=U.height*_t.y;Ht--;)st.push(L({x:xt,y:Rt,angle:Mt,spread:$t,startVelocity:vt,color:Q[Ht%Q.length],shape:J[T(0,J.length)],ticks:et,decay:R,gravity:S,drift:z,scalar:bt,flat:ut}));return Pt?Pt.addFettis(st):(Pt=O(U,st,at,ee,Lt),Pt.promise)}function wt(D){var ee=j||m(D,"disableForReducedMotion",Boolean),Lt=m(D,"zIndex",Number);if(ee&&pt)return c(function(vt){vt()});nt&&Pt?U=Pt.canvas:nt&&!U&&(U=x(Lt),document.body.appendChild(U)),lt&&!Tt&&at(U);var Ut={width:U.width,height:U.height};K&&!Tt&&K.init(U),Tt=!0,K&&(U.__confetti_initialized=!0);function Mt(){if(K){var vt={getBoundingClientRect:function(){if(!nt)return U.getBoundingClientRect()}};at(vt),K.postMessage({resize:{width:vt.width,height:vt.height}});return}Ut.width=Ut.height=null}function $t(){Pt=null,lt&&(B=!1,t.removeEventListener("resize",Mt)),nt&&U&&(document.body.contains(U)&&document.body.removeChild(U),U=null,Tt=!1)}return lt&&!B&&(B=!0,t.addEventListener("resize",Mt,!1)),K?K.fire(D,Ut,$t):Dt(D,Ut,$t)}return wt.reset=function(){K&&K.reset(),Pt&&Pt.reset()},wt}var $;function V(){return $||($=q(null,{useWorker:!0,resize:!0})),$}function Y(U,C,nt,lt,B,j,it){var K=new Path2D(U),at=new Path2D;at.addPath(K,new DOMMatrix(C));var Tt=new Path2D;return Tt.addPath(at,new DOMMatrix([Math.cos(it)*B,Math.sin(it)*B,-Math.sin(it)*j,Math.cos(it)*j,nt,lt])),Tt}function W(U){if(!a)throw new Error("path confetti are not supported in this browser");var C,nt;typeof U=="string"?C=U:(C=U.path,nt=U.matrix);var lt=new Path2D(C),B=document.createElement("canvas"),j=B.getContext("2d");if(!nt){for(var it=1e3,K=it,at=it,Tt=0,pt=0,Pt,Dt,wt=0;wt<it;wt+=2)for(var D=0;D<it;D+=2)j.isPointInPath(lt,wt,D,"nonzero")&&(K=Math.min(K,wt),at=Math.min(at,D),Tt=Math.max(Tt,wt),pt=Math.max(pt,D));Pt=Tt-K,Dt=pt-at;var ee=10,Lt=Math.min(ee/Pt,ee/Dt);nt=[Lt,0,0,Lt,-Math.round(Pt/2+K)*Lt,-Math.round(Dt/2+at)*Lt]}return{type:"path",path:C,matrix:nt}}function ot(U){var C,nt=1,lt="#000000",B='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof U=="string"?C=U:(C=U.text,nt="scalar"in U?U.scalar:nt,B="fontFamily"in U?U.fontFamily:B,lt="color"in U?U.color:lt);var j=10*nt,it=""+j+"px "+B,K=new OffscreenCanvas(j,j),at=K.getContext("2d");at.font=it;var Tt=at.measureText(C),pt=Math.ceil(Tt.actualBoundingBoxRight+Tt.actualBoundingBoxLeft),Pt=Math.ceil(Tt.actualBoundingBoxAscent+Tt.actualBoundingBoxDescent),Dt=2,wt=Tt.actualBoundingBoxLeft+Dt,D=Tt.actualBoundingBoxAscent+Dt;pt+=Dt+Dt,Pt+=Dt+Dt,K=new OffscreenCanvas(pt,Pt),at=K.getContext("2d"),at.font=it,at.fillStyle=lt,at.fillText(C,wt,D);var ee=1/nt;return{type:"bitmap",bitmap:K.transferToImageBitmap(),matrix:[ee,0,0,ee,-pt*ee/2,-Pt*ee/2]}}e.exports=function(){return V().apply(this,arguments)},e.exports.reset=function(){V().reset()},e.exports.create=q,e.exports.shapeFromPath=W,e.exports.shapeFromText=ot})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),ea,!1);const vE=ea.exports;ea.exports.create;function Bp(i,t){ps(t,!1);const e=r=>{new Id(r,{types:"chars,words"});const s=r.querySelector(".menu-item");s.style.display="flex",s.style.flexDirection="column",s.style.alignItems="center",s.style.justifyContent="center",s.style.overflow="hidden",s.style.height="2rem";const a=r.querySelector(".word").cloneNode(!0);a.style.position="absolute",a.style.transform="translateY(120%)",a.classList.add("clone"),s.appendChild(a);const o=document.createElement("div");o.style.position="absolute",o.style.marginTop="1.5rem",o.style.width="100%",o.style.height="0.15rem",o.style.backgroundColor="white",o.style.transformOrigin="left",o.style.transform="scaleX(0)",r.style.position="relative",s.appendChild(o);const l=r.querySelectorAll(".char"),c=a.querySelectorAll(".char");r.addEventListener("mouseenter",()=>{if(rn.to(o,{scaleX:1,duration:.2,ease:"power2.out"}),rn.to(l,{yPercent:-120,duration:.3,stagger:.01,ease:"power2.out"}),rn.to(c,{yPercent:-120,duration:.3,stagger:.01,ease:"power2.out"}),r.id==="fun"){const u=r.getBoundingClientRect(),f=(u.left+u.width*.65)/window.innerWidth,h=(u.top+u.height*.25)/window.innerHeight;vE({particleCount:100,spread:180,origin:{x:f,y:h},angle:-90,gravity:.5,startVelocity:20})}}),r.addEventListener("mouseleave",()=>{rn.to(o,{scaleX:0,duration:.3,ease:"power2.out"}),rn.to(l,{yPercent:0,duration:.4,stagger:.01,ease:"power2.out"}),rn.to(c,{yPercent:0,duration:.4,stagger:.01,ease:"power2.out"})})},n=()=>{document.querySelectorAll(".menu-link").forEach(s=>{e(s)})};$s(()=>{n()}),Xs(),ms()}qs(Bp,{},[],[],!0);var xE=qm("<!> <!> <!> <!>",1);function SE(i,t){ps(t,!1);let e=fh(!1);function n(o){Promise.all([document.fonts.ready,new Promise(l=>{document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>l()):l()})]).then(()=>{requestAnimationFrame(()=>{o()})})}$s(()=>{n(()=>{console.log("Webflow Custom Animations Loaded v3"),Ws(e,!0)})}),Xs();var r=Ym(),s=bu(r);{var a=o=>{var l=xE(),c=bu(l);Ip(c,{});var u=bo(c,2);Op(u,{});var f=bo(u,2);Bp(f,{});var h=bo(f,2);vd(h,{}),_l(o,l)};Km(s,o=>{ai(e)&&o(a)})}return _l(i,r),t_(t,"whenDomIsReady",n),ms({whenDomIsReady:n})}customElements.define("florag-webflow-animations",qs(SE,{},[],["whenDomIsReady"],!0))});export default ME();
