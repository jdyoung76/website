"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[53409],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=u(n),m=a,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},14547:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),i=["components"],o={},s="nosqlclient",u={unversionedId:"charts/incubator/nosqlclient/index",id:"charts/incubator/nosqlclient/index",title:"nosqlclient",description:"Version application AppVersion: latest",source:"@site/docs/charts/incubator/nosqlclient/index.md",sourceDirName:"charts/incubator/nosqlclient",slug:"/charts/incubator/nosqlclient/",permalink:"/docs/charts/incubator/nosqlclient/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/incubator/nosqlclient/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/incubator/nightscout/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/incubator/nosqlclient/CHANGELOG"}},c={},p=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"TrueNAS SCALE",id:"truenas-scale",level:3},{value:"Helm",id:"helm",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"TrueNAS SCALE",id:"truenas-scale-1",level:3},{value:"Helm",id:"helm-1",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Helm",id:"helm-2",level:3},{value:"Available Settings",id:"available-settings",level:4},{value:"Configure using the Commandline",id:"configure-using-the-commandline",level:4},{value:"Configure using a yaml file",id:"configure-using-a-yaml-file",level:4},{value:"Connecting to other apps",id:"connecting-to-other-apps",level:4},{value:"Support",id:"support",level:2},{value:"Sponsor TrueCharts",id:"sponsor-truecharts",level:2}],h={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nosqlclient"},"nosqlclient"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Version-0.0.11-informational?style=flat-square",alt:"Version: 0.0.11"})," ",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Type-application-informational?style=flat-square",alt:"Type: application"})," ",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/AppVersion-latest-informational?style=flat-square",alt:"AppVersion: latest"})),(0,l.kt)("p",null,"Cross-platform and self hosted, easy to use, intuitive mongodb management tool - Formerly Mongoclient"),(0,l.kt)("p",null,"TrueCharts can be installed as both ",(0,l.kt)("em",{parentName:"p"},"normal")," Helm Charts or as Apps on TrueNAS SCALE."),(0,l.kt)("p",null,"This readme is just an automatically generated general guide on installing our Helm Charts and Apps.\nFor more information, please click here: ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/charts/stable/nosqlclient"},"nosqlclient")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,l.kt)("a",{parentName:"strong",href:"https://github.com/truecharts/charts/issues/new/choose"},"here"))),(0,l.kt)("h2",{id:"source-code"},"Source Code"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nosqlclient/nosqlclient"},"https://github.com/nosqlclient/nosqlclient")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/mongoclient/mongoclient/"},"https://hub.docker.com/r/mongoclient/mongoclient/"))),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"Kubernetes: ",(0,l.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Repository"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://library-charts.truecharts.org"},"https://library-charts.truecharts.org")),(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"10.4.6")))),(0,l.kt)("h2",{id:"installing-the-chart"},"Installing the Chart"),(0,l.kt)("h3",{id:"truenas-scale"},"TrueNAS SCALE"),(0,l.kt)("p",null,"To install this App on TrueNAS SCALE check our ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/Quick-Start%20Guides/02-Installing-an-App/"},"Quick-Start Guide"),"."),(0,l.kt)("h3",{id:"helm"},"Helm"),(0,l.kt)("p",null,"To install the chart with the release name ",(0,l.kt)("inlineCode",{parentName:"p"},"nosqlclient")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add TrueCharts https://helm.truecharts.org\nhelm repo update\nhelm install nosqlclient TrueCharts/nosqlclient\n")),(0,l.kt)("h2",{id:"uninstall"},"Uninstall"),(0,l.kt)("h3",{id:"truenas-scale-1"},"TrueNAS SCALE"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Upgrading, Rolling Back and Uninstalling the Chart")),(0,l.kt)("p",null,"To upgrade, rollback or delete this App from TrueNAS SCALE check our ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/Quick-Start%20Guides/04-Upgrade-rollback-delete-an-App/"},"Quick-Start Guide"),"."),(0,l.kt)("h3",{id:"helm-1"},"Helm"),(0,l.kt)("p",null,"To uninstall the ",(0,l.kt)("inlineCode",{parentName:"p"},"nosqlclient")," deployment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm uninstall nosqlclient\n")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("h3",{id:"helm-2"},"Helm"),(0,l.kt)("h4",{id:"available-settings"},"Available Settings"),(0,l.kt)("p",null,"Read through the ",(0,l.kt)("a",{parentName:"p",href:"./values.yaml"},"values.yaml")," file. It has several commented out suggested values.\nOther values may be used from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/truecharts/library-charts/tree/main/charts/stable/common/values.yaml"},"values.yaml")," from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/k8s-at-home/library-charts/tree/main/charts/stable/common"},"common library"),"."),(0,l.kt)("h4",{id:"configure-using-the-commandline"},"Configure using the Commandline"),(0,l.kt)("p",null,"Specify each parameter using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'helm install nosqlclient \\\n  --set env.TZ="America/New York" \\\n    TrueCharts/nosqlclient\n')),(0,l.kt)("h4",{id:"configure-using-a-yaml-file"},"Configure using a yaml file"),(0,l.kt)("p",null,"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm install nosqlclient TrueCharts/nosqlclient -f values.yaml\n")),(0,l.kt)("h4",{id:"connecting-to-other-apps"},"Connecting to other apps"),(0,l.kt)("p",null,"If you need to connect this App to other Apps on TrueNAS SCALE, please refer to our ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/Quick-Start%20Guides/06-linking-apps/"},"Linking Apps Internally")," quick-start guide."),(0,l.kt)("h2",{id:"support"},"Support"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Please check our ",(0,l.kt)("a",{parentName:"li",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/Important-MUST-READ"},"quick-start guides for TrueNAS SCALE"),"."),(0,l.kt)("li",{parentName:"ul"},"See the ",(0,l.kt)("a",{parentName:"li",href:"https://truecharts.org"},"Website")),(0,l.kt)("li",{parentName:"ul"},"Check our ",(0,l.kt)("a",{parentName:"li",href:"https://discord.gg/tVsPTHWTtr"},"Discord")),(0,l.kt)("li",{parentName:"ul"},"Open a ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/new/choose"},"issue"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"sponsor-truecharts"},"Sponsor TrueCharts"),(0,l.kt)("p",null,"TrueCharts can only exist due to the incredible effort of our staff.\nPlease consider making a ",(0,l.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/about/sponsor"},"donation")," or contributing back to the project any way you can!"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}m.isMDXComponent=!0}}]);