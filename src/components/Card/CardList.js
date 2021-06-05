import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { data } from './data'

function CardList() {
    return (
        <Wrapper>
            {data.map((item, index) => {

                return (
                    <div>
                        <Card item={item} key={item.id} />
                    </div>
                )
            })}

        </Wrapper>
    )
}
const Wrapper = styled.div`
    position: relative;
    top: 30%;
    height: 480px;
    width: 100vw;
 
    display: flex;
    
    align-content: center;
    justify-content: center;
    & > *{
        margin: 0px 30px;
    }
  
`
export default CardList
