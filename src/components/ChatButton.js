import React from "react";
import "../styles/style.css";
function ChatButton() {
  return (
    <div className="btn-container">
      <a href="/chat" style={{ color: "#6dd5ed" }}>
        <div className="chat">
          {" "}
          <i className="mx-3 fas fa-comment-dots fa-flip-horizontal"></i>
        </div>
      </a>
    </div>
  );
}

export default ChatButton;
