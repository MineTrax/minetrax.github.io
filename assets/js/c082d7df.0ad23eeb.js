"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[745],{9752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var s=n(4848),i=n(8453);const o={sidebar_position:60,title:"Custom Themes",id:"custom-themes"},r=void 0,l={id:"web/custom-themes",title:"Custom Themes",description:"MineTrax supports custom themes.",source:"@site/docs/web/custom-themes-feature.md",sourceDirName:"web",slug:"/web/custom-themes",permalink:"/docs/web/custom-themes",draft:!1,unlisted:!1,editUrl:"https://github.com/minetrax/minetrax.github.io/edit/main/docs/web/custom-themes-feature.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60,title:"Custom Themes",id:"custom-themes"},sidebar:"tutorialSidebar",previous:{title:"Custom Footer",permalink:"/docs/web/custom-footer"},next:{title:"Social Logins",permalink:"/docs/web/social-logins"}},a={},h=[{value:"Install Theme",id:"install-theme",level:2},{value:"1. Download Theme",id:"1-download-theme",level:3},{value:"2. Upload Theme to MineTrax",id:"2-upload-theme-to-minetrax",level:3},{value:"3. Update .env variable",id:"3-update-env-variable",level:3},{value:"Develop Custom Themes",id:"develop-custom-themes",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"MineTrax supports custom themes.\nThis guide will walk you through the process of installing and activating a custom theme for your site."}),"\n",(0,s.jsx)(t.h2,{id:"install-theme",children:"Install Theme"}),"\n",(0,s.jsx)(t.h3,{id:"1-download-theme",children:"1. Download Theme"}),"\n",(0,s.jsx)(t.p,{children:"Download the theme zip file from the source you got it from."}),"\n",(0,s.jsx)(t.p,{children:"The theme directory structure should look like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"my-theme-v4/\n\u251c\u2500\u2500 how-to-install.txt               # (optional) Instructions for installing the theme.\n\u251c\u2500\u2500 resources/\n\u2502   \u251c\u2500\u2500 my-shiny-theme/\n\u2502   \u2502   \u251c\u2500\u2500 css/\n\u2502   \u2502   \u251c\u2500\u2500 js/\n\u2502   \u2502   \u251c\u2500\u2500 markdown/\n\u2502   \u2502   \u251c\u2500\u2500 views/\n\u251c\u2500\u2500 public/\n\u2502   \u251c\u2500\u2500 build/\n\u2502   \u2502   \u251c\u2500\u2500 my-shiny-theme/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 assets/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 manifest.json\n\u2502   \u251c\u2500\u2500 theme-assets/                # (optional) If additional assets required by the theme.\n\u2502   \u2502   \u251c\u2500\u2500 my-shiny-theme/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 images/\n"})}),"\n",(0,s.jsx)(t.h3,{id:"2-upload-theme-to-minetrax",children:"2. Upload Theme to MineTrax"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Connect to your server using any SFTP client like ",(0,s.jsx)(t.a,{href:"https://www.bitvise.com/ssh-client-download",children:"Bitvise SSH Client"})," or ",(0,s.jsx)(t.a,{href:"https://mobaxterm.mobatek.net/download.html",children:"MobaXterm"}),", or any other SFTP client using your SSH credentials."]}),"\n",(0,s.jsxs)(t.li,{children:["Navigate to your MineTrax installation directory. Usually, it's located at ",(0,s.jsx)(t.code,{children:"/var/www/minetrax"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Upload the theme zip file to some temp directory and extract it there."}),"\n",(0,s.jsxs)(t.li,{children:["Copy the ",(0,s.jsx)(t.code,{children:"resources/my-shiny-theme"})," directory to the ",(0,s.jsx)(t.code,{children:"resources"})," directory of your MineTrax project."]}),"\n",(0,s.jsxs)(t.li,{children:["Copy the ",(0,s.jsx)(t.code,{children:"public/build/my-shiny-theme"})," directory to the ",(0,s.jsx)(t.code,{children:"public/build"})," directory of your MineTrax project."]}),"\n",(0,s.jsxs)(t.li,{children:["Copy any additional assets if theme requires. Eg: ",(0,s.jsx)(t.code,{children:"public/theme-assets/my-shiny-theme"})," directory to the ",(0,s.jsx)(t.code,{children:"public/theme-assets"})," directory of your MineTrax project."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"After uploading, the directory structure will look like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"/var/www/minetrax/\n\u251c\u2500\u2500 resources/\n\u2502   \u251c\u2500\u2500 my-shiny-theme/\n\u2502   \u2502   \u251c\u2500\u2500 css/\n\u2502   \u2502   \u251c\u2500\u2500 js/\n\u2502   \u2502   \u251c\u2500\u2500 markdown/\n\u2502   \u2502   \u251c\u2500\u2500 views/\n\u2502   \u251c\u2500\u2500 default/               # Default theme that comes with MineTrax.\n\u2502   \u2502   \u251c\u2500\u2500 css/\n\u2502   \u2502   \u251c\u2500\u2500 js/\n\u2502   \u2502   \u251c\u2500\u2500 markdown/\n\u2502   \u2502   \u251c\u2500\u2500 views/\n\u251c\u2500\u2500 public/\n\u2502   \u251c\u2500\u2500 build/\n\u2502   \u2502   \u251c\u2500\u2500 my-shiny-theme/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 assets/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 manifest.json\n\u2502   \u251c\u2500\u2500 theme-assets/                # (optional) If additional assets required by the theme.\n\u2502   \u2502   \u251c\u2500\u2500 my-shiny-theme/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 images/\n...\n"})}),"\n",(0,s.jsx)(t.h3,{id:"3-update-env-variable",children:"3. Update .env variable"}),"\n",(0,s.jsxs)(t.p,{children:["Open your ",(0,s.jsx)(t.code,{children:".env"})," file and update the ",(0,s.jsx)(t.code,{children:"APP_THEME"})," variable to the name of your new theme."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, if the theme you uploaded is named ",(0,s.jsx)(t.code,{children:"my-shiny-theme"})," update the ",(0,s.jsx)(t.code,{children:"APP_THEME"})," variable like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",metastring:'title=".env"',children:"APP_THEME=my-shiny-theme\n"})}),"\n",(0,s.jsx)(t.p,{children:"Finally run the following command so that the changes are reflected in the application:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cd /var/www/minetrax\nsh update.sh\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Visit your site and you should see the new theme applied."})}),"\n",(0,s.jsx)(t.admonition,{title:"Addtional Steps",type:"info",children:(0,s.jsxs)(t.p,{children:["Some themes may require additional steps to be followed (eg: uploading some file to ",(0,s.jsx)(t.code,{children:"public/theme-assets"})," folder). Check the theme documentation for more information."]})}),"\n",(0,s.jsx)(t.h2,{id:"develop-custom-themes",children:"Develop Custom Themes"}),"\n",(0,s.jsxs)(t.p,{children:["Check out the guide on how to develop your own custom themes for MineTrax ",(0,s.jsx)(t.a,{href:"../development/develop-custom-themes",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["or join our ",(0,s.jsx)(t.a,{href:"https://discord.gg/Hzfj27k",children:"Discord"})," to find new themes or ask for theme development services."]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);