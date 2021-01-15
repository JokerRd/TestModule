import 'antd/dist/antd.css'
import React from 'react';
import { Button } from 'antd';

function SaveTemplatesButton(props){
    return(
        <Button onClick = {props.saveTest}>
           Сохранить
       </Button>
    )
}

export default SaveTemplatesButton;