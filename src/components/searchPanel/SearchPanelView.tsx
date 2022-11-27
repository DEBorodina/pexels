import React from 'react';
import Icons from '../icons/Icons';
import InputForm from '../inputForm/InputForm';
import styles from './searchPanel.module.css'

const SearchPanelView:React.FC<{hidden:boolean}> = ({hidden}) => {
  return (
    <header className={styles.stickyHeader+(hidden?(' '+(styles.cover)):'')} id='stickyHeader'>
    <div className={styles.pexelsLogoContainer}>
      <a className={styles.pexelsLogoLink}>
        <Icons id='blackLogo'/>
      </a>
      <InputForm stickyHeaderForm={true}/>
    </div>
    </header>
  );
}

export default SearchPanelView;
