const express = require('express')
const app = express()
const port = 5000
const connectdb=require('./config/dbconnect')
require('dotenv').config()

app.use(express.json())

connectdb()

app.use("/api",require("./routes/users"))
app.listen(port, (erreur) => erreur? console.log(erreur): console.log(`server is running at port ${port}`))