import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CLEAR_FILTERS, GET_CATEGORY_PAGE, REMOVE_PICS } from '../../redux/actionsTypes';
import CategoryPageView from './CategoryPageView'

const CategoryPage = () => {

  const dispatch = useDispatch();

  const {category} = useParams();

  useEffect(() => {
    dispatch({ type: GET_CATEGORY_PAGE, category });
    return ()=>{
      dispatch({type:CLEAR_FILTERS});
      dispatch({type:REMOVE_PICS})}
  }, [dispatch]);

  return (
   <CategoryPageView/>
  );
}

export default CategoryPage;
