"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3,title:"Before you Begin",id:"before-you-begin"},l=void 0,o={unversionedId:"introduction/before-you-begin",id:"introduction/before-you-begin",title:"Before you Begin",description:"MineTrax has two parts:",source:"@site/docs/introduction/before-you-begin.md",sourceDirName:"introduction",slug:"/introduction/before-you-begin",permalink:"/docs/introduction/before-you-begin",draft:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/edit/main/docs/introduction/before-you-begin.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Before you Begin",id:"before-you-begin"},sidebar:"tutorialSidebar",previous:{title:"Supported Versions",permalink:"/docs/introduction/supported-versions"},next:{title:"Setup Web (AutoInstaller)",permalink:"/docs/installation/setup-web-autoinstaller"}},u={},s=[{value:"Web",id:"web",level:2},{value:"AutoInstaller",id:"autoinstaller",level:3},{value:"Manually",id:"manually",level:3},{value:"Plugin",id:"plugin",level:2},{value:"Flow Diagram",id:"flow-diagram",level:2}],p={toc:s};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"MineTrax has two parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Web"),(0,r.kt)("li",{parentName:"ul"},"Plugin")),(0,r.kt)("p",null,"You can just install Web if you don't need extra functionalities which Plugin provide.\nThough it is highly recommended to install both web and plugin to get the full experience."),(0,r.kt)("h2",{id:"web"},"Web"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/minetrax/minetrax"},"https://github.com/minetrax/minetrax")),(0,r.kt)("p",null,"Developed using Laravel, Web is the main part of suite, i.e, UI and backend layer. It will be hard to host the web in a traditional web hosting, It is recommended to host the web in a virtual(VPS) or dedicated server as per your need. You can always join us on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/Hzfj27k"},"Discord")," for help or queries."),(0,r.kt)("p",null,"Web can be installed in one of two ways."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/installation/setup-web-autoinstaller"},"AutoInstaller")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/installation/setup-web-manually"},"Manually"))),(0,r.kt)("h3",{id:"autoinstaller"},"AutoInstaller"),(0,r.kt)("p",null,"AutoInstaller is a script which help you automatically install MineTrax with just one command.\nIt is a quick way to install MineTrax if you are installing on a fresh VPS/Server."),(0,r.kt)("h3",{id:"manually"},"Manually"),(0,r.kt)("p",null,"If you installing MineTrax on a existing VPS/Server or you want to follow step and maybe customize few things on the way you might prefer installing it manually."),(0,r.kt)("p",null,"Below is a table which will help you decide which method to choose."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"AutoInstaller"),(0,r.kt)("th",{parentName:"tr",align:null},"Manually"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Quick way to Install"),(0,r.kt)("td",{parentName:"tr",align:null},"Slower than AutoInstaller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Very Easy"),(0,r.kt)("td",{parentName:"tr",align:null},"Moderate, Basic Linux knowledge required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AutoInstall script require a fresh VPS/Server"),(0,r.kt)("td",{parentName:"tr",align:null},"You can follow manual steps to install in existing VPS/Server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Requires Ubuntu (LTS)"),(0,r.kt)("td",{parentName:"tr",align:null},"You can use different distributions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Will Install MySQL & Nginx"),(0,r.kt)("td",{parentName:"tr",align:null},"Can choose between MariaDB/MySQL & Apache/Nginx")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Both AutoInstaller and Manual Installation do the same thing, AutoInstaller just makes it easier and faster.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"It is recommended to use AutoInstaller if you are installing on a fresh VPS/Server with Ubuntu (LTS).")),(0,r.kt)("h2",{id:"plugin"},"Plugin"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/minetrax/plugin"},"https://github.com/minetrax/plugin")),(0,r.kt)("p",null,"This is the spigot plugin which you need to install on your Minecraft server.\nIt is responsible for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Calculating and sending Player & Server Intel data to Web."),(0,r.kt)("li",{parentName:"ul"},"Sending chat and servers log to web if enabled."),(0,r.kt)("li",{parentName:"ul"},"Enabling users for web to chat with ingame players."),(0,r.kt)("li",{parentName:"ul"},"and various other things like whois command /ww etc.")),(0,r.kt)("h2",{id:"flow-diagram"},"Flow Diagram"),(0,r.kt)("p",null,"Here is a flow diagram to understand how MineTrax works.\n",(0,r.kt)("img",{alt:"Hero Settings",src:n(9565).Z,width:"2687",height:"2074"})))}d.isMDXComponent=!0},9565:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/diagram_light_bg-b9b1451e4065027b3add9fe6959fc14a.png"}}]);