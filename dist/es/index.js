import{jsxs as e,jsx as r}from"react/jsx-runtime";import n,{useCallback as t}from"react";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var s=function(){return s=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var s in r=arguments[n])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e},s.apply(this,arguments)},a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c={visa:{niceType:"Visa",type:"visa",patterns:[4],gaps:[4,8,12],lengths:[16,18,19],code:{name:"CVV",size:3}},mastercard:{niceType:"Mastercard",type:"mastercard",patterns:[[51,55],[2221,2229],[223,229],[23,26],[270,271],2720],gaps:[4,8,12],lengths:[16],code:{name:"CVC",size:3}},"american-express":{niceType:"American Express",type:"american-express",patterns:[34,37],gaps:[4,10],lengths:[15],code:{name:"CID",size:4}},"diners-club":{niceType:"Diners Club",type:"diners-club",patterns:[[300,305],36,38,39],gaps:[4,10],lengths:[14,16,19],code:{name:"CVV",size:3}},discover:{niceType:"Discover",type:"discover",patterns:[6011,[644,649],65],gaps:[4,8,12],lengths:[16,19],code:{name:"CID",size:3}},jcb:{niceType:"JCB",type:"jcb",patterns:[2131,1800,[3528,3589]],gaps:[4,8,12],lengths:[16,17,18,19],code:{name:"CVV",size:3}},unionpay:{niceType:"UnionPay",type:"unionpay",patterns:[620,[624,626],[62100,62182],[62184,62187],[62185,62197],[62200,62205],[622010,622999],622018,[622019,622999],[62207,62209],[622126,622925],[623,626],6270,6272,6276,[627700,627779],[627781,627799],[6282,6289],6291,6292,810,[8110,8131],[8132,8151],[8152,8163],[8164,8171]],gaps:[4,8,12],lengths:[14,15,16,17,18,19],code:{name:"CVN",size:3}},maestro:{niceType:"Maestro",type:"maestro",patterns:[493698,[5e5,504174],[504176,506698],[506779,508999],[56,59],63,67,6],gaps:[4,8,12],lengths:[12,13,14,15,16,17,18,19],code:{name:"CVC",size:3}},elo:{niceType:"Elo",type:"elo",patterns:[401178,401179,438935,457631,457632,431274,451416,457393,504175,[506699,506778],[509e3,509999],627780,636297,636368,[650031,650033],[650035,650051],[650405,650439],[650485,650538],[650541,650598],[650700,650718],[650720,650727],[650901,650978],[651652,651679],[655e3,655019],[655021,655058]],gaps:[4,8,12],lengths:[16],code:{name:"CVE",size:3}},mir:{niceType:"Mir",type:"mir",patterns:[[2200,2204]],gaps:[4,8,12],lengths:[16,17,18,19],code:{name:"CVP2",size:3}},hiper:{niceType:"Hiper",type:"hiper",patterns:[637095,63737423,63743358,637568,637599,637609,637612],gaps:[4,8,12],lengths:[16],code:{name:"CVC",size:3}},hipercard:{niceType:"Hipercard",type:"hipercard",patterns:[606282],gaps:[4,8,12],lengths:[16],code:{name:"CVC",size:3}}},i={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.clone=void 0,o.clone=function(e){return e?JSON.parse(JSON.stringify(e)):null};var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.matches=void 0,l.matches=function(e,r){return Array.isArray(r)?function(e,r,n){var t=String(r).length,s=e.substr(0,t),a=parseInt(s,10);return r=parseInt(String(r).substr(0,s.length),10),n=parseInt(String(n).substr(0,s.length),10),a>=r&&a<=n}(e,r[0],r[1]):function(e,r){return(r=String(r)).substring(0,e.length)===e.substring(0,r.length)}(e,r)},Object.defineProperty(i,"__esModule",{value:!0}),i.addMatchingCardsToResults=void 0;var d=o,u=l;i.addMatchingCardsToResults=function(e,r,n){var t,s;for(t=0;t<r.patterns.length;t++){var a=r.patterns[t];if(u.matches(e,a)){var c=d.clone(r);s=Array.isArray(a)?String(a[0]).length:String(a).length,e.length>=s&&(c.matchStrength=s),n.push(c);break}}};var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.isValidInputType=void 0,p.isValidInputType=function(e){return"string"==typeof e||e instanceof String};var g={};Object.defineProperty(g,"__esModule",{value:!0}),g.findBestMatch=void 0,g.findBestMatch=function(e){return function(e){var r=e.filter((function(e){return e.matchStrength})).length;return r>0&&r===e.length}(e)?e.reduce((function(e,r){return e?Number(e.matchStrength)<Number(r.matchStrength)?r:e:r})):null};var f=a&&a.__assign||function(){return f=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var s in r=arguments[n])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e},f.apply(this,arguments)},h=c,v=i,m=p,y=g,_=o,b={},C={VISA:"visa",MASTERCARD:"mastercard",AMERICAN_EXPRESS:"american-express",DINERS_CLUB:"diners-club",DISCOVER:"discover",JCB:"jcb",UNIONPAY:"unionpay",MAESTRO:"maestro",ELO:"elo",MIR:"mir",HIPER:"hiper",HIPERCARD:"hipercard"},N=[C.VISA,C.MASTERCARD,C.AMERICAN_EXPRESS,C.DINERS_CLUB,C.DISCOVER,C.JCB,C.UNIONPAY,C.MAESTRO,C.ELO,C.MIR,C.HIPER,C.HIPERCARD],S=_.clone(N);function M(e){return b[e]||h[e]}function E(e,r){void 0===r&&(r=!1);var n=S.indexOf(e);if(!r&&-1===n)throw new Error('"'+e+'" is not a supported card type.');return n}function x(e){var r=[];if(!m.isValidInputType(e))return r;if(0===e.length)return S.map((function(e){return _.clone(M(e))}));S.forEach((function(n){var t=M(n);v.addMatchingCardsToResults(e,t,r)}));var n=y.findBestMatch(r);return n?[n]:r}x.getTypeInfo=function(e){return _.clone(M(e))},x.removeCard=function(e){var r=E(e);S.splice(r,1)},x.addCard=function(e){var r=E(e.type,!0);b[e.type]=e,-1===r&&S.push(e.type)},x.updateCard=function(e,r){var n=b[e]||h[e];if(!n)throw new Error('"'+e+"\" is not a recognized type. Use `addCard` instead.'");if(r.type&&n.type!==r.type)throw new Error("Cannot overwrite type parameter.");var t=_.clone(n);t=f(f({},t),r),b[t.type]=t},x.changeOrder=function(e,r){var n=E(e);S.splice(n,1),S.splice(r,0,e)},x.resetModifications=function(){S=_.clone(N),b={}},x.types=C;var R=x,T={niceType:"Dankort",type:"dankort",patterns:[5019],gaps:[4,8,12],lengths:[16],code:{name:"CVC",size:3}},k={niceType:"Laser",type:"laser",patterns:[6706,6771,6709],gaps:[4,8,12],lengths:[16,19],code:{name:"CVV",size:3}},I={niceType:"Visa Electron",type:"visa-electron",patterns:[4026,417500,4405,4508,4844,49137],gaps:[4,8,12],lengths:[16],code:{name:"CVV",size:3}},w={validate:function(e){var r,n,t=String(e).replace(/[\s]/g,""),s=t.length,a=!1,c=0;if(!/^[0-9]+$/.test(t))return!1;for(var i=s;i>0;i--){if(r=parseInt(t.charAt(i-1)),a){switch(n=2*r){case 10:n=1;break;case 12:n=3;break;case 14:n=5;break;case 16:n=7;break;case 18:n=9}c+=n}else c+=r;a=!a}return 0!==c&&c%10==0}}.validate,V=function(e){var r=R(e.toString().trim().replace(" ",""));if(1===r.length){var n=r.shift();return(null==n?void 0:n.type)||"unknown"}return"unknown"},A=function(){return R.updateCard(R.types.MAESTRO,{patterns:[493698,[5e3,5018],[502e3,506698],[506779,508999],[56,59],63,67,6]}),R.updateCard(R.types.HIPERCARD,{patterns:[384100,384140,384160,606282,637095,637568]}),R.addCard(T),R.addCard(k),R.addCard(I),Object.values(R.types).concat(["dankort","laser","visa-electron"])},O={amex:["amex","americanexpress","american-express"],dinersclub:["diners","dinersclub","diners-club"],visaelectron:["visaelectron","visa-electron"]},j=function(n){return e("svg",s({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512"},n,{children:[r("rect",{x:128,y:128,width:336,height:336,rx:57,ry:57,fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:32}),r("path",{d:"M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32})]}))};function P(a){var c=a.acceptedCards,i=void 0===c?[]:c,o=a.number,l=a.issuer,d=a.preview,u=void 0!==d&&d,p=a.expiry,g=a.cvc,f=a.focused,h=a.locale,v=void 0===h?{valid:"valid thru"}:h,m=a.name,y=a.placeholders,_=void 0===y?{name:"YOUR NAME HERE"}:y,b=a.callback,C=a.onToastMessage,N=a.message,S=n.useState(A()),M=S[0],E=S[1],x=n.useMemo((function(){return(null==i?void 0:i.length)?M.filter((function(e){return i.includes(e)})):M}),[i,M]),R=n.useMemo((function(){var e="unknown";if(o){var r=V(o);x.includes(r)&&(e=r)}var n=16;return O.amex.includes(e)?n=15:(null==O?void 0:O.dinersclub.includes(e))?n=14:["hipercard","mastercard","visa"].includes(e)&&(n=19),{issuer:e,maxLength:n}}),[o,x]),T=n.useMemo((function(){return u&&l?l.toLowerCase():R.issuer}),[R.issuer,l,u]),k=n.useMemo((function(){var e=u?19:R.maxLength,r="number"==typeof o?o.toString():String(o).replace(/[A-Za-z]| /g,"");for(isNaN(parseInt(r,10))&&!u&&(r=""),e>16&&(e=r.length<=16?16:e),r.length>e&&(r=r.slice(0,e));r.length<e;)r+="•";if(O.amex.includes(T)||O.dinersclub.includes(T)){var n=[0,4,10],t=[4,6,5];r="".concat(r.substr(n[0],t[0])," ").concat(r.substr(n[1],t[1])," ").concat(r.substr(n[2],t[2]))}else if(r.length>16){n=[0,4,8,12],t=[4,7];r="".concat(r.substr(n[0],t[0])," ").concat(r.substr(n[1],t[0])," ").concat(r.substr(n[2],t[0])," ").concat(r.substr(n[3],t[1]))}else for(var s=1;s<e/4;s++){var a=4*s+(s-1);r="".concat(r.slice(0,a)," ").concat(r.slice(a))}return r}),[R.maxLength,T,o,u]),I=n.useMemo((function(){var e,r="number"==typeof p?p.toString():p,n="",t="";for(r.includes("/")?(n=(e=r.split("/"))[0],t=e[1]):r.length&&(n=r.substr(0,2),t=r.substr(2,6));n.length<2;)n+="•";for(t.length>2&&(t=t.substr(2,4));t.length<2;)t+="•";return"".concat(n,"/").concat(t)}),[p]),P=n.useCallback((function(e){if(e.length)E(M.filter((function(r){return e.includes(r)})));else{var r=A();E(r)}}),[M]),z=t((function(e){var r=document.createElement("textarea");r.value=e,document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r)}),[]),D=t((function(e){e&&(null==C||C(e))}),[C]),L=n.useCallback((function(e){z(k),e.stopPropagation(),D(null==N?void 0:N.cardNumberCopiedMessage)}),[k,z,null==N?void 0:N.cardNumberCopiedMessage,D]),B=n.useCallback((function(e){z(I),e.stopPropagation(),D(null==N?void 0:N.cardExpiryCopiedMessage)}),[I,z,null==N?void 0:N.cardExpiryCopiedMessage,D]),H=n.useCallback((function(e){z(g.toString()),e.stopPropagation(),D(null==N?void 0:N.cardCvcCopiedMessage)}),[z,g,D,null==N?void 0:N.cardCvcCopiedMessage]);n.useEffect((function(){k!==o&&"function"==typeof b&&b(R,w(String(o))),A().toString()!==M.toString()&&P(i)}),[i,b,R,k,P,o,M]);var U=t((function(e){return{cursor:e?"pointer":"default"}}),[]),J=!!I.match(/^[0-9/]{5}$/),Y=Number.isInteger(Number(g)),W=!(k.replace(/ /g,"").length!==Number(o).toString().length);return r("div",s({className:"rccs"},{children:e("div",s({className:["rccs__card","rccs__card--".concat(T),"cvc"===f&&"american-express"!==T?"rccs__card--flipped":""].join(" ").trim()},{children:[e("div",s({className:"rccs__card--front"},{children:[r("div",{className:"rccs__card__background"}),r("div",{className:"rccs__issuer"}),r("div",s({className:["rccs__cvc__front","cvc"===f?"rccs--focused":""].join(" ").trim()},{children:g})),e("button",s({className:["rccs__number",k.replace(/ /g,"").length>16?"rccs__number--large":"","number"===f?"rccs--focused":"","•"!==k.substr(0,1)?"rccs--filled":""].join(" ").trim(),onClick:W?L:void 0,style:U(W)},{children:[k,W&&r("span",s({className:["rccs__copy_card_number"].join(" ").trim()},{children:r(j,{style:{width:14,height:14}})}))]})),r("div",s({className:["rccs__name","name"===f?"rccs--focused":"",m?"rccs--filled":""].join(" ").trim(),style:{cursor:W?"pointer":"default"}},{children:m||_.name})),e("div",s({className:["rccs__expiry","expiry"===f?"rccs--focused":"","•"!==I.substr(0,1)?"rccs--filled":""].join(" ").trim()},{children:[r("div",s({className:"rccs__expiry__valid"},{children:v.valid})),e("button",s({className:"rccs__expiry__value",onClick:J?B:void 0,style:U(J)},{children:[I,J&&r("span",s({className:"rccs__copy_expiry"},{children:r(j,{style:{width:14,height:14}})}))]}))]})),r("div",{className:"rccs__chip"})]})),e("div",s({className:"rccs__card--back"},{children:[r("div",{className:"rccs__card__background"}),r("div",{className:"rccs__stripe"}),r("div",{className:"rccs__signature"}),e("button",s({className:["rccs__cvc","cvc"===f?"rccs--focused":""].join(" ").trim(),onClick:Y?H:void 0,style:U(Y)},{children:[g,Y&&r("span",s({className:"rccs__copy_cvc"},{children:r(j,{})}))]})),r("div",{className:"rccs__issuer"})]}))]}))}),"Cards")}export{P as default};
//# sourceMappingURL=index.js.map
