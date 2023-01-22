import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import '../App.css'

export const Content = () => {  

  var [pokemon_$, setPokemon_$]=useState([])

  useEffect(()=>{
      for(let i = 1; i<10; i++){
        fetch('https://pokeapi.co/api/v2/pokemon/'+i+'/').then(res=>res.json()).then((res)=>{setPokemon_$(prev=>[...prev,res])})
      }
    },[])
    console.log(pokemon_$)

  return (
    <div className='C_'>
        <h1 className='C_h1'> the latest released cards</h1>
        <div className='C_C'>
          {pokemon_$.map((x,index)=><Card key={index} name_={x.name} abilities_={x.abilities} data_={x} index_={index}/>)}
          {/* <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/> */}
        </div>
    </div>
  )
}
