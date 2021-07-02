(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{42:function(e,n,t){"use strict";t.r(n);var i,a,r,c,s,o,l,d,u=t(0),p=t(18),m=t.n(p),b=t(15),j=t(3),f=t(5),h=t(6),x=t(7),O=Object(x.a)(i||(i=Object(h.a)(["\n    *, *::before, *::after{\n        box-sizing: border-box;\n    }\n    \n    html{ //happy rems\n        font-size: 62.5%;\n    }\n\n    body{\n        font-size: 1.6rem;\n        font-family: 'Trebuchet MS', sans-serif\n    }\n\n    @media(max-width: 600px){\n        html{\n            font-size: 55%;\n        }\n    }\n"]))),g=t(30),y=t(4),v={pairsFound:0,totalFlips:-1,timeGame:0,isFrozen:!1,playerName:void 0,firstCardId:void 0,secondCardId:void 0,gameComplete:!1,cards:[],scoreList:[]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0,t=e.cards,i=e.firstCardId,a=e.secondCardId,r=e.pairsFound;switch(n.type){case"START_GAME":return{playerName:n.payload.playerName||"Anonim",cards:n.payload.cards,timeGame:0,pairsFound:0,totalFlips:0,firstCardId:void 0,secondCardId:void 0,gameComplete:!1};case"FLIP_UP_FIRST_CARD":return Object(y.a)(Object(y.a)({},e),{},{totalFlips:e.totalFlips+=1,cards:t.map((function(e){return e.id==n.payload.id&&(e.visibility="open"),e})),firstCardId:n.payload.id});case"FLIP_UP_SECOND_CARD":return Object(y.a)(Object(y.a)({},e),{},{totalFlips:e.totalFlips+=1,cards:t.map((function(e){return e.id===n.payload.id&&(e.visibility="open"),e})),secondCardId:n.payload.id});case"CHECK_PAIR":var c=t.filter((function(e){return e.id===i||e.id===a}));if(c[0].picture===c[1].picture)return Object(y.a)(Object(y.a)({},e),{},{pairsFound:r+1,cards:t.map((function(e){return e.id!==c[0].id&&e.id!==c[1].id||(e.visibility="found"),e}))});case"FROZEN_GAME":return Object(y.a)(Object(y.a)({},e),{},{isFrozen:!0});case"DEFROST_GAME":return Object(y.a)(Object(y.a)({},e),{},{isFrozen:!1});case"FLIP_DOWN_CARDS":return Object(y.a)(Object(y.a)({},e),{},{cards:t.map((function(e){return"open"===e.visibility&&(e.visibility="hidden"),e}))});case"SAVE_TIME":return Object(y.a)(Object(y.a)({},e),{},{timeGame:n.payload.timeGame});case"COMPLETE_GAME":return Object(y.a)(Object(y.a)({},e),{},{gameComplete:!0});case"END_GAME":return Object(y.a)(Object(y.a)({},e),{},{gameComplete:!1,pairsFound:0})}return e},F=Object(g.a)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),E=t(1),C=x.b.div(a||(a=Object(h.a)(["\n    height: calc(100vh - 100px);\n    padding: 50px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    @media(max-width: 600px){\n        padding: 0;\n    }\n\n    h1 {\n        text-transform: uppercase;\n        text-align: center;\n        font-size: 6rem;\n        letter-spacing: 10px;\n        margin: 0;\n        margin-bottom: 100px;\n    }\n\n    .inputWrapper {\n        text-align: center;\n    }\n\n    label {\n        display: inline-block;\n        text-transform: uppercase;\n        font-size: 14px;\n    }\n\n    input {\n        height: 50px;\n        font-size: 16px;\n    }\n\n    .button {\n        margin-top: 25px;\n        padding: 10px 25px;\n        border: solid 1px blue;\n        color: blue;\n        text-decoration: none;\n    }\n"]))),N=function(){localStorage.setItem("PLAYER_NAME","Anonim");return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(C,{children:[Object(E.jsx)("h1",{children:"Memory"}),Object(E.jsxs)("div",{className:"inputWrapper",children:[Object(E.jsx)("label",{htmlFor:"name",children:"Player name"})," ",Object(E.jsx)("br",{}),Object(E.jsx)("input",{type:"text",name:"name",id:"name",maxLength:"20",onChange:function(e){localStorage.setItem("PLAYER_NAME",e.target.value)}})]}),Object(E.jsx)(b.b,{to:"/game",className:"button",children:"Play"})]})})},A=x.b.div(r||(r=Object(h.a)(["\n  min-width: 100px;\n  width: 100%;\n  flex-basis: 20%;\n  min-height: 100px;\n  max-height: 150px;\n  margin: 10px;\n  perspective: 1000px;\n  position: relative;\n  cursor: pointer;\n\n  @media(max-width: 600px){\n    margin: 5px;\n  }\n\n  .card__content{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    transition: 0.6s;\n    transform: translateX(0%) rotateY(0deg);\n    transform-style: preserve-3d;\n    transform-origin: 100% 50%;\n\n    &.open{\n      transform: translateX(-100%) rotateY(180deg);\n    }\n    &.hidden{\n      transform: translateX(0%) rotateY(0deg);\n    }\n    &.found{\n      background: grey;\n      opacity: 0;\n      cursor: default;\n    }\n\n  }\n\n  .face {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    font-size: 60px;\n    backface-visibility: hidden;\n  }\n\n  .front {\n    background: #cbc0d3;\n    border: solid 5px #8e9aaf;\n  }\n\n  .back {\n    background: #dee2ff;\n    transform: rotateY(180deg);\n    border: solid 5px #8e9aaf;\n  }\n\n  .picture {\n    height: 100%;\n    width: 100%;\n    padding: 5px;\n    text-align: center;\n  }\n\n"]))),I=Object(f.b)((function(e){return{totalFlips:e.totalFlips,isFrozen:e.isFrozen}}),(function(e){return{flipUpFirstCard:function(n){return e(function(e){return{type:"FLIP_UP_FIRST_CARD",payload:{id:e}}}(n))},flipUpSecondCard:function(n){return e(function(e){return{type:"FLIP_UP_SECOND_CARD",payload:{id:e}}}(n))},checkPair:function(){return e({type:"CHECK_PAIR"})},flipDownCards:function(){return e({type:"FLIP_DOWN_CARDS"})},frozenGame:function(){return e({type:"FROZEN_GAME"})},defrostGame:function(){return e({type:"DEFROST_GAME"})}}}))((function(e){var n=e.id,t=e.picture,i=e.visibility,a=e.totalFlips,r=e.isFrozen,c=e.flipUpFirstCard,s=e.flipUpSecondCard,o=e.checkPair,l=e.frozenGame,d=e.defrostGame,u=e.flipDownCards;return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(A,{onClick:function(){var e=a%2===0;"hidden"===i&&(e&&!r?c(n):e||r||(s(n),l(),setTimeout((function(){o(),setTimeout((function(){u(),d()}),600)}),700)))},children:Object(E.jsxs)("div",{className:"card__content ".concat(i),children:[Object(E.jsx)("div",{className:"face front"}),Object(E.jsx)("div",{className:"face back ",children:Object(E.jsx)("img",{src:t,alt:"image",className:"picture"})})]})})})})),w=Object(f.b)((function(e){return{cards:e.cards}}))((function(e){var n=e.cards.map((function(e){return Object(E.jsx)(I,{id:e.id,picture:e.picture,visibility:e.visibility},e.id)}));return Object(E.jsx)(E.Fragment,{children:n})})),S=Object(f.b)((function(e){return{playerName:e.playerName}}))((function(e){var n=e.playerName;return Object(E.jsx)("h2",{children:n})})),L=t(16),G=t(17),M=t(31),k=t(29),T=function(e){Object(M.a)(t,e);var n=Object(k.a)(t);function t(e){var i;return Object(L.a)(this,t),(i=n.call(this,e)).saveTime=e.saveTime,i.state={time:0,timerOn:!1},i.interval=null,i}return Object(G.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){e.setState((function(n){return Object(y.a)(Object(y.a)({},n),{},{time:e.state.time+10})}))}),10)}},{key:"componentWillUnmount",value:function(){this.saveTime(this.state.time),clearInterval(this.interval)}},{key:"render",value:function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("div",{className:"container",children:Object(E.jsxs)("p",{children:[Object(E.jsxs)("span",{children:[("0"+Math.floor(this.state.time/6e4%60)).slice(-2),":"]}),Object(E.jsxs)("span",{children:[("0"+Math.floor(this.state.time/1e3%60)).slice(-2),":"]}),Object(E.jsx)("span",{children:("0"+Math.floor(this.state.time/10%100)).slice(-2)})]})})})}}]),t}(u.Component),R=Object(f.b)(null,(function(e){return{saveTime:function(n){return e(function(e){return{type:"SAVE_TIME",payload:{timeGame:e}}}(n))}}}))(T),D=Object(f.b)((function(e){return{totalFlips:e.totalFlips}}))((function(e){var n=e.totalFlips;return Object(E.jsxs)("p",{children:["Flips: ",n]})})),P=t.p+"static/media/alien.1f8261d7.svg",z=t.p+"static/media/dog.4df5ec30.svg",U=t.p+"static/media/monkey.e99edbe7.svg",X=t.p+"static/media/panda.3ff9f857.svg",Y=t.p+"static/media/pig.4980aafc.svg",W=t.p+"static/media/wolf.e0a3ff60.svg",J=x.b.div(c||(c=Object(h.a)(["\n    margin: 25px;\n    display: flex;\n\n    @media(max-width: 600px){\n        margin: 0;\n        flex-direction: column-reverse;\n    }\n\n    .panel {\n        display: flex;\n        flex-direction: column;\n        width: 15%;\n        margin-top: 20px;\n        text-align: center;\n        @media(max-width: 600px){\n            flex-direction: row;\n            justify-content: space-around;\n            align-items: center;\n            width: 100%;\n            \n        }\n    }\n    .board {\n        display: flex;\n        justify-content: space-around;\n        flex-wrap: wrap;\n        background: #053C5E;\n        max-width: 800px;\n        width: 100%;\n        min-height: 80vh;\n        margin: 0 auto;\n    }\n"]))),V=Object(f.b)((function(e){return{pairsFound:e.pairsFound,gameComplete:e.gameComplete}}),(function(e){return{startGame:function(n,t){return e(function(e,n){return{type:"START_GAME",payload:{playerName:e,cards:n}}}(n,t))},completeGame:function(){return e({type:"COMPLETE_GAME"})}}}))((function(e){var n=e.startGame,t=e.pairsFound,i=e.gameComplete,a=e.completeGame,r=localStorage.getItem("PLAYER_NAME"),c=[P,P,z,z,U,U,X,X,W,W,Y,Y];Object(u.useEffect)((function(){var e=s();n(r,e)}),[]),Object(u.useEffect)((function(){t>=c.length/2&&a()}),[t]);var s=function(){return c.sort((function(){return.5-Math.random()})).map((function(e,n){return{id:n,picture:e,visibility:"hidden"}}))};return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(J,{children:[Object(E.jsxs)("div",{className:"panel",children:[Object(E.jsx)(S,{}),Object(E.jsx)(R,{}),Object(E.jsx)(D,{})]}),Object(E.jsx)("div",{className:"board",children:Object(E.jsx)(w,{})})]}),i&&Object(E.jsx)(j.a,{to:"/end"})]})})),B=function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(V,{})})},H=function(e){return Object(E.jsxs)("span",{children:[Object(E.jsxs)("span",{children:[("0"+Math.floor(e/6e4%60)).slice(-2),":"]}),Object(E.jsxs)("span",{children:[("0"+Math.floor(e/1e3%60)).slice(-2),":"]}),Object(E.jsx)("span",{children:("0"+Math.floor(e/10%100)).slice(-2)})]})},K=t(28),Z=t.n(K),q=function(){function e(n){Object(L.a)(this,e),this.scoreList=n.get("SCORE_LIST")||[],this.storage=n,this.numberListItems=5}return Object(G.a)(e,[{key:"add",value:function(e){this.scoreList.push(e),this.onChange()}},{key:"refresh",value:function(){this.scoreList=this.scoreList.map((function(e){return e.isActual=!1,e}))}},{key:"getAll",value:function(){return this.scoreList}},{key:"onChange",value:function(){this.scoreList.sort((function(e,n){return e.time-n.time})),this.scoreList.length>this.numberListItems&&this.scoreList.pop(),this.storage.set("SCORE_LIST",this.scoreList)}}]),e}(),Q=function(){function e(){Object(L.a)(this,e),this.storage=localStorage}return Object(G.a)(e,[{key:"set",value:function(e,n){this.storage.setItem(e,JSON.stringify(n))}},{key:"get",value:function(e){var n=this.storage.getItem(e);return JSON.parse(n)}}]),e}(),$=x.b.li(s||(s=Object(h.a)(["\n    padding-left: 25px;\n    margin-bottom: 10px;\n    font-weight: ",";\n\n\n"])),(function(e){return e.isActual?"bold":100})),ee=function(e){var n=e.player,t=e.time,i=e.isActual;return Object(E.jsxs)($,{isActual:i,children:[n," \xa0",Object(E.jsx)("span",{className:"listItem__time",children:H(t)})]})},ne=x.b.ul(o||(o=Object(h.a)(["\n    list-style-type: decimal;\n    text-align: left;\n    text-align: center;\n    display: inline-block;\n\n    .scoreList__actualScore {\n     padding-left: 25px;\n     font-weight: bold;\n}\n"]))),te=Object(f.b)((function(e){return{playerName:e.playerName,timeGame:e.timeGame,totalFlips:e.totalFlips}}))((function(e){var n,t,i,a=e.playerName,r=e.timeGame,c=e.totalFlips,s=new Q,o=new q(s),l=[],d=(n=a,t=r,i=c,{id:Z()(),player:n,time:t,flips:i,isActual:!0});return d.time&&(o.refresh(),o.add(d),l=(l=o.getAll()).map((function(e){return Object(E.jsx)(ee,{id:e.id,player:e.player,time:e.time,isActual:e.isActual},e.id)}))),Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(ne,{children:[l,!l.find((function(e){return e.key===d.id}))&&Object(E.jsx)("li",{children:Object(E.jsxs)("p",{className:"scoreList__actualScore",children:[Object(E.jsx)("span",{children:a})," \xa0",Object(E.jsx)("span",{children:H(d.time)})]})})]})})})),ie=x.b.div(l||(l=Object(h.a)(["\n    width: 100%;\n    max-width: 600px;\n    min-height: 50%;\n    margin: auto;\n    border: solid teal 2px;\n"]))),ae=x.b.div(d||(d=Object(h.a)(["\n    display: flex;\n    margin: 25px;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n\n    .button {\n        margin-top: 25px;\n        padding: 10px 25px;\n        border: solid 1px blue;\n        color: blue;\n        text-decoration: none;\n    }\n"]))),re=Object(f.b)(null,(function(e){return{endGame:function(){return e({type:"END_GAME"})}}}))((function(e){var n=e.endGame;return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(ae,{children:[Object(E.jsx)("h1",{children:"Best of the best"}),Object(E.jsx)(ie,{children:Object(E.jsx)(te,{})}),Object(E.jsx)(b.b,{to:"/",className:"button",onClick:n,children:" New game "})]})})})),ce=function(){return Object(E.jsx)(f.a,{store:F,children:Object(E.jsx)(b.a,{children:Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(O,{}),Object(E.jsx)(j.b,{exact:!0,path:"/",component:N}),Object(E.jsx)(j.b,{path:"/game",component:B}),Object(E.jsx)(j.b,{path:"/end",component:re})]})})})};m.a.render(Object(E.jsx)(ce,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.ea2d8d61.chunk.js.map