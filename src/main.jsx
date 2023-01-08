import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {SocketContext, socket} from './socket';
ReactDOM.createRoot(document.getElementById('root')).render(
	<SocketContext.Provider value={socket}><App /></SocketContext.Provider>
)
