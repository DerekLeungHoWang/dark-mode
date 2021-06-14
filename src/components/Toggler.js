import React, { forwardRef, useEffect, useRef } from 'react'
import styled from "styled-components"
import { ReactComponent as SunSvg } from '../images/sun.svg'
import { ReactComponent as MoonSvg } from '../images/moon.svg'
import useElementSize from './Util/use-element-size'
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
 height: 40%;
 width: auto;
 
`
const Moon = styled(MoonSvg)`
 
 fill: #FF007F;
 height: 40%;
 width: auto;
 
`
const Wrapper = styled.div`
 color: #FF007F;
 display: flex;
  padding-top: 10px;
 
`

const Text = styled.p`
padding-left: 10px;
font-weight: 500;
  
 
`

const Toggle = React.forwardRef(({ theme, toggleTheme }, ref) => {
  


    const handleToggle = () => {
        toggleTheme()
    }
    // const dimeonsion  = useElementSize(button)
    // useEffect(() => {

    //         
    // }, [dimeonsion])

    return (
        <Wrapper>
            <Button id="darkModeButton" ref={ref} onClick={handleToggle}>

                {theme === "dark" ? <Moon /> : <Sun />}
            </Button>
            <Text>Click to Enable {`${theme === "dark" ? "Dark" : "Light"}`} Mode</Text>
        </Wrapper>
    );
});


export default Toggle;