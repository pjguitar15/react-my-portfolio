import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'
const Footer = () => {
  return (
    <MDBFooter
      className='font-small pt-4 mt-4 text-light'
      style={{ background: '#F26C50' }}
    >
      <MDBContainer fluid className='text-center text-md-left'>
        <MDBRow>
          <MDBCol md='6'>
            <h5 className='title'>Footer Content</h5>
            <p>Designed and Developed by Philcob Suzuki Josol</p>
          </MDBCol>
          <MDBCol md='6'>
            <h5 className='title'>Links</h5>
            <ul>
              <li className='list-unstyled'>
                <a className='text-light' href='#!'>
                  Link 1
                </a>
              </li>
              <li className='list-unstyled'>
                <a className='text-light' href='#!'>
                  Link 1
                </a>
              </li>
              <li className='list-unstyled'>
                <a className='text-light' href='#!'>
                  Link 1
                </a>
              </li>
              <li className='list-unstyled'>
                <a className='text-light' href='#!'>
                  Link 1
                </a>
              </li>
              <li className='list-unstyled'>
                <a className='text-light' href='#!'>
                  Link 1
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
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
