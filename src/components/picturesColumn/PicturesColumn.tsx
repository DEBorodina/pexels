import { Photo } from 'pexels';
import React from 'react';
import PicturesColumnView from './PicturesColumnView'

const PicturesLayout:React.FC<{pictures:Array<Photo>,id:number}>  = ({pictures,id}) => {
  return (
   <PicturesColumnView pictures={pictures} id={id}/>
  );
}

export default PicturesLayout;
