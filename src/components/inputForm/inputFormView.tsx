import React from 'react';
import Icons from '../icons/Icons';
import styles from './inputPanel.module.css'

interface InputFormProps{
    stickyHeaderForm:boolean,
    text:string,
    handleSubmit:(event:React.FormEvent<HTMLFormElement>)=>void,
    handleInputChange: (event:React.ChangeEvent<HTMLInputElement>)=>void,
}

const inputFormView:React.FC<InputFormProps> = ({stickyHeaderForm,text,handleInputChange,handleSubmit}) => {
  return (
      <form action="" className={styles.searchForm+(stickyHeaderForm?(" "+styles.stickySearchForm):'')} 
      onSubmit={handleSubmit}>
        <input type="search" className={styles.searchInput+" "+styles.greysearchInput} placeholder="Search for free photos" value={text} onChange={handleInputChange}/>
        <button className={styles.searchButton}>
          <Icons id="search"/>
        </button>
      </form>
  );
}

export default inputFormView;