import 'antd/dist/antd.css'
import React, { useState, useEffect } from 'react';
import { Button, Layout,Affix, Tabs, Spin } from 'antd';
import EditorQuestions from './Questions/EditorQuestions'
import MenuSwitchSettings from './MenuSwitchSettings'
import axios from 'axios';

const urlEditor = "http://localhost:4000/editorTest";
const urlTest = "http://localhost:4000/tests";
const urlTestId = "http://localhost:4000/testId";
const urlCreateTest = "http://localhost:4000/createTest";
const urlGetTest = "http://localhost:4000/getTest";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};


export async function saveTest(data){
    let result;
    await axios.post(urlEditor, JSON.stringify(data), {headers: headers})
    .then((res) => console.log(res) )
    .catch((err) => console.log(err));
    console.log(result);
}

export async function createTestOnServer(test){
    await axios.post(urlCreateTest, JSON.stringify(test), {headers: headers})
    .then((res) => console.log(res) )
    .catch((err) => console.log(err));
}

export async function getTestFromServer(idUser, idTest){
    let result;
    await axios.post(urlGetTest, {idUser: idUser, idTest: idTest, status: "redacted"}, {headers: headers})
    .then((res) => result = res)
    .catch((err) => console.log(err));
    return result;
}

export async function isFirstSaveTest(idUser, idTest){
    let result;
    await axios.post(urlTest,  JSON.stringify({idUser: idUser, idTest: idTest}), {headers: headers})
    .then((res) =>  result = res )
    .catch((err) => console.log(err));
    console.log(result.data);
    return result.data === "OK" ? true : false;
}