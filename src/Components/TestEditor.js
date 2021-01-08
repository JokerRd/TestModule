import 'antd/dist/antd.css'
import React, { useState } from 'react';
import { Button, Layout,Affix, Tabs } from 'antd';
import GroupButtons from './GroupButtons';
import EditorQuestions from './Questions/EditorQuestions'
import MenuSwitchSettings from './MenuSwitchSettings'
import Viewer from './Viewer'
import TestJson from './TestJson'
import QuestionJson from './QuestionJson'


function TestEditor(){
    const test = new TestJson();
    return(
        <Layout>
            <Layout.Content>
                <Tabs centered> 
                    <Tabs.TabPane tab="Настройки теста" key="1">
                        <MenuSwitchSettings test = {test}/>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Редактор вопросов" key="2">
                        <EditorQuestions test = {test}/>
                    </Tabs.TabPane>
                </Tabs>
            </Layout.Content>
            <Layout.Footer>
                <Affix offsetBottom = {10}>
                     <Button type="primary" onClick = {()=> console.log(test)}>
                        Сохранить
                    </Button>
                </Affix>
            </Layout.Footer>
        </Layout>
    )
}




export default TestEditor;