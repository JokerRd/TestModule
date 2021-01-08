import { Form, Input } from 'antd'
import 'antd/dist/antd.css'

function FormItem_DescriptionTest(props){
    return(
        <Form.Item label = "Описание теста">
            <Input.TextArea onChange = {(e)=> props.test.description = e.currentTarget.value} />
        </Form.Item>
    )
}

export default FormItem_DescriptionTest;