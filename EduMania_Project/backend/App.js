const express = require('express');
const app = express()
const port = 5000
var cors = require('cors');
app.use(cors())
app.use(express.json())

require('./db');


//available routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/game',require('./routes/gameRoutes'));
app.use('/api/question',require('./routes/questionRoutes'));
app.use('/api/score',require('./routes/scoreRoutes'));


app.get('/', (req, res) => {
  res.send('Welcome to the EduMania API!')
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})