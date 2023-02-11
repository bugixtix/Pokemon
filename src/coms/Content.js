import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import '../App.css'

export const Content = () => {  

  var [pokemon_$, setPokemon_$]=useState([])
  var [all_$, setAll_$] = useState([])
  var [ready_$, setReady_$] = useState(false)
  var [startIndex_$, setStart_$] = useState(0)
  var [endIndex_$, setEnd_$] = useState(1260)
  let allPoks = [];
  let url_20 = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=19'
  useEffect(()=>{
      fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${startIndex_$}&limit=${startIndex_$+19}`).then(res=>res.json()).then((res_)=>{
        setAll_$(res_.results);
        for (let i = 1; i<all_$.length; i++){
          fetch(all_$[i].url).then(res=>res.json()).then(res=>setPokemon_$(prev=>[...prev,res]))
        }
      })
    },[startIndex_$])
  useEffect(()=>{
    // fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${0}&limit=${19}`).then(res=>res.json()).then((res_)=>{
    //   setAll_$(res_.results);})
    },[])
    // console.log(pokemon_$)
    // console.log(all_$)
    // 
    // 
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

  return (
    <div className='C_'>
        <h1 className='C_h1'> the latest released cards</h1>
        <div className='C_C'>
          {pokemon_$.map((x,index)=><Card key={index} name_={x.name} data_={x} index_={index}/>)}
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
