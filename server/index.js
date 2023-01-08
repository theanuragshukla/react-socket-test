const server = require('http').Server(require('express')()).listen(3000)
const io = require('socket.io')(server, {cors: {origin: "*"}})
io.on('connect', (socket)=>{
	socket.on('msg', e => io.emit('newMsg', e))
})
