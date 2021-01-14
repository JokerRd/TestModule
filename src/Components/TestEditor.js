import 'antd/dist/antd.css'
import React, { useState, useEffect } from 'react';
import { Button, Layout,Affix, Tabs, Spin } from 'antd';
import GroupButtons from './GroupButtons';
import EditorQuestions from './Questions/EditorQuestions'
import MenuSwitchSettings from './MenuSwitchSettings'
import Viewer from './Viewer'
import TestJson from './TestJson'
import QuestionJson from './QuestionJson'
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


async function saveTest(data){
    let result;
    await axios.post(urlEditor, JSON.stringify(data), {headers: headers})
    .then((res) => console.log(res) )
    .catch((err) => console.log(err));
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

/*async function generateTestId(idUser){
    let result;
    await axios.get(urlTestId)
    .then((res) => result = res)
    .catch((err) => console.log(err));
    if (result.data === 0){
        return 1;
    }
    return result.data + 1;
}*/

async function createTestOnServer(test){
    await axios.post(urlCreateTest, JSON.stringify(test), {headers: headers})
    .then((res) => console.log(res) )
    .catch((err) => console.log(err));
}

async function getTestFromServer(idUser, idTest){
    let result;
    await axios.post(urlGetTest, {idUser: idUser, idTest: idTest, status: "redacted"}, {headers: headers})
    .then((res) => result = res)
    .catch((err) => console.log(err));
    return result;
}

function TestEditorModel(props){
    return(
        <Layout>
        <Layout.Content>
            <Tabs centered> 
                <Tabs.TabPane tab="Настройки теста" key="1">
                    <MenuSwitchSettings test = {props.test}/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Редактор вопросов" key="2">
                    <EditorQuestions test = {props.test}/>
                </Tabs.TabPane>
            </Tabs>
        </Layout.Content>
        <Layout.Footer>
            <Affix offsetBottom = {10}>
                 <Button type="primary" onClick = {async (e) => {
                     await saveTest(props.test);
                 }}>
                    Сохранить
                </Button>
                <Button onClick = {async (e) => {
                     await saveTest(props.test);
                 }}>
                    Закончить редактирование
                </Button>
            </Affix>
        </Layout.Footer>
    </Layout>
    )
}


 function TestEditor(props){
    const test = new TestJson();
    const [testEditor, setTestEditor] = useState(null);
    useEffect(() => {
        let condition = isFirstSaveTest(props.idUser, props.idTest);
        if (condition){
            test.idUser = props.idUser;
            test.idTest = props.idTest;
            createTestOnServer(test);
        }
        else{
            setTestEditor(getTestFromServer(props.idUser, props.idTest));
        }
    }, [])
    let content = testEditor === null ? <Spin /> : <TestEditorModel test = {testEditor} />
    return(
        {content}
    )
}

/*<Button type="primary" onClick = {async() => {
                    let condition = await isFirstSaveTest(props.user, testId);
                    if (condition){
                        testId = await generateTestId(props.user);
                        test.idTest = testId;
                    }
                    await saveTest(test, condition);
                 }}></Button>

*/
export default TestEditor;