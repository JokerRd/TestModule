import 'antd/dist/antd.css'
import {Form, Input, Button, Switch, Radio, InputNumber} from 'antd'
import React, { useState } from 'react';

function SA_CountPoint(){
    return(
        <Form.Item label = "Количество баллов">
            <InputNumber />           
        </Form.Item>
    )
}

export default SA_CountPoint;