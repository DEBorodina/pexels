import { Photo } from 'pexels';
import React, {useEffect,useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import { ADD_PICS } from '../../redux/actionsTypes';
import { State} from '../../redux/pictureReducer';
import PicturesLayoutView from './PicturesLayoutView'

const PicturesLayout:React.FC<{pictures:Array<Photo>}> = ({pictures}) => {

  const columnNumber = 3;

  const dispatch = useDispatch();

  let devidedPictures:Array<Array<Photo>> = [[],[],[]];

  pictures.forEach((picture,index)=>{
    devidedPictures[index%columnNumber].push(picture);
  })

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      const mainHeight:number = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
      const height = window.pageYOffset;
      const clientHeight = document.documentElement.clientHeight
     if(clientHeight*3+height>mainHeight){
        dispatch({ type: ADD_PICS });
      }
    })

  },[])

  return (
    <PicturesLayoutView pictures={devidedPictures} columnNumber={columnNumber}/>
  );

}

const mapStateToProps = (state:{pictures:State}) => ({pictures:state.pictures.pictures});

export default connect(mapStateToProps)(PicturesLayout);

