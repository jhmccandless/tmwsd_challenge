import React from "react";
import axios from "axios";

function InputFormUI({ addMessage }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    let messageDetails = [];
    for (const detail of event.target) {
      messageDetails.push(detail.value);
    }
    axios.post(`http://localhost:3785/messages_db`, { messageDetails });
    addMessage(messageDetails);
  };

  return (
    <>
      <h2>Message You'd Like To Delete:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input name="title" defaultValue={"Message Title"} type="text"></input>
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <input
          name="message"
          defaultValue={"this is a message to be deleted"}
          type="text"
        ></input>
        <br />
        <button type="submit">Add To List</button>
      </form>
    </>
  );
}

export default InputFormUI;
