import { Form, Switch, InputNumber } from 'antd'
import React, { useState } from 'react';
import 'antd/dist/antd.css'

function FormItem_CountAttemptsTest(props){
    const [isDisabled, setIsDisabled] = useState(true)
    return(
        <Form.Item label = "Количество попыток на тест">
            <Switch checkedChildren = "Ограничено" unCheckedChildren = "Неограничено"
            onClick = {() => setIsDisabled(!isDisabled)}/>
            <InputNumber defaultValue = {props.test.countAttempts} disabled = {isDisabled} onChange = {(e) => props.test.countAttempts = e} />
        </Form.Item>
    )
}

export default FormItem_CountAttemptsTest;