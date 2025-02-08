"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[1037],{2026:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"upgrade","title":"Upgrade Guide","description":"This document covers the process of upgrading MineTrax from older version to latest.","source":"@site/docs/upgrade.mdx","sourceDirName":".","slug":"/upgrade","permalink":"/docs/upgrade","draft":false,"unlisted":false,"editUrl":"https://github.com/minetrax/minetrax.github.io/edit/main/docs/upgrade.mdx","tags":[],"version":"current","sidebarPosition":100,"frontMatter":{"sidebar_position":100,"title":"Upgrade Guide","id":"upgrade"},"sidebar":"tutorialSidebar","previous":{"title":"Develop Custom Themes","permalink":"/docs/development/develop-custom-themes"},"next":{"title":"Troubleshooting","permalink":"/docs/troubleshooting"}}');var s=r(4848),i=r(8453),a=r(1470),l=r(9365);const d={sidebar_position:100,title:"Upgrade Guide",id:"upgrade"},o=void 0,c={},h=[{value:"Supported Versions",id:"supported-versions",level:2},{value:"Automatic Upgrading Web",id:"automatic-upgrading-web",level:2},{value:"AutoInstaller or Manually",id:"autoinstaller-or-manually",level:3},{value:"Docker",id:"docker",level:3},{value:"Manually Upgrading Web",id:"manually-upgrading-web",level:2},{value:"1. Enter Maintenance Mode",id:"1-enter-maintenance-mode",level:3},{value:"2. Clear compiled template &amp; cache",id:"2-clear-compiled-template--cache",level:3},{value:"3. Take the latest pull",id:"3-take-the-latest-pull",level:3},{value:"4. Fix Permissions",id:"4-fix-permissions",level:3},{value:"4. Update the composer",id:"4-update-the-composer",level:3},{value:"5. Run the migrations",id:"5-run-the-migrations",level:3},{value:"6. Restart the Queue Listeners",id:"6-restart-the-queue-listeners",level:3},{value:"7. Fix Permissions",id:"7-fix-permissions",level:3},{value:"8. Exit the Maintenance Mode",id:"8-exit-the-maintenance-mode",level:3},{value:"Upgrading Plugin",id:"upgrading-plugin",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This document covers the process of upgrading MineTrax from older version to latest.\r\nIt is highly recommened to always keep your version updated to get latest features and bug fixes."}),"\n",(0,s.jsx)(n.h2,{id:"supported-versions",children:"Supported Versions"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Web Version"}),(0,s.jsx)(n.th,{children:"Plugin Version"}),(0,s.jsx)(n.th,{children:"Supported"}),(0,s.jsx)(n.th,{children:"PHP Versions"}),(0,s.jsx)(n.th,{children:"Minecraft Versions"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2.0.0"}),(0,s.jsx)(n.td,{children:"2.0.0"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"8.1+"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"1.16"}),", ",(0,s.jsx)(n.code,{children:"1.17"}),", ",(0,s.jsx)(n.code,{children:"1.18"}),", ",(0,s.jsx)(n.code,{children:"1.19"}),", ",(0,s.jsx)(n.code,{children:"1.20"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2.1.0"}),(0,s.jsx)(n.td,{children:"2.0.0"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"8.1+"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"1.16"}),", ",(0,s.jsx)(n.code,{children:"1.17"}),", ",(0,s.jsx)(n.code,{children:"1.18"}),", ",(0,s.jsx)(n.code,{children:"1.19"}),", ",(0,s.jsx)(n.code,{children:"1.20"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3.1.0"}),(0,s.jsx)(n.td,{children:"3.0.0"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"8.1+"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"1.16"}),", ",(0,s.jsx)(n.code,{children:"1.17"}),", ",(0,s.jsx)(n.code,{children:"1.18"}),", ",(0,s.jsx)(n.code,{children:"1.19"}),", ",(0,s.jsx)(n.code,{children:"1.20"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3.5.0"}),(0,s.jsx)(n.td,{children:"3.5.0"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"8.1+"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"1.16"}),", ",(0,s.jsx)(n.code,{children:"1.17"}),", ",(0,s.jsx)(n.code,{children:"1.18"}),", ",(0,s.jsx)(n.code,{children:"1.19"}),", ",(0,s.jsx)(n.code,{children:"1.20"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4.3.0"}),(0,s.jsx)(n.td,{children:"4.0.2"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"8.1+"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"1.16"}),", ",(0,s.jsx)(n.code,{children:"1.17"}),", ",(0,s.jsx)(n.code,{children:"1.18"}),", ",(0,s.jsx)(n.code,{children:"1.19"}),", ",(0,s.jsx)(n.code,{children:"1.20"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5.1.0"}),(0,s.jsx)(n.td,{children:"5.0.0"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"8.1+"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"1.16"}),", ",(0,s.jsx)(n.code,{children:"1.17"}),", ",(0,s.jsx)(n.code,{children:"1.18"}),", ",(0,s.jsx)(n.code,{children:"1.19"}),", ",(0,s.jsx)(n.code,{children:"1.20"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"6.0"}),(0,s.jsx)(n.td,{children:"6.0"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"8.1+"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"1.16"}),", ",(0,s.jsx)(n.code,{children:"1.17"}),", ",(0,s.jsx)(n.code,{children:"1.18"}),", ",(0,s.jsx)(n.code,{children:"1.19"}),", ",(0,s.jsx)(n.code,{children:"1.20"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)("b",{children:"7.0"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("b",{children:"7.0"})}),(0,s.jsx)(n.td,{children:"\u2705"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"8.3+"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"1.16"}),", ",(0,s.jsx)(n.code,{children:"1.17"}),", ",(0,s.jsx)(n.code,{children:"1.18"}),", ",(0,s.jsx)(n.code,{children:"1.19"}),", ",(0,s.jsx)(n.code,{children:"1.20"}),", ",(0,s.jsx)(n.code,{children:"1.21"})]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"You can update your Web using either Automatic or Manual method."}),"\n",(0,s.jsx)(n.h2,{id:"automatic-upgrading-web",children:"Automatic Upgrading Web"}),"\n",(0,s.jsx)(n.h3,{id:"autoinstaller-or-manually",children:"AutoInstaller or Manually"}),"\n",(0,s.jsxs)(n.p,{children:["When you have installed minetrax using ",(0,s.jsx)(n.code,{children:"AutoInstaller"})," or ",(0,s.jsx)(n.code,{children:"Manually"})," you can use this method to upgrade your web to latest version.\r\nUsing this mode all you have to do is take latest pull and run a script."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd /var/www/minetrax\r\nbash update.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note: It should automatically update everything for you. If it fails you will have to manually handle update using below manual method."}),"\n",(0,s.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,s.jsxs)(n.p,{children:["When you have installed minetrax using ",(0,s.jsx)(n.code,{children:"Docker"})," you can use this method to upgrade your web to latest version.\r\nIf you installed minetrax using docker then cd into minetrax directory and run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd /var/www/minetrax\r\nbash docker-run.sh down\r\nbash docker-run.sh up\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It should automatically update everything for you. Check ",(0,s.jsx)(n.code,{children:"bash docker-run.sh logs"})," for any issue."]}),"\n",(0,s.jsx)(n.h2,{id:"manually-upgrading-web",children:"Manually Upgrading Web"}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["Upgrade guide for web consider ",(0,s.jsx)(n.code,{children:"Ubuntu"})," as operating system. If you using some other OS you might have to tweak some commands accordingly."]}),(0,s.jsxs)(n.p,{children:["Only when you installed using ",(0,s.jsx)(n.code,{children:"AuthInstaller"})," or ",(0,s.jsx)(n.code,{children:"Manually"})]})]}),"\n",(0,s.jsx)(n.p,{children:"Follow the process step by step to upgrade web to latest version."}),"\n",(0,s.jsx)(n.h3,{id:"1-enter-maintenance-mode",children:"1. Enter Maintenance Mode"}),"\n",(0,s.jsx)(n.p,{children:"Maintenance mode will disable the web for end user so we don't expose any unexpected error or logs to them."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd /var/www/minetrax\r\n\r\nphp artisan down\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-clear-compiled-template--cache",children:"2. Clear compiled template & cache"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd /var/www/minetrax\r\n\r\nphp artisan cache:clear\r\nphp artisan view:clear\r\nphp artisan config:clear\r\nphp artisan clear\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-take-the-latest-pull",children:"3. Take the latest pull"}),"\n",(0,s.jsx)(n.p,{children:"Take latest pull from the Github web repo."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd /var/www/minetrax\r\n\r\ngit pull\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.p,{children:"If you have made any changes to the code, this process might fail and you have to revert back your changes before taking the pull. If the process fail then stash out your local changes and try to pull again. Make sure to backup your changes so you can add them back."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd /var/www/minetrax\r\n\r\ngit stash\r\ngit pull\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"4-fix-permissions",children:"4. Fix Permissions"}),"\n",(0,s.jsx)(n.p,{children:"Once latest changes are pulled fix back the permissions for files."}),"\n",(0,s.jsxs)(a.A,{groupId:"apache-nginx",children:[(0,s.jsx)(l.A,{value:"apache",label:"Apache2",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# If using NGINX or Apache (not on CentOS):\r\nchown -R $USER:www-data /var/www/minetrax/*\r\n\r\n# or, If using Apache on CentOS\r\nchown -R $USER:apache /var/www/minetrax/*\n"})})}),(0,s.jsx)(l.A,{value:"nginx",label:"Nginx",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# If using NGINX or Apache (not on CentOS):\r\nchown -R $USER:www-data /var/www/minetrax/*\r\n\r\n# or, If using NGINX on CentOS:\r\nchown -R $USER:nginx /var/www/minetrax/*\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Change permission for ",(0,s.jsx)(n.code,{children:"storage"})," and ",(0,s.jsx)(n.code,{children:"bootstrap/cache"})," folders"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd /var/www/minetrax\r\nchmod -R 775 storage/* bootstrap/cache\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["In some rare cases if you are getting error like ",(0,s.jsx)(n.code,{children:'The stream or file "/var/www/minetrax/storage/logs/laravel.log" could not be opened: failed to open stream: Permission denied'})," then you might have to change the permission of ",(0,s.jsx)(n.code,{children:"storage/logs"})," folder to ",(0,s.jsx)(n.code,{children:"777"})," instead of ",(0,s.jsx)(n.code,{children:"775"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd /var/www/minetrax\r\nchmod -R 777 storage/* bootstrap/cache\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"4-update-the-composer",children:"4. Update the composer"}),"\n",(0,s.jsx)(n.p,{children:"Install the latest dependencies changes from composer"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd /var/www/minetrax\r\n\r\ncomposer install\n"})}),"\n",(0,s.jsx)(n.h3,{id:"5-run-the-migrations",children:"5. Run the migrations"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd /var/www/minetrax\r\n\r\nphp artisan migrate --force --seed\n"})}),"\n",(0,s.jsx)(n.h3,{id:"6-restart-the-queue-listeners",children:"6. Restart the Queue Listeners"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd /var/www/minetrax\r\n\r\nphp artisan queue:restart\n"})}),"\n",(0,s.jsx)(n.h3,{id:"7-fix-permissions",children:"7. Fix Permissions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"chown -R www-data:www-data /var/www/minetrax/*\n"})}),"\n",(0,s.jsx)(n.h3,{id:"8-exit-the-maintenance-mode",children:"8. Exit the Maintenance Mode"}),"\n",(0,s.jsx)(n.p,{children:"Everything is done! Now lets turn back the site up for everyone."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd /var/www/minetrax\r\n\r\nphp artisan up\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Note on Breaking changes",type:"danger",children:(0,s.jsx)(n.p,{children:"Some version upgrade might introduce breaking changes. If so, it will be mentioned in the release note and discord.\r\nMake sure to read the release note on github and discord for any additional step required for upgrading to version with breaking changes."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Web Release Notes: ",(0,s.jsx)(n.a,{href:"https://github.com/MineTrax/minetrax/releases",children:"https://github.com/MineTrax/minetrax/releases"})]})}),"\n",(0,s.jsx)(n.h2,{id:"upgrading-plugin",children:"Upgrading Plugin"}),"\n",(0,s.jsxs)(n.p,{children:["Upgrading your plugin is as simple as just downloading the latest version of the plugin and replacing old ",(0,s.jsx)(n.code,{children:"Minetrax.jar"})," file with the new one."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Download Link: ",(0,s.jsx)(n.a,{href:"https://github.com/MineTrax/plugin/releases",children:"https://github.com/MineTrax/plugin/releases"})]})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Make sure to replace the file and not keep two version of it in plugins directory.\r\nEg: If you have ",(0,s.jsx)(n.code,{children:"Minetrax-1.0.2.jar"})," and upgrading to ",(0,s.jsx)(n.code,{children:"Minetrax-1.0.3.jar"})," make sure to delete the old file i.e., ",(0,s.jsx)(n.code,{children:"Minetrax-1.0.2.jar"}),"."]})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var t=r(4164);const s={tabItem:"tabItem_Ymn6"};var i=r(4848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(6540),s=r(4164),i=r(3104),a=r(6347),l=r(205),d=r(7485),o=r(1682),c=r(679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function x(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,i=u(e),[a,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[o,h]=p({queryString:r,groupId:s}),[j,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,c.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),g=(()=>{const e=o??j;return x({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{g&&d(g)}),[g]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=r(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(4848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),c=e=>{const n=e.currentTarget,r=d.indexOf(n),s=l[r].value;s!==t&&(o(n),a(s))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:h,onClick:c,...i,className:(0,s.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function f(e){let{lazy:n,children:r,selectedValue:i}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(f,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,b.jsx)(w,{...e,children:h(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var t=r(6540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);