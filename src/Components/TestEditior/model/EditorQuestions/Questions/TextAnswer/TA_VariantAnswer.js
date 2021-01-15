import 'antd/dist/antd.css'
import {Form, Input, Button, Switch, Radio, InputNumber} from 'antd'
import React, { useState } from 'react';

function TA_VariantAnswer(props){
    return(
        <Form.Item label = "Ответ">
            <Input onChange = {(e) => {
            props.questionJson.answers = [e.currentTarget.value];
            props.questionJson.correctAnswers = [e.currentTarget.value];
            }} />
        </Form.Item>
    )
}

export default TA_VariantAnswer;