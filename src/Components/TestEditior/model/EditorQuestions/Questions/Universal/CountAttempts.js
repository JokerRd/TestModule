import 'antd/dist/antd.css'
import {Form, Input, Button, Switch, Radio, InputNumber} from 'antd'
import React, { useState } from 'react';

function CountAttempts(props){
    return(
        <Form.Item label = "Количество попыток">
            <InputNumber onChange = {(e)=> props.questionJson.countAttempts = e} />
        </Form.Item>
    )
}

export default CountAttempts;