import { CREATE_NEW_AD } from "../actions/types";

const initialState = {
  ads: [],
  ad: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_AD:
      return {
        ...state,
        ads: [action.payload, ...state.ads]
      };

    default:
      return state;
  }
}
