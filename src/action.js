export function addMessageAction(data) {
  return {
    type: "ADD_MESSAGE",
    data,
  };
}

export function deleteMessageAction(data) {
  return {
    type: "DELETE_MESSAGE",
    data,
  };
}
