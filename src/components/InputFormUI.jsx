import React, { useEffect, useState } from "react";
import axios from "axios";

function InputFormUI({ addMessage }) {
  return (
    <>
      <h2>Message You'd Like To Delete:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input
          name="title"
          defaultValue={"Message Title"}
          type="text"
          // value={keywords}
          // onChange={(e) => setKeywords(e.target.value)}
        ></input>
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <input
          name="message"
          defaultValue={"this is a message to be deleted"}
          type="text"
          // value={keywords}
          // onChange={(e) => setKeywords(e.target.value)}
        ></input>
        <br />
        <button type="submit">Update List</button>
      </form>
    </>
  );
}

export default InputFormUI;
