(this.webpackJsonpcutiehack=this.webpackJsonpcutiehack||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n(4),r=n.n(o),c=n(23),s=n.n(c),l=(n(30),n(12)),a=(n(31),n(9)),u=a.a.initializeApp({apiKey:"AIzaSyBrUaV_xamLKRX5pZhc9MAoejnwJqOzC3M",authDomain:"cutiehack-85687.firebaseapp.com",databaseURL:"https://cutiehack-85687.firebaseio.com",projectId:"cutiehack-85687",storageBucket:"cutiehack-85687.appspot.com",messagingSenderId:"223254429418",appId:"1:223254429418:web:32b8985c0206780ecca193"}).firestore(),d=n(24),h=n(16),j={position:"absolute",bottom:"3%",left:"5%"};var p=function(e){var t,n=e.user,r=e.updateUser,c=e.updateType,s=Object(o.useState)(""),a=Object(l.a)(s,2),u=a[0],d=a[1];return Object(i.jsx)("div",{style:j,children:Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{onChange:function(e){return d(e.target.value)},value:u,placeholder:"Enter "+(t=c,"s"===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t.charAt(0).toUpperCase()+t.slice(1)),type:"text"}),Object(i.jsx)("button",{className:"button",onClick:function(e){e.preventDefault(),""!=u&&(n[c].push(u),r(n),d(""))},type:"submit",children:"Add"})]})})},x=n(7);var b,g=function(e){var t=e.link,n=e.onDelete,o=e.isHref;return Object(i.jsxs)(x.Row,{children:[Object(i.jsx)(x.Col,{children:o?Object(i.jsx)("a",{href:"http://"+t,target:"_blank",children:t}):Object(i.jsx)("p",{children:t})}),Object(i.jsx)(x.Col,{children:Object(i.jsx)("button",{style:{position:"absolute",right:"5%",top:"25%"},onClick:n,children:"Delete"})})]})},f=(b={position:"relative",height:"500px",width:"300px",backgroundColor:"#84A9AC",border:"4px solid #84A9AC",boxSizing:"border-box",borderRadius:"18px"},Object(h.a)(b,"width","448px"),Object(h.a)(b,"height","376px"),b),O={fontFamily:"Rock Salt",fontStyle:"normal",fontWeight:"normal",fontSize:"24px",lineHeight:"57px",marginTop:"0px",marginLeft:"10px",color:"#E7DFD5"};var m=function(e){var t=function(t){return function(){e.user.zoomlinks.splice(t,1),e.updateUser(e.user)}};return Object(i.jsxs)("div",{style:f,children:[Object(i.jsx)("h1",{style:O,children:"Zoom Links"}),Object(i.jsx)(x.Container,{children:e.user.zoomlinks.map((function(e,n){return Object(i.jsx)(g,{link:e,onDelete:t(n),isHref:!0})}))}),Object(i.jsx)(p,{updateUser:e.updateUser,user:e.user,updateType:"zoomlinks"})]})},y={position:"relative",height:"94%",width:"300px",backgroundColor:"#84A9AC",border:"4px solid #84A9AC",boxSizing:"border-box",borderRadius:"18px",marginLeft:"4%",marginRight:"0%"},k={fontFamily:"Rock Salt",fontStyle:"normal",fontWeight:"normal",fontSize:"24px",lineHeight:"57px",marginTop:"0px",marginLeft:"10px",color:"#E7DFD5"};var v=function(e){var t=e.user,n=e.updateUser,o=function(e){return function(){t.links.splice(e,1),n(t)}};return Object(i.jsxs)("div",{style:y,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h1",{style:k,children:"Links"})}),Object(i.jsx)(x.Container,{children:t.links.map((function(e,t){return Object(i.jsx)(g,{link:e,onDelete:o(t),isHref:!0})}))}),Object(i.jsx)(p,{user:t,updateUser:n,updateType:"links"})]})},S={position:"relative",height:"645px",width:"300px",backgroundColor:"#84A9AC",border:"4px solid #84A9AC",boxSizing:"border-box",borderRadius:"18px"},A={fontFamily:"Rock Salt",fontStyle:"normal",fontWeight:"normal",fontSize:"24px",lineHeight:"57px",marginTop:"0px",marginLeft:"1%",color:"#E7DFD5"};var C=function(e){var t=e.user,n=e.updateUser,o=function(e){return function(){t.todolist.splice(e,1),n(t)}};return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{style:S,children:[Object(i.jsx)("h1",{style:A,children:"To Do List"}),Object(i.jsx)(x.Container,{children:t.todolist.map((function(e,t){return Object(i.jsx)(g,{link:e,onDelete:o(t),isHref:!1})}))}),Object(i.jsx)(p,{user:t,updateUser:n,updateType:"todolist"})]})})},T={position:"relative",height:"230px",width:"450px",backgroundColor:"#84A9AC",border:"4px solid #84A9AC",boxSizing:"border-box",borderRadius:"18px",marginTop:"8.5%",marginBottom:"9%",marginRight:"1%"},D={fontFamily:"Rock Salt",fontStyle:"normal",fontWeight:"normal",fontSize:"24px",lineHeight:"57px",marginTop:"10px",marginLeft:"0px",color:"#E7DFD5"};var R=function(e){var t=e.user,n=e.updateUser,o=function(e){return function(){t.goals.splice(e,1),n(t)}};return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{style:T,children:[Object(i.jsx)("h1",{style:D,children:"Goals"}),Object(i.jsx)(x.Container,{children:t.goals.map((function(e,t){return Object(i.jsx)(g,{link:e,onDelete:o(t),isHref:!1})}))}),Object(i.jsx)(p,{user:t,updateUser:n,updateType:"goals"})]})})};function L(){return Object(i.jsx)("h1",{style:{color:"#204051",backgroundColor:"#E7DFD5",fontFamily:"Rock Salt",textAlign:"center"},children:"Linked"})}n(51);var w=function(){var e=a.a.auth().currentUser,t=Object(o.useState)({goals:[],zoomlinks:[],links:[],todolist:[]}),n=Object(l.a)(t,2),r=n[0],c=n[1];Object(o.useEffect)((function(){u.collection("users").doc(e.uid).get().then((function(e){if(e.exists){var t=e.data();t.todolist||(t.todolist=[]),c(t)}else s(r)}))}));var s=function(t){u.collection("users").doc(e.uid).set(t).then();var n=Object(d.a)({},t);c(n)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(L,{}),Object(i.jsx)(x.Container,{children:Object(i.jsxs)(x.Row,{children:[Object(i.jsxs)(x.Col,{children:[Object(i.jsx)(x.Row,{children:Object(i.jsx)(m,{user:r,updateUser:s})}),Object(i.jsx)(x.Row,{children:Object(i.jsx)(R,{user:r,updateUser:s})})]}),Object(i.jsx)(x.Col,{children:Object(i.jsx)(v,{user:r,updateUser:s})}),Object(i.jsx)(x.Col,{children:Object(i.jsx)(C,{user:r,updateUser:s})})]})})]})},z="userCredential",U={fontStyle:"bold",fontWeight:"normal",fontSize:"50px",lineHeight:"57px",marginTop:"10px",marginLeft:"10px",color:"#204051",textAlign:"center"},W={fontFamily:"Rock Salt",fontStyle:"normal",fontWeight:"normal",fontSize:"100px",lineHeight:"60px",marginTop:"10px",marginLeft:"10px",color:"#84A9AC",textAlign:"center"},F={fontWeight:"normal",fontSize:"20px",lineHeight:"40px",marginTop:"30px",marginBottom:"30px",paddingLeft:"15px",paddingRight:"15px",color:"#204051",textAlign:"center"};var E=function(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)(!1),s=Object(l.a)(c,2),u=s[0],d=s[1];return Object(o.useEffect)((function(){var e=localStorage.getItem(z);if(null!=e){d(!0);var t=a.a.auth.AuthCredential.fromJSON(e);a.a.auth().signInWithCredential(t).then((function(e){d(!1),r(!0)})).catch((function(e){console.log("Error signing in with credentials!"),localStorage.removeItem(z),d(!1),r(!1)}))}}),[]),u?Object(i.jsx)("h1",{style:{color:"#204051",backgroundColor:"#E7DFD5",textAlign:"center"},children:"Waiting for Authentication..."}):n?Object(i.jsx)(w,{}):Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{style:U,children:"WELCOME TO"}),Object(i.jsx)("h1",{style:W,children:"Linked"}),Object(i.jsx)("button",{onClick:function(){var e=new a.a.auth.GoogleAuthProvider;a.a.auth().signInWithPopup(e).then((function(e){localStorage.setItem(z,JSON.stringify(e.credential.toJSON())),r(!0)})).catch((function(e){console.log(e)}))},children:"Login with Google"}),Object(i.jsx)("h1",{style:F,children:"\u201cThe Best Way To Get Started Is To Quit Talking And Begin Doing.\u201d \u2013 Walt Disney"}),Object(i.jsx)("h1",{style:F,children:"\u201cDon\u2019t Let Yesterday Take Up Too Much Of Today.\u201d \u2013 Will Rogers"}),Object(i.jsx)("h1",{style:F,children:"\u201cThe Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.\u201d \u2013 Franklin D. Roosevelt"}),Object(i.jsx)("h1",{style:F,children:"\u201cCreativity Is Intelligence Having Fun.\u201d \u2013 Albert Einstein"}),Object(i.jsx)("h1",{style:F,children:"\u201cYou Are Never Too Old To Set Another Goal Or To Dream A New Dream.\u201d \u2013 C.S. Lewis"}),Object(i.jsx)("h1",{style:F,children:"\u201cToday\u2019s Accomplishments Were Yesterday\u2019s Impossibilities.\u201d \u2013 Robert H. Schuller"})]})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(E,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.965a39f5.chunk.js.map