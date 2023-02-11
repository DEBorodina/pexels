import { Photo } from 'pexels';
import React, {useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ADD_PICS, REMOVE_PICS } from '../../redux/actionsTypes';
import { State} from '../../redux/pictureReducer';
import PicturesLayoutView from './PicturesLayoutView'

const PicturesLayout = () => {

  const windowInnerWidth = window.innerWidth;
  let columnNumber:number;
  if(windowInnerWidth<=480){
    columnNumber = 1;
  }else {
    columnNumber = 3;
  }

  const pictures:Array<Photo>= useSelector((state:{pictures:{pictures:Array<Photo>}}) => state.pictures.pictures);
  const error:string= useSelector((state:{pictures:State}) => state.pictures.error);

  let devidedPictures:Array<Array<Photo>> = [[],[],[]];

  pictures.forEach((picture,index)=>{
    devidedPictures[index%columnNumber].push(picture);
  })

  const dispatch = useDispatch();
  const {category} = useParams();

  useEffect(()=>{
    let position = 0;
      window.addEventListener('scroll',() => {
        const mainHeight:number = Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight
        );
        const height = window.pageYOffset;
        const clientHeight = document.documentElement.clientHeight;
        if(clientHeight+height<730){
          position = 0;
        }
       if((clientHeight+height+1500)>mainHeight && position<(clientHeight+height)){
         position=(mainHeight);
          dispatch({ type: ADD_PICS,category});
        }
      });
  },[])

  return (
    error?<h1>{error}</h1>:
    <PicturesLayoutView pictures={devidedPictures} columnNumber={columnNumber}/>
  );

}

export default PicturesLayout;

