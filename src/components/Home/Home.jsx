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
        <img
          style={{ position: 'absolute', top: '0', left: '0', width: '25rem' }}
          src={topleft}
          alt='topleft'
        />
        <img
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '25rem'
          }}
          src={bottomleft}
          alt='bottomleft'
        />
        <img
          style={{ position: 'absolute', top: '0', right: '0', width: '38rem' }}
          src={topright}
          alt='topright'
        />
        {/* Arts diff sizes */}
        {/* xl */}
        <img
          className='d-none d-xl-block'
          style={{
            position: 'absolute',
            bottom: '3rem',
            right: '3rem',
            width: '45rem'
          }}
          src={landingpageart}
          alt='landingpageart'
        />
        {/* lg */}
        <img
          className='d-none d-lg-block d-xl-none'
          style={{
            position: 'absolute',
            top: '2rem',
            right: '0',
            left: '0',
            margin: 'auto',
            width: '25rem'
          }}
          src={landingpageart}
          alt='landingpageart'
        />
        <img
          className='d-none d-md-block d-lg-none'
          style={{
            position: 'absolute',
            top: '3rem',
            right: '0',
            left: '0',
            margin: 'auto',
            width: '20rem'
          }}
          src={landingpageart}
          alt='landingpageart'
        />
        <img
          className='d-md-none'
          style={{
            position: 'absolute',
            top: '3rem',
            right: '0',
            left: '0',
            margin: 'auto',
            width: '15rem'
          }}
          src={landingpageart}
          alt='landingpageart'
        />
        {/* SVG END */}
        <Container className='text-center text-xl-left mb-5'>
          {/* Jumbotron Text */}
          {/* md */}
          <div className='d-none d-md-block mt-lg-5 mt-xl-0'>
            <h1
              className='d-inline-block'
              style={{
                fontSize: '60px',
                color: '#072947',
                fontFamily: 'roboto',
                fontWeight: '900'
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
            className='mt-2 d-inline-block col-xl-8 p-0'
            style={{
              color: '#a4a5a5',
              lineHeight: '30px',
              letterSpacing: '1px'
            }}
          >
            I'm a Frontend Developer and I’m passionate about HTML, CSS,
            Javascript, and React JS. I work hard, I care about writing clean
            code and I genuinely love to learn. I’m currently looking for the
            right opportunity to work in an environment that will help me
            progress into a full-stack role.
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
