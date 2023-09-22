"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[8707],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2360:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const i="tabItem_OmH5";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),r=a(7294),i=a(2389),l=a(7392),o=a(7094),d=a(2466),p=a(6010);const s="tabList_uSqn",m="tabItem_LplD";function u(e){var t,a;const{lazy:i,block:u,defaultValue:c,values:k,groupId:g,className:h}=e,N=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=k??N.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),w=(0,l.l)(v,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===c?c:c??(null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=N[0])?void 0:a.props.value);if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,o.U)(),[C,x]=(0,r.useState)(b),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,d.o5)();if(null!=g){const e=f[g];null!=e&&e!==C&&v.some((t=>t.value===e))&&x(e)}const M=e=>{const t=e.currentTarget,a=O.indexOf(t),n=v[a].value;n!==C&&(T(t),x(n),null!=g&&y(g,n))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]||O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]||O[O.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,p.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":u},h)},v.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:M,onClick:M},i,{className:(0,p.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":C===t})}),a??t)}))),i?(0,r.cloneElement)(N.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function c(e){const t=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},7271:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),i=a(9877),l=a(2360);const o={sidebar_position:100,title:"Upgrade Guide",id:"upgrade"},d=void 0,p={unversionedId:"upgrade",id:"upgrade",title:"Upgrade Guide",description:"",source:"@site/docs/upgrade.mdx",sourceDirName:".",slug:"/upgrade",permalink:"/docs/upgrade",draft:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/edit/main/docs/upgrade.mdx",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100,title:"Upgrade Guide",id:"upgrade"},sidebar:"tutorialSidebar",previous:{title:"Plugin's config.yml",permalink:"/docs/plugin/plugin-config-yaml"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},s={},m=[{value:"Supported Versions",id:"supported-versions",level:2},{value:"Automatic Upgrading Web",id:"automatic-upgrading-web",level:2},{value:"Manually Upgrading Web",id:"manually-upgrading-web",level:2},{value:"1. Enter Maintenance Mode",id:"1-enter-maintenance-mode",level:3},{value:"2. Clear compiled template &amp; cache",id:"2-clear-compiled-template--cache",level:3},{value:"3. Take the latest pull",id:"3-take-the-latest-pull",level:3},{value:"4. Fix Permissions",id:"4-fix-permissions",level:3},{value:"4. Update the composer",id:"4-update-the-composer",level:3},{value:"5. Run the migrations",id:"5-run-the-migrations",level:3},{value:"6. Restart the Queue Listeners",id:"6-restart-the-queue-listeners",level:3},{value:"7. Fix Permissions",id:"7-fix-permissions",level:3},{value:"8. Exit the Maintenance Mode",id:"8-exit-the-maintenance-mode",level:3},{value:"Upgrading Plugin",id:"upgrading-plugin",level:2}],u={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document covers the process of upgrading MineTrax from older version to latest.\nIt is highly recommened to always keep your version updated to get latest features and bug fixes."),(0,r.kt)("h2",{id:"supported-versions"},"Supported Versions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Web Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Plugin Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"PHP Versions"),(0,r.kt)("th",{parentName:"tr",align:null},"Minecraft Versions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.0.5-alpha"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.5-alpha"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8.1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1.16"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.17"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.18"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.19"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.0.6-alpha"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.5-alpha"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8.1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1.16"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.17"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.18"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.19"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.0.7-alpha"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.5-alpha"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8.1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1.16"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.17"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.18"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.19"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.0.8-alpha"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.5-alpha"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8.1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1.16"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.17"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.18"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.19"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.0.13-alpha"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.8-alpha"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8.1+")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1.16"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.17"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.18"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.19"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.20"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8.1+")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1.16"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.17"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.18"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.19"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.20"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8.1+")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1.16"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.17"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.18"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.19"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.20"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3.1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"3.0.0"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8.1+")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1.16"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.17"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.18"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.19"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.20"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("b",null,"3.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("b",null,"3.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8.1+")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1.16"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.17"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.18"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.19"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1.20"))))),(0,r.kt)("p",null,"You can update your Web using either Automatic or Manual method."),(0,r.kt)("h2",{id:"automatic-upgrading-web"},"Automatic Upgrading Web"),(0,r.kt)("p",null,"Using this mode all you have to do is take latest pull and run a script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git pull origin main\nbash update.sh\n")),(0,r.kt)("p",null,"Note: It should automatically update everything for you. If it fails you will have to manually handle update using below manual method."),(0,r.kt)("h2",{id:"manually-upgrading-web"},"Manually Upgrading Web"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Upgrade guide for web consider ",(0,r.kt)("inlineCode",{parentName:"p"},"Ubuntu")," as operating system. If you using some other OS you might have to tweak some commands accordingly."))),(0,r.kt)("p",null,"Follow the process step by step to upgrade web to latest version."),(0,r.kt)("h3",{id:"1-enter-maintenance-mode"},"1. Enter Maintenance Mode"),(0,r.kt)("p",null,"Maintenance mode will disable the web for end user so we don't expose any unexpected error or logs to them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd /var/www/minetrax\n\nphp artisan down\n")),(0,r.kt)("h3",{id:"2-clear-compiled-template--cache"},"2. Clear compiled template & cache"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd /var/www/minetrax\n\nphp artisan cache:clear\nphp artisan view:clear\nphp artisan config:clear\nphp artisan clear\n")),(0,r.kt)("h3",{id:"3-take-the-latest-pull"},"3. Take the latest pull"),(0,r.kt)("p",null,"Take latest pull from the Github web repo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd /var/www/minetrax\n\ngit pull origin main\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you have made any changes to the code, this process might fail and you have to revert back your changes before taking the pull. If the process fail then stash out your local changes and try to pull again. Make sure to backup your changes so you can add them back."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"cd /var/www/minetrax\n\ngit stash\ngit pull origin main\n")))),(0,r.kt)("h3",{id:"4-fix-permissions"},"4. Fix Permissions"),(0,r.kt)("p",null,"Once latest changes are pulled fix back the permissions for files."),(0,r.kt)(i.Z,{groupId:"apache-nginx",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"apache",label:"Apache2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# If using NGINX or Apache (not on CentOS):\nchown -R $USER:www-data /var/www/minetrax/*\n\n# or, If using Apache on CentOS\nchown -R $USER:apache /var/www/minetrax/*\n"))),(0,r.kt)(l.Z,{value:"nginx",label:"Nginx",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# If using NGINX or Apache (not on CentOS):\nchown -R $USER:www-data /var/www/minetrax/*\n\n# or, If using NGINX on CentOS:\nchown -R $USER:nginx /var/www/minetrax/*\n")))),(0,r.kt)("p",null,"Change permission for ",(0,r.kt)("inlineCode",{parentName:"p"},"storage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap/cache")," folders"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /var/www/minetrax\nchmod -R 775 storage/* bootstrap/cache\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In some rare cases if you are getting error like ",(0,r.kt)("inlineCode",{parentName:"p"},'The stream or file "/var/www/minetrax/storage/logs/laravel.log" could not be opened: failed to open stream: Permission denied')," then you might have to change the permission of ",(0,r.kt)("inlineCode",{parentName:"p"},"storage/logs")," folder to ",(0,r.kt)("inlineCode",{parentName:"p"},"777")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"775"),"."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /var/www/minetrax\nchmod -R 777 storage/* bootstrap/cache\n")))),(0,r.kt)("h3",{id:"4-update-the-composer"},"4. Update the composer"),(0,r.kt)("p",null,"Install the latest dependencies changes from composer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd /var/www/minetrax\n\ncomposer install\n")),(0,r.kt)("h3",{id:"5-run-the-migrations"},"5. Run the migrations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd /var/www/minetrax\n\nphp artisan migrate --force --seed\n")),(0,r.kt)("h3",{id:"6-restart-the-queue-listeners"},"6. Restart the Queue Listeners"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd /var/www/minetrax\n\nphp artisan queue:restart\n")),(0,r.kt)("h3",{id:"7-fix-permissions"},"7. Fix Permissions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"chown -R www-data:www-data /var/www/minetrax/*\n")),(0,r.kt)("h3",{id:"8-exit-the-maintenance-mode"},"8. Exit the Maintenance Mode"),(0,r.kt)("p",null,"Everything is done! Now lets turn back the site up for everyone."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd /var/www/minetrax\n\nphp artisan up\n")),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Note on Breaking changes")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Some version upgrade might introduce breaking changes. If so, it will be mentioned in the release note and discord.\nMake sure to read the release note on github and discord for any additional step required for upgrading to version with breaking changes."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Web Release Notes: ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/MineTrax/minetrax/releases"},"https://github.com/MineTrax/minetrax/releases"))),(0,r.kt)("h2",{id:"upgrading-plugin"},"Upgrading Plugin"),(0,r.kt)("p",null,"Upgrading your plugin is as simple as just downloading the latest version of the plugin and replacing old ",(0,r.kt)("inlineCode",{parentName:"p"},"Minetrax.jar")," file with the new one."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Download Link: ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/MineTrax/plugin/releases"},"https://github.com/MineTrax/plugin/releases"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure to replace the file and not keep two version of it in plugins directory.\nEg: If you have ",(0,r.kt)("inlineCode",{parentName:"p"},"Minetrax-1.0.2.jar")," and upgrading to ",(0,r.kt)("inlineCode",{parentName:"p"},"Minetrax-1.0.3.jar")," make sure to delete the old file i.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"Minetrax-1.0.2.jar"),"."))))}c.isMDXComponent=!0}}]);