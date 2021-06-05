import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  padding: 10px 5px;
  width: 400px;
  height: 600px;
`;

const Inner = styled.div`
  width: 240px;
  height: 80px;
  background-color: red;
  color: white;
  padding: 5px;
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default props => {
    return (
        <Outer>
            <Inner>

                <img src={props.item.img} alt={props.item.title} />
            </Inner>
        </Outer>
    );
};
