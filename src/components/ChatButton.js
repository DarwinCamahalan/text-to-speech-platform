import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/style.css";
function ChatButton() {
  return (
    <div className="btn-container">
      <NavLink to="/chat" style={{ color: "#6dd5ed" }}>
        <div className="chat">
          {" "}
          <i className="mx-3 fas fa-comment-dots fa-flip-horizontal"></i>
        </div>
      </NavLink>
    </div>
  );
}

export default ChatButton;
