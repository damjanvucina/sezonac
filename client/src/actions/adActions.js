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

import {
  searchBarOptions,
  searchBarOptionToActionType,
  searchBarOptionDefaultValue
} from "../utils/searchBarOptionToActionType";

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
      // console.log(queryObject);
      // localStorage.setItem("category", queryObject.category);

      // for (const [key, value] of Object.entries(queryObject)) {
      //   localStorage.setItem(key, value);
      //
      //   if (searchBarOptions.includes(key)) {
      //     dispatch(setSearchBarOption(searchBarOptionToActionType(key), value));
      //   }
      // }

      let localStorageValue;
      for (const optionName of searchBarOptions) {
        if (Object.keys(queryObject).includes(optionName)) {
          dispatch(
            setSearchBarOption(
              searchBarOptionToActionType(optionName),
              queryObject[optionName]
            )
          );
          localStorageValue = queryObject[optionName];
        } else {
          dispatch(
            setSearchBarOption(
              searchBarOptionToActionType(optionName),
              searchBarOptionDefaultValue(optionName)
            )
          );
          localStorageValue = searchBarOptionDefaultValue(optionName);
        }
        localStorage.setItem(optionName, localStorageValue);
      }

      localStorage.setItem("ads", JSON.stringify(res.data));
      dispatch(setCurrentAds(res.data));

      // history.push(`/oglasi?category=${queryObject.category}`);
      history.push("/oglasi");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const setSearchBarOption = (type, payload) => {
  return {
    type,
    payload
  };
};

export const setCurrentAds = ads => {
  return {
    type: FILTER_ADS,
    payload: ads
  };
};
