export default function (state, action) {
  /**
   * dispatch({ type, payload }//action)
   */
  if (actions[action.type]) {
    return actions[action.type](state, action.payload)
  } else {
    return state
  }
}
const actions = {
  'NEXT_LEVEL': function (state, payload) {
    state = {
      ...state,
      level: {
        ...state.level,
        index: state.level.index < 4 ?  state.level.index + 1 : 0,
        cache: state.level.index
      }
    }
    return state
  }
}