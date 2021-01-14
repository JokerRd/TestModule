import 'antd/dist/antd.css'
import React, { useState } from 'react';
import { Button, Card, Typography} from 'antd';
import axios from 'axios';

function QuestionResult(props){
    return(
        <Card title = {props.numberQuestion}>
        <Typography>
            <Typography.Paragraph>
                {props.question.textQuestion}
            </Typography.Paragraph>
            <Typography.Paragraph title = "Варианты ответов">
                {props.question.answers}
            </Typography.Paragraph>
            <Typography.Paragraph title = "Ваш ответ(-ы)">
                {props.answers}
            </Typography.Paragraph>
            <Typography.Paragraph title = "Правильный ответ(-ы)">
                {props.question.correctAnswers}
            </Typography.Paragraph>
        </Typography>
    </Card>
    );
}

export default QuestionResult;