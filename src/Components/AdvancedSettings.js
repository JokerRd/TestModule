import 'antd/dist/antd.css'
import {Form, DatePicker, Switch, Space } from 'antd'
import FormItem_NameTest  from './BasicSettings/FormItem_NameTest'


function AdvancedSettings(props){
    return(
        <Form>
            <Form.Item label = "Проверка теста">
                <Switch defaultChecked = {props.test.testCheck} onClick = {(e) => props.test.testCheck = e} />
            </Form.Item>
            <Form.Item label = "Показать правильные ответы после выполнения теста">
                <Switch defaultChecked = {props.test.showRigthAnswerAfterTest }
                 onClick = {(e) => props.test.showRigthAnswerAfterTest = e} />
            </Form.Item>
            <Form.Item label = "Показать правильность ответа после каждого вопроса">
               <Switch defaultChecked = {props.test.showRigthAnswerAfterQuestion} 
               onClick = {(e) => props.test.showRigthAnswerAfterQuestion = e} /> 
            </Form.Item>
        </Form>
    );
}

export default AdvancedSettings;