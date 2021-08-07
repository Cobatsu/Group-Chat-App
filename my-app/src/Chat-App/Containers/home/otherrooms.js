import React from 'react';
import styled from 'styled-components';
import { useSelector  } from 'react-redux';
import {  useHistory } from 'react-router-dom'
import { useQuery , useMutation  } from '@apollo/client'
import { GET_OTHER_ROOMS_QUERY } from '../../GraphqQL/Queries/ChatRoomQuery'
import { JOIN_ROOM_MUTATION } from '../../GraphqQL/Mutations/CatchRoomMutation'
import {Room} from '../components/roomComp'

const Container = styled.div`

    padding:15px;
    display:flex;
    flex-direction:column;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    width:40%;
    height:90%;
    box-sizing: border-box;
    
`
const Rooms = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
margin-top:25px;
`

const Refresh = styled.div`
position:absolute;
left:0;
&:hover{
        cursor:pointer
}

`
const OtherRooms = ()=>{

        const { data , loading , error , refetch } = useQuery(GET_OTHER_ROOMS_QUERY, {
               fetchPolicy:"network-only"
        }) 
        const history = useHistory();
        const [ join ]  = useMutation(JOIN_ROOM_MUTATION , {
                onError:(error)=> console.log(error) ,
                onCompleted:({joinRoom})=>{
                        history.push('/room/'+joinRoom._id);
                }
        });
        const storeError = useSelector( ( state = {} ) => state.error ); 
        const joinRoom = (id,limit,memberLength)=>(e)=>{
                join({
                    variables:{
                        roomID:id,
                        limit,
                        memberLength
                     }

               })
        }
        return (

                <Container>
                        <span style={{textAlign:"center",position:'relative'}} >                               
                                Other Rooms
                                <Refresh onClick={()=>refetch()} className="fas fa-sync" ></Refresh>                      
                        </span>
                        <Rooms>
                                {
                                loading ? <span> Fetching... </span> : 
                                error ?   <span> {storeError.errorType + " " + storeError.message} </span> :                  
                                data.getOtherRooms.map((room)=>{ 
                                        return <Room 
                                                key={room._id}
                                                room={room}
                                                joinRoom={joinRoom} /> 
                                }) }
                        </Rooms>
                </Container>

        )
}


export default OtherRooms;