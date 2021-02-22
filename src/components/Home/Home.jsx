import React from 'react'
import { Spring } from 'react-spring/renderprops'
import NavbarComponent from '../NavbarComponent'
import { Jumbotron, Button, Container } from 'react-bootstrap'
const Home = () => {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ delay: 50, duration: 800 }}
    >
      {(props) => (
        <div style={props}>
          <NavbarComponent />
          <Jumbotron
            className='shadow-sm'
            style={{ background: '#FAFAFC', padding: '100px 0 100px 0' }}
          >
            <Container className='text-center text-lg-left'>
              <span className='myName'>Philcob Suzuki Josol</span>
              <div className='col-lg-8 p-0'>
                <p className='subtitle mt-2 p-0'>
                  I am an aspiring Frontend Developer that develops responsive
                  and dynamic Website using tools and frameworks which gives me
                  more flexible time management. // draft
                </p>
              </div>
              <p className='mt-5'>
                <button className='downloadCv'>Download CV</button>
                <button className='ml-2 contactButton inlineButtons'>
                  Contact Me
                </button>
              </p>
            </Container>
          </Jumbotron>
        </div>
      )}
    </Spring>
  )
}

export default Home
