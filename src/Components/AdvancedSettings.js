import 'antd/dist/antd.css'
import {Form, DatePicker, Switch, Space } from 'antd'
import FormItem_NameTest  from './BasicSettings/FormItem_NameTest'


function AdvancedSettings(props){
    return(
        <Form>
            <Form.Item label = "Проверка теста">
                <Switch />
            </Form.Item>
            <Form.Item label = "Показать правильные ответы после выполнения теста">
                <Switch />
            </Form.Item>
            <Form.Item label = "Показать правильность ответа после каждого вопроса">
               <Switch /> 
            </Form.Item>
        </Form>
    );
}

export default AdvancedSettings;