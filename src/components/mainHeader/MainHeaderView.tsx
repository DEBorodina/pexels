import styles from './mainHeader.module.css';
import InputForm from '../inputForm/InputForm';
import Icons from '../icons/Icons';
import { Link } from "react-router-dom";

const MainHeaderView:React.FC<{categories:Array<{name:string,id:string}>}> = ({categories}) => {
    return (
      <header className={styles.header} id='header'>
      <img className={styles.backgroundImage} src="https://images.pexels.com/photos/12366051/pexels-photo-12366051.jpeg?auto=compress&bri=5&cs=tinysrgb&fit=crop&h=500&w=2000"/>
      <div className={styles.pexelsLogoContainer}>
        <Link to={'/'}className={styles.pexelsLogoLink}>
          <Icons id="whiteLogo"/>
        </Link>
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
        <a href="#" className={styles.authorContainer}>
          <span className={styles.photoBy}>Photo by &nbsp;</span>
          <span className={styles.authorName}>Mahdi Bafande</span>
        </a>
      </div>
     </header>
    );
  }
  
export default MainHeaderView;