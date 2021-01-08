import { Form, Input } from 'antd'
import 'antd/dist/antd.css'

function FormItem_NameTest(props){
    return(
        <Form.Item label = "Название теста">
            <Input onChange = {(e)=> props.test.nameTest = e.currentTarget.value} />
        </Form.Item>    
    )
}

export default FormItem_NameTest;