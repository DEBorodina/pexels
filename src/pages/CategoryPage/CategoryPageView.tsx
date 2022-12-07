import PicturesLayout from '../../components/picturesLayout/PicturesLayout';
import SearchPanel from '../../components/searchPanel/SearchPanel';
import CategoryHeader from '../../components/categoryHeader/CategoryHeader';
import styles from './categoryPage.module.css';

const HomePageView = () => {
  return (
    <>
       <SearchPanel/>
       <CategoryHeader/>
       <PicturesLayout/>
    </>
  );
}

export default HomePageView;
