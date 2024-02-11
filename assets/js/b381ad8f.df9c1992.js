"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[2941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),g=i,h=f["".concat(s,".").concat(g)]||f[g]||u[g]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:110,title:"Change Player Skin",id:"change-player-skin"},o=void 0,l={unversionedId:"web/change-player-skin",id:"web/change-player-skin",title:"Change Player Skin",description:"Using this feature, users can change their Minecraft player skin from the MineTrax website. This feature requires SkinsRestorer plugin to be installed on your Minecraft server.",source:"@site/docs/web/change-player-skin-feature.md",sourceDirName:"web",slug:"/web/change-player-skin",permalink:"/docs/web/change-player-skin",draft:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/edit/main/docs/web/change-player-skin-feature.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110,title:"Change Player Skin",id:"change-player-skin"},sidebar:"tutorialSidebar",previous:{title:".env Config File",permalink:"/docs/web/dot-env-file"},next:{title:"Hero Particle Effects",permalink:"/docs/web/hero-particle-effects"}},s={},c=[{value:"Enable Skin Change Feature",id:"enable-skin-change-feature",level:2},{value:"Per Server Configuration",id:"per-server-configuration",level:2},{value:"Permissions",id:"permissions",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Using this feature, users can change their Minecraft player skin from the MineTrax website. This feature requires SkinsRestorer plugin to be installed on your Minecraft server."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ChangePlayerSkin",src:n(5587).Z,width:"1878",height:"897"})),(0,i.kt)("h2",{id:"enable-skin-change-feature"},"Enable Skin Change Feature"),(0,i.kt)("p",null,"This feature is enabled by default. You can change as per your need by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYER_SKIN_CHANGER_ENABLED")," environment variable to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=.env",title:".env"},"PLAYER_SKIN_CHANGER_ENABLED=true\n\n# Cooldown in seconds for changing skin. Default to 60 seconds. (won't apply to staff members)\nPLAYER_SKIN_CHANGER_COOLDOWN_IN_SECONDS=60\n")),(0,i.kt)("p",null,"Set it to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," to globally disable this feature for all servers."),(0,i.kt)("h2",{id:"per-server-configuration"},"Per Server Configuration"),(0,i.kt)("p",null,"MineTrax let you configure the skin change feature for each server individually. While creating or editing a server, you can enable or disable the skin change feature for that server."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/tbu3AaO.png",alt:"Img"})),(0,i.kt)("p",null,"When player changes their skin from the website, it will be trigger on all the servers where the skin change feature is enabled."),(0,i.kt)("h2",{id:"permissions"},"Permissions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"change any_player_skin")," - Give this permission to the staff role to allow them to change any player's skin.")))}u.isMDXComponent=!0},5587:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/change-player-skin-7efda047b3ebd47b3e95fbdac24cd83a.png"}}]);