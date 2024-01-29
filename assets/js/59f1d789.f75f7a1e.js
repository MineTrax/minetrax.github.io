"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[6256],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=n,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return t?r.createElement(h,o(o({ref:a},p),{},{components:t})):r.createElement(h,o({ref:a},p))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4426:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(7462),n=(t(7294),t(3905));const s={sidebar_position:80,title:"Console Commands",id:"console-commands"},o=void 0,i={unversionedId:"web/console-commands",id:"web/console-commands",title:"Console Commands",description:"This page lists some useful console commands you can run in the terminal to perform various tasks.",source:"@site/docs/web/php-artisan-commands.md",sourceDirName:"web",slug:"/web/console-commands",permalink:"/docs/web/console-commands",draft:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/edit/main/docs/web/php-artisan-commands.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80,title:"Console Commands",id:"console-commands"},sidebar:"tutorialSidebar",previous:{title:"AskDB AI Bot",permalink:"/docs/web/askdb-ai-bot"},next:{title:"WebSocket Options",permalink:"/docs/web/websocket-options"}},l={},c=[{value:"Artisan Commands",id:"artisan-commands",level:2},{value:"Reset Password of a User",id:"reset-password-of-a-user",level:3},{value:"Maintenance Mode",id:"maintenance-mode",level:3},{value:"Clear Cache",id:"clear-cache",level:3},{value:"Clear Config Cache",id:"clear-config-cache",level:3},{value:"Restart Queue Worker",id:"restart-queue-worker",level:3},{value:"Other Commands",id:"other-commands",level:2},{value:"Restart Supervisor",id:"restart-supervisor",level:3},{value:"Restart WebServer",id:"restart-webserver",level:3},{value:"Nginx",id:"nginx",level:4},{value:"Apache",id:"apache",level:4},{value:"Restart MySQL",id:"restart-mysql",level:3},{value:"Restart Redis Server",id:"restart-redis-server",level:3}],p={toc:c};function u(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This page lists some useful console commands you can run in the terminal to perform various tasks."),(0,n.kt)("h2",{id:"artisan-commands"},"Artisan Commands"),(0,n.kt)("p",null,"These commands are executed with ",(0,n.kt)("inlineCode",{parentName:"p"},"php artisan")," command. You run them in the same directory where minetrax is installed.\nEg: If minetrax is installed in ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/www/minetrax"),", then you should run the commands in ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/www/minetrax")," directory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd /var/www/minetrax\nphp artisan COMMAND\n")),(0,n.kt)("h3",{id:"reset-password-of-a-user"},"Reset Password of a User"),(0,n.kt)("p",null,"This command resets the password of a user. This is helpful if you forgot the password of a user and don't have alternative way to reset it's password. It will display the new password in the terminal."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan auth:password:reset USERNAME\n\n# Example\nphp artisan auth:password:reset superadmin\n")),(0,n.kt)("h3",{id:"maintenance-mode"},"Maintenance Mode"),(0,n.kt)("p",null,"This command puts the website in maintenance mode. This is helpful if you want to perform some maintenance tasks on the website. Or you want to prevent users from accessing the website temporarily."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan down\n")),(0,n.kt)("p",null,"To bring the website back online, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan up\n")),(0,n.kt)("h3",{id:"clear-cache"},"Clear Cache"),(0,n.kt)("p",null,"This clear website cache. This can be helpful if you want to see the changes you made to the website immediately. Eg: You changing language file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan cache:clear\n")),(0,n.kt)("h3",{id:"clear-config-cache"},"Clear Config Cache"),(0,n.kt)("p",null,"This clear config cache. Clearing config cache is required when you change the config file. Eg: You change the ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan config:clear\n")),(0,n.kt)("p",null,"You should also cache the config again after clearing the config cache."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan config:clear\nphp artisan config:cache\n")),(0,n.kt)("p",null,"Note: Alternatively, you can run ",(0,n.kt)("inlineCode",{parentName:"p"},"sh update.sh")," and it will clear both cache and config cache."),(0,n.kt)("h3",{id:"restart-queue-worker"},"Restart Queue Worker"),(0,n.kt)("p",null,"This command restarts the queue workers. This can be helpful if your queue workers are stuck or crashed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan queue:restart\n")),(0,n.kt)("h2",{id:"other-commands"},"Other Commands"),(0,n.kt)("h3",{id:"restart-supervisor"},"Restart Supervisor"),(0,n.kt)("p",null,"This command restarts the supervisor. This can be helpful if your queue workers are stuck or crashed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo supervisorctl restart all\n")),(0,n.kt)("p",null,"Check the status of supervisor with the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo supervisorctl status all\n")),(0,n.kt)("h3",{id:"restart-webserver"},"Restart WebServer"),(0,n.kt)("h4",{id:"nginx"},"Nginx"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service nginx restart\nsudo service php8.2-fpm restart\n")),(0,n.kt)("h4",{id:"apache"},"Apache"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service apache2 restart\n")),(0,n.kt)("h3",{id:"restart-mysql"},"Restart MySQL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service mysql restart\n")),(0,n.kt)("h3",{id:"restart-redis-server"},"Restart Redis Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service redis-server restart\n")))}u.isMDXComponent=!0}}]);