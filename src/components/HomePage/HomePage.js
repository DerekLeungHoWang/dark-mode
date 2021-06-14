import { Grid } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import Card from '../Card/Card';
import CardList from '../Card/CardList';
import Carousel from '../Carousel/Carousel';
import CarouselSliders from '../Carousel/CarouselSliders';
import { darkTheme, lightTheme } from '../Themes';
import Toggle from '../Toggler';
import { useDarkMode } from '../useDarkMode';


const HomePage = React.forwardRef(({ theme, themeToggler }, ref) => {


    return (
        <Wrapper container
            direction="row"
            justify="center"
            alignItems="center">

            <Grid container item
                direction="column"
                justify="center"
                alignItems="center">
                <Titles>
                    <BigTitle>Selected Art</BigTitle>
                    <SmallTitle>Hover above the cards to learn more about the art</SmallTitle>
                    <Toggle ref={ref} theme={theme} toggleTheme={themeToggler} />
                </Titles>
            </Grid>

            <Grid container item >
                <CarouselSliders />
            </Grid>
        </Wrapper>
    )
})
const Titles = styled.div`
    width:75%;
    text-align: left;
    margin-bottom: 50px;
   
`

const Wrapper = styled(Grid)`
    
    position: relative;
    top: 18vh;
   
    
`



const BigTitle = styled.h1`
    font-size: 50px;
    margin: 0px;
    padding: 0px;
`
const SmallTitle = styled.h5`
   font-size: 20px;
   margin: 0px;
    padding: 0px;
    /* color: ${({ theme }) => theme.secondaryText}; */
`


export default HomePage
