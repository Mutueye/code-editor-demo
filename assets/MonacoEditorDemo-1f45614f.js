import{d as I,e as F,f as T,g as N,h as K,i as E,j as H}from"./vendor-element-plus-2b0cb877.js";import{V as Q}from"./vendor-@guolao-dd71f981.js";import{M as Y}from"./vendor-monaco-editor-65719260.js";import{r as f,d as z,a9 as L,b as G,w as $,o as x,S as M,u as r,T as C,a as l,V as p,c as R,Q as q,ad as A,a7 as j}from"./vendor-@vue-13edef39.js";import{u as J}from"./index-7e31498a.js";import"./vendor-@element-plus-1ade8d56.js";import"./vendor-@vueuse-bdf53fce.js";import"./vendor-@ctrl-f8748455.js";import"./vendor-lodash-es-d940ded9.js";import"./vendor-@sxzz-c75af06c.js";import"./vendor-@monaco-editor-8266f9ce.js";import"./vendor-state-local-dd516420.js";import"./vendor-@itshixun-e2bc5e90.js";import"./vendor-color2k-defc164d.js";import"./vendor-vue-router-d0f2db2c.js";import"./vendor-pinia-14229953.js";import"./vendor-vue-demi-71ba0ef2.js";import"./vendor-pinia-plugin-persist-4bd0ee57.js";const W=()=>{const g=[...Y._menuItems].find(e=>e[0].id=="EditorContext"),n=g?g[1]:null,s=["editor.action.clipboardCutAction","editor.action.clipboardCopyAction","editor.action.clipboardPasteAction"],o=f([]),a=(e,m)=>{var u,t;let c=e._first;const y=[];do m.includes((t=(u=c.element)==null?void 0:u.command)==null?void 0:t.id)&&(y.push(c.element),e._remove(c));while(c=c.next);o.value=y};return{disableCopyPasteMenu:()=>{n&&a(n,s)},restoreCopyPasteMenu:()=>{n&&o.value.length>0&&(o.value.forEach(e=>{n.unshift(e)}),o.value=[])}}},X=z({__name:"MonacoEditorCompo",props:{theme:{},disableCopyPaste:{type:Boolean},language:{},fontSize:{},insertSpaces:{type:Boolean},autoFormat:{type:Boolean},options:{},defaultValue:{}},emits:["save","change","reset","editor-mounted","copy-paste-disabled"],setup(k,{expose:g,emit:n}){const s=k,{disableCopyPaste:o,defaultValue:a,fontSize:v,autoFormat:h,insertSpaces:e}=L(s),{disableCopyPasteMenu:m,restoreCopyPasteMenu:c}=W(),y={automaticLayout:!0,formatOnType:!0,formatOnPaste:!0,fontSize:16,insertSpaces:!0},u=f(""),t=f(null),d=f(null),S=G(()=>{const i={};return v!=null&&v.value&&(i.fontSize=v.value),(h.value===!1||h.value===!0)&&(i.formatOnType=h.value,i.formatOnPaste=h.value),(e.value===!1||e.value)&&(i.insertSpaces=e.value),Object.assign({},y,i)});$(o,i=>{d.value&&(i?m():c())},{immediate:!0});const D=i=>{n("editor-mounted"),d.value=i,a!=null&&a.value&&(u.value=a.value),d.value.onKeyDown(w=>{const{keyCode:V,ctrlKey:B,metaKey:O}=w;V===49&&(O||B)&&(_(),w.preventDefault()),(V===33||V===52)&&(O||B)&&o.value&&(w.preventDefault(),n("copy-paste-disabled"))})},P=i=>{n("change",i)},_=()=>{t.value&&n("save",u.value)};return g({save:_,reset:()=>{u.value=a!=null&&a.value?a.value:"",n("reset")}}),(i,w)=>(x(),M(r(Q),{ref_key:"editorCompoRef",ref:t,value:u.value,"onUpdate:value":w[0]||(w[0]=V=>u.value=V),height:"100%",language:i.language,"default-value":r(a),theme:i.theme,options:S.value,onMount:D,onChange:P},null,8,["value","language","default-value","theme","options"]))}}),Z=l("div",{class:"text-size-large color-text-primary"},"代码编辑器设置",-1),ee={class:"flex flex-col"},te={class:"flex flex-row items-center justify-between pt-spacing-md"},oe=l("div",{class:"color-text-regular"},"暗黑模式",-1),ae={class:"flex flex-row items-center justify-between pt-spacing-sm"},ne=l("div",{class:"color-text-regular"},"自动格式化",-1),le={class:"flex flex-row items-center justify-between pt-spacing-sm"},se=l("div",{class:"color-text-regular"},"字体大小",-1),ie={class:"flex flex-row items-center justify-between pt-spacing-sm"},re=l("div",{class:"color-text-regular"},"Tab转换",-1),ue={class:"flex flex-row items-center justify-between pt-spacing-sm"},de=l("div",{class:"color-text-regular"},"禁用复制粘贴",-1),ce=z({__name:"ConfigDrawer",props:{config:{}},setup(k,{expose:g}){const n=k,s=f(!1),{config:o}=L(n),a=[12,14,16,18,20,22,24,26];return g({open:()=>{s.value=!0}}),(h,e)=>{const m=I,c=F,y=T,u=N;return x(),M(u,{modelValue:s.value,"onUpdate:modelValue":e[5]||(e[5]=t=>s.value=t),title:"I am the title","with-header":!1,size:"280px"},{default:C(()=>[Z,l("div",ee,[l("div",te,[oe,p(m,{modelValue:r(o).isDark,"onUpdate:modelValue":e[0]||(e[0]=t=>r(o).isDark=t)},null,8,["modelValue"])]),l("div",ae,[ne,p(m,{modelValue:r(o).autoFormat,"onUpdate:modelValue":e[1]||(e[1]=t=>r(o).autoFormat=t)},null,8,["modelValue"])]),l("div",le,[se,p(y,{modelValue:r(o).fontSize,"onUpdate:modelValue":e[2]||(e[2]=t=>r(o).fontSize=t),size:"small",class:"w-80px"},{default:C(()=>[(x(),R(q,null,A(a,t=>p(c,{key:t,value:t,label:t+"px"},null,8,["value","label"])),64))]),_:1},8,["modelValue"])]),l("div",ie,[re,p(m,{modelValue:r(o).insertSpaces,"onUpdate:modelValue":e[3]||(e[3]=t=>r(o).insertSpaces=t)},null,8,["modelValue"])]),l("div",ue,[de,p(m,{modelValue:r(o).disableCopyPaste,"onUpdate:modelValue":e[4]||(e[4]=t=>r(o).disableCopyPaste=t)},null,8,["modelValue"])])])]),_:1},8,["modelValue"])}}}),pe=`<!-- html code -->
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
</html>`,me=`/* css code */
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
`,fe=`/* js code */
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
})`,U=[{language:"javascript",source:fe},{language:"css",source:me},{language:"html",source:pe}],ge={class:"flex flex-1 flex-col px-spacing-xl pb-spacing-xl min-h-0"},ve={class:"flex flex-row pb-spacing items-center justify-between"},he={class:"flex flex-row items-center"},ye={class:"flex flex-col flex-1 min-h-0 border border-border overflow-hidden rounded-base"},Ue=z({__name:"MonacoEditorDemo",setup(k){const{isDark:g}=J(),n=f(U[0]),s=f(),o=f(),a=f({isDark:!0,autoFormat:!0,fontSize:16,insertSpaces:!0,disableCopyPaste:!1});$(g,d=>{a.value.isDark!==d&&(a.value=Object.assign(a.value,{isDark:d}))},{immediate:!0});const v=()=>{o.value&&o.value.open()},h=()=>{console.log("editor mounted")},e=()=>{s.value&&K.confirm("确定要重置代码吗","重置代码",{confirmButtonText:"确定",cancelButtonText:"取消",type:""}).then(()=>{s.value&&s.value.reset(),E({type:"success",message:"代码已重置"})}).catch(()=>null)},m=()=>{s.value&&s.value.save()},c=d=>{E.success("已保存"),console.log("save:",d)},y=d=>{console.log("onChange:",d)},u=()=>{E.warning("已禁用代码编辑器的复制粘贴功能")},t=()=>{console.log("onReset")};return(d,S)=>{const D=F,P=T,_=H;return x(),R(q,null,[l("div",ge,[l("div",ve,[p(P,{modelValue:n.value,"onUpdate:modelValue":S[0]||(S[0]=b=>n.value=b),"value-key":"language"},{default:C(()=>[(x(!0),R(q,null,A(r(U),b=>(x(),M(D,{key:b.language,value:b,label:b.language},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),l("div",he,[p(_,{type:"primary",onClick:m},{default:C(()=>[j("保存")]),_:1}),p(_,{type:"primary",onClick:e},{default:C(()=>[j("重置")]),_:1}),p(_,{type:"primary",onClick:v},{default:C(()=>[j("设置")]),_:1})])]),l("div",ye,[(x(),M(X,{ref_key:"editorRef",ref:s,key:n.value.language,theme:a.value.isDark?"vs-dark":"light","disable-copy-paste":a.value.disableCopyPaste,"font-size":a.value.fontSize,"auto-format":a.value.autoFormat,"default-value":n.value.source,language:n.value.language,onEditorMounted:h,onSave:c,onChange:y,onCopyPasteDisabled:u,onReset:t},null,8,["theme","disable-copy-paste","font-size","auto-format","default-value","language"]))])]),p(ce,{ref_key:"configDrawerRef",ref:o,config:a.value},null,8,["config"])],64)}}});export{Ue as default};
