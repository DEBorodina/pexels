import React, { useState } from 'react';
import CategoryHeaderView from './CategoryHeaderView'

const CategoryHeader = () => {

  const [showFilters,setShowfilters] = useState(false);  
  const toggleFilters=()=>{setShowfilters((showFilters)=>!showFilters);}

  return (
   <CategoryHeaderView showFilters={showFilters} toggleFilters={toggleFilters}/>
  );
}

export default CategoryHeader;