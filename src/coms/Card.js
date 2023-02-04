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

    useEffect(()=>{
        fetch(data_.abilities[0].ability.url).then(res=>res.json()).then((res)=>{setEffect_$(prev=>[...prev, res])})
        fetch(data_.abilities[1].ability.url).then(res=>res.json()).then((res)=>{setEffect_$(prev=>[...prev, res]); setEffectReady_$(true)})
        fetch(data_.forms[0].url).then(res=>res.json()).then((res)=>{
            setType_$(res.types[0].type.name);
            fetch(res.types[0].type.url)
            .then(res_=>res_.json())
            .then(dataX=>dataX.damage_relations.double_damage_from.forEach(i=>setWeakness_$(prev=>[...prev, i.name]))) ;
            fetch(res.types[0].type.url)
            .then(resY=>resY.json())
            .then(dataY=>dataY.damage_relations.half_damage_from.forEach(i=>setResistance_$(prev=>[...prev,i.name])))
        })
        // fetch(data_.forms[0].url).then(res=>res.json()).then(res=>fetch(res.types[0].type.url).then(res_=>res_.json()).then(da=>console.log(da)))
    },[])
    // console.log(weakness_$)
    useEffect(()=>{
        
        if(effect_ready_$){
            if(effect_$[0].effect_entries[0].language.name == 'en') setEffectPrint_$(prev=>[...prev,effect_$[0].effect_entries[0].effect])
            else setEffectPrint_$(prev=>[...prev,effect_$[0].effect_entries[1].effect])
            if(effect_$[1].effect_entries[0].language.name&&effect_$[1].effect_entries[0].language.name == 'en') setEffectPrint_$(prev=>[...prev,effect_$[1].effect_entries[0].effect])
            else setEffectPrint_$(prev=>[...prev,effect_$[1].effect_entries[1].effect])
            setEffectId_$(effect_$[0].id)
        }
    },[effect_ready_$])
    // console.log(effect_$)
    useEffect(()=>{
        setImgSrc_$(data_.sprites.other.dream_world.front_default)
        setHP_$(data_.stats[0].base_stat)
    },[data_])
  return (
    <div className='Card_'>
        <div className='Card_head'>
            <div className='head_con'>
                <p className='head__type'>Basic Pokémon
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
        
        <div className='Card_img-con'>
        <img src={imgSrc_$} className='Card__image'/>
        </div>

        <p className='Card_physical'>
            Genetic Pokémon. 
            <span>&nbsp;{'Height ' + data_.height + ' dm.' || `Length 6'7",`}</span>
            <span>&nbsp;{'Weight ' + data_.weight/10} kg</span>
        </p>

        <div className='Card_ability-1'>
            <div className='ability-1_icons'>
                <span className='icons_eye'><BsFillEyeFill className='eye_icon'/></span>
                <span className='icons_star'><HiStar className='star_icon'/></span>
            </div>
            <div className='ability-1__description'>
                <span className='ability-1__type'>  
                {/* {abilities_[0].ability.name || 'ability-1'} */}
                {/* --first_ability_type  */} &nbsp;
                </span>
                { effect_print_$[0] || 'effect in text'}
                 {/* --first_ability_description */}
            </div>
            <div className='ability-1_in-number'>

            {effect_id_$|| 'effect 1 id '}

                    {/* <TbNumber1 className='icons_one'/>
                    <TbNumber0 className='icons_zero'/>
                <span className='icons_plus'> + </span> */}
            {/* --first_ability_in_number  */}
            </div>
        </div>

        <div className='Card_ability-2'>
            <div className='ability-2_icons'>
                <span className='icons_eye'><BsFillEyeFill className='eye_icon'/></span>
                <span className='icons_eye-1'><BsFillEyeFill className='eye_icon'/></span>
            </div>
            <div className='ability-2_con'>
                <div className='ability-2__description'>
                {/* --second_ability_type */}
                <span className='ability-2__type'>
                {/* {abilities_[1].ability.name || 'ability-1'} &nbsp; */}
                </span>
                {effect_print_$[1] || 'effect 2 in text'}
                </div>
            </div>
        </div>

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
                        {resistance_$.map((i,index)=>index<3 && (<Type_ type_={i} key={index} small={true}/>))}
                    </span>
                </div>
                <div className='extra_item-3'>
                    <p className='extra__recost'>retreat cost 
                    {/* --recost */}
                    </p>
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
                </div>
                </div>
            <div className='Card_ori'>
                <p className='ori_p'>Ascientist created this Pokémon after years of horrific genesplicing and DNA engineering experiments. 
                 {/*--ori  */}
                    <span className='ori_level'> LV.53 
                    {/* --level */}
                    </span>
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
                <p className='info_end'>10/102
                {/*  --unknown_number */} 
                <span>
                    <HiStar className='icon_end'/>
                </span>
                </p>
            </div>

    </div>
  )
}
