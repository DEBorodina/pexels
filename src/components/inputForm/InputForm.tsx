import React, {useState, MouseEvent} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { REMOVE_PICS } from '../../redux/actionsTypes';
import InputFormView from "./inputFormView";

const InputForm:React.FC<{stickyHeaderForm:boolean}> = ({stickyHeaderForm}) => { 

  const navigate = useNavigate();
  const [input,setInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    const { value } = event.target;
    setInput((state) => (value));
  };

  const dispatch = useDispatch()
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>):void => {
    //event.preventDefault();
    navigate(`/search/${input}`)
  }

  return (
    <InputFormView stickyHeaderForm={stickyHeaderForm} text={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
  );
}

export default InputForm;