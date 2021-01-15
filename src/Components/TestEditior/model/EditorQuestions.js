import 'antd/dist/antd.css'
import {Form, Modal, Switch, Space, Button, Input, Drawer } from 'antd'
import React, { useState } from 'react';
import ListQuestions from './EditorQuestions/ListQuestions'

function EditorQuestions(props){
    return(
    <Form style =  {props.style} > 
        <ListQuestions test = {props.test} />
    </Form>
    )
}

export default EditorQuestions;