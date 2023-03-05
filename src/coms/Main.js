import React from 'react'
import { SearchBar } from './SearchBar'
import '../App.css'
export const Main = ({searchV_$, setSearchV_$, allPokemons_$, setTrig_$}) => {
  return (
    <div className='M_'>
        <div className='M_bg'>
            <div className='M_ct'>
                <h1 className='M_h1'> MEET YOUR POKÉMON!</h1>
                <h3 className='M_h3'> THE BEST PLACE TO TAKE A LOOK OVER POKÉMONS </h3>
                <SearchBar searchV_$={searchV_$} setSearchV_$={setSearchV_$} allPokemons_$={allPokemons_$} setTrig_$={setTrig_$}/>            
                </div>
        </div>
    </div>
  )
}
