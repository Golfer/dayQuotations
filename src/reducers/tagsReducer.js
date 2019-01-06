import types from '../actions/actionTypes'
import initialState from './initialState'

const quotationsReducer = (state = initialState.tags, action)=> {
  switch (action.type) {
    case types.LOAD_RANDOM_TAGS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default quotationsReducer
