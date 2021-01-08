import 'antd/dist/antd.css'
import {Form, DatePicker, Switch, Space, Input} from 'antd'
import TextQuestion from './Universal/TextQuestion'
import CountPoint from './Universal/CountPoint'
import CountAttempts from './Universal/CountAttempts'

function TextAnswerQuestion(){
    return(
        <Form>
            <TextQuestion />
            <Form.Item label = "Ответ">
                <Input />
            </Form.Item>
            <CountPoint />
            <CountAttempts />
        </Form>
    )
}

export default TextAnswerQuestion;