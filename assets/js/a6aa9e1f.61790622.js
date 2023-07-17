"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[3089],{4118:(e,t,a)=>{a.d(t,{Z:()=>_});var l=a(7294),r=a(6010),n=a(7422),s=a(9960),i=a(5999);const o="sidebar_TMXw",m="sidebarItemTitle_V4zb",c="sidebarItemList_uHd5",u="sidebarItem_spIe",d="sidebarItemLink_eqrF",g="sidebarItemLinkActive_XZSJ";function p(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(o,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(c,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:u},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title)))))))}var h=a(3102);function b(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function E(e){return l.createElement(h.Zo,{component:b,props:e})}var v=a(7524);function f(e){let{sidebar:t}=e;const a=(0,v.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(E,{sidebar:t}):l.createElement(p,{sidebar:t}):null}function _(e){const{sidebar:t,toc:a,children:s,...i}=e,o=t&&t.items.length>0;return l.createElement(n.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(f,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},7329:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(7294),r=a(2263),n=a(4118),s=a(6244),i=a(6299),o=a(833),m=a(5281),c=a(4739),u=a(6010);function d(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.Z)(),{blogDescription:n,blogTitle:s,permalink:i}=t,m="/"===i?a:s;return l.createElement(l.Fragment,null,l.createElement(o.d,{title:m,description:n}),l.createElement(c.Z,{tag:"blog_posts_list"}))}function g(e){const{metadata:t,items:a,sidebar:r}=e;return l.createElement(n.Z,{sidebar:r},a.map((e=>{let{content:t}=e;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},l.createElement(t,null))})),l.createElement(i.Z,{metadata:t}))}function p(e){return l.createElement(o.FG,{className:(0,u.Z)(m.k.wrapper.blogPages,m.k.page.blogListPage)},l.createElement(d,e),l.createElement(g,e))}},6299:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),r=a(5999),n=a(1750);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(n.Z,{permalink:s,title:l.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},6244:(e,t,a)=>{a.d(t,{Z:()=>Z});var l=a(7294),r=a(6010),n=a(5999),s=a(9960),i=a(4996),o=a(8824),m=a(8780),c=a(5290),u=a(6753);const d="blogPostTitle_rzP5",g="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j";var h=a(62);function b(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function E(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:s,email:i}=t,o=n||i&&`mailto:${i}`||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement(b,{href:o,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:s,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(b,{href:o,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const v="authorCol_FlmR",f="imageOnlyAuthorRow_trpF",_="imageOnlyAuthorCol_S2np";function N(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",n?f:"row")},t.map(((e,t)=>l.createElement("div",{className:(0,r.Z)(!n&&"col col--6",n?_:v),key:t},l.createElement(E,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}function Z(e){const t=function(){const{selectMessage:e}=(0,o.c)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,i.C)(),{children:b,frontMatter:E,assets:v,metadata:f,truncated:_,isBlogPostPage:Z=!1}=e,{date:k,formattedDate:P,permalink:w,tags:T,readingTime:I,title:F,editUrl:y,authors:x}=f,L=v.image??E.image,M=!Z&&_,R=T.length>0,A=Z?"h1":"h2";return l.createElement("article",{className:Z?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(A,{className:d,itemProp:"headline"},Z?F:l.createElement(s.Z,{itemProp:"url",to:w},F)),l.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},l.createElement("time",{dateTime:k,itemProp:"datePublished"},P),void 0!==I&&l.createElement(l.Fragment,null," \xb7 ",t(I))),l.createElement(N,{authors:x,assets:v})),L&&l.createElement("meta",{itemProp:"image",content:a(L,{absolute:!0})}),l.createElement("div",{id:Z?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(c.Z,null,b)),(R||_)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",Z&&p)},R&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":M})},l.createElement(h.Z,{tags:T})),Z&&y&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(u.Z,{editUrl:y})),M&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":R})},l.createElement(s.Z,{to:f.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:F})},l.createElement("b",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},8824:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(7294),r=a(2263);const n=["zero","one","two","few","many","other"];function s(e){return n.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function m(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms}), but the message contains ${l.length}: ${e}`);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}}]);