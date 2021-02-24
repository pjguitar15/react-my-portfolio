import React, { useContext, useEffect } from 'react'
import { Card, CardDeck, Button } from 'react-bootstrap'
import { DarkTheme, LightTheme, ThemeToggler } from '../../GlobalState'
import Aos from 'aos'
import 'aos/dist/aos.css'
import guitarapp from '../../Assets/guitarapp.JPG'
import expenseapp from '../../Assets/expense-calculator-app.JPG'
import todolist from '../../Assets/todolist.JPG'
const RecentProjects = () => {
  const darktheme = useContext(DarkTheme)
  const lighttheme = useContext(LightTheme)
  const [isDark, setIsDark] = useContext(ThemeToggler)
  const guitarAppData = ['React', 'Firebase', 'React Bootstrap', 'Stripe API']
  const expenseTrackerData = ['HTML', 'CSS', 'Javascript', 'Bootstrap']
  const todolistData = ['React', 'CSS']
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
        className='text-center mb-5 mt-5'
      >
        My Recent Projects
      </h3>

      <CardDeck>
        <div
          data-aos='fade-up'
          className='col-sm-12 col-md-6 col-lg-4 col-xl-6 mx-auto my-4'
        >
          <Card style={{ width: '100%' }}>
            <Card.Img variant='top' src={guitarapp} />
            <Card.Body>
              {guitarAppData.map((item, index) => (
                <span
                  key={index}
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

              <Card.Title className='mt-3'>Guitar E-Commerce</Card.Title>
              <Card.Text>This is my first completed React project! </Card.Text>
              <Button
                href='https://philcobguitarshop.netlify.app/'
                target='_blank'
                variant='secondary'
                size='sm'
              >
                View Project
              </Button>
            </Card.Body>
          </Card>
        </div>
      </CardDeck>

      {/* PROJECT 2 */}
      <CardDeck>
        <div
          data-aos='fade-up'
          className='col-sm-12 col-md-6 col-lg-4 col-xl-6 mx-auto my-4'
        >
          <Card style={{ width: '100%' }}>
            <Card.Img variant='top' src={todolist} />
            <Card.Body>
              {todolistData.map((item, index) => (
                <span
                  key={index}
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

              <Card.Title className='mt-3'>Todo-list App</Card.Title>
              <Card.Text>
                One of my early react projects. I use React hooks on my React
                applications.
              </Card.Text>
              <Button
                href='https://philcobguitarshop.netlify.app/'
                target='_blank'
                variant='secondary'
                size='sm'
              >
                View Project
              </Button>
            </Card.Body>
          </Card>
        </div>
      </CardDeck>

      {/* PROJECT 3 */}

      <CardDeck>
        <div
          data-aos='fade-up'
          className='col-sm-12 col-md-6 col-lg-4 col-xl-6 mx-auto my-4'
        >
          <Card style={{ width: '100%' }}>
            <Card.Img variant='top' src={expenseapp} />
            <Card.Body>
              {expenseTrackerData.map((item, index) => (
                <span
                  key={index}
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

              <Card.Title className='mt-3'>Expense Tracker</Card.Title>
              <Card.Text>
                One of my early projects I created using Vanilla Javascript
              </Card.Text>
              <Button
                href='https://philcobexpensecalculator.netlify.app/'
                target='_blank'
                variant='secondary'
                size='sm'
              >
                View Project
              </Button>
            </Card.Body>
          </Card>
        </div>
      </CardDeck>
    </div>
  )
}

export default RecentProjects
