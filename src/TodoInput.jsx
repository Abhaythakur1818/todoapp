import React, { useState } from "react";

function TodoInput(props)
{
    const [inputText , setinputText] = useState('');
    const handleEnter = (e)=>{
        if(e.keyCode === 13)
        {
            props.addList(inputText);
            setinputText("")
        }
    }
    return (

        <div className = "input-container">
            <input type = "text" className="input-box-todo" placeholder="Enter your Todo" value={inputText} onChange={
                e =>{
                    setinputText(e.target.value);
                }}
                onKeyDown={handleEnter}
            />
            <button className="add-btn" onClick={() =>{
                props.addList(inputText);
                setinputText("")
            }}>+</button>
            
        </div>
    )
}

export default TodoInput;
