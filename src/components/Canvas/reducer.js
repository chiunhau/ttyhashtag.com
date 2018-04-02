let init = {
  color: '#00f'
}

export default (state = init, action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return {...state, color: action.color}
    default:
      return state
  }
}
