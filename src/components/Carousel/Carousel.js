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
 
 
      transform: ${({ count, cursor }) => {
        console.log(count, cursor);
        return `translateX(-${(count + cursor) * 400}px)`;
    }};
           transition: all 500 ease;
`

const Button = styled.button`
  color: red;
  background-color: white;
  padding: 0 10px;
  border: 0;
  display: block;
  cursor: pointer;
    height: 80px;
`;


function Carousel(props) {
    let innerContainer = useRef();
    const [jump, setJump] = useState(false);
    const [cursor, setCursor] = useState(0);
    const [disable, setDisable] = useState(false)

    const count = React.Children.count(props.children);

 

    useEffect(() => {
        console.log('triggered, jump = ', jump, ' cursor = ', cursor);

        if (jump) {
            innerContainer.current.style.transition = 'none'
            setDisable(true)
            setTimeout(() => {
                setJump(false)
                setDisable(false)
            }, 500);


        } else {
            console.log('jump is ', jump);
            innerContainer.current.style.transition = 'all 500ms ease'

        }

        return () => {
            console.log('clean');


        }
    }, [jump, cursor])



    const onTransitionEnd = () => {
        setDisable(false)
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
        setDisable(true)
        setCursor(cursor + amount)

    }

    return (
        <Wrapper>
            <Button disabled={disable} onClick={() => changeCursor(-1)}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            <SlidesContainer>
                <InnerContainer count={count} cursor={cursor} ref={innerContainer}
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
