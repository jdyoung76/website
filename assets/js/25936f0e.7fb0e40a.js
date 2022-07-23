"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[42028],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5586:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={},s="Installation Notes",c={unversionedId:"charts/stable/filebot/installation_notes",id:"charts/stable/filebot/installation_notes",title:"Installation Notes",description:"- If you enable Ingress for this app, you need to have SECURE_CONNECTION set to false and Port Type set to HTTP, otherwise you may run into errors for Too many redirects.",source:"@site/docs/charts/stable/filebot/installation_notes.md",sourceDirName:"charts/stable/filebot",slug:"/charts/stable/filebot/installation_notes",permalink:"/docs/charts/stable/filebot/installation_notes",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/stable/filebot/installation_notes.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/stable/filebot/CHANGELOG"},next:{title:"filebrowser",permalink:"/docs/charts/stable/filebrowser/"}},u={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation-notes"},"Installation Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you enable ",(0,i.kt)("inlineCode",{parentName:"li"},"Ingress")," for this app, you need to have ",(0,i.kt)("inlineCode",{parentName:"li"},"SECURE_CONNECTION")," set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Port Type")," set to ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTP"),", otherwise you may run into errors for ",(0,i.kt)("inlineCode",{parentName:"li"},"Too many redirects"),"."),(0,i.kt)("li",{parentName:"ul"},"You can't enable ",(0,i.kt)("inlineCode",{parentName:"li"},"Ingress")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"VNC")," If you want to use ",(0,i.kt)("inlineCode",{parentName:"li"},"VNC"),", you must set this service to ",(0,i.kt)("inlineCode",{parentName:"li"},"Simple")," instead"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VNC")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"SECURE_CONNECTION")," set ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", only works with very few clients. One of them is ",(0,i.kt)("inlineCode",{parentName:"li"},"SSVNC"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SECURE_CONNECTION")," affects both ",(0,i.kt)("inlineCode",{parentName:"li"},"WebUI")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"VNC"),".")),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you are passing through devices such as ",(0,i.kt)("inlineCode",{parentName:"li"},"Optical Drives"),", you have to Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Container Security Settings")," and set ",(0,i.kt)("inlineCode",{parentName:"li"},"PUID")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),".")))}m.isMDXComponent=!0}}]);