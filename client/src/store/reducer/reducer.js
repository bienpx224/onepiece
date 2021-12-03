var redux = require('redux');
var testReducer = require('./testReducer');

var reducer = redux.combineReducers({testReducer});

 module.exports = reducer;
