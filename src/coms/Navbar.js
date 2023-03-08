import React, { useEffect } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
export const Navbar = () => {
    function hideBar (element_1,element_2){
        if(element_1){
            element_1.classList.toggle('hide_')
            element_2.classList.toggle('rotate_')
        }
    }
    useEffect(()=>{
        var N_ul_D = document.querySelector('.N_ul')
        var N_i_D = document.querySelector('.N_i')
        N_i_D.addEventListener('click',()=>hideBar(N_ul_D,N_i_D))
        if(window.innerWidth <= 768){N_ul_D.classList.add('hide_')}
        window.addEventListener('resize',()=>{if(window.innerWidth <= 768){N_ul_D.classList.add('hide_')}})
    },[])
  return (
    <div className='N_'>
        <ul className='N_ul'>
            <Link to='/home' className='N_li'>Home</Link>
            <Link to='/about' className='N_li'>About</Link>
            <Link to='/contact'className='N_li'>Contact</Link>
        </ul>
        <span className='N_i-con'><img className='N_i' src={require('../icons/N_icon.png')}/></span>

    </div>
  )
}
