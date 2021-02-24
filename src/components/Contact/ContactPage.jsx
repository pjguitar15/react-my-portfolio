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
        HAVE SOME QUESTIONS?
      </h2>
      <Container>
        <form
          data-aos='fade-up'
          name='contact'
          method='post'
          className='text-center'
        >
          <div className='contactInputDiv'>
            <input type='hidden' name='form-name' value='contact' />
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
          <button type='submit' className='mt-3 btn btn-info col-10'>
            Submit
          </button>
        </form>

        {/* <form name='contact' method='post'>
          <input type='hidden' name='form-name' value='contact' />
          <p>
            <label>
              Your Name: <input type='text' name='name' />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type='email' name='email' />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name='message'></textarea>
            </label>
          </p>
          <p>
            <button type='submit'>Send</button>
          </p>
        </form> */}
      </Container>
    </div>
  )
}

export default ContactPage
