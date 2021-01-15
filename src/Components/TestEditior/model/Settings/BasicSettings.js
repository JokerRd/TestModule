import 'antd/dist/antd.css'
import { Form} from 'antd'
import FormItem_NameTest  from './BasicSettings/FormItem_NameTest'
import FormItem_DescriptionTest  from './BasicSettings/FormItem_DescriptionTest'
import FormItem_DateTimeTest from './BasicSettings/FormItem_DateTimeTest'
import FormItem_TimerTest from './BasicSettings/FormItem_TimerTest'
import FormItem_CountAttemptsTest from './BasicSettings/FormItem_CountAttemptsTest'

function BasicSettings(props){
    return(
        <Form>
            <FormItem_NameTest test = {props.test}/>
            <FormItem_DescriptionTest test = {props.test} />
            <FormItem_DateTimeTest test = {props.test}/>
            <FormItem_TimerTest test = {props.test} />
            <FormItem_CountAttemptsTest test = {props.test}/>
        </Form>
    );
}

export default BasicSettings;