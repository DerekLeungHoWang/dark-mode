

import React from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { menuItems } from './MenuItem'
const Wrapper = styled.div`
 
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-content: center;
    justify-content: space-between;
    /* color:${({ theme }) => theme.text}; */
`;


const Logo = styled.h1`
    margin-left: 35px;
    margin-top: 35px;
`;
const NavLinkContainer = styled.div`
    text-decoration: none;
    position: absolute;
    right: 50px;
    top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
 
`;

const NavLink = styled.div`
    text-decoration: none;
    margin-left: 50px;
    color: ${({ theme }) => theme.text};
`;
export default function Navbar() {

    return (

        <Wrapper >
            <Logo >DEREK</Logo>
            <NavLinkContainer>
                {menuItems.map((item, index) => {
                    return (
                        <Link key={index} to={item.url}><NavLink key={item.title}>
                            {item.title}
                        </NavLink></Link>
                    )
                })}
            </NavLinkContainer>

        </Wrapper>

    )
}
