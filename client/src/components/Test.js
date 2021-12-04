import React from 'react';
import { connect } from "react-redux";
import {change_testStr} from "../store/action/testAction"

class Test extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLogin : false,
      loading: true,
      testStr : "test"
    }
  }

  handleLogin (){
    console.log(this.props)
    let {dispatch} = this.props;
    dispatch(change_testStr("changeState"))
  }

  render(){
    return(
      <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={this.state.testStr}
      />{" "}
      <button onClick={this.handleLogin.bind(this)}>Login</button>
    </div>
    )
  }
}

export default connect( function(state){
  return {};
})(Test);
