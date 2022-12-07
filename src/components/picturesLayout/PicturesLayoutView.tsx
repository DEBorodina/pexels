import React from 'react';
import PicturesColumn from '../picturesColumn/PicturesColumn';
import styles from './picturesLayout.module.css'

const PicturesLayout:React.FC<{num:number}> = ({num}) => {
  return (
    <main className={styles.main}>
    <div className={styles.mainContainer}>
      <PicturesColumn num={num}/>
      <PicturesColumn num={num}/>
      <PicturesColumn num={num}/>
    </div>
   </main>
  );
}

export default PicturesLayout;
