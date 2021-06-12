import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
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

  const [current, setCurrent] = useState(null)
  const [hovered, setHovered] = useState(false)
  const [ref, setRef] = React.useState({});

  const tl = useRef(gsap.timeline({ paused: true }));


  let outer = useRef()
  let inner = useRef()
  let title = useRef()
  let img = useRef()

  useEffect(() => {
    console.log('current = ', current);
   // tl.current.to(".outer", { duration: 1, scale: 0.8 })
 
    tl.current.to(".outer", { duration: 1, scale: .5 ,overwrite:true })   
     .to(outer.current, { duration: 1, scale: 1.5} )   

  }, [current])


  useEffect(() => {

  }, [])

  const handleMouseOver = (e, id) => {
    
    setCurrent(parseInt(id))
    tl.current.play()
    // props.handleHover(id)
    setHovered(true)
 
  }
  const handleMouseLeave = (e, id) => {
    tl.current.reverse()
    // props.handleLeave()
    setHovered(false)

  }

  return (
    <Outer ref={outer} data-key={props.item.id} className="outer" >
      <Inner ref={inner}  >
        <Image
          ref={img}

          key={props.item.id} src={props.item.img} alt={props.item.title}
          onMouseOver={(e) => handleMouseOver(e, props.item.id)}
          onMouseLeave={(e) => handleMouseLeave(e, props.item.id)}
        />
        <Title ref={title} >{props.item.title}</Title>
      </Inner>
    </Outer>
  );
};
