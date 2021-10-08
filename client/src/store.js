import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { petReducer ,petDetailReducer} from "./reducer/petReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  pets: petReducer,
  petDetails: petDetailReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
