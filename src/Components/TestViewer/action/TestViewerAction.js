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



const urlResult = "http://localhost:4000/createResult";
const urlAnswers = "http://localhost:4000/updateAnswers";
const urlEndTest = "http://localhost:4000/endTest";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};

export async function createResultOnServer(result){
    await axios.post(urlResult, JSON.stringify(result), {headers: headers})
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export async function sendAnswerToServer(result,answersUser){
    await axios.post(urlAnswers, {idUser: result.idUser, idTest: result.idTest,answersUser: answersUser},
         {headers: headers})
    .then(res => console.log(res))
    .catch(err => console.log(err));
}


export function createQuestion(typeQuestion, param, userAnswers, result){
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

export function createArrayQuestions(typeQuestions, countQuestions, params, result){
    let arrayQuestion = [];
    //console.log(params);
    for (let i = 0; i < countQuestions; i++)
        arrayQuestion.push(createQuestion(typeQuestions[i], params[i], result));
    return arrayQuestion;
}

export async function sendAnswer(answers, countAttempts, setCountAttempts, setIsDisabledButton){
    countAttempts--;
    if (countAttempts === 0)
        setIsDisabledButton(true);
    setCountAttempts(countAttempts);
    await sendAnswerToServer(answers);
}

export function createArrayTypeQuesttion(questions){
    let result = []
    for (let i = 0; i < questions.length; i++)
        result.push(questions[i].type);
    //console.log(result);
    return result;
}

export async function endTest(result){
    await axios.post(urlEndTest, JSON.stringify(result), {headers: headers})
    .then(res => console.log(res))
    .catch(err => console.log(err))
}