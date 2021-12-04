import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {change_testStr} from "../store/action/testAction"

const Test = (props)=>{
  const [testStr, setTestStr] = useState("Test")
  const dispatch = useDispatch();
  const handleLogin = ()=>{
    console.log("handleLogin")
    dispatch(change_testStr("changeState"))
  }

    return(
      <div>
        <h1>Login : Text from home: {props.text}</h1>
        
        <input
          type="text"
          placeholder="Username"
          defaultValue={testStr}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    )
}

export default (Test);
