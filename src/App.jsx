import React, { useEffect } from "react";
import "./App.css";

import InputForm from "./containers/InputForm";
import Message from "./containers/Message";

function App() {
  useEffect(() => {
    localStorage.clear();
  });
  return (
    <div className="App">
      <header className="App-header">
        <InputForm />
        <Message />
      </header>
    </div>
  );
}

export default App;
