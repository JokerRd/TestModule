import 'antd/dist/antd.css'
import {Form, Input, Button, Switch, Radio, InputNumber} from 'antd'
import React, { useState } from 'react';
import TextQuestion from './Universal/TextQuestion'
import CountPoint from './Universal/CountPoint'
import CountAttempts from './Universal/CountAttempts'
import SA_VariantAnswer from './SingleAnswer/SA_VariantAnswer'

function SingleAnswerQuestion(props){
    props.questionJson.type = "single";
    return(
        <Form name ="dynamic_form_item">
            <TextQuestion questionJson = {props.questionJson} />
            <SA_VariantAnswer questionJson = {props.questionJson} />
            <CountAttempts questionJson = {props.questionJson} />
            <CountPoint questionJson = {props.questionJson} />
        </Form>
    )
}

export default SingleAnswerQuestion;