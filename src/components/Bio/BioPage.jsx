import React, { useEffect, useContext } from 'react'
import { AboutMeData } from '../../GlobalState'
import Aos from 'aos'
import 'aos/dist/aos.css'
import svgbg from '../../Assets/SVG/Asset_3.svg'
import smallcirc from '../../Assets/SVG/small-circle.svg'
import bigbottom from '../../Assets/SVG/big-bottom.svg'
import { Accordion, Card, Container } from 'react-bootstrap'
import { DarkTheme, ThemeToggler } from '../../GlobalState'
const BioPage = () => {
  const darktheme = useContext(DarkTheme)

  const [isDark] = useContext(ThemeToggler)
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div
      id='about'
      className='about m-0 position-relative'
      style={
        isDark
          ? darktheme.dark
          : {
              background: `url(${svgbg}) no-repeat`,
              backgroundSize: 'cover',
              width: '100%',
            }
      }
    >
      <img src={smallcirc} className='small-circ' alt='smallcirc' />
      <img src={bigbottom} className='big-bot' alt='bigbot' />
      <img src={bigbottom} className='big-top' alt='bigbot' />
      <div className='container mb-5 mt-5'>
        <h3
          style={isDark ? { color: '#f26c50' } : { color: 'white' }}
          className='text-left font-weight-bold myRecentProjectsh3 about-me-h3'
        >
          <span>—</span> <span> About me </span>
        </h3>
        <div className='text-light font-italic'>More about myself</div>
      </div>

      {/* paper starts here */}
      <div className='container aboutMePaper'>
        <div className='row'>
          {/* img component */}
          <div className='aboutMeImg col-xl-4 col-md-5 col-sm-12 col-xs-12'>
            <img
              data-aos='fade-up'
              src='https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.0-9/84246825_3504451782961648_5276566424934940672_o.jpg?_nc_cat=101&ccb=3&_nc_sid=174925&_nc_ohc=k5zWpd1NTqoAX_0qlcH&_nc_ht=scontent.fmnl9-2.fna&oh=511348142d228fe8007aa657d2d1e4a4&oe=605A56FB'
              alt='profileimg'
              style={{ width: '100%', borderRadius: '14px' }}
            />
          </div>

          {/* text content here */}
          <div
            data-aos='fade-up'
            className='col-xl-8 col-md-7 col-sm-12 col-xs-12'
          >
            <h2 className='text-light'>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <div className='display-3 mt-sm-5 text-light'>Hello!</div>
              </div>
            </h2>

            <p className='lead aboutMeP text-light'>
              I'm <span className='font-weight-bold'>Philcob Suzuki Josol</span>
              , a Front End Developer, 22 years old from Trece Martires City,
              Cavite, Philippines.
            </p>
            <hr />
            <p className='mt-5 bio-paragraph text-light'>
              The moment I created my first Hello World application, I
              immediately realized my love for development. Since then, I have
              developed my passion and after a while, I realize that my path is
              to be a Front End Developer.
            </p>
          </div>
        </div>
      </div>
      <Container data-aos='fade-up'>
        <Accordion
          defaultActiveKey='0'
          className='mt-5 mx-0 p-0 col-xl-4 col-md-12 text-light'
        >
          <div>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='0'
              className='accordion'
            >
              How old are you?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              <Card.Body className='lead' style={{ fontSize: '16px' }}>
                I'm 22 years old
              </Card.Body>
            </Accordion.Collapse>
          </div>
          <div>
            <Accordion.Toggle as={Card.Header} eventKey='1'>
              When is your birthday?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='1'>
              <Card.Body className='lead' style={{ fontSize: '16px' }}>
                May 15, 1998
              </Card.Body>
            </Accordion.Collapse>
          </div>
          <div>
            <Accordion.Toggle as={Card.Header} eventKey='2'>
              What is your Nationality?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='2'>
              <Card.Body className='lead' style={{ fontSize: '16px' }}>
                I'm half Japanese/Filipino
              </Card.Body>
            </Accordion.Collapse>
          </div>
          <div>
            <Accordion.Toggle as={Card.Header} eventKey='3'>
              What is your hobby?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='3'>
              <Card.Body className='lead' style={{ fontSize: '16px' }}>
                I play guitar. I used to play in a band as a Lead Guitar player.
              </Card.Body>
            </Accordion.Collapse>
          </div>
          <div>
            <Accordion.Toggle as={Card.Header} eventKey='4'>
              What is your favorite food?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='4'>
              <Card.Body className='lead' style={{ fontSize: '16px' }}>
                I love Japanese food, Korean Food, Pizza, Burger, Fried Chicken,
                etc.
              </Card.Body>
            </Accordion.Collapse>
          </div>
          <div>
            <Accordion.Toggle as={Card.Header} eventKey='5'>
              What inspired you to become a developer?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='5'>
              <Card.Body className='lead' style={{ fontSize: '16px' }}>
                💰🤑 Lol, just kidding. The reason why I want to become a Front
                end developer is that it requires creativity and technicality at
                the same time which I like
              </Card.Body>
            </Accordion.Collapse>
          </div>
        </Accordion>
      </Container>
    </div>
  )
}

export default BioPage
