import React from 'react'
import NavbarComponent from '../NavbarComponent'
import { Jumbotron, Container } from 'react-bootstrap'
import { Link } from 'react-scroll'
import pdf from '../../Assets/cv.pdf'
// SVG
import topleft from '../../Assets/SVG/topleft.svg'
import bottomleft from '../../Assets/SVG/bottomleft.svg'
import topright from '../../Assets/SVG/topright.svg'
import landingpageart from '../../Assets/SVG/landingpageart.svg'
const Home = () => {
  return (
    <div id='home' className='position-relative'>
      <NavbarComponent />
      <Jumbotron className='jumbotronStyle bg-white rounded-0 m-0 p-0'>
        {/* SVG START */}
        <img className='top-left' src={topleft} alt='topleft' />
        <img
          className='d-none d-md-block bottom-left'
          src={bottomleft}
          alt='bottomleft'
        />
        <img
          className='d-md-none bottom-left-sm'
          src={bottomleft}
          alt='bottomleft'
        />
        <img className='top-right' src={topright} alt='topright' />
        {/* Arts diff sizes */}
        {/* xl */}
        <img
          className='d-none art-xl d-xl-block'
          src={landingpageart}
          alt='landingpageart'
        />
        {/* lg */}
        <img
          className='d-none art-lg d-lg-block d-xl-none'
          src={landingpageart}
          alt='landingpageart'
        />
        {/* md */}
        <img
          className='d-none art-md d-md-block d-lg-none'
          src={landingpageart}
          alt='landingpageart'
        />
        {/* default */}
        <img
          className='d-md-none art-default'
          src={landingpageart}
          alt='landingpageart'
        />
        {/* SVG END */}
        <Container className='text-center text-xl-left mb-5'>
          {/* Jumbotron Text */}

          <div
            className='d-none d-md-block mt-lg-5 mt-xl-0 position-relative'
            style={{ zIndex: '1' }}
          >
            <h1
              className='d-inline-block test'
              style={{
                fontSize: '60px',
                color: '#072947',
                fontFamily: 'roboto',
                fontWeight: '900',
                
              }}
            >
              HELLO!
            </h1>
            <h1
              style={{
                fontSize: '60px',
                color: '#13ADE3',
                fontFamily: 'roboto',
                fontWeight: '900'
              }}
              className='ml-3 d-inline-block'
            >
              I'M PHILCOB
            </h1>
          </div>
          <div className='d-md-none'>
            <h1
              className='d-inline-block'
              style={{
                fontSize: '45px',
                color: '#072947',
                fontFamily: 'roboto',
                fontWeight: '900'
              }}
            >
              HELLO!
            </h1>
            <h1
              style={{
                fontSize: '45px',
                color: '#13ADE3',
                fontFamily: 'roboto',
                fontWeight: '900'
              }}
              className='ml-3 d-inline-block'
            >
              I'M PHILCOB
            </h1>
          </div>

          <p
            className='mt-2 d-inline-block col-xl-8 col-lg-6 col-md-12 col-12 p-0'
            style={{
              color: '#a4a5a5',
              lineHeight: '30px',
              letterSpacing: '1px'
            }}
          >
            I'm a Frontend Developer and I’m passionate about HTML, CSS,
            Javascript, and React JS. I work hard, I care about writing clean
            code and I genuinely love to learn.
          </p>
          {/* Buttons */}
          <p className='mt-4 user-select-none'>
            <a
              target='_blank'
              href={pdf}
              className='downloadCv text-decoration-none'
            >
              <i style={{ marginRight: '8px' }} className='fas fa-download'></i>
              Download CV
            </a>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <button className='ml-3 contactButton inlineButtons mt-md-0 mt-3'>
                <i
                  style={{ fontSize: '15px', marginRight: '8px' }}
                  className='fas fa-mobile'
                ></i>
                Contact Me
              </button>
            </Link>
          </p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Home
