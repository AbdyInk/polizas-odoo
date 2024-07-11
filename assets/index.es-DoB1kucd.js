import{r as d,_ as v,e as m,a as M,c as I,P as s}from"./index-HSOVG61R.js";var Q=["xxl","xl","lg","md","sm","xs"],U=d.forwardRef(function(e,c){var t=e.children,r=e.className,n=v(e,["children","className"]),o=[];return Q.forEach(function(i){var a=n[i];delete n[i];var l=i==="xs"?"":"-".concat(i);(typeof a=="number"||typeof a=="string")&&o.push("col".concat(l,"-").concat(a)),typeof a=="boolean"&&o.push("col".concat(l)),a&&typeof a=="object"&&((typeof a.span=="number"||typeof a.span=="string")&&o.push("col".concat(l,"-").concat(a.span)),typeof a.span=="boolean"&&o.push("col".concat(l)),(typeof a.order=="number"||typeof a.order=="string")&&o.push("order".concat(l,"-").concat(a.order)),typeof a.offset=="number"&&o.push("offset".concat(l,"-").concat(a.offset)))}),m.createElement("div",M({className:I(o.length>0?o:"col",r)},n,{ref:c}),t)}),D=s.oneOfType([s.bool,s.number,s.string,s.oneOf(["auto"])]),g=s.oneOfType([D,s.shape({span:D,offset:s.oneOfType([s.number,s.string]),order:s.oneOfType([s.oneOf(["first","last"]),s.number,s.string])})]);U.propTypes={children:s.node,className:s.string,xs:g,sm:g,md:g,lg:g,xl:g,xxl:g};U.displayName="CCol";var q=["xxl","xl","lg","md","sm","fluid"],V=d.forwardRef(function(e,c){var t=e.children,r=e.className,n=v(e,["children","className"]),o=[];return q.forEach(function(i){var a=n[i];delete n[i],a&&o.push("container-".concat(i))}),m.createElement("div",M({className:I(o.length>0?o:"container",r)},n,{ref:c}),t)});V.propTypes={children:s.node,className:s.string,sm:s.bool,md:s.bool,lg:s.bool,xl:s.bool,xxl:s.bool,fluid:s.bool};V.displayName="CContainer";var Y=["xxl","xl","lg","md","sm","xs"],L=d.forwardRef(function(e,c){var t=e.children,r=e.className,n=v(e,["children","className"]),o=[];return Y.forEach(function(i){var a=n[i];delete n[i];var l=i==="xs"?"":"-".concat(i);typeof a=="object"&&(a.cols&&o.push("row-cols".concat(l,"-").concat(a.cols)),typeof a.gutter=="number"&&o.push("g".concat(l,"-").concat(a.gutter)),typeof a.gutterX=="number"&&o.push("gx".concat(l,"-").concat(a.gutterX)),typeof a.gutterY=="number"&&o.push("gy".concat(l,"-").concat(a.gutterY)))}),m.createElement("div",{className:I("row",o,r),ref:c},t)}),S=s.shape({cols:s.oneOfType([s.oneOf(["auto"]),s.number,s.string]),gutter:s.oneOfType([s.string,s.number]),gutterX:s.oneOfType([s.string,s.number]),gutterY:s.oneOfType([s.string,s.number])});L.propTypes={children:s.node,className:s.string,xs:S,sm:S,md:S,lg:S,xl:S,xxl:S};L.displayName="CRow";var x={ALLUSERSPROFILE:"C:\\ProgramData",APPDATA:"C:\\Users\\VITO\\AppData\\Roaming",CHROME_CRASHPAD_PIPE_NAME:"\\\\.\\pipe\\crashpad_5804_HQFXEYBTTHNLMJFP",COLOR:"1",COLORTERM:"truecolor",CommonProgramFiles:"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",CommonProgramW6432:"C:\\Program Files\\Common Files",COMPUTERNAME:"DESKTOP-JEUMPCA",ComSpec:"C:\\WINDOWS\\system32\\cmd.exe",DriverData:"C:\\Windows\\System32\\Drivers\\DriverData",EDITOR:"C:\\WINDOWS\\notepad.exe",FPS_BROWSER_APP_PROFILE_STRING:"Internet Explorer",FPS_BROWSER_USER_PROFILE_STRING:"Default",GIT_ASKPASS:"c:\\Users\\VITO\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",HOME:"C:\\Users\\VITO",HOMEDRIVE:"C:",HOMEPATH:"\\Users\\VITO",IGCCSVC_DB:"AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAACk9L9dp9aUGSZdtH8QZotQQAAAACAAAAAAAQZgAAAAEAACAAAABUsrSzIO1uCm8HqhLLp1K0dnDMSTSrLiah8LxFPMrPZwAAAAAOgAAAAAIAACAAAADujTH6ZmKfgh+SCOoSxSRgz56IxtZDXKkaxRmH+zky02AAAADlYJQ/LNK2GlqfJPLo+yewUbrCoNS/00A8H42b2RBLiV+v28IbDQr69jm4JQGfAuXINqXtWYe3BHsIkChAB0jKoAOVtgs+f8h0FnRuMntRILE+im3lp0zYyhxupp+YMS9AAAAAIdUN5Es1KF/eg9ZJAHSXv37l56QJr+hsqq+9rP3qfqFsc6L2T9ncCuwDXUaRkV8DIbrXq/ATsB616fX1RGqDLA==",INIT_CWD:"C:\\Users\\VITO\\Documents\\code\\polizas-odoo",LANG:"en_US.UTF-8",LOCALAPPDATA:"C:\\Users\\VITO\\AppData\\Local",LOGONSERVER:"\\\\DESKTOP-JEUMPCA",NODE:"C:\\Program Files\\nodejs\\node.exe",NODE_ENV:"production",NODE_EXE:"C:\\Program Files\\nodejs\\\\node.exe",NPM_CLI_JS:"C:\\Program Files\\nodejs\\\\node_modules\\npm\\bin\\npm-cli.js",npm_command:"run-script",npm_config_cache:"C:\\Users\\VITO\\AppData\\Local\\npm-cache",npm_config_globalconfig:"C:\\Users\\VITO\\AppData\\Roaming\\npm\\etc\\npmrc",npm_config_global_prefix:"C:\\Users\\VITO\\AppData\\Roaming\\npm",npm_config_init_module:"C:\\Users\\VITO\\.npm-init.js",npm_config_local_prefix:"C:\\Users\\VITO\\Documents\\code\\polizas-odoo",npm_config_node_gyp:"C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js",npm_config_noproxy:"",npm_config_npm_version:"10.5.2",npm_config_prefix:"C:\\Users\\VITO\\AppData\\Roaming\\npm",npm_config_userconfig:"C:\\Users\\VITO\\.npmrc",npm_config_user_agent:"npm/10.5.2 node/v20.13.1 win32 x64 workspaces/false",npm_execpath:"C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js",npm_lifecycle_event:"build",npm_lifecycle_script:"vite build",npm_node_execpath:"C:\\Program Files\\nodejs\\node.exe",npm_package_json:"C:\\Users\\VITO\\Documents\\code\\polizas-odoo\\package.json",npm_package_name:"odoo-polizas",npm_package_version:"5.0.0",NPM_PREFIX_JS:"C:\\Program Files\\nodejs\\\\node_modules\\npm\\bin\\npm-prefix.js",NPM_PREFIX_NPM_CLI_JS:"C:\\Users\\VITO\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",NUMBER_OF_PROCESSORS:"8",OneDrive:"C:\\Users\\VITO\\OneDrive",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",OS:"Windows_NT",Path:"C:\\Users\\VITO\\Documents\\code\\polizas-odoo\\node_modules\\.bin;C:\\Users\\VITO\\Documents\\code\\node_modules\\.bin;C:\\Users\\VITO\\Documents\\node_modules\\.bin;C:\\Users\\VITO\\node_modules\\.bin;C:\\Users\\node_modules\\.bin;C:\\node_modules\\.bin;C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;C:\\Program Files\\dotnet\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\Program Files\\PuTTY\\;C:\\Program Files (x86)\\Microsoft SQL Server\\160\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\160\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn\\;C:\\Program Files\\Microsoft SQL Server\\160\\DTS\\Binn\\;C:\\Users\\VITO\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\VITO\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\VITO\\AppData\\Roaming\\npm",PATHEXT:".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL",PROCESSOR_ARCHITECTURE:"AMD64",PROCESSOR_IDENTIFIER:"Intel64 Family 6 Model 140 Stepping 2, GenuineIntel",PROCESSOR_LEVEL:"6",PROCESSOR_REVISION:"8c02",ProgramData:"C:\\ProgramData",ProgramFiles:"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)",ProgramW6432:"C:\\Program Files",PROMPT:"$P$G",PSModulePath:"C:\\Users\\VITO\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files (x86)\\Microsoft SQL Server\\160\\Tools\\PowerShell\\Modules\\",PUBLIC:"C:\\Users\\Public",SESSIONNAME:"Console",SystemDrive:"C:",SystemRoot:"C:\\WINDOWS",TEMP:"C:\\Users\\VITO\\AppData\\Local\\Temp",TERM_PROGRAM:"vscode",TERM_PROGRAM_VERSION:"1.91.0",TMP:"C:\\Users\\VITO\\AppData\\Local\\Temp",USERDOMAIN:"DESKTOP-JEUMPCA",USERDOMAIN_ROAMINGPROFILE:"DESKTOP-JEUMPCA",USERNAME:"VITO",USERPROFILE:"C:\\Users\\VITO",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",VSCODE_GIT_ASKPASS_MAIN:"c:\\Users\\VITO\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",VSCODE_GIT_ASKPASS_NODE:"C:\\Users\\VITO\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",VSCODE_GIT_IPC_HANDLE:"\\\\.\\pipe\\vscode-git-07308a6108-sock",VSCODE_INJECTION:"1",VSCODE_NONCE:"011ee62a-127f-49e6-8451-701b47a21934",VSCODE_STABLE:"1",windir:"C:\\WINDOWS",ZES_ENABLE_SYSMAN:"1"},P=function(){return P=Object.assign||function(c){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(c[o]=t[o])}return c},P.apply(this,arguments)};function Z(e,c){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&c.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)c.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]]);return t}function W(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var j={exports:{}},y,b;function $(){if(b)return y;b=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return y=e,y}var h,F;function ee(){if(F)return h;F=1;var e=$();function c(){}function t(){}return t.resetWarningCache=c,h=function(){function r(i,a,l,_,O,A){if(A!==e){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}r.isRequired=r;function n(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:n,element:r,elementType:r,instanceOf:n,node:r,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:t,resetWarningCache:c};return o.PropTypes=o,o},h}j.exports=ee()();var re=j.exports,p=W(re),B={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var c={}.hasOwnProperty;function t(){for(var r=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var i=typeof o;if(i==="string"||i==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=t.apply(null,o);a&&r.push(a)}}else if(i==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var l in o)c.call(o,l)&&o[l]&&r.push(l)}}}return r.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(B);var oe=B.exports,w=W(oe),se=function(e){return e.replace(/([-_][a-z0-9])/gi,function(c){return c.toUpperCase()}).replace(/-/gi,"")},H=d.forwardRef(function(e,c){var t,r=e.className,n=e.content,o=e.customClassName,i=e.height,a=e.icon,l=e.name,_=e.size,O=e.title,A=e.use,f=e.width,E=Z(e,["className","content","customClassName","height","icon","name","size","title","use","width"]),N=d.useState(0),T=N[0],G=N[1],u=a||n||l;n&&process,l&&process,d.useMemo(function(){return G(T+1)},[u,JSON.stringify(u)]);var J=O?"<title>".concat(O,"</title>"):"",C=d.useMemo(function(){var z=u&&typeof u=="string"&&u.includes("-")?se(u):u;if(Array.isArray(u))return u;if(typeof u=="string"&&m.icons)return m.icons[z]},[T]),K=d.useMemo(function(){return Array.isArray(C)?C[1]||C[0]:C},[T]),k=function(){return Array.isArray(C)&&C.length>1?C[0]:"64 64"}(),X=function(){return E.viewBox||"0 0 ".concat(k)}(),R=o?w(o):w("icon",(t={},t["icon-".concat(_)]=_,t["icon-custom-size"]=i||f,t),r);return m.createElement(m.Fragment,null,A?m.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",className:R},i&&{height:i},f&&{width:f},{role:"img","aria-hidden":"true"},E,{ref:c}),m.createElement("use",{href:A})):m.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",viewBox:X,className:R},i&&{height:i},f&&{width:f},{role:"img","aria-hidden":"true",dangerouslySetInnerHTML:{__html:J+K}},E,{ref:c})),O&&m.createElement("span",{className:"visually-hidden"},O))});H.propTypes={className:p.string,content:p.oneOfType([p.array,p.string]),customClassName:p.string,height:p.number,icon:p.oneOfType([p.array,p.string]),name:p.string,size:p.oneOf(["custom","custom-size","sm","lg","xl","xxl","3xl","4xl","5xl","6xl","7xl","8xl","9xl"]),title:p.any,use:p.any,width:p.number};H.displayName="CIcon";export{V as C,H as a,L as b,U as c};
