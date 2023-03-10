import React, { useEffect, useState } from 'react'
import '../Card.css'
import {HiStar,HiFire} from 'react-icons/hi'
import {BsFillEyeFill,BsBugFill} from 'react-icons/bs'
import {TbNumber1,TbNumber0} from 'react-icons/tb'
import {AiOutlinePlus} from 'react-icons/ai'
import {ImLeaf,ImDroplet} from 'react-icons/im'
import {FaDragon,FaGhost,FaMoon,FaFistRaised,FaSnowflake, FaLeaf} from 'react-icons/fa'
import {GiElectric,GiFairyWings,GiLibertyWing,GiGroundbreaker,GiPoisonGas,GiCrossedSwords} from 'react-icons/gi'
import {SiRootsbedrock} from 'react-icons/si'
import {BiCircle} from 'react-icons/bi'
import { type } from '@testing-library/user-event/dist/type'


export const Card = ({data_,name_,abilities_,index_}) => {
    
    var [effect_$, setEffect_$]= useState([])
    var [effect_print_$, setEffectPrint_$] = useState([])
    var [effect_ready_$, setEffectReady_$]= useState(false)
    var [effect_id_$, setEffectId_$] = useState(0)
    var [imgSrc_$,setImgSrc_$] = useState('../images/Mewtwo_card.jpg')
    var [HP_$, setHP_$] = useState(0)
    var [type_$, setType_$] = useState('normal')
    var [weakness_$, setWeakness_$] = useState([])
    var [resistance_$, setResistance_$] = useState([])
    var [species_$, setSpecies_$] = useState('')
    var [imgbg_$, setImgbg_$] = useState('normal_')

    function imgBg_generator(type_){
        type_=='water'?setImgbg_$('water_'):
        type_=='flying'?setImgbg_$('flying_'):
        type_=='poison'?setImgbg_$('poison_'):
        type_=='bug'?setImgbg_$('bug_'):
        type_=='steel'?setImgbg_$('steel_'):
        type_=='fire'?setImgbg_$('fire_'):
        type_=='grass'?setImgbg_$('grass_'):
        type_=='dragon'?setImgbg_$('dragon_'):
        type_=='electric'?setImgbg_$('electric_'):
        type_=='ground'?setImgbg_$('ground_'):
        type_=='rock'?setImgbg_$('rock_'):
        type_=='ice'?setImgbg_$('ice_'):
        type_=='ghost'?setImgbg_$('ghost_'):
        type_=='fighting'?setImgbg_$('fighting_'):
        type_=='psychic'?setImgbg_$('psychic_'):
        type_=='normal'?setImgbg_$('normal_'):
        type_=='dark'?setImgbg_$('dark_'):
        type_=='fairy'?setImgbg_$('fairy_'):
        setImgbg_$('unknownType_')
    }
    function Type_({type_,small=false}){        
        return(
            <span className={`HP_icons ${type_}_`}>
                {/* <BsFillEyeFill className={`${type_}_i`}/>  */}
                {type_=='water'?<ImDroplet className={`${type_}_i ${small?'small_i':''}`}/>
                :type_=='flying'?<GiLibertyWing className={`${type_}_i ${small?'small_i':''}`}/>
                :type_=='poison'?<GiPoisonGas className={`${type_}_i ${small?'small_i':''}`}/>
                :type_=='bug'?<BsBugFill className={`${type_}_i ${small?'small_i':''}`}/>
                :type_=='steel'?<GiCrossedSwords className={`${type_}_i ${small?'small_i':''}`}/>
                :type_=='fire'?<HiFire className={`${type_}_i ${small?'small_i':''}`}/>
                :type_=='grass'?<FaLeaf className={`${type_}_i ${small?'small_i':''}`}/>
                :type_=='dragon'?<FaDragon className={`${type_}_i ${small?'small_i':''}`}/>
                :type_=='electric'?<GiElectric className={`${type_}_i ${small?'small_i':''}`}/>
                :type_=='ground'?<GiGroundbreaker className={`${type_}_i ${small?'small_i':''}`}/>
                :type_=='rock'?<SiRootsbedrock className={`${type_}_i ${small?'small_i':''}`}/>
                :type_=='ice'?<FaSnowflake className={`${type_}_i ${small?'small_i':''}`}/>
                :type_=='ghost'?<FaGhost className={`${type_}_i ${small?'small_i':''}`}/>
                :type_=='fighting'?<FaFistRaised className={`${type_}_i ${small?'small_i':''}`}/>
                :type_=='normal'?<BiCircle className={`${type_}_i ${small?'small_i':''}`}/>
                :type_=='psychic'?<BsFillEyeFill className={`${type_}_i ${small?'small_i':''}`}/>
                :type_=='dark'?<FaMoon className={`${type_}_i ${small?'small_i':''}`}/>
                :type_=='fairy'?<GiFairyWings className={`${type_}_i ${small?'small_i':''}`}/>
                :<BiCircle className='normal_i'/>
            }
            </span>
        )
    }

    function WordCount(str) { 
        return str.split(" ").length;
      }

    function Recost ({base_experience=0}){
        return(
            <span className='extra__recost-icons'>
                {base_experience>100&&base_experience<150 ? 
                <span className='extra__recost-icons'>
                <span className='recost_icons'>
                    <HiStar className='icon_recost-1'/>
                </span> 
                <span className='recost_icons'>
                <HiStar className='icon_recost-2'/>
                </span>    
                </span>    
                :
                base_experience>150 ? 
                <span className='extra__recost-icons'>
                    <span className='recost_icons'>
                        <HiStar className='icon_recost-1'/>
                    </span> 
                    <span className='recost_icons'>
                        <HiStar className='icon_recost-2'/>
                    </span>
                    <span className='recost_icons'>
                        <HiStar className='icon_recost-3'/>
                    </span> 
                </span>
                :
                <span className='extra__recost-icons'>
                <span className='recost_icons'>
                    <HiStar className='icon_recost-1'/>
                </span> 
                </span>
                }
                
            </span>
        )
    }  

    useEffect(()=>{
        fetch(data_.abilities[0].ability.url).then(res=>res.json()).then((res)=>{setEffect_$(prev=>[...prev, res]);setEffectReady_$(true)})
        fetch(data_.forms[0].url).then(res=>res.json()).then((res)=>{
            setType_$(res.types[0].type.name);
            fetch(res.types[0].type.url)
            .then(res_=>res_.json())
            .then(dataX=>dataX.damage_relations.double_damage_from.forEach(i=>setWeakness_$(prev=>[...prev, i.name]))) ;
            fetch(res.types[0].type.url)
            .then(resY=>resY.json())
            .then(dataY=>dataY.damage_relations.half_damage_from.forEach(i=>setResistance_$(prev=>[...prev,i.name])))
        })
        fetch(data_.species.url).then(res=>res.json()).then(res=>res.is_baby?setSpecies_$('baby'):res.is_legendary?setSpecies_$('legendary'):res.is_mythical?setSpecies_$('mythical'):setSpecies_$('basic'))
    },[])
    useEffect(()=>{
        
        if(effect_ready_$ && effect_$[0]!=undefined&&effect_$[0].effect_entries[0] !=undefined&&effect_$[0].effect_entries[0].language!=undefined ){
            if( effect_$[0].effect_entries[0].language != undefined && effect_$[0].effect_entries[0].language.name != undefined && (effect_$[0].effect_entries[0].language.name == 'en')) {setEffectPrint_$(prev=>[...prev,effect_$[0].effect_entries[0].effect]) ; setEffectId_$(effect_$[0].id) ;}
            else { setEffectPrint_$(prev=>[...prev,effect_$[0].effect_entries[1].effect]) ; setEffectId_$(effect_$[0].id) ;}
        }else if (effect_ready_$ && (effect_$[0]==undefined || effect_$[0].effect_entries[0]==undefined || effect_$[0].effect_entries[0].language == undefined)){setEffectPrint_$(prev=>[...prev,'Has no overworld effect.']); setEffectId_$(Math.round(Math.random()*9))}
    },[effect_ready_$])
    useEffect(()=>{
        if(data_.sprites.other.dream_world.front_default!=undefined){
            setImgSrc_$(data_.sprites.other.dream_world.front_default)
        }else if((data_.sprites.other['official-artwork'])!=undefined){
            setImgSrc_$(data_.sprites.other['official-artwork'].front_default)
        }
        else{setImgSrc_$(data_.sprites.other.home.front_default)}

        setHP_$(data_.stats[0].base_stat)
        imgBg_generator(data_.types[0].type.name)
    },[data_])

  return (
    <div className='Card_'>
        <div>
        <div className='Card_head'>
            <div className='head_con'>
                <p className='head__type'>
                    <span className={`type_s ${species_$=='baby' ? 's_baby':species_$=='legendary'?'s_leg':species_$=='mythical'?'s_myt':''}`}>{species_$}</span>
                {/* --type */}
                </p>
                <h3 className='head__name'>{name_ || 'Mewtwo'} 
                {/* --name */}
                </h3>
            </div>

            <div className='head_HP'>
                <div className='HP_con'>
                <span className='HP_value'> {HP_$} HP </span>
                {/* <span className='HP_icons'><BsFillEyeFill className='icon_HP'/></span> */}
                <Type_ type_={type_$}/>
                </div>

            {/* ++icon */}
            </div>
        </div>
        
        <div className={`Card_img-con ${imgbg_$}`}>
        <img src={imgSrc_$} className='Card__image'/>
        </div>

        <p className='Card_physical'>
            <span>&nbsp;{data_.types[0].type.name + ' ' + 'Pok??mon.' || 'Genetic Pok??mon.'}</span> 
            <span>&nbsp;{'Height ' + data_.height + ' dm.' || `Length 6'7",`}</span>
            <span>&nbsp;{'Weight ' + data_.weight/10} kg.</span>
        </p>
        </div>

        <div>
        <div className='Card_ability-1'>
            <div className='ability-1_icons'> 
                {/* <span className='icons_eye'><BsFillEyeFill className='eye_icon'/></span>
                <span className='icons_star'><HiStar className='star_icon'/></span> */}
                <span className='icons_con'><Type_ type_={type_$}/>{data_.base_experience<100&&<span className='icons_star'><HiStar className='star_icon'/></span> }</span>
            </div>
            <div className='ability-1__description'>
                <span className='ability-1__type'>  
                {/* {abilities_[0].ability.name || 'ability-1'} */}
                {/* --first_ability_type  */}
                </span>
                {effect_print_$[0] || 'effect in text'}
                 {/* --first_ability_description */}
            </div>
            <div className='ability-1_in-number'>

            {effect_id_$|| 'X'}

                    {/* <TbNumber1 className='icons_one'/>
                    <TbNumber0 className='icons_zero'/>
                <span className='icons_plus'> + </span> */}
            {/* --first_ability_in_number  */}
            </div>
        </div>
        </div>

                <div>
            <div className='Card_extra'>
                <div className='extra_con'>
                <div className='extra_item-1'>
                    <p className='extra__weakness'>weakness
                    {/* --weakness */}
                    </p>
                    <span className='extra__weakness-icons'>
                        {/* <span className='weakness_icons'>
                            <BsFillEyeFill className='icon_weakness'/>
                        </span> */}
                        {weakness_$.map((i,index)=> index<3 && (<Type_ type_={i} key={index*9} small={true}/>))}
                    </span>
                </div>
                <div className='extra_item-2'>
                    <p className='extra__resistance'>resistance 
                    {/* --resistance */}
                    </p>
                    <span className='extra__resistance-icons'>
                        {/* <span className='resistance_icons'>
                            <BsFillEyeFill className='icon_resistance'/>
                        </span> */}
                        {resistance_$.length!=0 ? resistance_$.map((i,index)=>index<3 && (<Type_ type_={i} key={index} small={true}/>)) : '-'}
                    </span>
                </div>
                <div className='extra_item-3'>
                    <p className='extra__recost'>retreat cost 
                    {/* --recost */}
                    </p>
                    {/* <span className='extra__recost-icons'> */}
                        {/* <span className='recost_icons'>
                            <HiStar className='icon_recost-1'/>
                        </span>
                        <span className='recost_icons'>
                            <HiStar className='icon_recost-2'/>
                        </span>
                        <span className='recost_icons'>
                            <HiStar className='icon_recost-3'/>
                        </span> */}
                        <Recost base_experience={data_.base_experience}/>
                    {/* </span> */}
                </div>
                </div>
            <div className='Card_ori'>
                <p className='ori_p'>
                 {/*--ori  */}
                    {/* <span className='ori_level'> LV.53 
                    
                    </span> */}
                    <span className='ori_id'> 
                    {/* --id */  ' '+'#'+data_.id || 'x'}
                    </span>
                </p>
            </div>
            </div>

            <div className='Card_-info'>
                <p className='info_illustrator'>iilus. Ken Sugimori 
                {/* --illustrator */}
                </p>
                <p className='info_creator'>c1995. 96 98 Nintendo Creatures, GAMEFREAK c 1999
                {/*  --creator */}
                </p>
                <p className='info_end'>xx/yyy
                {/*  --unknown_number */} 
                <span>
                    <HiStar className='icon_end'/>
                </span>
                </p>
            </div>
            </div>
    </div>
  )
}
