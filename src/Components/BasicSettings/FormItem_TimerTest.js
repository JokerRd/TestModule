import { Form, Switch, TimePicker} from 'antd'
import React, { useState } from 'react';
import 'antd/dist/antd.css'

function FormItem_TimerTest(props){
    const [isDisabled, setIsDisabled] = useState(true)
    return(
        <Form.Item label = "Ограничение по времени">
            <Switch checkedChildren = "Включено" unCheckedChildren = "Выключено" onClick = {() => setIsDisabled(!isDisabled)}></Switch>
            <TimePicker 
            disabled = {isDisabled} onOk = {(e) => props.test.timeLimits = e.milliseconds()}/>
        </Form.Item>
    )
}

export default FormItem_TimerTest;