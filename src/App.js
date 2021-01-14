import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TestEditor from './Components/TestEditor';
import TestViewer from './Components/TestViewer/TestViewer';
import TestJson from './Components/TestJson';
import QuestionJson from './Components/QuestionJson';
import StartPage from './Components/StartPage';
import MyTest from './Components/MyTest';
import ResultView from './Components/ResultView';
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"



function App() {
  const [user, setUser] = useState("");
  const [test, setTest] = useState(null);
  return (
    <div className="App">
      <Switch>
        <Route path = "/startPage" component = {() => <StartPage setUser = {setUser}/>}/>
        <Route path = "/testEditor" component = {() => <TestEditor user = "test"/>}/>
        <Route path = "/tests" component = {() => <MyTest idUser = "test"  setTest = {setTest}/>}/>
        <Route path = "/test" component = {() => <TestViewer idUser = "test"  />}/>
        <Route path = "/results" component = {() => <ResultView idUser = "test" />} />
      </Switch>
    </div>
  );
}

export default App;
