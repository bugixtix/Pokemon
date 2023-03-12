import React, { useEffect, useMemo, useState } from 'react'
import '../App.css'
import {BiSearchAlt2} from 'react-icons/bi'
export const SearchBar = ({searchV_$, setSearchV_$, allPokemons_$, setTrig_$, ResultsTrig_$, setScroll_$}) => {
    let [inValue_$, setValue_$] = useState('')
    let [results_$, setResults_$] = useState([])
    let [localTrig_$, setLocal_$] = useState(true)
    function changeValue(e){
        setValue_$(e.target.value)
    }
    function enterHandler(e,value){
      if(e.key==='Enter'){
        submitHandler(value)
      }
    }
    function submitHandler (value){
      setTrig_$(true)
      allPokemons_$.map((e)=>{
        if(value!='' && value.length > 2 && e.name.includes(value.toLowerCase())){
          fetch(e.url).then(res=>res.json()).then((res)=>{setSearchV_$(prev=>[...prev,res])}).then(()=>{setScroll_$(prev=>prev+=1)})
        }
      })
      setSearchV_$([])
    }

  return (
    <div className='SB_'>
        <input className='SB_in' type={'text'} placeholder='Pikachu ...' onChange={(e)=>changeValue(e,inValue_$)} onKeyDown={(e)=>enterHandler(e,inValue_$)} value={inValue_$}/>
        <button className='SB_btn' onClick={()=>{submitHandler(inValue_$)}}><BiSearchAlt2 className='SB_i'/></button>
    </div>
  )
}
