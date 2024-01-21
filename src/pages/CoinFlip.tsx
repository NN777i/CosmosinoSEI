import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import head from "../assets/images/brainpulse1.gif"
import spinGif from "../assets/images/spin1.gif"
import tail from "../assets/images/tailmove1.gif"
import discord from "../assets/images/discord.png"
import xicon from "../assets/images/x.png"
import logo from  "../assets/images/logo.png"


const CoinFlip = () => {
    const [spinning, setSpinning] = useState<boolean>(false)
    const [sideSelected, setSideSelected] = useState('head')
    const [winSide, setWinSide] = useState('head')
    const [isWin, setIsWin] = useState<boolean>()
    const [winShow, setWinShow] = useState<boolean>(false)

    const spinCoin = () => {
        try {
            setIsWin(false)
            setWinShow(false)
            setSpinning(true)
            setTimeout(() => {

                let win = Math.floor(Math.random() * 2);

                if (win == 1) {
                    setWinSide('head')
                    if (sideSelected === 'head') {
                        setIsWin(true)
                    }
                    setWinShow(true)
                } else {
                    setWinSide('tail')
                    if (sideSelected === 'tail') {
                        setIsWin(true)
                    }
                    setWinShow(true)
                }
                setSpinning(false)
            }, 4000);
        } catch (e) {
            console.log(e)
        }
    }

    const selectSide = (side: any) => {
        if (side) {
            setSideSelected(side)
        }
    }

    return (
        <div className='home'>
            <div>
            <Navbar />
            <div className="container d-flex flex-column align-items-center">
                <img src={spinning ? spinGif : winSide == 'tail' ? tail : winSide == 'head' ? head : ''} alt="img" className='coin-image' />
                <div className='d-flex align-items-center gap-3 my-3' >
                    <button className="button-background-move" onClick={() => { selectSide('head') }} >Head</button>
                    <button className="button-background-move" onClick={() => { selectSide('tail') }} >Tail</button>
                </div>
                <p className="top-text text-capitalize">FOR</p>
                <div className='d-flex align-items-center gap-3 my-3' >
                    <button className="button-background-move w-200">5 Sei</button>
                    <button className="button-background-move w-200">10 Sei</button>
                    <button className="button-background-move w-200">25 Sei</button>
                </div>
                <div className='d-flex align-items-center gap-3 my-3' >
                    <button className="button-background-move w-200">50 Sei</button>
                    <button className="button-background-move w-200">100 Sei</button>
                    <button className="button-background-move w-200">200 Sei</button>
                </div>
                {/* <hr /> */}

                <button className="button-background-move" onClick={spinCoin} >DOUBLE OR NOTHING</button>
                {winShow && <p className="top-text text-capitalize">{isWin === true ? 'You Win !!!' : 'You Lost !!!'}</p>}
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

export default CoinFlip