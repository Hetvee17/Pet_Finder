import {
  ALL_PET_REQUEST,
  ALL_PET_SUCCESS,
  ALL_PET_FAIL,
  CLEAR_ERR,
  PET_DETAILS_REQUEST,
  PET_DETAILS_FAIL,
  PET_DETAILS_SUCCESS,
  REGISTER_PET_REQUEST,
  REGISTER_PET_SUCCESS,
  REGISTER_PET_FAIL,
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
        // petsCount: action.payload.petsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredPetCount: action.payload.filteredPetCount,
      };
    case ALL_PET_FAIL:
      return {
        loading: false,
        error: action.payload,
        // petscount: action.payload.petscount,
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

export const petAddReducer = (state = { pet: {} }, action) => {
  switch (action.type) {
    case REGISTER_PET_REQUEST:
      return {
        loading: true,
        isAdded: false,
      };
    case REGISTER_PET_SUCCESS:
      return {
        ...state,
        loading: false,
        isAdded: true,
        pet: action.payload,
      };
    case REGISTER_PET_FAIL:
      return {
        ...state,
        loading: false,
        isAdded: false,
        pet: null,
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
