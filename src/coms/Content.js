import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import '../App.css'

export const Content = () => {  

  var [pokemon_$, setPokemon_$]=useState([])
  var [all_$, setAll_$] = useState([])
  var [ready_$, setReady_$] = useState(false)
  let url_20 = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20'
  useEffect(()=>{
      // for(let i = 1; i<10; i++){
      //   fetch('https://pokeapi.co/api/v2/pokemon/'+i+'/').then(res=>res.json()).then((res)=>{setPokemon_$(prev=>[...prev,res])})
      // }
      fetch(url_20).then(res=>res.json()).then((res_)=>{setAll_$(res_.results);setReady_$(true)})
    },[])
  useEffect(()=>{
    for (let i = 1; i<all_$.length; i++){
      fetch(all_$[i].url).then(res=>res.json()).then(res=>setPokemon_$(prev=>[...prev,res]))
    }
    },[ready_$])
    console.log(pokemon_$)
    // 
    // 
  return (
    <div className='C_'>
        <h1 className='C_h1'> the latest released cards</h1>
        <div className='C_C'>
          {pokemon_$.map((x,index)=><Card key={index} name_={x.name} data_={x} index_={index}/>)}

        </div>
    </div>
  )
}
