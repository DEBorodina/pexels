import { Photo } from "pexels";
import { filters } from "../constants/filters";
import { addLiked, getLiked, removeLiked } from "../localStorage/localStoradge";
import { SET_MAIN_PIC, SET_PICS, LIKE_PIC, UNLIKE_PIC, REMOVE_PICS, SET_FILTERS, SET_ERROR, REMOVE_ERROR, REMOVE_FILTERS, SET_CATEDGORY } from "./actionsTypes";

export type Filters = {orientation:number,size:number};

export interface State {
    mainPic:Photo,
    pictures:Array<Photo>,
    filters:Filters,
    liked:Array<number>,
    total:number,
    error:string,
    category:string,
}

const initialState:State = {
    mainPic:{
        id:0,
        width:0,
        height:0,
        url:'',
        photographer:'',
        photographer_url:"",
        photographer_id:"",
        alt:"",
        avg_color:"#fff",
        liked:false,
        src:{
            'small':'',
            'medium':'',
            'large':'',
            'large2x':'',
            'original':'',
            'portrait':'',
            'tiny':'',
            'landscape':''
        }
    },
    pictures:[],
    filters:{
        orientation:0,
        size:0,
    },
    liked:getLiked(),
    total:0,
    error:'',
    category:"",
}

export const pictureReducer = (state = initialState, action:any)=>{
    switch(action.type){
        case SET_MAIN_PIC:
            return {...state,mainPic:{...action.payload}}
        case SET_PICS:
            let addPics:Array<Photo> = [];
            action.payload.forEach((pic:Photo)=>{
                if(!state.pictures.find((p:Photo)=>p.id===pic.id)){
                    addPics.push(pic);
                }
            })
            return {...state, pictures:[...state.pictures,...addPics],total:action.total}
        case REMOVE_PICS:
            return {...state, pictures:[],total:0}    
        case LIKE_PIC:
            addLiked(action.payload);
            return {...state,liked:[...getLiked()]};
        case UNLIKE_PIC:
            removeLiked(action.payload);
            return {...state,liked:[...getLiked()]};
        case SET_FILTERS:
            return {...state,filters:{...state.filters,...action.payload}};
        case REMOVE_FILTERS:
            return {...state,filters:{orientation:0,size:0}}; 
        case SET_ERROR:
            return {...state,error:action.error};
        case REMOVE_ERROR:
            return {...state,error:''};
        case SET_CATEDGORY:
            return {...state, category:action.category};       
        default: return state;
    }
}