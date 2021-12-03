import React from 'react';
import { connect } from "react-redux";
import {change_testStr} from "../store/action/testAction"

class Test extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLogin : false,
      loading: true,
      testStr : "nothing"
    }
  }

  handleLogin() {
    let {dispatch} = this.props;
    dispatch(change_testStr("login"))
  }

  render(){
    return(
      <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />{" "}
      <button onClick={handleLogin}>Login</button>
    </div>
    )
  }
}

export default connect(mapStateToProps)(Test);
