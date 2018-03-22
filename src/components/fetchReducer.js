const init = {
  articles: []
}

const fetchReducer = (state = init, action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return {...state, [action.config.key]: {isFetching: true}}
    case 'RECEIVE_DATA':
      return {...state, [action.config.key]: {isFetching: false, data: action.data}}
    default:
      return state
  }
}

export default fetchReducer
