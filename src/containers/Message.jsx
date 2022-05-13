import MessagesUI from "../components/MessagesUI";
import { connect } from "react-redux";
import { deleteMessageAction } from "../action";

function mapStateToProps(state) {
  return {
    messages: state.messages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteMessage: function (data) {
      dispatch(deleteMessageAction(data));
    },
    fetchAPI: function (data) {
      dispatch(fetchAPIDataAction(data));
    },
  };
}

const connectedMessagesUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesUI);

export default connectedMessagesUI;
