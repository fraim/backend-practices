const express = require('express')
const morgan = require('morgan')

const app = express()

const tourRouter = require(`${__dirname}/routes/tourRoutes`)
const userRouter = require(`${__dirname}/routes/userRoutes`)

app.use(express.json())
app.use(express.static(`${__dirname}/public`))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

module.exports = app
