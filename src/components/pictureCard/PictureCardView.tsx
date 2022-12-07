import React from 'react';
import Icons from '../icons/Icons';
import styles from './pictureCard.module.css'

const PictureCardView = () => {
  return (
       <div className={styles.card}>
        <img className={styles.cardImage} src="https://images.pexels.com/photos/13554985/pexels-photo-13554985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <div className={styles.hoverLayout}>
            <button className={styles.button+' '+styles.like}><Icons id={"like"}/></button>
            <button className={styles.button+' '+styles.download}><Icons id={"download"}/></button>
              <div className={styles.author}>
                <img className={styles.authorImage} src="https://images.pexels.com/photos/7250029/pexels-photo-7250029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <span className={styles.authorName}>Sasha Prasastika</span>
              </div>
          </div>
       </div>
  );
}

/*  
          <div className={styles.author}>
            <img className={styles.authorImage} src="https://images.pexels.com/photos/7250029/pexels-photo-7250029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <span className={styles.authorName}></span>
          </div>
          */
export default PictureCardView;