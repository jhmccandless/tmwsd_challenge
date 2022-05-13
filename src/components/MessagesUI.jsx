import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MessagesUI({ messages, deleteMessage, fetchAPI }) {
  let navigate = useNavigate();
  const [messageList, setMessageList] = useState([]);

  function handleDeleteClick(event) {
    event.preventDefault();
    const target = event.target.children;
    function htmlCollToArr(coll) {
      let arr = [];
      for (const el of coll) {
        console.log(el);
        arr.push(el.innerHTML);
      }
      return arr;
    }
    for (const [i, el] of htmlCollToArr(target).entries()) {
      localStorage.setItem(i, el);
    }
    localStorage.setItem(2, event.target.id);
    navigate(`/message:${event.target.id}`);
    deleteMessage(event.target.id);
  }

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const data = await fetch("http://localhost:3785/");
      const json = await data.json();
      return json;
    };
    fetchData().then((messageList) => {
      if (mounted) {
        setMessageList(messageList);
        let updatedMsgArr = [];
        for (const el of messageList) {
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
