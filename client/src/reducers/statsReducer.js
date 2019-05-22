import { GET_CATEGORIES_STATS } from "../actions/types";

const initialState = {
  administracija: {},
  anketiranje: {},
  ciscenje: {},
  fizickiposlovi: {},
  ljepota: {},
  prijevoz: {},
  prodaja: {},
  sportizdravlje: {},
  turizam: {},
  ugostiteljstvo: {},
  ostalo: {},
  svekategorije: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES_STATS:
      return {
        ...state,
        administracija: action.payload["administracija"],
        anketiranje: action.payload["anketiranje"],
        ciscenje: action.payload["ciscenje"],
        fizickiposlovi: action.payload["fizickiposlovi"],
        ljepota: action.payload["ljepota"],
        prijevoz: action.payload["prijevoz"],
        prodaja: action.payload["prodaja"],
        sportizdravlje: action.payload["sportizdravlje"],
        turizam: action.payload["anketiranje"],
        ugostiteljstvo: action.payload["ugostiteljstvo"],
        ostalo: action.payload["ostalo"],
        svekategorije: action.payload["svekategorije"]
      };

    default:
      return state;
  }
}
