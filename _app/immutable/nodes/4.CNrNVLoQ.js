import"../chunks/DsnmJJEf.js";import{c as J,b as oe,a$ as fe,d as L,h as N,f as ue,t as $,k as I,Q as ke,aU as xe,ab as Ce,ai as ne,s as O,e as S,C as Te,au as Ae,y as V,aW as Se,b0 as B,b1 as P,aV as Ie,aa as se,aY as Me,a8 as ie,as as de,a4 as De,aX as K,ad as ve,b2 as He,b3 as U,J as Re,A as Q,b4 as ye,g as Le,b5 as Oe,ar as We,b6 as ze,T as ce,b7 as Fe,E as Ve,b8 as Be,w as Pe,j as Z,r as W,l as D,p as j,b9 as Ye,m as ee,n as ae,D as me,z as he,K as _e,L as pe,aZ as qe,ba as Ue,B as Xe,o as $e,R as Ge,u as Je,i as Ke}from"../chunks/B4oeM9iC.js";import{C as Qe}from"../chunks/C3nhvayu.js";import{s as Ze}from"../chunks/Dcwsxxjj.js";import{s as ge}from"../chunks/DzygNsMo.js";import{p as y,r as be,s as je}from"../chunks/Bb9OusIV.js";import{f as ea}from"../chunks/iD7WTaXF.js";import{a as le}from"../chunks/hrC-ywu-.js";function re(s,a){return a}function aa(s,a,e){for(var r=s.items,l=[],o=a.length,i=0;i<o;i++)Oe(a[i].e,l,!0);var f=o>0&&l.length===0&&e!==null;if(f){var m=e.parentNode;We(m),m.append(e),r.clear(),T(s,a[0].prev,a[o-1].next)}ze(l,()=>{for(var u=0;u<o;u++){var h=a[u];f||(r.delete(h.k),T(s,h.prev,h.next)),Q(h.e,!f)}})}function te(s,a,e,r,l,o=null){var i=s,f={flags:a,items:new Map,first:null},m=(a&fe)!==0;if(m){var u=s;i=N?L(ue(u)):u.appendChild(J())}N&&$();var h=null,p=!1,_=new Map,k=ke(()=>{var g=e();return De(g)?g:g==null?[]:de(g)}),t,c;function d(){ra(c,t,f,_,i,l,a,r,e),o!==null&&(t.length===0?h?K(h):h=V(()=>o(i)):h!==null&&ve(h,()=>{h=null}))}oe(()=>{c??=ce,t=I(k);var g=t.length;if(p&&g===0)return;p=g===0;let b=!1;if(N){var x=xe(i)===Ce;x!==(g===0)&&(i=ne(),L(i),O(!1),b=!0)}if(N){for(var A=null,w,n=0;n<g;n++){if(S.nodeType===Te&&S.data===Ae){i=S,b=!0,O(!1);break}var v=t[n],E=r(v,n);w=G(S,f,A,null,v,E,n,l,a,e),f.items.set(E,w),A=w}g>0&&L(ne())}if(N)g===0&&o&&(h=V(()=>o(i)));else if(Se()){var H=new Set,z=Ie;for(n=0;n<g;n+=1){v=t[n],E=r(v,n);var M=f.items.get(E)??_.get(E);M?(a&(B|P))!==0&&we(M,v,n,a):(w=G(null,f,null,null,v,E,n,l,a,e,!0),_.set(E,w)),H.add(E)}for(const[C,F]of f.items)H.has(C)||z.skipped_effects.add(F.e);z.add_callback(d)}else d();b&&O(!0),I(k)}),N&&(i=S)}function ra(s,a,e,r,l,o,i,f,m){var u=(i&ye)!==0,h=(i&(B|P))!==0,p=a.length,_=e.items,k=e.first,t=k,c,d=null,g,b=[],x=[],A,w,n,v;if(u)for(v=0;v<p;v+=1)A=a[v],w=f(A,v),n=_.get(w),n!==void 0&&(n.a?.measure(),(g??=new Set).add(n));for(v=0;v<p;v+=1){if(A=a[v],w=f(A,v),n=_.get(w),n===void 0){var E=r.get(w);if(E!==void 0){r.delete(w),_.set(w,E);var H=d?d.next:t;T(e,d,E),T(e,E,H),X(E,H,l),d=E}else{var z=t?t.e.nodes_start:l;d=G(z,e,d,d===null?e.first:d.next,A,w,v,o,i,m)}_.set(w,d),b=[],x=[],t=d.next;continue}if(h&&we(n,A,v,i),(n.e.f&U)!==0&&(K(n.e),u&&(n.a?.unfix(),(g??=new Set).delete(n))),n!==t){if(c!==void 0&&c.has(n)){if(b.length<x.length){var M=x[0],C;d=M.prev;var F=b[0],Y=b[b.length-1];for(C=0;C<b.length;C+=1)X(b[C],M,l);for(C=0;C<x.length;C+=1)c.delete(x[C]);T(e,F.prev,Y.next),T(e,d,F),T(e,Y,M),t=M,d=Y,v-=1,b=[],x=[]}else c.delete(n),X(n,t,l),T(e,n.prev,n.next),T(e,n,d===null?e.first:d.next),T(e,d,n),d=n;continue}for(b=[],x=[];t!==null&&t.k!==w;)(t.e.f&U)===0&&(c??=new Set).add(t),x.push(t),t=t.next;if(t===null)continue;n=t}b.push(n),d=n,t=n.next}if(t!==null||c!==void 0){for(var R=c===void 0?[]:de(c);t!==null;)(t.e.f&U)===0&&R.push(t),t=t.next;var q=R.length;if(q>0){var Ee=(i&fe)!==0&&p===0?l:null;if(u){for(v=0;v<q;v+=1)R[v].a?.measure();for(v=0;v<q;v+=1)R[v].a?.fix()}aa(e,R,Ee)}}u&&Re(()=>{if(g!==void 0)for(n of g)n.a?.apply()}),s.first=e.first&&e.first.e,s.last=d&&d.e;for(var Ne of r.values())Q(Ne.e);r.clear()}function we(s,a,e,r){(r&B)!==0&&se(s.v,a),(r&P)!==0?se(s.i,e):s.i=e}function G(s,a,e,r,l,o,i,f,m,u,h){var p=(m&B)!==0,_=(m&He)===0,k=p?_?Me(l,!1,!1):ie(l):l,t=(m&P)===0?i:ie(i),c={i:t,v:k,k:o,a:null,e:null,prev:e,next:r};try{if(s===null){var d=document.createDocumentFragment();d.append(s=J())}return c.e=V(()=>f(s,k,t,u),N),c.e.prev=e&&e.e,c.e.next=r&&r.e,e===null?h||(a.first=c):(e.next=c,e.e.next=c.e),r!==null&&(r.prev=c,r.e.prev=c.e),c}finally{}}function X(s,a,e){for(var r=s.next?s.next.e.nodes_start:e,l=a?a.e.nodes_start:e,o=s.e.nodes_start;o!==null&&o!==r;){var i=Le(o);l.before(o),o=i}}function T(s,a,e){a===null?s.first=e:(a.next=e,a.e.next=e&&e.e),e!==null&&(e.prev=a,e.e.prev=a&&a.e)}function ta(s,a,e,r,l,o){let i=N;N&&$();var f,m,u=null;N&&S.nodeType===Fe&&(u=S,$());var h=N?S:s,p;oe(()=>{const _=a()||null;var k=Be;_!==f&&(p&&(_===null?ve(p,()=>{p=null,m=null}):_===m?K(p):Q(p)),_&&_!==m&&(p=V(()=>{if(u=N?u:document.createElementNS(k,_),Pe(u,u),r){N&&ea(_)&&u.append(document.createComment(""));var t=N?ue(u):u.appendChild(J());N&&(t===null?O(!1):L(t)),r(u,t)}ce.nodes_end=u,h.before(u)})),f=_,f&&(m=f))},Ve),i&&(O(!0),L(h))}var na=Z('<main class="grid-cols-4 grid gap-0.5"></main>');function sa(s,a){let e={"":["","","","","","","","","","","","","","","","","","","","","","","",""],0:["┌","-","-","┐","|","┌","┐","|","|","|","|","|","|","|","|","|","|","└","┘","|","└","-","-","┘"],1:["┌","-","┐","","└","┐","|","","","|","|","","","|","|","","┌","┘","└","┐","└","-","-","┘"],2:["┌","-","-","┐","└","-","┐","|","┌","-","┘","|","|","┌","-","┘","|","└","-","┐","└","-","-","┘"],3:["┌","-","-","┐","└","-","┐","|","","┌","┘","|","","└","┐","|","┌","-","┘","|","└","-","-","┘"],4:["┌","┐","┌","┐","|","|","|","|","|","└","┘","|","└","-","┐","|","","","|","|","","","└","┘"],5:["┌","-","-","┐","|","┌","-","┘","|","└","-","┐","└","-","┐","|","┌","-","┘","|","└","-","-","┘"],6:["┌","-","-","┐","|","┌","-","┘","|","└","-","┐","|","┌","┐","|","|","└","┘","|","└","-","-","┘"],7:["┌","-","-","┐","└","-","┐","|","","","|","|","","","|","|","","","|","|","","","└","┘"],8:["┌","-","-","┐","|","┌","┐","|","|","└","┘","|","|","┌","┐","|","|","└","┘","|","└","-","-","┘"],9:["┌","-","-","┐","|","┌","┐","|","|","└","┘","|","└","-","┐","|","┌","-","┘","|","└","-","-","┘"],":":["","","","","","┌","┐","","","└","┘","","","┌","┐","","","└","┘","","","","",""]," ":["","","","","","","","","","","","","","","","","","","","","","","",""]};var r=na();te(r,21,()=>e[a.num],re,(l,o)=>{Qe(l,{get angle(){return I(o)}})}),W(r),D(s,r)}/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ia={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var la=Ye("<svg><!><!></svg>");function oa(s,a){j(a,!0);const e=y(a,"color",3,"currentColor"),r=y(a,"size",3,24),l=y(a,"strokeWidth",3,2),o=y(a,"absoluteStrokeWidth",3,!1),i=y(a,"iconNode",19,()=>[]),f=be(a,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var m=la();le(m,p=>({...ia,...f,width:r(),height:r(),stroke:e(),"stroke-width":p,class:["lucide-icon lucide",a.name&&`lucide-${a.name}`,a.class]}),[()=>o()?Number(l())*24/Number(r()):l()]);var u=ae(m);te(u,17,i,re,(p,_)=>{var k=qe(()=>Ue(I(_),2));let t=()=>I(k)[0],c=()=>I(k)[1];var d=_e(),g=pe(d);ta(g,t,!0,(b,x)=>{le(b,()=>({...c()}))}),D(p,d)});var h=me(u);ge(h,()=>a.children??he),W(m),D(s,m),ee()}function fa(s,a){j(a,!0);/**
 * @license @lucide/svelte v0.545.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2023 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */let e=be(a,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];oa(s,je({name:"house"},()=>e,{get iconNode(){return r},children:(l,o)=>{var i=_e(),f=pe(i);ge(f,()=>a.children??he),D(l,i)},$$slots:{default:!0}})),ee()}var ua=Z('<a href="/"><!></a>');function da(s,a){var e=ua(),r=ae(e);fa(r,{}),W(e),Xe(()=>Ze(e,1,`fixed top-4 left-4 rounded-full size-10 rounded flex justify-center items-center
bg-slate-200 border-slate-100 inset-shadow-2xs shadow-md inset-shadow-white
dark:bg-slate-900 dark:border-slate-700 dark:inset-shadow-slate-500 dark:shadow-slate-950
dark:text-slate-300
${a.Class??""}`)),D(s,e)}var va=Z('<main class="dark:bg-slate-800 h-dvh w-dvw bg-slate-300 flex justify-center gap-5 items-center relative  "><!> <div class="h-full w-full flex justify-center items-center gap-5 "></div></main>');function Ea(s,a){j(a,!0);let e=$e(Ge(["","","","","",""]));Je(()=>{r()});function r(){setInterval(()=>{let f=new Date().toLocaleTimeString("en-IN",{hour12:!0,hour:"2-digit",minute:"2-digit",second:"2-digit"}).replace(/\D/g,"").split("");Ke(e,f,!0)},1e3)}var l=va(),o=ae(l);da(o,{});var i=me(o,2);te(i,21,()=>I(e),re,(f,m)=>{sa(f,{get num(){return I(m)}})}),W(i),W(l),D(s,l),ee()}export{Ea as component};
