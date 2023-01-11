import React, { useEffect, useState } from 'react'
import '../App.css'
import {BiSearchAlt2} from 'react-icons/bi'
export const SearchBar = () => {
    let [inValue_$, setValue_$] = useState('')
    function changeValue(e){
        setValue_$(e.target.value)
    }
  return (
    <div className='SB_'>
        <input className='SB_in' type={'text'} placeholder='Pikachu ...' onChange={(e)=>changeValue(e)} value={inValue_$}/>
        <button className='SB_btn'><BiSearchAlt2 className='SB_i'/></button>
    </div>
  )
}
