import React from 'react';
import PicturesColumnView from './PicturesColumnView'

const PicturesLayout:React.FC<{num:number}>  = ({num}) => {
  return (
   <PicturesColumnView num={num}/>
  );
}

export default PicturesLayout;
