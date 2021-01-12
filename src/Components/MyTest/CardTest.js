import 'antd/dist/antd.css'
import React, { useState } from 'react';
import { Button, Layout,Affix, Tabs, Card, Typography, Statistic} from 'antd';
import * as moment from 'moment';
import axios from 'axios';
const momentDurationFormatSetup = require("moment-duration-format");
momentDurationFormatSetup(moment);
const url = "http://localhost:4000/activeTest";
const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};
async function setActiveTest(idUser, idTest){
    await axios.post(url, {idUser:  idUser, idTest: idTest}, {headers: headers})
    .then(res => res)
    .catch(err => console.log(err));
}

function CardTest(props){
    console.log(props.test.timeLimits);
    let timer = moment.duration(props.test.timeLimits, 'milliseconds').format("h:mm:ss");
    return(
        <Card title = {props.test.nameTest}>
            <Typography>
                <Typography.Paragraph>
                    {props.test.description}
                </Typography.Paragraph>
                <Typography.Paragraph>
                    Количество попыток: {props.test.countAttempts}
                </Typography.Paragraph>
            </Typography>
            <Statistic title = 'Время' value = {timer}/>
            <Button onClick = {async ()=> {
                console.log(props.test.idUser);
               await setActiveTest(props.test.idUser, props.test.idTest);
               document.location = "/test";
            }}>
                Начать тест
            </Button>
        </Card>
    )
}

export default CardTest;