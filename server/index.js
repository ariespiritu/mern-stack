// Clears terminal
console.log('\x1Bc');

if(!global._babelPolyfill) { require('babel-core/polyfill') }
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import session from 'express-session'
import logger from 'morgan'
import passport from 'passport'
import cors from 'cors'
import chalk from 'chalk'

// Import all routes
import routes from './routes'

// Initialize db
import db from './db'

// Initialize all models
import models from './models/index'
models()

// Initialize app
const app = express()

if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const webpack = require('webpack')
  const webpackMiddleware = require('webpack-dev-middleware')
  const webpackConfig = require('../webpack.config')

  const compiler = webpack(webpackConfig)

  // Hot reloading
  app.use(
    webpackMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      noInfo: true,
    }),
  )
}

app.use(express.static('client'))
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json({ limit: '10mb', parameterLimit: 10000 }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 10000 }))
app.use(cookieParser())
app.use(session({
  secret: 'seekr3t',
  name: 'seekr3tS3ssion',
  proxy: true,
  resave: true,
  saveUninitialized: true,
}))

app.use(passport.initialize())
app.use(passport.session())

routes(app)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.listen(3005, () => {
  console.log(chalk.green('Running on localhost: 3005'));
})
