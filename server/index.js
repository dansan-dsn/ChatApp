require('dotenv').config() // configureing .env
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 5000
const uri = process.env.DB_URI
const userRoute = require('./routes/userRoute')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/users', userRoute)

app.listen(port, (req, res) => {
    console.log(`Server running on port: ${port}`)
})

mongoose
.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('Database connected'))
.catch((err) => console.log('Database Failed', err.message))