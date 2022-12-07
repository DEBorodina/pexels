import React from 'react';
import PictureCard from '../pictureCard/PictureCard';

const PicturesColumnView:React.FC<{num:number}>  = ({num}) => {
  let arr = [];
  for (var i = 1; i <= num; i++) {
    arr.push(i);
 }
  return (
    <div> 
      {arr.map((el)=>(<PictureCard/>))}
    </div>
  );
}

export default PicturesColumnView;
