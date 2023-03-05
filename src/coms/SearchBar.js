import React, { useEffect, useMemo, useState } from 'react'
import '../App.css'
import {BiSearchAlt2} from 'react-icons/bi'
export const SearchBar = ({searchV_$, setSearchV_$, allPokemons_$, setTrig_$}) => {
    let [inValue_$, setValue_$] = useState('')
    let [results_$, setResults_$] = useState([])
    function changeValue(e){
        setValue_$(e.target.value)
    }

    useEffect(()=>{
      setSearchV_$([])
      allPokemons_$.map((e)=>{
        if(inValue_$!='' && inValue_$.length > 2 && e.name.includes(inValue_$.toLowerCase()) ){
          fetch(e.url).then(res=>res.json()).then((res)=>{
            setSearchV_$(prev=>[...prev,res])
          })
        } else {setTrig_$(false)}
      })
    },[inValue_$])
    // useEffect(()=>{
    //   // if(inValue_$!='' && inValue_$.length > 2 && )
    //   // console.log(allPokemons_$)
    // },[inValue_$])

    useEffect(()=>{
      // let btn_ = document.querySelector('.SB_btn')
      // btn_.addEventListener('click',()=>{
      //   console.log(searchV_$)
      // })
    },[searchV_$])
    
  return (
    <div className='SB_'>
        <input className='SB_in' type={'text'} placeholder='Pikachu ...' onChange={(e)=>changeValue(e)} value={inValue_$}/>
        <button className='SB_btn' onClick={()=>{setTrig_$(true)}}><BiSearchAlt2 className='SB_i'/></button>
    </div>
  )
}
