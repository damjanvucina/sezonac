import axios from "axios";
import { GET_CATEGORIES_STATS } from "./types";

export const getCategoriesStats = () => dispatch => {
  axios.get("/statistika").then(res => {
    localStorage.setItem("categoriesStats", JSON.stringify(res.data));
    dispatch(setCategoriesStats(res.data));
  });
};

export const setCategoriesStats = categoriesStats => {
  return {
    type: GET_CATEGORIES_STATS,
    payload: categoriesStats
  };
};
