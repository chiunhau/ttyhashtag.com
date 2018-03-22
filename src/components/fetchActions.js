import axios from 'axios';
import R from 'ramda';

const requestData = (config) => {
  return {
    type: 'REQUEST_DATA',
    config
  }
}

const receiveData = (config, response) => {
  if (config.customAction) {
    return {
      type: config.customAction,
      data: response.data,
      config
    }
  }

  else {
    return {
      type: 'RECEIVE_DATA',
      data: response.data,
      config
    }
  }
}

const shouldFetchData = (state, config) => {
  const findData = R.has('slug', config) ? R.find(R.propEq('slug', config.slug))(R.prop(config.key)) : R.prop(config.key);

  if (!findData(state.fetchedData) || R.isEmpty(findData(state.fetchedData))) { //no data found, go fetch it!!!
    return true
  }
  else {
    if (findData(state.fetchedData).isFetching){ //data found, but not completed,please wait!
      return false
    }
    else { //data found, and is completed, no need to fetch again, just get it.
      return false
    }
  }
}

export const fetchData = (config) => {
  return (dispatch, getState) => {
    if (shouldFetchData(getState(), config)) {
      dispatch(requestData(config))
      return axios.get(config.url)
        .then(response => dispatch(receiveData(config, response)))
        .catch(error => console.log(error))
    }
    else {
      return new Promise((resolve, reject) => {
        resolve('not fetch')
      })
    }
  }
}

export const getByKey = (key, state) => {
  return R.path(['fetchedData', key, 'data'], state) || {}
}
