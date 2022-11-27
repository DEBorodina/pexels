import { useEffect,useState } from "react";
import SearchPanelView from "./SearchPanelView";

const StickyHeader = () => {

  
  const [hidden, setHidden] = useState(true);

  useEffect(()=>{

    const headerHeigth = document.getElementById('header')!.offsetHeight;


    window.addEventListener('scroll',()=>{
      const documentRect = document.documentElement.getBoundingClientRect();
      if(headerHeigth<-documentRect.top){
        setHidden(hidden=>false);
      } 
      if(headerHeigth>-documentRect.top){
        setHidden(hidden=>true);
      } 
    })

  },[]);  
  
  return (
    <SearchPanelView hidden={hidden}/>
  );
}

export default StickyHeader;
