"use strict";(self.webpackChunkhack_your_future_belgium=self.webpackChunkhack_your_future_belgium||[]).push([[691],{5803:function(e,t,n){n.d(t,{Z:function(){return Q}});var a=n(7294),i="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,r="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",l=null,c=function(e){return null!==l||(l=new Promise((function(t,n){if("undefined"!=typeof window&&"undefined"!=typeof document)if(window.Stripe&&e&&console.warn(r),window.Stripe)t(window.Stripe);else try{var a=function(){for(var e=document.querySelectorAll('script[src^="'.concat(i,'"]')),t=0;t<e.length;t++){var n=e[t];if(o.test(n.src))return n}return null}();a&&e?console.warn(r):a||(a=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(i).concat(t);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(n),n}(e)),a.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),a.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(l){return void n(l)}else t(null)}))),l},d=function(e,t,n){if(null===e)return null;var a=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.48.0",startTime:t})}(a,n),a},s=Promise.resolve().then((function(){return c(null)})),m=!1;s.catch((function(e){m||console.warn(e)}));let p;var u=()=>(p||(p=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];m=!0;var a=Date.now();return s.then((function(e){return d(e,t,a)}))}("pk_live_51LtuIuAwSpPsVM3a17NgcmkhQ7WWTlX4dXWoMcEi6i5oxWIQnQeJouneqq6TcsagoGEKKSlHEig8mGkhKLNpWuTm00ik9P6nxi",{stripeAccount:"acct_1LtuIuAwSpPsVM3a"})),p);const g=async(e,t)=>{const n={method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json; charset=utf-8"},redirect:"follow",referrer:"no-referrer"};void 0!==t&&Object.assign(n,{body:JSON.stringify(Object.assign(t,{successUrl:"https://hackyourfuture.be/#success",cancelUrl:"https://hackyourfuture.be/#cancel"}))});const a=await fetch("https://stripe.hyf.be"+e,n),i=await a.json();if(!0!==a.ok)throw new Error(i.detail);return i};var f=n(540),A=n(9853);const h=f.default.form.withConfig({componentId:"sc-1b5m2k9-0"})(["display:flex;flex-direction:column;align-items:flex-start;"]),E=f.default.ul.withConfig({componentId:"sc-1b5m2k9-1"})(["display:flex;margin:20px 0;"]),w=(0,f.default)((e=>{let{isDisabled:t,...n}=e;return a.createElement("input",n)})).withConfig({componentId:"sc-1b5m2k9-2"})(["width:100%;border:none;border-bottom:1px solid ",";margin:20px 0;font-size:18px;padding:5px;box-sizing:border-box;color:",";background-color:transparent;outline:none;"],A.r$.JACKSON_PURPLE,A.r$.JACKSON_PURPLE),x=(0,f.default)((e=>{let{isActive:t,...n}=e;return a.createElement("li",Object.assign({tabIndex:0},n))})).withConfig({componentId:"sc-1b5m2k9-3"})(["display:flex;border:1px solid ",";color:",";padding:15px 20px;cursor:pointer;justify-content:center;background-color:",";font-family:",";&:not(:last-child){border-right:none;}&:hover,&:focus,&:active{background-color:",";color:white;}@media ","{padding:5px 10px;align-items:center;}"],A.r$.JACKSON_PURPLE,(e=>{let{isActive:t}=e;return t?"white":A.r$.JACKSON_PURPLE}),(e=>{let{isActive:t}=e;return t?A.r$.JACKSON_PURPLE:"white"}),A.ut.WORK,A.r$.JACKSON_PURPLE,A.Pr.TABLET_AND_DOWN),b=(0,f.default)((e=>{let{direction:t,...n}=e;return a.createElement("div",n)})).withConfig({componentId:"sc-1b5m2k9-4"})(["display:flex;flex-direction:",";&:first-child{margin-bottom:20px;}"],(e=>{let{direction:t}=e;return t}));b.defaultProps={direction:"column"};const v=(0,f.default)((e=>{let{htmlFor:t,id:n,...i}=e;return a.createElement("label",Object.assign({htmlFor:t},i))})).withConfig({componentId:"sc-1b5m2k9-5"})(["cursor:pointer;display:flex;align-items:center;margin-right:20px;"]),y=(0,f.default)((e=>{let{...t}=e;return a.createElement("input",t)})).withConfig({componentId:"sc-1b5m2k9-6"})(["cursor:pointer;margin-right:10px;"]),C=f.default.div.withConfig({componentId:"sc-1b5m2k9-7"})(["display:flex;width:100%;overflow:hidden;@media ","{flex-direction:column;}"],A.Pr.TABLET_AND_DOWN),I=f.default.div.withConfig({componentId:"sc-1b5m2k9-8"})(["display:flex;flex-direction:column;width:50%;padding-right:80px;@media ","{width:100%;}"],A.Pr.TABLET_AND_DOWN),k=f.default.div.withConfig({componentId:"sc-1b5m2k9-9"})(["display:flex;flex-direction:column;width:50%;@media ","{width:100%;margin-top:50px;}"],A.Pr.TABLET_AND_DOWN);var U=n(4213);var Q=e=>{let{data:t}=e;const{0:n,1:i}=(0,a.useState)(!0),{0:o,1:r}=(0,a.useState)(10),{0:l,1:c}=(0,a.useState)(),{0:d,1:s}=(0,a.useState)(!1);return a.createElement(U.$0,{background:A.r$.WHITE_LILAC,style:{marginBottom:"50px"}},a.createElement(U.im,null,a.createElement(C,null,a.createElement(I,null,a.createElement(U.X6,{maxWidth:"450px",direction:"column"},a.createElement(U.Dx,null,t.title),a.createElement(U.xv,{dangerouslySetInnerHTML:{__html:t.description}}))),a.createElement(k,null,a.createElement(h,null,a.createElement(b,{direction:"row"},a.createElement(v,{htmlFor:"once"},a.createElement(y,{type:"radio",name:"support",id:"once",checked:!n,onChange:()=>i(!1)}),a.createElement(U.xv,{isWorkFont:!0,isPurple:!0},"One time")),a.createElement(v,{htmlFor:"monthly"},a.createElement(y,{type:"radio",name:"support",id:"monthly",checked:n,onChange:()=>i(!0)}),a.createElement(U.xv,{isWorkFont:!0,isPurple:!0},"Monthly"))),a.createElement(b,null,a.createElement(U.xv,{as:"label",htmlFor:"amount-options",isPurple:!0,isWorkFont:!0},"Select your amount"),a.createElement(E,{id:"amount-options"},a.createElement(x,{onClick:()=>r(10),isActive:10===o},"€10"),a.createElement(x,{onClick:()=>r(25),isActive:25===o},"€25"),a.createElement(x,{onClick:()=>r(50),isActive:50===o},"€50"),a.createElement(x,{onClick:()=>r(100),isActive:100===o},"€100"),a.createElement(x,{onClick:()=>r(5e3),isActive:5e3===o},"Full scholarship")),a.createElement(U.xv,{as:"label",htmlFor:"amount",isPurple:!0,isWorkFont:!0},"Amount"),a.createElement(w,{type:"number",value:o,onChange:e=>{let{target:{value:t}}=e;return r(Number(t))}}),a.createElement(U.xv,{as:"label",htmlFor:"message",isPurple:!0,isWorkFont:!0},"Message"),a.createElement(w,{type:"text",value:l,onChange:e=>{let{target:{value:t}}=e;return c(t)}})),a.createElement(U.zx,{onClick:async e=>{let t;e.preventDefault(),s(!0),t=n?await(async e=>await g("/checkout/session/plan",{plan:e}))("monthly-"+parseInt(o)):await(async(e,t)=>await g("/checkout/session/donation",{amount:e,currency:"eur",message:t}))(100*o,l),(async e=>{const t=await u(),{error:n}=await t.redirectToCheckout({sessionId:e});n&&(console.log("ERROR STRIPE: ",n),s(!1))})(t.id).then((e=>{e.error&&(console.log("ERROR STRIPE RESULT: ",e.error),s(!1))})).catch((e=>{console.error(e),s(!1)}))},isLoading:d},"Donate"))))))}},7356:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),i=n(6598),o=n(540),r=n(9853);const l=(0,o.default)((e=>{let{isReverse:t,...n}=e;return a.createElement("div",n)})).withConfig({componentId:"sc-1op546h-0"})(["display:flex;flex:0 0 auto;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:0 50px 0 0;padding:",";width:50%;order:",";",' > p{margin-bottom:20px;}> h4{margin-bottom:5px;}> [data-target="link"],> a{margin-left:-20px;}@media ',"{width:100%;order:1;padding:0 0 20px 0;}"],(e=>{let{isReverse:t}=e;return t?"0 0 0 50px":"0 50px 0 0"}),(e=>{let{isReverse:t}=e;return t?2:1}),(e=>{let{hasExceptionalYOffset:t}=e;if(t)return"transform: translateY(-56px);"}),r.Pr.TABLET_AND_DOWN),c=(0,o.default)((e=>{let{isReverse:t,hasRectangleBackground:n,...i}=e;return a.createElement("div",i)})).withConfig({componentId:"sc-1op546h-1"})(["display:flex;width:50%;height:100%;min-height:400px;order:",";padding:",";align-items:stretch;"," @media ","{width:100%;order:2;padding:0;}"],(e=>{let{isReverse:t}=e;return t?1:2}),(e=>{let{isReverse:t}=e;return t?"0 50px 0 0":"0 0 0 50px"}),(e=>{let{hasRectangleBackground:t}=e;return t&&"\n      > div:after {\n        content: '';\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: -15%;\n        left: 40%;\n        background-color: #F8F9FF;\n        z-index: -1;\n      }\n    "}),r.Pr.TABLET_AND_DOWN),d=(0,o.default)((e=>{let{hasPadding:t,...n}=e;return a.createElement("div",n)})).withConfig({componentId:"sc-1op546h-2"})(["width:100%;display:flex;margin:",";@media ","{flex-direction:column;}@media ","{margin:0;}"],(e=>{let{hasPadding:t}=e;return t?"50px 0":"0"}),r.Pr.TABLET_AND_DOWN,r.Pr.MOBILE);d.defaultProps={hasPadding:!1};var s=n(4213);var m=e=>{let{data:t,isReverse:n,hasRectangleBackground:o,hasPurpleBackground:m,hasBigTitle:p,hasTitleLightPurple:u,sectionPadding:g,hasExceptionalYOffset:f}=e;return a.createElement(s.$0,{padding:g,style:{backgroundColor:m?r.r$.WHITE_LILAC:"none",overflow:"hidden"}},a.createElement(s.im,null,a.createElement(d,{hasPadding:!0},a.createElement(l,{isReverse:n,hasExceptionalYOffset:f},t.title&&a.createElement(s.Dx,{level:2,size:p?"l":"s",color:u?r.r$.BLUE_VIOLET:void 0},t.title),t.subtitle&&a.createElement(s.Dx,{level:4,size:"s",isUpperCase:!1},t.subtitle),t.description&&a.createElement(s.xv,{maxWidth:"470px",dangerouslySetInnerHTML:{__html:t.description}}),t.cta&&!t.isCtaExternal&&a.createElement(i.rU,{to:t.ctaLink,"data-target":"link"},a.createElement(s.zx,{variant:"minimal",iconRight:"arrow-right"},t.cta)),t.cta&&t.isCtaExternal&&a.createElement(s.zx,{is:"a",href:t.ctaLink,target:"_blank",rel:"noopener noreferrer nofollow",variant:"minimal",iconRight:"arrow-right"},t.cta)),a.createElement(c,{isReverse:n,hasRectangleBackground:o},a.createElement(s.X6,{backgroundImage:"url("+t.image+")",backgroundSize:"cover",width:"100%",height:"100%",position:"relative",zIndex:"auto",style:{minHeight:"300px"}})))))}},7156:function(e,t,n){n.r(t),n.d(t,{default:function(){return fe}});var a=n(5381),i=n(7294),o=n(540);const r=o.default.div.withConfig({componentId:"sc-10h7cwg-0"})(["display:flex;margin:60px 0 30px 0;flex-direction:column;align-items:center;max-width:800px;z-index:10;"]);var l=n(4213),c=n.p+"static/home-header-0eefdc8491dc36ac9ecde47dd07694ad.jpg";const d="Helping new talent into the tech world";var s=()=>i.createElement(l.$0,{background:"transparent url("+c+") no-repeat center center",style:{backgroundSize:"cover"},hasOverlay:!0},i.createElement(l.im,null,i.createElement(r,null,i.createElement(l.Dx,{level:1,size:"XL",isUpperCase:!0,isCenter:!0,isWhite:!0},d)))),m=n(9853);const p=o.default.div.withConfig({componentId:"sc-1l8heuq-0"})(["display:flex;flex-direction:column;align-items:center;width:100%;margin:0 0 50px 0;@media ","{}"],m.Pr.TABLET_AND_DOWN),u=o.default.div.withConfig({componentId:"sc-1l8heuq-1"})(["display:flex;width:100%;justify-content:space-between;@media ","{flex-direction:column;}"],m.Pr.MOBILE),g=o.default.div.withConfig({componentId:"sc-1l8heuq-2"})(["display:flex;flex-direction:column;background-color:",";width:30%;padding:",";@media ","{width:100%;&:not(:last-child){margin-bottom:20px;}}"],m.r$.BLUE_VIOLET,m.x1.M,m.Pr.MOBILE),f=o.default.div.withConfig({componentId:"sc-1l8heuq-3"})(["display:flex;flex-direction:column;align-items:center;box-shadow:",";padding:50px;margin-bottom:50px;@media ","{padding:20px;margin-bottom:0px;}"],m.AP.BOX,m.Pr.MOBILE),A={title:"Our impact",description:"We graduated over 300 people in Belgium and more than 650 globally. In Belgium, over 70% found and retained a high-quality job as a developer.",results:[{title:"300+",description:"Students graduated since HackYourFuture Belgium was founded in 2018"},{title:"70%",description:"Of our graduates find an internship, a job or start advanced studies."},{title:"650+",description:"Alumni in the Netherlands, Denmark, Belgium and Canada."}]};var h=()=>i.createElement(l.$0,{padding:"0"},i.createElement(l.im,null,i.createElement(f,null,i.createElement(p,null,i.createElement(l.Dx,{level:2},A.title),i.createElement(l.xv,{isCenter:!0,maxWidth:"800px"},A.description)),i.createElement(u,null,A.results.map(((e,t)=>i.createElement(g,{key:t},i.createElement(l.Dx,{isWhite:!0},e.title),i.createElement(l.xv,{isWhite:!0},e.description)))))))),E=n(7356);const w=o.default.div.withConfig({componentId:"sc-1o2lu27-0"})(["display:flex;background-color:",";padding:100px;flex-direction:column;@media ","{padding:50px;}@media ","{padding:20px;}"],m.r$.WHITE_LILAC,m.Pr.TABLET,m.Pr.MOBILE),x=o.default.div.withConfig({componentId:"sc-1o2lu27-1"})(["display:flex;width:40%;flex-direction:column;align-items:flex-start;> img{margin-bottom:",";min-height:70px;object-fit:contain;}@media ","{width:100%;}"],m.x1.M,m.Pr.TABLET_AND_DOWN),b=o.default.div.withConfig({componentId:"sc-1o2lu27-2"})(["display:flex;flex-wrap:wrap;flex-grow:1;justify-content:space-between;@media ","{> ",":nth-child(1){margin-bottom:",";}> ",":nth-child(2){margin-bottom:",";}}@media ","{> ",":nth-child(1){margin-bottom:",";}> ",":nth-child(2){margin-bottom:",";}}@media ","{flex-direction:column;> ",":not(:last-child){margin-bottom:",";}}"],m.Pr.DESKTOP,x,m.x1.L,x,m.x1.L,m.Pr.SMALL_DESKTOP,x,m.x1.L,x,m.x1.L,m.Pr.TABLET_AND_DOWN,x,m.x1.L);var v=n(9717),y=n(4795),C=n.p+"static/commitment-aa0299dfdd887bc65d8e06877a7dce2e.svg",I=n.p+"static/open-2c0073e6b1b41d56a5140d3896c765c6.svg";const k={title:"Our core values",values:[{title:"Community",description:"We’re largely dependent on volunteers. That’s what makes us an engaged grassroots community, as our students call it ‘the HYF family’.",image:v.Z},{title:"Diversity & inclusiveness",description:"Our program is adapted to suit people with different backgrounds, often in vulnerable situations. We teach on Sundays to allow everyone to take control of their personal lives during the week.",image:y.Z},{title:"Commitment",description:"Our program is free of charge, although we ask for strong commitment during our 7 month-journey. And you know what? Many alumni stay actively involved!",image:C},{title:"Open",description:"Sharing is caring. Our curriculum is 100% open. We believe in knowledge for the many, not the few.",image:I}]};var U=()=>i.createElement(l.$0,{justifyContent:"flex-end",padding:"50px 0"},i.createElement(l.im,{margin:"0"},i.createElement(w,null,i.createElement(l.Dx,{level:3},k.title),i.createElement(b,null,k.values.map(((e,t)=>i.createElement(x,{key:t},i.createElement(l.Ee,{src:e.image}),i.createElement(l.Dx,{level:3,size:"S",isUpperCase:!1},e.title),i.createElement(l.xv,null,e.description))))))));o.default.div.withConfig({componentId:"sc-1nosh7f-0"})(["display:flex;justify-content:center;width:100%;"]);const Q=o.default.div.withConfig({componentId:"sc-1nosh7f-1"})(["display:flex;width:100%;justify-content:space-between;align-items:center;> h2{margin:0;}"]),B=o.default.div.withConfig({componentId:"sc-1nosh7f-2"})(["display:flex;flex-wrap:wrap;width:100%;justify-content:space-between;"]);var O=n.p+"static/print-simple-c628b304b936bf3cd9b5dc82a215ae3e.svg",D=n.p+"static/digital-belgium-e20719e79b90a1ea28e8c83e86262d29.svg",T=n.p+"static/artevelde-hogeschool-a976dc29ac37b3e3c8d96735d204f3e8.svg",W=n.p+"static/bruxelles-emploi-dbdcfa10d703952f0e85e4e166b685d7.svg",S=n.p+"static/microsoft-56ff78cc525fd797e6b79ef578e97ebb.svg",M=n.p+"static/duo_logo-3b87c40725793ee29a616a1c010da7cf.png",P=n.p+"static/DSJC-Member-NEGATIVE-200px-be47559736b435c859312f9383aad720.png",V=n.p+"static/DCD_logo_regular-1ff37160591cd335e9ef39b73547db99.png",N=n.p+"static/UXAntwerp_logo-6e86ee4a1402927b7678ccf37c140e93.png",L=n.p+"static/Bruxelles-Formation_logo-37e18a12c1bfb920568ba6fa1514eaea.png",j=n.p+"static/antwerp-stad-20b2e8f96c3e991e67874556cd5f4a2a.jpg";const R={title:"Our partners",cta:"Become a partner",ctaLink:"mailto:info@hyfbe.be",partnerImages:[O,D,T,W,S,M,P,V,N,"data:image/png;base64,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",L,n.p+"static/logo-9f794cfa9043430098c7ee06f953415c.png",j,n.p+"static/EPITECH-TECHNOLOGY-e20c5f66da881e5abb87d98769600bcc.png",n.p+"static/vbo_feb-f0c8dc81238d36cbc6b8e0375aef5a06.png",n.p+"static/agoria-a966d3165e013fa6880a2281e1a3af9e.png"]};var q=()=>i.createElement(l.$0,null,i.createElement(l.im,null,i.createElement(Q,null,i.createElement(l.Dx,{level:2},R.title),i.createElement(l.zx,{is:"a",variant:"minimal",iconRight:"arrow-right",href:R.ctaLink},R.cta)),i.createElement(B,null,R.partnerImages.map(((e,t)=>i.createElement(l.X6,{width:"170px",display:"inline-block",key:t},i.createElement(l.Ee,{src:e,width:"100%"})))))));const K=o.default.div.withConfig({componentId:"sc-107i75r-0"})(["width:100%;display:flex;flex-direction:column;align-items:center;"]),F=o.default.div.withConfig({componentId:"sc-107i75r-1"})(["width:50%;min-height:500px;position:relative;box-sizing:border-box;@media ","{width:80%;}"],m.Pr.TABLET_AND_DOWN),Z=o.default.div.withConfig({componentId:"sc-107i75r-2"})(["position:absolute;width:400%;box-sizing:border-box;display:flex;transform:",";transition:transform 0.3s ease;"],(e=>{let{activeIndex:t}=e;return"translateX(-"+25*t+"%)"})),z=o.default.div.withConfig({componentId:"sc-107i75r-3"})(["width:100%;max-width:100%;min-height:500px;box-sizing:border-box;opacity:",";transition:all 0.3s ease;transform:",";text-align:center;box-shadow:",";padding:50px;@media ","{padding:20px;}> div{width:150px;height:150px;border-radius:100%;margin:auto;margin-bottom:20px;background-position:center;filter:grayscale(100%);@media ","{width:100px;height:100px;}}"],(e=>{let{isActive:t}=e;return t?1:.6}),(e=>{let{isActive:t}=e;return t?"none":"scale(0.8)"}),m.AP.BOX,m.Pr.TABLET_AND_DOWN,m.Pr.TABLET_AND_DOWN),H=o.default.button.withConfig({componentId:"sc-107i75r-4"})(["position:absolute;left:",";right:",";top:50%;transform:translateY(-50%);z-index:100;background-color:transparent;color:",";border:none;font-size:32px;cursor:pointer;&:hover{transform:translateY(-50%) scale(1.2);}"],(e=>{let{side:t}=e;return"left"===t?"-50px":"auto"}),(e=>{let{side:t}=e;return"right"===t?"-50px":"auto"}),m.r$.BLUE_VIOLET);var G=n.p+"static/hanim-f59b318c4427eee8d11d1f28ec43f88c.jpg",Y=n.p+"static/edouardo-111e47a46998737c456ad2717107b981.jpg",J=n.p+"static/gita-23ff9f727dfa22514d508246894f79d2.jpg",X=n.p+"static/ramzi-e6def7953395146458cf6b5ff8a98e62.jpg";const _=e=>{let{onClick:t}=e;return i.createElement(H,{side:"left",onClick:t},i.createElement(l.JO,{name:"arrow-left",color:void 0}))},$=e=>{let{onClick:t}=e;return i.createElement(H,{side:"right",onClick:t},i.createElement(l.JO,{name:"arrow-right",color:void 0}))},ee={title:"Our success stories",stories:[{picture:G,name:"Zeynep Hanim",company:"Optis (Cronos)",role:"Full-stack Developer",quote:"HYF is a light that I saw at the bottom as well, a hope that I held onto  as I was building a new life in a new country. It gave me a chance not  only to improve my knowledge but to boost my confidence. Also, it gave me a chance to meet many  wonderful people."},{picture:Y,name:"Edouardo",company:"Capgemini",role:"IT Consultant",quote:"Hack your future definitely built the bridge between the unknown and the doors of my personal success, writing code is now part of my life and I will never forget the lessons learned and time spent with the fellow students and coaches. A big thank you!"},{picture:J,name:"Gita",company:"ttl.be",role:"QA Developer",quote:"What HYF brought to me is you should never give up and always try to find a way when you’re stuck. I’ve learned that dreaming big without big efforts will bring you nowhere. HackYourFuture was part of my journey to become who I am now."},{picture:X,name:"Ramzi",company:"AppTweak",role:"UX/UI Designer",quote:"Hack Your Future is one of the greatest programs that I joined. It has opened many doors for me to learn a lot about software and web development. Without this program, I wouldn't be at the current job which requires good knowledge in front-end development"}]};var te=()=>{const{0:e,1:t}=(0,i.useState)(0),n=e=>{t(e<0?0:e>3?3:e)};return i.createElement(l.$0,{style:{overflow:"hidden"}},i.createElement(l.im,null,i.createElement(K,null,i.createElement(l.Dx,{level:2},ee.title),i.createElement(F,null,i.createElement(_,{onClick:()=>n(e-1)}),i.createElement($,{onClick:()=>n(e+1)}),i.createElement(Z,{activeIndex:e},ee.stories.map(((t,n)=>i.createElement(z,{key:n,isActive:n===e},i.createElement(l.X6,{backgroundImage:"url("+t.picture+")",backgroundSize:"cover",title:t.name}),i.createElement(l.Dx,{level:4,size:"xs",isUpperCase:!1,isCenter:!0,style:{marginBottom:"0"}},t.name+" - "+t.company),i.createElement(l.xv,{isCenter:!0,margin:"0 0 20px 0",style:{color:m.r$.BLUE_VIOLET,fontWeight:600},isWorkFont:!0},t.role),i.createElement(l.xv,{isCenter:!0},'"',t.quote,'"')))))))))},ne=n(5803);const ae=o.default.form.withConfig({componentId:"sc-8npwav-0"})(["display:flex;flex-direction:column;max-width:500px;align-items:flex-start;"]),ie=o.default.input.withConfig({componentId:"sc-8npwav-1"})(["border:1px solid white;border-radius:3px;outline:none;background-color:transparent;padding:10px 5px;color:white;width:100%;"]),oe=o.default.textarea.withConfig({componentId:"sc-8npwav-2"})(["border:1px solid white;border-radius:3px;outline:none;padding:10px 5px;color:white;background-color:transparent;margin-bottom:20px;width:100%;"]),re=o.default.iframe.withConfig({componentId:"sc-8npwav-3"})(["width:100%;height:100%;"]),le=o.default.div.withConfig({componentId:"sc-8npwav-4"})(["display:flex;width:100%;@media ","{flex-direction:column;}"],m.Pr.TABLET_AND_DOWN),ce=o.default.div.withConfig({componentId:"sc-8npwav-5"})(["display:flex;flex-direction:column;width:40%;height:100%;background-color:",";padding:50px 100px;@media ","{width:100%;padding:20px;}"],m.r$.BLUE_VIOLET,m.Pr.TABLET_AND_DOWN),de=o.default.div.withConfig({componentId:"sc-8npwav-6"})(["display:flex;width:60%;height:100%;min-height:400px;padding-left:60px;background-color:transparent;@media ","{width:100%;padding-left:0;height:200px;}"],m.Pr.TABLET_AND_DOWN),se="Contact us",me="We’re always happy to welcome people like you to our HYF community. Drop us a line and become part of it!";var pe=()=>{const{0:e,1:t}=(0,i.useState)(""),{0:n,1:a}=(0,i.useState)(""),{0:o,1:r}=(0,i.useState)("");return i.createElement(l.$0,{padding:"0",paddingMobile:"0",style:{marginBottom:"50px"}},i.createElement(le,null,i.createElement(ce,null,i.createElement(l.Dx,{isWhite:!0},se),i.createElement(l.xv,{isWhite:!0,maxWidth:"500px",margin:"0 0 20px 0"},me),i.createElement(ae,null,i.createElement(l.xv,{as:"label",htmlFor:"full-name",isWhite:!0,margin:"20px 0 5px 0"},"Full name"),i.createElement(ie,{id:"full-name",type:"text",value:e,onChange:e=>{let{target:{value:n}}=e;return t(n)}}),i.createElement(l.xv,{as:"label",htmlFor:"email",isWhite:!0,margin:"20px 0 5px 0"},"Email address"),i.createElement(ie,{type:"email",id:"email",value:n,onChange:e=>{let{target:{value:t}}=e;return a(t)}}),i.createElement(l.xv,{as:"label",htmlFor:"message",isWhite:!0,margin:"20px 0 5px 0"},"Message"),i.createElement(oe,{name:"message",id:"message",cols:"30",rows:"10",value:o,onChange:e=>{let{target:{value:t}}=e;return r(t)}}),i.createElement(l.zx,{isWhite:!0,onClick:()=>{const e="Message from website by <"+n+">";window.open("mailto:info@hyfbe.be?cc="+n+"&subject="+e+"&body="+o,"_blank")}},"Send"))),i.createElement(de,null,i.createElement(re,{src:"https://www.openstreetmap.org/export/embed.html?bbox=4.404986500740052%2C50.83687552915718%2C4.411938786506654%2C50.83906399222352&layer=mapnik&marker=50.83796977351917%2C4.408462643623352",width:"600",height:"450",title:"map"}))))};const ue={title:"Our program",description:"Our <b>9-month</b> program is divided into <b>12 modules</b>. The last module is a <b>6-weeks intensive Final Project</b> where students work on a real project with a real partner. Our training takes place at <b>Epitech</b> (Brussels) every <b>Sunday</b>. During the week, students are supported online in their <b>self-study</b>, homework and peer learning.",cta:"Discover more",ctaLink:"/program",image:n.p+"static/our-program-7f322aaf9dd9bfe6f4a8cf181291abd9.jpg"},ge={title:"Support the developers of tomorrow",description:"Help refugees build digital & soft skills for a career in web development. We are a non-profit organization. Thanks to your support we can improve and keep our program free of charge for students."};var fe=()=>i.createElement(a.Z,{page:"index"},i.createElement(s,null),i.createElement(E.Z,{data:ue,hasRectangleBackground:!0}),i.createElement(h,null),i.createElement(U,null),i.createElement(te,null),i.createElement(q,null),i.createElement(ne.Z,{data:ge}),i.createElement(pe,null))},9717:function(e,t,n){t.Z=n.p+"static/community-2188ec4ef052fad53e5cf76f1d23e137.svg"},4795:function(e,t,n){t.Z=n.p+"static/diversity-inclusiveness-446e4facafbbf0674d5ead3d2e03f042.svg"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-511e0a43c785c10157c1.js.map