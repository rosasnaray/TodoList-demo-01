import React, {Component} from 'react'
import store from "./store"
import {getMyListAction,addItemAction, changeInputAtion, deleteItemAction,getTodoList} from "./store/actionCreators"
import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue=this.changeInputValue.bind(this);
        this.stateChange=this.stateChange.bind(this)
        this.clickBtn=this.clickBtn.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
        store.subscribe(this.stateChange)
    }
    render() {
        return (
            <TodoListUI
               inputValue={this.state.inputValue}
               changeInputValue={this.changeInputValue}
               clickBtn={this.clickBtn}
               list={this.state.list}
               deleteItem={this.deleteItem}
            />
        )
    }

    componentDidMount() {
       //const action = getTodoList()
        //store.dispatch(action)
        const action=getMyListAction()
        store.dispatch(action)
    }

    //改变文本内容
    changeInputValue(e){
        const action =changeInputAtion(e.target.value)
        store.dispatch(action)
    }
    stateChange(){
        this.setState(store.getState())
    }
    //添加项
    clickBtn(){
        const action=addItemAction()
        store.dispatch(action)
    }
    //删除项
    deleteItem(index){
        console.log(index)
        const action=deleteItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList;