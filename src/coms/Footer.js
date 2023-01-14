import React from 'react'
import {FaCopyright} from 'react-icons/fa'
export const Footer = () => {
  return (
    <div className='F_'>
      <span className='F_copyright'>
        <span className='copyright_text'>
          All rights reseved to POKÉMON API
        </span>
        <span className='copyright_icon'>
        <FaCopyright/>
        </span>
      </span>
    </div>
  )
}
