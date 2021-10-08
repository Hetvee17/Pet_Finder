import {
  ALL_PET_REQUEST,
  ALL_PET_SUCCESS,
  ALL_PET_FAIL,
  CLEAR_ERR,
  PET_DETAILS_REQUEST,
  PET_DETAILS_FAIL,
  PET_DETAILS_SUCCESS,
} from "../constants/petConstants";

export const petDetailReducer = (state = { pet: {} }, action) => {
  switch (action.type) {
    case PET_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PET_DETAILS_SUCCESS:
      return {
        loading: false,
        pet: action.payload,
      };
    case PET_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
export const petReducer = (state = { pet: [] }, action) => {
  console.log(action.type);
  switch (action.type) {
    case ALL_PET_REQUEST:
      return {
        loading: true,
        pets: [],
      };
    case ALL_PET_SUCCESS:
      return {
        loading: false,
        pets: action.payload.pets,
        petsCount: action.payload.petscount,
      };
    case ALL_PET_FAIL:
      return {
        loading: false,
        error: action.payload,
        petscount: action.payload.petscount,
      };
    case CLEAR_ERR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
