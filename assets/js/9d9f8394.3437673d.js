"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[9360],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9222:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:31,title:"Troubleshooting",id:"troubleshooting"},l=void 0,u={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"This document covers some known issues and the process to debug and fix them.",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/edit/main/docs/troubleshooting.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31,title:"Troubleshooting",id:"troubleshooting"},sidebar:"tutorialSidebar",previous:{title:"Upgrade Guide",permalink:"/docs/upgrade"},next:{title:"Screenshots",permalink:"/docs/screenshots"}},p={},c=[{value:"1. laravel.log permission issue.",id:"1-laravellog-permission-issue",level:3},{value:"2. Out of Memory Error while Building Frontend Assets.",id:"2-out-of-memory-error-while-building-frontend-assets",level:3}],m={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document covers some known issues and the process to debug and fix them."),(0,i.kt)("h3",{id:"1-laravellog-permission-issue"},"1. laravel.log permission issue."),(0,i.kt)("p",null,"If you get some error like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Error in exception handler: The stream or file "/var/www/minetrax/app/storage/logs/laravel.log" could not be opened: failed to open stream: Permission denied in /var/www/minetrax/bootstrap/compiled.php:8423\n')),(0,i.kt)("p",null,"It is because of missing permission required to write logs.\nYou need to make sure the ownership of the files belongs to the user who is running web server (in most cases its www-data).\nGive the permission by running below command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"chown -R www-data:www-data /var/www/minetrax/storage\nchmod -R 775 /var/www/minetrax/storage\n")),(0,i.kt)("h3",{id:"2-out-of-memory-error-while-building-frontend-assets"},"2. Out of Memory Error while Building Frontend Assets."),(0,i.kt)("p",null,"Building frontend assets(",(0,i.kt)("inlineCode",{parentName:"p"},"npm run prod"),") is memory intensive task. If your server RAM where web is hosted is low (<2GB), the build process might get failed with message like ",(0,i.kt)("inlineCode",{parentName:"p"},"Killed")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ERR_WORKER_OUT_OF_MEMORY"),"."),(0,i.kt)("p",null,"In such cases, you need to do two things."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Increase node memory limit.\nRun this command"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'export NODE_OPTIONS="--max-old-space-size=8192"\n')),(0,i.kt)("p",{parentName:"li"},"This will increase node memory limit for your current session.\n",(0,i.kt)("em",{parentName:"p"},"You will have to run above for every new SSH Terminal you open to build frontend."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add Swap space to your server if there is none already.\nFollow this tutorial to add Swap space: ",(0,i.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-20-04"},"https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-20-04")))))}d.isMDXComponent=!0}}]);