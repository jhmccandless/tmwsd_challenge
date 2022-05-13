import { configureStore } from "@reduxjs/toolkit";
import tmwsd_reducer from "./reducer";

const store = configureStore({ reducer: tmwsd_reducer });

export default store;
