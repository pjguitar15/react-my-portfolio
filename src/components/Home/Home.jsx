import React from 'react'
import NavbarComponent from '../NavbarComponent'
import logo from '../../Assets/logo.svg'
import { Jumbotron, Container } from 'react-bootstrap'
import pdf from '../../Assets/cv.pdf'
const Home = () => {
  return (
    <div id='home'>
      <NavbarComponent />
      <Jumbotron
        style={{ background: '#FAFAFC', height: '100vh', width: '100%' }}
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
          <span className='myName'>Philcob Suzuki Josol</span>
          <div className=' p-0'>
            <p className='subtitle mt-2 p-0 text-center text-xl-left'>
              I am an aspiring Frontend Developer that develops responsive and
              dynamic Website using tools and frameworks which gives me more
              flexible time management. // draft
            </p>
          </div>
          <p className='mt-5'>
            <a href={pdf} className='downloadCv text-decoration-none'>
              Download CV
            </a>

            <button className='ml-2 contactButton inlineButtons'>
              Contact Me
            </button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Home
