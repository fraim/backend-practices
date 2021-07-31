require('dotenv').config({path: './config.env'})
const mongoose = require('mongoose')
const app = require('./app')

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD)
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful'))


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running in port: ${PORT}...`))
