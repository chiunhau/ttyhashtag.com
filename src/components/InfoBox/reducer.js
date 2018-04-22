let init = {
  isActive: false,
  activePage: 1
}

export default (state = init, action) => {
  switch (action.type) {
    case 'OPEN_INFOBOX':
      return {...state, isActive: true}
    case 'CLOSE_INFOBOX':
      return {...state, isActive: false}
    case 'SET_ACTIVE_PAGE':
      return {...state, activePage: action.pageNumber}
    default:
      return state
  }
}
