import { Photo } from 'pexels';
import React, { memo } from 'react';
import PicturesColumn from '../picturesColumn/PicturesColumn';
import styles from './picturesLayout.module.css'

interface PicturesLayoutProps{
  pictures:Array<Array<Photo>>,
  columnNumber:number
}

const PicturesLayoutView:React.FC<PicturesLayoutProps> = memo(({pictures,columnNumber}) => {


  let columns:Array<JSX.Element> = []; 
  while(columnNumber>0){
    columns.push(<PicturesColumn pictures={pictures[3-columnNumber]} key={columnNumber} id={columnNumber}/>);
    columnNumber-=1;
  }

  return (
    <main className={styles.main} id="main">
    <div className={styles.mainContainer}>
      {columns.map(column=>column)}
    </div>
   </main>
  );
});

export default PicturesLayoutView;
