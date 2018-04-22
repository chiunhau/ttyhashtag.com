let init = {
  color: '#00f',
  brush: 30
}

export default (state = init, action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return {...state, color: action.color}
    case 'SET_BRUSH':
      return {...state, brush: action.brush}
    default:
      return state
  }
}
