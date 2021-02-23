import React, { useContext, useEffect } from 'react'
import { Card, CardDeck, Container } from 'react-bootstrap'
import { CardWorksData } from '../../GlobalState'
import Aos from 'aos'
import 'aos/dist/aos.css'
const SkillsSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  const cartData = useContext(CardWorksData)
  return (
    <div
      className='px-md-5'
      style={{ background: '#FAFAFC', padding: '4rem 0 7rem 0' }}
    >
      <h3 className='text-center mb-5'>Skills</h3>
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
