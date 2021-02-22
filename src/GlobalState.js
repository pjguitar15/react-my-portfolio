import React from 'react'

export const CardWorksData = React.createContext()

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
  return (
    <CardWorksData.Provider value={cartData}>
      {children}
    </CardWorksData.Provider>
  )
}

export default GlobalState
