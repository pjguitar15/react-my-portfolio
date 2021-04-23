import React, { useContext, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import firebaselogo from '../../Assets/firebase.png'
import chromelogo from '../../Assets/chrome.png'
import mongodb from '../../Assets/mongodb.png'
import postmanlogo from '../../Assets/postmanlogo.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const SkillsSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div id='skills' className='px-md-5 skillsMainDivv'>
      <h3 className='text-center skillh3 mb-5 user-select-none'>Skills</h3>
      <Container className='mb-5 containerSkill'>
        <Row data-aos='fade-up'>
          <Col lg='2' md='4' sm='4' xs='12' className='mx-auto'>
            <div className='text-center my-5'>
              <i
                className='fab fa-html5'
                style={{ fontSize: '6rem', color: '#E96228' }}
              ></i>
              <h4 style={{ fontWeight: '500' }}>HTML5</h4>
              <p>Create website layout contents and structure</p>
            </div>
          </Col>
          <Col lg='2' md='4' sm='4' xs='12' className='mx-auto'>
            <div className='text-center my-5'>
              <i
                style={{ fontSize: '6rem', color: '#2965F1' }}
                className='fab fa-css3-alt'
              ></i>
              <h4 style={{ fontWeight: '500' }}>CSS3</h4>
              <p>Can position things and make good styles</p>
            </div>
          </Col>
          <Col lg='2' md='4' sm='4' xs='12' className='mx-auto'>
            <div className='text-center my-5'>
              <i
                style={{ fontSize: '6rem', color: '#F7DF1E' }}
                className='fab fa-js'
              ></i>
              <h4 style={{ fontWeight: '500' }}>Javascript</h4>
              <p>ES6 Syntax, Higher Order Functions, etc.</p>
            </div>
          </Col>
          <Col lg='2' md='4' sm='4' xs='12' className='mx-auto'>
            <div className='text-center my-5'>
              <i
                style={{ fontSize: '6rem', color: '#5ED3F3' }}
                className='fab fa-react'
              ></i>
              <h4 style={{ fontWeight: '500' }}>React</h4>
              <p>I love React 100%</p>
            </div>
          </Col>
          <Col lg='2' md='4' sm='4' xs='12' className='mx-auto'>
            <div className='text-center my-5'>
              <i
                style={{ fontSize: '6rem', color: '#6FB352' }}
                className='fab fa-node'
              ></i>
              <h4 style={{ fontWeight: '500' }}>Node JS</h4>
              <p>Set up servers using ExpressJS Framework</p>
            </div>
          </Col>
          <Col lg='2' md='4' sm='4' xs='12' className='mx-auto'>
            <div className='text-center my-5'>
              <img
                style={{ maxHeight: '6rem' }}
                src={firebaselogo}
                alt='firebase'
              />
              <h4 style={{ fontWeight: '500' }}>Firebase</h4>
              <p>For easier projects, I use Backend Service</p>
            </div>
          </Col>
          <Col lg='2' md='4' sm='4' xs='12' className='mx-auto'>
            <div className='text-center my-5'>
              <img style={{ maxHeight: '6rem' }} src={mongodb} alt='firebase' />
              <h4 style={{ fontWeight: '500' }}>MongoDB</h4>
              <p>NoSQL Database and Mongoose as ORM</p>
            </div>
          </Col>
          <Col lg='2' md='4' sm='4' xs='12' className='mx-auto'>
            <div className='text-center my-5'>
              <img
                style={{ maxHeight: '6rem' }}
                src={chromelogo}
                alt='firebase'
              />
              <h4 style={{ fontWeight: '500' }}>Dev Tools</h4>
              <p>Tests projects using Dev tools</p>
            </div>
          </Col>
          {/* Postman */}
          <Col lg='2' md='4' sm='4' xs='12' className='mx-auto'>
            <div className='text-center my-5'>
              <img
                style={{ maxHeight: '6rem' }}
                src={postmanlogo}
                alt='firebase'
              />
              <h4 style={{ fontWeight: '500' }}>Test API</h4>
              <p>Easily test HTTP requests</p>
            </div>
          </Col>
          <Col lg='2' md='4' sm='4' xs='12' className='mx-auto'>
            <div className='text-center my-5'>
              <i
                style={{ fontSize: '6rem', color: 'black' }}
                className='fab fa-github'
              ></i>
              <h4 style={{ fontWeight: '500' }}>Github</h4>
              <p>Version Control (Git)</p>
            </div>
          </Col>
          {/* Terminal */}
          <Col lg='2' md='4' sm='4' xs='12' className='mx-auto'>
            <div className='text-center my-5'>
              <i
                style={{ fontSize: '6rem', color: 'black' }}
                className='fas fa-terminal'
              ></i>
              <h4 style={{ fontWeight: '500' }}>Terminal</h4>
              <p>I prefer using Git Bash</p>
            </div>
          </Col>
          <Col lg='2' md='4' sm='4' xs='12' className='mx-auto'>
            <div className='text-center my-5'>
              <i
                style={{ fontSize: '6rem', color: '#7952B3' }}
                className='fab fa-bootstrap'
              ></i>
              <h4 style={{ fontWeight: '500' }}>Bootstrap</h4>
              <p>Neat and Responsive Designs</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SkillsSection
