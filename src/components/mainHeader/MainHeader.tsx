import MainHeaderView from './MainHeaderView'
import { Category, categories } from '../../constants/categories'
import { connect } from 'react-redux';
import {State} from '../../redux/pictureReducer';
import { useEffect, useState } from 'react';
import { Photo } from 'pexels';
import { load } from '../pictureCard/PictureCard';

const MainHeader:React.FC<{mainPicture:Photo}> = ({mainPicture}) => {

  categories.sort(()=>Math.random()-0.5);
  const currentCathegories:Array<Category> = categories.slice(0,7);

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
   <MainHeaderView categories={currentCathegories} mainPicture={mainPicture} loadSrc={loadSeq[src]}/>
  );
}

const mapStateToProps = (state:{pictures:State}) => ({mainPicture:state.pictures.mainPic});

export default connect(mapStateToProps)(MainHeader);
