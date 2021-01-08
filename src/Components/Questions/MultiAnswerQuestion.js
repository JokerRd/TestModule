import 'antd/dist/antd.css'
import {Form, DatePicker, Switch, Space } from 'antd'
import TextQuestion from './Universal/TextQuestion'
import CountPoint from './Universal/CountPoint'
import CountAttempts from './Universal/CountAttempts'
import MA_VariantAnswer from './MultiAnswer/MA_VariantAnswer'

function MultiAnswerQuestion(props){
    props.questionJson.type = "multi";
    return(
        <Form>
            <TextQuestion questionJson = {props.questionJson}/>
            <MA_VariantAnswer questionJson = {props.questionJson}/>
            <CountPoint questionJson = {props.questionJson}/>
            <CountAttempts questionJson = {props.questionJson}/>
        </Form>
    )
}

export default MultiAnswerQuestion;