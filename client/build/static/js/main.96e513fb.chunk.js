(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{119:function(e,n,t){"use strict";t.r(n);var o,r,i,a,s,c,l,d,u,p,b,j,x,m,g,f,h,O,y,v,w,I,D,R,k,C,_,E,S,T,M,z,L,$,N,q,A,U,P,F,G,Q,B,J,H,V,W,K,Y,X,Z,ee,ne,te,oe,re,ie,ae,se,ce,le=t(1),de=t.n(le),ue=t(48),pe=t.n(ue),be=(t(96),t(27)),je=t(81),xe=(t(97),t(16)),me=t(53),ge=t(29),fe=t(15),he=t(8),Oe=t(90),ye=t(14),ve=t(5),we=t(6),Ie=Object(he.gql)(o||(o=Object(ve.a)(["\n  query Login($user: LoginInput!) {\n    loginUser(user: $user) {\n      username\n      email\n      jwt\n      _id\n    }\n  }\n"]))),De=Object(he.gql)(r||(r=Object(ve.a)(["\n  query Check {\n    checkToken {\n      username\n      email\n      _id\n      lastTimeSee {\n        time\n        roomID\n      }\n    }\n  }\n"]))),Re=t(3),ke=function(e){var n=e.text;return Object(Re.jsxs)("h1",{style:{color:"#5d00ba",textAlign:"center"},children:[" ",n," "]})},Ce=t(84),_e=t.n(Ce),Ee=we.a.div(i||(i=Object(ve.a)(["\n display: flex;\n justify-content: center;\n align-items: center;\n flex-direction: column;\n height: 70%;\n width: 100%;\n flex-shrink: 0;\n"]))),Se=we.a.div(a||(a=Object(ve.a)(["\n display: flex;\n align-items: center;\n flex-direction: column;\n flex-shrink: 0;\n"]))),Te=we.a.input(s||(s=Object(ve.a)(["\n margin-bottom: 10px;\n border-radius: 7px;\n padding: 10px;\n box-sizing: border-box;\n width: 100%;\n border: solid 1.5px #d3d3d3;\n flex-shrink: 0;\n"]))),Me=we.a.button(c||(c=Object(ve.a)(["\n outline: none;\n border: none;\n padding: 12px 15px;\n border-radius: 5px;\n background: #7f03fc;\n flex-shrink: 0;\n color: white;\n &:hover {\n  cursor: pointer;\n }\n"]))),ze=we.a.div(l||(l=Object(ve.a)(["\n display: flex;\n flex-direction: column;\n align-items: center;\n width: 65%;\n flex-shrink: 0;\n"]))),Le=we.a.span(d||(d=Object(ve.a)(["\n color: ",";\n font-weight: 600;\n font-size: 14px;\n margin-bottom: 18px;\n"])),(function(e){return e.error?"red":"#7f03fc"})),$e=function(e){var n,t,o=Object(xe.b)(),r=Object(fe.g)(),i=Object(fe.h)(),a=_e.a.parse(i.search.slice(1)).username,s=Object(he.useLazyQuery)(Ie,{onCompleted:function(e){var n=e.loginUser;localStorage.setItem("token",n.jwt),o({type:"SET_USER",payload:n}),r.push("/main-page")}}),c=Object(ye.a)(s,2),l=c[0],d=c[1],u=d.loading,p=d.error;return Object(Re.jsx)(Ee,{children:Object(Re.jsxs)(Se,{children:[Object(Re.jsx)(ke,{text:"Welcome To The Group-Chat !"})," ",!a||u||p?null:Object(Re.jsx)(Le,{style:{color:"#368B85"},children:" You Registered. Lets Sign In !"}),u?Object(Re.jsx)(Le,{children:"Redirecting..."}):p?Object(Re.jsx)(Le,{error:!0,children:" Username or Password Incorrect !"}):null,Object(Re.jsxs)(ze,{children:[Object(Re.jsx)(Te,{placeholder:"Username",ref:function(e){return n=e},value:a}),Object(Re.jsx)(Te,{placeholder:"Password",ref:function(e){return t=e},type:"password"}),Object(Re.jsxs)("div",{style:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",marginTop:7},children:[Object(Re.jsxs)(Me,{onClick:function(){l({variables:{user:{username:n.value||null,password:t.value||null}}})},children:[" ","LOG IN"," "]}),Object(Re.jsxs)(ge.b,{to:{pathname:"/register"},style:{textDecoration:"none",color:"#5d00ba",fontSize:13,margin:5,flexShrink:0},children:[" ","Don't you have an account yet?"," "]})]})]})]})})},Ne=Object(he.gql)(u||(u=Object(ve.a)(["\n\n    mutation Register($user:RegisterInput!){\n\n        registerUser(user:$user) {\n            username\n        }\n\n    }\n    \n"]))),qe=we.a.div(p||(p=Object(ve.a)(["\n display: flex;\n justify-content: center;\n align-items: center;\n flex-direction: column;\n height: 70%;\n width: 100%;\n"]))),Ae=we.a.div(b||(b=Object(ve.a)(["\n display: flex;\n align-items: center;\n flex-direction: column;\n"]))),Ue=we.a.input(j||(j=Object(ve.a)(["\n margin-bottom: 10px;\n border-radius: 7px;\n padding: 10px;\n box-sizing: border-box;\n width: 100%;\n border: solid 1.5px #d3d3d3;\n"]))),Pe=we.a.button(x||(x=Object(ve.a)(["\n outline: none;\n border: none;\n padding: 12px 15px;\n border-radius: 5px;\n background: #7f03fc;\n color: white;\n &:hover {\n  cursor: pointer;\n }\n"]))),Fe=we.a.div(m||(m=Object(ve.a)(["\n display: flex;\n flex-direction: column;\n align-items: center;\n width: 65%;\n"]))),Ge=we.a.span(g||(g=Object(ve.a)(["\n color: ",";\n font-weight: 600;\n font-size: 14px;\n margin-bottom: 18px;\n"])),(function(e){return e.error?"red":"#7f03fc"})),Qe=function(e){var n,t,o,r=Object(fe.g)(),i=(Object(xe.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.error})),Object(he.useMutation)(Ne,{onCompleted:function(e){var n=e.registerUser;r.push("/login/?username=".concat(n.username))},onError:function(e){console.log(e)}})),a=Object(ye.a)(i,2),s=a[0],c=a[1],l=(c.data,c.loading),d=c.error;return Object(Re.jsx)(qe,{children:Object(Re.jsxs)(Ae,{children:[Object(Re.jsx)(ke,{text:"Register to the Group-Chat"}),l?Object(Re.jsx)(Ge,{children:" Registering... "}):null,d?Object(Re.jsx)(Ge,{error:!0,children:" Please Fill All Fields Correctly !"}):null,Object(Re.jsxs)(Fe,{children:[Object(Re.jsx)(Ue,{placeholder:"Username",ref:function(e){return n=e}}),Object(Re.jsx)(Ue,{placeholder:"email",ref:function(e){return o=e}}),Object(Re.jsx)(Ue,{placeholder:"Password",ref:function(e){return t=e},type:"password"}),Object(Re.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:7},children:[Object(Re.jsxs)(Pe,{onClick:function(){s({variables:{user:{username:n.value||null,email:o.value||null,password:t.value||null}}})},children:[" ","REGISTER"," "]}),Object(Re.jsxs)(ge.b,{to:{pathname:"/login"},style:{textDecoration:"none",fontSize:13,color:"#5d00ba",margin:5},children:[" ","Go to Login Page !"," "]})]})]})]})})},Be=function(e,n){switch(n.type){case"SET_USER":return Object(be.a)(Object(be.a)({},e),{},{user:n.payload});case"SET_ERROR":return Object(be.a)(Object(be.a)({},e),{},{error:n.payload});case"LOGOUT":return Object(be.a)({},n.payload);default:return e}},Je=Object(he.gql)(f||(f=Object(ve.a)(["\n  query GetRooms {\n    getUserRooms {\n      _id\n      limit\n      title\n      members {\n        username\n        _id\n      }\n      messages {\n        date\n      }\n    }\n  }\n"]))),He=Object(he.gql)(h||(h=Object(ve.a)(["\n  query GetOtherRooms {\n    getOtherRooms {\n      _id\n      limit\n      title\n      members {\n        username\n        _id\n      }\n      host {\n        username\n        _id\n      }\n      messages {\n        date\n      }\n    }\n  }\n"]))),Ve=Object(he.gql)(O||(O=Object(ve.a)(["\n  query GetChatRoom($roomID: ID!) {\n    getChatRoom(roomID: $roomID) {\n      limit\n\n      host {\n        _id\n      }\n\n      messages {\n        _id\n        text\n        owner {\n          username\n          _id\n        }\n        isEdited\n        date\n        repliedMessage {\n          _id\n          owner {\n            username\n            _id\n          }\n          text\n          date\n        }\n      }\n\n      members {\n        username\n        _id\n      }\n    }\n  }\n"]))),We=Object(he.gql)(y||(y=Object(ve.a)(["\n\n    mutation CreateRoom($room:RoomInput!){\n\n        createRoom(room:$room) {\n            title\n            limit\n        }\n\n    }\n    \n"]))),Ke=Object(he.gql)(v||(v=Object(ve.a)(["\n    mutation JoinRoom($roomID:ID!,$limit:Int!,$memberLength:Int!) {\n        joinRoom(roomID:$roomID,limit:$limit,memberLength:$memberLength) {\n            _id\n            title\n            limit\n        }\n    }\n"]))),Ye=Object(he.gql)(w||(w=Object(ve.a)(["\n\n    mutation LeaveRoom($roomID:ID!) {\n\n        leaveRoom(roomID:$roomID) {\n\n            title\n            _id\n\n        }\n\n    }\n\n\n"]))),Xe=Object(he.gql)(I||(I=Object(ve.a)(["\n\n    subscription MemberJoined($roomID:ID) {\n        room(roomID:$roomID) {\n\n             user {\n                username\n                _id         \n             }\n            \n             roomID\n             actionType\n        }\n    }\n\n"]))),Ze=Object(he.gql)(D||(D=Object(ve.a)(["\n\n    mutation SendMessage($text:String!,$roomID:ID!,$repliedMessage:ID) {\n        sendMessage(text:$text,roomID:$roomID,repliedMessage:$repliedMessage) {\n            _id\n            text\n        }\n    }\n\n"]))),en=Object(he.gql)(R||(R=Object(ve.a)(["\n\n    mutation DeleteMessage($messageID:ID!,$roomID:ID!) {\n\n        deleteMessage(messageID:$messageID,roomID:$roomID) {\n            _id\n            text\n        }\n    }\n"]))),nn=Object(he.gql)(k||(k=Object(ve.a)(["\n\n    mutation UpdateMessage($messageID:ID!,$updatedText:String!,$roomID:ID!) {\n\n        updateMessage(messageID:$messageID,updatedText:$updatedText,roomID:$roomID){\n\n            _id\n            text\n        }\n\n    }\n\n"]))),tn=Object(he.gql)(C||(C=Object(ve.a)(["\n\n    subscription MessageSent($roomID:ID!) {\n\n        message(roomID:$roomID) {\n            _id\n            text\n            date\n            isEdited\n            owner {\n                username\n                _id\n            }\n            actionType\n        }\n\n    }\n\n"]))),on=we.a.div(_||(_=Object(ve.a)(["\n display: flex;\n\n padding: 10px;\n align-items: center;\n &:hover {\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n   rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n  cursor: pointer;\n }\n"]))),rn=function(e){var n,t=e.room,o=e.joinRoom,r=e.userRoom,i=Object(le.useState)(t.members),a=Object(ye.a)(i,2),s=a[0],c=a[1],l=Object(le.useState)(t.messages),d=Object(ye.a)(l,2),u=d[0],p=d[1],b=(Object(he.useSubscription)(Xe,{variables:{roomID:t._id},onSubscriptionData:function(e){var n=e.subscriptionData;"JOIN"==n.data.room.actionType?c((function(e){return e.concat(n.data.room.user)})):"LEAVE"==n.data.room.actionType&&c((function(e){return e.filter((function(e){return n.data.room.user._id!=e._id}))}))}}),Object(he.useSubscription)(tn,{variables:{roomID:t._id},onSubscriptionData:function(e){var n=e.subscriptionData;"SEND"==n.data.message.actionType&&p((function(e){return e.concat(n.data.message)}))}}),null===(n=Object(xe.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.user})).lastTimeSee)||void 0===n?void 0:n.find((function(e){return e.roomID==t._id}))),j=b?u.reduce((function(e,n){return new Date(n.date.split("-")[1]).getTime()>new Date(+b.time).getTime()?++e:e}),0):u.length;return Object(Re.jsxs)(on,{onClick:o(t._id,t.limit,s.length),children:[Object(Re.jsxs)("span",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",flex:1},children:[Object(Re.jsx)("i",{style:{marginRight:8,color:r?"#f05454":"#00af91"},className:"fas fa-comment"}),t.title.length>10?t.title.slice(0,5)+"...":t.title," "]}),!r&&Object(Re.jsxs)("span",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",flex:1},children:[Object(Re.jsx)("i",{style:{marginRight:8,color:"#00af91"},className:"fas fa-wifi"}),t.host.username," "]}),Object(Re.jsxs)("span",{style:{display:"flex",alignItems:"center",color:s.length===t.limit?"red":"#76a21e",justifyContent:"space-between",flex:.2},children:[Object(Re.jsx)("i",{style:{marginRight:8,color:r?"#f05454":"#00af91"},className:"fas fa-user-friends"}),s.length+"/"+t.limit," "]}),j>0&&Object(Re.jsxs)("span",{style:{background:"#FF6767",width:20,height:20,borderRadius:"50%",color:"white",marginLeft:10,fontSize:11,display:"flex",justifyContent:"center",alignItems:"center"},children:[j," "]})," "]},t._id)},an=we.a.div(E||(E=Object(ve.a)(["\n padding: 15px;\n display: flex;\n flex-direction: column;\n box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n  rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n width: 40%;\n height: 90%;\n box-sizing: border-box;\n"]))),sn=we.a.div(S||(S=Object(ve.a)(["\n width: 100%;\n height: 100%;\n display: flex;\n flex-direction: column;\n margin-top: 25px;\n"]))),cn=function(e){var n=e.timeToRefetch,t=e.setTimeToRefetch,o=Object(he.useQuery)(Je,{fetchPolicy:"network-only"}),r=o.data,i=o.loading,a=o.error,s=o.refetch,c=Object(fe.g)(),l=Object(he.useMutation)(Ke,{onError:function(e){return console.log(e)},onCompleted:function(e){var n=e.joinRoom;c.push("/room/"+n._id)}}),d=Object(ye.a)(l,1)[0],u=Object(xe.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.error}));Object(le.useEffect)((function(){n&&s().then((function(){t(!1)}))}),[n]);var p=function(e,n,t){return function(o){d({variables:{roomID:e,limit:n,memberLength:t}})}};return Object(Re.jsxs)(an,{children:[Object(Re.jsx)("span",{style:{textAlign:"center"},children:"My Rooms"}),Object(Re.jsxs)(sn,{children:[" ",i?Object(Re.jsx)("span",{children:"Fetching..."}):a?Object(Re.jsxs)("span",{children:[" ",u.errorType+" "+u.message," "]}):r.getUserRooms.map((function(e){return Object(Re.jsx)(rn,{room:e,joinRoom:p,userRoom:!0},e._id)}))," "]})]})},ln=we.a.div(T||(T=Object(ve.a)(["\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n  width: 40%;\n  height: 90%;\n  box-sizing: border-box;\n"]))),dn=we.a.div(M||(M=Object(ve.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 25px;\n"]))),un=we.a.div(z||(z=Object(ve.a)(["\n  position: absolute;\n  left: 0;\n  &:hover {\n    cursor: pointer;\n  }\n"]))),pn=function(){var e=Object(he.useQuery)(He,{fetchPolicy:"network-only"}),n=e.data,t=e.loading,o=e.error,r=e.refetch,i=Object(fe.g)(),a=Object(he.useMutation)(Ke,{onError:function(e){return console.log(e)},onCompleted:function(e){var n=e.joinRoom;i.push("/room/"+n._id)}}),s=Object(ye.a)(a,1)[0],c=Object(xe.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.error})),l=function(e,n,t){return function(o){s({variables:{roomID:e,limit:n,memberLength:t}})}};return Object(Re.jsxs)(ln,{children:[Object(Re.jsxs)("span",{style:{textAlign:"center",position:"relative"},children:["Other Rooms",Object(Re.jsx)(un,{onClick:function(){return r()},className:"fas fa-sync"})]}),Object(Re.jsx)(dn,{children:t?Object(Re.jsx)("span",{children:" Rooms are loading... "}):o?Object(Re.jsxs)("span",{children:[" ",c.errorType+" "+c.message," "]}):n.getOtherRooms.map((function(e){return Object(Re.jsx)(rn,{room:e,joinRoom:l},e._id)}))})]})},bn=function(){return localStorage.removeItem("token"),nt.clearStore(),{type:"LOGOUT",payload:{user:{},error:{}}}},jn=we.a.div(L||(L=Object(ve.a)(["\n display: flex;\n justify-content: space-around;\n align-items: center;\n height: 100%;\n width: 88%;\n margin: 0 auto;\n"]))),xn=we.a.div($||($=Object(ve.a)(["\n height: 500px;\n box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,\n  rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n flex: 0.75;\n display: flex;\n justify-content: space-evenly;\n align-items: center;\n box-sizing: border-box;\n padding: 10px;\n"]))),mn=we.a.div(N||(N=Object(ve.a)(["\n position: fixed;\n height: 40px;\n width: 100px;\n top: 10px;\n left: 10px;\n box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,\n  rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n &:hover {\n  cursor: pointer;\n  background: blue;\n  color: white;\n  transition: 100ms;\n }\n display: flex;\n align-items: center;\n justify-content: center;\n"]))),gn=we.a.div(q||(q=Object(ve.a)(["\n display: flex;\n flex-direction: column;\n align-items: flex-start;\n width: 70%;\n"]))),fn=we.a.div(A||(A=Object(ve.a)(["\n display: flex;\n flex-direction: column;\n align-items: center;\n width: 100%;\n margin-top: 30px;\n"]))),hn=we.a.div(U||(U=Object(ve.a)(["\n box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,\n  rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n height: 500px;\n flex: 0.2;\n display: flex;\n flex-direction: column;\n border-radius: 8px;\n align-items: center;\n"]))),On=we.a.span(P||(P=Object(ve.a)(["\n font-size: 13px;\n margin: 3px;\n"]))),yn=we.a.button(F||(F=Object(ve.a)(["\n border: none;\n padding: 10px;\n width: 100%;\n margin-top: 15px;\n display: flex;\n justify-content: space-around;\n cursor: pointer;\n &:hover {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,\n   rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n }\n"]))),vn=we.a.div(G||(G=Object(ve.a)(["\n display: flex;\n flex-direction: column;\n width: 80%;\n font-size: 14px;\n margin-top: 20px;\n"]))),wn=function(e){var n,t,o=Object(xe.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.user||{}})),r=Object(he.useMutation)(We,{onError:function(e){console.log(e)}}),i=Object(ye.a)(r,2),a=i[0],s=i[1].error,c=Object(xe.b)(),l=Object(fe.g)(),d=Object(xe.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.error})),u=Object(le.useState)(!1),p=Object(ye.a)(u,2),b=p[0],j=p[1];return Object(Re.jsx)(de.a.Fragment,{children:Object(Re.jsxs)(jn,{children:[Object(Re.jsx)(mn,{onClick:function(){localStorage.removeItem("token"),c(bn()),l.push("/login")},children:"LOG OUT"}),Object(Re.jsxs)(hn,{children:[Object(Re.jsx)("img",{src:"/userpng.png",width:"60%",style:{marginBottom:20,marginTop:20},alt:"user"}),Object(Re.jsxs)(gn,{children:[Object(Re.jsxs)(On,{children:["username : ",o.username," "]}),Object(Re.jsxs)(On,{children:["email : ",o.email," "]})]}),Object(Re.jsxs)(fn,{children:[Object(Re.jsxs)(vn,{children:[Object(Re.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[Object(Re.jsx)("span",{children:"Title :"}),Object(Re.jsx)("input",{ref:function(e){return t=e},style:{width:"50%"},placeholder:"title"})]}),Object(Re.jsxs)("div",{style:{display:"flex",marginTop:6,justifyContent:"space-between",width:"100%"},children:[Object(Re.jsx)("span",{children:"Max People :"}),Object(Re.jsxs)("select",{style:{width:"100px"},ref:function(e){return n=e},children:[Array(10).fill().map((function(e,n){return Object(Re.jsxs)("option",{children:[n+1," "]},n)}))," "]})]}),Object(Re.jsxs)("span",{style:{color:"red"},children:[" ",s&&d.errorType+" "+d.message," "]}),Object(Re.jsxs)(yn,{onClick:function(){a({variables:{room:{title:t.value.toLowerCase()||null,limit:parseInt(n.value)||null}}}).then((function(){j(!0)}))},children:[" ","Create Room",Object(Re.jsx)("i",{className:"fas fa-plus"})," "]})]})," "]})]}),Object(Re.jsxs)(xn,{children:[Object(Re.jsx)(cn,{timeToRefetch:b,setTimeToRefetch:j}),Object(Re.jsx)(pn,{})]})]})})},In=we.a.div(Q||(Q=Object(ve.a)(["\n display: flex;\n justify-content: center;\n align-items: center;\n height: 100%;\n margin: 0 auto;\n background: #242c37;\n position: relative;\n"]))),Dn=we.a.div(B||(B=Object(ve.a)(["\n height: 530px;\n box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,\n  rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,\n  rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\n display: flex;\n flex-direction: column;\n justify-content: space-between;\n align-items: center;\n box-sizing: border-box;\n width: 44%;\n margin-left: 20px;\n padding: 10px;\n background: white;\n"]))),Rn=we.a.div(J||(J=Object(ve.a)(["\n box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,\n  rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,\n  rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\n height: 530px;\n width: 19%;\n display: flex;\n flex-direction: column;\n\n align-items: center;\n box-sizing: border-box;\n padding: 10px;\n background: white;\n"]))),kn=we.a.div(H||(H=Object(ve.a)(["\n display: flex;\n justify-content: space-between;\n width: 100%;\n"]))),Cn=we.a.input(V||(V=Object(ve.a)(["\n flex: 0.83;\n height: 30px;\n font-size: 17px;\n background: #628395;\n color: white;\n border: none;\n padding: 5px 10px;\n outline: none;\n"]))),_n=we.a.button(W||(W=Object(ve.a)(["\n background: #ef4f4f;\n color: white;\n border: none;\n flex: 0.15;\n &:hover {\n  cursor: pointer;\n }\n"]))),En=we.a.ul(K||(K=Object(ve.a)(["\n flex: 0.94;\n width: 100%;\n display: flex;\n flex-direction: column;\n list-style: none;\n margin: 0;\n padding: 0;\n overflow: scroll;\n overflow-x: hidden;\n"]))),Sn=we.a.div(Y||(Y=Object(ve.a)(["\n align-items: center;\n justify-content: center;\n display: flex;\n overflow: hidden;\n width: 0;\n transition: 110ms;\n"]))),Tn=we.a.li(X||(X=Object(ve.a)(["\n width: 100%;\n display: flex;\n list-style: none;\n flex-direction: ",";\n justify-content: flex-end;\n align-items: center;\n padding: 8px 15px 8px 15px;\n border-radius: 5px;\n box-sizing: border-box;\n &:hover {\n  cursor: pointer;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n }\n &:hover "," {\n  margin: ",";\n  width: 20px;\n  cursor: pointer;\n }\n"])),(function(e){return e.checkOwner?"row":"row-reverse"}),Sn,(function(e){return e.checkOwner?"0 1.5px":"0 8px 0 1.5px"})),Mn=we.a.div(Z||(Z=Object(ve.a)(["\n background: #628395;\n color: white;\n padding: 6px 8px;\n border-radius: 5px;\n max-width: 35%;\n white-space: normal;\n overflow-wrap: break-word;\n"]))),zn=we.a.span(ee||(ee=Object(ve.a)(["\n display: flex;\n flex-direction: column;\n justify-content: center;\n font-size: 10px;\n padding: 0 7px;\n align-items: center;\n color: ",";\n"])),(function(e){return e.memberColor})),Ln=we.a.button(ne||(ne=Object(ve.a)(["\n background: #ef4f4f;\n color: white;\n border: none;\n border-radius: 8px;\n font-size: 12px;\n &:hover {\n  cursor: pointer;\n }\n position: absolute;\n top: 20px;\n left: 20px;\n padding: 10px;\n"]))),$n=we.a.input(te||(te=Object(ve.a)(["\n outline: none;\n border-radius: 7px;\n border: none;\n padding: 5px;\n color: white;\n background: #007580;\n"]))),Nn=we.a.div(oe||(oe=Object(ve.a)(["\n overflow: hidden;\n transition: 110ms;\n width: 100%;\n border-radius: 7px;\n position: relative;\n display: flex;\n background: #242c37;\n justify-content: space-between;\n align-items: center;\n margin-bottom: 5px;\n height: ",";\n"])),(function(e){return e.isReplied?"75px":"0px"})),qn=we.a.div(re||(re=Object(ve.a)(["\n height: 100%;\n width: 100%;\n color: white;\n box-sizing: border-box;\n display: flex;\n align-items: center;\n padding: 20px 10px;\n font-size: 14px;\n overflow-wrap: break-word;\n white-space: normal;\n"]))),An=we.a.div(ie||(ie=Object(ve.a)(["\n display: flex;\n width: 100%;\n justify-content: space-between;\n margin-bottom: 5px;\n color: ",";\n font-size: 11px;\n"])),(function(e){return e.color})),Un=we.a.div(ae||(ae=Object(ve.a)(["\n position: absolute;\n color: ",";\n top: 8px;\n left: 8px;\n font-size: 11px;\n"])),(function(e){return e.color})),Pn=we.a.div(se||(se=Object(ve.a)(["\n font-size: 20px;\n &:hover {\n  cursor: pointer;\n }\n color: grey;\n margin-right: 20px;\n"]))),Fn=we.a.div(ce||(ce=Object(ve.a)(["\n background: #323d4d;\n color: white;\n border-radius: 5px;\n max-width: 35%;\n min-width: 93px;\n white-space: normal;\n display: flex;\n position: relative;\n display: flex;\n padding: 10px;\n flex-direction: column;\n overflow-wrap: break-word;\n margin-right: 4px;\n margin-left: 4px;\n font-size: 14px;\n"]))),Gn=["#F8485E ","#00C1D4","DarkCyan","DarkGoldenRod","DarkBlue","DarkRed","DarkOrange","Indigo","Purple","YellowGreen"],Qn=function(e){var n,t=e.match,o=e.history,r=Object(he.useQuery)(Ve,{variables:{roomID:t.params.id},onError:function(e){o.push("/main-page")}}),i=r.data,a=r.loading,s=r.subscribeToMore,c=r.refetch,l=Object(le.useState)(!1),d=Object(ye.a)(l,2),u=d[0],p=d[1],b=Object(le.useState)(),j=Object(ye.a)(b,2),x=j[0],m=j[1],g=Object(he.useMutation)(Ze),f=Object(ye.a)(g,2),h=f[0],O=f[1].loading,y=Object(he.useMutation)(en),v=Object(ye.a)(y,1)[0],w=Object(he.useMutation)(nn),I=Object(ye.a)(w,1)[0],D=Object(he.useMutation)(Ye,{onCompleted:function(e){o.push("/main-page")},onError:function(e){console.log(e)}}),R=Object(ye.a)(D,1)[0],k=Object(xe.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.user})),C=function(e){var n=Object(le.useRef)();return Object(le.useEffect)((function(){n.current=e})),n.current}(null===i||void 0===i?void 0:i.getChatRoom.messages.length),_=null===i||void 0===i?void 0:i.getChatRoom.messages.length,E=function(){n.value&&(m(null),h({variables:{text:n.value||null,roomID:t.params.id||null,repliedMessage:null===x||void 0===x?void 0:x._id}}))},S=function(){var e=document.querySelector(".chatMessages");e.scrollTop=e.scrollHeight},T=function(){R({variables:{roomID:t.params.id}})};return Object(le.useEffect)((function(){i&&(console.log("asd"),c())}),[t.url]),Object(le.useEffect)((function(){a||S()}),[a]),Object(le.useEffect)((function(){a||_>C&&S()}),[_]),Object(le.useEffect)((function(){return s({variables:{roomID:t.params.id},document:tn,updateQuery:function(e,n){var t=n.subscriptionData,o=t.data.message;switch(t.data.message.actionType){case"SEND":var r=Object.assign({},e.getChatRoom,{messages:e.getChatRoom.messages.concat(o)});break;case"DELETE":var i=e.getChatRoom.messages.filter((function(e){return e._id!=o._id})).map((function(e){var n;return(null===(n=e.repliedMessage)||void 0===n?void 0:n._id)==o._id?Object.assign({},e,{repliedMessage:null}):e}));r=Object.assign({},e.getChatRoom,{messages:i});console.log(r);break;case"UPDATE":p(null);r=Object.assign({},e.getChatRoom,{messages:e.getChatRoom.messages.map((function(e){return e._id==o._id?Object.assign({},e,{text:o.text,isEdited:o.isEdited}):e}))});break;default:r=e.getChatRoom}return{getChatRoom:r}}}),s({variables:{roomID:t.params.id},document:Xe,updateQuery:function(e,n){var t=n.subscriptionData.data.room;switch(t.actionType){case"JOIN":var o=Object.assign({},e.getChatRoom,{members:e.getChatRoom.members.concat(t.user)});break;case"LEAVE":o=Object.assign({},e.getChatRoom,{members:e.getChatRoom.members.filter((function(e){return e._id!=t.user._id}))});break;default:o=e.getChatRoom}return{getChatRoom:o}}}),function(){T()}}),[]),console.log(i),Object(Re.jsxs)(In,{children:[Object(Re.jsxs)(Ln,{onClick:T,children:["LEAVE THE ROOM"," ",Object(Re.jsx)("i",{style:{fontSize:14,marginLeft:4},className:"fas fa-sign-out-alt"})]}),Object(Re.jsxs)(Rn,{children:[Object(Re.jsxs)("span",{style:{color:"#ef4f4f",fontSize:13,fontWeight:"600",letterSpacing:1},children:["GROUP MEMBERS",Object(Re.jsxs)("span",{style:{marginLeft:5,fontWeight:600},children:[i&&Object(Re.jsxs)(de.a.Fragment,{children:[" ","("," ",i.getChatRoom.members.length+"/"+i.getChatRoom.limit,Object(Re.jsx)("i",{style:{fontSize:10,marginLeft:2},className:"fas fa-user"}),")"]})," "]})]}),Object(Re.jsxs)("ul",{style:{padding:0,listStyle:"none",width:"100%",marginTop:30},children:[i&&i.getChatRoom.members.map((function(e,n){return Object(Re.jsxs)("li",{style:{padding:5,width:"50%",display:"flex",fontSize:17.5,alignItems:"center"},children:[Object(Re.jsx)("i",{className:"fas fa-user",style:{color:Gn[n],fontSize:15}}),Object(Re.jsxs)("span",{style:{marginLeft:10,fontSize:14},children:[" ",e.username," "]}),i.getChatRoom.host._id==e._id&&Object(Re.jsx)("i",{className:"fas fa-crown",style:{color:"#f0a500",fontSize:11,marginLeft:4}})," "]},e._id)}))," "]})]}),Object(Re.jsxs)(Dn,{children:[" ",a?" Messages are loading....":Object(Re.jsxs)(En,{className:"chatMessages",children:[i&&i.getChatRoom.messages.map((function(e,n){return Object(Re.jsxs)(Tn,{checkOwner:e.owner._id==k._id,children:[" ",e.isEdited&&Object(Re.jsxs)("span",{style:{fontSize:12,color:"grey"},children:[" ","(edited)"," "]}),Object(Re.jsxs)(zn,{memberColor:Gn[i.getChatRoom.members.findIndex((function(n){return n._id==e.owner._id}))]||"#87A8A4",children:[Object(Re.jsxs)("span",{style:{fontSize:12},children:[" ",Object(Re.jsx)("i",{className:"fas fa-user"})," ",e.owner.username," "]}),Object(Re.jsxs)("span",{style:{color:"#628395"},children:[" ",e.date.split("-")[0]," "]})]}),e.repliedMessage&&Object(Re.jsxs)(Fn,{children:[Object(Re.jsxs)(An,{color:Gn[null===i||void 0===i?void 0:i.getChatRoom.members.findIndex((function(n){return n._id==e.repliedMessage.owner._id}))]||"#87A8A4",style:{top:4,left:4},children:[Object(Re.jsxs)("span",{style:{marginRight:3},children:[Object(Re.jsx)("i",{className:"fas fa-user",style:{marginRight:3}})," ",e.repliedMessage.owner.username," "]}),Object(Re.jsxs)("span",{style:{marginLeft:3,color:"#628395"},children:[e.repliedMessage.date.split("-")[0]," "]})]}),Object(Re.jsx)("span",{children:e.repliedMessage.text})]}),Object(Re.jsxs)(Mn,{children:[" ",u==e._id?Object(Re.jsxs)(de.a.Fragment,{children:[Object(Re.jsx)($n,{onKeyDown:function(n){var o,r;"Enter"==n.key&&(o=e._id,r=n.target.value,I({variables:{messageID:o||null,roomID:t.params.id||null,updatedText:r||null}})),"Escape"==n.key&&p(!1)},defaultValue:e.text}),Object(Re.jsxs)("span",{style:{fontSize:10},children:[" ","\xe7\u0131kmak i\xe7in esc \u2022 kaydetmek i\xe7in enter"," "]})]}):e.text," "]}),e.owner._id==k._id?Object(Re.jsxs)(de.a.Fragment,{children:[Object(Re.jsx)(Sn,{onClick:function(){return n=e._id,void v({variables:{messageID:n||null,roomID:t.params.id||null}});var n},children:Object(Re.jsx)("i",{style:{color:"#ec4646"},className:"fas fa-trash-alt"})}),Object(Re.jsx)(Sn,{onClick:function(){return p(e._id)},children:Object(Re.jsx)("i",{style:{color:"#ec4646"},className:"fas fa-edit"})}),Object(Re.jsx)(Sn,{onClick:function(){return m(e)},children:Object(Re.jsx)("i",{style:{color:"#ec4646"},className:"fas fa-reply"})})]}):Object(Re.jsx)(Sn,{onClick:function(){return m(e)},children:Object(Re.jsx)("i",{style:{color:"#ec4646"},className:"fas fa-reply"})})," "]},n)}))," "]}),Object(Re.jsxs)(Nn,{isReplied:x,children:[Object(Re.jsxs)(Un,{color:Gn[null===i||void 0===i?void 0:i.getChatRoom.members.findIndex((function(e){return e._id==(null===x||void 0===x?void 0:x.owner._id)}))]||"#87A8A4",children:[Object(Re.jsx)("i",{className:"fas fa-user"}),Object(Re.jsx)("span",{style:{marginLeft:4},children:null===x||void 0===x?void 0:x.owner.username}),Object(Re.jsxs)("span",{style:{marginLeft:8,color:"#628395"},children:[null===x||void 0===x?void 0:x.date.split("-")[0]," "]})]}),Object(Re.jsx)(qn,{children:null===x||void 0===x?void 0:x.text}),Object(Re.jsx)(Pn,{onClick:function(){return m(null)},children:Object(Re.jsx)("i",{className:"fas fa-times"})})]}),Object(Re.jsxs)(kn,{children:[Object(Re.jsx)(Cn,{ref:function(e){return n=e},onKeyDown:function(e){"Enter"==e.key&&(E(),e.target.value="")},maxLength:"100"}),Object(Re.jsxs)(_n,{onClick:E,children:[" ",O?Object(Re.jsx)("img",{src:"/spin.gif",width:"30"}):"SEND"," "]})]})]})]})},Bn=t(91),Jn=function(e){var n=e.component,t=Object(Bn.a)(e,["component"]),o=Object(fe.g)(),r=Object(xe.b)(),i=Object(le.useState)(!0),a=Object(ye.a)(i,2),s=a[0],c=a[1],l=function(e){var n=Object(le.useRef)();return Object(le.useEffect)((function(){n.current=e})),n.current}(t.path),d=t.path,u=Object(he.useLazyQuery)(De,{context:{history:o},notifyOnNetworkStatusChange:!0,fetchPolicy:"network-only",onCompleted:function(e){var n=e.checkToken;c(!1),r({type:"SET_USER",payload:n})}}),p=Object(ye.a)(u,2),b=p[0],j=p[1].data;return Object(le.useEffect)((function(){b()}),[d]),Object(Re.jsx)(fe.b,Object(be.a)(Object(be.a)({},t),{},{component:function(e){return!s&&j&&l==d?Object(Re.jsx)(n,Object(be.a)({},e)):null}}))},Hn=t(88),Vn=t(2),Wn=new he.HttpLink({uri:"https://groupchattappp.herokuapp.com/graphql"}),Kn=new Hn.a({uri:"wss://groupchattappp.herokuapp.com/subscriptions",options:{reconnect:!0,connectionParams:{token:localStorage.getItem("token"),roomID:window.location.pathname.split("/")[window.location.pathname.split("/").length-1]},timeout:6e4}}),Yn=Object(me.b)(Be,{user:{},error:{}}),Xn=Object(he.split)((function(e){var n=e.query,t=Object(Vn.q)(n);return"OperationDefinition"===t.kind&&"subscription"===t.operation}),Kn,Wn),Zn=Object(Oe.a)((function(e){var n,t,o=e.graphQLErrors,r=e.networkError;e.operation;if(o){var i,a=Object(je.a)(o);try{for(a.s();!(i=a.n()).done;){var s=i.value;switch(s.extensions.code){case"UNAUTHENTICATED":Yn.dispatch(bn()),window.location.href="/login"}n="[".concat(s.extensions.code,"]"),t=t||s.message}}catch(c){a.e(c)}finally{a.f()}Yn.dispatch({type:"SET_ERROR",payload:{errorType:n,message:t}})}r&&console.log(o)})),et=new he.ApolloLink((function(e,n){var t=localStorage.getItem("token");return e.setContext({headers:Object(be.a)(Object(be.a)({},e.getContext().headers),{},{authorization:t?"Bearer ".concat(t):""})}),n(e)})),nt=new he.ApolloClient({link:Object(he.from)([et,Zn,Xn]),cache:new he.InMemoryCache});var tt=function(){return Object(Re.jsxs)(he.ApolloProvider,{client:nt,children:[Object(Re.jsxs)(ge.a,{children:[Object(Re.jsxs)(xe.a,{store:Yn,children:[Object(Re.jsxs)(fe.d,{children:[Object(Re.jsx)(fe.b,{path:"/",component:function(){return Object(Re.jsx)(fe.a,{to:"/login"})},exact:!0}),Object(Re.jsx)(fe.b,{path:"/login",component:$e})," ",Object(Re.jsx)(fe.b,{path:"/register",component:Qe})," ",Object(Re.jsx)(Jn,{path:"/main-page",component:wn,exact:!0}),Object(Re.jsx)(Jn,{path:"/room/:id",component:Qn,exact:!0})]})," "]})," "]})," "]})},ot=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,120)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),o(e),r(e),i(e),a(e)}))};pe.a.render(Object(Re.jsx)(de.a.StrictMode,{children:Object(Re.jsx)(tt,{})}),document.getElementById("root")),ot()},96:function(e,n,t){},97:function(e,n,t){}},[[119,1,2]]]);
//# sourceMappingURL=main.96e513fb.chunk.js.map