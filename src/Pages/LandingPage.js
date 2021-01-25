import React, { Component } from "react";
import * as SC from './Styled';
import GoogleLogo from "../Images/GoogleLogo.svg";

class LandingPage extends Component {
  render() {
    return (
        <SC.UserArea>
          <SC.TitleCard>Invision</SC.TitleCard>
          <SC.LoginDiv>
            <SC.WelcomeText>Welcome to Invision</SC.WelcomeText>

            <SC.FormBox>
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
                type="password"
                required
              ></SC.FormBoxInput>
              <SC.FormBoxForgotButton>Forgot Password?</SC.FormBoxForgotButton>
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

            <SC.CreateAccountLink onClick={this.props.handleSwitchPage}>
              <SC.TextGrey>New</SC.TextGrey>
              <SC.TextBold>Invision?</SC.TextBold>
              <SC.TextHighlight>Create Account</SC.TextHighlight>
            </SC.CreateAccountLink>

          </SC.LoginDiv>
        </SC.UserArea>
    );
  }

}

export default LandingPage;
