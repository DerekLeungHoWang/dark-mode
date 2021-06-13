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

  const tl = useRef(gsap.timeline());
  let refs = [];

  let outer = useRef([])
  let inner = useRef()
  let title = useRef()
  let img = useRef()

  useEffect(() => {






  }, [])




  const handleMouseOver = (e, id) => {
    let nodes = [...outer.current.parentNode.childNodes]

    let newNodes = nodes.filter((item, i) => {
      return i != id
    })

    let target = nodes.filter((item, i) => {
      return i == id
    })

    gsap.to(newNodes, {
      scale: .9,
      duration: .5,
      opacity: .3,
      ease:"power3.inOut"
    })
    gsap.to(target, {
      scale: 1.2,
      duration: .5,
      opacity: 1,
     // overwrite:true,
     // ease:"power3.inOut"
    })


  }
  const handleMouseLeave = (e, id) => {
    let nodes = [...outer.current.parentNode.childNodes]
    let target = nodes.filter((item, i) => {
      return i == id
    })
    gsap.to(nodes, {
      scale: 1,
      duration: .5,
      opacity: 1
    })   
    gsap.to(target, {
      scale: 1,
      duration: .5,
      opacity: 1,
      // overwrite:true,

      // ease:"power3.inOut"
    })


  }



  return (
    <Outer ref={outer} data-key={props.item.id} className="outer" >
      <Inner ref={inner}  >
        <Image
          ref={img}

          key={props.item.id} src={props.item.img} alt={props.item.title}
          onMouseOver={(e) => handleMouseOver(e, props.index)}
          onMouseLeave={(e) => handleMouseLeave(e, props.index)}
        />
        <Title ref={title} >{props.item.title}</Title>
      </Inner>
    </Outer>
  );
};
