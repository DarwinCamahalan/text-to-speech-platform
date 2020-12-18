const PORT = process.env.PORT || 69;

const express = require("express");
const socket = require("socket.io");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const server = app.listen(PORT, () => {
  console.log("\nServer Running on Port 69 😋 💦");
});

io = socket(server);

io.on("connection", (socket) => {
  socket.on("join_room", (data) => {
    socket.join(data);

    console.log(
      "________________________________\n\nUser Joined Room: " + data + " 👋"
    );
    console.log(
      "\nChat Room (" +
        data +
        ") ID Token: " +
        socket.id +
        " 🎉\n________________________________\n"
    );
  });

  socket.on("send_message", (data) => {
    console.log("\n💌  Data Received from a User:\n");
    console.log(data);
    socket.to(data.room).emit("receive_message", data.content);
  });

  socket.on("disconnect", () => {
    console.log("\n❌  A User Left the Chat Room  ❌");
  });
});
