import {createStore,applyMiddleware,compose,combineReducers} from "redux";
import thunk from "redux-thunk";
import {getProductsReducer} from "./reducers/getProductReducer";


const initialState={};
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(combineReducers({
    products: getProductsReducer

}),
initialState,
composeEnhancer(applyMiddleware(thunk))
);
export default store;