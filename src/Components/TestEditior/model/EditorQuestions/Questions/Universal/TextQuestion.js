import 'antd/dist/antd.css'
import {Form, Input, Button, Switch, Radio, InputNumber} from 'antd'
import React, { useState } from 'react';

function TextQuestion(props){
    return(
        <Form.Item label = "Текст вопроса">
            <Input.TextArea rows ={5}
             onChange = {(e) => props.questionJson.textQuestion = e.currentTarget.value} />
        </Form.Item>
    )
}

export default TextQuestion;