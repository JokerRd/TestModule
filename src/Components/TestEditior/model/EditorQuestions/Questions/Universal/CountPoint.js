import 'antd/dist/antd.css'
import {Form, Input, Button, Switch, Radio, InputNumber} from 'antd'
import React, { useState } from 'react';

function CountPoint(props){
    return(
        <Form.Item label = "Количество баллов">
            <InputNumber  onChange = {(e)=> props.questionJson.countPoint = e} />           
        </Form.Item>
    )
}

export default CountPoint;