import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";




// create storetakes all reducers, initial state and a middle ware 
// thunk helps us to execute asynchronous functions
export const store = createStore(reducers, {}, applyMiddleware(thunk))