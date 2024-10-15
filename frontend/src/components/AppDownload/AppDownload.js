import React from 'react'
import './AppDownload.css'
import { assets } from '../../assests/assets'

export default function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/> Wazwan App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}
