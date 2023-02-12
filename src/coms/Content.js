import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import '../App.css'

export const Content = () => {  

  var [pokemon_$, setPokemon_$]=useState([])
  var [all_$, setAll_$] = useState([])
  var [ready_$, setReady_$] = useState(false)
  var [startIndex_$, setStart_$] = useState(0)
  var [endIndex_$, setEnd_$] = useState(1260)
  var [array_$,setArray_$] = useState([])
  var [allData_$, setAllData_$] = useState([])
  let allPoks = [];
  let url_20 = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=19'

  useEffect(()=>{
      fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${0}&limit=${(18)}`).then(res=>res.json()).then((res_)=>{
      res_.results.forEach((i)=>{fetch(i.url).then(res=>res.json()).then(res__=>setArray_$(prev=>[...prev,res__]))})
      })
    },[startIndex_$])
  
  useEffect(()=>{
      fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${18}&limit=${18}`).then(res=>res.json()).then((res)=>{res.results.forEach((i)=>{fetch(i.url).then(res=>res.json()).then(res=>setAllData_$(prev=>[...prev,[res]]))})})
  },[])
  console.log(allData_$)

    useEffect(()=>{
      document.querySelector('.prev_').addEventListener('click',()=>{
        setStart_$(prev=>prev-19)
      })
      document.querySelector('.next_').addEventListener('click',()=>{
        setStart_$(prev=>prev+19)
      })

    },[])
    useEffect(()=>{
      startIndex_$<0 ? setStart_$(0) : startIndex_$>1279 ? setStart_$(1279) : console.log(`site nr. ${Math.round(startIndex_$/19)}`)
    },[startIndex_$])

    function Fetchem ({pro}){
      // console.log(all_$)
      useEffect(()=>{
        // all_$.forEach((i,index)=>{fetch(i.url).then(res=>res.json()).then(res=>setArray_$(res))})
      },[allPoks])
      return(
        <span>
          {/* {array_$.map(i=>(<h1> {i.name} </h1>))} */}
        </span>
      )
    }
  return (
    <div className='C_'>
        <h1 className='C_h1'> Some Cards </h1>
        <div className='C_C'>
          {array_$.map((i,index)=><Card index_={index} name_={i.name} data_={i} key={index}/>)}
        </div>
        <div className='C_C1'>
          <button className='C_btn prev_'>
            previous
          </button>
          <span>
          <button className='C_btn site_btn'>
            First Site
          </button>          
          <button className='C_btn site_btn'>
            X
          </button>          
          <button className='C_btn site_btn'>
            Last Site
          </button>
          </span>
          <button className='C_btn next_'>
            next
          </button>
        </div>  
    </div>
  )
}
