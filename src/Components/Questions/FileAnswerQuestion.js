import 'antd/dist/antd.css'
import {Form, DatePicker, Switch, Space, Upload, Button, Checkbox} from 'antd'
import TextQuestion from './Universal/TextQuestion'
import CountPoint from './Universal/CountPoint'
import CountAttempts from './Universal/CountAttempts'
import FA_CheckTypeFile from './FileAnswer/FA_CheckTypeFile'

function FileAnswerQuestion(){
    return(
        <Form>
            <TextQuestion />
            <FA_CheckTypeFile />
            <CountPoint />
            <CountAttempts />
        </Form>
    )
}

export default FileAnswerQuestion;