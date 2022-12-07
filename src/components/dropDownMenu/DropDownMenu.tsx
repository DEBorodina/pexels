import React, {useEffect, useState} from 'react';
import DropDownMenuView from './DropDownMenuView';

const DropDownMenu = () => { 

  const [showOptions,setShowOprions] = useState(false);  
  const toggleOptions=()=>{setShowOprions((showOptions)=>!showOptions);}

  useEffect(()=>{
      document.addEventListener( 'click', (e) => {
      const target = e.target as HTMLElement;
      setShowOprions((showOptions)=>{
        console.log(!target.closest('#dropDown'),showOptions)
        if(!target.closest('#dropDown') && showOptions){
          return false;
        }
        else return showOptions;
      });
    })
    
  },[])
 
  return (
    <DropDownMenuView showOptions={showOptions} toggleOptions={toggleOptions}/>
  );
}

export default DropDownMenu;