const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const connectDb = require('./Server/Database/Connection')

const app = express();

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8000

app.use(morgan('tiny'));

connectDb();

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', require('./Server/Routes/Route'))

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})