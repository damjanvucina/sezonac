import {
  CREATE_NEW_AD,
  FILTER_ADS,
  CHANGE_CATEGORY,
  CHANGE_AMOUNT_FROM,
  CHANGE_AMOUNT_TO,
  CHANGE_CITY,
  CHANGE_FREQUENCY,
  CHANGE_REGION,
  CHANGE_SORT
} from "../actions/types";

const initialState = {
  ads: [],
  ad: {},
  category: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_AD:
      return {
        ...state,
        ads: [action.payload, ...state.ads]
      };

    case FILTER_ADS:
      return {
        ...state,
        ads: action.payload
      };

    case CHANGE_AMOUNT_FROM:
      return {
        ...state,
        amountFrom: action.payload
      };

    case CHANGE_AMOUNT_TO:
      return {
        ...state,
        amountTo: action.payload
      };

    case CHANGE_CATEGORY:
      return {
        ...state,
        category: action.payload
      };

    case CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };

    case CHANGE_FREQUENCY:
      return {
        ...state,
        frequency: action.payload
      };

    case CHANGE_REGION:
      return {
        ...state,
        region: action.payload
      };

    case CHANGE_SORT:
      return {
        ...state,
        sort: action.payload
      };

    default:
      return state;
  }
}
