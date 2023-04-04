import React, { useEffect, useState } from 'react'
import classes from './header.module.css'
import Logo from '../../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
import Hamburger from '../../../assets/images/icon-close-menu.svg'
import CloseMenu from '../../../assets/images/icon-menu.svg'
import { NavItems } from '../../../constant'
const Header = () => {
  const [active, setActive] = useState(false)
  const [click, setClick] = useState(false)
  const [desktopWidth, setDesktopWidth] = useState(window.innerWidth)
  const toggler = () => {
    setActive(!active)
  }
  const Choose = (idx) => {
    if (click === idx) {
      return (
        setClick(null)
      )
    }
    setClick(idx)
  }
  useEffect(() => {
    const setScreenWidth = () => {
      setDesktopWidth(window.innerWidth)
    }
    window.addEventListener('resize',setScreenWidth)
  })
  return (
    <div className={classes.main}>
      <div className={classes.image}>
        <img src={Logo} alt="" srcset="" />
      </div>
      <div onClick={toggler} className={classes.mobile}>
        {active ? <img src={Hamburger} /> : <img src={CloseMenu}/>}
      </div>
      {
        (active || desktopWidth > 600) &&
        <nav>
          <ul>
            {
              NavItems.map((items, idx) => (
                <Details Choose={Choose} click={click} toggler={toggler} active={active} items={items} idx={idx} />
              ))
            }
          </ul>
          <ul className={classes.navMenu}>
            <li className={classes.navList}>
              <NavLink>
                login
              </NavLink>
            </li>
            <li className={classes.navList}>
              <NavLink>
                <button>
                  register
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>
  }
    </div>
  )
}
export default Header
const Details = ({ items, toggler, active, idx, click, Choose }) => {
  return (
    <div className={classes.all}>
      <li className={classes.navList} onClick={() => Choose(idx)}>
        <NavLink>
          {items.name}
          {click === idx ? <img src={items.image} /> : <img src={items.image2} />}
          <div className={classes.content}>
            <div className={classes.content}>
              {
                click === idx ?
                  <div>
                  {items.content}
                </div>:null
              }
            </div>
          </div>
        </NavLink>
      </li>


    </div>
  )
}