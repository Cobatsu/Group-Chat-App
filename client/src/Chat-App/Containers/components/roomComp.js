import React, { useState } from "react";
import { useSubscription } from "@apollo/client";
import styled from "styled-components";
import { MEMBER_JOINED_ROOM } from "../../GraphqQL/Mutations/CatchRoomMutation";
import { useSelector } from "react-redux";

const InnerRooms = styled.div`
  display: flex;

  padding: 10px;
  align-items: center;
  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    cursor: pointer;
  }
`;

export const Room = ({ room, joinRoom, userRoom }) => {
  // it iss so logical to set useSubscription in every room component

  const [members, setMembers] = useState(room.members);
  const { data } = useSubscription(MEMBER_JOINED_ROOM, {
    variables: { roomID: room._id },
    onSubscriptionData: ({ subscriptionData }) => {
      if (subscriptionData.data.room.actionType == "JOIN") {
        setMembers((prev) => prev.concat(subscriptionData.data.room.user));
      } else if (subscriptionData.data.room.actionType == "LEAVE") {
        setMembers((prev) =>
          prev.filter((u) => subscriptionData.data.room.user._id != u._id)
        );
      }
    },
  });
  const currentUser = useSelector((state = {}) => state.user);
  const targetRoom = currentUser.lastTimeSee?.find((visitedRoom) => {
    return visitedRoom.roomID == room._id;
  });

  let numberOfUnreadMessages = !targetRoom
    ? room.messages.length
    : room.messages.reduce((prev, curr) => {
        const messageSentDate = new Date(curr.date.split("-")[1]).getTime();
        const lastDateSeen = new Date(+targetRoom.time).getTime();

        if (messageSentDate > lastDateSeen) {
          return ++prev;
        } else {
          return prev;
        }
      }, 0);
  return (
    <InnerRooms
      key={room._id}
      onClick={joinRoom(room._id, room.limit, members.length)}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flex: 1,
        }}
      >
        <i
          style={{ marginRight: 8, color: userRoom ? "#f05454" : "#00af91" }}
          className="fas fa-comment"
        ></i>
        {room.title.length > 10 ? room.title.slice(0, 5) + "..." : room.title}
      </span>
      {!userRoom && (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flex: 1,
          }}
        >
          <i
            style={{ marginRight: 8, color: "#00af91" }}
            className="fas fa-wifi"
          ></i>
          {room.host.username}{" "}
        </span>
      )}
      <span
        style={{
          display: "flex",
          alignItems: "center",
          color: members.length === room.limit ? "red" : "#76a21e",
          justifyContent: "space-between",
          flex: 0.2,
        }}
      >
        <i
          style={{ marginRight: 8, color: userRoom ? "#f05454" : "#00af91" }}
          className="fas fa-user-friends"
        ></i>
        {members.length + "/" + room.limit}
      </span>
      {numberOfUnreadMessages > 0 && (
        <span
          style={{
            background: "#082032",
            padding: "5px 7px",
            borderRadius: "50%",
            color: "white",
            marginLeft: 10,
            fontSize: 11,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {numberOfUnreadMessages}
        </span>
      )}
    </InnerRooms>
  );
};
