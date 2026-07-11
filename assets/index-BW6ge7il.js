var k_=Object.defineProperty;var Qd=r=>{throw TypeError(r)};var z_=(r,e,t)=>e in r?k_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Yi=(r,e,t)=>z_(r,typeof e!="symbol"?e+"":e,t),V_=(r,e,t)=>e.has(r)||Qd("Cannot "+t);var ef=(r,e,t)=>e.has(r)?Qd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t);var ul=(r,e,t)=>(V_(r,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function tr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Km(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ti={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ka={duration:.5,overwrite:!1,delay:0},od,dn,It,pi=1e8,bt=1/pi,xh=Math.PI*2,H_=xh/4,G_=0,Qm=Math.sqrt,W_=Math.cos,X_=Math.sin,cn=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},ur=function(e){return typeof e=="number"},ad=function(e){return typeof e>"u"},Vi=function(e){return typeof e=="object"},On=function(e){return e!==!1},ld=function(){return typeof window<"u"},hl=function(e){return Vt(e)||cn(e)},e0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Mn=Array.isArray,Y_=/random\([^)]+\)/g,$_=/,\s*/g,tf=/(?:-?\.?\d|\.)+/gi,t0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,uo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,vu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,n0=/[+-]=-?[.\d]+/,q_=/[^,'"\[\]\s]+/gi,j_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Nt,Pi,yh,cd,ni={},Ec={},i0,r0=function(e){return(Ec=Lo(e,ni))&&Vn},ud=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},za=function(e,t){return!t&&console.warn(e)},s0=function(e,t){return e&&(ni[e]=t)&&Ec&&(Ec[e]=t)||ni},Va=function(){return 0},Z_={suppressEvents:!0,isStart:!0,kill:!1},hc={suppressEvents:!0,kill:!1},J_={suppressEvents:!0},hd={},Pr=[],Mh={},o0,qn={},xu={},nf=30,dc=[],dd="",fd=function(e){var t=e[0],n,i;if(Vi(t)||Vt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=dc.length;i--&&!dc[i].targetTest(t););n=dc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new C0(e[i],n)))||e.splice(i,1);return e},cs=function(e){return e._gsap||fd(mi(e))[0]._gsap},a0=function(e,t,n){return(n=e[t])&&Vt(n)?e[t]():ad(n)&&e.getAttribute&&e.getAttribute(t)||n},Fn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ht=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},yo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},K_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},wc=function(){var e=Pr.length,t=Pr.slice(0),n,i;for(Mh={},Pr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},pd=function(e){return!!(e._initted||e._startAt||e.add)},l0=function(e,t,n,i){Pr.length&&!dn&&wc(),e.render(t,n,!!(dn&&t<0&&pd(e))),Pr.length&&!dn&&wc()},c0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(q_).length<2?t:cn(e)?e.trim():e},u0=function(e){return e},ii=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Q_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Lo=function(e,t){for(var n in t)e[n]=t[n];return e},rf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Vi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ac=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ya=function(e){var t=e.parent||Nt,n=e.keyframes?Q_(Mn(e.keyframes)):ii;if(On(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ev=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},h0=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},nu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Nr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},us=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},tv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},bh=function(e,t,n,i){return e._startAt&&(dn?e._startAt.revert(hc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},nv=function r(e){return!e||e._ts&&r(e.parent)},sf=function(e){return e._repeat?Io(e._tTime,e=e.duration()+e._rDelay)*e:0},Io=function(e,t){var n=Math.floor(e=Ut(e/t));return e&&n===e?n-1:n},Cc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},iu=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},ru=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ut(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),iu(e),n._dirty||us(n,e)),e},d0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Cc(e.rawTime(),t),(!t._dur||rl(0,t.totalDuration(),n)-t._tTime>bt)&&t.render(n,!0)),us(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-bt}},Di=function(e,t,n,i){return t.parent&&Nr(t),t._start=Ut((ur(n)?n:n||e!==Nt?oi(e,n,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),h0(e,t,"_first","_last",e._sort?"_start":0),Sh(t)||(e._recent=t),i||d0(e,t),e._ts<0&&ru(e,e._tTime),e},f0=function(e,t){return(ni.ScrollTrigger||ud("scrollTrigger",t))&&ni.ScrollTrigger.create(t,e)},p0=function(e,t,n,i,s){if(gd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!dn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&o0!==Zn.frame)return Pr.push(e),e._lazy=[s,i],1},iv=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Sh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},rv=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&iv(e)&&!(!e._initted&&Sh(e))||(e._ts<0||e._dp._ts<0)&&!Sh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=rl(0,e._tDur,t),u=Io(l,a),e._yoyo&&u&1&&(o=1-o),u!==Io(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||dn||i||e._zTime===bt||!t&&e._zTime){if(!e._initted&&p0(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?bt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&bh(e,t,n,!0),e._onUpdate&&!n&&Kn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Kn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Nr(e,1),!n&&!dn&&(Kn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},sv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Do=function(e,t,n,i){var s=e._repeat,o=Ut(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ut(o*(s+1)+e._rDelay*s):o,a>0&&!i&&ru(e,e._tTime=e._tDur*a),e.parent&&iu(e),n||us(e.parent,e),e},of=function(e){return e instanceof Un?us(e):Do(e,e._dur)},ov={_start:0,endTime:Va,totalDuration:Va},oi=function r(e,t,n){var i=e.labels,s=e._recent||ov,o=e.duration()>=pi?s.endTime(!1):e._dur,a,l,c;return cn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Mn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ma=function(e,t,n){var i=ur(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=On(l.vars.inherit)&&l.parent;o.immediateRender=On(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new $t(t[0],o,t[s+1])},Vr=function(e,t){return e||e===0?t(e):t},rl=function(e,t,n){return n<e?e:n>t?t:n},xn=function(e,t){return!cn(e)||!(t=j_.exec(e))?"":t[1]},av=function(e,t,n){return Vr(n,function(i){return rl(e,t,i)})},Th=[].slice,m0=function(e,t){return e&&Vi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vi(e[0]))&&!e.nodeType&&e!==Pi},lv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return cn(i)&&!t||m0(i,1)?(s=n).push.apply(s,mi(i)):n.push(i)})||n},mi=function(e,t,n){return It&&!t&&It.selector?It.selector(e):cn(e)&&!n&&(yh||!Uo())?Th.call((t||cd).querySelectorAll(e),0):Mn(e)?lv(e,n):m0(e)?Th.call(e,0):e?[e]:[]},Eh=function(e){return e=mi(e)[0]||za("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return mi(t,n.querySelectorAll?n:n===e?za("Invalid scope")||cd.createElement("div"):e)}},g0=function(e){return e.sort(function(){return .5-Math.random()})},_0=function(e){if(Vt(e))return e;var t=Vi(e)?e:{each:e},n=hs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return cn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,m){var _=(m||t).length,g=o[_],p,x,v,y,E,S,M,R,b;if(!g){if(b=t.grid==="auto"?0:(t.grid||[1,pi])[1],!b){for(M=-pi;M<(M=m[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(g=o[_]=[],p=l?Math.min(b,_)*u-.5:i%b,x=b===pi?0:l?_*h/b-.5:i/b|0,M=0,R=pi,S=0;S<_;S++)v=S%b-p,y=x-(S/b|0),g[S]=E=c?Math.abs(c==="y"?y:v):Qm(v*v+y*y),E>M&&(M=E),E<R&&(R=E);i==="random"&&g0(g),g.max=M-R,g.min=R,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(b>_?_-1:c?c==="y"?_/b:b:Math.max(b,_/b))||0)*(i==="edges"?-1:1),g.b=_<0?s-_:s,g.u=xn(t.amount||t.each)||0,n=n&&_<0?Mv(n):n}return _=(g[f]-g.min)/g.max||0,Ut(g.b+(n?n(_):_)*g.v)+g.u}},wh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ut(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ur(n)?0:xn(n))}},v0=function(e,t){var n=Mn(e),i,s;return!n&&Vi(e)&&(i=n=e.radius||pi,e.values?(e=mi(e.values),(s=!ur(e[0]))&&(i*=i)):e=wh(e.increment)),Vr(t,n?Vt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=pi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||ur(o)?u:u+xn(o)}:wh(e))},x0=function(e,t,n,i){return Vr(Mn(e)?!t:n===!0?!!(n=0):!i,function(){return Mn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},cv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},uv=function(e,t){return function(n){return e(parseFloat(n))+(t||xn(n))}},hv=function(e,t,n){return M0(e,t,0,1,n)},y0=function(e,t,n){return Vr(n,function(i){return e[~~t(i)]})},dv=function r(e,t,n){var i=t-e;return Mn(e)?y0(e,r(0,e.length),t):Vr(n,function(s){return(i+(s-e)%i)%i+e})},fv=function r(e,t,n){var i=t-e,s=i*2;return Mn(e)?y0(e,r(0,e.length-1),t):Vr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ha=function(e){return e.replace(Y_,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split($_);return x0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},M0=function(e,t,n,i,s){var o=t-e,a=i-n;return Vr(s,function(l){return n+((l-e)/o*a||0)})},pv=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=cn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Mn(e)&&!Mn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(m){m*=h;var _=Math.min(f,~~m);return u[_](m-_)},n=t}else i||(e=Lo(Mn(e)?[]:{},e));if(!u){for(l in t)md.call(a,e,l,"get",t[l]);s=function(m){return xd(m,a)||(o?e.p:e)}}}return Vr(n,s)},af=function(e,t,n){var i=e.labels,s=pi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Kn=function(e,t,n){var i=e.vars,s=i[t],o=It,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Pr.length&&wc(),a&&(It=a),u=l?s.apply(c,l):s.call(c),It=o,u},da=function(e){return Nr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!dn),e.progress()<1&&Kn(e,"onInterrupt"),e},ho,b0=[],S0=function(e){if(e)if(e=!e.name&&e.default||e,ld()||e.headless){var t=e.name,n=Vt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Va,render:xd,add:md,kill:Lv,modifier:Pv,rawVars:0},o={targetTest:0,get:0,getSetter:vd,aliases:{},register:0};if(Uo(),e!==i){if(qn[t])return;ii(i,ii(Ac(e,s),o)),Lo(i.prototype,Lo(s,Ac(e,o))),qn[i.prop=t]=i,e.targetTest&&(dc.push(i),hd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}s0(t,i),e.register&&e.register(Vn,i,Bn)}else b0.push(e)},Mt=255,fa={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},yu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Mt+.5|0},T0=function(e,t,n){var i=e?ur(e)?[e>>16,e>>8&Mt,e&Mt]:0:fa.black,s,o,a,l,c,u,h,f,d,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),fa[e])i=fa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Mt,i&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(tf),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=yu(l+1/3,s,o),i[1]=yu(l,s,o),i[2]=yu(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(t0),n&&i.length<4&&(i[3]=1),i}else i=e.match(tf)||fa.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/Mt,o=i[1]/Mt,a=i[2]/Mt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},E0=function(e){var t=[],n=[],i=-1;return e.split(Lr).forEach(function(s){var o=s.match(uo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},lf=function(e,t,n){var i="",s=(e+i).match(Lr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=T0(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=E0(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Lr,"1").split(uo),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Lr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Lr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in fa)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),mv=/hsl[a]?\(/,w0=function(e){var t=e.join(" "),n;if(Lr.lastIndex=0,Lr.test(t))return n=mv.test(t),e[1]=lf(e[1],n),e[0]=lf(e[0],n,E0(e[1])),!0},Ga,Zn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,m=function _(g){var p=r()-i,x=g===!0,v,y,E,S;if((p>e||p<0)&&(n+=p-t),i+=p,E=i-n,v=E-o,(v>0||x)&&(S=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,o+=v+(v>=s?4:s-v),y=1),x||(l=c(_)),y)for(d=0;d<a.length;d++)a[d](E,f,S,g)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){i0&&(!yh&&ld()&&(Pi=yh=window,cd=Pi.document||{},ni.gsap=Vn,(Pi.gsapVersions||(Pi.gsapVersions=[])).push(Vn.version),r0(Ec||Pi.GreenSockGlobals||!Pi.gsap&&Pi||{}),b0.forEach(S0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Ga=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ga=0,c=Va},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g,p,x){var v=p?function(y,E,S,M){g(y,E,S,M),h.remove(v)}:g;return h.remove(g),a[x?"unshift":"push"](v),Uo(),v},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),Uo=function(){return!Ga&&Zn.wake()},ct={},gv=/^[\d.\-M][\d.\-,\s]/,_v=/["']/g,vv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(_v,"").trim():+c,i=l.substr(a+1).trim();return t},xv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},yv=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[vv(t[1])]:xv(e).split(",").map(c0)):ct._CE&&gv.test(e)?ct._CE("",e):n},Mv=function(e){return function(t){return 1-e(1-t)}},hs=function(e,t){return e&&(Vt(e)?e:ct[e]||yv(e))||t},ws=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Fn(e,function(a){ct[a]=ni[a]=s,ct[o=a.toLowerCase()]=n;for(var l in s)ct[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[a+"."+l]=s[l]}),s},A0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Mu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/xh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*X_((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:A0(a);return s=xh/s,l.config=function(c,u){return r(e,c,u)},l},bu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:A0(n);return i.config=function(s){return r(e,s)},i};Fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ws(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;ws("Elastic",Mu("in"),Mu("out"),Mu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ws("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ws("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ws("Circ",function(r){return-(Qm(1-r*r)-1)});ws("Sine",function(r){return r===1?1:-W_(r*H_)+1});ws("Back",bu("in"),bu("out"),bu());ct.SteppedEase=ct.steps=ni.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-bt;return function(a){return((i*rl(0,o,a)|0)+s)*n}}};ka.ease=ct["quad.out"];Fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return dd+=r+","+r+"Params,"});var C0=function(e,t){this.id=G_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:a0,this.set=t?t.getSetter:vd},Wa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Do(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),Ga||Zn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Do(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Uo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ru(this,n),!s._dp||s.parent||d0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===bt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),l0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+sf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+sf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Io(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Cc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-bt?0:this._rts,this.totalTime(rl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),iu(this),tv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Uo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ut(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Di(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(On(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Cc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=J_);var i=dn;return dn=n,pd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,of(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,of(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(oi(this,n),On(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,On(i)),this._dur||(this._zTime=-bt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-bt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Vt(n)?n:u0,l=function(){var u=i.then;i.then=null,s&&s(),Vt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){da(this)},r}();ii(Wa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var Un=function(r){Km(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=On(n.sortChildren),Nt&&Di(n.parent||Nt,tr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&f0(tr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Ma(0,arguments,this),this},t.from=function(i,s,o){return Ma(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Ma(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ya(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new $t(i,s,oi(this,o),1),this},t.call=function(i,s,o){return Di(this,$t.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new $t(i,o,oi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ya(o).immediateRender=On(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,ya(a).immediateRender=On(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ut(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,m,_,g,p,x,v,y,E,S,M;if(this!==Nt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,y=this._start,v=this._ts,p=!v,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(f=Ut(u%g),u===l?(_=this._repeat,f=c):(E=Ut(u/g),_=~~E,_&&_===E&&(f=c,_--),f>c&&(f=c)),E=Io(this._tTime,g),!a&&this._tTime&&E!==_&&this._tTime-E*g-this._dur<=0&&(E=_),S&&_&1&&(f=c-f,M=1),_!==E&&!this._lock){var R=S&&E&1,b=R===(S&&_&1);if(_<E&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(M?0:Ut(_*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Kn(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,E=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=sv(this,Ut(a),Ut(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!E&&(Kn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){x=0,m&&(u+=this._zTime=-bt);break}}d=m}else{d=this._last;for(var T=i<0?i:f;d;){if(m=d._prev,(d._act||T<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,o||dn&&pd(d)),f!==this._time||!this._ts&&!p){x=0,m&&(u+=this._zTime=T?-bt:bt);break}}d=m}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-bt)._zTime=f>=a?1:-1,this._ts))return this._start=y,iu(this),this.render(i,s,o);this._onUpdate&&!s&&Kn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Nr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Kn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(ur(s)||(s=oi(this,s,i)),!(i instanceof Wa)){if(Mn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(cn(i))return this.addLabel(i,s);if(Vt(i))i=$t.delayedCall(0,i);else return this}return this!==i?Di(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-pi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof $t?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return cn(i)?this.removeLabel(i):Vt(i)?this.killTweensOf(i):(i.parent===this&&nu(this,i),i===this._recent&&(this._recent=this._last),us(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(Zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=oi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=$t.delayedCall(0,s||Va,o);return a.data="isPause",this._hasPause=1,Di(this,a,oi(this,i))},t.removePause=function(i){var s=this._first;for(i=oi(this,i);s;)s._start===i&&s.data==="isPause"&&Nr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)br!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=mi(i),l=this._first,c=ur(s),u;l;)l instanceof $t?K_(l._targets,a)&&(c?(!br||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=oi(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,m=$t.to(o,ii({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||bt,onStart:function(){if(o.pause(),!d){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==g&&Do(m,g,0,1).render(m._time,!0,!0),d=1}u&&u.apply(m,h||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,ii({startAt:{time:oi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),af(this,oi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),af(this,oi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ut(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return us(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),us(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=pi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Di(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ut(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Do(o,o===Nt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Nt._ts&&(l0(Nt,Cc(i,Nt)),o0=Zn.frame),Zn.frame>=nf){nf+=ti.autoSleep||120;var s=Nt._first;if((!s||!s._ts)&&ti.autoSleep&&Zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Zn.sleep()}}},e}(Wa);ii(Un.prototype,{_lock:0,_hasPause:0,_forcing:0});var bv=function(e,t,n,i,s,o,a){var l=new Bn(this._pt,e,t,0,1,U0,null,s),c=0,u=0,h,f,d,m,_,g,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ha(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),f=n.match(vu)||[];h=vu.exec(i);)m=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),m!==f[u++]&&(g=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:g,c:m.charAt(1)==="="?yo(g,m)-g:parseFloat(m)-g,m:d&&d<4?Math.round:0},c=vu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(n0.test(i)||p)&&(l.e=0),this._pt=l,l},md=function(e,t,n,i,s,o,a,l,c,u){Vt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Vt(h)?c?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Vt(h)?c?Av:I0:_d,m;if(cn(i)&&(~i.indexOf("random(")&&(i=Ha(i)),i.charAt(1)==="="&&(m=yo(f,i)+(xn(f)||0),(m||m===0)&&(i=m))),!u||f!==i||Ah)return!isNaN(f*i)&&i!==""?(m=new Bn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Rv:D0,0,d),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!h&&!(t in e)&&ud(t,i),bv.call(this,e,t,f,i,d,l||ti.stringFilter,c))},Sv=function(e,t,n,i,s){if(Vt(e)&&(e=ba(e,s,t,n,i)),!Vi(e)||e.style&&e.nodeType||Mn(e)||e0(e))return cn(e)?ba(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=ba(e[a],s,t,n,i);return o},R0=function(e,t,n,i,s,o){var a,l,c,u;if(qn[e]&&(a=new qn[e]).init(s,a.rawVars?t[e]:Sv(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Bn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ho))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},br,Ah,gd=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,m=e._dur,_=e._startAt,g=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:g,v=e._overwrite==="auto"&&!od,y=e.timeline,E=i.easeReverse||h,S,M,R,b,T,P,N,W,D,B,I,F,H;if(y&&(!f||!s)&&(s="none"),e._ease=hs(s,ka.ease),e._rEase=E&&(hs(E)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||f&&!i.stagger){if(W=g[0]?cs(g[0]).harness:0,F=W&&i[W.prop],S=Ac(i,hd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&m?hc:Z_),_._lazy=0),o){if(Nr(e._startAt=$t.set(g,ii({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&On(l),startAt:null,delay:0,onUpdate:c&&function(){return Kn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(dn||!a&&!d)&&e._startAt.revert(hc),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!_){if(t&&(a=!1),R=ii({overwrite:!1,data:"isFromStart",lazy:a&&!_&&On(l),immediateRender:a,stagger:0,parent:p},S),F&&(R[W.prop]=F),Nr(e._startAt=$t.set(g,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(dn?e._startAt.revert(hc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&On(l)||l&&!m,M=0;M<g.length;M++){if(T=g[M],N=T._gsap||fd(g)[M]._gsap,e._ptLookup[M]=B={},Mh[N.id]&&Pr.length&&wc(),I=x===g?M:x.indexOf(T),W&&(D=new W).init(T,F||S,e,I,x)!==!1&&(e._pt=b=new Bn(e._pt,T,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(X){B[X]=b}),D.priority&&(P=1)),!W||F)for(R in S)qn[R]&&(D=R0(R,S,e,I,T,x))?D.priority&&(P=1):B[R]=b=md.call(e,T,R,"get",S[R],I,x,0,i.stringFilter);e._op&&e._op[M]&&e.kill(T,e._op[M]),v&&e._pt&&(br=e,Nt.killTweensOf(T,B,e.globalTime(t)),H=!e.parent,br=0),e._pt&&l&&(Mh[N.id]=1)}P&&N0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,f&&t<=0&&y.render(pi,!0,!0)},Tv=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ah=1,e.vars[t]="+=0",gd(e,a),Ah=0,l?za(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Ht(n)+xn(h.e)),h.b&&(h.b=u.s+xn(h.b))},Ev=function(e,t){var n=e[0]?cs(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Lo({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},wv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Mn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ba=function(e,t,n,i,s){return Vt(e)?e.call(t,n,i,s):cn(e)&&~e.indexOf("random(")?Ha(e):e},P0=dd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",L0={};Fn(P0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return L0[r]=1});var $t=function(r){Km(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ya(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,m=l.keyframes,_=l.defaults,g=l.scrollTrigger,p=i.parent||Nt,x=(Mn(n)||e0(n)?ur(n[0]):"length"in i)?[n]:mi(n),v,y,E,S,M,R,b,T;if(a._targets=x.length?fd(x):za("GSAP target "+n+" not found. https://gsap.com",!ti.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||f||hl(c)||hl(u)){i=a.vars;var P=i.easeReverse||i.yoyoEase;if(v=a.timeline=new Un({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:x}),v.kill(),v.parent=v._dp=tr(a),v._start=0,f||hl(c)||hl(u)){if(S=x.length,b=f&&_0(f),Vi(f))for(M in f)~P0.indexOf(M)&&(T||(T={}),T[M]=f[M]);for(y=0;y<S;y++)E=Ac(i,L0),E.stagger=0,P&&(E.easeReverse=P),T&&Lo(E,T),R=x[y],E.duration=+ba(c,tr(a),y,R,x),E.delay=(+ba(u,tr(a),y,R,x)||0)-a._delay,!f&&S===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),v.to(R,E,b?b(y,R,x):0),v._ease=ct.none;v.duration()?c=u=0:a.timeline=0}else if(m){ya(ii(v.vars.defaults,{ease:"none"})),v._ease=hs(m.ease||i.ease||"none");var N=0,W,D,B;if(Mn(m))m.forEach(function(I){return v.to(x,I,">")}),v.duration();else{E={};for(M in m)M==="ease"||M==="easeEach"||wv(M,m[M],E,m.easeEach);for(M in E)for(W=E[M].sort(function(I,F){return I.t-F.t}),N=0,y=0;y<W.length;y++)D=W[y],B={ease:D.e,duration:(D.t-(y?W[y-1].t:0))/100*c},B[M]=D.v,v.to(x,B,N),N+=B.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!od&&(br=tr(a),Nt.killTweensOf(x),br=0),Di(p,tr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!m&&a._start===Ut(p._time)&&On(h)&&nv(tr(a))&&p.data!=="nested")&&(a._tTime=-bt,a.render(Math.max(0,-u)||0)),g&&f0(tr(a),g),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-bt&&!u?l:i<bt?0:i,f,d,m,_,g,p,x,v;if(!c)rv(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=Ut(h%_),h===l?(m=this._repeat,f=c):(g=Ut(h/_),m=~~g,m&&m===g?(f=c,m--):f>c&&(f=c)),p=this._yoyo&&m&1,p&&(f=c-f),g=Io(this._tTime,_),f===a&&!o&&this._initted&&m===g)return this._tTime=h,this;m!==g&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ut(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(p0(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var E=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=E?(y?-1:1)/E:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(f/c);if(this._from&&(this.ratio=x=1-x),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!g&&(Kn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&bh(this,i,s,o),Kn(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!s&&this.parent&&Kn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&bh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Nr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Kn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Ga||Zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||gd(this,c),u=this._ease(c/this._dur),Tv(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(ru(this,0),this.parent||h0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?da(this):this.scrollTrigger&&this.scrollTrigger.kill(!!dn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,br&&br.vars.overwrite!==!0)._first||da(this),this.parent&&o!==this.timeline.totalDuration()&&Do(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?mi(i):a,c=this._ptLookup,u=this._pt,h,f,d,m,_,g,p;if((!s||s==="all")&&ev(a,l))return s==="all"&&(this._pt=0),da(this);for(h=this._op=this._op||[],s!=="all"&&(cn(s)&&(_={},Fn(s,function(x){return _[x]=1}),s=_),s=Ev(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,m=f,d={}):(d=h[p]=h[p]||{},m=s);for(_ in m)g=f&&f[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&nu(this,g,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&da(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ma(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Ma(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Nt.killTweensOf(i,s,o)},e}(Wa);ii($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fn("staggerTo,staggerFrom,staggerFromTo",function(r){$t[r]=function(){var e=new Un,t=Th.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var _d=function(e,t,n){return e[t]=n},I0=function(e,t,n){return e[t](n)},Av=function(e,t,n,i){return e[t](i.fp,n)},Cv=function(e,t,n){return e.setAttribute(t,n)},vd=function(e,t){return Vt(e[t])?I0:ad(e[t])&&e.setAttribute?Cv:_d},D0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Rv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},U0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},xd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Pv=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},Lv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?nu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Iv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},N0=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Bn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||D0,this.d=l||this,this.set=c||_d,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Iv,this.m=n,this.mt=s,this.tween=i},r}();Fn(dd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return hd[r]=1});ni.TweenMax=ni.TweenLite=$t;ni.TimelineLite=ni.TimelineMax=Un;Nt=new Un({sortChildren:!1,defaults:ka,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ti.stringFilter=w0;var ds=[],fc={},Dv=[],cf=0,Uv=0,Su=function(e){return(fc[e]||Dv).map(function(t){return t()})},Ch=function(){var e=Date.now(),t=[];e-cf>2&&(Su("matchMediaInit"),ds.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Pi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Su("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),cf=e,Su("matchMedia"))},O0=function(){function r(t,n){this.selector=n&&Eh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Uv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Vt(n)&&(s=i,i=n,n=Vt);var o=this,a=function(){var c=It,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Eh(s)),It=o,h=i.apply(o,arguments),Vt(h)&&o._r.push(h),It=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Vt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=It;It=null,n(this),It=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof $t&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Un?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof $t)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ds.length;o--;)ds[o].id===this.id&&ds.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),Nv=function(){function r(t){this.contexts=[],this.scope=t,It&&It.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Vi(n)||(n={matches:n});var o=new O0(0,s||this.scope),a=o.conditions={},l,c,u;It&&!o.selector&&(o.selector=It.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Pi.matchMedia(n[c]),l&&(ds.indexOf(o)<0&&ds.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ch):l.addEventListener("change",Ch)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Rc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return S0(i)})},timeline:function(e){return new Un(e)},getTweensOf:function(e,t){return Nt.getTweensOf(e,t)},getProperty:function(e,t,n,i){cn(e)&&(e=mi(e)[0]);var s=cs(e||{}).get,o=n?u0:c0;return n==="native"&&(n=""),e&&(t?o((qn[t]&&qn[t].get||s)(e,t,n,i)):function(a,l,c){return o((qn[a]&&qn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=mi(e),e.length>1){var i=e.map(function(u){return Vn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=qn[t],a=cs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;ho._pt=0,h.init(e,n?u+n:u,ho,0,[e]),h.render(1,h),ho._pt&&xd(1,ho)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Vn.to(e,ii((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Nt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=hs(e.ease,ka.ease)),rf(ka,e||{})},config:function(e){return rf(ti,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!qn[a]&&!ni[a]&&za(t+" effect requires "+a+" plugin.")}),xu[t]=function(a,l,c){return n(mi(a),ii(l||{},s),c)},o&&(Un.prototype[t]=function(a,l,c){return this.add(xu[t](a,Vi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=hs(t)},parseEase:function(e,t){return arguments.length?hs(e,t):ct},getById:function(e){return Nt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Un(e),i,s;for(n.smoothChildTiming=On(e.smoothChildTiming),Nt.remove(n),n._dp=0,n._time=n._tTime=Nt._time,i=Nt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof $t&&i.vars.onComplete===i._targets[0]))&&Di(n,i,i._start-i._delay),i=s;return Di(Nt,n,0),n},context:function(e,t){return e?new O0(e,t):It},matchMedia:function(e){return new Nv(e)},matchMediaRefresh:function(){return ds.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ch()},addEventListener:function(e,t){var n=fc[e]||(fc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=fc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:dv,wrapYoyo:fv,distribute:_0,random:x0,snap:v0,normalize:hv,getUnit:xn,clamp:av,splitColor:T0,toArray:mi,selector:Eh,mapRange:M0,pipe:cv,unitize:uv,interpolate:pv,shuffle:g0},install:r0,effects:xu,ticker:Zn,updateRoot:Un.updateRoot,plugins:qn,globalTimeline:Nt,core:{PropTween:Bn,globals:s0,Tween:$t,Timeline:Un,Animation:Wa,getCache:cs,_removeLinkedListItem:nu,reverting:function(){return dn},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return od=e}}};Fn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Rc[r]=$t[r]});Zn.add(Un.updateRoot);ho=Rc.to({},{duration:0});var Ov=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Fv=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Ov(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Tu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(cn(s)&&(l={},Fn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Fv(a,s)}}}},Vn=Rc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)dn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Tu("roundProps",wh),Tu("modifiers"),Tu("snap",v0))||Rc;$t.version=Un.version=Vn.version="3.15.0";i0=1;ld()&&Uo();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var uf,Sr,Mo,yd,as,hf,Md,Bv=function(){return typeof window<"u"},hr={},es=180/Math.PI,bo=Math.PI/180,Rs=Math.atan2,df=1e8,bd=/([A-Z])/g,kv=/(left|right|width|margin|padding|x)/i,zv=/[\s,\(]\S/,Oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Rh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Vv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Hv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Gv=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Wv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},F0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},B0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Xv=function(e,t,n){return e.style[t]=n},Yv=function(e,t,n){return e.style.setProperty(t,n)},$v=function(e,t,n){return e._gsap[t]=n},qv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},jv=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Zv=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ot="transform",kn=Ot+"Origin",Jv=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in hr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=nr(i,a)}):this.tfm[e]=o.x?o[e]:nr(i,e),e===kn&&(this.tfm.zOrigin=o.zOrigin);else return Oi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ot)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(kn,t,"")),e=Ot}(s||t)&&this.props.push(e,t,s[e])},k0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Kv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(bd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Md(),(!s||!s.isStart)&&!n[Ot]&&(k0(n),i.zOrigin&&n[kn]&&(n[kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},z0=function(e,t){var n={target:e,props:[],revert:Kv,save:Jv};return e._gsap||Vn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},V0,Ph=function(e,t){var n=Sr.createElementNS?Sr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Sr.createElement(e);return n&&n.style?n:Sr.createElement(e)},Qn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(bd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,No(t)||t,1)||""},ff="O,Moz,ms,Ms,Webkit".split(","),No=function(e,t,n){var i=t||as,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ff[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ff[o]:"")+e},Lh=function(){Bv()&&window.document&&(uf=window,Sr=uf.document,Mo=Sr.documentElement,as=Ph("div")||{style:{}},Ph("div"),Ot=No(Ot),kn=Ot+"Origin",as.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",V0=!!No("perspective"),Md=Vn.core.reverting,yd=1)},pf=function(e){var t=e.ownerSVGElement,n=Ph("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Mo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Mo.removeChild(n),s},mf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},H0=function(e){var t,n;try{t=e.getBBox()}catch{t=pf(e),n=1}return t&&(t.width||t.height)||n||(t=pf(e)),t&&!t.width&&!t.x&&!t.y?{x:+mf(e,["x","cx","x1"])||0,y:+mf(e,["y","cy","y1"])||0,width:0,height:0}:t},G0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&H0(e))},Or=function(e,t){if(t){var n=e.style,i;t in hr&&t!==kn&&(t=Ot),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(bd,"-$1").toLowerCase())):n.removeAttribute(t)}},Tr=function(e,t,n,i,s,o){var a=new Bn(e._pt,t,n,0,1,o?B0:F0);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},gf={deg:1,rad:1,turn:1},Qv={grid:1,flex:1},Fr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=as.style,l=kv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",m,_,g,p;if(i===o||!s||gf[i]||gf[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&G0(e),(d||o==="%")&&(hr[t]||~t.indexOf("adius")))return m=p?e.getBBox()[l?"width":"height"]:e[u],Ht(d?s/m*h:s/100*m);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Sr||!_.appendChild)&&(_=Sr.body),g=_._gsap,g&&d&&g.width&&l&&g.time===Zn.time&&!g.uncache)return Ht(s/g.width*h);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,m=e[u],x?e.style[t]=x:Or(e,t)}else(d||o==="%")&&!Qv[Qn(_,"display")]&&(a.position=Qn(e,"position")),_===e&&(a.position="static"),_.appendChild(as),m=as[u],_.removeChild(as),a.position="absolute";return l&&d&&(g=cs(_),g.time=Zn.time,g.width=_[u]),Ht(f?m*s/h:m&&s?h/m*s:0)},nr=function(e,t,n,i){var s;return yd||Lh(),t in Oi&&t!=="transform"&&(t=Oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),hr[t]&&t!=="transform"?(s=Ya(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Lc(Qn(e,kn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Pc[t]&&Pc[t](e,t,n)||Qn(e,t)||a0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Fr(e,t,s,n)+n:s},ex=function(e,t,n,i){if(!n||n==="none"){var s=No(t,e,1),o=s&&Qn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Qn(e,"borderTopColor"))}var a=new Bn(this._pt,e.style,t,0,1,U0),l=0,c=0,u,h,f,d,m,_,g,p,x,v,y,E;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Qn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Qn(e,t)||i,_?e.style[t]=_:Or(e,t)),u=[n,i],w0(u),n=u[0],i=u[1],f=n.match(uo)||[],E=i.match(uo)||[],E.length){for(;h=uo.exec(i);)g=h[0],x=i.substring(l,h.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),g!==(_=f[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),g.charAt(1)==="="&&(g=yo(d,g)+y),p=parseFloat(g),v=g.substr((p+"").length),l=uo.lastIndex-v.length,v||(v=v||ti.units[t]||y,l===i.length&&(i+=v,a.e+=v)),y!==v&&(d=Fr(e,t,_,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:p-d,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?B0:F0;return n0.test(i)&&(a.e=0),this._pt=a,a},_f={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tx=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=_f[n]||n,t[1]=_f[i]||i,t.join(" ")},nx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],hr[a]&&(l=1,a=a==="transformOrigin"?kn:Ot),Or(n,a);l&&(Or(n,Ot),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ya(n,1),o.uncache=1,k0(i)))}},Pc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Bn(e._pt,t,n,0,0,nx);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Xa=[1,0,0,1,0,0],W0={},X0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},vf=function(e){var t=Qn(e,Ot);return X0(t)?Xa:t.substr(7).match(t0).map(Ht)},Sd=function(e,t){var n=e._gsap||cs(e),i=e.style,s=vf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Xa:s):(s===Xa&&!e.offsetParent&&e!==Mo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Mo.appendChild(e)),s=vf(e),l?i.display=l:Or(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Mo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ih=function(e,t,n,i,s,o){var a=e._gsap,l=s||Sd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],m=l[1],_=l[2],g=l[3],p=l[4],x=l[5],v=t.split(" "),y=parseFloat(v[0])||0,E=parseFloat(v[1])||0,S,M,R,b;n?l!==Xa&&(M=d*g-m*_)&&(R=y*(g/M)+E*(-_/M)+(_*x-g*p)/M,b=y*(-m/M)+E*(d/M)-(d*x-m*p)/M,y=R,E=b):(S=H0(e),y=S.x+(~v[0].indexOf("%")?y/100*S.width:y),E=S.y+(~(v[1]||v[0]).indexOf("%")?E/100*S.height:E)),i||i!==!1&&a.smooth?(p=y-c,x=E-u,a.xOffset=h+(p*d+x*_)-p,a.yOffset=f+(p*m+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[kn]="0px 0px",o&&(Tr(o,a,"xOrigin",c,y),Tr(o,a,"yOrigin",u,E),Tr(o,a,"xOffset",h,a.xOffset),Tr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},Ya=function(e,t){var n=e._gsap||new C0(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Qn(e,kn)||"0",u,h,f,d,m,_,g,p,x,v,y,E,S,M,R,b,T,P,N,W,D,B,I,F,H,X,L,J,ae,j,Q,ce;return u=h=f=_=g=p=x=v=y=0,d=m=1,n.svg=!!(e.getCTM&&G0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ot]!=="none"?l[Ot]:"")),i.scale=i.rotate=i.translate="none"),M=Sd(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),Ih(e,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,M)),E=n.xOrigin||0,S=n.yOrigin||0,M!==Xa&&(P=M[0],N=M[1],W=M[2],D=M[3],u=B=M[4],h=I=M[5],M.length===6?(d=Math.sqrt(P*P+N*N),m=Math.sqrt(D*D+W*W),_=P||N?Rs(N,P)*es:0,x=W||D?Rs(W,D)*es+_:0,x&&(m*=Math.abs(Math.cos(x*bo))),n.svg&&(u-=E-(E*P+S*W),h-=S-(E*N+S*D))):(ce=M[6],j=M[7],L=M[8],J=M[9],ae=M[10],Q=M[11],u=M[12],h=M[13],f=M[14],R=Rs(ce,ae),g=R*es,R&&(b=Math.cos(-R),T=Math.sin(-R),F=B*b+L*T,H=I*b+J*T,X=ce*b+ae*T,L=B*-T+L*b,J=I*-T+J*b,ae=ce*-T+ae*b,Q=j*-T+Q*b,B=F,I=H,ce=X),R=Rs(-W,ae),p=R*es,R&&(b=Math.cos(-R),T=Math.sin(-R),F=P*b-L*T,H=N*b-J*T,X=W*b-ae*T,Q=D*T+Q*b,P=F,N=H,W=X),R=Rs(N,P),_=R*es,R&&(b=Math.cos(R),T=Math.sin(R),F=P*b+N*T,H=B*b+I*T,N=N*b-P*T,I=I*b-B*T,P=F,B=H),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,p=180-p),d=Ht(Math.sqrt(P*P+N*N+W*W)),m=Ht(Math.sqrt(I*I+ce*ce)),R=Rs(B,I),x=Math.abs(R)>2e-4?R*es:0,y=Q?1/(Q<0?-Q:Q):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!X0(Qn(e,Ot)),F&&e.setAttribute("transform",F))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ht(d),n.scaleY=Ht(m),n.rotation=Ht(_)+a,n.rotationX=Ht(g)+a,n.rotationY=Ht(p)+a,n.skewX=x+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[kn]=Lc(c)),n.xOffset=n.yOffset=0,n.force3D=ti.force3D,n.renderTransform=n.svg?rx:V0?Y0:ix,n.uncache=0,n},Lc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Eu=function(e,t,n){var i=xn(t);return Ht(parseFloat(t)+parseFloat(Fr(e,"x",n+"px",i)))+i},ix=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Y0(e,t)},Yr="0deg",Ko="0px",$r=") ",Y0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,m=n.scaleX,_=n.scaleY,g=n.transformPerspective,p=n.force3D,x=n.target,v=n.zOrigin,y="",E=p==="auto"&&e&&e!==1||p===!0;if(v&&(h!==Yr||u!==Yr)){var S=parseFloat(u)*bo,M=Math.sin(S),R=Math.cos(S),b;S=parseFloat(h)*bo,b=Math.cos(S),o=Eu(x,o,M*b*-v),a=Eu(x,a,-Math.sin(S)*-v),l=Eu(x,l,R*b*-v+v)}g!==Ko&&(y+="perspective("+g+$r),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(E||o!==Ko||a!==Ko||l!==Ko)&&(y+=l!==Ko||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+$r),c!==Yr&&(y+="rotate("+c+$r),u!==Yr&&(y+="rotateY("+u+$r),h!==Yr&&(y+="rotateX("+h+$r),(f!==Yr||d!==Yr)&&(y+="skew("+f+", "+d+$r),(m!==1||_!==1)&&(y+="scale("+m+", "+_+$r),x.style[Ot]=y||"translate(0, 0)"},rx=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,m=n.xOrigin,_=n.yOrigin,g=n.xOffset,p=n.yOffset,x=n.forceCSS,v=parseFloat(o),y=parseFloat(a),E,S,M,R,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=bo,c*=bo,E=Math.cos(l)*h,S=Math.sin(l)*h,M=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=bo,b=Math.tan(c-u),b=Math.sqrt(1+b*b),M*=b,R*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),E*=b,S*=b)),E=Ht(E),S=Ht(S),M=Ht(M),R=Ht(R)):(E=h,R=f,S=M=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Fr(d,"x",o,"px"),y=Fr(d,"y",a,"px")),(m||_||g||p)&&(v=Ht(v+m-(m*E+_*M)+g),y=Ht(y+_-(m*S+_*R)+p)),(i||s)&&(b=d.getBBox(),v=Ht(v+i/100*b.width),y=Ht(y+s/100*b.height)),b="matrix("+E+","+S+","+M+","+R+","+v+","+y+")",d.setAttribute("transform",b),x&&(d.style[Ot]=b)},sx=function(e,t,n,i,s){var o=360,a=cn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?es:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*df)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*df)%o-~~(c/o)*o)),e._pt=f=new Bn(e._pt,t,n,i,c,Vv),f.e=u,f.u="deg",e._props.push(n),f},xf=function(e,t){for(var n in t)e[n]=t[n];return e},ox=function(e,t,n){var i=xf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ot]=t,a=Ya(n,1),Or(n,Ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ot],o[Ot]=t,a=Ya(n,1),o[Ot]=c);for(l in hr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=xn(c),m=xn(u),h=d!==m?Fr(n,l,c,m):parseFloat(c),f=parseFloat(u),e._pt=new Bn(e._pt,a,l,h,f-h,Rh),e._pt.u=m||0,e._props.push(l));xf(a,i)};Fn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Pc[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(m){return nr(a,m,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(m,_){return d[m]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var $0={name:"css",register:Lh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,m,_,g,p,x,v,y,E,S,M,R,b;yd||Lh(),this.styles=this.styles||z0(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(qn[_]&&R0(_,t,n,i,e,s)))){if(d=typeof u,m=Pc[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ha(u)),m)m(this,e,_,u,n)&&(M=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Lr.lastIndex=0,Lr.test(c)||(g=xn(c),p=xn(u),p?g!==p&&(c=Fr(e,_,c,p)+p):g&&(u+=g)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],cn(c)&&~c.indexOf("random(")&&(c=Ha(c)),xn(c+"")||c==="auto"||(c+=ti.units[_]||xn(nr(e,_))||""),(c+"").charAt(1)==="="&&(c=nr(e,_))):c=nr(e,_),f=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),_ in Oi&&(_==="autoAlpha"&&(f===1&&nr(e,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,a.visibility),Tr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Oi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in hr,v){if(this.styles.save(_),b=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Qn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=u,u=Qn(e,"perspective"),T?e.style.perspective=T:Or(e,"perspective")}h=parseFloat(u)}if(y||(E=e._gsap,E.renderTransform&&!t.parseTransform||Ya(e,t.parseTransform),S=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new Bn(this._pt,a,Ot,0,1,E.renderTransform,E,0,-1),y.dep=1),_==="scale")this._pt=new Bn(this._pt,E,"scaleY",E.scaleY,(x?yo(E.scaleY,x+h):h)-E.scaleY||0,Rh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(kn,0,a[kn]),u=tx(u),E.svg?Ih(e,u,0,S,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&Tr(this,E,"zOrigin",E.zOrigin,p),Tr(this,a,_,Lc(c),Lc(u)));continue}else if(_==="svgOrigin"){Ih(e,u,1,S,0,this);continue}else if(_ in W0){sx(this,E,_,f,x?yo(f,x+u):u);continue}else if(_==="smoothOrigin"){Tr(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){ox(this,u,e);continue}}else _ in a||(_=No(_)||_);if(v||(h||h===0)&&(f||f===0)&&!zv.test(u)&&_ in a)g=(c+"").substr((f+"").length),h||(h=0),p=xn(u)||(_ in ti.units?ti.units[_]:g),g!==p&&(f=Fr(e,_,c,p)),this._pt=new Bn(this._pt,v?E:a,_,f,(x?yo(f,x+h):h)-f,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Wv:Rh),this._pt.u=p||0,v&&b!==u?(this._pt.b=c,this._pt.e=b,this._pt.r=Gv):g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Hv);else if(_ in a)ex.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,i,s);else if(_!=="parseTransform"){ud(_,u);continue}v||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,c||e[_])),o.push(_)}}M&&N0(this)},render:function(e,t){if(t.tween._time||!Md())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:nr,aliases:Oi,getSetter:function(e,t,n){var i=Oi[t];return i&&i.indexOf(",")<0&&(t=i),t in hr&&t!==kn&&(e._gsap.x||nr(e,"x"))?n&&hf===n?t==="scale"?qv:$v:(hf=n||{})&&(t==="scale"?jv:Zv):e.style&&!ad(e.style[t])?Xv:~t.indexOf("-")?Yv:vd(e,t)},core:{_removeProperty:Or,_getMatrix:Sd}};Vn.utils.checkPrefix=No;Vn.core.getStyleSaver=z0;(function(r,e,t,n){var i=Fn(r+","+e+","+t,function(s){hr[s]=1});Fn(e,function(s){ti.units[s]="deg",W0[s]=1}),Oi[i[13]]=r+","+e,Fn(n,function(s){var o=s.split(":");Oi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ti.units[r]="px"});Vn.registerPlugin($0);var en=Vn.registerPlugin($0)||Vn;en.core.Tween;function ax(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function lx(r,e,t){return e&&ax(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hn,pc,Jn,Er,wr,So,q0,ts,To,j0,rr,Ei,Z0,J0=function(){return hn||typeof window<"u"&&(hn=window.gsap)&&hn.registerPlugin&&hn},K0=1,fo=[],st=[],Bi=[],Sa=Date.now,Dh=function(e,t){return t},cx=function(){var e=To.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,st),i.push.apply(i,Bi),st=n,Bi=i,Dh=function(o,a){return t[o](a)}},Ir=function(e,t){return~Bi.indexOf(e)&&Bi[Bi.indexOf(e)+1][t]},Ta=function(e){return!!~j0.indexOf(e)},wn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Tn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},dl="scrollLeft",fl="scrollTop",Uh=function(){return rr&&rr.isPressed||st.cache++},Ic=function(e,t){var n=function i(s){if(s||s===0){K0&&(Jn.history.scrollRestoration="manual");var o=rr&&rr.isPressed;s=i.v=Math.round(s)||(rr&&rr.iOS?1:0),e(s),i.cacheID=st.cache,o&&Dh("ss",s)}else(t||st.cache!==i.cacheID||Dh("ref"))&&(i.cacheID=st.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},In={s:dl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ic(function(r){return arguments.length?Jn.scrollTo(r,Qt.sc()):Jn.pageXOffset||Er[dl]||wr[dl]||So[dl]||0})},Qt={s:fl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:In,sc:Ic(function(r){return arguments.length?Jn.scrollTo(In.sc(),r):Jn.pageYOffset||Er[fl]||wr[fl]||So[fl]||0})},Dn=function(e,t){return(t&&t._ctx&&t._ctx.selector||hn.utils.toArray)(e)[0]||(typeof e=="string"&&hn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ux=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Br=function(e,t){var n=t.s,i=t.sc;Ta(e)&&(e=Er.scrollingElement||wr);var s=st.indexOf(e),o=i===Qt.sc?1:2;!~s&&(s=st.push(e)-1),st[s+o]||wn(e,"scroll",Uh);var a=st[s+o],l=a||(st[s+o]=Ic(Ir(e,n),!0)||(Ta(e)?i:Ic(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=hn.getProperty(e,"scrollBehavior")==="smooth"),l},Nh=function(e,t,n){var i=e,s=e,o=Sa(),a=o,l=t||50,c=Math.max(500,l*3),u=function(m,_){var g=Sa();_||g-o>l?(s=i,i=m,a=o,o=g):n?i+=m:i=s+(m-s)/(g-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(m){var _=a,g=s,p=Sa();return(m||m===0)&&m!==i&&u(m),o===a||p-a>c?0:(i+(n?g:-g))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Qo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},yf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Q0=function(){To=hn.core.globals().ScrollTrigger,To&&To.core&&cx()},eg=function(e){return hn=e||J0(),!pc&&hn&&typeof document<"u"&&document.body&&(Jn=window,Er=document,wr=Er.documentElement,So=Er.body,j0=[Jn,Er,wr,So],hn.utils.clamp,Z0=hn.core.context||function(){},ts="onpointerenter"in So?"pointer":"mouse",q0=Wt.isTouch=Jn.matchMedia&&Jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ei=Wt.eventTypes=("ontouchstart"in wr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in wr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return K0=0},500),pc=1),To||Q0(),pc};In.op=Qt;st.cache=0;var Wt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){pc||eg(hn)||console.warn("Please gsap.registerPlugin(Observer)"),To||Q0();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,m=n.wheelSpeed,_=n.event,g=n.onDragStart,p=n.onDragEnd,x=n.onDrag,v=n.onPress,y=n.onRelease,E=n.onRight,S=n.onLeft,M=n.onUp,R=n.onDown,b=n.onChangeX,T=n.onChangeY,P=n.onChange,N=n.onToggleX,W=n.onToggleY,D=n.onHover,B=n.onHoverEnd,I=n.onMove,F=n.ignoreCheck,H=n.isNormalizer,X=n.onGestureStart,L=n.onGestureEnd,J=n.onWheel,ae=n.onEnable,j=n.onDisable,Q=n.onClick,ce=n.scrollSpeed,Me=n.capture,de=n.allowClicks,Ae=n.lockAxis,Ie=n.onLockAxis;this.target=a=Dn(a)||wr,this.vars=n,d&&(d=hn.utils.toArray(d)),i=i||1e-9,s=s||0,m=m||1,ce=ce||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Jn.getComputedStyle(So).lineHeight)||22);var Se,De,O,ee,Z,oe,K,z=this,ge=0,C=0,w=n.passive||!u&&n.passive!==!1,V=Br(a,In),re=Br(a,Qt),se=V(),ne=re(),xe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ei[0]==="pointerdown",_e=Ta(a),he=a.ownerDocument||Er,Re=[0,0,0],ze=[0,0,0],ie=0,at=function(){return ie=Sa()},Ne=function(Te,Oe){return(z.event=Te)&&d&&ux(Te.target,d)||Oe&&xe&&Te.pointerType!=="touch"||F&&F(Te,Oe)},Ye=function(){z._vx.reset(),z._vy.reset(),De.pause(),h&&h(z)},Pe=function(){var Te=z.deltaX=yf(Re),Oe=z.deltaY=yf(ze),le=Math.abs(Te)>=i,He=Math.abs(Oe)>=i;P&&(le||He)&&P(z,Te,Oe,Re,ze),le&&(E&&z.deltaX>0&&E(z),S&&z.deltaX<0&&S(z),b&&b(z),N&&z.deltaX<0!=ge<0&&N(z),ge=z.deltaX,Re[0]=Re[1]=Re[2]=0),He&&(R&&z.deltaY>0&&R(z),M&&z.deltaY<0&&M(z),T&&T(z),W&&z.deltaY<0!=C<0&&W(z),C=z.deltaY,ze[0]=ze[1]=ze[2]=0),(ee||O)&&(I&&I(z),O&&(g&&O===1&&g(z),x&&x(z),O=0),ee=!1),oe&&!(oe=!1)&&Ie&&Ie(z),Z&&(J(z),Z=!1),Se=0},be=function(Te,Oe,le){Re[le]+=Te,ze[le]+=Oe,z._vx.update(Te),z._vy.update(Oe),c?Se||(Se=requestAnimationFrame(Pe)):Pe()},$e=function(Te,Oe){Ae&&!K&&(z.axis=K=Math.abs(Te)>Math.abs(Oe)?"x":"y",oe=!0),K!=="y"&&(Re[2]+=Te,z._vx.update(Te,!0)),K!=="x"&&(ze[2]+=Oe,z._vy.update(Oe,!0)),c?Se||(Se=requestAnimationFrame(Pe)):Pe()},tt=function(Te){if(!Ne(Te,1)){Te=Qo(Te,u);var Oe=Te.clientX,le=Te.clientY,He=Oe-z.x,ke=le-z.y,je=z.isDragging;z.x=Oe,z.y=le,(je||(He||ke)&&(Math.abs(z.startX-Oe)>=s||Math.abs(z.startY-le)>=s))&&(O||(O=je?2:1),je||(z.isDragging=!0),$e(He,ke))}},dt=z.onPress=function(Le){Ne(Le,1)||Le&&Le.button||(z.axis=K=null,De.pause(),z.isPressed=!0,Le=Qo(Le),ge=C=0,z.startX=z.x=Le.clientX,z.startY=z.y=Le.clientY,z._vx.reset(),z._vy.reset(),wn(H?a:he,Ei[1],tt,w,!0),z.deltaX=z.deltaY=0,v&&v(z))},ye=z.onRelease=function(Le){if(!Ne(Le,1)){Tn(H?a:he,Ei[1],tt,!0);var Te=!isNaN(z.y-z.startY),Oe=z.isDragging,le=Oe&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),He=Qo(Le);!le&&Te&&(z._vx.reset(),z._vy.reset(),u&&de&&hn.delayedCall(.08,function(){if(Sa()-ie>300&&!Le.defaultPrevented){if(Le.target.click)Le.target.click();else if(he.createEvent){var ke=he.createEvent("MouseEvents");ke.initMouseEvent("click",!0,!0,Jn,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),Le.target.dispatchEvent(ke)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,h&&Oe&&!H&&De.restart(!0),O&&Pe(),p&&Oe&&p(z),y&&y(z,le)}},ue=function(Te){return Te.touches&&Te.touches.length>1&&(z.isGesturing=!0)&&X(Te,z.isDragging)},k=function(){return(z.isGesturing=!1)||L(z)},fe=function(Te){if(!Ne(Te)){var Oe=V(),le=re();be((Oe-se)*ce,(le-ne)*ce,1),se=Oe,ne=le,h&&De.restart(!0)}},pe=function(Te){if(!Ne(Te)){Te=Qo(Te,u),J&&(Z=!0);var Oe=(Te.deltaMode===1?l:Te.deltaMode===2?Jn.innerHeight:1)*m;be(Te.deltaX*Oe,Te.deltaY*Oe,0),h&&!H&&De.restart(!0)}},Ve=function(Te){if(!Ne(Te)){var Oe=Te.clientX,le=Te.clientY,He=Oe-z.x,ke=le-z.y;z.x=Oe,z.y=le,ee=!0,h&&De.restart(!0),(He||ke)&&$e(He,ke)}},Fe=function(Te){z.event=Te,D(z)},lt=function(Te){z.event=Te,B(z)},ht=function(Te){return Ne(Te)||Qo(Te,u)&&Q(z)};De=z._dc=hn.delayedCall(f||.25,Ye).pause(),z.deltaX=z.deltaY=0,z._vx=Nh(0,50,!0),z._vy=Nh(0,50,!0),z.scrollX=V,z.scrollY=re,z.isDragging=z.isGesturing=z.isPressed=!1,Z0(this),z.enable=function(Le){return z.isEnabled||(wn(_e?he:a,"scroll",Uh),o.indexOf("scroll")>=0&&wn(_e?he:a,"scroll",fe,w,Me),o.indexOf("wheel")>=0&&wn(a,"wheel",pe,w,Me),(o.indexOf("touch")>=0&&q0||o.indexOf("pointer")>=0)&&(wn(a,Ei[0],dt,w,Me),wn(he,Ei[2],ye),wn(he,Ei[3],ye),de&&wn(a,"click",at,!0,!0),Q&&wn(a,"click",ht),X&&wn(he,"gesturestart",ue),L&&wn(he,"gestureend",k),D&&wn(a,ts+"enter",Fe),B&&wn(a,ts+"leave",lt),I&&wn(a,ts+"move",Ve)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=ee=O=!1,z._vx.reset(),z._vy.reset(),se=V(),ne=re(),Le&&Le.type&&dt(Le),ae&&ae(z)),z},z.disable=function(){z.isEnabled&&(fo.filter(function(Le){return Le!==z&&Ta(Le.target)}).length||Tn(_e?he:a,"scroll",Uh),z.isPressed&&(z._vx.reset(),z._vy.reset(),Tn(H?a:he,Ei[1],tt,!0)),Tn(_e?he:a,"scroll",fe,Me),Tn(a,"wheel",pe,Me),Tn(a,Ei[0],dt,Me),Tn(he,Ei[2],ye),Tn(he,Ei[3],ye),Tn(a,"click",at,!0),Tn(a,"click",ht),Tn(he,"gesturestart",ue),Tn(he,"gestureend",k),Tn(a,ts+"enter",Fe),Tn(a,ts+"leave",lt),Tn(a,ts+"move",Ve),z.isEnabled=z.isPressed=z.isDragging=!1,j&&j(z))},z.kill=z.revert=function(){z.disable();var Le=fo.indexOf(z);Le>=0&&fo.splice(Le,1),rr===z&&(rr=0)},fo.push(z),H&&Ta(a)&&(rr=z),z.enable(_)},lx(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Wt.version="3.15.0";Wt.create=function(r){return new Wt(r)};Wt.register=eg;Wt.getAll=function(){return fo.slice()};Wt.getById=function(r){return fo.filter(function(e){return e.vars.id===r})[0]};J0()&&hn.registerPlugin(Wt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ee,oo,it,gt,jn,ft,Td,Dc,$a,Ea,pa,pl,gn,su,Oh,Rn,Mf,bf,ao,tg,wu,ng,Cn,Fh,ig,rg,yr,Bh,Ed,Eo,wd,wa,kh,Au,ml=1,vn=Date.now,Cu=vn(),gi=0,ma=0,Sf=function(e,t,n){var i=$n(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Tf=function(e,t){return t&&(!$n(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},hx=function r(){return ma&&requestAnimationFrame(r)},Ef=function(){return su=1},wf=function(){return su=0},Li=function(e){return e},ga=function(e){return Math.round(e*1e5)/1e5||0},sg=function(){return typeof window<"u"},og=function(){return Ee||sg()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},ys=function(e){return!!~Td.indexOf(e)},ag=function(e){return(e==="Height"?wd:it["inner"+e])||jn["client"+e]||ft["client"+e]},lg=function(e){return Ir(e,"getBoundingClientRect")||(ys(e)?function(){return xc.width=it.innerWidth,xc.height=wd,xc}:function(){return ir(e)})},dx=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Ir(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?ag(s):e["client"+s])||0}},fx=function(e,t){return!t||~Bi.indexOf(e)?lg(e):function(){return xc}},Fi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Ir(e,n))?o()-lg(e)()[s]:ys(e)?(jn[n]||ft[n])-ag(i):e[n]-e["offset"+i])},gl=function(e,t){for(var n=0;n<ao.length;n+=3)(!t||~t.indexOf(ao[n+1]))&&e(ao[n],ao[n+1],ao[n+2])},$n=function(e){return typeof e=="string"},yn=function(e){return typeof e=="function"},_a=function(e){return typeof e=="number"},ns=function(e){return typeof e=="object"},ea=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ps=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Ls=Math.abs,cg="left",ug="top",Ad="right",Cd="bottom",fs="width",ps="height",Aa="Right",Ca="Left",Ra="Top",Pa="Bottom",Yt="padding",li="margin",Oo="Width",Rd="Height",Jt="px",ci=function(e){return it.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},px=function(e){var t=ci(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Af=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ir=function(e,t){var n=t&&ci(e)[Oh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Uc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},hg=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},mx=function(e){return function(t){return Ee.utils.snap(hg(e),t)}},Pd=function(e){var t=Ee.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},gx=function(e){return function(t,n){return Pd(hg(e))(t,n.direction)}},_l=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},ln=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},an=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},vl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Cf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},xl={toggleActions:"play",anticipatePin:0},Nc={top:0,left:0,center:.5,bottom:1,right:1},mc=function(e,t){if($n(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Nc?Nc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},yl=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,m=gt.createElement("div"),_=ys(n)||Ir(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=_?ft:n.tagName==="IFRAME"?n.contentDocument.body:n,x=e.indexOf("start")!==-1,v=x?c:u,y="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(y+=(i===Qt?Ad:Cd)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=x,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=y,m.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(m,p.children[0]):p.appendChild(m),m._offset=m["offset"+i.op.d2],gc(m,0,i,x),m},gc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Oo]=1,s["border"+a+Oo]=0,s[n.p]=t+"px",Ee.set(e,s)},et=[],zh={},qa,Rf=function(){return vn()-gi>34&&(qa||(qa=requestAnimationFrame(ar)))},Is=function(){(!Cn||!Cn.isPressed||Cn.startX>ft.clientWidth)&&(st.cache++,Cn?qa||(qa=requestAnimationFrame(ar)):ar(),gi||bs("scrollStart"),gi=vn())},Ru=function(){rg=it.innerWidth,ig=it.innerHeight},va=function(e){st.cache++,(e===!0||!gn&&!ng&&!gt.fullscreenElement&&!gt.webkitFullscreenElement&&(!Fh||rg!==it.innerWidth||Math.abs(it.innerHeight-ig)>it.innerHeight*.25))&&Dc.restart(!0)},Ms={},_x=[],dg=function r(){return an(Ke,"scrollEnd",r)||ls(!0)},bs=function(e){return Ms[e]&&Ms[e].map(function(t){return t()})||_x},Yn=[],fg=function(e){for(var t=0;t<Yn.length;t+=5)(!e||Yn[t+4]&&Yn[t+4].query===e)&&(Yn[t].style.cssText=Yn[t+1],Yn[t].getBBox&&Yn[t].setAttribute("transform",Yn[t+2]||""),Yn[t+3].uncache=1)},pg=function(){return st.forEach(function(e){return yn(e)&&++e.cacheID&&(e.rec=e())})},Ld=function(e,t){var n;for(Rn=0;Rn<et.length;Rn++)n=et[Rn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));wa=!0,t&&fg(t),t||bs("revert")},mg=function(e,t){st.cache++,(t||!Pn)&&st.forEach(function(n){return yn(n)&&n.cacheID++&&(n.rec=0)}),$n(e)&&(it.history.scrollRestoration=Ed=e)},Pn,ms=0,Pf,vx=function(){if(Pf!==ms){var e=Pf=ms;requestAnimationFrame(function(){return e===ms&&ls(!0)})}},gg=function(){ft.appendChild(Eo),wd=!Cn&&Eo.offsetHeight||it.innerHeight,ft.removeChild(Eo)},Lf=function(e){return $a(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ls=function(e,t){if(jn=gt.documentElement,ft=gt.body,Td=[it,gt,jn,ft],gi&&!e&&!wa){ln(Ke,"scrollEnd",dg);return}gg(),Pn=Ke.isRefreshing=!0,wa||pg();var n=bs("refreshInit");tg&&Ke.sort(),t||Ld(),st.forEach(function(i){yn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),wa=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),kh=1,Lf(!0),et.forEach(function(i){var s=Fi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Lf(!1),kh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),st.forEach(function(i){yn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),mg(Ed,1),Dc.pause(),ms++,Pn=2,ar(2),et.forEach(function(i){return yn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Pn=Ke.isRefreshing=!1,bs("refresh")},Vh=0,_c=1,La,ar=function(e){if(e===2||!Pn&&!wa){Ke.isUpdating=!0,La&&La.update(0);var t=et.length,n=vn(),i=n-Cu>=50,s=t&&et[0].scroll();if(_c=Vh>s?-1:1,Pn||(Vh=s),i&&(gi&&!su&&n-gi>200&&(gi=0,bs("scrollEnd")),pa=Cu,Cu=n),_c<0){for(Rn=t;Rn-- >0;)et[Rn]&&et[Rn].update(0,i);_c=1}else for(Rn=0;Rn<t;Rn++)et[Rn]&&et[Rn].update(0,i);Ke.isUpdating=!1}qa=0},Hh=[cg,ug,Cd,Ad,li+Pa,li+Aa,li+Ra,li+Ca,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],vc=Hh.concat([fs,ps,"boxSizing","max"+Oo,"max"+Rd,"position",li,Yt,Yt+Ra,Yt+Aa,Yt+Pa,Yt+Ca]),xx=function(e,t,n){wo(n);var i=e._gsap;if(i.spacerIsNative)wo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Pu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Hh.length,o=t.style,a=e.style,l;s--;)l=Hh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Cd]=a[Ad]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[fs]=Uc(e,In)+Jt,o[ps]=Uc(e,Qt)+Jt,o[Yt]=a[li]=a[ug]=a[cg]="0",wo(i),a[fs]=a["max"+Oo]=n[fs],a[ps]=a["max"+Rd]=n[ps],a[Yt]=n[Yt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},yx=/([A-Z])/g,wo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(yx,"-$1").toLowerCase())}},Ml=function(e){for(var t=vc.length,n=e.style,i=[],s=0;s<t;s++)i.push(vc[s],n[vc[s]]);return i.t=e,i},Mx=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},xc={left:0,top:0},If=function(e,t,n,i,s,o,a,l,c,u,h,f,d,m){yn(e)&&(e=e(l)),$n(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?mc("0"+e.substr(3),n):0));var _=d?d.time():0,g,p,x;if(d&&d.seek(0),isNaN(e)||(e=+e),_a(e))d&&(e=Ee.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&gc(a,n,i,!0);else{yn(t)&&(t=t(l));var v=(e||"0").split(" "),y,E,S,M;x=Dn(t,l)||ft,y=ir(x)||{},(!y||!y.left&&!y.top)&&ci(x).display==="none"&&(M=x.style.display,x.style.display="block",y=ir(x),M?x.style.display=M:x.style.removeProperty("display")),E=mc(v[0],y[i.d]),S=mc(v[1]||"0",n),e=y[i.p]-c[i.p]-u+E+s-S,a&&gc(a,S,i,n-S<20||a._isStart&&S>20),n-=n-S}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var R=e+n,b=o._isStart;g="scroll"+i.d2,gc(o,R,i,b&&R>20||!b&&(h?Math.max(ft[g],jn[g]):o.parentNode[g])<=R+1),h&&(c=ir(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Jt))}return d&&x&&(g=ir(x),d.seek(f),p=ir(x),d._caScrollDist=g[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},bx=/(webkit|moz|length|cssText|inset)/i,Df=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===ft){e._stOrig=s.cssText,a=ci(e);for(o in a)!+o&&!bx.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},_g=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},bl=function(e,t,n){var i={};i[t.p]="+="+n,Ee.set(e,i)},Uf=function(e,t){var n=Br(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,m={};c=c||n();var _=_g(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){st.cache++,o.tween&&ar()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ee.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ln(e,"wheel",n.wheelHandler),Ke.isTouch&&ln(e,"touchmove",n.wheelHandler),s},Ke=function(){function r(t,n){oo||r.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Bh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ma){this.update=this.refresh=this.kill=Li;return}n=Af($n(n)||_a(n)||n.nodeType?{trigger:n}:n,xl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,x=s.onSnapComplete,v=s.once,y=s.snap,E=s.pinReparent,S=s.pinSpacer,M=s.containerAnimation,R=s.fastScrollEnd,b=s.preventOverlaps,T=n.horizontal||n.containerAnimation&&n.horizontal!==!1?In:Qt,P=!h&&h!==0,N=Dn(n.scroller||it),W=Ee.core.getCache(N),D=ys(N),B=("pinType"in n?n.pinType:Ir(N,"pinType")||D&&"fixed")==="fixed",I=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=P&&n.toggleActions.split(" "),H="markers"in n?n.markers:xl.markers,X=D?0:parseFloat(ci(N)["border"+T.p2+Oo])||0,L=this,J=n.onRefreshInit&&function(){return n.onRefreshInit(L)},ae=dx(N,D,T),j=fx(N,D),Q=0,ce=0,Me=0,de=Br(N,T),Ae,Ie,Se,De,O,ee,Z,oe,K,z,ge,C,w,V,re,se,ne,xe,_e,he,Re,ze,ie,at,Ne,Ye,Pe,be,$e,tt,dt,ye,ue,k,fe,pe,Ve,Fe,lt;if(L._startClamp=L._endClamp=!1,L._dir=T,g*=45,L.scroller=N,L.scroll=M?M.time.bind(M):de,De=de(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(tg=1,n.refreshPriority===-9999&&(La=L)),W.tweenScroll=W.tweenScroll||{top:Uf(N,Qt),left:Uf(N,In)},L.tweenTo=Ae=W.tweenScroll[T.p],L.scrubDuration=function(le){ue=_a(le)&&le,ue?ye?ye.duration(le):ye=Ee.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ue,paused:!0,onComplete:function(){return p&&p(L)}}):(ye&&ye.progress(1).kill(),ye=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),tt=0,l||(l=i.vars.id)),y&&((!ns(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in ft.style&&Ee.set(D?[ft,jn]:N,{scrollBehavior:"auto"}),st.forEach(function(le){return yn(le)&&le.target===(D?gt.scrollingElement||jn:N)&&(le.smooth=!1)}),Se=yn(y.snapTo)?y.snapTo:y.snapTo==="labels"?mx(i):y.snapTo==="labelsDirectional"?gx(i):y.directional!==!1?function(le,He){return Pd(y.snapTo)(le,vn()-ce<500?0:He.direction)}:Ee.utils.snap(y.snapTo),k=y.duration||{min:.1,max:2},k=ns(k)?Ea(k.min,k.max):Ea(k,k),fe=Ee.delayedCall(y.delay||ue/2||.1,function(){var le=de(),He=vn()-ce<500,ke=Ae.tween;if((He||Math.abs(L.getVelocity())<10)&&!ke&&!su&&Q!==le){var je=(le-ee)/V,Dt=i&&!P?i.totalProgress():je,nt=He?0:(Dt-dt)/(vn()-pa)*1e3||0,Tt=Ee.utils.clamp(-je,1-je,Ls(nt/2)*nt/.185),jt=je+(y.inertia===!1?0:Tt),At,Et,pt=y,Hn=pt.onStart,A=pt.onInterrupt,G=pt.onComplete;if(At=Se(jt,L),_a(At)||(At=jt),Et=Math.max(0,Math.round(ee+At*V)),le<=Z&&le>=ee&&Et!==le){if(ke&&!ke._initted&&ke.data<=Ls(Et-le))return;y.inertia===!1&&(Tt=At-je),Ae(Et,{duration:k(Ls(Math.max(Ls(jt-Dt),Ls(At-Dt))*.185/nt/.05||0)),ease:y.ease||"power3",data:Ls(Et-le),onInterrupt:function(){return fe.restart(!0)&&A&&Ps(L,A)},onComplete:function(){L.update(),Q=de(),i&&!P&&(ye?ye.resetTo("totalProgress",At,i._tTime/i._tDur):i.progress(At)),tt=dt=i&&!P?i.totalProgress():L.progress,x&&x(L),G&&Ps(L,G)}},le,Tt*V,Et-le-Tt*V),Hn&&Ps(L,Hn,Ae.tween)}}else L.isActive&&Q!==le&&fe.restart(!0)}).pause()),l&&(zh[l]=L),f=L.trigger=Dn(f||d!==!0&&d),lt=f&&f._gsap&&f._gsap.stRevert,lt&&(lt=lt(L)),d=d===!0?f:Dn(d),$n(a)&&(a={targets:f,className:a}),d&&(m===!1||m===li||(m=!m&&d.parentNode&&d.parentNode.style&&ci(d.parentNode).display==="flex"?!1:Yt),L.pin=d,Ie=Ee.core.getCache(d),Ie.spacer?re=Ie.pinState:(S&&(S=Dn(S),S&&!S.nodeType&&(S=S.current||S.nativeElement),Ie.spacerIsNative=!!S,S&&(Ie.spacerState=Ml(S))),Ie.spacer=xe=S||gt.createElement("div"),xe.classList.add("pin-spacer"),l&&xe.classList.add("pin-spacer-"+l),Ie.pinState=re=Ml(d)),n.force3D!==!1&&Ee.set(d,{force3D:!0}),L.spacer=xe=Ie.spacer,$e=ci(d),at=$e[m+T.os2],he=Ee.getProperty(d),Re=Ee.quickSetter(d,T.a,Jt),Pu(d,xe,$e),ne=Ml(d)),H){C=ns(H)?Af(H,Cf):Cf,z=yl("scroller-start",l,N,T,C,0),ge=yl("scroller-end",l,N,T,C,0,z),_e=z["offset"+T.op.d2];var ht=Dn(Ir(N,"content")||N);oe=this.markerStart=yl("start",l,ht,T,C,_e,0,M),K=this.markerEnd=yl("end",l,ht,T,C,_e,0,M),M&&(Fe=Ee.quickSetter([oe,K],T.a,Jt)),!B&&!(Bi.length&&Ir(N,"fixedMarkers")===!0)&&(px(D?ft:N),Ee.set([z,ge],{force3D:!0}),Ye=Ee.quickSetter(z,T.a,Jt),be=Ee.quickSetter(ge,T.a,Jt))}if(M){var Le=M.vars.onUpdate,Te=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){L.update(0,0,1),Le&&Le.apply(M,Te||[])})}if(L.previous=function(){return et[et.indexOf(L)-1]},L.next=function(){return et[et.indexOf(L)+1]},L.revert=function(le,He){if(!He)return L.kill(!0);var ke=le!==!1||!L.enabled,je=gn;ke!==L.isReverted&&(ke&&(pe=Math.max(de(),L.scroll.rec||0),Me=L.progress,Ve=i&&i.progress()),oe&&[oe,K,z,ge].forEach(function(Dt){return Dt.style.display=ke?"none":"block"}),ke&&(gn=L,L.update(ke)),d&&(!E||!L.isActive)&&(ke?xx(d,xe,re):Pu(d,xe,ci(d),Ne)),ke||L.update(ke),gn=je,L.isReverted=ke)},L.refresh=function(le,He,ke,je){if(!((gn||!L.enabled)&&!He)){if(d&&le&&gi){ln(r,"scrollEnd",dg);return}!Pn&&J&&J(L),gn=L,Ae.tween&&!ke&&(Ae.tween.kill(),Ae.tween=0),ye&&ye.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(qe){return qe.vars.immediateRender&&qe.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Dt=ae(),nt=j(),Tt=M?M.duration():Fi(N,T),jt=V<=.01||!V,At=0,Et=je||0,pt=ns(ke)?ke.end:n.end,Hn=n.endTrigger||f,A=ns(ke)?ke.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),G=L.pinnedContainer=n.pinnedContainer&&Dn(n.pinnedContainer,L),q=f&&Math.max(0,et.indexOf(L))||0,$=q,Y,me,we,Ge,Ce,Ue,We,Ze,Pt,Zt,mt,Sn,xt;for(H&&ns(ke)&&(Sn=Ee.getProperty(z,T.p),xt=Ee.getProperty(ge,T.p));$-- >0;)Ue=et[$],Ue.end||Ue.refresh(0,1)||(gn=L),We=Ue.pin,We&&(We===f||We===d||We===G)&&!Ue.isReverted&&(Zt||(Zt=[]),Zt.unshift(Ue),Ue.revert(!0,!0)),Ue!==et[$]&&(q--,$--);for(yn(A)&&(A=A(L)),A=Sf(A,"start",L),ee=If(A,f,Dt,T,de(),oe,z,L,nt,X,B,Tt,M,L._startClamp&&"_startClamp")||(d?-.001:0),yn(pt)&&(pt=pt(L)),$n(pt)&&!pt.indexOf("+=")&&(~pt.indexOf(" ")?pt=($n(A)?A.split(" ")[0]:"")+pt:(At=mc(pt.substr(2),Dt),pt=$n(A)?A:(M?Ee.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,ee):ee)+At,Hn=f)),pt=Sf(pt,"end",L),Z=Math.max(ee,If(pt||(Hn?"100% 0":Tt),Hn,Dt,T,de()+At,K,ge,L,nt,X,B,Tt,M,L._endClamp&&"_endClamp"))||-.001,At=0,$=q;$--;)Ue=et[$]||{},We=Ue.pin,We&&Ue.start-Ue._pinPush<=ee&&!M&&Ue.end>0&&(Y=Ue.end-(L._startClamp?Math.max(0,Ue.start):Ue.start),(We===f&&Ue.start-Ue._pinPush<ee||We===G)&&isNaN(A)&&(At+=Y*(1-Ue.progress)),We===d&&(Et+=Y));if(ee+=At,Z+=At,L._startClamp&&(L._startClamp+=At),L._endClamp&&!Pn&&(L._endClamp=Z||-.001,Z=Math.min(Z,Fi(N,T))),V=Z-ee||(ee-=.01)&&.001,jt&&(Me=Ee.utils.clamp(0,1,Ee.utils.normalize(ee,Z,pe))),L._pinPush=Et,oe&&At&&(Y={},Y[T.a]="+="+At,G&&(Y[T.p]="-="+de()),Ee.set([oe,K],Y)),d&&!(kh&&L.end>=Fi(N,T)))Y=ci(d),Ge=T===Qt,we=de(),ze=parseFloat(he(T.a))+Et,!Tt&&Z>1&&(mt=(D?gt.scrollingElement||jn:N).style,mt={style:mt,value:mt["overflow"+T.a.toUpperCase()]},D&&ci(ft)["overflow"+T.a.toUpperCase()]!=="scroll"&&(mt.style["overflow"+T.a.toUpperCase()]="scroll")),Pu(d,xe,Y),ne=Ml(d),me=ir(d,!0),Ze=B&&Br(N,Ge?In:Qt)(),m?(Ne=[m+T.os2,V+Et+Jt],Ne.t=xe,$=m===Yt?Uc(d,T)+V+Et:0,$&&(Ne.push(T.d,$+Jt),xe.style.flexBasis!=="auto"&&(xe.style.flexBasis=$+Jt)),wo(Ne),G&&et.forEach(function(qe){qe.pin===G&&qe.vars.pinSpacing!==!1&&(qe._subPinOffset=!0)}),B&&de(pe)):($=Uc(d,T),$&&xe.style.flexBasis!=="auto"&&(xe.style.flexBasis=$+Jt)),B&&(Ce={top:me.top+(Ge?we-ee:Ze)+Jt,left:me.left+(Ge?Ze:we-ee)+Jt,boxSizing:"border-box",position:"fixed"},Ce[fs]=Ce["max"+Oo]=Math.ceil(me.width)+Jt,Ce[ps]=Ce["max"+Rd]=Math.ceil(me.height)+Jt,Ce[li]=Ce[li+Ra]=Ce[li+Aa]=Ce[li+Pa]=Ce[li+Ca]="0",Ce[Yt]=Y[Yt],Ce[Yt+Ra]=Y[Yt+Ra],Ce[Yt+Aa]=Y[Yt+Aa],Ce[Yt+Pa]=Y[Yt+Pa],Ce[Yt+Ca]=Y[Yt+Ca],se=Mx(re,Ce,E),Pn&&de(0)),i?(Pt=i._initted,wu(1),i.render(i.duration(),!0,!0),ie=he(T.a)-ze+V+Et,Pe=Math.abs(V-ie)>1,B&&Pe&&se.splice(se.length-2,2),i.render(0,!0,!0),Pt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),wu(0)):ie=V,mt&&(mt.value?mt.style["overflow"+T.a.toUpperCase()]=mt.value:mt.style.removeProperty("overflow-"+T.a));else if(f&&de()&&!M)for(me=f.parentNode;me&&me!==ft;)me._pinOffset&&(ee-=me._pinOffset,Z-=me._pinOffset),me=me.parentNode;Zt&&Zt.forEach(function(qe){return qe.revert(!1,!0)}),L.start=ee,L.end=Z,De=O=Pn?pe:de(),!M&&!Pn&&(De<pe&&de(pe),L.scroll.rec=0),L.revert(!1,!0),ce=vn(),fe&&(Q=-1,fe.restart(!0)),gn=0,i&&P&&(i._initted||Ve)&&i.progress()!==Ve&&i.progress(Ve||0,!0).render(i.time(),!0,!0),(jt||Me!==L.progress||M||_||i&&!i._initted)&&(i&&!P&&(i._initted||Me||i.vars.immediateRender!==!1)&&i.totalProgress(M&&ee<-.001&&!Me?Ee.utils.normalize(ee,Z,0):Me,!0),L.progress=jt||(De-ee)/V===Me?0:Me),d&&m&&(xe._pinOffset=Math.round(L.progress*ie)),ye&&ye.invalidate(),isNaN(Sn)||(Sn-=Ee.getProperty(z,T.p),xt-=Ee.getProperty(ge,T.p),bl(z,T,Sn),bl(oe,T,Sn-(je||0)),bl(ge,T,xt),bl(K,T,xt-(je||0))),jt&&!Pn&&L.update(),u&&!Pn&&!w&&(w=!0,u(L),w=!1)}},L.getVelocity=function(){return(de()-O)/(vn()-pa)*1e3||0},L.endAnimation=function(){ea(L.callbackAnimation),i&&(ye?ye.progress(1):i.paused()?P||ea(i,L.direction<0,1):ea(i,i.reversed()))},L.labelToScroll=function(le){return i&&i.labels&&(ee||L.refresh()||ee)+i.labels[le]/i.duration()*V||0},L.getTrailing=function(le){var He=et.indexOf(L),ke=L.direction>0?et.slice(0,He).reverse():et.slice(He+1);return($n(le)?ke.filter(function(je){return je.vars.preventOverlaps===le}):ke).filter(function(je){return L.direction>0?je.end<=ee:je.start>=Z})},L.update=function(le,He,ke){if(!(M&&!ke&&!le)){var je=Pn===!0?pe:L.scroll(),Dt=le?0:(je-ee)/V,nt=Dt<0?0:Dt>1?1:Dt||0,Tt=L.progress,jt,At,Et,pt,Hn,A,G,q;if(He&&(O=De,De=M?de():je,y&&(dt=tt,tt=i&&!P?i.totalProgress():nt)),g&&d&&!gn&&!ml&&gi&&(!nt&&ee<je+(je-O)/(vn()-pa)*g?nt=1e-4:nt===1&&Z>je+(je-O)/(vn()-pa)*g&&(nt=.9999)),nt!==Tt&&L.enabled){if(jt=L.isActive=!!nt&&nt<1,At=!!Tt&&Tt<1,A=jt!==At,Hn=A||!!nt!=!!Tt,L.direction=nt>Tt?1:-1,L.progress=nt,Hn&&!gn&&(Et=nt&&!Tt?0:nt===1?1:Tt===1?2:3,P&&(pt=!A&&F[Et+1]!=="none"&&F[Et+1]||F[Et],q=i&&(pt==="complete"||pt==="reset"||pt in i))),b&&(A||q)&&(q||h||!i)&&(yn(b)?b(L):L.getTrailing(b).forEach(function(we){return we.endAnimation()})),P||(ye&&!gn&&!ml?(ye._dp._time-ye._start!==ye._time&&ye.render(ye._dp._time-ye._start),ye.resetTo?ye.resetTo("totalProgress",nt,i._tTime/i._tDur):(ye.vars.totalProgress=nt,ye.invalidate().restart())):i&&i.totalProgress(nt,!!(gn&&(ce||le)))),d){if(le&&m&&(xe.style[m+T.os2]=at),!B)Re(ga(ze+ie*nt));else if(Hn){if(G=!le&&nt>Tt&&Z+1>je&&je+1>=Fi(N,T),E)if(!le&&(jt||G)){var $=ir(d,!0),Y=je-ee;Df(d,ft,$.top+(T===Qt?Y:0)+Jt,$.left+(T===Qt?0:Y)+Jt)}else Df(d,xe);wo(jt||G?se:ne),Pe&&nt<1&&jt||Re(ze+(nt===1&&!G?ie:0))}}y&&!Ae.tween&&!gn&&!ml&&fe.restart(!0),a&&(A||v&&nt&&(nt<1||!Au))&&$a(a.targets).forEach(function(we){return we.classList[jt||v?"add":"remove"](a.className)}),o&&!P&&!le&&o(L),Hn&&!gn?(P&&(q&&(pt==="complete"?i.pause().totalProgress(1):pt==="reset"?i.restart(!0).pause():pt==="restart"?i.restart(!0):i[pt]()),o&&o(L)),(A||!Au)&&(c&&A&&Ps(L,c),I[Et]&&Ps(L,I[Et]),v&&(nt===1?L.kill(!1,1):I[Et]=0),A||(Et=nt===1?1:3,I[Et]&&Ps(L,I[Et]))),R&&!jt&&Math.abs(L.getVelocity())>(_a(R)?R:2500)&&(ea(L.callbackAnimation),ye?ye.progress(1):ea(i,pt==="reverse"?1:!nt,1))):P&&o&&!gn&&o(L)}if(be){var me=M?je/M.duration()*(M._caScrollDist||0):je;Ye(me+(z._isFlipped?1:0)),be(me)}Fe&&Fe(-je/M.duration()*(M._caScrollDist||0))}},L.enable=function(le,He){L.enabled||(L.enabled=!0,ln(N,"resize",va),D||ln(N,"scroll",Is),J&&ln(r,"refreshInit",J),le!==!1&&(L.progress=Me=0,De=O=Q=de()),He!==!1&&L.refresh())},L.getTween=function(le){return le&&Ae?Ae.tween:ye},L.setPositions=function(le,He,ke,je){if(M){var Dt=M.scrollTrigger,nt=M.duration(),Tt=Dt.end-Dt.start;le=Dt.start+Tt*le/nt,He=Dt.start+Tt*He/nt}L.refresh(!1,!1,{start:Tf(le,ke&&!!L._startClamp),end:Tf(He,ke&&!!L._endClamp)},je),L.update()},L.adjustPinSpacing=function(le){if(Ne&&le){var He=Ne.indexOf(T.d)+1;Ne[He]=parseFloat(Ne[He])+le+Jt,Ne[1]=parseFloat(Ne[1])+le+Jt,wo(Ne)}},L.disable=function(le,He){if(le!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,He||ye&&ye.pause(),pe=0,Ie&&(Ie.uncache=1),J&&an(r,"refreshInit",J),fe&&(fe.pause(),Ae.tween&&Ae.tween.kill()&&(Ae.tween=0)),!D)){for(var ke=et.length;ke--;)if(et[ke].scroller===N&&et[ke]!==L)return;an(N,"resize",va),D||an(N,"scroll",Is)}},L.kill=function(le,He){L.disable(le,He),ye&&!He&&ye.kill(),l&&delete zh[l];var ke=et.indexOf(L);ke>=0&&et.splice(ke,1),ke===Rn&&_c>0&&Rn--,ke=0,et.forEach(function(je){return je.scroller===L.scroller&&(ke=1)}),ke||Pn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,le&&i.revert({kill:!1}),He||i.kill()),oe&&[oe,K,z,ge].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),La===L&&(La=0),d&&(Ie&&(Ie.uncache=1),ke=0,et.forEach(function(je){return je.pin===d&&ke++}),ke||(Ie.spacer=0)),n.onKill&&n.onKill(L)},et.push(L),L.enable(!1,!1),lt&&lt(L),i&&i.add&&!V){var Oe=L.update;L.update=function(){L.update=Oe,st.cache++,ee||Z||L.refresh()},Ee.delayedCall(.01,L.update),V=.01,ee=Z=0}else L.refresh();d&&vx()},r.register=function(n){return oo||(Ee=n||og(),sg()&&window.document&&r.enable(),oo=ma),oo},r.defaults=function(n){if(n)for(var i in n)xl[i]=n[i];return xl},r.disable=function(n,i){ma=0,et.forEach(function(o){return o[i?"kill":"disable"](n)}),an(it,"wheel",Is),an(gt,"scroll",Is),clearInterval(pl),an(gt,"touchcancel",Li),an(ft,"touchstart",Li),_l(an,gt,"pointerdown,touchstart,mousedown",Ef),_l(an,gt,"pointerup,touchend,mouseup",wf),Dc.kill(),gl(an);for(var s=0;s<st.length;s+=3)vl(an,st[s],st[s+1]),vl(an,st[s],st[s+2])},r.enable=function(){if(it=window,gt=document,jn=gt.documentElement,ft=gt.body,Ee){if($a=Ee.utils.toArray,Ea=Ee.utils.clamp,Bh=Ee.core.context||Li,wu=Ee.core.suppressOverwrites||Li,Ed=it.history.scrollRestoration||"auto",Vh=it.pageYOffset||0,Ee.core.globals("ScrollTrigger",r),ft){ma=1,Eo=document.createElement("div"),Eo.style.height="100vh",Eo.style.position="absolute",gg(),hx(),Wt.register(Ee),r.isTouch=Wt.isTouch,yr=Wt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Fh=Wt.isTouch===1,ln(it,"wheel",Is),Td=[it,gt,jn,ft],Ee.matchMedia?(r.matchMedia=function(u){var h=Ee.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Ee.addEventListener("matchMediaInit",function(){pg(),Ld()}),Ee.addEventListener("matchMediaRevert",function(){return fg()}),Ee.addEventListener("matchMedia",function(){ls(0,1),bs("matchMedia")}),Ee.matchMedia().add("(orientation: portrait)",function(){return Ru(),Ru})):console.warn("Requires GSAP 3.11.0 or later"),Ru(),ln(gt,"scroll",Is);var n=ft.hasAttribute("style"),i=ft.style,s=i.borderTopStyle,o=Ee.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ir(ft),Qt.m=Math.round(a.top+Qt.sc())||0,In.m=Math.round(a.left+In.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ft.setAttribute("style",""),ft.removeAttribute("style")),pl=setInterval(Rf,250),Ee.delayedCall(.5,function(){return ml=0}),ln(gt,"touchcancel",Li),ln(ft,"touchstart",Li),_l(ln,gt,"pointerdown,touchstart,mousedown",Ef),_l(ln,gt,"pointerup,touchend,mouseup",wf),Oh=Ee.utils.checkPrefix("transform"),vc.push(Oh),oo=vn(),Dc=Ee.delayedCall(.2,ls).pause(),ao=[gt,"visibilitychange",function(){var u=it.innerWidth,h=it.innerHeight;gt.hidden?(Mf=u,bf=h):(Mf!==u||bf!==h)&&va()},gt,"DOMContentLoaded",ls,it,"load",ls,it,"resize",va],gl(ln),et.forEach(function(u){return u.enable(0,1)}),l=0;l<st.length;l+=3)vl(an,st[l],st[l+1]),vl(an,st[l],st[l+2])}else if(gt){var c=function u(){r.enable(),gt.removeEventListener("DOMContentLoaded",u)};gt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Au=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(pl)||(pl=i)&&setInterval(Rf,i),"ignoreMobileResize"in n&&(Fh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(gl(an)||gl(ln,n.autoRefreshEvents||"none"),ng=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Dn(n),o=st.indexOf(s),a=ys(s);~o&&st.splice(o,a?6:2),i&&(a?Bi.unshift(it,i,ft,i,jn,i):Bi.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=($n(n)?Dn(n):n).getBoundingClientRect(),a=o[s?fs:ps]*i||0;return s?o.right-a>0&&o.left+a<it.innerWidth:o.bottom-a>0&&o.top+a<it.innerHeight},r.positionInViewport=function(n,i,s){$n(n)&&(n=Dn(n));var o=n.getBoundingClientRect(),a=o[s?fs:ps],l=i==null?a/2:i in Nc?Nc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/it.innerWidth:(o.top+l)/it.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ms.killAll||[];Ms={},i.forEach(function(s){return s()})}},r}();Ke.version="3.15.0";Ke.saveStyles=function(r){return r?$a(r).forEach(function(e){if(e&&e.style){var t=Yn.indexOf(e);t>=0&&Yn.splice(t,5),Yn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),Bh())}}):Yn};Ke.revert=function(r,e){return Ld(!r,e)};Ke.create=function(r,e){return new Ke(r,e)};Ke.refresh=function(r){return r?va(!0):(oo||Ke.register())&&ls(!0)};Ke.update=function(r){return++st.cache&&ar(r===!0?2:0)};Ke.clearScrollMemory=mg;Ke.maxScroll=function(r,e){return Fi(r,e?In:Qt)};Ke.getScrollFunc=function(r,e){return Br(Dn(r),e?In:Qt)};Ke.getById=function(r){return zh[r]};Ke.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ke.isScrolling=function(){return!!gi};Ke.snapDirectional=Pd;Ke.addEventListener=function(r,e){var t=Ms[r]||(Ms[r]=[]);~t.indexOf(e)||t.push(e)};Ke.removeEventListener=function(r,e){var t=Ms[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ke.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ee.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(m){h.length||d.restart(!0),h.push(m.trigger),f.push(m),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&yn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return yn(s)&&(s=s(),ln(Ke,"refresh",function(){return s=e.batchMax()})),$a(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Ke.create(c))}),t};var Nf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Lu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Wt.isTouch?" pinch-zoom":""):"none",e===jn&&r(ft,t)},Sl={auto:1,scroll:1},Sx=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ee.core.getCache(s),a=vn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ft&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Sl[(l=ci(s)).overflowY]||Sl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ys(s)&&(Sl[(l=ci(s)).overflowY]||Sl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},vg=function(e,t,n,i){return Wt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Sx,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ln(gt,Wt.eventTypes[0],Ff,!1,!0)},onDisable:function(){return an(gt,Wt.eventTypes[0],Ff,!0)}})},Tx=/(input|label|select|textarea)/i,Of,Ff=function(e){var t=Tx.test(e.target.tagName);(t||Of)&&(e._gsapAllow=!0,Of=t)},Ex=function(e){ns(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Dn(e.target)||jn,u=Ee.core.globals().ScrollSmoother,h=u&&u.get(),f=yr&&(e.content&&Dn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Br(c,Qt),m=Br(c,In),_=1,g=(Wt.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,p=0,x=yn(i)?function(){return i(a)}:function(){return i||2.8},v,y,E=vg(c,e.type,!0,s),S=function(){return y=!1},M=Li,R=Li,b=function(){l=Fi(c,Qt),R=Ea(yr?1:0,l),n&&(M=Ea(0,Fi(c,In))),v=ms},T=function(){f._gsap.y=ga(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(y){requestAnimationFrame(S);var H=ga(a.deltaY/2),X=R(d.v-H);if(f&&X!==d.v+d.offset){d.offset=X-d.v;var L=ga((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=st.cache,ar()}return!0}d.offset&&T(),y=!0},N,W,D,B,I=function(){b(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&Ee.set(f,{y:"+=0"}),e.ignoreCheck=function(F){return yr&&F.type==="touchmove"&&P()||_>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){y=!1;var F=_;_=ga((it.visualViewport&&it.visualViewport.scale||1)/g),N.pause(),F!==_&&Lu(c,_>1.01?!0:n?!1:"x"),W=m(),D=d(),b(),v=ms},e.onRelease=e.onGestureStart=function(F,H){if(d.offset&&T(),!H)B.restart(!0);else{st.cache++;var X=x(),L,J;n&&(L=m(),J=L+X*.05*-F.velocityX/.227,X*=Nf(m,L,J,Fi(c,In)),N.vars.scrollX=M(J)),L=d(),J=L+X*.05*-F.velocityY/.227,X*=Nf(d,L,J,Fi(c,Qt)),N.vars.scrollY=R(J),N.invalidate().duration(X).play(.01),(yr&&N.vars.scrollY>=l||L>=l-1)&&Ee.to({},{onUpdate:I,duration:X})}o&&o(F)},e.onWheel=function(){N._ts&&N.pause(),vn()-p>1e3&&(v=0,p=vn())},e.onChange=function(F,H,X,L,J){if(ms!==v&&b(),H&&n&&m(M(L[2]===H?W+(F.startX-F.x):m()+H-L[1])),X){d.offset&&T();var ae=J[2]===X,j=ae?D+F.startY-F.y:d()+X-J[1],Q=R(j);ae&&j!==Q&&(D+=Q-j),d(Q)}(X||H)&&ar()},e.onEnable=function(){Lu(c,n?!1:"x"),Ke.addEventListener("refresh",I),ln(it,"resize",I),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),E.enable()},e.onDisable=function(){Lu(c,!0),an(it,"resize",I),Ke.removeEventListener("refresh",I),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new Wt(e),a.iOS=yr,yr&&!d()&&d(1),yr&&Ee.ticker.add(Li),B=a._dc,N=Ee.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:_g(d,d(),function(){return N.pause()})},onUpdate:ar,onComplete:B.vars.onComplete}),a};Ke.sort=function(r){if(yn(r))return et.sort(r);var e=it.pageYOffset||0;return Ke.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+it.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ke.observe=function(r){return new Wt(r)};Ke.normalizeScroll=function(r){if(typeof r>"u")return Cn;if(r===!0&&Cn)return Cn.enable();if(r===!1){Cn&&Cn.kill(),Cn=r;return}var e=r instanceof Wt?r:Ex(r);return Cn&&Cn.target===e.target&&Cn.kill(),ys(e.target)&&(Cn=e),e};Ke.core={_getVelocityProp:Nh,_inputObserver:vg,_scrollers:st,_proxies:Bi,bridge:{ss:function(){gi||bs("scrollStart"),gi=vn()},ref:function(){return gn}}};og()&&Ee.registerPlugin(Ke);function xg(r,e,t){return Math.max(r,Math.min(e,t))}class wx{advance(e){if(!this.isRunning)return;let t=!1;if(this.lerp)this.value=(n=this.value,i=this.to,s=60*this.lerp,o=e,function(a,l,c){return(1-c)*a+c*l}(n,i,1-Math.exp(-s*o))),Math.round(this.value)===this.to&&(this.value=this.to,t=!0);else{this.currentTime+=e;const a=xg(0,this.currentTime/this.duration,1);t=a>=1;const l=t?1:this.easing(a);this.value=this.from+(this.to-this.from)*l}var n,i,s,o;this.onUpdate?.(this.value,t),t&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n=.1,duration:i=1,easing:s=l=>l,onStart:o,onUpdate:a}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,o?.(),this.onUpdate=a}}class Ax{constructor({wrapper:e,content:t,autoResize:n=!0,debounce:i=250}={}){Yi(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Yi(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Yi(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,n&&(this.debouncedResize=function(s,o){let a;return function(){let l=arguments,c=this;clearTimeout(a),a=setTimeout(function(){s.apply(c,l)},o)}}(this.resize,i),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class yg{constructor(){this.events={}}emit(e,...t){let n=this.events[e]||[];for(let i=0,s=n.length;i<s;i++)n[i](...t)}on(e,t){return this.events[e]?.push(t)||(this.events[e]=[t]),()=>{this.events[e]=this.events[e]?.filter(n=>t!==n)}}off(e,t){this.events[e]=this.events[e]?.filter(n=>t!==n)}destroy(){this.events={}}}const Bf=100/6;class Cx{constructor(e,{wheelMultiplier:t=1,touchMultiplier:n=1}){Yi(this,"onTouchStart",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Yi(this,"onTouchMove",e=>{const{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,i=-(t-this.touchStart.x)*this.touchMultiplier,s=-(n-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:i,y:s},this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:e})});Yi(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Yi(this,"onWheel",e=>{let{deltaX:t,deltaY:n,deltaMode:i}=e;t*=i===1?Bf:i===2?this.windowWidth:1,n*=i===1?Bf:i===2?this.windowHeight:1,t*=this.wheelMultiplier,n*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:e})});Yi(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=t,this.touchMultiplier=n,this.touchStart={x:null,y:null},this.emitter=new yg,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class Rx{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:n=e,eventsTarget:i=n,smoothWheel:s=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaMultiplier:l=35,duration:c,easing:u=v=>Math.min(1,1.001-Math.pow(2,-10*v)),lerp:h=!c&&.1,infinite:f=!1,orientation:d="vertical",gestureOrientation:m="vertical",touchMultiplier:_=1,wheelMultiplier:g=1,autoResize:p=!0,__experimental__naiveDimensions:x=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:v,deltaY:y,event:E})=>{if(E.ctrlKey)return;const S=E.type.includes("touch"),M=E.type.includes("wheel");if(this.options.syncTouch&&S&&E.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const R=v===0&&y===0,b=this.options.gestureOrientation==="vertical"&&y===0||this.options.gestureOrientation==="horizontal"&&v===0;if(R||b)return;let T=E.composedPath();if(T=T.slice(0,T.indexOf(this.rootElement)),T.find(D=>{var B,I,F,H,X;return((B=D.hasAttribute)===null||B===void 0?void 0:B.call(D,"data-lenis-prevent"))||S&&((I=D.hasAttribute)===null||I===void 0?void 0:I.call(D,"data-lenis-prevent-touch"))||M&&((F=D.hasAttribute)===null||F===void 0?void 0:F.call(D,"data-lenis-prevent-wheel"))||((H=D.classList)===null||H===void 0?void 0:H.contains("lenis"))&&!(!((X=D.classList)===null||X===void 0)&&X.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void E.preventDefault();if(this.isSmooth=this.options.syncTouch&&S||this.options.smoothWheel&&M,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();E.preventDefault();let P=y;this.options.gestureOrientation==="both"?P=Math.abs(y)>Math.abs(v)?y:v:this.options.gestureOrientation==="horizontal"&&(P=v);const N=S&&this.options.syncTouch,W=S&&E.type==="touchend"&&Math.abs(P)>5;W&&(P=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+P,Object.assign({programmatic:!1},N?{lerp:W?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const v=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-v),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:n,eventsTarget:i,smoothWheel:s,syncTouch:o,syncTouchLerp:a,touchInertiaMultiplier:l,duration:c,easing:u,lerp:h,infinite:f,gestureOrientation:m,orientation:d,touchMultiplier:_,wheelMultiplier:g,autoResize:p,__experimental__naiveDimensions:x},this.animate=new wx,this.emitter=new yg,this.dimensions=new Ax({wrapper:e,content:t,autoResize:p}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new Cx(i,{touchMultiplier:_,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:n=!1,lock:i=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:a=!s&&this.options.lerp,onComplete:l,force:c=!1,programmatic:u=!0}={}){if(!this.isStopped&&!this.isLocked||c){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let h;if(typeof e=="string"?h=document.querySelector(e):e?.nodeType&&(h=e),h){if(this.options.wrapper!==window){const d=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?d.left:d.top}const f=h.getBoundingClientRect();e=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):e=xg(0,e,this.limit),n)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!u){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:o,lerp:a,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(h,f)=>{this.isScrolling=!0,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),u&&(this.targetScroll=h),f||this.emit(),f&&(this.reset(),this.emit(),l?.(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,t=this.limit,(e%t+t)%t):this.animatedScroll;var e,t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}}const ou="./",Oc=r=>`${ou}video/${r}.mp4`,Fc=r=>`${ou}img/posters/${r}.jpg`,Px=()=>`${ou}img/logo02.png`,Ao=(r,e="webp")=>`${ou}img/mascot/poses/${r}.${e}`;function sl(r,e,t={}){const n=`mascot mascot--${e}${t.faint?" mascot--faint":""}`,i=t.label?`role="img" aria-label="${t.label}"`:'aria-hidden="true"';return`<div class="${n}" data-pose="${r}" ${i}>
    <span class="mascot-shadow"></span>
    <img class="mascot-img" alt="" decoding="async" />
  </div>`}const Rt=(r,e=document)=>e.querySelector(r),qt=(r,e=document)=>[...e.querySelectorAll(r)],Lx=(r,e,t)=>Math.max(e,Math.min(t,r));function Hr(r,{scrub:e=!1}={}){return`
    <video class="sec-video" data-src="${Oc(r)}" poster="${Fc(r)}"
           muted loop playsinline preload="metadata" ${e?'data-scrub="true"':""}></video>
    <img class="sec-poster" src="${Fc(r)}" alt="" aria-hidden="true" />
    <div class="sec-video-scrim"></div>
    <div class="facet-bg" aria-hidden="true"></div>`}const kf={brain:'<path d="M24 6c-4 0-7 3-7 6 0 1-2 1-2 4s2 3 2 5c0 4 3 7 7 7s7-3 7-7c0-2 2-2 2-5s-2-3-2-4c0-3-3-6-7-6z"/>',chip:'<rect x="14" y="14" width="20" height="20" rx="2"/><path d="M24 8v6M24 34v6M8 24h6M34 24h6"/>',gem:'<path d="M24 6 40 20 24 42 8 20z"/><path d="M8 20h32M24 6v36"/>',chart:'<path d="M8 40V22M18 40V12M28 40V26M38 40V16"/>',arrow:'<path d="M8 34 20 22l8 6L40 12"/><path d="M40 22V12H30"/>',node:'<circle cx="24" cy="24" r="6"/><circle cx="10" cy="12" r="3"/><circle cx="38" cy="12" r="3"/><circle cx="12" cy="38" r="3"/><path d="M13 14l8 7M35 14l-8 7M15 36l6-8"/>'},Mg=r=>`<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${kf[r]||kf.gem}</svg>`,Ix={mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',pin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',check:'<path d="M20 6 9 17l-5-5"/>',cap:'<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/>',star:'<path d="M12 2 15 9l7 .5-5.5 4.5L18 21l-6-4-6 4 1.5-7L2 9.5 9 9z"/>'},zf=r=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Ix[r]||""}</svg>`,Bc=r=>`<span class="wordmark"${r?` style="font-size:${r}"`:""}><span class="w-oranje">Oranje</span><span class="w-stride">Stride</span></span>`,Dx="modulepreload",Ux=function(r,e){return new URL(r,e).href},Vf={},bg=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");i=Promise.allSettled(t.map(c=>{if(c=Ux(c,n),c in Vf)return;Vf[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!n)for(let m=o.length-1;m>=0;m--){const _=o[m];if(_.href===c&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Dx,u||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((m,_)=>{d.addEventListener("load",m),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Id="160",Nx=0,Hf=1,Ox=2,Sg=1,Fx=2,Qi=3,kr=0,zn=1,Ui=2,lr=0,Co=1,ja=2,Gf=3,Wf=4,Tg=5,Mr=100,Bx=101,kx=102,Xf=103,Yf=104,Eg=200,yc=201,zx=202,Vx=203,Gh=204,Wh=205,Hx=206,Gx=207,Wx=208,Xx=209,Yx=210,$x=211,qx=212,jx=213,Zx=214,Jx=0,Kx=1,Qx=2,kc=3,ey=4,ty=5,ny=6,iy=7,wg=0,ry=1,sy=2,Dr=0,Ag=1,Cg=2,Rg=3,Dd=4,oy=5,Pg=6,$f="attached",ay="detached",Lg=300,Fo=301,Bo=302,Xh=303,Yh=304,au=306,zc=1e3,wi=1001,$h=1002,un=1003,qf=1004,Iu=1005,ui=1006,ly=1007,Za=1008,Ur=1009,cy=1010,uy=1011,Ud=1012,Ig=1013,Ar=1014,sr=1015,ki=1016,Dg=1017,Ug=1018,gs=1020,hy=1021,di=1023,dy=1024,fy=1025,_s=1026,ko=1027,py=1028,Ng=1029,my=1030,Og=1031,Fg=1033,Du=33776,Uu=33777,Nu=33778,Ou=33779,jf=35840,Zf=35841,Jf=35842,Kf=35843,Bg=36196,Qf=37492,ep=37496,tp=37808,np=37809,ip=37810,rp=37811,sp=37812,op=37813,ap=37814,lp=37815,cp=37816,up=37817,hp=37818,dp=37819,fp=37820,pp=37821,Fu=36492,mp=36494,gp=36495,gy=36283,_p=36284,vp=36285,xp=36286,kg=2200,_y=2201,vy=2202,Vc=2300,Hc=2301,Bu=2302,po=2400,mo=2401,Gc=2402,Nd=2500,xy=2501,yy=0,My=1,yp=2,zg=3e3,vs=3001,by=3200,Sy=3201,Vg=0,Ty=1,fi="",Gt="srgb",dr="srgb-linear",Od="display-p3",lu="display-p3-linear",Wc="linear",wt="srgb",Xc="rec709",Yc="p3",Ds=7680,Mp=519,Ey=512,wy=513,Ay=514,Hg=515,Cy=516,Ry=517,Py=518,Ly=519,qh=35044,bp="300 es",jh=1035,or=2e3,$c=2001;class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sp=1234567;const Ia=Math.PI/180,zo=180/Math.PI;function _i(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function tn(r,e,t){return Math.max(e,Math.min(t,r))}function Fd(r,e){return(r%e+e)%e}function Iy(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Dy(r,e,t){return r!==e?(t-r)/(e-r):0}function Da(r,e,t){return(1-t)*r+t*e}function Uy(r,e,t,n){return Da(r,e,1-Math.exp(-t*n))}function Ny(r,e=1){return e-Math.abs(Fd(r,e*2)-e)}function Oy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Fy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function By(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ky(r,e){return r+Math.random()*(e-r)}function zy(r){return r*(.5-Math.random())}function Vy(r){r!==void 0&&(Sp=r);let e=Sp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hy(r){return r*Ia}function Gy(r){return r*zo}function Zh(r){return(r&r-1)===0&&r!==0}function Wy(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function qc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xy(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*m,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*m,a*c);break;case"ZYZ":r.set(l*m,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ni(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Jh={DEG2RAD:Ia,RAD2DEG:zo,generateUUID:_i,clamp:tn,euclideanModulo:Fd,mapLinear:Iy,inverseLerp:Dy,lerp:Da,damp:Uy,pingpong:Ny,smoothstep:Oy,smootherstep:Fy,randInt:By,randFloat:ky,randFloatSpread:zy,seededRandom:Vy,degToRad:Hy,radToDeg:Gy,isPowerOfTwo:Zh,ceilPowerOfTwo:Wy,floorPowerOfTwo:qc,setQuaternionFromProperEuler:Xy,normalize:yt,denormalize:Ni};class te{constructor(e=0,t=0){te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,n,i,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],_=i[0],g=i[3],p=i[6],x=i[1],v=i[4],y=i[7],E=i[2],S=i[5],M=i[8];return s[0]=o*_+a*x+l*E,s[3]=o*g+a*v+l*S,s[6]=o*p+a*y+l*M,s[1]=c*_+u*x+h*E,s[4]=c*g+u*v+h*S,s[7]=c*p+u*y+h*M,s[2]=f*_+d*x+m*E,s[5]=f*g+d*v+m*S,s[8]=f*p+d*y+m*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,m=t*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ku.makeScale(e,t)),this}rotate(e){return this.premultiply(ku.makeRotation(-e)),this}translate(e,t){return this.premultiply(ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ku=new rt;function Gg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ja(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yy(){const r=Ja("canvas");return r.style.display="block",r}const Tp={};function Ua(r){r in Tp||(Tp[r]=!0,console.warn(r))}const Ep=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wp=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tl={[dr]:{transfer:Wc,primaries:Xc,toReference:r=>r,fromReference:r=>r},[Gt]:{transfer:wt,primaries:Xc,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[lu]:{transfer:Wc,primaries:Yc,toReference:r=>r.applyMatrix3(wp),fromReference:r=>r.applyMatrix3(Ep)},[Od]:{transfer:wt,primaries:Yc,toReference:r=>r.convertSRGBToLinear().applyMatrix3(wp),fromReference:r=>r.applyMatrix3(Ep).convertLinearToSRGB()}},$y=new Set([dr,lu]),vt={enabled:!0,_workingColorSpace:dr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!$y.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Tl[e].toReference,i=Tl[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Tl[r].primaries},getTransfer:function(r){return r===fi?Wc:Tl[r].transfer}};function Ro(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zu(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Us;class Wg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=Ja("canvas")),Us.width=e.width,Us.height=e.height;const n=Us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ja("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ro(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ro(t[n]/255)*255):t[n]=Ro(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qy=0;class Xg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=_i(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Vu(i[o].image)):s.push(Vu(i[o]))}else s=Vu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Vu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Wg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jy=0;class bn extends As{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,n=wi,i=wi,s=ui,o=Za,a=di,l=Ur,c=bn.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=_i(),this.name="",this.source=new Xg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===vs?Gt:fi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zc:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case $h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zc:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case $h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Gt?vs:zg}set encoding(e){Ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===vs?Gt:fi}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Lg;bn.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,i=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(d+1)/2,E=(p+1)/2,S=(u+f)/4,M=(h+_)/4,R=(m+g)/4;return v>y&&v>E?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=S/n,s=M/n):y>E?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=S/i,s=R/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=M/s,i=R/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-_)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zy extends As{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ua("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===vs?Gt:fi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new bn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Zy{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yg extends bn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jy extends bn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==m){let g=1-a;const p=l*f+c*d+u*m+h*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const E=Math.sqrt(v),S=Math.atan2(E,p*x);g=Math.sin(g*S)/E,a=Math.sin(a*S)/E}const y=a*x;if(l=l*g+f*y,c=c*g+d*y,u=u*g+m*y,h=h*g+_*y,g===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-a*d,e[t+2]=c*m+u*d+a*f-l*h,e[t+3]=u*m-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ap.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ap.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hu.copy(this).projectOnVector(e),this.sub(Hu)}reflect(e){return this.sub(Hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hu=new U,Ap=new zi;class Hi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mi):Mi.fromBufferAttribute(s,o),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),El.copy(n.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),wl.subVectors(this.max,ta),Ns.subVectors(e.a,ta),Os.subVectors(e.b,ta),Fs.subVectors(e.c,ta),pr.subVectors(Os,Ns),mr.subVectors(Fs,Os),qr.subVectors(Ns,Fs);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-qr.z,qr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,qr.z,0,-qr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-qr.y,qr.x,0];return!Gu(t,Ns,Os,Fs,wl)||(t=[1,0,0,0,1,0,0,0,1],!Gu(t,Ns,Os,Fs,wl))?!1:(Al.crossVectors(pr,mr),t=[Al.x,Al.y,Al.z],Gu(t,Ns,Os,Fs,wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new U,new U,new U,new U,new U,new U,new U,new U],Mi=new U,El=new Hi,Ns=new U,Os=new U,Fs=new U,pr=new U,mr=new U,qr=new U,ta=new U,wl=new U,Al=new U,jr=new U;function Gu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){jr.fromArray(r,s);const a=i.x*Math.abs(jr.x)+i.y*Math.abs(jr.y)+i.z*Math.abs(jr.z),l=e.dot(jr),c=t.dot(jr),u=n.dot(jr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ky=new Hi,na=new U,Wu=new U;class fr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ky.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const t=na.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(na,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Wu)),this.expandByPoint(na.copy(e.center).sub(Wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new U,Xu=new U,Cl=new U,gr=new U,Yu=new U,Rl=new U,$u=new U;class cu{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xu.copy(e).add(t).multiplyScalar(.5),Cl.copy(t).sub(e).normalize(),gr.copy(this.origin).sub(Xu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Cl),a=gr.dot(this.direction),l=-gr.dot(Cl),c=gr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Xu).addScaledVector(Cl,f),d}intersectSphere(e,t){qi.subVectors(e.center,this.origin);const n=qi.dot(this.direction),i=qi.dot(qi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,i,s){Yu.subVectors(t,e),Rl.subVectors(n,e),$u.crossVectors(Yu,Rl);let o=this.direction.dot($u),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gr.subVectors(this.origin,e);const l=a*this.direction.dot(Rl.crossVectors(gr,Rl));if(l<0)return null;const c=a*this.direction.dot(Yu.cross(gr));if(c<0||l+c>o)return null;const u=-a*gr.dot($u);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,m,_,g){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,m,_,g)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Bs.setFromMatrixColumn(e,0).length(),s=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,m=c*u,_=c*h;t[0]=f+_*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,m=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qy,e,eM)}lookAt(e,t,n){const i=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),_r.crossVectors(n,Gn),_r.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),_r.crossVectors(n,Gn)),_r.normalize(),Pl.crossVectors(Gn,_r),i[0]=_r.x,i[4]=Pl.x,i[8]=Gn.x,i[1]=_r.y,i[5]=Pl.y,i[9]=Gn.y,i[2]=_r.z,i[6]=Pl.z,i[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],v=n[7],y=n[11],E=n[15],S=i[0],M=i[4],R=i[8],b=i[12],T=i[1],P=i[5],N=i[9],W=i[13],D=i[2],B=i[6],I=i[10],F=i[14],H=i[3],X=i[7],L=i[11],J=i[15];return s[0]=o*S+a*T+l*D+c*H,s[4]=o*M+a*P+l*B+c*X,s[8]=o*R+a*N+l*I+c*L,s[12]=o*b+a*W+l*F+c*J,s[1]=u*S+h*T+f*D+d*H,s[5]=u*M+h*P+f*B+d*X,s[9]=u*R+h*N+f*I+d*L,s[13]=u*b+h*W+f*F+d*J,s[2]=m*S+_*T+g*D+p*H,s[6]=m*M+_*P+g*B+p*X,s[10]=m*R+_*N+g*I+p*L,s[14]=m*b+_*W+g*F+p*J,s[3]=x*S+v*T+y*D+E*H,s[7]=x*M+v*P+y*B+E*X,s[11]=x*R+v*N+y*I+E*L,s[15]=x*b+v*W+y*F+E*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+g*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],x=h*g*c-_*f*c+_*l*d-a*g*d-h*l*p+a*f*p,v=m*f*c-u*g*c-m*l*d+o*g*d+u*l*p-o*f*p,y=u*_*c-m*h*c+m*a*d-o*_*d-u*a*p+o*h*p,E=m*h*l-u*_*l-m*a*f+o*_*f+u*a*g-o*h*g,S=t*x+n*v+i*y+s*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/S;return e[0]=x*M,e[1]=(_*f*s-h*g*s-_*i*d+n*g*d+h*i*p-n*f*p)*M,e[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*p+n*l*p)*M,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*M,e[4]=v*M,e[5]=(u*g*s-m*f*s+m*i*d-t*g*d-u*i*p+t*f*p)*M,e[6]=(m*l*s-o*g*s-m*i*c+t*g*c+o*i*p-t*l*p)*M,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*M,e[8]=y*M,e[9]=(m*h*s-u*_*s-m*n*d+t*_*d+u*n*p-t*h*p)*M,e[10]=(o*_*s-m*a*s+m*n*c-t*_*c-o*n*p+t*a*p)*M,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*M,e[12]=E*M,e[13]=(u*_*i-m*h*i+m*n*f-t*_*f-u*n*g+t*h*g)*M,e[14]=(m*a*i-o*_*i-m*n*l+t*_*l+o*n*g-t*a*g)*M,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*M,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,m=s*h,_=o*u,g=o*h,p=a*h,x=l*c,v=l*u,y=l*h,E=n.x,S=n.y,M=n.z;return i[0]=(1-(_+p))*E,i[1]=(d+y)*E,i[2]=(m-v)*E,i[3]=0,i[4]=(d-y)*S,i[5]=(1-(f+p))*S,i[6]=(g+x)*S,i[7]=0,i[8]=(m+v)*M,i[9]=(g-x)*M,i[10]=(1-(f+_))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Bs.set(i[0],i[1],i[2]).length();const o=Bs.set(i[4],i[5],i[6]).length(),a=Bs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],bi.copy(this);const c=1/s,u=1/o,h=1/a;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=u,bi.elements[5]*=u,bi.elements[6]*=u,bi.elements[8]*=h,bi.elements[9]*=h,bi.elements[10]*=h,t.setFromRotationMatrix(bi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=or){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,m;if(a===or)d=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===$c)d=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=or){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let m,_;if(a===or)m=(o+s)*h,_=-2*h;else if(a===$c)m=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bs=new U,bi=new Je,Qy=new U(0,0,0),eM=new U(1,1,1),_r=new U,Pl=new U,Gn=new U,Cp=new Je,Rp=new zi;class Ss{constructor(e=0,t=0,n=0,i=Ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rp.setFromEuler(this),this.setFromQuaternion(Rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ss.DEFAULT_ORDER="XYZ";class $g{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tM=0;const Pp=new U,ks=new zi,ji=new Je,Ll=new U,ia=new U,nM=new U,iM=new zi,Lp=new U(1,0,0),Ip=new U(0,1,0),Dp=new U(0,0,1),rM={type:"added"},sM={type:"removed"};class Bt extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new U,t=new Ss,n=new zi,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new rt}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $g,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Lp,e)}rotateY(e){return this.rotateOnAxis(Ip,e)}rotateZ(e){return this.rotateOnAxis(Dp,e)}translateOnAxis(e,t){return Pp.copy(e).applyQuaternion(this.quaternion),this.position.add(Pp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lp,e)}translateY(e){return this.translateOnAxis(Ip,e)}translateZ(e){return this.translateOnAxis(Dp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ll.copy(e):Ll.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(ia,Ll,this.up):ji.lookAt(Ll,ia,this.up),this.quaternion.setFromRotationMatrix(ji),i&&(ji.extractRotation(i.matrixWorld),ks.setFromRotationMatrix(ji),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,nM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,iM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Bt.DEFAULT_UP=new U(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new U,Zi=new U,qu=new U,Ji=new U,zs=new U,Vs=new U,Up=new U,ju=new U,Zu=new U,Ju=new U;let Il=!1;class hi{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Si.subVectors(e,t),i.cross(Si);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Si.subVectors(i,t),Zi.subVectors(n,t),qu.subVectors(e,t);const o=Si.dot(Si),a=Si.dot(Zi),l=Si.dot(qu),c=Zi.dot(Zi),u=Zi.dot(qu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getUV(e,t,n,i,s,o,a,l){return Il===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Il=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static isFrontFacing(e,t,n,i){return Si.subVectors(n,t),Zi.subVectors(e,t),Si.cross(Zi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Si.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Il===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Il=!0),hi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return hi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;zs.subVectors(i,n),Vs.subVectors(s,n),ju.subVectors(e,n);const l=zs.dot(ju),c=Vs.dot(ju);if(l<=0&&c<=0)return t.copy(n);Zu.subVectors(e,i);const u=zs.dot(Zu),h=Vs.dot(Zu);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(zs,o);Ju.subVectors(e,s);const d=zs.dot(Ju),m=Vs.dot(Ju);if(m>=0&&d<=m)return t.copy(s);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Vs,a);const g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Up.subVectors(s,i),a=(h-u)/(h-u+(d-m)),t.copy(i).addScaledVector(Up,a);const p=1/(g+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(zs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},Dl={h:0,s:0,l:0};function Ku(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=vt.workingColorSpace){if(e=Fd(e,1),t=tn(t,0,1),n=tn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ku(o,s,e+1/3),this.g=Ku(o,s,e),this.b=Ku(o,s,e-1/3)}return vt.toWorkingColorSpace(this,i),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=qg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ro(e.r),this.g=Ro(e.g),this.b=Ro(e.b),this}copyLinearToSRGB(e){return this.r=zu(e.r),this.g=zu(e.g),this.b=zu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return vt.fromWorkingColorSpace(mn.copy(this),e),Math.round(tn(mn.r*255,0,255))*65536+Math.round(tn(mn.g*255,0,255))*256+Math.round(tn(mn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(mn.copy(this),t);const n=mn.r,i=mn.g,s=mn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Gt){vt.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,n=mn.g,i=mn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+t,vr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vr),e.getHSL(Dl);const n=Da(vr.h,Dl.h,t),i=Da(vr.s,Dl.s,t),s=Da(vr.l,Dl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Xe;Xe.NAMES=qg;let oM=0;class Gr extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Co,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=Wh,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=kc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Co&&(n.blending=this.blending),this.side!==kr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gh&&(n.blendSrc=this.blendSrc),this.blendDst!==Wh&&(n.blendDst=this.blendDst),this.blendEquation!==Mr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==kc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ka extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new U,Ul=new te;class nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ul.fromBufferAttribute(this,t),Ul.applyMatrix3(e),this.setXY(t,Ul.x,Ul.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qh&&(e.usage=this.usage),e}}class jg extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zg extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ot extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let aM=0;const si=new Je,Qu=new Bt,Hs=new U,Wn=new Hi,ra=new Hi,on=new U;class kt extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gg(e)?Zg:jg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return Qu.lookAt(e),Qu.updateMatrix(),this.applyMatrix4(Qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Wn.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ra.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Wn.min,ra.min),Wn.expandByPoint(on),on.addVectors(Wn.max,ra.max),Wn.expandByPoint(on)):(Wn.expandByPoint(ra.min),Wn.expandByPoint(ra.max))}Wn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)on.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(on));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)on.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(e,c),on.add(Hs)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new U,u[T]=new U;const h=new U,f=new U,d=new U,m=new te,_=new te,g=new te,p=new U,x=new U;function v(T,P,N){h.fromArray(i,T*3),f.fromArray(i,P*3),d.fromArray(i,N*3),m.fromArray(o,T*2),_.fromArray(o,P*2),g.fromArray(o,N*2),f.sub(h),d.sub(h),_.sub(m),g.sub(m);const W=1/(_.x*g.y-g.x*_.y);isFinite(W)&&(p.copy(f).multiplyScalar(g.y).addScaledVector(d,-_.y).multiplyScalar(W),x.copy(d).multiplyScalar(_.x).addScaledVector(f,-g.x).multiplyScalar(W),c[T].add(p),c[P].add(p),c[N].add(p),u[T].add(x),u[P].add(x),u[N].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,P=y.length;T<P;++T){const N=y[T],W=N.start,D=N.count;for(let B=W,I=W+D;B<I;B+=3)v(n[B+0],n[B+1],n[B+2])}const E=new U,S=new U,M=new U,R=new U;function b(T){M.fromArray(s,T*3),R.copy(M);const P=c[T];E.copy(P),E.sub(M.multiplyScalar(M.dot(P))).normalize(),S.crossVectors(R,P);const W=S.dot(u[T])<0?-1:1;l[T*4]=E.x,l[T*4+1]=E.y,l[T*4+2]=E.z,l[T*4+3]=W}for(let T=0,P=y.length;T<P;++T){const N=y[T],W=N.start,D=N.count;for(let B=W,I=W+D;B<I;B+=3)b(n[B+0]),b(n[B+1]),b(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new nn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Np=new Je,Zr=new cu,Nl=new fr,Op=new U,Gs=new U,Ws=new U,Xs=new U,eh=new U,Ol=new U,Fl=new te,Bl=new te,kl=new te,Fp=new U,Bp=new U,kp=new U,zl=new U,Vl=new U;class Be extends Bt{constructor(e=new kt,t=new Ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ol.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(eh.fromBufferAttribute(h,e),o?Ol.addScaledVector(eh,u):Ol.addScaledVector(eh.sub(t),u))}t.add(Ol)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nl.copy(n.boundingSphere),Nl.applyMatrix4(s),Zr.copy(e.ray).recast(e.near),!(Nl.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(Nl,Op)===null||Zr.origin.distanceToSquared(Op)>(e.far-e.near)**2))&&(Np.copy(s).invert(),Zr.copy(e.ray).applyMatrix4(Np),!(n.boundingBox!==null&&Zr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],x=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,E=v;y<E;y+=3){const S=a.getX(y),M=a.getX(y+1),R=a.getX(y+2);i=Hl(this,p,e,n,c,u,h,S,M,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);i=Hl(this,o,e,n,c,u,h,x,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],x=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,E=v;y<E;y+=3){const S=y,M=y+1,R=y+2;i=Hl(this,p,e,n,c,u,h,S,M,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const x=g,v=g+1,y=g+2;i=Hl(this,o,e,n,c,u,h,x,v,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function lM(r,e,t,n,i,s,o,a){let l;if(e.side===zn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===kr,a),l===null)return null;Vl.copy(a),Vl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Vl);return c<t.near||c>t.far?null:{distance:c,point:Vl.clone(),object:r}}function Hl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Gs),r.getVertexPosition(l,Ws),r.getVertexPosition(c,Xs);const u=lM(r,e,t,n,Gs,Ws,Xs,zl);if(u){i&&(Fl.fromBufferAttribute(i,a),Bl.fromBufferAttribute(i,l),kl.fromBufferAttribute(i,c),u.uv=hi.getInterpolation(zl,Gs,Ws,Xs,Fl,Bl,kl,new te)),s&&(Fl.fromBufferAttribute(s,a),Bl.fromBufferAttribute(s,l),kl.fromBufferAttribute(s,c),u.uv1=hi.getInterpolation(zl,Gs,Ws,Xs,Fl,Bl,kl,new te),u.uv2=u.uv1),o&&(Fp.fromBufferAttribute(o,a),Bp.fromBufferAttribute(o,l),kp.fromBufferAttribute(o,c),u.normal=hi.getInterpolation(zl,Gs,Ws,Xs,Fp,Bp,kp,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new U,materialIndex:0};hi.getNormal(Gs,Ws,Xs,h.normal),u.face=h}return u}class xi extends kt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(h,2));function m(_,g,p,x,v,y,E,S,M,R,b){const T=y/M,P=E/R,N=y/2,W=E/2,D=S/2,B=M+1,I=R+1;let F=0,H=0;const X=new U;for(let L=0;L<I;L++){const J=L*P-W;for(let ae=0;ae<B;ae++){const j=ae*T-N;X[_]=j*x,X[g]=J*v,X[p]=D,c.push(X.x,X.y,X.z),X[_]=0,X[g]=0,X[p]=S>0?1:-1,u.push(X.x,X.y,X.z),h.push(ae/M),h.push(1-L/R),F+=1}}for(let L=0;L<R;L++)for(let J=0;J<M;J++){const ae=f+J+B*L,j=f+J+B*(L+1),Q=f+(J+1)+B*(L+1),ce=f+(J+1)+B*L;l.push(ae,j,ce),l.push(j,Q,ce),H+=6}a.addGroup(d,H,b),d+=H,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function An(r){const e={};for(let t=0;t<r.length;t++){const n=Vo(r[t]);for(const i in n)e[i]=n[i]}return e}function cM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Jg(r){return r.getRenderTarget()===null?r.outputColorSpace:vt.workingColorSpace}const Qa={clone:Vo,merge:An};var uM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uM,this.fragmentShader=hM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vo(e.uniforms),this.uniformsGroups=cM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Kg extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ln extends Kg{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ia*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ys=-90,$s=1;class dM extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ln(Ys,$s,e,t);i.layers=this.layers,this.add(i);const s=new Ln(Ys,$s,e,t);s.layers=this.layers,this.add(s);const o=new Ln(Ys,$s,e,t);o.layers=this.layers,this.add(o);const a=new Ln(Ys,$s,e,t);a.layers=this.layers,this.add(a);const l=new Ln(Ys,$s,e,t);l.layers=this.layers,this.add(l);const c=new Ln(Ys,$s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===or)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$c)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Qg extends bn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fo,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fM extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ua("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===vs?Gt:fi),this.texture=new Qg(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ui}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xi(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:Vo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:lr});s.uniforms.tEquirect.value=t;const o=new Be(i,s),a=t.minFilter;return t.minFilter===Za&&(t.minFilter=ui),new dM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const th=new U,pM=new U,mM=new rt;class is{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=th.subVectors(n,t).cross(pM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(th),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||mM.getNormalMatrix(e),i=this.coplanarPoint(th).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jr=new fr,Gl=new U;class Bd{constructor(e=new is,t=new is,n=new is,i=new is,s=new is,o=new is){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=or){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],m=i[9],_=i[10],g=i[11],p=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-s,f-c,g-d,y-p).normalize(),n[1].setComponents(l+s,f+c,g+d,y+p).normalize(),n[2].setComponents(l+o,f+u,g+m,y+x).normalize(),n[3].setComponents(l-o,f-u,g-m,y-x).normalize(),n[4].setComponents(l-a,f-h,g-_,y-v).normalize(),t===or)n[5].setComponents(l+a,f+h,g+_,y+v).normalize();else if(t===$c)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){return Jr.center.set(0,0,0),Jr.radius=.7071067811865476,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Gl.x=i.normal.x>0?e.max.x:e.min.x,Gl.y=i.normal.y>0?e.max.y:e.min.y,Gl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function e_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function gM(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=h.byteLength,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,h){const f=u.array,d=u._updateRange,m=u.updateRanges;if(r.bindBuffer(h,c),d.count===-1&&m.length===0&&r.bufferSubData(h,0,f),m.length!==0){for(let _=0,g=m.length;_<g;_++){const p=m[_];t?r.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):r.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class ol extends kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const x=p*f-o;for(let v=0;v<c;v++){const y=v*h-s;m.push(y,-x,0),_.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const v=x+c*p,y=x+c*(p+1),E=x+1+c*(p+1),S=x+1+c*p;d.push(v,y,S),d.push(y,E,S)}this.setIndex(d),this.setAttribute("position",new ot(m,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.widthSegments,e.heightSegments)}}var _M=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vM=`#ifdef USE_ALPHAHASH
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
#endif`,xM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SM=`#ifdef USE_AOMAP
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
#endif`,TM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,wM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,AM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PM=`#ifdef USE_IRIDESCENCE
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
#endif`,LM=`#ifdef USE_BUMPMAP
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
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zM=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,VM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,HM=`vec3 transformedNormal = objectNormal;
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
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$M="gl_FragColor = linearToOutputTexel( gl_FragColor );",qM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,jM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ZM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rb=`#ifdef USE_GRADIENTMAP
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
}`,sb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ob=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ab=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cb=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,ub=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mb=`PhysicalMaterial material;
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
#endif`,gb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,_b=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,vb=`#if defined( RE_IndirectDiffuse )
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
#endif`,xb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ab=`#if defined( USE_POINTS_UV )
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
#endif`,Cb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ib=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Db=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ub=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kb=`#ifdef USE_NORMALMAP
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
#endif`,zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iS=`#ifdef USE_SKINNING
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
#endif`,rS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sS=`#ifdef USE_SKINNING
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
#endif`,oS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cS=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uS=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hS=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_S=`uniform sampler2D t2D;
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`#include <common>
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
}`,SS=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,TS=`#define DISTANCE
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
}`,ES=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PS=`#include <common>
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
}`,LS=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,IS=`#define LAMBERT
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
}`,DS=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,US=`#define MATCAP
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
}`,NS=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,OS=`#define NORMAL
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
}`,FS=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BS=`#define PHONG
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
}`,kS=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,zS=`#define STANDARD
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
}`,VS=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,HS=`#define TOON
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
}`,GS=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,WS=`uniform float size;
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
}`,XS=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,YS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,$S=`uniform vec3 color;
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
}`,qS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,jS=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qe={alphahash_fragment:_M,alphahash_pars_fragment:vM,alphamap_fragment:xM,alphamap_pars_fragment:yM,alphatest_fragment:MM,alphatest_pars_fragment:bM,aomap_fragment:SM,aomap_pars_fragment:TM,batching_pars_vertex:EM,batching_vertex:wM,begin_vertex:AM,beginnormal_vertex:CM,bsdfs:RM,iridescence_fragment:PM,bumpmap_pars_fragment:LM,clipping_planes_fragment:IM,clipping_planes_pars_fragment:DM,clipping_planes_pars_vertex:UM,clipping_planes_vertex:NM,color_fragment:OM,color_pars_fragment:FM,color_pars_vertex:BM,color_vertex:kM,common:zM,cube_uv_reflection_fragment:VM,defaultnormal_vertex:HM,displacementmap_pars_vertex:GM,displacementmap_vertex:WM,emissivemap_fragment:XM,emissivemap_pars_fragment:YM,colorspace_fragment:$M,colorspace_pars_fragment:qM,envmap_fragment:jM,envmap_common_pars_fragment:ZM,envmap_pars_fragment:JM,envmap_pars_vertex:KM,envmap_physical_pars_fragment:ub,envmap_vertex:QM,fog_vertex:eb,fog_pars_vertex:tb,fog_fragment:nb,fog_pars_fragment:ib,gradientmap_pars_fragment:rb,lightmap_fragment:sb,lightmap_pars_fragment:ob,lights_lambert_fragment:ab,lights_lambert_pars_fragment:lb,lights_pars_begin:cb,lights_toon_fragment:hb,lights_toon_pars_fragment:db,lights_phong_fragment:fb,lights_phong_pars_fragment:pb,lights_physical_fragment:mb,lights_physical_pars_fragment:gb,lights_fragment_begin:_b,lights_fragment_maps:vb,lights_fragment_end:xb,logdepthbuf_fragment:yb,logdepthbuf_pars_fragment:Mb,logdepthbuf_pars_vertex:bb,logdepthbuf_vertex:Sb,map_fragment:Tb,map_pars_fragment:Eb,map_particle_fragment:wb,map_particle_pars_fragment:Ab,metalnessmap_fragment:Cb,metalnessmap_pars_fragment:Rb,morphcolor_vertex:Pb,morphnormal_vertex:Lb,morphtarget_pars_vertex:Ib,morphtarget_vertex:Db,normal_fragment_begin:Ub,normal_fragment_maps:Nb,normal_pars_fragment:Ob,normal_pars_vertex:Fb,normal_vertex:Bb,normalmap_pars_fragment:kb,clearcoat_normal_fragment_begin:zb,clearcoat_normal_fragment_maps:Vb,clearcoat_pars_fragment:Hb,iridescence_pars_fragment:Gb,opaque_fragment:Wb,packing:Xb,premultiplied_alpha_fragment:Yb,project_vertex:$b,dithering_fragment:qb,dithering_pars_fragment:jb,roughnessmap_fragment:Zb,roughnessmap_pars_fragment:Jb,shadowmap_pars_fragment:Kb,shadowmap_pars_vertex:Qb,shadowmap_vertex:eS,shadowmask_pars_fragment:tS,skinbase_vertex:nS,skinning_pars_vertex:iS,skinning_vertex:rS,skinnormal_vertex:sS,specularmap_fragment:oS,specularmap_pars_fragment:aS,tonemapping_fragment:lS,tonemapping_pars_fragment:cS,transmission_fragment:uS,transmission_pars_fragment:hS,uv_pars_fragment:dS,uv_pars_vertex:fS,uv_vertex:pS,worldpos_vertex:mS,background_vert:gS,background_frag:_S,backgroundCube_vert:vS,backgroundCube_frag:xS,cube_vert:yS,cube_frag:MS,depth_vert:bS,depth_frag:SS,distanceRGBA_vert:TS,distanceRGBA_frag:ES,equirect_vert:wS,equirect_frag:AS,linedashed_vert:CS,linedashed_frag:RS,meshbasic_vert:PS,meshbasic_frag:LS,meshlambert_vert:IS,meshlambert_frag:DS,meshmatcap_vert:US,meshmatcap_frag:NS,meshnormal_vert:OS,meshnormal_frag:FS,meshphong_vert:BS,meshphong_frag:kS,meshphysical_vert:zS,meshphysical_frag:VS,meshtoon_vert:HS,meshtoon_frag:GS,points_vert:WS,points_frag:XS,shadow_vert:YS,shadow_frag:$S,sprite_vert:qS,sprite_frag:jS},ve={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Ii={basic:{uniforms:An([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:An([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:An([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:An([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:An([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:An([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:An([ve.points,ve.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:An([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:An([ve.common,ve.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:An([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:An([ve.sprite,ve.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:An([ve.common,ve.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:An([ve.lights,ve.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Ii.physical={uniforms:An([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Wl={r:0,b:0,g:0};function ZS(r,e,t,n,i,s,o){const a=new Xe(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function m(g,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),x=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===au)?(u===void 0&&(u=new Be(new xi(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Vo(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,S,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=vt.getTransfer(v.colorSpace)!==wt,(h!==v||f!==v.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Be(new ol(2,2),new Nn({name:"BackgroundMaterial",uniforms:Vo(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=vt.getTransfer(v.colorSpace)!==wt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,p){g.getRGB(Wl,Jg(r)),n.buffers.color.setClear(Wl.r,Wl.g,Wl.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(a,l)},render:m}}function JS(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=g(null);let c=l,u=!1;function h(D,B,I,F,H){let X=!1;if(o){const L=_(F,I,B);c!==L&&(c=L,d(c.object)),X=p(D,F,I,H),X&&x(D,F,I,H)}else{const L=B.wireframe===!0;(c.geometry!==F.id||c.program!==I.id||c.wireframe!==L)&&(c.geometry=F.id,c.program=I.id,c.wireframe=L,X=!0)}H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,R(D,B,I,F),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function m(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,B,I){const F=I.wireframe===!0;let H=a[D.id];H===void 0&&(H={},a[D.id]=H);let X=H[B.id];X===void 0&&(X={},H[B.id]=X);let L=X[F];return L===void 0&&(L=g(f()),X[F]=L),L}function g(D){const B=[],I=[],F=[];for(let H=0;H<i;H++)B[H]=0,I[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:I,attributeDivisors:F,object:D,attributes:{},index:null}}function p(D,B,I,F){const H=c.attributes,X=B.attributes;let L=0;const J=I.getAttributes();for(const ae in J)if(J[ae].location>=0){const Q=H[ae];let ce=X[ae];if(ce===void 0&&(ae==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),ae==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor)),Q===void 0||Q.attribute!==ce||ce&&Q.data!==ce.data)return!0;L++}return c.attributesNum!==L||c.index!==F}function x(D,B,I,F){const H={},X=B.attributes;let L=0;const J=I.getAttributes();for(const ae in J)if(J[ae].location>=0){let Q=X[ae];Q===void 0&&(ae==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),ae==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));const ce={};ce.attribute=Q,Q&&Q.data&&(ce.data=Q.data),H[ae]=ce,L++}c.attributes=H,c.attributesNum=L,c.index=F}function v(){const D=c.newAttributes;for(let B=0,I=D.length;B<I;B++)D[B]=0}function y(D){E(D,0)}function E(D,B){const I=c.newAttributes,F=c.enabledAttributes,H=c.attributeDivisors;I[D]=1,F[D]===0&&(r.enableVertexAttribArray(D),F[D]=1),H[D]!==B&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),H[D]=B)}function S(){const D=c.newAttributes,B=c.enabledAttributes;for(let I=0,F=B.length;I<F;I++)B[I]!==D[I]&&(r.disableVertexAttribArray(I),B[I]=0)}function M(D,B,I,F,H,X,L){L===!0?r.vertexAttribIPointer(D,B,I,H,X):r.vertexAttribPointer(D,B,I,F,H,X)}function R(D,B,I,F){if(n.isWebGL2===!1&&(D.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const H=F.attributes,X=I.getAttributes(),L=B.defaultAttributeValues;for(const J in X){const ae=X[J];if(ae.location>=0){let j=H[J];if(j===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const Q=j.normalized,ce=j.itemSize,Me=t.get(j);if(Me===void 0)continue;const de=Me.buffer,Ae=Me.type,Ie=Me.bytesPerElement,Se=n.isWebGL2===!0&&(Ae===r.INT||Ae===r.UNSIGNED_INT||j.gpuType===Ig);if(j.isInterleavedBufferAttribute){const De=j.data,O=De.stride,ee=j.offset;if(De.isInstancedInterleavedBuffer){for(let Z=0;Z<ae.locationSize;Z++)E(ae.location+Z,De.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Z=0;Z<ae.locationSize;Z++)y(ae.location+Z);r.bindBuffer(r.ARRAY_BUFFER,de);for(let Z=0;Z<ae.locationSize;Z++)M(ae.location+Z,ce/ae.locationSize,Ae,Q,O*Ie,(ee+ce/ae.locationSize*Z)*Ie,Se)}else{if(j.isInstancedBufferAttribute){for(let De=0;De<ae.locationSize;De++)E(ae.location+De,j.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let De=0;De<ae.locationSize;De++)y(ae.location+De);r.bindBuffer(r.ARRAY_BUFFER,de);for(let De=0;De<ae.locationSize;De++)M(ae.location+De,ce/ae.locationSize,Ae,Q,ce*Ie,ce/ae.locationSize*De*Ie,Se)}}else if(L!==void 0){const Q=L[J];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(ae.location,Q);break;case 3:r.vertexAttrib3fv(ae.location,Q);break;case 4:r.vertexAttrib4fv(ae.location,Q);break;default:r.vertexAttrib1fv(ae.location,Q)}}}}S()}function b(){N();for(const D in a){const B=a[D];for(const I in B){const F=B[I];for(const H in F)m(F[H].object),delete F[H];delete B[I]}delete a[D]}}function T(D){if(a[D.id]===void 0)return;const B=a[D.id];for(const I in B){const F=B[I];for(const H in F)m(F[H].object),delete F[H];delete B[I]}delete a[D.id]}function P(D){for(const B in a){const I=a[B];if(I[D.id]===void 0)continue;const F=I[D.id];for(const H in F)m(F[H].object),delete F[H];delete I[D.id]}}function N(){W(),u=!0,c!==l&&(c=l,d(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:W,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:y,disableUnusedAttributes:S}}function KS(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,f){if(f===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,u,h,f),t.update(h,s,f)}function c(u,h,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f;m++)this.render(u[m],h[m]);else{d.multiDrawArraysWEBGL(s,u,0,h,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_];t.update(m,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function QS(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,y=o||e.has("OES_texture_float"),E=v&&y,S=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:S}}function e1(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new is,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!g)s?u(null):c();else{const x=s?0:n,v=x*4;let y=p.clippingState||null;l.value=y,y=u(m,f,v,d);for(let E=0;E!==v;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,y=d;v!==_;++v,y+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function t1(r){let e=new WeakMap;function t(o,a){return a===Xh?o.mapping=Fo:a===Yh&&(o.mapping=Bo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xh||a===Yh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new fM(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class kd extends Kg{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const go=4,zp=[.125,.215,.35,.446,.526,.582],ss=20,nh=new kd,Vp=new Xe;let ih=null,rh=0,sh=0;const rs=(1+Math.sqrt(5))/2,qs=1/rs,Hp=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,rs,qs),new U(0,rs,-qs),new U(qs,0,rs),new U(-qs,0,rs),new U(rs,qs,0),new U(-rs,qs,0)];class Kh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ih=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ih,rh,sh),e.scissorTest=!1,Xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fo||e.mapping===Bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ih=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:ki,format:di,colorSpace:dr,depthBuffer:!1},i=Gp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n1(s)),this._blurMaterial=i1(s,e,t)}return i}_compileMaterial(e){const t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,nh)}_sceneToCubeUV(e,t,n,i){const a=new Ln(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Vp),u.toneMapping=Dr,u.autoClear=!1;const d=new Ka({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),m=new Be(new xi,d);let _=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,_=!0):(d.color.copy(Vp),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Xl(i,x*v,p>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Fo||e.mapping===Bo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wp());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Xl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,nh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Hp[(i-1)%Hp.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Be(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ss-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):ss;g>ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ss}`);const p=[];let x=0;for(let M=0;M<ss;++M){const R=M/_,b=Math.exp(-R*R/2);p.push(b),M===0?x+=b:M<g&&(x+=2*b)}for(let M=0;M<p.length;M++)p[M]=p[M]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-n;const y=this._sizeLods[i],E=3*y*(i>v-go?i-v+go:0),S=4*(this._cubeSize-y);Xl(t,E,S,3*y,2*y),l.setRenderTarget(t),l.render(h,nh)}}function n1(r){const e=[],t=[],n=[];let i=r;const s=r-go+1+zp.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-go?l=zp[o-r+go-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*d),v=new Float32Array(g*m*d),y=new Float32Array(p*m*d);for(let S=0;S<d;S++){const M=S%3*2/3-1,R=S>2?0:-1,b=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];x.set(b,_*m*S),v.set(f,g*m*S);const T=[S,S,S,S,S,S];y.set(T,p*m*S)}const E=new kt;E.setAttribute("position",new nn(x,_)),E.setAttribute("uv",new nn(v,g)),E.setAttribute("faceIndex",new nn(y,p)),e.push(E),i>go&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gp(r,e,t){const n=new vi(r,e,t);return n.texture.mapping=au,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xl(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function i1(r,e,t){const n=new Float32Array(ss),i=new U(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zd(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Wp(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zd(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Xp(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function zd(){return`

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
	`}function r1(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xh||l===Yh,u=l===Fo||l===Bo;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Kh(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Kh(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function s1(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function o1(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const _=f.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const m in d){const _=d[m];for(let g=0,p=_.length;g<p;g++)e.update(_[g],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,m=h.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,y=x.length;v<y;v+=3){const E=x[v+0],S=x[v+1],M=x[v+2];f.push(E,S,S,M,M,E)}}else if(m!==void 0){const x=m.array;_=m.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const E=v+0,S=v+1,M=v+2;f.push(E,S,S,M,M,E)}}else return;const g=new(Gg(f)?Zg:jg)(f,1);g.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function a1(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,m){r.drawElements(s,m,a,d*l),t.update(m,s,1)}function h(d,m,_){if(_===0)return;let g,p;if(i)g=r,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,m,a,d*l,_),t.update(m,s,_)}function f(d,m,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<_;p++)this.render(d[p]/l,m[p]);else{g.multiDrawElementsWEBGL(s,m,0,a,d,0,_);let p=0;for(let x=0;x<_;x++)p+=m[x];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function l1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function c1(r,e){return r[0]-e[0]}function u1(r,e){return Math.abs(e[1])-Math.abs(r[1])}function h1(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new St,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==m){let D=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let R=0;x===!0&&(R=1),v===!0&&(R=2),y===!0&&(R=3);let b=u.attributes.position.count*R,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const P=new Float32Array(b*T*4*m),N=new Yg(P,b,T,m);N.type=sr,N.needsUpdate=!0;const W=R*4;for(let B=0;B<m;B++){const I=E[B],F=S[B],H=M[B],X=b*T*4*B;for(let L=0;L<I.count;L++){const J=L*W;x===!0&&(o.fromBufferAttribute(I,L),P[X+J+0]=o.x,P[X+J+1]=o.y,P[X+J+2]=o.z,P[X+J+3]=0),v===!0&&(o.fromBufferAttribute(F,L),P[X+J+4]=o.x,P[X+J+5]=o.y,P[X+J+6]=o.z,P[X+J+7]=0),y===!0&&(o.fromBufferAttribute(H,L),P[X+J+8]=o.x,P[X+J+9]=o.y,P[X+J+10]=o.z,P[X+J+11]=H.itemSize===4?o.w:1)}}_={count:m,texture:N,size:new te(b,T)},s.set(u,_),u.addEventListener("dispose",D)}let g=0;for(let x=0;x<f.length;x++)g+=f[x];const p=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(r,"morphTargetBaseInfluence",p),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const d=f===void 0?0:f.length;let m=n[u.id];if(m===void 0||m.length!==d){m=[];for(let v=0;v<d;v++)m[v]=[v,0];n[u.id]=m}for(let v=0;v<d;v++){const y=m[v];y[0]=v,y[1]=f[v]}m.sort(u1);for(let v=0;v<8;v++)v<d&&m[v][1]?(a[v][0]=m[v][0],a[v][1]=m[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(c1);const _=u.morphAttributes.position,g=u.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const y=a[v],E=y[0],S=y[1];E!==Number.MAX_SAFE_INTEGER&&S?(_&&u.getAttribute("morphTarget"+v)!==_[E]&&u.setAttribute("morphTarget"+v,_[E]),g&&u.getAttribute("morphNormal"+v)!==g[E]&&u.setAttribute("morphNormal"+v,g[E]),i[v]=S,p+=S):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function d1(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class t_ extends bn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:_s,u!==_s&&u!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===_s&&(n=Ar),n===void 0&&u===ko&&(n=gs),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const n_=new bn,i_=new t_(1,1);i_.compareFunction=Hg;const r_=new Yg,s_=new Jy,o_=new Qg,Yp=[],$p=[],qp=new Float32Array(16),jp=new Float32Array(9),Zp=new Float32Array(4);function Yo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Yp[i];if(s===void 0&&(s=new Float32Array(i),Yp[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function rn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function sn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function uu(r,e){let t=$p[e];t===void 0&&(t=new Int32Array(e),$p[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function f1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function p1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2fv(this.addr,e),sn(t,e)}}function m1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;r.uniform3fv(this.addr,e),sn(t,e)}}function g1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4fv(this.addr,e),sn(t,e)}}function _1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;Zp.set(n),r.uniformMatrix2fv(this.addr,!1,Zp),sn(t,n)}}function v1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;jp.set(n),r.uniformMatrix3fv(this.addr,!1,jp),sn(t,n)}}function x1(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;qp.set(n),r.uniformMatrix4fv(this.addr,!1,qp),sn(t,n)}}function y1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function M1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2iv(this.addr,e),sn(t,e)}}function b1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3iv(this.addr,e),sn(t,e)}}function S1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4iv(this.addr,e),sn(t,e)}}function T1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function E1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2uiv(this.addr,e),sn(t,e)}}function w1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3uiv(this.addr,e),sn(t,e)}}function A1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4uiv(this.addr,e),sn(t,e)}}function C1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?i_:n_;t.setTexture2D(e||s,i)}function R1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||s_,i)}function P1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||o_,i)}function L1(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||r_,i)}function I1(r){switch(r){case 5126:return f1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return _1;case 35675:return v1;case 35676:return x1;case 5124:case 35670:return y1;case 35667:case 35671:return M1;case 35668:case 35672:return b1;case 35669:case 35673:return S1;case 5125:return T1;case 36294:return E1;case 36295:return w1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return L1}}function D1(r,e){r.uniform1fv(this.addr,e)}function U1(r,e){const t=Yo(e,this.size,2);r.uniform2fv(this.addr,t)}function N1(r,e){const t=Yo(e,this.size,3);r.uniform3fv(this.addr,t)}function O1(r,e){const t=Yo(e,this.size,4);r.uniform4fv(this.addr,t)}function F1(r,e){const t=Yo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function B1(r,e){const t=Yo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function k1(r,e){const t=Yo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function z1(r,e){r.uniform1iv(this.addr,e)}function V1(r,e){r.uniform2iv(this.addr,e)}function H1(r,e){r.uniform3iv(this.addr,e)}function G1(r,e){r.uniform4iv(this.addr,e)}function W1(r,e){r.uniform1uiv(this.addr,e)}function X1(r,e){r.uniform2uiv(this.addr,e)}function Y1(r,e){r.uniform3uiv(this.addr,e)}function $1(r,e){r.uniform4uiv(this.addr,e)}function q1(r,e,t){const n=this.cache,i=e.length,s=uu(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||n_,s[o])}function j1(r,e,t){const n=this.cache,i=e.length,s=uu(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||s_,s[o])}function Z1(r,e,t){const n=this.cache,i=e.length,s=uu(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||o_,s[o])}function J1(r,e,t){const n=this.cache,i=e.length,s=uu(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||r_,s[o])}function K1(r){switch(r){case 5126:return D1;case 35664:return U1;case 35665:return N1;case 35666:return O1;case 35674:return F1;case 35675:return B1;case 35676:return k1;case 5124:case 35670:return z1;case 35667:case 35671:return V1;case 35668:case 35672:return H1;case 35669:case 35673:return G1;case 5125:return W1;case 36294:return X1;case 36295:return Y1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return J1}}class Q1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=I1(t.type)}}class eT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K1(t.type)}}class tT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const oh=/(\w+)(\])?(\[|\.)?/g;function Jp(r,e){r.seq.push(e),r.map[e.id]=e}function nT(r,e,t){const n=r.name,i=n.length;for(oh.lastIndex=0;;){const s=oh.exec(n),o=oh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Jp(t,c===void 0?new Q1(a,r,e):new eT(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new tT(a),Jp(t,h)),t=h}}}class Mc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);nT(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Kp(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const iT=37297;let rT=0;function sT(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function oT(r){const e=vt.getPrimaries(vt.workingColorSpace),t=vt.getPrimaries(r);let n;switch(e===t?n="":e===Yc&&t===Xc?n="LinearDisplayP3ToLinearSRGB":e===Xc&&t===Yc&&(n="LinearSRGBToLinearDisplayP3"),r){case dr:case lu:return[n,"LinearTransferOETF"];case Gt:case Od:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Qp(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+sT(r.getShaderSource(e),o)}else return i}function aT(r,e){const t=oT(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function lT(r,e){let t;switch(e){case Ag:t="Linear";break;case Cg:t="Reinhard";break;case Rg:t="OptimizedCineon";break;case Dd:t="ACESFilmic";break;case Pg:t="AgX";break;case oy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cT(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_o).join(`
`)}function uT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_o).join(`
`)}function hT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function _o(r){return r!==""}function em(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(r){return r.replace(fT,mT)}const pT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mT(r,e){let t=Qe[e];if(t===void 0){const n=pT.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qh(t)}const gT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nm(r){return r.replace(gT,_T)}function _T(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function im(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Sg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Fx?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function xT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Fo:case Bo:e="ENVMAP_TYPE_CUBE";break;case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Bo:e="ENVMAP_MODE_REFRACTION";break}return e}function MT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case wg:e="ENVMAP_BLENDING_MULTIPLY";break;case ry:e="ENVMAP_BLENDING_MIX";break;case sy:e="ENVMAP_BLENDING_ADD";break}return e}function bT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ST(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=vT(t),c=xT(t),u=yT(t),h=MT(t),f=bT(t),d=t.isWebGL2?"":cT(t),m=uT(t),_=hT(s),g=i.createProgram();let p,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(_o).join(`
`),p.length>0&&(p+=`
`),x=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(_o).join(`
`),x.length>0&&(x+=`
`)):(p=[im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),x=[d,im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dr?"#define TONE_MAPPING":"",t.toneMapping!==Dr?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Dr?lT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,aT("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_o).join(`
`)),o=Qh(o),o=em(o,t),o=tm(o,t),a=Qh(a),a=em(a,t),a=tm(a,t),o=nm(o),a=nm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=v+p+o,E=v+x+a,S=Kp(i,i.VERTEX_SHADER,y),M=Kp(i,i.FRAGMENT_SHADER,E);i.attachShader(g,S),i.attachShader(g,M),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function R(N){if(r.debug.checkShaderErrors){const W=i.getProgramInfoLog(g).trim(),D=i.getShaderInfoLog(S).trim(),B=i.getShaderInfoLog(M).trim();let I=!0,F=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(I=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,S,M);else{const H=Qp(i,S,"vertex"),X=Qp(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+H+`
`+X)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(D===""||B==="")&&(F=!1);F&&(N.diagnostics={runnable:I,programLog:W,vertexShader:{log:D,prefix:p},fragmentShader:{log:B,prefix:x}})}i.deleteShader(S),i.deleteShader(M),b=new Mc(i,g),T=dT(i,g)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(g,iT)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=M,this}let TT=0;class ET{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wT(e),t.set(e,n)),n}}class wT{constructor(e){this.id=TT++,this.code=e,this.usedTimes=0}}function AT(r,e,t,n,i,s,o){const a=new $g,l=new ET,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function g(b,T,P,N,W){const D=N.fog,B=W.geometry,I=b.isMeshStandardMaterial?N.environment:null,F=(b.isMeshStandardMaterial?t:e).get(b.envMap||I),H=F&&F.mapping===au?F.image.height:null,X=m[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const L=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,J=L!==void 0?L.length:0;let ae=0;B.morphAttributes.position!==void 0&&(ae=1),B.morphAttributes.normal!==void 0&&(ae=2),B.morphAttributes.color!==void 0&&(ae=3);let j,Q,ce,Me;if(X){const Te=Ii[X];j=Te.vertexShader,Q=Te.fragmentShader}else j=b.vertexShader,Q=b.fragmentShader,l.update(b),ce=l.getVertexShaderID(b),Me=l.getFragmentShaderID(b);const de=r.getRenderTarget(),Ae=W.isInstancedMesh===!0,Ie=W.isBatchedMesh===!0,Se=!!b.map,De=!!b.matcap,O=!!F,ee=!!b.aoMap,Z=!!b.lightMap,oe=!!b.bumpMap,K=!!b.normalMap,z=!!b.displacementMap,ge=!!b.emissiveMap,C=!!b.metalnessMap,w=!!b.roughnessMap,V=b.anisotropy>0,re=b.clearcoat>0,se=b.iridescence>0,ne=b.sheen>0,xe=b.transmission>0,_e=V&&!!b.anisotropyMap,he=re&&!!b.clearcoatMap,Re=re&&!!b.clearcoatNormalMap,ze=re&&!!b.clearcoatRoughnessMap,ie=se&&!!b.iridescenceMap,at=se&&!!b.iridescenceThicknessMap,Ne=ne&&!!b.sheenColorMap,Ye=ne&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,be=!!b.specularColorMap,$e=!!b.specularIntensityMap,tt=xe&&!!b.transmissionMap,dt=xe&&!!b.thicknessMap,ye=!!b.gradientMap,ue=!!b.alphaMap,k=b.alphaTest>0,fe=!!b.alphaHash,pe=!!b.extensions,Ve=!!B.attributes.uv1,Fe=!!B.attributes.uv2,lt=!!B.attributes.uv3;let ht=Dr;return b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(ht=r.toneMapping),{isWebGL2:u,shaderID:X,shaderType:b.type,shaderName:b.name,vertexShader:j,fragmentShader:Q,defines:b.defines,customVertexShaderID:ce,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Ie,instancing:Ae,instancingColor:Ae&&W.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:dr,map:Se,matcap:De,envMap:O,envMapMode:O&&F.mapping,envMapCubeUVHeight:H,aoMap:ee,lightMap:Z,bumpMap:oe,normalMap:K,displacementMap:f&&z,emissiveMap:ge,normalMapObjectSpace:K&&b.normalMapType===Ty,normalMapTangentSpace:K&&b.normalMapType===Vg,metalnessMap:C,roughnessMap:w,anisotropy:V,anisotropyMap:_e,clearcoat:re,clearcoatMap:he,clearcoatNormalMap:Re,clearcoatRoughnessMap:ze,iridescence:se,iridescenceMap:ie,iridescenceThicknessMap:at,sheen:ne,sheenColorMap:Ne,sheenRoughnessMap:Ye,specularMap:Pe,specularColorMap:be,specularIntensityMap:$e,transmission:xe,transmissionMap:tt,thicknessMap:dt,gradientMap:ye,opaque:b.transparent===!1&&b.blending===Co,alphaMap:ue,alphaTest:k,alphaHash:fe,combine:b.combine,mapUv:Se&&_(b.map.channel),aoMapUv:ee&&_(b.aoMap.channel),lightMapUv:Z&&_(b.lightMap.channel),bumpMapUv:oe&&_(b.bumpMap.channel),normalMapUv:K&&_(b.normalMap.channel),displacementMapUv:z&&_(b.displacementMap.channel),emissiveMapUv:ge&&_(b.emissiveMap.channel),metalnessMapUv:C&&_(b.metalnessMap.channel),roughnessMapUv:w&&_(b.roughnessMap.channel),anisotropyMapUv:_e&&_(b.anisotropyMap.channel),clearcoatMapUv:he&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Re&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:at&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&_(b.sheenRoughnessMap.channel),specularMapUv:Pe&&_(b.specularMap.channel),specularColorMapUv:be&&_(b.specularColorMap.channel),specularIntensityMapUv:$e&&_(b.specularIntensityMap.channel),transmissionMapUv:tt&&_(b.transmissionMap.channel),thicknessMapUv:dt&&_(b.thicknessMap.channel),alphaMapUv:ue&&_(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(K||V),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ve,vertexUv2s:Fe,vertexUv3s:lt,pointsUvs:W.isPoints===!0&&!!B.attributes.uv&&(Se||ue),fog:!!D,useFog:b.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ht,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Se&&b.map.isVideoTexture===!0&&vt.getTransfer(b.map.colorSpace)===wt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ui,flipSided:b.side===zn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:pe&&b.extensions.derivatives===!0,extensionFragDepth:pe&&b.extensions.fragDepth===!0,extensionDrawBuffers:pe&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)T.push(P),T.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(x(T,b),v(T,b),T.push(r.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function x(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function v(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function y(b){const T=m[b.type];let P;if(T){const N=Ii[T];P=Qa.clone(N.uniforms)}else P=b.uniforms;return P}function E(b,T){let P;for(let N=0,W=c.length;N<W;N++){const D=c[N];if(D.cacheKey===T){P=D,++P.usedTimes;break}}return P===void 0&&(P=new ST(r,T,b,s),c.push(P)),P}function S(b){if(--b.usedTimes===0){const T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),b.destroy()}}function M(b){l.remove(b)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:R}}function CT(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function RT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function rm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,m,_,g){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function a(h,f,d,m,_,g){const p=o(h,f,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,m,_,g){const p=o(h,f,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||RT),n.length>1&&n.sort(f||rm),i.length>1&&i.sort(f||rm)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function PT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new sm,r.set(n,[o])):i>=s.length?(o=new sm,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function LT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Xe};break;case"SpotLight":t={position:new U,direction:new U,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function IT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let DT=0;function UT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function NT(r,e){const t=new LT,n=IT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const s=new U,o=new Je,a=new Je;function l(u,h){let f=0,d=0,m=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let _=0,g=0,p=0,x=0,v=0,y=0,E=0,S=0,M=0,R=0,b=0;u.sort(UT);const T=h===!0?Math.PI:1;for(let N=0,W=u.length;N<W;N++){const D=u[N],B=D.color,I=D.intensity,F=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=B.r*I*T,d+=B.g*I*T,m+=B.b*I*T;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],I);b++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const L=D.shadow,J=n.get(D);J.shadowBias=L.bias,J.shadowNormalBias=L.normalBias,J.shadowRadius=L.radius,J.shadowMapSize=L.mapSize,i.directionalShadow[_]=J,i.directionalShadowMap[_]=H,i.directionalShadowMatrix[_]=D.shadow.matrix,y++}i.directional[_]=X,_++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(B).multiplyScalar(I*T),X.distance=F,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[p]=X;const L=D.shadow;if(D.map&&(i.spotLightMap[M]=D.map,M++,L.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[p]=L.matrix,D.castShadow){const J=n.get(D);J.shadowBias=L.bias,J.shadowNormalBias=L.normalBias,J.shadowRadius=L.radius,J.shadowMapSize=L.mapSize,i.spotShadow[p]=J,i.spotShadowMap[p]=H,S++}p++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(B).multiplyScalar(I),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[x]=X,x++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*T),X.distance=D.distance,X.decay=D.decay,D.castShadow){const L=D.shadow,J=n.get(D);J.shadowBias=L.bias,J.shadowNormalBias=L.normalBias,J.shadowRadius=L.radius,J.shadowMapSize=L.mapSize,J.shadowCameraNear=L.camera.near,J.shadowCameraFar=L.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=D.shadow.matrix,E++}i.point[g]=X,g++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(I*T),X.groundColor.copy(D.groundColor).multiplyScalar(I*T),i.hemi[v]=X,v++}}x>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=m;const P=i.hash;(P.directionalLength!==_||P.pointLength!==g||P.spotLength!==p||P.rectAreaLength!==x||P.hemiLength!==v||P.numDirectionalShadows!==y||P.numPointShadows!==E||P.numSpotShadows!==S||P.numSpotMaps!==M||P.numLightProbes!==b)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=x,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+M-R,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=b,P.directionalLength=_,P.pointLength=g,P.spotLength=p,P.rectAreaLength=x,P.hemiLength=v,P.numDirectionalShadows=y,P.numPointShadows=E,P.numSpotShadows=S,P.numSpotMaps=M,P.numLightProbes=b,i.version=DT++)}function c(u,h){let f=0,d=0,m=0,_=0,g=0;const p=h.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(y.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:i}}function om(r,e){const t=new NT(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function OT(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new om(r,e),t.set(s,[l])):o>=a.length?(l=new om(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class FT extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=by,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BT extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zT=`uniform sampler2D shadow_pass;
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
}`;function VT(r,e,t){let n=new Bd;const i=new te,s=new te,o=new St,a=new FT({depthPacking:Sy}),l=new BT,c={},u=t.maxTextureSize,h={[kr]:zn,[zn]:kr,[Ui]:Ui},f=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:kT,fragmentShader:zT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new kt;m.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Be(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sg;let p=this.type;this.render=function(S,M,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const b=r.getRenderTarget(),T=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),N=r.state;N.setBlending(lr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const W=p!==Qi&&this.type===Qi,D=p===Qi&&this.type!==Qi;for(let B=0,I=S.length;B<I;B++){const F=S[B],H=F.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const X=H.getFrameExtents();if(i.multiply(X),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/X.x),i.x=s.x*X.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/X.y),i.y=s.y*X.y,H.mapSize.y=s.y)),H.map===null||W===!0||D===!0){const J=this.type!==Qi?{minFilter:un,magFilter:un}:{};H.map!==null&&H.map.dispose(),H.map=new vi(i.x,i.y,J),H.map.texture.name=F.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const L=H.getViewportCount();for(let J=0;J<L;J++){const ae=H.getViewport(J);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),N.viewport(o),H.updateMatrices(F,J),n=H.getFrustum(),y(M,R,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===Qi&&x(H,R),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(b,T,P)};function x(S,M){const R=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new vi(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(M,null,R,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(M,null,R,d,_,null)}function v(S,M,R,b){let T=null;const P=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)T=P;else if(T=R.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const N=T.uuid,W=M.uuid;let D=c[N];D===void 0&&(D={},c[N]=D);let B=D[W];B===void 0&&(B=T.clone(),D[W]=B,M.addEventListener("dispose",E)),T=B}if(T.visible=M.visible,T.wireframe=M.wireframe,b===Qi?T.side=M.shadowSide!==null?M.shadowSide:M.side:T.side=M.shadowSide!==null?M.shadowSide:h[M.side],T.alphaMap=M.alphaMap,T.alphaTest=M.alphaTest,T.map=M.map,T.clipShadows=M.clipShadows,T.clippingPlanes=M.clippingPlanes,T.clipIntersection=M.clipIntersection,T.displacementMap=M.displacementMap,T.displacementScale=M.displacementScale,T.displacementBias=M.displacementBias,T.wireframeLinewidth=M.wireframeLinewidth,T.linewidth=M.linewidth,R.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const N=r.properties.get(T);N.light=R}return T}function y(S,M,R,b,T){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===Qi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const W=e.update(S),D=S.material;if(Array.isArray(D)){const B=W.groups;for(let I=0,F=B.length;I<F;I++){const H=B[I],X=D[H.materialIndex];if(X&&X.visible){const L=v(S,X,b,T);S.onBeforeShadow(r,S,M,R,W,L,H),r.renderBufferDirect(R,null,W,L,S,H),S.onAfterShadow(r,S,M,R,W,L,H)}}}else if(D.visible){const B=v(S,D,b,T);S.onBeforeShadow(r,S,M,R,W,B,null),r.renderBufferDirect(R,null,W,B,S,null),S.onAfterShadow(r,S,M,R,W,B,null)}}const N=S.children;for(let W=0,D=N.length;W<D;W++)y(N[W],M,R,b,T)}function E(S){S.target.removeEventListener("dispose",E);for(const R in c){const b=c[R],T=S.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}function HT(r,e,t){const n=t.isWebGL2;function i(){let k=!1;const fe=new St;let pe=null;const Ve=new St(0,0,0,0);return{setMask:function(Fe){pe!==Fe&&!k&&(r.colorMask(Fe,Fe,Fe,Fe),pe=Fe)},setLocked:function(Fe){k=Fe},setClear:function(Fe,lt,ht,Le,Te){Te===!0&&(Fe*=Le,lt*=Le,ht*=Le),fe.set(Fe,lt,ht,Le),Ve.equals(fe)===!1&&(r.clearColor(Fe,lt,ht,Le),Ve.copy(fe))},reset:function(){k=!1,pe=null,Ve.set(-1,0,0,0)}}}function s(){let k=!1,fe=null,pe=null,Ve=null;return{setTest:function(Fe){Fe?Ie(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(Fe){fe!==Fe&&!k&&(r.depthMask(Fe),fe=Fe)},setFunc:function(Fe){if(pe!==Fe){switch(Fe){case Jx:r.depthFunc(r.NEVER);break;case Kx:r.depthFunc(r.ALWAYS);break;case Qx:r.depthFunc(r.LESS);break;case kc:r.depthFunc(r.LEQUAL);break;case ey:r.depthFunc(r.EQUAL);break;case ty:r.depthFunc(r.GEQUAL);break;case ny:r.depthFunc(r.GREATER);break;case iy:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=Fe}},setLocked:function(Fe){k=Fe},setClear:function(Fe){Ve!==Fe&&(r.clearDepth(Fe),Ve=Fe)},reset:function(){k=!1,fe=null,pe=null,Ve=null}}}function o(){let k=!1,fe=null,pe=null,Ve=null,Fe=null,lt=null,ht=null,Le=null,Te=null;return{setTest:function(Oe){k||(Oe?Ie(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(Oe){fe!==Oe&&!k&&(r.stencilMask(Oe),fe=Oe)},setFunc:function(Oe,le,He){(pe!==Oe||Ve!==le||Fe!==He)&&(r.stencilFunc(Oe,le,He),pe=Oe,Ve=le,Fe=He)},setOp:function(Oe,le,He){(lt!==Oe||ht!==le||Le!==He)&&(r.stencilOp(Oe,le,He),lt=Oe,ht=le,Le=He)},setLocked:function(Oe){k=Oe},setClear:function(Oe){Te!==Oe&&(r.clearStencil(Oe),Te=Oe)},reset:function(){k=!1,fe=null,pe=null,Ve=null,Fe=null,lt=null,ht=null,Le=null,Te=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},m=new WeakMap,_=[],g=null,p=!1,x=null,v=null,y=null,E=null,S=null,M=null,R=null,b=new Xe(0,0,0),T=0,P=!1,N=null,W=null,D=null,B=null,I=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,X=0;const L=r.getParameter(r.VERSION);L.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(L)[1]),H=X>=1):L.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),H=X>=2);let J=null,ae={};const j=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),ce=new St().fromArray(j),Me=new St().fromArray(Q);function de(k,fe,pe,Ve){const Fe=new Uint8Array(4),lt=r.createTexture();r.bindTexture(k,lt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ht=0;ht<pe;ht++)n&&(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)?r.texImage3D(fe,0,r.RGBA,1,1,Ve,0,r.RGBA,r.UNSIGNED_BYTE,Fe):r.texImage2D(fe+ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Fe);return lt}const Ae={};Ae[r.TEXTURE_2D]=de(r.TEXTURE_2D,r.TEXTURE_2D,1),Ae[r.TEXTURE_CUBE_MAP]=de(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ae[r.TEXTURE_2D_ARRAY]=de(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ae[r.TEXTURE_3D]=de(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(r.DEPTH_TEST),l.setFunc(kc),ge(!1),C(Hf),Ie(r.CULL_FACE),K(lr);function Ie(k){f[k]!==!0&&(r.enable(k),f[k]=!0)}function Se(k){f[k]!==!1&&(r.disable(k),f[k]=!1)}function De(k,fe){return d[k]!==fe?(r.bindFramebuffer(k,fe),d[k]=fe,n&&(k===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=fe),k===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=fe)),!0):!1}function O(k,fe){let pe=_,Ve=!1;if(k)if(pe=m.get(fe),pe===void 0&&(pe=[],m.set(fe,pe)),k.isWebGLMultipleRenderTargets){const Fe=k.texture;if(pe.length!==Fe.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let lt=0,ht=Fe.length;lt<ht;lt++)pe[lt]=r.COLOR_ATTACHMENT0+lt;pe.length=Fe.length,Ve=!0}}else pe[0]!==r.COLOR_ATTACHMENT0&&(pe[0]=r.COLOR_ATTACHMENT0,Ve=!0);else pe[0]!==r.BACK&&(pe[0]=r.BACK,Ve=!0);Ve&&(t.isWebGL2?r.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function ee(k){return g!==k?(r.useProgram(k),g=k,!0):!1}const Z={[Mr]:r.FUNC_ADD,[Bx]:r.FUNC_SUBTRACT,[kx]:r.FUNC_REVERSE_SUBTRACT};if(n)Z[Xf]=r.MIN,Z[Yf]=r.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(Z[Xf]=k.MIN_EXT,Z[Yf]=k.MAX_EXT)}const oe={[Eg]:r.ZERO,[yc]:r.ONE,[zx]:r.SRC_COLOR,[Gh]:r.SRC_ALPHA,[Yx]:r.SRC_ALPHA_SATURATE,[Wx]:r.DST_COLOR,[Hx]:r.DST_ALPHA,[Vx]:r.ONE_MINUS_SRC_COLOR,[Wh]:r.ONE_MINUS_SRC_ALPHA,[Xx]:r.ONE_MINUS_DST_COLOR,[Gx]:r.ONE_MINUS_DST_ALPHA,[$x]:r.CONSTANT_COLOR,[qx]:r.ONE_MINUS_CONSTANT_COLOR,[jx]:r.CONSTANT_ALPHA,[Zx]:r.ONE_MINUS_CONSTANT_ALPHA};function K(k,fe,pe,Ve,Fe,lt,ht,Le,Te,Oe){if(k===lr){p===!0&&(Se(r.BLEND),p=!1);return}if(p===!1&&(Ie(r.BLEND),p=!0),k!==Tg){if(k!==x||Oe!==P){if((v!==Mr||S!==Mr)&&(r.blendEquation(r.FUNC_ADD),v=Mr,S=Mr),Oe)switch(k){case Co:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ja:r.blendFunc(r.ONE,r.ONE);break;case Gf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Co:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ja:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Gf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,E=null,M=null,R=null,b.set(0,0,0),T=0,x=k,P=Oe}return}Fe=Fe||fe,lt=lt||pe,ht=ht||Ve,(fe!==v||Fe!==S)&&(r.blendEquationSeparate(Z[fe],Z[Fe]),v=fe,S=Fe),(pe!==y||Ve!==E||lt!==M||ht!==R)&&(r.blendFuncSeparate(oe[pe],oe[Ve],oe[lt],oe[ht]),y=pe,E=Ve,M=lt,R=ht),(Le.equals(b)===!1||Te!==T)&&(r.blendColor(Le.r,Le.g,Le.b,Te),b.copy(Le),T=Te),x=k,P=!1}function z(k,fe){k.side===Ui?Se(r.CULL_FACE):Ie(r.CULL_FACE);let pe=k.side===zn;fe&&(pe=!pe),ge(pe),k.blending===Co&&k.transparent===!1?K(lr):K(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);const Ve=k.stencilWrite;c.setTest(Ve),Ve&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),V(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ie(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function ge(k){N!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),N=k)}function C(k){k!==Nx?(Ie(r.CULL_FACE),k!==W&&(k===Hf?r.cullFace(r.BACK):k===Ox?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),W=k}function w(k){k!==D&&(H&&r.lineWidth(k),D=k)}function V(k,fe,pe){k?(Ie(r.POLYGON_OFFSET_FILL),(B!==fe||I!==pe)&&(r.polygonOffset(fe,pe),B=fe,I=pe)):Se(r.POLYGON_OFFSET_FILL)}function re(k){k?Ie(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function se(k){k===void 0&&(k=r.TEXTURE0+F-1),J!==k&&(r.activeTexture(k),J=k)}function ne(k,fe,pe){pe===void 0&&(J===null?pe=r.TEXTURE0+F-1:pe=J);let Ve=ae[pe];Ve===void 0&&(Ve={type:void 0,texture:void 0},ae[pe]=Ve),(Ve.type!==k||Ve.texture!==fe)&&(J!==pe&&(r.activeTexture(pe),J=pe),r.bindTexture(k,fe||Ae[k]),Ve.type=k,Ve.texture=fe)}function xe(){const k=ae[J];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function _e(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ye(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $e(k){ce.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),ce.copy(k))}function tt(k){Me.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Me.copy(k))}function dt(k,fe){let pe=h.get(fe);pe===void 0&&(pe=new WeakMap,h.set(fe,pe));let Ve=pe.get(k);Ve===void 0&&(Ve=r.getUniformBlockIndex(fe,k.name),pe.set(k,Ve))}function ye(k,fe){const Ve=h.get(fe).get(k);u.get(fe)!==Ve&&(r.uniformBlockBinding(fe,Ve,k.__bindingPointIndex),u.set(fe,Ve))}function ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},J=null,ae={},d={},m=new WeakMap,_=[],g=null,p=!1,x=null,v=null,y=null,E=null,S=null,M=null,R=null,b=new Xe(0,0,0),T=0,P=!1,N=null,W=null,D=null,B=null,I=null,ce.set(0,0,r.canvas.width,r.canvas.height),Me.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:Se,bindFramebuffer:De,drawBuffers:O,useProgram:ee,setBlending:K,setMaterial:z,setFlipSided:ge,setCullFace:C,setLineWidth:w,setPolygonOffset:V,setScissorTest:re,activeTexture:se,bindTexture:ne,unbindTexture:xe,compressedTexImage2D:_e,compressedTexImage3D:he,texImage2D:Pe,texImage3D:be,updateUBOMapping:dt,uniformBlockBinding:ye,texStorage2D:Ne,texStorage3D:Ye,texSubImage2D:Re,texSubImage3D:ze,compressedTexSubImage2D:ie,compressedTexSubImage3D:at,scissor:$e,viewport:tt,reset:ue}}function GT(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,w){return d?new OffscreenCanvas(C,w):Ja("canvas")}function _(C,w,V,re){let se=1;if((C.width>re||C.height>re)&&(se=re/Math.max(C.width,C.height)),se<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ne=w?qc:Math.floor,xe=ne(se*C.width),_e=ne(se*C.height);h===void 0&&(h=m(xe,_e));const he=V?m(xe,_e):h;return he.width=xe,he.height=_e,he.getContext("2d").drawImage(C,0,0,xe,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+xe+"x"+_e+")."),he}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return Zh(C.width)&&Zh(C.height)}function p(C){return a?!1:C.wrapS!==wi||C.wrapT!==wi||C.minFilter!==un&&C.minFilter!==ui}function x(C,w){return C.generateMipmaps&&w&&C.minFilter!==un&&C.minFilter!==ui}function v(C){r.generateMipmap(C)}function y(C,w,V,re,se=!1){if(a===!1)return w;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne=w;if(w===r.RED&&(V===r.FLOAT&&(ne=r.R32F),V===r.HALF_FLOAT&&(ne=r.R16F),V===r.UNSIGNED_BYTE&&(ne=r.R8)),w===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(ne=r.R8UI),V===r.UNSIGNED_SHORT&&(ne=r.R16UI),V===r.UNSIGNED_INT&&(ne=r.R32UI),V===r.BYTE&&(ne=r.R8I),V===r.SHORT&&(ne=r.R16I),V===r.INT&&(ne=r.R32I)),w===r.RG&&(V===r.FLOAT&&(ne=r.RG32F),V===r.HALF_FLOAT&&(ne=r.RG16F),V===r.UNSIGNED_BYTE&&(ne=r.RG8)),w===r.RGBA){const xe=se?Wc:vt.getTransfer(re);V===r.FLOAT&&(ne=r.RGBA32F),V===r.HALF_FLOAT&&(ne=r.RGBA16F),V===r.UNSIGNED_BYTE&&(ne=xe===wt?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function E(C,w,V){return x(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==un&&C.minFilter!==ui?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function S(C){return C===un||C===qf||C===Iu?r.NEAREST:r.LINEAR}function M(C){const w=C.target;w.removeEventListener("dispose",M),b(w),w.isVideoTexture&&u.delete(w)}function R(C){const w=C.target;w.removeEventListener("dispose",R),P(w)}function b(C){const w=n.get(C);if(w.__webglInit===void 0)return;const V=C.source,re=f.get(V);if(re){const se=re[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(C),Object.keys(re).length===0&&f.delete(V)}n.remove(C)}function T(C){const w=n.get(C);r.deleteTexture(w.__webglTexture);const V=C.source,re=f.get(V);delete re[w.__cacheKey],o.memory.textures--}function P(C){const w=C.texture,V=n.get(C),re=n.get(w);if(re.__webglTexture!==void 0&&(r.deleteTexture(re.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(V.__webglFramebuffer[se]))for(let ne=0;ne<V.__webglFramebuffer[se].length;ne++)r.deleteFramebuffer(V.__webglFramebuffer[se][ne]);else r.deleteFramebuffer(V.__webglFramebuffer[se]);V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[se])}else{if(Array.isArray(V.__webglFramebuffer))for(let se=0;se<V.__webglFramebuffer.length;se++)r.deleteFramebuffer(V.__webglFramebuffer[se]);else r.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let se=0;se<V.__webglColorRenderbuffer.length;se++)V.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[se]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let se=0,ne=w.length;se<ne;se++){const xe=n.get(w[se]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(w[se])}n.remove(w),n.remove(C)}let N=0;function W(){N=0}function D(){const C=N;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),N+=1,C}function B(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function I(C,w){const V=n.get(C);if(C.isVideoTexture&&z(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const re=C.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(V,C,w);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+w)}function F(C,w){const V=n.get(C);if(C.version>0&&V.__version!==C.version){ce(V,C,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+w)}function H(C,w){const V=n.get(C);if(C.version>0&&V.__version!==C.version){ce(V,C,w);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+w)}function X(C,w){const V=n.get(C);if(C.version>0&&V.__version!==C.version){Me(V,C,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+w)}const L={[zc]:r.REPEAT,[wi]:r.CLAMP_TO_EDGE,[$h]:r.MIRRORED_REPEAT},J={[un]:r.NEAREST,[qf]:r.NEAREST_MIPMAP_NEAREST,[Iu]:r.NEAREST_MIPMAP_LINEAR,[ui]:r.LINEAR,[ly]:r.LINEAR_MIPMAP_NEAREST,[Za]:r.LINEAR_MIPMAP_LINEAR},ae={[Ey]:r.NEVER,[Ly]:r.ALWAYS,[wy]:r.LESS,[Hg]:r.LEQUAL,[Ay]:r.EQUAL,[Py]:r.GEQUAL,[Cy]:r.GREATER,[Ry]:r.NOTEQUAL};function j(C,w,V){if(V?(r.texParameteri(C,r.TEXTURE_WRAP_S,L[w.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,L[w.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,L[w.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,J[w.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,J[w.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(w.wrapS!==wi||w.wrapT!==wi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,S(w.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,S(w.minFilter)),w.minFilter!==un&&w.minFilter!==ui&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ae[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===un||w.minFilter!==Iu&&w.minFilter!==Za||w.type===sr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===ki&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(C,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Q(C,w){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",M));const re=w.source;let se=f.get(re);se===void 0&&(se={},f.set(re,se));const ne=B(w);if(ne!==C.__cacheKey){se[ne]===void 0&&(se[ne]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),se[ne].usedTimes++;const xe=se[C.__cacheKey];xe!==void 0&&(se[C.__cacheKey].usedTimes--,xe.usedTimes===0&&T(w)),C.__cacheKey=ne,C.__webglTexture=se[ne].texture}return V}function ce(C,w,V){let re=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(re=r.TEXTURE_3D);const se=Q(C,w),ne=w.source;t.bindTexture(re,C.__webglTexture,r.TEXTURE0+V);const xe=n.get(ne);if(ne.version!==xe.__version||se===!0){t.activeTexture(r.TEXTURE0+V);const _e=vt.getPrimaries(vt.workingColorSpace),he=w.colorSpace===fi?null:vt.getPrimaries(w.colorSpace),Re=w.colorSpace===fi||_e===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const ze=p(w)&&g(w.image)===!1;let ie=_(w.image,ze,!1,i.maxTextureSize);ie=ge(w,ie);const at=g(ie)||a,Ne=s.convert(w.format,w.colorSpace);let Ye=s.convert(w.type),Pe=y(w.internalFormat,Ne,Ye,w.colorSpace,w.isVideoTexture);j(re,w,at);let be;const $e=w.mipmaps,tt=a&&w.isVideoTexture!==!0&&Pe!==Bg,dt=xe.__version===void 0||se===!0,ye=E(w,ie,at);if(w.isDepthTexture)Pe=r.DEPTH_COMPONENT,a?w.type===sr?Pe=r.DEPTH_COMPONENT32F:w.type===Ar?Pe=r.DEPTH_COMPONENT24:w.type===gs?Pe=r.DEPTH24_STENCIL8:Pe=r.DEPTH_COMPONENT16:w.type===sr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===_s&&Pe===r.DEPTH_COMPONENT&&w.type!==Ud&&w.type!==Ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ar,Ye=s.convert(w.type)),w.format===ko&&Pe===r.DEPTH_COMPONENT&&(Pe=r.DEPTH_STENCIL,w.type!==gs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=gs,Ye=s.convert(w.type))),dt&&(tt?t.texStorage2D(r.TEXTURE_2D,1,Pe,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,Pe,ie.width,ie.height,0,Ne,Ye,null));else if(w.isDataTexture)if($e.length>0&&at){tt&&dt&&t.texStorage2D(r.TEXTURE_2D,ye,Pe,$e[0].width,$e[0].height);for(let ue=0,k=$e.length;ue<k;ue++)be=$e[ue],tt?t.texSubImage2D(r.TEXTURE_2D,ue,0,0,be.width,be.height,Ne,Ye,be.data):t.texImage2D(r.TEXTURE_2D,ue,Pe,be.width,be.height,0,Ne,Ye,be.data);w.generateMipmaps=!1}else tt?(dt&&t.texStorage2D(r.TEXTURE_2D,ye,Pe,ie.width,ie.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie.width,ie.height,Ne,Ye,ie.data)):t.texImage2D(r.TEXTURE_2D,0,Pe,ie.width,ie.height,0,Ne,Ye,ie.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){tt&&dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,Pe,$e[0].width,$e[0].height,ie.depth);for(let ue=0,k=$e.length;ue<k;ue++)be=$e[ue],w.format!==di?Ne!==null?tt?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,be.width,be.height,ie.depth,Ne,be.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ue,Pe,be.width,be.height,ie.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,be.width,be.height,ie.depth,Ne,Ye,be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ue,Pe,be.width,be.height,ie.depth,0,Ne,Ye,be.data)}else{tt&&dt&&t.texStorage2D(r.TEXTURE_2D,ye,Pe,$e[0].width,$e[0].height);for(let ue=0,k=$e.length;ue<k;ue++)be=$e[ue],w.format!==di?Ne!==null?tt?t.compressedTexSubImage2D(r.TEXTURE_2D,ue,0,0,be.width,be.height,Ne,be.data):t.compressedTexImage2D(r.TEXTURE_2D,ue,Pe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(r.TEXTURE_2D,ue,0,0,be.width,be.height,Ne,Ye,be.data):t.texImage2D(r.TEXTURE_2D,ue,Pe,be.width,be.height,0,Ne,Ye,be.data)}else if(w.isDataArrayTexture)tt?(dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,Pe,ie.width,ie.height,ie.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ne,Ye,ie.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,ie.width,ie.height,ie.depth,0,Ne,Ye,ie.data);else if(w.isData3DTexture)tt?(dt&&t.texStorage3D(r.TEXTURE_3D,ye,Pe,ie.width,ie.height,ie.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ne,Ye,ie.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,ie.width,ie.height,ie.depth,0,Ne,Ye,ie.data);else if(w.isFramebufferTexture){if(dt)if(tt)t.texStorage2D(r.TEXTURE_2D,ye,Pe,ie.width,ie.height);else{let ue=ie.width,k=ie.height;for(let fe=0;fe<ye;fe++)t.texImage2D(r.TEXTURE_2D,fe,Pe,ue,k,0,Ne,Ye,null),ue>>=1,k>>=1}}else if($e.length>0&&at){tt&&dt&&t.texStorage2D(r.TEXTURE_2D,ye,Pe,$e[0].width,$e[0].height);for(let ue=0,k=$e.length;ue<k;ue++)be=$e[ue],tt?t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Ne,Ye,be):t.texImage2D(r.TEXTURE_2D,ue,Pe,Ne,Ye,be);w.generateMipmaps=!1}else tt?(dt&&t.texStorage2D(r.TEXTURE_2D,ye,Pe,ie.width,ie.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,Ye,ie)):t.texImage2D(r.TEXTURE_2D,0,Pe,Ne,Ye,ie);x(w,at)&&v(re),xe.__version=ne.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Me(C,w,V){if(w.image.length!==6)return;const re=Q(C,w),se=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+V);const ne=n.get(se);if(se.version!==ne.__version||re===!0){t.activeTexture(r.TEXTURE0+V);const xe=vt.getPrimaries(vt.workingColorSpace),_e=w.colorSpace===fi?null:vt.getPrimaries(w.colorSpace),he=w.colorSpace===fi||xe===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Re=w.isCompressedTexture||w.image[0].isCompressedTexture,ze=w.image[0]&&w.image[0].isDataTexture,ie=[];for(let ue=0;ue<6;ue++)!Re&&!ze?ie[ue]=_(w.image[ue],!1,!0,i.maxCubemapSize):ie[ue]=ze?w.image[ue].image:w.image[ue],ie[ue]=ge(w,ie[ue]);const at=ie[0],Ne=g(at)||a,Ye=s.convert(w.format,w.colorSpace),Pe=s.convert(w.type),be=y(w.internalFormat,Ye,Pe,w.colorSpace),$e=a&&w.isVideoTexture!==!0,tt=ne.__version===void 0||re===!0;let dt=E(w,at,Ne);j(r.TEXTURE_CUBE_MAP,w,Ne);let ye;if(Re){$e&&tt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,dt,be,at.width,at.height);for(let ue=0;ue<6;ue++){ye=ie[ue].mipmaps;for(let k=0;k<ye.length;k++){const fe=ye[k];w.format!==di?Ye!==null?$e?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,k,0,0,fe.width,fe.height,Ye,fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,k,be,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,k,0,0,fe.width,fe.height,Ye,Pe,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,k,be,fe.width,fe.height,0,Ye,Pe,fe.data)}}}else{ye=w.mipmaps,$e&&tt&&(ye.length>0&&dt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,dt,be,ie[0].width,ie[0].height));for(let ue=0;ue<6;ue++)if(ze){$e?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ie[ue].width,ie[ue].height,Ye,Pe,ie[ue].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,be,ie[ue].width,ie[ue].height,0,Ye,Pe,ie[ue].data);for(let k=0;k<ye.length;k++){const pe=ye[k].image[ue].image;$e?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,k+1,0,0,pe.width,pe.height,Ye,Pe,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,k+1,be,pe.width,pe.height,0,Ye,Pe,pe.data)}}else{$e?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ye,Pe,ie[ue]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,be,Ye,Pe,ie[ue]);for(let k=0;k<ye.length;k++){const fe=ye[k];$e?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,k+1,0,0,Ye,Pe,fe.image[ue]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,k+1,be,Ye,Pe,fe.image[ue])}}}x(w,Ne)&&v(r.TEXTURE_CUBE_MAP),ne.__version=se.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function de(C,w,V,re,se,ne){const xe=s.convert(V.format,V.colorSpace),_e=s.convert(V.type),he=y(V.internalFormat,xe,_e,V.colorSpace);if(!n.get(w).__hasExternalTextures){const ze=Math.max(1,w.width>>ne),ie=Math.max(1,w.height>>ne);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,ne,he,ze,ie,w.depth,0,xe,_e,null):t.texImage2D(se,ne,he,ze,ie,0,xe,_e,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),K(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,se,n.get(V).__webglTexture,0,oe(w)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,se,n.get(V).__webglTexture,ne),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(C,w,V){if(r.bindRenderbuffer(r.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let re=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(V||K(w)){const se=w.depthTexture;se&&se.isDepthTexture&&(se.type===sr?re=r.DEPTH_COMPONENT32F:se.type===Ar&&(re=r.DEPTH_COMPONENT24));const ne=oe(w);K(w)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,re,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,re,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,re,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){const re=oe(w);V&&K(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,w.width,w.height):K(w)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const re=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let se=0;se<re.length;se++){const ne=re[se],xe=s.convert(ne.format,ne.colorSpace),_e=s.convert(ne.type),he=y(ne.internalFormat,xe,_e,ne.colorSpace),Re=oe(w);V&&K(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,he,w.width,w.height):K(w)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,he,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,he,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ie(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),I(w.depthTexture,0);const re=n.get(w.depthTexture).__webglTexture,se=oe(w);if(w.depthTexture.format===_s)K(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0);else if(w.depthTexture.format===ko)K(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Se(C){const w=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ie(w.__webglFramebuffer,C)}else if(V){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]=r.createRenderbuffer(),Ae(w.__webglDepthbuffer[re],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),Ae(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(C,w,V){const re=n.get(C);w!==void 0&&de(re.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Se(C)}function O(C){const w=C.texture,V=n.get(C),re=n.get(w);C.addEventListener("dispose",R),C.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=w.version,o.memory.textures++);const se=C.isWebGLCubeRenderTarget===!0,ne=C.isWebGLMultipleRenderTargets===!0,xe=g(C)||a;if(se){V.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[_e]=[];for(let he=0;he<w.mipmaps.length;he++)V.__webglFramebuffer[_e][he]=r.createFramebuffer()}else V.__webglFramebuffer[_e]=r.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let _e=0;_e<w.mipmaps.length;_e++)V.__webglFramebuffer[_e]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ne)if(i.drawBuffers){const _e=C.texture;for(let he=0,Re=_e.length;he<Re;he++){const ze=n.get(_e[he]);ze.__webglTexture===void 0&&(ze.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&K(C)===!1){const _e=ne?w:[w];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let he=0;he<_e.length;he++){const Re=_e[he];V.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[he]);const ze=s.convert(Re.format,Re.colorSpace),ie=s.convert(Re.type),at=y(Re.internalFormat,ze,ie,Re.colorSpace,C.isXRRenderTarget===!0),Ne=oe(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,at,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,V.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Ae(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(se){t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),j(r.TEXTURE_CUBE_MAP,w,xe);for(let _e=0;_e<6;_e++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let he=0;he<w.mipmaps.length;he++)de(V.__webglFramebuffer[_e][he],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,he);else de(V.__webglFramebuffer[_e],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);x(w,xe)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const _e=C.texture;for(let he=0,Re=_e.length;he<Re;he++){const ze=_e[he],ie=n.get(ze);t.bindTexture(r.TEXTURE_2D,ie.__webglTexture),j(r.TEXTURE_2D,ze,xe),de(V.__webglFramebuffer,C,ze,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,0),x(ze,xe)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let _e=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?_e=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,re.__webglTexture),j(_e,w,xe),a&&w.mipmaps&&w.mipmaps.length>0)for(let he=0;he<w.mipmaps.length;he++)de(V.__webglFramebuffer[he],C,w,r.COLOR_ATTACHMENT0,_e,he);else de(V.__webglFramebuffer,C,w,r.COLOR_ATTACHMENT0,_e,0);x(w,xe)&&v(_e),t.unbindTexture()}C.depthBuffer&&Se(C)}function ee(C){const w=g(C)||a,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let re=0,se=V.length;re<se;re++){const ne=V[re];if(x(ne,w)){const xe=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,_e=n.get(ne).__webglTexture;t.bindTexture(xe,_e),v(xe),t.unbindTexture()}}}function Z(C){if(a&&C.samples>0&&K(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,re=C.height;let se=r.COLOR_BUFFER_BIT;const ne=[],xe=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=n.get(C),he=C.isWebGLMultipleRenderTargets===!0;if(he)for(let Re=0;Re<w.length;Re++)t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Re=0;Re<w.length;Re++){ne.push(r.COLOR_ATTACHMENT0+Re),C.depthBuffer&&ne.push(xe);const ze=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(ze===!1&&(C.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),he&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_e.__webglColorRenderbuffer[Re]),ze===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[xe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[xe])),he){const ie=n.get(w[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,V,re,0,0,V,re,se,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let Re=0;Re<w.length;Re++){t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,_e.__webglColorRenderbuffer[Re]);const ze=n.get(w[Re]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,ze,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function oe(C){return Math.min(i.maxSamples,C.samples)}function K(C){const w=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function z(C){const w=o.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function ge(C,w){const V=C.colorSpace,re=C.format,se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===jh||V!==dr&&V!==fi&&(vt.getTransfer(V)===wt?a===!1?e.has("EXT_sRGB")===!0&&re===di?(C.format=jh,C.minFilter=ui,C.generateMipmaps=!1):w=Wg.sRGBToLinear(w):(re!==di||se!==Ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}this.allocateTextureUnit=D,this.resetTextureUnits=W,this.setTexture2D=I,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=X,this.rebindTextures=De,this.setupRenderTarget=O,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=de,this.useMultisampledRTT=K}function WT(r,e,t){const n=t.isWebGL2;function i(s,o=fi){let a;const l=vt.getTransfer(o);if(s===Ur)return r.UNSIGNED_BYTE;if(s===Dg)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ug)return r.UNSIGNED_SHORT_5_5_5_1;if(s===cy)return r.BYTE;if(s===uy)return r.SHORT;if(s===Ud)return r.UNSIGNED_SHORT;if(s===Ig)return r.INT;if(s===Ar)return r.UNSIGNED_INT;if(s===sr)return r.FLOAT;if(s===ki)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===hy)return r.ALPHA;if(s===di)return r.RGBA;if(s===dy)return r.LUMINANCE;if(s===fy)return r.LUMINANCE_ALPHA;if(s===_s)return r.DEPTH_COMPONENT;if(s===ko)return r.DEPTH_STENCIL;if(s===jh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===py)return r.RED;if(s===Ng)return r.RED_INTEGER;if(s===my)return r.RG;if(s===Og)return r.RG_INTEGER;if(s===Fg)return r.RGBA_INTEGER;if(s===Du||s===Uu||s===Nu||s===Ou)if(l===wt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Du)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Uu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ou)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Du)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Uu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ou)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jf||s===Zf||s===Jf||s===Kf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===jf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qf||s===ep)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Qf)return l===wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ep)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===tp||s===np||s===ip||s===rp||s===sp||s===op||s===ap||s===lp||s===cp||s===up||s===hp||s===dp||s===fp||s===pp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===tp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===np)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ip)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===op)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ap)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===cp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===up)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fu||s===mp||s===gp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Fu)return l===wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===mp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===gy||s===_p||s===vp||s===xp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Fu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===_p)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===gs?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class XT extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ei extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YT={type:"move"};class ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YT)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ei;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class $T extends As{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null;const _=t.getContextAttributes();let g=null,p=null;const x=[],v=[],y=new te;let E=null;const S=new Ln;S.layers.enable(1),S.viewport=new St;const M=new Ln;M.layers.enable(2),M.viewport=new St;const R=[S,M],b=new XT;b.layers.enable(1),b.layers.enable(2);let T=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=x[j];return Q===void 0&&(Q=new ah,x[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=x[j];return Q===void 0&&(Q=new ah,x[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=x[j];return Q===void 0&&(Q=new ah,x[j]=Q),Q.getHandSpace()};function N(j){const Q=v.indexOf(j.inputSource);if(Q===-1)return;const ce=x[Q];ce!==void 0&&(ce.update(j.inputSource,j.frame,c||o),ce.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",D);for(let j=0;j<x.length;j++){const Q=v[j];Q!==null&&(v[j]=null,x[j].disconnect(Q))}T=null,P=null,e.setRenderTarget(g),d=null,f=null,h=null,i=null,p=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",W),i.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new vi(d.framebufferWidth,d.framebufferHeight,{format:di,type:Ur,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,ce=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=_.stencil?ko:_s,ce=_.stencil?gs:Ar);const de={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(de),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new vi(f.textureWidth,f.textureHeight,{format:di,type:Ur,depthTexture:new t_(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ae=e.properties.get(p);Ae.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(j){for(let Q=0;Q<j.removed.length;Q++){const ce=j.removed[Q],Me=v.indexOf(ce);Me>=0&&(v[Me]=null,x[Me].disconnect(ce))}for(let Q=0;Q<j.added.length;Q++){const ce=j.added[Q];let Me=v.indexOf(ce);if(Me===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=v.length){v.push(ce),Me=Ae;break}else if(v[Ae]===null){v[Ae]=ce,Me=Ae;break}if(Me===-1)break}const de=x[Me];de&&de.connect(ce)}}const B=new U,I=new U;function F(j,Q,ce){B.setFromMatrixPosition(Q.matrixWorld),I.setFromMatrixPosition(ce.matrixWorld);const Me=B.distanceTo(I),de=Q.projectionMatrix.elements,Ae=ce.projectionMatrix.elements,Ie=de[14]/(de[10]-1),Se=de[14]/(de[10]+1),De=(de[9]+1)/de[5],O=(de[9]-1)/de[5],ee=(de[8]-1)/de[0],Z=(Ae[8]+1)/Ae[0],oe=Ie*ee,K=Ie*Z,z=Me/(-ee+Z),ge=z*-ee;Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ge),j.translateZ(z),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const C=Ie+z,w=Se+z,V=oe-ge,re=K+(Me-ge),se=De*Se/w*C,ne=O*Se/w*C;j.projectionMatrix.makePerspective(V,re,se,ne,C,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function H(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;b.near=M.near=S.near=j.near,b.far=M.far=S.far=j.far,(T!==b.near||P!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),T=b.near,P=b.far);const Q=j.parent,ce=b.cameras;H(b,Q);for(let Me=0;Me<ce.length;Me++)H(ce[Me],Q);ce.length===2?F(b,S,M):b.projectionMatrix.copy(S.projectionMatrix),X(j,b,Q)};function X(j,Q,ce){ce===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=zo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)};let L=null;function J(j,Q){if(u=Q.getViewerPose(c||o),m=Q,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Me=!1;ce.length!==b.cameras.length&&(b.cameras.length=0,Me=!0);for(let de=0;de<ce.length;de++){const Ae=ce[de];let Ie=null;if(d!==null)Ie=d.getViewport(Ae);else{const De=h.getViewSubImage(f,Ae);Ie=De.viewport,de===0&&(e.setRenderTargetTextures(p,De.colorTexture,f.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(p))}let Se=R[de];Se===void 0&&(Se=new Ln,Se.layers.enable(de),Se.viewport=new St,R[de]=Se),Se.matrix.fromArray(Ae.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Ae.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),de===0&&(b.matrix.copy(Se.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Me===!0&&b.cameras.push(Se)}}for(let ce=0;ce<x.length;ce++){const Me=v[ce],de=x[ce];Me!==null&&de!==void 0&&de.update(Me,Q,c||o)}L&&L(j,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}const ae=new e_;ae.setAnimationLoop(J),this.setAnimationLoop=function(j){L=j},this.dispose=function(){}}}function qT(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Jg(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===zn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===zn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jT(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=i[x.id];y===void 0&&(m(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",g));const E=v.program;n.updateUBOMapping(x,E);const S=e.render.frame;s[x.id]!==S&&(f(x),s[x.id]=S)}function u(x){const v=h();x.__bindingPointIndex=v;const y=r.createBuffer(),E=x.__size,S=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,E,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],y=x.uniforms,E=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let S=0,M=y.length;S<M;S++){const R=Array.isArray(y[S])?y[S]:[y[S]];for(let b=0,T=R.length;b<T;b++){const P=R[b];if(d(P,S,b,E)===!0){const N=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let D=0;for(let B=0;B<W.length;B++){const I=W[B],F=_(I);typeof I=="number"||typeof I=="boolean"?(P.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,N+D,P.__data)):I.isMatrix3?(P.__data[0]=I.elements[0],P.__data[1]=I.elements[1],P.__data[2]=I.elements[2],P.__data[3]=0,P.__data[4]=I.elements[3],P.__data[5]=I.elements[4],P.__data[6]=I.elements[5],P.__data[7]=0,P.__data[8]=I.elements[6],P.__data[9]=I.elements[7],P.__data[10]=I.elements[8],P.__data[11]=0):(I.toArray(P.__data,D),D+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,v,y,E){const S=x.value,M=v+"_"+y;if(E[M]===void 0)return typeof S=="number"||typeof S=="boolean"?E[M]=S:E[M]=S.clone(),!0;{const R=E[M];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return E[M]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function m(x){const v=x.uniforms;let y=0;const E=16;for(let M=0,R=v.length;M<R;M++){const b=Array.isArray(v[M])?v[M]:[v[M]];for(let T=0,P=b.length;T<P;T++){const N=b[T],W=Array.isArray(N.value)?N.value:[N.value];for(let D=0,B=W.length;D<B;D++){const I=W[D],F=_(I),H=y%E;H!==0&&E-H<F.boundary&&(y+=E-H),N.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=F.storage}}}const S=y%E;return S>0&&(y+=E-S),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){const v=x.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class a_{constructor(e={}){const{canvas:t=Yy(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this._useLegacyLights=!1,this.toneMapping=Dr,this.toneMappingExposure=1;const v=this;let y=!1,E=0,S=0,M=null,R=-1,b=null;const T=new St,P=new St;let N=null;const W=new Xe(0);let D=0,B=t.width,I=t.height,F=1,H=null,X=null;const L=new St(0,0,B,I),J=new St(0,0,B,I);let ae=!1;const j=new Bd;let Q=!1,ce=!1,Me=null;const de=new Je,Ae=new te,Ie=new U,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return M===null?F:1}let O=n;function ee(A,G){for(let q=0;q<A.length;q++){const $=A[q],Y=t.getContext($,G);if(Y!==null)return Y}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Id}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",fe,!1),O===null){const G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),O=ee(G,A),O===null)throw ee(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Z,oe,K,z,ge,C,w,V,re,se,ne,xe,_e,he,Re,ze,ie,at,Ne,Ye,Pe,be,$e,tt;function dt(){Z=new s1(O),oe=new QS(O,Z,e),Z.init(oe),be=new WT(O,Z,oe),K=new HT(O,Z,oe),z=new l1(O),ge=new CT,C=new GT(O,Z,K,ge,oe,be,z),w=new t1(v),V=new r1(v),re=new gM(O,oe),$e=new JS(O,Z,re,oe),se=new o1(O,re,z,$e),ne=new d1(O,se,re,z),Ne=new h1(O,oe,C),ze=new e1(ge),xe=new AT(v,w,V,Z,oe,$e,ze),_e=new qT(v,ge),he=new PT,Re=new OT(Z,oe),at=new ZS(v,w,V,K,ne,f,l),ie=new VT(v,ne,oe),tt=new jT(O,z,oe,K),Ye=new KS(O,Z,z,oe),Pe=new a1(O,Z,z,oe),z.programs=xe.programs,v.capabilities=oe,v.extensions=Z,v.properties=ge,v.renderLists=he,v.shadowMap=ie,v.state=K,v.info=z}dt();const ye=new $T(v,O);this.xr=ye,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Z.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Z.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(B,I,!1))},this.getSize=function(A){return A.set(B,I)},this.setSize=function(A,G,q=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,I=G,t.width=Math.floor(A*F),t.height=Math.floor(G*F),q===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(B*F,I*F).floor()},this.setDrawingBufferSize=function(A,G,q){B=A,I=G,F=q,t.width=Math.floor(A*q),t.height=Math.floor(G*q),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,G,q,$){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,G,q,$),K.viewport(T.copy(L).multiplyScalar(F).floor())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,G,q,$){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,G,q,$),K.scissor(P.copy(J).multiplyScalar(F).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(A){K.setScissorTest(ae=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){X=A},this.getClearColor=function(A){return A.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(A=!0,G=!0,q=!0){let $=0;if(A){let Y=!1;if(M!==null){const me=M.texture.format;Y=me===Fg||me===Og||me===Ng}if(Y){const me=M.texture.type,we=me===Ur||me===Ar||me===Ud||me===gs||me===Dg||me===Ug,Ge=at.getClearColor(),Ce=at.getClearAlpha(),Ue=Ge.r,We=Ge.g,Ze=Ge.b;we?(d[0]=Ue,d[1]=We,d[2]=Ze,d[3]=Ce,O.clearBufferuiv(O.COLOR,0,d)):(m[0]=Ue,m[1]=We,m[2]=Ze,m[3]=Ce,O.clearBufferiv(O.COLOR,0,m))}else $|=O.COLOR_BUFFER_BIT}G&&($|=O.DEPTH_BUFFER_BIT),q&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),he.dispose(),Re.dispose(),ge.dispose(),w.dispose(),V.dispose(),ne.dispose(),$e.dispose(),tt.dispose(),xe.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Te),ye.removeEventListener("sessionend",Oe),Me&&(Me.dispose(),Me=null),le.stop()};function ue(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=z.autoReset,G=ie.enabled,q=ie.autoUpdate,$=ie.needsUpdate,Y=ie.type;dt(),z.autoReset=A,ie.enabled=G,ie.autoUpdate=q,ie.needsUpdate=$,ie.type=Y}function fe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pe(A){const G=A.target;G.removeEventListener("dispose",pe),Ve(G)}function Ve(A){Fe(A),ge.remove(A)}function Fe(A){const G=ge.get(A).programs;G!==void 0&&(G.forEach(function(q){xe.releaseProgram(q)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,q,$,Y,me){G===null&&(G=Se);const we=Y.isMesh&&Y.matrixWorld.determinant()<0,Ge=Et(A,G,q,$,Y);K.setMaterial($,we);let Ce=q.index,Ue=1;if($.wireframe===!0){if(Ce=se.getWireframeAttribute(q),Ce===void 0)return;Ue=2}const We=q.drawRange,Ze=q.attributes.position;let Pt=We.start*Ue,Zt=(We.start+We.count)*Ue;me!==null&&(Pt=Math.max(Pt,me.start*Ue),Zt=Math.min(Zt,(me.start+me.count)*Ue)),Ce!==null?(Pt=Math.max(Pt,0),Zt=Math.min(Zt,Ce.count)):Ze!=null&&(Pt=Math.max(Pt,0),Zt=Math.min(Zt,Ze.count));const mt=Zt-Pt;if(mt<0||mt===1/0)return;$e.setup(Y,$,Ge,q,Ce);let Sn,xt=Ye;if(Ce!==null&&(Sn=re.get(Ce),xt=Pe,xt.setIndex(Sn)),Y.isMesh)$.wireframe===!0?(K.setLineWidth($.wireframeLinewidth*De()),xt.setMode(O.LINES)):xt.setMode(O.TRIANGLES);else if(Y.isLine){let qe=$.linewidth;qe===void 0&&(qe=1),K.setLineWidth(qe*De()),Y.isLineSegments?xt.setMode(O.LINES):Y.isLineLoop?xt.setMode(O.LINE_LOOP):xt.setMode(O.LINE_STRIP)}else Y.isPoints?xt.setMode(O.POINTS):Y.isSprite&&xt.setMode(O.TRIANGLES);if(Y.isBatchedMesh)xt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)xt.renderInstances(Pt,mt,Y.count);else if(q.isInstancedBufferGeometry){const qe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,pu=Math.min(q.instanceCount,qe);xt.renderInstances(Pt,mt,pu)}else xt.render(Pt,mt)};function lt(A,G,q){A.transparent===!0&&A.side===Ui&&A.forceSinglePass===!1?(A.side=zn,A.needsUpdate=!0,Tt(A,G,q),A.side=kr,A.needsUpdate=!0,Tt(A,G,q),A.side=Ui):Tt(A,G,q)}this.compile=function(A,G,q=null){q===null&&(q=A),g=Re.get(q),g.init(),x.push(g),q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),A!==q&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights(v._useLegacyLights);const $=new Set;return A.traverse(function(Y){const me=Y.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){const Ge=me[we];lt(Ge,q,Y),$.add(Ge)}else lt(me,q,Y),$.add(me)}),x.pop(),g=null,$},this.compileAsync=function(A,G,q=null){const $=this.compile(A,G,q);return new Promise(Y=>{function me(){if($.forEach(function(we){ge.get(we).currentProgram.isReady()&&$.delete(we)}),$.size===0){Y(A);return}setTimeout(me,10)}Z.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let ht=null;function Le(A){ht&&ht(A)}function Te(){le.stop()}function Oe(){le.start()}const le=new e_;le.setAnimationLoop(Le),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(A){ht=A,ye.setAnimationLoop(A),A===null?le.stop():le.start()},ye.addEventListener("sessionstart",Te),ye.addEventListener("sessionend",Oe),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(G),G=ye.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,G,M),g=Re.get(A,x.length),g.init(),x.push(g),de.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),j.setFromProjectionMatrix(de),ce=this.localClippingEnabled,Q=ze.init(this.clippingPlanes,ce),_=he.get(A,p.length),_.init(),p.push(_),He(A,G,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(H,X),this.info.render.frame++,Q===!0&&ze.beginShadows();const q=g.state.shadowsArray;if(ie.render(q,A,G),Q===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),at.render(_,A),g.setupLights(v._useLegacyLights),G.isArrayCamera){const $=G.cameras;for(let Y=0,me=$.length;Y<me;Y++){const we=$[Y];ke(_,A,we,we.viewport)}}else ke(_,A,G);M!==null&&(C.updateMultisampleRenderTarget(M),C.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(v,A,G),$e.resetDefaultState(),R=-1,b=null,x.pop(),x.length>0?g=x[x.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function He(A,G,q,$){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){$&&Ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);const we=ne.update(A),Ge=A.material;Ge.visible&&_.push(A,we,Ge,q,Ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const we=ne.update(A),Ge=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ie.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ie.copy(we.boundingSphere.center)),Ie.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(Ge)){const Ce=we.groups;for(let Ue=0,We=Ce.length;Ue<We;Ue++){const Ze=Ce[Ue],Pt=Ge[Ze.materialIndex];Pt&&Pt.visible&&_.push(A,we,Pt,q,Ie.z,Ze)}}else Ge.visible&&_.push(A,we,Ge,q,Ie.z,null)}}const me=A.children;for(let we=0,Ge=me.length;we<Ge;we++)He(me[we],G,q,$)}function ke(A,G,q,$){const Y=A.opaque,me=A.transmissive,we=A.transparent;g.setupLightsView(q),Q===!0&&ze.setGlobalState(v.clippingPlanes,q),me.length>0&&je(Y,me,G,q),$&&K.viewport(T.copy($)),Y.length>0&&Dt(Y,G,q),me.length>0&&Dt(me,G,q),we.length>0&&Dt(we,G,q),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function je(A,G,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const me=oe.isWebGL2;Me===null&&(Me=new vi(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?ki:Ur,minFilter:Za,samples:me?4:0})),v.getDrawingBufferSize(Ae),me?Me.setSize(Ae.x,Ae.y):Me.setSize(qc(Ae.x),qc(Ae.y));const we=v.getRenderTarget();v.setRenderTarget(Me),v.getClearColor(W),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Ge=v.toneMapping;v.toneMapping=Dr,Dt(A,q,$),C.updateMultisampleRenderTarget(Me),C.updateRenderTargetMipmap(Me);let Ce=!1;for(let Ue=0,We=G.length;Ue<We;Ue++){const Ze=G[Ue],Pt=Ze.object,Zt=Ze.geometry,mt=Ze.material,Sn=Ze.group;if(mt.side===Ui&&Pt.layers.test($.layers)){const xt=mt.side;mt.side=zn,mt.needsUpdate=!0,nt(Pt,q,$,Zt,mt,Sn),mt.side=xt,mt.needsUpdate=!0,Ce=!0}}Ce===!0&&(C.updateMultisampleRenderTarget(Me),C.updateRenderTargetMipmap(Me)),v.setRenderTarget(we),v.setClearColor(W,D),v.toneMapping=Ge}function Dt(A,G,q){const $=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,me=A.length;Y<me;Y++){const we=A[Y],Ge=we.object,Ce=we.geometry,Ue=$===null?we.material:$,We=we.group;Ge.layers.test(q.layers)&&nt(Ge,G,q,Ce,Ue,We)}}function nt(A,G,q,$,Y,me){A.onBeforeRender(v,G,q,$,Y,me),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(v,G,q,$,A,me),Y.transparent===!0&&Y.side===Ui&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,v.renderBufferDirect(q,G,$,Y,A,me),Y.side=kr,Y.needsUpdate=!0,v.renderBufferDirect(q,G,$,Y,A,me),Y.side=Ui):v.renderBufferDirect(q,G,$,Y,A,me),A.onAfterRender(v,G,q,$,Y,me)}function Tt(A,G,q){G.isScene!==!0&&(G=Se);const $=ge.get(A),Y=g.state.lights,me=g.state.shadowsArray,we=Y.state.version,Ge=xe.getParameters(A,Y.state,me,G,q),Ce=xe.getProgramCacheKey(Ge);let Ue=$.programs;$.environment=A.isMeshStandardMaterial?G.environment:null,$.fog=G.fog,$.envMap=(A.isMeshStandardMaterial?V:w).get(A.envMap||$.environment),Ue===void 0&&(A.addEventListener("dispose",pe),Ue=new Map,$.programs=Ue);let We=Ue.get(Ce);if(We!==void 0){if($.currentProgram===We&&$.lightsStateVersion===we)return At(A,Ge),We}else Ge.uniforms=xe.getUniforms(A),A.onBuild(q,Ge,v),A.onBeforeCompile(Ge,v),We=xe.acquireProgram(Ge,Ce),Ue.set(Ce,We),$.uniforms=Ge.uniforms;const Ze=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=ze.uniform),At(A,Ge),$.needsLights=Hn(A),$.lightsStateVersion=we,$.needsLights&&(Ze.ambientLightColor.value=Y.state.ambient,Ze.lightProbe.value=Y.state.probe,Ze.directionalLights.value=Y.state.directional,Ze.directionalLightShadows.value=Y.state.directionalShadow,Ze.spotLights.value=Y.state.spot,Ze.spotLightShadows.value=Y.state.spotShadow,Ze.rectAreaLights.value=Y.state.rectArea,Ze.ltc_1.value=Y.state.rectAreaLTC1,Ze.ltc_2.value=Y.state.rectAreaLTC2,Ze.pointLights.value=Y.state.point,Ze.pointLightShadows.value=Y.state.pointShadow,Ze.hemisphereLights.value=Y.state.hemi,Ze.directionalShadowMap.value=Y.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ze.spotShadowMap.value=Y.state.spotShadowMap,Ze.spotLightMatrix.value=Y.state.spotLightMatrix,Ze.spotLightMap.value=Y.state.spotLightMap,Ze.pointShadowMap.value=Y.state.pointShadowMap,Ze.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.currentProgram=We,$.uniformsList=null,We}function jt(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Mc.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function At(A,G){const q=ge.get(A);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function Et(A,G,q,$,Y){G.isScene!==!0&&(G=Se),C.resetTextureUnits();const me=G.fog,we=$.isMeshStandardMaterial?G.environment:null,Ge=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:dr,Ce=($.isMeshStandardMaterial?V:w).get($.envMap||we),Ue=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,We=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ze=!!q.morphAttributes.position,Pt=!!q.morphAttributes.normal,Zt=!!q.morphAttributes.color;let mt=Dr;$.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(mt=v.toneMapping);const Sn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xt=Sn!==void 0?Sn.length:0,qe=ge.get($),pu=g.state.lights;if(Q===!0&&(ce===!0||A!==b)){const ri=A===b&&$.id===R;ze.setState($,A,ri)}let zt=!1;$.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==pu.state.version||qe.outputColorSpace!==Ge||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||qe.envMap!==Ce||$.fog===!0&&qe.fog!==me||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ze.numPlanes||qe.numIntersection!==ze.numIntersection)||qe.vertexAlphas!==Ue||qe.vertexTangents!==We||qe.morphTargets!==Ze||qe.morphNormals!==Pt||qe.morphColors!==Zt||qe.toneMapping!==mt||oe.isWebGL2===!0&&qe.morphTargetsCount!==xt)&&(zt=!0):(zt=!0,qe.__version=$.version);let Wr=qe.currentProgram;zt===!0&&(Wr=Tt($,G,Y));let Jd=!1,Jo=!1,mu=!1;const fn=Wr.getUniforms(),Xr=qe.uniforms;if(K.useProgram(Wr.program)&&(Jd=!0,Jo=!0,mu=!0),$.id!==R&&(R=$.id,Jo=!0),Jd||b!==A){fn.setValue(O,"projectionMatrix",A.projectionMatrix),fn.setValue(O,"viewMatrix",A.matrixWorldInverse);const ri=fn.map.cameraPosition;ri!==void 0&&ri.setValue(O,Ie.setFromMatrixPosition(A.matrixWorld)),oe.logarithmicDepthBuffer&&fn.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&fn.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Jo=!0,mu=!0)}if(Y.isSkinnedMesh){fn.setOptional(O,Y,"bindMatrix"),fn.setOptional(O,Y,"bindMatrixInverse");const ri=Y.skeleton;ri&&(oe.floatVertexTextures?(ri.boneTexture===null&&ri.computeBoneTexture(),fn.setValue(O,"boneTexture",ri.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(fn.setOptional(O,Y,"batchingTexture"),fn.setValue(O,"batchingTexture",Y._matricesTexture,C));const gu=q.morphAttributes;if((gu.position!==void 0||gu.normal!==void 0||gu.color!==void 0&&oe.isWebGL2===!0)&&Ne.update(Y,q,Wr),(Jo||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,fn.setValue(O,"receiveShadow",Y.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Xr.envMap.value=Ce,Xr.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Jo&&(fn.setValue(O,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&pt(Xr,mu),me&&$.fog===!0&&_e.refreshFogUniforms(Xr,me),_e.refreshMaterialUniforms(Xr,$,F,I,Me),Mc.upload(O,jt(qe),Xr,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Mc.upload(O,jt(qe),Xr,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&fn.setValue(O,"center",Y.center),fn.setValue(O,"modelViewMatrix",Y.modelViewMatrix),fn.setValue(O,"normalMatrix",Y.normalMatrix),fn.setValue(O,"modelMatrix",Y.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const ri=$.uniformsGroups;for(let _u=0,B_=ri.length;_u<B_;_u++)if(oe.isWebGL2){const Kd=ri[_u];tt.update(Kd,Wr),tt.bind(Kd,Wr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wr}function pt(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Hn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,G,q){ge.get(A.texture).__webglTexture=G,ge.get(A.depthTexture).__webglTexture=q;const $=ge.get(A);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,G){const q=ge.get(A);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,q=0){M=A,E=G,S=q;let $=!0,Y=null,me=!1,we=!1;if(A){const Ce=ge.get(A);Ce.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(O.FRAMEBUFFER,null),$=!1):Ce.__webglFramebuffer===void 0?C.setupRenderTarget(A):Ce.__hasExternalTextures&&C.rebindTextures(A,ge.get(A.texture).__webglTexture,ge.get(A.depthTexture).__webglTexture);const Ue=A.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(we=!0);const We=ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[G])?Y=We[G][q]:Y=We[G],me=!0):oe.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?Y=ge.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?Y=We[q]:Y=We,T.copy(A.viewport),P.copy(A.scissor),N=A.scissorTest}else T.copy(L).multiplyScalar(F).floor(),P.copy(J).multiplyScalar(F).floor(),N=ae;if(K.bindFramebuffer(O.FRAMEBUFFER,Y)&&oe.drawBuffers&&$&&K.drawBuffers(A,Y),K.viewport(T),K.scissor(P),K.setScissorTest(N),me){const Ce=ge.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ce.__webglTexture,q)}else if(we){const Ce=ge.get(A.texture),Ue=G||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.__webglTexture,q||0,Ue)}R=-1},this.readRenderTargetPixels=function(A,G,q,$,Y,me,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ge=Ge[we]),Ge){K.bindFramebuffer(O.FRAMEBUFFER,Ge);try{const Ce=A.texture,Ue=Ce.format,We=Ce.type;if(Ue!==di&&be.convert(Ue)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ze=We===ki&&(Z.has("EXT_color_buffer_half_float")||oe.isWebGL2&&Z.has("EXT_color_buffer_float"));if(We!==Ur&&be.convert(We)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===sr&&(oe.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!Ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-$&&q>=0&&q<=A.height-Y&&O.readPixels(G,q,$,Y,be.convert(Ue),be.convert(We),me)}finally{const Ce=M!==null?ge.get(M).__webglFramebuffer:null;K.bindFramebuffer(O.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(A,G,q=0){const $=Math.pow(2,-q),Y=Math.floor(G.image.width*$),me=Math.floor(G.image.height*$);C.setTexture2D(G,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,A.x,A.y,Y,me),K.unbindTexture()},this.copyTextureToTexture=function(A,G,q,$=0){const Y=G.image.width,me=G.image.height,we=be.convert(q.format),Ge=be.convert(q.type);C.setTexture2D(q,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,q.unpackAlignment),G.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,$,A.x,A.y,Y,me,we,Ge,G.image.data):G.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,$,A.x,A.y,G.mipmaps[0].width,G.mipmaps[0].height,we,G.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,$,A.x,A.y,we,Ge,G.image),$===0&&q.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(A,G,q,$,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=A.max.x-A.min.x+1,we=A.max.y-A.min.y+1,Ge=A.max.z-A.min.z+1,Ce=be.convert($.format),Ue=be.convert($.type);let We;if($.isData3DTexture)C.setTexture3D($,0),We=O.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)C.setTexture2DArray($,0),We=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,$.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,$.unpackAlignment);const Ze=O.getParameter(O.UNPACK_ROW_LENGTH),Pt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Zt=O.getParameter(O.UNPACK_SKIP_PIXELS),mt=O.getParameter(O.UNPACK_SKIP_ROWS),Sn=O.getParameter(O.UNPACK_SKIP_IMAGES),xt=q.isCompressedTexture?q.mipmaps[Y]:q.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,xt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,A.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,A.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?O.texSubImage3D(We,Y,G.x,G.y,G.z,me,we,Ge,Ce,Ue,xt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(We,Y,G.x,G.y,G.z,me,we,Ge,Ce,xt.data)):O.texSubImage3D(We,Y,G.x,G.y,G.z,me,we,Ge,Ce,Ue,xt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ze),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Zt),O.pixelStorei(O.UNPACK_SKIP_ROWS,mt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Sn),Y===0&&$.generateMipmaps&&O.generateMipmap(We),K.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),K.unbindTexture()},this.resetState=function(){E=0,S=0,M=null,K.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Od?"display-p3":"srgb",t.unpackColorSpace=vt.workingColorSpace===lu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Gt?vs:zg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===vs?Gt:dr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ZT extends a_{}ZT.prototype.isWebGL1Renderer=!0;class JT extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class KT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new U;class jc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class l_ extends Gr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let js;const sa=new U,Zs=new U,Js=new U,Ks=new te,oa=new te,c_=new Je,Yl=new U,aa=new U,$l=new U,am=new te,lh=new te,lm=new te;class QT extends Bt{constructor(e=new l_){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new KT(t,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new jc(n,3,0,!1)),js.setAttribute("uv",new jc(n,2,3,!1))}this.geometry=js,this.material=e,this.center=new te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),c_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-Js.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;ql(Yl.set(-.5,-.5,0),Js,o,Zs,i,s),ql(aa.set(.5,-.5,0),Js,o,Zs,i,s),ql($l.set(.5,.5,0),Js,o,Zs,i,s),am.set(0,0),lh.set(1,0),lm.set(1,1);let a=e.ray.intersectTriangle(Yl,aa,$l,!1,sa);if(a===null&&(ql(aa.set(-.5,.5,0),Js,o,Zs,i,s),lh.set(0,1),a=e.ray.intersectTriangle(Yl,$l,aa,!1,sa),a===null))return;const l=e.ray.origin.distanceTo(sa);l<e.near||l>e.far||t.push({distance:l,point:sa.clone(),uv:hi.getInterpolation(sa,Yl,aa,$l,am,lh,lm,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ql(r,e,t,n,i,s){Ks.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(oa.x=s*Ks.x-i*Ks.y,oa.y=i*Ks.x+s*Ks.y):oa.copy(Ks),r.copy(e),r.x+=oa.x,r.y+=oa.y,r.applyMatrix4(c_)}const cm=new U,um=new St,hm=new St,eE=new U,dm=new Je,jl=new U,ch=new fr,fm=new Je,uh=new cu;class a2 extends Be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$f,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jl),this.boundingBox.expandByPoint(jl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jl),this.boundingSphere.expandByPoint(jl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ch.copy(this.boundingSphere),ch.applyMatrix4(i),e.ray.intersectsSphere(ch)!==!1&&(fm.copy(i).invert(),uh.copy(e.ray).applyMatrix4(fm),!(this.boundingBox!==null&&uh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,uh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$f?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ay?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;um.fromBufferAttribute(i.attributes.skinIndex,e),hm.fromBufferAttribute(i.attributes.skinWeight,e),cm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=hm.getComponent(s);if(o!==0){const a=um.getComponent(s);dm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(eE.copy(cm).applyMatrix4(dm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class tE extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class nE extends bn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=un,u=un,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pm=new Je,iE=new Je;class u_{constructor(e=[],t=[]){this.uuid=_i(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:iE;pm.multiplyMatrices(a,t[s]),pm.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new u_(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new nE(t,e,e,di,sr);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new tE),this.bones.push(o),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class mm extends nn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qs=new Je,gm=new Je,Zl=[],_m=new Hi,rE=new Je,la=new Be,ca=new fr;class l2 extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mm(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,rE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),_m.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(_m)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),ca.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ca.copy(this.boundingSphere),ca.applyMatrix4(n),e.ray.intersectsSphere(ca)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Qs),gm.multiplyMatrices(n,Qs),la.matrixWorld=gm,la.raycast(e,Zl);for(let o=0,a=Zl.length;o<a;o++){const l=Zl[o];l.instanceId=s,l.object=this,t.push(l)}Zl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new mm(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class sE extends Gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vm=new U,xm=new U,ym=new Je,hh=new cu,Jl=new fr;class h_ extends Bt{constructor(e=new kt,t=new sE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)vm.fromBufferAttribute(t,i-1),xm.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=vm.distanceTo(xm);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jl.copy(n.boundingSphere),Jl.applyMatrix4(i),Jl.radius+=s,e.ray.intersectsSphere(Jl)===!1)return;ym.copy(i).invert(),hh.copy(e.ray).applyMatrix4(ym);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,u=new U,h=new U,f=new U,d=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=p,y=x-1;v<y;v+=d){const E=m.getX(v),S=m.getX(v+1);if(c.fromBufferAttribute(g,E),u.fromBufferAttribute(g,S),hh.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=p,y=x-1;v<y;v+=d){if(c.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),hh.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||t.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Mm=new U,bm=new U;class c2 extends h_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Mm.fromBufferAttribute(t,i),bm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Mm.distanceTo(bm);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class u2 extends h_{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class d_ extends Gr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sm=new Je,ed=new cu,Kl=new fr,Ql=new U;class oE extends Bt{constructor(e=new kt,t=new d_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kl.copy(n.boundingSphere),Kl.applyMatrix4(i),Kl.radius+=s,e.ray.intersectsSphere(Kl)===!1)return;Sm.copy(i).invert(),ed.copy(e.ray).applyMatrix4(Sm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,_=d;m<_;m++){const g=c.getX(m);Ql.fromBufferAttribute(h,g),Tm(Ql,g,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,_=d;m<_;m++)Ql.fromBufferAttribute(h,m),Tm(Ql,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Tm(r,e,t,n,i,s,o){const a=ed.distanceSqToPoint(r);if(a<t){const l=new U;ed.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class $o extends bn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new te:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new U,i=[],s=[],o=[],a=new U,l=new Je;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(tn(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(tn(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vd extends Wi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new te,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class aE extends Vd{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Hd(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const ec=new U,dh=new Hd,fh=new Hd,ph=new Hd;class Zc extends Wi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new U){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(ec.subVectors(i[0],i[1]).add(i[0]),c=ec);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(ec.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=ec),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),dh.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,_,g),fh.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,_,g),ph.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(dh.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),fh.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ph.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(dh.calc(l),fh.calc(l),ph.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Em(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function lE(r,e){const t=1-r;return t*t*e}function cE(r,e){return 2*(1-r)*r*e}function uE(r,e){return r*r*e}function Na(r,e,t,n){return lE(r,e)+cE(r,t)+uE(r,n)}function hE(r,e){const t=1-r;return t*t*t*e}function dE(r,e){const t=1-r;return 3*t*t*r*e}function fE(r,e){return 3*(1-r)*r*r*e}function pE(r,e){return r*r*r*e}function Oa(r,e,t,n,i){return hE(r,e)+dE(r,t)+fE(r,n)+pE(r,i)}class f_ extends Wi{constructor(e=new te,t=new te,n=new te,i=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new te){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Oa(e,i.x,s.x,o.x,a.x),Oa(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mE extends Wi{constructor(e=new U,t=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Oa(e,i.x,s.x,o.x,a.x),Oa(e,i.y,s.y,o.y,a.y),Oa(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class p_ extends Wi{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gE extends Wi{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class m_ extends Wi{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Na(e,i.x,s.x,o.x),Na(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gd extends Wi{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Na(e,i.x,s.x,o.x),Na(e,i.y,s.y,o.y),Na(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class g_ extends Wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Em(a,l.x,c.x,u.x,h.x),Em(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new te().fromArray(i))}return this}}var Jc=Object.freeze({__proto__:null,ArcCurve:aE,CatmullRomCurve3:Zc,CubicBezierCurve:f_,CubicBezierCurve3:mE,EllipseCurve:Vd,LineCurve:p_,LineCurve3:gE,QuadraticBezierCurve:m_,QuadraticBezierCurve3:Gd,SplineCurve:g_});class _E extends Wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Jc[i.type]().fromJSON(i))}return this}}class td extends _E{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new p_(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new m_(this.currentPoint.clone(),new te(e,t),new te(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new f_(this.currentPoint.clone(),new te(e,t),new te(n,i),new te(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new g_(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new Vd(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Cs extends kt{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=tn(i,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/t,h=new U,f=new te,d=new U,m=new U,_=new U;let g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(m)}for(let x=0;x<=t;x++){const v=n+x*u*i,y=Math.sin(v),E=Math.cos(v);for(let S=0;S<=e.length-1;S++){h.x=e[S].x*y,h.y=e[S].y,h.z=e[S].x*E,o.push(h.x,h.y,h.z),f.x=x/t,f.y=S/(e.length-1),a.push(f.x,f.y);const M=l[3*S+0]*y,R=l[3*S+1],b=l[3*S+0]*E;c.push(M,R,b)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){const y=v+x*e.length,E=y,S=y+e.length,M=y+e.length+1,R=y+1;s.push(E,S,R),s.push(M,R,S)}this.setIndex(s),this.setAttribute("position",new ot(o,3)),this.setAttribute("uv",new ot(a,2)),this.setAttribute("normal",new ot(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.points,e.segments,e.phiStart,e.phiLength)}}class Ho extends Cs{constructor(e=1,t=1,n=4,i=8){const s=new td;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Ho(e.radius,e.length,e.capSegments,e.radialSegments)}}class Wd extends kt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new U,u=new te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(a,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class yi extends kt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],d=[];let m=0;const _=[],g=n/2;let p=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(f,3)),this.setAttribute("uv",new ot(d,2));function x(){const y=new U,E=new U;let S=0;const M=(t-e)/n;for(let R=0;R<=s;R++){const b=[],T=R/s,P=T*(t-e)+e;for(let N=0;N<=i;N++){const W=N/i,D=W*l+a,B=Math.sin(D),I=Math.cos(D);E.x=P*B,E.y=-T*n+g,E.z=P*I,h.push(E.x,E.y,E.z),y.set(B,M,I).normalize(),f.push(y.x,y.y,y.z),d.push(W,1-T),b.push(m++)}_.push(b)}for(let R=0;R<i;R++)for(let b=0;b<s;b++){const T=_[b][R],P=_[b+1][R],N=_[b+1][R+1],W=_[b][R+1];u.push(T,P,W),u.push(P,N,W),S+=6}c.addGroup(p,S,0),p+=S}function v(y){const E=m,S=new te,M=new U;let R=0;const b=y===!0?e:t,T=y===!0?1:-1;for(let N=1;N<=i;N++)h.push(0,g*T,0),f.push(0,T,0),d.push(.5,.5),m++;const P=m;for(let N=0;N<=i;N++){const D=N/i*l+a,B=Math.cos(D),I=Math.sin(D);M.x=b*I,M.y=g*T,M.z=b*B,h.push(M.x,M.y,M.z),f.push(0,T,0),S.x=B*.5+.5,S.y=I*.5*T+.5,d.push(S.x,S.y),m++}for(let N=0;N<i;N++){const W=E+N,D=P+N;y===!0?u.push(D,D+1,W):u.push(D+1,D,W),R+=3}c.addGroup(p,R,y===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kc extends yi{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Kc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class al extends td{constructor(e){super(e),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new td().fromJSON(i))}return this}}const vE={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=__(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(n&&(s=SE(r,e,s,t)),r.length>80*t){a=c=r[0],l=u=r[1];for(let m=t;m<i;m+=t)h=r[m],f=r[m+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return el(s,o,t,a,l,d,0),o}};function __(r,e,t,n,i){let s,o;if(i===UE(r,e,t,n)>0)for(s=e;s<t;s+=n)o=wm(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=wm(s,r[s],r[s+1],o);return o&&hu(o,o.next)&&(nl(o),o=o.next),o}function Ts(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(hu(t,t.next)||Ft(t.prev,t,t.next)===0)){if(nl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function el(r,e,t,n,i,s,o){if(!r)return;!o&&s&&CE(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?yE(r,n,i,s):xE(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),nl(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=ME(Ts(r),e,t),el(r,e,t,n,i,s,2)):o===2&&bE(r,e,t,n,i,s):el(Ts(r),e,t,n,i,s,1);break}}}function xE(r){const e=r.prev,t=r,n=r.next;if(Ft(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&vo(i,a,s,l,o,c,m.x,m.y)&&Ft(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function yE(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Ft(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,g=u>h?u>f?u:f:h>f?h:f,p=nd(d,m,e,t,n),x=nd(_,g,e,t,n);let v=r.prevZ,y=r.nextZ;for(;v&&v.z>=p&&y&&y.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&vo(a,u,l,h,c,f,v.x,v.y)&&Ft(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&vo(a,u,l,h,c,f,y.x,y.y)&&Ft(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&vo(a,u,l,h,c,f,v.x,v.y)&&Ft(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&vo(a,u,l,h,c,f,y.x,y.y)&&Ft(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ME(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!hu(i,s)&&v_(i,n,n.next,s)&&tl(i,s)&&tl(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),nl(n),nl(n.next),n=r=s),n=n.next}while(n!==r);return Ts(n)}function bE(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&LE(o,a)){let l=x_(o,a);o=Ts(o,o.next),l=Ts(l,l.next),el(o,e,t,n,i,s,0),el(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function SE(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=__(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(PE(c));for(i.sort(TE),s=0;s<i.length;s++)t=EE(i[s],t);return t}function TE(r,e){return r.x-e.x}function EE(r,e){const t=wE(r,e);if(!t)return e;const n=x_(t,r);return Ts(n,n.next),Ts(t,t.next)}function wE(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&vo(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),tl(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&AE(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function AE(r,e){return Ft(r.prev,r,e.prev)<0&&Ft(e.next,r,r.next)<0}function CE(r,e,t,n){let i=r;do i.z===0&&(i.z=nd(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,RE(i)}function RE(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function nd(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function PE(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function vo(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function LE(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!IE(r,e)&&(tl(r,e)&&tl(e,r)&&DE(r,e)&&(Ft(r.prev,r,e.prev)||Ft(r,e.prev,e))||hu(r,e)&&Ft(r.prev,r,r.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function hu(r,e){return r.x===e.x&&r.y===e.y}function v_(r,e,t,n){const i=nc(Ft(r,e,t)),s=nc(Ft(r,e,n)),o=nc(Ft(t,n,r)),a=nc(Ft(t,n,e));return!!(i!==s&&o!==a||i===0&&tc(r,t,e)||s===0&&tc(r,n,e)||o===0&&tc(t,r,n)||a===0&&tc(t,e,n))}function tc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function nc(r){return r>0?1:r<0?-1:0}function IE(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&v_(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function tl(r,e){return Ft(r.prev,r,r.next)<0?Ft(r,e,r.next)>=0&&Ft(r,r.prev,e)>=0:Ft(r,e,r.prev)<0||Ft(r,r.next,e)<0}function DE(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function x_(r,e){const t=new id(r.i,r.x,r.y),n=new id(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function wm(r,e,t,n){const i=new id(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function nl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function id(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function UE(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Fa{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Fa.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Am(e),Cm(n,e);let o=e.length;t.forEach(Am);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Cm(n,t[l]);const a=vE.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Am(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Cm(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Cr extends kt{constructor(e=new al([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ot(i,3)),this.setAttribute("uv",new ot(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:NE;let v,y=!1,E,S,M,R;p&&(v=p.getSpacedPoints(u),y=!0,f=!1,E=p.computeFrenetFrames(u,!1),S=new U,M=new U,R=new U),f||(g=0,d=0,m=0,_=0);const b=a.extractPoints(c);let T=b.shape;const P=b.holes;if(!Fa.isClockWise(T)){T=T.reverse();for(let O=0,ee=P.length;O<ee;O++){const Z=P[O];Fa.isClockWise(Z)&&(P[O]=Z.reverse())}}const W=Fa.triangulateShape(T,P),D=T;for(let O=0,ee=P.length;O<ee;O++){const Z=P[O];T=T.concat(Z)}function B(O,ee,Z){return ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(ee,Z)}const I=T.length,F=W.length;function H(O,ee,Z){let oe,K,z;const ge=O.x-ee.x,C=O.y-ee.y,w=Z.x-O.x,V=Z.y-O.y,re=ge*ge+C*C,se=ge*V-C*w;if(Math.abs(se)>Number.EPSILON){const ne=Math.sqrt(re),xe=Math.sqrt(w*w+V*V),_e=ee.x-C/ne,he=ee.y+ge/ne,Re=Z.x-V/xe,ze=Z.y+w/xe,ie=((Re-_e)*V-(ze-he)*w)/(ge*V-C*w);oe=_e+ge*ie-O.x,K=he+C*ie-O.y;const at=oe*oe+K*K;if(at<=2)return new te(oe,K);z=Math.sqrt(at/2)}else{let ne=!1;ge>Number.EPSILON?w>Number.EPSILON&&(ne=!0):ge<-Number.EPSILON?w<-Number.EPSILON&&(ne=!0):Math.sign(C)===Math.sign(V)&&(ne=!0),ne?(oe=-C,K=ge,z=Math.sqrt(re)):(oe=ge,K=C,z=Math.sqrt(re/2))}return new te(oe/z,K/z)}const X=[];for(let O=0,ee=D.length,Z=ee-1,oe=O+1;O<ee;O++,Z++,oe++)Z===ee&&(Z=0),oe===ee&&(oe=0),X[O]=H(D[O],D[Z],D[oe]);const L=[];let J,ae=X.concat();for(let O=0,ee=P.length;O<ee;O++){const Z=P[O];J=[];for(let oe=0,K=Z.length,z=K-1,ge=oe+1;oe<K;oe++,z++,ge++)z===K&&(z=0),ge===K&&(ge=0),J[oe]=H(Z[oe],Z[z],Z[ge]);L.push(J),ae=ae.concat(J)}for(let O=0;O<g;O++){const ee=O/g,Z=d*Math.cos(ee*Math.PI/2),oe=m*Math.sin(ee*Math.PI/2)+_;for(let K=0,z=D.length;K<z;K++){const ge=B(D[K],X[K],oe);de(ge.x,ge.y,-Z)}for(let K=0,z=P.length;K<z;K++){const ge=P[K];J=L[K];for(let C=0,w=ge.length;C<w;C++){const V=B(ge[C],J[C],oe);de(V.x,V.y,-Z)}}}const j=m+_;for(let O=0;O<I;O++){const ee=f?B(T[O],ae[O],j):T[O];y?(M.copy(E.normals[0]).multiplyScalar(ee.x),S.copy(E.binormals[0]).multiplyScalar(ee.y),R.copy(v[0]).add(M).add(S),de(R.x,R.y,R.z)):de(ee.x,ee.y,0)}for(let O=1;O<=u;O++)for(let ee=0;ee<I;ee++){const Z=f?B(T[ee],ae[ee],j):T[ee];y?(M.copy(E.normals[O]).multiplyScalar(Z.x),S.copy(E.binormals[O]).multiplyScalar(Z.y),R.copy(v[O]).add(M).add(S),de(R.x,R.y,R.z)):de(Z.x,Z.y,h/u*O)}for(let O=g-1;O>=0;O--){const ee=O/g,Z=d*Math.cos(ee*Math.PI/2),oe=m*Math.sin(ee*Math.PI/2)+_;for(let K=0,z=D.length;K<z;K++){const ge=B(D[K],X[K],oe);de(ge.x,ge.y,h+Z)}for(let K=0,z=P.length;K<z;K++){const ge=P[K];J=L[K];for(let C=0,w=ge.length;C<w;C++){const V=B(ge[C],J[C],oe);y?de(V.x,V.y+v[u-1].y,v[u-1].x+Z):de(V.x,V.y,h+Z)}}}Q(),ce();function Q(){const O=i.length/3;if(f){let ee=0,Z=I*ee;for(let oe=0;oe<F;oe++){const K=W[oe];Ae(K[2]+Z,K[1]+Z,K[0]+Z)}ee=u+g*2,Z=I*ee;for(let oe=0;oe<F;oe++){const K=W[oe];Ae(K[0]+Z,K[1]+Z,K[2]+Z)}}else{for(let ee=0;ee<F;ee++){const Z=W[ee];Ae(Z[2],Z[1],Z[0])}for(let ee=0;ee<F;ee++){const Z=W[ee];Ae(Z[0]+I*u,Z[1]+I*u,Z[2]+I*u)}}n.addGroup(O,i.length/3-O,0)}function ce(){const O=i.length/3;let ee=0;Me(D,ee),ee+=D.length;for(let Z=0,oe=P.length;Z<oe;Z++){const K=P[Z];Me(K,ee),ee+=K.length}n.addGroup(O,i.length/3-O,1)}function Me(O,ee){let Z=O.length;for(;--Z>=0;){const oe=Z;let K=Z-1;K<0&&(K=O.length-1);for(let z=0,ge=u+g*2;z<ge;z++){const C=I*z,w=I*(z+1),V=ee+oe+C,re=ee+K+C,se=ee+K+w,ne=ee+oe+w;Ie(V,re,se,ne)}}}function de(O,ee,Z){l.push(O),l.push(ee),l.push(Z)}function Ae(O,ee,Z){Se(O),Se(ee),Se(Z);const oe=i.length/3,K=x.generateTopUV(n,i,oe-3,oe-2,oe-1);De(K[0]),De(K[1]),De(K[2])}function Ie(O,ee,Z,oe){Se(O),Se(ee),Se(oe),Se(ee),Se(Z),Se(oe);const K=i.length/3,z=x.generateSideWallUV(n,i,K-6,K-3,K-2,K-1);De(z[0]),De(z[1]),De(z[3]),De(z[1]),De(z[2]),De(z[3])}function Se(O){i.push(l[O*3+0]),i.push(l[O*3+1]),i.push(l[O*3+2])}function De(O){s.push(O.x),s.push(O.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return OE(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Jc[i.type]().fromJSON(i)),new Cr(n,e.options)}}const NE={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new te(s,o),new te(a,l),new te(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],m=e[i*3+2],_=e[s*3],g=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new te(o,1-l),new te(c,1-h),new te(f,1-m),new te(_,1-p)]:[new te(a,1-l),new te(u,1-h),new te(d,1-m),new te(g,1-p)]}};function OE(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Xd extends kt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/i,d=new U,m=new te;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=s+g/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,u.push(m.x,m.y)}h+=f}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const x=p+g,v=x,y=x+n+1,E=x+n+2,S=x+1;a.push(v,y,S),a.push(y,E,S)}}this.setIndex(a),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Gi extends kt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new U,f=new U,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){const S=E/t;h.x=-e*Math.cos(i+S*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(i+S*s)*Math.sin(o+v*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(S+y,1-v),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const v=u[p][x+1],y=u[p][x],E=u[p+1][x],S=u[p+1][x+1];(p!==0||o>0)&&d.push(v,y,S),(p!==n-1||l<Math.PI)&&d.push(y,E,S)}this.setIndex(d),this.setAttribute("position",new ot(m,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Go extends kt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new U,h=new U,f=new U;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const _=m/i*s,g=d/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(_),h.y=(e+t*Math.cos(g))*Math.sin(_),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const _=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,x=(i+1)*d+m;o.push(_,g,x),o.push(g,p,x)}this.setIndex(o),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Po extends kt{constructor(e=new Gd(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,l=new U,c=new te;let u=new U;const h=[],f=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(f,3)),this.setAttribute("uv",new ot(d,2));function _(){for(let v=0;v<t;v++)g(v);g(s===!1?t:0),x(),p()}function g(v){u=e.getPointAt(v/t,u);const y=o.normals[v],E=o.binormals[v];for(let S=0;S<=i;S++){const M=S/i*Math.PI*2,R=Math.sin(M),b=-Math.cos(M);l.x=b*y.x+R*E.x,l.y=b*y.y+R*E.y,l.z=b*y.z+R*E.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let y=1;y<=i;y++){const E=(i+1)*(v-1)+(y-1),S=(i+1)*v+(y-1),M=(i+1)*v+y,R=(i+1)*(v-1)+y;m.push(E,S,R),m.push(S,M,R)}}function x(){for(let v=0;v<=t;v++)for(let y=0;y<=i;y++)c.x=v/t,c.y=y/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Po(new Jc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class FE extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wo extends Gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vg,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class h2 extends Wo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ic(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function BE(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function kE(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Rm(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function y_(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class du{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class zE extends du{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:po,endingEnd:po}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case mo:s=e,a=2*t-n;break;case Gc:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mo:o=e,l=2*n-t;break;case Gc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,x=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,v=(-1-d)*g+(1.5+d)*_+.5*m,y=d*g-d*_;for(let E=0;E!==a;++E)s[E]=p*o[u+E]+x*o[c+E]+v*o[l+E]+y*o[h+E];return s}}class M_ extends du{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class VE extends du{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ic(t,this.TimeBufferType),this.values=ic(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ic(e.times,Array),values:ic(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new VE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new M_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vc:t=this.InterpolantFactoryMethodDiscrete;break;case Hc:t=this.InterpolantFactoryMethodLinear;break;case Bu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vc;case this.InterpolantFactoryMethodLinear:return Hc;case this.InterpolantFactoryMethodSmooth:return Bu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&BE(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Bu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){const _=t[h+m];if(_!==t[f+m]||_!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Xi.prototype.TimeBufferType=Float32Array;Xi.prototype.ValueBufferType=Float32Array;Xi.prototype.DefaultInterpolation=Hc;class qo extends Xi{}qo.prototype.ValueTypeName="bool";qo.prototype.ValueBufferType=Array;qo.prototype.DefaultInterpolation=Vc;qo.prototype.InterpolantFactoryMethodLinear=void 0;qo.prototype.InterpolantFactoryMethodSmooth=void 0;class b_ extends Xi{}b_.prototype.ValueTypeName="color";class Qc extends Xi{}Qc.prototype.ValueTypeName="number";class HE extends du{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)zi.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ll extends Xi{InterpolantFactoryMethodLinear(e){return new HE(this.times,this.values,this.getValueSize(),e)}}ll.prototype.ValueTypeName="quaternion";ll.prototype.DefaultInterpolation=Hc;ll.prototype.InterpolantFactoryMethodSmooth=void 0;class jo extends Xi{}jo.prototype.ValueTypeName="string";jo.prototype.ValueBufferType=Array;jo.prototype.DefaultInterpolation=Vc;jo.prototype.InterpolantFactoryMethodLinear=void 0;jo.prototype.InterpolantFactoryMethodSmooth=void 0;class eu extends Xi{}eu.prototype.ValueTypeName="vector";class Pm{constructor(e,t=-1,n,i=Nd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=_i(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(WE(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Xi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=kE(l);l=Rm(l,1,u),c=Rm(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Qc(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,m,_){if(d.length!==0){const g=[],p=[];y_(d,g,p,m),g.length!==0&&_.push(new h(f,g,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let _=0;_<f[m].morphTargets.length;_++)d[f[m].morphTargets[_]]=-1;for(const _ in d){const g=[],p=[];for(let x=0;x!==f[m].morphTargets.length;++x){const v=f[m];g.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new Qc(".morphTargetInfluence["+_+"]",g,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(eu,d+".position",f,"pos",i),n(ll,d+".quaternion",f,"rot",i),n(eu,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function GE(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qc;case"vector":case"vector2":case"vector3":case"vector4":return eu;case"color":return b_;case"quaternion":return ll;case"bool":case"boolean":return qo;case"string":return jo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function WE(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=GE(r.type);if(r.times===void 0){const t=[],n=[];y_(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Rr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class XE{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}}const YE=new XE;class cl{constructor(e){this.manager=e!==void 0?e:YE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}cl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ki={};class $E extends Error{constructor(e,t){super(e),this.response=t}}class d2 extends cl{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Rr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ki[e]!==void 0){Ki[e].push({onLoad:t,onProgress:n,onError:i});return}Ki[e]=[],Ki[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ki[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,m=d!==0;let _=0;const g=new ReadableStream({start(p){x();function x(){h.read().then(({done:v,value:y})=>{if(v)p.close();else{_+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let S=0,M=u.length;S<M;S++){const R=u[S];R.onProgress&&R.onProgress(E)}p.enqueue(y),x()}})}}});return new Response(g)}else throw new $E(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Rr.add(e,c);const u=Ki[e];delete Ki[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ki[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ki[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class qE extends cl{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Rr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ja("img");function l(){u(),Rr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class f2 extends cl{constructor(e){super(e)}load(e,t,n,i){const s=new bn,o=new qE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class fu extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class jE extends fu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const mh=new Je,Lm=new U,Im=new U;class Yd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bd,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lm),Im.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Im),t.updateMatrixWorld(),mh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ZE extends Yd{constructor(){super(new Ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=zo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class p2 extends fu{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ZE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Dm=new Je,ua=new U,gh=new U;class JE extends Yd{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ua.setFromMatrixPosition(e.matrixWorld),n.position.copy(ua),gh.copy(n.position),gh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(gh),n.updateMatrixWorld(),i.makeTranslation(-ua.x,-ua.y,-ua.z),Dm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dm)}}class m2 extends fu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new JE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class KE extends Yd{constructor(){super(new kd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rc extends fu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new KE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class g2{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class _2 extends cl{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Rr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Rr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Rr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Rr.add(e,l),s.manager.itemStart(e)}}class S_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Um(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Um();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Um(){return(typeof performance>"u"?Date:performance).now()}class QE{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){zi.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;zi.multiplyQuaternionsFlat(e,o,e,t,e,n),zi.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const $d="\\[\\]\\.:\\/",ew=new RegExp("["+$d+"]","g"),qd="[^"+$d+"]",tw="[^"+$d.replace("\\.","")+"]",nw=/((?:WC+[\/:])*)/.source.replace("WC",qd),iw=/(WCOD+)?/.source.replace("WCOD",tw),rw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qd),sw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qd),ow=new RegExp("^"+nw+iw+rw+sw+"$"),aw=["material","materials","bones","map"];class lw{constructor(e,t,n){const i=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class _t{constructor(e,t,n){this.path=t,this.parsedPath=n||_t.parseTrackName(t),this.node=_t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new _t.Composite(e,t,n):new _t(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ew,"")}static parseTrackName(e){const t=ow.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);aw.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=_t.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_t.Composite=lw;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class cw{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:po,endingEnd:po};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=_y,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case xy:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Nd:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===vy;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===kg){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=mo,i.endingEnd=mo):(e?i.endingStart=this.zeroSlopeAtStart?mo:po:i.endingStart=Gc,t?i.endingEnd=this.zeroSlopeAtEnd?mo:po:i.endingEnd=Gc)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const uw=new Float32Array(1);class hw extends As{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const f=i[h],d=f.name;let m=u[d];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;m=new QE(_t.create(n,d,_),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new M_(new Float32Array(2),new Float32Array(2),1,uw),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Pm.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Nd),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new cw(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Pm.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Id);const T_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Zo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const dw=new kd(-1,1,1,-1,0,1);class fw extends kt{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}}const pw=new fw;class jd{constructor(e){this._mesh=new Be(pw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,dw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class mw extends Zo{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qa.clone(e.uniforms),this.material=new Nn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new jd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Nm extends Zo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class gw extends Zo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class _w{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new te);this._width=n.width,this._height=n.height,t=new vi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ki}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mw(T_),this.copyPass.material.blending=lr,this.clock=new S_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Nm!==void 0&&(o instanceof Nm?n=!0:o instanceof gw&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class vw extends Zo{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const xw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Xo extends Zo{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new Xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new vi(s,o,{type:ki}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new vi(s,o,{type:ki});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new vi(s,o,{type:ki});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=xw;this.highPassUniforms=Qa.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Nn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new te(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=T_;this.copyUniforms=Qa.clone(u.uniforms),this.blendMaterial=new Nn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ja,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Xe,this.oldClearAlpha=1,this.basic=new Ka,this.fsQuad=new jd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new te(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Xo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Xo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Nn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Nn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Xo.BlurDirectionX=new te(1,0);Xo.BlurDirectionY=new te(0,1);const yw={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Mw extends Zo{constructor(){super();const e=yw;this.uniforms=Qa.clone(e.uniforms),this.material=new FE({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new jd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},vt.getTransfer(this._outputColorSpace)===wt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ag?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cg?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rg?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Dd?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Pg&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function E_(r){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32),i=r.r*255|0,s=r.g*255|0,o=r.b*255|0;return n.addColorStop(0,`rgba(${i},${s},${o},1)`),n.addColorStop(.4,`rgba(${i},${s},${o},0.5)`),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,64,64),new $o(e)}function bw({count:r,sprite:e,mobile:t}){const n=new kt,i=new Float32Array(r*3),s=new Float32Array(r);for(let c=0;c<r;c++)i[c*3+0]=(Math.random()-.5)*34,i[c*3+1]=(Math.random()-.5)*28,i[c*3+2]=(Math.random()-.5)*20-4,s[c]=.004+Math.random()*.012;n.setAttribute("position",new nn(i,3));const o=new d_({size:t?.14:.17,map:e,transparent:!0,depthWrite:!1,blending:ja,opacity:.4}),a=new oE(n,o);function l(c,u){const h=n.attributes.position.array;for(let f=0;f<r;f++)h[f*3+1]+=s[f]*(1+Math.abs(c)*4),h[f*3+1]>14&&(h[f*3+1]=-14);n.attributes.position.needsUpdate=!0,a.rotation.y=u.x*.15,a.rotation.x=-u.y*.1,a.position.x=u.x*1.2}return{points:a,update:l}}function bc(r){let e=r>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const ut=(r,e,t)=>e+r()*(t-e),Lt={skin:15242319,jacket:2369068,jacketOrange:16086556,ribbing:1776930,hair:1907482,hairOrange:15561760,hairOrangeDeep:11030543,pants:2303536,shoe:16089630,sole:2760985,tail:16349724,tailGlyph:16765567,iris:8012578,chipFrame:13225171,chipGlow:16747562,mouth:5975834};let sc=null;function w_(){if(sc)return sc;const r=e=>new Wo({envMapIntensity:.6,...e});return sc={skin:r({color:Lt.skin,roughness:.52,envMapIntensity:.75,emissive:3544835,emissiveIntensity:.18}),skinFlat:r({color:Lt.skin,roughness:.52,envMapIntensity:.75,emissive:3544835,emissiveIntensity:.18,flatShading:!0}),jacket:r({color:Lt.jacket,roughness:.74}),jacketFacet:r({color:Lt.jacket,roughness:.74,flatShading:!0}),jacketTrim:r({color:Lt.jacketOrange,roughness:.42,envMapIntensity:1}),jacketTrimFacet:r({color:Lt.jacketOrange,roughness:.42,envMapIntensity:1,flatShading:!0}),ribbing:r({color:Lt.ribbing,roughness:.88,envMapIntensity:.4}),cuffRib:r({color:1513761,roughness:.85,envMapIntensity:.4,flatShading:!0}),pantsFacet:r({color:1316381,roughness:.65,envMapIntensity:.5,flatShading:!0}),hair:r({vertexColors:!0,flatShading:!0,roughness:.62,envMapIntensity:.55}),pants:r({color:Lt.pants,roughness:.8,envMapIntensity:.5}),trimCyan:r({color:664880,emissive:6281471,emissiveIntensity:2.6,roughness:.5}),shoe:r({color:Lt.shoe,roughness:.42,envMapIntensity:.85}),sole:r({color:Lt.sole,roughness:.9,envMapIntensity:.35}),tail:r({color:Lt.tail,roughness:.3,envMapIntensity:1.3,emissive:16747050,emissiveIntensity:.35}),tailGlyph:r({color:3675397,emissive:Lt.tailGlyph,emissiveIntensity:2.4,roughness:.3}),chipFrame:r({color:Lt.chipFrame,metalness:.85,roughness:.35,envMapIntensity:1}),chipCore:r({color:3675397,emissive:Lt.chipGlow,emissiveIntensity:2.4,roughness:.12,envMapIntensity:1.5}),eyeWhite:r({color:16249577,roughness:.25,envMapIntensity:1}),iris:r({color:Lt.iris,roughness:.25}),pupil:r({color:526346,roughness:.2}),brow:r({color:1512207,roughness:.8}),mouth:r({color:Lt.mouth,roughness:.7})},sc}const os=.916,lo=1.4,tu=.3,xo={upperL:{x:.004,y:.715,w:.488,h:.14},upperR:{x:.508,y:.715,w:.488,h:.14},foreL:{x:.004,y:.869,w:.488,h:.127},foreR:{x:.508,y:.869,w:.488,h:.127}},_n=(r,e=1)=>{const t=new Xe(r);return`rgba(${t.r*255|0},${t.g*255|0},${t.b*255|0},${e})`},Ct={panel:_n(16752720),panelDeep:_n(15761464),panelLite:_n(16760960),zipTape:_n(16284208),circuitDim:_n(12745278),backPrint:_n(16752970),nodeGold:_n(16767119),emblemFill:_n(1707786),slit:_n(657932)};function Sw({size:r=2048}={}){const e=document.createElement("canvas");e.width=e.height=r;const t=e.getContext("2d"),n=document.createElement("canvas");n.width=n.height=r;const i=n.getContext("2d"),s=p=>p*r,o=p=>(1-(tu+(1-tu)*((p-os)/(lo-os))))*r,a=p=>p*r/2048,l=1.4,c=(p,x,v)=>{p.beginPath(),x.forEach(([y,E],S)=>S?p.lineTo(s(y),o(E)):p.moveTo(s(y),o(E))),p.closePath(),p.fillStyle=v,p.fill()},u=(p,x,v,y,E)=>{p.fillStyle=E,p.beginPath(),p.ellipse(s(x),o(v),a(y),a(y)*l,0,0,Math.PI*2),p.fill()},h=(p,x,v,y,E,S)=>{p.strokeStyle=y,p.lineWidth=a(v),p.lineCap="round",p.lineJoin="round",p.beginPath(),x.forEach(([M,R],b)=>b?p.lineTo(s(M),o(R)):p.moveTo(s(M),o(R))),p.stroke(),E&&u(p,x[x.length-1][0],x[x.length-1][1],E,S||y)};t.fillStyle=_n(Lt.jacket),t.fillRect(0,0,r,r);const f=t.createLinearGradient(.3*r,0,.7*r,0);f.addColorStop(0,"rgba(255,255,255,0)"),f.addColorStop(.5,"rgba(255,244,230,0.05)"),f.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=f,t.fillRect(0,0,r,r*.7),i.fillStyle="#000",i.fillRect(0,0,r,r);for(const p of[!1,!0]){const x=E=>p?1-E:E;c(t,[[x(.17),1.4],[x(.33),1.4],[x(.345),1.36],[x(.3),1.315],[x(.21),1.325],[x(.17),1.375]].map(([E,S])=>[E,S]),Ct.panel),c(t,[[x(.17),1.4],[x(.3),1.315],[x(.21),1.325],[x(.17),1.375]],Ct.panelDeep),c(t,[[x(.33),1.4],[x(.345),1.36],[x(.305),1.385]],Ct.panelLite),c(t,[[x(.21),1.4],[x(.155),1.385],[x(.1),1.28],[x(.155),1.32],[x(.2),1.37]],Ct.panel),c(t,[[x(.155),1.385],[x(.1),1.28],[x(.14),1.305]],Ct.panelDeep),c(t,[[x(.325),.916],[x(.435),.916],[x(.455),.968],[x(.41),1.01],[x(.35),.975]],Ct.panel),c(t,[[x(.435),.916],[x(.455),.968],[x(.42),.94]],Ct.panelDeep);const v=[x(.395),1.02],y=[x(.428),.965];h(t,[v,y],12,Ct.panel),h(t,[v,y],5,Ct.slit)}const d=[[[.554,1.252],[.588,1.252],[.588,1.288],[.622,1.288]],[[.446,1.252],[.412,1.252],[.412,1.292],[.384,1.292]],[[.554,1.228],[.6,1.228],[.6,1.17],[.64,1.17]],[[.446,1.228],[.4,1.228],[.4,1.162],[.362,1.162]],[[.52,1.19],[.52,1.1],[.548,1.1],[.548,1.028]],[[.48,1.19],[.48,1.082],[.452,1.082],[.452,1.012]],[[.558,1.24],[.612,1.24],[.612,1.205]],[[.442,1.24],[.392,1.24],[.392,1.21]],[[.53,1.295],[.53,1.322],[.556,1.322]],[[.47,1.295],[.47,1.318],[.446,1.318]]];for(const p of[t,i]){const x=p===t?Ct.circuitDim:_n(4860956),v=p===t?Ct.nodeGold:_n(4860956);for(const E of d)h(p,E,6,x,9,v);const y=bc(777);p.save(),p.setLineDash([a(6),a(10)]),p.globalAlpha=p===t?.4:.15;for(let E=0;E<24;E++){const S=ut(y,.36,.64),M=ut(y,.94,1.36);if(Math.abs(S-.5)<.035&&M>1.15&&M<1.33)continue;const R=y()<.5;h(p,[[S,M],R?[S+ut(y,.02,.045),M]:[S,M+ut(y,.02,.04)]],3,x)}p.restore()}{const p=a(42);t.fillStyle=Ct.zipTape,t.fillRect(s(.5)-p/2,o(lo),p,o(os)-o(lo)),t.strokeStyle=_n(2035976),t.lineWidth=a(3),t.beginPath(),t.moveTo(s(.5),o(lo)),t.lineTo(s(.5),o(os)),t.stroke(),t.strokeStyle="rgba(0,0,0,0.3)",t.lineWidth=a(2);for(let x=o(lo)+a(14);x<o(os);x+=a(14))t.beginPath(),t.moveTo(s(.5)-p*.28,x),t.lineTo(s(.5)+p*.28,x),t.stroke()}const m=(p,x,v)=>{const y=o(1.22),E=a(144),S=a(144)*l;p.save(),p.translate(x,0),p.fillStyle=Ct.emblemFill,p.beginPath(),p.ellipse(0,y,E,S,0,0,Math.PI*2),p.fill(),p.strokeStyle=Ct.backPrint,p.lineWidth=a(16),p.beginPath(),p.ellipse(0,y,E,S,0,0,Math.PI*2),p.stroke(),p.lineWidth=a(14),p.lineCap="round";for(const T of[1,-1])for(let P=0;P<4;P++){const N=y-S*.52+P*S*.36;p.beginPath(),p.moveTo(T*E*.14,N),p.bezierCurveTo(T*E*.62,N-S*.16,T*E*.66,N+S*.18,T*E*.2,N+S*.22),p.stroke()}p.lineWidth=a(8);for(let T=0;T<8;T++){const P=T/8*Math.PI*2+Math.PI/8,N=a(60+T%3*25);p.beginPath(),p.moveTo(Math.cos(P)*E*1.05,y+Math.sin(P)*S*1.05),p.lineTo(Math.cos(P)*(E*1.05+N),y+Math.sin(P)*(S*1.05+N*l*.8)),p.stroke(),p.fillStyle=Ct.nodeGold,p.beginPath(),p.ellipse(Math.cos(P)*(E*1.05+N),y+Math.sin(P)*(S*1.05+N*l*.8),a(9),a(9)*l,0,0,Math.PI*2),p.fill(),p.fillStyle=Ct.backPrint}p.restore();const M=x/r,R=[[[M+.012,1.3],[M+.012,1.355],[M+.045,1.355]],[[M-.03,1.295],[M-.03,1.345]],[[M+.05,1.17],[M+.05,1.06],[M+.085,1.06]],[[M-.055,1.16],[M-.055,1.045]],[[M+.02,1.145],[M+.02,.99]],[[M-.018,1.15],[M-.018,1.02],[M-.05,1.02]]];for(const T of R)h(p,T,6,Ct.backPrint,9,Ct.nodeGold);const b=bc(888+x);for(let T=0;T<14;T++)u(p,M+ut(b,-.11,.11),ut(b,.98,1.38),4,Ct.nodeGold)};m(t,0),m(t,r),m(i,0),m(i,r);const _=(p,x)=>{const v=p.x*r,y=p.y*r,E=p.w*r,S=p.h*r,M=a(8);if(t.fillStyle=_n(Lt.jacket),t.fillRect(v-M,y-M,E+M*2,S+M*2),i.fillStyle="#000",i.fillRect(v-M,y-M,E+M*2,S+M*2),x){const P=S*.55;t.fillStyle=Ct.panel,t.beginPath(),t.moveTo(v-M,y-M),t.lineTo(v+E+M,y-M),t.lineTo(v+E+M,y+P*.75),t.lineTo(v+E*.66,y+P),t.lineTo(v+E*.38,y+P*.72),t.lineTo(v+E*.15,y+P),t.lineTo(v-M,y+P*.8),t.closePath(),t.fill(),t.fillStyle=Ct.panelDeep,t.beginPath(),t.moveTo(v+E*.38,y+P*.72),t.lineTo(v+E*.66,y+P),t.lineTo(v+E*.52,y+P*.45),t.closePath(),t.fill(),t.fillStyle=Ct.panelLite,t.beginPath(),t.moveTo(v+E*.15,y+P),t.lineTo(v-M,y+P*.8),t.lineTo(v+E*.1,y+P*.62),t.closePath(),t.fill()}const R=bc(x?4242:5353),b=x?y+S*.6:y+S*.08,T=[];for(let P=0;P<10;P++)T.push([v+E*ut(R,.08,.92),b+(S-(b-y))*ut(R,.05,.9)]);for(const P of[t,i]){P.save(),P.strokeStyle=Ct.circuitDim,P.globalAlpha=P===t?.5:.2,P.lineWidth=a(2);for(let N=0;N<T.length-1;N++)R()<.75&&(P.beginPath(),P.moveTo(T[N][0],T[N][1]),P.lineTo(T[N+1][0],T[N+1][1]),P.stroke());P.fillStyle=Ct.circuitDim;for(const[N,W]of T)P.beginPath(),P.arc(N,W,a(5),0,Math.PI*2),P.fill();P.restore()}x||(t.fillStyle=Ct.panelDeep,t.beginPath(),t.moveTo(v+E,y),t.lineTo(v+E-E*.16,y),t.lineTo(v+E,y+S*.3),t.closePath(),t.fill())};_(xo.upperL,!0),_(xo.upperR,!0),_(xo.foreL,!1),_(xo.foreR,!1);const g=p=>{const x=new $o(p);return x.colorSpace=Gt,x.anisotropy=8,x.wrapS=zc,x};return{map:g(e),emissiveMap:g(n)}}function Tw(r=["ORANJE","STRIDE"]){const e=document.createElement("canvas");e.width=512,e.height=256;const t=e.getContext("2d");t.clearRect(0,0,512,256),t.textAlign="center",t.textBaseline="middle",t.font='800 88px "Arial Black", Arial, sans-serif',t.lineJoin="round";const n=[_n(16020256),_n(15920614)];r.forEach((s,o)=>{const a=128+(o-(r.length-1)/2)*96;t.strokeStyle="rgba(0,0,0,0.35)",t.lineWidth=3,t.strokeText(s,256,a),t.fillStyle=n[o]||n[n.length-1],t.fillText(s,256,a)});const i=new $o(e);return i.colorSpace=Gt,i.anisotropy=4,i}function Ew(){const r=document.createElement("canvas");r.width=r.height=128;const e=r.getContext("2d"),t=e.createRadialGradient(64,64,6,64,64,62);t.addColorStop(0,"#ffd37a"),t.addColorStop(1,"#f5820f"),e.fillStyle=t,e.fillRect(0,0,128,128),e.strokeStyle="rgba(255,235,190,0.9)",e.lineWidth=3,e.beginPath(),e.arc(64,64,30,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(64,64,8,0,Math.PI*2),e.stroke();const n=new $o(r);return n.colorSpace=Gt,n}function ww(){const r=document.createElement("canvas");r.width=r.height=256;const e=r.getContext("2d"),t=e.createRadialGradient(128,128,8,128,128,128);return t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(.55,"rgba(0,0,0,0.4)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new $o(r)}function Aw(r){return E_(new Xe(r))}function Om(){return{enabled:!1,three:null,setActive(){},setScrollVelocity(){},setPointer(){}}}function Cw({reduced:r}){const e=document.getElementById("gl-canvas");if(r||!e||!window.WebGLRenderingContext)return Om();const t=matchMedia("(max-width: 900px)").matches,n=Math.min(devicePixelRatio||1,t?1.5:2);let i;try{i=new a_({canvas:e,alpha:!0,antialias:!t})}catch{return Om()}i.setPixelRatio(n),i.setSize(innerWidth,innerHeight),i.toneMapping=Dd,i.toneMappingExposure=1.15;const s=new JT,o=new Ln(55,innerWidth/innerHeight,.1,100);o.position.set(0,0,12),bg(async()=>{const{RoomEnvironment:N}=await import("./RoomEnvironment-CGyzLGtb.js");return{RoomEnvironment:N}},[],import.meta.url).then(({RoomEnvironment:N})=>{const W=new Kh(i);s.environment=W.fromScene(new N,.04).texture,W.dispose()}).catch(()=>{}),s.add(new jE(14674162,3817290,.65));const a=new rc(16767408,1.25);a.position.set(3,7,6),s.add(a);const l=new rc(6262742,1.1);l.position.set(-4,3,-6),s.add(l);const c=new rc(16742954,.85);c.position.set(4,2.5,-5),s.add(c);const u=new rc(16774378,.85);u.position.set(0,2,12),s.add(u);let h=!1;try{const N=i.getContext(),W=N.getExtension("WEBGL_debug_renderer_info"),D=W?N.getParameter(W.UNMASKED_RENDERER_WEBGL):"";h=/swiftshader|llvmpipe|software|basic render/i.test(D)}catch{}let f=null;if(!t&&!h){const N=new vi(innerWidth*n,innerHeight*n,{type:ki,samples:i.capabilities.isWebGL2?4:0});f=new _w(i,N),f.addPass(new vw(s,o));const W=new Xo(new te(innerWidth,innerHeight),.25,.35,1.25);W.blendMaterial.blending=Tg,W.blendMaterial.blendEquation=Mr,W.blendMaterial.blendSrc=yc,W.blendMaterial.blendDst=yc,W.blendMaterial.blendSrcAlpha=Eg,W.blendMaterial.blendDstAlpha=yc,f.addPass(W),f.addPass(new Mw)}const d=E_(new Xe("#ff6a00")),m=t?Math.round(1400*.3):1400,_=bw({count:m,sprite:d,mobile:t});s.add(_.points);const g=new Be(new Wd(1.5,48),new Ka({map:ww(),transparent:!0,depthWrite:!1,opacity:.55}));g.rotation.x=-Math.PI/2,g.position.y=.001,s.add(g);const p=new Be(new Xd(1.1,1.14,64),new Ka({color:16738816,transparent:!0,opacity:.15,depthWrite:!1,side:Ui}));p.rotation.x=-Math.PI/2,p.position.y=.002,s.add(p);let x="hero",v=0;const y=new te(0,0),E=new te(0,0),S=[],M=[],R=new S_,b={enabled:!0,three:{scene:s,camera:o,addTick:N=>S.push(N),registerMascot:N=>{M.push(N),N.setActive(N.sectionId==="*"||N.sectionId===x),N.root&&!N.root.parent&&s.add(N.root)}},setActive(N){x=N;for(const W of M)W.setActive(W.sectionId==="*"||W.sectionId===N)},setScrollVelocity(N){v=N},setPointer(N,W){y.set(N,W)}};i.info.autoReset=!1;function T(){i.info.reset();const N=Math.min(R.getDelta(),.05);E.lerp(y,.05),_.update(v,E);for(const W of M)W.active&&W.update({dt:N,pointer:E,scrollVel:v,camera:o});for(const W of S)W({pointer:E,scrollVel:v});f?f.render():i.render(s,o),P.tris=i.info.render.triangles,P.calls=i.info.render.calls,requestAnimationFrame(T)}const P=window.__marutStats={tris:0,calls:0};return requestAnimationFrame(T),addEventListener("resize",()=>{o.aspect=innerWidth/innerHeight,o.updateProjectionMatrix(),i.setSize(innerWidth,innerHeight),f?.setSize(innerWidth,innerHeight)},{passive:!0}),b}const Xn={hipsY:.92,spineDY:.12,chestDY:.2,neckDY:.14,headDY:.08,clavDX:.065,clavDY:.065,shoulderDX:.19,shoulderDY:-.065,hipDX:.1,hipDY:-.02,tailDY:-.12,tailDZ:-.11};function Rw(){const r={},e=(a,l,c,u,h)=>{const f=new ei;return f.name=a,f.position.set(c,u,h),l.add(f),r[a]=f,f},t=new ei;t.name="marut",r.root=t;const n=e("hips",t,0,Xn.hipsY,0),i=e("spine",n,0,Xn.spineDY,0),s=e("chest",i,0,Xn.chestDY,0),o=e("neck",s,0,Xn.neckDY,0);e("head",o,0,Xn.headDY,0);for(const a of["L","R"]){const l=a==="L"?1:-1,c=e(`clav${a}`,s,l*Xn.clavDX,Xn.clavDY,0),u=e(`arm${a}_up`,c,l*Xn.shoulderDX,Xn.shoulderDY,0),h=e(`arm${a}_lo`,u,0,-.235,0);e(`hand${a}`,h,0,-.235,0);const f=e(`leg${a}_up`,n,l*Xn.hipDX,Xn.hipDY,0),d=e(`leg${a}_lo`,f,0,-.38,0);e(`foot${a}`,d,0,-.4,0)}return e("tailRoot",n,0,Xn.tailDY,Xn.tailDZ),{root:t,joints:r}}function Es(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new kt;let c=0;for(let u=0;u<r.length;++u){const h=r[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0;const h=[];for(let f=0;f<r.length;++f){const d=r[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=r[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=Fm(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);const m=Fm(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function Fm(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){const u=r[c];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.array.length}const o=new e(s);let a=0;for(let c=0;c<r.length;++c)o.set(r[c].array,a),a+=r[c].array.length;const l=new nn(o,t,n);return i!==void 0&&(l.gpuType=i),l}function Bm(r,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=r.getIndex(),i=r.getAttribute("position"),s=n?n.count:i.count;let o=0;const a=Object.keys(r.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let x=0,v=a.length;x<v;x++){const y=a[x],E=r.attributes[y];l[y]=new nn(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);const S=r.morphAttributes[y];S&&(c[y]=new nn(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized))}const d=e*.5,m=Math.log10(1/e),_=Math.pow(10,m),g=d*_;for(let x=0;x<s;x++){const v=n?n.getX(x):x;let y="";for(let E=0,S=a.length;E<S;E++){const M=a[E],R=r.getAttribute(M),b=R.itemSize;for(let T=0;T<b;T++)y+=`${~~(R[h[T]](v)*_+g)},`}if(y in t)u.push(t[y]);else{for(let E=0,S=a.length;E<S;E++){const M=a[E],R=r.getAttribute(M),b=r.morphAttributes[M],T=R.itemSize,P=l[M],N=c[M];for(let W=0;W<T;W++){const D=h[W],B=f[W];if(P[B](o,R[D](v)),b)for(let I=0,F=b.length;I<F;I++)N[I][B](o,b[I][D](v))}}t[y]=o,u.push(o),o++}}const p=r.clone();for(const x in r.attributes){const v=l[x];if(p.setAttribute(x,new nn(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)),x in c)for(let y=0;y<c[x].length;y++){const E=c[x][y];p.morphAttributes[x][y]=new nn(E.array.slice(0,o*E.itemSize),E.itemSize,E.normalized)}}return p.setIndex(u),p}function v2(r,e){if(e===yy)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===yp||e===My){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===yp)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}const A_=.17,Pw=[[.001,-.191],[.052,-.186],[.078,-.162],[.095,-.118],[.108,-.075],[.111,-.052],[.11,-.02],[.105,.005],[.088,.02],[.05,.03],[.001,.032]],Lw=(r,e,t)=>{const n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)};function Iw(r){const e=r==="low"?512:1024,t=r==="low"?448:896,n=document.createElement("canvas");n.width=e,n.height=t;const i=n.getContext("2d"),s=h=>(h+.115)/.23*e,o=h=>(.015-h)/.2*t,a=h=>h/.23*e,l="#"+Lt.skin.toString(16).padStart(6,"0"),c=h=>{i.beginPath(),i.moveTo(s(h*.08),o(-.058)),i.quadraticCurveTo(s(h*.045),o(-.031),s(h*.015),o(-.066)),i.quadraticCurveTo(s(h*.045),o(-.091),s(h*.08),o(-.058)),i.closePath()};function u(h=0){i.clearRect(0,0,e,t);for(const d of[1,-1]){let m=i.createRadialGradient(s(d*.06),o(-.105),0,s(d*.06),o(-.105),a(.05));m.addColorStop(0,"rgba(242,149,63,0.18)"),m.addColorStop(1,"rgba(242,149,63,0)"),i.fillStyle=m,i.fillRect(s(d*.06)-a(.05),o(-.105)-a(.05),a(.1),a(.1)),i.fillStyle="rgba(176,95,40,0.25)",i.beginPath(),i.ellipse(s(d*.055),o(-.053),a(.04),a(.01),0,0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,179,92,0.10)",i.beginPath(),i.moveTo(s(d*.075),o(-.062)),i.lineTo(s(d*.098),o(-.075)),i.lineTo(s(d*.062),o(-.095)),i.closePath(),i.fill(),i.fillStyle="rgba(192,99,34,0.12)",i.beginPath(),i.moveTo(s(d*.06),o(-.1)),i.lineTo(s(d*.095),o(-.085)),i.lineTo(s(d*.075),o(-.135)),i.lineTo(s(d*.045),o(-.13)),i.closePath(),i.fill()}let f=i.createRadialGradient(s(0),o(-.01),0,s(0),o(-.01),a(.06));f.addColorStop(0,"rgba(255,196,104,0.10)"),f.addColorStop(1,"rgba(255,196,104,0)"),i.fillStyle=f,i.fillRect(s(0)-a(.06),o(-.01)-a(.06),a(.12),a(.12)),i.fillStyle="rgba(164,74,18,0.35)",i.beginPath(),i.ellipse(s(0),o(-.121),a(.016),a(.005),0,0,Math.PI*2),i.fill(),i.fillStyle="#17100b";for(const d of[1,-1]){const m=[[.01,-.054],[.012,-.038],[.058,-.026],[.11,-.04],[.058,-.048]];i.beginPath(),i.moveTo(s(d*m[0][0]),o(m[0][1]));for(let _=1;_<m.length;_++)i.lineTo(s(d*m[_][0]),o(m[_][1]));i.closePath(),i.fill()}for(const d of[1,-1]){i.save(),c(d),i.clip(),i.fillStyle="#f2ebe0",i.fillRect(s(d*.08)-a(.09),o(-.04),a(.18),a(.058));const m=s(d*.045),_=o(-.062),g=i.createRadialGradient(m,_,0,m,_,a(.021));if(g.addColorStop(0,"#a06438"),g.addColorStop(.6,"#7a4a2e"),g.addColorStop(1,"#3a1b0c"),i.fillStyle=g,i.beginPath(),i.arc(m,_,a(.021),0,Math.PI*2),i.fill(),i.fillStyle="#140a05",i.beginPath(),i.arc(m,_,a(.0075),0,Math.PI*2),i.fill(),i.fillStyle="#ffffff",i.beginPath(),i.arc(s(d*.045-.007),o(-.053),a(.004),0,Math.PI*2),i.fill(),h>.01){const v=-.043+h*-.038000000000000006;i.fillStyle=l,i.fillRect(s(d*.08)-a(.09),o(-.043)-2,a(.18),o(v)-o(-.043)+2)}i.restore(),i.strokeStyle="#241108",i.lineWidth=a(.009),i.lineCap="round",i.beginPath(),i.moveTo(s(d*.015),o(-.066)),i.quadraticCurveTo(s(d*.045),o(-.031),s(d*.08),o(-.058)),i.lineTo(s(d*.089),o(-.054)),i.stroke(),i.strokeStyle="#b4622a",i.lineWidth=a(.002),i.beginPath(),i.moveTo(s(d*.018),o(-.068)),i.quadraticCurveTo(s(d*.045),o(-.089),s(d*.077),o(-.061)),i.stroke(),h>=.95&&(i.strokeStyle="#241108",i.lineWidth=a(.004),i.beginPath(),i.moveTo(s(d*.015),o(-.066)),i.quadraticCurveTo(s(d*.045),o(-.084),s(d*.08),o(-.058)),i.stroke())}i.fillStyle="rgba(140,60,15,0.5)";for(const d of[1,-1])i.beginPath(),i.ellipse(s(d*.011),o(-.118),a(.0045),a(.003),0,0,Math.PI*2),i.fill();i.strokeStyle="#5e2610",i.lineWidth=a(.006),i.lineCap="round",i.beginPath(),i.moveTo(s(-.046),o(-.146)),i.bezierCurveTo(s(-.018),o(-.158),s(.018),o(-.158),s(.046),o(-.142)),i.lineTo(s(.054),o(-.133)),i.moveTo(s(-.046),o(-.146)),i.lineTo(s(-.054),o(-.139)),i.stroke(),i.fillStyle="rgba(164,78,19,0.40)",i.beginPath(),i.ellipse(s(0),o(-.162),a(.02),a(.006),0,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(200,111,46,0.30)",i.lineWidth=a(.002),i.beginPath(),i.moveTo(s(0),o(-.123)),i.lineTo(s(0),o(-.142)),i.stroke()}return{canvas:n,draw:u}}function Dw({joints:r,mats:e,quality:t}){const n=r.head,i=new ei;i.name="skullFrame",i.position.y=A_,n.add(i);const s=new Wo({color:12605976,roughness:.55,envMapIntensity:.6}),o=t==="low"?10:28,a=Pw.map(([B,I])=>new te(B,I)),l=new Cs(a,o);l.scale(1,1,.95);const c=l.attributes.position;for(let B=0;B<c.count;B++){let I=c.getX(B),F=c.getY(B),H=c.getZ(B);if(H>.055&&F>-.19&&F<.01){const X=1-Lw(0,.09,Math.abs(I));H+=X*(.055+(H-.055)*.55-H)}if(F<-.1&&H>0){const X=Math.min(1,(-.1-F)/.09);I*=1-.22*X}F<-.15&&H>.03&&(H+=Math.min(.014,(-.15-F)*.35)),F>-.045&&F<-.022&&H>.06&&(H+=.006),F>-.075&&F<-.048&&H>.07&&(H-=.004),c.setXYZ(B,I,F,H)}l.computeVertexNormals();const u=[];for(const B of[1,-1]){const I=new Gi(.032,t==="low"?8:14,t==="low"?6:10);I.scale(.45,1.02,.75);const F=new Je().makeRotationY(-B*.25).setPosition(B*.114,-.075,-.042);I.applyMatrix4(F),u.push(I);const H=new Be(new Gi(.018,10,8),s);H.scale.set(.3,.8,.6),H.position.set(B*.12,-.075,-.042),H.rotation.y=-B*.25,i.add(H)}const h=Es([l,...u]);i.add(new Be(h,e.skin));const f=Iw(t);f.draw(0);const d=new $o(f.canvas);d.colorSpace=Gt,d.anisotropy=4;const m=l.toNonIndexed(),_=m.attributes.position,g=m.attributes.normal,p=[],x=[],v=[],y=[new U,new U,new U],E=new U,S=new U,M=new U;for(let B=0;B<_.count;B+=3){for(let I=0;I<3;I++)y[I].fromBufferAttribute(_,B+I);if(!(y[0].z<=.015||y[1].z<=.015||y[2].z<=.015)&&(M.crossVectors(E.subVectors(y[1],y[0]),S.subVectors(y[2],y[0])).normalize(),!(M.z<=.2)))for(let I=0;I<3;I++){const F=g.getX(B+I),H=g.getY(B+I),X=g.getZ(B+I);p.push(y[I].x+F*.0015,y[I].y+H*.0015,y[I].z+X*.0015),x.push(F,H,X),v.push((y[I].x+.115)/.23,(y[I].y+.185)/.2)}}const R=new kt;R.setAttribute("position",new ot(p,3)),R.setAttribute("normal",new ot(x,3)),R.setAttribute("uv",new ot(v,2));const b=new Be(R,new Wo({map:d,transparent:!0,roughness:.5,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,depthWrite:!1}));b.renderOrder=1,i.add(b);let T=0;r.head.userData.setBlink=B=>{Math.abs(B-T)<.05&&B!==0&&B!==1||(T=B,f.draw(B),d.needsUpdate=!0)};for(const B of[1,-1]){const I=new ei;I.name=B===1?"eyeL":"eyeR",I.position.set(B*.045,-.062,.09),i.add(I),r[I.name]=I}const P={root:[0,-.064,.096],bL:[-.008,-.085,.102],bR:[.008,-.085,.102],tip:[0,-.103,.116],aL:[-.019,-.112,.098],aR:[.019,-.112,.098],under:[0,-.119,.1]},N=[P.root,P.bL,P.bR,P.bL,P.tip,P.bR,P.bL,P.aL,P.tip,P.bR,P.tip,P.aR,P.aL,P.under,P.tip,P.aR,P.tip,P.under],W=new kt;W.setAttribute("position",new ot(N.flat(),3)),W.computeVertexNormals(),i.add(new Be(W,e.skinFlat));const D=new Be(new yi(.04,.052,.13,t==="low"?10:18),e.skin);D.position.y=.045,r.neck.add(D)}const Kt=new U(0,-.048,-.008),Ba=.118,xs=new U(1.02,.72,.92),Uw=Kt.y+Ba*xs.y,Nw=new U(0,Uw,-.038),eo=[[0,.014],[30,.036],[75,-.035],[90,-.022],[130,-.095],[180,-.13]];function km(r){const e=Math.min(180,Math.abs(r)*(180/Math.PI));for(let t=1;t<eo.length;t++)if(e<=eo[t][0]){const[n,i]=eo[t-1],[s,o]=eo[t];return i+(e-n)/(s-n)*(o-i)}return eo[eo.length-1][1]}function to(r,e){const t=Math.max(-.95,Math.min(.95,(e-Kt.y)/(Ba*xs.y))),n=Math.sqrt(1-t*t);return new U(Kt.x+n*Math.sin(r)*Ba*xs.x,e,Kt.z+n*Math.cos(r)*Ba*xs.z)}function Ow({joints:r,mats:e,quality:t}){const n=bc(20261),i=t==="low",s=S=>i?Math.ceil(S*.6):S,o=[],a=new Xe(Lt.hair),l=new Xe(Lt.hairOrange),c=new Xe(Lt.hairOrangeDeep),u=new Xe,h=(S,M)=>{const R=S.attributes.position.count,b=new Float32Array(R*3);for(let T=0;T<R;T++)b[T*3]=M.r,b[T*3+1]=M.g,b[T*3+2]=M.b;S.setAttribute("color",new nn(b,3))},f=S=>(n()<S?(u.copy(n()<.3?c:l),u.offsetHSL(ut(n,-.008,.008),0,ut(n,-.02,.02))):(u.copy(a),u.offsetHSL(0,0,ut(n,-.012,.018))),u),d=new U,m=new U,_=new U;function g(S,M,R,b,T){const P=new Kc(b,R,4,1,!0);P.translate(0,R/2,0),P.scale(1,1,.42),h(P,T),d.copy(M).normalize();const N=S.clone().sub(Kt).normalize();m.crossVectors(N,d),m.lengthSq()<1e-6&&m.set(1,0,0).cross(d),m.normalize(),_.crossVectors(d,m).normalize();const W=new Je().makeBasis(_,d,m),D=S.clone().addScaledVector(N,-.012);W.setPosition(D),P.applyMatrix4(W),o.push(P)}const p=S=>S+ut(n,-.08,.08),x=new Gi(Ba,i?16:32,i?8:16,0,Math.PI*2,0,Math.PI*.8);x.scale(xs.x,xs.y,xs.z),x.translate(Kt.x,Kt.y,Kt.z);{const S=x.attributes.position;for(let M=0;M<S.count;M++){const R=Math.atan2(S.getX(M)-Kt.x,S.getZ(M)-Kt.z),b=km(R);S.getY(M)<b&&(S.setY(M,b),S.setX(M,Kt.x+(S.getX(M)-Kt.x)*.94),S.setZ(M,Kt.z+(S.getZ(M)-Kt.z)*.94))}x.computeVertexNormals()}h(x,a),o.push(x);{const S=s(8);for(let M=0;M<S;M++){const R=p(((M+.5)/S-.5)*2*(50*Math.PI/180)),b=to(R,km(R)+ut(n,.008,.03)),P=b.clone().sub(Kt).normalize().multiplyScalar(.25).add(new U(.5*Math.sin(R),1,.2)),N=Math.abs(R)<.3;g(b,P,ut(n,.11,.17),ut(n,.045,.065),N?l:f(.85))}}for(const[S,M]of[[.03,s(6)],[.012,s(6)]])for(let R=0;R<M;R++){const b=p(R/M*Math.PI*2),T=to(b,S+ut(n,-.006,.006)),P=T.clone().sub(Nw).setY(0);P.lengthSq()<1e-6&&P.set(0,0,.1),P.normalize();const W=T.clone().sub(Kt).normalize().multiplyScalar(.35).addScaledVector(P,.35).add(new U(0,.85,-.55));g(T,W,ut(n,.15,.22),ut(n,.05,.075),f(.4))}for(const S of[1,-1]){const M=s(5);for(let R=0;R<M;R++){const b=S*p((50+R/(M-1)*75)*Math.PI/180),T=to(b,ut(n,-.03,.01)),N=T.clone().sub(Kt).normalize().multiplyScalar(.4).add(new U(S*.25,.45,-.9));g(T,N,ut(n,.08,.13),ut(n,.038,.055),f(.25))}}{const S=s(7);for(let M=0;M<S;M++){const R=Math.PI+p(((M+.5)/S-.5)*2*(55*Math.PI/180)),b=to(R,ut(n,-.02,.02)),P=b.clone().sub(Kt).normalize().multiplyScalar(.3).add(new U(0,.45,-1));g(b,P,ut(n,.15,.22),ut(n,.055,.078),f(.08))}}{const S=s(3);for(let M=0;M<S;M++){const R=Math.PI+ut(n,-.35,.35),b=to(R,ut(n,.026,.036)),T=new U(ut(n,-.12,.12),.75,-.65);u.copy(a).offsetHSL(0,0,ut(n,-.012,.018)),g(b,T,ut(n,.18,.23),ut(n,.06,.082),u)}}{const S=s(6);for(let M=0;M<S;M++){const R=Math.PI+p(((M+.5)/S-.5)*2*(40*Math.PI/180)),b=to(R,ut(n,-.115,-.075)),P=b.clone().sub(Kt).normalize().multiplyScalar(.2).add(new U(0,-.1,-.95));u.copy(a).offsetHSL(0,0,ut(n,-.012,.018)),g(b,P,ut(n,.05,.08),ut(n,.02,.03),u)}}for(const S of[1,-1]){const M=new Kc(.016,.075,4,1,!0);M.translate(0,.075/2,0),M.scale(.55,1,1),h(M,a);const R=new Je().makeRotationFromEuler(new Ss(-.13,0,Math.PI)).setPosition(S*.104,-.03,.03);M.applyMatrix4(R),o.push(M)}const v=Es(o,!1);o.forEach(S=>S.dispose());const y=new ei;y.position.y=A_;const E=new Be(v,e.hair);E.name="hair",y.add(E),r.head.add(y)}const Sc=.59,C_=1.14,R_=[[.19,.916],[.178,.965],[.17,1.006],[.174,1.08],[.179,C_]],P_=[[.179,C_],[.192,1.161],[.213,1.24],[.222,1.3],[.21,1.335],[.148,1.385],[.092,1.4]];function zm(r,e,t){const n=r.map(([a,l])=>new te(a,l+e)),i=new Cs(n,t,Math.PI);i.scale(1,1,Sc);const s=i.attributes.position,o=i.attributes.uv;for(let a=0;a<o.count;a++){const l=s.getY(a)-e;o.setY(a,tu+(1-tu)*((l-os)/(lo-os)))}return i}function Fw(r){const e=[...R_,...P_];for(let t=0;t<e.length-1;t++){const[n,i]=e[t],[s,o]=e[t+1];if(r>=i&&r<=o)return n+(r-i)/(o-i)*(s-n)}return e[e.length-1][0]}function Bw({joints:r,mats:e,quality:t}){const n=t==="low"?12:32,i=r.spine,s=r.chest,o=e.jacketMapped||e.jacket;i.add(new Be(zm(R_,-1.04,n),o)),s.add(new Be(zm(P_,-1.24,n),o));{const x=[],v=new yi(.185,.172,.06,n,1,!0);v.scale(1,1,Sc),x.push(v);const y=t==="low"?18:30;for(let M=0;M<y;M++){const R=M/y*Math.PI*2,b=Math.cos(R)*.179,T=Math.sin(R)*.179*Sc,P=new xi(.007,.048,.005),N=new Je().makeRotationY(-R+Math.PI/2).setPosition(b,0,T);P.applyMatrix4(N),x.push(P)}const E=Es(x);x.forEach(M=>M.dispose());const S=new Be(E,e.ribbing);S.position.y=.886-1.04,i.add(S)}const a=new Be(new Gi(.115,t==="low"?12:18,t==="low"?8:12),e.pants);a.scale.set(1.22,.6,.82),a.position.y=-.1,r.hips.add(a);const l=[new te(.092,.16),new te(.096,.18),new te(.1,.2)],c=new Be(new Cs(l,n,Math.PI),e.jacket);c.scale.z=.78,s.add(c);const u=new Be(new Go(.098,.005,8,n,3.5),e.jacketTrim);u.rotation.x=Math.PI/2,u.rotation.z=Math.PI/2-3.5/2,u.scale.y=.78,u.position.y=.2,s.add(u);for(const x of[1,-1]){const v=new Be(new Ho(.0045,.034,3,6),e.jacketTrim);v.position.set(x*.021,.178,.092*.78),s.add(v)}const h=new Be(new xi(.016,.032,.006),e.chipFrame);h.position.set(0,.135,.088*.78+.01),h.rotation.x=.12,s.add(h);const f=new Be(new Go(.01,.003,5,10),e.chipFrame);f.position.set(0,.158,.088*.78+.012),s.add(f);const d=Fw(1.24)*Sc,m=new ei;m.name="chip",m.position.set(0,0,d-.004);const _=kw(.105,.105,.024),g=new Be(new Cr(_,{depth:.012,bevelEnabled:!0,bevelSize:.005,bevelThickness:.005,bevelSegments:2}),e.chipFrame);if(m.add(g),!e.chipCoreMapped){const x=Ew();e.chipCoreMapped=e.chipCore.clone(),e.chipCoreMapped.color.setHex(16777215),e.chipCoreMapped.map=x,e.chipCoreMapped.emissive=new Xe(16777215),e.chipCoreMapped.emissiveIntensity=1.4,e.chipCoreMapped.emissiveMap=x}const p=new Be(new ol(.062,.062),e.chipCoreMapped);p.position.z=.019,m.add(p);for(const[x,v]of[[-.062,0],[.062,0],[0,-.062],[0,.062]]){const y=new Be(new xi(x===0?.008:.022,x===0?.022:.008,.006),e.chipFrame);y.position.set(x,v,.004),m.add(y)}s.add(m),r.chip=m}function kw(r,e,t){const n=new al,i=-r/2,s=-e/2;return n.moveTo(i+t,s),n.lineTo(i+r-t,s),n.quadraticCurveTo(i+r,s,i+r,s+t),n.lineTo(i+r,s+e-t),n.quadraticCurveTo(i+r,s+e,i+r-t,s+e),n.lineTo(i+t,s+e),n.quadraticCurveTo(i,s+e,i,s+e-t),n.lineTo(i,s+t),n.quadraticCurveTo(i,s,i+t,s),n}const Vm=10*Math.PI/180;function Hm(r,e,t){const n=r.map(([o,a])=>new te(o,a)),i=new Cs(n,e),s=i.attributes.uv;for(let o=0;o<s.count;o++){const a=s.getX(o),l=s.getY(o);s.setXY(o,t.x+a*t.w,1-(t.y+(1-l)*t.h))}return i}function L_(r,e,t,n,i=.0025){const s=new yi(r,e,t,n*2,1,!0),o=s.attributes.position;for(let a=0;a<o.count;a++){const l=o.getX(a),c=o.getZ(a),u=Math.atan2(c,l),f=Math.round(u/(Math.PI*2)*n*2)%2===0?i:-i,d=Math.hypot(l,c);d>1e-6&&o.setXYZ(a,l+l/d*f,o.getY(a),c+c/d*f)}return s.computeVertexNormals(),s}function zw(r){const e=[],t=new xi(.095,.09,.04,2,2,1),n=t.attributes.position;for(let c=0;c<n.count;c++){const u=n.getX(c),h=n.getY(c);Math.abs(u)>.04&&Math.abs(h)>.038&&(n.setX(c,u*.88),n.setY(c,h*.9))}t.computeVertexNormals(),t.translate(0,-.045,0),e.push(t);const i=new Gi(.02,10,8);i.scale(1.9,.7,1),i.translate(0,-.088,.006),e.push(i);const s=[{x:-.03,len:.038,droop:.46},{x:-.01,len:.044,droop:.44},{x:.01,len:.04,droop:.46},{x:.03,len:.029,droop:.52}];for(const c of s){const u=new Ho(.016,c.len,3,8);u.translate(0,-c.len/2-.014,0);const h=new Je().makeRotationFromEuler(new Ss(-c.droop,0,r*(c.x/.03)*-.025)).setPosition(r*c.x,-.088,.006);u.applyMatrix4(h),e.push(u)}const o=new Ho(.016,.04,3,8);o.translate(0,-.035,0);const a=new Je().makeRotationFromEuler(new Ss(.5,0,r*.55)).setPosition(r*.04,-.025,.018);o.applyMatrix4(a),e.push(o);const l=Es(e);return e.forEach(c=>c.dispose()),l}function Vw({joints:r,mats:e,quality:t}){const n=t==="low"?8:16,i=e.jacketMapped||e.jacket;for(const s of["L","R"]){const o=s==="L"?1:-1,a=r[`arm${s}_up`],l=r[`arm${s}_lo`],c=r[`hand${s}`],u=xo[`upper${s}`],h=xo[`fore${s}`],f=new Gi(.08,n,t==="low"?8:12);f.scale(1,1,.88);{const x=f.attributes.uv;for(let v=0;v<x.count;v++)x.setXY(v,u.x+x.getX(v)*u.w,1-(u.y+x.getY(v)*u.h*.55))}f.translate(o*.004,.018,0),a.add(new Be(f,i));const d=Hm([[.082,0],[.074,-.12],[.064,-.235]],n,u);a.add(new Be(d,i));const m=Hm([[.066,0],[.061,-.1],[.056,-.175]],n,h);l.add(new Be(m,i));const _=new Be(L_(.05,.047,.05,t==="low"?10:18),e.cuffRib);_.position.y=-.198,l.add(_);const g=new Be(new yi(.026,.026,.024,8),e.skin);g.position.y=-.228,l.add(g);const p=new Be(new Ho(.005,.055,3,6),e.trimCyan);p.position.set(o*.079,-.055,.012),p.rotation.z=o*.35,a.add(p),c.add(new Be(zw(o),e.skin))}}function Hw({joints:r,mats:e,quality:t}){const n=t==="low"?8:12,i=t==="low"?10:18,s=new Be(new yi(.15,.146,.05,t==="low"?16:24),e.pants);s.scale.z=.62,s.position.y=-.075,r.hips.add(s);const o=new Be(new xi(.022,.012,.004),e.pantsFacet);o.position.set(0,-.075,.15*.62+.002),r.hips.add(o);const a=(l,c=.006)=>{const u=l.attributes.position;for(let h=0;h<u.count;h++){const f=u.getX(h),d=u.getZ(h),m=Math.atan2(f,d);Math.abs(m)<.28&&u.setZ(h,d+c)}return l.computeVertexNormals(),l};for(const l of["L","R"]){const c=l==="L"?1:-1,u=r[`leg${l}_up`],h=r[`leg${l}_lo`],f=a(new yi(.086,.073,.38,n,3));f.translate(0,-.19,0),u.add(new Be(f,e.pantsFacet));const d=[],m=new Gi(.069,n,t==="low"?6:8);m.scale(1,.9,1.05),m.translate(0,.005,.006),d.push(m);const _=a(new yi(.067,.048,.36,n,3));{const S=_.attributes.position;for(let M=0;M<S.count;M++){const R=S.getY(M),b=S.getZ(M);b<-.03&&R>-.06&&R<.08&&S.setZ(M,b-.007)}_.computeVertexNormals()}_.translate(0,-.175,0),d.push(_);const g=Es(d);d.forEach(S=>S.dispose()),h.add(new Be(g,e.pantsFacet));const p=new Be(L_(.048,.046,.05,i,.0015),e.cuffRib);p.position.y=-.365,h.add(p);const x=new Po(new Gd(new U(c*.05,-.06,.095),new U(c*.12,-.065,.075),new U(c*.14,-.11,.03)),8,.0032,6);r.hips.add(new Be(x,e.trimCyan));const v=(S,M)=>new U(c*(S+.004)*Math.cos(Vm),M,-(S+.004)*Math.sin(Vm)),y=new Po(new Zc([v(.084,-.05),v(.078,-.21),v(.072,-.385)]),10,.004,6);u.add(new Be(y,e.trimCyan));const E=new Po(new Zc([v(.068,.005),v(.062,-.17),v(.05,-.35)]),10,.004,6);h.add(new Be(E,e.trimCyan));for(const[S,M,R]of[[u,-.385,.072],[h,.005,.068]]){const b=new Be(new Gi(.004,6,5),e.trimCyan);b.position.copy(v(R,M)),S.add(b)}}}const Gm=-.12;function Wm(r=1,e=1){const t=new al;return t.moveTo(-.046*r,-.096*e),t.quadraticCurveTo(-.05*r,-.105*e,0,-.105*e),t.quadraticCurveTo(.05*r,-.105*e,.046*r,-.096*e),t.lineTo(.052*r,-.02*e),t.quadraticCurveTo(.058*r,.06*e,.0575*r,.09*e),t.quadraticCurveTo(.056*r,.15*e,.04*r,.183*e),t.quadraticCurveTo(.022*r,.196*e,0,.196*e),t.quadraticCurveTo(-.022*r,.196*e,-.04*r,.183*e),t.quadraticCurveTo(-.056*r,.15*e,-.0575*r,.09*e),t.quadraticCurveTo(-.058*r,.06*e,-.052*r,-.02*e),t.closePath(),t}const no=(r,e,t)=>{const n=Math.min(1,Math.max(0,(t-r)/(e-r)));return n*n*(3-2*n)},Xm=r=>1.2*Math.max(0,r-.12)**2;function Ym(r,e,t){const n=new al,i=-r/2,s=-e/2;return n.moveTo(i+t,s),n.lineTo(i+r-t,s),n.quadraticCurveTo(i+r,s,i+r,s+t),n.lineTo(i+r,s+e-t),n.quadraticCurveTo(i+r,s+e,i+r-t,s+e),n.lineTo(i+t,s+e),n.quadraticCurveTo(i,s+e,i,s+e-t),n.lineTo(i,s+t),n.quadraticCurveTo(i,s,i+t,s),n}function Gw({joints:r,mats:e,quality:t}){const n=t==="low"?6:16;for(const i of["L","R"]){const s=r[`foot${i}`],o=[],a=[];let l=new Cr(Wm(1,1),{depth:.014,bevelEnabled:!0,bevelThickness:.005,bevelSize:.005,bevelSegments:3,curveSegments:n});l.rotateX(-Math.PI/2);{const m=l.attributes.position;for(let _=0;_<m.count;_++){let g=m.getY(_);const p=m.getZ(_);g=Math.max(g,-.004),g>.005&&(g+=.012*no(-.03,-.105,p)*(p<-.03?1:0)+.012*no(.105,.03,-p)*0),g>.005&&p<-.03&&(g+=.012*no(-.03,-.105,p)),g+=Xm(p),m.setY(_,g+Gm+.004)}l=Bm(l,1e-4),l.computeVertexNormals(),a.push(l)}let c=new Cr(Wm(.88,.95),{depth:.03,bevelEnabled:!0,bevelThickness:.045,bevelSize:.024,bevelSegments:t==="low"?3:5,curveSegments:n});c.rotateX(-Math.PI/2);{const m=c.attributes.position,_=.014;for(let g=0;g<m.count;g++){let p=m.getY(g);const x=m.getZ(g);p=Math.max(p,-.002);const v=x>.1?.8:x>.02?.8+.28*no(.1,.02,x):x>-.05?1.08-.16*no(-.02,-.05,x):.92-.28*no(-.05,-.098,x);p=p*v,p+=Xm(x),m.setY(g,p+Gm+_)}c=Bm(c,1e-4),c.computeVertexNormals(),o.push(c)}{const m=new yi(.037,.0455,.058,t==="low"?18:24,1,!0),_=m.attributes.position;for(let p=0;p<_.count;p++){const x=_.getY(p),v=_.getZ(p);x>.015&&v<0&&_.setY(p,x-.015*Math.min(1,-v/.04))}m.computeVertexNormals(),m.translate(0,-.004,.004),o.push(m);const g=new Go(.0365,.004,8,18);g.rotateX(Math.PI/2),g.translate(0,.024,.004),o.push(g)}const u=new Be(new yi(.031,.033,.085,14),e.pants);u.position.set(0,.01,.002),s.add(u);{const m=new Cr(Ym(.054,.112,.009),{depth:.006,bevelEnabled:!0,bevelThickness:.0025,bevelSize:.002,bevelSegments:2}),_=new Cr(Ym(.061,.119,.011),{depth:.0022,bevelEnabled:!1}),g=(p,x)=>{const v=new Je().makeRotationX(-.95).setPosition(0,-.034,.08+x);p.applyMatrix4(v)};g(_,-.004),g(m,0),a.push(_),o.push(m)}{const m=new Go(.03,.0022,6,20,Math.PI*1.05);m.rotateZ(-Math.PI*.02-Math.PI*0),m.rotateZ(Math.PI+(Math.PI*1.05-Math.PI)/-2),m.rotateX(.12),m.translate(0,-.066,-.086),a.push(m)}const h=m=>m.map(_=>_.index?_.toNonIndexed():_),f=new Be(Es(h(o)),e.shoe),d=new Be(Es(h(a)),e.sole);o.forEach(m=>m.dispose()),a.forEach(m=>m.dispose()),s.add(f,d)}}const Ww=[[0,0,0],[-.06,-.2,-.13],[-.24,-.42,-.1],[-.4,-.34,0],[-.48,-.12,.04],[-.52,.02,.02]],$m=[.3,.42,.55,.68,.8];function I_({joints:r,mats:e,quality:t}){const n=r.tailRoot,i=t==="low"?28:80,s=t==="low"?8:14,o=new Zc(Ww.map(y=>new U(...y))),a=new Po(o,i,.034,s,!1),l=a.attributes.position,c=s+1,u=new U,h=new U;for(let y=0;y<=i;y++){const E=y/i,S=Jh.lerp(1.1,.55,E);o.getPointAt(E,u);for(let M=0;M<c;M++){const R=y*c+M;h.fromBufferAttribute(l,R).sub(u).multiplyScalar(S).add(u),l.setXYZ(R,h.x,h.y,h.z)}}a.computeVertexNormals();const f=new Be(a,e.tail);n.add(f);const d=o.computeFrenetFrames(i,!1);for(let y=0;y<$m.length;y++){const E=$m[y],S=Math.round(E*i),M=.034*Jh.lerp(1.1,.55,E),R=o.getPointAt(E),b=d.normals[S].clone().negate(),T=d.tangents[S],P=new Be(new xi(.004,y%2?.028:.042,.0035),e.tailGlyph);if(P.position.copy(R).addScaledVector(b,M),P.quaternion.setFromRotationMatrix(new Je().makeBasis(b.clone().cross(T).normalize(),T,b)),n.add(P),y%2===0){const N=new Be(new xi(.014,.004,.0035),e.tailGlyph);N.position.copy(P.position).addScaledVector(T,.016),N.quaternion.copy(P.quaternion),n.add(N)}}const m=new al;m.moveTo(0,.15),m.lineTo(.095,-.03),m.lineTo(.034,.004),m.lineTo(.026,-.078),m.lineTo(-.026,-.078),m.lineTo(-.034,.004),m.lineTo(-.095,-.03),m.closePath();const _=new Cr(m,{depth:.022,bevelEnabled:!0,bevelThickness:.007,bevelSize:.007,bevelSegments:1});_.translate(0,.03,-.011);const g=new Wo({color:Lt.tail,roughness:.38,envMapIntensity:.7,emissive:16747050,emissiveIntensity:1,flatShading:!0}),p=new Be(_,g),x=o.getPointAt(1),v=o.getTangentAt(1);return p.quaternion.setFromUnitVectors(new U(0,1,0),v),p.position.copy(x),n.add(p),{curve:o,mesh:f,arrowhead:p}}const Xw={armL_up:{z:.14},armR_up:{z:-.14}},qm={idle:{},confident:{chest:{x:-.05},head:{x:-.04},armL_up:{z:.22,x:.06},armR_up:{z:-.22,x:.06},armL_lo:{x:-.12},armR_lo:{x:-.12}},point:{armR_up:{z:-1.15,x:-.85},armR_lo:{x:-.18},armL_up:{z:.18},head:{y:-.22,x:-.08},chest:{y:-.12}},openArms:{armL_up:{z:.85,x:-.28},armR_up:{z:-.85,x:-.28},armL_lo:{z:.35,x:-.25},armR_lo:{z:-.35,x:-.25},chest:{x:-.06},head:{x:-.05}},runReady:{spine:{x:.18},chest:{x:.08},armL_lo:{x:-.9},armR_lo:{x:-.9}}};function Yw(r){const e=qm[r]||qm.idle,t={};for(const n of[Xw,e])for(const[i,s]of Object.entries(n))t[i]={x:0,y:0,z:0,...t[i],...s};return t}const Tc=["hips","spine","chest","neck","head","clavL","armL_up","armL_lo","handL","clavR","armR_up","armR_lo","handR","legL_up","legL_lo","footL","legR_up","legR_lo","footR","tailRoot"],$w=Math.PI*2,ha=(r,e,t)=>Math.min(t,Math.max(e,r)),io=(r,e,t)=>r+(e-r)*t,oc=()=>Object.fromEntries(Tc.map(r=>[r,{x:0,y:0,z:0}]));var zr,D_,U_,N_;class qw{constructor({joints:e,mats:t,tail:n,runner:i}){ef(this,zr);this.joints=e,this.mats=t,this.tail=n,this.runner=i,this.base=oc(),this.breath=oc(),this.loco=oc(),this.overlay=oc(),this.t=0,this.phase=0,this.w=0,this.locoOverride=null,this.locoPulse={v:0},this.rootBob=0,this.hop={v:0},this.look={headY:0,headX:0,neckY:0,neckX:0},this.lookEnabled=!0,this.yawBase={v:0},this.dragYaw=0,this.dragVel=0,this.dragging=!1,this.blinkAt=2+Math.random()*3,this.overlayTL=null,this.setBasePose("idle",0)}setBasePose(e,t=.8){const n=Yw(e);for(const i of Tc){const s=n[i]||{x:0,y:0,z:0};en.to(this.base[i],{...s,duration:t,ease:"power2.inOut",overwrite:"auto"})}}setLocomotion(e){this.locoOverride=e}setYaw(e,t=.8){en.to(this.yawBase,{v:e,duration:t,ease:"power2.inOut",overwrite:"auto"})}addDragYaw(e){this.dragYaw+=e,this.dragVel=e}setDragging(e){this.dragging=e,e&&(this.dragVel=0)}play(e){if(e==="run"){en.timeline().to(this.locoPulse,{v:1,duration:.35,ease:"power2.out"}).to(this.locoPulse,{v:0,duration:.6,ease:"power2.inOut"},1.1);return}const t={wave:ul(this,zr,D_),cheer:ul(this,zr,U_),point:ul(this,zr,N_)}[e];if(t){this.overlayTL?.kill();for(const n of Tc)en.to(this.overlay[n],{x:0,y:0,z:0,duration:.15,overwrite:"auto"});this.overlayTL=t.call(this)}}update({dt:e,pointer:t,scrollVel:n,camera:i=null}){const{joints:s}=this;this.t+=e;const o=Math.sin(this.t*1.7);if(s.chest.scale.setScalar(1+.014*o),this.breath.clavL.z=.014*o,this.breath.clavR.z=-.014*o,this.breath.head.x=.012*Math.sin(this.t*1.7+.6),this.breath.tailRoot.y=.09*Math.sin(this.t*1.3),this.breath.tailRoot.x=-.55*this.w,this.t>this.blinkAt){const v=ha((this.t-this.blinkAt)/.09,0,1),y=v<.5?v*2:1-(v-.5)*2;s.head.userData.setBlink?.(y),v>=1&&(this.blinkAt=this.t+2.5+Math.random()*2.5,s.head.userData.setBlink?.(0))}const a=this.locoOverride??0,l=ha(Math.max(Math.abs(n)*30,a,this.locoPulse.v),0,1);this.w+=(l-this.w)*.07;const c=this.w;this.phase+=e*$w*io(1.4,2.4,c);const u=this.phase,h=io(.45,1,c)*c,f=this.loco;f.legL_up.x=h*Math.sin(u),f.legR_up.x=h*Math.sin(u+Math.PI),f.legL_lo.x=Math.max(0,1.15*Math.sin(u+.55*Math.PI))*io(.5,1,c)*c,f.legR_lo.x=Math.max(0,1.15*Math.sin(u+Math.PI+.55*Math.PI))*io(.5,1,c)*c,f.footL.x=-.35*Math.sin(u+1.1)*c,f.footR.x=-.35*Math.sin(u+Math.PI+1.1)*c,f.armL_up.x=-.85*h*Math.sin(u),f.armR_up.x=-.85*h*Math.sin(u+Math.PI),f.armL_lo.x=-io(.15,1.1,c)*c,f.armR_lo.x=-io(.15,1.1,c)*c,f.hips.y=.12*c*Math.sin(u),f.chest.y=-.15*c*Math.sin(u),f.spine.x=.28*c+ha(n*6,-.1,.15),this.rootBob=.035*c*Math.abs(Math.cos(u));let d=this.lookEnabled?1:0;if(d&&i){const v=i.getWorldDirection(jw),y=Zw.set(0,0,1).applyQuaternion(this.joints.root.quaternion);d=v.dot(y)<-.35?1:0}const m=ha(t.x*.6,-.55,.55)*d,_=ha(t.y*.35,-.3,.3)*d;this.look.headY+=(m*.7-this.look.headY)*.08,this.look.headX+=(_*.7-this.look.headX)*.08,this.look.neckY+=(m*.3-this.look.neckY)*.08,this.look.neckX+=(_*.3-this.look.neckX)*.08,!this.dragging&&Math.abs(this.dragVel)>1e-4&&(this.dragYaw+=this.dragVel,this.dragVel*=.94);const g=this.base,p=this.breath,x=this.overlay;for(const v of Tc){const y=s[v];y&&y.rotation.set(g[v].x+p[v].x+f[v].x+x[v].x,g[v].y+p[v].y+f[v].y+x[v].y,g[v].z+p[v].z+f[v].z+x[v].z)}s.head.rotation.y+=this.look.headY,s.head.rotation.x+=this.look.headX,s.neck.rotation.y+=this.look.neckY,s.neck.rotation.x+=this.look.neckX,s.root.rotation.y=this.yawBase.v+this.dragYaw,s.root.position.y=this.rootBob+this.hop.v,this.runner&&this.runner.position.copy(this.tail.curve.getPointAt(this.t*.22%1)),this.mats.tail.emissiveIntensity=.35+.1*Math.sin(this.t*2.1)}}zr=new WeakSet,D_=function(){const e=this.overlay;return en.timeline({delay:.16}).to(e.armR_up,{z:-2.05,x:-.25,duration:.38,ease:"power2.out"}).to(e.armR_lo,{z:-.55,duration:.2,ease:"sine.inOut"},.3).to(e.armR_lo,{z:.25,duration:.24,ease:"sine.inOut",repeat:3,yoyo:!0},.5).to(e.head,{z:.12,duration:.3,ease:"sine.inOut"},.35).to(e.armR_up,{z:0,x:0,duration:.5,ease:"power2.inOut"},1.75).to(e.armR_lo,{z:0,duration:.4,ease:"power2.inOut"},1.75).to(e.head,{z:0,duration:.4,ease:"power2.inOut"},1.75)},U_=function(){const e=this.overlay;return en.timeline().to(e.armL_up,{z:2.45,x:-.2,duration:.34,ease:"back.out(1.6)"},0).to(e.armR_up,{z:-2.45,x:-.2,duration:.34,ease:"back.out(1.6)"},0).to(e.armL_lo,{z:.3,duration:.3},.1).to(e.armR_lo,{z:-.3,duration:.3},.1).to(e.head,{x:-.22,duration:.3,ease:"sine.out"},.05).to(this.hop,{v:.085,duration:.22,ease:"power2.out",repeat:3,yoyo:!0},.15).to([e.armL_up,e.armR_up,e.armL_lo,e.armR_lo,e.head],{x:0,y:0,z:0,duration:.55,ease:"power2.inOut"},1.7)},N_=function(){const e=this.overlay;return en.timeline().to(e.armR_up,{z:-1.15,x:-.85,duration:.4,ease:"power2.out"}).to(e.armR_lo,{x:-.15,duration:.3},.15).to(e.head,{y:-.25,duration:.35,ease:"sine.inOut"},.1).to([e.armR_up,e.armR_lo,e.head],{x:0,y:0,z:0,duration:.6,ease:"power2.inOut"},2)};const jw=new U,Zw=new U;function Jw({quality:r="high"}={}){const e=w_();if(!e.jacketMapped){const h=Sw({size:r==="low"?1024:2048});e.jacketMapped=e.jacket.clone(),e.jacketMapped.color.setHex(16777215),e.jacketMapped.map=h.map,e.jacketMapped.emissive=new Xe(16777215),e.jacketMapped.emissiveIntensity=.85,e.jacketMapped.emissiveMap=h.emissiveMap}const{root:t,joints:n}=Rw(),i={joints:n,mats:e,quality:r};Dw(i),Ow(i),Bw(i),Vw(i),Hw(i),Gw(i);const s=I_(i),o=Tw();for(const h of[1,-1]){const f=new Be(new ol(.105,.052),new Wo({map:o,transparent:!0,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));f.position.set(h*.1,.058,.112),f.rotation.y=h*.42,n.chest.add(f)}const a=Aw(Lt.chipGlow),l=new QT(new l_({map:a,transparent:!0,blending:ja,depthWrite:!1,opacity:.35}));l.scale.setScalar(.14),l.position.z=.03,n.chip.add(l);const c=new qw({joints:n,mats:e,tail:s,runner:null});return{sectionId:"*",root:t,joints:n,tail:s,anim:c,active:!0,setActive(h){this.active=h,t.visible=h},play(h){c.play(h)},setBasePose(h,f){c.setBasePose(h,f)},setLocomotion(h){c.setLocomotion(h)},setYaw(h,f){c.setYaw(h,f)},addDragYaw(h){c.addDragYaw(h)},setDragging(h){c.setDragging(h)},setLookEnabled(h){c.lookEnabled=h},update(h){c.update(h)},dispose(){t.parent?.remove(t),t.traverse(h=>h.geometry?.dispose())}}}const jm="/models/mascot.glb",Kw=1.8,Qw={idle:/idle|breath/i,wave:/wave|greet/i,run:/run|stride|walk/i,cheer:/clap|cheer/i};async function eA(r){try{const e=await fetch(r,{method:"HEAD"}),t=e.headers.get("content-type")||"";return e.ok&&!t.includes("text/html")}catch{return!1}}function tA(r,e){const t=i=>i.replace(/^mixamorig[:_]?/i,"").replace(/[:_\s]/g,"").toLowerCase(),n=new Map;return e.traverse(i=>{i.isBone&&n.set(t(i.name),i.name)}),n.size?r.map(i=>{const s=i.clone();return s.tracks=s.tracks.map(o=>{const a=o.name.lastIndexOf("."),l=o.name.slice(0,a),c=o.name.slice(a),u=n.get(t(l));if(!u||u===l)return o;const h=o.clone();return h.name=u+c,h}),s}):r}const Zm=new U;function _h(r){r.updateWorldMatrix(!0,!0);const e=new Hi;e.makeEmpty();let t=0;return r.traverse(n=>{n.isBone&&(n.getWorldPosition(Zm),e.expandByPoint(Zm),t++)}),t?(e.expandByScalar((e.max.y-e.min.y)*.08),e):new Hi().setFromObject(r)}async function nA(){if(!await eA(jm))return null;let r;try{const{GLTFLoader:I}=await bg(async()=>{const{GLTFLoader:F}=await import("./GLTFLoader-CNGSbYwV.js");return{GLTFLoader:F}},[],import.meta.url);r=await new I().loadAsync(jm)}catch(I){return console.warn("[marut-glb] load failed, falling back to procedural:",I),null}const e=r.scene;e.traverse(I=>{(I.isMesh||I.isSkinnedMesh)&&(I.frustumCulled=!1)}),e.traverse(I=>{if(!(I.isMesh||I.isSkinnedMesh)||!I.material)return;const F=I.material;F.envMapIntensity=.9,F.map&&(F.map.anisotropy=8,F.bumpMap=F.map,F.bumpScale=.6),F.onBeforeCompile=H=>{H.fragmentShader=H.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          {
            float lum = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
            roughnessFactor = clamp(roughnessFactor * (1.15 - lum * 0.35), 0.25, 1.0);
          }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
          {
            vec3 c = diffuseColor.rgb;
            // hot saturated orange ONLY (circuit print / trim) — skin is
            // also orange-family but desaturated; the g-channel guard
            // excludes it, otherwise the whole character radiates
            float orange = smoothstep(0.52, 0.85, c.r - c.b)
                         * smoothstep(0.50, 0.90, c.r)
                         * (1.0 - smoothstep(0.62, 0.80, c.g));
            float cyan   = smoothstep(0.18, 0.55, c.b - c.r) * smoothstep(0.35, 0.80, c.b);
            totalEmissiveRadiance += c * (orange * 0.85 + cyan * 1.35);
            // velvet rim — normal falloff against the view carves the sculpt
            float rim = pow(1.0 - clamp(dot(normalize(vViewPosition), normal), 0.0, 1.0), 3.0);
            totalEmissiveRadiance += vec3(1.0, 0.72, 0.5) * rim * 0.055;
          }`)},F.needsUpdate=!0});let t=r.animations||[];t.length&&(t=tA(t,e));const n=t.length?new hw(e):null,i=I=>t.find(F=>(Qw[I]||new RegExp(I,"i")).test(F.name)),s=I=>{const F=i(I);return F&&n?n.clipAction(F):null},o=new ei;o.add(e);const a=new ei;a.name="marut-glb",a.add(o);const l=s("idle");l&&l.play(),n&&n.update(.15);let c=_h(a),u=c.getSize(new U);u.z>u.y*1.3&&(o.rotation.x=-Math.PI/2,c=_h(a),u=c.getSize(new U));const h=Math.max(u.x,u.y,u.z);if(!isFinite(h)||h<1e-5||u.y<h*.4)return console.warn("[marut-glb] rig collapses when posed — falling back to procedural."),n&&n.stopAllAction(),null;const f=Kw/u.y;o.scale.setScalar(f),o.updateWorldMatrix(!0,!0),c=_h(a),o.position.set(-(c.max.x+c.min.x)/2,-c.min.y,-(c.max.z+c.min.z)/2);const d=s("run");let m=null;{let I=null;e.traverse(L=>{!I&&L.isBone&&/hips$/i.test(L.name.replace(/^mixamorig[:_]?/i,""))&&(I=L)});const F=I||o;F.updateWorldMatrix(!0,!1),m=new ei,F.add(m);const H=new U;F.getWorldScale(H);const X=new zi;F.getWorldQuaternion(X),m.position.copy(F.worldToLocal(new U(0,.8,-.11))),m.quaternion.copy(X.invert()),m.scale.set(1/H.x,1/H.y,1/H.z),I_({joints:{tailRoot:m},mats:w_(),quality:"high"})}let _=null;const g=[],p=[],x={spine:-.03,spine1:-.035,spine2:-.055,neck:-.045};e.traverse(I=>{if(!I.isBone)return;const F=I.name.replace(/^mixamorig[:_]?/i,"").toLowerCase();F==="head"?_=I:x[F]!=null?g.push([I,x[F]]):F==="leftshoulder"?p.push([I,1]):F==="rightshoulder"&&p.push([I,-1])});const v=-.035,y=.12,E=new U(0,1,0);let S=0,M=0,R=!1,b=0,T=0,P=0,N=0,W=!0,D=0;return{sectionId:"*",root:a,active:!0,setActive(I){this.active=I,a.visible=I},play(I){const F=s(I==="point"?"wave":I);if(!F||F===l||!n)return;F.reset(),F.setLoop(kg),F.clampWhenFinished=!1,F.timeScale=I==="cheer"?1.05:1,F.setEffectiveWeight(1),F.fadeIn(.25),F.play(),l?.fadeOut(.25);const H=X=>{X.action===F&&(n.removeEventListener("finished",H),l?.reset().fadeIn(.45).play())};n.addEventListener("finished",H)},setBasePose(){},setYaw(I){S=I},setLocomotion(I){b=I==null?0:Jh.clamp(I,0,1)},addDragYaw(I){M+=I,a.rotation.y+=I},setDragging(I){R=I},setLookEnabled(I){W=!!I},update({dt:I,pointer:F,scrollVel:H}){D+=I,n&&n.update(I),m&&(m.rotation.y=Math.sin(D*.9)*.08+Math.sin(D*1.7)*.03,m.rotation.x=Math.sin(D*.7)*.04);const X=S+M;if(a.rotation.y+=(X-a.rotation.y)*(R?.5:.08),d){const J=Math.max(b,Math.min(1,Math.abs(H)*40));T+=(J-T)*.1,d.setEffectiveWeight(T),d.timeScale=.85+.45*T,T>.01&&!d.isRunning()&&d.play(),a.rotation.x=T*.08}const L=1-T*.7;for(const[J,ae]of g)J.rotation.x+=ae*L;for(const[J,ae]of p)J.rotateOnWorldAxis(E,ae*y*L);if(_&&!R){const J=W&&F?F.x*.28:0,ae=W&&F?F.y*.16:0;P+=(J-P)*.06,N+=(ae-N)*.06,_.rotation.y+=P,_.rotation.x+=N+v*L}},dispose(){n&&n.stopAllAction(),a.parent?.remove(a),a.traverse(I=>{I.geometry?.dispose(),I.material&&(Array.isArray(I.material)?I.material:[I.material]).forEach(F=>{F.map?.dispose(),F.dispose()})})}}}const rd={hero:{pos:[1.6,1.45,4.2],frameX:.74,ty:1.02,fov:50,pose:"confident",yaw:-.3,look2D:!0},brand:{pos:[.5,.4,2.4],frameX:.72,ty:1.15,fov:58,pose:"idle",yaw:.15,loco:.4},stats:{pos:[-2.8,1.9,5.6],frameX:.5,ty:1,fov:50,pose:"idle",yaw:.6},about:{pos:[1.7,1.4,2.6],frameX:.72,ty:1.28,fov:46,pose:"idle",yaw:-.5,enter:"wave",look2D:!0},expertise:{pos:[.2,1.6,7],frameX:.8,ty:.5,fov:44,pose:"idle",yaw:0},testimonials:{pos:[-1.8,1.5,6],frameX:.76,ty:.42,fov:48,pose:"idle",yaw:.55},"mascot-lab":{pos:[0,1.35,2.9],frameX:.7,ty:1.05,fov:48,pose:"idle",yaw:0,drag:!0,look2D:!0},programmes:{pos:[2.6,1.3,7.2],frameX:.48,ty:1.3,fov:48,pose:"runReady",yaw:-1.35,loco:.65},consulting:{pos:[-1.5,1.8,7.5],frameX:.75,ty:.35,fov:44,pose:"confident",yaw:.8},tour:{pos:[1.9,1.35,3.6],frameX:.46,ty:1.2,fov:48,pose:"point",yaw:-.4},clients:{pos:[0,1.8,6.8],frameX:.74,ty:1.15,fov:46,pose:"idle",yaw:0},contact:{pos:[-.4,1.3,5.4],frameX:.11,ty:.55,fov:50,pose:"openArms",yaw:.15,enter:"cheer",look2D:!0}},Jm={hero:{pos:[1.6,1,8.5],frameX:.78,ty:-.35,fov:44},stats:{pos:[-2.8,1.5,7],frameX:.5,ty:-.55,fov:44},expertise:{pos:[.2,1.4,8],frameX:.82,ty:-.1,fov:44},testimonials:{pos:[-1.8,1.4,8],frameX:.8,ty:-.72,fov:44},"mascot-lab":{pos:[0,1.3,7.3],frameX:.5,ty:-.78,fov:48},programmes:{pos:[2.6,1.2,8.5],frameX:.78,ty:-1.05,fov:44},consulting:{pos:[-1.5,1.5,8.5],frameX:.78,ty:-.95,fov:44},tour:{pos:[1.9,1.2,8.5],frameX:.78,ty:-1.05,fov:44},clients:{pos:[0,1.6,7],frameX:.78,ty:.05,fov:44},contact:{pos:[-.4,1.5,8.5],frameX:.22,ty:-.95,fov:44}},iA=()=>innerWidth<=900,ac=r=>iA()&&Jm[r]?{...rd[r],...Jm[r]}:rd[r],xr=new Ln,vh=new U;function rA(r,e){xr.fov=r.fov,xr.aspect=e,xr.updateProjectionMatrix();const t=r.frameX*2-1,n=u=>(xr.position.set(...r.pos),xr.lookAt(u,r.ty,0),xr.updateMatrixWorld(),vh.set(0,1,0).applyMatrix4(xr.matrixWorldInverse),vh.z>-.01?null:vh.applyMatrix4(xr.projectionMatrix).x);let i=0,s=1/0,o=null,a=null,l=null,c=null;for(let u=0;u<=48;u++){const h=-6+12*u/48,f=n(h);if(f===null){l=null,c=null;continue}const d=Math.abs(f-t);if(d<s&&(s=d,i=h),c!==null&&(c-t)*(f-t)<=0){o=l,a=h;break}l=h,c=f}if(o===null)return i;for(let u=0;u<24;u++){const h=(o+a)/2,f=n(h);if(f===null)break;f>t?o=h:a=h}return(o+a)/2}const sA={pos:[0,1.35,2.4],frameX:.5,ty:1.15,fov:48},lc=r=>({px:r.pos[0],py:r.pos[1],pz:r.pos[2],tx:rA(r,innerWidth/innerHeight),ty:r.ty,tz:0,fov:r.fov});function oA({sceneAPI:r,marut:e,reduced:t}){if(t||!r?.enabled||!e)return null;const{camera:n,addTick:i}=r.three;document.body.classList.add("showcase");const s={...lc(ac("hero"))};let o=null;const a=new Map;let l=null;window.__camState=s,window.__cam=n,window.__marutRoot=e.root,i(({pointer:f})=>{n.position.set(s.px+f.x*.22,s.py+f.y*.1,s.pz),n.lookAt(s.tx,s.ty,s.tz),Math.abs(n.fov-s.fov)>.01&&(n.fov=s.fov,n.updateProjectionMatrix())});function c(){o?.scrollTrigger?.kill(),o?.kill();const f=document.documentElement.scrollHeight-innerHeight;if(f<=0)return;o=en.timeline({defaults:{ease:"power2.inOut"},scrollTrigger:{trigger:document.body,start:0,end:()=>document.documentElement.scrollHeight-innerHeight,scrub:.9,invalidateOnRefresh:!0}});const d=innerHeight,m=qt("main .section, main .band").filter(g=>rd[g.id]);let _=0;for(const g of m){const p=ac(g.id),x=Math.max(0,Math.min(f,g.offsetTop-d*.25)),v=x/f,y=Math.max(_,(x-d*.55)/f);o.to(s,{...lc(p),duration:Math.max(.015,v-y)},y),_=Math.max(_,v)}o.set({},{},1),window.__showTL=o}c(),Ke.addEventListener("refreshInit",c),addEventListener("resize",()=>Ke.refresh(),{passive:!0});let u=!1;const h=document.getElementById("mascotlab-mount");if(h){h.style.touchAction="pan-y",h.classList.add("mascot-drag");let f=0,d=0,m=!1;h.addEventListener("pointerdown",g=>{!u||g.button!==0&&g.pointerType==="mouse"||(m=!0,f=g.clientX,d=g.timeStamp,e.setDragging(!0),h.setPointerCapture?.(g.pointerId),h.classList.add("dragging"),document.body.classList.add("mascot-dragged"))}),h.addEventListener("pointermove",g=>{if(!m)return;const p=g.clientX-f;f=g.clientX,d=g.timeStamp,e.addDragYaw(p*.008),h.style.setProperty("--spin",Math.min(1,Math.abs(p*.008)*5).toFixed(2))});const _=g=>{m&&(m=!1,h.classList.remove("dragging"),e.setDragging(!1),g.timeStamp-d>120&&e.anim&&(e.anim.dragVel=0))};h.addEventListener("pointerup",_),h.addEventListener("pointercancel",_),h.addEventListener("lostpointercapture",_)}return{applySection(f){const d=ac(f);if(d){if(e.setBasePose(d.pose,.8),e.setYaw(d.yaw,1),e.setLocomotion(d.loco??null),e.setLookEnabled(!!d.look2D),u=!!d.drag,h&&(h.style.pointerEvents=u?"auto":"none"),d.enter&&f!==l){const m=performance.now();(a.get(f)??-1e9)+4e3<m&&(a.set(f,m),en.delayedCall(.45,()=>e.play(d.enter)))}l=f}},introToHero(f){if(scrollY>innerHeight*.5)return en.to({},{duration:.01});const d=f==="video"?1.05:.4;return en.to(s,{...lc(ac("hero")),duration:1.5,ease:"power3.inOut",delay:d,onComplete:()=>e.play("wave")})},prepareIntro(){scrollY>innerHeight*.5||Object.assign(s,lc(sA))},refresh(){Ke.refresh()}}}function aA(r){return[Ao(r,"webp"),Ao("idle","webp"),Ao("idle","png")]}function lA(){qt(".mascot-img").forEach(r=>{const e=r.closest(".mascot")?.dataset.pose||"idle",t=aA(e);let n=0;r.onerror=()=>{n+=1,n<t.length?r.src=t[n]:r.onerror=null},r.src=t[0]})}function cA(){const r=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("mascot-in"),r.unobserve(t.target))})},{threshold:.15});qt(".mascot:not(.mascot--nav):not(.mascot--pre)").forEach(e=>r.observe(e)),qt(".mascot--nav, .mascot--pre").forEach(e=>e.classList.add("mascot-in"))}function uA(){lA(),cA()}function hA({reduced:r}){const e=matchMedia("(hover: none)").matches;if(addEventListener("mousemove",c=>{const u=c.clientX/innerWidth*2-1,h=c.clientY/innerHeight*2-1;window.OS3D?.setPointer(u,h)},{passive:!0}),e||r)return;document.body.classList.add("custom-cursor");const t=Rt(".cursor-dot"),n=Rt(".cursor-ring");let i=0,s=0,o=0,a=0;addEventListener("mousemove",c=>{i=c.clientX,s=c.clientY},{passive:!0}),function c(){t.style.transform=`translate(${i}px,${s}px) translate(-50%,-50%)`,o+=(i-o)*.18,a+=(s-a)*.18,n.style.transform=`translate(${o}px,${a}px) translate(-50%,-50%)`,n.style.setProperty("--trail",Math.min(1,Math.hypot(i-o,s-a)/150).toFixed(2)),requestAnimationFrame(c)}();const l="a, button, .gem-card, .cg-card, .tab, input, select, textarea";document.addEventListener("mouseover",c=>{c.target.closest(l)&&n.classList.add("hover")}),document.addEventListener("mouseout",c=>{c.target.closest(l)&&n.classList.remove("hover")})}const sd={motto:"From data to decisions. From decisions to outcomes.",tagline:"Stride into Decision Intelligence",legal:"OranjeStride Consultancy Pvt. Ltd."},Zd={links:[{id:"about",label:"About"},{id:"expertise",label:"Expertise"},{id:"programmes",label:"Programmes"},{id:"consulting",label:"Consulting"},{id:"tour",label:"India Tour"},{id:"clients",label:"Clients"},{id:"contact",label:"Contact"}],dots:{hero:"Hero",stats:"Impact",about:"About",expertise:"Expertise",testimonials:"Voices","mascot-lab":"Mascot",programmes:"Programmes",consulting:"Consulting",tour:"India Tour",clients:"Clients",contact:"Contact"}},Ci={video:"hero-opening",eyebrow:"Generative AI · Machine Learning · Analytics",headlineA:"Stride into ",headlineAccent:"Decision Intelligence",subhead:"India's premier Gen AI & Data Science training consultancy — turning complex algorithms into competitive advantage for professionals, executives, and institutions.",ctaPrimary:{label:"Explore Programmes",target:"#programmes"},ctaSecondary:{label:"Talk to Us",target:"#contact"}},dA=[{value:1e3,decimals:0,suffix:"+",label:"Professionals & Students Trained"},{value:4.8,decimals:1,suffix:"/5",label:"Average Feedback Score"},{value:90,decimals:0,suffix:"%+",label:"Post-Training Skill Adoption"},{value:15,decimals:0,suffix:"+",label:"Premier Institutional Clients"}],cc={label:"About OranjeStride",headA:"Nothing Is ",headAccent:"Unattainable",principles:[{n:"01",h:"Relevance With Industry",p:"Curriculum crafted by practitioners mapped to real job roles in AI, Data Engineering, and Analytics."},{n:"02",h:"Expert Experienced Faculty",p:"Dedicated data scientists and educators with hundreds of hours of live training delivery across elite institutions."},{n:"03",h:"Analytics For All",p:"Case-study methodology ensuring participants from finance, ops, and HR grasp practical applications immediately."},{n:"04",h:"Certified Analytics Professional",p:"Our OAP certification helps professionals stand apart in a crowded talent market."}]},Kr={video:"expertise-array",label:"What We Do",headA:"Areas of Deep ",headAccent:"Expertise",sub:"End-to-end capability across the modern AI stack — from foundational statistics to cutting-edge agentic systems.",cards:[{prop:"brain",h:"Generative AI & Agentic AI",p:"LLMs, prompt engineering, RAG architectures, AI agents, autonomous workflows.",tags:["LLMs","RAG","Agents","Prompt Eng."]},{prop:"chip",h:"Machine Learning & Statistical Modeling",p:"Supervised & unsupervised learning, regression, classification, ensemble methods, interpretability.",tags:["Scikit-learn","XGBoost","Python/R","Stats"]},{prop:"gem",h:"Data Science & Advanced Analytics",p:"End-to-end pipelines, EDA, feature engineering, fraud detection, risk scoring, forecasting.",tags:["Pandas","SQL","Forecasting","A/B Testing"]},{prop:"chart",h:"Business Intelligence & Visualization",p:"Tableau, Power BI, Python viz labs, executive dashboards.",tags:["Tableau","Power BI","Plotly","Dashboards"]},{prop:"arrow",h:"Corporate & Executive AI Strategy",p:"Workshops for C-suite on AI adoption, ROI mapping, transformation roadmaps.",tags:["Strategy","AI Roadmap","Change Mgmt"]},{prop:"node",h:"Deep Learning & Neural Networks",p:"CNNs, RNNs, Transformers, computer vision.",tags:["TensorFlow","PyTorch","Transformers","CV"]}]},uc={label:"What Learners Say",headA:"Results That ",headAccent:"Speak",items:[{initial:"D",quote:"When theoretical concepts go hand in hand with practical implementation, the mind forces itself to explore beyond the vanilla concepts.",name:"Dilpreet",org:"Sopra Steria"},{initial:"A",quote:"One of the best teachers I have ever had... you make difficult things easy to understand.",name:"Ashish Aggarwal",org:"Shri Vishwakarma Skill University"},{initial:"L",quote:"A great hands-on introduction to ML... The R & Python coverage is exceptional and immediately actionable.",name:"Lakshay Guglani",org:"Maharaja Agrasen College of Engg."}]},ro={label:"Interactive 3D",headA:"Meet the ",headAccent:"Stride Runner",sub:"The OranjeStride mark, brought to life — a fully rigged 3D character rendered live in your browser, carrying the momentum we build into every programme.",hint:"Take him for a spin:",clips:[{clip:"wave",label:"Wave"},{clip:"run",label:"Run"},{clip:"cheer",label:"Clap"}]},er={video:"programmes-ascent",label:"Programmes",headA:"Our Training ",headAccent:"Streams",sub:"Three streams, one goal — turning knowledge into real capability. Each is built for a specific audience, delivered by people who've done the work, not just taught it.",cert:"Certificate jointly signed by OranjeStride & a university of repute in India.",tabs:[{id:"corporate",label:"Corporate & Leadership",steps:[{h:"Sector Tracks",p:"Banking & Financial Services (Credit Risk, Fraud ML, Forecasting, Gen AI), Healthcare & Pharma, Insurance (Claims AI, Churn, Risk Pricing), FMCG & Retail (Demand Forecast, CLV, Supply Chain AI), Government & Public Sector, Media/Tech/Telecom."},{h:"Leadership Tracks",p:"AI for Leaders — Strategic Fluency (flagship); AI Adoption Roadmap Workshop; Executive Analytics for Decision-Makers; Strategic Innovation with AI."},{h:"Generative AI & Agentic AI Bootcamp",flagship:!0,p:"LLMs, RAG, Prompt Engineering, MCP, Deployment."}]},{id:"university",label:"University & College",steps:[{h:"Undergraduate Track",p:"Data Analytics for Undergraduates (Excel → MySQL → Tableau/Power BI → Python → Business Stats → capstone).",cert:!0},{h:"Postgraduate / MBA Track",p:"Business Analytics & ML for Managers (Python, regression, ML, credit/churn/revenue modelling, capstone).",cert:!0},{h:"Generative AI & Agentic AI Bootcamp",flagship:!0,p:"LLMs, RAG, Prompt Engineering, MCP, Deployment — for UG/PG cohorts."}]}]},Ri={video:"consulting-vault",label:"Consulting Practice",headA:"Data & Analytics ",headAccent:"Consulting",sub:"Beyond training, OranjeStride brings deep domain expertise to complex analytical problems — working with quant firms, sovereign funds, and government research bodies on high-stakes data challenges.",items:[{prop:"chart",h:"Quant Research & Risk Analytics",p:"Statistical modeling, factor analysis, risk scoring, backtesting → portfolio analytics."},{prop:"chip",h:"Financial Forecasting & Fraud Detection",p:"ML fraud detection, credit risk models, forecasting pipelines."},{prop:"node",h:"Government & Policy Research Analytics",p:"Analytics roadmaps, data governance, policy impact modeling."}],hudTitle:"Engagement Metrics",metrics:[{label:"Post-training technique adoption",value:"90%+"},{label:"Within-30-day application rate",value:"90%+"},{label:"Post-session community engagement",value:"90%+"},{label:"Average cohort completion",value:"85%+"},{label:"Sustained feedback",value:"4.8/5"}],bars:[{label:"Learner Satisfaction",value:96},{label:"Completion Rate",value:85},{label:"Skill Adoption",value:90}]},Qr={video:"india-tour-globe",label:"International Programme",headA:"India AI ",headAccent:"Learning Tour",sub:"Experience AI & Data Science education at its source. An immersive learning journey in India — combining world-class curriculum, hands-on labs, and the academic credibility of a co-signed certificate from a university of repute in India.",features:[{h:"Come to India. Learn at the Source.",p:"Structured, immersive programme on a partner university campus or executive training facility."},{h:"Practitioner-Led Curriculum",p:"OranjeStride faculty with live corporate experience (Accenture, EXL Services, global financial institutions). No pre-recorded content."},{h:"Hands-On Labs & Real Projects",p:"Real datasets from participants' own sectors (banking, insurance, government, FMCG); leave with deployable code/dashboards."},{h:"Cultural Immersion + Networking",p:"Campus visits, industry interfaces, peer cohorts from across the globe."},{h:"University-Backed Certificate",p:"Jointly signed by OranjeStride & a university of repute in India."}]},ai={video:"clients-monument",label:"Our Reach",headA:"Trusted By Elite ",headAccent:"Institutions",sub:"From India's premier management schools to Fortune 500 leadership teams and government ministries — OranjeStride's programmes build capability where it matters most.",cta:"View Our Clients & Partners",hint:"16 organisations across academia, enterprise & government — explore the full roster.",roster:[{n:"IIM Visakhapatnam",t:"Management School",c:"academic",rel:"Postgraduate analytics cohort partner"},{n:"IIM Sambalpur",t:"Management School",c:"academic",rel:"MBA business-analytics faculty engagement"},{n:"Christ University",t:"University",c:"academic",rel:"Undergraduate data-analytics programme"},{n:"ISBF",t:"Business School",c:"academic",rel:"Applied ML elective delivery"},{n:"Great Learning",t:"Ed-Tech Platform",c:"academic",rel:"Curriculum & live-session partner"},{n:"NIIT",t:"Training Institute",c:"academic",rel:"Corporate upskilling collaborator"},{n:"Imarticus",t:"Training Institute",c:"academic",rel:"Data science bootcamp faculty"},{n:"IMS Proschool",t:"Training Institute",c:"academic",rel:"Analytics certification partner"},{n:"EduEdgePro",t:"Ed-Tech Platform",c:"academic",rel:"Gen AI content collaboration"},{n:"EY (Ernst & Young)",t:"Big 4 Consulting",c:"corporate",rel:"Executive AI-strategy workshops"},{n:"Hexaware Technologies",t:"IT Enterprise",c:"corporate",rel:"ML upskilling for delivery teams"},{n:"Havells India",t:"Manufacturing",c:"corporate",rel:"Analytics for operations leadership"},{n:"Colt Technology",t:"Telecom",c:"corporate",rel:"Data science enablement programme"},{n:"Room to Read",t:"NGO / Social Sector",c:"corporate",rel:"Impact-analytics capacity building"},{n:"Bennett & Coleman",t:"Media Group",c:"corporate",rel:"Newsroom analytics training"},{n:"AJNIFM (Govt. of India)",t:"Government Ministry",c:"corporate",rel:"Public-sector AI research advisory"}]},Ti={video:"closing-emblem",label:"Get In Touch",headA:"Let's Build ",headAccent:"Outcomes",headB:" Together",sub:"Whether you're an institution designing a curriculum, a company upskilling teams, or a fund needing analytics depth — we'd love to hear from you.",trust:["Practitioner-Led","University-Backed Certificate","1000+ Trained","4.8/5 Rated"],tokens:[{icon:"mail",strong:"contactus@oranjestride.com",span:"Email us"},{icon:"phone",strong:"+91 93117 90400",span:"Call us"},{icon:"pin",strong:"Safdarjung Enclave, New Delhi",span:"India"}],formAction:"https://formspree.io/f/mjgaovpl",enquiryOptions:["Corporate AI / ML Training - Banking & Finance","Corporate AI / ML Training - Healthcare & Pharma","Corporate AI / ML Training - Insurance","Corporate AI / ML Training - FMCG & Retail","Corporate AI / ML Training - Government & Public Sector","Corporate AI / ML Training - Media, Tech & Telecom","University Partnership - Undergraduate Programme","University Partnership - Postgraduate / MBA Programme","C-Suite & Leadership Workshop","Blue Ocean Strategy + AI Workshop","India AI Learning Tour","Data & Analytics Consulting","Quant / Fund Analytics","Government Research Advisory","Other"]},so={badge:"◆ DataStride",pill:"New from OranjeStride",subtitle:"Interactive SQL Learning Platform by OranjeStride",desc:"Master SQL from the ground up through a fully browser-based, hands-on learning environment. DataStride is OranjeStride's dedicated platform for building real query-writing fluency — no installation, no setup. Write live SQL, solve business-scenario challenges, and progress from SELECT basics to advanced window functions and joins, all in one place.",features:[{ico:"⚡",h:"Live SQL Editor",p:"Write and run real SQL queries directly in your browser with instant feedback."},{ico:"📚",h:"Structured Curriculum",p:"From SELECT & WHERE to JOINs, subqueries, aggregations, and window functions."},{ico:"🎯",h:"Business Challenges",p:"Real-world datasets drawn from finance, retail, and HR to build job-ready skills."}],url:"https://data-stride.vercel.app/"},fA={text:"New cohort enrolling — limited seats · India AI Learning Tour 2026"},pA={bubble:"Hi, I'm Marut, Welcome to OranjeStride!"},co={video:"mascot-soaring-banner",eyebrow:"The Mark in Motion",headA:"Carry the ",headAccent:"Momentum",dots:{brand:"Stride"}};function mA(){return`
  <section class="band" id="stats">
    <div class="facet-bg" aria-hidden="true"></div>
    <div class="sec-content">
      <div class="stats-grid stagger">
        ${dA.map(r=>`
          <div class="stat">
            <strong data-count="${r.value}" data-decimals="${r.decimals}" data-suffix="${r.suffix}">0</strong>
            <span>${r.label}</span>
          </div>`).join("")}
      </div>
    </div>
  </section>`}function gA(){qt("#stats [data-count]").forEach(r=>{const e=parseFloat(r.dataset.count),t=parseInt(r.dataset.decimals||"0",10),n=r.dataset.suffix||"",i=1600,s=performance.now();r.classList.add("ticking"),function o(a){const l=Math.min(1,(a-s)/i),c=1-Math.pow(1-l,3);r.textContent=(e*c).toFixed(t)+(l===1?n:""),l<1?requestAnimationFrame(o):r.classList.remove("ticking")}(s)})}function _A(){return`
  <section class="section video-section" id="consulting" data-video="${Ri.video}">
    ${Hr(Ri.video)}
    <div class="sec-content">
      <p class="section-label reveal">${Ri.label}</p>
      <h2 class="headline reveal">${Ri.headA}<span class="accent">${Ri.headAccent}</span></h2>
      <p class="subhead reveal" style="margin-bottom:2rem;">${Ri.sub}</p>
      <div class="consult-layout">
        <div class="consult-items stagger">
          ${Ri.items.map(r=>`
            <div class="consult-item">
              <div class="consult-icon">${Mg(r.prop)}</div>
              <div><h4>${r.h}</h4><p>${r.p}</p></div>
            </div>`).join("")}
        </div>
        <div class="hud reveal">
          <h4>${Ri.hudTitle}</h4>
          ${Ri.metrics.map(r=>`<div class="data-row"><span>${r.label}</span><strong>${r.value}</strong></div>`).join("")}
          ${Ri.bars.map(r=>`
            <div class="bar">
              <div class="data-row" style="border:none;"><span>${r.label}</span><strong>${r.value}%</strong></div>
              <div class="bar-line"><div class="bar-fill" data-w="${r.value}"></div></div>
            </div>`).join("")}
        </div>
      </div>
    </div>
  </section>`}function vA(){qt("#consulting .bar-fill").forEach(r=>{r.style.width=(r.dataset.w||0)+"%"})}function xA(){const r=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("in"),t.target.id==="stats"&&gA(),t.target.id==="consulting"&&vA(),r.unobserve(t.target))})},{threshold:.18,rootMargin:"0px 0px -8% 0px"});return qt(".reveal, .stagger, #stats, #consulting").forEach(e=>r.observe(e)),{revealHero(){qt("#hero .reveal").forEach((e,t)=>setTimeout(()=>e.classList.add("in"),t*110))}}}function yA({reduced:r}){if(r)return;const e=qt("main .section, main .band");for(const t of e){const n=t.querySelector(".sec-content");if(!n)continue;const i=t.id==="hero",s=en.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:t,start:i?"top top":"top 78%",end:"bottom 22%",scrub:!0,invalidateOnRefresh:!0}});i?s.set(n,{y:0,autoAlpha:1}).to(n,{y:0,autoAlpha:1,duration:.8}):s.fromTo(n,{y:70,autoAlpha:0},{y:0,autoAlpha:1,duration:.22}).to(n,{y:0,autoAlpha:1,duration:.58}),s.to(n,{y:-50,autoAlpha:0,duration:.2})}}function MA({reduced:r}){const e=qt(".sec-video, .about-media video"),t=new IntersectionObserver(l=>{l.forEach(c=>{const u=c.target;c.isIntersecting&&u.dataset.src&&!u.src&&(u.src=u.dataset.src,u.load())})},{rootMargin:"200% 0px"});if(e.forEach(l=>t.observe(l)),r)return;const n=new IntersectionObserver(l=>{l.forEach(c=>{const u=c.target;u.dataset.scrub||(c.isIntersecting?u.play?.().catch(()=>{}):u.pause?.())})},{threshold:.1});e.forEach(l=>{l.dataset.scrub||n.observe(l)});const i=[...new Set(qt('[data-scrub="true"]').map(l=>l.closest(".section")).filter(Boolean))];if(!i.length)return;let s=innerHeight;addEventListener("resize",()=>{s=innerHeight},{passive:!0});const o=()=>{const l=scrollY;i.forEach(c=>{const u=c.querySelector(".sec-video");if(!u||u.readyState<1||!u.duration)return;const h=c.getBoundingClientRect(),f=h.top+l,d=Lx((l+s-f)/(h.height+s),0,1);u.paused||u.pause();const m=d*(u.duration-.05);if(Math.abs(u.currentTime-m)>.03)try{u.currentTime=m}catch{}})};let a=!1;addEventListener("scroll",()=>{a||(a=!0,requestAnimationFrame(()=>{o(),a=!1}))},{passive:!0})}function bA({showcase:r,marut:e,mode:t,reduced:n}){const i=Rt("#marut-bubble"),s=Rt("#marut-bubble-text");if(!i||!s)return;window.__marutIntro=r&&e?"glide":"flat";const o=l=>{const c=pA.bubble;if(n){s.textContent=c,i.classList.add("typed"),l?.();return}let u=0;i.classList.add("typing");const h=setInterval(()=>{s.textContent=c.slice(0,++u),u>=c.length&&(clearInterval(h),i.classList.remove("typing"),i.classList.add("typed"),l?.())},46)},a=()=>{i.classList.add("show"),o(()=>en.delayedCall(3.4,()=>i.classList.add("hide")))};if(!r||!e){document.body.classList.add("intro-flat"),en.delayedCall(n?.1:.9,a);return}scrollY>innerHeight*.5||r.introToHero(t).then(()=>a())}function SA(){return`
    <canvas id="gl-canvas" aria-hidden="true"></canvas>
    <div class="grain" aria-hidden="true"></div>
    <div class="vignette" aria-hidden="true"></div>
    <div class="cursor-dot" aria-hidden="true"></div>
    <div class="cursor-ring" aria-hidden="true"></div>
    <div class="ribbon" role="status">
      <span class="ribbon-text">${fA.text}</span>
      <button class="ribbon-close" aria-label="Dismiss" id="ribbon-close">✕</button>
    </div>`}function TA(){return`
  <footer>
    <div class="footer-brand">
      <img src="${Px()}" alt="OranjeStride" />
      <div><strong>${sd.legal}</strong><span>${sd.tagline}</span></div>
    </div>
    <nav class="footer-links" aria-label="Footer">
      ${Zd.links.map(r=>`<a href="#${r.id}">${r.label}</a>`).join("")}
    </nav>
  </footer>`}function EA(){document.getElementById("ribbon-close")?.addEventListener("click",()=>document.body.classList.remove("ribbon-on"))}function wA(){return`
  <div id="preloader">
    <video class="pre-video" id="pre-video" muted playsinline autoplay loop
           preload="auto" src="${Oc("mascot-flight-loop")}"
           poster="${Fc("mascot-flight-loop")}" aria-hidden="true"></video>
    <div class="pre-video-scrim" aria-hidden="true"></div>

    <!-- Static branded loader: canvas emblem (no-video fallback) -->
    <div class="pre-inner">
      <canvas id="pre-canvas" width="520" height="520"></canvas>
      <div class="pre-word">${Bc()}</div>
    </div>

    <!-- HUD: shared by both loader modes -->
    <div class="pre-hud">
      <div class="pre-hud-word">${Bc()}</div>
      <div class="pre-bar"><i id="pre-fill"></i></div>
      <span class="pre-pct" id="pre-pct">0</span>
    </div>

  </div>`}const AA=(r,e)=>Promise.race([r,new Promise(t=>setTimeout(t,e))]);function CA(r){const e=[],t=(s,o)=>e.push(AA(o,8e3).catch(()=>{}).then(()=>r(s)));t(.15,document.fonts?.ready||Promise.resolve());const n=new Image;n.src=Fc("hero-opening"),t(.15,n.decode?n.decode():Promise.resolve());const i=document.querySelector("#hero .sec-video");return t(.2,i?i.readyState>=1?Promise.resolve():new Promise(s=>i.addEventListener("loadedmetadata",s,{once:!0})):Promise.resolve()),t(.2,window.__marutReady||Promise.resolve()),t(.3,document.readyState==="complete"?Promise.resolve():new Promise(s=>addEventListener("load",s,{once:!0}))),Promise.all(e)}function RA({reduced:r,onDone:e}){const t=document.getElementById("preloader"),n=document.getElementById("pre-fill"),i=document.getElementById("pre-pct"),s=document.getElementById("pre-video"),o=document.getElementById("pre-canvas");document.body.classList.add("locked");const a=(x,v)=>{setTimeout(()=>{t.classList.add("done"),document.body.classList.remove("locked"),e?.(v),setTimeout(()=>t.remove(),1e3)},x)};if(r){t.classList.add("static-mode","flash"),s.removeAttribute("src"),a(260,"reduced");return}let l=0,c=0,u=!1;const h=CA(x=>{l=Math.min(1,l+x)}),f=new Promise(x=>setTimeout(x,1800));(function x(){u||(c+=(l*100-c)*.08,n&&(n.style.width=`${c}%`),i&&(i.textContent=`${Math.round(c)}`),requestAnimationFrame(x))})();let d="video";const m=navigator.connection;m&&(m.saveData||/(^|\b)2g/.test(m.effectiveType||""))&&(d="static");const _=()=>{d!=="static-live"&&(d="static-live",t.classList.add("static-mode"),s.pause(),s.removeAttribute("src"),o&&PA(o))};if(d==="static")_();else{const x=setTimeout(()=>{s.readyState<2&&s.paused&&_()},1600);s.addEventListener("error",()=>{clearTimeout(x),_()},{once:!0}),s.play().catch(()=>{}),s.addEventListener("playing",()=>clearTimeout(x),{once:!0})}const g=document.createElement("video");g.muted=!0,g.playsInline=!0,g.preload="auto",setTimeout(()=>{d==="video"&&(g.src=Oc("mascot-flight-portal"))},900),Promise.all([h,f]).then(async()=>{if(u=!0,n&&(n.style.width="100%"),i&&(i.textContent="100"),d!=="video"){a(700,"static");return}g.src||(g.src=Oc("mascot-flight-portal")),g.className="pre-video",g.setAttribute("aria-hidden","true"),t.prepend(g);try{await g.play(),s.remove()}catch{g.remove()}const x=g.isConnected?g:null;(x?Promise.race([new Promise(y=>x.addEventListener("ended",y,{once:!0})),new Promise(y=>setTimeout(y,5600))]):Promise.resolve()).then(()=>p())});function p(){document.body.classList.remove("locked");const x={r:0},v=50,y=44,E=()=>{const M=`radial-gradient(circle at ${v}% ${y}%, transparent ${x.r}%, #000 ${x.r+.5}%)`;t.style.webkitMaskImage=M,t.style.maskImage=M},S=en.timeline({onComplete(){t.remove(),delete window.__loaderTL}});window.__loaderTL=S,S.add(()=>e?.("video"),.15),S.to(x,{r:142,duration:1.25,ease:"power3.inOut",onUpdate:E},0)}}function PA(r){const e=r.getContext("2d"),t=r.width,n=r.height,i=t/2,s=n/2,o=[[0,-120],[70,0],[0,120],[-70,0]],a=[];for(let u=0;u<4;u++){const h=o[u],f=o[(u+1)%4];for(let d=0;d<30;d++){const m=d/30;a.push([i+h[0]+(f[0]-h[0])*m,s+h[1]+(f[1]-h[1])*m])}}const l=a.map(u=>({x:i+(Math.random()-.5)*t,y:s+(Math.random()-.5)*n,tx:u[0],ty:u[1]})),c=performance.now();(function u(h){const f=(h-c)/1e3,d=Math.min(1,f/1.4),m=Math.max(0,(f-1.4)/.8);e.clearRect(0,0,t,n),l.forEach(_=>{_.x+=(_.tx-_.x)*.06,_.y+=(_.ty-_.y)*.06,e.beginPath(),e.arc(_.x,_.y,1.6+m*1.5,0,7),e.fillStyle=`rgba(255,${106+m*80|0},0,${.5+d*.5})`,e.shadowBlur=8+m*24,e.shadowColor="#ff6a00",e.fill()}),m>0&&(e.beginPath(),e.moveTo(i,s-120),e.lineTo(i+70,s),e.lineTo(i,s+120),e.lineTo(i-70,s),e.closePath(),e.strokeStyle=`rgba(255,140,40,${Math.min(1,m)})`,e.lineWidth=2,e.shadowBlur=30,e.stroke()),f<2.6&&requestAnimationFrame(u)})(c)}function LA(){return`
  <nav class="nav" aria-label="Primary">
    <a class="nav-brand" href="#hero" aria-label="OranjeStride home">
      ${sl("idle","nav")}
      ${Bc()}
    </a>
    <div class="nav-links" id="nav-links">
      ${Zd.links.map(r=>`<a href="#${r.id}">${r.label}</a>`).join("")}
    </div>
    <div class="nav-dots" id="nav-dots" aria-hidden="true"></div>
    <button class="nav-burger" id="nav-burger" aria-label="Toggle menu"><span></span><span></span><span></span></button>
  </nav>`}function IA({lenis:r,sections:e}){const t=Rt(".nav"),n=Rt("#nav-dots");e.forEach(l=>{const c=document.createElement("button");c.dataset.id=l.id;const u=Zd.dots[l.id]||co.dots[l.id]||l.id;c.title=u,c.setAttribute("aria-label",u),c.addEventListener("click",()=>{const h=document.getElementById(l.id);r?r.scrollTo(h):h.scrollIntoView({behavior:"smooth"})}),n.appendChild(c)});const i=()=>(document.getElementById("hero")?.offsetHeight||innerHeight)*.5,s=()=>{const l=scrollY>i();t.classList.toggle("visible",l),t.classList.toggle("solid",l)};addEventListener("scroll",s,{passive:!0}),s();const o=Rt("#nav-burger"),a=Rt("#nav-links");o?.addEventListener("click",()=>a.classList.toggle("mobile-open"))}function DA(r){qt("#nav-dots button").forEach(e=>e.classList.toggle("active",e.dataset.id===r))}const O_=()=>Rt("#nav-links")?.classList.remove("mobile-open");function UA(){return`
  <section class="section video-section" id="hero" data-video="${Ci.video}" data-scrub="true">
    ${Hr(Ci.video,{scrub:!0})}
    <div class="sec-content">
      <p class="eyebrow reveal">${Ci.eyebrow}</p>
      <p class="reveal" style="margin-bottom:0.6rem;">${Bc("clamp(1.4rem,3vw,2rem)")}</p>
      <h1 class="display reveal">${Ci.headlineA}<span class="accent">${Ci.headlineAccent}</span></h1>
      <p class="subhead reveal">${Ci.subhead}</p>
      <p class="motto reveal">${sd.motto}</p>
      <div class="cta-row reveal">
        <a class="btn btn-primary" href="${Ci.ctaPrimary.target}">${Ci.ctaPrimary.label}</a>
        <a class="btn btn-ghost" href="${Ci.ctaSecondary.target}">${Ci.ctaSecondary.label}</a>
      </div>
    </div>
    ${sl("wave","hero",{label:"OranjeStride mascot"})}
    <!-- Marut's self-intro: typed beside the character after the loader -->
    <div class="marut-bubble" id="marut-bubble" role="status">
      <span id="marut-bubble-text"></span><i class="mb-caret" aria-hidden="true"></i>
    </div>
    <div class="hero-scroll-hint" aria-hidden="true">Scroll</div>
  </section>`}function NA(){return`
  <section class="section video-section band-moment" id="brand" data-video="${co.video}">
    ${Hr(co.video)}
    <div class="sec-content">
      <p class="eyebrow reveal">${co.eyebrow}</p>
      <h2 class="headline reveal">${co.headA}<span class="accent">${co.headAccent}</span></h2>
    </div>
  </section>`}function OA(){return`
  <section class="section" id="about">
    <div class="facet-bg" aria-hidden="true"></div>
    <div class="sec-content">
      <div class="about-grid">
        <div>
          <p class="section-label reveal">${cc.label}</p>
          <h2 class="headline reveal">${cc.headA}<span class="accent">${cc.headAccent}</span></h2>
          <div class="principles stagger" style="margin-top:1.8rem;">
            ${cc.principles.map(r=>`
              <div class="principle">
                <span class="num">${r.n}</span>
                <div><h3>${r.h}</h3><p>${r.p}</p></div>
              </div>`).join("")}
          </div>
        </div>

        <!-- Media pane: empty framed stage the showcase camera fills with the
             live Marut; the flat still shows only on the reduced-motion tier. -->
        <div class="about-media about-stage reveal" id="about-mascot-mount">
          <span class="about-stage-glow" aria-hidden="true"></span>
          <img class="mascot-img about-mascot-img" src="${Ao("idle","webp")}"
               alt="The OranjeStride mascot" decoding="async" />
          <span class="about-stage-floor" aria-hidden="true"></span>
        </div>
      </div>
    </div>
  </section>`}function FA(){return`
  <section class="section video-section" id="expertise" data-video="${Kr.video}">
    ${Hr(Kr.video)}
    <div class="sec-content">
      <p class="section-label reveal">${Kr.label}</p>
      <h2 class="headline reveal">${Kr.headA}<span class="accent">${Kr.headAccent}</span></h2>
      <p class="subhead reveal">${Kr.sub}</p>
      <div class="grid-cards stagger">
        ${Kr.cards.map(r=>`
          <article class="gem-card">
            <div class="gem-icon">${Mg(r.prop)}</div>
            <h3>${r.h}</h3>
            <p>${r.p}</p>
            <div class="tags">${r.tags.map(e=>`<span class="tag">${e}</span>`).join("")}</div>
          </article>`).join("")}
      </div>
    </div>
  </section>`}function BA(){return`
  <section class="band" id="testimonials">
    <div class="facet-bg" aria-hidden="true"></div>
    <div class="sec-content">
      <p class="section-label reveal">${uc.label}</p>
      <h2 class="headline reveal">${uc.headA}<span class="accent">${uc.headAccent}</span></h2>
      <div class="testi-grid stagger">
        ${uc.items.map(r=>`
          <div class="testi">
            <div class="stars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote>"${r.quote}"</blockquote>
            <div class="testi-who">
              <div class="avatar">${r.initial}</div>
              <div><strong>${r.name}</strong><span>${r.org}</span></div>
            </div>
          </div>`).join("")}
      </div>
    </div>
  </section>`}const kA=`
  <svg class="spot-sweep" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3787 2842" fill="none">
    <g filter="url(#spot-blur)">
      <ellipse cx="1924.71" cy="273.501" rx="1924.71" ry="273.501"
        transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
        fill="#fff2e6" fill-opacity="0.21"></ellipse>
    </g>
    <defs>
      <filter id="spot-blur" x="0.860352" y="0.838989" width="3785.16" height="2840.26"
        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
        <feGaussianBlur stdDeviation="151"></feGaussianBlur>
      </filter>
    </defs>
  </svg>`;function zA(){return`
  <section class="band" id="mascot-lab">
    <div class="facet-bg" aria-hidden="true"></div>
    <div class="sec-content">
      <div class="lab-card reveal">
        ${kA}
        <div class="lab-split">
          <div class="lab-copy">
            <p class="section-label">${ro.label}</p>
            <h2 class="headline lab-grad">${ro.headA}<span class="accent">${ro.headAccent}</span></h2>
            <p class="lead">${ro.sub}</p>
            <div class="lab-chips" aria-label="Play a mascot animation">
              <span class="lab-hint">${ro.hint}</span>
              ${ro.clips.map(r=>`
                <button class="lab-chip" type="button" data-clip="${r.clip}"
                        aria-label="Play ${r.label} animation">${r.label}</button>`).join("")}
            </div>
          </div>
          <div class="lab-stage" id="mascotlab-mount">
            <img class="lab-fallback-img" src="${Ao("idle","webp")}"
                 alt="The OranjeStride mascot" decoding="async" loading="lazy" />
            <span class="drag-hint" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>
              Drag to rotate
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>`}function VA(r){r&&qt("#mascot-lab .lab-chip").forEach(e=>{e.addEventListener("click",()=>{r.play?.(e.dataset.clip),e.classList.add("played"),setTimeout(()=>e.classList.remove("played"),350)})})}const HA=r=>`
  <div class="step">
    <h4>${r.h}${r.flagship?' <span class="accent">· Flagship</span>':""}</h4>
    <p>${r.p}</p>
    ${r.cert?`<p class="cert">${er.cert}</p>`:""}
  </div>`;function GA(){return`
  <section class="section video-section" id="programmes" data-video="${er.video}" data-scrub="true">
    ${Hr(er.video,{scrub:!0})}
    <div class="sec-content">
      <div class="prog-layout">
        <div>
          <p class="section-label reveal">${er.label}</p>
          <h2 class="headline reveal">${er.headA}<span class="accent">${er.headAccent}</span></h2>
          <p class="lead reveal">${er.sub}</p>
          <div class="tabs reveal" role="tablist" style="margin-top:1.8rem;">
            ${er.tabs.map((r,e)=>`<button class="tab${e===0?" active":""}" data-tab="${r.id}" role="tab">${r.label}</button>`).join("")}
          </div>
        </div>
        <div>
          ${er.tabs.map((r,e)=>`
            <div class="tab-panel${e===0?" active":""}" data-panel="${r.id}">
              ${r.steps.map(HA).join("")}
            </div>`).join("")}
        </div>
      </div>
    </div>
    <!-- Flat run still: reduced-motion tier only — the live tier's run is the
         procedural Marut sprinting in the showcase camera frame. -->
    ${sl("run","programmes")}
  </section>`}function WA(){const r=qt("#programmes .tab"),e=qt("#programmes .tab-panel");r.forEach(n=>n.addEventListener("click",()=>{r.forEach(i=>i.classList.remove("active")),e.forEach(i=>i.classList.remove("active")),n.classList.add("active"),Rt(`#programmes .tab-panel[data-panel="${n.dataset.tab}"]`)?.classList.add("active")}));const t=()=>{const n=Rt("#programmes .tab-panel.active");if(!n)return;const i=qt(".step",n),s=innerHeight/2;let o=null,a=1/0;i.forEach(l=>{const c=l.getBoundingClientRect(),u=Math.abs(c.top+c.height/2-s);u<a&&(a=u,o=l)}),i.forEach(l=>l.classList.toggle("active-step",l===o))};addEventListener("scroll",()=>requestAnimationFrame(t),{passive:!0}),t()}function XA(){return`
  <section class="section video-section" id="tour" data-video="${Qr.video}">
    ${Hr(Qr.video)}
    <div class="sec-content">
      <div class="tour-layout">
        <div>
          <p class="section-label reveal">${Qr.label}</p>
          <h2 class="headline reveal">${Qr.headA}<span class="accent">${Qr.headAccent}</span></h2>
          <p class="lead reveal">${Qr.sub}</p>
        </div>
        <div class="tour-features stagger">
          ${Qr.features.map(r=>`
            <div class="tour-feat">
              <span class="dot"></span>
              <div><h4>${r.h}</h4><p>${r.p}</p></div>
            </div>`).join("")}
        </div>
      </div>
    </div>
    ${sl("point","tour")}
  </section>`}const YA=()=>{const r=ai.roster.filter(t=>t.c==="academic").length,e=ai.roster.filter(t=>t.c==="corporate").length;return{all:ai.roster.length,academic:r,corporate:e}};function $A(){return`
  <section class="section video-section" id="clients" data-video="${ai.video}">
    ${Hr(ai.video)}
    <div class="clients-fog" aria-hidden="true"></div>
    <div class="sec-content">
      <p class="section-label reveal">${ai.label}</p>
      <h2 class="headline reveal">${ai.headA}<span class="accent">${ai.headAccent}</span></h2>
      <p class="subhead reveal">${ai.sub}</p>
      <button class="btn btn-primary clients-cta-btn reveal" id="open-clients">${ai.cta} →</button>
      <p class="clients-hint reveal">${ai.hint}</p>
    </div>
    ${sl("idle","clients",{faint:!0})}
  </section>`}function qA(){const r=YA();return`
  <div class="cg-overlay" id="clients-modal" role="dialog" aria-modal="true" aria-labelledby="cg-title">
    <div class="cg-modal">
      <button class="cg-close" id="close-clients" aria-label="Close">✕</button>
      <div class="cg-head">
        <h3 id="cg-title">Clients &amp; Partners</h3>
        <p>${r.all} organisations across academia, enterprise &amp; government. Hover a card for the relationship.</p>
      </div>
      <div class="cg-tabs" id="cg-tabs">
        <button class="cg-tab active" data-filter="all">All <span>${r.all}</span></button>
        <button class="cg-tab" data-filter="academic">Academic <span>${r.academic}</span></button>
        <button class="cg-tab" data-filter="corporate">Corporate <span>${r.corporate}</span></button>
      </div>
      <div class="cg-grid" id="cg-grid" data-filter="all">
        ${ai.roster.map(e=>`
          <div class="cg-card" data-cat="${e.c}">
            <div class="cg-name">${e.n}<br><span class="cg-type">${e.t}</span></div>
            <div class="cg-cap">${e.rel}</div>
          </div>`).join("")}
      </div>
      <div class="cg-foot">
        <span>Building capability where it matters most.</span>
        <a class="btn btn-primary" href="#contact" id="cg-contact">Partner With Us →</a>
      </div>
    </div>
  </div>`}function jA({lenis:r}){const e=Rt("#clients-modal"),t=Rt("#cg-grid"),n=()=>{e.classList.add("open"),r?.stop(),document.body.style.overflow="hidden"},i=()=>{e.classList.remove("open"),r?.start(),document.body.style.overflow=""};return Rt("#open-clients")?.addEventListener("click",n),Rt("#close-clients")?.addEventListener("click",i),Rt("#cg-contact")?.addEventListener("click",i),e.addEventListener("click",s=>{s.target===e&&i()}),qt("#cg-tabs .cg-tab").forEach(s=>s.addEventListener("click",()=>{qt("#cg-tabs .cg-tab").forEach(o=>o.classList.remove("active")),s.classList.add("active"),t.dataset.filter=s.dataset.filter})),{close:i}}const ZA=["check","cap","users","star"];function JA(){return`
  <section class="section video-section" id="contact" data-video="${Ti.video}" data-scrub="true">
    ${Hr(Ti.video,{scrub:!0})}
    <div class="sec-content">
      <p class="section-label reveal" style="text-align:center;">${Ti.label}</p>
      <h2 class="headline reveal" style="text-align:center;">${Ti.headA}<span class="accent">${Ti.headAccent}</span>${Ti.headB}</h2>
      <p class="subhead reveal" style="text-align:center;margin:0 auto 2rem;">${Ti.sub}</p>

      <div class="trust-row reveal" style="justify-content:center;">
        ${Ti.trust.map((r,e)=>`<span class="trust-chip">${zf(ZA[e])}${r}</span>`).join("")}
      </div>

      <div class="contact-layout">
        <div>
          <div class="contact-tokens">
            ${Ti.tokens.map(r=>`
              <div class="contact-token reveal">
                <span class="ico">${zf(r.icon)}</span>
                <div><strong>${r.strong}</strong><span>${r.span}</span></div>
              </div>`).join("")}
          </div>
          <!-- Mascot stage: fills the empty space under the tokens (never behind
               the form). Reduced-motion tier only — the live tier frames the
               procedural Marut cheering in the section's top-left instead. -->
          <div class="contact-mascot-stage reveal" id="contact-mascot-mount" aria-hidden="true">
            <img class="contact-mascot-img" src="${Ao("idle","webp")}" alt="" decoding="async" />
            <span class="contact-mascot-floor"></span>
          </div>
        </div>

        <form class="form reveal" action="${Ti.formAction}" method="POST">
          <div class="form-row">
            <label>Full Name<input type="text" name="name" class="form-input" placeholder="Your name" required /></label>
            <label>Organisation<input type="text" name="organisation" class="form-input" placeholder="Company / Institution" /></label>
          </div>
          <label>Email Address<input type="email" name="email" class="form-input" placeholder="you@organisation.com" required /></label>
          <label>Enquiry Type
            <select name="enquiry_type" class="form-input">
              <option value="">Select an option</option>
              ${Ti.enquiryOptions.map(r=>`<option>${r}</option>`).join("")}
            </select>
          </label>
          <label>Message<textarea name="message" class="form-input" placeholder="Tell us about your goals or requirements..."></textarea></label>
          <button class="btn btn-primary" id="submitBtn" type="submit">Send Enquiry</button>
          <p class="form-status" id="form-status" role="status"></p>
        </form>
      </div>
    </div>
  </section>`}function KA(){const r=Rt("#contact form"),e=Rt("#form-status"),t=Rt("#submitBtn");r&&r.addEventListener("submit",async n=>{n.preventDefault(),e.className="form-status",e.textContent="",t.textContent="Sending…",t.disabled=!0;try{if(!(await fetch(r.action,{method:"POST",headers:{Accept:"application/json"},body:new FormData(r)})).ok)throw new Error("bad response");e.className="form-status ok",e.textContent="Thank you — your enquiry has been sent. We'll be in touch shortly.",r.reset()}catch{e.className="form-status err",e.textContent="Something went wrong. Please email contactus@oranjestride.com directly."}finally{t.textContent="Send Enquiry",t.disabled=!1}})}function QA(){return`
  <button class="ds-badge" id="ds-badge" aria-label="Discover DataStride">${so.badge}</button>
  <div class="ds-overlay" id="ds-popup" role="dialog" aria-modal="true" aria-labelledby="ds-title">
    <div class="ds-card">
      <button class="ds-close" id="ds-close" aria-label="Close">✕</button>
      <div class="ds-top">
        <div class="ds-pill">${so.pill}</div>
        <div class="ds-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#180a00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg></div>
        <div><h3 id="ds-title"><span>Data</span>Stride</h3><p>${so.subtitle}</p></div>
      </div>
      <div class="ds-body">
        <p class="ds-desc">${so.desc}</p>
        <div class="ds-features">
          ${so.features.map(r=>`
            <div class="ds-feature">
              <div class="ds-feature-ico">${r.ico}</div>
              <div><h4>${r.h}</h4><p>${r.p}</p></div>
            </div>`).join("")}
        </div>
        <div class="ds-actions">
          <a href="${so.url}" target="_blank" rel="noopener" class="btn btn-primary">Explore DataStride →</a>
          <button class="ds-dismiss" id="ds-later" type="button">Maybe Later</button>
        </div>
      </div>
    </div>
  </div>`}function e2({lenis:r}){const e=Rt("#ds-popup"),t=()=>{e.classList.add("open"),r?.stop(),document.body.style.overflow="hidden"},n=()=>{e.classList.remove("open"),r?.start(),document.body.style.overflow=""};return Rt("#ds-badge")?.addEventListener("click",t),Rt("#ds-close")?.addEventListener("click",n),Rt("#ds-later")?.addEventListener("click",n),e.addEventListener("click",i=>{i.target===e&&n()}),{close:n}}const t2=new URLSearchParams(location.search).get("motion"),Ai=t2==="reduce";Ai||document.body.classList.add("motion-full");const n2=document.getElementById("app");n2.innerHTML=`
  ${SA()}
  ${wA()}
  ${LA()}
  <main>
    ${UA()}
    ${NA()}
    ${mA()}
    ${OA()}
    ${FA()}
    ${BA()}
    ${zA()}
    ${GA()}
    ${_A()}
    ${XA()}
    ${$A()}
    ${JA()}
  </main>
  ${TA()}
  ${qA()}
  ${QA()}
`;en.registerPlugin(Ke);let cr=null;Ai||(cr=new Rx({duration:1.15,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r))}),cr.on("scroll",Ke.update),en.ticker.add(r=>cr.raf(r*1e3)),en.ticker.lagSmoothing(0));qt('a[href^="#"]').forEach(r=>r.addEventListener("click",e=>{const t=r.getAttribute("href");if(t.length<2)return;const n=Rt(t);n&&(e.preventDefault(),O_(),cr?cr.scrollTo(n,{duration:1.3}):n.scrollIntoView({behavior:Ai?"auto":"smooth"}))}));window.OS3D=Cw({reduced:Ai});const i2=matchMedia("(max-width: 900px)").matches;let xa=null,il=null;window.__marutReady=(async()=>Ai||!window.OS3D.enabled?(uA(),!1):(xa=await nA()||Jw({quality:i2?"low":"high"}),window.OS3D.three.registerMascot(xa),document.body.classList.add("has-marut"),il=oA({sceneAPI:window.OS3D,marut:xa,reduced:Ai}),il?.prepareIntro(),VA(xa),yA({reduced:Ai}),!0))();MA({reduced:Ai});const{revealHero:r2}=xA(),F_=qt("main .section, main .band");IA({lenis:cr,sections:F_});WA();jA({lenis:cr});KA();e2({lenis:cr});EA();hA({reduced:Ai});const s2=new IntersectionObserver(r=>{r.forEach(e=>{e.intersectionRatio<.5||(DA(e.target.id),window.OS3D?.setActive(e.target.id),il?.applySection(e.target.id))})},{threshold:[.5]});F_.forEach(r=>s2.observe(r));addEventListener("click",r=>{r.target.closest?.("#programmes .tab, #cg-tabs button")&&setTimeout(()=>il?.refresh(),350)});(function(){let e=scrollY,t=0;(function n(){const i=scrollY;t=t*.85+(i-e)*6e-4,e=i,window.OS3D?.setScrollVelocity(t),requestAnimationFrame(n)})()})();addEventListener("keydown",r=>{r.key==="Escape"&&(["#clients-modal","#ds-popup"].forEach(e=>{const t=Rt(e);t?.classList.contains("open")&&(t.classList.remove("open"),cr?.start(),document.body.style.overflow="")}),O_())});RA({reduced:Ai,onDone(r){r2(),bA({showcase:il,marut:xa,mode:r,reduced:Ai})}});export{Pm as $,kt as A,xi as B,Xe as C,rc as D,a2 as E,d2 as F,v2 as G,c2 as H,l2 as I,h_ as J,u2 as K,cl as L,Wo as M,Iu as N,Bt as O,m2 as P,zi as Q,zc as R,JT as S,f2 as T,oE as U,te as V,ei as W,Ln as X,Jh as Y,kd as Z,u_ as _,zn as a,tE as a0,Vc as a1,Hc as a2,jc as a3,bn as a4,eu as a5,Qc as a6,ll as a7,vt as a8,kr as a9,du as aa,Hi as ab,fr as ac,My as ad,yp as ae,Be as b,Ka as c,g2 as d,h2 as e,dr as f,Gt as g,p2 as h,Je as i,U as j,mm as k,_2 as l,nn as m,KT as n,Za as o,ly as p,qf as q,ui as r,un as s,$h as t,wi as u,d_ as v,Gr as w,sE as x,Ui as y,_t as z};
