import React from 'react'
import classes from "./poster.module.css"
import PosterImg from '../../../assets/images/image-hero-desktop.png'
const Poster = () => {
  return (
      <div className={classes.main}>
          <img src={PosterImg} />
    </div>
  )
}

export default Poster