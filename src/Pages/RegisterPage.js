import React, { Component } from "react";
import * as SC from './Styled';
import GoogleLogo from "../Images/GoogleLogo.svg";

class RegisterPage extends Component {
  render() {
    return (
        <SC.UserArea>
          <SC.TitleCard>Invision</SC.TitleCard>
          <SC.LoginDiv>
            <SC.WelcomeText>Getting Started</SC.WelcomeText>

            <SC.FormBox>
              <SC.FormBoxLabel>Full Name</SC.FormBoxLabel>
              <SC.FormBoxInput
                name="name"
                type="name"
                required
              >
              </SC.FormBoxInput>
              <SC.FormBoxLabel>Users name or Email</SC.FormBoxLabel>
              <SC.FormBoxInput
                type="email"
                pattern="/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g"
                title="Digite um email"
                name="email"
                required
              ></SC.FormBoxInput>
              <SC.FormBoxLabel>Password</SC.FormBoxLabel>
              <SC.FormBoxInput
                name="password"
                pattern="^\w{6,18}$"
                type="password"
                required
              >
              </SC.FormBoxInput>
              <SC.FormSignInButton type="Submit">Sign in</SC.FormSignInButton>

              <SC.DividerBox>
                <SC.FormDivider />
                <SC.DividerText>Or</SC.DividerText>
                <SC.FormDivider />
              </SC.DividerBox>
              <SC.GoogleLogin>
                <SC.GoogleLoginImage src={GoogleLogo} />
                <SC.GoogleLoginText>Sign in with Google</SC.GoogleLoginText>
              </SC.GoogleLogin>
            </SC.FormBox>

            <SC.RegisterPageTermsBox>
              <SC.RegisterTermsLine1>
                <SC.TextGrey>By signing up, you agree to</SC.TextGrey>
                <SC.TextBold>Invision</SC.TextBold>
              </SC.RegisterTermsLine1>

              <SC.RegisterTermsLine2>
                <SC.TextHighlight>Terms of Conditions</SC.TextHighlight>
                <SC.TextGrey>and</SC.TextGrey>
                <SC.TextHighlight>Privacy Policy</SC.TextHighlight>
              </SC.RegisterTermsLine2>
            </SC.RegisterPageTermsBox>

            <SC.RegisterPageLoginLink onClick={this.props.handleSwitchPage}>
              <SC.TextGrey>Already on</SC.TextGrey>
              <SC.TextBold>Invision?</SC.TextBold>
              <SC.TextHighlight>Log in</SC.TextHighlight>
            </SC.RegisterPageLoginLink>

          </SC.LoginDiv>
        </SC.UserArea>
    );
  }

}

export default RegisterPage;
