import axios from "axios";
import { GET_ERRORS, CREATE_NEW_AD, FILTER_ADS } from "./types";
import { getCategoriesStats } from "./statsActions";

import {
  searchBarOptions,
  searchBarOptionToActionType,
  searchBarOptionDefaultValue
} from "../utils/searchBarOptionToActionType";

export const createNewAd = (adData, history) => dispatch => {
  axios
    .post("/oglasi/novi", adData)
    .then(res => {
      axios
        .post(
          `/statistika?category=${adData.category}&amount=${
            adData.amount
          }&frequency=${adData.frequency}`
        )
        .catch(err => res.json(err));

      axios
        .post(
          `/statistika?category=Sve kategorije&amount=${
            adData.amount
          }&frequency=${adData.frequency}`
        )
        .catch(err => res.json(err));

      getCategoriesStats();

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
        localStorage.setItem(optionName, JSON.stringify(localStorageValue));
      }

      localStorage.setItem("ads", JSON.stringify(res.data));
      dispatch(setCurrentAds(res.data));

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
