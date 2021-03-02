import React, { useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap'
import {
  CardWorksData,
  DarkTheme,
  LightTheme,
  ThemeToggler,
} from '../../GlobalState'
import Aos from 'aos'
import 'aos/dist/aos.css'
const ContactPage = () => {
  const darktheme = useContext(DarkTheme)
  const lighttheme = useContext(LightTheme)
  const [isDark, setIsDark] = useContext(ThemeToggler)
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div
      id='contact'
      className='contactBg'
      style={isDark ? darktheme.light : lighttheme.light}
    >
      <h2
        style={
          isDark ? { color: darktheme.color } : { color: lighttheme.color }
        }
        className='contacth1 text-center mb-5'
      >
        <div className='d-flex justify-content-around flex-column'>
          <i
            style={{ fontSize: '70px', marginBottom: '30px' }}
            class='fas fa-question-circle'
          ></i>{' '}
          <div>HAVE SOME QUESTIONS?</div>
        </div>
      </h2>
      <Container>
        <form
          data-aos='fade-up'
          name='contact'
          method='post'
          className='text-center'
        >
          <input type='hidden' name='form-name' value='contact' />
          <div className='contactInputDiv'>
            <input
              placeholder='Enter name'
              className='contactInput my-2 shadow-sm'
              type='text'
              name='name'
            />
          </div>
          <div className='contactInputDiv'>
            <input
              placeholder='Enter email'
              className='contactInput my-2 shadow-sm'
              name='email'
              type='text'
            />
          </div>
          <div>
            <textarea
              className='shadow-sm my-2'
              name='message'
              id=''
              cols='30'
              rows='10'
              placeholder='Enter your message'
            ></textarea>
          </div>
          <button
            style={{ backgroundColor: '#F26C50', border: 'none' }}
            type='submit'
            className='mt-3 btn btn-info col-10'
          >
            Submit
          </button>
        </form>
      </Container>
    </div>
  )
}

export default ContactPage
