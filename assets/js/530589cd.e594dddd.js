"use strict";(self.webpackChunkblog_waku_org=self.webpackChunkblog_waku_org||[]).push([[8288],{80616:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=i(87462),n=(i(67294),i(3905));const r={layout:"post",name:"Message Reliability",title:"Message Reliability",date:new Date("2024-06-20T00:00:00.000Z"),authors:["franck"],published:!0,slug:"message-reliability",categories:"waku, progress",image:"/img/black-waku-logo-with-name.png"},o=void 0,s={permalink:"/message-reliability",source:"@site/posts/2024-06-20-message-reliability.mdx",title:"Message Reliability",description:"An introduction to message reliability and the role of Waku protocols in ensuring it.",date:"2024-06-20T00:00:00.000Z",formattedDate:"June 20, 2024",tags:[],readingTime:8.575,hasTruncateMarker:!0,authors:[{name:"Franck",twitter:"fryorcraken",github:"fryorcraken",key:"franck"}],frontMatter:{layout:"post",name:"Message Reliability",title:"Message Reliability",date:"2024-06-20T00:00:00.000Z",authors:["franck"],published:!0,slug:"message-reliability",categories:"waku, progress",image:"/img/black-waku-logo-with-name.png"},nextItem:{title:"Permissionless Community Creation",permalink:"/permissionless-community-creation"}},l={authorsImageUrls:[void 0]},p=[{value:"Definition",id:"definition",level:2},{value:"Transport-level reliability",id:"transport-level-reliability",level:2},{value:"Peer-to-peer reliability",id:"peer-to-peer-reliability",level:2},{value:"End-to-end reliability",id:"end-to-end-reliability",level:2},{value:"Encryption",id:"encryption",level:2},{value:"APIs and Timeline",id:"apis-and-timeline",level:2},{value:"<strong>Core protocols API</strong>",id:"core-protocols-api",level:3},{value:"<strong>Messaging API</strong>",id:"messaging-api",level:3},{value:"<strong>Reliable Communication API</strong>",id:"reliable-communication-api",level:3},{value:"<strong>Encryption API</strong>",id:"encryption-api",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"An introduction to message reliability and the role of Waku protocols in ensuring it."),(0,n.kt)("p",null,"Waku provides a suite of protocols to enable Denial-of-Service (DoS) protected, peer-to-peer message routing and access to said peer-to-peer network for resource-restricted devices."),(0,n.kt)("p",null,"Those protocols have been designed to solve message routing, focusing on privacy and censorship resistance, hence implementing a peer-to-peer decentralised topology."),(0,n.kt)("p",null,"While libp2p gossipsub and Waku relay are ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1vK1OxI-YYqYWRYpb3imENcsUvFXBOzTkT6xnfUNA0yM/edit?usp=sharing"},"reliable")," in a well-connected environment, those protocols remain only as reliable as their underlying transport (TCP, WebSocket)."),(0,n.kt)("p",null,"Building ",(0,n.kt)("a",{parentName:"p",href:"https://blog.waku.org/railgun-waku-case-study"},"working")," ",(0,n.kt)("a",{parentName:"p",href:"https://blog.waku.org/thegraph-waku-case-study"},"applications")," over Waku is possible, but end-to-end reliability is up to the application developer. Those strategies can be heavy on resource consumption. Moreover, the redundancy, dynamic mesh of peers, and gossiping that provide Waku Relay with its reliability are not present out of the box for light client protocols."),(0,n.kt)("p",null,"These are overheads for application developers who would rather focus on application logic than connection management for Waku."),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"We define reliability as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There is a high likelihood of messages being sent and received by a node in a timely fashion"),(0,n.kt)("li",{parentName:"ul"},"Awareness of liveness state:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Was a message sent or not sent, or do we not know (yet)?"),(0,n.kt)("li",{parentName:"ul"},"Can I receive messages at the moment?")))),(0,n.kt)("p",null,"In the context of Waku, there are three layers to reliability, from lowest to highest in the stack:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Transport: Reliability within the libp2p layer, constituent transports, and protocol stack, including peer discovery."),(0,n.kt)("li",{parentName:"ol"},"Peer-to-peer: Reliability within the Waku message routing and discovery layers between a local node and its direct connections to remote peers; said peers may have no functional relevance to the application."),(0,n.kt)("li",{parentName:"ol"},"End-to-end: Reliability within the application layer, on top of the Waku message routing and discovery layer. This layer is used primarily for the application to know whether the intended recipients received messages or whether incoming messages are missed, regardless of the number of hops away.")),(0,n.kt)("h2",{id:"transport-level-reliability"},"Transport-level reliability"),(0,n.kt)("p",null,"Apart from setting the correct parameters for TCP usage, we can do little to improve its reliability beyond what can be done in the underlying libp2p library. However, new transports, such as QUIC and WebTransport, can be introduced to improve on TCP/WebSocket."),(0,n.kt)("p",null,"Libp2p-gossipsub usage is a similar case. We can tune some parameters at Waku level. We are also reviewing go-libp2p-gossipsub and nim-libp2p-gossipsub behaviour in desktop and mobile environments to answer questions such as: can disconnection detection in gossipsub be improved? "),(0,n.kt)("p",null,"No major changes are expected at this layer, but understanding the inner workings will enable a more efficient strategy at the next layer."),(0,n.kt)("h2",{id:"peer-to-peer-reliability"},"Peer-to-peer reliability"),(0,n.kt)("p",null,"By peer-to-peer reliability, we mean message reliability between reachable nodes in the network. At this level, we can better understand the connectivity state, whether outgoing messages are propagated across part of the network, and whether we are receiving messages from the network. With every peer implementing peer-to-peer reliability strategies, heuristics of end-to-end reliability will increase but cannot be guaranteed."),(0,n.kt)("p",null,"Filter and light push protocols already have baked-in reliability mechanisms such as filter ping and light push ack messages. However, this is not sufficient. Relay redundancy must be replicated in light client protocols, especially in a decentralised topology."),(0,n.kt)("p",null,"Moreover, while gossipsub is very reliable on a stable connection, its mechanism to detect disconnection has practical limitations."),(0,n.kt)("p",null,"Strategies to increase peer-to-peer reliability heavily depend on the new store v3 protocol. This protocol enables store responses to only contain message IDs and is more cost-savvy than store v2, which replies with the full message payload. A mix of regular store queries, libp2p ping, filter ping, and enhanced peer management will increase p2p reliability. Our RFCs will also define this. However, these strategies are likely to be at the cost of increased bandwidth usage and high connections requirements."),(0,n.kt)("h2",{id:"end-to-end-reliability"},"End-to-end reliability"),(0,n.kt)("p",null,"In the user's eyes, meaningful reliability means ascertaining whether the intended recipient of their messages has received them and ensuring that, as a recipient, they do not miss messages."),(0,n.kt)("p",null,"End-to-end reliability is the way that specific users can communicate reliably across the network, in contrast with peer-to-peer reliability, which is focused on reliability between somewhat random reachable nodes in the network. It also ensures that nodes that are multiple hops away from each other are able to exchange messages reliably."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/vac/2/mvds"},"MVDS")," is an end-to-end reliability protocol. It is used in the Status application. The main caveat is that it only handles communication between two people and cannot be scaled without drastically increasing bandwidth usage. "),(0,n.kt)("p",null,"With Status Communities, we want to enable thousands of users in a given community, so a new protocol is needed to enable end-to-end reliability among community participants."),(0,n.kt)("h2",{id:"encryption"},"Encryption"),(0,n.kt)("p",null,"A protocol that enables users to know what message they missed or need to resend is likely to leak information about their social graph, even if the message content is encrypted. This is why it is essential for the metadata generated by an e2e reliability protocol to be encrypted and only accessible to the intended participants."),(0,n.kt)("p",null,"For 1:1 chats, ",(0,n.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/waku/standards/application/53/x3dh"},"Status' encryption")," provides confidentiality, integrity, authenticity, and forward secrecy. It adapts ",(0,n.kt)("a",{parentName:"p",href:"https://signal.org/docs/specifications/doubleratchet/"},"Signal's double ratchet algorithm")," to a decentralised topology. Unfortunately, this scheme does not scale to large groups as it only enables 1:1 scenarios. It can be used in small groups by setting up encrypted channels for each participant, but this strategy creates overhead that becomes impractical for larger groups."),(0,n.kt)("p",null,"Large groups (communities) currently use symmetric encryption. While it includes end-to-end encryption of data and metadata, it does not provide forward secrecy. An encryption scheme such as ",(0,n.kt)("a",{parentName:"p",href:"https://messaginglayersecurity.rocks/"},"MLS")," should be used to set up a secure channel between hundreds or thousands of participants. MLS provides native group encryption that can be ",(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/draft-ietf-mls-architecture-01#section-3.1"},"scaled to approximately 50,000 clients"),"."),(0,n.kt)("p",null,"Unfortunately, MLS does assume the use of some central",(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/draft-ietf-mls-architecture-01#section-2.2"},"services"),", so further research is needed to design a secure group encryption algorithm that works in a decentralised topology."),(0,n.kt)("h2",{id:"apis-and-timeline"},"APIs and Timeline"),(0,n.kt)("p",null,"![alt_text]","(static/img/1 - Waku Stack Overview.jpg)"),(0,n.kt)("p",null,"The Waku team is currently focusing on providing the reliability layers outlined above. We will deliver this work through new APIs for application developers that abstract complexity and use the existing Waku protocols with new reliability guarantees and heuristics."),(0,n.kt)("h3",{id:"core-protocols-api"},(0,n.kt)("strong",{parentName:"h3"},"Core protocols API")),(0,n.kt)("p",null,"The API currently available to developers provides direct access to the Waku core protocols. While it is functioning, it has several caveats:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Reliability: "),"As discussed, these protocols are as reliable as their underlying transport."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Protocol knowledge: "),"Developers need to understand each protocol API and its behaviour."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Encryption: "),"Encryption is provided in the library, but its application is left to the developer.")),(0,n.kt)("p",null,"As part of the work outlined below, the core protocols API will be improved to ensure that reliability concerns are isolated in a different layer (separation of concerns principle). The first iterations of Waku Store improvements (v3) have recently been delivered, and further work on the peer manager is expected to enable peer-to-peer reliability."),(0,n.kt)("h3",{id:"messaging-api"},(0,n.kt)("strong",{parentName:"h3"},"Messaging API")),(0,n.kt)("p",null,"We are currently working across Waku implementations to abstract peer-to-peer reliability strategies to provide them in a new, simpler API. Ideally, an app developer wants to ",(0,n.kt)("em",{parentName:"p"},"send"),", ",(0,n.kt)("em",{parentName:"p"},"receive")," and _retrieve _messages with fair reliability. They should not be concerned by the underlying protocols and how Waku handles this."),(0,n.kt)("p",null,"This is the most basic API. It should improve the_ status quo _and be used by developers when higher APIs do not fit the purpose (e.g., broadcast messages, ephemeral messages)."),(0,n.kt)("p",null,"Developers can use this API without any application context, and it enables them to solve some of the previously stated caveats:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Reliability: "),"Improved disconnection identification and handling, using store queries to check for sent and missed messages, using multiple connections for resource-restricted protocols (light push, filter)."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Protocol knowledge: "),"Core protocols are abstracted to provide simple verbs such as ",(0,n.kt)("em",{parentName:"li"},"relay")," versus ",(0,n.kt)("em",{parentName:"li"},"light client")," mode, ",(0,n.kt)("em",{parentName:"li"},"send message, receive messages, and retrieve past messages.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Encryption: "),"same as core protocols API.")),(0,n.kt)("p",null,"We aim to deliver this API and integrate it in Status applications by the end of Q3 2024, with earlier commitments on specific deliverables."),(0,n.kt)("h3",{id:"reliable-communication-api"},(0,n.kt)("strong",{parentName:"h3"},"Reliable Communication API")),(0,n.kt)("p",null,"With this API, the user gains more certainty on message delivery. However, it does imply several assumptions, such as knowing the number of recipients and their identifiers."),(0,n.kt)("p",null,"Such API would resolve most, but not all, caveats:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Reliability: "),"Waku uses a new end-to-end reliability protocol to provide better feedback about the status of a given sent message or messages for which the user is the intended recipient. While transient ",(0,n.kt)("em",{parentName:"li"},"unknown")," states may still occur, Waku software will clarify whether the application or user should retry."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Protocol knowledge: "),"The set of _verbs _from the messaging API still applies. However, the API will need more application context to be passed (e.g., some identifier for the message recipients) to enable the developer and user to be more certain about the message status."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Encryption: "),"same as core protocols API.")),(0,n.kt)("p",null,"Research on this ",(0,n.kt)("a",{parentName:"p",href:"https://forum.vac.dev/t/end-to-end-reliability-for-scalable-distributed-logs/293"},"has started"),". While we expect delivery to be iterative through Proof of Concepts, we committed to delivering a working protocol and integrating it into the Status application by the end of 2024."),(0,n.kt)("h3",{id:"encryption-api"},(0,n.kt)("strong",{parentName:"h3"},"Encryption API")),(0,n.kt)("p",null,"With the reliability API, developers still need to reason about encryption. Waku should provide a scheme that enables encryption with forward secrecy, plausible deniability, and scalability for large groups in a decentralised topology out of the box."),(0,n.kt)("p",null,"Developers should then only need to pass the public keys (or other cryptographic artefacts) of group members for Waku to negotiate a secure channel and provide end-to-end encryption. This would allow the end-to-end reliability protocol to operate without leaking metadata."),(0,n.kt)("p",null,"In this context, content topics are also likely to be handled by Waku software to ensure developers do not inadvertently leak metadata."),(0,n.kt)("p",null,"The Vac cryptography team is already conducting research on this topic. The timeline for integrating the result in Waku currently needs to be defined."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Users and developers expect high reliability from the communication systems they use. When operating in a peer-to-peer domain, developers cannot always apply the traditional strategies used in centralised architecture."),(0,n.kt)("p",null,"While the margin to make the existing Waku protocols more reliable is thin, it is possible to build new layers on top of them to achieve higher reliability. For the next six months, the Waku team will focus on designing the said layers, which will then be integrated into the Status applications and included by default in the Waku SDKs."))}d.isMDXComponent=!0},3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(i),h=n,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return i?a.createElement(m,o(o({ref:t},c),{},{components:i})):a.createElement(m,o({ref:t},c))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<r;p++)o[p]=i[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"}}]);