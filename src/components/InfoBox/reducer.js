let init = {
  isActive: false
}

export default (state = init, action) => {
  switch (action.type) {
    case 'OPEN_INFOBOX':
      return {...state, isActive: true}
    case 'CLOSE_INFOBOX':
      return {...state, isActive: false}

    default:
      return state
  }
}
