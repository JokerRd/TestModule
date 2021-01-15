import 'antd/dist/antd.css'
import {Form, Modal, Switch, Space, Button, Input, Drawer } from 'antd'
import React, { useState } from 'react';
import PeekTypeQuestion from './PeekTypeQuestion'
import SingleAnswerQuestion from './Questions/SingleAnswerQuestion'
import FileAnswerQuestion from './Questions/FileAnswerQuestion'
import MultiAnswerQuestion from './Questions/MultiAnswerQuestion'
import TextAnswerQuestion from './Questions/TextAnswerQuestion'
import QuestionModel from './QuestionsModel';
import {createQuestions, getTypeQuestion} from '../../action/EditorQuestionAction'

let questions = [];

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