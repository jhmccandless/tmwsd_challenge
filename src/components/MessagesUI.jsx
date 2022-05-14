import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MessagesUI({ messages, deleteMessage, fetchAPI }) {
  let navigate = useNavigate();
  const [messageList, setMessageList] = useState([]);

  function handleDeleteClick(event) {
    event.preventDefault();
    let realTarget;
    event.target.children.length
      ? (realTarget = event.target.children)
      : (realTarget = event.target.parentElement.children);
    function htmlCollToArr(coll) {
      let arr = [];
      for (const el of coll) {
        arr.push(el.innerHTML);
      }
      return arr;
    }
    for (const [i, el] of htmlCollToArr(realTarget).entries()) {
      localStorage.setItem(i, el);
    }
    function selectRightElement() {
      if (event.target.children.length === 0) {
        console.log(event.target.parentElement.id);
        localStorage.setItem(2, event.target.parentElement.id);
        navigate(`/message:${event.target.parentElement.id}`);
        deleteMessage(event.target.parentElement.id);
      } else {
        localStorage.setItem(2, event.target.id);
        navigate(`/message:${event.target.id}`);
        deleteMessage(event.target.id);
      }
    }
    selectRightElement();
  }

  useEffect(() => {
    let mounted = true;
    const fetchingMessages = async () => {
      try {
        const response = await axios.get("http://localhost:3785/");
        const data = response.data;
        return data;
      } catch (error) {
        console.error(error);
      }
    };
    fetchingMessages().then((data) => {
      if (mounted) {
        setMessageList(data);
        let updatedMsgArr = [];
        for (const el of data) {
          updatedMsgArr.push({
            id: el.id,
            title: el.message_title,
            message: el.message_body,
          });
        }
        fetchAPI(updatedMsgArr);
      }
    });

    return () => (mounted = false);
  }, []);

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
      </div>
    </>
  );
}

export default MessagesUI;
