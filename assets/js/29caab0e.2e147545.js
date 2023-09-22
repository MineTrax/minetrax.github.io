"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[8143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,v=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(v,o(o({ref:t},d),{},{components:n})):a.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:4,title:"Setup Plugin",id:"setup-plugin"},o=void 0,l={unversionedId:"installation/setup-plugin",id:"installation/setup-plugin",title:"Setup Plugin",description:"You need to add your minecraft server to web before continuing to add Minetrax plugin.",source:"@site/docs/installation/setup-plugin.md",sourceDirName:"installation",slug:"/installation/setup-plugin",permalink:"/docs/installation/setup-plugin",draft:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/edit/main/docs/installation/setup-plugin.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Setup Plugin",id:"setup-plugin"},sidebar:"tutorialSidebar",previous:{title:"Setup Web SSL",permalink:"/docs/installation/setup-web-ssl"},next:{title:"What Next?",permalink:"/docs/installation/what-next"}},s={},p=[{value:"Download",id:"download",level:2},{value:"Setup",id:"setup",level:2},{value:"server-id",id:"server-id",level:3},{value:"api-host",id:"api-host",level:3},{value:"api-key &amp; api-secret",id:"api-key--api-secret",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Add your minecraft server first!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You need to add your minecraft server to web before continuing to add Minetrax plugin."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"/docs/web/adding-minecraft-server"},"Click here")," to know how to add your server."))),(0,i.kt)("h2",{id:"download"},"Download"),(0,i.kt)("p",null,"Firstly, download the latest ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/MineTrax/plugin/releases"},"MineTrax.jar"))," file from releases section of github and put it inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," folder of your Minecraft server. "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"MineTrax plugin should not be added to Proxy servers (Bungee, Velocity etc). It is only for Spigot, Paper, Bukkit etc servers."),(0,i.kt)("li",{parentName:"ol"},"Vault plugin is required for Minetrax to work. If you don't have it, download it from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/MilkBowl/Vault/releases/latest"},"here"),"."),(0,i.kt)("li",{parentName:"ol"},"It is recomended to have ViaVersion in your servers if you want to track player's client version in Web.")))),(0,i.kt)("p",null,"Start your server and it should create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Minetrax/config.yml")," file in your plugins folder, which should look something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=plugins/Minetrax/config.yml",title:"plugins/Minetrax/config.yml"},"enabled: true\napi-host:\napi-key:\napi-secret:\nserver-id:\nwebquery-host: 0.0.0.0\nwebquery-port: 25569\n...\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"WebQuery port must be available")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Plugin will try to open new connection to your defined ",(0,i.kt)("strong",{parentName:"p"},"webquery-port")," so that web can connect to it. It is important that nothing else is running on that port and your hosting provider or firewall allow opening the port you specified."),(0,i.kt)("p",{parentName:"div"},"Also make sure you choose a port which is always greater than 1024 (>1024) as non root user cannot open port less than it."),(0,i.kt)("p",{parentName:"div"},"Good Practice: If your join port is 25565, then choose something like 25569 or 25568 etc."))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"In next step you need to know few things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"server-id"),(0,i.kt)("li",{parentName:"ol"},"api-host"),(0,i.kt)("li",{parentName:"ol"},"api-key"),(0,i.kt)("li",{parentName:"ol"},"api-secret")),(0,i.kt)("h3",{id:"server-id"},"server-id"),(0,i.kt)("p",null,"This is unique identifier of your server.\nAfter you have ",(0,i.kt)("a",{parentName:"p",href:"/docs/web/adding-minecraft-server"},"added your server"),", you can view your server id from listing page."),(0,i.kt)("h3",{id:"api-host"},"api-host"),(0,i.kt)("p",null,"API host is your url at which minetrax will be running. eg: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://yourdomain.com")),(0,i.kt)("h3",{id:"api-key--api-secret"},"api-key & api-secret"),(0,i.kt)("p",null,"API key and secret are keys used to protect communication between minetrax plugin and the web. You can find in ",(0,i.kt)("strong",{parentName:"p"},"Plugins Setting")," section of web admin sidebar."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure to keep your api key and secret private and not share those with anyone. It's are not public information."))),(0,i.kt)("p",null,"Enter all the details in ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yml")," file and restart your server."))}u.isMDXComponent=!0}}]);