import * as types from '../actions/action-types';

export default (state = {
	data: [],
	currentIndex: 0
}, action) => {
	switch (action.type) {

		case types.FETCH_DATA_FULFILLED:
			return { ...state, data: action.data.carousel};
		case types.FETCH_DATA_REJECTED:
			return state;
		case types.SLIDE_SELECTED:
			return { ...state, currentIndex: action.value};
		default:
			return state;
	}
};
