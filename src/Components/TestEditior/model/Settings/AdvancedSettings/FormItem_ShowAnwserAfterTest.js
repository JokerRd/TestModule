import 'antd/dist/antd.css'
import {Form, DatePicker, Switch, Space } from 'antd'
import FormItem_NameTest  from './BasicSettings/FormItem_NameTest'



function FormItem_ShowAnwserAfterTest(props){
    return(
        <Form.Item label = "Показать правильные ответы после выполнения теста">
            <Switch defaultChecked = {props.test.showRigthAnswerAfterTest }
            onClick = {(e) => props.test.showRigthAnswerAfterTest = e} />
        </Form.Item>
    )
}

export default FormItem_ShowAnwserAfterTest;