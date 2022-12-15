import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Filter, FilterQuery, filters } from '../../constants/filters';
import { CHANGE_FILTERS } from '../../redux/actionsTypes';
import { Filters } from '../../redux/pictureReducer';
import DropDownMenuView from './DropDownMenuView';

export interface CurrentFilter extends Filter{
  isCurrent:boolean,
}

const DropDownMenu:React.FC<{filterType:"size"|"orientation"}> = ({filterType}) => { 

  const currentQuery = useSelector((state:{pictures:{filters:Filters}}) => {
    const choosenFilters = state.pictures.filters;
    let query:FilterQuery = {};
    if(filters.orientation[choosenFilters.orientation].query.orientation){
      query.orientation = filters.orientation[choosenFilters.orientation].query.orientation;
    }
    if(filters.size[choosenFilters.size].query.size){
      query.size = filters.size[choosenFilters.size].query.size;
    }
    return query;
  })

  const currentIndex:number = useSelector((state:{pictures:{filters:Filters}}) => state.pictures.filters[filterType])
  let currentFilters:Array<CurrentFilter> = filters[filterType].map((filter,index)=>{
    if(index===currentIndex) return {...filter,isCurrent:true};
    else return {...filter,isCurrent:false};
  })

  const [showOptions,setShowOprions] = useState(false);  
  const toggleOptions=()=>{setShowOprions((showOptions)=>!showOptions);}


 const dispatch = useDispatch();
 const {category} = useParams();

 const handleFilter = (index:number) => {
    setShowOprions(()=>false);
    let query = {[filterType]:index};
    dispatch({type:CHANGE_FILTERS,category,query});
 }

  useEffect(()=>{
      document.addEventListener( 'click', (e) => {
      const target = e.target as HTMLElement;
      setShowOprions((showOptions)=>{
        if(!target.closest('#dropDown') && showOptions){
          return false;
        }
        else return showOptions;
      });
    })
    
  },[])
 
  return (
    <DropDownMenuView showOptions={showOptions} toggleOptions={toggleOptions} currentFilters={currentFilters} handleFilter={handleFilter}/>
  );
}

export default DropDownMenu;