import React, {useEffect,useState} from 'react';
import PicturesLayoutView from './PicturesLayoutView'

const PicturesLayout = () => {
  const [num,setNum] = useState(3);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      const documentRect = document.documentElement.getBoundingClientRect();
      const clientHight = document.documentElement.clientHeight;
      if(documentRect.bottom < clientHight + 150){
        setNum(num=>num+3);
      } 
    })
  },[])
  return (
   <PicturesLayoutView num={num}/>
  );
}

export default PicturesLayout;
