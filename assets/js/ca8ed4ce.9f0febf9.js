"use strict";(self.webpackChunkblog_waku_org=self.webpackChunkblog_waku_org||[]).push([[6439],{14886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={layout:"post",name:"The Future of Waku Network: Scaling, Incentivization, and Heterogeneity",title:"The Future of Waku Network: Scaling, Incentivization, and Heterogeneity",date:new Date("2023-04-03T00:00:00.000Z"),authors:"franck",published:!0,slug:"future-of-waku-network",categories:"platform, operator, network",image:"/img/black-waku-logo-with-name.png",discuss:"https://forum.vac.dev/t/discussion-the-future-of-waku-network-scaling-incentivization-and-heterogeneity/173",hide_table_of_contents:!1},i=void 0,s={permalink:"/future-of-waku-network",source:"@site/posts/2023-04-03-waku-as-a-network.mdx",title:"The Future of Waku Network: Scaling, Incentivization, and Heterogeneity",description:"Learn how the Waku Network is evolving through scaling, incentivization, and diverse ecosystem development and what the future might look like.",date:"2023-04-03T00:00:00.000Z",formattedDate:"April 3, 2023",tags:[],readingTime:5.745,hasTruncateMarker:!0,authors:[{name:"Franck",twitter:"fryorcraken",github:"fryorcraken",key:"franck"}],frontMatter:{layout:"post",name:"The Future of Waku Network: Scaling, Incentivization, and Heterogeneity",title:"The Future of Waku Network: Scaling, Incentivization, and Heterogeneity",date:"2023-04-03T00:00:00.000Z",authors:"franck",published:!0,slug:"future-of-waku-network",categories:"platform, operator, network",image:"/img/black-waku-logo-with-name.png",discuss:"https://forum.vac.dev/t/discussion-the-future-of-waku-network-scaling-incentivization-and-heterogeneity/173",hide_table_of_contents:!1},prevItem:{title:"Device Pairing in Js-waku and Go-waku",permalink:"/device-pairing-in-js-waku-and-go-waku"}},l={authorsImageUrls:[void 0]},u=[{value:"DOS Mitigation for Status Communities",id:"dos-mitigation-for-status-communities",level:2},{value:"A Heterogeneous Waku Network",id:"a-heterogeneous-waku-network",level:2},{value:"Reversing the Incentivization Question",id:"reversing-the-incentivization-question",level:3},{value:"RLN and Service Credentials",id:"rln-and-service-credentials",level:3},{value:"Waku Network: Ethereum or Cosmos?",id:"waku-network-ethereum-or-cosmos",level:2},{value:"Scalability and Discovery Protocols",id:"scalability-and-discovery-protocols",level:2},{value:"Open Problems",id:"open-problems",level:2},{value:"The Evolving Waku Network",id:"the-evolving-waku-network",level:2},{value:"References",id:"references",level:2}],c={toc:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Learn how the Waku Network is evolving through scaling, incentivization, and diverse ecosystem development and what the future might look like."),(0,r.kt)("p",null,"Waku is preparing for production with a focus on the Status Communities use case. In this blog post, we will provide an\noverview of recent discussions and research outputs, aiming to give you a better understanding of how the Waku network\nmay look like in terms of scaling and incentivization."),(0,r.kt)("h2",{id:"dos-mitigation-for-status-communities"},"DOS Mitigation for Status Communities"),(0,r.kt)("p",null,"Waku is actively exploring DOS mitigation mechanisms suitable for Status Communities. While RLN\n(Rate Limiting Nullifiers) remains the go-to DOS protection solution due to its privacy-preserving and\ncensorship-resistant properties, there is still more work to be done. We are excited to collaborate with PSE\n(Privacy & Scaling Explorations) in this endeavor. Learn more about their latest progress in this ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/CPerezz19/status/1640373940634939394?s=20"},"tweet"),"."),(0,r.kt)("h2",{id:"a-heterogeneous-waku-network"},"A Heterogeneous Waku Network"),(0,r.kt)("p",null,"As we noted in a previous ",(0,r.kt)("a",{parentName:"p",href:"https://forum.vac.dev/t/waku-payment-models/166/3"},"forum post"),", Waku's protocol\nincentivization model needs to be flexible to accommodate various business models. Flexibility ensures that projects\ncan choose how they want to use Waku based on their specific needs."),(0,r.kt)("h3",{id:"reversing-the-incentivization-question"},"Reversing the Incentivization Question"),(0,r.kt)("p",null,'Traditionally, the question of incentivization revolves around how to incentivize operators to run nodes. We\'d like to\nreframe the question and instead ask, "How do we pay for the infrastructure?"'),(0,r.kt)("p",null,"Waku does not intend to offer a free lunch.\nEthereum's infrastructure is supported by transaction fees and inflation, with validators receiving rewards from both sources.\nHowever, this model does not suit a communication network like Waku.\nUsers and platforms would not want to pay for every single message they send. Additionally, Waku aims to support instant\nephemeral messages that do not require consensus or long-term storage."),(0,r.kt)("p",null,'Projects that use Waku to enable user interactions, whether for chat messages, gaming, private DeFi, notifications, or\ninter-wallet communication, may have different value extraction models. Some users might provide services for the\nproject and expect to receive value by running nodes, while others may pay for the product or run infrastructure to\ncontribute back. Waku aims to support each of these use cases, which means there will be various ways to "pay for the\ninfrastructure."'),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://vac.dev/building-privacy-protecting-infrastructure"},"his talk"),", Oskar addressed two strategies: RLN and service credentials."),(0,r.kt)("h3",{id:"rln-and-service-credentials"},"RLN and Service Credentials"),(0,r.kt)("p",null,"RLN enables DOS protection across the network in a privacy-preserving and permission-less manner: stake in a contract,\nand you can send messages."),(0,r.kt)("p",null,"Service credentials establish a customer-provider relationship. Users might pay to have messages they are interested in\nstored and served by a provider. Alternatively, a community owner could pay a service provider to host their community."),(0,r.kt)("p",null,"Providers could offer trial or limited free services to Waku users, similar to Slack or Discord. Once a trial is expired or outgrown,\na community owner could pay for more storage or bandwidth, similar to Slack's model.\nAlternatively, individual users could contribute financially, akin to Discord's Server Boost, or by sharing their own\nresources with their community."),(0,r.kt)("p",null,"We anticipate witnessing various scenarios across the spectrum: from users sharing resources to users paying for access to the network and everything in between."),(0,r.kt)("h2",{id:"waku-network-ethereum-or-cosmos"},"Waku Network: Ethereum or Cosmos?"),(0,r.kt)("p",null,"Another perspective is to consider whether the Waku network will resemble Ethereum or Cosmos."),(0,r.kt)("p",null,"For those not familiar with the difference between both, in a very concise manner:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ethereum is a set of protocols and software that are designed to operate on one common network and infrastructure"),(0,r.kt)("li",{parentName:"ul"},"Cosmos is a set of protocols and software (SDKs) designed to be deployed in separate yet interoperable networks and infrastructures by third parties")),(0,r.kt)("p",null,"We want Waku to be decentralized to provide censorship resistance and privacy-preserving communication.\nIf each application has to deploy its own network, we will not achieve this goal.\nTherefore, we aim Waku to be not only an open source set of protocols, but also a shared infrastructure that anyone can leverage to build applications on top, with some guarantees in terms of decentralization and anonymity.\nThis approach is closer in spirit to Ethereum than Cosmos.\nDo note that, similarly to Ethereum, anyone is free to take Waku software and protocols and deploy their own network."),(0,r.kt)("p",null,"Yet, because of the difference in the fee model, the Waku Network is unlikely to be as unified as Ethereum's.\nWe currently assume that there will be separate gossipsub networks with different funding models.\nSince there is no consensus on Waku, each individual operator can decide which network to support, enabling Waku to maintain its permission-less property."),(0,r.kt)("p",null,"Most likely, the Waku network will be heterogeneous, and node operators will choose the incentivization model they prefer."),(0,r.kt)("h2",{id:"scalability-and-discovery-protocols"},"Scalability and Discovery Protocols"),(0,r.kt)("p",null,"To enable scalability, the flow of messages in the Waku network will be divided in shards,\nso that not every node has to forward every message of the whole network.\nDiscovery protocols will facilitate users connecting to the right nodes to receive the messages they are interested in."),(0,r.kt)("p",null,"Different shards could be subject to a variety of rate limiting techniques (globally, targeted to that shard or something in-between)."),(0,r.kt)("p",null,"Marketplace protocols may also be developed to help operators understand how they can best support the network and where\ntheir resources are most needed. However, we are still far from establishing or even assert that such a marketplace will be needed."),(0,r.kt)("h2",{id:"open-problems"},"Open Problems"),(0,r.kt)("p",null,"Splitting traffic between shards reduces bandwidth consumption for every Waku Relay node.\nThis improvement increases the likelihood that users with home connections can participate and contribute to the gossipsub network without encountering issues."),(0,r.kt)("p",null,"However, it does not cap traffic.\nThere are still open problems regarding how to guarantee that someone can use Waku with lower Internet bandwidth or run critical services, such as a validation node, on the same connection."),(0,r.kt)("p",null,"We have several ongoing initiatives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Analyzing the Status Community protocol to confirm efficient usage of Waku ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/vacp2p/research/issues/177"},"[4]")),(0,r.kt)("li",{parentName:"ul"},"Simulating the Waku Network to measure actual bandwidth usage ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/waku-org/pm/issues/2"},"[5]")),(0,r.kt)("li",{parentName:"ul"},"Segregating chat messages from control and media messages ",(0,r.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/57/#control-message-shards"},"[6]"))),(0,r.kt)("p",null,"The final solution will likely be a combination of protocols that reduce bandwidth usage or mitigate the risk of DOS attacks, providing flexibility for users and platforms to enable the best experience."),(0,r.kt)("h2",{id:"the-evolving-waku-network"},"The Evolving Waku Network"),(0,r.kt)("p",null,'The definition of the "Waku Network" will likely change over time. In the near future, it will transition from a single\ngossipsub network to a sharded set of networks unified by a common discovery layer. This change will promote scalability\nand allow various payment models to coexist within the Waku ecosystem.'),(0,r.kt)("p",null,"In conclusion, the future of Waku Network entails growth, incentivization, and heterogeneity while steadfastly\nmaintaining its core principles. As Waku continues to evolve, we expect it to accommodate a diverse range of use cases\nand business models, all while preserving privacy, resisting censorship, avoiding surveillance, and remaining accessible\nto devices with limited resources."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/51/"},"51/WAKU2-RELAY-SHARDING")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/57/"},"57/STATUS-Simple-Scaling")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/58/"},"58/RLN-V2")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vacp2p/research/issues/177"},"Scaling Status Communities: Potential Problems")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/waku-org/pm/issues/2"},"Waku Network Testing")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/57/#control-message-shards"},"51/WAKU2-RELAY-SHARDING: Control Message Shards"))))}h.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);