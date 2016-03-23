// client/reducers/modal.js

import * as types from '../actions/actionTypes';

const initialState = {
  show: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MODAL:
      return Object.assign({}, state, { show: true });
    case types.HIDE_MODAL:
    case '@@router/LOCATION_CHANGE':
      return initialState;
    default:
      return state;
  }
};
