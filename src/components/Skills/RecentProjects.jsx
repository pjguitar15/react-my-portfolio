import React, { useContext } from 'react'
import { Card, CardDeck, Button } from 'react-bootstrap'
import { DarkTheme, LightTheme, ThemeToggler } from '../../GlobalState'
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
      <div className='container mb-5 mt-5'>
        <h3
          style={isDark ? { color: darktheme.color } : { color: '#f26c50' }}
          className='text-left font-weight-bold myRecentProjectsh3 mt-5'
        >
          <span>—</span> <span> My Recent Projects </span>
        </h3>
        <div className='text-muted'>From 2020 to 2021</div>
      </div>
      <div className='container'>
        <div className='row'>
          {RecentProjectsData.map((item, index) => (
            <CardDeck
              className='col-sm-12 col-md-6 col-lg-6 col-xl-4 mx-auto my-4 text-center'
              key={index}
            >
              <div data-aos='fade-up'>
                <Card
                  className={`${isDark ? 'border' : 'border-0 shadow-sm'} `}
                  style={isDark ? darktheme.dark : lighttheme.light}
                >
                  <Card.Img variant='top' src={item.image} />
                  <Card.Body
                    style={
                      isDark
                        ? { color: darktheme.color }
                        : { color: lighttheme.color }
                    }
                  >
                    {item.tags.map((item, index) => (
                      <span
                        key={index}
                        style={{
                          userSelect: 'none',
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
                      variant='dark'
                      size='sm'
                    >
                      <i
                        style={{ marginRight: '4px' }}
                        className='fas fa-laptop-code'
                      ></i>{' '}
                      View Project
                    </Button>
                    <Button
                      href={item.github}
                      target='_blank'
                      variant='dark'
                      size='sm'
                      style={{ marginLeft: '10px' }}
                    >
                      <i
                        style={{ fontSize: '16px', marginRight: '6px' }}
                        className='fab fa-github'
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
