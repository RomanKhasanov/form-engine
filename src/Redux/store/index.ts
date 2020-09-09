import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(applyMiddleware()));
