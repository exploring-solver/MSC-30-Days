const express = require('express');
const app = express()
const port = 5000
var cors = require('cors');
app.use(cors())
app.use(express.json())



// socket.io setup
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server, { pingInterval: 2000, pingTimeout: 5000 })

require('./db');
const socketHandlers = require('./sockets/socketHandlers');
socketHandlers(io, db);


const scoreRoutes = require('./routes/scoreRoutes')(db)


//available routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/game',require('./routes/gameRoutes'));
app.use('/api/question',require('./routes/questionRoutes'));
app.use('/api/score',scoreRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the EduMania API!')
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})