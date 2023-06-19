import{d as K,e as $,f as L,g as H,h as O,i as E,j as Q}from"./vendor-element-plus-03a4f98b.js";import{r as f,d as B,a9 as A,b as W,w as I,o as x,S as M,u as c,T as w,a as s,V as v,c as V,Q as j,ad as N,W as X,X as U,P as Y,a7 as R}from"./vendor-@vue-13edef39.js";import{V as G}from"./vendor-@guolao-dd71f981.js";import{M as J}from"./vendor-monaco-editor-780bf743.js";import{e as Z}from"./vendor-@vueuse-bdf53fce.js";import"./vendor-@element-plus-1ade8d56.js";import"./vendor-@ctrl-f8748455.js";import"./vendor-lodash-es-d940ded9.js";import"./vendor-@sxzz-c75af06c.js";import"./vendor-@monaco-editor-8266f9ce.js";import"./vendor-state-local-dd516420.js";const ee=()=>{const y=[...J._menuItems].find(t=>t[0].id=="EditorContext"),a=y?y[1]:null,i=["editor.action.clipboardCutAction","editor.action.clipboardCopyAction","editor.action.clipboardPasteAction"],e=f([]),l=(t,h)=>{var p,o;let m=t._first;const b=[];do h.includes((o=(p=m.element)==null?void 0:p.command)==null?void 0:o.id)&&(b.push(m.element),t._remove(m));while(m=m.next);e.value=b};return{disableCopyPasteMenu:()=>{a&&l(a,i)},restoreCopyPasteMenu:()=>{a&&e.value.length>0&&(e.value.forEach(t=>{a.unshift(t)}),e.value=[])}}},te=B({__name:"MonacoEditorCompo",props:{theme:{},disableCopyPaste:{type:Boolean},language:{},fontSize:{},insertSpaces:{type:Boolean},autoFormat:{type:Boolean},options:{},defaultValue:{}},emits:["save","change","reset","editor-mounted","copy-paste-disabled"],setup(S,{expose:y,emit:a}){const i=S,{disableCopyPaste:e,defaultValue:l,fontSize:g,autoFormat:r,insertSpaces:t}=A(i),{disableCopyPasteMenu:h,restoreCopyPasteMenu:m}=ee(),b={automaticLayout:!0,formatOnType:!0,formatOnPaste:!0,fontSize:16,insertSpaces:!0},p=f(""),o=f(null),C=f(null),D=W(()=>{const n={};return g!=null&&g.value&&(n.fontSize=g.value),(r.value===!1||r.value===!0)&&(n.formatOnType=r.value,n.formatOnPaste=r.value),(t.value===!1||t.value)&&(n.insertSpaces=t.value),Object.assign({},b,n)});I(e,n=>{C.value&&(n?h():m())},{immediate:!0});const P=n=>{a("editor-mounted"),C.value=n,l!=null&&l.value&&(p.value=l.value),C.value.onKeyDown(d=>{const{keyCode:k,ctrlKey:z,metaKey:T}=d;k===49&&(T||z)&&(_(),d.preventDefault()),(k===33||k===52)&&(T||z)&&e.value&&(d.preventDefault(),a("copy-paste-disabled"))})},u=n=>{a("change",n)},_=()=>{o.value&&a("save",p.value)};return y({save:_,reset:()=>{p.value=l!=null&&l.value?l.value:"",a("reset")}}),(n,d)=>(x(),M(c(G),{ref_key:"editorCompoRef",ref:o,value:p.value,"onUpdate:value":d[0]||(d[0]=k=>p.value=k),height:"100%",language:n.language,"default-value":c(l),theme:n.theme,options:D.value,onMount:P,onChange:u},null,8,["value","language","default-value","theme","options"]))}}),oe=s("div",{class:"text-size-large color-text-primary"},"代码编辑器设置",-1),ae={class:"flex flex-col"},le={class:"flex flex-row items-center justify-between pt-spacing-md"},ne=s("div",{class:"color-text-regular"},"暗黑模式",-1),se={class:"flex flex-row items-center justify-between pt-spacing-sm"},ie=s("div",{class:"color-text-regular"},"自动格式化",-1),re={class:"flex flex-row items-center justify-between pt-spacing-sm"},ue=s("div",{class:"color-text-regular"},"字体大小",-1),de={class:"flex flex-row items-center justify-between pt-spacing-sm"},ce=s("div",{class:"color-text-regular"},"Tab转换",-1),pe={class:"flex flex-row items-center justify-between pt-spacing-sm"},me=s("div",{class:"color-text-regular"},"禁用复制粘贴",-1),fe=B({__name:"ConfigDrawer",props:{config:{}},setup(S,{expose:y}){const a=S,i=f(!1),{config:e}=A(a),l=[12,14,16,18,20,22,24,26];return y({open:()=>{i.value=!0}}),(r,t)=>{const h=K,m=$,b=L,p=H;return x(),M(p,{modelValue:i.value,"onUpdate:modelValue":t[5]||(t[5]=o=>i.value=o),title:"I am the title","with-header":!1,size:"280px"},{default:w(()=>[oe,s("div",ae,[s("div",le,[ne,v(h,{modelValue:c(e).isDark,"onUpdate:modelValue":t[0]||(t[0]=o=>c(e).isDark=o)},null,8,["modelValue"])]),s("div",se,[ie,v(h,{modelValue:c(e).autoFormat,"onUpdate:modelValue":t[1]||(t[1]=o=>c(e).autoFormat=o)},null,8,["modelValue"])]),s("div",re,[ue,v(b,{modelValue:c(e).fontSize,"onUpdate:modelValue":t[2]||(t[2]=o=>c(e).fontSize=o),size:"small",class:"w-80px"},{default:w(()=>[(x(),V(j,null,N(l,o=>v(m,{key:o,value:o,label:o+"px"},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),s("div",de,[ce,v(h,{modelValue:c(e).insertSpaces,"onUpdate:modelValue":t[3]||(t[3]=o=>c(e).insertSpaces=o)},null,8,["modelValue"])]),s("div",pe,[me,v(h,{modelValue:c(e).disableCopyPaste,"onUpdate:modelValue":t[4]||(t[4]=o=>c(e).disableCopyPaste=o)},null,8,["modelValue"])])])]),_:1},8,["modelValue"])}}}),ve=`<!-- html code -->
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
</html>`,ge=`/* css code */
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
`,he=`/* js code */
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
})`,F=[{language:"javascript",source:he},{language:"css",source:ge},{language:"html",source:ve}],ye={class:"flex flex-1 flex-col px-spacing-xl pb-spacing-xl min-h-0"},be={class:"flex flex-row pb-spacing items-center justify-between"},xe=["onClick"],_e={class:"flex flex-row items-center"},we={key:0,class:"w-8px h-8px bg-theme rounded-full mr-spacing-sm"},Ce={class:"flex flex-col flex-1 min-h-0 border border-border overflow-hidden rounded-base"},ze=B({__name:"MonacoEditorDemo",setup(S){const y=Z({disableTransition:!1}),a=f("saved"),i=f(F[0]),e=f(),l=f(),g=f(),r=f({isDark:!0,autoFormat:!0,fontSize:16,insertSpaces:!0,disableCopyPaste:!1});I(y,u=>{r.value.isDark!==u&&(r.value=Object.assign(r.value,{isDark:u}))},{immediate:!0});const t=()=>{g.value&&g.value.open()},h=()=>{console.log("editor mounted")},m=u=>{a.value==="edited"?O.confirm("您的代码尚未保存","提示",{confirmButtonText:"保存并切换",cancelButtonText:"取消切换",type:""}).then(()=>{e.value&&e.value.blur(),p(()=>{i.value=u})}).catch(()=>{e.value&&e.value.blur()}):(i.value=u,e.value&&e.value.blur())},b=()=>{l.value&&O.confirm("确定要重置代码吗","重置代码",{confirmButtonText:"确定",cancelButtonText:"取消",type:""}).then(()=>{l.value&&l.value.reset(),E({type:"success",message:"代码已重置"})}).catch(()=>null)},p=u=>{a.value="saving",setTimeout(()=>{l.value&&l.value.save(),a.value="saved",typeof u=="function"&&u()},2e3)},o=u=>{E.success("已保存"),console.log("save:",u)},C=u=>{a.value="edited",console.log("onChange:",u)},D=()=>{E.warning("已禁用代码编辑器的复制粘贴功能")},P=()=>{console.log("onReset")};return(u,_)=>{const q=$,n=Q;return x(),V(j,null,[s("div",ye,[s("div",be,[v(c(L),{ref_key:"languageSelectRef",ref:e,modelValue:i.value,"onUpdate:modelValue":_[0]||(_[0]=d=>i.value=d),disabled:a.value==="saving","value-key":"language"},{default:w(()=>[(x(!0),V(j,null,N(c(F),d=>(x(),M(q,{key:d.language,value:d,label:d.language},{default:w(()=>[s("div",{onClick:X(k=>m(d),["stop"])},U(d.language),9,xe)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue","disabled"]),s("div",_e,[a.value!=="saved"?(x(),V("div",we)):Y("",!0),v(n,{loading:a.value==="saving",disabled:a.value==="saved",type:"primary",onClick:_[1]||(_[1]=d=>p())},{default:w(()=>[R(U(a.value==="saving"?"保存中...":"保存"),1)]),_:1},8,["loading","disabled"]),v(n,{type:"primary",onClick:b},{default:w(()=>[R("重置")]),_:1}),v(n,{type:"primary",onClick:t},{default:w(()=>[R("设置")]),_:1})])]),s("div",Ce,[(x(),M(te,{ref_key:"editorRef",ref:l,key:i.value.language,theme:r.value.isDark?"vs-dark":"light","disable-copy-paste":r.value.disableCopyPaste,"font-size":r.value.fontSize,"auto-format":r.value.autoFormat,"default-value":i.value.source,language:i.value.language,onEditorMounted:h,onSave:o,onChange:C,onCopyPasteDisabled:D,onReset:P},null,8,["theme","disable-copy-paste","font-size","auto-format","default-value","language"]))])]),v(fe,{ref_key:"configDrawerRef",ref:g,config:r.value},null,8,["config"])],64)}}});export{ze as default};
