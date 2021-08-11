import {gql} from '@apollo/client'

export const CREATE_ROOM_MUTATION = gql`

    mutation CreateRoom($room:RoomInput!){

        createRoom(room:$room) {
            title
            limit
        }

    }
    
`

export const JOIN_ROOM_MUTATION = gql`
    mutation JoinRoom($roomID:ID!,$limit:Int!,$memberLength:Int!) {
        joinRoom(roomID:$roomID,limit:$limit,memberLength:$memberLength) {
            _id
            title
            limit
        }
    }
`

export const LEAVE_ROOM_MUTATION = gql`

    mutation LeaveRoom($roomID:ID!) {

        leaveRoom(roomID:$roomID) {

            title
            _id

        }

    }


`


export const MEMBER_JOINED_ROOM = gql`

    subscription MemberJoined($roomID:ID) {
        room(roomID:$roomID) {

             user {
                username
                _id         
             }
            
             roomID
             actionType
        }
    }

`

export const SEND_MESSAGE_MUTATION = gql`

    mutation SendMessage($text:String!,$roomID:ID!,$repliedMessage:ID) {
        sendMessage(text:$text,roomID:$roomID,repliedMessage:$repliedMessage) {
            _id
            text
        }
    }

`

export const DELETE_MESSAGE_MUTATION = gql`

    mutation DeleteMessage($messageID:ID!,$roomID:ID!) {

        deleteMessage(messageID:$messageID,roomID:$roomID) {
            _id
            text
        }
    }
`
export const UPDATE_MESSAGE_MUTATION = gql`

    mutation UpdateMessage($messageID:ID!,$updatedText:String!,$roomID:ID!) {

        updateMessage(messageID:$messageID,updatedText:$updatedText,roomID:$roomID){

            _id
            text
        }

    }

`

export const MESSAGE = gql`

    subscription MessageSent($roomID:ID!) {

        message(roomID:$roomID) {
            _id
            text
            date
            isEdited
            owner {
                username
                _id
            }
            actionType
        }

    }

`



