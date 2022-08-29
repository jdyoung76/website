"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[92700],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(r),d=n,m=h["".concat(o,".").concat(d)]||h[d]||p[d]||s;return r?a.createElement(m,l(l({ref:t},u),{},{components:r})):a.createElement(m,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=h;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<s;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},97384:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=r(83117),n=r(80102),s=(r(67294),r(3905)),l=["components"],i={},o="self-service-password",c={unversionedId:"charts/incubator/self-service-password/index",id:"charts/incubator/self-service-password/index",title:"self-service-password",description:"Version application AppVersion: 5.3.0",source:"@site/docs/charts/incubator/self-service-password/index.md",sourceDirName:"charts/incubator/self-service-password",slug:"/charts/incubator/self-service-password/",permalink:"/docs/charts/incubator/self-service-password/",draft:!1,editUrl:"https://github.com/truecharts/website/tree/master/docs/charts/incubator/self-service-password/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"Changelog",permalink:"/docs/charts/incubator/seedsync/CHANGELOG"},next:{title:"Changelog",permalink:"/docs/charts/incubator/self-service-password/CHANGELOG"}},u={},p=[{value:"Source Code",id:"source-code",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"TrueNAS SCALE",id:"truenas-scale",level:3},{value:"Helm",id:"helm",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"TrueNAS SCALE",id:"truenas-scale-1",level:3},{value:"Helm",id:"helm-1",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Helm",id:"helm-2",level:3},{value:"Available Settings",id:"available-settings",level:4},{value:"Configure using the command line",id:"configure-using-the-command-line",level:4},{value:"Configure using a yaml file",id:"configure-using-a-yaml-file",level:4},{value:"Connecting to other charts",id:"connecting-to-other-charts",level:4},{value:"Support",id:"support",level:2},{value:"Sponsor TrueCharts",id:"sponsor-truecharts",level:2}],h={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"self-service-password"},"self-service-password"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Version-1.0.34-informational?style=flat-square",alt:"Version: 1.0.34"})," ",(0,s.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Type-application-informational?style=flat-square",alt:"Type: application"})," ",(0,s.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/AppVersion-5.3.0-informational?style=flat-square",alt:"AppVersion: 5.3.0"})),(0,s.kt)("p",null,"Self Service Password is a PHP application that allows users to change their password in an LDAP directory."),(0,s.kt)("p",null,"TrueCharts can be installed as both ",(0,s.kt)("em",{parentName:"p"},"normal")," Helm Charts or as Apps on TrueNAS SCALE."),(0,s.kt)("p",null,"This readme is just an automatically generated general guide on installing our Helm Charts and Apps.\nFor more information, please click here: ",(0,s.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/charts/incubator/self-service-password"},"self-service-password")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"This chart is not maintained by the upstream project and any issues with the chart should be raised ",(0,s.kt)("a",{parentName:"strong",href:"https://github.com/truecharts/charts/issues/new/choose"},"here"))),(0,s.kt)("h2",{id:"source-code"},"Source Code"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/truecharts/charts/tree/master/charts/incubator/self-service-password"},"https://github.com/truecharts/charts/tree/master/charts/incubator/self-service-password")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/tiredofit/docker-self-service-password"},"https://github.com/tiredofit/docker-self-service-password")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/tiredofit/self-service-password"},"https://hub.docker.com/r/tiredofit/self-service-password")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://self-service-password.readthedocs.io/en/latest"},"https://self-service-password.readthedocs.io/en/latest"))),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("p",null,"Kubernetes: ",(0,s.kt)("inlineCode",{parentName:"p"},">=1.16.0-0")),(0,s.kt)("h2",{id:"dependencies"},"Dependencies"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Repository"),(0,s.kt)("th",{parentName:"tr",align:null},"Name"),(0,s.kt)("th",{parentName:"tr",align:null},"Version"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://library-charts.truecharts.org"},"https://library-charts.truecharts.org")),(0,s.kt)("td",{parentName:"tr",align:null},"common"),(0,s.kt)("td",{parentName:"tr",align:null},"10.5.4")))),(0,s.kt)("h2",{id:"installing-the-chart"},"Installing the Chart"),(0,s.kt)("h3",{id:"truenas-scale"},"TrueNAS SCALE"),(0,s.kt)("p",null,"To install this Chart on TrueNAS SCALE check our ",(0,s.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/Installing-an-App"},"Quick-Start Guide"),"."),(0,s.kt)("h3",{id:"helm"},"Helm"),(0,s.kt)("p",null,"To install the chart with the release name ",(0,s.kt)("inlineCode",{parentName:"p"},"self-service-password")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add TrueCharts https://charts.truecharts.org\nhelm repo update\nhelm install self-service-password TrueCharts/self-service-password\n")),(0,s.kt)("h2",{id:"uninstall"},"Uninstall"),(0,s.kt)("h3",{id:"truenas-scale-1"},"TrueNAS SCALE"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Upgrading, Rolling Back and Uninstalling the Chart")),(0,s.kt)("p",null,"To upgrade, rollback or delete this Chart from TrueNAS SCALE check our ",(0,s.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/Upgrade-rollback-delete-an-App"},"Quick-Start Guide"),"."),(0,s.kt)("h3",{id:"helm-1"},"Helm"),(0,s.kt)("p",null,"To uninstall the ",(0,s.kt)("inlineCode",{parentName:"p"},"self-service-password")," deployment"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"helm uninstall self-service-password\n")),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("h3",{id:"helm-2"},"Helm"),(0,s.kt)("h4",{id:"available-settings"},"Available Settings"),(0,s.kt)("p",null,"Read through the ",(0,s.kt)("a",{parentName:"p",href:"./values.yaml"},"values.yaml")," file. It has several commented out suggested values.\nOther values may be used from the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/truecharts/library-charts/tree/main/charts/stable/common/values.yaml"},"values.yaml")," from the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/k8s-at-home/library-charts/tree/main/charts/stable/common"},"common library"),"."),(0,s.kt)("h4",{id:"configure-using-the-command-line"},"Configure using the command line"),(0,s.kt)("p",null,"Specify each parameter using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,s.kt)("inlineCode",{parentName:"p"},"helm install"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'helm install self-service-password \\\n  --set env.TZ="America/New York" \\\n    TrueCharts/self-service-password\n')),(0,s.kt)("h4",{id:"configure-using-a-yaml-file"},"Configure using a yaml file"),(0,s.kt)("p",null,"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"helm install self-service-password TrueCharts/self-service-password -f values.yaml\n")),(0,s.kt)("h4",{id:"connecting-to-other-charts"},"Connecting to other charts"),(0,s.kt)("p",null,"If you need to connect this Chart to other Charts on TrueNAS SCALE, please refer to our ",(0,s.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/linking-apps"},"Linking Charts Internally")," quick-start guide."),(0,s.kt)("h2",{id:"support"},"Support"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Please check our ",(0,s.kt)("a",{parentName:"li",href:"https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/Important-MUST-READ"},"quick-start guides for TrueNAS SCALE"),"."),(0,s.kt)("li",{parentName:"ul"},"See the ",(0,s.kt)("a",{parentName:"li",href:"https://truecharts.org"},"Website")),(0,s.kt)("li",{parentName:"ul"},"Check our ",(0,s.kt)("a",{parentName:"li",href:"https://discord.gg/tVsPTHWTtr"},"Discord")),(0,s.kt)("li",{parentName:"ul"},"Open a ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/truecharts/apps/issues/new/choose"},"issue"))),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"sponsor-truecharts"},"Sponsor TrueCharts"),(0,s.kt)("p",null,"TrueCharts can only exist due to the incredible effort of our staff.\nPlease consider making a ",(0,s.kt)("a",{parentName:"p",href:"https://truecharts.org/docs/about/sponsor"},"donation")," or contributing back to the project any way you can!"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"All Rights Reserved - The TrueCharts Project"))}d.isMDXComponent=!0}}]);