import React from 'react'
import './background.css'
import { XyzTransitionGroup } from '@animxyz/react'
import '@animxyz/core'
import Introduction from './Introduction'
import Button from '@mui/material/Button'

export default function Background ({scrollDown,aboutSection}) {
  return (
    <>
    <div className='background'>
      <section>
        <span className='star'></span>
        <span className='star'></span>
        <span className='star'></span>
        <span className='star'></span>
        <span className='star'></span>
        <span className='star'></span>
        <span className='star'></span>
        <span className='star'></span>
        <span className='star'></span>
        <span className='star'></span>
      </section>
      <Introduction scrollDown={scrollDown} aboutSection={aboutSection}/>
     
    </div>
    
    </>
  )
}
