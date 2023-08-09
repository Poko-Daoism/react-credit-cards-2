"use strict";var e=require("react/jsx-runtime"),r=require("react"),n=function(){return n=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var s in r=arguments[n])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e},n.apply(this,arguments)},t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},s={visa:{niceType:"Visa",type:"visa",patterns:[4],gaps:[4,8,12],lengths:[16,18,19],code:{name:"CVV",size:3}},mastercard:{niceType:"Mastercard",type:"mastercard",patterns:[[51,55],[2221,2229],[223,229],[23,26],[270,271],2720],gaps:[4,8,12],lengths:[16],code:{name:"CVC",size:3}},"american-express":{niceType:"American Express",type:"american-express",patterns:[34,37],gaps:[4,10],lengths:[15],code:{name:"CID",size:4}},"diners-club":{niceType:"Diners Club",type:"diners-club",patterns:[[300,305],36,38,39],gaps:[4,10],lengths:[14,16,19],code:{name:"CVV",size:3}},discover:{niceType:"Discover",type:"discover",patterns:[6011,[644,649],65],gaps:[4,8,12],lengths:[16,19],code:{name:"CID",size:3}},jcb:{niceType:"JCB",type:"jcb",patterns:[2131,1800,[3528,3589]],gaps:[4,8,12],lengths:[16,17,18,19],code:{name:"CVV",size:3}},unionpay:{niceType:"UnionPay",type:"unionpay",patterns:[620,[624,626],[62100,62182],[62184,62187],[62185,62197],[62200,62205],[622010,622999],622018,[622019,622999],[62207,62209],[622126,622925],[623,626],6270,6272,6276,[627700,627779],[627781,627799],[6282,6289],6291,6292,810,[8110,8131],[8132,8151],[8152,8163],[8164,8171]],gaps:[4,8,12],lengths:[14,15,16,17,18,19],code:{name:"CVN",size:3}},maestro:{niceType:"Maestro",type:"maestro",patterns:[493698,[5e5,504174],[504176,506698],[506779,508999],[56,59],63,67,6],gaps:[4,8,12],lengths:[12,13,14,15,16,17,18,19],code:{name:"CVC",size:3}},elo:{niceType:"Elo",type:"elo",patterns:[401178,401179,438935,457631,457632,431274,451416,457393,504175,[506699,506778],[509e3,509999],627780,636297,636368,[650031,650033],[650035,650051],[650405,650439],[650485,650538],[650541,650598],[650700,650718],[650720,650727],[650901,650978],[651652,651679],[655e3,655019],[655021,655058]],gaps:[4,8,12],lengths:[16],code:{name:"CVE",size:3}},mir:{niceType:"Mir",type:"mir",patterns:[[2200,2204]],gaps:[4,8,12],lengths:[16,17,18,19],code:{name:"CVP2",size:3}},hiper:{niceType:"Hiper",type:"hiper",patterns:[637095,63737423,63743358,637568,637599,637609,637612],gaps:[4,8,12],lengths:[16],code:{name:"CVC",size:3}},hipercard:{niceType:"Hipercard",type:"hipercard",patterns:[606282],gaps:[4,8,12],lengths:[16],code:{name:"CVC",size:3}}},a={},c={};Object.defineProperty(c,"__esModule",{value:!0}),c.clone=void 0,c.clone=function(e){return e?JSON.parse(JSON.stringify(e)):null};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.matches=void 0,i.matches=function(e,r){return Array.isArray(r)?function(e,r,n){var t=String(r).length,s=e.substr(0,t),a=parseInt(s,10);return r=parseInt(String(r).substr(0,s.length),10),n=parseInt(String(n).substr(0,s.length),10),a>=r&&a<=n}(e,r[0],r[1]):function(e,r){return(r=String(r)).substring(0,e.length)===e.substring(0,r.length)}(e,r)},Object.defineProperty(a,"__esModule",{value:!0}),a.addMatchingCardsToResults=void 0;var o=c,l=i;a.addMatchingCardsToResults=function(e,r,n){var t,s;for(t=0;t<r.patterns.length;t++){var a=r.patterns[t];if(l.matches(e,a)){var c=o.clone(r);s=Array.isArray(a)?String(a[0]).length:String(a).length,e.length>=s&&(c.matchStrength=s),n.push(c);break}}};var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.isValidInputType=void 0,d.isValidInputType=function(e){return"string"==typeof e||e instanceof String};var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.findBestMatch=void 0,u.findBestMatch=function(e){return function(e){var r=e.filter((function(e){return e.matchStrength})).length;return r>0&&r===e.length}(e)?e.reduce((function(e,r){return e?Number(e.matchStrength)<Number(r.matchStrength)?r:e:r})):null};var p=t&&t.__assign||function(){return p=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var s in r=arguments[n])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e},p.apply(this,arguments)},g=s,h=a,v=d,f=u,m=c,y={},b={VISA:"visa",MASTERCARD:"mastercard",AMERICAN_EXPRESS:"american-express",DINERS_CLUB:"diners-club",DISCOVER:"discover",JCB:"jcb",UNIONPAY:"unionpay",MAESTRO:"maestro",ELO:"elo",MIR:"mir",HIPER:"hiper",HIPERCARD:"hipercard"},_=[b.VISA,b.MASTERCARD,b.AMERICAN_EXPRESS,b.DINERS_CLUB,b.DISCOVER,b.JCB,b.UNIONPAY,b.MAESTRO,b.ELO,b.MIR,b.HIPER,b.HIPERCARD],C=m.clone(_);function x(e){return y[e]||g[e]}function j(e,r){void 0===r&&(r=!1);var n=C.indexOf(e);if(!r&&-1===n)throw new Error('"'+e+'" is not a supported card type.');return n}function N(e){var r=[];if(!v.isValidInputType(e))return r;if(0===e.length)return C.map((function(e){return m.clone(x(e))}));C.forEach((function(n){var t=x(n);h.addMatchingCardsToResults(e,t,r)}));var n=f.findBestMatch(r);return n?[n]:r}N.getTypeInfo=function(e){return m.clone(x(e))},N.removeCard=function(e){var r=j(e);C.splice(r,1)},N.addCard=function(e){var r=j(e.type,!0);y[e.type]=e,-1===r&&C.push(e.type)},N.updateCard=function(e,r){var n=y[e]||g[e];if(!n)throw new Error('"'+e+"\" is not a recognized type. Use `addCard` instead.'");if(r.type&&n.type!==r.type)throw new Error("Cannot overwrite type parameter.");var t=m.clone(n);t=p(p({},t),r),y[t.type]=t},N.changeOrder=function(e,r){var n=j(e);C.splice(n,1),C.splice(r,0,e)},N.resetModifications=function(){C=m.clone(_),y={}},N.types=b;var S=N,M={niceType:"Dankort",type:"dankort",patterns:[5019],gaps:[4,8,12],lengths:[16],code:{name:"CVC",size:3}},E={niceType:"Laser",type:"laser",patterns:[6706,6771,6709],gaps:[4,8,12],lengths:[16,19],code:{name:"CVV",size:3}},k={niceType:"Visa Electron",type:"visa-electron",patterns:[4026,417500,4405,4508,4844,49137],gaps:[4,8,12],lengths:[16],code:{name:"CVV",size:3}},R={validate:function(e){var r,n,t=String(e).replace(/[\s]/g,""),s=t.length,a=!1,c=0;if(!/^[0-9]+$/.test(t))return!1;for(var i=s;i>0;i--){if(r=parseInt(t.charAt(i-1)),a){switch(n=2*r){case 10:n=1;break;case 12:n=3;break;case 14:n=5;break;case 16:n=7;break;case 18:n=9}c+=n}else c+=r;a=!a}return 0!==c&&c%10==0}}.validate,T=function(e){var r=S(e.toString().trim().replace(" ",""));if(1===r.length){var n=r.shift();return(null==n?void 0:n.type)||"unknown"}return"unknown"},I=function(){return S.updateCard(S.types.MAESTRO,{patterns:[493698,[5e3,5018],[502e3,506698],[506779,508999],[56,59],63,67,6]}),S.updateCard(S.types.HIPERCARD,{patterns:[384100,384140,384160,606282,637095,637568]}),S.addCard(M),S.addCard(E),S.addCard(k),Object.values(S.types).concat(["dankort","laser","visa-electron"])},w={amex:["amex","americanexpress","american-express"],dinersclub:["diners","dinersclub","diners-club"],visaelectron:["visaelectron","visa-electron"]},V=function(r){return e.jsxs("svg",n({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512"},r,{children:[e.jsx("rect",{x:128,y:128,width:336,height:336,rx:57,ry:57,fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:32}),e.jsx("path",{d:"M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32})]}))};module.exports=function(t){var s=t.acceptedCards,a=void 0===s?[]:s,c=t.number,i=t.issuer,o=t.preview,l=void 0!==o&&o,d=t.expiry,u=t.cvc,p=t.focused,g=t.locale,h=void 0===g?{valid:"valid thru"}:g,v=t.name,f=t.placeholders,m=void 0===f?{name:"YOUR NAME HERE"}:f,y=t.callback,b=t.onToastMessage,_=t.message,C=r.useState(I()),x=C[0],j=C[1],N=r.useMemo((function(){return(null==a?void 0:a.length)?x.filter((function(e){return a.includes(e)})):x}),[a,x]),S=r.useMemo((function(){var e="unknown";if(c){var r=T(c);N.includes(r)&&(e=r)}var n=16;return w.amex.includes(e)?n=15:(null==w?void 0:w.dinersclub.includes(e))?n=14:["hipercard","mastercard","visa"].includes(e)&&(n=19),{issuer:e,maxLength:n}}),[c,N]),M=r.useMemo((function(){return l&&i?i.toLowerCase():S.issuer}),[S.issuer,i,l]),E=r.useMemo((function(){var e=l?19:S.maxLength,r="number"==typeof c?c.toString():String(c).replace(/[A-Za-z]| /g,"");for(isNaN(parseInt(r,10))&&!l&&(r=""),e>16&&(e=r.length<=16?16:e),r.length>e&&(r=r.slice(0,e));r.length<e;)r+="•";if(w.amex.includes(M)||w.dinersclub.includes(M)){var n=[0,4,10],t=[4,6,5];r="".concat(r.substr(n[0],t[0])," ").concat(r.substr(n[1],t[1])," ").concat(r.substr(n[2],t[2]))}else if(r.length>16){n=[0,4,8,12],t=[4,7];r="".concat(r.substr(n[0],t[0])," ").concat(r.substr(n[1],t[0])," ").concat(r.substr(n[2],t[0])," ").concat(r.substr(n[3],t[1]))}else for(var s=1;s<e/4;s++){var a=4*s+(s-1);r="".concat(r.slice(0,a)," ").concat(r.slice(a))}return r}),[S.maxLength,M,c,l]),k=r.useMemo((function(){var e,r="number"==typeof d?d.toString():d,n="",t="";for(r.includes("/")?(n=(e=r.split("/"))[0],t=e[1]):r.length&&(n=r.substr(0,2),t=r.substr(2,6));n.length<2;)n+="•";for(t.length>2&&(t=t.substr(2,4));t.length<2;)t+="•";return"".concat(n,"/").concat(t)}),[d]),A=r.useCallback((function(e){if(e.length)j(x.filter((function(r){return e.includes(r)})));else{var r=I();j(r)}}),[x]),O=r.useCallback((function(e){var r=document.createElement("textarea");r.value=e,document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r)}),[]),P=r.useCallback((function(e){e&&(null==b||b(e))}),[b]),z=r.useCallback((function(e){O(E),e.stopPropagation(),P(null==_?void 0:_.cardNumberCopiedMessage)}),[E,O,null==_?void 0:_.cardNumberCopiedMessage,P]),D=r.useCallback((function(e){O(k),e.stopPropagation(),P(null==_?void 0:_.cardExpiryCopiedMessage)}),[k,O,null==_?void 0:_.cardExpiryCopiedMessage,P]),L=r.useCallback((function(e){O(u.toString()),e.stopPropagation(),P(null==_?void 0:_.cardCvcCopiedMessage)}),[O,u,P,null==_?void 0:_.cardCvcCopiedMessage]);r.useEffect((function(){E!==c&&"function"==typeof y&&y(S,R(String(c))),I().toString()!==x.toString()&&A(a)}),[a,y,S,E,A,c,x]);var B=r.useCallback((function(e){return{cursor:e?"pointer":"default"}}),[]),H=!!k.match(/^[0-9/]{5}$/),U=Number.isInteger(Number(u)),J=!(E.replace(/ /g,"").length!==Number(c).toString().length);return e.jsx("div",n({className:"rccs"},{children:e.jsxs("div",n({className:["rccs__card","rccs__card--".concat(M),"cvc"===p&&"american-express"!==M?"rccs__card--flipped":""].join(" ").trim()},{children:[e.jsxs("div",n({className:"rccs__card--front"},{children:[e.jsx("div",{className:"rccs__card__background"}),e.jsx("div",{className:"rccs__issuer"}),e.jsx("div",n({className:["rccs__cvc__front","cvc"===p?"rccs--focused":""].join(" ").trim()},{children:u})),e.jsxs("button",n({className:["rccs__number",E.replace(/ /g,"").length>16?"rccs__number--large":"","number"===p?"rccs--focused":"","•"!==E.substr(0,1)?"rccs--filled":""].join(" ").trim(),onClick:J?z:void 0,style:B(J)},{children:[E,J&&e.jsx("span",n({className:["rccs__copy_card_number"].join(" ").trim()},{children:e.jsx(V,{style:{width:14,height:14}})}))]})),e.jsx("div",n({className:["rccs__name","name"===p?"rccs--focused":"",v?"rccs--filled":""].join(" ").trim(),style:{cursor:J?"pointer":"default"}},{children:v||m.name})),e.jsxs("div",n({className:["rccs__expiry","expiry"===p?"rccs--focused":"","•"!==k.substr(0,1)?"rccs--filled":""].join(" ").trim()},{children:[e.jsx("div",n({className:"rccs__expiry__valid"},{children:h.valid})),e.jsxs("button",n({className:"rccs__expiry__value",onClick:H?D:void 0,style:B(H)},{children:[k,H&&e.jsx("span",n({className:"rccs__copy_expiry"},{children:e.jsx(V,{style:{width:14,height:14}})}))]}))]})),e.jsx("div",{className:"rccs__chip"})]})),e.jsxs("div",n({className:"rccs__card--back"},{children:[e.jsx("div",{className:"rccs__card__background"}),e.jsx("div",{className:"rccs__stripe"}),e.jsx("div",{className:"rccs__signature"}),e.jsxs("button",n({className:["rccs__cvc","cvc"===p?"rccs--focused":""].join(" ").trim(),onClick:U?L:void 0,style:B(U)},{children:[u,U&&e.jsx("span",n({className:"rccs__copy_cvc"},{children:e.jsx(V,{style:{width:14,height:14}})}))]})),e.jsx("div",{className:"rccs__issuer"})]}))]}))}),"Cards")};
//# sourceMappingURL=index.js.map