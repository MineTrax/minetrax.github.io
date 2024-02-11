"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[5323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:100,title:"Backup Site",id:"backup"},o=void 0,l={unversionedId:"web/backup",id:"web/backup",title:"Backup Site",description:"You can backup your minetrax site to prevent data loss. This will also be helpful if you want to move your site to another server or if you want to restore your site to a previous state.",source:"@site/docs/web/backup-feature.md",sourceDirName:"web",slug:"/web/backup",permalink:"/docs/web/backup",draft:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/edit/main/docs/web/backup-feature.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100,title:"Backup Site",id:"backup"},sidebar:"tutorialSidebar",previous:{title:"WebSocket Options",permalink:"/docs/web/websocket-options"},next:{title:".env Config File",permalink:"/docs/web/dot-env-file"}},s={},c=[{value:"Enable Backup",id:"enable-backup",level:2},{value:"Storing Backup in S3",id:"storing-backup-in-s3",level:2},{value:"Storing Backup in SFTP Server",id:"storing-backup-in-sftp-server",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can backup your minetrax site to prevent data loss. This will also be helpful if you want to move your site to another server or if you want to restore your site to a previous state."),(0,r.kt)("p",null,"MineTrax backup feature will backup the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Database (Your MySQL database)"),(0,r.kt)("li",{parentName:"ul"},"Files (All files in the minetrax installation directory. Eg: ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/www/minetrax"),")")),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"IMPORTANT")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"After changing any environment variable, make sure to run ",(0,r.kt)("inlineCode",{parentName:"p"},"sh update.sh")," to apply the changes."))),(0,r.kt)("h2",{id:"enable-backup"},"Enable Backup"),(0,r.kt)("p",null,"To enable backup, you need to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"BACKUP_ENABLED")," environment variable to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".\nYou can do this by editing the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=.env",title:".env"},'BACKUP_ENABLED=true\n\n# OTHER BACKUP CONFIGURATIONS\n# It is recommended to keep it as it is.\nBACKUP_APP_NAME="${APP_NAME}-backup" \n# Disk where backup should be stored. Available Options: local, sftp, s3-private\nBACKUP_DISK=local \n# If you want to encrypt the archieve with a password\nBACKUP_ARCHIVE_PASSWORD=null \n# If you want to email after backup is successful or failed. Only works if SMTP is configured.\nBACKUP_NOTIFICATION_EMAIL=youremail@gmail.com \n# Total size in MB that all combined backup should not exceed. If it exceeds, old backup will be deleted. Default to 5GB.\nBACKUP_QUOTA_IN_MB=5000\n')),(0,r.kt)("p",null,"New backup will be created daily and will be stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"storage/app/${APP_NAME}-backup")," directory."),(0,r.kt)("h2",{id:"storing-backup-in-s3"},"Storing Backup in S3"),(0,r.kt)("p",null,"You can store your backup in S3. To do this, you need to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"BACKUP_DISK")," environment variable to ",(0,r.kt)("inlineCode",{parentName:"p"},"s3-private"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=.env",title:".env"},"BACKUP_DISK=s3-private\n")),(0,r.kt)("p",null,"For this to work, you need create a S3 bucket and update the following environment variables in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file to match your S3 bucket details. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=.env",title:".env"},"# Your AWS Access Key (with S3 access)\nAWS_ACCESS_KEY_ID=your-aws-access-key\n# Your AWS Secret Key\nAWS_SECRET_ACCESS_KEY=your-aws-secret-key\n# Your S3 Bucket Region\nAWS_DEFAULT_REGION=your-bucket-region\n# Bucket name of S3 Public Bucket\nAWS_BUCKET=public-bucket-name\n# Bucket name of S3 Private Bucket\nAWS_PRIVATE_BUCKET=private-bucket-name\n# If you want to use path style endpoint. Default to false.\nAWS_USE_PATH_STYLE_ENDPOINT=false\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can set ",(0,r.kt)("inlineCode",{parentName:"p"},"AWS_BUCKET")," to anything dummy since it is not used for private backup. (Public bucket is used for storing of public files in base you want to use S3 for storing of public files like profile pictures, etc.) "))),(0,r.kt)("h2",{id:"storing-backup-in-sftp-server"},"Storing Backup in SFTP Server"),(0,r.kt)("p",null,"You can store your backup in a SFTP server. To do this, you need to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"BACKUP_DISK")," environment variable to ",(0,r.kt)("inlineCode",{parentName:"p"},"sftp"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=.env",title:".env"},"BACKUP_DISK=sftp\n")),(0,r.kt)("p",null,"For this to work, you need to update the following environment variables in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file to match your SFTP server details. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=.env",title:".env"},"# IP or Hostname of the SFTP server\nSFTP_DISK_HOST=sftp.example.com\n# Username to login\nSFTP_DISK_USERNAME=root\n# Password\nSFTP_DISK_PASSWORD=password\n# SFTP Server Port\nSFTP_DISK_PORT=22\n")))}u.isMDXComponent=!0}}]);