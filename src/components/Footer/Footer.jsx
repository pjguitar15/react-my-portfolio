import React from 'react'
import { MDBCol, MDBContainer, MDBFooter } from 'mdbreact'
const Footer = () => {
  return (
    <MDBFooter
      className='font-small py-4 mt-5 text-light'
      style={{ background: '#F26C50' }}
    >
      <MDBContainer fluid className='text-center'>
        <MDBCol md='6' className='mx-auto'>
          <h5 className='title'>Thank you for visiting!</h5>
          <p>Designed and Developed by Philcob Suzuki Josol</p>
        </MDBCol>
        <MDBCol md='6' className='mx-auto'>
          <ul className='d-flex mt-5 justify-content-around flex-wrap row'>
            <li className='list-unstyled'>
              <a
                className='text-light'
                target='_blank'
                href='https://github.com/pjguitar15'
              >
                <i className='fab fa-github mx-2 mr-2'></i>Github
              </a>
            </li>
            <li className='list-unstyled'>
              <a
                className='text-light'
                target='_blank'
                href='https://www.facebook.com/PhilcobSuzuki/'
              >
                <i className='fab fa-facebook mr-2'></i> Facebook
              </a>
            </li>
            <li className='list-unstyled'>
              <a
                className='text-light'
                target='_blank'
                href='https://www.instagram.com/philcobsuzuki/'
              >
                <i className='fab fa-instagram mx-2 mr-2'></i>Instagram
              </a>
            </li>
            <li className='list-unstyled'>
              <a
                className='text-light'
                target='_blank'
                href='https://www.linkedin.com/in/philcob-josol-387553139/'
              >
                <i className='fab fa-linkedin mr-2'></i> Linked in
              </a>
            </li>
            <li className='list-unstyled'>
              <a
                className='text-light'
                target='_blank'
                href='https://www.youtube.com/channel/UCHU5arYldtTFq_PtEWI-ppQ'
              >
                <i className='fab fa-youtube mr-2'></i> Youtube
              </a>
            </li>
          </ul>
        </MDBCol>
      </MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <span>Philcob Suzuki Josol</span>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
