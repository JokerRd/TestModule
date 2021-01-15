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
import TestViewerModel from './TestViewerModel'
import {createResultOnServer, createArrayQuestions, createArrayTypeQuesttion} from '../action/TestViewerAction';

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};

const urlDataTest = "http://localhost:4000/doTest";

function TestViewer(props){
    const [tests, setTests] = useState(null);
    const results = new ResultAnswerJson();
    results.idUser = props.idUser;
    let typeQuestion;
    let questions;
    useEffect(()=> {
        async function getData(){
            await axios.post(urlDataTest, {idUser: props.idUser, status: "active"}, headers)
            .then((res) => setTests(res.data))
            .catch((err)=> console.log(err));
            console.log(tests);
            await createResultOnServer(results);
        }
        getData();
    }, [])
    let time = Date.now() + 5000000;
    if (tests != null){
        results.idTest = tests.idTest;
        results.questions = tests.questions;
        results.countPoint = test.questions.reduce((accum, nextItem) => accum + nextItem.countPoint, 0);
        results.answersUser = new Array(tests.questions.length);
        typeQuestion = createArrayTypeQuesttion(tests.questions);
        questions = createArrayQuestions(typeQuestion, tests.questions.length, tests.questions, results);
    }
    let content = tests === null ? <Spin />: 
    <TestViewerModel time = {time} questions = {questions} results = {results} />
    return(
        <div>
            {content}
        </div>
    )
}

export default TestViewer;