import types from '../actions/actionTypes'
import initialState from './initialState'

const quotationsReducer = (state = initialState.quotations, action)=> {
  switch (action.type) {
    case types.LOAD_RANDOM_QUOTATIONS_SUCCESS:
      // console.log(action.payload, '------!')
      return action.payload;
    default:
      return state;
  }
}

export default quotationsReducer
