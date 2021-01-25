import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import { Variables } from './Variables';

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

    @media (max-width: 768px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`

export const CarouselArea = styled.div`
    grid-column: 1;
    background-color: ${Variables.PrimaryColor};
    width: 75%;
    padding: 14% 12.5% 0% 12.5%;

    /*Media Queries tested on:
    Laptop
    Galaxy S5
    iPhone 5/SE
    iPad (Both Rotations)
    */

    @media (max-width: 1024px){
        width: 512px;
        padding: 25% 0 0 0;
    }

    @media (max-width: 768px){
        width: 100%;
        padding: 20% 0 0 0;
    }

    @media (max-width: 640px){
        width: 100%;
        padding: 0% 0 0 0;
    }

    @media (max-width: 360px){
        padding: 20% 0 0 0;
        height: 70vh;
        width: 100vw;
    }

    @media (max-width: 320px){
        padding: 10% 0 0 0;
        height: 50vh;
    }
`

export const SlideDiv = styled.div`
    background-color: ${Variables.PrimaryColor};
    padding-bottom: 10%;
`

export const TextBoxTitle = styled.p`
    margin: 1vh 0 2vh 0;
    font-size: ${Variables.SecondaryMedium};
    font-family: ${Variables.PrimaryFont};
    color: ${Variables.TertiaryColor};
    padding: 0;
`

export const TextBoxDescription = styled.span`
    margin: 0;
    font-size: ${Variables.PrimaryBig};
    font-family: ${Variables.PrimaryFont};
    color: ${Variables.TertiaryColor};
`

export const UserArea = styled.div`
    grid-column: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: stretch;
    flex-wrap: nowrap;

    @media (max-width: 768px){
        grid-column: 1;
        grid-row: 2;
        height: 80vh;
    }

    @media (max-width: 640px){
        height: 120vh;
    }

    @media (max-width: 411px){
        padding: 10% 0 0 0;
        height: 70vh;
    }

    @media (max-width: 375px){
        padding: 0% 0 0 0;
    }

    @media (max-width: 360px){
        padding: 10% 0 0 0;
        height: 100vh;
    }

    @media (max-width: 320px){
        height: 90vh;
    }
`

export const TitleCard = styled.p`
    margin: 6% 8% 0 0;
    display: flex;
    align-self: flex-end;
    font-family: ${Variables.TertiaryFont};
    font-size: ${Variables.SecondaryBig};
`

export const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 288px;
`

export const WelcomeText = styled.h3`
    margin: 8vh 0 0 0;
    color: ${Variables.SecondaryColor};
    text-align: center;
`

export const FormBox = styled.form`
    margin-top: 6vh;
    display: flex;
    flex-direction: column;
`

export const FormBoxLabel = styled.p`
    margin: 0;
    color: ${Variables.SecondaryColor};
    font-size: ${Variables.PrimarySmall};
    font-family: ${Variables.PrimaryFont};
`

export const FormBoxInput = styled.input`
    margin-top: 1vh;
    width: 285px;
    outline: 0;
    border-width: 0 0 1px;
    text-indent: 14px;
    margin-bottom: 0.62vh;
    :focus:invalid {border: 2px solid ${Variables.Error};}
    font-family: ${Variables.PrimaryFont};
`

export const FormBoxForgotButton = styled.button`
    margin: 1vh 0 0 0;
    padding: 0;
    color: ${Variables.SecondaryColor};
    font-size: ${Variables.PrimarySmall};
    outline: none;
    border-width: 0px;
    background-color: ${Variables.TertiaryColor};
    align-self: flex-end;
`

export const FormSignInButton = styled.button`
    margin: 2vh 0 0 0;
    padding: 0;
    height: 35px;
    width: 140px;
    background-color: ${Variables.SecondaryColor};
    border-radius: 100px;
    border: none;
    outline: none;
    color: ${Variables.TertiaryColor};
    align-self: center;
    font-family: ${Variables.PrimaryFont};
`

export const DividerBox = styled.div`
    margin-top: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 300px;
`

export const DividerText = styled.span`
    margin: 0;
    color: ${Variables.SecondaryColor};
    font-family: ${Variables.PrimaryFont};
`

export const FormDivider = styled.hr`
    display: inline-block;
    width: 100px;
    border-color: ${Variables.SecondaryColor};
    border-width: 0 0 0.5px;
`

export const GoogleLogin = styled.button`
    margin-top: 5vh;
    border-radius: 100px;
    border: none;
    outline: none;
    background-color: ${Variables.TertiaryColor};
    box-shadow: 0px 3px 6px #00000029;
    align-self: center;
    width: 230px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2%;
`

export const GoogleLoginImage = styled.img`
    height: 25px;
    width: 24px;
`

export const GoogleLoginText = styled.span`
    margin: 0;
    padding: 0;
    font-family: ${Variables.SecondaryFont};
    font-weight: ${Variables.SecondaryWeight};
    font-size: ${Variables.PrimaryBig};
`

export const CreateAccountLink = styled.a`
    margin: 4vh 0 0 0;
    padding: 0;
    display: flex;
    width: 200px;
    align-items: center;
    align-self: center;
    justify-content: space-between;
    cursor: pointer;
`

export const TextGrey = styled.span`
    margin: 0;
    padding: 0;
    color: ${Variables.SecondaryColor};
    font-size: ${Variables.PrimarySmall};
`

export const TextBold = styled.span`
    margin: 0;
    padding: 0;
    font-size: ${Variables.PrimarySmall};
    font-weight: ${Variables.SecondaryWeight};
`

export const TextHighlight = styled.span`
    margin: 0;
    padding: 0;
    text-decoration: underline;
    color: ${Variables.PrimaryColor};
    font-size: ${Variables.PrimaryMedium};
`

export const RegisterPageTermsBox = styled.div`
    margin: 3vh 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const RegisterTermsLine1 = styled.div`
    margin: 0;
    padding: 0;
    width: 230px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const RegisterTermsLine2 = styled.div`
    margin: 0;
    padding: 0;
    width: 270px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const RegisterPageLoginLink = styled.a`
    margin: 4vh 0 0 0;
    padding: 0;
    display: flex;
    width: 180px;
    align-items: center;
    align-self: center;
    justify-content: space-around;
    cursor: pointer;
`