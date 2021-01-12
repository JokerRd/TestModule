import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TestEditor from './Components/TestEditor';
import TestViewer from './Components/TestViewer/TestViewer';
import TestJson from './Components/TestJson';
import QuestionJson from './Components/QuestionJson';
import StartPage from './Components/StartPage';
import MyTest from './Components/MyTest';
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"


function print(){
  console.log("Error");
}

function onComplete(survey, options){
  //Write survey results into database
  console.log("Survey results: " + JSON.stringify(survey.data));
 }

let test1 = null;

function setTest1(test){
  test1 = test;
}

function App() {
  const [user, setUser] = useState("");
  const [test, setTest] = useState(null);
  console.log(test1);
  return (
    <div className="App">
      <Switch>
        <Route path = "/startPage" component = {() => <StartPage setUser = {setUser}/>}/>
        <Route path = "/testEditor" component = {() => <TestEditor user = "test"/>}/>
        <Route path = "/tests" component = {() => <MyTest idUser = "test"  setTest = {setTest1}/>}/>
        <Route path = "/test" component = {() => <TestViewer idUser = "test"  />}/>
      </Switch>
    </div>
  );
}

export default App;
