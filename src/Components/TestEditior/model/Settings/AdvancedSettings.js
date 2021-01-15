import 'antd/dist/antd.css'
import {Form, DatePicker, Switch, Space } from 'antd'
import FormItem_ShowAnswerAfterQuestion from './AdvancedSettings/FormItem_ShowAnswerAfterQuestion'
import FormItem_ShowAnwserAfterTest from './AdvancedSettings/FormItem_ShowAnwserAfterTest'
import FormItem_CheckTest from './AdvancedSettings/FormItem_CheckTest'

function AdvancedSettings(props){
    return(
        <Form>
            <FormItem_CheckTest test = {props.test} />
            <FormItem_ShowAnwserAfterTest test = {props.test} />
            <FormItem_ShowAnswerAfterQuestion test = {props.test} />
        </Form>
    );
}

export default AdvancedSettings;