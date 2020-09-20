import apodReducer from "./apodReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import NeowsReducer from "./NeowsReducer";
import MRPReducer from "./MRPReducer";


let reducers = combineReducers({
    apod: apodReducer,
    neows: NeowsReducer,
    mrp: MRPReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;