import axios from "axios";
import {
  GET_ERRORS,
  CREATE_NEW_AD,
  FILTER_ADS,
  CHANGE_CATEGORY
} from "./types";

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

export const filterAds = (category, history) => dispatch => {
  axios
    .get(`/oglasi?category=${category}`)
    .then(res => {
      localStorage.setItem("category", category);
      localStorage.setItem("ads", JSON.stringify(res.data));

      dispatch(setCurrentCategory(category));
      dispatch(setCurrentAds(res.data));

      history.push(`/oglasi?category=${category}`);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
  // console.log("kategorija je ");
  // console.log(category);
};

export const setCurrentCategory = category => {
  return {
    type: CHANGE_CATEGORY,
    payload: category
  };
};

export const setCurrentAds = ads => {
  return {
    type: FILTER_ADS,
    payload: ads
  };
};
