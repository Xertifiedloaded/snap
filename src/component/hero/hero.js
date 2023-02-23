import React from 'react'
import Network from './network/network'
import Poster from './poster/poster'
import classes from './hero.module.css'
const Hero = () => {
    return (
        <>
            <div className={classes.main}>

                <div className={classes.network}>
                    <Network />
                </div>
                <div className={classes.poster}>
                    <Poster />
                </div>

            </div>
        </>
    )
}

export default Hero