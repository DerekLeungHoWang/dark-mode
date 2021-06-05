import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import Slide from "./Slide";




function CarouselSliders() {
    return (
        <Wrapper>

            <Carousel>
                {[...Array(10)].map((q, index) => {
                    return <Slide key={index + 1}>{index + 1}</Slide>;
                })}
            </Carousel>
        </Wrapper>
    );
}

export default CarouselSliders;

const Wrapper = styled.div`
  padding: 24px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

