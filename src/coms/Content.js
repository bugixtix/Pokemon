import React from 'react'
import { Card } from './Card'
import '../App.css'

export const Content = () => {
  return (
    <div className='C_'>
        <h1 className='C_h1'> the latest released cards</h1>
        <div className='C_C'>
          <Card/>
          <Card/>
        </div>
    </div>
  )
}
