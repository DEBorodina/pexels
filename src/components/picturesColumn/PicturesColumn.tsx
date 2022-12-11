import { Photo } from 'pexels';
import React from 'react';
import PicturesColumnView from './PicturesColumnView'

const PicturesLayout:React.FC<{pictures:Array<Photo>}>  = ({pictures}) => {
  return (
   <PicturesColumnView pictures={pictures}/>
  );
}

export default PicturesLayout;
