import 'antd/dist/antd.css'
import React, { useState, useEffect } from 'react';
import { Button, Layout, Tabs, Statistic, Affix, Form, Radio, Spin } from 'antd';
import axios from 'axios';
import "survey-react/survey.css";
import ViewSAQuestion from './ViewQuestion/ViewSAQuestion';
import ViewMAQuestion from './ViewQuestion/ViewMAQuestion';
import ViewTextQuestion from './ViewQuestion/ViewTextQuestion';
import ResultAnswerJson from '../ResultAnswerJson';
import QuestionJson from '../QuestionJson';


function EndTestButton(props){
    return(
        <Button onClick = {props.endTest}>
            Закончить тест
        </Button>
    )
}

export default EndTestButton;