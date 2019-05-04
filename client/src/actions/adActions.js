import axios from "axios";
import { GET_ERRORS, CREATE_NEW_AD } from "./types";

export const createNewAd = (adData, history) => dispatch => {
  axios
    .post("/oglasi/novi", adData)
    .then(res => {
      console.log("oglas je");
      console.log(res.data);
      dispatch({
        type: CREATE_NEW_AD,
        payload: res.data
      });
      history.push("/");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
