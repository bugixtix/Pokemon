import React,{useEffect} from "react";
import { dynamicStyle$, _window427$, _window768$ } from "../lainy";
import { Navbar } from "./Navbar.js";
import '../App.css'

export default function About_ (prop){

    var img_s = {
        width:'100%',
    }
    var h2_s = {
        padding:'8px 0px',
        color:'#fff'
    }
    var p_s = {
        color:'#fff'
    }

    var aboutUs = "Hi, my name is Housam. I am a flexible and experienced web designer with excellent time management skills. I am a good communicator with proven inter personal skills and am used to working in a team whilst also being capable of using own initiative. I am skilled In dealing with problems in a resourceful manner and negotiating to achieve beneficial agreement. I am always enthusiastic to learn and undertake new challenges."
    return(
        <div className='About_'>
            <Navbar/>
        <div className='About_out'>
            <div className='About_in1'>
                <h2 className={'uppercase _42 _600 About_h'}>About Me</h2>
                <p className={'About_p'}>
                    {aboutUs}
                </p>
            </div>
            <div className='About_in2'>
            <img style={img_s} src={require('../images/webdev.jpg')}></img>
            </div>
        </div>
        </div>
    )
}