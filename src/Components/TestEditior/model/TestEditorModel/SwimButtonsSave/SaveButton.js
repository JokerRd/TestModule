import 'antd/dist/antd.css'
import React from 'react';
import { Button } from 'antd';

function SaveButton(props){
    return(
        <Button onClick = {props.saveTest}>
           Сохранить
       </Button>
    )
}

export default SaveButton;