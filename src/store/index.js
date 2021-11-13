import { createStore } from "redux";
import rootReducer from '../reducers/index';
//import CounterReducer from "../reducers/counterReducer";

const store = createStore(rootReducer);


export default store;