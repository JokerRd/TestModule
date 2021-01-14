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

const urlResult = "http://localhost:4000/createResult";
const urlAnswers = "http://localhost:4000/updateAnswers";
const urlDataTest = "http://localhost:4000/doTest";
const urlEndTest = "http://localhost:4000/endTest";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};

async function createResultOnServer(result){
    await axios.post(urlResult, JSON.stringify(result), {headers: headers})
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

async function sendAnswerToServer(result,answersUser){
    await axios.post(urlAnswers, {idUser: result.idUser, idTest: result.idTest,answersUser: answersUser},
         {headers: headers})
    .then(res => console.log(res))
    .catch(err => console.log(err));
}


function createQuestion(typeQuestion, param, userAnswers, result){
    switch (typeQuestion) {
        case "single":
            return <ViewSAQuestion param = {param} sendAnswer = {sendAnswer} userAnswers = {userAnswers} result = {result}/>;
        case "multi":
            return <ViewMAQuestion param = {param} sendAnswer = {sendAnswer} userAnswers = {userAnswers} result = {result}/>;
        case "text":
            return <ViewTextQuestion param = {param} sendAnswer = {sendAnswer} userAnswers = {userAnswers} result = {result}/>;
        default:
            break;
    }
}

function createArrayQuestions(typeQuestions, countQuestions, params, result){
    let arrayQuestion = [];
    //console.log(params);
    for (let i = 0; i < countQuestions; i++)
        arrayQuestion.push(createQuestion(typeQuestions[i], params[i], result));
    return arrayQuestion;
}

async function sendAnswer(answers, countAttempts, setCountAttempts, setIsDisabledButton){
    countAttempts--;
    if (countAttempts === 0)
        setIsDisabledButton(true);
    setCountAttempts(countAttempts);
    await sendAnswerToServer(answers);
}

function createArrayTypeQuesttion(questions){
    let result = []
    for (let i = 0; i < questions.length; i++)
        result.push(questions[i].type);
    //console.log(result);
    return result;
}

async function endTest(result){
    await axios.post(urlEndTest, JSON.stringify(result), {headers: headers})
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

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
    let qus = tests === null ? <Spin />: 
    <Layout>
        <Layout.Header>
            Название теста
        </Layout.Header>
        <Layout.Content>
            <Affix offsetBottom = {10}>
                <Statistic.Countdown title="Countdown" value = {time} />
            </Affix>
            <Form>
            </Form>
                {questions}
            <Button onClick = {async (e) => {
                await endTest(results);
                document.location = "/";
            }}>
                Закончить тест
            </Button>
        </Layout.Content>
        <Layout.Footer>
        </Layout.Footer>
    </Layout>;
    return(
        <div>
            {qus}
        </div>
    )
}

export default TestViewer;