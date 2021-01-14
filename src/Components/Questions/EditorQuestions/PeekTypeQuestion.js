import 'antd/dist/antd.css'
import {Form, Modal, Switch, Space, Button, Input, Drawer } from 'antd'
import React, { useState } from 'react';
import SingleAnswerQuestion from '../SingleAnswerQuestion'
import FileAnswerQuestion from '../FileAnswerQuestion'
import MultiAnswerQuestion from '../MultiAnswerQuestion'
import TextAnswerQuestion from '../TextAnswerQuestion'
import QuestionJson from '../../QuestionJson'

function addQuestion(questions, add, typeQuestion, arrQuestionsJson, getTypeQuestion){
   /* questions.push(typeQuestion);
    arrQuestionsJson.push(questionJson);
    add();*/
    var questionJson = new QuestionJson();
    let newQuestion = getTypeQuestion(typeQuestion, questionJson);
    questions.push(newQuestion);
    arrQuestionsJson(questionJson);
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
                addQuestion(props.questions, props.add, "single", props.test.questions, props.getTypeQuestion);}}>
                C одним ответом
            </Button>
            <Button onClick = {()=>{
                addQuestion(props.questions, props.add, "multi", props.test.questions, props.getTypeQuestion);}}>
                C несколькими ответоми
            </Button>    
            <Button onClick = {()=>{
                addQuestion(props.questions, props.add, "text", props.test.questions, props.getTypeQuestion);}}>        
                Текстовый ответ
            </Button>
        </Drawer>  
    )
}

export default PeekTypeQuestion;

/*<Button onClick = {()=> addQuestion(props.questions, props.add,<FileAnswerQuestion test = {props.test}/>, props.test.questions)}>
Ответ в виде файла
</Button>*/