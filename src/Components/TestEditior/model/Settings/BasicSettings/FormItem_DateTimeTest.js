import {Form, DatePicker, Switch } from 'antd'
import React, { useState } from 'react';
import 'antd/dist/antd.css'

function FormItem_DateTimeTest(){
    const [isDisabled, setIsDisabled] = useState(true)
    return(
        <Form.Item label = "Время начало и завершения теста">
            <Switch checkedChildren = "Включено" unCheckedChildren = "Выключено"
            onClick = {() => setIsDisabled(!isDisabled)}>
            </Switch>
            <DatePicker.RangePicker
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            disabled = {isDisabled}/>
        </Form.Item>
    )
}

export default FormItem_DateTimeTest;