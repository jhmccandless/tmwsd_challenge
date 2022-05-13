import React, { useEffect, useState } from "react";

function MessagesUI({ messages }) {
  let navigate = useNavigate();
  const [messageList, setMessageList] = useState([]);

  function handleDeleteClick(event) {
    event.preventDefault();
    console.log(event.target.children.length);
    // console.log(event.target.parentElement.children);
    let realTarget;
    event.target.children.length
      ? (realTarget = event.target.children)
      : (realTarget = event.target.parentElement.children);
    function htmlCollToArr(coll) {
      let arr = [];
      for (const el of coll) {
        console.log(el);
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
        console.log(event.target.id);
        localStorage.setItem(2, event.target.id);
        navigate(`/message:${event.target.id}`);
        deleteMessage(event.target.id);
      }
    }
    selectRightElement();
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
