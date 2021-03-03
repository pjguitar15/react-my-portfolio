import React, { useContext, useEffect } from 'react'
import { Card, CardDeck, Button } from 'react-bootstrap'
import { DarkTheme, LightTheme, ThemeToggler } from '../../GlobalState'
import Aos from 'aos'
import RecentProjectsData from '../../Data/RecentProjects'
import 'aos/dist/aos.css'
const RecentProjects = () => {
  const darktheme = useContext(DarkTheme)
  const lighttheme = useContext(LightTheme)
  const [isDark, setIsDark] = useContext(ThemeToggler)

  return (
    <div
      id='projects'
      className='projects px-md-5 skillsMainDiv'
      style={isDark ? darktheme.light : lighttheme.light}
    >
      <h3
        style={
          isDark ? { color: darktheme.color } : { color: lighttheme.color }
        }
        className='text-center myRecentProjectsh3 mb-5 mt-5'
      >
        My Recent Projects
      </h3>
      <div className='container'>
        <div className='row'>
          {RecentProjectsData.map((item, index) => (
            <CardDeck
              className='col-sm-12 col-md-6 col-lg-10 col-xl-4 mx-0 my-4 text-center'
              key={index}
            >
              <div data-aos='fade-up'>
                <Card>
                  <Card.Img variant='top' src={item.image} />
                  <Card.Body>
                    {item.tags.map((item) => (
                      <span
                        style={{
                          background: 'orange',
                          padding: '5px 10px',
                          fontSize: '11px',
                          color: 'white',
                          fontWeight: '700',
                          borderRadius: '15px',
                          margin: '0px 3px',
                        }}
                      >
                        {item}
                      </span>
                    ))}

                    <Card.Title className='mt-3'>{item.title}</Card.Title>
                    <Card.Text
                      style={{ fontSize: '16px' }}
                      className='text-justify lead'
                    >
                      {item.text}
                    </Card.Text>
                    <Button
                      href={item.link}
                      target='_blank'
                      variant='secondary'
                      size='sm'
                    >
                      <i
                        style={{ marginRight: '4px' }}
                        class='fas fa-laptop-code'
                      ></i>{' '}
                      View Project
                    </Button>
                    <Button
                      href={item.github}
                      target='_blank'
                      variant='secondary'
                      size='sm'
                      style={{ marginLeft: '10px' }}
                    >
                      <i
                        style={{ fontSize: '16px', marginRight: '6px' }}
                        class='fab fa-github'
                      ></i>
                      Github Repo
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </CardDeck>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecentProjects
