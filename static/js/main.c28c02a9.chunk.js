(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){e.exports=a.p+"static/media/kosNoN.e7e8a02d.png"},104:function(e,t,a){e.exports=a.p+"static/media/kos1.81320fcd.png"},105:function(e,t,a){e.exports=a.p+"static/media/kos2.2c3f5fdd.png"},106:function(e,t,a){e.exports=a.p+"static/media/kos3.8313fcaa.png"},107:function(e,t,a){e.exports=a.p+"static/media/kos4.e6ba8eff.png"},108:function(e,t,a){e.exports=a.p+"static/media/kos5.a5b71293.png"},109:function(e,t,a){e.exports=a.p+"static/media/kos6.a3766195.png"},163:function(e,t,a){e.exports=a(246)},246:function(e,t,a){"use strict";a.r(t);a(164),a(214);var n=a(0),l=a.n(n),i=a(34),r=a.n(i),c=a(29),m=a.n(c),s=a(85),d=a(86),o=a(110),u=a(87),E=a(111),p=a(30),y=a(2),g=(a(245),a(38)),v=a.n(g),f=a(94),h=a.n(f),b=a(95),I=a.n(b),k=a(96),B=a.n(k),P=a(97),S=a.n(P),z=a(98),x=a.n(z),w=a(99),C=a.n(w),G=a(100),R=a.n(G),L=a(101),M=a.n(L),O=a(102),_=a.n(O),T=a(103),H=a.n(T),j=a(104),K=a.n(j),N=a(105),A=a.n(N),U=a(106),W=a.n(U),V=a(107),X=a.n(V),D=a(108),J=a.n(D),q=a(109),F=a.n(q),Q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={activePanel:"home",fetchedUser:null,popout:null,post:null,CheckSize:"",access_token:"XXXXXXXX",DefSumbol:"QWERTYUIOPLKJHGFDSAZXCVBNM1234567890qwertyuioplkjhgfdsazxcvbnm",ValueClickGameKosti:0},a.PassGeneratorUnTimer=a.PassGeneratorUnTimer.bind(Object(p.a)(Object(p.a)(a))),a.OS=a.OS.bind(Object(p.a)(Object(p.a)(a))),a.GameKosti=a.GameKosti.bind(Object(p.a)(Object(p.a)(a))),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),m.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){var e=this;return l.a.createElement(y.p,{activePanel:this.state.activePanel},l.a.createElement(y.k,{id:"home"},l.a.createElement(y.l,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),this.state.fetchedUser&&l.a.createElement(y.f,{title:"\u041f\u0440\u0438\u0432\u0435\u0441\u0442\u0432\u0443\u0435\u043c \u0432 Random",align:"center"},this.state.fetchedUser.photo_200?l.a.createElement(y.a,{src:this.state.fetchedUser.photo_200}):null,"".concat(this.state.fetchedUser.first_name," ").concat(this.state.fetchedUser.last_name)),l.a.createElement(y.f,{title:"\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f"},l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"2",before:l.a.createElement(S.a,null),onClick:function(){return e.setState({activePanel:"Heads_And_Tails"})}},"\u041e\u0440\u0451\u043b \u0438 \u0440\u0435\u0448\u043a\u0430")),l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"2",before:l.a.createElement(_.a,null),onClick:function(){return e.setState({activePanel:"KostiPanel"})}},"\u041a\u043e\u0441\u0442\u0438")),l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"2",before:l.a.createElement(C.a,null),onClick:function(){return e.setState({activePanel:"NumberRandom"})}},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e")),l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"2",before:l.a.createElement(R.a,null),onClick:function(){return e.setState({activePanel:"StringRandom"})}},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0441\u043b\u043e\u0432\u043e")),l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"2",before:l.a.createElement(M.a,null),onClick:function(){return e.setState({activePanel:"PassGener"})}},"Pass"))),l.a.createElement(y.f,{title:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438",description:"by CrOfGames & Swanflow"},l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"2",before:l.a.createElement(h.a,null),onClick:this.OS},"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c")))),l.a.createElement(y.k,{id:"ListCreatePeaple"},l.a.createElement(y.l,{theme:"light",left:l.a.createElement(y.g,{onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(v.a,null)),addon:l.a.createElement(y.g,{onClick:function(){return e.setState({activePanel:"home"})}},"\u041d\u0430\u0437\u0430\u0434")},"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c"),l.a.createElement(y.f,{description:"by CrOfGames and Swanflow"},l.a.createElement(y.j,null,l.a.createElement(y.d,null,l.a.createElement(y.c,{before:l.a.createElement(y.a,{src:"https://sun4-12.userapi.com/c845520/v845520191/c1cf5/-TbthP8AtzU.jpg"}),description:"\u041e\u0441\u043d\u043e\u0432\u0430\u0442\u0435\u043b\u044c",href:"https://vk.com/dantacion"},"\u0414\u0430\u043d\u0438\u0438\u043b \u041b\u0443\u043d\u044e\u0448\u043a\u0438\u043d")),l.a.createElement(y.d,null,l.a.createElement(y.c,{before:l.a.createElement(y.a,{src:"https://sun9-20.userapi.com/c831108/v831108559/194a0c/B0MwkUL5qp0.jpg?ava=1"}),description:"\u041c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440",href:"https://vk.com/tolmachew_9"},"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0422\u043e\u043b\u043c\u0430\u0447\u0435\u0432")),l.a.createElement(y.d,null,l.a.createElement(y.c,{before:l.a.createElement(y.a,{src:"https://sun9-40.userapi.com/c847122/v847122919/2645d/QzTciW-WZk8.jpg?ava=1"}),description:"\u041c\u043e\u0434\u0435\u0440\u0430\u0442\u043e\u0440",href:"https://vk.com/danil_16s"},"\u0414\u0430\u043d\u0438\u043b \u0421\u0430\u0432\u043a\u0438\u043d")),l.a.createElement(y.d,null,l.a.createElement(y.c,{before:l.a.createElement(y.a,{src:"https://sun4-16.userapi.com/c851036/v851036385/11eb87/6NZjCAA9pUc.jpg?ava=1"}),description:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a/\u0412\u043e\u043f\u0440\u043e\u0441\u044b",href:"https://vk.com/egortimofeevcooper"},"\u0415\u0433\u043e\u0440 \u0422\u0438\u043c\u043e\u0444\u0435\u0435\u0432")),l.a.createElement(y.d,{id:"money"},l.a.createElement(y.c,{before:l.a.createElement(y.a,{src:"https://sun9-23.userapi.com/c850120/v850120058/4ae63/aWa_jIJwVpI.jpg?ava=1"}),href:"https://vk.com/crofgames?w=app6795545_-172310220"},"\u041f\u043e\u0436\u0435\u0440\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u0435")),l.a.createElement(y.d,null,l.a.createElement(y.c,{before:l.a.createElement(y.a,{src:"https://sun9-44.userapi.com/c850024/v850024594/18a210/EYNpeikl56s.jpg?ava=1"}),href:"https://vk.com/swanflow"},"\u0413\u0440\u0443\u043f\u043f\u0430 \u0432 \u0412\u041a"))))),l.a.createElement(y.k,{id:"Heads_And_Tails"},l.a.createElement(y.l,{theme:"light",left:l.a.createElement(y.g,{id:"backs1",onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(v.a,null))},"\u041e\u0440\u0451\u043b \u0438 \u0420\u0435\u0448\u043a\u0430"),l.a.createElement(y.f,{align:"center"},l.a.createElement(y.d,{align:"center"},l.a.createElement(y.h,{title:"Progress",align:"center"},l.a.createElement(y.m,{id:"Prorgs",value:10}))),l.a.createElement(y.d,{align:"center"},l.a.createElement(y.a,{size:200,id:"money",src:B.a})),l.a.createElement(y.d,{align:"center"},l.a.createElement("font",{id:"text",size:"5",color:"#528bcc",face:"Arial"})),l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"tertiary",id:"Starting",onClick:this.RandOR},"\u0418\u0441\u043f\u044b\u0442\u0430\u0442\u044c \u0443\u0434\u0430\u0447\u0443"))),l.a.createElement(y.f,{description:"by CrOfGames & Swanflow"},l.a.createElement(y.d,null,l.a.createElement("p",null,"\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f?"),l.a.createElement("p",null,'\u041f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 "\u0418\u0441\u043f\u044b\u0442\u0430\u0442\u044c \u0443\u0434\u0430\u0447\u0443".')))),l.a.createElement(y.k,{id:"NumberRandom"},l.a.createElement(y.l,{theme:"light",left:l.a.createElement(y.g,{id:"backs2",onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(v.a,null))},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e"),l.a.createElement(y.f,null,l.a.createElement(y.d,{align:"center"},l.a.createElement(y.h,{title:"Progress",align:"center"},l.a.createElement(y.m,{id:"ProrgsNum",value:16})))),l.a.createElement("p",{align:"center"},l.a.createElement("font",{id:"RanNum",size:"10",color:"#528bcc",face:"Arial"},"0")),l.a.createElement(y.f,null,l.a.createElement(y.d,{align:"center"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0439 \u0446\u0438\u0444\u0440\u044b."),l.a.createElement(y.d,{style:{display:"flex"}},l.a.createElement("a",null,"\u041e\u0442:",l.a.createElement(y.i,{id:"InNum",type:"number",defaultValue:"0",size:"l"})),l.a.createElement(y.d,null),l.a.createElement("a",null,"\u0414\u043e:",l.a.createElement(y.i,{id:"OutNum",type:"number",defaultValue:"100",size:"l"}))),l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"tertiary",id:"StartingRandom",onClick:this.RandNum},"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c"))),l.a.createElement(y.f,{description:"by CrOfGames & Swanflow"},l.a.createElement(y.d,null,l.a.createElement("p",null,"\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f?"),l.a.createElement("p",null,"\u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 2 \u0447\u0438\u0441\u043b\u0430:"),l.a.createElement("p",null,"1: \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e."),l.a.createElement("p",null,"2: \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e."),l.a.createElement("p",null,'\u0414\u0430\u043b\u0435\u0435 \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u0436\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 "\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c".')))),l.a.createElement(y.k,{id:"PassGener"},l.a.createElement(y.l,{theme:"light",left:l.a.createElement(y.g,{id:"backs2",onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(v.a,null))},"Pass"),l.a.createElement(y.f,{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"},l.a.createElement(y.d,{style:{display:"flex"}},l.a.createElement("a",null,"\u0411\u0430\u0437\u0430 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432:",l.a.createElement(y.e,null,l.a.createElement(y.n,{id:"Check",name:"type",defaultChecked:"checked",onClick:this.InputEnabled},"\u041e\u0442 \u0441\u0435\u0440\u0432\u0438\u0441\u0430"),l.a.createElement(y.n,{name:"type",onClick:this.InputEnabled},"\u0421\u0432\u043e\u044f"))),l.a.createElement(y.d,null),l.a.createElement("a",null,"\u0414\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f",l.a.createElement(y.o,{id:"ListSize",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u043b\u0438\u043d\u0443"},l.a.createElement("option",{value:"size1"},"4 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"),l.a.createElement("option",{value:"size2"},"5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("option",{value:"size3"},"6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("option",{value:"size4"},"8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("option",{value:"size5"},"10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("option",{value:"size6"},"12 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("option",{value:"size7"},"14 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),l.a.createElement("option",{value:"size8"},"16 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")))),l.a.createElement(y.d,{id:"InputEn",style:{display:"none"}},"\u041d\u0430\u0431\u043e\u0440 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432:",l.a.createElement(y.i,{id:"InSumL",type:"text",defaultValue:this.state.DefSumbol}))),l.a.createElement(y.f,{title:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"},l.a.createElement(y.d,null,l.a.createElement("p",{align:"center"},l.a.createElement("font",{id:"RanPass",size:"4",color:"#FF0000",face:"Arial"},"Awhj123WAQ"))),l.a.createElement(y.d,null),l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"0",id:"StartingRandomPass",onClick:this.PassGeneratorUnTimer},"\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c"))),l.a.createElement(y.f,{description:"by CrOfGames & Swanflow"},l.a.createElement(y.d,null,l.a.createElement("p",null,"\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f?"),l.a.createElement("p",null,"\u0422\u0443\u0442 \u0432\u0441\u0451 \u043f\u0440\u043e\u0441\u0442\u043e."),l.a.createElement("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0438\u043b\u0438 \u0436\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u0432\u043e\u0438."),l.a.createElement("p",null,"\u0417\u0430\u0447\u0435\u043c \u043e\u043d\u0438? \u0427\u0442\u043e \u0431\u044b \u0431\u044b\u043b\u043e \u0438\u0437 \u0447\u0435\u0433\u043e \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c."),l.a.createElement("p",null,'\u0421\u043b\u0435\u0434\u043e\u043c \u0412\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0434\u043b\u0438\u043d\u0443 \u0438 \u043d\u0430\u0436\u0430\u0442\u044c "\u0413\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c".')))),l.a.createElement(y.k,{id:"KostiPanel"},l.a.createElement(y.l,{theme:"light",left:l.a.createElement(y.g,{id:"backs2",onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(v.a,null))},"\u041a\u043e\u0441\u0442\u0438"),l.a.createElement(y.f,null,l.a.createElement(y.d,{align:"center"},l.a.createElement("a",{id:"StatePlayer"},"\u0418\u0433\u0440\u0430 \u043d\u0435 \u043d\u0430\u0447\u0430\u043b\u0430\u0441\u044c"),l.a.createElement(y.a,{size:200,type:"app",id:"KosGame",src:H.a}))),l.a.createElement(y.f,{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"},l.a.createElement("a",{id:"VisHisList"},"\u0427\u0438\u0441\u043b\u043e \u0438\u0433\u0440\u043e\u043a\u043e\u0432:",l.a.createElement(y.o,{id:"ListPlayer"},l.a.createElement("option",{value:"player_1"},"1 \u0438\u0433\u0440\u043e\u043a"),l.a.createElement("option",{value:"player_2"},"2 \u0438\u0433\u0440\u043e\u043a\u0430"),l.a.createElement("option",{value:"player_3"},"3 \u0438\u0433\u0440\u043e\u043a\u0430"),l.a.createElement("option",{value:"player_4"},"4 \u0438\u0433\u0440\u043e\u043a\u0430"),l.a.createElement("option",{value:"player_5"},"5 \u0438\u0433\u0440\u043e\u043a\u043e\u0432"),l.a.createElement("option",{value:"player_6"},"6 \u0438\u0433\u0440\u043e\u043a\u043e\u0432"),l.a.createElement("option",{value:"player_7"},"7 \u0438\u0433\u0440\u043e\u043a\u043e\u0432"),l.a.createElement("option",{value:"player_8"},"8 \u0438\u0433\u0440\u043e\u043a\u043e\u0432"))),l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"0",id:"StartingGame",onClick:this.GameKosti},"\u041f\u043e\u0434\u043a\u0438\u043d\u0443\u0442\u044c"))),l.a.createElement(y.f,{title:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0431\u0443\u0434\u0435\u0442 \u0442\u0443\u0442",id:"ListPlayerWins"}),l.a.createElement(y.f,{description:"by CrOfGames & Swanflow"},l.a.createElement(y.d,null,l.a.createElement("p",null,"\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f?"),l.a.createElement("p",null,"\u0422\u0443\u0442 \u0432\u0441\u0451 \u043f\u0440\u043e\u0441\u0442\u043e."),l.a.createElement("p",null,"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u043e\u043b-\u0432\u043e \u0438\u0433\u0440\u043e\u043a\u043e\u0432,"),l.a.createElement("p",null,'\u0418 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 "\u041f\u043e\u0434\u043a\u0438\u043d\u0443\u0442\u044c".'),l.a.createElement("p",null,"\u0417\u0430 \u0432\u0441\u0435\u0445 \u0438\u0433\u0440\u043e\u043a\u043e\u0432 \u043f\u043e\u0434\u043a\u0438\u0434\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438."),l.a.createElement("p",null,'\u0423 \u043a\u043e\u0433\u043e \u0447\u0442\u043e \u0432\u044b\u043f\u0430\u043b\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0435 \u043a\u043d\u043e\u043f\u043a\u0438 "\u041f\u043e\u0434\u043a\u0438\u043d\u0443\u0442\u044c"')))),l.a.createElement(y.k,{id:"StringRandom"},l.a.createElement(y.l,{theme:"light",left:l.a.createElement(y.g,{id:"backs2",onClick:function(){return e.setState({activePanel:"home"})}},l.a.createElement(v.a,null))},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"),l.a.createElement("p",{align:"center"},l.a.createElement("font",{id:"RanStringsdwe",size:"5",color:"#528bcc",face:"Arial"},"\u0421\u043b\u043e\u0432\u043e")),l.a.createElement(y.f,null,l.a.createElement(y.d,{align:"center"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u0430 \u0432 \u044d\u0442\u043e \u043f\u043e\u043b\u0435:",l.a.createElement(y.i,{id:"StringAllInput",type:"text",size:"l"})),l.a.createElement(y.d,null,l.a.createElement(y.b,{size:"xl",level:"1",id:"StartingRandom",onClick:this.StringGenerate},"\u041d\u0430\u0447\u0430\u0442\u044c"))),l.a.createElement(y.f,{description:"by CrOfGames & Swanflow"},l.a.createElement(y.d,null,l.a.createElement("p",null,"\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f?"),l.a.createElement("p",null,"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u0432\u0435\u0441\u0442\u0438 \u0432 \u043f\u043e\u043b\u0435 \u0441\u043b\u043e\u0432\u0430, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0441\u043b\u043e\u0432\u043e."),l.a.createElement("p",null,"\u0412\u0441\u0435 \u0441\u043b\u043e\u0432\u0430 \u0434\u043e\u043b\u0436\u043d\u044b \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0442\u044c\u0441\u044f \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u043c."),l.a.createElement("p",null,'\u041f\u0440\u0438\u043c\u0435\u0440: "\u042f\u0431\u043b\u043e\u043a\u043e \u0411\u0430\u043d\u0430\u043d \u0413\u0440\u0443\u0448\u0430".'),l.a.createElement("p",null,'\u0412\u044b\u0432\u043e\u0434: "\u0413\u0440\u0443\u0448\u0430".')))))}},{key:"RandOR",value:function(){document.getElementById("Starting").style.visibility="hidden",document.getElementById("backs1").style.visibility="hidden";var e=0,t=0;Math.round(0+100*Math.random());var a=setInterval(function(){t++,document.getElementById("Prorgs").style="width: "+t+"%;",100===t&&(t=0,document.getElementById("Prorgs").style="width: "+t+"100%;",document.getElementById("Prorgs").value="56%",clearInterval(a))},25),n=setInterval(function(){e++,Math.round(0+100*Math.random())%2?(document.getElementById("text").innerHTML="\u041e\u0440\u0451\u043b",document.getElementById("money").src=I.a):(document.getElementById("text").innerHTML="\u0420\u0435\u0448\u043a\u0430",document.getElementById("money").src=x.a),10===e&&(document.getElementById("Starting").style.visibility="visible",document.getElementById("backs1").style.visibility="visible",clearInterval(n))},250)}},{key:"RandNum",value:function(){var e=0,t=0,a=document.getElementById("InNum").value,n=document.getElementById("OutNum").value;if(""!==a)if(""!==n){document.getElementById("StartingRandom").style.visibility="hidden",document.getElementById("backs2").style.visibility="hidden";var l=0;e=Math.round(a+Math.random()*(n-a));var i=setInterval(function(){t++,e=Math.round(parseInt(a)+Math.random()*(n-a)),document.getElementById("RanNum").innerHTML=e,l++,document.getElementById("ProrgsNum").style="width: "+l+"%;",t>=100&&(document.getElementById("StartingRandom").style.visibility="visible",document.getElementById("backs2").style.visibility="visible",clearInterval(i),l=0,document.getElementById("ProrgsNum").style="width: "+l+"100%;",document.getElementById("ProrgsNum").value="56%")},30)}else alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e.");else alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e.")}},{key:"InputEnabled",value:function(){document.getElementById("Check").checked?document.getElementById("InputEn").style.display="none":document.getElementById("InputEn").style.display="inline"}},{key:"GameKosti",value:function(){var e=document.getElementById("ListPlayer").options[document.getElementById("ListPlayer").selectedIndex].value,t=e.slice(e.length-1,e.length),a=0,n=0,l=[],i=[],r=1;document.getElementById("ListPlayerWins").innerHTML="",document.getElementById("StartingGame").style.visibility="hidden",document.getElementById("backs2").style.visibility="hidden";var c=setInterval(function(){switch(a++,document.getElementById("StatePlayer").innerHTML="\u041f\u043e\u0434\u043a\u0438\u0434\u044b\u0432\u0430\u0435\u0442 "+r+"-\u0439 \u0438\u0433\u0440\u043e\u043a",n=Math.round(1+5*Math.random())){case 1:document.getElementById("KosGame").src=K.a;break;case 2:document.getElementById("KosGame").src=A.a;break;case 3:document.getElementById("KosGame").src=W.a;break;case 4:document.getElementById("KosGame").src=X.a;break;case 5:document.getElementById("KosGame").src=J.a;break;case 6:document.getElementById("KosGame").src=F.a}if(a%20===0){l[r-1]=n,i[r-1]=1;var e=document.getElementById("ListPlayerWins");document.getElementById("ListPlayerWins").title="\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442";var m=document.createElement("div");m.innerHTML='<div class="Group Group--android" align="center"><div class="Header Header--android Header--level-secondary"><div class="Header__in"><div class="Header__content">'+r+'-\u0439 \u0438\u0433\u0440\u043e\u043a</div></div></div><div class="Group__content"><div class="Div Div--android"><img style="width: 100px; height: 100px; border-radius: 20px;" class="Avatar__img" src='+document.getElementById("KosGame").src+" /></div></div></div>",e.appendChild(m),r++}if(a===20*t){r=0,document.getElementById("StartingGame").style.visibility="visible",document.getElementById("backs2").style.visibility="visible";for(var s=0,d=0;d<l.length;++d)l[d]>s&&(s=l[d]);for(var o="",u=0;u<l.length;++u)l[u]===s&&(o=o+""+(u+1));if(1===o.length&&(document.getElementById("StatePlayer").innerHTML="\u041f\u043e\u0431\u0435\u0434\u0438\u043b "+o+"-\u0439 \u0438\u0433\u0440\u043e\u043a"),o.length>2){for(var E="\u041d\u0438\u0447\u044c\u044f \u043c\u0435\u0436\u0434\u0443: ",p=0;p<o.length;++p)E=E+" "+o[p]+"-\u043c";document.getElementById("StatePlayer").innerHTML=E+" \u0438\u0433\u0440\u043e\u043a\u043e\u043c"}clearInterval(c)}},100)}},{key:"PassGeneratorUnTimer",value:function(){var e=document.getElementById("ListSize").options[document.getElementById("ListSize").selectedIndex].value,t=0,a=document.getElementById("InSumL").value,n=0;if(""!==a){switch(e){case"size1":document.getElementById("RanPass").innerHTML="****",t=4;break;case"size2":document.getElementById("RanPass").innerHTML="*****",t=5;break;case"size3":document.getElementById("RanPass").innerHTML="******",t=6;break;case"size4":document.getElementById("RanPass").innerHTML="********",t=8;break;case"size5":document.getElementById("RanPass").innerHTML="**********",t=10;break;case"size6":document.getElementById("RanPass").innerHTML="************",t=12;break;case"size7":document.getElementById("RanPass").innerHTML="**************",t=14;break;case"size8":document.getElementById("RanPass").innerHTML="****************",t=16;break;default:return void alert("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u0443 \u0438\u0437 \u0434\u043b\u0438\u043d \u043f\u0430\u0440\u043e\u043b\u044f.")}var l=document.getElementById("RanPass").innerText,i=0,r=0;document.getElementById("StartingRandomPass").style.visibility="hidden",document.getElementById("backs2").style.visibility="hidden";var c=setInterval(function(){++n%10||i++,r=Math.round(Math.random()*(a.length-1)),l=l.substr(0,i)+a[r]+l.substr(i+1),document.getElementById("RanPass").innerHTML=l,n===10*t-1&&(clearInterval(c),document.getElementById("StartingRandomPass").style.visibility="visible",document.getElementById("backs2").style.visibility="visible")},30)}else alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0438\u0445 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0430\u0440\u043e\u043b\u044c.")}},{key:"OS",value:function(){this.setState({activePanel:"ListCreatePeaple"});var e=Object(y.q)(),t=setInterval(function(){null!=document.getElementById("money").style&&(document.getElementById("money").style.display="ios"===e?"none":"inline",clearInterval(t))},1)}},{key:"StringGenerate",value:function(){var e="Def "+document.getElementById("StringAllInput").value+" Def",t=0,a=0,n=0,l=0;if(8!==e.length)if(-1!==e.slice(4,e.length-4).indexOf(" "))if(" "!==e.slice(e.length-5,e.length-4)){for(document.getElementById("StartingRandom").style.visibility="hidden",document.getElementById("backs2").style.visibility="hidden";-1!==(l=e.indexOf(" ",l+1));)t++;var i=0,r="",c=setInterval(function(){for(n++,a=Math.round(2+Math.random()*(t-2));-1!==(l=e.indexOf(" ",l+1));)++i===a&&(r=e.slice(0,l),document.getElementById("RanStringsdwe").innerHTML=r.slice(r.lastIndexOf(" ")));i=0,40===n&&(clearInterval(c),document.getElementById("StartingRandom").style.visibility="visible",document.getElementById("backs2").style.visibility="visible")},100)}else alert("\u0423\u0431\u0435\u0440\u0438\u0442\u0435 \u0432 \u043a\u043e\u043d\u0446\u0435 \u043f\u0440\u043e\u0431\u0435\u043b");else alert("\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u043e \u0441\u043b\u043e\u0432\u043e, \u0438\u043b\u0438 \u043d\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u043b\u0438 \u043f\u0440\u043e\u0431\u0435\u043b");else alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u0430 \u0438\u0445 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u043d\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435.")}}]),t}(l.a.Component);m.a.send("VKWebAppInit",{}),r.a.render(l.a.createElement(Q,null),document.getElementById("root"))},95:function(e,t,a){e.exports=a.p+"static/media/orel.197537e0.png"},96:function(e,t,a){e.exports=a.p+"static/media/orelandreshka.cf9f3c67.png"},98:function(e,t,a){e.exports=a.p+"static/media/reshka.271608c7.png"}},[[163,1,2]]]);
//# sourceMappingURL=main.c28c02a9.chunk.js.map