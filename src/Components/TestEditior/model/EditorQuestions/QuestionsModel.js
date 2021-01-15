import 'antd/dist/antd.css'
import {Form, Modal, Switch, Space, Button, Input, Drawer } from 'antd'
import React, { useState } from 'react';
import PeekTypeQuestion from './PeekTypeQuestion'
import SingleAnswerQuestion from '../SingleAnswerQuestion'
import FileAnswerQuestion from '../FileAnswerQuestion'
import MultiAnswerQuestion from '../MultiAnswerQuestion'
import TextAnswerQuestion from '../TextAnswerQuestion'

function QuestionModel(props){
    let element = props.getTypeQuestion(props.questionJson.type, props.questionJson)
    return(
        {element}
    )
}

export default QuestionModel;