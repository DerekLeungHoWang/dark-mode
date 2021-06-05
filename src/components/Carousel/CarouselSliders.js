import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import { data } from "./data";
import Slide from "./Slide";




function CarouselSliders() {
    return (
        <Wrapper>

            <Carousel>
                {data.map((item, index) => {
                    return <Slide key={index + 1} item={item} />;
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

