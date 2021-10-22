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
  USER_PET_REQUEST,
  USER_PET_FAIL,
  USER_PET_SUCCESS,
  BREED_INFO_REQUEST,
  BREED_INFO_SUCCESS,
  BREED_INFO_FAIL,
} from "../constants/petConstants";
import axios from "axios";

export const registerPet = (petData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_PET_REQUEST });

    const config = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    };

    const { data } = await axios.post("/pets/add", petData, config);

    dispatch({ type: REGISTER_PET_SUCCESS, payload: data.pet });
  } catch (error) {
    dispatch({
      type: REGISTER_PET_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getPet =
  (keyword = "", currentPage = 1, catagory) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ALL_PET_REQUEST,
      });
      let link = `/pets?keyword=${keyword}&page=${currentPage}`;
      if (catagory) {
        link = `/pets?keyword=${keyword}&page=${currentPage}&catagory=${catagory}`;
      }
      const { data } = await axios.get(link);
      if (data) {
        dispatch({
          type: ALL_PET_SUCCESS,
          payload: data,
        });
        return;
      } else throw new Error();
    } catch (error) {
      dispatch({
        type: ALL_PET_FAIL,
        payload: error,
      });
    }
  };

export const getBreeds =
  (breed) =>
  async (dispatch) => {
    try {
      dispatch({
        type: BREED_INFO_REQUEST,
      });
      let link = `/Breed`;
      if (breed) {
        link = `/Breed?breed=${breed}`;
      }
      const { data } = await axios.get(link);
      if (data) {
        dispatch({
          type: BREED_INFO_SUCCESS,
          payload: data,
        });
        return;
      } else throw new Error();
    } catch (error) {
      dispatch({
        type: BREED_INFO_FAIL,
        payload: error,
      });
    }
  };

export const getUserPet =
  (keyword = "", currentPage = 1, catagory) =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_PET_REQUEST,
      });
      let link = `/Uploadedpets?keyword=${keyword}&page=${currentPage}`;
      if (catagory) {
        link = `/Uploadedpets?keyword=${keyword}&page=${currentPage}&catagory=${catagory}`;
      }
      const { data } = await axios.get(link);
      if (data) {
        dispatch({
          type: USER_PET_SUCCESS,
          payload: data,
        });
        return;
      } else throw new Error();
    } catch (error) {
      dispatch({
        type: USER_PET_FAIL,
        payload: error,
      });
    }
  };

//petdetails
export const getPetDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PET_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`/pet/${id}`);
    if (data) {
      dispatch({
        type: PET_DETAILS_SUCCESS,
        payload: data,
      });
      return;
    } else throw new Error();
  } catch (error) {
    dispatch({
      type: PET_DETAILS_FAIL,
      payload: {},
    });
  }
};

//clearing all errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERR });
};
