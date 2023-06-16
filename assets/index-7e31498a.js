import{b as x,d as f,r as L,f as A,a6 as b,S as g,T as y,o as c,V as p,c as d,a,R as B,u as _,X as w,Q as C,ad as D,a9 as q,Y as F,P as H,ao as K,ap as Q,aq as X}from"./vendor-@vue-13edef39.js";import{o as E,m as Y,c as G,x as J}from"./vendor-@itshixun-e2bc5e90.js";import{z as U,E as Z,a as ee,b as te,c as oe}from"./vendor-element-plus-2b0cb877.js";import{e as ne,f as se}from"./vendor-@vueuse-bdf53fce.js";import{_ as N,W as ae,a as re,b as ie,c as ce,d as le,m as ue}from"./vendor-monaco-editor-65719260.js";import{u as me,a as z,c as de,b as _e}from"./vendor-vue-router-d0f2db2c.js";import{g as R,s as pe}from"./vendor-lodash-es-d940ded9.js";import{d as fe,s as he,c as ge}from"./vendor-pinia-14229953.js";import{i as ve}from"./vendor-pinia-plugin-persist-4bd0ee57.js";import{l as ye}from"./vendor-@monaco-editor-8266f9ce.js";import"./vendor-color2k-defc164d.js";import"./vendor-@element-plus-1ade8d56.js";import"./vendor-@ctrl-f8748455.js";import"./vendor-@sxzz-c75af06c.js";import"./vendor-vue-demi-71ba0ef2.js";import"./vendor-state-local-dd516420.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const S=()=>{const t=ne(),e=se(t),o=()=>{e(!t.value)},n=x(()=>t.value?E.dark:E.light);return{isDark:t,toggleDayNight:o,dayNightMode:n}},xe=f({__name:"App",setup(t){const e=L(U),{isDark:o,toggleDayNight:n}=S();return A(()=>{o.value||n()}),(s,i)=>{const u=b("RouterView"),r=Z;return c(),g(r,{locale:e.value},{default:y(()=>[p(u)]),_:1},8,["locale"])}}}),be=()=>N(()=>import("./MonacoEditorDemo-1f45614f.js"),["assets/MonacoEditorDemo-1f45614f.js","assets/vendor-element-plus-2b0cb877.js","assets/vendor-@vue-13edef39.js","assets/vendor-@element-plus-1ade8d56.js","assets/vendor-@vueuse-bdf53fce.js","assets/vendor-@ctrl-f8748455.js","assets/vendor-lodash-es-d940ded9.js","assets/vendor-@sxzz-c75af06c.js","assets/vendor-element-plus-74602d9a.css","assets/vendor-@guolao-dd71f981.js","assets/vendor-@monaco-editor-8266f9ce.js","assets/vendor-state-local-dd516420.js","assets/vendor-monaco-editor-65719260.js","assets/vendor-monaco-editor-5926e7f9.css","assets/vendor-@itshixun-e2bc5e90.js","assets/vendor-color2k-defc164d.js","assets/vendor-vue-router-d0f2db2c.js","assets/vendor-pinia-14229953.js","assets/vendor-vue-demi-71ba0ef2.js","assets/vendor-pinia-plugin-persist-4bd0ee57.js"]),we=()=>N(()=>import("./CodeMirrorDemo-bb20621a.js"),["assets/CodeMirrorDemo-bb20621a.js","assets/vendor-@vue-13edef39.js","assets/vendor-@itshixun-e2bc5e90.js","assets/vendor-color2k-defc164d.js","assets/vendor-element-plus-2b0cb877.js","assets/vendor-@element-plus-1ade8d56.js","assets/vendor-@vueuse-bdf53fce.js","assets/vendor-@ctrl-f8748455.js","assets/vendor-lodash-es-d940ded9.js","assets/vendor-@sxzz-c75af06c.js","assets/vendor-element-plus-74602d9a.css","assets/vendor-monaco-editor-65719260.js","assets/vendor-monaco-editor-5926e7f9.css","assets/vendor-vue-router-d0f2db2c.js","assets/vendor-pinia-14229953.js","assets/vendor-vue-demi-71ba0ef2.js","assets/vendor-pinia-plugin-persist-4bd0ee57.js","assets/vendor-@monaco-editor-8266f9ce.js","assets/vendor-state-local-dd516420.js"]),Re={admin:[{path:"/monaco",name:"monaco",component:be,meta:{title:"MonacoEditor",menuConfig:{order:0}}},{path:"/codemirror",name:"codemirror",component:we,meta:{title:"CodeMirror",menuConfig:{order:1}}}]},ke=Object.freeze(Object.defineProperty({__proto__:null,default:Re},Symbol.toStringTag,{value:"Module"})),W=()=>{const t=me(),e=z();return{allRoutes:x(()=>t.options.routes),router:t,route:e}},Ce={class:"w-24px h-24px flex items-center justify-center mr-6px"},T=f({__name:"MenuIcon",props:{iconClass:{}},setup(t){return(e,o)=>(c(),d("div",Ce,[a("i",{class:B(["inline-block align-middle text-size-16px",e.iconClass?e.iconClass:"i-mdi-circle-medium"])},null,2)]))}}),De={class:"font-semibold"},$e={class:"font-semibold"},Me=a("div",{class:"active-line top"},null,-1),Ee=a("div",{class:"active-line bottom"},null,-1),Te=a("div",{class:"active-arrow"},[a("i",{class:"icon i-mdi-chevron-right"})],-1),Oe=a("div",{class:"active-dot active-dot-1"},[a("i",{class:"icon i-mdi-circle-small"})],-1),Ie=a("div",{class:"active-dot active-dot-2"},[a("i",{class:"icon i-mdi-circle-small"})],-1),Ne=a("div",{class:"active-dot active-dot-3"},[a("i",{class:"icon i-mdi-circle-small"})],-1),ze=f({__name:"MenuItem",props:{menuData:{}},setup(t){const{router:e}=W();return(o,n)=>{const s=b("menu-item",!0),i=ee,u=te;return c(),d("div",null,[o.menuData.children&&o.menuData.children.length>0?(c(),g(i,{key:0,index:o.menuData.name,class:"admin-sub-menu"},{title:y(()=>{var r;return[p(T,{"icon-class":_(R)(o.menuData,"meta.menuConfig.iconClass","")},null,8,["icon-class"]),a("span",De,w((r=o.menuData.meta)==null?void 0:r.title),1)]}),default:y(()=>[(c(!0),d(C,null,D(o.menuData.children,r=>(c(),g(s,{key:r.name,"menu-data":r},null,8,["menu-data"]))),128))]),_:1},8,["index"])):(c(),g(u,{key:1,class:"admin-menu-item",index:o.menuData.name,onClick:n[0]||(n[0]=r=>_(e).push({name:o.menuData.name}))},{default:y(()=>{var r;return[p(T,{"icon-class":_(R)(o.menuData,"meta.menuConfig.iconClass","")},null,8,["icon-class"]),a("span",$e,w((r=o.menuData.meta)==null?void 0:r.title),1),Me,Ee,Te,Oe,Ie,Ne]}),_:1},8,["index"]))])}}});const Se=f({__name:"Menu",props:{layout:{}},setup(t){const e=t,{layout:o}=q(e),{allRoutes:n,route:s}=W(),i=x(()=>v(s)),u=x(()=>{const l=n.value.find(h=>h.name===o.value);return l&&l.children?r(l.children):[]}),r=l=>{const h=[];return l.forEach(m=>{m.meta&&m.meta.menuConfig&&!m.meta.menuConfig.hidden&&(m.children&&m.children.length>0&&(m.children=r(m.children)),h.push(m))}),pe(h,m=>R(m,"meta.menuConfig.order",1e3))},v=l=>l&&l.meta?l.meta.menuConfig?l.meta.menuConfig.activeRouteName?l.meta.menuConfig.activeRouteName:l.name:l.meta.parentRouteData?v(l.meta.parentRouteData.parentRoute):"":"";return(l,h)=>{const m=oe;return c(),g(m,{collapse:!1,"default-active":i.value,class:"bg-transparent border-none admin-menu"},{default:y(()=>[(c(!0),d(C,null,D(u.value,M=>(c(),g(ze,{key:M.name,"menu-data":M},null,8,["menu-data"]))),128))]),_:1},8,["default-active"])}}});const We=fe("theme",{state:()=>({currentThemeIndex:0}),persist:{enabled:!0,strategies:[{key:"qst-theme",storage:localStorage}]},actions:{setCurrentThemeIndex(t){Y(t),this.currentThemeIndex=t}}}),Pe=t=>(K("data-v-67dc4cc1"),t=t(),Q(),t),Ve={class:"flex flex-row items-center"},je=["onClick"],Le={key:0,"inline-block":"","align-middle":"","text-size-large":"",class:"i-mdi-check-circle-outline"},Ae=Pe(()=>a("i",{"inline-block":"","align-middle":"","text-size-large":"",dark:"i-line-md-moon-filled",class:"i-line-md-moon-filled-to-sunny-filled-loop-transition color-text-regular"},null,-1)),Be=[Ae],qe=f({__name:"ThemeToggler",setup(t){const e=We(),{currentThemeIndex:o}=he(e),{toggleDayNight:n,dayNightMode:s}=S();return(i,u)=>(c(),d("div",Ve,[(c(!0),d(C,null,D(_(G),(r,v)=>(c(),d("button",{key:"primary"+r.name,class:"theme-btn mr-spacing color-white",style:F({backgroundColor:r.config[_(s)].color.primary}),onClick:l=>_(e).setCurrentThemeIndex(v)},[_(o)===v?(c(),d("i",Le)):H("",!0)],12,je))),128)),a("button",{class:"theme-btn",onClick:u[0]||(u[0]=(...r)=>_(n)&&_(n)(...r))},Be)]))}});const Fe=(t,e)=>{const o=t.__vccOpts||t;for(const[n,s]of e)o[n]=s;return o},P=Fe(qe,[["__scopeId","data-v-67dc4cc1"]]),He={class:"w-full h-full min-h-full overflow-hidden flex flex-row self-stretch items-start min-w-1200px"},Ke={class:"flex flex-col h-full w-left-menu bg-bg-page relative flex-shrink-0"},Qe=a("div",{class:"absolute w-1px top-0 bottom-0 right-0 bg-border-light"},null,-1),Xe=a("div",{class:"flex flex-row items-center w-full p-spacing"},[a("i",{"inline-block":"","align-middle":"","w-32px":"","h-32px":"",class:"i-uplus:logo"}),a("div",{class:"text-size-medium font-semibold ml-spacing-xxs"},"CODE EDITOR DEMO")],-1),Ye={class:"h-full w-full flex flex-col bg-bg min-w-0"},Ge={class:"flex flex-row items-center justify-between px-spacing-xl py-spacing"},Je={class:"text-size-large font-semibold color-text-primary"},Ue=f({__name:"AdminLayout",props:{layout:{}},setup(t){const e=z();return(o,n)=>{const s=b("RouterView");return c(),d("div",He,[a("div",Ke,[Qe,Xe,p(Se,{layout:o.layout},null,8,["layout"])]),a("div",Ye,[a("div",Ge,[a("div",Je,w(_(e).meta.title),1),p(P)]),p(s)])])}}});const Ze={class:"w-full h-header flex flex-row items-center justify-between px-spacing bg-bg border-b border-border-light"},et=a("div",{class:"flex flex-row items-center"},[a("i",{"inline-block":"","align-middle":"","text-size-32px":"",class:"i-uplus:logo"}),a("div",{class:"text-size-large font-semibold ml-10px"},"前端脚手架")],-1),tt=f({__name:"Header",setup(t){return(e,o)=>(c(),d("div",Ze,[et,p(P)]))}}),ot={class:"w-full min-h-screen"},nt={class:"w-1200px flex flex-col mt-header flex-1 flex-shrink-0 mx-auto"},st=f({__name:"Baselayout",setup(t){return(e,o)=>{const n=b("RouterView");return c(),d("div",ot,[p(tt,{class:"fixed left-0 right-0 top-0 z-1000"}),a("div",nt,[p(n)])])}}});var k=(t=>(t.base="base",t.admin="admin",t))(k||{});const O=t=>({path:`/${t.name}`,name:t.name,props:{layout:t.name},component:t.component,children:[]}),I={base:O({name:"base",component:st}),admin:O({name:"admin",component:Ue})},at=t=>{const e=[...t];Object.keys(k).forEach(n=>{e.push(I[n])});const o=Object.assign({"/src/modules/home/route.ts":ke});for(const n in o){const s=o[n].default.route;s&&e.push(...s),Object.keys(k).forEach(i=>{var r;const u=o[n].default[i];u&&((r=I[i].children)==null||r.push(...u))})}return V(e,null,null),e},V=(t,e,o)=>{t.forEach(n=>{if(e&&o){const s={parentRoute:e,baseRoute:o};n.meta?n.meta.parentRouteData=s:n.meta={title:"",parentRouteData:s}}n.children&&V(n.children,n,o||n)})},rt=[{path:"/",redirect:"/monaco"}],it=de({history:_e("/code-editor-demo/"),routes:at(rt)}),j=ge();j.use(ve);self.MonacoEnvironment={getWorker(t,e){return e==="json"?new ae:e==="css"||e==="scss"||e==="less"?new re:e==="html"||e==="handlebars"||e==="razor"?new ie:e==="typescript"||e==="javascript"?new ce:new le}};ye.config({monaco:ue});J();const $=X(xe);$.use(j);$.use(it);$.mount("#app");export{Fe as _,S as u};
