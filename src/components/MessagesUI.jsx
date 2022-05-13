import React, { useEffect, useState } from "react";

function MessagesUI({ messages }) {
  function handleDeleteClick(event) {
    event.preventDefault();
    const target = event.target.children;
  }
  return (
    <>
      <div>
        <h2>Delete Messages Below!</h2>

        {messages.map((el, index) => (
          <div
            onClick={(e) => {
              handleDeleteClick(e);
            }}
            key={index}
            id={el.id}
          >
            <h4>{el.title}</h4>
            <p>{el.message}</p>
          </div>
        ))}

        {/* {messageList.map((el, index) => (
          <div key={index}>
            <h4>{el.message_title}</h4>
            <p>{el.message_body}</p>
          </div>
        ))} */}
      </div>
    </>
  );
}

export default MessagesUI;
