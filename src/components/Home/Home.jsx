import React, { useContext } from 'react'
import NavbarComponent from '../NavbarComponent'
import logo from '../../Assets/logo.svg'
import { Jumbotron, Container } from 'react-bootstrap'
import { Link } from 'react-scroll'
import pdf from '../../Assets/cv.pdf'
import { DarkTheme, LightTheme, ThemeToggler } from '../../GlobalState'
const Home = () => {
  const darktheme = useContext(DarkTheme)
  const lighttheme = useContext(LightTheme)
  const [isDark, setIsDark] = useContext(ThemeToggler)
  return (
    <div id='home'>
      <NavbarComponent />
      <Jumbotron
        className='jumbotronStyle'
        style={isDark ? darktheme.dark : lighttheme.dark}
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
            style={
              isDark ? { color: darktheme.color } : { color: lighttheme.color }
            }
            className='myName'
          >
            Philcob Suzuki Josol
          </span>
          <div className=' p-0'>
            <p
              style={
                isDark
                  ? { color: darktheme.color }
                  : { color: lighttheme.color }
              }
              className='subtitle mt-2 p-0 text-center text-xl-left'
            >
              I am a passionate Frontend Developer that develops websites with
              React JS.
            </p>
          </div>
          <p className='mt-5'>
            <a href={pdf} className='downloadCv text-decoration-none'>
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
                style={
                  isDark
                    ? { border: darktheme.border, color: darktheme.color }
                    : { color: lighttheme.color }
                }
                className='ml-2 contactButton inlineButtons'
              >
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