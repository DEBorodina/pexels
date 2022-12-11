import { Photo } from "pexels";
import { Orientation, Size,filters } from "../constants/filters";
import { addLiked, getLiked, removeLiked } from "../localStorage/localStoradge";
import { SET_MAIN_PIC, MAIN_PIC_IS_LOADING,SET_PICS, LIKE_PIC, UNLIKE_PIC} from "./actionsTypes";

export interface Filters {
    orientation:Orientation,
    size:Size,
}

export interface State {
    mainPic:Photo,
    pictures:Array<Photo>,
    filters:Filters,
    liked:Array<number>,
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
        orientation:filters.orientations[0],
        size:filters.sizes[0],
    },
    liked:getLiked(),
}

export const pictureReducer = (state = initialState, action:{type:string,payload:any})=>{
    switch(action.type){
        case SET_MAIN_PIC:
            return {...state,mainPic:{...action.payload}}
        case MAIN_PIC_IS_LOADING:
            return {...state,mainPic:{...state.mainPic,isLoading:action.payload}}
        case SET_PICS:
            let addPics:Array<Photo> = [];
            action.payload.forEach((pic:Photo)=>{
                if(!state.pictures.find((p:Photo)=>p.id===pic.id)){
                    addPics.push(pic);
                }
            })
            return {...state, pictures:[...state.pictures,...addPics]}
        case LIKE_PIC:
            addLiked(action.payload);
            return {...state,liked:[...getLiked()]};
        case UNLIKE_PIC:
            removeLiked(action.payload);
            return {...state,liked:[...getLiked()]};         

        default: return state;
    }
}