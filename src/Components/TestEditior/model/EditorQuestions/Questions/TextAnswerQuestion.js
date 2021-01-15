import 'antd/dist/antd.css'
import {Form, DatePicker, Switch, Space, Input} from 'antd'
import TextQuestion from './Universal/TextQuestion'
import CountPoint from './Universal/CountPoint'
import CountAttempts from './Universal/CountAttempts'
import TA_VariantAnswer from './TextAnswer/TA_VariantAnswer'

function TextAnswerQuestion(props){
    return(
        <Form>
            <TextQuestion   questionJson = {props.questionJson} />
            <TA_VariantAnswer questionJson = {props.questionJson} />
            <CountPoint quaestionJson = {props.questionJson} />
            <CountAttempts questionJson = {props.questionJson} />
        </Form>
    )
}

export default TextAnswerQuestion;