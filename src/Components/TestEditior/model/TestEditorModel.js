import 'antd/dist/antd.css'
import React, { useState, useEffect } from 'react';
import {Layout, Tabs } from 'antd';
import EditorQuestions from './Questions/EditorQuestions'
import Settings from './Settings'
import SwimButtonsSave from './TestEditorModel/SwimButtonsSave'

function TestEditorModel(props){
    return(
        <Layout>
        <Layout.Content>
            <Tabs centered> 
                <Tabs.TabPane tab="Настройки теста" key="1">
                    <Settings test = {props.test}/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Редактор вопросов" key="2">
                    <EditorQuestions test = {props.test}/>
                </Tabs.TabPane>
            </Tabs>
        </Layout.Content>
        <Layout.Footer>
            <SwimButtonsSave />
        </Layout.Footer>
    </Layout>
    )
}

export default TestEditorModel;