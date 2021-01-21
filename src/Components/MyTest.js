import 'antd/dist/antd.css'
import React, { useState, useEffect } from 'react';
import { Button, Layout,Affix, Tabs, Spin } from 'antd';
import axios from 'axios';
import CardTest from './MyTest/CardTest';
import {
    Route,
    Switch,
    Redirect,
    withRouter
  } from "react-router-dom"
  
const url = "http://localhost:4000/allTests";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};


function MyTest(props){
    const [tests, setTests] = useState(null);
    useEffect(()=> {
        async function getData(){
            await axios.post(url, {idUser: props.idUser}, headers)
            .then((res) => setTests(res.data))
            .catch((err)=> console.log(err));
            console.log(tests);
        }
        getData();
    }, [])
    let cards = tests === null ? <Spin />: tests.map( (item) => {
        return <CardTest  test = {item} setTest = {props.setTest}/>;
    });
    return(
        <Layout>
            <Layout.Header>
                Мои тесты
            </Layout.Header>
            <Layout.Content>
                <Button > Создать тест </Button>
                {cards}
            </Layout.Content>
        </Layout>
    )
}

export default MyTest;