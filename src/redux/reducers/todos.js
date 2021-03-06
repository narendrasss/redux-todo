import { ADD_TODO } from '../actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return [...state, { id, content, isCompleted: false }];
    }
    default:
      return state;
  }
}
