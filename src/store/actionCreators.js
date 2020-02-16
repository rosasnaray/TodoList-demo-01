import {ADD_ITEM, CHANGE_INPUT, DELETE_ITEM,GET_LIST,GET_MY_LIST} from './actionTypes'
import axios from 'axios'
//输入表单内容
export const changeInputAtion=(value)=>({
    type:CHANGE_INPUT,
    value
})
//增加项
export const addItemAction=()=>({
    type:ADD_ITEM
})
//删除项
export const deleteItemAction=(index)=>({
    type:DELETE_ITEM,
    index
})
//获取list
export const getListAction=(data)=>({
    type:GET_LIST,
    data
})

export const getTodoList = () =>{
    return (dispatch)=>{
        axios.get('https://www.fastmock.site/mock/d68f6b337244f4644f8a7b41afd84c62/demo01/api/getListData').then((res)=>{
            const data = res.data
            const action = getListAction(data)
            dispatch(action)

        })
    }
}

export  const getMyListAction=()=>({
    type:GET_MY_LIST
})