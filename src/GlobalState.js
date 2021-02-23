import React from 'react'

export const CardWorksData = React.createContext()
export const AboutMeData = React.createContext()

const GlobalState = ({ children }) => {
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
      title: 'About me',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sint ad, perferendis quidem sed facere, eum placeat deleniti eius doloremque ut ipsum nesciunt odit eveniet atque laborum aut molestias mollitia!'
    },
    {
      id: 2,
      title: 'Music',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sint ad, perferendis quidem sed facere, eum placeat deleniti eius doloremque ut ipsum nesciunt odit eveniet atque laborum aut molestias mollitia!'
    },
    {
      id: 3,
      title: 'Sports',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sint ad, perferendis quidem sed facere, eum placeat deleniti eius doloremque ut ipsum nesciunt odit eveniet atque laborum aut molestias mollitia!'
    },
    {
      id: 4,
      title: 'Gaming',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sint ad, perferendis quidem sed facere, eum placeat deleniti eius doloremque ut ipsum nesciunt odit eveniet atque laborum aut molestias mollitia!'
    },
    {
      id: 5,
      title: 'Food',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sint ad, perferendis quidem sed facere, eum placeat deleniti eius doloremque ut ipsum nesciunt odit eveniet atque laborum aut molestias mollitia!'
    }
  ]
  return (
    <CardWorksData.Provider value={cartData}>
      <AboutMeData.Provider value={aboutMeData}>
        {children}
      </AboutMeData.Provider>
    </CardWorksData.Provider>
  )
}

export default GlobalState
