"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[399],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var n=a(67294);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,p=e.mdxType,i=e.originalType,l=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),u=c(a),d=p,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return a?n.createElement(m,o(o({ref:t},s),{},{components:a})):n.createElement(m,o({ref:t},s))}));function d(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=a.length,o=new Array(i);o[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:p,o[1]=r;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},65606:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=a(87462),p=a(63366),i=(a(67294),a(3905)),o=["components"],r={title:"Wechaty Puppet",sidebar_label:"Puppet"},l=void 0,c={unversionedId:"specs/puppet",id:"specs/puppet",isDocsHomePage:!1,title:"Wechaty Puppet",description:"What is Wechaty Puppet",source:"@site/docs/specs/puppet.md",sourceDirName:"specs",slug:"/specs/puppet",permalink:"/docs/specs/puppet",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/specs/puppet.md",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1632996436,formattedLastUpdatedAt:"9/30/2021",frontMatter:{title:"Wechaty Puppet",sidebar_label:"Puppet"},sidebar:"docs",previous:{title:"Plugin",permalink:"/docs/specs/plugin"},next:{title:"Service",permalink:"/docs/specs/service"}},s=[{value:"What is Wechaty Puppet",id:"what-is-wechaty-puppet",children:[]},{value:"Show me the code",id:"show-me-the-code",children:[{value:"Important Puppets",id:"important-puppets",children:[]}]},{value:"Using Puppet with Wechaty Examples",id:"using-puppet-with-wechaty-examples",children:[]},{value:"Basic Rules",id:"basic-rules",children:[]},{value:"MemoryCard",id:"memorycard",children:[{value:"Wechaty bot login with memory card module",id:"wechaty-bot-login-with-memory-card-module",children:[]}]},{value:"Event Order",id:"event-order",children:[]},{value:"Event: <code>ready</code>",id:"event-ready",children:[]},{value:"Payload Cache Management",id:"payload-cache-management",children:[]},{value:"Event: <code>heartbeat</code>",id:"event-heartbeat",children:[{value:"The <code>heartbeat</code> design",id:"the-heartbeat-design",children:[]},{value:"<code>heartbeat</code> Example",id:"heartbeat-example",children:[]},{value:"Important Links",id:"important-links",children:[]},{value:"Wechaty Puppet Message Processing Flow",id:"wechaty-puppet-message-processing-flow",children:[]},{value:"Future Enhancements",id:"future-enhancements",children:[]},{value:"Wechaty Puppet Uses",id:"wechaty-puppet-uses",children:[]},{value:"Learn More",id:"learn-more",children:[]}]},{value:"NPM publications",id:"npm-publications",children:[]}],h={toc:s};function u(e){var t=e.components,r=(0,p.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-wechaty-puppet"},"What is Wechaty Puppet"),(0,i.kt)("p",null,"The term ",(0,i.kt)("inlineCode",{parentName:"p"},"Puppet")," in Wechaty is an Abstract Class for implementing protocol plugins. The plugins are the components that help the  Wechaty to control the IMs like WeChat.\nThe plugins are named ",(0,i.kt)("inlineCode",{parentName:"p"},"PuppetXXX"),", like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-puppeteer"},"PuppetPuppeteer")," is using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GoogleChrome/puppeteer"},"google puppeteer")," to control the ",(0,i.kt)("a",{parentName:"p",href:"https://wx.qq.com"},"WeChat Web API")," via a chrome browser, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/padlocal/wechaty-puppet-padlocal"},"PuppetPadLocal")," is using the Pad Protocol to connect with WeChat Server.\nFor better understanding of the Puppet below are some links listed down:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Puppet Providers Directory: ",(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-providers/"},"https://wechaty.js.org/docs/puppet-providers/")),(0,i.kt)("li",{parentName:"ul"},"Puppet Compatibility Table: ",(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-services/compatibility/"},"https://wechaty.js.org/docs/puppet-services/compatibility/")),(0,i.kt)("li",{parentName:"ul"},"Puppet Development Guide: ",(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-providers/diy"},"https://wechaty.js.org/docs/puppet-providers/diy")),(0,i.kt)("li",{parentName:"ul"},"Puppet Related Links: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet/wiki/Links"},"https://github.com/wechaty/wechaty-puppet/wiki/Links")),(0,i.kt)("li",{parentName:"ul"},"Puppet Documentation: ",(0,i.kt)("a",{parentName:"li",href:"https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html"},"https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html"))),(0,i.kt)("h2",{id:"show-me-the-code"},"Show me the code"),(0,i.kt)("p",null,"For a deeper understanding of the Puppet in Wechaty, you can read its documentation from ",(0,i.kt)("a",{parentName:"p",href:"https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html"},"https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html")," and source code if you like at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet/blob/main/src/puppet.ts"},"https://github.com/wechaty/wechaty-puppet/blob/main/src/puppet.ts"),"\nBelow is an architectural diagram of Wechaty Puppet."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"abstract puppet",src:a(59736).Z})),(0,i.kt)("h3",{id:"important-puppets"},"Important Puppets"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Puppet Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PuppetPuppeteer"),(0,i.kt)("td",{parentName:"tr",align:null},"A web solution to connect WeChat, Wechaty init  is implemented by web WeChat, which injects JavaScript code into chrome.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PuppetMock"),(0,i.kt)("td",{parentName:"tr",align:null},"A mock function to connect WeChat, not a real implementation, for testing other connectors to connect with Wechaty. This is used to further to connect other solutions, such as iPad, Xposed, iOS and windows client,")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PuppetPadLocal"),(0,i.kt)("td",{parentName:"tr",align:null},"An iPad solution to connect WeChat.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PuppetService"),(0,i.kt)("td",{parentName:"tr",align:null},"It is a gRPC solution.")))),(0,i.kt)("h2",{id:"using-puppet-with-wechaty-examples"},"Using Puppet with Wechaty Examples"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-mock"},"wechaty-puppet-mock")," to run ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/main/examples/ding-dong-bot.ts"},"ding-dong-bot")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"WECHATY_PUPPET=wechaty-puppet-mock npm start\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-padpro"},"wechaty-puppet-padpro")," to run ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/main/examples/ding-dong-bot.ts"},"ding-dong-bot")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"WECHATY_PUPPET=wechaty-puppet-padpro npm start\n")))),(0,i.kt)("h2",{id:"basic-rules"},"Basic Rules"),(0,i.kt)("p",null,"Here are some rules that a Wechaty Puppet should follow:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Emit Self Messages"),": when the bot says anything, the bot should receive a message said by itself. (and the ",(0,i.kt)("inlineCode",{parentName:"li"},"message.self()")," will return true for this message)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Perfect Logout"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"logout")," method should clean all the user session data from the puppet service, and the status of the App on the phone should display correctly (not log in on any devices)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"State-less Session Management")," (with MemoryCard support): the puppet service should save the user session data to the memory card, and can be restored from the memory card."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"MIME File Name Extension Convention"),": FileBoxChunk.name must be able to convert to a MIME type and visa versa. The puppet needs to set the name with the right extension (.jpg, .pdf, etc) to the name of the file box. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-hostie/discussions/115"},"See"),",\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/puppet-services/discussions/54"},"See")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Perfect Restart"),": the puppet should be able to restart at least 3 times in the unit tests, and do not leave any timer in the event loop after the testings. (i.e. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-service/blob/7d7fb5815b1288b2e7c31f6e67d3edfe57c7c277/src/client/puppet-service.spec.ts#L18-L30"},"this unit test"),")")),(0,i.kt)("h2",{id:"memorycard"},"MemoryCard"),(0,i.kt)("p",null,"When a Wechaty bot is logged in, it will have a authorized secret data to store logged-in session, for example, the device information (62 data for pad protocol), the cookie (if you are using the web protocol), and the user session secrets, etc."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/huan/memory-card"},"memory card")," is a module designed to store those data."),(0,i.kt)("h3",{id:"wechaty-bot-login-with-memory-card-module"},"Wechaty bot login with memory card module"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"wechaty start()"),(0,i.kt)("li",{parentName:"ol"},"wechaty instanciates memory card (see ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/blob/30c446b2b78c92166a1d613952e77d3e3fdbbe1f/src/wechaty.ts#L681"},"wechaty.ts:start()"),")"),(0,i.kt)("li",{parentName:"ol"},"wechaty set memory card to puppet (see ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/blob/30c446b2b78c92166a1d613952e77d3e3fdbbe1f/src/wechaty.ts#L406"},"wechaty.ts:initPuppet()"),")\na. puppet start()\nb. puppet load session from memory card\nc. puppet logged in\ni. by loaded session, or\nii. by scan qr code\nd. puppet save the session secret data to memory card"),(0,i.kt)("li",{parentName:"ol"},"memory card will be saved to file or network storage for future reuse.")),(0,i.kt)("p",null,"By saving the user login session secret data to memory card, the Wechaty system can save the state to local, so that it can make the puppet service provider stateless.\nCurrently neither of the Donut, WXWork, Rock, PadLocal have support for this stateless feature, nor the Wechaty system is ready for it."),(0,i.kt)("h2",{id:"event-order"},"Event Order"),(0,i.kt)("p",null,"The order of events before the bot starts is very important and this section explains it in a a detailed manner:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When you first start the bot, the ",(0,i.kt)("inlineCode",{parentName:"li"},"login")," event is first  generated."),(0,i.kt)("li",{parentName:"ol"},"However, the Wechaty system needs to load the contact payload of the ",(0,i.kt)("inlineCode",{parentName:"li"},"userSelf")," before it emits the ",(0,i.kt)("inlineCode",{parentName:"li"},"login")," event because the login event of Wechaty needs to take a ",(0,i.kt)("inlineCode",{parentName:"li"},"userSelf")," instance.So there will be some delay before the Wechaty emit the ",(0,i.kt)("inlineCode",{parentName:"li"},"login")," event after it received the ",(0,i.kt)("inlineCode",{parentName:"li"},"login")," event from its puppet."),(0,i.kt)("li",{parentName:"ol"},"Then the ",(0,i.kt)("inlineCode",{parentName:"li"},"ready-ed")," event is generated.The event is generated just before the ",(0,i.kt)("inlineCode",{parentName:"li"},"ready")," event."),(0,i.kt)("li",{parentName:"ol"},"Then lastly the ",(0,i.kt)("inlineCode",{parentName:"li"},"ready")," event is generated.")),(0,i.kt)("p",null,"For a more robust Wechaty system, we can consider saving the ",(0,i.kt)("inlineCode",{parentName:"p"},"ready")," event if the ",(0,i.kt)("inlineCode",{parentName:"p"},"login")," event is not emitted in Wechaty and when we emit the ",(0,i.kt)("inlineCode",{parentName:"p"},"login")," event in Wechaty, we can check if the puppet has already ",(0,i.kt)("inlineCode",{parentName:"p"},"ready-ed"),", and if so, it can emit the ",(0,i.kt)("inlineCode",{parentName:"p"},"ready")," event right after the ",(0,i.kt)("inlineCode",{parentName:"p"},"login")," event.",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services/issues/31"},"See")),(0,i.kt)("h2",{id:"event-ready"},"Event: ",(0,i.kt)("inlineCode",{parentName:"h2"},"ready")),(0,i.kt)("p",null,"Need to fire ",(0,i.kt)("inlineCode",{parentName:"p"},"ready")," event after the bot logined and all data has been synced."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For example, after we re-installed the WeChat app on our phone, it has to load contacts/rooms from the server for a long time.\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-service/issues/18"},"check"))),(0,i.kt)("h2",{id:"payload-cache-management"},"Payload Cache Management"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If the low-level puppet wants to dirty a payload, emit a ",(0,i.kt)("inlineCode",{parentName:"li"},"dirty")," event. The payload will be the ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," of the paload"),(0,i.kt)("li",{parentName:"ol"},"If the high-level puppet wants to dirty a payload, call ",(0,i.kt)("inlineCode",{parentName:"li"},"dirtyPayload(type, id)")," method, what it does (and only does) is to make the low-level puppet emit a ",(0,i.kt)("inlineCode",{parentName:"li"},"dirty")," event."),(0,i.kt)("li",{parentName:"ol"},"Each puppet should listen to the ",(0,i.kt)("inlineCode",{parentName:"li"},"dirty")," event, and call ",(0,i.kt)("inlineCode",{parentName:"li"},"XXXPayloadDirty(id)")," to purge the internal cache of the specific payload inside itself\nRelated issues:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-service/issues/164"},"Specification for dirty event, dirtyPayload(), and `XXXPayloadDirty() to puppet abstraction, puppet implementation, puppet server, and puppet client. wechaty/wechaty-puppet-service#164")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-service/issues/43"},"No contactPayloadDirty method in puppet-implementation. wechaty/wechaty-puppet-service#43")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/grpc/pull/79"},"add dirty rpc function definition for sync data wechaty/grpc#79"))),(0,i.kt)("h2",{id:"event-heartbeat"},"Event: ",(0,i.kt)("inlineCode",{parentName:"h2"},"heartbeat")),(0,i.kt)("p",null,"Puppet must emit heartbeats to provide a health check signal."),(0,i.kt)("h3",{id:"the-heartbeat-design"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"heartbeat")," design"),(0,i.kt)("p",null,"Here are the details:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Wechaty Puppet is designed to emit at least one event in 60 seconds. If we do not have any events to emit, then we need to emit a ",(0,i.kt)("inlineCode",{parentName:"li"},"heartbeat")," event so that it can prove itself as alive and healthy. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet/blob/bab9e29c088c33fa8bc6e148d9bdadbd453fd138/src/puppet.ts#L253-L254"},"See")),(0,i.kt)("li",{parentName:"ol"},"It seems that the PadLocal does not have any ",(0,i.kt)("inlineCode",{parentName:"li"},"heartbeat")," event to emit when there are no other events, so if your bot idle for more than 60 seconds, then the Wechaty Puppet system will think the puppet provider is dead, so it will call ",(0,i.kt)("inlineCode",{parentName:"li"},"reset")," to try to recover the puppet.")),(0,i.kt)("p",null,"A leaking of ",(0,i.kt)("inlineCode",{parentName:"p"},"heartbeat")," example logs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'02:00:13 INFO StarterBot Message#Text[\ud83d\udde3Contact<OssChat>@\ud83d\udc65Room<ChatOps - Heartbeat \ud83d\udc96>] [\u592a\u9633]\n\n02:01:13 WARN Puppet dogReset() reason: {"data":"onGrpcStreamEvent(EVENT_TYPE_MESSAGE)","timeout":60000}\n02:01:13 VERB Puppet reset(onGrpcStreamEvent(EVENT_TYPE_MESSAGE))\n02:01:13 VERB PuppetService stop()\n02:01:13 VERB StateSwitch <PuppetService> off(pending) <- (false)\n02:01:13 VERB PuppetService stopGrpcStream()\n02:01:13 VERB PuppetService stopGrpcClient()\n02:01:13 VERB Puppet selfId()\n02:01:13 VERB StateSwitch <PuppetService> off(true) <- (pending)\n02:01:13 INFO StarterBot Contact<Mike (\u674e\u5353\u6853)> logout\n02:01:13 VERB PuppetService start()\n02:01:13 VERB StateSwitch <PuppetService> on(pending) <- (false)\n02:01:13 VERB PuppetService startGrpcClient()\n02:01:13 VERB PuppetService discoverServiceIp(e49007b7-7523-4a80-bfdb-1be0de3844b9)\n02:01:14 VERB PuppetService startGrpcStream()\n02:01:14 VERB StateSwitch <PuppetService> on(true) <- (pending)\n02:01:14 VERB PuppetService onGrpcStreamEvent({type:EVENT_TYPE_LOGIN(25), payload:"{"contactId":"wxid_a8d806dzznm822"}"})\n02:01:14 INFO StarterBot Contact<Mike (\u674e\u5353\u6853)> login\n02:01:15 VERB PuppetService onGrpcStreamEvent({type:EVENT_TYPE_READY(23), payload:"{"data":"ready"}"})\n02:01:15 VERB StateSwitch <WechatyReady> on(true) <- (true)\n02:01:20 VERB PuppetService onGrpcStreamEvent({type:EVENT_TYPE_READY(23), payload:"{"data":"ready"}"})\n02:01:20 VERB StateSwitch <WechatyReady> on(true) <- (true)\n')),(0,i.kt)("h3",{id:"heartbeat-example"},(0,i.kt)("inlineCode",{parentName:"h3"},"heartbeat")," Example"),(0,i.kt)("p",null,"Here's an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-puppeteer/blob/07f6260b3784c65bcee24bd003aac5d2968a9efc/src/wechaty-bro.js#L103-L112"},"example")," from our puppeteer puppet, which emits heartbeats in the browser, so if the browser dead, we will get to know because the heartbeat will be lost.Also check out the docs on ",(0,i.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/using-plugin-with-wechaty/heartbeat"},"Heartbeat Plugin"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services/issues/85#issuecomment-769967606"},"Check the link"),"."),(0,i.kt)("h3",{id:"important-links"},"Important Links"),(0,i.kt)("p",null,"Please refer to the below links for more information on different methods of Message class:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/New_temporary_materials.html"},"message material in official-account")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/master/src/official-account/official-account.ts#L299"},"sendFile method")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/master/src/puppet-oa.ts#L495"},"messageSend method"))),(0,i.kt)("p",null,"Wechaty now support very limited Message types for more information ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/webhook.ts#L241-L244"},"check here"),"\nIn order to support receiving more message types, like audio, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/webhook.ts#L247-L252"},"look here")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Also note that ",(0,i.kt)("strong",{parentName:"p"},"Video")," type Message is not supported right now by Wechaty.")),(0,i.kt)("h3",{id:"wechaty-puppet-message-processing-flow"},"Wechaty Puppet Message Processing Flow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The Webhook gets called by the Tencent Server.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The message ",(0,i.kt)("strong",{parentName:"p"},"event")," will be propagated from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Webhook")," class to the ",(0,i.kt)("inlineCode",{parentName:"p"},"OfficialAccount")," class:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/official-account.ts#L116-L119"},"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/official-account.ts#L116-L119"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The message ",(0,i.kt)("strong",{parentName:"p"},"event")," will be propagated from the ",(0,i.kt)("inlineCode",{parentName:"p"},"OfficialAccount")," class to the ",(0,i.kt)("inlineCode",{parentName:"p"},"PuppetOA")," class:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/puppet-oa.ts#L188-L189"},"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/puppet-oa.ts#L188-L189"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After message ",(0,i.kt)("strong",{parentName:"p"},"event")," be propagated from the PuppetOA to Wechaty, then the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet/blob/763e94194fd1104007fccad4ba4994365890cde8/src/puppet.ts#L834"},"puppet.messagePayload()")," will be called to get the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet/blob/763e94194fd1104007fccad4ba4994365890cde8/src/schemas/message.ts#L103"},"Wechaty Message Payload"),".  Here is the most important part: we need to construct a Wechaty Message Payload from the Raw Message Payload (source code at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet/blob/763e94194fd1104007fccad4ba4994365890cde8/src/puppet.ts#L854-L855"},"here"),"):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"   const rawPayload = await this.messageRawPayload(messageId)\n   const payload    = await this.messageRawPayloadParser(rawPayload)\n")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Message Processing flow",src:a(77164).Z,title:"Message processing flow"})),(0,i.kt)("h3",{id:"future-enhancements"},"Future Enhancements"),(0,i.kt)("p",null," Futute enhancements can be to  add more types of Message that Wechaty can support by implementing the ",(0,i.kt)("inlineCode",{parentName:"p"},"messageRawPayload")," methods, which can be ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/puppet-oa.ts#L456-L478"},"found here")," and also check out this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-official-account/issues/19"},"link")," for more information."),(0,i.kt)("h3",{id:"wechaty-puppet-uses"},"Wechaty Puppet Uses"),(0,i.kt)("h4",{id:"dingdong-protocol"},(0,i.kt)("inlineCode",{parentName:"h4"},"Ding"),"/",(0,i.kt)("inlineCode",{parentName:"h4"},"Dong")," Protocol"),(0,i.kt)("p",null,"Ding dong protocol is a rule built using the Puppet which has a API named ",(0,i.kt)("inlineCode",{parentName:"p"},"ding(data: string): void"),", and the Puppet has the following functionality:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"emit a ",(0,i.kt)("inlineCode",{parentName:"li"},"dong")," event when the ",(0,i.kt)("inlineCode",{parentName:"li"},"ding()")," method has been called"),(0,i.kt)("li",{parentName:"ol"},"the payload of the ",(0,i.kt)("inlineCode",{parentName:"li"},"dong")," event might contains a ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," key with the value exactly match the ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," when calling the ",(0,i.kt)("inlineCode",{parentName:"li"},"ding()")," method.")),(0,i.kt)("p",null,"For further information about the  uses Ding dong protocol check out ",(0,i.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/examples/basic/ding-dong-bot"},"Ding Dong Bot")),(0,i.kt)("h3",{id:"learn-more"},"Learn More"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Puppet Related Links: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet/wiki/Links"},"https://github.com/wechaty/wechaty-puppet/wiki/Links"))),(0,i.kt)("h2",{id:"npm-publications"},"NPM publications"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"li"},"wechaty-puppet")," is not a dependency. It should be put in devDependencies and peerDependencies"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"li"},"wechaty")," is not a dependency. It should be put in devDependencies and peerDependencies"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","must exist ",(0,i.kt)("inlineCode",{parentName:"li"},"examples/ding-dong-bot.ts")," to implement the ding/dong logic, use puppet API only.")))}u.isMDXComponent=!0},59736:function(e,t,a){t.Z=a.p+"assets/images/architecture-ef4e78c0bf9d9b359328f3de8751ebb1.png"},77164:function(e,t,a){t.Z=a.p+"assets/images/messageprocess-flow-e60a6857ba4bbe59d289582d1471b819.webp"}}]);