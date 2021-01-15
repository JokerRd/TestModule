import 'antd/dist/antd.css'
import React, { useState, useEffect } from 'react';
import { Button, Layout,Affix, Tabs, Spin } from 'antd';
import TestEditorModel from './TestEditorModel'
import TestJson from './TestJson'
import {isFirstSaveTest, createTestOnServer, getTestFromServer} from '../action/TestEditorAction'



/*async function generateTestId(idUser){
    let result;
    await axios.get(urlTestId)
    .then((res) => result = res)
    .catch((err) => console.log(err));
    if (result.data === 0){
        return 1;
    }
    return result.data + 1;
}*/

 function TestEditor(props){
    const test = new TestJson();
    const [testEditor, setTestEditor] = useState(null);
    useEffect(() => {
        let condition = isFirstSaveTest(props.idUser, props.idTest);
        if (condition){
            test.idUser = props.idUser;
            test.idTest = props.idTest;
            createTestOnServer(test);
        }
        else{
            setTestEditor(getTestFromServer(props.idUser, props.idTest));
        }
    }, [])
    let content = testEditor === null ? <Spin /> : <TestEditorModel test = {testEditor} />
    return(
        {content}
    )
}

/*<Button type="primary" onClick = {async() => {
                    let condition = await isFirstSaveTest(props.user, testId);
                    if (condition){
                        testId = await generateTestId(props.user);
                        test.idTest = testId;
                    }
                    await saveTest(test, condition);
                 }}></Button>

*/
export default TestEditor;