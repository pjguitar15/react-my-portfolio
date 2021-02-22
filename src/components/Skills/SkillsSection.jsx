import React, { useContext, useEffect } from 'react'
import { Card, CardDeck, Container } from 'react-bootstrap'
import { CardWorksData } from '../../GlobalState'
const SkillsSection = () => {
  const cartData = useContext(CardWorksData)
  return (
    <div className='py-5 px-5'>
      <h2 className='text-center mb-5'>Skills</h2>
      <CardDeck className='px-md-5'>
        {cartData.map((item) => (
          <div
            key={item.id}
            className='col-sm-12 col-md-6 col-lg-4 col-xl-3 my-4'
          >
            <Card className='shadow-sm skillCard'>
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
    </div>
  )
}

export default SkillsSection
