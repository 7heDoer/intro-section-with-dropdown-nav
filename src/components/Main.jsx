import React from 'react'
import databiz from '../images/client-databiz.svg'
import maker from '../images/client-maker.svg'
import meet from '../images/client-meet.svg'
import audio from '../images/client-audiophile.svg'

import '../styles/Main.css'

const Main = () => {
  return (
    <main className="main">
        <div className="main-container">
            <section className="info">
                <h1 className="info-header">
                    <span className='block'>Make</span> remote work
                </h1>

                <p className="info-paragraph">
                    Get your team in sync, no matter your location.
                    Streamline processes, create team rituals, and watch productivity soar.
                </p>

                <button className="info-btn">
                    Learn more
                </button>

                <div className="info-users">
                    <a href="" className="users">
                        <img src={databiz} alt="" />
                    </a>
                    <a href="" className="users">
                        <img src={audio} alt="" />
                    </a>
                    <a href="" className="users">
                        <img src={meet} alt="" />
                    </a>
                    <a href="" className="users">
                        <img src={maker} alt="" />
                    </a>
                </div>
            </section>
            <div className="main-banner"></div>
        </div>
    </main>
  )
}

export default Main