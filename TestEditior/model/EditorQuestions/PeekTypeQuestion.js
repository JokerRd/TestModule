import 'antd/dist/antd.css'
import {Form, Modal, Switch, Space, Button, Input, Drawer } from 'antd'
import React, { useState } from 'react';
import {addQuestion} from '../../action/EditorQuestionAction'

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
            <Button onClick = {()=>{
                addQuestion(props.questions, props.add, "sequence", props.test.questions, props.getTypeQuestion);}}>        
                Правильная последовательность
            </Button>
            <Button onClick = {()=>{
                addQuestion(props.questions, props.add, "file", props.test.questions, props.getTypeQuestion);}}>        
                Ответ в виде файла
            </Button>
        </Drawer>  
    )
}

export default PeekTypeQuestion;

/*<Button onClick = {()=> addQuestion(props.questions, props.add,<FileAnswerQuestion test = {props.test}/>, props.test.questions)}>
Ответ в виде файла
</Button>*/