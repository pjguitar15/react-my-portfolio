import React from 'react'
import { Row } from 'react-bootstrap'

const AboutPage = () => {
  return (
    <div className=''>
      <Row>
        <div
          className='col-6 p-5'
          style={{ height: '80vh', background: '#F26C50' }}
        >
          <img src='' alt='' />
          <h1 className='text-light aboutMe text-center'>About me</h1>
        </div>
        <div className='col-6 p-5' style={{ background: '#f5f5f5' }}>
          <h1>Title</h1>
          <h6>Subtitle</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
            eveniet ducimus minima inventore accusantium consectetur dolor
            magnam, beatae placeat sunt quas id nam. Alias velit minima non
            quasi totam iste!
          </p>
        </div>
      </Row>
    </div>
  )
}

export default AboutPage
