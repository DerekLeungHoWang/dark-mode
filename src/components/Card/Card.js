import React from 'react'
import styled from 'styled-components'


export default function Card({ item: { id, title, img, } }) {
    return (
        <Wrapper>
            <img src={img} alt={title} />

        </Wrapper>
    )
}

const Wrapper = styled.div`

    position: relative;
    height: 530px;
    width: 400px;
    background-color: red;
    cursor: pointer;
    img{
        height: 100%;
        width: 100%;
        border-radius: 10px;
    }
`
