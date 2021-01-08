import 'antd/dist/antd.css'
import {Form, Modal, Switch, Space, Button, Input, Drawer } from 'antd'
import React, { useState } from 'react';
import SingleAnswerQuestion from '../SingleAnswerQuestion'
import FileAnswerQuestion from '../FileAnswerQuestion'
import MultiAnswerQuestion from '../MultiAnswerQuestion'
import TextAnswerQuestion from '../TextAnswerQuestion'
import QuestionJson from '../../QuestionJson'

function addQuestion(questions, add, typeQuestion, arrQuestionsJson, questionJson){
    questions.push(typeQuestion);
    arrQuestionsJson.push(questionJson);
    add();
}

function PeekTypeQuestion(props){
    return(
        <Drawer title="Выберите тип вопроса:"
        placement="right" 
        closable
        visible={props.isVisible}
        onClose={props.close}>
            <Button onClick = {()=>{
                var questionJson = new QuestionJson();
                addQuestion(props.questions, props.add,<SingleAnswerQuestion questionJson = {questionJson}/>,
                props.test.questions, questionJson);}}>
                C одним ответом
            </Button>
            <Button onClick = {()=>{
                var questionJson = new QuestionJson();
                addQuestion(props.questions, props.add,<MultiAnswerQuestion questionJson = {questionJson}/>,
                props.test.questions, questionJson);}}>
                C несколькими ответоми
            </Button>    
            <Button onClick = {()=> addQuestion(props.questions, props.add,<TextAnswerQuestion test = {props.test}/>, props.test.questions)}>        
                Текстовый ответ
            </Button>
            <Button onClick = {()=> addQuestion(props.questions, props.add,<FileAnswerQuestion test = {props.test}/>, props.test.questions)}>
                Ответ в виде файла
            </Button>
        </Drawer>  
    )
}

export default PeekTypeQuestion;