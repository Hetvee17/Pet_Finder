import {
  ALL_PET_REQUEST,
  ALL_PET_SUCCESS,
  ALL_PET_FAIL,
  CLEAR_ERR,
  PET_DETAILS_REQUEST,
  PET_DETAILS_FAIL,
  PET_DETAILS_SUCCESS,
} from "../constants/petConstants";
import axios from "axios";

export const getPet =
  (keyword = "" , currentPage=1) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ALL_PET_REQUEST,
      });
      const { data } = await axios.get(`/pets?keyword=${keyword}&page=${currentPage}`);
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
        payload: data.pets,
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
