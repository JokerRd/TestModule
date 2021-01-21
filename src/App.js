import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TestEditor from './Components/TestEditior/model/TestEditor';
import TestViewer from './Components/TestViewer/model/TestViewer';
import StartPage from './Components/StartPage';
import ResultView from './Components/ResultViewer/ResultView';
import MyEditor from './Draft'
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

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
        <Route path = "/" component = {() => <TestEditor />}/>
        <Route path = "/test" component = {() => <TestViewer idUser = "test"  />}/>
        <Route path = "/results" component = {() => <ResultView idUser = "test" />} />
      </Switch>
    </div>
  );
}

export default App;
