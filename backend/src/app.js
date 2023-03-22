const path = require('path');
const express = require('express');
const app = express();

const apiRouter = require('./routes/api/api.router')
const testRouter = require('./routes/test/test.router')

const cors = require('cors');

app.set('view engine','pug');
app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(express.json());
app.use(express.static(path.join(__dirname,'..','public','image')))

app.use('/api', apiRouter )
app.use('/test', testRouter)

// app.get('/*', (req,res) => {
//     res.sendFile(path,join(__dirname,'..','public','index.html'))
// })

module.exports = app;