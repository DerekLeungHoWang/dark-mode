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
  position: relative;
  bottom: 70px;
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
 
`;

