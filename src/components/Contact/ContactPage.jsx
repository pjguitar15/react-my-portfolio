import React from 'react'
import { Container } from 'react-bootstrap'
const ContactPage = () => {
  return (
    <div className='py-5' style={{ background: '#FAFAFC' }}>
      <h3 style={{ fontWeight: '700' }} className='text-center mb-3 mt-5'>
        HAVE SOME QUESTIONS?
      </h3>
      <Container>
        <form action='' className='text-center'>
          <div className='contactInputDiv'>
            <input
              placeholder='Enter email'
              className='contactInput my-2 shadow-sm'
              type='text'
            />
          </div>
          <div className='contactInputDiv'>
            <input
              placeholder='Enter your contact number'
              className='contactInput my-2 shadow-sm'
              type='text'
            />
          </div>
          <div>
            <textarea
              className='shadow-sm my-2'
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='Enter your message'
            ></textarea>
          </div>
          <button className='mt-3 btn btn-info col-10'>Submit</button>
        </form>
      </Container>
    </div>
  )
}

export default ContactPage
