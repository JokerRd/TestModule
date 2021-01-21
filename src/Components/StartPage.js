import 'antd/dist/antd.css'
import React, { useState } from 'react';
import { Button, Layout,Affix, Tabs, Input, Form } from 'antd';
import {Link} from "react-router-dom"
import axios from 'axios';
const url = "http://localhost:4000/users";

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};

async function logIn(data, setUser){
    let result = "";
    console.log(JSON.stringify(data));
    await axios.post(url, JSON.stringify(data), {headers: headers})
    .then((res) => result = res.data)
    .catch((err) => console.log(err));
    console.log(result);
    setUser(data.login);
    return  result === "OK" ? "/testEditor": "";
    //await axios.get(url).then(res => console.log(res.data));
    //console.log("dfwewefwf");
}

function StartPage(props){
    const [login, setLogin] = useState("");
    const [typeUser, setTypeUser] = useState("");
    const user = {
        login: login,
        typeUser : typeUser
    };
    return(
        <Layout>
            <Layout.Content>
                <Form>
                <Form.Item label = "Введите логин">
                    <Input  onChange = {(e) => setLogin(e.currentTarget.value)} />
                </Form.Item>
                <Form.Item label = "Введите тип пользователя">
                    <Input onChange = {(e) => setTypeUser(e.currentTarget.value)}/>
                </Form.Item>
                <Form.Item>
                    <Button onClick = {async() => await logIn(user, props.setUser).then((res)=> document.location = res)}> 
                        Войти
                    </Button>
                </Form.Item>
                </Form>
            </Layout.Content>
        </Layout>
    )
}

export default StartPage;