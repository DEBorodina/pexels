import StickyHeader from '../../components/searchPanel/StickyHeader';
import PicturesLayout from '../../components/picturesLayout/PicturesLayout';
import MainHeader from '../../components/mainHeader/MainHeader';
import { Category } from '../../constants/categories';

const HomePage:React.FC<{categories:Array<Category>}> = ({categories}) => {
  return (
    <>
    <StickyHeader/>
    <MainHeader categories={categories}/>
    <PicturesLayout/>
   </>
  );
}

export default HomePage;
