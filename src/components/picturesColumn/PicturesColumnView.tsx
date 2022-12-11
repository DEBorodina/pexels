import { Photo } from 'pexels';
import React from 'react';
import PictureCard from '../pictureCard/PictureCard';
import styles from './picturesColumn.module.css';

const PicturesColumnView:React.FC<{pictures:Array<Photo>}>  = ({pictures}) => {
  return (
    <div className={styles.column}> 
      {pictures.map((picture)=>(<PictureCard key={picture.id} picture={picture}/>))}
    </div>
  );
}

export default PicturesColumnView;
