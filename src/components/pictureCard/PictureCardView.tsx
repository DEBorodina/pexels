import { Photo } from 'pexels';
import React from 'react';
import { Link } from 'react-router-dom';
import Icons from '../icons/Icons';
import { load } from './PictureCard';
import styles from './pictureCard.module.css';

interface PictureCardViewProps{
  picture:Photo,
  srcLoad:load,
  loaded:()=>void,
  downloadFile:(url:string, fileName:string)=>void,
  like:()=>void,
  isLiked:boolean,
}

const PictureCardView:React.FC<PictureCardViewProps> = ({picture:{src,photographer,photographer_url,alt,id,avg_color},srcLoad,loaded,downloadFile,like,isLiked})  => {
  return (
       <div className={styles.card} id={String(id)} style={{backgroundColor:avg_color!}}>
        <img className={styles.cardImage} src={src[srcLoad]} alt={String(alt)} loading="lazy" onLoad={loaded}/>
        <div className={styles.hoverLayout}>
            <button className={styles.button+' '+styles.like} onClick={()=>{like()}}><Icons id={isLiked?"liked":"like"}/></button>
            <a className={styles.button+' '+styles.download} onClick={()=>{downloadFile(src['original'],'picture')}}><Icons id={"download"}/></a>
              <div className={styles.author}>
                <img className={styles.authorImage} src="https://images.pexels.com/photos/7250029/pexels-photo-7250029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <a href={photographer_url}>
                  <span className={styles.authorName}>{photographer}</span>
                </a>
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