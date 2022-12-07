import React from 'react';
import styles from './categoryHeader.module.css';
import DropDownMenu from '../dropDownMenu/DropDownMenu';
import Icons from '../icons/Icons';

const CategoryHeaderView:React.FC<{showFilters:boolean, toggleFilters: ()=>void}> = ({showFilters,toggleFilters}) => {
  return (
   <header className={styles.container}>
    <div className={styles.content}>
    <h1 className={styles.header}>Sky Images & Wallpapers</h1>
    <div className={styles.buttonContainer}>
      <div className={styles.photoesContainer}>
         <span className={styles.photoes}>Photos</span>
         <span className={styles.photoesNumber}>21.5K</span>
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
      <DropDownMenu/>
      <DropDownMenu/>
    </div>
    </div>
   </header>
  );
}

export default CategoryHeaderView;