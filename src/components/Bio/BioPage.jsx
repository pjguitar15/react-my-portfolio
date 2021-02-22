import React from 'react'

const BioPage = () => {
  return (
    <div className='shadow-sm' style={{ padding: '90px 0px 100px 0px' }}>
      <div className='container shadow-sm p-5 rounded'>
        <div className='row'>
          <div className='col-2 aboutMeImg'>
            <img
              src='https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.0-9/84246825_3504451782961648_5276566424934940672_o.jpg?_nc_cat=101&ccb=3&_nc_sid=174925&_nc_ohc=k5zWpd1NTqoAX_0qlcH&_nc_ht=scontent.fmnl9-2.fna&oh=511348142d228fe8007aa657d2d1e4a4&oe=605A56FB'
              alt=''
              style={{ width: '100%', borderRadius: '50%' }}
              className='shadow-sm'
            />
          </div>
          <div className='col-10'>
            <h2>About me</h2>
            <p className='lead' style={{ fontSize: '18px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              unde repellat, illum blanditiis libero necessitatibus laborum
              omnis modi rem est inventore deleniti molestias deserunt tenetur
              natus reprehenderit qui animi debitis.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BioPage
