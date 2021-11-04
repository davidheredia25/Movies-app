import { createStore, applyMiddleware, compose, combineReducers} from "redux";
import movieReducer from "../reducers/movieReducer"; 
import favoriteReducer from "../reducers/favoriteReducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({movieReducer, favoriteReducer }), composeEnhancer(applyMiddleware(thunk)))

export default store;

