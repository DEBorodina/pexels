import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GET_CATEGORY_PAGE, REMOVE_ERROR, REMOVE_FILTERS, REMOVE_PICS } from '../../redux/actionsTypes';
import CategoryPageView from './CategoryPageView'

const CategoryPage = () => {

  const dispatch = useDispatch();

  const {category} = useParams();

  useEffect(() => {
    dispatch({ type: GET_CATEGORY_PAGE, category });
    return ()=>{
      dispatch({type:REMOVE_FILTERS});
      dispatch({type:REMOVE_PICS});
      dispatch({type:REMOVE_ERROR});}
  }, [dispatch]);

  return (
   <CategoryPageView/>
  );
}

export default CategoryPage;
