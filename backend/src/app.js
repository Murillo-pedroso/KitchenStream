const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: [
    {
      origin: "http://192.168.15.50:3000", // Permite requisições do frontend rodando em localhost:3000
      methods: ["GET", "POST"],
    },
    {
      origin: "http://localhost:3000", // Permite requisições do frontend rodando em localhost:3000
      methods: ["GET", "POST"],
    },
  ],
});

// Middleware para CORS - Permite requisições de origens cruzadas
app.use(cors());

// Serve a interface React
app.use(express.static("client/build"));

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("setUsername", (username) => {
    socket.username = username;
    console.log(username + " entrou no chat");
  });

  socket.on("message", (msg) => {
    if (socket.username && msg) {
      io.emit("message", { user: socket.username, text: msg });
      console.log(socket.username + " diz " + msg);
    } else {
      if (!socket.username) {
        console.log(
          "Não foi possível enviar mensagem pois o usuário não está logado"
        );
      }
      if (!msg) {
        console.log("Não é possível enviar uma mensagem vazia");
      }
    }
  });

  socket.on("disconnect", () => {
    console.log("User " + socket.username + " disconnected");
    socket.username = "";
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
