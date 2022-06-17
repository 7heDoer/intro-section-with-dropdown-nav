import React from 'react'
import '../styles/Nav.css'
import { Sub } from './Sub'

const Nav = () => {
  return (
    <nav className="header-nav">
        <div className="nav-main">

            <h1 className="nav-logo"><a href='#'>snap</a></h1>
            <ul className="nav-list">
                <li className="nav-list-item">
                    <button className='menu-btn' aria-haspopup>
                        Features 
                        <span aria-hidden className="icon">
                        </span>
                    </button>
                    <Sub className="right" label={"Features submenu"}>

                    </Sub>
                </li>
                <li className="nav-list-item">
                    <button className='menu-btn' aria-haspopup>
                        Company
                        <span aria-hidden className="icon">
                        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>
                        </span>
                    </button>
                    <Sub className="left" label={"Company submenu"}>
                        <li className="submenu-item">
                            <a href="">History</a>
                        </li>
                        <li className="submenu-item">
                            <a href="">Our Team</a>
                        </li>
                        <li className="submenu-item">
                            <a href="">Blog</a>
                        </li>
                    </Sub>
                </li>
                <li className="nav-list-item">
                    <a href="#">Careers</a>
                </li>
                <li className="nav-list-item">
                    <a href="#">About</a>
                </li>
            </ul>
        </div>
        <div className="nav-aside">
            <ul className="nav-aside-list">
                <li className="nav-aside-list-item">
                    <a href="#">Login</a>
                </li>
                <li className="nav-aside-list-item ">
                    <a href="#" className='register'>Register</a>
                </li>
            </ul>
        </div>
      </nav>
    )       
}

export default Nav