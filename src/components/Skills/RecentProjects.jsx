import React, { useContext, useEffect } from 'react'
import { Card, CardDeck, Container } from 'react-bootstrap'
import {
  CardWorksData,
  DarkTheme,
  LightTheme,
  ThemeToggler,
} from '../../GlobalState'
import Aos from 'aos'
import 'aos/dist/aos.css'
import guitarapp from '../../Assets/guitarapp.JPG'
const RecentProjects = () => {
  const darktheme = useContext(DarkTheme)
  const lighttheme = useContext(LightTheme)
  const [isDark, setIsDark] = useContext(ThemeToggler)
  const guitarAppData = ['React', 'Firebase', 'React Bootstrap', 'Stripe API']
  return (
    <div
      id='projects'
      className='px-md-5 skillsMainDiv'
      style={isDark ? darktheme.light : lighttheme.light}
    >
      <h3
        style={
          isDark ? { color: darktheme.color } : { color: lighttheme.color }
        }
        className='text-center mb-5 mt-5'
      >
        My Recent Projects
      </h3>
      <Container>
        <a
          style={{ color: 'black', textDecoration: 'none' }}
          href='https://philcobguitarshop.netlify.app/'
          target='_blank'
        >
          <CardDeck>
            <div
              data-aos='fade-up'
              className='col-sm-12 col-md-6 col-lg-4 col-xl-6 mx-auto my-4'
            >
              <Card className='skillCard' style={{ width: '100%' }}>
                <Card.Img variant='top' src={guitarapp} />
                <Card.Body>
                  {guitarAppData.map((item, index) => (
                    <span
                      key={index}
                      style={{
                        background: 'orange',
                        padding: '5px 10px',
                        fontSize: '11px',
                        color: 'white',
                        fontWeight: '700',
                        borderRadius: '15px',
                        margin: '0px 3px',
                      }}
                    >
                      {item}
                    </span>
                  ))}

                  <Card.Title className='mt-3'>Guitar E-Commerce</Card.Title>
                  <Card.Text>
                    This is my first completed React project!
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </CardDeck>
        </a>
      </Container>
    </div>
  )
}

export default RecentProjects
