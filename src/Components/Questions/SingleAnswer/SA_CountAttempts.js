import 'antd/dist/antd.css'
import {Form, Input, Button, Switch, Radio, InputNumber} from 'antd'
import React, { useState } from 'react';

function SA_CountAttempts(){
    return(
        <Form.Item label = "Количество попыток">
            <InputNumber />
        </Form.Item>
    )
}

export default SA_CountAttempts;