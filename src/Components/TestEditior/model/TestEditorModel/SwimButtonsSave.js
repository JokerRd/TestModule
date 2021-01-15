import 'antd/dist/antd.css'
import React from 'react';
import { Button, Affix } from 'antd';
import SaveButton from './SwimButtonsSave/SaveButton';
import EndRedactedButton from './SwimButtonsSave/EndRedactedButton';
import SaveTemplatesButton from'./SwimButtonsSave/SaveTemplatesButton';
import saveTest from '../../action/TestEditorAction'
function SwimButtonsSave(props){
    return(
        <Affix offsetBottom = {10}>
            <SaveButton saveTest = {async () => await saveTest(props.test)}/>
            <EndRedactedButton saveTest = {async () => await saveTest(props.test)}/>
            <SaveTemplatesButton saveTest = {async () => await saveTest(props.test)}/>
        </Affix>
    )
}

export default SwimButtonsSave;