import 'antd/dist/antd.css'
import {Form, DatePicker, Switch, Space } from 'antd'
import FormItem_NameTest  from './BasicSettings/FormItem_NameTest'



function FormItem_ShowAnswerAfterQuestion(props){
    return(
        <Form.Item label = "Показать правильность ответа после каждого вопроса">
            <Switch defaultChecked = {props.test.showRigthAnswerAfterQuestion} 
            onClick = {(e) => props.test.showRigthAnswerAfterQuestion = e} /> 
        </Form.Item>
    )
}

export default FormItem_ShowAnswerAfterQuestion;