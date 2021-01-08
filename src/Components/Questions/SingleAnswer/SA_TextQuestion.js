import 'antd/dist/antd.css'
import {Form, Input, Button, Switch, Radio, InputNumber} from 'antd'
import React, { useState } from 'react';

function SA_TextQuestion(){
    return(
        <Form.Item label = "Текст вопроса">
            <Input.TextArea rows ={5} />
        </Form.Item>
    )
}

export default SA_TextQuestion;