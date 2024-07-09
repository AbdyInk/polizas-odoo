import{r as d,_ as u,R as r,b as m,c as v,P as a,l as n}from"./index-BVH3YHn-.js";import{C as H,b as q,c as D,a as J}from"./index.es-BlJVXpB8.js";import{C as S,a as P}from"./CFormLabel-BiJKrktM.js";import{a as K}from"./CButton-DXDQaeGr.js";var j=d.forwardRef(function(e,i){var l=e.children,t=e.className,s=u(e,["children","className"]);return r.createElement("div",m({className:v("form-floating",t)},s,{ref:i}),l)});j.propTypes={children:a.node,className:a.string};j.displayName="CFormFloating";var k=d.forwardRef(function(e,i){var l=e.children,t=e.as,s=t===void 0?"div":t,o=e.className,c=u(e,["children","as","className"]);return r.createElement(s,m({className:v("form-text",o)},c,{ref:i}),l)});k.propTypes={as:a.elementType,children:a.node,className:a.string};k.displayName="CFormText";var T=function(e){var i=e.children,l=e.describedby,t=e.feedback,s=e.feedbackInvalid,o=e.feedbackValid,c=e.floatingClassName,f=e.floatingLabel,y=e.id,F=e.invalid,b=e.label,p=e.text,g=e.tooltipFeedback,h=e.valid,N=function(){return r.createElement(P,{describedby:l,feedback:t,feedbackInvalid:s,feedbackValid:o,floatingLabel:f,invalid:F,tooltipFeedback:g,valid:h})};return f?r.createElement(j,{className:c},i,r.createElement(S,{htmlFor:y},b||f),p&&r.createElement(k,{id:l},p),r.createElement(N,null)):r.createElement(r.Fragment,null,b&&r.createElement(S,{htmlFor:y},b),i,p&&r.createElement(k,{id:l},p),r.createElement(N,null))};T.propTypes=m({children:a.node,floatingClassName:a.string,floatingLabel:a.oneOfType([a.node,a.string]),label:a.oneOfType([a.node,a.string]),text:a.oneOfType([a.node,a.string])},P.propTypes);T.displayName="CFormControlWrapper";var I=d.forwardRef(function(e,i){var l,t=e.children,s=e.className,o=e.delay,c=o===void 0?!1:o,f=e.feedback,y=e.feedbackInvalid,F=e.feedbackValid,b=e.floatingClassName,p=e.floatingLabel,g=e.id,h=e.invalid,N=e.label,x=e.onChange,W=e.plainText,O=e.size,Z=e.text,A=e.tooltipFeedback,R=e.type,w=R===void 0?"text":R,z=e.valid,G=u(e,["children","className","delay","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","id","invalid","label","onChange","plainText","size","text","tooltipFeedback","type","valid"]),M=d.useState(),E=M[0],B=M[1];return d.useEffect(function(){var C=setTimeout(function(){return E&&x&&x(E)},typeof c=="number"?c:500);return function(){return clearTimeout(C)}},[E]),r.createElement(T,{describedby:G["aria-describedby"],feedback:f,feedbackInvalid:y,feedbackValid:F,floatingClassName:b,floatingLabel:p,id:g,invalid:h,label:N,text:Z,tooltipFeedback:A,valid:z},r.createElement("input",m({className:v(W?"form-control-plaintext":"form-control",(l={},l["form-control-".concat(O)]=O,l["form-control-color"]=w==="color",l["is-invalid"]=h,l["is-valid"]=z,l),s),id:g,type:w,onChange:function(C){return c?B(C):x&&x(C)}},G,{ref:i}),t))});I.propTypes=m({className:a.string,id:a.string,delay:a.oneOfType([a.bool,a.number]),plainText:a.bool,size:a.oneOf(["sm","lg"]),type:a.oneOfType([a.oneOf(["color","file","text"]),a.string])},T.propTypes);I.displayName="CFormInput";var L=d.forwardRef(function(e,i){var l,t=e.children,s=e.className,o=e.size,c=u(e,["children","className","size"]);return r.createElement("div",m({className:v("input-group",(l={},l["input-group-".concat(o)]=o,l),s)},c,{ref:i}),t)});L.propTypes={children:a.node,className:a.string,size:a.oneOf(["sm","lg"])};L.displayName="CInputGroup";var V=d.forwardRef(function(e,i){var l=e.children,t=e.as,s=t===void 0?"span":t,o=e.className,c=u(e,["children","as","className"]);return r.createElement(s,m({className:v("input-group-text",o)},c,{ref:i}),l)});V.propTypes={as:a.elementType,children:a.node,className:a.string};V.displayName="CInputGroupText";var Q=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z' class='ci-primary'/>"];const _=()=>n.jsx("div",{className:"bg-body-tertiary min-vh-100 d-flex flex-row align-items-center",children:n.jsx(H,{children:n.jsx(q,{className:"justify-content-center",children:n.jsxs(D,{md:6,children:[n.jsxs("span",{className:"clearfix",children:[n.jsx("h1",{className:"float-start display-3 me-4",children:"500"}),n.jsx("h4",{className:"pt-3",children:"Houston, we have a problem!"}),n.jsx("p",{className:"text-body-secondary float-start",children:"The page you are looking for is temporarily unavailable."})]}),n.jsxs(L,{className:"input-prepend",children:[n.jsx(V,{children:n.jsx(J,{icon:Q})}),n.jsx(I,{type:"text",placeholder:"What are you looking for?"}),n.jsx(K,{color:"info",children:"Search"})]})]})})})});export{_ as default};
