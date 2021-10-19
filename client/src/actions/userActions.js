import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_RESET,
  CLEAR_ERR,
} from "../constants/userConstants";
import axios from "axios";

//Update Profile request
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const { data } = await axios.get("/UserProf");
    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (e) {
    dispatch({ type: LOAD_USER_FAIL, payload: e.message });
  }
};
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    const config = { headers: { "Content-Type": "multipart" } };
    const { data } = await axios.put(
      `//UserProf/update/${userData.id}`,
      userData,
      config
    );
  } catch (err) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: err.response.data.message,
    });
  }
};
