import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Filters, State } from '../../redux/pictureReducer';
import CategoryHeaderView from './CategoryHeaderView';

const changeNumber = (num:number) => {
  if(num>=1000){
    return (num/1000).toFixed(1)+ "K";
  } else {
    return String(num);
  }
}

const CategoryHeader = () => {

  const total:string = changeNumber(useSelector((state:{pictures:State})=>state.pictures.total));

  let {category} = useParams();
  category = category![0].toUpperCase() + category!.slice(1).toLowerCase();

  const [showFilters,setShowfilters] = useState(false);  
  const toggleFilters=()=>{setShowfilters((showFilters)=>!showFilters);}

  return (
   <CategoryHeaderView showFilters={showFilters} toggleFilters={toggleFilters} category={category} total={total}/>
  );
}

export default CategoryHeader;