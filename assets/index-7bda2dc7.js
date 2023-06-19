import{b as O,d as C,r as b,f as ue,a6 as z,S as k,T as w,o as p,V as g,a9 as W,w as J,u as m,a,c as h,ad as T,Q as R,P as Z,a7 as B,X as E,W as de,R as me,Y as pe,ao as fe,ap as _e,aq as ge}from"./vendor-@vue-13edef39.js";import{o as K,m as ve,c as he,x as ye}from"./vendor-@itshixun-e2bc5e90.js";import{z as xe,E as be,a as we,b as ee,c as Ce,d as te,e as H,f as N,g as ke,h as $e,i as De,j as Re}from"./vendor-element-plus-067b5c06.js";import{e as oe,f as Me}from"./vendor-@vueuse-bdf53fce.js";import{V as Se}from"./vendor-@guolao-dd71f981.js";import{M as Ve,W as Oe,a as Ee,b as Te,c as Pe,d as je,m as ze}from"./vendor-monaco-editor-27e0993e.js";import{u as Ie,a as ne,c as Be,b as Ne}from"./vendor-vue-router-d0f2db2c.js";import{g as q,s as qe}from"./vendor-lodash-es-d940ded9.js";import{d as Le,s as We,c as Ae}from"./vendor-pinia-14229953.js";import{i as Ue}from"./vendor-pinia-plugin-persist-4bd0ee57.js";import{l as Fe}from"./vendor-@monaco-editor-8266f9ce.js";import"./vendor-color2k-defc164d.js";import"./vendor-@element-plus-1ade8d56.js";import"./vendor-@ctrl-f8748455.js";import"./vendor-@sxzz-c75af06c.js";import"./vendor-vue-demi-71ba0ef2.js";import"./vendor-state-local-dd516420.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(t){if(t.ep)return;t.ep=!0;const l=e(t);fetch(t.href,l)}})();const se=()=>{const n=oe(),o=Me(n),e=()=>{o(!n.value)},s=O(()=>n.value?K.dark:K.light);return{isDark:n,toggleDayNight:e,dayNightMode:s}},Ke=C({__name:"App",setup(n){const o=b(xe),{isDark:e,toggleDayNight:s}=se();return ue(()=>{e.value||s()}),(t,l)=>{const d=z("RouterView"),i=be;return p(),k(i,{locale:o.value},{default:w(()=>[g(d)]),_:1},8,["locale"])}}}),He=()=>{const o=[...Ve._menuItems].find(r=>r[0].id=="EditorContext"),e=o?o[1]:null,s=["editor.action.clipboardCutAction","editor.action.clipboardCopyAction","editor.action.clipboardPasteAction"],t=b([]),l=(r,c)=>{var x,u;let v=r._first;const _=[];do c.includes((u=(x=v.element)==null?void 0:x.command)==null?void 0:u.id)&&(_.push(v.element),r._remove(v));while(v=v.next);t.value=_};return{disableCopyPasteMenu:()=>{e&&l(e,s)},restoreCopyPasteMenu:()=>{e&&t.value.length>0&&(t.value.forEach(r=>{e.unshift(r)}),t.value=[])}}},Ye=C({__name:"MonacoEditorCompo",props:{theme:{},disableCopyPaste:{type:Boolean},language:{},fontSize:{},insertSpaces:{type:Boolean},autoFormat:{type:Boolean},readOnly:{type:Boolean},options:{},defaultValue:{}},emits:["save","change","reset","editor-mounted","copy-paste-disabled"],setup(n,{expose:o,emit:e}){const s=n,{disableCopyPaste:t,defaultValue:l,fontSize:d,autoFormat:i,insertSpaces:r,readOnly:c}=W(s),{disableCopyPasteMenu:v,restoreCopyPasteMenu:_}=He(),x={automaticLayout:!0,formatOnType:!0,formatOnPaste:!0,fontSize:16,insertSpaces:!0},u=b(""),M=b(null),S=b(null),I=O(()=>{const f={};return d!=null&&d.value&&(f.fontSize=d.value),typeof i.value=="boolean"&&(f.formatOnType=i.value,f.formatOnPaste=i.value),typeof r.value=="boolean"&&(f.insertSpaces=r.value),typeof c.value=="boolean"&&(f.readOnly=c.value),Object.assign({},x,f)});J(t,f=>{S.value&&(f?v():_())},{immediate:!0});const y=f=>{e("editor-mounted"),S.value=f,l!=null&&l.value&&(u.value=l.value),S.value.onKeyDown($=>{const{keyCode:V,ctrlKey:U,metaKey:F}=$;V===49&&(F||U)&&(P(),$.preventDefault()),(V===33||V===52)&&(F||U)&&t.value&&($.preventDefault(),e("copy-paste-disabled"))})},D=f=>{e("change",f)},P=()=>{M.value&&e("save",u.value)};return o({save:P,reset:()=>{u.value=l!=null&&l.value?l.value:"",e("reset")}}),(f,$)=>(p(),k(m(Se),{ref_key:"editorCompoRef",ref:M,value:u.value,"onUpdate:value":$[0]||($[0]=V=>u.value=V),height:"100%",language:f.language,"default-value":m(l),theme:f.theme,options:I.value,onMount:y,onChange:D},null,8,["value","language","default-value","theme","options"]))}}),Qe=a("div",{class:"text-size-large color-text-primary"},"代码编辑器设置",-1),Xe={class:"flex flex-col"},Ge={class:"flex flex-row items-center justify-between pt-spacing-md"},Je=a("div",{class:"color-text-regular"},"暗黑模式",-1),Ze={class:"flex flex-row items-center justify-between pt-spacing-sm"},et=a("div",{class:"color-text-regular"},"自动格式化",-1),tt={class:"flex flex-row items-center justify-between pt-spacing-sm"},ot=a("div",{class:"color-text-regular"},"字体大小",-1),nt={class:"flex flex-row items-center justify-between pt-spacing-sm"},st=a("div",{class:"color-text-regular"},"Tab转换",-1),at={class:"flex flex-row items-center justify-between pt-spacing-sm"},lt=a("div",{class:"color-text-regular"},"禁用复制粘贴",-1),it={class:"flex flex-row items-center justify-between pt-spacing-sm"},rt=a("div",{class:"color-text-regular"},"只读模式",-1),ct=C({__name:"ConfigDrawer",props:{config:{}},setup(n,{expose:o}){const e=n,s=b(!1),{config:t}=W(e),l=[12,14,16,18,20,22,24,26];return o({open:()=>{s.value=!0}}),(i,r)=>{const c=we,v=te,_=ee,x=Ce;return p(),k(x,{modelValue:s.value,"onUpdate:modelValue":r[6]||(r[6]=u=>s.value=u),title:"I am the title","with-header":!1,size:"280px"},{default:w(()=>[Qe,a("div",Xe,[a("div",Ge,[Je,g(c,{modelValue:m(t).isDark,"onUpdate:modelValue":r[0]||(r[0]=u=>m(t).isDark=u)},null,8,["modelValue"])]),a("div",Ze,[et,g(c,{modelValue:m(t).autoFormat,"onUpdate:modelValue":r[1]||(r[1]=u=>m(t).autoFormat=u)},null,8,["modelValue"])]),a("div",tt,[ot,g(_,{modelValue:m(t).fontSize,"onUpdate:modelValue":r[2]||(r[2]=u=>m(t).fontSize=u),size:"small",class:"w-80px"},{default:w(()=>[(p(),h(R,null,T(l,u=>g(v,{key:u,value:u,label:u+"px"},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),a("div",nt,[st,g(c,{modelValue:m(t).insertSpaces,"onUpdate:modelValue":r[3]||(r[3]=u=>m(t).insertSpaces=u)},null,8,["modelValue"])]),a("div",at,[lt,g(c,{modelValue:m(t).disableCopyPaste,"onUpdate:modelValue":r[4]||(r[4]=u=>m(t).disableCopyPaste=u)},null,8,["modelValue"])]),a("div",it,[rt,g(c,{modelValue:m(t).readOnly,"onUpdate:modelValue":r[5]||(r[5]=u=>m(t).readOnly=u)},null,8,["modelValue"])])])]),_:1},8,["modelValue"])}}}),ut=`<!-- html code -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- <link rel="icon" href="/favicon.ico" /> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
    <style>
      html, 
      body, 
      #app {
        height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="app"></div>
    <!-- <script type="module" src="/src/main.ts"><\/script> -->
  </body>
</html>`,dt=`/* css code */
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  /* test */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
*::-webkit-scrollbar {
  display: none;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[type=reset], [type=submit], button, html [type=button] {
    -webkit-appearance: button;
}

[type=button]{
  -webkit-appearance: none;
}

.full-width {
  width: 100%;
}
.full-height {
  height: 100%;
}
.full-size {
  width: 100%;
  height: 100%;
}

.ql-editor a {
  color: rgba(255, 255, 255, 0.20);
  cursor: pointer;
  padding-left: 8px;
  padding-right: 8px;
  text-decoration: none;
}
.ql-editor ul, .ql-editor li, .ql-editor ol {
  margin-left: 16px;
}
.ql-editor object {
  color: #d32f2f;
}
.ql-editor blockquote {
  border-left: 3px solid rgba(255, 255, 255, 0.12);
  padding-top: 8px;
  padding-left: 24px;
  padding-right: 16px;
  padding-bottom: 8px;
}
.ql-editor .ql-align-center {
  text-align: center;
}
.ql-editor .ql-align-justify {
  text-align: justify;
}
.ql-editor .ql-align-right {
  text-align: right;
}
.ql-editor a:hover {
  text-decoration: underline;
}
`,mt=`/* js code */
import { defineComponent } from 'vue'
import Editor from '@guolao/vue-monaco-editor'

export default defineComponent(() => {
  return (
    <Editor 
      height="80vh"
      theme='vs-dark'
      defaultLanguage="javascript"
      defaultValue="// some comment"
      onChange={(val, event) => console.log(val, event)}
    />
  )
})`,Y=[{language:"javascript",source:mt},{language:"css",source:dt},{language:"html",source:ut}],pt={class:"flex flex-1 flex-col px-spacing-xl pb-spacing-xl min-h-0"},ft={class:"flex flex-row pb-spacing items-center justify-between"},_t=["onClick"],gt={class:"flex flex-row items-center"},vt={key:0,class:"w-8px h-8px bg-theme rounded-full mr-spacing-sm"},ht={class:"flex flex-col flex-1 min-h-0 border border-border overflow-hidden rounded-base"},yt=C({__name:"MonacoEditorDemo",setup(n){const o=oe({disableTransition:!1}),e=b("saved"),s=b(Y[0]),t=b(),l=b(),d=b(),i=b({isDark:!0,autoFormat:!0,fontSize:16,insertSpaces:!0,disableCopyPaste:!1,readOnly:!1});J(o,y=>{i.value.isDark!==y&&(i.value=Object.assign(i.value,{isDark:y}))},{immediate:!0});const r=()=>{d.value&&d.value.open()},c=()=>{console.log("editor mounted")},v=y=>{e.value==="edited"?H.confirm("您的代码尚未保存","提示",{confirmButtonText:"保存并切换",cancelButtonText:"取消切换",type:""}).then(()=>{t.value&&t.value.blur(),x(()=>{s.value=y})}).catch(()=>{t.value&&t.value.blur()}):(s.value=y,t.value&&t.value.blur())},_=()=>{l.value&&H.confirm("确定要重置代码吗","重置代码",{confirmButtonText:"确定",cancelButtonText:"取消",type:""}).then(()=>{l.value&&l.value.reset(),N({type:"success",message:"代码已重置"})}).catch(()=>null)},x=y=>{e.value="saving",setTimeout(()=>{l.value&&l.value.save(),e.value="saved",typeof y=="function"&&y()},2e3)},u=y=>{N.success("已保存"),console.log("save:",y)},M=y=>{e.value="edited",console.log("onChange:",y)},S=()=>{N.warning("已禁用代码编辑器的复制粘贴功能")},I=()=>{console.log("onReset")};return(y,D)=>{const P=te,j=ke;return p(),h(R,null,[a("div",pt,[a("div",ft,[g(m(ee),{ref_key:"languageSelectRef",ref:t,modelValue:s.value,"onUpdate:modelValue":D[0]||(D[0]=f=>s.value=f),disabled:e.value==="saving","value-key":"language"},{default:w(()=>[(p(!0),h(R,null,T(m(Y),f=>(p(),k(P,{key:f.language,value:f,label:f.language},{default:w(()=>[a("div",{onClick:de($=>v(f),["stop"])},E(f.language),9,_t)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue","disabled"]),a("div",gt,[e.value!=="saved"?(p(),h("div",vt)):Z("",!0),g(j,{loading:e.value==="saving",disabled:e.value==="saved",type:"primary",onClick:D[1]||(D[1]=f=>x())},{default:w(()=>[B(E(e.value==="saving"?"保存中...":"保存"),1)]),_:1},8,["loading","disabled"]),g(j,{type:"primary",onClick:_},{default:w(()=>[B("重置")]),_:1}),g(j,{type:"primary",onClick:r},{default:w(()=>[B("设置")]),_:1})])]),a("div",ht,[(p(),k(Ye,{ref_key:"editorRef",ref:l,key:s.value.language,theme:i.value.isDark?"vs-dark":"light","disable-copy-paste":i.value.disableCopyPaste,"font-size":i.value.fontSize,"auto-format":i.value.autoFormat,"read-only":i.value.readOnly,"default-value":s.value.source,language:s.value.language,onEditorMounted:c,onSave:u,onChange:M,onCopyPasteDisabled:S,onReset:I},null,8,["theme","disable-copy-paste","font-size","auto-format","read-only","default-value","language"]))])]),g(ct,{ref_key:"configDrawerRef",ref:d,config:i.value},null,8,["config"])],64)}}}),ae=(n,o)=>{const e=n.__vccOpts||n;for(const[s,t]of o)e[s]=t;return e},xt={},bt={class:"px-spacing-xl pb-spacing-xl"};function wt(n,o){return p(),h("div",bt,"Code Mirror Demo WIP")}const Ct=ae(xt,[["render",wt]]),kt={admin:[{path:"/monaco",name:"monaco",component:yt,meta:{title:"MonacoEditor",menuConfig:{order:0}}},{path:"/codemirror",name:"codemirror",component:Ct,meta:{title:"CodeMirror",menuConfig:{order:1}}}]},$t=Object.freeze(Object.defineProperty({__proto__:null,default:kt},Symbol.toStringTag,{value:"Module"})),le=()=>{const n=Ie(),o=ne();return{allRoutes:O(()=>n.options.routes),router:n,route:o}},Dt={class:"w-24px h-24px flex items-center justify-center mr-6px"},Q=C({__name:"MenuIcon",props:{iconClass:{}},setup(n){return(o,e)=>(p(),h("div",Dt,[a("i",{class:me(["inline-block align-middle text-size-16px",o.iconClass?o.iconClass:"i-mdi-circle-medium"])},null,2)]))}}),Rt={class:"font-semibold"},Mt={class:"font-semibold"},St=a("div",{class:"active-line top"},null,-1),Vt=a("div",{class:"active-line bottom"},null,-1),Ot=a("div",{class:"active-arrow"},[a("i",{class:"icon i-mdi-chevron-right"})],-1),Et=a("div",{class:"active-dot active-dot-1"},[a("i",{class:"icon i-mdi-circle-small"})],-1),Tt=a("div",{class:"active-dot active-dot-2"},[a("i",{class:"icon i-mdi-circle-small"})],-1),Pt=a("div",{class:"active-dot active-dot-3"},[a("i",{class:"icon i-mdi-circle-small"})],-1),jt=C({__name:"MenuItem",props:{menuData:{}},setup(n){const{router:o}=le();return(e,s)=>{const t=z("menu-item",!0),l=$e,d=De;return p(),h("div",null,[e.menuData.children&&e.menuData.children.length>0?(p(),k(l,{key:0,index:e.menuData.name,class:"admin-sub-menu"},{title:w(()=>{var i;return[g(Q,{"icon-class":m(q)(e.menuData,"meta.menuConfig.iconClass","")},null,8,["icon-class"]),a("span",Rt,E((i=e.menuData.meta)==null?void 0:i.title),1)]}),default:w(()=>[(p(!0),h(R,null,T(e.menuData.children,i=>(p(),k(t,{key:i.name,"menu-data":i},null,8,["menu-data"]))),128))]),_:1},8,["index"])):(p(),k(d,{key:1,class:"admin-menu-item",index:e.menuData.name,onClick:s[0]||(s[0]=i=>m(o).push({name:e.menuData.name}))},{default:w(()=>{var i;return[g(Q,{"icon-class":m(q)(e.menuData,"meta.menuConfig.iconClass","")},null,8,["icon-class"]),a("span",Mt,E((i=e.menuData.meta)==null?void 0:i.title),1),St,Vt,Ot,Et,Tt,Pt]}),_:1},8,["index"]))])}}});const zt=C({__name:"Menu",props:{layout:{}},setup(n){const o=n,{layout:e}=W(o),{allRoutes:s,route:t}=le(),l=O(()=>r(t)),d=O(()=>{const c=s.value.find(v=>v.name===e.value);return c&&c.children?i(c.children):[]}),i=c=>{const v=[];return c.forEach(_=>{_.meta&&_.meta.menuConfig&&!_.meta.menuConfig.hidden&&(_.children&&_.children.length>0&&(_.children=i(_.children)),v.push(_))}),qe(v,_=>q(_,"meta.menuConfig.order",1e3))},r=c=>c&&c.meta?c.meta.menuConfig?c.meta.menuConfig.activeRouteName?c.meta.menuConfig.activeRouteName:c.name:c.meta.parentRouteData?r(c.meta.parentRouteData.parentRoute):"":"";return(c,v)=>{const _=Re;return p(),k(_,{collapse:!1,"default-active":l.value,class:"bg-transparent border-none admin-menu"},{default:w(()=>[(p(!0),h(R,null,T(d.value,x=>(p(),k(jt,{key:x.name,"menu-data":x},null,8,["menu-data"]))),128))]),_:1},8,["default-active"])}}});const It=Le("theme",{state:()=>({currentThemeIndex:0}),persist:{enabled:!0,strategies:[{key:"qst-theme",storage:localStorage}]},actions:{setCurrentThemeIndex(n){ve(n),this.currentThemeIndex=n}}}),Bt=n=>(fe("data-v-67dc4cc1"),n=n(),_e(),n),Nt={class:"flex flex-row items-center"},qt=["onClick"],Lt={key:0,"inline-block":"","align-middle":"","text-size-large":"",class:"i-mdi-check-circle-outline"},Wt=Bt(()=>a("i",{"inline-block":"","align-middle":"","text-size-large":"",dark:"i-line-md-moon-filled",class:"i-line-md-moon-filled-to-sunny-filled-loop-transition color-text-regular"},null,-1)),At=[Wt],Ut=C({__name:"ThemeToggler",setup(n){const o=It(),{currentThemeIndex:e}=We(o),{toggleDayNight:s,dayNightMode:t}=se();return(l,d)=>(p(),h("div",Nt,[(p(!0),h(R,null,T(m(he),(i,r)=>(p(),h("button",{key:"primary"+i.name,class:"theme-btn mr-spacing color-white",style:pe({backgroundColor:i.config[m(t)].color.primary}),onClick:c=>m(o).setCurrentThemeIndex(r)},[m(e)===r?(p(),h("i",Lt)):Z("",!0)],12,qt))),128)),a("button",{class:"theme-btn",onClick:d[0]||(d[0]=(...i)=>m(s)&&m(s)(...i))},At)]))}});const ie=ae(Ut,[["__scopeId","data-v-67dc4cc1"]]),Ft={class:"w-full h-full min-h-full overflow-hidden flex flex-row self-stretch items-start min-w-1200px"},Kt={class:"flex flex-col h-full w-left-menu bg-bg-page relative flex-shrink-0"},Ht=a("div",{class:"absolute w-1px top-0 bottom-0 right-0 bg-border-light"},null,-1),Yt=a("div",{class:"flex flex-row items-center w-full p-spacing"},[a("i",{"inline-block":"","align-middle":"","w-32px":"","h-32px":"",class:"i-uplus:logo"}),a("div",{class:"text-size-medium font-semibold ml-spacing-xxs"},"CODE EDITOR DEMO")],-1),Qt={class:"h-full w-full flex flex-col bg-bg min-w-0"},Xt={class:"flex flex-row items-center justify-between px-spacing-xl py-spacing"},Gt={class:"text-size-large font-semibold color-text-primary"},Jt=C({__name:"AdminLayout",props:{layout:{}},setup(n){const o=ne();return(e,s)=>{const t=z("RouterView");return p(),h("div",Ft,[a("div",Kt,[Ht,Yt,g(zt,{layout:e.layout},null,8,["layout"])]),a("div",Qt,[a("div",Xt,[a("div",Gt,E(m(o).meta.title),1),g(ie)]),g(t)])])}}});const Zt={class:"w-full h-header flex flex-row items-center justify-between px-spacing bg-bg border-b border-border-light"},eo=a("div",{class:"flex flex-row items-center"},[a("i",{"inline-block":"","align-middle":"","text-size-32px":"",class:"i-uplus:logo"}),a("div",{class:"text-size-large font-semibold ml-10px"},"前端脚手架")],-1),to=C({__name:"Header",setup(n){return(o,e)=>(p(),h("div",Zt,[eo,g(ie)]))}}),oo={class:"w-full min-h-screen"},no={class:"w-1200px flex flex-col mt-header flex-1 flex-shrink-0 mx-auto"},so=C({__name:"Baselayout",setup(n){return(o,e)=>{const s=z("RouterView");return p(),h("div",oo,[g(to,{class:"fixed left-0 right-0 top-0 z-1000"}),a("div",no,[g(s)])])}}});var L=(n=>(n.base="base",n.admin="admin",n))(L||{});const X=n=>({path:`/${n.name}`,name:n.name,props:{layout:n.name},component:n.component,children:[]}),G={base:X({name:"base",component:so}),admin:X({name:"admin",component:Jt})},ao=n=>{const o=[...n];Object.keys(L).forEach(s=>{o.push(G[s])});const e=Object.assign({"/src/modules/home/route.ts":$t});for(const s in e){const t=e[s].default.route;t&&o.push(...t),Object.keys(L).forEach(l=>{var i;const d=e[s].default[l];d&&((i=G[l].children)==null||i.push(...d))})}return re(o,null,null),o},re=(n,o,e)=>{n.forEach(s=>{if(o&&e){const t={parentRoute:o,baseRoute:e};s.meta?s.meta.parentRouteData=t:s.meta={title:"",parentRouteData:t}}s.children&&re(s.children,s,e||s)})},lo=[{path:"/",redirect:"/monaco"}],io=Be({history:Ne("/code-editor-demo/"),routes:ao(lo)}),ce=Ae();ce.use(Ue);self.MonacoEnvironment={getWorker(n,o){return o==="json"?new Oe:o==="css"||o==="scss"||o==="less"?new Ee:o==="html"||o==="handlebars"||o==="razor"?new Te:o==="typescript"||o==="javascript"?new Pe:new je}};Fe.config({monaco:ze});ye();const A=ge(Ke);A.use(ce);A.use(io);A.mount("#app");
