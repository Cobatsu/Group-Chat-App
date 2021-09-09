(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{119:function(e,n,t){"use strict";t.r(n);var o,r,i,a,s,c,l,d,u,p,b,j,m,x,g,f,h,O,y,v,w,I,R,D,k,C,_,E,S,T,M,L,$,z,N,q,U,A,G,P,F,Q,B,J,H,V,W,Y,K,X,Z,ee,ne=t(1),te=t.n(ne),oe=t(48),re=t.n(oe),ie=(t(96),t(27)),ae=t(81),se=(t(97),t(16)),ce=t(53),le=t(29),de=t(15),ue=t(7),pe=t(90),be=t(14),je=t(5),me=t(8),xe=Object(ue.gql)(o||(o=Object(je.a)(["\n  query Login($user: LoginInput!) {\n    loginUser(user: $user) {\n      username\n      email\n      jwt\n      _id\n    }\n  }\n"]))),ge=Object(ue.gql)(r||(r=Object(je.a)(["\n  query Check {\n    checkToken {\n      username\n      email\n      _id\n      lastTimeSee {\n        time\n        roomID\n      }\n    }\n  }\n"]))),fe=t(3),he=function(e){var n=e.text;return Object(fe.jsxs)("h1",{children:[" ",n," "]})},Oe=t(84),ye=t.n(Oe),ve=me.a.div(i||(i=Object(je.a)(["\n display: flex;\n justify-content: center;\n align-items: center;\n flex-direction: column;\n height: 70%;\n width: 100%;\n"]))),we=me.a.input(a||(a=Object(je.a)(["\n margin-bottom: 10px;\n border-radius: 7px;\n padding: 10px;\n border: solid 1.5px #d3d3d3;\n width: 13%;\n"]))),Ie=function(e){var n,t,o=Object(se.b)(),r=Object(se.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.error})),i=Object(de.g)(),a=Object(de.h)(),s=ye.a.parse(a.search.slice(1)).username,c=Object(ue.useLazyQuery)(xe,{onCompleted:function(e){var n=e.loginUser;localStorage.setItem("token",n.jwt),o({type:"SET_USER",payload:n}),i.push("/main-page")}}),l=Object(be.a)(c,2),d=l[0],u=l[1],p=u.loading,b=u.error;return Object(fe.jsxs)(ve,{children:[Object(fe.jsx)(he,{text:"Welcome To The Group-Chat !"})," ",s?Object(fe.jsx)("h5",{style:{color:"green"},children:"You Registered. Lets Sign In !"}):null,p?Object(fe.jsx)("h6",{children:"Giri\u015f Yap\u0131l\u0131yor"}):b?Object(fe.jsxs)("h5",{style:{color:"red"},children:[" ",r.errorType+" "+r.message," "]}):null,Object(fe.jsx)(we,{placeholder:"Username",ref:function(e){return n=e},value:s}),Object(fe.jsx)(we,{placeholder:"Password",ref:function(e){return t=e},type:"password"}),Object(fe.jsxs)("div",{children:[Object(fe.jsxs)("button",{onClick:function(){d({variables:{user:{username:n.value||null,password:t.value||null}}})},children:[" ","LOG IN"," "]}),Object(fe.jsxs)(le.b,{to:{pathname:"/register"},style:{textDecoration:"none",fontSize:13,margin:5},children:[" ","Go to Register !"," "]})]})]})},Re=Object(ue.gql)(s||(s=Object(je.a)(["\n\n    mutation Register($user:RegisterInput!){\n\n        registerUser(user:$user) {\n            username\n        }\n\n    }\n    \n"]))),De=me.a.div(c||(c=Object(je.a)(["\n display: flex;\n justify-content: center;\n align-items: center;\n flex-direction: column;\n height: 70%;\n width: 100%;\n"]))),ke=me.a.input(l||(l=Object(je.a)(["\n margin-bottom: 10px;\n border-radius: 7px;\n padding: 10px;\n border: solid 1.5px #d3d3d3;\n width: 13%;\n"]))),Ce=function(e){var n,t,o,r=Object(de.g)(),i=Object(se.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.error})),a=Object(ue.useMutation)(Re,{onCompleted:function(e){var n=e.registerUser;r.push("/login/?username=".concat(n.username))},onError:function(e){console.log(e)}}),s=Object(be.a)(a,2),c=s[0],l=s[1],d=(l.data,l.loading),u=l.error;return Object(fe.jsxs)(De,{children:[Object(fe.jsx)(he,{text:"Register to the Group-Chat"}),d?Object(fe.jsx)("h6",{children:" Registering... "}):null,u?Object(fe.jsxs)("h5",{style:{color:"red"},children:[" ",i.errorType+" "+i.message," "]}):null,Object(fe.jsx)(ke,{placeholder:"Username",ref:function(e){return n=e}}),Object(fe.jsx)(ke,{placeholder:"email",ref:function(e){return o=e}}),Object(fe.jsx)(ke,{placeholder:"Password",ref:function(e){return t=e},type:"password"}),Object(fe.jsxs)("div",{children:[Object(fe.jsxs)("button",{onClick:function(){c({variables:{user:{username:n.value||null,email:o.value||null,password:t.value||null}}})},children:[" ","REGISTER"," "]}),Object(fe.jsxs)(le.b,{to:{pathname:"/login"},style:{textDecoration:"none",fontSize:13,margin:5},children:[" ","Go to Login !"," "]})]})]})},_e=function(e,n){switch(n.type){case"SET_USER":return Object(ie.a)(Object(ie.a)({},e),{},{user:n.payload});case"SET_ERROR":return Object(ie.a)(Object(ie.a)({},e),{},{error:n.payload});case"LOGOUT":return Object(ie.a)({},n.payload);default:return e}},Ee=Object(ue.gql)(d||(d=Object(je.a)(["\n  query GetRooms {\n    getUserRooms {\n      _id\n      limit\n      title\n      members {\n        username\n        _id\n      }\n      messages {\n        date\n      }\n    }\n  }\n"]))),Se=Object(ue.gql)(u||(u=Object(je.a)(["\n  query GetOtherRooms {\n    getOtherRooms {\n      _id\n      limit\n      title\n      members {\n        username\n        _id\n      }\n      host {\n        username\n        _id\n      }\n      messages {\n        date\n      }\n    }\n  }\n"]))),Te=Object(ue.gql)(p||(p=Object(je.a)(["\n  query GetChatRoom($roomID: ID!) {\n    getChatRoom(roomID: $roomID) {\n      limit\n\n      host {\n        _id\n      }\n\n      messages {\n        _id\n        text\n        owner {\n          username\n          _id\n        }\n        isEdited\n        date\n        repliedMessage {\n          _id\n          owner {\n            username\n            _id\n          }\n          text\n          date\n        }\n      }\n\n      members {\n        username\n        _id\n      }\n    }\n  }\n"]))),Me=Object(ue.gql)(b||(b=Object(je.a)(["\n\n    mutation CreateRoom($room:RoomInput!){\n\n        createRoom(room:$room) {\n            title\n            limit\n        }\n\n    }\n    \n"]))),Le=Object(ue.gql)(j||(j=Object(je.a)(["\n    mutation JoinRoom($roomID:ID!,$limit:Int!,$memberLength:Int!) {\n        joinRoom(roomID:$roomID,limit:$limit,memberLength:$memberLength) {\n            _id\n            title\n            limit\n        }\n    }\n"]))),$e=Object(ue.gql)(m||(m=Object(je.a)(["\n\n    mutation LeaveRoom($roomID:ID!) {\n\n        leaveRoom(roomID:$roomID) {\n\n            title\n            _id\n\n        }\n\n    }\n\n\n"]))),ze=Object(ue.gql)(x||(x=Object(je.a)(["\n\n    subscription MemberJoined($roomID:ID) {\n        room(roomID:$roomID) {\n\n             user {\n                username\n                _id         \n             }\n            \n             roomID\n             actionType\n        }\n    }\n\n"]))),Ne=Object(ue.gql)(g||(g=Object(je.a)(["\n\n    mutation SendMessage($text:String!,$roomID:ID!,$repliedMessage:ID) {\n        sendMessage(text:$text,roomID:$roomID,repliedMessage:$repliedMessage) {\n            _id\n            text\n        }\n    }\n\n"]))),qe=Object(ue.gql)(f||(f=Object(je.a)(["\n\n    mutation DeleteMessage($messageID:ID!,$roomID:ID!) {\n\n        deleteMessage(messageID:$messageID,roomID:$roomID) {\n            _id\n            text\n        }\n    }\n"]))),Ue=Object(ue.gql)(h||(h=Object(je.a)(["\n\n    mutation UpdateMessage($messageID:ID!,$updatedText:String!,$roomID:ID!) {\n\n        updateMessage(messageID:$messageID,updatedText:$updatedText,roomID:$roomID){\n\n            _id\n            text\n        }\n\n    }\n\n"]))),Ae=Object(ue.gql)(O||(O=Object(je.a)(["\n\n    subscription MessageSent($roomID:ID!) {\n\n        message(roomID:$roomID) {\n            _id\n            text\n            date\n            isEdited\n            owner {\n                username\n                _id\n            }\n            actionType\n        }\n\n    }\n\n"]))),Ge=me.a.div(y||(y=Object(je.a)(["\n display: flex;\n\n padding: 10px;\n align-items: center;\n &:hover {\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n   rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n  cursor: pointer;\n }\n"]))),Pe=function(e){var n,t=e.room,o=e.joinRoom,r=e.userRoom,i=Object(ne.useState)(t.members),a=Object(be.a)(i,2),s=a[0],c=a[1],l=Object(ne.useState)(t.messages),d=Object(be.a)(l,2),u=d[0],p=d[1],b=(Object(ue.useSubscription)(ze,{variables:{roomID:t._id},onSubscriptionData:function(e){var n=e.subscriptionData;"JOIN"==n.data.room.actionType?c((function(e){return e.concat(n.data.room.user)})):"LEAVE"==n.data.room.actionType&&c((function(e){return e.filter((function(e){return n.data.room.user._id!=e._id}))}))}}),Object(ue.useSubscription)(Ae,{variables:{roomID:t._id},onSubscriptionData:function(e){var n=e.subscriptionData;"SEND"==n.data.message.actionType&&p((function(e){return e.concat(n.data.message)}))}}),null===(n=Object(se.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.user})).lastTimeSee)||void 0===n?void 0:n.find((function(e){return e.roomID==t._id}))),j=b?u.reduce((function(e,n){var t=new Date(n.date.split("-")[1]).getTime(),o=new Date(+b.time).getTime();return console.log(o+" "+t),t>o?++e:e}),0):u.length;return Object(fe.jsxs)(Ge,{onClick:o(t._id,t.limit,s.length),children:[Object(fe.jsxs)("span",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",flex:1},children:[Object(fe.jsx)("i",{style:{marginRight:8,color:r?"#f05454":"#00af91"},className:"fas fa-comment"}),t.title.length>10?t.title.slice(0,5)+"...":t.title," "]}),!r&&Object(fe.jsxs)("span",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",flex:1},children:[Object(fe.jsx)("i",{style:{marginRight:8,color:"#00af91"},className:"fas fa-wifi"}),t.host.username," "]}),Object(fe.jsxs)("span",{style:{display:"flex",alignItems:"center",color:s.length===t.limit?"red":"#76a21e",justifyContent:"space-between",flex:.2},children:[Object(fe.jsx)("i",{style:{marginRight:8,color:r?"#f05454":"#00af91"},className:"fas fa-user-friends"}),s.length+"/"+t.limit," "]}),j>0&&Object(fe.jsxs)("span",{style:{background:"#FF6767",width:20,height:20,borderRadius:"50%",color:"white",marginLeft:10,fontSize:11,display:"flex",justifyContent:"center",alignItems:"center"},children:[j," "]})," "]},t._id)},Fe=me.a.div(v||(v=Object(je.a)(["\n padding: 15px;\n display: flex;\n flex-direction: column;\n box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n  rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n width: 40%;\n height: 90%;\n box-sizing: border-box;\n"]))),Qe=me.a.div(w||(w=Object(je.a)(["\n width: 100%;\n height: 100%;\n display: flex;\n flex-direction: column;\n margin-top: 25px;\n"]))),Be=function(e){var n=e.timeToRefetch,t=e.setTimeToRefetch,o=Object(ue.useQuery)(Ee,{fetchPolicy:"network-only"}),r=o.data,i=o.loading,a=o.error,s=o.refetch,c=Object(de.g)(),l=Object(ue.useMutation)(Le,{onError:function(e){return console.log(e)},onCompleted:function(e){var n=e.joinRoom;c.push("/room/"+n._id)}}),d=Object(be.a)(l,1)[0],u=Object(se.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.error}));Object(ne.useEffect)((function(){n&&s().then((function(){t(!1)}))}),[n]);var p=function(e,n,t){return function(o){d({variables:{roomID:e,limit:n,memberLength:t}})}};return Object(fe.jsxs)(Fe,{children:[Object(fe.jsx)("span",{style:{textAlign:"center"},children:"My Rooms"}),Object(fe.jsxs)(Qe,{children:[" ",i?Object(fe.jsx)("span",{children:"Fetching..."}):a?Object(fe.jsxs)("span",{children:[" ",u.errorType+" "+u.message," "]}):r.getUserRooms.map((function(e){return Object(fe.jsx)(Pe,{room:e,joinRoom:p,userRoom:!0},e._id)}))," "]})]})},Je=me.a.div(I||(I=Object(je.a)(["\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n  width: 40%;\n  height: 90%;\n  box-sizing: border-box;\n"]))),He=me.a.div(R||(R=Object(je.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 25px;\n"]))),Ve=me.a.div(D||(D=Object(je.a)(["\n  position: absolute;\n  left: 0;\n  &:hover {\n    cursor: pointer;\n  }\n"]))),We=function(){var e=Object(ue.useQuery)(Se,{fetchPolicy:"network-only"}),n=e.data,t=e.loading,o=e.error,r=e.refetch,i=Object(de.g)(),a=Object(ue.useMutation)(Le,{onError:function(e){return console.log(e)},onCompleted:function(e){var n=e.joinRoom;i.push("/room/"+n._id)}}),s=Object(be.a)(a,1)[0],c=Object(se.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.error})),l=function(e,n,t){return function(o){s({variables:{roomID:e,limit:n,memberLength:t}})}};return Object(fe.jsxs)(Je,{children:[Object(fe.jsxs)("span",{style:{textAlign:"center",position:"relative"},children:["Other Rooms",Object(fe.jsx)(Ve,{onClick:function(){return r()},className:"fas fa-sync"})]}),Object(fe.jsx)(He,{children:t?Object(fe.jsx)("span",{children:" Rooms are loading... "}):o?Object(fe.jsxs)("span",{children:[" ",c.errorType+" "+c.message," "]}):n.getOtherRooms.map((function(e){return Object(fe.jsx)(Pe,{room:e,joinRoom:l},e._id)}))})]})},Ye=function(){return localStorage.removeItem("token"),Un.clearStore(),{type:"LOGOUT",payload:{user:{},error:{}}}},Ke=me.a.div(k||(k=Object(je.a)(["\n display: flex;\n justify-content: space-around;\n align-items: center;\n height: 100%;\n width: 88%;\n margin: 0 auto;\n"]))),Xe=me.a.div(C||(C=Object(je.a)(["\n height: 500px;\n box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,\n  rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n flex: 0.75;\n display: flex;\n justify-content: space-evenly;\n align-items: center;\n box-sizing: border-box;\n padding: 10px;\n"]))),Ze=me.a.div(_||(_=Object(je.a)(["\n position: fixed;\n height: 40px;\n width: 100px;\n top: 10px;\n left: 10px;\n box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,\n  rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n &:hover {\n  cursor: pointer;\n  background: blue;\n  color: white;\n  transition: 100ms;\n }\n display: flex;\n align-items: center;\n justify-content: center;\n"]))),en=me.a.div(E||(E=Object(je.a)(["\n display: flex;\n flex-direction: column;\n align-items: flex-start;\n width: 70%;\n"]))),nn=me.a.div(S||(S=Object(je.a)(["\n display: flex;\n flex-direction: column;\n align-items: center;\n width: 100%;\n margin-top: 30px;\n"]))),tn=me.a.div(T||(T=Object(je.a)(["\n box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,\n  rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n height: 500px;\n flex: 0.2;\n display: flex;\n flex-direction: column;\n border-radius: 8px;\n align-items: center;\n"]))),on=me.a.span(M||(M=Object(je.a)(["\n font-size: 13px;\n margin: 3px;\n"]))),rn=me.a.button(L||(L=Object(je.a)(["\n border: none;\n padding: 10px;\n width: 100%;\n margin-top: 15px;\n display: flex;\n justify-content: space-around;\n cursor: pointer;\n &:hover {\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,\n   rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n }\n"]))),an=me.a.div($||($=Object(je.a)(["\n display: flex;\n flex-direction: column;\n width: 80%;\n font-size: 14px;\n margin-top: 20px;\n"]))),sn=function(e){var n,t,o=Object(se.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.user||{}})),r=Object(ue.useMutation)(Me,{onError:function(e){console.log(e)}}),i=Object(be.a)(r,2),a=i[0],s=i[1].error,c=Object(se.b)(),l=Object(de.g)(),d=Object(se.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.error})),u=Object(ne.useState)(!1),p=Object(be.a)(u,2),b=p[0],j=p[1];return Object(fe.jsx)(te.a.Fragment,{children:Object(fe.jsxs)(Ke,{children:[Object(fe.jsx)(Ze,{onClick:function(){localStorage.removeItem("token"),c(Ye()),l.push("/login")},children:"LOG OUT"}),Object(fe.jsxs)(tn,{children:[Object(fe.jsx)("img",{src:"/userpng.png",width:"60%",style:{marginBottom:20,marginTop:20},alt:"user"}),Object(fe.jsxs)(en,{children:[Object(fe.jsxs)(on,{children:["username : ",o.username," "]}),Object(fe.jsxs)(on,{children:["email : ",o.email," "]})]}),Object(fe.jsxs)(nn,{children:[Object(fe.jsxs)(an,{children:[Object(fe.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[Object(fe.jsx)("span",{children:"Title :"}),Object(fe.jsx)("input",{ref:function(e){return t=e},style:{width:"50%"},placeholder:"title"})]}),Object(fe.jsxs)("div",{style:{display:"flex",marginTop:6,justifyContent:"space-between",width:"100%"},children:[Object(fe.jsx)("span",{children:"Max People :"}),Object(fe.jsxs)("select",{style:{width:"100px"},ref:function(e){return n=e},children:[Array(10).fill().map((function(e,n){return Object(fe.jsxs)("option",{children:[n+1," "]},n)}))," "]})]}),Object(fe.jsxs)("span",{style:{color:"red"},children:[" ",s&&d.errorType+" "+d.message," "]}),Object(fe.jsxs)(rn,{onClick:function(){a({variables:{room:{title:t.value.toLowerCase()||null,limit:parseInt(n.value)||null}}}).then((function(){j(!0)}))},children:[" ","Create Room",Object(fe.jsx)("i",{className:"fas fa-plus"})," "]})]})," "]})]}),Object(fe.jsxs)(Xe,{children:[Object(fe.jsx)(Be,{timeToRefetch:b,setTimeToRefetch:j}),Object(fe.jsx)(We,{})]})]})})},cn=me.a.div(z||(z=Object(je.a)(["\n display: flex;\n justify-content: center;\n align-items: center;\n height: 100%;\n margin: 0 auto;\n background: #242c37;\n position: relative;\n"]))),ln=me.a.div(N||(N=Object(je.a)(["\n height: 530px;\n box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,\n  rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,\n  rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\n display: flex;\n flex-direction: column;\n justify-content: space-between;\n align-items: center;\n box-sizing: border-box;\n width: 44%;\n margin-left: 20px;\n padding: 10px;\n background: white;\n"]))),dn=me.a.div(q||(q=Object(je.a)(["\n box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,\n  rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,\n  rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\n height: 530px;\n width: 19%;\n display: flex;\n flex-direction: column;\n\n align-items: center;\n box-sizing: border-box;\n padding: 10px;\n background: white;\n"]))),un=me.a.div(U||(U=Object(je.a)(["\n display: flex;\n justify-content: space-between;\n width: 100%;\n"]))),pn=me.a.input(A||(A=Object(je.a)(["\n flex: 0.83;\n height: 30px;\n font-size: 17px;\n background: #628395;\n color: white;\n border: none;\n padding: 5px 10px;\n outline: none;\n"]))),bn=me.a.button(G||(G=Object(je.a)(["\n background: #ef4f4f;\n color: white;\n border: none;\n flex: 0.15;\n &:hover {\n  cursor: pointer;\n }\n"]))),jn=me.a.ul(P||(P=Object(je.a)(["\n flex: 0.94;\n width: 100%;\n display: flex;\n flex-direction: column;\n list-style: none;\n margin: 0;\n padding: 0;\n overflow: scroll;\n overflow-x: hidden;\n"]))),mn=me.a.div(F||(F=Object(je.a)(["\n align-items: center;\n justify-content: center;\n display: flex;\n overflow: hidden;\n width: 0;\n transition: 110ms;\n"]))),xn=me.a.li(Q||(Q=Object(je.a)(["\n width: 100%;\n display: flex;\n list-style: none;\n flex-direction: ",";\n justify-content: flex-end;\n align-items: center;\n padding: 8px 15px 8px 15px;\n border-radius: 5px;\n box-sizing: border-box;\n &:hover {\n  cursor: pointer;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n }\n &:hover "," {\n  margin: ",";\n  width: 20px;\n  cursor: pointer;\n }\n"])),(function(e){return e.checkOwner?"row":"row-reverse"}),mn,(function(e){return e.checkOwner?"0 1.5px":"0 8px 0 1.5px"})),gn=me.a.div(B||(B=Object(je.a)(["\n background: #628395;\n color: white;\n padding: 6px 8px;\n border-radius: 5px;\n max-width: 35%;\n white-space: normal;\n overflow-wrap: break-word;\n"]))),fn=me.a.span(J||(J=Object(je.a)(["\n display: flex;\n flex-direction: column;\n justify-content: center;\n font-size: 10px;\n padding: 0 7px;\n align-items: center;\n color: ",";\n"])),(function(e){return e.memberColor})),hn=me.a.button(H||(H=Object(je.a)(["\n background: #ef4f4f;\n color: white;\n border: none;\n border-radius: 8px;\n font-size: 12px;\n &:hover {\n  cursor: pointer;\n }\n position: absolute;\n top: 20px;\n left: 20px;\n padding: 10px;\n"]))),On=me.a.input(V||(V=Object(je.a)(["\n outline: none;\n border-radius: 7px;\n border: none;\n padding: 5px;\n color: white;\n background: #007580;\n"]))),yn=me.a.div(W||(W=Object(je.a)(["\n overflow: hidden;\n transition: 110ms;\n width: 100%;\n border-radius: 7px;\n position: relative;\n display: flex;\n background: #242c37;\n justify-content: space-between;\n align-items: center;\n margin-bottom: 5px;\n height: ",";\n"])),(function(e){return e.isReplied?"75px":"0px"})),vn=me.a.div(Y||(Y=Object(je.a)(["\n height: 100%;\n width: 100%;\n color: white;\n box-sizing: border-box;\n display: flex;\n align-items: center;\n padding: 20px 10px;\n font-size: 14px;\n overflow-wrap: break-word;\n white-space: normal;\n"]))),wn=me.a.div(K||(K=Object(je.a)(["\n display: flex;\n width: 100%;\n justify-content: space-between;\n margin-bottom: 5px;\n color: ",";\n font-size: 11px;\n"])),(function(e){return e.color})),In=me.a.div(X||(X=Object(je.a)(["\n position: absolute;\n color: ",";\n top: 8px;\n left: 8px;\n font-size: 11px;\n"])),(function(e){return e.color})),Rn=me.a.div(Z||(Z=Object(je.a)(["\n font-size: 20px;\n &:hover {\n  cursor: pointer;\n }\n color: grey;\n margin-right: 20px;\n"]))),Dn=me.a.div(ee||(ee=Object(je.a)(["\n background: #323d4d;\n color: white;\n border-radius: 5px;\n max-width: 35%;\n min-width: 93px;\n white-space: normal;\n display: flex;\n position: relative;\n display: flex;\n padding: 10px;\n flex-direction: column;\n overflow-wrap: break-word;\n margin-right: 4px;\n margin-left: 4px;\n font-size: 14px;\n"]))),kn=["#F8485E ","#00C1D4","DarkCyan","DarkGoldenRod","DarkBlue","DarkRed","DarkOrange","Indigo","Purple","YellowGreen"],Cn=function(e){var n,t=e.match,o=e.history,r=Object(ue.useQuery)(Te,{variables:{roomID:t.params.id},onError:function(e){o.push("/main-page")}}),i=r.data,a=r.loading,s=r.subscribeToMore,c=Object(ne.useState)(!1),l=Object(be.a)(c,2),d=l[0],u=l[1],p=Object(ne.useState)(),b=Object(be.a)(p,2),j=b[0],m=b[1],x=Object(ue.useMutation)(Ne),g=Object(be.a)(x,2),f=g[0],h=g[1].loading,O=Object(ue.useMutation)(qe),y=Object(be.a)(O,1)[0],v=Object(ue.useMutation)(Ue),w=Object(be.a)(v,1)[0],I=Object(ue.useMutation)($e,{onCompleted:function(e){o.push("/main-page")},onError:function(e){console.log(e)}}),R=Object(be.a)(I,1)[0],D=Object(se.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.user})),k=function(e){var n=Object(ne.useRef)();return Object(ne.useEffect)((function(){n.current=e})),n.current}(null===i||void 0===i?void 0:i.getChatRoom.messages.length),C=null===i||void 0===i?void 0:i.getChatRoom.messages.length,_=function(){n.value&&(m(null),f({variables:{text:n.value||null,roomID:t.params.id||null,repliedMessage:null===j||void 0===j?void 0:j._id}}))},E=function(){var e=document.querySelector(".chatMessages");e.scrollTop=e.scrollHeight},S=function(){R({variables:{roomID:t.params.id}})};return Object(ne.useEffect)((function(){return function(){S()}}),[]),Object(ne.useEffect)((function(){a||E()}),[a]),Object(ne.useEffect)((function(){a||C>k&&E()}),[C]),Object(ne.useEffect)((function(){s({variables:{roomID:t.params.id},document:Ae,updateQuery:function(e,n){var t=n.subscriptionData,o=t.data.message;switch(t.data.message.actionType){case"SEND":var r=Object.assign({},e.getChatRoom,{messages:e.getChatRoom.messages.concat(o)});break;case"DELETE":var i=e.getChatRoom.messages.filter((function(e){return e._id!=o._id})).map((function(e){var n;return(null===(n=e.repliedMessage)||void 0===n?void 0:n._id)==o._id?Object.assign({},e,{repliedMessage:null}):e}));r=Object.assign({},e.getChatRoom,{messages:i});break;case"UPDATE":u(null);r=Object.assign({},e.getChatRoom,{messages:e.getChatRoom.messages.map((function(e){return e._id==o._id?Object.assign({},e,{text:o.text,isEdited:o.isEdited}):e}))});break;default:r=e.getChatRoom}return{getChatRoom:r}}}),s({variables:{roomID:t.params.id},document:ze,updateQuery:function(e,n){var t=n.subscriptionData.data.room;switch(t.actionType){case"JOIN":var o=Object.assign({},e.getChatRoom,{members:e.getChatRoom.members.concat(t.user)});break;case"LEAVE":o=Object.assign({},e.getChatRoom,{members:e.getChatRoom.members.filter((function(e){return e._id!=t.user._id}))});break;default:o=e.getChatRoom}return{getChatRoom:o}}})}),[]),Object(fe.jsxs)(cn,{children:[Object(fe.jsxs)(hn,{onClick:S,children:["LEAVE THE ROOM"," ",Object(fe.jsx)("i",{style:{fontSize:14,marginLeft:4},className:"fas fa-sign-out-alt"})]}),Object(fe.jsxs)(dn,{children:[Object(fe.jsxs)("span",{style:{color:"#ef4f4f",fontSize:13,fontWeight:"600",letterSpacing:1},children:["GROUP MEMBERS",Object(fe.jsxs)("span",{style:{marginLeft:5,fontWeight:600},children:[i&&Object(fe.jsxs)(te.a.Fragment,{children:[" ","("," ",i.getChatRoom.members.length+"/"+i.getChatRoom.limit,Object(fe.jsx)("i",{style:{fontSize:10,marginLeft:2},className:"fas fa-user"}),")"]})," "]})]}),Object(fe.jsxs)("ul",{style:{padding:0,listStyle:"none",width:"100%",marginTop:30},children:[i&&i.getChatRoom.members.map((function(e,n){return Object(fe.jsxs)("li",{style:{padding:5,width:"50%",display:"flex",fontSize:17.5,alignItems:"center"},children:[Object(fe.jsx)("i",{className:"fas fa-user",style:{color:kn[n],fontSize:15}}),Object(fe.jsxs)("span",{style:{marginLeft:10,fontSize:14},children:[" ",e.username," "]}),i.getChatRoom.host._id==e._id&&Object(fe.jsx)("i",{className:"fas fa-crown",style:{color:"#f0a500",fontSize:11,marginLeft:4}})," "]},e._id)}))," "]})]}),Object(fe.jsxs)(ln,{children:[" ",a?" Messages are loading....":Object(fe.jsxs)(jn,{className:"chatMessages",children:[i&&i.getChatRoom.messages.map((function(e,n){return Object(fe.jsxs)(xn,{checkOwner:e.owner._id==D._id,children:[" ",e.isEdited&&Object(fe.jsxs)("span",{style:{fontSize:12,color:"grey"},children:[" ","(edited)"," "]}),Object(fe.jsxs)(fn,{memberColor:kn[i.getChatRoom.members.findIndex((function(n){return n._id==e.owner._id}))]||"#87A8A4",children:[Object(fe.jsxs)("span",{style:{fontSize:12},children:[" ",Object(fe.jsx)("i",{className:"fas fa-user"})," ",e.owner.username," "]}),Object(fe.jsxs)("span",{style:{color:"#628395"},children:[" ",e.date.split("-")[0]," "]})]}),e.repliedMessage&&Object(fe.jsxs)(Dn,{children:[Object(fe.jsxs)(wn,{color:kn[null===i||void 0===i?void 0:i.getChatRoom.members.findIndex((function(n){return n._id==e.repliedMessage.owner._id}))]||"#87A8A4",style:{top:4,left:4},children:[Object(fe.jsxs)("span",{style:{marginRight:3},children:[Object(fe.jsx)("i",{className:"fas fa-user",style:{marginRight:3}})," ",e.repliedMessage.owner.username," "]}),Object(fe.jsxs)("span",{style:{marginLeft:3,color:"#628395"},children:[e.repliedMessage.date.split("-")[0]," "]})]}),Object(fe.jsx)("span",{children:e.repliedMessage.text})]}),Object(fe.jsxs)(gn,{children:[" ",d==e._id?Object(fe.jsxs)(te.a.Fragment,{children:[Object(fe.jsx)(On,{onKeyDown:function(n){var o,r;"Enter"==n.key&&(o=e._id,r=n.target.value,w({variables:{messageID:o||null,roomID:t.params.id||null,updatedText:r||null}})),"Escape"==n.key&&u(!1)},defaultValue:e.text}),Object(fe.jsxs)("span",{style:{fontSize:10},children:[" ","\xe7\u0131kmak i\xe7in esc \u2022 kaydetmek i\xe7in enter"," "]})]}):e.text," "]}),e.owner._id==D._id?Object(fe.jsxs)(te.a.Fragment,{children:[Object(fe.jsx)(mn,{onClick:function(){return n=e._id,void y({variables:{messageID:n||null,roomID:t.params.id||null}});var n},children:Object(fe.jsx)("i",{style:{color:"#ec4646"},className:"fas fa-trash-alt"})}),Object(fe.jsx)(mn,{onClick:function(){return u(e._id)},children:Object(fe.jsx)("i",{style:{color:"#ec4646"},className:"fas fa-edit"})}),Object(fe.jsx)(mn,{onClick:function(){return m(e)},children:Object(fe.jsx)("i",{style:{color:"#ec4646"},className:"fas fa-reply"})})]}):Object(fe.jsx)(mn,{onClick:function(){return m(e)},children:Object(fe.jsx)("i",{style:{color:"#ec4646"},className:"fas fa-reply"})})," "]},n)}))," "]}),Object(fe.jsxs)(yn,{isReplied:j,children:[Object(fe.jsxs)(In,{color:kn[null===i||void 0===i?void 0:i.getChatRoom.members.findIndex((function(e){return e._id==(null===j||void 0===j?void 0:j.owner._id)}))]||"#87A8A4",children:[Object(fe.jsx)("i",{className:"fas fa-user"}),Object(fe.jsx)("span",{style:{marginLeft:4},children:null===j||void 0===j?void 0:j.owner.username}),Object(fe.jsxs)("span",{style:{marginLeft:8,color:"#628395"},children:[null===j||void 0===j?void 0:j.date.split("-")[0]," "]})]}),Object(fe.jsx)(vn,{children:null===j||void 0===j?void 0:j.text}),Object(fe.jsx)(Rn,{onClick:function(){return m(null)},children:Object(fe.jsx)("i",{className:"fas fa-times"})})]}),Object(fe.jsxs)(un,{children:[Object(fe.jsx)(pn,{ref:function(e){return n=e},onKeyDown:function(e){"Enter"==e.key&&(_(),e.target.value="")},maxLength:"100"}),Object(fe.jsxs)(bn,{onClick:_,children:[" ",h?Object(fe.jsx)("img",{src:"/spin.gif",width:"30"}):"SEND"," "]})]})]})]})},_n=t(91),En=function(e){var n=e.component,t=Object(_n.a)(e,["component"]),o=Object(de.g)(),r=Object(se.b)(),i=Object(ne.useState)(!0),a=Object(be.a)(i,2),s=a[0],c=a[1],l=function(e){var n=Object(ne.useRef)();return Object(ne.useEffect)((function(){n.current=e})),n.current}(t.path),d=t.path,u=Object(ue.useLazyQuery)(ge,{context:{history:o},notifyOnNetworkStatusChange:!0,fetchPolicy:"network-only",onCompleted:function(e){var n=e.checkToken;c(!1),r({type:"SET_USER",payload:n})}}),p=Object(be.a)(u,2),b=p[0],j=p[1].data;return Object(ne.useEffect)((function(){b()}),[d]),Object(fe.jsx)(de.b,Object(ie.a)(Object(ie.a)({},t),{},{component:function(e){return!s&&j&&l==d?Object(fe.jsx)(n,Object(ie.a)({},e)):null}}))},Sn=t(88),Tn=t(2),Mn=new ue.HttpLink({uri:"https://groupchattappp.herokuapp.com/graphql"}),Ln=new Sn.a({uri:"wss://groupchattappp.herokuapp.com/subscriptions",options:{reconnect:!0,connectionParams:{token:localStorage.getItem("token"),roomID:window.location.pathname.split("/")[window.location.pathname.split("/").length-1]},timeout:6e4}}),$n=Object(ce.b)(_e,{user:{},error:{}}),zn=Object(ue.split)((function(e){var n=e.query,t=Object(Tn.q)(n);return"OperationDefinition"===t.kind&&"subscription"===t.operation}),Ln,Mn),Nn=Object(pe.a)((function(e){var n,t,o=e.graphQLErrors,r=e.networkError;e.operation;if(o){var i,a=Object(ae.a)(o);try{for(a.s();!(i=a.n()).done;){var s=i.value;switch(s.extensions.code){case"UNAUTHENTICATED":$n.dispatch(Ye()),window.location.href="/login"}n="[".concat(s.extensions.code,"]"),t=t||s.message}}catch(c){a.e(c)}finally{a.f()}$n.dispatch({type:"SET_ERROR",payload:{errorType:n,message:t}})}r&&console.log(o)})),qn=new ue.ApolloLink((function(e,n){var t=localStorage.getItem("token");return e.setContext({headers:Object(ie.a)(Object(ie.a)({},e.getContext().headers),{},{authorization:t?"Bearer ".concat(t):""})}),n(e)})),Un=new ue.ApolloClient({link:Object(ue.from)([qn,Nn,zn]),cache:new ue.InMemoryCache});var An=function(){return Object(fe.jsxs)(ue.ApolloProvider,{client:Un,children:[Object(fe.jsxs)(le.a,{children:[Object(fe.jsxs)(se.a,{store:$n,children:[Object(fe.jsxs)(de.d,{children:[Object(fe.jsx)(de.b,{path:"/",component:function(){return Object(fe.jsx)(de.a,{to:"/login"})},exact:!0}),Object(fe.jsx)(de.b,{path:"/login",component:Ie})," ",Object(fe.jsx)(de.b,{path:"/register",component:Ce})," ",Object(fe.jsx)(En,{path:"/main-page",component:sn,exact:!0}),Object(fe.jsx)(En,{path:"/room/:id",component:Cn,exact:!0})]})," "]})," "]})," "]})},Gn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,120)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),o(e),r(e),i(e),a(e)}))};re.a.render(Object(fe.jsx)(te.a.StrictMode,{children:Object(fe.jsx)(An,{})}),document.getElementById("root")),Gn()},96:function(e,n,t){},97:function(e,n,t){}},[[119,1,2]]]);
//# sourceMappingURL=main.15153c1d.chunk.js.map