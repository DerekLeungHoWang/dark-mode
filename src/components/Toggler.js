import React from 'react'
import styled from "styled-components"
import { ReactComponent as SunSvg } from '../images/sun.svg'
const Button = styled.button`
 padding: 0px;
 margin: 0px;
 border:0px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
 border-radius: 30px;
 background: #4d4d4d;
width: 50px;
height: 50px;
 z-index:999;
 cursor: pointer;
`
const Sun = styled(SunSvg)`
 
 fill: #FF007F;
 height: 50%;
 width: auto;
 
`
const Wrapper = styled.div`
 color: #FF007F;
 display: flex;
  
 
`



const Toggle = ({ theme, toggleTheme }) => {

    const handleToggle = () => {
        toggleTheme()
    }
    return (
        <Wrapper>
            <Button onClick={handleToggle}>
                <Sun />
            </Button>
            <p></p>
        </Wrapper>
    );
};


export default Toggle;