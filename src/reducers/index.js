import { FETCH_TODOS, CREATE_TODO } from "../actions/types";

const initialState = {
  data: [] 
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, data: action.payload };
    case CREATE_TODO:
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
}
