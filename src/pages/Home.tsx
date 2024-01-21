import React from 'react'
import coin from "../assets/images/empty.webp"
import { WalletConnectButton } from '@sei-js/react'
import { useNavigate } from 'react-router-dom'
import discord from "../assets/images/discord.png"
import xicon from "../assets/images/x.png"
import logo from  "../assets/images/logo.png"


const Home = () => {
    const navigate = useNavigate()


    return (
        <div className='home'>
            <div className="container d-flex flex-column align-items-center home-container">
                <p className="top-text">No 1 Most Trusted Place to Flip</p>
                <img src={coin} alt="coin" className='home-coin' />
                <button className='button-background-move' onClick={() => { navigate('/flip') }}>Double Or Nothing</button>
                <div className='wallet-btn my-3'>
                    <WalletConnectButton />
                </div>
                <p className="top-text text-uppercase">Recent Plays</p>
                <div className="recent-plays-box">
                    <div className="recent-play-item">
                        <div className='d-flex align-items-center gap-1'>
                            <img src={coin} alt="coin" />
                            <p className="flip-details">BubblyTable Flipped 0.01 and double</p>
                        </div>
                        <p className="flip-time">17 seconds ago</p>
                    </div>
                    <div className="recent-play-item">
                        <div className='d-flex align-items-center gap-1'>
                            <img src={coin} alt="coin" />
                            <p className="flip-details flip-win">VapidHope Flipped 0.01 and <span className='is-win'>double</span></p>
                        </div>
                        <p className="flip-time">37 seconds ago</p>
                    </div>
                    <div className="recent-play-item">
                        <div className='d-flex align-items-center gap-1'>
                            <img src={coin} alt="coin" />
                            <p className="flip-details">SolMonk Flipped 0.01 and rugged</p>
                        </div>
                        <p className="flip-time">40 seconds ago</p>
                    </div>
                    <div className="recent-play-item">
                        <div className='d-flex align-items-center gap-1'>
                            <img src={coin} alt="coin" />
                            <p className="flip-details flip-win">SociableClassroom Flipped 0.01 and <span className='is-win'>double 3 times</span></p>
                        </div>
                        <p className="flip-time">1 minute ago</p>
                    </div>
                    <div className="recent-play-item">
                        <div className='d-flex align-items-center gap-1'>
                            <img src={coin} alt="coin" />
                            <p className="flip-details">NormalReputation Flipped 0.01 and rugged</p>
                        </div>
                        <p className="flip-time">1 minute ago</p>
                    </div>
                    <div className="recent-play-item">
                        <div className='d-flex align-items-center gap-1'>
                            <img src={coin} alt="coin" />
                            <p className="flip-details">SlimpyTopic Flipped 0.01 and rugged</p>
                        </div>
                        <p className="flip-time">2 minutes ago</p>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div>
                    <a href="https://twitter.com/SeiGamblers">
                        <img src={xicon} alt="x" />
                    </a>
                    <a href="https://discord.gg/drDbar6u88">
                        <img src={discord} alt="discord" />
                    </a>
                </div>
                <img src={logo} alt="logo" style={{height :"20px"}}/>
            </div>
        </div>
    )
}

export default Home