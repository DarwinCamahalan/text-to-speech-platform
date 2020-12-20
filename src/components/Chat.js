import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Helmet } from "react-helmet";
import Tilt from "react-vanilla-tilt";
import "../styles/style.css";
import ScrollableFeed from "react-scrollable-feed";
import { useSpeechRecognition } from "react-speech-kit";

let socket;
const CONNECTION_PORT = process.env.PORT || "localhost:69";

function Chat() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState("");
  const [userName, setUserName] = useState("");

  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const { listen, stop, listening } = useSpeechRecognition({
    onResult: (result) => {
      setMessage(result);
    },
  });

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, []);

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
    <div className="mychat">
      <Helmet>
        <title>Chat Hub</title>
      </Helmet>
      <audio autoPlay loop>
        <source src="/assets/music/chat-bg.mp3" />
      </audio>
      {!loggedIn ? (
        <div className="logIn">
          <h6 className="mytitle m-0 py-5 my-3">
            Chat{" "}
            <span>
              <strong>hub</strong>
            </span>
          </h6>
          <div className="inputs   text-center">
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
              {messageList.map((val, index) => {
                return (
                  <Tilt className="tilt ">
                    <div className="my-2 mr-3" key={index}>
                      {" "}
                      <p
                        style={{ color: "#fff", marginRight: "10" }}
                        className={
                          val.author === userName ? "person" : "person2"
                        }
                      >
                        <i
                          style={{ fontSize: "20px" }}
                          className="px-2 fas fa-user-circle"
                        ></i>
                        {val.author}
                      </p>
                    </div>
                    <div
                      className="messageContainer"
                      id={val.author === userName ? "You" : "Other"}
                    >
                      <div className="messageIndividual">{val.message}</div>
                    </div>
                  </Tilt>
                );
              })}
            </div>
          </ScrollableFeed>
          {listening && (
            <p className="text-white text-center">Microphone is On</p>
          )}
          <div className="messageInputs">
            <button
              className=" text-center"
              onMouseDown={listen}
              onMouseUp={stop}
            >
              {" "}
              <i className="fas fa-microphone "></i>
            </button>
            <input
              className="inputs bg-transparent"
              type="text"
              value={message}
              placeholder="Input Your Message Here..."
              onChange={(e) => setMessage(e.target.value)}
            />

            <button className="mybtn text-center" onClick={sendMessage}>
              <i className="fas fa-paper-plane "></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
