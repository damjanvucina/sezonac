import {
  CHANGE_AMOUNT_FROM,
  CHANGE_AMOUNT_TO,
  CHANGE_CATEGORY,
  CHANGE_CITY,
  CHANGE_FREQUENCY,
  CHANGE_REGION,
  CHANGE_SORT
} from "../actions/types";

export const searchBarOptionToActionType = option => {
  switch (option) {
    case "amountFrom":
      return CHANGE_AMOUNT_FROM;

    case "amountTo":
      return CHANGE_AMOUNT_TO;

    case "category":
      return CHANGE_CATEGORY;

    case "city":
      return CHANGE_CITY;

    case "frequency":
      return CHANGE_FREQUENCY;

    case "region":
      return CHANGE_REGION;

    case "sort":
      return CHANGE_SORT;
  }
};

export const searchBarOptions = [
  "amountFrom",
  "amountTo",
  "category",
  "city",
  "frequency",
  "region",
  "sort"
];
