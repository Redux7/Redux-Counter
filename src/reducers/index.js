import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log("in reduser" + JSON.stringify(state.count))
      return { ...state, count: 2 }
    case DECREMENT:
      console.log("in reduser")
    // Fill in the body of this case
    default:
      return state;
  }
};
