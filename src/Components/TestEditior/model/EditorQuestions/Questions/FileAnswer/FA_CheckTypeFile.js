import 'antd/dist/antd.css'
import {Form, DatePicker, Switch, Space, Upload, Button, Checkbox} from 'antd'

function FA_CheckTypeFile(){
    var options = [
        { label: 'pdf', value: 'pdf' },
        { label: 'docx', value: 'docx' },
        { label: 'doc', value: 'doc' },
        {label: 'png', value: 'png'},
        {label: 'jpg', value: 'jpg'},
      ];
    return(
        <Form.Item label = "Допустимые типы файлов">
            <Checkbox.Group options = {options}/>
        </Form.Item>
    )
}

export default FA_CheckTypeFile;