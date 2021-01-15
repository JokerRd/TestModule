import { Menu, Tabs } from 'antd';
import BasicSettings from './Settings/BasicSettings'
import AdvancedSettings from './Settings/AdvancedSettings'

function Settings(props){
    return(
        <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Основные настройки" key="1">
                <BasicSettings test = {props.test} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Дополнительные настройки" key="2">
                <AdvancedSettings test = {props.test}/>
            </Tabs.TabPane>
        </Tabs>
    )
}

export default Settings;