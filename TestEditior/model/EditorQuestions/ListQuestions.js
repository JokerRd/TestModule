import 'antd/dist/antd.css'
import {Form, Modal, Switch, Space, Button, Input, Drawer, Typography } from 'antd'
import React, { useState } from 'react';
import PeekTypeQuestion from './PeekTypeQuestion'
import {createQuestions, getTypeQuestion} from '../../action/EditorQuestionAction'
import './Questions/QuestionStyle.css'
const questions = [];

function ListQuestions(props){
    const [isVisible, setIsVisible] = useState(false);
    //questions = createQuestions(props.test.questions);
    const close = () => {
        setIsVisible(false);
      };
    let content = <Typography  className = "TextLabel">Подсказка</Typography>;
    return(
        <Form.List  name="names">
            {(fields, { add, remove }, { errors }) => (
                <div>
                {fields.map((field, index) => (
                    <Form.Item  {...field} label = {(index + 1) + " вопрос"} style = {{width:"100%"}}>
                        {questions[index]}
                        {fields.length > 0 ? (
                        <Button className = "ButtonStyle" size = 'large'
                        onClick={() => {
                            remove(field.name);
                            props.test.questions.splice(index, 1);
                            questions.splice(index, 1);
                        }}> 
                        Удалить вопрос 
                        </Button>
                        ) : null}                    
                    </Form.Item>
                    ))}
                <Button className = "ButtonStyle" size = 'large' onClick = {() => setIsVisible(true)} type="dashed"> Добавить вопрос</Button>
                <Form.ErrorList errors={errors} /> 
                <PeekTypeQuestion add = {add} questions = {questions}
                isVisible = {isVisible} close = {close} test = {props.test} getTypeQuestion = {getTypeQuestion} />
                </div>
             )}
        </Form.List>
    )
}
export default ListQuestions;