import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionTypes'

const defaultState = {
    inputValue:'Write Something',
    list:[]
}
export default (state = defaultState,action)=>{
    //reducer里只能接收state，不能改变state
    // Reducer必须是纯函数；纯函数定义：如果函数的调用参数相同，则永远返回相同的结果。它不依赖于程序执行期间函数外部任何状态或数据的变化，必须只依赖于其输入参数。
    //let newState = JSON.parse(JSON.stringify(state));
    let {list} = state;
    switch (action.type) {
        case CHANGE_INPUT:
            //newState.inputValue=action.value;
            //return newState
            return {...state,inputValue: action.value}
        case ADD_ITEM:
            //newState.list.push(newState.inputValue);
            //newState.inputValue='';
            //return newState
            return {...state,list:[...list,state.inputValue],inputValue:''}
        case DELETE_ITEM:
            list.splice(action.index,1);
            return {...state,list:list}
        case GET_LIST:
             return {...state,list:action.data.data.list}
        default:
            return state

    }
}