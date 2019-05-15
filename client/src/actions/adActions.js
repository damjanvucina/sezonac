import axios from "axios";
import {
  GET_ERRORS,
  CREATE_NEW_AD,
  FILTER_ADS,
  CHANGE_CATEGORY,
  CHANGE_SORT,
  CHANGE_REGION,
  CHANGE_FREQUENCY,
  CHANGE_CITY,
  CHANGE_AMOUNT_TO,
  CHANGE_AMOUNT_FROM
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

export const filterAds = (queryObject, history) => dispatch => {
  const queryString = require("query-string");

  axios
    .get("/oglasi?" + queryString.stringify(queryObject))
    .then(res => {
      console.log(queryObject);
      localStorage.setItem("category", queryObject.category);
      // for (const [key, value] of Object.entries(queryObject)) {
      //   localStorage.setItem(key, value);
      // }
      localStorage.setItem("ads", JSON.stringify(res.data));

      dispatch(setCurrentCategory(queryObject.category));
      dispatch(setCurrentAds(res.data));

      history.push(`/oglasi?category=${queryObject.category}`);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
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
