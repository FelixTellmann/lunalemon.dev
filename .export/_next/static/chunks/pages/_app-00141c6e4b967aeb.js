(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(1698)}])},1698:function(d,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return t}});var e=a(5893),f=function(a){var b=a.children;return(0,e.jsx)(e.Fragment,{children:b})},g=function(a){var b=a.children;return(0,e.jsx)(e.Fragment,{children:b})},c=a(7294);let h=["light","dark"],i="(prefers-color-scheme: dark)",j="undefined"==typeof window,k=(0,c.createContext)(void 0),l=a=>(0,c.useContext)(k)?c.createElement(c.Fragment,null,a.children):c.createElement(m,a),m=({forcedTheme:a,disableTransitionOnChange:m=!1,enableSystem:d=!0,enableColorScheme:r=!0,storageKey:s="theme",themes:e=["light","dark"],defaultTheme:t=d?"system":"light",attribute:u="data-theme",value:f,children:g,nonce:v})=>{let[b,y]=(0,c.useState)(()=>o(s,t)),[j,z]=(0,c.useState)(()=>o(s)),w=f?Object.values(f):e,A=(0,c.useCallback)(e=>{let a=e;if(!a)return;"system"===e&&d&&(a=q());let c=f?f[a]:a,g=m?p():null,b=document.documentElement;if("class"===u?(b.classList.remove(...w),c&&b.classList.add(c)):c?b.setAttribute(u,c):b.removeAttribute(u),r){let i=h.includes(t)?t:null,j=h.includes(a)?a:i;b.style.colorScheme=j}null==g||g()},[]),l=(0,c.useCallback)(a=>{y(a);try{localStorage.setItem(s,a)}catch(b){}},[a]),x=(0,c.useCallback)(c=>{let e=q(c);z(e),"system"===b&&d&&!a&&A("system")},[b,a]);return(0,c.useEffect)(()=>{let a=window.matchMedia(i);return a.addListener(x),x(a),()=>a.removeListener(x)},[x]),(0,c.useEffect)(()=>{let a=a=>{a.key===s&&l(a.newValue||t)};return window.addEventListener("storage",a),()=>window.removeEventListener("storage",a)},[l]),(0,c.useEffect)(()=>{A(null!=a?a:b)},[a,b]),c.createElement(k.Provider,{value:{theme:b,setTheme:l,forcedTheme:a,resolvedTheme:"system"===b?j:b,themes:d?[...e,"system"]:e,systemTheme:d?j:void 0}},c.createElement(n,{forcedTheme:a,disableTransitionOnChange:m,enableSystem:d,enableColorScheme:r,storageKey:s,themes:e,defaultTheme:t,attribute:u,value:f,children:g,attrs:w,nonce:v}),g)},n=(0,c.memo)(({forcedTheme:f,storageKey:g,attribute:j,enableSystem:m,enableColorScheme:n,defaultTheme:b,value:d,attrs:o,nonce:p})=>{let k="system"===b,e="class"===j?`var d=document.documentElement,c=d.classList;c.remove(${o.map(a=>`'${a}'`).join(",")});`:`var d=document.documentElement,n='${j}',s='setAttribute';`,l=n?h.includes(b)&&b?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${b}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",a=(a,c=!1,g=!0)=>{let e=d?d[a]:a,f=c?a+"|| ''":`'${e}'`,b="";return n&&g&&!c&&h.includes(a)&&(b+=`d.style.colorScheme = '${a}';`),"class"===j?b+=c||e?`c.add(${f})`:"null":e&&(b+=`d[s](n,${f})`),b},q=f?`!function(){${e}${a(f)}}()`:m?`!function(){try{${e}var e=localStorage.getItem('${g}');if('system'===e||(!e&&${k})){var t='${i}',m=window.matchMedia(t);if(m.media!==t||m.matches){${a("dark")}}else{${a("light")}}}else if(e){${d?`var x=${JSON.stringify(d)};`:""}${a(d?"x[e]":"e",!0)}}${k?"":"else{"+a(b,!1,!1)+"}"}${l}}catch(e){}}()`:`!function(){try{${e}var e=localStorage.getItem('${g}');if(e){${d?`var x=${JSON.stringify(d)};`:""}${a(d?"x[e]":"e",!0)}}else{${a(b,!1,!1)};}${l}}catch(t){}}();`;return c.createElement("script",{nonce:p,dangerouslySetInnerHTML:{__html:q}})},()=>!0),o=(b,c)=>{if(j)return;let a;try{a=localStorage.getItem(b)||void 0}catch(d){}return a||c},p=()=>{let a=document.createElement("style");return a.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(a),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(a)},1)}},q=a=>(a||(a=window.matchMedia(i)),a.matches?"dark":"light");var r=a(1163);function s(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}a(8830),a(4593),a(1754);var t=function(a){var b=a.pageProps,c=a.Component;return(0,r.useRouter)(),(0,e.jsx)(f,{children:(0,e.jsx)(g,{children:(0,e.jsxs)(l,{attribute:"class",children:[(0,e.jsx)("div",{className:"bg-red-400",children:"header"}),(0,e.jsx)(c,function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){s(d,a,c[a])})}return d}({},b))]})})})}},8830:function(){},4593:function(){},1754:function(){},1163:function(a,c,b){a.exports=b(880)}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(6840),b(880)}),_N_E=a.O()}])