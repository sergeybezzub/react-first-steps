import React, {useState} from "react";
import ListItemComponent from './ListItemComponent';

const ListComponent = () => {
const [input, setInput] = useState('');
const [item,setItem] = useState(['first element']);

const onClickHandler = (new_input) => {
  const updatedElement = [...item, new_input];
  setItem(updatedElement);
  setInput('');
};

const onCleanHandler = () => {
    const updatedElement = [];
    setItem(updatedElement);
    setInput('');
  };
  

const onEnterHandler = (e) => {
    if(e.key === 'Enter') {
        const updatedElement = [...item, input];
        setItem(updatedElement);
        setInput('');
    }
};

const onChangeHandler = (e) => {
  const value = e.target.value;
  setInput(value);
};

return <>
        <input onKeyDown={onEnterHandler} onChange={onChangeHandler} value={input} />
        <h2>{item.length}</h2>
        <ul>
          {item.map((element, index) => ( 
            <ListItemComponent element={element} index={index} />           
          ))}
        </ul>
        <button onClick={() => onClickHandler(input)}>Add ne element</button>
        <button onClick={onCleanHandler}>Clean</button>
    </>;

};

export default ListComponent;