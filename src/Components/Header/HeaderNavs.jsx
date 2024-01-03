import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import Logo from '../../image/seff_logo_transparent.png'
import { useSelector } from 'react-redux'
function HeaderNavs() {
  const online = useSelector( state => state.Users.online)
  return (
    <nav className="navbar navbar-expand-xl  navbar-dark  ">

      <div className="container ">
        <Link to={'/'} >
          <img src={Logo} alt="" style={{ width: "100px" }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-target="#navbaricon" data-bs-toggle="collapse" aria-controls="navbaricon" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse " id="navbaricon">

          <ul className="navbar-nav mx-5 ">
            <li className="nav-item navbar-hover position-relative  "><NavLink to={'/'} style={{ fontSize: '16px' }} className="  nav-link  text-uppercase px-3  text-white">home</NavLink>
              <div className='nav-link-line '></div></li>
            <li className="nav-item navbar-hover position-relative "><NavLink to={'/articles/about'} style={{ fontSize: '16px' }} className="  nav-link text-uppercase px-3  text-white">about</NavLink><div className='nav-link-line  '></div></li>
            <li className="nav-item  dropdown "><NavLink style={{ fontSize: '16px' }} className="  nav-link  dropdown-toggle  text-uppercase px-3  text-white" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >tech</NavLink>
              <ul className="dropdown-menu  bg-dropdown-Header " aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink to={'/articles/laptops'} className="dropdown-item text-uppercase text-dark">laptops</NavLink></li>
                <li><NavLink to={'/articles/phones'} className="dropdown-item text-uppercase text-dark">phones</NavLink></li>
                <li><NavLink to={'/articles/tableste'} className="dropdown-item text-uppercase text-dark">tableste</NavLink></li>
              </ul>
            </li>
            <li className="nav-item navbar-hover position-relative  "><NavLink to={'/articles/business'} style={{ fontSize: '16px' }} className="  nav-link text-uppercase px-3  text-white">business</NavLink><div className='nav-link-line '></div></li>
            <li className="nav-item navbar-hover position-relative "><NavLink to={'/articles/security'} style={{ fontSize: '16px' }} className="  nav-link text-uppercase px-3  text-white"> security</NavLink><div className='nav-link-line '></div></li>
            <li className="nav-item navbar-hover position-relative "><NavLink to={'/articles/sports'} style={{ fontSize: '16px' }} className="  nav-link text-uppercase px-3  text-white"> sports</NavLink><div className='nav-link-line '></div></li>
            <li className="nav-item navbar-hover position-relative  "><NavLink to={'/articles/medical'} style={{ fontSize: '16px' }} className="  nav-link text-uppercase px-3  text-white">medical</NavLink><div className='nav-link-line '></div></li>
            <li className="nav-item navbar-hover position-relative "><NavLink to={'/articles/startups'} style={{ fontSize: '16px' }} className="  nav-link text-uppercase px-3  text-white"> startups</NavLink><div className='nav-link-line '></div></li>
            <li className="nav-item navbar-hover position-relative "><NavLink to={'/articles/apps'} style={{ fontSize: '16px' }} className="  nav-link text-uppercase px-3  text-white">apps</NavLink><div className='nav-link-line '></div></li>
           {online && <li className="nav-item navbar-hover position-relative"><NavLink to={'/jobs'} style={{ fontSize: '16px' }} className="  nav-link text-uppercase px-3  text-white">jobs</NavLink><div className='nav-link-line '></div></li>}
          </ul>
        </div>
      </div>
    </nav>)
}

export default HeaderNavs