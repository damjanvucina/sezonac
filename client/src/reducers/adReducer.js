import { CREATE_NEW_AD, FILTER_ADS, CHANGE_CATEGORY } from "../actions/types";

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

    case CHANGE_CATEGORY:
      return {
        ...state,
        category: action.payload
      };

    default:
      return state;
  }
}
