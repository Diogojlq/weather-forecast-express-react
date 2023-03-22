const http = require("http");
const app = require("./app");
const path = require("path");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api/api.router");

const PORT = process.env.PORT || 5000;

// const MONGO_URL = 'mongodb+srv://Diogojlq:Djlqozsp4541@db.1fwtwum.mongodb.net/clima?retryWrites=true&w=majority'

const server = http.createServer(app);

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Initializing the server on PORT : ${PORT} `);
  });
}

startServer();
