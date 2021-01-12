import 'antd/dist/antd.css'
import React, { useState, useEffect } from 'react';
import { Button, Layout, Tabs, Statistic, Affix, Form, Radio, Spin } from 'antd';
import axios from 'axios';
import "survey-react/survey.css";
import ViewSAQuestion from './ViewQuestion/ViewSAQuestion';
import ViewMAQuestion from './ViewQuestion/ViewMAQuestion';
import ViewTextQuestion from './ViewQuestion/ViewTextQuestion';
import QuestionJson from '../QuestionJson';


function createQuestion(typeQuestion, param, userAnswers){
    switch (typeQuestion) {
        case "single":
            return <ViewSAQuestion param = {param} sendAnswer = {sendAnswer} userAnswers = {userAnswers}/>;
        case "multi":
            return <ViewMAQuestion param = {param} sendAnswer = {sendAnswer} userAnswers = {userAnswers}/>;
        case "text":
            return <ViewTextQuestion param = {param} sendAnswer = {sendAnswer} userAnswers = {userAnswers}/>;
        default:
            break;
    }
}

function createArrayQuestions(typeQuestions, countQuestions, params){
    let arrayQuestion = [];
    //console.log(params);
    for (let i = 0; i < countQuestions; i++)
        arrayQuestion.push(createQuestion(typeQuestions[i], params[i]));
    return arrayQuestion;
}

function sendAnswer(answer, countAttempts, setCountAttempts, setIsDisabledButton){
    countAttempts--;
    if (countAttempts === 0)
        setIsDisabledButton(true);
    setCountAttempts(countAttempts);
}

function createMap(){

}

function createArrayTypeQuesttion(questions){
    let result = []
    for (let i = 0; i < questions.length; i++)
        result.push(questions[i].type);
    //console.log(result);
    return result;
}

const url = "http://localhost:4000/doTest";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};

function TestViewer(props){
    const [tests, setTests] = useState(null);
    let typeQuestion;
    let questions;
    useEffect(()=> {
        async function getData(){
            await axios.post(url, {idUser: props.idUser, status: "active"}, headers)
            .then((res) => setTests(res.data))
            .catch((err)=> console.log(err));
            console.log(tests);
        }
        getData();
    }, [])
    let time = Date.now() + 5000000;
    if (tests != null){
        typeQuestion = createArrayTypeQuesttion(tests.questions);
        questions = createArrayQuestions(typeQuestion, tests.questions.length, tests.questions);
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
            <Button>
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