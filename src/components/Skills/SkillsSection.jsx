import React, { useContext, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import firebaselogo from '../../Assets/firebase.png'
import chromelogo from '../../Assets/chrome.png'
import mongodb from '../../Assets/mongodb.png'
import postmanlogo from '../../Assets/postmanlogo.png'

import {
  CardWorksData,
  DarkTheme,
  LightTheme,
  ThemeToggler
} from '../../GlobalState'
import Aos from 'aos'
import 'aos/dist/aos.css'

const SkillsSection = () => {
  const darktheme = useContext(DarkTheme)
  const lighttheme = useContext(LightTheme)
  const [isDark, setIsDark] = useContext(ThemeToggler)

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div
      id='skills'
      className='px-md-5 skillsMainDivv'
      style={isDark ? darktheme.light : lighttheme.light}
    >
      <h3
        style={
          isDark ? { color: darktheme.color } : { color: lighttheme.color }
        }
        className='text-center skillh3 mb-5 user-select-none'
      >
        Skills
      </h3>
      <Container className='mb-5 containerSkill'>
        <Row
          data-aos='fade-up'
          style={
            isDark ? { color: darktheme.color } : { color: lighttheme.color }
          }
        >
          <Col lg='2' md='4' sm='4' xs='12' className='mx-auto'>
            <div className='text-center my-5'>
              <i
                className='fab fa-html5'
                style={{ fontSize: '6rem', color: '#E96228' }}
              ></i>
              <h4 style={{ fontWeight: '500' }}>HTML</h4>
              <p>Pretty comfortable</p>
            </div>
          </Col>
          <Col lg='2' md='4' sm='4' xs='12' className='mx-auto'>
            <div className='text-center my-5'>
              <i
                style={{ fontSize: '6rem', color: '#2965F1' }}
                className='fab fa-css3-alt'
              ></i>
              <h4 style={{ fontWeight: '500' }}>CSS</h4>
              <p>Want some style</p>
            </div>
          </Col>
          <Col lg='2' md='4' sm='4' xs='12' className='mx-auto'>
            <div className='text-center my-5'>
              <i
                style={{ fontSize: '6rem', color: '#F7DF1E' }}
                className='fab fa-js'
              ></i>
              <h4 style={{ fontWeight: '500' }}>Javascript</h4>
              <p>Listen to events</p>
            </div>
          </Col>
          <Col lg='2' md='4' sm='4' xs='12' className='mx-auto'>
            <div className='text-center my-5'>
              <i
                style={{ fontSize: '6rem', color: '#5ED3F3' }}
                className='fab fa-react'
              ></i>
              <h4 style={{ fontWeight: '500' }}>React</h4>
              <p>Javascript Library</p>
            </div>
          </Col>
          <Col lg='2' md='4' sm='4' xs='12' className='mx-auto'>
            <div className='text-center my-5'>
              <i
                style={{ fontSize: '6rem', color: '#6FB352' }}
                className='fab fa-node'
              ></i>
              <h4 style={{ fontWeight: '500' }}>Node JS</h4>
              <p>Servers/Backend</p>
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
              <p>Backend Service</p>
            </div>
          </Col>
          <Col lg='2' md='4' sm='4' xs='12' className='mx-auto'>
            <div className='text-center my-5'>
              <img style={{ maxHeight: '6rem' }} src={mongodb} alt='firebase' />
              <h4 style={{ fontWeight: '500' }}>MongoDB</h4>
              <p>NoSQL Database</p>
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
