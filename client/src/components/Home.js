import React from 'react';
import { connect } from "react-redux";
import Test from "./Test"
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLogin : false,
      loading: true,
      testStr : "nothing"
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.testStr){
      this.state.testStr = nextProps.testStr;
      this.setState(this.state);
    }
  }

  render(){
    return(
        <div>
            HELLO WORLD
            {this.props.testStr}
            <h2>Test component</h2>
            <Test />
        </div>
    )
  }
}

export default connect(mapStateToProps)(Home);
