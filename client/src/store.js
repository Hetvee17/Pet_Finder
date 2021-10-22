import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import {
  petReducer,
  petDetailReducer,
  userPetReducer,
  petAddReducer,
  breedReducer,
} from "./reducer/petReducer";
//import { userReducer } from "./reducer/userProfReducer";

import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  pets: petReducer,
  petDetails: petDetailReducer,
  pet: petAddReducer,
  userPets: userPetReducer,
  breeds: breedReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
