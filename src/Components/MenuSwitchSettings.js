import { Menu, Tabs } from 'antd';
import BasicSettings from './BasicSettings'
import AdvancedSettings from './AdvancedSettings'

function MenuSwitchSettings(props){
    return(
        <Tabs defaultActiveKey="1" style = {props.style}>
            <Tabs.TabPane tab="Основные настройки" key="1">
                <BasicSettings test = {props.test} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Дополнительные настройки" key="2">
                <AdvancedSettings test = {props.test}/>
            </Tabs.TabPane>
        </Tabs>
    )
}

export default MenuSwitchSettings;