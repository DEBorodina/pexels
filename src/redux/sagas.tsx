import {takeEvery,call,put,fork,all, select} from 'redux-saga/effects';
import { SET_MAIN_PIC, GET_MAIN_PAGE, MAIN_PIC_IS_LOADING,SET_PICS, ADD_PICS} from './actionsTypes';
import {fetchMainPic, fetchPics, perPage} from '../api/api';
import { State } from './pictureReducer';

export const getPage = (state:{pictures:State}) => state.pictures.pictures.length/perPage;

export function *sagaWatcher(){
        yield all([fork(mainPageWatcher),fork(addPicsWatcher)]);
}

function *mainPageWatcher() {
    yield takeEvery(GET_MAIN_PAGE, mainPageWorker);
}

function *addPicsWatcher() {
    yield takeEvery(ADD_PICS, picsWorker);
}

function *mainPageWorker():Generator<any,any,any>{
    yield all([call(mainPicWorker),call(picsWorker)]);
}

function *mainPicWorker():Generator<any,any,any>{

    yield put({ type: MAIN_PIC_IS_LOADING, payload: true });

    let mainPicture = yield call(fetchMainPic);  
    yield put({type:SET_MAIN_PIC,payload:mainPicture});

    yield put({ type: MAIN_PIC_IS_LOADING, payload: false });


}

function *picsWorker():Generator<any,any,any>{

    const currentPage = yield select(getPage); 
    let pictures = yield call(fetchPics,currentPage);  
    yield put({type:SET_PICS,payload:pictures});

}



async function sleep(){
    await new Promise(resolve => setTimeout(resolve, 4000))
}