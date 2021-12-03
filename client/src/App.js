
import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {BrowserRouter as Router,Route,Switch,Ridirect,hashHistory,Redirect,NavLink} from 'react-router-dom';

import Home from 'Home'
var {Provider} = require('react-redux');
var store = require('./store/store');


class App extends React.Component{
     render(){
        return(

            <Provider store={store}>
            <Router history={hashHistory}>
                  <Layout>
                   <Switch>
                      <Route  exact path="/" component={Home}/>
                      <Route  path="/home" component={Home}/>
                      <Route render={function(){
                          return <Home />
                      } } />
                    </Switch>
                  </Layout>
            </Router>
            </Provider>
    )
  }
}

export default App;
