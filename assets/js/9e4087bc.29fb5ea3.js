"use strict";(self.webpackChunkblog_waku_org=self.webpackChunkblog_waku_org||[]).push([[608],{8387:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=a(70655),l=r.__importDefault(a(98265)),n=r.__importDefault(a(67294));t.default=function(e){return n.default.createElement("div",{className:"blog-archive-page"},n.default.createElement(l.default,{...e}))}},98265:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var r=a(67294),l=a(88746),n=a(11614),c=a(44873),m=a(66867);function i(e){let{year:t,posts:a}=e;return r.createElement(r.Fragment,null,r.createElement("h3",null,t),r.createElement("ul",null,a.map((e=>r.createElement("li",{key:e.metadata.date},r.createElement(l.default,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))))))}function s(e){let{years:t}=e;return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},t.map(((e,t)=>r.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},r.createElement(i,e)))))))}function o(e){let{archive:t}=e;const a=(0,n.translate)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),l=(0,n.translate)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),i=function(e){const t=e.reduceRight(((e,t)=>{const a=t.metadata.date.split("-")[0],r=e.get(a)??[];return e.set(a,[t,...r])}),new Map);return Array.from(t,(e=>{let[t,a]=e;return{year:t,posts:a}}))}(t.blogPosts);return r.createElement(r.Fragment,null,r.createElement(c.d,{title:a,description:l}),r.createElement(m.default,null,r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},a),r.createElement("p",{className:"hero__subtitle"},l))),r.createElement("main",null,i.length>0&&r.createElement(s,{years:i}))))}}}]);