import { Photo } from 'pexels';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { LIKE_PIC, UNLIKE_PIC } from '../../redux/actionsTypes';
import { State } from '../../redux/pictureReducer';
import PictureCardView from './PictureCardView'

export type load = 'small'|'medium'|'large'|'large'|'large2x'|'original';

const PictureCard:React.FC<{picture:Photo,liked:Array<number>}> = ({picture,liked}) => {

  const dispatch = useDispatch();

  const loadSeq:Array<load>  = ['small','medium','large'];
  const [src,setSrc] = useState<number>(0);
  const loaded = () => {
    const img = document.getElementById(String(picture.id))!;
    setSrc(src=>{
      if(src==2) return 2;
      else return src+1;
    });
  }

  const like = () => {
      if(!liked.includes(picture.id)){
        dispatch({type:LIKE_PIC,payload:picture.id});
      } else {
        dispatch({type:UNLIKE_PIC,payload:picture.id});
      }
  }
 
  async function downloadFile(url:string, fileName:string) {
    const image = await fetch(url);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'pexels';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  useEffect(()=>{
    const img = document.getElementById(String(picture.id))!;
    let width:number = img.offsetWidth;
    let height:number = width*picture.height/picture.width;
    img.style.minHeight = String(height-5)+'px';
    img.style.background = picture.avg_color!;
  },[])

  return (
   <PictureCardView picture={picture} srcLoad={loadSeq[src]} loaded={loaded} downloadFile={downloadFile} like={like} isLiked={liked.includes(picture.id)}/>
  );
}

const mapStateToProps=(state:{pictures:State}) => ({liked:state.pictures.liked});

export default connect(mapStateToProps)(PictureCard);
