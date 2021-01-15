import 'antd/dist/antd.css'
import React, { useState, useEffect } from 'react';
import { Button, Layout,Affix, Tabs, Spin } from 'antd';
import EditorQuestions from './Questions/EditorQuestions'
import MenuSwitchSettings from './MenuSwitchSettings'
import axios from 'axios';
import {saveTest} from '../action/TestEditorAction'
import SaveButton from './TestEditorModel/SaveButton'


function EndRedactedButton(props){
    return(
        <Button onClick = {props.saveTest}>
           Закончить редактирование
       </Button>
    )
}

export default EndRedactedButton;