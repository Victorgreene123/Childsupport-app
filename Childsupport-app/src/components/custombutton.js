








import { Link } from 'react-router-dom';
import '../App';
import '../index.css'
import React from 'react';
import { memo } from 'react';


export default memo(function Custombutton(props){
    const [text,settext] = React.useState(props.default);
    function handleClick(event){
            settext(text == props.default? props.other : props.default)
    }
    return(
        <>
        
    
    <button className='custombutton togglepeer' onClick={() => handleClick()} type='button'>{text}</button>
    </>
    )


})