import { FETCH_POSTS,FETCH_POSTS2, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  items2: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
     
      case FETCH_POSTS2:
      return {
        ...state,
        items2: action.payload
      };
      
   
    default:
      return state;
  }
}
