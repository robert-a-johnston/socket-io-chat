# Purpose
- Learn Socket.io
# Solution
- Create simple chat app.

# Notes
- Socket.io two parts
  - server
    -  that mounts on Node.JS HTTP Server
  - client library 
    - that loads on browser
- Sockets fire disconnect events like this one:
  
``` io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  })
```
- Emitting Events
  - supports JSON encoded objects and binary data
  - sends to everyone using ```io.emit()``` method
- Broadcasting
  - if you want to send to everyone except a certain emitting socket use
```
  io.on('connection', (socket) => {
    socket.broadcast.emit('hi')
  })
```