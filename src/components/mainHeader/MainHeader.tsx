import React from 'react';
import MainHeaderView from './MainHeaderView'
import categories from '../../constants/categories'

const MainHeader = () => {

  categories.sort(()=>Math.random()-0.5)
  const currentCathegories = categories.slice(0,7)

  return (
   <MainHeaderView categories={currentCathegories}/>
  );
}

export default MainHeader;
