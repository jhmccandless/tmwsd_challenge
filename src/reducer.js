const initialState = {
  messages: [
    // { id: 77, title: "title1", message: "message1" },
    // { id: 78, title: "title2", message: "message2" },
  ],
};

function tmwsd_reducer(state = initialState, action) {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "ADD_MESSAGE":
      const newMessages = [...state.messages, {}];
      return {
        ...state,
        messages: newMessages,
      };
    default:
      return state;
  }
}

export default tmwsd_reducer;
