import React from 'react';
import {useEffect} from 'react';
import { useDispatch } from "react-redux";
import HomePageView from './HomePageView';
import { GET_MAIN_PAGE } from '../../redux/actionsTypes';

const HomePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_MAIN_PAGE });
  }, [dispatch]);

  return (
   <HomePageView/>
  );
}

export default HomePage;
