"use strict";(self.webpackChunkwww_qroma_project=self.webpackChunkwww_qroma_project||[]).push([[1432],{9750:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>ce,contentTitle:()=>ge,default:()=>ue,frontMatter:()=>re,metadata:()=>de,toc:()=>pe});var n=a(4848),s=a(8453),l=a(8478),i=a(6540),o=a(7733),r=a(3581),g=a(4016),d=a(6786);const c=960,p=540,m=e=>{let{componentState:t}=e;const a=t.grayscaleData,[s,l]=(0,i.useState)("");return console.log("RENDERING GrayscaleConversionOutputImage"),(0,i.useEffect)((()=>{console.log("IN USE EFFECT");const e=document.createElement("canvas");console.log(e),e.width=a.imageWidthInPixels,e.height=a.imageHeightInPixels;const t=e.getContext("2d");if(null===t)return;console.log("CANVAS CTX: "+t);var n=t.createImageData(a.imageWidthInPixels,a.imageHeightInPixels);console.log("IMAGE DATA: "+n);for(let l=0;l<a.dataAsNibbles.length;l++){const e=16*a.dataAsNibbles[l],t=4*l;n.data[t]=e,n.data[t+1]=e,n.data[t+2]=e,n.data[t+3]=255}t.putImageData(n,0,0);const s=e.toDataURL();console.log("CANVAS"),console.log(e),l(s),console.log(`SETTING CANVAS HEIGHT: ${a.imageHeightInPixels}`),console.log(`SETTING CANVAS WIDTH: ${a.imageWidthInPixels}`)}),[t.grayscaleData]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{style:{width:480,height:270},children:(0,n.jsx)("img",{src:s})})})};var u=a(5674);let h=function(e){return e.lightness="lightness",e.average="average",e.luminosity="luminosity",e}({});const x=e=>e<16?[0,0,0,0]:e<32?[0,0,0,1]:e<48?[0,0,1,0]:e<64?[0,0,1,1]:e<80?[0,1,0,0]:e<96?[0,1,0,1]:e<112?[0,1,1,0]:e<128?[0,1,1,1]:e<144?[1,0,0,0]:e<160?[1,0,0,1]:e<176?[1,0,1,0]:e<192?[1,0,1,1]:e<208?[1,1,0,0]:e<224?[1,1,0,1]:e<240?[1,1,1,0]:[1,1,1,1],v=e=>{const{p1r:t,p1g:a,p1b:n,p2r:s,p2g:l,p2b:i}=e,o=(s+l+i)/3,r=x((t+a+n)/3),g=x(o);return 16*u.Ay.nibble.write(r)+u.Ay.nibble.write(g)},I=e=>{const{p1r:t,p1g:a,p1b:n,p2r:s,p2g:l,p2b:i}=e,o=(s+l+i)/3,r=x((t+a+n)/3),g=x(o);return[u.Ay.nibble.write(r),u.Ay.nibble.write(g)]},S=e=>{const t=e.imageData.width;if(t%2!=0)throw new Error("Image width must be even");if(e.conversionAlgorithm!==h.average)throw new Error("Unsupported GS conversion algorithm: "+e.conversionAlgorithm);const a=e.imageData.height,n=[],s=[];for(let l=0;l<a;l++)for(let a=0;a<t;a+=2){const s=4*(l*t+a),i=e.imageData.data,o=v({p1r:i[s],p1g:i[s+1],p1b:i[s+2],p2r:i[s+4],p2g:i[s+5],p2b:i[s+6]});n.push(o)}for(let l=0;l<a;l++)for(let a=0;a<t;a+=2){const n=4*(l*t+a),i=e.imageData.data,[o,r]=I({p1r:i[n],p1g:i[n+1],p1b:i[n+2],p2r:i[n+4],p2g:i[n+5],p2b:i[n+6]});s.push(o),s.push(r)}return{dataAsUint8Array:new Uint8ClampedArray(n),dataAsNibbles:s,imageHeightInPixels:a,imageWidthInPixels:t,imageLabel:e.imageLabel}},f=e=>{if((e=(e=e.trim()).slice(e.indexOf("<svg"))).startsWith("<svg")&&e.endsWith("svg>")&&(e.includes("http://www.w3.org/2000/svg")||(e=e.replace(/<svg/g,"<svg xmlns='http://www.w3.org/2000/svg'")),(e=(e=(e=(e=(e=(e=(e=e.replace(/<!--.{1,}-->/g,"")).replace(/version=[\"\'](.{0,}?)[\"\'](?=[\s>])/g,"")).replace(/"'(.{1,})'"/g,"'$1'")).replace(/"/g,"'")).replace(/>\s{1,}</g,"><")).replace(/\s{2,}/g," ")).trim()).startsWith("<svg")&&e.endsWith("svg>")))return e=`data:image/svg+xml,${e=(e=e.replace(/&/g,"&amp;")).replace(/[%#<>?\[\\\]^`{|}]/g,encodeURIComponent)}`},b=e=>{const t=(0,i.useRef)(null);return(0,n.jsx)("div",{style:{width:480,height:270},children:(0,n.jsx)("img",{ref:t,src:e.svgAsDataUrl,onLoad:()=>{try{if(null===t||null===t.current)return;const a=document.createElement("canvas");a.width=t.current.naturalWidth,a.height=t.current.naturalHeight;const n=a.getContext("2d");n.drawImage(t.current,0,0);const s=n.getImageData(0,0,a.width,a.height),l=S({imageData:s,conversionAlgorithm:h.average,imageLabel:e.gsImageLabel});console.log(l),e.onGsConvertedData(l)}catch(a){console.log("CANVAS ERROR: "+a)}},height:0,width:0})})},w=256,A=16777216,j=e=>64+e,y=e=>{if(e<=63)return[j(e)];if(e<=16383)return(e=>{const t=e%w;return[128+Math.floor(e/w),t]})(e);if(e<=1073741823)return(e=>{const t=e%w,a=e%65536,n=Math.floor(a/w),s=e%A,l=Math.floor(s/65536);return[192+Math.floor(e/A),l,n,t]})(e);throw new Error("Pixel count is too high to create Op Run: "+e)},T=e=>{const t=e.imageWidthInPixels,a=e.imageHeightInPixels,n=(e=>{const t=[],a=[],n=e.gsData,s=e.gsData.dataAsNibbles;let l=s[0],i=0;for(let o=0;o<s.length;o++)if(s[o]===l)i++;else{const e=l,n=y(i);t.push(e),t.push(...n),a.push({gsValue:l,runLengthInPixels:i,opPlacePixelByte:e,opRunLength:n,runBytes:new Uint8ClampedArray([e,...n])}),i=1,l=s[o]}if(i>0){const e=l,n=y(i);t.push(e),t.push(...n),a.push({gsValue:l,runLengthInPixels:i,opPlacePixelByte:e,opRunLength:n,runBytes:new Uint8ClampedArray([e,...n])})}return{imageHeightInPixels:n.imageHeightInPixels,imageWidthInPixels:n.imageWidthInPixels,imageLabel:n.imageLabel,dataAsUint8Array:new Uint8ClampedArray(t),pixelRuns:a}})({gsData:e}),s=n.dataAsUint8Array,l=n.dataAsUint8Array.length,i=new Uint8Array(12+l+8);i[0]="d".charCodeAt(0),i[1]="g".charCodeAt(0),i[2]="s".charCodeAt(0),i[3]="r".charCodeAt(0),i[4]=t>>24&255,i[5]=t>>16&255,i[6]=t>>8&255,i[7]=t>>0&255,i[8]=a>>24&255,i[9]=a>>16&255,i[10]=a>>8&255,i[11]=a>>0&255;for(let o=0;o<l;o++)i[12+o]=s[o];for(let o=0;o<7;o++){i[12+l+o]=0}return i[12+l+7]=1,i},D=e=>{const[t,a]=(0,i.useState)(!1);var[s,l]=(0,i.useState)(""),[o,r]=(0,i.useState)("");const g=T(e.componentState.grayscaleData),d="blob";(0,i.useEffect)((()=>{const t=e.componentState.svgImageText,a=new Blob([t],{type:"text/plain"});let n=new FileReader;n.readAsDataURL(a),n.onload=()=>{const e=n.result;l(e)};const s=T(e.componentState.grayscaleData),i=new Blob([s],{type:"application/octet-stream"});let o=new FileReader;o.readAsDataURL(i),o.onload=()=>{const e=o.result;r(e)}}),[e.componentState.grayscaleData,e.componentState.svgImageText]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[g.length," bytes"]}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{children:"Upload DGSR to Hat"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("button",{disabled:t,onClick:()=>{const e=d+".svg";a(!0);const t=document.createElement("a");t.href=s,t.download=e,document.body.appendChild(t),t.click(),setTimeout((()=>{a(!1),document.body.removeChild(t)}),2e3)},children:t?"Loading...":"Download SVG to PC"}),(0,n.jsx)("button",{disabled:t,onClick:()=>{const e=d+".dgsr";a(!0);const t=document.createElement("a");t.href=o,t.download=e,document.body.appendChild(t),t.click(),setTimeout((()=>{a(!1),document.body.removeChild(t)}),2e3)},children:t?"Loading...":"Download DGSR to PC"})]})]})};function U(e){const{children:t,value:a,index:s,...l}=e;return(0,n.jsx)("div",{role:"tabpanel",hidden:a!==s,id:`simple-tabpanel-${s}`,"aria-labelledby":`simple-tab-${s}`,...l,children:a===s&&(0,n.jsx)(o.A,{sx:{p:3},children:t})})}function G(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}const C=e=>{let{svgInputText:t}=e;return console.log("svgInputText"),console.log(t),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{children:(0,n.jsx)(r.A,{id:"outlined-multiline-static",label:"SVG Input",multiline:!0,value:t,fullWidth:!0,inputProps:{style:{fontFamily:"monospace",height:"250px",overflow:"scroll"}}})})})},F=e=>{const[t,a]=i.useState(1),s=async()=>{var t=document.createElement("img");const a=f(e.componentState.svgImageText);t.onload=async()=>{let a=new FileReader;const n=new Blob([e.componentState.svgImageText],{type:"image/svg+xml"});a.readAsDataURL(n),a.onload=function(){const n=a.result;(t=>{try{const a=document.createElement("canvas").getContext("2d");a.drawImage(t,0,0);const n=a?.getImageData(0,0,t.width,t.height),s=S({imageData:n,conversionAlgorithm:h.average,imageLabel:e.componentState.gsImageLabel});e.onNewGrayscaleData(s)}catch(a){console.log("CANVAS ERROR: "+a)}})(t),e.onNewSvgImageAsDataUrl(n)}},t.src=a};return(0,i.useEffect)((()=>{(async()=>{await s()})()}),[e.componentState.svgImageText]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.A,{sx:{borderBottom:1,borderColor:"divider",height:400},children:[(0,n.jsx)("canvas",{id:"canvas-ImageOutputView",height:0,width:0}),(0,n.jsx)("div",{style:{width:0,height:0},children:(0,n.jsx)(b,{svgAsDataUrl:e.componentState.svgImageAsDataUrl,gsImageLabel:e.componentState.gsImageLabel,onGsConvertedData:t=>{e.onNewGrayscaleData(t)}})}),(0,n.jsx)(o.A,{sx:{borderBottom:1,borderColor:"divider"},children:(0,n.jsxs)(g.A,{value:t,onChange:(e,t)=>{a(t)},"aria-label":"basic tabs example",variant:"scrollable",children:[(0,n.jsx)(d.A,{label:"SVG Text",...G(0)}),(0,n.jsx)(d.A,{label:"SVG Image",...G(1)}),(0,n.jsx)(d.A,{label:"Grayscale",...G(2)}),(0,n.jsx)(d.A,{label:"Manage DGSR",...G(3)})]})}),(0,n.jsx)(U,{value:t,index:0,children:(0,n.jsx)(C,{svgInputText:e.componentState.svgImageText})}),(0,n.jsx)(U,{value:t,index:1,children:(0,n.jsx)("div",{style:{width:480,height:270},children:(0,n.jsx)("img",{src:e.componentState.svgImageAsDataUrl})})}),(0,n.jsx)(U,{value:t,index:2,children:(0,n.jsx)(m,{componentState:e.componentState})}),(0,n.jsx)(U,{value:t,index:3,children:(0,n.jsx)(D,{componentState:e.componentState})})]})})};var N=a(3870),E=a(26),L=a(8440),k=a(2909),R=a(3232),P=a(7512),W=a(8999),H=a(5848);const B="LINE1",z=e=>{let{line1:t,svgTemplateInputs:a}=e;return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",baseProfile:"full",width:c,height:p,children:[(0,n.jsx)("rect",{width:"100%",height:"100%",fill:"white",stroke:"black",strokeWidth:a.borderWidth,strokeOpacity:"1.0"}),(0,n.jsx)("text",{x:480,y:270,fontSize:a.fontSize,fontFamily:a.fontFamily,textAnchor:"middle",dominantBaseline:"middle",fill:"black",children:t})]})},O=(e,t)=>({newSvgText:(0,H.F0)((0,n.jsx)(z,{line1:e,svgTemplateInputs:t})),svgImageLabel:e}),V=e=>{const[t,a]=(0,i.useState)(B),[s,l]=(0,i.useState)("Arial, Helvetica, sans-serif"),[o,g]=(0,i.useState)(160),[d,c]=(0,i.useState)("");return(0,i.useEffect)((()=>{e.svgGenerationInputsUpdateFn(O(t,e.templateInputs))}),[t,e.templateInputs]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(W.A,{spacing:2,children:(0,n.jsx)(r.A,{id:"outlined-required",label:"Line 1",value:t,onChange:e=>{const t=e.target.value;a(t)}},"single-line-text-line1-input")})})},M=e=>{let{line1:t,line2:a,svgTemplateInputs:s}=e;return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",baseProfile:"full",width:c,height:p,children:[(0,n.jsx)("rect",{width:"100%",height:"100%",fill:"white",stroke:"black",strokeWidth:s.borderWidth,strokeOpacity:"1.0"}),(0,n.jsx)("text",{x:480,y:178.20000000000002,fontSize:s.fontSize,fontFamily:s.fontFamily,textAnchor:"middle",dominantBaseline:"middle",fill:"black",children:t}),(0,n.jsx)("text",{x:480,y:405,fontSize:s.fontSize,fontFamily:s.fontFamily,textAnchor:"middle",dominantBaseline:"middle",fill:"black",children:a})]})},q=(e,t,a)=>({newSvgText:(0,H.F0)((0,n.jsx)(M,{line1:e,line2:t,svgTemplateInputs:a})),svgImageLabel:e+" "+t}),Q=e=>{console.log("IN FORM PROVIDER - 2");const[t,a]=(0,i.useState)("QROMA"),[s,l]=(0,i.useState)("HAT");return(0,i.useEffect)((()=>{e.svgGenerationInputsUpdateFn(q(t,s,e.templateInputs))}),[t,s,e.templateInputs]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(W.A,{spacing:2,children:[(0,n.jsx)(r.A,{id:"outlined-required",label:"Line 1",value:t,onChange:e=>{const t=e.target.value;a(t)}}),(0,n.jsx)(r.A,{id:"outlined-required",label:"Line 2",value:s,onChange:e=>{const t=e.target.value;l(t)}})]})})},$=e=>{let{line1:t,line2:a,line3:s,svgTemplateInputs:l}=e;return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",baseProfile:"full",width:c,height:p,children:[(0,n.jsx)("rect",{width:"100%",height:"100%",fill:"white",stroke:"black",strokeWidth:l.borderWidth,strokeOpacity:"1.0"}),(0,n.jsx)("text",{x:480,y:108,fontSize:l.fontSize,fontFamily:l.fontFamily,textAnchor:"middle",dominantBaseline:"middle",fill:"black",children:t}),(0,n.jsx)("text",{x:480,y:270,fontSize:l.fontSize,fontFamily:l.fontFamily,textAnchor:"middle",dominantBaseline:"middle",fill:"black",children:a}),(0,n.jsx)("text",{x:480,y:432,fontSize:l.fontSize,fontFamily:l.fontFamily,textAnchor:"middle",dominantBaseline:"middle",fill:"black",children:s})]})},_=(e,t,a,s)=>({newSvgText:(0,H.F0)((0,n.jsx)($,{line1:e,line2:t,line3:a,svgTemplateInputs:s})),svgImageLabel:e+" "+t+" "+a}),X=e=>{console.log("IN FORM PROVIDER - 2");const[t,a]=(0,i.useState)("FIRST"),[s,l]=(0,i.useState)("GENERATION"),[o,g]=(0,i.useState)("PERFECT"),[d,c]=(0,i.useState)("arial"),[p,m]=(0,i.useState)(140);return(0,i.useEffect)((()=>{e.svgGenerationInputsUpdateFn(_(t,s,o,{...e.templateInputs,fontSize:p}))}),[t,s,o,e.templateInputs]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(W.A,{spacing:2,children:[(0,n.jsx)(r.A,{id:"outlined-required",label:"Line 1",value:t,onChange:e=>{const t=e.target.value;a(t)}}),(0,n.jsx)(r.A,{id:"outlined-required",label:"Line 2",value:s,onChange:e=>{const t=e.target.value;l(t)}}),(0,n.jsx)(r.A,{id:"outlined-required",label:"Line 3",value:o,onChange:e=>{const t=e.target.value;g(t)}})]})})},K=e=>{const[t,a]=(0,i.useState)(null),[s,l]=(0,i.useState)(null);return(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{type:"file",onChange:e=>{const t=e.target.files?.[0];l(t)}}),(0,n.jsx)("button",{onClick:()=>{if(!s)return;const t=new FileReader;t.onloadend=()=>{const n=t.result;a(n),e.onNewImageDataUrl(n)},t.readAsDataURL(s)},children:"Upload"}),t&&(0,n.jsx)("img",{src:t,alt:"uploaded"})]})},Y="Put Image Name Here",Z=e=>{let{embeddedImageUrl:t}=e;return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",width:c,height:p,children:[(0,n.jsx)("rect",{width:"100%",height:"100%",fill:"white",stroke:"black",strokeWidth:"20",strokeOpacity:"1.0"}),(0,n.jsx)("image",{x:"190",y:"65",xlinkHref:t})]})},J=(e,t)=>({newSvgText:(0,H.F0)((0,n.jsx)(Z,{embeddedImageUrl:e})),svgImageLabel:t}),ee=e=>{let{svgGenerationInputsUpdateFn:t}=e;const[a,s]=(0,i.useState)(Y),[l,o]=(0,i.useState)("");return(0,i.useEffect)((()=>{t(J(l,a))}),[l,a]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(W.A,{spacing:2,children:[(0,n.jsx)(K,{onNewImageDataUrl:e=>{o(e)}}),(0,n.jsx)(r.A,{id:"outlined-required",label:"Image Name",value:a,onChange:e=>{const n=e.target.value;s(n),t(J(l,a))}},"single-line-text-line1-input")]})})},te=[{templateTitle:"Double Line",defaultSvgToGrayscaleInputs:e=>q("","",e),formProvider:e=>(0,n.jsx)(Q,{svgGenerationInputsUpdateFn:e.svgGenerationInputsUpdateFn,templateInputs:e.templateInputs})},{templateTitle:"Single Line",defaultSvgToGrayscaleInputs:e=>O(B,e),formProvider:e=>(0,n.jsx)(V,{svgGenerationInputsUpdateFn:e.svgGenerationInputsUpdateFn,templateInputs:e.templateInputs})},{templateTitle:"Triple Line",defaultSvgToGrayscaleInputs:e=>_("","","",e),formProvider:e=>(0,n.jsx)(X,{svgGenerationInputsUpdateFn:e.svgGenerationInputsUpdateFn,templateInputs:e.templateInputs})},{templateTitle:"Embedded Image",defaultSvgToGrayscaleInputs:()=>J("",Y),formProvider:e=>(0,n.jsx)(ee,{svgGenerationInputsUpdateFn:e.svgGenerationInputsUpdateFn})}],ae=e=>{const[t,a]=(0,i.useState)(!1),s=(e,t,a)=>{if(null===e)return null;const n=parseInt(e);return n>=t&&n<=a?n:null};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.A,{sx:{borderColor:"divider"},children:[(0,n.jsxs)(N.Ay,{container:!0,spacing:2,children:[(0,n.jsx)(N.Ay,{item:!0,xs:8,children:(0,n.jsxs)(E.A,{fullWidth:!0,children:[(0,n.jsx)(L.A,{id:"svg-template-select-label",children:"SVG Template"}),(0,n.jsx)(k.A,{labelId:"svg-template-select-label",id:"svg-template-select",value:e.svgTemplateIndex,label:"SVG Template",onChange:t=>{const a=t.target.value;console.log("SVG TEMPLATE INDEX: "+a);const n=te[a];e.onNewSvgTemplateSelected(a,n)},children:te.map(((e,t)=>(0,n.jsx)(R.A,{value:t,children:e.templateTitle},e.templateTitle)))})]})}),(0,n.jsx)(N.Ay,{item:!0,xs:4,children:(0,n.jsx)(P.A,{onClick:()=>a(!t),children:t?"Hide Settings":"Settings"})}),t?(0,n.jsx)(N.Ay,{item:!0,xs:12,children:(0,n.jsxs)(W.A,{spacing:2,children:[(0,n.jsxs)("div",{children:["Font Size: ",e.svgTemplateInputs.fontSize,(0,n.jsx)("button",{onClick:()=>{const t=window.prompt("Choose new font size (20-300)",e.svgTemplateInputs.fontSize.toString());console.log("NEW FONT SIZE: "+t);const a=s(t,20,300);null!==a&&e.onNewSvgTemplateInputs({...e.svgTemplateInputs,fontSize:a})},children:"Change"})]}),(0,n.jsxs)("div",{children:["Border Thickness: ",e.svgTemplateInputs.borderWidth,(0,n.jsx)("button",{onClick:()=>{const t=window.prompt("Choose new border thickness (20-300)",e.svgTemplateInputs.borderWidth.toString());console.log("NEW BORDER THICKNESS: "+t);const a=s(t,20,300);null!==a&&e.onNewSvgTemplateInputs({...e.svgTemplateInputs,borderWidth:a})},children:"Change"})]})]})}):null]}),(0,n.jsx)("div",{})]})})};var ne=a(2979);class se extends ne.ImmerReducer{setSvgText(e){if(this.draftState.svgImageText!==e){this.draftState.svgImageText=e;const t=f(e);this.draftState.svgImageAsDataUrl=t}}setGsImageLabel(e){this.draftState.gsImageLabel!==e&&(this.draftState.gsImageLabel=e)}setImageGrayscaleData(e){this.draftState.grayscaleData=e}setSvgToGrayscaleTemplate(e){this.draftState.svgToGrayscaleTemplate!==e&&(this.draftState.svgToGrayscaleTemplate=e)}setSvgImageAsDataUrl(e){this.draftState.svgImageAsDataUrl!==e&&(this.draftState.svgImageAsDataUrl=e)}setSvgTemplateInputs(e){console.log(e),this.draftState.svgTemplateInputs!==e&&(this.draftState.svgTemplateInputs=e)}}const le=(0,ne.createActionCreators)(se),ie=(0,ne.createReducerFunction)(se),oe=()=>{const e=(e=>{const t={fontFamily:"arial",fontSize:170,borderWidth:20,imageTypesFilePath:"../../images/image_types.h",imageGroupNameRoot:"frank_hats_season2"};return{svgImageText:e.defaultSvgToGrayscaleInputs(t).newSvgText,svgImageAsDataUrl:"",grayscaleData:{dataAsUint8Array:new Uint8ClampedArray,dataAsNibbles:[],imageHeightInPixels:0,imageWidthInPixels:0,imageLabel:"UNLABELED IMAGE"},gsImageLabel:"NO LABEL SET YET",svgToGrayscaleTemplate:e,svgTemplateInputs:t}})(te[0]);console.log(e);const[t,a]=(0,i.useState)(0),[s,l]=(0,i.useReducer)(ie,e),o={state:s,svgTemplateIndex:t,dispatch:l,setSvgTemplateIndex:a,onSvgToGsInputsUpdate:e=>{l(le.setSvgText(e.newSvgText)),l(le.setGsImageLabel(e.svgImageLabel))},onNewGrayscaleData:e=>{l(le.setImageGrayscaleData(e))},onNewSvgImageAsDataUrl:e=>{l(le.setSvgImageAsDataUrl(e))},onNewSvgTemplateInputs:e=>{l(le.setSvgTemplateInputs(e))}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{},children:(0,n.jsx)(F,{componentState:o.state,onNewGrayscaleData:o.onNewGrayscaleData,onNewSvgImageAsDataUrl:o.onNewSvgImageAsDataUrl})}),(0,n.jsx)("div",{style:{marginBottom:20}}),(0,n.jsx)(ae,{svgTemplateIndex:o.svgTemplateIndex,onNewSvgTemplateSelected:(e,t)=>{o.setSvgTemplateIndex(e),o.dispatch(le.setSvgToGrayscaleTemplate(t))},onGenerateNewSvg:e=>{o.onSvgToGsInputsUpdate(e)},onSvgTemplateFormUpdate:(e,t)=>{},svgTemplateInputs:o.state.svgTemplateInputs,onNewSvgTemplateInputs:o.onNewSvgTemplateInputs}),(0,n.jsx)("div",{style:{marginBottom:20}}),te[o.svgTemplateIndex].formProvider({templateInputs:o.state.svgTemplateInputs,svgGenerationInputsUpdateFn:o.onSvgToGsInputsUpdate})]})},re={title:"Qroma Hat App"},ge="Qroma Hat App",de={type:"mdx",permalink:"/qroma-hat/app/",source:"@site/src/pages/app/index.md",title:"Qroma Hat App",description:"To connect to your Qroma Hat device, plug it into your computer's USB port",frontMatter:{title:"Qroma Hat App"},unlisted:!1},ce={},pe=[];function me(e){const t={a:"a",div:"div",h1:"h1",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"qroma-hat-app",children:"Qroma Hat App"}),"\n",(0,n.jsxs)(t.p,{children:["To connect to your Qroma Hat device, plug it into your computer's USB port\nand click the Connect button. When prompted\nto connect to a serial port, select the entry with the most likely name\n(e.g. something-",(0,n.jsx)("b",{children:"usbserial"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/advanced-io/upload-file",children:"Use the Upload page"})," to put your file on the hat's board"]}),"\n",(0,n.jsx)(l.A,{fallback:(0,n.jsx)(t.div,{children:"SvgToGreyscaleArduinoFileTool is only available in the browser"}),children:()=>(0,n.jsx)(oe,{})})]})}function ue(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(me,{...e})}):me(e)}}}]);