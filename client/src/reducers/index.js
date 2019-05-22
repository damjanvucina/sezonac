import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorsReducer from "./errorsReducer";
import adReducer from "./adReducer";
import statsReducer from "./statsReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  ads: adReducer,
  stats: statsReducer
});
