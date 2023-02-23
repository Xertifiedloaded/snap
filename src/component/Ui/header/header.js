import React, { useState } from 'react'
import classes from './header.module.css'
import Logo from '../../../assets/images/logo.svg'
import arrowDown from '../../../assets/images/icon-arrow-down.svg'
import arrowUp from '../../../assets/images/icon-arrow-up.svg'
import { Link } from 'react-router-dom'
import Hamburger from '../../../assets/images/icon-close-menu.svg'
import CloseMenu from '../../../assets/images/icon-menu.svg'
import ToDo from '../../../assets/images/icon-todo.svg'
import Calender from '../../../assets/images/icon-calendar.svg'
import Reminder from '../../../assets/images/icon-reminders.svg'
import planning from '../../../assets/images/icon-planning.svg'
const Header = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [expand, setExpand] = useState(false)
  const [isExpand, setIsExpand] = useState(false)
  const expandHandleClick = () => {
    setIsExpand(isExpand)
    console.log(isExpand)
  }
  return (
    <div className={classes.main}>
      <img src={Logo} alt="" srcset="" />
      <div onClick={() => setIsMobile(!isMobile)} className={classes.mobile}>
        {isMobile ? <img src={Hamburger} alt="" /> : <img src={CloseMenu} alt="" srcset="" />}
      </div>
      <div className={`${isMobile ? classes.open : classes.close} &&  ${classes.all}`} onClick={() => setIsMobile(isMobile)}>
        <nav>
          <Link>Features
            <span onClick={()=>setIsExpand(!isExpand)}>
              {isExpand ? <img src={arrowUp} alt="" srcset="" /> : <img src={arrowDown} alt="" srcset="" />}
            </span>
            <div className={`${isExpand ? classes.closeTab : classes.openTab} && ${classes.expand}`} onClick={expandHandleClick}>
              <a><img src={ToDo} alt="" srcset="" />ToDo </a>
              <a><img src={Calender} alt="" srcset="" />Calender </a>
              <a><img src={Reminder} alt="" srcset="" />Reminders </a>
              <a><img src={planning} alt="" srcset="" />ToDo </a>
            </div>
          </Link>
          <Link>
            Company
            <span onClick={()=>setExpand(!expand)}>
              {expand ? <img src={arrowUp} alt="" srcset="" /> : <img src={arrowDown} alt=""/>}
            </span>
            <div className={`${expand ? classes.closeTab : classes.openTab} && ${classes.expand}` } onClick={()=>setExpand(expand)}>
              <a>History</a>
              <a>Our team</a>
              <a>Blog</a>
            </div>
          </Link>
          <Link>Careers</Link>
          <Link>About</Link>
        </nav>
        <div className={classes.btn}>
          <Link>Login</Link>
          <Link>
            <button>
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header