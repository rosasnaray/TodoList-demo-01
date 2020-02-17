import {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM,GET_LIST_DATA} from './actionType';

const defaultState = {
    inputValue:'',
    list:[]
}
export default (state = defaultState,action)=>{
    let {list} = state;
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            return {...state,inputValue: action.value}
        case ADD_ITEM :
            return {...state,list:[...list,state.inputValue],inputValue: ''}
        case DELETE_ITEM:
            list.splice(action.index,1);
            return {...state,list:list}
        case GET_LIST_DATA:
            return {...state,list:action.data.data.list}
        default:
            return state
    }
}