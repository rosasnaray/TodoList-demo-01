import React, {Component} from 'react';
import store from './store'
import {changeInputValueAction,addItemAction,deleteItemAction,getTodoListAction} from "./store/actionCreators";
import TodoListUI from "./TodoListUI";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.stateChange = this.stateChange.bind(this);
        this.addItem =  this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        //订阅 state 的变化,实现自动渲染
        store.subscribe(this.stateChange);
    }
    componentDidMount() {
        //获取初始表单列表
        const action = getTodoListAction();
        store.dispatch(action);
    }

    render() {
       return(
          <TodoListUI
              inputValue={this.state.inputValue}
              changeInputValue={this.changeInputValue}
              addItem={this.addItem}
              deleteItem={this.deleteItem}
              list={this.state.list}
          />
       )
    }
    stateChange(){
        this.setState(store.getState())
    }
    //改变表单值
    changeInputValue(e){
        const action = changeInputValueAction(e.target.value);
        store.dispatch(action)
    }
    //新增类目
    addItem(){
        const action = addItemAction();
        store.dispatch(action)
    }
    //删除类目
    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    //获取初始表单列表

}

export default TodoList;