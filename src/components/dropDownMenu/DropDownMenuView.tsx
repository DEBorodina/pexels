import React from 'react';
import styles from './dropDownMenu.module.css';
import Icons from '../icons/Icons';
import { FilterQuery, filters } from '../../constants/filters';
import { CurrentFilter } from './DropDownMenu';

interface DropDownMenuViewProps{
  toggleOptions:()=>void,
  showOptions:boolean,
  currentFilters:Array<CurrentFilter>,
  handleFilter:(query:number)=>void,
}

const DropDownMenuView:React.FC<DropDownMenuViewProps> = ({toggleOptions, showOptions,currentFilters, handleFilter}) => { 
  return (
  <div className={styles.menu} id='dropDown'>
      <div className={styles.main+((currentFilters.findIndex(filter=>filter.isCurrent))?(" "+styles.changed):"")}>
        <div className={styles.content} onClick={toggleOptions} >
            <span className={styles.option}>{currentFilters.find(filter=>filter.isCurrent)?.name}</span>
            <button className={showOptions?(' '+styles.scale):''}>
              <Icons id="smallArrow"/>
            </button>
        </div>
    </div>
    <ul className={styles.dropDown+(showOptions?(' '+styles.show):'')}>
      {currentFilters.map((filter:CurrentFilter,index:number)=>{
        const {name,isCurrent,query} = filter;
        return <button className={styles.dropDownButton+(isCurrent?(' '+styles.choosen):"")} onClick={()=>{handleFilter(index)}} key={name}>{name}{isCurrent?<Icons id='done'/>:""}</button>
      })}
  </ul>
  </div> 
  );
}

export default DropDownMenuView;