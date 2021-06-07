import React from 'react'
import styled from "styled-components"
import { ReactComponent as Sun } from '../images/sun.svg'
const Button = styled.button`
  position: absolute;
  border-radius: 30px;
  cursor: pointer;
  
  width: 40px;
  height:  40px;
  outline: none;
 
  z-index: 999;

`





const Toggle = ({ theme, toggleTheme }) => {

    const handleToggle = () => {
        toggleTheme()
    }
    return (
        <Button onClick={handleToggle}>
            {/* {theme === "light" ?
               <Sun/>
                :     <Sun/>} */}
            <Sun />
        </Button>
    );
};


export default Toggle;