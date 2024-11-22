"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[2206],{9826:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"web/banwarden-feature","title":"BanWarden Feature","description":"Index","source":"@site/docs/web/banwarden-feature.md","sourceDirName":"web","slug":"/web/banwarden-feature","permalink":"/docs/web/banwarden-feature","draft":false,"unlisted":false,"editUrl":"https://github.com/minetrax/minetrax.github.io/edit/main/docs/web/banwarden-feature.md","tags":[],"version":"current","sidebarPosition":119,"frontMatter":{"sidebar_position":119,"title":"BanWarden Feature","id":"banwarden-feature"},"sidebar":"tutorialSidebar","previous":{"title":"Change Player Password","permalink":"/docs/web/change-player-password"},"next":{"title":"Polls Feature","permalink":"/docs/web/polls-feature"}}');var t=i(4848),a=i(8453);const r={sidebar_position:119,title:"BanWarden Feature",id:"banwarden-feature"},l=void 0,d={},o=[{value:"Supported Punishment Plugins",id:"supported-punishment-plugins",level:2},{value:"How to enable BanWarden",id:"how-to-enable-banwarden",level:2},{value:"Step 1: Enable in plugin settings",id:"step-1-enable-in-plugin-settings",level:3},{value:"Step 2: Enable in Web",id:"step-2-enable-in-web",level:3},{value:"Step 2.1: Enable in .env file",id:"step-21-enable-in-env-file",level:4},{value:"Step 2.2: Enable in the Server Settings",id:"step-22-enable-in-the-server-settings",level:4},{value:"Step 3: (Optional) Sync old punishments",id:"step-3-optional-sync-old-punishments",level:3},{value:"Other BanWarden Configurations",id:"other-banwarden-configurations",level:2},{value:"BanWarden AI Score",id:"banwarden-ai-score",level:3},{value:"BanWarden Evidence",id:"banwarden-evidence",level:3},{value:"BanWarden .env Configurations",id:"banwarden-env-configurations",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Index",src:i(9875).A+"",width:"2523",height:"1449"})}),"\n",(0,t.jsx)(n.p,{children:"BanWarden feature allows you to keep track of all the punishments (ban, mute, warn, kick) in your servers. It also allows you to manage the punishments and view the details of the punishments."}),"\n",(0,t.jsx)(n.p,{children:"Key Features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"View all the punishments in your server."}),"\n",(0,t.jsx)(n.li,{children:"View the details of the punishment."}),"\n",(0,t.jsx)(n.li,{children:"Manage the punishments (add, remove). (not implemented yet)"}),"\n",(0,t.jsx)(n.li,{children:"Attach evidence to the punishment."}),"\n",(0,t.jsx)(n.li,{children:"AI scoring for the punishment."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"supported-punishment-plugins",children:"Supported Punishment Plugins"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.spigotmc.org/resources/litebans.3715/",children:"LiteBans"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.spigotmc.org/resources/libertybans.81063/",children:"LibertyBans"})}),"\n",(0,t.jsx)(n.li,{children:"more coming soon..."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-enable-banwarden",children:"How to enable BanWarden"}),"\n",(0,t.jsx)(n.p,{children:"Follow the steps below to enable BanWarden:"}),"\n",(0,t.jsx)(n.h3,{id:"step-1-enable-in-plugin-settings",children:"Step 1: Enable in plugin settings"}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"config.yml"})," file in the MineTrax plugin folder and set ",(0,t.jsx)(n.code,{children:"banwarden: true"})," if it is not already set."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"banwarden: true\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-2-enable-in-web",children:"Step 2: Enable in Web"}),"\n",(0,t.jsx)(n.p,{children:"In web, BanWarden can be enabled/disabled in two places:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Globally in the ",(0,t.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,t.jsx)(n.li,{children:"On a per-server basis in the Server Settings."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"step-21-enable-in-env-file",children:"Step 2.1: Enable in .env file"}),"\n",(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(n.code,{children:".env"})," file in the root of the project and set ",(0,t.jsx)(n.code,{children:"BANWARDEN_ENABLED=true"})," if it is not already set."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-env",children:"BANWARDEN_ENABLED=true\n"})}),"\n",(0,t.jsx)(n.h4,{id:"step-22-enable-in-the-server-settings",children:"Step 2.2: Enable in the Server Settings"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Go to Admin Panel -> Servers -> Edit Server"}),"\n",(0,t.jsxs)(n.li,{children:["Check the ",(0,t.jsx)(n.code,{children:"BanWarden"})," checkbox and click on the ",(0,t.jsx)(n.code,{children:"Save"})," button."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-3-optional-sync-old-punishments",children:"Step 3: (Optional) Sync old punishments"}),"\n",(0,t.jsx)(n.p,{children:"If you have old punishments that you want to sync with BanWarden, you can do so by running the following command in your minecraft server console:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"/minetrax banwarden:sync\n"})}),"\n",(0,t.jsx)(n.h2,{id:"other-banwarden-configurations",children:"Other BanWarden Configurations"}),"\n",(0,t.jsx)(n.h3,{id:"banwarden-ai-score",children:"BanWarden AI Score"}),"\n",(0,t.jsxs)(n.p,{children:["BanWarden uses AI to score the punishments. You can enable or disable this feature using ",(0,t.jsx)(n.code,{children:"BANWARDEN_AI_INSIGHTS_ENABLED"})," .env variable."]}),"\n",(0,t.jsx)(n.p,{children:"This feature also requires OpenAI API key set."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"BANWARDEN_AI_INSIGHTS_ENABLED=true\nOPENAI_API_KEY=YOUR_OPENAI_API_KEY\n"})}),"\n",(0,t.jsx)(n.h3,{id:"banwarden-evidence",children:"BanWarden Evidence"}),"\n",(0,t.jsxs)(n.p,{children:["You can allow your staff to attach evidence to a punishment by giving them the permission ",(0,t.jsx)(n.code,{children:"create banwarden_punishments_evidence"})," & ",(0,t.jsx)(n.code,{children:"read create banwarden_punishments_evidence"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Evidence related configurations can be found in the ",(0,t.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,t.jsx)(n.h2,{id:"banwarden-env-configurations",children:"BanWarden .env Configurations"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"# Global enable/disable BanWarden.\nBANWARDEN_ENABLED=true\n# Allow public to see punishment reports. If false then only user with permission `read banwarden_punishments` can view.\nBANWARDEN_SHOW_PUBLIC=true\n# Show masked IP to public.\nBANWARDEN_SHOW_MASKED_IP_PUBLIC=false\n# Which disk to use for storing punishment related stuff like proofs.\nBANWARDEN_MODULE_DISK=private\n# Allowed mimetypes for evidence files.\nBANWARDEN_EVIDENCE_ALLOWED_MIMETYPES=jpg,png,gif,bmp,webp,mp4,avi,mov,mkv,webm,zip,rar\n# Max file size for evidence files in KB.\nBANWARDEN_EVIDENCE_MAX_SIZE_KB=51200\n# Max count of evidence files per punishment.\nBANWARDEN_EVIDENCE_MAX_COUNT=2\n# Banwarden AI Insights\nBANWARDEN_AI_INSIGHTS_ENABLED=true\n# Allow add, delete of punishment from web to staff with permission. (not implemented yet)\nBANWARDEN_ALLOW_CONTROL_FROM_WEB=true\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},9875:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/index-banwarden-2465a00e0a75086f3cca221a8394cc1f.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(6540);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);