(this["webpackJsonpeurolife-crm"]=this["webpackJsonpeurolife-crm"]||[]).push([[0],{14:function(e,t,a){e.exports=a(31)},19:function(e,t,a){},20:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),o=a(12),c=a.n(o),u=a(13),i=(a(19),a(20),a(8)),l=a.n(i),p=l.a.initializeApp({apiKey:"AIzaSyBkyFVqeOK6sj0GwJNPZkrUFOPpfqWsYOI",authDomain:"eurolife-dp-ua.firebaseapp.com",databaseURL:"https://eurolife-dp-ua.firebaseio.com",projectId:"eurolife-dp-ua",storageBucket:"eurolife-dp-ua.appspot.com",messagingSenderId:"322274967673",appId:"1:322274967673:web:3d242b99d98eb7d0f994a8",measurementId:"G-Q1769CF5DJ"}).firestore();l.a.auth(),l.a.storage();var s=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){p.collection("records").orderBy("timestamp","desc").onSnapshot((function(e){o(e.docs.map((function(e){return{id:e.id,record:e.data()}})))}))}),[]),r.a.createElement("div",{className:"App"},a.length?a.map((function(e){var t=e.id,a=e.record;return r.a.createElement("div",{key:t},r.a.createElement("p",null,a.name),r.a.createElement("p",null,a.phone),r.a.createElement("br",null),r.a.createElement("br",null))})):null)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f16adb3e.chunk.js.map