import React from 'react';

import './style2.css';

import DesktopHero1 from './assets/imgs/desktop-image-hero-1.jpg';
import DesktopHero2 from './assets/imgs/desktop-image-hero-2.jpg';
import DesktopHero3 from './assets/imgs/desktop-image-hero-3.jpg';

import MobileHero1 from './assets/imgs/mobile-image-hero-1.jpg';
import MobileHero2 from './assets/imgs/mobile-image-hero-2.jpg';
import MobileHero3 from './assets/imgs/mobile-image-hero-3.jpg';

import ImgAboutDark from './assets/imgs/image-about-dark.jpg';
import ImgAboutLight from './assets/imgs/image-about-light.jpg';

import LeftAngle from './assets/imgs/icon-angle-left.svg'
import RightAngle from './assets/imgs/icon-angle-right.svg'

import Logo from './assets/imgs/logo.svg';

import Arrow from './assets/imgs/icon-arrow.svg';

import Hamburger from './assets/imgs/icon-hamburger';
import Close from './assets/imgs/icon-close';

const dataArray = {
  Home: [
    {
      Title: 'Discover innovative ways to decorate',
      Content: `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`,
      DesktopImg: DesktopHero1,
      MobileImg: MobileHero1,
    },
    {
      Title: 'We are available all across the globe',
      Content: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
      Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
      store locator. Any questions? Don't hesitate to contact us today.`,
      DesktopImg: DesktopHero2,
      MobileImg: MobileHero2,
    },
    {
      Title: 'Manufactured with the best materials',
      Content: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
      to ensure that every product is made as perfect and as consistent as possible. With three decades of 
      experience in this industry, we understand what customers want for their home and office.`,
      DesktopImg: DesktopHero3,
      MobileImg: MobileHero3,
    }
  ],
  About: {
    Title: 'About our furniture',
    Content: `Our multifunctional collection blends design and function to suit your individual taste.
    Make each room unique, or pick a cohesive theme that best express your interests and what
    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
    or anything in between. Product specialists are available to help you create your dream space.`
  }


};


function Header() {
  const [navBarVisibility, setNavBarVisibility] = React.useState(false);



  function toggleHeader() {
    setNavBarVisibility(!navBarVisibility);
  }

  return <header>
    <div onClick={toggleHeader} className="hamburger-container">
      {
        navBarVisibility ? <Close func={toggleHeader}/>
        : <Hamburger func={toggleHeader}/>
      }
    </div>

    <div className="logo-container">
      <object data={Logo}></object>
    </div>

    <nav className={navBarVisibility && 'visible'}>
      <a>home</a>
      <a>shop</a>
      <a>about</a>
      <a>contact</a>
    </nav>
    
  </header>
}

function App() {
  const [currentSlide, setSlide] = React.useState(0);

  const Slide = dataArray.Home[currentSlide];

  function handleClick(direction) {

    if (direction == 'left') {
      if (currentSlide == 0) setSlide(dataArray.Home.length - 1);
      else setSlide(prev => prev - 1);
      console.log(direction);
    }
    if (direction == 'right') {
      if (currentSlide == dataArray.Home.length - 1) setSlide(0);
      else setSlide(prev => prev + 1);
      console.log(direction);
    }

  }

  return (
    <>
      <div className="container">

        <div className="top-side">

          <div className="hero-image-container img-container">
            <Header />
            <img alt="Hero" className="desktop-img" src={Slide.DesktopImg} />
            <img alt="Hero" className="mobile-img" src={Slide.MobileImg} />
            <div className="controls">
              <button onClick={() => { handleClick('left') }}><object onClick={() => { handleClick('left') }} data={LeftAngle}></object></button>
              <button onClick={() => { handleClick('right') }}><object data={RightAngle}></object></button>
            </div>
          </div>
          <div className="hero-text">

            <h1 className="black">{Slide.Title}</h1>
            <p>{Slide.Content}</p>

            <div className="shop-now-button">
              <p className="spaced hoverable black">SHOP NOW</p>
              <object data={Arrow}></object>
            </div>

          </div>

        </div>

        <div className="bottom-side">

          <div className="about-dark-container img-container">
            <img alt="Dark" src={ImgAboutDark} />
          </div>

          <div className="about-text">
            <h1 className="black">{dataArray.About.Title}</h1>
            <p>{dataArray.About.Content}</p>
          </div>

          <div className="about-light-container img-container">
            <img alt="Light" src={ImgAboutLight} />
          </div>

        </div>

      </div>
      {/* <div className="author">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Ahmed Huzain</a>.</div> */}
    </>
  );
}

export default App;
