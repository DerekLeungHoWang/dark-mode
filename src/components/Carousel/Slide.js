import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Outer = styled.div`
position: relative;
 
  width: 450px;
  height: 550px;
 display: flex;
 align-items: center;
  justify-content: center;
`;

const Inner = styled.div`
width: 100%;
  height: 80%;
 
  color: white;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //background: ${props => props.theme.contrast};
  margin: 0px 20px;
`;
const Image = styled.img`
width: 80%;
height: 900px;

`

const Title = styled.p`
color: ${props => props.theme.text};
`

export default props => {

  let title = useRef()

  useEffect(() => {


  }, [])

  const handleMouseOver = (id) => {
 
    console.log(id);
  }

  return (
    <Outer>
      <Inner>
        <Image key={props.item.id} src={props.item.img} alt={props.item.title}
          onMouseOver={()=>handleMouseOver(props.item.id)}
        />
        <Title ref={title} >{props.item.title}</Title>
      </Inner>
    </Outer>
  );
};
