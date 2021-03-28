import React from 'react';
import "./IMessage.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
function IMessage() {
    return (
        <div className="IMessage">
          {/* Sidebar */}
          <Sidebar />
          {/* Chat */}  
          <Chat />
        </div>
    )
}

export default IMessage
