import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(242, 242, 242, 1);
  padding: 20px 0;
 
`;

const SlidesContainer = styled.div`
  display: flex;
  width: 800px;
 overflow: hidden;
  padding: 0 5px;
 
 
 
 
 
`;
const InnerContainer = styled.div`
        display: flex;
        flex-direction:row;
 
      transform: ${({ count, cursor }) => {
        console.log(count, cursor);
        return `translateX(-${(count + cursor) * 400}px)`;
    }};
           transition: all 2000ms ease;
`

const Button = styled.button`
  color: rgba(17, 17, 17, 0.4);
  background-color: transparent;
  padding: 0 10px;
  border: 0;
  display: block;
  align-self: stretch;
`;


function Carousel(props) {
    let innerContainer = useRef();
    const [jump, setJump] = useState(false);
    const [cursor, setCursor] = useState(0);

    const count = React.Children.count(props.children);


    // useEffect(() => {

    //     innerContainer.current.addEventListener("transitionend", onTransitionEnd);
    //     return () => {
    //         innerContainer.current.removeEventListener("transitioned", onTransitionEnd);
    //     }
    // }, [])

    useEffect(() => {
        console.log('triggered, jump = ', jump, ' cursor = ', cursor);
        if (jump) {
            innerContainer.current.style.transition = 'none'
            setTimeout(() => {
                setJump(false)
            }, 200);


        } else {
            console.log('jump is ', jump);
            innerContainer.current.style.transition = 'all 200ms ease'
        }

        return () => {
            console.log('clean');
          
       
        }
    }, [jump, cursor])



    const onTransitionEnd = () => {

        console.log('trans end = ', cursor);
        if (cursor >= count) {

            setJump(true)
            setCursor(0)
            return;
        }

        else if (cursor <= -1) {
            console.log('setting cursor to 9 ');
            setJump(true)
            setCursor(count - 1)

            return;
        }

        //  setJump(false)

    }




    const renderChildren = () => {
        const { children: childrenElements } = props;
        let children = React.Children.toArray(childrenElements);
        children = [].concat(children, children, children);

        return children.map((child, index) => {
            return React.cloneElement(child, { key: index });
        });
    }

    const changeCursor = (amount) => {

        setCursor(cursor + amount)

    }

    return (
        <Wrapper>
            <button onClick={() => changeCursor(-1)}>
                left
                </button>
            <SlidesContainer>
                <InnerContainer count={count} cursor={cursor} ref={innerContainer}
                    onTransitionEnd={onTransitionEnd}
                >
                    {renderChildren()}
                </InnerContainer>
            </SlidesContainer>
            <button onClick={() => changeCursor(1)}>right</button>
        </Wrapper>
    )
}



export default Carousel;
