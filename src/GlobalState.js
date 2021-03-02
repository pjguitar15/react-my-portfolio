import React, { useState } from 'react'

export const CardWorksData = React.createContext()
export const AboutMeData = React.createContext()
export const ThemeToggler = React.createContext()
export const TogglerHandler = React.createContext()
export const DarkTheme = React.createContext()
export const LightTheme = React.createContext()

const GlobalState = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  const cartData = [
    {
      id: 1,
      title: 'HTML & CSS',
      image:
        'https://codescandy.com/geeks/assets/images/course-css.jpg',
      text: 'CSS or Cascading Stylesheet that builds up the content of the whole webpage.'
    },
    {
      id: 2,
      title: 'Javascript',
      image:
        'https://codescandy.com/geeks/assets/images/course-javascript.jpg',
      text: 'HTML is a markup language that builds up the content of the whole webpage.'
    },
    {
      id: 3,
      title: 'React JS',
      image:
        'https://codescandy.com/geeks/assets/images/course-react.jpg',
      text: 'HTML is a markup language that builds up the content of the whole webpage.'
    },
    {
      id: 4,
      title: 'Node JS',
      image:
        'https://codescandy.com/geeks/assets/images/course-node.jpg',
      text: 'HTML is a markup language that builds up the content of the whole webpage.'
    }
  ]
  const aboutMeData = [
    {
      id: 1,
      title: 'Hello, World',
      description: `I'm Philcob. 22 years old from Trece Martires City, Cavite, Philippines. I am passionate about making great websites. But I have some several interests that you also may wanna know about.`
    },
    {
      id: 4,
      title: 'Programming',
      description: 'When I first created my Hello World application, it was the moment when I immediately realized my love for development. The first language I learned was C++ at school and before that, I didnt know anything about programming. Since then, I have developed my passion. Years went by, I realize that my path was to become a Front End Developer and started to love React'
    },
    {
      id: 2,
      title: 'Music',
      description: 'I have always loved music ever since when I was a kid. In fact, I also play instruments like guitar, keyboard, and drums. '
    },
    {
      id: 3,
      title: 'Sports',
      description: 'I used to play sports competitively in school. One of my favorite sports that I play is Table tennis. I also play basketball and volleyball.'
    },
  ]

  const darktheme = {

    light: { background: '#272727' },
    dark: { background: '#242424' },
    color: '#F2F2F2',
    border: 'solid #F2F2F2 0.1px'
  }
  const lighttheme = {
    light: { background: '#FFFFFF' },
    dark: { background: '#FAFAFC' },
    color: '#272727'
  }



  const handleChange = () => {
    setIsDark(!isDark)
  }


  return (
    <CardWorksData.Provider value={cartData}>
      <AboutMeData.Provider value={aboutMeData}>
        <DarkTheme.Provider value={darktheme}>
          <LightTheme.Provider value={lighttheme}>
            <ThemeToggler.Provider value={[isDark, setIsDark]}>
              <TogglerHandler.Provider value={handleChange}>
                {children}
              </TogglerHandler.Provider>
            </ThemeToggler.Provider>
          </LightTheme.Provider>
        </DarkTheme.Provider>
      </AboutMeData.Provider>
    </CardWorksData.Provider>
  )
}

export default GlobalState
