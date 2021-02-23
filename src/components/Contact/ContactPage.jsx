import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'
const ContactPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div id='contact' style={{ background: '#FAFAFC', padding: '5rem 0' }}>
      <h4 style={{ fontWeight: '700' }} className='text-center mb-5'>
        HAVE SOME QUESTIONS?
      </h4>
      <Container>
        <form data-aos='fade-up' action='' className='text-center'>
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
