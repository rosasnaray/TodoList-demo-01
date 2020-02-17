import React from 'react';
import './TodoListUI.css'
import {Input,Button,List} from 'antd'

const TodoListUI = (props)=>(
    <div className='TodoListUI'>
        <div>
            <Input
                value={props.inputValue}
                className='listInput'
                onChange={props.changeInputValue}
            />
            <Button
                type='primary'
                onClick={props.addItem}
            >添加</Button>
        </div>
        <div>
            <List
                bordered
                className='listBox'
                dataSource={props.list}
                renderItem={(item,index)=>(
                    <List.Item
                       onClick={()=>{props.deleteItem(index)}}
                    >{item}</List.Item>
                )}
            />
        </div>
    </div>
)

export default TodoListUI