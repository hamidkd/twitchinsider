import React from 'react';
import styled from 'styled-components';
import SearchBox from './SearchBox';
export default function HomePage () {
    
    return (
    <Div>
        <SearchBox />
    </Div>
)};
const Div = styled.div`
height: 100%;
margin: 1rem;
padding: 1.5rem;
border-radius: 1.5rem;
background: ghostwhite;
border: 1px solid gray;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`