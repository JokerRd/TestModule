import 'antd/dist/antd.css'
import {Form, Modal, Switch, Space, Button, Input, Drawer } from 'antd'
import React, { useState } from 'react';
import PeekTypeQuestion from './PeekTypeQuestion'
import SingleAnswerQuestion from '../SingleAnswerQuestion'
import FileAnswerQuestion from '../FileAnswerQuestion'
import MultiAnswerQuestion from '../MultiAnswerQuestion'
import TextAnswerQuestion from '../TextAnswerQuestion'
import QuestionModel from './QuestionsModel';

let questions = [];

function createQuestions(questions){
    let result = [];
    for (let i = 0; i < questions.length; i++)
        result.push(<QuestionModel questionJson = {questions[i]} getTypeQuestion = {getTypeQuestion} />);
    return result;
}

function getTypeQuestion(type, questionJson){
    switch (type) {
        case 'single':
            return <SingleAnswerQuestion questionJson = {questionJson} />;
        case 'multi':
            return <MultiAnswerQuestion questionJson = {questionJson} />;
        case 'text':
            return <TextAnswerQuestion questionJson = {questionJson} />;
        default:
            break;
    }
}

function ListQuestions(props){
    const [isVisible, setIsVisible] = useState(false);
    questions = createQuestions(props.test.questions);
    const close = () => {
        setIsVisible(false);
      };
    return(
        <Form.List name="names">
            {(fields, { add, remove }, { errors }) => (
                <div>
                {fields.map((field, index) => (
                    <Form.Item {...field} label = {(index + 1) + " вопрос"}>
                        {questions[index]}
                        {fields.length > 1 ? (
                        <Button className="dynamic-delete-button"
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
                <Button onClick = {() => setIsVisible(true)} type="dashed"> Добавить вопрос</Button>
                <Form.ErrorList errors={errors} /> 
                <PeekTypeQuestion add = {add} questions = {questions}
                isVisible = {isVisible} close = {close} test = {props.test} getTypeQuestion = {getTypeQuestion} />
                </div>
             )}
        </Form.List>
    )
}
export default ListQuestions;