import rootReducer from './rootReducer';

var redux = require('redux');
var testReducer = require('./testReducer');

var reducer = redux.combineReducers({testReducer, rootReducer});

export default reducer;
