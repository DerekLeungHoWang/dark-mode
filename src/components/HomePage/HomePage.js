import React, { useState } from 'react'
import styled from 'styled-components';
import Card from '../Card/Card';
import CardList from '../Card/CardList';
import Carousel from '../Carousel/Carousel';
import CarouselSliders from '../Carousel/CarouselSliders';
import { darkTheme, lightTheme } from '../Themes';
import Toggle from '../Toggler';
import { useDarkMode } from '../useDarkMode';


function HomePage({ theme, themeToggler }) {

    return (
        <Wrapper>
            <Titles>
                <BigTitle>Selected Art</BigTitle>
                <SmallTitle>Hover above the cards to learn more about the art</SmallTitle>
            </Titles>
            {/* <CardList>
                <Card />
            </CardList> */}



            <Toggle theme={theme} toggleTheme={themeToggler} />

            <CarouselSliders />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    
`

const Titles = styled.div`
    position: absolute;
    left: 15%;
    top:15%;
`

const BigTitle = styled.h1`

`
const SmallTitle = styled.h5`
    color: ${({ theme }) => theme.secondaryText};
`


export default HomePage
