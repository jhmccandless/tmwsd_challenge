import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function DeletedMessagePageUI({ messages }) {
  let navigate = useNavigate();

  const title = localStorage.getItem(0);
  const message = localStorage.getItem(1);

  function onClick() {
    navigate("/");
  }

  return (
    <>
      <header className="App-header">
        <h2>This Message Is Now Deleted:</h2>
        <h4>{title}</h4>
        <p>{message}</p>
        <button
          onClick={() => {
            onClick();
          }}
        >
          Back
        </button>
      </header>
    </>
  );
}

export default DeletedMessagePageUI;
