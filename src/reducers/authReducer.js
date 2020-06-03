import { SET_CURRENT_USER, USER_LOADING } from "../actions/types";

const isEmpty = require("is-empty");
 // previous state of the application.
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};
  // reducers accept a previous state and return a new state.
export default function (state = initialState, action) {
  console.log("Action:", action)
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading:false
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
