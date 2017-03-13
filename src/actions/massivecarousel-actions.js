import * as types from './action-types';
import axios from 'axios';

export const fetchData = () => {
	return function (dispatch) {
		axios.get('/data/data.json')
			.then((response) => {
				dispatch({ type: types.FETCH_DATA_FULFILLED, data: response.data })
			})
			.catch((err) => {
				dispatch({ type: types.FETCH_DATA_REJECTED, data: err })
			})
	}
}

export const slideSelected = (value) => {
  return {
    type: types.SLIDE_SELECTED,
    value
  };
}