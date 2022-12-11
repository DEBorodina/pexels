import React from 'react';
import Icons from '../icons/Icons';
import InputForm from '../inputForm/InputForm';
import styles from './searchPanel.module.css'
import {Link} from 'react-router-dom';

const SearchPanelView:React.FC<{hidden:boolean}> = ({hidden}) => {
  return (
    <header className={styles.stickyHeader+(hidden?(' '+(styles.cover)):'')} id='stickyHeader'>
    <div className={styles.pexelsLogoContainer}>
      <a href="https://www.pexels.com" className={styles.pexelsLogoLink}>
        <Icons id='blackLogo'/>
      </a>
      <InputForm stickyHeaderForm={true}/>
    </div>
    </header>
  );
}

export default SearchPanelView;
