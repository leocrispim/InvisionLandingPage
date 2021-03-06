import React, { Component } from "react";
import * as SC from './Pages/Styled';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import FirstSlide from "./Images/FirstSlide.png";
import { GlobalStyle } from './Pages/Styled';
import LandingPage from './Pages/LandingPage';
import RegisterPage from './Pages/RegisterPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderingPage: 'LandingPage',
    }
    this.handleSwitchPage = this.handleSwitchPage.bind(this)
  }

  handleSwitchPage(){
    if(this.state.renderingPage === 'LandingPage'){
      this.setState({
        renderingPage: 'RegisterPage'
      })
    }

    else{
      this.setState({
        renderingPage: 'LandingPage'
      })
    }
  }

  render() {
    let currentPage

    if (this.state.renderingPage === 'LandingPage') {
      currentPage = <LandingPage handleSwitchPage = {this.handleSwitchPage}/>
    }

    else {
      currentPage = <RegisterPage handleSwitchPage = {this.handleSwitchPage}/>
    }

    return (
      <>
        <GlobalStyle />
        <SC.MainArea>
          <SC.CarouselArea>
            <Carousel
            showArrows={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={4000}
            showStatus={false}
            dynamicHeight={true}
            >
              <SC.SlideDiv>
                  <img src={FirstSlide} />
                  <div>
                    <SC.TextBoxTitle>Marcenas mattis egestas</SC.TextBoxTitle>
                    <SC.TextBoxDescription>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</SC.TextBoxDescription>
                  </div>
              </SC.SlideDiv>

              <SC.SlideDiv>
                  <img src={FirstSlide} />
                  <div>
                    <SC.TextBoxTitle>Marcenas mattis egestas</SC.TextBoxTitle>
                    <SC.TextBoxDescription>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</SC.TextBoxDescription>
                  </div>
              </SC.SlideDiv>

              <SC.SlideDiv>
                  <img src={FirstSlide} />
                  <div>
                    <SC.TextBoxTitle>Marcenas mattis egestas</SC.TextBoxTitle>
                    <SC.TextBoxDescription>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</SC.TextBoxDescription>
                  </div>
              </SC.SlideDiv>

              <SC.SlideDiv>
                  <img src={FirstSlide} />
                  <div>
                    <SC.TextBoxTitle>Marcenas mattis egestas</SC.TextBoxTitle>
                    <SC.TextBoxDescription>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</SC.TextBoxDescription>
                  </div>
              </SC.SlideDiv>
            </Carousel>
          </SC.CarouselArea>
          {currentPage}
        </SC.MainArea>
      </>
    )
  }

}

export default App;