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
