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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: stretch;
    flex-wrap: nowrap;
`

export const TitleCard = styled.p`
    margin: 6% 8% 0 0;
    display: flex;
    align-self: flex-end;
`

export const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 288px;
`

export const WelcomeText = styled.h3`
    margin: 8vh 0 0 0;
    text-align: center;
`

export const FormBox = styled.form`
    margin-top: 6vh;
    display: flex;
    flex-direction: column;
`

export const FormBoxLabel = styled.p`
    margin: 0;
    color: grey;
`

export const FormBoxInput = styled.input`
    margin-top: 1vh;
    width: 285px;
    outline: 0;
    border-width: 0 0 1px;
    text-indent: 14px;
    margin-bottom: 0.62vh;
    :focus:invalid {border: 2px solid red};
`

export const FormBoxForgotButton = styled.button`
    margin: 1vh 0 0 0;
    padding: 0;
    color: white;
    outline: none;
    border-width: 0px;
    background-color: grey;
    align-self: flex-end;
`

export const FormSignInButton = styled.button`
    margin: 2vh 0 0 0;
    padding: 0;
    height: 35px;
    width: 140px;
    background-color: grey;
    border-radius: 100px;
    border: none;
    outline: none;
    align-self: center;
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
`

export const FormDivider = styled.hr`
    display: inline-block;
    width: 100px;
    border-width: 0 0 0.5px;
`

export const GoogleLogin = styled.button`
    margin-top: 5vh;
    border-radius: 100px;
    border: none;
    outline: none;
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
    color: grey;
`

export const TextBold = styled.span`
    margin: 0;
    padding: 0;
    font-weight: bold;
`

export const TextHighlight = styled.span`
    margin: 0;
    padding: 0;
    text-decoration: underline;
    color: green;
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