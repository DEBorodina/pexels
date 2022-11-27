import StickyHeader from '../components/searchPanel/StickyHeader';
import styles from './homePage.module.css';
import InputForm from '../components/inputForm/InputForm';
import Icons from '../components/icons/Icons';

const HomePage = () => {


  return (
    <>
    <StickyHeader/>
    <header className={styles.header} id='header'>
    <img className={styles.backgroundImage} src="https://images.pexels.com/photos/14506024/pexels-photo-14506024.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=2000"/>
    <div className={styles.pexelsLogoContainer}>
      <a className={styles.pexelsLogoLink}>
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
          <li className={styles.trendingListItem}><a>water</a><span>,&nbsp;</span></li>
          <li className={styles.trendingListItem}><a>nature</a><span>,&nbsp;</span></li>
          <li className={styles.trendingListItem}><a>animal</a><span>,&nbsp;</span></li>
          <li className={styles.trendingListItem}><a>sea</a><span>,&nbsp;</span></li>
          <li className={styles.trendingListItem}><a>tree</a><span>,&nbsp;</span></li>
          <li className={styles.trendingListItem}><a>ocean</a><span>,&nbsp;</span></li>
          <li className={styles.trendingListItem}><a>computer</a></li>
        </ul>
      </div>
      <a href="#" className={styles.authorContainer}>
        <span className={styles.photoBy}>Photo by &nbsp;</span>
        <span className={styles.authorName}>Mahdi Bafande</span>
      </a>
    </div>
   </header>
   <main className={styles.main}>
    <div className={styles.mainContainer}>
      <div className={styles.column}>
        <div className={styles.card1}></div>
        <div className={styles.card}></div>
        <div className={styles.card2}></div>
      </div>
      <div className={styles.column}>
        <div className={styles.card2}></div>
        <div className={styles.card2}></div>
        <div className={styles.card}></div>
      </div>
      <div className={styles.column}>
        <div className={styles.card}></div>
        <div className={styles.card2}></div>
        <div className={styles.card1}></div>
      </div>
    </div>
   </main>
   </>
  );
}

export default HomePage;
