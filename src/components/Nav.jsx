import React, { lazy, Suspense } from 'react'
import '../styles/Nav.css'
// import Menu from './Menu'
import calendar from '../images/icon-calendar.svg'
import planning from '../images/icon-planning.svg'
import todo from '../images/icon-todo.svg'
import reminder from '../images/icon-reminders.svg'

const Nav = () => {

    const Menu = lazy(() => import('../components/Menu'))
  return (
    <nav className="header-nav">
        <div className="nav-container">

            <div className="nav-main">

                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Suspense>

                            <Menu className="right" btnName="menu-btn1" title="Features">
                                    <li className="menu-item">
                                        <a className="menu-link" href="#">
                                            <img src={todo} aria-hidden/>Todo List
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" href="#">
                                            <img src={calendar} aria-hidden/>calendar
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" href="#">
                                            <img src={reminder} aria-hidden/>Reminder
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a className="menu-link" href="#">
                                            <img src={planning} aria-hidden/>Planning
                                        </a>
                                    </li>
                            </Menu>
                        </Suspense>
                    </li>
                    <li className="nav-list-item">
                        <Suspense>

                            <Menu className="left" title="Company" btnName="menu-btn2">
                                <li className="submenu-item">
                                    <a href="">History</a>
                                </li>
                                <li className="submenu-item">
                                    <a href="">Our Team</a>
                                </li>
                                <li className="submenu-item">
                                    <a href="">Blog</a>
                                </li>
                            </Menu>
                        </Suspense>
                    
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
        </div>
      </nav>
    )       
}

export default Nav