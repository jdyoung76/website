"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[87390],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=o(r),m=a,d=p["".concat(s,".").concat(m)]||p[m]||h[m]||i;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},25932:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return h}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),l=["components"],u={},s="technitium",o={unversionedId:"charts/incubator/technitium/index",id:"charts/incubator/technitium/index",title:"technitium",description:"Technitium DNS Server is an open source authoritative as well as recursive DNS server that can be used for self hosting a DNS server for privacy & security.",source:"@site/docs/charts/incubator/technitium/index.md",sourceDirName:"charts/incubator/technitium",slug:"/charts/incubator/technitium/",permalink:"/docs/charts/incubator/technitium/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/incubator/technitium/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/incubator/tasmocompiler/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/incubator/technitium/CHANGELOG"}},c={},h=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"TrueNAS SCALE",id:"truenas-scale",level:3},{value:"Helm",id:"helm",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"TrueNAS SCALE",id:"truenas-scale-1",level:3},{value:"Helm",id:"helm-1",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Helm",id:"helm-2",level:3},{value:"Available Settings",id:"available-settings",level:4},{value:"Configure using the command line",id:"configure-using-the-command-line",level:4},{value:"Configure using a yaml file",id:"configure-using-a-yaml-file",level:4},{value:"Connecting to other charts",id:"connecting-to-other-charts",level:4},{value:"Support",id:"support",level:2},{value:"Sponsor TrueCharts",id:"sponsor-truecharts",level:2}],p={toc:h};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"technitium"},"technitium"),(0,i.kt)("p",null,"Technitium DNS Server is an open source authoritative as well as recursive DNS server that can be used for self hosting a DNS server for privacy & security."),(0,i.kt)("p",null,"TrueCharts can be installed as both ",(0,i.kt)("em",{parentName:"p"},"normal")," Helm Charts or as Apps on TrueNAS SCALE."),(0,i.kt)("p",null,"This readme is just an automatically generated general guide on installing our Helm Charts and Apps.\nFor more information, please click here: ",(0,i.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/charts/incubator/technitium"},"technitium")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/truecharts/charts/issues/new/choose"},"here"))),(0,i.kt)("h2",{id:"source-code"},"Source Code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/truecharts/charts/tree/master/charts/incubator/technitium"},"https://github.com/truecharts/charts/tree/master/charts/incubator/technitium")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/TechnitiumSoftware/DnsServer"},"https://github.com/TechnitiumSoftware/DnsServer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://technitium.com/"},"https://technitium.com/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/technitium/dns-server"},"https://hub.docker.com/r/technitium/dns-server"))),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"Kubernetes: ",(0,i.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Repository"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://library-charts.truecharts.org"},"https://library-charts.truecharts.org")),(0,i.kt)("td",{parentName:"tr",align:null},"common"),(0,i.kt)("td",{parentName:"tr",align:null},"10.6.8")))),(0,i.kt)("h2",{id:"installing-the-chart"},"Installing the Chart"),(0,i.kt)("h3",{id:"truenas-scale"},"TrueNAS SCALE"),(0,i.kt)("p",null,"To install this Chart on TrueNAS SCALE check our ",(0,i.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Installing-an-App"},"Quick-Start Guide"),"."),(0,i.kt)("h3",{id:"helm"},"Helm"),(0,i.kt)("p",null,"To install the chart with the release name ",(0,i.kt)("inlineCode",{parentName:"p"},"technitium")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add TrueCharts https://charts.truecharts.org\nhelm repo update\nhelm install technitium TrueCharts/technitium\n")),(0,i.kt)("h2",{id:"uninstall"},"Uninstall"),(0,i.kt)("h3",{id:"truenas-scale-1"},"TrueNAS SCALE"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Upgrading, Rolling Back and Uninstalling the Chart")),(0,i.kt)("p",null,"To upgrade, rollback or delete this Chart from TrueNAS SCALE check our ",(0,i.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Upgrade-rollback-delete-an-App"},"Quick-Start Guide"),"."),(0,i.kt)("h3",{id:"helm-1"},"Helm"),(0,i.kt)("p",null,"To uninstall the ",(0,i.kt)("inlineCode",{parentName:"p"},"technitium")," deployment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"helm uninstall technitium\n")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h3",{id:"helm-2"},"Helm"),(0,i.kt)("h4",{id:"available-settings"},"Available Settings"),(0,i.kt)("p",null,"Read through the values.yaml file. It has several commented out suggested values.\nOther values may be used from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/truecharts/library-charts/tree/main/charts/stable/common/values.yaml"},"values.yaml")," from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/k8s-at-home/library-charts/tree/main/charts/stable/common"},"common library"),"."),(0,i.kt)("h4",{id:"configure-using-the-command-line"},"Configure using the command line"),(0,i.kt)("p",null,"Specify each parameter using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,i.kt)("inlineCode",{parentName:"p"},"helm install"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'helm install technitium \\\n  --set env.TZ="America/New York" \\\n    TrueCharts/technitium\n')),(0,i.kt)("h4",{id:"configure-using-a-yaml-file"},"Configure using a yaml file"),(0,i.kt)("p",null,"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"helm install technitium TrueCharts/technitium -f values.yaml\n")),(0,i.kt)("h4",{id:"connecting-to-other-charts"},"Connecting to other charts"),(0,i.kt)("p",null,"If you need to connect this Chart to other Charts on TrueNAS SCALE, please refer to our ",(0,i.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/linking-apps"},"Linking Charts Internally")," quick-start guide."),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please check our ",(0,i.kt)("a",{parentName:"li",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Important-MUST-READ"},"quick-start guides for TrueNAS SCALE"),"."),(0,i.kt)("li",{parentName:"ul"},"See the ",(0,i.kt)("a",{parentName:"li",href:"https://truecharts.org"},"Website")),(0,i.kt)("li",{parentName:"ul"},"Check our ",(0,i.kt)("a",{parentName:"li",href:"https://discord.gg/tVsPTHWTtr"},"Discord")),(0,i.kt)("li",{parentName:"ul"},"Open a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/new/choose"},"issue"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"sponsor-truecharts"},"Sponsor TrueCharts"),(0,i.kt)("p",null,"TrueCharts can only exist due to the incredible effort of our staff.\nPlease consider making a ",(0,i.kt)("a",{parentName:"p",href:"https://truecharts.org/sponsor"},"donation")," or contributing back to the project any way you can!"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}m.isMDXComponent=!0}}]);