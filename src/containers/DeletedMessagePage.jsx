import { connect } from "react-redux";
import DeletedMessagePageUI from "../components/DeletedMessagePageUI";

function mapStateToProps(state) {
  console.log(state);
  return {
    messages: state.messages,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const connectedDeletedMessagePageUI = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeletedMessagePageUI);

export default connectedDeletedMessagePageUI;
