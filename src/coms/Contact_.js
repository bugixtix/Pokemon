import React, {useEffect, useState}from "react";
import '../App.css'
import { dynamicStyle$, _window427$, _window768$ } from "../lainy";
import {Navbar} from './Navbar'
export function Contact_ ( prop ){


    let [infos_$, setInfos_$] = useState({name:'', email:'', title:'', comment:''})

    var handleChange = (event) => {
        const {name, value, type} = event.target
        setInfos_$((prev)=>({
            ...prev, [name] : value
        }))
    }

    var handleSubmit = (event) => {
        event.preventDefault()
        console.log(infos_$)
    }
    var main_ = {
        width:'100%',
        height:'100vh',
        position:'relative',
        background:`linear-gradient(#e66465, #9198e5), url(${require('../images/contact_I_bg.jpg')})`,
        backgroundPosition:'left',
        backgroundBlendMode:'saturation',
        display:'flex',
        flexDirection:'column',
    }
    var outDiv_1 = {
        width:'100%',
        height:'90%',
        position:'relative',
        // background:`${dynamicStyle$('linear-gradient(#000,#111)',!prop.darkMode_$,'linear-gradient(#e66465, #9198e5)')} ,url(${require('../imges/contact_I_bg.jpg')})`,
        // backgroundPosition:'left',
        // backgroundBlendMode:dynamicStyle$('saturation',!prop.darkMode_$,'darken'),
        display:'flex',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        zIndex:'1',

        // margin:'2em 0px ',
        // boxShadow:dynamicStyle$('2px 2px 10px 4px rgba(100,100,100,0.8)',prop.darkMode_$,'2px 2px 6px 4px rgba(20,20,20,0.6)'),

    }
    var in1Div_ = {
    }
    var fieldset_s = {
        padding:'20px',
        postion:'relative',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        zIndex:'2',
        // margin:dynamicStyle$('0em 2em 0em 2em',_window768$(),'4px',_window427$(),'2px'),
        border:'none',
        boxShadow:'5px 5px 7px -1px #333',
        background:'#2b2e42bb',
        
    }
    var legend_s = {
        fontWeight:'600',
        textShadow:'1px 2px #7ee',
        padding:'4px 0px',
        margin:'4px 6px',
        borderRadius:'24px',
        zIndex:'2',
        
    }
    var inDiv_2 = {
        display:'flex',
        flexWrap:'wrap',
    }
    var input_1 = {
        // maxWidth:dynamicStyle$('174px',_window768$(),'92px',_window427$(),'100px'),
        padding:'4px 12px',
        background:'#161b3344',
        // border:'none',
        margin:'4px',
        color:'#f1dac4',
        borderRadius:'20px',
        textTransform:'uppercase',
        letterSpacing:'1px'
    }
    var input_2 = {
        // width:dynamicStyle$('274px',_window768$(),'199px',_window427$(),'174px'),
        padding:'4px 12px',
        backgroundColor:'#161b3344',
        // border:'3px solid #ded',
        margin:'4px',
        color:'#f1dac4',
        borderRadius:'20px',
        textTransform:'uppercase',
        letterSpacing:'1px'
    }
    var input_3 = {
        padding:'4px 12px',
        backgroundColor:'#161b3344',
        // border:'2px solid #ded',
        margin:'4px',
        color:'#f1dac4',
        borderRadius:'20px',
        // width:dynamicStyle$('456px',_window768$(),'300px',_window427$(),'274px'),
        textTransform:'uppercase',
        letterSpacing:'1px'
    }
    var input_4 = {
        padding:'8px 12px',
        margin:'4px',
        height:'100px',
        borderRadius:'20px',
        backgroundColor:'#161b3344',
        resize:'none',
        color:'#f1dac4',
        // width:dynamicStyle$('456px',_window768$(),'300px',_window427$(),'274px'),
        borderWidth:'2px',
        borderStyle:'inset',
        textTransform:'uppercase',
        letterSpacing:'1px'
    }
    var btn_1 = {
        // width:dynamicStyle$('456px',_window768$(),'300px',_window427$(),'274px'),
        background: 'linear-gradient(217deg, rgba(0,0,0,.8),rgba(2,0,0,0) 70.71%), linear-gradient(127deg,rgba(0,255,0,.8),rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)',
        border:'none',
        borderRadius:'12px',
        padding:'8px',
        margin:'4px 0px',
        cursor:'pointer',
        color:'#dee',
        transition:'all ease 250ms',
        textTransform:'uppercase',
        letterSpacing:'2px'

    }

    var in2Div_ = {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        padding:'8px',
        background:'#f1dac4ee',
        boxShadow:'5px 5px 7px -1px #333',
        // width:dynamicStyle$('auto', _window768$(), '348px', _window427$(), '348px')
    }
    var h2_s = {
        padding:'4px 0px',
        textAlign:'center'
        // color:'#f1dac4'
    }
    var p_s = {
        textAlign:'center'
        // color:'#f1dac4'
    }
    return(

        <div style={main_}> 

        <Navbar />

        {/* // className={'contact--'} */}
        <div style={outDiv_1}>
            <br></br>
            {/*  className='contact--extra--' */}
            {/* <div style={outDiv_2}>

            </div> */}
            <div style={in2Div_} className={'Contact_in2'}>
                <h2 style={h2_s} className={'uppercase _600'}>you have something in mind?</h2>
                <p style={p_s} className={'uppercase _26 _600'}>well send me a message</p>
            </div>
            {/* className={'form_icons'} */}
            <div style={in1Div_}>
                {/* className='contact--form' */}
            <form onSubmit={handleSubmit}>
                {/*  className='contact--form' */}
                <fieldset style={fieldset_s} className='Contact_fs'>
                {/* className='feedback_' */}
                {/* <legend style={legend_s}>Feedback</legend> */}
                {/* className='name_email_--' */}
                <div style={inDiv_2}>
                    {/* id={'name_'} ; id={'email_'}*/ }
                <input style={input_1} type='text' name='name' placeholder='your name' className="Contact_input1" required value={infos_$.name} onChange={handleChange} />
                <input style={input_2} type='email' name='email' placeholder='your email' className="Contact_input2" required value={infos_$.email} onChange={handleChange} />
                </div>
                {/*  id={'title_'};id={'comment_'};id={'submit_'}; */}
                <input style={input_3} type='text' placeholder='subject' className="Contact_input3" name='title' value={infos_$.title} onChange={handleChange} />
                <textarea style={input_4} type='comment'  className='comment_ Contact_input4' placeholder='message' name='comment' value={infos_$.comment} onChange={handleChange} required/>
                <button style={btn_1} type='submit' className="Contact_btn">send message</button>
                </fieldset>
            </form>

            {/* className='contact_icons--' */}
            
            </div>

        </div>

        </div>
    )
}
