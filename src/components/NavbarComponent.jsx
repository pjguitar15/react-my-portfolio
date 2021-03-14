import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'
import Switch from '@material-ui/core/Switch'
import logo from '../Assets/favicon.png'
import {
  ThemeToggler,
  TogglerHandler,
  DarkTheme,
  LightTheme,
} from '../GlobalState'
const NavbarComponent = () => {
  const handleChange = useContext(TogglerHandler)
  const [isDark] = useContext(ThemeToggler)
  const darktheme = useContext(DarkTheme)
  const lighttheme = useContext(LightTheme)

  return (
    <div>
      <Navbar
        style={isDark ? darktheme.dark : lighttheme.light}
        expand='xl'
        fixed='top'
      >
        <Link
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Navbar.Brand className='col-5 p-0 mx-auto'>
            <img
              className='logoImg'
              style={{ height: '100%', width: '100%' }}
              src={logo}
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav
            className={`text-center rounded mainNav  ${
              isDark ? 'bg-dark' : 'bg-light'
            } `}
          >
            <Link
              className={`${isDark ? 'mainLinkItemDark' : 'mainLinkItem'}`}
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Nav.Link
                style={{ color: isDark && darktheme.color }}
                className='navLink mx-4'
              >
                {/* <i
                  style={{ fontSize: '19px', marginRight: '8px' }}
                  className='fa fa-home'
                ></i> */}
                Home
              </Nav.Link>
            </Link>
            <Link
              activeClass='active'
              className={`${isDark ? 'mainLinkItemDark' : 'mainLinkItem'}`}
              to='projects'
              spy={true}
              smooth={true}
              offset={70}
              duration={500}
            >
              <Nav.Link
                style={{ color: isDark && darktheme.color }}
                className='navLink mx-4'
              >
                {/* <i
                  style={{ fontSize: '15px', marginRight: '8px' }}
                  className='fas fa-laptop-code'
                ></i> */}
                Projects
              </Nav.Link>
            </Link>

            <Link
              activeClass='active'
              className={`${isDark ? 'mainLinkItemDark' : 'mainLinkItem'}`}
              to='about'
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              <Nav.Link
                style={{ color: isDark && darktheme.color }}
                className='navLink mx-4'
              >
                {/* <i style={{ marginRight: '8px' }} className='fas fa-user'></i> */}
                About
              </Nav.Link>
            </Link>

            <Link
              activeClass='active'
              className={`${isDark ? 'mainLinkItemDark' : 'mainLinkItem'}`}
              to='skills'
              spy={true}
              smooth={true}
              offset={130}
              duration={500}
            >
              <Nav.Link
                style={{ color: isDark && darktheme.color }}
                className='navLink mx-4'
              >
                {/* <i className='fas fa-code'></i> */}
                Skill
              </Nav.Link>
            </Link>

            <Link
              activeClass='active'
              className={`${isDark ? 'mainLinkItemDark' : 'mainLinkItem'}`}
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Nav.Link
                style={{ color: isDark && darktheme.color }}
                className='navLink mx-4'
              >
                {/* <i
                  style={{ fontSize: '15px', marginRight: '8px' }}
                  className='fas fa-mobile'
                ></i> */}
                Contact
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <h6
          className='d-none d-xl-block'
          style={{ color: isDark && darktheme.color }}
        >
          {isDark ? 'Dark theme' : 'Light theme'}
        </h6>
        <div className='d-none d-xl-block'>
          <Switch
            checked={isDark}
            onChange={handleChange}
            name='checkedA'
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </div>
      </Navbar>
    </div>
  )
}

export default NavbarComponent
