import {createStore,applyMiddleware}from 'redux'
import reducer from "./reducer";
//import thunk from 'redux-thunk'
import creactSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
//store必须是唯一的
//createStore只接收2个参数，如果要传3个需要用增强函数compose
const sagaMiddleware=creactSagaMiddleware()
const store = createStore(
    reducer,
    //applyMiddleware(thunk)
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(mySaga)
export default store