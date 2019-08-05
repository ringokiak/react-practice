import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import { initTodoList } from "./actionCreators";
import axios from "axios";

function* getInitList() {
  try {
    const res = yield axios.get("/api/todolist");
    const action = initTodoList(res.data);
    yield put(action);
  } catch (e) {
    console.log(e);
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
