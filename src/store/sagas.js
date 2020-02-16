import {takeEvery,put} from 'redux-saga/effects'
import {GET_MY_LIST} from "./actionTypes";
import {getListAction} from "./actionCreators";
import axios from 'axios'
//generator函数
function* mySaga(){
    //等待监听
    yield takeEvery(GET_MY_LIST,getList)
}

function* getList() {
    const res = yield axios.get('https://www.fastmock.site/mock/d68f6b337244f4644f8a7b41afd84c62/demo01/api/getListData')
    const action = getListAction(res.data)
    yield put(action)
}
export default mySaga