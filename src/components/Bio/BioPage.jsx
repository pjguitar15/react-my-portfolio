import React, { useEffect, useContext } from 'react'
import { AboutMeData } from '../../GlobalState'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { DarkTheme, LightTheme, ThemeToggler } from '../../GlobalState'
const BioPage = () => {
  const aboutMeData = useContext(AboutMeData)
  const darktheme = useContext(DarkTheme)
  const lighttheme = useContext(LightTheme)
  const [isDark, setIsDark] = useContext(ThemeToggler)
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div
      id='about'
      className='py-5'
      style={isDark ? darktheme.dark : lighttheme.dark}
    >
      <h1
        data-aos='fade-up'
        style={
          isDark ? { color: darktheme.color } : { color: lighttheme.color }
        }
        className='text-center mb-5 aboutH1'
      >
        About Me
      </h1>
      <div
        style={isDark ? darktheme.light : lighttheme.light}
        className='container shadow py-5 rounded'
      >
        <div className='aboutMeImg'>
          <img
            data-aos='fade-up'
            src='https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.0-9/84246825_3504451782961648_5276566424934940672_o.jpg?_nc_cat=101&ccb=3&_nc_sid=174925&_nc_ohc=k5zWpd1NTqoAX_0qlcH&_nc_ht=scontent.fmnl9-2.fna&oh=511348142d228fe8007aa657d2d1e4a4&oe=605A56FB'
            alt=''
            style={{ width: '100%', borderRadius: '50%' }}
            className='shadow bioImg'
          />
        </div>
        {aboutMeData.map((item) => (
          <div key={item.id} data-aos='fade-up' className='row'>
            <div className='col-md-10 col-xl-6 my-5 py-5 mx-auto text-center col-xs-12'>
              <h2
                style={
                  isDark
                    ? { color: darktheme.color }
                    : { color: lighttheme.color }
                }
              >
                {item.title}
              </h2>
              <hr
                style={
                  isDark
                    ? { border: 'solid white 0.1px' }
                    : { border: 'solid black 0.1px' }
                }
              />
              <p
                className='lead aboutMeP'
                style={
                  isDark
                    ? { color: darktheme.color }
                    : { color: lighttheme.color }
                }
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BioPage
