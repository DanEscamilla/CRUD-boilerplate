const express = require('express');
const http = require('http');
// const serveStatic = require('serve-static');

const modelRouter = require('./routes/carRoutes.js');

const connect = require('./db/connect.js');
const port = process.env.PORT||8080;
const app = express();

function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

// let staticServer = serveStatic(path.resolve(__dirname, '../build/'), {'index': ['index.html', 'index.htm']})

let server = http.createServer(app);

app.use(express.json());
app.use(allowCrossDomain);
// app.use(staticServer);
app.use('/api/model',modelRouter);

connect().then(()=>{
  server.listen(port,()=>{
    console.log(`Listening to port ${port}`)
  })
})
