import { Button, Tabs } from 'antd'
import { Space } from 'antd';
import 'antd/dist/antd.css'
import EditorQuestions from './Questions/EditorQuestions'
import MenuSwitchSettings from './MenuSwitchSettings'

function GroupButtons(props){
    var size = 50
    return(
        <Space align = "start"  size = {size}>
            <Button type = "primary" onClick = {() =>{
                props.setNumber(0);
                props.set[props.number] = {display: ""}
            }}>
                Настройка
            </Button>
            <Button type = "primary" onClick = {() => {
                props.switch(<EditorQuestions/>)
            }}>
                Вопросы
            </Button>
            <Button type = "primary">
                Представление
            </Button>
        </Space>
    )
}


export default GroupButtons;