import React from 'react'
import styled from "styled-components"

const Button = styled.button`
  
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;
  outline: none;
  }

`;

const Sun = styled.svg`
 height: auto;
 width: 2.5rem;
 transition: all 0.7s linear;
`;

const Moon = styled.svg`
  height: auto;
  width: 2.5rem;
  transition: all 0.7s linear;
`

const Toggle = ({ theme, toggleTheme }) => {
    return (
        <Button onClick={toggleTheme}>
            {theme === "light" ?
               <span>DARK</span>
                : <span>LIGHT</span>}
        </Button>
    );
};


export default Toggle;