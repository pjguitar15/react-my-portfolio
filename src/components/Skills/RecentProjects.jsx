import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'

import RecentProjectsData from '../../Data/RecentProjects'
import 'aos/dist/aos.css'
const RecentProjects = () => {
  return (
    <div
      id='projects'
      className='skillsMainDiv'
      style={{ background: 'white' }}
    >
      <div className='container mb-5 mt-5'>
        <h3
          style={{ color: '#1F8EB9' }}
          className='text-left font-weight-bold myRecentProjectsh3 mt-5'
        >
          <span>—</span> <span> My Recent Projects</span>
        </h3>
        <div className='text-muted'>From 2020 to 2021</div>
      </div>
      <div className='container'>
        <div className='row'>
          {RecentProjectsData.map((item, index) => (
            <CardDeck className='col-12 mx-auto my-5' key={index}>
              <div data-aos='fade-up'>
                <div className='border-0 row'>
                  <div className='col-12 col-md-6'>
                    <div className='shadow'>
                      <div
                        className='d-flex align-items-center px-3'
                        style={{
                          height: '30px',
                          background: 'white'
                        }}
                      >
                        <div
                          style={{
                            height: '8px',
                            width: ' 8px',
                            background: '#FF9B98',
                            borderRadius: '50%',
                            marginRight: '5px'
                          }}
                        ></div>
                        <div
                          style={{
                            height: '8px',
                            width: ' 8px',
                            background: '#F8CC8F',
                            borderRadius: '50%',
                            marginRight: '5px'
                          }}
                        ></div>
                        <div
                          style={{
                            height: '8px',
                            width: ' 8px',
                            background: '#5DDF89',
                            borderRadius: '50%',
                            marginRight: '5px'
                          }}
                        ></div>
                      </div>
                      <img className='w-100' src={item.image} />
                    </div>
                  </div>
                  <Card.Body className='col-12 col-md-6'>
                    <Card.Title
                      style={{
                        color: '#072947',
                        fontSize: '25px',
                        fontWeight: '800'
                      }}
                      className='mt-3'
                    >
                      {item.title}
                    </Card.Title>
                    {item.tags.map((item, index) => (
                      <span
                        key={index}
                        style={{
                          userSelect: 'none',
                          background: 'orange',
                          padding: '3px 10px',
                          fontSize: '11px',
                          color: 'white',
                          fontWeight: '700',
                          borderRadius: '15px',
                          margin: '0px 3px'
                        }}
                      >
                        {item}
                      </span>
                    ))}
                    <Card.Text
                      style={{ fontSize: '16px', color: '#A4A5A5' }}
                      className='text-justify mt-4'
                    >
                      {item.text}
                    </Card.Text>
                    <p className='mt-4 user-select-none'>
                      <a
                        style={{ padding: '8px 10px', fontSize: '12px' }}
                        href={item.link}
                        target='_blank'
                        className='downloadCv text-decoration-none'
                      >
                        <i
                          style={{ marginRight: '4px' }}
                          className='fas fa-laptop-code'
                        ></i>{' '}
                        View Project
                      </a>

                      <a
                        style={{ padding: '8px 10px', fontSize: '12px' }}
                        href={item.github}
                        target='_blank'
                        className='ml-3 contactButton inlineButtons mt-md-0 mt-3'
                      >
                        <i
                          style={{ fontSize: '16px', marginRight: '6px' }}
                          className='fab fa-github'
                        ></i>
                        Github Repo
                      </a>
                    </p>
                  </Card.Body>
                </div>
              </div>
            </CardDeck>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecentProjects
