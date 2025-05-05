import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducers/index.js";

export const store = createStore(reducer);
