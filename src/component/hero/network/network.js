import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../network/network.module.css'
import ClientAudio from '../../../assets/images/client-audiophile.svg'
import clientDatabiz from '../../../assets/images/client-databiz.svg'
import ClientMarker from '../../../assets/images/client-maker.svg'
import ClientMeet from '../../../assets/images/client-meet.svg'
const Network = () => {
    return (
        <div className={classes.main}>
            <h1>
                Make <br /> remote work
            </h1>
            <p>
                get your team in sync , no matter your location. Streamline processes, create team rituals and watch productivity soar.

            </p>
            <div className={classes.btn}>
                <Link>
                    <button>
                        learn more
                    </button>
                </Link>
            </div>
            <div className={classes.partner}>
                <img src={clientDatabiz} alt="" srcset="" />
                <img src={ClientAudio} alt="" srcset="" />
                <img src={ClientMeet} alt="" srcset="" />
                <img src={ClientMarker} alt="" srcset="" />
            </div>
        </div>
    )
}

export default Network;