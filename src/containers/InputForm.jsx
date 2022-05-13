import { connect } from "react-redux";
import InputFormUI from "../components/InputFormUI";
import { addMessageAction } from "../action";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addMessage: function (data) {
      dispatch(addMessageAction(data));
    },
  };
}

const connectedInputFormUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFormUI);

export default connectedInputFormUI;
