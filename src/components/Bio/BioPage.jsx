import React, { useEffect, useContext } from 'react'
import { AboutMeData } from '../../GlobalState'
import Aos from 'aos'
import 'aos/dist/aos.css'
const BioPage = () => {
  const aboutMeData = useContext(AboutMeData)
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div style={{ background: '#F26C50', padding: '70px 0px 80 0px' }}>
      <div className='col-md-1 col-xs-12 aboutMeImg'>
        <img
          src='https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.0-9/84246825_3504451782961648_5276566424934940672_o.jpg?_nc_cat=101&ccb=3&_nc_sid=174925&_nc_ohc=k5zWpd1NTqoAX_0qlcH&_nc_ht=scontent.fmnl9-2.fna&oh=511348142d228fe8007aa657d2d1e4a4&oe=605A56FB'
          alt=''
          style={{ width: '100%', borderRadius: '50%' }}
          className='shadow-sm bioImg'
        />
      </div>
      <div className='container bg-light text-dark shadow py-5 rounded text-light'>
        {aboutMeData.map((item) => (
          <div key={item.id} data-aos='fade-up' className='row'>
            <div className='col-md-10 col-xl-6 my-5 mx-auto text-center col-xs-12'>
              <h2>{item.title}</h2>
              <p className='lead' style={{ fontSize: '18px' }}>
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
