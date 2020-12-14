import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Tilt from "react-vanilla-tilt";
import "../styles/style.css";
import ScrollableFeed from "react-scrollable-feed";

let socket;
const CONNECTION_PORT = "localhost:69/";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState("");
  const [userName, setUserName] = useState("");

  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  });

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList([...messageList, data]);
    });
  });
  const connectToRoom = () => {
    setLoggedIn(true);
    socket.emit("join_room", room);
  };

  const sendMessage = async () => {
    let messageContent = {
      room: room,
      content: {
        author: userName,
        message: message,
      },
    };

    await socket.emit("send_message", messageContent);
    setMessageList([...messageList, messageContent.content]);
  };

  return (
    <header className="App">
      {!loggedIn ? (
        <div className="logIn">
          <h6 className="mytitle m-0 py-5 my-3">
            Chat{" "}
            <span>
              <strong>hub</strong>
            </span>
          </h6>
          <div className="inputs">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Group Chat Name"
              onChange={(e) => {
                setRoom(e.target.value);
              }}
            />
          </div>
          <button onClick={connectToRoom}>Enter Chat</button>
        </div>
      ) : (
        <div className="chatContainer">
          <div className="text-center py-3">
            {" "}
            <h1
              className="m-0 p-0 "
              style={{ fontSize: "25px", color: "#6dd5ed" }}
            >
              Group <span>Chat</span> Name
            </h1>
            <h5
              className="m-0 p-0 text-white pt-2"
              style={{ fontFamily: "Poppins" }}
            >
              {" "}
              {room}
            </h5>
          </div>
          <hr />
          <ScrollableFeed className="scrollable">
            <div className="messages py-3">
              {messageList.map((val, key) => {
                return (
                  <Tilt className="tilt ">
                    <divs
                      className="messageContainer"
                      id={val.author === userName ? "You" : "Other"}
                    >
                      <div className="messageIndividual">
                        {val.author}: {val.message}
                      </div>
                    </divs>
                  </Tilt>
                );
              })}
            </div>
          </ScrollableFeed>
          <div className="messageInputs">
            <input
              className="inputs bg-transparent"
              type="text"
              placeholder="Input Your Message Here..."
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />

            <button className="mybtn text-center" onClick={sendMessage}>
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default App;
