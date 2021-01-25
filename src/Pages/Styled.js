import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
    }
`

export const MainArea = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const CarouselArea = styled.div`
    grid-column: 1;
    background-color: #A9C5BA;
    width: 76%;
    padding: 10% 12% 0% 12%;
`

export const SlideDiv = styled.div`
    background-color: #A9C5BA;
`

export const TextBoxTitle = styled.p`
    margin: 0;
    padding: 0;
    color: grey;
`

export const TextBoxDescription = styled.span`
    margin: 0;
    padding: 0;
`

export const UserArea = styled.div`
    grid-column: 2;
    background-color: blue;
`