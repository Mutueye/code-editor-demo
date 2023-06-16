import{l as E}from"./vendor-@monaco-editor-8266f9ce.js";import{d as C,s as _,b as y,e as j,w as s,h as g,f as L,r as N,n as P}from"./vendor-@vue-13edef39.js";var $=Object.defineProperty,I=Object.defineProperties,k=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,M=(e,t,a)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))U.call(t,a)&&M(e,a,t[a]);if(w)for(var a of w(t))x.call(t,a)&&M(e,a,t[a]);return e},D=(e,t)=>I(e,k(t));const h={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function H(e,t){const a=y(()=>{const{width:n,height:v}=e;return D(p({},h.wrapper),{width:n,height:v})}),r=y(()=>p(p({},h.fullWidth),!t.value&&h.hide));return{wrapperStyle:a,containerStyle:r}}function T(){const e=_(null),t=E.init(),a=()=>t.cancel();return t.then(r=>e.value=r).catch(r=>{(r==null?void 0:r.type)!=="cancelation"&&console.error("Monaco initialization error:",r)}),{monacoRef:e,unload:a}}function W(e){return typeof e=="function"?e():e}function z(e){return e===void 0}function V(e,t,a,r){return A(e,r)||B(e,t,a,r)}function A(e,t){return e.editor.getModel(b(e,t))}function B(e,t,a,r){return e.editor.createModel(t,a,r?b(e,r):void 0)}function b(e,t){return e.Uri.parse(t)}var q=Object.defineProperty,S=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,O=(e,t,a)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,J=(e,t)=>{for(var a in t||(t={}))F.call(t,a)&&O(e,a,t[a]);if(S)for(var a of S(t))G.call(t,a)&&O(e,a,t[a]);return e};const K={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var R=C({name:"VueMonacoEditor",model:{prop:"value",event:"update:value"},props:{defaultValue:String,defaultPath:String,defaultLanguage:String,value:String,language:String,path:String,theme:{type:String,default:"light"},line:Number,options:{type:Object,default:()=>({})},overrideServices:{type:Object,default:()=>({})},saveViewState:{type:Boolean,default:!0},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"100%"},className:String},emits:["update:value","beforeMount","mount","change","validate"],setup(e,t){const a=new Map,r=_(null),{monacoRef:n,unload:v}=T(),{editorRef:l}=Q(t,e,n,r),{disposeValidator:c}=X(t,e,n,l),i=y(()=>!!n.value&&!!l.value),{wrapperStyle:f,containerStyle:o}=H(e,i);return j(()=>{var u,d;(u=c.value)==null||u.call(c),l.value?((d=l.value.getModel())==null||d.dispose(),l.value.dispose()):v()}),s(()=>e.path,(u,d)=>{const m=V(n.value,e.value||e.defaultValue,e.language||e.defaultLanguage,u);m!==l.value.getModel()&&(e.saveViewState&&a.set(d,l.value.saveViewState()),l.value.setModel(m),e.saveViewState&&l.value.restoreViewState(a.get(u)))}),s(()=>e.value,u=>{l.value&&l.value.getValue()!==u&&l.value.setValue(u)}),s(()=>e.options,u=>l.value&&l.value.updateOptions(u),{deep:!0}),s(()=>e.theme,u=>n.value&&n.value.editor.setTheme(u)),s(()=>e.language,u=>i.value&&n.value.editor.setModelLanguage(l.value.getModel(),u)),s(()=>e.line,u=>{l.value&&!z(u)&&l.value.revealLine(u)}),{containerRef:r,isEditorReady:i,wrapperStyle:f,containerStyle:o}},render(){const{$slots:e,isEditorReady:t,wrapperStyle:a,containerStyle:r,className:n}=this;return g("div",{style:a},[!t&&g("div",{style:K},e.default?W(e.default):"loading..."),g("div",{ref:"containerRef",key:"monaco_editor_container",style:r,class:n})])}});function Q({emit:e},t,a,r){const n=_(null);L(()=>{const l=s(a,()=>{r.value&&a.value&&(P(()=>l()),v())},{immediate:!0})});function v(){var l;if(!r.value||!a.value||n.value)return;e("beforeMount",a.value);const c=t.path||t.defaultPath,i=V(a.value,t.value||t.defaultValue,t.language||t.defaultLanguage,c);n.value=a.value.editor.create(r.value,J({model:i,theme:t.theme,automaticLayout:!0,autoIndent:"brackets",formatOnPaste:!0,formatOnType:!0},t.options),t.overrideServices),(l=n.value)==null||l.onDidChangeModelContent(f=>{const o=n.value.getValue();o!==t.value&&(e("update:value",o),e("change",o,f))}),e("mount",n.value,a.value)}return{editorRef:n}}function X({emit:e},t,a,r){const n=N(null),v=s([a,r],()=>{if(a.value&&r.value){P(()=>v());const l=a.value.editor.onDidChangeMarkers(c=>{var i,f;const o=(f=(i=r.value)==null?void 0:i.getModel())==null?void 0:f.uri;if(o&&c.find(d=>d.path===o.path)){const d=a.value.editor.getModelMarkers({resource:o});e("validate",d)}});n.value=()=>l==null?void 0:l.dispose()}});return{disposeValidator:n}}export{R as V};
