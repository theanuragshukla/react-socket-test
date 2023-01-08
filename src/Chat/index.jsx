import React, {useContext, useEffect, useState} from 'react';
import { SocketContext } from '../socket';
const Chat = () => {
	const [msg, setMsg] = useState("")
const [allMsgs , setAllMsgs] = useState([])
const socket = useContext(SocketContext)
	useEffect(()=>{
		socket.on("newMsg", (data)=>{
			setAllMsgs(prev=>{
				console.log(prev)
				return [...prev, data]
			})
	})
		return ()=>{
			socket.off('newMsg')
		}
	}, [allMsgs])
  return (
      <div>
	  <div className="chats">
	  {
		  allMsgs.map(msg => {
			  return <div>{msg}</div>
		  })
	  }
	  </div>
	  <input type="text" value={msg} onKeyDown={(e)=>{
			if(e.key=="Enter"){
				socket.emit("msg", msg)
				setMsg("")
			}
	  }}
	  onChange={(e)=>{
		  setMsg(e.target.value)
	  }}/>
	  </div>
  );
}

export default Chat;
