import styles from './mainHeader.module.css';
import InputForm from '../inputForm/InputForm';
import Icons from '../icons/Icons';
import { Link } from "react-router-dom";
import { Category } from '../../constants/categories';
import { Photo } from 'pexels';
import { load } from '../pictureCard/PictureCard';

interface MainHeaderProbs {
  categories:Array<Category>,
  mainPicture:Photo,
  loadSrc:load;
}

const MainHeaderView:React.FC<MainHeaderProbs> = ({categories,mainPicture:{src,photographer,photographer_url,alt,id},loadSrc}) => {
    return (
      <header className={styles.header} id='header'>
      <img className={styles.backgroundImage} src={src?src[loadSrc]:""} alt={alt?String(alt):""} id={String(id)}/>
      <div className={styles.pexelsLogoContainer}>
        <a href="https://www.pexels.com" className={styles.pexelsLogoLink}>
          <Icons id="whiteLogo"/>
        </a>
      </div>
      <div className={styles.searchContainer}>
        <h1 className={styles.searchHeader}>
          The best free stock photos, royalty free images & videos shared by creators.
        </h1>
        <InputForm stickyHeaderForm={false}/>
        <div className={styles.trendingContainer}>
          <span className={styles.trending}>Trending: &nbsp;</span> 
          <ul className={styles.trendingList}>
            {categories.map(({id,name},index)=>
                <li key={id} className={styles.trendingListItem} ><Link to={`/search/${name}`} className={styles.trendingListItemText} >{name}</Link><span>{index==6?"":","}&nbsp;</span></li>
              )}
          </ul>
        </div>
        <a href={photographer_url} className={styles.authorContainer}>
          <span className={styles.photoBy}>Photo by &nbsp;</span>
          <span className={styles.authorName}>{photographer}</span>
        </a>
      </div>
     </header>
    );
  }
  
export default MainHeaderView;