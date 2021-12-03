var data = {
    err: null,
    testStr: ""
};

var test = (state = data, action) =>{
    switch (action.type) {
      case "CHANGE_TEST_STR":
        return {...state, testStr:action.data};
        break;
      default: return state;
  
    }
  }
  module.exports = test;