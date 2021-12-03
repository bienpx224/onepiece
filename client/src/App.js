import React from "react";
import {
  BrowserRouter,
  useNavigate,
  Routes,
  Route,
  Navigate 
} from "react-router-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Home from "./components/Home";
import Test from "./components/Test";
import reducer from "./store/reducer/reducer";
import { createBrowserHistory } from "history";

const store = createStore(reducer)
const hist = createBrowserHistory()

export default function App() {
  return (
    <Provider store={store}>
    <BrowserRouter history={hist}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}