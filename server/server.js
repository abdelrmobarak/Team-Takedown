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


// socket functions used in the client side
io.on('connection', socket => {
    console.log(`${socket.id} has connected`)
    socket.on('message', data =>{
        io.emit(data)
    })

    socket.on("join-room", (roomID, name, team) =>{
        socket.join(roomID)
        console.log(`User with id ${socket.id} has joined ${roomID}`)
        io.emit('room-joined', roomID, socket.id, name, team)
        io.emit('check-room', roomID, socket.id, name, team)
    })

    socket.on('game-start-server', (gameCode) =>{
        io.to(gameCode).emit('game-start', gameCode)
    })

    socket.on('give-points-server', (gameCode, team, points) =>{
        io.to(gameCode).emit('give-points', team, points)
    })

    socket.on('show-answer-server', (gameCode, questionNumber, answer) =>{
        io.to(gameCode).emit('show-answer', questionNumber, answer)
    })

    socket.on('clear-all-server', (gameCode)=>{
        io.to(gameCode).emit('clear-all')
    })

    socket.on('get-teammates-server', (gameCode, team) =>{
        io.to(gameCode).emit('get-teammates', team)
    })

    socket.on('get-teammates-server-Response', (gameCode, teammates, team) =>{
        io.to(gameCode).emit('get-teammates-Response', teammates, team)
    })

    socket.on('change-turn-server', (gameCode) =>{
        io.to(gameCode).emit('change-turn')
    })

    socket.on('button-pressed-server', (roomID, team, name) =>{
        io.to(roomID).emit('close-buttons', name)
        io.to(roomID).emit('button-pressed', team, name)
    })
    
    socket.on('kick-server', (roomID, id, name) =>{
        //console.log(`Kicking ${name} from ${roomID} they have id: ${id}`) //debugging
        io.to(roomID).emit('kick', roomID, id, name)
    })

    socket.on('update-points-server', (gameCode, points) =>{
        io.to(gameCode).emit('update-points', points)
    })

    socket.on('show-wrong-answer-server', (gameCode) =>{
        io.to(gameCode).emit('show-wrong-answer')
    })
    
    socket.on('update-display-list-server', (gameCode, teamRed, teamBlue) =>{
        io.to(gameCode).emit('update-display-list', teamRed, teamBlue)
    })

    socket.on('skip-question-server', (gameCode) =>{
        io.to(gameCode).emit('skip-question')
    })
})

httpServer.listen(port, ()=> {
    console.log(`Listening on port: ${port}`)
})