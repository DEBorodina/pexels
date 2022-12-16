import React from 'react';
import {useEffect} from 'react';
import { useDispatch } from "react-redux";
import HomePageView from './HomePageView';
import { GET_MAIN_PAGE, REMOVE_ERROR, REMOVE_PICS } from '../../redux/actionsTypes';
import { categories, Category } from '../../constants/categories';

const HomePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_MAIN_PAGE });
    return()=>{
      dispatch({type:REMOVE_PICS})
      dispatch({type:REMOVE_ERROR})
    }
  }, [dispatch]);

    categories.sort(()=>Math.random()-0.5);
    const currentCathegories:Array<Category> = categories.slice(0,7);

  return (
   <HomePageView categories={currentCathegories}/>
  );
}

export default HomePage;
