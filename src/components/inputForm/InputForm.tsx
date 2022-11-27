import React, {useState, MouseEvent} from 'react';
import { useNavigate } from 'react-router-dom';
import InputFormView from "./inputFormView";

const InputForm:React.FC<{stickyHeaderForm:boolean}> = ({stickyHeaderForm}) => { 

  const navigate = useNavigate();
  const [input,setInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    const { value } = event.target;
    setInput((state) => (value));
  };

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    navigate(`/search/${input}`)
  }

  return (
    <InputFormView stickyHeaderForm={stickyHeaderForm} text={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
  );
}

export default InputForm;