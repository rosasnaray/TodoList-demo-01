import {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM,GET_LIST_DATA} from './actionType'
import axios from 'axios'

export const changeInputValueAction = (value)=>({
     type : CHANGE_INPUT_VALUE,
     value
})

export const addItemAction = ()=>({
     type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
     type:DELETE_ITEM,
     index
})

export const getListAction = (data)=>({
     type:GET_LIST_DATA,
     data
})

export const getTodoListAction = ()=>{
     return (dispatch)=>{
          axios.get('https://www.fastmock.site/mock/d68f6b337244f4644f8a7b41afd84c62/demo01/api/getListData').then(
              (res)=>{
                   const action = getListAction(res.data);
                   dispatch(action);

          })
     }

}