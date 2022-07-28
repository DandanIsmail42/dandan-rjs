
import { combineReducers, compose, createStore } from "redux";
import counterReducers from "./Features/Counter/reducer";

let rootReducers = combineReducers({
    counter: counterReducers
});

// eslint-disable-next-line no-unused-vars
const composeEnhancers = window._REDUX_DEVTOOL_EXTENTION_COMPOSE_ || compose;
    let store = createStore(rootReducers, composeEnhancers());
export default store;