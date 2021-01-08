import logo from './logo.svg';
import './App.css';
import ButtonBase from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import TestEditor from './Components/TestEditor';
import MenuSwitchSettings from './Components/MenuSwitchSettings';
import BasicSettings from './Components/BasicSettings';
import AdvancedSettings from './Components/AdvancedSettings';
import SingleAnswerQuestion from './Components/Questions/SingleAnswerQuestion';
import MultiAnswerQuestion from './Components/Questions/MultiAnswerQuestion';
import FileAnswerQuestion from './Components/Questions/FileAnswerQuestion';
import TextAnswerQuestion from './Components/Questions/TextAnswerQuestion';

function print(){
  console.log("Error");
}

function onComplete(survey, options){
  //Write survey results into database
  console.log("Survey results: " + JSON.stringify(survey.data));
 }

function App() {
  return (
    <div className="App">
      <TestEditor />
    </div>
  );
}

export default App;
