import React from 'react';
import styles from './dropDownMenu.module.css';
import Icons from '../icons/Icons';

const DropDownMenuView:React.FC<{toggleOptions:()=>void,showOptions:boolean}> = ({toggleOptions, showOptions}) => { 
     //         {showOptions?<Icons id="arrowDown"/>:<Icons id="arrowUp"/>}
  console.log(showOptions);
  return (
  <div className={styles.menu} id='dropDown'>
      <div className={styles.main}>
        <div className={styles.content} onClick={toggleOptions} >
            <span className={styles.option}>All Orientation</span>
            <button className={showOptions?(' '+styles.scale):''}>
              <Icons id="smallArrow"/>
            </button>
        </div>
    </div>
    <ul className={styles.dropDown+(showOptions?(' '+styles.show):'')}>
     <button className={styles.dropDownButton+' '+styles.choosen}>All Orientation <Icons id='done'/></button>
     <button className={styles.dropDownButton}>Horisontal</button>
     <button className={styles.dropDownButton}>Vertical</button>
     <button className={styles.dropDownButton}>Square</button>
  </ul>
  </div> 
  );
}

export default DropDownMenuView;