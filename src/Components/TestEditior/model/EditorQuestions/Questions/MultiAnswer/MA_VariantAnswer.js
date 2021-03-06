import 'antd/dist/antd.css'
import {Form, Input, Button, Switch, Radio, InputNumber} from 'antd'
import React, { useState } from 'react';

function MA_VariantAnswer(props){
    return(
        <Form.List name="names">
                {(fields, { add, remove }, { errors }) => (
                    <div>
                    {fields.map((field, index) => (
                    <Form.Item {...field} label = {(index + 1) + " ответ"}>
                        <Switch unCheckedChildren = "" checkedChildren = "Верный" />
                        <Input style={{ width: '20%' }} defaultValue onChange = {(e) => props.questionJson.answers[index] = e.currentTarget.value} />
                        {fields.length > 1 ? (
                        <Button className="dynamic-delete-button"
                        onClick={() =>{
                            props.questionJson.answers.splice(index, 1);
                            remove(field.name)}}>
                        Удалить ответ 
                        </Button>
                        ) : null}                    
                    </Form.Item>
                    ))}
                    <Button onClick = {()=>{
                        props.questionJson.answers.push("");
                        add();
                    }} type="dashed"> Добавить ответ</Button>
                    <Form.ErrorList errors={errors} />          
                    </div>
                )}
        </Form.List>
    )
}

export default MA_VariantAnswer;