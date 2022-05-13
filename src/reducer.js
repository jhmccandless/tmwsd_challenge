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
      const newMessages = [
        ...state.messages,
        {
          id: action.data[3],
          title: action.data[0],
          message: action.data[1],
        },
      ];
      return {
        ...state,
        messages: newMessages,
      };
    case "DELETE_MESSAGE":
      let delMessage = state.messages.find(
        ({ id }) => id === Number(action.data)
      );
      let arrToChange = [...state.messages];
      const newMessagesDel = arrToChange.splice(
        state.messages.indexOf(delMessage),
        1
      );
      return {
        ...state,
        messages: arrToChange,
      };
    case "API_FETCH":
      return {
        messages: action.data,
      };
    default:
      return state;
  }
}

export default tmwsd_reducer;
