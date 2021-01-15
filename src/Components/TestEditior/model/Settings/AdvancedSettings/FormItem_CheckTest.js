import 'antd/dist/antd.css'
import {Form, DatePicker, Switch, Space } from 'antd'
import FormItem_NameTest  from './BasicSettings/FormItem_NameTest'



function FormItem_CheckTest(props){
    return(
        <Form.Item label = "Проверка теста">
            <Switch defaultChecked = {props.test.testCheck} onClick = {(e) => props.test.testCheck = e} />
        </Form.Item>
    )
}

export default FormItem_CheckTest;