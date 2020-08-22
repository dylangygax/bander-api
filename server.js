//require
const express = require('express')
const app = express()
const routes = require('./routes')
//const cors = require('cors')
const PORT = /*process.env.PORT ||*/ 4000

//middleware
app.use(express.json()) //JSON parsing
//app.use(cors())

//routes
app.use('/api/v1/users', routes.users)

//connection
app.listen(PORT, () => console.log(`listening on port ${PORT}`))