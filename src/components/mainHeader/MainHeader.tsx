import MainHeaderView from './MainHeaderView'
import { Category} from '../../constants/categories'
import { useEffect, useState } from 'react';
import { Photo } from 'pexels';
import { load } from '../pictureCard/PictureCard';
import { useSelector } from 'react-redux';

const MainHeader:React.FC<{categories:Array<Category>}> = ({categories}) => {

  const mainPicture:Photo = useSelector((state:{pictures:{mainPic:Photo}}) => state.pictures.mainPic);

  const loadSeq:Array<load> = ['small','medium','large','large2x','original']
  const [src,setSrc] = useState<number>(0);

  useEffect(()=>{
    const img:HTMLElement = document.getElementById(String(mainPicture.id))!;
    img.onload = function():void {
      setSrc(src=>{
        if(src==4) return 4;
        else return src+1;
      });
    };
  })

  return (
   <MainHeaderView categories={categories} mainPicture={mainPicture} loadSrc={loadSeq[src]}/>
  );
}

export default MainHeader;
