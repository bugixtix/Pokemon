import React, { useEffect, useRef, useState } from 'react'
import { Card } from './Card'
import '../App.css'

export const Content = () => {  

  var [array_$,setArray_$] = useState([])
  var count = useRef(0)
    useEffect(()=>{
      
      fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${count.current}&limit=${(18)}`).then(res=>res.json()).then((res_)=>{
          res_.results.forEach((i)=>{fetch(i.url).then(res=>res.json()).then(res__=>setArray_$(prev=>[...prev,res__]))})
          })
          
    },[count.current])

  return (
    <div className='C_'>
        <h1 className='C_h1'> Some Cards </h1>
        <div className='C_C'>
          {array_$.map((i,index)=><Card index_={index} name_={i.name} data_={i} key={index}/>)}
        </div>
    </div>
  )
}
