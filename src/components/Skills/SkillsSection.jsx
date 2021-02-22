import React, { useContext, useEffect } from 'react'
import { Card, CardDeck, Container } from 'react-bootstrap'
import { CardWorksData } from '../../GlobalState'
const SkillsSection = () => {
  const cartData = useContext(CardWorksData)
  return (
    <div className='px-5' style={{ padding: '4rem 0 7rem 0' }}>
      <h3 className='text-center mb-5'>Skills</h3>
      <Container>
        <CardDeck>
          {cartData.map((item) => (
            <div
              key={item.id}
              className='col-sm-12 col-md-6 col-lg-4 col-xl-3 my-4'
            >
              <Card className='shadow-sm skillCard' style={{ width: '100%' }}>
                <Card.Img variant='top' src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a href='#'>
                    <small className='text-muted'>View more</small>
                  </a>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </CardDeck>
      </Container>
    </div>
  )
}

export default SkillsSection
