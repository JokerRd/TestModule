import 'antd/dist/antd.css'
import {Form, DatePicker, Switch, Space, Input} from 'antd'
import TextQuestion from './Universal/TextQuestion'
import CountPoint from './Universal/CountPoint'
import CountAttempts from './Universal/CountAttempts'

function TextAnswerQuestion(props){
    return(
        <Form>
            <TextQuestion   questionJson = {props.questionJson} />
            <Form.Item label = "Ответ">
                <Input onChange = {(e) => {
                    props.questionJson.answers = [e.currentTarget.value];
                    props.questionJson.correctAnswers = [e.currentTarget.value];
                }} />
            </Form.Item>
            <CountPoint quaestionJson = {props.questionJson} />
            <CountAttempts questionJson = {props.questionJson} />
        </Form>
    )
}

export default TextAnswerQuestion;