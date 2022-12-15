import React from 'react';
import styles from './categoryHeader.module.css';
import DropDownMenu from '../dropDownMenu/DropDownMenu';
import Icons from '../icons/Icons';
import { Filters } from '../../redux/pictureReducer';

const CategoryHeaderView:React.FC<{showFilters:boolean, toggleFilters: ()=>void, category:string,total:string}> = ({showFilters,toggleFilters,category,total}) => {
  return (
   <header className={styles.container}>
    <div className={styles.content}>
    <h1 className={styles.header}>{category}</h1>
    <div className={styles.buttonContainer}>
      <div className={styles.photoesContainer}>
         <span className={styles.photoes}>Photos</span>
         <span className={styles.photoesNumber}>{total}</span>
       </div>
       <div className={styles.buttonGroup}>
       <button className={styles.filters} onClick={toggleFilters}>
         <div className={styles.rotate+(showFilters?(' '+styles.scale):'')}>
          <Icons id='bigArrow'/>
         </div>
         <span className={styles.filtersText}>Filters</span>
       </button>
       <button className={styles.cross}>
        <Icons id='cross'/>
       </button>
       </div>
    </div>
    <div className={styles.filtersContainer+(showFilters?(' '+styles.showFilters):'')}>
      <DropDownMenu filterType={"orientation"}/>
      <DropDownMenu filterType={"size"}/>
    </div>
    </div>
   </header>
  );
}

export default CategoryHeaderView;