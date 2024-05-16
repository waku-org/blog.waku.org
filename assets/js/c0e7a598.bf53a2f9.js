"use strict";(self.webpackChunkblog_waku_org=self.webpackChunkblog_waku_org||[]).push([[9617],{93358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const i={layout:"post",name:"Building a Tic-Tac-Toe Game with Waku",title:"Building a Tic-Tac-Toe Game with Waku",date:new Date("2024-01-22T00:00:00.000Z"),authors:["guru"],published:!0,slug:"tictactoe-tutorial",categories:"waku, tutorials",image:"/img/tictactoe-tutorial.png",hide_table_of_contents:!1},r="Building a Tic-Tac-Toe Game with Waku",s={permalink:"/tictactoe-tutorial",source:"@site/posts/2024-01-22-tictactoe-tutorial.mdx",title:"Building a Tic-Tac-Toe Game with Waku",description:"In this beginner-friendly tutorial, we will be building a basic TicTacToe game that can be played by two players who are connected using Waku.",date:"2024-01-22T00:00:00.000Z",formattedDate:"January 22, 2024",tags:[],readingTime:14.85,hasTruncateMarker:!0,authors:[{name:"Guru",twitter:"@hackyguru",github:"hackyguru",key:"guru"}],frontMatter:{layout:"post",name:"Building a Tic-Tac-Toe Game with Waku",title:"Building a Tic-Tac-Toe Game with Waku",date:"2024-01-22T00:00:00.000Z",authors:["guru"],published:!0,slug:"tictactoe-tutorial",categories:"waku, tutorials",image:"/img/tictactoe-tutorial.png",hide_table_of_contents:!1},prevItem:{title:"January EcoDev Roundup",permalink:"/january-ecodev"},nextItem:{title:"Key Learnings from Waku Hackers in 2023",permalink:"/learnings-from-hackers"}},l={authorsImageUrls:[void 0]},p=[{value:"What is Waku",id:"what-is-waku",level:2},{value:"Why Waku for building a Tic-Tac-Toe game?",id:"why-waku-for-building-a-tic-tac-toe-game",level:2},{value:"Getting started with building",id:"getting-started-with-building",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Wireframing",id:"wireframing",level:3},{value:"Step 1 : Create a NextJS project",id:"step-1--create-a-nextjs-project",level:3},{value:"Step 2 : Organising the file structure",id:"step-2--organising-the-file-structure",level:3},{value:"Step 3 : Install the <code>@waku/react</code> SDK",id:"step-3--install-the-wakureact-sdk",level:3},{value:"Step 4 : Importing the SDK and initialising the providers",id:"step-4--importing-the-sdk-and-initialising-the-providers",level:3},{value:"Step 5 : Modify the index.js file",id:"step-5--modify-the-indexjs-file",level:3},{value:"Step 6 : Header component and Hero component",id:"step-6--header-component-and-hero-component",level:3},{value:"Step 7 : Sending and retrieving messages in <code>Room.js</code>",id:"step-7--sending-and-retrieving-messages-in-roomjs",level:3},{value:"Step 8 : Winning conditions and finding the winner with <code>UseEffect()</code>",id:"step-8--winning-conditions-and-finding-the-winner-with-useeffect",level:3},{value:"Step 9 : Loading component and rendering the boxes",id:"step-9--loading-component-and-rendering-the-boxes",level:3},{value:"Step 10 : Rendering the room",id:"step-10--rendering-the-room",level:3},{value:"What&#39;s next?",id:"whats-next",level:3}],u={toc:p};function c(e){let{components:n,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this beginner-friendly tutorial, we will be building a basic TicTacToe game that can be played by two players who are connected using Waku."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"header",src:t(13820).Z,width:"3395",height:"1813"})),(0,o.kt)("h2",{id:"what-is-waku"},"What is Waku"),(0,o.kt)("p",null,"Waku is a family of robust, censorship-resistant, and privacy-preserving communication protocols designed to enable perfomant messaging for web3 apps. When I say \u2018messaging\u2019, this does not restrict Waku\u2019s use cases just to building \u2018text\u2019 messaging apps; Waku can also support other use cases like games, marketplaces, governance tooling, and much more."),(0,o.kt)("p",null,"If you wish to know more about what Waku offers - check out the ",(0,o.kt)("a",{parentName:"p",href:"https://waku.org"},"website")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.waku.org"},"developer documentation"),"."),(0,o.kt)("h2",{id:"why-waku-for-building-a-tic-tac-toe-game"},"Why Waku for building a Tic-Tac-Toe game?"),(0,o.kt)("p",null,"A Tic-Tac-Toe game is one of the most straightforward project ideas that can be implemented with Waku. This is because it involves just two players and has minimal web3 jargon. Implementing the game is very clear for anyone with prior experience in building with React-based frameworks and some enthusiasm to learn Waku."),(0,o.kt)("h2",{id:"getting-started-with-building"},"Getting started with building"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Some intermediate-level knowledge of React based frameworks (in this tutorial, we use NextJS)"),(0,o.kt)("li",{parentName:"ul"},"Understanding of Waku's architecture"),(0,o.kt)("li",{parentName:"ul"},"Some coffee to sip along")),(0,o.kt)("h3",{id:"wireframing"},"Wireframing"),(0,o.kt)("p",null,"Before we start, let us visualise the project's wireframe for a better understanding: "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"wireframe",src:t(84740).Z,width:"1285",height:"778"})),(0,o.kt)("p",null,"The first screen on the left will be our landing screen with two buttons for starting a new game or joining an existing one. Each of the games in our TicTacToe game will have a ",(0,o.kt)("inlineCode",{parentName:"p"},"room-id")," which two players will be connected to."),(0,o.kt)("p",null,"Waku follows a 'content topic based architecture', meaning that the messages are routed and stored based on different content topics across the network. In our case, the content topic would be the ",(0,o.kt)("inlineCode",{parentName:"p"},"room-id")," since it maps perfectly. Two players in a game will be connected by publishing on and subscribing to the same content-topic/",(0,o.kt)("inlineCode",{parentName:"p"},"room-id"),"."),(0,o.kt)("p",null,"Do not worry if you need clarification about this - you can figure it out in the next steps as you build the project."),(0,o.kt)("h3",{id:"step-1--create-a-nextjs-project"},"Step 1 : Create a NextJS project"),(0,o.kt)("p",null,"Kickstarting a new NextJS project is super easy by using the command below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx create-next-app@latest TicTacToe --eslint\n")),(0,o.kt)("p",null,"Make sure to select ",(0,o.kt)("inlineCode",{parentName:"p"},"Y")," in the command line when you are prompted if you require TailwindCSS. Alternatively, please follow the instructions for installing TailwindCSS in this ",(0,o.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/guides/nextjs"},"link"),"."),(0,o.kt)("p",null,"Once you are done, you should be able to run the NextJS app by using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev")),(0,o.kt)("h3",{id:"step-2--organising-the-file-structure"},"Step 2 : Organising the file structure"),(0,o.kt)("p",null,"The file structure for this project is very easy to setup. Create a folder called ",(0,o.kt)("inlineCode",{parentName:"p"},"/components")," in the root directory of the project. Inside the components folder, create four files: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Header.js")," : Contains the header component"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Hero.js")," : Screen which appears on the menu asking if you wish to create a new game or join an existing game"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Loading.js")," : Loader component"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Room.js")," : This file will hold all the Waku and game logic")),(0,o.kt)("p",null,"Apart from the above files, you must create a new folder inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"/pages")," folder with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"/pages/game"),". Inside the game folder, create file called ",(0,o.kt)("inlineCode",{parentName:"p"},"[id].js")," which will be used to navigate a user to a particular game room."),(0,o.kt)("h3",{id:"step-3--install-the-wakureact-sdk"},"Step 3 : Install the ",(0,o.kt)("inlineCode",{parentName:"h3"},"@waku/react")," SDK"),(0,o.kt)("p",null,"Now, it is time to install the required libraries for using Waku by using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install @waku/react @waku/sdk protobufjs\n")),(0,o.kt)("p",null,"Apart from these, we will also need a few more libraries that can be helpful during the next steps : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install short-unique-id copy-to-clipboard\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"short-unique-id")," will be useful in generating a random unique id for the game room. ",(0,o.kt)("inlineCode",{parentName:"p"},"copy-to-clipboard")," will help us implement a button that can copy the room ID to a user's clipboard."),(0,o.kt)("h3",{id:"step-4--importing-the-sdk-and-initialising-the-providers"},"Step 4 : Importing the SDK and initialising the providers"),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"/pages")," folder, you can find ",(0,o.kt)("inlineCode",{parentName:"p"},"_app.js")," file, which is the starting point of a NextJS app. We will be initialising our provider here so that the Waku provider will wrap up the entire application."),(0,o.kt)("p",null,"So, import the following on top of your file :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { LightNodeProvider } from "@waku/react";\nimport { Protocols } from "@waku/sdk";\n')),(0,o.kt)("p",null,"Now, wrap the components with the ",(0,o.kt)("inlineCode",{parentName:"p"},"<LightNodeProvider>")," as follows : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    <LightNodeProvider\n      options={{ defaultBootstrap: true }}\n      protocols={[Protocols.Store, Protocols.Filter, Protocols.LightPush]}\n    >\n      <Component {...pageProps} />\n    </LightNodeProvider>\n")),(0,o.kt)("p",null,"This provider allows the usage of ",(0,o.kt)("strong",{parentName:"p"},"Store, Filter and LightPush protocols")," which will be helpful in implementing all the required functionalities of our game."),(0,o.kt)("h3",{id:"step-5--modify-the-indexjs-file"},"Step 5 : Modify the index.js file"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," file inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"/pages")," folder renders the index route of the application. Let's make it display our components Header and Hero respectively,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import Head from \'next/head\'\nimport Hero from \'@/components/Hero\'\nimport Header from \'@/components/Header\'\n\n\nexport default function Home() {\n  \n  return (\n    <>\n      <Head>\n        <title>Tic Tac Toe</title>\n        <meta name="description" content="Tic Tac Toe game created with Waku" />\n        <meta name="viewport" content="width=device-width, initial-scale=1" />\n        <link rel="icon" href="/favicon.ico" />\n      </Head>\n      <main className=\'bg-black h-screen\'>\n        <Header />\n        <Hero />\n      </main>\n    </>\n  )\n}\n\n')),(0,o.kt)("h3",{id:"step-6--header-component-and-hero-component"},"Step 6 : Header component and Hero component"),(0,o.kt)("p",null,"The header component will carry a logo on the left and a button with the link to our Github on the right end:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Header.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Link from 'next/link'\nimport React from 'react'\n\nexport default function Header() {\n    return (\n        <div className='flex p-5 justify-between items-center'>\n            <Link href=\"/\">\n                <div id='logo'>\n                    Your-Logo\n                </div>\n            </Link>\n            <a href='https://github.com/hackyguru/tictactoe' className='text-white flex space-x-3 items-center cursor-pointer'>\n                <p>GitHub</p>\n            </a>\n        </div>\n    )\n}\n")),(0,o.kt)("p",null,"Remember to replace 'Your-Logo' with your application's logo."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hero.js")),(0,o.kt)("p",null,"The Hero component will allow users to create or join a new game. When a user creates a new game, a unique room ID is generated using the",(0,o.kt)("inlineCode",{parentName:"p"},"short-unique-id")," package. In case users want to join an existing game, they can enter the room ID to join in."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useState, useEffect } from 'react';\nimport Loading from './Loading';\nimport ShortUniqueId from 'short-unique-id';\nimport Router from 'next/router';\n\nexport default function Hero() {\n  const options = { length: 8 };\n  const uid = new ShortUniqueId(options);\n\n  const [room, setRoom] = useState(null);\n  const [game, setGame] = useState(null);\n  const [joinLink, setJoinLink] = useState('');\n\n  useEffect(() => {\n    if (room === null) {\n      setRoom(uid.rnd());\n    }\n  }, []);\n\n  if (room === null) {\n    return <Loading />;\n  }\n\n  const handleNewGameClick = () => {\n    sessionStorage.setItem('roomId', room);\n    sessionStorage.setItem('player', 'x');\n    Router.push(`/game/${room}`);\n  };\n\n  const handleJoinGameClick = () => {\n    setGame('join');\n  };\n\n  const handleJoinLinkChange = (e) => {\n    setJoinLink(e.target.value);\n  };\n\n  const handleJoinButtonClick = () => {\n    Router.push(`/game/${joinLink}`);\n  };\n\n  const handleGoBackClick = () => {\n    setGame(null);\n  };\n\n  return (\n    <section id='hero'>\n      <div className=\"mx-auto max-w-screen-xl px-4 lg:flex lg:mt-40 lg:items-center mt-40\">\n        <div className=\"mx-auto max-w-xl text-center\">\n          <h1 className=\"text-3xl sm:text-8xl text-white\">TicTacToe</h1>\n          <div className='mt-8 sm:text-xl/relaxed text-white opacity-60 flex items-center justify-center'>\n            <p>Built with</p>\n            <img src='https://waku.org/theme/image/logo.svg' />\n            <a href='https://waku.org' className='underline'>\n              Waku\n            </a>\n          </div>\n\n          {game === null && (\n            <div className=\"mt-20 flex flex-wrap justify-center gap-4\">\n              <button\n                className=\"block w-full bg-white px-12 py-3 text-sm font-medium hover:text-white hover:bg-black hover:border-2  hover:border-white focus:outline-none focus:ring  text-black\"\n                onClick={handleNewGameClick}\n              >\n                New game\n              </button>\n              <button\n                onClick={handleJoinGameClick}\n                className=\"block w-full bg-white px-12 py-3 text-sm font-medium hover:text-white hover:bg-black hover:border-2  hover:border-white focus:outline-none focus:ring  text-black\"\n              >\n                Join game\n              </button>\n            </div>\n          )}\n\n          {game === 'join' && (\n            <div className=\"mt-20 space-y-4\">\n              <input\n                value={joinLink}\n                onChange={handleJoinLinkChange}\n                className=\"px-3 py-3 border-2 border-white w-full\"\n                placeholder='Enter the game link'\n              />\n              <div className='flex space-x-5 items-center'>\n                <button\n                  onClick={handleJoinButtonClick}\n                  className=\"block w-full bg-white px-12 py-3 text-sm font-medium hover:text-white hover:bg-black hover:border-2  hover:border-white focus:outline-none focus:ring  text-black\"\n                >\n                  Join game\n                </button>\n                <button\n                  onClick={handleGoBackClick}\n                  className=\"block w-full bg-white px-12 py-3 text-sm font-medium hover:text-white hover:bg-black hover:border-2  hover:border-white focus:outline-none focus:ring text-black\"\n                >\n                  Go back\n                </button>\n              </div>\n            </div>\n          )}\n        </div>\n      </div>\n    </section>\n  );\n}\n")),(0,o.kt)("p",null,"The above code leverages common React hooks like ",(0,o.kt)("inlineCode",{parentName:"p"},"useState() and useEffect()")," to keep the app state and react to state changes. Summarising the above code, the state variable ",(0,o.kt)("inlineCode",{parentName:"p"},"game")," will decide if the user wants to join an existing game or create a new game. ",(0,o.kt)("inlineCode",{parentName:"p"},"ShortUniqueId()")," function will be used for generating a room ID if the user wants to create a new game."),(0,o.kt)("p",null,"For the app's simplicity, the user creating the game will always be 'player X', and the user joining the game will be 'player O'. The session storage will hold the player as X or O and can be retrieved from the ",(0,o.kt)("inlineCode",{parentName:"p"},"player")," item."),(0,o.kt)("h3",{id:"step-7--sending-and-retrieving-messages-in-roomjs"},"Step 7 : Sending and retrieving messages in ",(0,o.kt)("inlineCode",{parentName:"h3"},"Room.js")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Room.js")," file will have all the code related to sending and subscribing to the messages in the content topic. This file will also include other miscellaneous stuff like the winning conditions, the player to make a move, finding if an opponent has joined the game and finally, finding the winner."),(0,o.kt)("p",null,"Firstly, let us make all the required imports :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useState, useEffect } from 'react';\nimport Link from 'next/link';\nimport copy from 'copy-to-clipboard';\nimport protobuf from 'protobufjs';\nimport {\n  useWaku,\n  useContentPair,\n  useLightPush,\n  useStoreMessages,\n  useFilterMessages,\n} from '@waku/react';\nimport { message } from '@waku/core';\nimport Loading from './Loading';\n")),(0,o.kt)("p",null,"After this , we use a ",(0,o.kt)("inlineCode",{parentName:"p"},"Protobuff")," object to define the structure of the messages like below :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const ChatMessage = new protobuf.Type('ChatMessage')\n  .add(new protobuf.Field('timestamp', 1, 'uint64'))\n  .add(new protobuf.Field('sender', 2, 'string'))\n  .add(new protobuf.Field('message', 3, 'string'));\n")),(0,o.kt)("p",null,"Next, let us set up encoder and decoder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  const { decoder, encoder } = useContentPair();\n")),(0,o.kt)("p",null,"Initializing LightPush, Filter and Store can be done in a very few lines of code :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  const { messages: storeMessages } = useStoreMessages({\n    node,\n    decoder,\n  });\n\n  const { messages: filterMessages } = useFilterMessages({ node, decoder });\n\n  const { push } = useLightPush({ node, encoder });\n")),(0,o.kt)("p",null,"With all these set up, sending a message into a content topic is completed. Here's how your ",(0,o.kt)("inlineCode",{parentName:"p"},"sendMessage()")," function should look like :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  async function sendMessage(sender, message) {\n    const protoMessage = ChatMessage.create({\n      timestamp: Date.now(),\n      sender,\n      message,\n    });\n\n    const serialisedMessage = ChatMessage.encode(protoMessage).finish();\n\n    const timestamp = new Date();\n    await push({\n      payload: serialisedMessage,\n      timestamp,\n    });\n\n    console.log('MESSAGE PUSHED');\n  }\n")),(0,o.kt)("p",null,"To setup the ",(0,o.kt)("inlineCode",{parentName:"p"},"decodeMessage()")," function, you will have to pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"wakuMessage")," option into the function and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatMessage.decode()")," function with the required parameters. Here's the code :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  function decodeMessage(wakuMessage) {\n    if (!wakuMessage.payload) return;\n\n    const { timestamp, sender, message } = ChatMessage.decode(wakuMessage.payload);\n\n    if (!timestamp || !sender || !message) return;\n\n    const time = new Date();\n    time.setTime(Number(timestamp));\n\n    return {\n      message,\n      timestamp: time,\n      sender,\n      timestampInt: wakuMessage.timestamp,\n    };\n  }\n")),(0,o.kt)("h3",{id:"step-8--winning-conditions-and-finding-the-winner-with-useeffect"},"Step 8 : Winning conditions and finding the winner with ",(0,o.kt)("inlineCode",{parentName:"h3"},"UseEffect()")),(0,o.kt)("p",null,"We will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook to retrieve and map the messages from the contentTopic. After this, we also use the winning combinations to find the winner between the two players :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Finding if the players have joined the room\n  useEffect(() => {\n    if (node !== undefined) {\n      if (player === false) {\n        const p =\n          sessionStorage.getItem('roomId') == props.room && sessionStorage.getItem('player') == 'x'\n            ? 'x'\n            : 'o';\n\n        setPlayer(p);\n        if (p === 'o') {\n          sendMessage('o', 'joined');\n        }\n      }\n      setNodeStart(true);\n    }\n  }, [node]);\n\n// Defining the winning condition and \n  useEffect(() => {\n    let messages = storeMessages.concat(filterMessages);\n\n    let b = {};\n    let o = false;\n\n    messages = messages.map((message) => decodeMessage(message));\n\n    messages.forEach((message) => {\n      if (message.message === 'joined') {\n        o = true;\n        return;\n      }\n      if (message.message === 'winner') {\n        return;\n      }\n\n      b = { ...b, [message.message]: message.sender };\n    });\n\n    const winningCombinations = [\n      ['1', '2', '3'],\n      ['4', '5', '6'],\n      ['7', '8', '9'],\n      ['1', '4', '7'],\n      ['2', '5', '8'],\n      ['3', '6', '9'],\n      ['1', '5', '9'],\n      ['3', '5', '7'],\n    ];\n\n    let winner = null;\n    let temp = null;\n    let winningPattern = null;\n\n    winningCombinations.forEach((combination) => {\n      if (winner !== null) {\n        return;\n      }\n      for (let [i, c] of combination.entries()) {\n        if (b[c] === undefined) {\n          temp = null;\n          break;\n        } else {\n          if (temp === null) {\n            temp = b[c];\n            continue;\n          } else {\n            if (temp === b[c]) {\n              if (i === 2) {\n                winner = temp;\n                winningPattern = combination;\n              }\n              continue;\n            }\n          }\n        }\n      }\n    });\n\n    setWinner(winner);\n    setWinningPattern(winningPattern);\n    setOpponentJoined(o);\n    setBoxes(b);\n  }, [storeMessages, filterMessages]);\n")),(0,o.kt)("p",null,"The game will automatically end if a winning condition is met by one of the users."),(0,o.kt)("h3",{id:"step-9--loading-component-and-rendering-the-boxes"},"Step 9 : Loading component and rendering the boxes"),(0,o.kt)("p",null,"The loading component will be visible if the node is not started or if an opponent player has not joined the room yet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  if (!nodeStart || !player || opponentJoined === null) {\n    return <Loading />;\n  }\n")),(0,o.kt)("p",null,"Here's the code for ",(0,o.kt)("inlineCode",{parentName:"p"},"Loading.js")," component :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import React from \'react\'\n\nexport default function Loading() {\n    return (\n        <div className=\'h-screen bg-black flex items-center w-full justify-center\'>\n            <svg width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                <g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-width="2">\n                    <path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z">\n                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0" />\n                    </path>\n                    <path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12">\n                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0" />\n                        <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />\n                    </path>\n                </g>\n            </svg>\n            \n        </div>\n    )\n}\n\n')),(0,o.kt)("p",null,"After you are done setting up the loading component, it's time to write a function that will handle rendering the boxes. This function will be used as an ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," handler that will send either ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"o")," based on the player who clicks the box. It will also render the boxes with ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"o")," based on the player who has clicked the box previously. Here's the function :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  function renderBoxes() {\n    let boxElements = [];\n    for (let i = 1; i < 10; i += 1) {\n      if (boxes[i] === undefined) {\n        boxElements.push(\n          <div\n            onClick={() => handlePlay(i.toString())}\n            className='w-20 h-20 border-2 border-white flex items-center justify-center text-2xl text-white'\n          ></div>\n        );\n      } else {\n        if (boxes[i] === 'x') {\n          boxElements.push(\n            <div className='w-20 h-20 border-2 border-white flex items-center justify-center text-2xl text-white'>\n              X\n            </div>\n          );\n        } else {\n          boxElements.push(\n            <div className='w-20 h-20 border-2 border-white flex items-center justify-center text-2xl text-white'>\n              O\n            </div>\n          );\n        }\n      }\n    }\n    return <div id='tiles' className='grid grid-cols-3 grid-rows-3 gap-3 mt-10'>{boxElements}</div>;\n  }\n")),(0,o.kt)("p",null,"The above ",(0,o.kt)("inlineCode",{parentName:"p"},"renderBoxes()")," function will render only the box grid. We also need some prompts to mention which user should be playing their move (X or Y) and also announce the winner. For this, here's a simple UI that you can return in the Room function :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    <section id='room'>\n      <div className='flex justify-end mr-5 text-white space-x-5 items-center'>\n        <p>Waku status : active</p>\n\n        <svg width='20' height='20' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>\n          <g fill='none' stroke='currentColor' strokeWidth='4'>\n            <path d='M13.5 39.37A16.927 16.927 0 0 0 24 43c3.963 0 7.61-1.356 10.5-3.63M19 9.747C12.051 11.882 7 18.351 7 26c0 1.925.32 3.775.91 5.5M29 9.747C35.949 11.882 41 18.351 41 26c0 1.925-.32 3.775-.91 5.5' />\n            <path strokeLinecap='round' strokeLinejoin='round' d='M43 36c0 1.342-.528 2.56-1.388 3.458A5 5 0 1 1 43 36Zm-28 0c0 1.342-.528 2.56-1.388 3.458A5 5 0 1 1 15 36ZM29 9c0 1.342-.528 2.56-1.388 3.458A5 5 0 1 1 29 9Z' />\n          </g>\n        </svg>\n        <p>Peers : {node?.libp2p?.getPeers()?.length ?? '-'}</p>\n      </div>\n\n      <div className='mx-auto max-w-screen-xl px-4 mt-20 lg:flex lg:h-mt-40 lg:items-center'>\n        <div className='mx-auto max-w-xl'>\n          <div className='flex space-x-2 text-white opacity-60 mb-5 items-center'>\n            <Link href='/'>\n              <svg width='20' height='20' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'>\n                <path fill='currentColor' d='M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z' />\n                <path\n                  fill='currentColor'\n                  d='m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z'\n                />\n              </svg>\n            </Link>\n            <p>Game URL</p>\n          </div>\n          <div className='px-3 py-3 text-center flex border-2 border-white text-white underline items-center justify-between'>\n            <p>https://waku-xo.vercel.app/game/{props.room}</p>\n            <button onClick={() => copy(`https://waku-xo.vercel.app/game/${props.room}`)}>\n              <svg width='20' height='20' viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'>\n                <path\n                  fill='currentColor'\n                  d='M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z'\n                />\n              </svg>\n            </button>\n          </div>\n\n          <h1 className='text-3xl sm:text-4xl text-white mt-20'>\n            {!opponentJoined && 'Waiting for opponent to join'}\n            {winner == null &&\n              opponentJoined &&\n              (Object.keys(boxes).length % 2 === 0\n                ? player === 'x'\n                  ? 'Your turn'\n                  : \"Opponent's turn\"\n                : player === 'o'\n                ? 'Your turn'\n                : \"Opponent's turn\")}\n            {winner != null && (winner === 'x' ? 'X is winner' : 'O is winner')}\n          </h1>\n{\n!winner &&\n          <div className='flex justify-center'>{renderBoxes()}</div>\n}\n        </div>\n      </div>\n    </section>\n")),(0,o.kt)("h3",{id:"step-10--rendering-the-room"},"Step 10 : Rendering the room"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Room.js")," is quite a big chunk of code, right? But don't worry - it is easy to follow up and the final code can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hackyguru/tictactoe/blob/main/components/Room.js"},"here"),"."),(0,o.kt)("p",null,"There is one final step before our TicTacToe is complete. It is to create the ",(0,o.kt)("inlineCode",{parentName:"p"},"game/[id].js")," page component. This component will render the room based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"room id")," provided on the URL. We use the     ",(0,o.kt)("inlineCode",{parentName:"p"},"useRouter()")," hook to query the room id from the URL and then render the Room component :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\nimport Header from '@/components/Header'\nimport Room from '@/components/Room'\nimport React, { useState, useEffect } from 'react'\nimport Loading from '@/components/Loading';\nimport { useRouter } from 'next/router'\n\n\n// Waku imports\nimport { ContentPairProvider, useWaku } from \"@waku/react\";\n\n// Misc imports\nimport ShortUniqueId from 'short-unique-id';\n\nexport default function Game() {\n\n    const router = useRouter();\n    const room = router.query.id;\n\n    return (\n        <>\n            <ContentPairProvider\n                contentTopic={\"/tictactoe/\" + room}\n            >\n                <div className='bg-black h-screen'>\n                    <Header />\n                    <Room room={room} />\n                </div>\n            </ContentPairProvider>\n        </>\n    )\n}\n")),(0,o.kt)("h3",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"I hope that your TicTacToe application with Waku will be up and running now. If you are still stuck at part of the above 10 steps, please refer to our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hackyguru/tictactoe"},"example repository")," now. You can also try out the TicTacToe game in ",(0,o.kt)("a",{parentName:"p",href:"https://waku-xo.vercel.app"},"this link"),"."),(0,o.kt)("p",null,"Please note that this is a very basic demonstration of using Waku's react hooks to build a TicTacToe game. The game still needs a lot of improvements in terms of handling the connection, establishing the winning , etc."),(0,o.kt)("p",null,"Here are some ideas for you to include in the future: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"adding P2E (Play to Earn) mechanisms where users can connect their wallet, stake some crypto and then the winner gets the stake.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"adding names for players")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"minting an NFT for the winner once a game is over"))),(0,o.kt)("p",null,"With Waku, the possibilities are limitless. Go ahead and start building! If you have any questions, feel free to drop us a messafe in our support channel on the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.waku.org"},"Waku discord community"),"."))}c.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return t?a.createElement(h,r(r({ref:n},u),{},{components:t})):a.createElement(h,r({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13820:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/tictactoe-tutorial-a18c79c793c8d2cb6938bb58efa92875.png"},84740:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/wireframe-ttt-21cd5068888fdf6115fa38015567ab91.png"}}]);