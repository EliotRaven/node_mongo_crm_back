require('dotenv').config()

const express        = require('express');
const bodyParser     = require('body-parser');
const cookieParser   = require('cookie-parser');
const app            = express();
const cors           = require('cors');
const compression    = require('compression')
const helmet         = require('helmet')
const errorHandler   = require('./helper/error.handler');
const router         = require('./routes')

const Auth = require('./auth')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(compression());
app.use(helmet());

app.use((req,res,next) => {
  console.info(`${req.method} ${req.originalUrl}`)
  next()
})

app.use('/api/v1', Auth.AuthMiddleware, router);
app.use('/auth', Auth.AuthRoutes);

app.use((req,res,next) => {
  res.status(404).json('Not found')
})

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 8080;
app.listen(port, function () {
  console.log('Server listening on port ' + port);
});

