const express = require('express')
const app = express()
// creates http server with express
const server = require('http').createServer(app)
const { Server } = require('socket.io')

const PORT = 3000
// initialize instance
const io = new Server(server)


// express path 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
// print out chat message
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    // broadcast to everyone including sender *
    io.emit('chat message', msg)
  })
})
// port server is listening
server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`)
})  