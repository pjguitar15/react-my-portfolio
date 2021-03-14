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
      className='about'
      style={isDark ? darktheme.dark : lighttheme.dark}
    >
      <div className='container mb-5 '>
        <h3
          style={{ color: '#f26c50' }}
          className='text-left font-weight-bold myRecentProjectsh3'
        >
          <span>—</span> <span> About me </span>
        </h3>
        <div className='text-muted font-italic'>More about myself</div>
      </div>

      {/* paper starts here */}
      <div className='container aboutMePaper'>
        <div className='row'>
          {/* img component */}
          <div className='aboutMeImg col-xl-4 col-md-5 col-sm-12'>
            <img
              data-aos='fade-up'
              src='https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.0-9/84246825_3504451782961648_5276566424934940672_o.jpg?_nc_cat=101&ccb=3&_nc_sid=174925&_nc_ohc=k5zWpd1NTqoAX_0qlcH&_nc_ht=scontent.fmnl9-2.fna&oh=511348142d228fe8007aa657d2d1e4a4&oe=605A56FB'
              alt=''
              style={{ width: '100%' }}
            />
          </div>

          {/* text content here */}
          <div data-aos='fade-up' className='col-xl-8 col-md-7 col-sm-12'>
            <h2
              style={
                isDark
                  ? { color: darktheme.color }
                  : { color: lighttheme.color }
              }
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <div className='display-3 mt-sm-5'>Hello!</div>
              </div>
            </h2>

            <p
              className='lead aboutMeP'
              style={
                isDark
                  ? { color: darktheme.color }
                  : { color: lighttheme.color }
              }
            >
              I'm <mark>Philcob Suzuki Josol</mark>, a Front End Developer, 22
              years old from Trece Martires City, Cavite, Philippines.
            </p>
            <hr />
            <p className='mt-5 bio-paragraph text-muted'>
              When I first created my Hello World application, it was the moment
              when I immediately realized my love for development. The first
              language I learned was C++ at school and before that, I didnt know
              anything about programming. Since then, I have developed my
              passion. Years went by, I realize that my path was to become a
              Front End Developer and started to love React
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BioPage
