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
const SkillsSection = () => {
  const darktheme = useContext(DarkTheme)
  const lighttheme = useContext(LightTheme)
  const [isDark, setIsDark] = useContext(ThemeToggler)
  const cartData = useContext(CardWorksData)
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div
      id='skills'
      className='px-md-5 skillsMainDiv'
      style={isDark ? darktheme.light : lighttheme.light}
    >
      <h3
        style={
          isDark ? { color: darktheme.color } : { color: lighttheme.color }
        }
        className='text-center mb-5'
      >
        Skills
      </h3>
      <Container>
        <CardDeck>
          {cartData.map((item) => (
            <div
              data-aos='fade-up'
              key={item.id}
              className='col-sm-12 col-md-6 col-lg-4 col-xl-3 my-4'
            >
              <Card className='skillCard' style={{ width: '100%' }}>
                <Card.Img variant='top' src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </CardDeck>
      </Container>
      <h3
        style={
          isDark ? { color: darktheme.color } : { color: lighttheme.color }
        }
        className='text-center mb-5 mt-5'
      >
        Related Skills
      </h3>
      <Container>
        <CardDeck>
          {cartData.map((item) => (
            <div
              data-aos='fade-up'
              key={item.id}
              className='col-sm-12 col-md-6 col-lg-4 col-xl-3 my-4'
            >
              <Card className='skillCard' style={{ width: '100%' }}>
                <Card.Img variant='top' src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </CardDeck>
      </Container>
    </div>
  )
}

export default SkillsSection
