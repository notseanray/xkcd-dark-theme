var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function c(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let s,u;function i(t,n){return s||(s=document.createElement("a")),s.href=n,t===s.href}function l(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function a(t,n){t.appendChild(n)}function f(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function p(){return h(" ")}function $(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function b(t){return function(n){return n.preventDefault(),t.call(this,n)}}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function y(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function x(t){u=t}function k(t){(function(){if(!u)throw new Error("Function called outside component initialization");return u})().$$.on_mount.push(t)}const v=[],_=[],w=[],E=[],C=Promise.resolve();let j=!1;function N(t){w.push(t)}const A=new Set;let S=0;function z(){const t=u;do{for(;S<v.length;){const t=v[S];S++,x(t),B(t.$$)}for(x(null),v.length=0,S=0;_.length;)_.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];A.has(n)||(A.add(n),n())}w.length=0}while(v.length);for(;E.length;)E.pop()();j=!1,A.clear(),x(t)}function B(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const L=new Set;function M(t,n){-1===t.$$.dirty[0]&&(v.push(t),j||(j=!0,C.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function O(r,s,i,l,a,f,m,h=[-1]){const p=u;x(r);const $=r.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(p?p.$$.context:[])),callbacks:e(),dirty:h,skip_bound:!1,root:s.target||p.$$.root};m&&m($.root);let b=!1;if($.ctx=i?i(r,s.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&a($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),b&&M(r,t)),n})):[],$.update(),b=!0,o($.before_update),$.fragment=!!l&&l($.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);$.fragment&&$.fragment.l(t),t.forEach(d)}else $.fragment&&$.fragment.c();s.intro&&((g=r.$$.fragment)&&g.i&&(L.delete(g),g.i(y))),function(t,e,r,s){const{fragment:u,on_mount:i,on_destroy:l,after_update:a}=t.$$;u&&u.m(e,r),s||N((()=>{const e=i.map(n).filter(c);l?l.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(N)}(r,s.target,s.anchor,s.customElement),z()}var g,y;x(p)}const F=[];const G=(()=>{const{subscribe:n,set:e,update:o}=function(n,e=t){let o;const c=new Set;function s(t){if(r(n,t)&&(n=t,o)){const t=!F.length;for(const t of c)t[1](),F.push(t,n);if(t){for(let t=0;t<F.length;t+=2)F[t][0](F[t+1]);F.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(r,u=t){const i=[r,u];return c.add(i),1===c.size&&(o=e(s)||t),r(n),()=>{c.delete(i),0===c.size&&(o(),o=null)}}}}(0);return{subscribe:n,increment:()=>o((t=>t+1)),decrement:()=>o((t=>t-1)),set:t=>e(t)}})();function P(t){let n,e,r,s,u,l,x,k,v,_,w,E,C,j,N,A,S,z,B,L,M,O,F,P,R,T,U,q,D,H,I,J,K,Q,V,W,X,Y,Z,tt,nt,et,ot,ct,rt,st,ut=t[0].title+"",it=t[0].num+"",lt=t[0].alt+"",at=t[0].day+"",ft=t[0].month+"",dt=t[0].year+"",mt=t[0].news+"";return{c(){n=m("div"),e=h(ut),r=h(" (#"),s=h(it),u=h(")"),l=p(),x=m("div"),k=m("img"),w=p(),E=m("br"),C=p(),j=m("div"),N=h(lt),A=p(),S=m("br"),z=p(),B=h(at),L=h("/"),M=h(ft),O=h("/"),F=h(dt),P=p(),R=m("br"),T=p(),U=h(mt),q=p(),D=m("div"),H=m("button"),H.textContent="First",I=p(),J=m("button"),J.textContent="Go back 10",K=p(),Q=m("button"),Q.textContent="Previous",V=p(),W=m("a"),X=h("original"),Z=p(),tt=m("button"),tt.textContent="Next",nt=p(),et=m("button"),et.textContent="Go forward 10",ot=p(),ct=m("button"),ct.textContent="Last",g(n,"class","comic-title svelte-k7h9dv"),g(k,"decoding","async"),i(k.src,v=t[0].img)||g(k,"src",v),g(k,"alt",_=t[0].alt),g(j,"class","extra svelte-k7h9dv"),g(x,"class","xkcd svelte-k7h9dv"),g(W,"href",Y=`https://xkcd.com/${t[0].num}`),g(W,"target","_blank"),g(D,"class","controls svelte-k7h9dv")},m(o,i){f(o,n,i),a(n,e),a(n,r),a(n,s),a(n,u),f(o,l,i),f(o,x,i),a(x,k),a(x,w),a(x,E),a(x,C),a(x,j),a(j,N),a(j,A),a(j,S),a(j,z),a(j,B),a(j,L),a(j,M),a(j,O),a(j,F),a(j,P),a(j,R),a(j,T),a(j,U),f(o,q,i),f(o,D,i),a(D,H),a(D,I),a(D,J),a(D,K),a(D,Q),a(D,V),a(D,W),a(W,X),a(D,Z),a(D,tt),a(D,nt),a(D,et),a(D,ot),a(D,ct),rt||(st=[$(H,"click",b(t[3])),$(J,"click",b(t[4])),$(Q,"click",b(t[5])),$(tt,"click",b(t[6])),$(et,"click",b(t[7])),$(ct,"click",b((function(){c(G.set(t[1]))&&G.set(t[1]).apply(this,arguments)})))],rt=!0)},p(n,o){t=n,1&o&&ut!==(ut=t[0].title+"")&&y(e,ut),1&o&&it!==(it=t[0].num+"")&&y(s,it),1&o&&!i(k.src,v=t[0].img)&&g(k,"src",v),1&o&&_!==(_=t[0].alt)&&g(k,"alt",_),1&o&&lt!==(lt=t[0].alt+"")&&y(N,lt),1&o&&at!==(at=t[0].day+"")&&y(B,at),1&o&&ft!==(ft=t[0].month+"")&&y(M,ft),1&o&&dt!==(dt=t[0].year+"")&&y(F,dt),1&o&&mt!==(mt=t[0].news+"")&&y(U,mt),1&o&&Y!==(Y=`https://xkcd.com/${t[0].num}`)&&g(W,"href",Y)},d(t){t&&d(n),t&&d(l),t&&d(x),t&&d(q),t&&d(D),rt=!1,o(st)}}}function R(n){let e,o=n[0]&&P(n);return{c(){e=m("main"),o&&o.c(),g(e,"class","svelte-k7h9dv")},m(t,n){f(t,e,n),o&&o.m(e,null)},p(t,[n]){t[0]?o?o.p(t,n):(o=P(t),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:t,o:t,d(t){t&&d(e),o&&o.d()}}}function T(t,n,e){let o,c,r;l(t,G,(t=>e(2,o=t))),k((async()=>{const t=await(async()=>await fetch("https://xkcd.com/info.0.json").then((t=>t.json())))();G.set(t.num),e(1,r=t.num),e(0,c=t),document.title=`${c.safe_title} - ${c.num}`})),G.subscribe((async t=>{t>0&&t<=r&&(e(0,c=await(async t=>await fetch("https://xkcd.com/NUMBER/info.0.json".replace("NUMBER",t.toString())).then((t=>t.json())))(t)),document.title=`${c.safe_title} - ${c.num}`)}));return[c,r,o,()=>G.set(1),()=>{o>10&&G.set(o-10)},()=>{o>1&&G.decrement()},()=>{o<r&&G.increment()},()=>{o<=r-10&&G.set(o+10)}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),O(this,t,T,R,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
