import 'antd/dist/antd.css'
import React, { useState } from 'react';
import { Button, Layout,Affix, Tabs } from 'antd';
import GroupButtons from './GroupButtons';
import EditorQuestions from './Questions/EditorQuestions'
import MenuSwitchSettings from './MenuSwitchSettings'
import Viewer from './Viewer'
import TestJson from './TestJson'
import QuestionJson from './QuestionJson'
import axios from 'axios';
import { AnswerRequiredError } from 'survey-react';
const urlEditor = "http://localhost:4000/editorTest";
const urlTest = "http://localhost:4000/tests";
const urlTestId = "http://localhost:4000/testId";
const urlCreateTest = "http://localhost:4000/createTest";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};


async function saveTest(data, isFirstSave){
    let result;
    console.log(JSON.stringify(data));
    console.log(isFirstSave);
    if (isFirstSave){
        await axios.post(urlCreateTest, JSON.stringify(data), {headers: headers})
        .then((res) => console.log(res) )
        .catch((err) => console.log(err));
    }
    else{
        await axios.post(urlEditor, JSON.stringify(data), {headers: headers})
        .then((res) => console.log(res) )
        .catch((err) => console.log(err));
    }
    console.log(result);
}

async function isFirstSaveTest(idUser, idTest){
    let result;
    await axios.post(urlTest,  JSON.stringify({idUser: idUser, idTest: idTest}), {headers: headers})
    .then((res) =>  result = res )
    .catch((err) => console.log(err));
    console.log(result.data);
    return result.data === "OK" ? true : false;
}

async function generateTestId(idUser){
    let result;
    await axios.post(urlTestId, JSON.stringify({idUser: idUser}))
    .then((res) => result = res)
    .catch((err) => console.log(err));
    if (result.data.length === 0){
        return 1;
    }
    else{
        let arr = []
        for (let i = 0; i < result.data.length; i++)
            arr.push(result.data[i].testId)
        return Math.max(...arr) + 1;
    }
}

 function TestEditor(props){
    const test = new TestJson();
    console.log(props.user);
    test.idUser = props.user;
    let testId = 0;
    return(
        <Layout>
            <Layout.Content>
                <Tabs centered> 
                    <Tabs.TabPane tab="Настройки теста" key="1">
                        <MenuSwitchSettings test = {test}/>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Редактор вопросов" key="2">
                        <EditorQuestions test = {test}/>
                    </Tabs.TabPane>
                </Tabs>
            </Layout.Content>
            <Layout.Footer>
                <Affix offsetBottom = {10}>
                     <Button type="primary" onClick = {async() => {
                        let condition = await isFirstSaveTest(props.user, testId);
                        if (condition){
                            testId = await generateTestId(props.user);
                            test.idTest = testId;
                        }
                        await saveTest(test, condition);
                     }}>
                        Сохранить
                        {new Date(Date.now() + 5000).getMinutes()}
                    </Button>
                </Affix>
            </Layout.Footer>
        </Layout>
    )
}




export default TestEditor;