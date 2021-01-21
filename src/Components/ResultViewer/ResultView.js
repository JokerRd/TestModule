import 'antd/dist/antd.css'
import React, { useState, useEffect } from 'react';
import { Button, Layout,Affix, Tabs, Spin } from 'antd';
import axios from 'axios';
import QuestionResult from './QuestionResult';
const urlResults = "http://localhost:4000/results"; 
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};

async function getResults(idUser){
    let result;
    await axios.post(urlResults, {idUser: idUser}, headers)
    .then(res => result = res)
    .catch((err)=> console.log(err));
    return result;
}

function ResultView(props){
    let resultTest = <Spin />;
    const [results, setResults] = useState(null);
    useEffect(()=> {
        setResults(getResults(props.idUser));
    }, [])
    if (results != null)
        if (results.length !== 0)
            resultTest = results.questions.map((item, index) => {
                return <QuestionResult numberQuestion = {index + 1} question = {item} 
                answers = {results.answers[index]} />
            });
        else
            resultTest = "Нет результатов";
    return(
        <Layout>
            <Layout.Header>
                Результаты тестов
            </Layout.Header>
            <Layout.Content>
                {resultTest}
            </Layout.Content>
        </Layout>
    )

}

export default ResultView;