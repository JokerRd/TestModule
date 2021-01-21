import 'antd/dist/antd.css'
import {Form, Modal, Switch, Space, Button, Input, Drawer } from 'antd'
import React, { useState } from 'react';
import SingleAnswerQuestion from '../model/EditorQuestions/Questions/SingleAnswerQuestion'
import MultiAnswerQuestion from '../model/EditorQuestions/Questions/MultiAnswerQuestion'
import TextAnswerQuestion from '../model/EditorQuestions/Questions/TextAnswerQuestion'
import QuestionModel from '../model/EditorQuestions/QuestionsModel';
import QuestionJson from '../../ModelJson/QuestionJson'
import SequenceQuestion from '../model/EditorQuestions/Questions/SequenceQuestion'
import FileAnswerQuestion from '../model/EditorQuestions/Questions/FileAnswerQuestion'

export function createQuestions(questions){
    let result = [];
    for (let i = 0; i < questions.length; i++)
        result.push(<QuestionModel questionJson = {questions[i]} getTypeQuestion = {getTypeQuestion} />);
    return result;
}

export function getTypeQuestion(type, questionJson){
    switch (type) {
        case 'single':
            return <SingleAnswerQuestion questionJson = {questionJson} />;
        case 'multi':
            return <MultiAnswerQuestion questionJson = {questionJson} />;
        case 'text':
            return <TextAnswerQuestion questionJson = {questionJson} />;
        case 'file':
            return <FileAnswerQuestion questionJson = {questionJson} />;
        case 'sequence':
            return <SequenceQuestion questionJson = {questionJson} />;
        default:
            break;
    }
}

export function addQuestion(questions, add, typeQuestion, arrQuestionsJson, getTypeQuestion){
    /* questions.push(typeQuestion);
     arrQuestionsJson.push(questionJson);
     add();*/
     var questionJson = new QuestionJson();
     let newQuestion = getTypeQuestion(typeQuestion, questionJson);
     questions.push(newQuestion);
     arrQuestionsJson.push(questionJson);
     add();
 }
 