import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* background-color: ${({ theme }) => theme.body}; */
  /* padding: 20px 0; */
  /* height: 100%; */
    width: 100%;
`;

const SlidesContainer = styled.div`
display: flex;
 overflow: hidden;
  padding: 0 5px;
   width: 100%;
 
 
 
 
`;
const InnerContainer = styled.div`
        display: flex;
        flex-direction:row;
 
 
      transform: ${({ count, cursor, d }) => {
        
        return `translateX(-${(count + cursor) * d}px)`;
    }};
           transition: all 500 ease;
`

const Button = styled.button`
 
    color: ${props=>props.theme.text};
    align-self: flex-start;
    border: 0;
    background-color: transparent;
  cursor: pointer;
    height: 500px;
    z-index: 999;
    margin-top: 10px;
    padding-right: 20px;
    padding-left: 20px;
    background-color: rgba(255,255,255,0.1);
`;


function Carousel(props) {
    let innerContainer = useRef();
    const [jump, setJump] = useState(false);
    const [cursor, setCursor] = useState(0);
    const [disable, setDisable] = useState(false)

    let d = 450

    const count = React.Children.count(props.children);



    useEffect(() => {
        

        if (jump) {
            innerContainer.current.style.transition = 'none'
            setDisable(true)
            setTimeout(() => {
                setJump(false)
                setDisable(false)
            }, 500);


        } else {
            
            innerContainer.current.style.transition = 'all 500ms ease'

        }

        return () => {
            


        }
    }, [jump, cursor])



    const onTransitionEnd = () => {
        setDisable(false)
        
        if (cursor >= count) {

            setJump(true)
            setCursor(0)
            return;
        }

        else if (cursor <= -1) {
            
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
        setDisable(true)
        setCursor(cursor + amount)

    }

    return (
        <Wrapper>
            <Button disabled={disable} onClick={() => changeCursor(-1)}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            <SlidesContainer>
                <InnerContainer d={d} count={count} cursor={cursor} ref={innerContainer}
                    onTransitionEnd={onTransitionEnd}
                >
                    {renderChildren()}
                </InnerContainer>
            </SlidesContainer>
            <Button disabled={disable} onClick={() => changeCursor(1)}>
                <FontAwesomeIcon icon={faChevronRight} /></Button>
        </Wrapper>
    )
}




export default Carousel;
