"use strict";(self.webpackChunkwww_qroma_project=self.webpackChunkwww_qroma_project||[]).push([[1432],{3401:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>le,contentTitle:()=>ne,default:()=>oe,frontMatter:()=>ae,metadata:()=>se,toc:()=>ie});var n=a(4848),s=a(8453),l=a(8478),i=a(6540),r=a(7733),o=a(3581),g=a(4016),d=a(6786);const c=960,p=540,m=e=>{let{componentState:t}=e;const a=t.grayscaleData,[s,l]=(0,i.useState)("");return console.log("RENDERING GrayscaleConversionOutputImage"),(0,i.useEffect)((()=>{console.log("IN USE EFFECT");const e=document.createElement("canvas");console.log(e),e.width=a.imageWidthInPixels,e.height=a.imageHeightInPixels;const t=e.getContext("2d");if(null===t)return;console.log("CANVAS CTX: "+t);var n=t.createImageData(a.imageWidthInPixels,a.imageHeightInPixels);console.log("IMAGE DATA: "+n);for(let l=0;l<a.dataAsNibbles.length;l++){const e=16*a.dataAsNibbles[l],t=4*l;n.data[t]=e,n.data[t+1]=e,n.data[t+2]=e,n.data[t+3]=255}t.putImageData(n,0,0);const s=e.toDataURL();console.log("CANVAS"),console.log(e),l(s),console.log(`SETTING CANVAS HEIGHT: ${a.imageHeightInPixels}`),console.log(`SETTING CANVAS WIDTH: ${a.imageWidthInPixels}`)}),[t.grayscaleData]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{style:{width:480,height:270},children:(0,n.jsx)("img",{src:s})})})};var u=a(5674);let h=function(e){return e.lightness="lightness",e.average="average",e.luminosity="luminosity",e}({});const v=e=>e<16?[0,0,0,0]:e<32?[0,0,0,1]:e<48?[0,0,1,0]:e<64?[0,0,1,1]:e<80?[0,1,0,0]:e<96?[0,1,0,1]:e<112?[0,1,1,0]:e<128?[0,1,1,1]:e<144?[1,0,0,0]:e<160?[1,0,0,1]:e<176?[1,0,1,0]:e<192?[1,0,1,1]:e<208?[1,1,0,0]:e<224?[1,1,0,1]:e<240?[1,1,1,0]:[1,1,1,1],x=e=>{const{p1r:t,p1g:a,p1b:n,p2r:s,p2g:l,p2b:i}=e,r=(s+l+i)/3,o=v((t+a+n)/3),g=v(r);return 16*u.Ay.nibble.write(o)+u.Ay.nibble.write(g)},I=e=>{const{p1r:t,p1g:a,p1b:n,p2r:s,p2g:l,p2b:i}=e,r=(s+l+i)/3,o=v((t+a+n)/3),g=v(r);return[u.Ay.nibble.write(o),u.Ay.nibble.write(g)]},S=e=>{const t=e.imageData.width;if(t%2!=0)throw new Error("Image width must be even");if(e.conversionAlgorithm!==h.average)throw new Error("Unsupported GS conversion algorithm: "+e.conversionAlgorithm);const a=e.imageData.height,n=[],s=[];for(let l=0;l<a;l++)for(let a=0;a<t;a+=2){const s=4*(l*t+a),i=e.imageData.data,r=x({p1r:i[s],p1g:i[s+1],p1b:i[s+2],p2r:i[s+4],p2g:i[s+5],p2b:i[s+6]});n.push(r)}for(let l=0;l<a;l++)for(let a=0;a<t;a+=2){const n=4*(l*t+a),i=e.imageData.data,[r,o]=I({p1r:i[n],p1g:i[n+1],p1b:i[n+2],p2r:i[n+4],p2g:i[n+5],p2b:i[n+6]});s.push(r),s.push(o)}return{dataAsUint8Array:new Uint8ClampedArray(n),dataAsNibbles:s,imageHeightInPixels:a,imageWidthInPixels:t,imageLabel:e.imageLabel}},f=e=>{if((e=(e=e.trim()).slice(e.indexOf("<svg"))).startsWith("<svg")&&e.endsWith("svg>")&&(e.includes("http://www.w3.org/2000/svg")||(e=e.replace(/<svg/g,"<svg xmlns='http://www.w3.org/2000/svg'")),(e=(e=(e=(e=(e=(e=(e=e.replace(/<!--.{1,}-->/g,"")).replace(/version=[\"\'](.{0,}?)[\"\'](?=[\s>])/g,"")).replace(/"'(.{1,})'"/g,"'$1'")).replace(/"/g,"'")).replace(/>\s{1,}</g,"><")).replace(/\s{2,}/g," ")).trim()).startsWith("<svg")&&e.endsWith("svg>")))return e=`data:image/svg+xml,${e=(e=e.replace(/&/g,"&amp;")).replace(/[%#<>?\[\\\]^`{|}]/g,encodeURIComponent)}`},b=e=>{const t=(0,i.useRef)(null);return(0,n.jsx)("div",{style:{width:480,height:270},children:(0,n.jsx)("img",{ref:t,src:e.svgAsDataUrl,onLoad:()=>{try{if(null===t||null===t.current)return;const a=document.createElement("canvas");a.width=t.current.naturalWidth,a.height=t.current.naturalHeight;const n=a.getContext("2d");n.drawImage(t.current,0,0);const s=n.getImageData(0,0,a.width,a.height),l=S({imageData:s,conversionAlgorithm:h.average,imageLabel:e.gsImageLabel});console.log(l),e.onGsConvertedData(l)}catch(a){console.log("CANVAS ERROR: "+a)}},height:0,width:0})})};function w(e){const{children:t,value:a,index:s,...l}=e;return(0,n.jsx)("div",{role:"tabpanel",hidden:a!==s,id:`simple-tabpanel-${s}`,"aria-labelledby":`simple-tab-${s}`,...l,children:a===s&&(0,n.jsx)(r.A,{sx:{p:3},children:t})})}function j(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}const T=e=>{let{svgInputText:t}=e;return console.log("svgInputText"),console.log(t),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{children:(0,n.jsx)(o.A,{id:"outlined-multiline-static",label:"SVG Input",multiline:!0,value:t,fullWidth:!0,inputProps:{style:{fontFamily:"monospace",height:"250px",overflow:"scroll"}}})})})},A=e=>{const[t,a]=i.useState(1),s=async()=>{var t=document.createElement("img");const a=f(e.componentState.svgImageText);t.onload=async()=>{let a=new FileReader;const n=new Blob([e.componentState.svgImageText],{type:"image/svg+xml"});a.readAsDataURL(n),a.onload=function(){const n=a.result;(t=>{try{const a=document.createElement("canvas").getContext("2d");a.drawImage(t,0,0);const n=a?.getImageData(0,0,t.width,t.height),s=S({imageData:n,conversionAlgorithm:h.average,imageLabel:e.componentState.gsImageLabel});e.onNewGrayscaleData(s)}catch(a){console.log("CANVAS ERROR: "+a)}})(t),e.onNewSvgImageAsDataUrl(n)}},t.src=a};return(0,i.useEffect)((()=>{(async()=>{await s()})()}),[e.componentState.svgImageText]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(r.A,{sx:{borderBottom:1,borderColor:"divider",height:400},children:[(0,n.jsx)("canvas",{id:"canvas-ImageOutputView",height:0,width:0}),(0,n.jsx)("div",{style:{width:0,height:0},children:(0,n.jsx)(b,{svgAsDataUrl:e.componentState.svgImageAsDataUrl,gsImageLabel:e.componentState.gsImageLabel,onGsConvertedData:t=>{e.onNewGrayscaleData(t)}})}),(0,n.jsx)(r.A,{sx:{borderBottom:1,borderColor:"divider"},children:(0,n.jsxs)(g.A,{value:t,onChange:(e,t)=>{a(t)},"aria-label":"basic tabs example",variant:"scrollable",children:[(0,n.jsx)(d.A,{label:"SVG Text",...j(0)}),(0,n.jsx)(d.A,{label:"SVG Image",...j(1)}),(0,n.jsx)(d.A,{label:"Grayscale",...j(2)}),(0,n.jsx)(d.A,{label:"Upload",...j(3)})]})}),(0,n.jsx)(w,{value:t,index:0,children:(0,n.jsx)(T,{svgInputText:e.componentState.svgImageText})}),(0,n.jsx)(w,{value:t,index:1,children:(0,n.jsx)("div",{style:{width:480,height:270},children:(0,n.jsx)("img",{src:e.componentState.svgImageAsDataUrl})})}),(0,n.jsx)(w,{value:t,index:2,children:(0,n.jsx)(m,{componentState:e.componentState})}),(0,n.jsx)(w,{value:t,index:3,children:(0,n.jsx)("div",{children:"Upload"})})]})})};var y=a(3870),G=a(26),F=a(8440),U=a(2909),D=a(3232),N=a(7512),E=a(8999),C=a(5848);const k="LINE1",L=e=>{let{line1:t,svgTemplateInputs:a}=e;return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",baseProfile:"full",width:c,height:p,children:[(0,n.jsx)("rect",{width:"100%",height:"100%",fill:"white",stroke:"black",strokeWidth:a.borderWidth,strokeOpacity:"1.0"}),(0,n.jsx)("text",{x:480,y:270,fontSize:a.fontSize,fontFamily:a.fontFamily,textAnchor:"middle",dominantBaseline:"middle",fill:"black",children:t})]})},R=(e,t)=>({newSvgText:(0,C.F0)((0,n.jsx)(L,{line1:e,svgTemplateInputs:t})),svgImageLabel:e}),W=e=>{const[t,a]=(0,i.useState)(k),[s,l]=(0,i.useState)("Arial, Helvetica, sans-serif"),[r,g]=(0,i.useState)(160),[d,c]=(0,i.useState)("");return(0,i.useEffect)((()=>{e.svgGenerationInputsUpdateFn(R(t,e.templateInputs))}),[t,e.templateInputs]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(E.A,{spacing:2,children:(0,n.jsx)(o.A,{id:"outlined-required",label:"Line 1",value:t,onChange:e=>{const t=e.target.value;a(t)}},"single-line-text-line1-input")})})},P=e=>{let{line1:t,line2:a,svgTemplateInputs:s}=e;return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",baseProfile:"full",width:c,height:p,children:[(0,n.jsx)("rect",{width:"100%",height:"100%",fill:"white",stroke:"black",strokeWidth:s.borderWidth,strokeOpacity:"1.0"}),(0,n.jsx)("text",{x:480,y:178.20000000000002,fontSize:s.fontSize,fontFamily:s.fontFamily,textAnchor:"middle",dominantBaseline:"middle",fill:"black",children:t}),(0,n.jsx)("text",{x:480,y:405,fontSize:s.fontSize,fontFamily:s.fontFamily,textAnchor:"middle",dominantBaseline:"middle",fill:"black",children:a})]})},H=(e,t,a)=>({newSvgText:(0,C.F0)((0,n.jsx)(P,{line1:e,line2:t,svgTemplateInputs:a})),svgImageLabel:e+" "+t}),z=e=>{console.log("IN FORM PROVIDER - 2");const[t,a]=(0,i.useState)("QROMA"),[s,l]=(0,i.useState)("HAT");return(0,i.useEffect)((()=>{e.svgGenerationInputsUpdateFn(H(t,s,e.templateInputs))}),[t,s,e.templateInputs]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(E.A,{spacing:2,children:[(0,n.jsx)(o.A,{id:"outlined-required",label:"Line 1",value:t,onChange:e=>{const t=e.target.value;a(t)}}),(0,n.jsx)(o.A,{id:"outlined-required",label:"Line 2",value:s,onChange:e=>{const t=e.target.value;l(t)}})]})})},O=e=>{let{line1:t,line2:a,line3:s,svgTemplateInputs:l}=e;return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",baseProfile:"full",width:c,height:p,children:[(0,n.jsx)("rect",{width:"100%",height:"100%",fill:"white",stroke:"black",strokeWidth:l.borderWidth,strokeOpacity:"1.0"}),(0,n.jsx)("text",{x:480,y:108,fontSize:l.fontSize,fontFamily:l.fontFamily,textAnchor:"middle",dominantBaseline:"middle",fill:"black",children:t}),(0,n.jsx)("text",{x:480,y:270,fontSize:l.fontSize,fontFamily:l.fontFamily,textAnchor:"middle",dominantBaseline:"middle",fill:"black",children:a}),(0,n.jsx)("text",{x:480,y:432,fontSize:l.fontSize,fontFamily:l.fontFamily,textAnchor:"middle",dominantBaseline:"middle",fill:"black",children:s})]})},B=(e,t,a,s)=>({newSvgText:(0,C.F0)((0,n.jsx)(O,{line1:e,line2:t,line3:a,svgTemplateInputs:s})),svgImageLabel:e+" "+t+" "+a}),V=e=>{console.log("IN FORM PROVIDER - 2");const[t,a]=(0,i.useState)("FIRST"),[s,l]=(0,i.useState)("GENERATION"),[r,g]=(0,i.useState)("PERFECT"),[d,c]=(0,i.useState)("arial"),[p,m]=(0,i.useState)(140);return(0,i.useEffect)((()=>{e.svgGenerationInputsUpdateFn(B(t,s,r,{...e.templateInputs,fontSize:p}))}),[t,s,r,e.templateInputs]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(E.A,{spacing:2,children:[(0,n.jsx)(o.A,{id:"outlined-required",label:"Line 1",value:t,onChange:e=>{const t=e.target.value;a(t)}}),(0,n.jsx)(o.A,{id:"outlined-required",label:"Line 2",value:s,onChange:e=>{const t=e.target.value;l(t)}}),(0,n.jsx)(o.A,{id:"outlined-required",label:"Line 3",value:r,onChange:e=>{const t=e.target.value;g(t)}})]})})},q=e=>{const[t,a]=(0,i.useState)(null),[s,l]=(0,i.useState)(null);return(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{type:"file",onChange:e=>{const t=e.target.files?.[0];l(t)}}),(0,n.jsx)("button",{onClick:()=>{if(!s)return;const t=new FileReader;t.onloadend=()=>{const n=t.result;a(n),e.onNewImageDataUrl(n)},t.readAsDataURL(s)},children:"Upload"}),t&&(0,n.jsx)("img",{src:t,alt:"uploaded"})]})},M="Put Image Name Here",Q=e=>{let{embeddedImageUrl:t}=e;return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",width:c,height:p,children:[(0,n.jsx)("rect",{width:"100%",height:"100%",fill:"white",stroke:"black",strokeWidth:"20",strokeOpacity:"1.0"}),(0,n.jsx)("image",{x:"190",y:"65",xlinkHref:t})]})},$=(e,t)=>({newSvgText:(0,C.F0)((0,n.jsx)(Q,{embeddedImageUrl:e})),svgImageLabel:t}),_=e=>{let{svgGenerationInputsUpdateFn:t}=e;const[a,s]=(0,i.useState)(M),[l,r]=(0,i.useState)("");return(0,i.useEffect)((()=>{t($(l,a))}),[l,a]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(E.A,{spacing:2,children:[(0,n.jsx)(q,{onNewImageDataUrl:e=>{r(e)}}),(0,n.jsx)(o.A,{id:"outlined-required",label:"Image Name",value:a,onChange:e=>{const n=e.target.value;s(n),t($(l,a))}},"single-line-text-line1-input")]})})},X=[{templateTitle:"Double Line",defaultSvgToGrayscaleInputs:e=>H("","",e),formProvider:e=>(0,n.jsx)(z,{svgGenerationInputsUpdateFn:e.svgGenerationInputsUpdateFn,templateInputs:e.templateInputs})},{templateTitle:"Single Line",defaultSvgToGrayscaleInputs:e=>R(k,e),formProvider:e=>(0,n.jsx)(W,{svgGenerationInputsUpdateFn:e.svgGenerationInputsUpdateFn,templateInputs:e.templateInputs})},{templateTitle:"Triple Line",defaultSvgToGrayscaleInputs:e=>B("","","",e),formProvider:e=>(0,n.jsx)(V,{svgGenerationInputsUpdateFn:e.svgGenerationInputsUpdateFn,templateInputs:e.templateInputs})},{templateTitle:"Embedded Image",defaultSvgToGrayscaleInputs:()=>$("",M),formProvider:e=>(0,n.jsx)(_,{svgGenerationInputsUpdateFn:e.svgGenerationInputsUpdateFn})}],K=e=>{const[t,a]=(0,i.useState)(!1),s=(e,t,a)=>{if(null===e)return null;const n=parseInt(e);return n>=t&&n<=a?n:null};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(r.A,{sx:{borderColor:"divider"},children:[(0,n.jsxs)(y.Ay,{container:!0,spacing:2,children:[(0,n.jsx)(y.Ay,{item:!0,xs:8,children:(0,n.jsxs)(G.A,{fullWidth:!0,children:[(0,n.jsx)(F.A,{id:"svg-template-select-label",children:"SVG Template"}),(0,n.jsx)(U.A,{labelId:"svg-template-select-label",id:"svg-template-select",value:e.svgTemplateIndex,label:"SVG Template",onChange:t=>{const a=t.target.value;console.log("SVG TEMPLATE INDEX: "+a);const n=X[a];e.onNewSvgTemplateSelected(a,n)},children:X.map(((e,t)=>(0,n.jsx)(D.A,{value:t,children:e.templateTitle},e.templateTitle)))})]})}),(0,n.jsx)(y.Ay,{item:!0,xs:4,children:(0,n.jsx)(N.A,{onClick:()=>a(!t),children:t?"Hide Settings":"Settings"})}),t?(0,n.jsx)(y.Ay,{item:!0,xs:12,children:(0,n.jsxs)(E.A,{spacing:2,children:[(0,n.jsxs)("div",{children:["Font Size: ",e.svgTemplateInputs.fontSize,(0,n.jsx)("button",{onClick:()=>{const t=window.prompt("Choose new font size (20-300)",e.svgTemplateInputs.fontSize.toString());console.log("NEW FONT SIZE: "+t);const a=s(t,20,300);null!==a&&e.onNewSvgTemplateInputs({...e.svgTemplateInputs,fontSize:a})},children:"Change"})]}),(0,n.jsxs)("div",{children:["Border Thickness: ",e.svgTemplateInputs.borderWidth,(0,n.jsx)("button",{onClick:()=>{const t=window.prompt("Choose new border thickness (20-300)",e.svgTemplateInputs.borderWidth.toString());console.log("NEW BORDER THICKNESS: "+t);const a=s(t,20,300);null!==a&&e.onNewSvgTemplateInputs({...e.svgTemplateInputs,borderWidth:a})},children:"Change"})]})]})}):null]}),(0,n.jsx)("div",{})]})})};var Y=a(2979);class Z extends Y.ImmerReducer{setSvgText(e){if(this.draftState.svgImageText!==e){this.draftState.svgImageText=e;const t=f(e);this.draftState.svgImageAsDataUrl=t}}setGsImageLabel(e){this.draftState.gsImageLabel!==e&&(this.draftState.gsImageLabel=e)}setImageGrayscaleData(e){this.draftState.grayscaleData=e}setSvgToGrayscaleTemplate(e){this.draftState.svgToGrayscaleTemplate!==e&&(this.draftState.svgToGrayscaleTemplate=e)}setSvgImageAsDataUrl(e){this.draftState.svgImageAsDataUrl!==e&&(this.draftState.svgImageAsDataUrl=e)}setSvgTemplateInputs(e){console.log(e),this.draftState.svgTemplateInputs!==e&&(this.draftState.svgTemplateInputs=e)}}const J=(0,Y.createActionCreators)(Z),ee=(0,Y.createReducerFunction)(Z),te=()=>{const e=(e=>{const t={fontFamily:"arial",fontSize:170,borderWidth:20,imageTypesFilePath:"../../images/image_types.h",imageGroupNameRoot:"frank_hats_season2"};return{svgImageText:e.defaultSvgToGrayscaleInputs(t).newSvgText,svgImageAsDataUrl:"",grayscaleData:{dataAsUint8Array:new Uint8ClampedArray,dataAsNibbles:[],imageHeightInPixels:0,imageWidthInPixels:0,imageLabel:"UNLABELED IMAGE"},gsImageLabel:"NO LABEL SET YET",svgToGrayscaleTemplate:e,svgTemplateInputs:t}})(X[0]);console.log(e);const[t,a]=(0,i.useState)(0),[s,l]=(0,i.useReducer)(ee,e),r={state:s,svgTemplateIndex:t,dispatch:l,setSvgTemplateIndex:a,onSvgToGsInputsUpdate:e=>{l(J.setSvgText(e.newSvgText)),l(J.setGsImageLabel(e.svgImageLabel))},onNewGrayscaleData:e=>{l(J.setImageGrayscaleData(e))},onNewSvgImageAsDataUrl:e=>{l(J.setSvgImageAsDataUrl(e))},onNewSvgTemplateInputs:e=>{l(J.setSvgTemplateInputs(e))}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{},children:(0,n.jsx)(A,{componentState:r.state,onNewGrayscaleData:r.onNewGrayscaleData,onNewSvgImageAsDataUrl:r.onNewSvgImageAsDataUrl})}),(0,n.jsx)("div",{style:{marginBottom:20}}),(0,n.jsx)(K,{svgTemplateIndex:r.svgTemplateIndex,onNewSvgTemplateSelected:(e,t)=>{r.setSvgTemplateIndex(e),r.dispatch(J.setSvgToGrayscaleTemplate(t))},onGenerateNewSvg:e=>{r.onSvgToGsInputsUpdate(e)},onSvgTemplateFormUpdate:(e,t)=>{},svgTemplateInputs:r.state.svgTemplateInputs,onNewSvgTemplateInputs:r.onNewSvgTemplateInputs}),(0,n.jsx)("div",{style:{marginBottom:20}}),X[r.svgTemplateIndex].formProvider({templateInputs:r.state.svgTemplateInputs,svgGenerationInputsUpdateFn:r.onSvgToGsInputsUpdate})]})},ae={title:"Qroma Hat App"},ne="Qroma Hat App",se={type:"mdx",permalink:"/qroma-hat/app/",source:"@site/src/pages/app/index.md",title:"Qroma Hat App",description:"To connect to your Qroma Hat device, plug it into your computer's USB port",frontMatter:{title:"Qroma Hat App"},unlisted:!1},le={},ie=[];function re(e){const t={a:"a",div:"div",h1:"h1",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"qroma-hat-app",children:"Qroma Hat App"}),"\n",(0,n.jsxs)(t.p,{children:["To connect to your Qroma Hat device, plug it into your computer's USB port\nand click the Connect button. When prompted\nto connect to a serial port, select the entry with the most likely name\n(e.g. something-",(0,n.jsx)("b",{children:"usbserial"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/advanced-io/upload-file",children:"Use the Upload page"})," to put your file on the hat's board"]}),"\n",(0,n.jsx)(l.A,{fallback:(0,n.jsx)(t.div,{children:"SvgToGreyscaleArduinoFileTool is only available in the browser"}),children:()=>(0,n.jsx)(te,{})})]})}function oe(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(re,{...e})}):re(e)}}}]);