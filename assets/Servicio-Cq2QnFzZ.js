import{k as Q,j as U,r as i,h as E,i as N,l as e,C as F}from"./index-BVH3YHn-.js";import{b as B,c as l}from"./index.es-BlJVXpB8.js";import{C as n,a as P,b as x,c as h,d as u}from"./CCardTitle-DDsbpPwi.js";import{C as V}from"./CButtonGroup-Dsgf2J_E.js";import{C as L}from"./CFormCheck-Ddw8whYV.js";import{C as R,a as A,b as y,c as a,d as H,e as j,P as D,S as I}from"./PaginationGroup-BSk5yT7U.js";import{C as X}from"./DefaultLayout-CLTnpo9j.js";import"./CFormLabel-BiJKrktM.js";import"./CButton-DXDQaeGr.js";import"./Page404-BlR5mVh2.js";import"./logoVito-XwPXCkoB.js";const ce=()=>{const G=Q(),[M]=U(),[S,O]=i.useState(1);var t=M.get("n");let z=window.location.href.split("#")[1].split("?")[0];const[r,W]=i.useState({}),[m,$]=i.useState([]),[g,J]=i.useState([]),[T,q]=i.useState(!0);i.useEffect(()=>{E.get(N+"/odoo/gs/",{params:{numero:t}}).then(s=>(W(s.data),E.get(N+"/odoo/grsgs/",{params:{numero:t}}))).then(s=>(J(s.data),E.get(N+"/odoo/gesgs/",{params:{numero:t}}))).then(s=>{$(s.data),q(!1)}).catch(s=>{console.log(s),q(!1)})},[]);function _(s){G(s)}function k(s){O(s)}i.useState(),i.useState(0),i.useState(5);const C=[5,10,20,50],[c,w]=i.useState(1),[o,b]=i.useState(5);return e.jsxs(B,{children:[e.jsx(l,{xs:12,children:e.jsxs(n,{children:[e.jsxs(P,{as:"h5",children:["Servicio #",t]}),e.jsxs(B,{children:[e.jsx(l,{sm:6,children:e.jsx(n,{children:e.jsxs(x,{children:[e.jsx(h,{children:"Encargado"}),e.jsx(u,{children:r.x_studio_nombre})]})})}),e.jsx(l,{sm:6,children:e.jsx(n,{children:e.jsxs(x,{children:[e.jsx(h,{children:"Firma"}),e.jsx(u,{children:r.x_studio_firma?e.jsx("img",{style:{height:"80px",width:"auto"},src:`data:image/png;base64,${r.x_studio_firma}`}):""})]})})}),e.jsx(l,{sm:6,children:e.jsx(n,{children:e.jsxs(x,{children:[e.jsx(h,{children:"Información del Servicio"}),e.jsxs(u,{children:[e.jsx("b",{children:"Numero:"})," ",r.x_name," ",e.jsx("br",{}),e.jsx("b",{children:"Cliente:"})," ",r.x_studio_cliente?r.x_studio_cliente[1]:"",r.x_studio_poliza?e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{children:"Poliza:"})," ",e.jsx("span",{onClick:()=>_("/polizas/poliza?n="+r.x_studio_poliza[1]),className:"text-primary",style:{textDecoration:"underline",cursor:"pointer",fontWeight:"bold"},children:r.x_studio_poliza[1]})]}):""]})]})})}),e.jsx(l,{sm:6,children:e.jsx(n,{children:e.jsxs(x,{children:[e.jsx(h,{children:"Fechas"}),e.jsxs(u,{children:[e.jsx("b",{children:"Fecha del Servicio:"})," ",r.x_studio_fecha_servicio?r.x_studio_fecha_servicio.split("-").reverse().join("/"):""," ",e.jsx("br",{}),e.jsx("b",{children:"Fecha del siguiente Servicio:"})," ",r.x_studio_siguiente_servicio?r.x_studio_siguiente_servicio.split("-").reverse().join("/"):""]})]})})}),e.jsx(l,{sm:12,children:e.jsx("div",{children:"‎ "})})]})]})}),e.jsxs(V,{role:"group","aria-label":"Basic checkbox toggle button group",children:[e.jsx(L,{type:"radio",button:{color:"primary",variant:"outline"},name:"btnradio",value:1,checked:S===1,onChange:s=>k(1),id:"btnradio1",label:"Reportes de Mantenimiento"}),e.jsx(L,{type:"radio",button:{color:"primary",variant:"outline"},name:"btnradio",value:2,checked:S===2,onChange:s=>k(2),id:"btnradio2",label:"Equipos"})]}),S===1?e.jsx(l,{xs:12,children:g.length!==0?e.jsxs(n,{className:"mb-4",children:[e.jsxs(R,{hover:!0,children:[e.jsx(A,{color:"light",children:e.jsxs(y,{children:[e.jsx(a,{scope:"col",children:"Reporte"}),e.jsx(a,{scope:"col",children:"Encargado"}),e.jsx(a,{scope:"col",children:"Tecnico Asignado"}),e.jsx(a,{scope:"col",children:"Fecha de mantenimiento"}),e.jsx(a,{scope:"col",children:"Estado"})]})}),e.jsx(H,{children:t&&Array.isArray(g)?g.sort((s,p)=>p.id-s.id).slice((c-1)*o,o*c).map(({x_name:s,x_studio_encargado:p,x_studio_tecnico:f,x_studio_fecha_mantenimiento:v,x_estado:d},K)=>e.jsxs(y,{onClick:()=>_(z+"/reporte?n="+t+"&rid="+s),children:[e.jsx(a,{className:"text-primary",style:{textDecoration:"underline",cursor:"pointer"},scope:"row",children:s}),e.jsx(j,{children:p}),e.jsx(j,{children:f?f[1]:""}),e.jsx(j,{children:v?v.split("-").reverse().join("/"):""}),e.jsx(j,{children:e.jsx(X,{color:d==="Pendiente"?"warning":d==="Inconcluso"?"danger":d==="Finalizado"?"success":"info",children:d})})]},K)):null})]}),e.jsx(D,{className:"align-self-center",prev:!0,last:!0,next:!0,first:!0,size:"sm-auto",total:g.length,limit:o,maxButtons:3,activePage:c,onChangePage:w,onChangeLimit:b,limitOptions:C}),e.jsxs("span",{className:"align-self-center",style:{marginLeft:20},children:["Elementos por pagina：",e.jsx(I,{value:o,onChange:b,cleanable:!1,searchable:!1,data:C.map(s=>({value:s,label:s})),placement:"autoHorizontalEnd"})]})]}):T===!0?e.jsx(F,{color:"primary"}):e.jsxs(n,{className:"text-center",children:[e.jsx(P,{children:"Reportes"}),e.jsxs(x,{children:[e.jsx(h,{children:"No hay reportes"}),e.jsx(u,{children:"Este equipo aún no posee reportes."})]})]})}):e.jsx(l,{xs:12,children:m.length!==0?e.jsxs(n,{className:"mb-4",children:[e.jsxs(R,{hover:!0,children:[e.jsx(A,{color:"light",children:e.jsxs(y,{children:[e.jsx(a,{scope:"col",children:"Equipo"}),e.jsx(a,{scope:"col",children:"Modelo"}),e.jsx(a,{scope:"col",children:"Serie"})]})}),e.jsx(H,{children:t&&Array.isArray(m)?m.slice((c-1)*o,o*c).map(({x_name:s,x_studio_marca:p,x_studio_modelo:f,x_studio_serie:v},d)=>e.jsxs(y,{onClick:()=>_(z+"/equipo?n="+t+"&idenf="+s),children:[e.jsx(a,{className:"text-primary",style:{textDecoration:"underline",cursor:"pointer"},scope:"row",children:s}),e.jsx(j,{children:p[1]+" "+f[1]}),e.jsx(j,{children:v})]},d)):null})]}),e.jsx(D,{className:"align-self-center",prev:!0,last:!0,next:!0,first:!0,size:"sm-auto",total:m.length,limit:o,maxButtons:3,activePage:c,onChangePage:w,onChangeLimit:b,limitOptions:C}),e.jsxs("span",{className:"align-self-center",style:{marginLeft:20},children:["Elementos por pagina：",e.jsx(I,{value:o,onChange:b,cleanable:!1,searchable:!1,data:C.map(s=>({value:s,label:s})),placement:"autoHorizontalEnd"})]})]}):T===!0?e.jsx(F,{color:"primary"}):e.jsxs(n,{className:"text-center",children:[e.jsx(P,{children:"Equipos"}),e.jsxs(x,{children:[e.jsx(h,{children:"No hay equipos"}),e.jsx(u,{children:"Esta poliza aún no posee equipos."})]})]})})]})};export{ce as default};
