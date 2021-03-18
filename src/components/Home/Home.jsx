import React, { useContext } from 'react'
import NavbarComponent from '../NavbarComponent'
import logo from '../../Assets/newlogo.svg'
import { Jumbotron, Container } from 'react-bootstrap'
import { Link } from 'react-scroll'
import pdf from '../../Assets/cv.pdf'
import svgbg from '../../Assets/SVG/Asset_2.svg'
import { DarkTheme, LightTheme, ThemeToggler } from '../../GlobalState'
const Home = () => {
  const darktheme = useContext(DarkTheme)
  const lighttheme = useContext(LightTheme)
  const [isDark] = useContext(ThemeToggler)
  return (
    <div id='home'>
      <NavbarComponent />
      <Jumbotron
        className='jumbotronStyle rounded-0 m-0'
        style={
          isDark
            ? darktheme.light
            : {
                background: `url(${svgbg}) no-repeat`,
                backgroundSize: 'cover',
                height: '100vh',
                width: '100vw',
              }
        }
      >
        <Container
          style={{ marginTop: '10vh' }}
          className='text-center text-xl-left'
        >
          <div className='col-sm-12'>
            <img
              className='col-lg-6 col-md-9 col-sm-12 d-inline undrawSVG mb-4'
              style={{ height: '100%' }}
              src={logo}
              alt=''
            />
          </div>
          <span
            style={isDark ? { color: darktheme.color } : { color: '#ffffff' }}
            className='myName display-4 font-weight-bold'
          >
            Hello, I'm Philcob
          </span>
          <div className=' p-0'>
            <p
              style={isDark ? { color: darktheme.color } : { color: '#ffffff' }}
              className='subtitle mt-2 p-0 text-center text-xl-left'
            >
              I am a{' '}
              <span className='font-weight-bold'>Frontend Developer</span> based
              in Cavite, Philippines.
            </p>
          </div>
          <p className='mt-5'>
            <a
              target='_blank'
              href={pdf}
              className='downloadCv text-decoration-none shadow-sm'
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
              <button
                style={{
                  border: isDark && darktheme.border,
                  color: isDark && darktheme.color,
                }}
                className='ml-2 contactButton inlineButtons mt-md-0 mt-3 shadow-sm'
              >
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
