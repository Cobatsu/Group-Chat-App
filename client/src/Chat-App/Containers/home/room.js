import React, {useEffect, useState, useRef} from "react";
import {useQuery, useMutation} from "@apollo/client";
import {GET_CHAT_ROOM_QUERY} from "../../GraphqQL/Queries/ChatRoomQuery";
import {
 SEND_MESSAGE_MUTATION,
 MESSAGE,
 MEMBER_JOINED_ROOM,
 DELETE_MESSAGE_MUTATION,
 LEAVE_ROOM_MUTATION,
 UPDATE_MESSAGE_MUTATION,
} from "../../GraphqQL/Mutations/CatchRoomMutation";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

let x;

const GeneralWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100%;
 margin: 0 auto;
 background: #242c37;
 position: relative;
`;
const ChatBox = styled.div`
 height: 530px;
 box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
  rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
  rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
 box-sizing: border-box;
 width: 44%;
 margin-left: 20px;
 padding: 10px;
 background: white;
`;
const Members = styled.div`
 box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
  rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
  rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
 height: 530px;
 width: 19%;
 display: flex;
 flex-direction: column;

 align-items: center;
 box-sizing: border-box;
 padding: 10px;
 background: white;
`;
// ................................

const TextPart = styled.div`
 display: flex;
 justify-content: space-between;
 width: 100%;
`;

const ChatTextInput = styled.input`
 flex: 0.83;
 height: 30px;
 font-size: 17px;
 background: #628395;
 color: white;
 border: none;
 padding: 5px 10px;
 outline: none;
`;

const Send = styled.button`
 background: #ef4f4f;
 color: white;
 border: none;
 flex: 0.15;
 &:hover {
  cursor: pointer;
 }
`;

const Messages = styled.ul`
 flex: 0.94;
 width: 100%;
 display: flex;
 flex-direction: column;
 list-style: none;
 margin: 0;
 padding: 0;
 overflow: scroll;
 overflow-x: hidden;
`;

const EditTextBubble = styled.div`
 align-items: center;
 justify-content: center;
 display: flex;
 overflow: hidden;
 width: 0;
 transition: 110ms;
`;

const InnerMessage = styled.li`
 width: 100%;
 display: flex;
 list-style: none;
 flex-direction: ${({checkOwner}) => (checkOwner ? "row" : "row-reverse")};
 justify-content: flex-end;
 align-items: center;
 padding: 8px 15px 8px 15px;
 border-radius: 5px;
 box-sizing: border-box;
 &:hover {
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
 }
 &:hover ${EditTextBubble} {
  margin: ${({checkOwner}) => (checkOwner ? "0 1.5px" : "0 8px 0 1.5px")};
  width: 20px;
  cursor: pointer;
 }
`;

const TextBubble = styled.div`
 background: #628395;
 color: white;
 padding: 6px 8px;
 border-radius: 5px;
 max-width: 35%;
 white-space: normal;
 overflow-wrap: break-word;
`;

const TextInformationBubble = styled.span`
 display: flex;
 flex-direction: column;
 justify-content: center;
 font-size: 10px;
 padding: 0 7px;
 align-items: center;
 color: ${({memberColor}) => memberColor};
`;

const LeaveGroup = styled.button`
 background: #ef4f4f;
 color: white;
 border: none;
 border-radius: 8px;
 font-size: 12px;
 &:hover {
  cursor: pointer;
 }
 position: absolute;
 top: 20px;
 left: 20px;
 padding: 10px;
`;
const UpdateText = styled.input`
 outline: none;
 border-radius: 7px;
 border: none;
 padding: 5px;
 color: white;
 background: #007580;
`;
// -------------------------------------------------------------------------------

const ReplyWrapper = styled.div`
 overflow: hidden;
 transition: 110ms;
 width: 100%;
 border-radius: 7px;
 position: relative;
 display: flex;
 background: #242c37;
 justify-content: space-between;
 align-items: center;
 margin-bottom: 5px;
 height: ${({isReplied}) => (isReplied ? "75px" : "0px")};
`;
const ReplyText = styled.div`
 height: 100%;
 width: 100%;
 color: white;
 box-sizing: border-box;
 display: flex;
 align-items: center;
 padding: 20px 10px;
 font-size: 14px;
 overflow-wrap: break-word;
 white-space: normal;
`;
const RepliedMessageInfo = styled.div`
 display: flex;
 width: 100%;
 justify-content: space-between;
 margin-bottom: 5px;
 color: ${({color}) => color};
 font-size: 11px;
`;

const RepliedMessageInfo2 = styled.div`
 position: absolute;
 color: ${({color}) => color};
 top: 8px;
 left: 8px;
 font-size: 11px;
`;

const ReplyCloseIcon = styled.div`
 font-size: 20px;
 &:hover {
  cursor: pointer;
 }
 color: grey;
 margin-right: 20px;
`;
const RepliedMessageTextBubble = styled.div`
 background: #323d4d;
 color: white;
 border-radius: 5px;
 max-width: 35%;
 min-width: 93px;
 white-space: normal;
 display: flex;
 position: relative;
 display: flex;
 padding: 10px;
 flex-direction: column;
 overflow-wrap: break-word;
 margin-right: 4px;
 margin-left: 4px;
 font-size: 14px;
`;
const memberColors = [
 "#F8485E ",
 "#00C1D4",
 "DarkCyan",
 "DarkGoldenRod",
 "DarkBlue",
 "DarkRed",
 "DarkOrange",
 "Indigo",
 "Purple",
 "YellowGreen",
];

const usePrevious = value => {
 const ref = useRef();
 useEffect(() => {
  ref.current = value;
 });
 return ref.current;
};

const Room = ({match, history}) => {
 const {data, loading, subscribeToMore, refetch} = useQuery(
  GET_CHAT_ROOM_QUERY,
  {
   variables: {
    roomID: match.params.id,
   },
   onError: err => {
    history.push("/main-page");
   },
  }
 );
 const [isBeingUpdatedID, setIsBeingUpdatedID] = useState(false);
 const [isReplied, setIsReplied] = useState();
 const [send, {loading: Loading}] = useMutation(SEND_MESSAGE_MUTATION);
 const [deleteMessage] = useMutation(DELETE_MESSAGE_MUTATION);
 const [updateMessage] = useMutation(UPDATE_MESSAGE_MUTATION);
 const [leaveRoom] = useMutation(LEAVE_ROOM_MUTATION, {
  onCompleted: data => {
   history.push("/main-page");
  },
  onError: err => {
   console.log(err);
  },
 });
 const currentUser = useSelector((state = {}) => state.user);
 const prevMessagesLength = usePrevious(data?.getChatRoom.messages.length);
 const currentMessagesLength = data?.getChatRoom.messages.length;
 const OnSendMessage = () => {
  if (chatText.value) {
   setIsReplied(null);
   send({
    variables: {
     text: chatText.value || null,
     roomID: match.params.id || null,
     repliedMessage: isReplied?._id,
    },
   });
  }
 };
 const scrollToBottom = () => {
  var chatBox = document.querySelector(".chatMessages");
  chatBox.scrollTop = chatBox.scrollHeight;
 };

 const onLeaveRoom = () => {
  leaveRoom({
   variables: {
    roomID: match.params.id,
   },
  });
 };
 const OnDeleteMessage = ID => {
  deleteMessage({
   variables: {
    messageID: ID || null,
    roomID: match.params.id || null,
   },
  });
 };
 const onUpdateMessage = (ID, value) => {
  updateMessage({
   variables: {
    messageID: ID || null,
    roomID: match.params.id || null,
    updatedText: value || null,
   },
  });
 };

 useEffect(() => {
  if (data) {
   console.log("asd");
   refetch();
  }
 }, [match.url]);
 useEffect(() => {
  if (!loading) {
   scrollToBottom();
  }
 }, [loading]);
 useEffect(() => {
  if (!loading) {
   if (currentMessagesLength > prevMessagesLength) {
    scrollToBottom();
   }
  }
 }, [currentMessagesLength]);
 useEffect(() => {
  subscribeToMore({
   variables: {
    roomID: match.params.id,
   },
   document: MESSAGE,
   updateQuery: (prev, {subscriptionData}) => {
    const subMessage = subscriptionData.data.message;
    const type = subscriptionData.data.message.actionType;
    switch (type) {
     case "SEND":
      var updatedData = Object.assign({}, prev.getChatRoom, {
       messages: prev.getChatRoom.messages.concat(subMessage),
      }); // message type must be the same shape as prevmessagetype
      break;
     case "DELETE":
      var initialData = prev.getChatRoom.messages.filter(
       msg => msg._id != subMessage._id
      );
      var lastData = initialData.map(msg => {
       if (msg.repliedMessage?._id == subMessage._id) {
        return Object.assign({}, msg, {repliedMessage: null});
       } else {
        return msg;
       }
      });
      var updatedData = Object.assign({}, prev.getChatRoom, {
       messages: lastData,
      });
      console.log(updatedData);
      break;
     case "UPDATE":
      setIsBeingUpdatedID(null);
      var updatedData = Object.assign({}, prev.getChatRoom, {
       messages: prev.getChatRoom.messages.map(msg => {
        return msg._id == subMessage._id
         ? Object.assign({}, msg, {
            text: subMessage.text,
            isEdited: subMessage.isEdited,
           })
         : msg;
       }),
      });
      break;
     default:
      var updatedData = prev.getChatRoom;
      break;
    }

    return {getChatRoom: updatedData};
   },
  });

  subscribeToMore({
   variables: {
    roomID: match.params.id,
   },
   document: MEMBER_JOINED_ROOM,
   updateQuery: (prev, {subscriptionData}) => {
    const joinedMember = subscriptionData.data.room;
    switch (joinedMember.actionType) {
     case "JOIN":
      var mergedData = Object.assign({}, prev.getChatRoom, {
       members: prev.getChatRoom.members.concat(joinedMember.user),
      });
      break;
     case "LEAVE":
      var mergedData = Object.assign({}, prev.getChatRoom, {
       members: prev.getChatRoom.members.filter(
        m => m._id != joinedMember.user._id
       ),
      });
      break;
     default:
      var mergedData = prev.getChatRoom;
      break;
    }
    return {getChatRoom: mergedData};
   },
  });

  return () => {
   onLeaveRoom();
  };
 }, []);

 console.log(data);
 var chatText;
 return (
  <GeneralWrapper>
   <LeaveGroup onClick={onLeaveRoom}>
    LEAVE THE ROOM{" "}
    <i
     style={{
      fontSize: 14,
      marginLeft: 4,
     }}
     className='fas fa-sign-out-alt'
    ></i>
   </LeaveGroup>

   <Members>
    <span
     style={{
      color: "#ef4f4f",
      fontSize: 13,
      fontWeight: "600",
      letterSpacing: 1,
     }}
    >
     GROUP MEMBERS
     <span
      style={{
       marginLeft: 5,
       fontWeight: 600,
      }}
     >
      {data && (
       <React.Fragment>
        {" "}
        {/* we need to use react fragment here to convert ( to string */}({" "}
        {data.getChatRoom.members.length + "/" + data.getChatRoom.limit}
        <i
         style={{
          fontSize: 10,
          marginLeft: 2,
         }}
         className='fas fa-user'
        />
        )
       </React.Fragment>
      )}{" "}
     </span>
    </span>

    <ul
     style={{
      padding: 0,
      listStyle: "none",
      width: "100%",
      marginTop: 30,
     }}
    >
     {data &&
      data.getChatRoom.members.map((member, index) => {
       return (
        <li
         style={{
          padding: 5,
          width: "50%",
          display: "flex",
          fontSize: 17.5,
          alignItems: "center",
         }}
         key={member._id}
        >
         <i
          className='fas fa-user'
          style={{
           color: memberColors[index],
           fontSize: 15,
          }}
         />
         <span
          style={{
           marginLeft: 10,
           fontSize: 14,
          }}
         >
          {" "}
          {member.username}{" "}
         </span>
         {data.getChatRoom.host._id == member._id && (
          <i
           className='fas fa-crown'
           style={{
            color: "#f0a500",
            fontSize: 11,
            marginLeft: 4,
           }}
          />
         )}{" "}
        </li>
       );
      })}{" "}
    </ul>
   </Members>

   <ChatBox>
    {" "}
    {loading ? (
     " Messages are loading...."
    ) : (
     <Messages className='chatMessages'>
      {data &&
       data.getChatRoom.messages.map((msg, index) => {
        return (
         <InnerMessage
          key={index}
          checkOwner={msg.owner._id == currentUser._id}
         >
          {" "}
          {/* row-reverse also reverses the end and start property */}
          {msg.isEdited && (
           <span
            style={{
             fontSize: 12,
             color: "grey",
            }}
           >
            {" "}
            (edited){" "}
           </span>
          )}
          <TextInformationBubble
           memberColor={
            memberColors[
             data.getChatRoom.members.findIndex(m => m._id == msg.owner._id)
            ] || "#87A8A4"
           }
          >
           <span style={{fontSize: 12}}>
            {" "}
            <i className='fas fa-user' /> {msg.owner.username}{" "}
           </span>
           <span style={{color: "#628395"}}> {msg.date.split("-")[0]} </span>
          </TextInformationBubble>
          {msg.repliedMessage && (
           <RepliedMessageTextBubble>
            <RepliedMessageInfo
             color={
              memberColors[
               data?.getChatRoom.members.findIndex(
                m => m._id == msg.repliedMessage.owner._id
               )
              ] || "#87A8A4"
             }
             style={{
              top: 4,
              left: 4,
             }}
            >
             <span style={{marginRight: 3}}>
              <i className='fas fa-user' style={{marginRight: 3}} />{" "}
              {msg.repliedMessage.owner.username}{" "}
             </span>

             <span
              style={{
               marginLeft: 3,
               color: "#628395",
              }}
             >
              {msg.repliedMessage.date.split("-")[0]}{" "}
             </span>
            </RepliedMessageInfo>
            <span>{msg.repliedMessage.text}</span>
           </RepliedMessageTextBubble>
          )}
          <TextBubble>
           {" "}
           {isBeingUpdatedID == msg._id ? (
            <React.Fragment>
             <UpdateText
              onKeyDown={e => {
               if (e.key == "Enter") {
                onUpdateMessage(msg._id, e.target.value);
               }
               if (e.key == "Escape") {
                setIsBeingUpdatedID(false);
               }
              }}
              defaultValue={msg.text}
             />
             <span style={{fontSize: 10}}>
              {" "}
              çıkmak için esc • kaydetmek için enter{" "}
             </span>
            </React.Fragment>
           ) : (
            msg.text
           )}{" "}
          </TextBubble>
          {msg.owner._id == currentUser._id ? (
           <React.Fragment>
            <EditTextBubble onClick={() => OnDeleteMessage(msg._id)}>
             <i style={{color: "#ec4646"}} className='fas fa-trash-alt'></i>
            </EditTextBubble>
            <EditTextBubble onClick={() => setIsBeingUpdatedID(msg._id)}>
             <i style={{color: "#ec4646"}} className='fas fa-edit'></i>
            </EditTextBubble>
            <EditTextBubble onClick={() => setIsReplied(msg)}>
             <i style={{color: "#ec4646"}} className='fas fa-reply'></i>
            </EditTextBubble>
           </React.Fragment>
          ) : (
           <EditTextBubble onClick={() => setIsReplied(msg)}>
            <i style={{color: "#ec4646"}} className='fas fa-reply'></i>
           </EditTextBubble>
          )}{" "}
         </InnerMessage>
        );
       })}{" "}
     </Messages>
    )}
    <ReplyWrapper isReplied={isReplied}>
     <RepliedMessageInfo2
      color={
       memberColors[
        data?.getChatRoom.members.findIndex(m => m._id == isReplied?.owner._id)
       ] || "#87A8A4"
      }
     >
      <i className='fas fa-user' />
      <span style={{marginLeft: 4}}>{isReplied?.owner.username}</span>
      <span
       style={{
        marginLeft: 8,
        color: "#628395",
       }}
      >
       {isReplied?.date.split("-")[0]}{" "}
      </span>
     </RepliedMessageInfo2>
     <ReplyText>{isReplied?.text}</ReplyText>
     <ReplyCloseIcon onClick={() => setIsReplied(null)}>
      <i className='fas fa-times'></i>
     </ReplyCloseIcon>
    </ReplyWrapper>
    <TextPart>
     <ChatTextInput
      ref={ref => (chatText = ref)}
      onKeyDown={e => {
       if (e.key == "Enter") {
        // we can use onKeyDown event to handle keyboard actions !
        OnSendMessage();
        e.target.value = "";
       }
      }}
      maxLength='100'
     />
     <Send onClick={OnSendMessage}>
      {" "}
      {Loading ? <img src='/spin.gif' width='30' /> : "SEND"}{" "}
     </Send>
    </TextPart>
   </ChatBox>
  </GeneralWrapper>
 );
};

export default Room;
