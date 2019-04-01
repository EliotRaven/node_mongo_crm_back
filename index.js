require('dotenv').config()

const express        = require('express');
const bodyParser     = require('body-parser');
const cookieParser   = require('cookie-parser');
const app            = express();
const cors           = require('cors');
const errorHandler   = require('./helper/error.handler');
const router         = require('./routes')
const authRouter     = require('./routes/auth.route')
const authMiddleware = require('./middlewares/auth.middleware')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use((req,res,next) => {
  console.info(`${req.method} ${req.originalUrl}`)
  next()
})

app.use('/api/v1', authMiddleware, router);
// app.use('/api/v1', router);
app.use('/auth', authRouter);

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

