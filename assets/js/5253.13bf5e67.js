"use strict";(self.webpackChunkblog_waku_org=self.webpackChunkblog_waku_org||[]).push([[5253],{37701:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useBlogPluginData=void 0;const l=a(70655).__importDefault(a(6832));t.useBlogPluginData=()=>{const e=(0,l.default)().siteConfig.plugins.filter((e=>Array.isArray(e)&&["docusaurus-plugin-content-blog","@docusaurus/plugin-content-blog"].includes(e[0]))),t=e.find((e=>("undefined"!=typeof window?window.location.pathname:"/blog").startsWith(e[1].routeBasePath)));return t?t[1]:{routeBasePath:"/blog"}}},7049:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BlogHeader=void 0;const l=a(70655),r=a(31665),o=l.__importDefault(a(86010)),n=l.__importDefault(a(67294)),i=l.__importDefault(a(41084));t.BlogHeader=e=>{let{title:t,description:a}=e;return n.default.createElement("div",{className:(0,o.default)(i.default.blogHeader)},t&&n.default.createElement(r.Typography,{variant:"h3",className:(0,o.default)(i.default.blogTitle)},t),a&&n.default.createElement(r.Typography,{variant:"body2",className:(0,o.default)(i.default.blogDescription)},a))}},18955:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useBlogPageData=t.BlogPageContext=void 0;const l=a(67294);t.BlogPageContext=(0,l.createContext)({type:null,props:null});t.useBlogPageData=()=>(0,l.useContext)(t.BlogPageContext)},95141:(e,t,a)=>{const l=a(70655),r=l.__importDefault(a(86010)),o=l.__importDefault(a(67294)),n=l.__importDefault(a(66867)),i=l.__importDefault(a(9585)),u=a(18955),s=a(7049);t.Z=function(e){const{sidebar:t,toc:a,children:l,...m}=e,{type:d,props:c}=(0,u.useBlogPageData)(),f="list"===d,g=t&&t.items.length>0,p=null==c?void 0:c.metadata;return o.default.createElement(n.default,{...m,wrapperClassName:(0,r.default)("blog-wrapper",f&&"blog-wrapper--index")},f&&o.default.createElement(s.BlogHeader,{title:null==p?void 0:p.blogTitle,description:null==p?void 0:p.blogDescription}),o.default.createElement("div",{className:"container margin-vert--lg"},o.default.createElement("div",{className:"row"},o.default.createElement(i.default,{sidebar:t}),o.default.createElement("main",{className:(0,r.default)("col",{"col--7":g,"col--9 col--offset-1":!g}),itemScope:!0,itemType:"http://schema.org/Blog"},l),a&&o.default.createElement("div",{className:"col col--2"},a))))}},37635:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const l=a(70655),r=l.__importDefault(a(67294)),o=l.__importStar(a(11614)),n=l.__importDefault(a(88746)),i=a(31665);function u(){return r.default.createElement(o.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")}t.default=function(e){const{blogPostTitle:t,...a}=e;return r.default.createElement(n.default,{"aria-label":(0,o.translate)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a},r.default.createElement(i.Button,{size:"medium",variant:"filled"},r.default.createElement(i.Typography,{variant:"label1",component:"span"},r.default.createElement(u,null))))}},31780:(e,t,a)=>{const l=a(70655),r=l.__importDefault(a(67294)),o=l.__importDefault(a(86010)),n=a(13616),i=l.__importDefault(a(45039)),u=l.__importDefault(a(18189)),s=l.__importDefault(a(37635)),m=l.__importDefault(a(63318));t.Z=function(){const{metadata:e,isBlogPostPage:t}=(0,n.useBlogPost)(),{tags:a,title:l,editUrl:d,hasTruncateMarker:c}=e,f=!t&&c,g=a.length>0;return g||f||d?r.default.createElement("footer",{className:(0,o.default)("row docusaurus-mt-lg",t&&m.default.blogPostFooterDetailsFull)},r.default.createElement("div",null,g&&r.default.createElement(u.default,{tags:a})),t&&d&&r.default.createElement("div",null,r.default.createElement(i.default,{editUrl:d})),f&&r.default.createElement("div",{className:"read-more-link"},r.default.createElement(s.default,{className:m.default.readMoreLink,blogPostTitle:l,to:e.permalink}))):null}},39498:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const l=a(70655),r=l.__importDefault(a(67294)),o=l.__importDefault(a(86010)),n=l.__importDefault(a(88746)),i=a(31665);function u(e){return e.href?r.default.createElement(n.default,{...e}):r.default.createElement(r.default.Fragment,null,e.children)}t.default=function(e){let{author:t,className:a}=e;const{name:l,title:n,url:s,imageURL:m,email:d}=t,c=s||d&&`mailto:${d}`||void 0;return r.default.createElement("div",{className:(0,o.default)("avatar margin-bottom--sm",a)},l&&r.default.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.default.createElement("div",{className:"avatar__name"},r.default.createElement(u,{href:c,itemProp:"url"},r.default.createElement(i.Typography,{variant:"body2",itemProp:"name"},l)))))}},27778:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const l=a(70655),r=l.__importDefault(a(67294)),o=l.__importDefault(a(86010)),n=a(13616),i=l.__importDefault(a(39498)),u=l.__importDefault(a(40134)),s=a(31665);t.default=function(e){let{className:t}=e;const{metadata:{authors:a},assets:l}=(0,n.useBlogPost)();if(0===a.length)return null;const m=a.every((e=>{let{name:t}=e;return!t}));return r.default.createElement("div",{className:(0,o.default)(t)},r.default.createElement(s.Typography,{variant:"body2"},"by "),a.map(((e,t)=>r.default.createElement("div",{className:(0,o.default)(!m&&"col col--6",m?u.default.imageOnlyAuthorCol:u.default.authorCol),key:t},r.default.createElement(i.default,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})))))}},6775:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const l=a(70655),r=a(93945),o=a(13616),n=a(11614),i=l.__importDefault(a(86010)),u=l.__importDefault(a(67294)),s=l.__importDefault(a(27778)),m=l.__importDefault(a(3927));function d(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,r.usePluralForm)();return t=>{const a=Math.ceil(t);return e(a,(0,n.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return u.default.createElement("div",null,a(t))}function c(e){let{date:t,formattedDate:a}=e;return u.default.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}t.default=function(e){let{className:t}=e;const{metadata:a,isBlogPostPage:l}=(0,o.useBlogPost)(),{date:r,formattedDate:n,readingTime:f}=a;return u.default.createElement("div",{className:(0,i.default)(m.default.container,"margin-vert--md",!l&&m.default.blogContainer,t)},u.default.createElement(c,{date:r,formattedDate:n}),u.default.createElement(s.default,{className:m.default.authors}),void 0!==f&&u.default.createElement(u.default.Fragment,null,u.default.createElement(d,{readingTime:f})))}},6195:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Subtitle=void 0;const l=a(70655),r=a(31665),o=l.__importDefault(a(86010)),n=l.__importDefault(a(67294)),i=l.__importDefault(a(7377));t.Subtitle=e=>{let{content:t}=e;return n.default.createElement(r.Typography,{variant:"h6",className:(0,o.default)(i.default.blogPostSubtitle)},t)}},8475:(e,t,a)=>{const l=a(70655),r=a(13616),o=a(11614),n=l.__importDefault(a(6775)),i=l.__importDefault(a(25082)),u=l.__importDefault(a(67294)),s=a(37701),m=a(78375),d=a(6195);t.Z=function(){const{metadata:{title:e,permalink:t,frontMatter:a},isBlogPostPage:l,assets:c}=(0,r.useBlogPost)(),f=(0,s.useBlogPluginData)().routeBasePath??"/blog";return u.default.createElement("header",null,l&&u.default.createElement(m.BreadcrumbsBase,{homePage:(0,o.translate)({id:"theme.blog.breadcrumbs.listPageLabel",message:"All posts"}),homePageLink:f,breadcrumbs:[{type:"link",href:t,label:e}]}),u.default.createElement(i.default,null),(null==a?void 0:a.subtitle)&&l&&u.default.createElement(d.Subtitle,{content:null==a?void 0:a.subtitle}),u.default.createElement(n.default,null),l&&u.default.createElement("hr",{className:"blog-divider"}))}},25082:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(67294),r=a(86010),o=a(88746),n=a(17762);const i="title_f1Hy";function u(e){let{className:t}=e;const{metadata:a,isBlogPostPage:u}=(0,n.C)(),{permalink:s,title:m}=a,d=u?"h1":"h2";return l.createElement(d,{className:(0,r.default)(i,t),itemProp:"headline"},u?m:l.createElement(o.default,{itemProp:"url",to:s},m))}},91024:(e,t,a)=>{a.d(t,{Z:()=>f});var l=a(67294),r=a(86010),o=a(17762),n=a(51402);function i(e){let{children:t,className:a}=e;const{frontMatter:r,assets:i}=(0,o.C)(),{withBaseUrl:u}=(0,n.useBaseUrlUtils)(),s=i.image??r.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},s&&l.createElement("meta",{itemProp:"image",content:u(s,{absolute:!0})}),t)}var u=a(8475),s=a(79861),m=a(16927);function d(e){let{children:t,className:a}=e;const{isBlogPostPage:n}=(0,o.C)();return l.createElement("div",{id:n?s.blogPostContainerID:void 0,className:(0,r.default)("markdown",a),itemProp:"articleBody"},l.createElement(m.default,null,t))}var c=a(31780);function f(e){let{children:t,className:a}=e;const n=function(){const{isBlogPostPage:e}=(0,o.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(i,{className:(0,r.default)(n,a)},l.createElement(u.Z,null),l.createElement(d,null,t),l.createElement(c.Z,null))}},9585:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var l=a(67294),r=a(94980),o=a(86010),n=a(88746),i=a(11614);const u="sidebar_re4s",s="sidebarItemTitle_pO2u",m="sidebarItemList_Yudw",d="sidebarItem__DBe",c="sidebarItemLink_mo7H",f="sidebarItemLinkActive_I1ZP";function g(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,o.default)(u,"thin-scrollbar"),"aria-label":(0,i.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,o.default)(s,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,o.default)(m,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:d},l.createElement(n.default,{isNavLink:!0,to:e.permalink,className:c,activeClassName:f},e.title)))))))}var p=a(82306);function _(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(n.default,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return l.createElement(p.Zo,{component:_,props:e})}function h(e){let{sidebar:t}=e;const a=(0,r.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(b,{sidebar:t}):l.createElement(g,{sidebar:t}):null}},41084:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={blogHeader:"blogHeader_QORd",blogTitle:"blogTitle_KnCm",blogDescription:"blogDescription_dds8"}},3927:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={container:"container_PkUo",blogContainer:"blogContainer_wIfk",authors:"authors_dZ4g"}},7377:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={blogPostSubtitle:"blogPostSubtitle_ysb0"}},63318:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_FF8l",readMoreLink:"readMoreLink_cNfS"}},40134:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l={authorCol:"authorCol_y4tx",imageOnlyAuthorRow:"imageOnlyAuthorRow_n8pT",imageOnlyAuthorCol:"imageOnlyAuthorCol_OswQ"}}}]);