import {takeEvery,call,put,fork,all, select, spawn, actionChannel} from 'redux-saga/effects';
import { SET_MAIN_PIC, GET_MAIN_PAGE,SET_PICS, ADD_PICS, GET_CATEGORY_PAGE, CHANGE_FILTERS, SET_FILTERS, REMOVE_PICS, SET_ERROR, SET_CATEDGORY} from './actionsTypes';
import {fetchMainPic, fetchPics, perPage} from '../api/api';
import { Filters, State } from './pictureReducer';
import { FilterQuery, filters } from '../constants/filters';
import { useParams } from 'react-router-dom';

const getPage = (state:{pictures:State}) => Math.floor(state.pictures.pictures.length/(perPage-1));

const makeQuery = (state:{pictures:{filters:Filters}}) => {
    const choosenFilters = state.pictures.filters;
    let query:FilterQuery = {};
    if(filters.orientation[choosenFilters.orientation].query.orientation){
      query.orientation = filters.orientation[choosenFilters.orientation].query.orientation;
    }
    if(filters.size[choosenFilters.size].query.size){
      query.size = filters.size[choosenFilters.size].query.size;
    }
    return query;
  }

const mainPicIsSet = (state:{pictures:State})=>{Boolean(state.pictures.mainPic.url)};

const getCategory = (state:{pictures:State}) => state.pictures.category;

export function *sagaWatcher(){
        yield spawn(mainPageWatcher);
        yield spawn(addPicsWatcher);
        yield spawn(categoryPicsWatcher);
        yield spawn(filtersWatcher); 
}

function *categoryPicsWatcher() {
    yield takeEvery(GET_CATEGORY_PAGE, picsWorker);
}

function *mainPageWatcher() {
    yield takeEvery(GET_MAIN_PAGE, mainPageWorker);
}

function *addPicsWatcher() {
    yield takeEvery(ADD_PICS, picsWorker);
}

function *filtersWatcher(){
    yield takeEvery(CHANGE_FILTERS, filtersWorker);
}

function *filtersWorker(action:{type:string,category?:string,query?:any}):Generator<any,any,any>{
    yield put({type:SET_FILTERS,payload:action.query});
    yield put ({type:REMOVE_PICS});
    yield call(picsWorker,action)
}

function *mainPageWorker(action:{type:string,payload:string}):Generator<any,any,any>{
    yield put ({type:SET_CATEDGORY,category:""});
    yield spawn(mainPicWorker);
    yield spawn(picsWorker,action);
}

function *mainPicWorker():Generator<any,any,any>{
    try{
    const isSet = yield select(mainPicIsSet);
    if(!isSet){
        let mainPicture = yield call(fetchMainPic);  
        yield put({type:SET_MAIN_PIC,payload:mainPicture});
    }
    }catch{
        yield put({type:SET_ERROR,error:"Fetching error"})
    }
}

function *picsWorker(action:{type:string,category?:string,query?:FilterQuery}):Generator<any,any,any>{
    try{
    if(action.category){
           yield put ({type:SET_CATEDGORY,category:action.category});
    }else{
        yield put ({type:SET_CATEDGORY,category:""});
    }
    let category = yield select(getCategory);
    let query = yield select(makeQuery);
    if(Object.keys(query).length){
        action = {...action,query};
    }else{
        action = {...action};
    }
    const currentPage = yield select(getPage); 
    let {pictures,total} = yield call(fetchPics,currentPage,category,action?.query);  
    yield put({type:SET_PICS,payload:pictures,total});
    }catch{
        yield put({type:SET_ERROR,error:"Fetching error"})
    }
}
