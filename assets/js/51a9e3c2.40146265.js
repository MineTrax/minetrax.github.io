"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[8959],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(o),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return o?n.createElement(f,i(i({ref:t},c),{},{components:o})):n.createElement(f,i({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2916:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:2,title:"Custom Navbar",id:"custom-navbar"},i=void 0,l={unversionedId:"web/custom-navbar",id:"web/custom-navbar",title:"Custom Navbar",description:"With help of this feature you can modify the top navigation menu of your website. You can add, remove or modify various navigation items.",source:"@site/docs/web/custom-navbar.md",sourceDirName:"web",slug:"/web/custom-navbar",permalink:"/docs/web/custom-navbar",draft:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/edit/main/docs/web/custom-navbar.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Custom Navbar",id:"custom-navbar"},sidebar:"tutorialSidebar",previous:{title:"Adding Minecraft Server",permalink:"/docs/web/adding-minecraft-server"},next:{title:"Localization",permalink:"/docs/web/localization"}},s={},u=[{value:"Type of Available Items",id:"type-of-available-items",level:2},{value:"1. component",id:"1-component",level:3},{value:"2. route",id:"2-route",level:3},{value:"3. custom-page",id:"3-custom-page",level:3},{value:"4. dropdown",id:"4-dropdown",level:3},{value:"How to use this feature?",id:"how-to-use-this-feature",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With help of this feature you can modify the top navigation menu of your website. You can add, remove or modify various navigation items."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CustomNavBarSetting",src:o(4305).Z,width:"1351",height:"870"})),(0,r.kt)("h2",{id:"type-of-available-items"},"Type of Available Items"),(0,r.kt)("h3",{id:"1-component"},"1. component"),(0,r.kt)("p",null,"This item is kind of custom item which contains a special functionality.\nEg: Search, Profile Dropdown, Theme Switcher etc."),(0,r.kt)("h3",{id:"2-route"},"2. route"),(0,r.kt)("p",null,"This item is a link to a premade route. Clicking on this will take you to different page.\nEg: Home, Login, Register, Statistics, Features."),(0,r.kt)("h3",{id:"3-custom-page"},"3. custom-page"),(0,r.kt)("p",null,"This item is a link to a custom page you created. Clicking on this will take you to the custom page.\nEg: Rules & and other custom page you create."),(0,r.kt)("h3",{id:"4-dropdown"},"4. dropdown"),(0,r.kt)("p",null,"This is a helper item. It helps you to create a dropdown menu. You can add custom-page and route inside of a dropdown component."),(0,r.kt)("h2",{id:"how-to-use-this-feature"},"How to use this feature?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings")," section of web admin sidebar."),(0,r.kt)("li",{parentName:"ol"},"Then click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Navigation")," setting tab."),(0,r.kt)("li",{parentName:"ol"},'There you can tick "Enable Custom Navigation Bar" and start by dragging items from top "Available Items" section to bottom.')))}p.isMDXComponent=!0},4305:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/custom-navbar-1-69a54fe4da4e07ae6b4c04beaa93a00e.png"}}]);