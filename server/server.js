import {createServer } from 'http'
import{Server} from 'socket.io'
import 'dotenv/config'

const httpServer = createServer()
const port = process.env.PORT || 3002

// defining socket.io
const io = new Server(httpServer,{
    cors: {
        origin: "*",
        methods: ["GET","POST"]
    }
})

io.on('connection', socket => {
    console.log(`${socket.id} has connected`)
    socket.on('message', data =>{
        io.emit(data)
    })

    socket.on("join-room", (roomID, name, team) =>{
        socket.join(roomID)
        console.log(`User with id ${socket.id} has joined ${roomID}`)
        io.emit('room-joined', roomID, socket.id, name, team)
    })

    socket.on('game-start-server', (gameCode) =>{
        io.to(gameCode).emit('game-start', gameCode)
    })

    
})

httpServer.listen(port, ()=> {
    console.log(`Listening on port: ${port}`)
})