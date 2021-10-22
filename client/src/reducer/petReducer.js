import {
  ALL_PET_REQUEST,
  ALL_PET_SUCCESS,
  ALL_PET_FAIL,
  CLEAR_ERR,
  PET_DETAILS_REQUEST,
  PET_DETAILS_FAIL,
  PET_DETAILS_SUCCESS,
  USER_PET_REQUEST,
  USER_PET_FAIL,
  USER_PET_SUCCESS,
  REGISTER_PET_REQUEST,
  REGISTER_PET_SUCCESS,
  REGISTER_PET_FAIL,
    BREED_INFO_REQUEST,
  BREED_INFO_SUCCESS,
  BREED_INFO_FAIL,

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
        pet: action.payload.pet,
        donatorEmail: action.payload.donatorEmail,
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
export const breedReducer = (state = { pet: [] }, action) => {
  console.log(action.type);
  switch (action.type) {
    case BREED_INFO_REQUEST:
      return {
        loading: true,
        pets: [],
      };
    case BREED_INFO_SUCCESS:
      return {
        loading: false,
        pets: action.payload.petInfos,
        filteredPetCount: action.payload.filteredPetCount,
      };
    case BREED_INFO_FAIL:
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

export const userPetReducer = (state = { pet: [] }, action) => {
  console.log(action.type);
  switch (action.type) {
    case USER_PET_REQUEST:
      return {
        loading: true,
        pets: [],
      };
    case USER_PET_SUCCESS:
      return {
        loading: false,
        pets: action.payload.pets,
        // petsCount: action.payload.petsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredPetCount: action.payload.filteredPetCount,
      };
    case USER_PET_FAIL:
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
