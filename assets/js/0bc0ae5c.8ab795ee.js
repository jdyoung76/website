"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[35257],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(a),m=n,d=h["".concat(i,".").concat(m)]||h[m]||c[m]||o;return a?r.createElement(d,l(l({ref:t},p),{},{components:a})):r.createElement(d,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},49432:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),l=["components"],s={},i="mojopaste",u={unversionedId:"charts/incubator/mojopaste/index",id:"charts/incubator/mojopaste/index",title:"mojopaste",description:"Mojopaste is a pastebin application. There's about one million of these out there, but if you have the need to run something internally at work or you just fancy having your own pastebin, this is your application.",source:"@site/docs/charts/incubator/mojopaste/index.md",sourceDirName:"charts/incubator/mojopaste",slug:"/charts/incubator/mojopaste/",permalink:"/docs/charts/incubator/mojopaste/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/incubator/mojopaste/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/incubator/mocodo-mcd/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/incubator/mojopaste/CHANGELOG"}},p={},c=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"TrueNAS SCALE",id:"truenas-scale",level:3},{value:"Helm",id:"helm",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"TrueNAS SCALE",id:"truenas-scale-1",level:3},{value:"Helm",id:"helm-1",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Helm",id:"helm-2",level:3},{value:"Available Settings",id:"available-settings",level:4},{value:"Configure using the command line",id:"configure-using-the-command-line",level:4},{value:"Configure using a yaml file",id:"configure-using-a-yaml-file",level:4},{value:"Connecting to other charts",id:"connecting-to-other-charts",level:4},{value:"Support",id:"support",level:2},{value:"Sponsor TrueCharts",id:"sponsor-truecharts",level:2}],h={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mojopaste"},"mojopaste"),(0,o.kt)("p",null,"Mojopaste is a pastebin application. There's about one million of these out there, but if you have the need to run something internally at work or you just fancy having your own pastebin, this is your application."),(0,o.kt)("p",null,"TrueCharts can be installed as both ",(0,o.kt)("em",{parentName:"p"},"normal")," Helm Charts or as Apps on TrueNAS SCALE."),(0,o.kt)("p",null,"This readme is just an automatically generated general guide on installing our Helm Charts and Apps.\nFor more information, please click here: ",(0,o.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/charts/incubator/mojopaste"},"mojopaste")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/truecharts/charts/issues/new/choose"},"here"))),(0,o.kt)("h2",{id:"source-code"},"Source Code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/truecharts/charts/tree/master/charts/incubator/mojopaste"},"https://github.com/truecharts/charts/tree/master/charts/incubator/mojopaste")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jhthorsen/app-mojopaste"},"https://github.com/jhthorsen/app-mojopaste")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/jhthorsen/mojopaste"},"https://hub.docker.com/r/jhthorsen/mojopaste"))),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Kubernetes: ",(0,o.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Repository"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Version"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://library-charts.truecharts.org"},"https://library-charts.truecharts.org")),(0,o.kt)("td",{parentName:"tr",align:null},"common"),(0,o.kt)("td",{parentName:"tr",align:null},"10.6.8")))),(0,o.kt)("h2",{id:"installing-the-chart"},"Installing the Chart"),(0,o.kt)("h3",{id:"truenas-scale"},"TrueNAS SCALE"),(0,o.kt)("p",null,"To install this Chart on TrueNAS SCALE check our ",(0,o.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Installing-an-App"},"Quick-Start Guide"),"."),(0,o.kt)("h3",{id:"helm"},"Helm"),(0,o.kt)("p",null,"To install the chart with the release name ",(0,o.kt)("inlineCode",{parentName:"p"},"mojopaste")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add TrueCharts https://charts.truecharts.org\nhelm repo update\nhelm install mojopaste TrueCharts/mojopaste\n")),(0,o.kt)("h2",{id:"uninstall"},"Uninstall"),(0,o.kt)("h3",{id:"truenas-scale-1"},"TrueNAS SCALE"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Upgrading, Rolling Back and Uninstalling the Chart")),(0,o.kt)("p",null,"To upgrade, rollback or delete this Chart from TrueNAS SCALE check our ",(0,o.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Upgrade-rollback-delete-an-App"},"Quick-Start Guide"),"."),(0,o.kt)("h3",{id:"helm-1"},"Helm"),(0,o.kt)("p",null,"To uninstall the ",(0,o.kt)("inlineCode",{parentName:"p"},"mojopaste")," deployment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm uninstall mojopaste\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"helm-2"},"Helm"),(0,o.kt)("h4",{id:"available-settings"},"Available Settings"),(0,o.kt)("p",null,"Read through the values.yaml file. It has several commented out suggested values.\nOther values may be used from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/truecharts/library-charts/tree/main/charts/stable/common/values.yaml"},"values.yaml")," from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/k8s-at-home/library-charts/tree/main/charts/stable/common"},"common library"),"."),(0,o.kt)("h4",{id:"configure-using-the-command-line"},"Configure using the command line"),(0,o.kt)("p",null,"Specify each parameter using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"helm install"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'helm install mojopaste \\\n  --set env.TZ="America/New York" \\\n    TrueCharts/mojopaste\n')),(0,o.kt)("h4",{id:"configure-using-a-yaml-file"},"Configure using a yaml file"),(0,o.kt)("p",null,"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"helm install mojopaste TrueCharts/mojopaste -f values.yaml\n")),(0,o.kt)("h4",{id:"connecting-to-other-charts"},"Connecting to other charts"),(0,o.kt)("p",null,"If you need to connect this Chart to other Charts on TrueNAS SCALE, please refer to our ",(0,o.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/linking-apps"},"Linking Charts Internally")," quick-start guide."),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Please check our ",(0,o.kt)("a",{parentName:"li",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Important-MUST-READ"},"quick-start guides for TrueNAS SCALE"),"."),(0,o.kt)("li",{parentName:"ul"},"See the ",(0,o.kt)("a",{parentName:"li",href:"https://truecharts.org"},"Website")),(0,o.kt)("li",{parentName:"ul"},"Check our ",(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/tVsPTHWTtr"},"Discord")),(0,o.kt)("li",{parentName:"ul"},"Open a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/new/choose"},"issue"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"sponsor-truecharts"},"Sponsor TrueCharts"),(0,o.kt)("p",null,"TrueCharts can only exist due to the incredible effort of our staff.\nPlease consider making a ",(0,o.kt)("a",{parentName:"p",href:"https://truecharts.org/sponsor"},"donation")," or contributing back to the project any way you can!"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}m.isMDXComponent=!0}}]);