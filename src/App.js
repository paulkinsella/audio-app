import React from "react";
import './App.css';
import HomePage from './Homepage/HomePage';
import Headphones from './Headphones/Headphones';
import Speakers from './Speakers/Speakers';
import Earphones from './Earphones/Earphones';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

const Main = () => {
  return <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/speakers' component={Speakers}></Route>
        <Route exact path='/headphones' component={Headphones}></Route>
        <Route exact path='/earphones' component={Earphones}></Route>
      </Switch>
    </BrowserRouter></>;
};



export default App;
