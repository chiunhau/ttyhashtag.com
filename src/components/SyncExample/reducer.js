let init = {
  times: 0
}

export default (state = init, action) => {
  switch (action.type) {
    case 'INCREMENT_TIME':
      return {...state, times: state.times + 1}

    case 'DECREMENT_TIME':
      return {...state, times: state.times - 1}

    default:
      return state
  }
}
