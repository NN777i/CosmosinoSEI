import React from 'react'
import { useWallet, WalletConnectButton } from '@sei-js/react';
import logo from "../assets/images/logo.png"


const Navbar = () => {
  return (
    <div className='d-flex align-items-center justify-content-between p-3'>
      <img src={logo} alt="logo" style={{height:'35px'}} />
      <div className='wallet-btn'>
        <WalletConnectButton />
      </div>  
    </div>
  )
}

export default Navbar