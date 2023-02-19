"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[7128],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,v=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},872:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:1,title:"Adding minecraft server",id:"adding-minecraft-server"},s=void 0,d={unversionedId:"tutorials/adding-minecraft-server",id:"tutorials/adding-minecraft-server",title:"Adding minecraft server",description:"In this tutorial we are going to add a minecraft server (spigot/bukkit etc).",source:"@site/docs/tutorials/adding-minecraft-server.md",sourceDirName:"tutorials",slug:"/tutorials/adding-minecraft-server",permalink:"/docs/tutorials/adding-minecraft-server",draft:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/edit/main/docs/tutorials/adding-minecraft-server.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Adding minecraft server",id:"adding-minecraft-server"},sidebar:"tutorialSidebar",previous:{title:"Plugin's config.yml",permalink:"/docs/plugin/plugin-config-yaml"},next:{title:"Custom Navbar",permalink:"/docs/tutorials/custom-navbar"}},p={},u=[{value:"Adding minecraft server on Web",id:"adding-minecraft-server-on-web",level:2},{value:"1. Go to <code>Servers</code> page from Admin sidebar and click on <code>Add Server</code> button.",id:"1-go-to-servers-page-from-admin-sidebar-and-click-on-add-server-button",level:4},{value:"2. Fill in your server details",id:"2-fill-in-your-server-details",level:4},{value:"3. Save it",id:"3-save-it",level:4},{value:"Adding MineTrax Plugin to Server",id:"adding-minetrax-plugin-to-server",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Notice")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In this tutorial we are going to add a minecraft server (spigot/bukkit etc)."),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("em",{parentName:"p"},"This is not tutorial for adding Bungee/Proxy server as adding it is straight forward and don't require plugin connection.")))),(0,a.kt)("p",null,"To track a server you need to add it from Admin section."),(0,a.kt)("p",null,"If you want to track statistics of your server or want to use the in-game chat feature, you need to add your server to web first."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"We have to add all servers we want to track. (Just adding a proxy will not work)")),(0,a.kt)("p",null,"To add a server to minetrax we have to follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First we add the server details in web."),(0,a.kt)("li",{parentName:"ol"},"Then we install the plugin on our minecraft server and configure it.")),(0,a.kt)("h2",{id:"adding-minecraft-server-on-web"},"Adding minecraft server on Web"),(0,a.kt)("h4",{id:"1-go-to-servers-page-from-admin-sidebar-and-click-on-add-server-button"},"1. Go to ",(0,a.kt)("inlineCode",{parentName:"h4"},"Servers")," page from Admin sidebar and click on ",(0,a.kt)("inlineCode",{parentName:"h4"},"Add Server")," button."),(0,a.kt)("h4",{id:"2-fill-in-your-server-details"},"2. Fill in your server details"),(0,a.kt)("p",null,"Minetrax will need various details to track your server.\nEnter a method of connecting (SFTP/FTP etc) and enter your server credentials."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"All credentials will be encrypted before saving to database."))),(0,a.kt)("p",null,"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Test Connection")," button after filling in credentials. Minetrax will try to connect to your server and check if it is able to connect or not."),(0,a.kt)("p",null,"If successful it will give you more details to fill in like:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Server Name")," -> Server name will be shown to public. Eg: ",(0,a.kt)("inlineCode",{parentName:"li"},"My Awesome Server")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Hostname")," -> You can add anything here which can be shown to public. Eg: ",(0,a.kt)("inlineCode",{parentName:"li"},"play.myserver.com")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"IP Address")," -> This is the IP address of your server."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Join Port")," -> This is the port on which your server is running. Eg: ",(0,a.kt)("inlineCode",{parentName:"li"},"25565")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Query Port")," -> This is query port of your server. Can be found in ",(0,a.kt)("inlineCode",{parentName:"li"},"server.properties")," file. Eg: ",(0,a.kt)("inlineCode",{parentName:"li"},"25565")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Webquery Port")," -> This is the port on which minetrax plugin will be running. This port should be available and not used by any other service. Choose any port which you know is available and you can open it. Eg: ",(0,a.kt)("inlineCode",{parentName:"li"},"25569")," ."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"and other details..."))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"What is Webquery Port?")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Webquery port is port which MineTrax plugin will use to communite with server. This port should be available and not used by any other service. Eg: ",(0,a.kt)("inlineCode",{parentName:"p"},"25569"),"."),(0,a.kt)("p",{parentName:"div"},"WebQuery is used for these features:"),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},"In-game chat."),(0,a.kt)("li",{parentName:"ol"},"Rank sync.")),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("em",{parentName:"p"},"It recommended to keep this port greater than 1024 as non root user cannot open port less than 1024.")),(0,a.kt)("p",{parentName:"div"},"Note: If you are using a Third Party Server Provider, you might need to ask them to allow opening of one extra port for webquery. Most of the time hosting provider already give you few extra port which you can open. You can use one of them as webquery."))),(0,a.kt)("h4",{id:"3-save-it"},"3. Save it"),(0,a.kt)("p",null,"Once you have filled all details, click on save, and it should add your server to web."),(0,a.kt)("p",null,"Next, You need to note down few things which you gonna use while adding the Plugin."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"server-id")," -> This is the id of your server. You can find it in the server listing page. First column ",(0,a.kt)("inlineCode",{parentName:"li"},"Id")," which your server id. (Eg: ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),")."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"api-key")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"api-secret")," -> These are secret keys which is used to encrypt data while communicating with plugin. You can find these in ",(0,a.kt)("inlineCode",{parentName:"li"},"Admin > Settings > Plugin Setting"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"api-host")," -> This is the URL where web is hosted. Eg: ",(0,a.kt)("inlineCode",{parentName:"li"},"https://minetrax.live")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"webquery-port")," -> This is the webquery port which you have set while creating server in web.")),(0,a.kt)("h2",{id:"adding-minetrax-plugin-to-server"},"Adding MineTrax Plugin to Server"),(0,a.kt)("p",null,"Follow steps in this tutorial to add MineTrax plugin to your server."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/plugin/installing-plugin"},"How to Add Plugin to Minecraft Server")),(0,a.kt)("p",null,"After you have configured plugin using above tutorial,\nVerify by going to server listing page in admin section and make sure it show ",(0,a.kt)("inlineCode",{parentName:"p"},"online")," there."),(0,a.kt)("p",null,"Congrats! You have successfully added your server to MineTrax."))}m.isMDXComponent=!0}}]);