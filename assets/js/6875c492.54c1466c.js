"use strict";(self.webpackChunkminetrax_github_io=self.webpackChunkminetrax_github_io||[]).push([[8610],{4118:(e,t,a)=>{a.d(t,{Z:()=>_});var l=a(7294),r=a(6010),n=a(7422),s=a(9960),o=a(5999);const i="sidebar_TMXw",m="sidebarItemTitle_V4zb",c="sidebarItemList_uHd5",u="sidebarItem_spIe",g="sidebarItemLink_eqrF",d="sidebarItemLinkActive_XZSJ";function p(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(i,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(c,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:u},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title)))))))}var h=a(3102);function b(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function E(e){return l.createElement(h.Zo,{component:b,props:e})}var f=a(7524);function v(e){let{sidebar:t}=e;const a=(0,f.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(E,{sidebar:t}):l.createElement(p,{sidebar:t}):null}function _(e){const{sidebar:t,toc:a,children:s,...o}=e,i=t&&t.items.length>0;return l.createElement(n.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(v,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},6299:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),r=a(5999),n=a(1750);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(n.Z,{permalink:s,title:l.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},6244:(e,t,a)=>{a.d(t,{Z:()=>Z});var l=a(7294),r=a(6010),n=a(5999),s=a(9960),o=a(4996),i=a(8824),m=a(8780),c=a(5290),u=a(6753);const g="blogPostTitle_rzP5",d="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j";var h=a(62);function b(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function E(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:s,email:o}=t,i=n||o&&`mailto:${o}`||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement(b,{href:i,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:s,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(b,{href:i,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const f="authorCol_FlmR",v="imageOnlyAuthorRow_trpF",_="imageOnlyAuthorCol_S2np";function N(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",n?v:"row")},t.map(((e,t)=>l.createElement("div",{className:(0,r.Z)(!n&&"col col--6",n?_:f),key:t},l.createElement(E,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}function Z(e){const t=function(){const{selectMessage:e}=(0,i.c)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,o.C)(),{children:b,frontMatter:E,assets:f,metadata:v,truncated:_,isBlogPostPage:Z=!1}=e,{date:P,formattedDate:k,permalink:w,tags:T,readingTime:I,title:y,editUrl:x,authors:F}=v,L=f.image??E.image,M=!Z&&_,A=T.length>0,R=Z?"h1":"h2";return l.createElement("article",{className:Z?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(R,{className:g,itemProp:"headline"},Z?y:l.createElement(s.Z,{itemProp:"url",to:w},y)),l.createElement("div",{className:(0,r.Z)(d,"margin-vert--md")},l.createElement("time",{dateTime:P,itemProp:"datePublished"},k),void 0!==I&&l.createElement(l.Fragment,null," \xb7 ",t(I))),l.createElement(N,{authors:F,assets:f})),L&&l.createElement("meta",{itemProp:"image",content:a(L,{absolute:!0})}),l.createElement("div",{id:Z?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(c.Z,null,b)),(A||_)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",Z&&p)},A&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":M})},l.createElement(h.Z,{tags:T})),Z&&x&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(u.Z,{editUrl:x})),M&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":A})},l.createElement(s.Z,{to:v.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:y})},l.createElement("b",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9404:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(7294),r=a(9960),n=a(4118),s=a(6244),o=a(5999),i=a(8824),m=a(833),c=a(5281),u=a(6299),g=a(4739),d=a(6010);function p(e){let{tag:t,items:a,sidebar:p,listMetadata:h}=e;const b=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),E=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:b(t.count),tagName:t.label});return l.createElement(m.FG,{className:(0,d.Z)(c.k.wrapper.blogPages,c.k.page.blogTagPostListPage)},l.createElement(m.d,{title:E}),l.createElement(g.Z,{tag:"blog_tags_posts"}),l.createElement(n.Z,{sidebar:p},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,E),l.createElement(r.Z,{href:t.allTagsPath},l.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},l.createElement(t,null))})),l.createElement(u.Z,{metadata:h})))}},8824:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(7294),r=a(2263);const n=["zero","one","two","few","many","other"];function s(e){return n.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function m(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms}), but the message contains ${l.length}: ${e}`);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}}]);